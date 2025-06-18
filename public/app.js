/***************************************************************
 * This will hold the code for the general app processes
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    // USER PROCESSING

        // Refreshes and resyncs user info
        async function refreshUserState()
        {
            const auth = window.firebaseAuth;

            if(auth.currentUser) 
            {
                await auth.currentUser.reload();
                window.uvidUser = auth.currentUser;
                window.uvidUserVrfd = !!auth.currentUser.emailVerified;
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
            notification(`notifyBad` , `Signing Out`);
            toggleNavBarUnderLayer();

            // Remove the beforeunload listener
            window.removeEventListener("beforeunload" , b4UnloadHandler);

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
            documentBody.appendChild(delAccBdr);
    
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
                    && pass.match(userPass_Cond_Lett_Upr)
                    && pass.match(userPass_Cond_Lett_Lwr)
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
                if(isPass == true) proceedToDelAcc(delAccInput.value);

                delAccBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                delAccInput.value = "";
                delAccInput.disabled = true;
                delAccBtn.disabled = true;
                delAccBdr.classList.remove("active");
                
                delAccBdr.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    delAccBdr.removeEventListener("transitionend" , handleTransitionEnd);
                    documentBody.removeChild(delAccBdr);
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
                return true;
            } 
            catch (error) 
            {
                notification(`notifyBad`, "Incorrect password");
                console.error("Reauthentication failed:", error);
                return false;
            }
        }


        // Deleting the user's account
        async function proceedToDelAcc(password)
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;
            const authB4Del = await reauthB4DelAcc(password);

            if((authB4Del)) 
            {
                // Delete all user's information
                const proDelReq = async () => 
                {
                    await firebase.firestore().collection("users").doc(user.uid).delete();
                    await user.delete();
                    notification(`notifyGood`, "Account deleted. Goodbye for now :(");
                    window.location.hash = "#/landing";
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
        }

    