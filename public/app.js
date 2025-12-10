/***************************************************************
 * This will hold the code for the general app processes
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    // UVID+ PWA

        // Check if the Uvidplus' PWA is alreaady installed
        function isPWAInstalled()
        {
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
            const isFullscreen = window.matchMedia('(display-mode: fullscreen)').matches;
            const isIosStandalone = window.navigator.standalone === true; // iOS Safari

            return isStandalone || isFullscreen || isIosStandalone;
        }

        // Call Suggestion prompt once after initial load
        function preInstallPrompt()
        {
            if(!isUserSignedIn() || isPWAInstalled() || localStorage.getItem('uvidplus_installed') === 'true') return;

            localStorage.setItem('uvidplus_installed', 'true');
            setTimeout(hdlB4InstallPrompt, 2500);
        }

        // Suggest installing Uid+ to the user
        function hdlB4InstallPrompt()
        {
            initConfirmModal(
                `Add Uvid+ to your desktop/home screen?`,
                `This allows for a more seamless native experience. You can always do this later in settings`,
                `Let's do it`,
                `Not now`,
                hdlCstmInstallClick
            );
        }

        // Initiate prompt to install Uvid+
        async function hdlCstmInstallClick()
        {
            // Install if supported
            if(window.deferredInstallPrompt)
            {
                window.deferredInstallPrompt.prompt();
                window.deferredInstallPrompt = null;
                return;
            }

            // Fallback: show instructions article
            const opnInstallHelpPage = () => window.open('#/help/article/60953494', '_self');
            initConfirmModal(
                `Manual install needed`,
                `Automatic installation failed. Install manually in a few easy steps.`,
                `Continue`,
                `Cancel`,
                opnInstallHelpPage
            );
        }



    // USER PROCESSING

        // Refreshes and resyncs user info
        async function refreshUserState()
        {
            const auth = window.firebaseAuth;

            if(auth.currentUser) 
            {
                await auth.currentUser.reload();
                await auth.currentUser.getIdToken(true);
                window.uvidUser = auth.currentUser;
                window.uvidUserVrfd = !!auth.currentUser.emailVerified;
            }
            else
            {
                console.error("User state refresh failed")
            }
        }

        // Checks if the user is signed in
        function isUserSignedIn()
        {
            return !!window.uvidUser;
        }

        // Gets the info of the signed in user
        function getSignedInUser() 
        {
            return window.uvidUser;
        }

        // Checks if the user is verified
        function isUserVerified()
        {
            return window.uvidUserVrfd;
        }

        // Gets the currently signed in user's data
        async function getUserData()
        {
            const user = window.uvidUser;

            if (!user) 
            {
                // console.warn("No signed-in user.");
                return null;
            }

            const db = window.firebaseDB;
            const docRef = db.collection("uvp_fb_users").doc(user.uid);
            const docSnap = await docRef.get();

            // Return the user's data if it exists
            if (docSnap.exists) 
            {
                return docSnap.data();
            }
            else
            {
                console.warn("User data not found.");
                return null;
            }
        }

        // Updates the currently signed in user's data
        async function updateUserData(updates) 
        {
            const user = window.uvidUser;
            
            if (!user) 
            {
                console.warn("No signed-in user.");
                return;
            }

            const db = window.firebaseDB;
            await db.collection("uvp_fb_users").doc(user.uid).update(updates);
        }

        // Checks membership status after a period of time
        function mbspStatusTmr()
        {
            let prd = 1000 * 60 * 1; // 1 minute
            let tmr_interval;

            tmr_interval = setInterval(() => 
            {
                handleMbspStatus();
            }, prd);
        }

        // Check & Update membership status
        async function handleMbspStatus()
        {
            // Return if user isn't signed in
            if(!(getSignedInUser())) return;

            const userData = await getUserData();
            const isUsrMmbr = userData?.is_membership_active;

            // Return if user membership is inactive
            if((isUsrMmbr == null) || (typeof isUsrMmbr !== "boolean") || (isUsrMmbr != true)) return;


            const isMbspAuto = userData?.curr_plan?.curr_plan_next;
            const daysLeft = getDiffBtwDates(getCurrDate("short"), userData?.curr_plan?.curr_plan_end);

            // Auto-renewal is turned on
            if((typeof isMbspAuto === "string") && (isMbspAuto.trim() !== ""))
            {
                // Restart membership
                if(daysLeft < 1)
                {
                    try
                    {
                        let start_date = getCurrDate("short");
                        let end_date = getNextDate(start_date, membership_BILL_CYCLE, "short");
                        let currBillHist = userData?.billing_hist || [];
                        const plan_obj = uvid_signup_plans[isMbspAuto];

                        if(!(typeof plan_obj !== "undefined") && (typeof plan_obj === "object") && (plan_obj !== null)) 
                        {
                            console.error("Failed to update membership state");
                            return;
                        }

                        // Push new billing details
                        currBillHist.push(
                            {
                                bill_plan_id: `${isMbspAuto}`,
                                bill_plan_name: `${plan_obj.plan_name}`,
                                bill_plan_price: `${plan_obj.plan_price_month}`,
                                bill_plan_date: `${start_date}`,
                                bill_plan_status: null,
                            }
                        );

                        // Update user data
                        await updateUserData(
                        {
                            is_3_day_ntc: false,
                            billing_hist: currBillHist,
                            curr_plan: 
                            {
                                curr_plan_id: `${isMbspAuto}`,
                                curr_plan_start: `${start_date}`,
                                curr_plan_end: `${end_date}`,
                                curr_plan_next: `${isMbspAuto}`,
                            },
                        });

                        // Notify the user
                        generateNotificationMsg(
                            `Membership renewed`,
                            `
                                Your Uvid+ membership was automatically renewed on ${start_date}.
                                Your next billing date is on ${end_date}.
                            `,
                            `View Membership`,
                            `#/settings/membership/manage`,
                            ``,
                            `Failed to set 'Renewal Success' notification`
                        );

                        // Refresh to display changes
                        refreshPage();
                    }
                    catch(error)
                    {
                        console.error("Failed to update membership state");
                        console.error(error);
                    }
                }
            }
            
            // Auto-renewal is turned off
            else if((isMbspAuto == null))
            {
                // Check if the user has already been notified
                let exp3DayNtc = userData?.is_3_day_ntc;

                // Membership expired
                if((daysLeft < 1))
                {
                    // Update membership status
                    await updateUserData(
                    {
                        is_membership_active: false
                    });

                    // Refresh to display changes
                    refreshPage();
                }
                // Membership expiring soon
                else if((daysLeft >= 1) && (daysLeft <= 4))
                {
                    // Return if user has already been notified
                    if((exp3DayNtc == true)) return;

                    // Notify the user
                    generateNotificationMsg(
                        `Membership expiring soon`,
                        `
                            Your Uvid+ membership expires soon (on ${userData?.curr_plan?.curr_plan_end}). 
                            As auto-renewal is turned off, all services will be halted after expiration.
                            You can renew your membership now to continue your uninterrupted streaming.
                        `,
                        `Renew Membership`,
                        `#/settings/membership/manage`,
                        ``,
                        `Failed to set 3-day notification of expiration`
                    );

                    // Update flag
                    await updateUserData(
                    {
                        is_3_day_ntc: true
                    });

                    // Refresh to display changes
                    refreshPage();
                }
            }
        }

        // Uvid+ membership is expired
        async function usrMbspExp()
        {
            init_setup();
            msg_mbsp_exp();
        }

    
    
    // PROFILE

        // Fetches the user profiles
        async function getUsrProfInv() 
        {
            let usrData = await getUserData();
            return usrData?.profiles;
        }

        // Updates the user profiles
        async function updUsrProfFlds(fldsToUpd, profId = null) 
        {
            const userData = await getUserData(); 
            const profEntries = Object.entries(userData?.profiles);
            let selectedEntry = null;

            if((profId != null) && (typeof profId === "string") && (profId !== ""))
            {
                selectedEntry = profEntries.find(([key, prof]) => key === profId);
            }
            else if((profId == null))
            {
                selectedEntry = profEntries.find(([key, prof]) => prof.prof_selected);
            }
            
            // Return iff no profile is found
            if((typeof selectedEntry !== "object") || (selectedEntry == null))
            {
                notification(`notifyBad`, "Profile not found");
                return;
            }

            const selectedProfileKey = selectedEntry[0];

            // Build update object with full Firestore paths
            const updateObj = {};

            for(const [fld, value] of Object.entries(fldsToUpd)) 
            {
                updateObj[`profiles.${selectedProfileKey}.${fld}`] = value;
            }

            // Update objects in Firestore
            try
            {
                await updateUserData(updateObj);
            }
            catch(err)
            {
                console.error("Multi-field update failed:", err);
                notification(`notifyBad`, "Failed to save changes.");
            }
        }

        // Gets the currently selected profile
        async function getSelectedProfile()
        {
            const usrData = await getUserData();
            return Object.values(usrData?.profiles).find(item => item.prof_selected) || null;
        }

        // Gets the details of provided profile id
        async function getUsrProfFld(prof_id)
        {
            const usrData = await getUserData();
            return Object.entries(usrData?.profiles).find(([key, profile]) => key === prof_id);
        }

    
    
    // SIGN OUT

        function attachSignOutEventlisteners()
        {
            let navBarSignOutBtn = document.querySelectorAll(".navBarSignOutBtn");

            navBarSignOutBtn.forEach((btn) => 
            {
                if(btn.atn)
                {
                    btn.removeEventListener("click" , btn.atn);
                }
            });

            navBarSignOutBtn.forEach((btn) => 
            {
                const action = () =>
                {
                    cfrmB4SignOut();
                }
                btn.addEventListener("click" , action);
                btn.atn = action;
            });
        }

        function cfrmB4SignOut()
        {
            initConfirmModal(
                `Are you sure you want to sign out?`,
                null,
                `Yes`,
                `No`,
                accountSignOut
            );
        }

        function accountSignOut()
        {
            notification(`notifyBad` , `Signed Out`);
            toggleNavBarUnderLayer();

            // Remove the signed in user from local storage
            const auth = window.firebaseAuth;

            accountSignOutTimer = setTimeout(() => 
            {
                clearTimeout(accountSignOutTimer);
                auth.signOut()
                .then(() => 
                {
                    navbarUnderlayer.classList.remove("active");
                    // Go to landing page
                    window.open(`#/landing` , `_self`);
                })
                .catch((error) => 
                {
                    console.error("Sign out failed:", error);
                    notification(`notifyBad`, "Something went wrong while signing out.");
                    navbarUnderlayer.classList.remove("active");
                });
            }, 2500);
        }



    // DELETING ACCOUNT

        function attachDelAccEventListeners()
        {
            let delAccBtn = document.querySelectorAll(".del_acc_btn");

            delAccBtn.forEach((oldDelBtn) => 
            {
                if(oldDelBtn.perm_del_)
                {
                    oldDelBtn.removeEventListener("click" , oldDelBtn.perm_del_);
                }
            });

            delAccBtn.forEach((newDelBtn) => 
            {
                const del_atn = () => 
                {
                    cfrmB4DelAcc();
                }

                newDelBtn.addEventListener("click", del_atn);
                newDelBtn.perm_del_ = del_atn;
            });
        }

        // Confirm before deletion
        function cfrmB4DelAcc()
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if no user is signed in
            if(!user)
            {
                notification(`notifyBad`, "No user is currently signed in.");
                return;
            }

            initConfirmModal(
                `Are you trying to delete your account?`,
                `Press "Cancel" if you are trying to sign out`,
                `Proceed`,
                `Cancel`,
                validateDelReq
            );
        }

        // Request password before proceeding
        function validateDelReq(btnEv)
        {
            // Reauthenticate user before proceeding to deletion
            async function reauthB4DelAcc(password) 
            {
                const auth = window.firebaseAuth;
                const user = auth.currentUser;

                // Return if no user is signed in
                if(!user)
                {
                    notification(`notifyBad`, "No user is currently signed in.");
                    return false;
                }

                const email = user.email; // Use email from current session
                const credential = firebase.auth.EmailAuthProvider.credential(email, password);

                try
                {
                    await user.reauthenticateWithCredential(credential);
                    proceedToDelAcc();
                } 
                catch (error) 
                {
                    notification(`notifyBad`, "Incorrect password");
                    console.error("Reauthentication failed:\n", error);
                }
            }


            // Deleting the user's account
            async function proceedToDelAcc()
            {
                const auth = window.firebaseAuth;
                const user = auth.currentUser;

                // Delete all user's information
                const proDelReq = async () => 
                {
                    try 
                    {
                        await firebase.firestore().collection("uvp_fb_users").doc(user.uid).delete();
                        await user.delete();
                        notification(`notifyGood`, "Account deleted. Goodbye for now :(");
                        window.location.hash = "#/landing";
                    }
                    catch(error)
                    {
                        console.error(error);
                        notification(`notifyBad`, "Account deleted failed");
                    }
                }

                // Confirm one final time
                initConfirmModal(
                    `Are you sure you want to delete your account?`,
                    `Once deleted, it CANNOT be recovered`,
                    `Delete`,
                    `Cancel`,
                    proDelReq
                );
            }
            
            if((!window.hasEmPswdOrigin || window.hasEmPswdOrigin == false))
            {
                const auth = window.firebaseAuth;
                const user = auth.currentUser;
                const provider = new firebase.auth.GoogleAuthProvider();

                user.reauthenticateWithPopup(provider)
                    .then(() => proceedToDelAcc())
                    .catch((error) => console.error(error));
            }
            else
            {
                const delAccBdr = document.createElement("div");
                delAccBdr.classList.add("genAtnModalBdr");
                delAccBdr.innerHTML = 
                `
                    <div class="genAtnModalBcg closeDelAccBtn"></div>
                    <div class="genAtnModalBox">
                        <div class="genAtnModalCtnt">
                            <div class="genAtnModalHeader">
                                <div class="genAtnModalHeaderIconBox closeDelAccBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </div>
                                <div class="genAtnModalHeaderText">
                                    <span class="large">C</span>
                                    <span class="small">onfirm password</span>
                                </div>
                            </div>
                            <div class="genAtnModalOptBcg createProfItemBcg">
                                <div class="genAtnModalOptBdr createProfItemBox">
                                    <div class="newCLBdr active">
                                        <div class="newCLBox">
                                            <div class="newCLInputBdr">
                                                <div class="newCLInputBox">
                                                    <input type="password" name="delPassField" id="delAccInputId" class="newCLInputClass" placeholder="Enter your password" />
                                                </div>
                                            </div>
                                            <div class="newCLWarnBdr">
                                                <div class="newCLWarnBox">
                                                    <p id="delAccWarnId" class="newCLWarnText" tabindex="-1"></p>
                                                </div>
                                            </div>
                                            <div class="newCLAtnBdr">
                                                <div class="newCLAtnBox">
                                                    <button type="button" id="cfrmDelPass" class="genBtnBox midSolidBtn">
                                                        <div class="genBtnText">Confirm</div>
                                                    </button>
                                                    <button type="button" id="cnclDelPass" class="genBtnBox hollowBtn closeDelAccBtn">
                                                        <div class="genBtnText">Cancel</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                documentCtnt.appendChild(delAccBdr);
        
                const delAccCloseBtn = document.querySelectorAll(".closeDelAccBtn");
                const delAccWarn = document.querySelector("#delAccWarnId");
                const delAccInput = document.querySelector("#delAccInputId");
                const delAccBtn = document.querySelector("#cfrmDelPass");
                const del_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
                let delApArray = [];
                let isUserPassValid = false;
                let delAccTimer;
        
                // Disabling btn to prevent multiple calls
                if(typeof btnEv !== "undefined") btnEv.disabled = true;
        
                // Transitioning elements
                delAccTimer = setTimeout(() => 
                {
                    documentBody.setAttribute(`data-modal-state` , `open`);
                    delAccBdr.classList.add("active");
                    clearTimeout(delAccTimer);
                }, 250);
                
                // Automatically focus on input feild after transition
                delAccBdr.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    delAccBdr.removeEventListener("transitionend" , handleTransitionEnd);
                    delAccInput.focus();
                });

                // Allow any character but whitespaces
                delAccInput.addEventListener("beforeinput", (event) => 
                {
                    if(event.data != null && !(del_pass_cond).test(event.data))
                        event.preventDefault();
                });

                // Validate password
                function valDelPass(event) 
                {
                    delApArray.length = 0;
                    delApArray.push(delAccInput.value);
                    let lastPassArrayVal = delApArray.at(-1);
                    const userPass_Cond_SpecialChar = /\W/g;
                    const userPass_Cond_num = /\d/g;
                    const userPass_Cond_Lett_Upr = /[A-Z]/g;
                    const userPass_Cond_Lett_Lwr = /[a-z]/g;

                    // Checks if there is any value in the input feild
                    if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                    {
                        isUserPassValid = false;
                    }
                    // Checks if the pattern is less "8" characters and above than "100" characters
                    else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)))
                    {
                        isUserPassValid = false;
                    }
                    // Checks if the input fits the specified pattern
                    else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                        && lastPassArrayVal.match(userPass_Cond_Lett_Upr)
                        && lastPassArrayVal.match(userPass_Cond_Lett_Lwr)
                        && lastPassArrayVal.match(userPass_Cond_num)
                    ))
                    {
                        isUserPassValid = false;
                    }
                    // If all checks are completed then it is accepted
                    else
                    {
                        isUserPassValid = true;
                    }
                }
                
                delAccInput.addEventListener("input", valDelPass);
        
                // Validate pass by pressing the "Enter" key
                delAccInput.addEventListener("keyup" , (e) => 
                {
                    if((typeof e === undefined) || (typeof e.key === "undefined")) return;

                    if((e.key.toLowerCase() === "enter"))
                    {
                        delAccBtn.click();
                    }
                });
        
                // Get pass input for verification
                delAccBtn.addEventListener("click" , () => 
                {
                    if(isUserPassValid == true)
                    {
                        delAccInput.disabled = true;
                        delAccBtn.disabled = true;
                        closeDelAcc(true);
                    }
                    else
                    {
                        notification(`notifyBad`, "Invalid password");
                        closeDelAcc();
                    }
                });
        
                // Closes the delAcc modal
                function closeDelAcc(isPass = false)
                {
                    if(isPass == true) reauthB4DelAcc(delAccInput.value);

                    delAccBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                    delAccInput.value = "";
                    delAccInput.disabled = true;
                    delAccBtn.disabled = true;
                    delAccBdr.classList.remove("active");
                    
                    delAccBdr.addEventListener("transitionend" , function handleTransitionEnd()
                    {
                        delAccBdr.removeEventListener("transitionend" , handleTransitionEnd);
                        delAccBdr.remove();
                        documentBody.removeAttribute(`data-modal-state`);
                        if(typeof btnEv !== "undefined") btnEv.disabled = false;
                    });
                }
        
                // Closes the modal
                delAccCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeDelAcc);
                });
            }
        }

    