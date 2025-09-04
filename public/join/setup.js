/*************************************************************
 * This is the script for the Setup page of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    // Initialize the intro page
    function initSignUpForm()
    {
        documentBody.classList.add("bodystop");
        documentCtnt.insertAdjacentHTML(`beforeend` , signup_base);
        topNavBar.innerHTML = signup_nav;
        topNavBar.classList.add("initialize");
        switch_step();
    }

    // Init setup section (Available after user creates an account)
    function init_setup()
    {
        history.replaceState(null, '', '#/setup');
        preload.classList.add("preloadClose");
        documentCtnt.insertAdjacentHTML(`beforeend` , signup_base);
        topNavBar.innerHTML = setup_nav;
        topNavBar.classList.add("initialize");
        attachSignOutEventlisteners();
    }

    // Message for users with expired memberships
    function msg_mbsp_exp()
    {
        document.querySelector(".join_area").innerHTML = mbsp_exp_ntc;
        let ds = document.querySelector(".mbsp_exp_ntc_btn");

        ds.onclick = async () => 
        {
            try
            {
                await updateUserData(
                {
                    stp_steps: 2
                });
                switch_step(2);
            }
            catch(error)
            {
                console.error(error)
                notification(`notifyBad`, `An error occurred. Try reloading the page`);
            }
        }
    }

    // Switch sign up steps
    function switch_step(step = "dflt")
    {
        let step_no = Number(step.toString().trim().replace(/\s+/g, ' '));
        let jn_area = document.querySelector(".join_area");

        // Scroll back to top
        document.querySelector(".join_fence").scrollTo(0,0);

        // Perform an action based on step
        if(step_no == 1)
        {
            jn_area.innerHTML = signup_1;
            init_signup_1();
        }
        else if((step_no == 2))
        {
            jn_area.innerHTML = signup_2;
            init_signup_2();
        }
        else if((step_no == 3))
        {
            jn_area.innerHTML = "";
            init_signup_3();
        }
        else
        {
            jn_area.innerHTML = signup_intro;
            init_signup_intro();
        }
    }

    // Pass field toggle
    function tgl_pass_fld_state()
    {
        const passFld = document.querySelectorAll(".form_PassBox .form_Pass");
        const tglPassBtn = document.querySelectorAll(".form_input_box .togglePass_btn");

        // Unhides the icon to change the input type of the password
        passFld.forEach((field, i) => 
        {
            field.addEventListener("input" , () => 
            {
                // if the length is greater than zero unhide icon
                if(field.value.length > 0)
                {
                    tglPassBtn[i].classList.add("active");
                    return;
                }
                // if less than zero covert type back to password and hide icon
                field.type = "password";
                tglPassBtn[i].classList.remove("active");
            });
        });

        // Allows user to change input type for password in order to see password via onclick
        tglPassBtn.forEach((one, i) => 
        {
            one.addEventListener("click" , () => 
            {
                if(one.getAttribute("visibility") === "open")
                {
                    passFld[i].type = "password";
                    one.removeAttribute("visibility");
                    return;
                }
                passFld[i].type = "text";
                one.setAttribute("visibility", "open");
            });
        });
    }

    // Initialize important reminder
    function init_signup_rmnd()
    {
        document.querySelector(".join_fence").scrollTo(0,0);
        document.querySelector(".join_area").innerHTML = signup_ntc;

        let joinNtcBtn = document.querySelector(".join_ntc_btn");

        joinNtcBtn.onclick = () => 
        {
            switch_step(1);
        }
    }

    // Initialize the sign up intro
    function init_signup_intro()
    {
        let introSbtBtn = document.querySelector(".join_intro_submitBtn");

        introSbtBtn.onclick = () => 
        {
            init_signup_rmnd();
        }
    }

    // Initialize sign up form (Step 1)
    function init_signup_1()
    {
        // Definitions

            // See & Hide password
            tgl_pass_fld_state();

            // All Form fields
            const allFormFields = document.querySelectorAll(".form_input_bdr .form_input_field");

            // Full name
            const newFullName = document.querySelector("#form_signUp_fullname");
            const newFullNameWarn = document.querySelector("#form_signUp_fullnameWarn");
            let isFullNameValid = false;

            // Email
            const new_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
            const newEmail = document.querySelector("#form_signUp_email");
            const newEmailWarn = document.querySelector("#form_signUp_emailWarn");
            let isEmailValid = false;

            // Password
            const new_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
            const newPassword = document.querySelector("#form_signUp_pass");

            // Conditions for password
            const newPassInputBdr = document.querySelector(".form_Pass_input_bdr");
            const newPassCondBox = document.querySelector(".form_condBox");

            const newPassLength = document.querySelector(".listItem_ctnt.passLength");
            const newPassLetterUpr = document.querySelector(".listItem_ctnt.passLetterUpr");
            const newPassLetterLwr = document.querySelector(".listItem_ctnt.passLetterLwr");
            const newPassNumber = document.querySelector(".listItem_ctnt.passNumber");
            const newPassSpecChar = document.querySelector(".listItem_ctnt.passSpecChar");

            // Boolean variables for each event. Only true if condition is met
            let isPassLengthValid = false;
            let isPassLetterValid = false;
            let isPassNumberValid = false;
            let isPassSpecCharValid = false;

            // The final validation. This is only true if all booleans of the conditions are true
            let isPassValid = false;

            // Submitting info
            const signUpBtn = document.querySelector("#signUp_btn");
            signUpBtn.disabled = false;


        // Validates Input for Username

            // Conditions -
            /**
             *  1 - At least two (2) non-whitespace characters separated by a space
             */
            
            function validateFullName(event)
            {
                let fname = newFullName.value.toString().trim();
                let fullName_Condition = /^\s*\S+(?:\s+\S+)+\s*$/;

                // Checks if empty
                if((event.data == null) && (fname === ""))
                {
                    newFullNameWarn.textContent = "Required";
                    newFullNameWarn.classList.add("active");
                    isFullNameValid = false;
                }
                // Checks if Full name was entered
                else if(!(fullName_Condition.test(fname)))
                {
                    newFullNameWarn.textContent = "First and last name required";
                    newFullNameWarn.classList.add("active");
                    isFullNameValid = false;
                }
                else
                {
                    newFullNameWarn.textContent = "";
                    newFullNameWarn.classList.remove("active");
                    isFullNameValid = true;
                } 
            }

            newFullName.addEventListener("input" , validateFullName);

            // Switch to the next field
            newFullName.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isFullNameValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    newEmail.focus();
                }
            }


        // Validates Input for Email

            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Will be verified before account can be created
             *  3 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
             */

            // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
            newEmail.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(new_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Email"
            function validateNewEmail(event)
            {
                let eml = newEmail.value.toString().trim();
                let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                // Checks if the field is empty
                if((event.data == null) && (eml === ""))
                {
                    newEmailWarn.textContent = "Required";
                    newEmailWarn.classList.add("active");
                    isEmailValid = false;
                }
                else if(!(check_for_AtSign_in_Email.test(eml)))
                {
                    newEmailWarn.textContent = "Invalid Email";
                    newEmailWarn.classList.add("active");
                    isEmailValid = false;
                }
                // If all conditions are met, the Email is valid, i.e "true";
                else
                {
                    newEmailWarn.textContent = "";
                    newEmailWarn.classList.remove("active");
                    isEmailValid = true;
                }
            }

            newEmail.addEventListener("input" , validateNewEmail);

            // Switch to the next field
            newEmail.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isEmailValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    newPassword.focus();
                }
            }




        // Validates Input for Password

            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             */

            // Password Regex - Allows all except spaces
            newPassword.addEventListener("beforeinput", (event) => 
            {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Shows the password conditions when the the input focus is true
            newPassInputBdr.addEventListener("click" , () => 
            {
                newPassCondBox.classList.add("active");
            });

            // Closing the conditions box
            document.addEventListener("click" , () => 
            {
                if((newPassInputBdr.matches(":hover")))
                {
                    return;
                }
                newPassCondBox.classList.remove("active");
            });

            // Validation for Password
            function validateNewPassword(event) 
            {
                let pswd = newPassword.value.toString().trim().replace(/s+/g, '');
                const userPass_Cond_SpecialChar = /\W/g;
                const userPass_Cond_num = /\d/g;
                const userPass_Cond_Lett_Upr = /[A-Z]/g;
                const userPass_Cond_Lett_Lwr = /[a-z]/g;

                // Checks if there is any value in the input feild
                if(((event.data == null) && (pswd === "")))
                {
                    newPassLength.classList.replace("goodCond" , "badCond");
                    isPassLengthValid = false;
                    isPassLetterValid = false;
                    isPassNumberValid = false;
                    isPassSpecCharValid = false;
                }

                // Checks if the pattern is less "8" characters
                if(((pswd.length > -1) && (pswd.length < 8)))
                {
                    newPassLength.classList.replace("goodCond" , "badCond");
                    isPassLengthValid = false;
                }
                else
                {
                    newPassLength.classList.replace("badCond" , "goodCond");
                    isPassLengthValid = true;
                }

                // Checks if it contains an Upercase Letter
                if((userPass_Cond_Lett_Upr.test(pswd)))
                {
                    newPassLetterUpr.classList.replace("badCond" , "goodCond");
                    isPassLetterValid = true;
                }
                else
                {
                    newPassLetterUpr.classList.replace("goodCond" , "badCond");
                    isPassLetterValid = false;
                }

                // Checks if it contains a Lowercase Letter
                if((userPass_Cond_Lett_Lwr.test(pswd)))
                {
                    newPassLetterLwr.classList.replace("badCond" , "goodCond");
                    isPassLetterValid = true;
                }
                else
                {
                    newPassLetterLwr.classList.replace("goodCond" , "badCond");
                    isPassLetterValid = false;
                }

                // Checks if it contains number
                if((userPass_Cond_num.test(pswd)))
                {
                    newPassNumber.classList.replace("badCond" , "goodCond");
                    isPassNumberValid = true;
                }
                else
                {
                    newPassNumber.classList.replace("goodCond" , "badCond");
                    isPassNumberValid = false;
                }
                
                // Checks if it contains a special character
                if((userPass_Cond_SpecialChar.test(pswd)))
                {
                    newPassSpecChar.classList.replace("badCond" , "goodCond");
                    isPassSpecCharValid = true;
                }
                else
                {
                    newPassSpecChar.classList.replace("goodCond" , "badCond");
                    isPassSpecCharValid = false;
                }

                // If all the coditions are met, the password is validated
                if(((isPassLengthValid == true)
                    && (isPassLetterValid == true)
                    && (isPassNumberValid == true)
                    && (isPassSpecCharValid == true)
                ))
                {
                    isPassValid = true;
                }
                else
                {
                    isPassValid = false;
                }
            }

            newPassword.addEventListener("input" , validateNewPassword);

            // Switch to the next field
            newPassword.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isPassValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    signUpBtn.click();
                }
            }


        // Submits form If user fills All input fields Correctly
        
            signUpBtn.addEventListener("click" , async () => 
            {
                // If all input fields are filled correctly, call verification funnction to verify user
                if(((signUpBtn.disabled == false) && (isFullNameValid == true) && (isPassValid == true) && (isEmailValid == true)))
                {
                    // Disable all fields & signup button
                    allFormFields.forEach(item => item.disabled = true);
                    signUpBtn.disabled = true;

                    // Email Verification
                    const auth = window.firebaseAuth;

                    if(!auth)
                    {
                        notification(`notifyBad` , `Firebase Initialiazation error. Try reloading the page`);
                        return;
                    }

                    try 
                    {
                        // Let user know their account is being created
                        notification(`notifyGood` , `Creating account`);

                        // Create the user's account
                        const newUserCred = await auth.createUserWithEmailAndPassword(newEmail.value, newPassword.value);
                        const user = newUserCred.user;
                        const uer_uid = user.uid;
                        const uv_fb_db = window.firebaseDB;

                        // Send verification email
                        await user.sendEmailVerification();
                        
                        // Update the user details 
                        const new_sgl_usr_obj = 
                        {
                            full_name: newFullName.value,
                            phone_no: ``,
                            is_3_day_ntc: false,
                            is_membership_active: false,
                            is_setup: true,
                            stp_steps: `2`,
                            curr_plan_id: ``,
                            cast_data_usage_ul: 0,
                            dwld_qlty_pref: 0,
                            dwld_audio_pref: 0,
                            use_ext_plr: false,
                            wifi_only_dwld: true,
                            wifi_only_stream: false,
                            cellular_stream_ntfy: true,
                            share_prsnl_info: false,
                            downloads: [],
                            profiles:
                            {
                                [`${generateRandomString().toLowerCase()}`]: 
                                {
                                    prof_selected: true,
                                    prof_name: `${newFullName.value}`,
                                    prof_type: `default`,
                                    prof_frgImg: `/images/uvid-profile-base.png`,
                                    prof_bcgImg: `/images/uvid-green-bcg1-dark.jpg`,
                                    prof_audio_lang: 8,
                                    prof_subtitle_lang: 8,
                                    prof_show_subtitles: false,
                                    prof_auto_play: false,
                                    prof_auto_next: false,
                                    prof_auto_skip: false,
                                    prof_lock_state: false,
                                    prof_lock_pin: `0000`,
                                    prof_show_adult_ctnt: false,
                                    prof_ctnt_restriction: 5,
                                    prof_history:
                                    [],
                                    prof_likes:
                                    [],
                                    prof_dislikes:
                                    [],
                                    prof_watchlist:
                                    [],
                                    prof_collections:
                                    [],
                                },
                            },
                            ntfy_pref:
                            {
                                ntfy_what_you_stream: true,
                                ntfy_recommendation: true,
                                ntfy_exploration: true,
                                ntfy_promotions: true,
                                ntfy_surveys: true,
                            },
                            notifications:
                            [
                                {
                                    notify_addedDate: `${getCurrDate("short")}`,
                                    notify_readStatus: false,
                                    notify_thumbnail: `/images/uvid-bcg1.jpg`,
                                    notify_mainTopic: `Welcome to Uvid+`,
                                    notify_subTopic: `We are glad you joined us. Browse and watch your favourite movies and tv shows.`,
                                    notify_actionText: `Explore`,
                                    notify_actionLink: `#/explore`,
                                },
                                {
                                    notify_addedDate: `${getCurrDate("short")}`,
                                    notify_readStatus: false,
                                    notify_thumbnail: `/images/uvid-bcg2.jpg`,
                                    notify_mainTopic: `Switch Profiles`,
                                    notify_subTopic: `You can now create and customize up to five different profiles.`,
                                    notify_actionText: `Try it Out`,
                                    notify_actionLink: `#/profile/switch`,
                                },
                            ],
                        };

                        // Store the user's object in firebase
                        await uv_fb_db.collection("uvp_fb_users").doc(uer_uid).set(new_sgl_usr_obj);

                        // Notify user of successful account creation
                        notification(`notifyGood` , "Account created");

                        // Update the navbar
                        topNavBar.innerHTML = setup_nav;
                        topNavBar.classList.add("initialize");
                        attachSignOutEventlisteners();

                        // Inform them to verify their email before continuing
                        init_signup_vrfy();
                    } 
                    catch (error) 
                    {
                        // console.error("Signup failed:", error.message);
                        notification(`notifyBad` , `Please check that all fields have been correctly filled`);

                        // Enable all fields & signup button
                        allFormFields.forEach(item => item.disabled = false);
                        signUpBtn.disabled = false;
                    }
                }
                // If not filled correctly, alert user 
                else
                {
                    notification(`notifyBad` , `Please check that all fields have been correctly filled`);
                }
            });
    }


    // Initialize Verify Req Notice
    function init_signup_vrfy(snt = true)
    {
        document.querySelector(".join_fence").scrollTo(0,0);
        document.querySelector(".join_area").innerHTML = signup_vrfy;

        let joinRstCntr = document.querySelector("#join_rst_cntr");
        let joinRsndBtn = document.querySelector("#join_rsnd_btn");
        let joinVrfyBtn = document.querySelector("#join_vrfy_btn");

        // A cooldown period between each verification email sent.
        let joinRstRng = 61;
        let joinRstPrd = joinRstRng;
        let joinRstInterval;
        
        const initRstInterval = () =>
        {
            clearInterval(joinRstInterval);
            joinRsndBtn.disabled = true;
            joinRstInterval = setInterval(() => 
            {
                joinRstPrd--;
                joinRstCntr.textContent = joinRstPrd;

                // Reset interval and enable resend vutton
                if(joinRstPrd == 0)
                {
                    clearInterval(joinRstInterval);
                    joinRstPrd = joinRstRng;
                    joinRsndBtn.disabled = false;
                }
            }, 1000);
        }
        initRstInterval();

        // Resend verification email
        joinRsndBtn.onclick = async () => 
        {
            // Disable button for sometime to prevent spam
            initRstInterval();

            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if user isn't logged in
            if (!user) 
            {
                notification(`notifyBad` , "You are not logged in.");
                return;
            }

            // Return if user's email has already been verified
            if (user.emailVerified) 
            {
                notification(`notifyBad` , "Your email is already verified.");
                return;
            }

            // Attempt to send a new email verifcation
            try 
            {
                await user.sendEmailVerification();

                // Let user know the eamil verification has been sent successfully
                notification(`notifyGood` , "Verification email sent! Please check your inbox(and spam).");

            } 
            catch (error) 
            {
                // Log and notify user of any errors
                console.error("Failed to resend verification:", error);
                notification(`notifyBad` , "Unable to send verification email. Try again later.");
            }
        };

        // Send immediately if not already done
        if(snt == false) joinRsndBtn.click();

        // Validate the verification process
        joinVrfyBtn.onclick = async () => 
        {
            joinVrfyBtn.disabled = true;
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            if (!user) 
            {
                notification(`notifyBad` , "You are not logged in.");
                joinVrfyBtn.disabled = false;
                return;
            }

            try 
            {
                // Refresh user info
                await refreshUserState();

                if (user.emailVerified) 
                {
                    // Notify user
                    notification(`notifyGood` , "Email verified!");

                    // Move to the next step
                    switch_step(2);
                } 
                else 
                {
                    notification(`notifyBad` , "Email not verified yet. Please check your inbox and try again.");
                    joinVrfyBtn.disabled = false;
                }
            } 
            catch (err) 
            {
                console.error("Verification check failed:", err);
                notification(`notifyBad` , "Something went wrong. Try reloading the page.");
                joinVrfyBtn.disabled = false;
            }
        };
    }


    // Initialize plan options (Step 2)
    function init_signup_2()
    {
        // Return to verification if user is not verified
        if(!(isUserVerified())) return init_signup_vrfy(false);

        const planFtrUL = document.querySelector(".join_plan_ftr_ul");
        const planSlsBox = document.querySelector(".join_plan_sls_box");
        const planSbtBtn = document.querySelector("#join_plan_submitBtn");
        let planSlsBtn;
        let planSlsBtns = ``;


        // Building the plan features
        const bld_plan_ftr = (plan = "") => 
        {
            plan_obj = uvid_signup_plans[plan];

            if((typeof plan_obj === "undefined") || (typeof plan_obj !== "object") || (plan_obj === null)) 
                return notification('notifyBad' , 'An error occured while loading plan features');

            let ftr_struct = ``;
            let plan_bnft = plan_obj.plan_benefits;

            Object.entries(plan_bnft).forEach((bnft_obj) =>
            {
                let bnft_ftr = bnft_obj[1];
                ftr_struct += 
                `
                    <li class="join_plan_ftr_cardBdr">
                        <div class="join_plan_ftr_cardBox">
                            <div class="join_plan_ftr_mnr_box">
                                <p class="join_plan_ftr_mnr_txt">${bnft_ftr.bnft_name}</p>
                            </div>
                            <div class="join_plan_ftr_mjr_box">
                                <p class="join_plan_ftr_mjr_txt">${bnft_ftr.bnft_desc}</p>
                            </div>
                        </div>
                    </li>
                `;
            });

            planFtrUL.innerHTML = ftr_struct;
        }

        // Build the plan option buttons
        Object.entries(uvid_signup_plans).forEach((plan_obj) =>
        {
            let plan = plan_obj[1];
            planSlsBtns +=
            `
                <div class="join_plan_sls_cardBase">
                    <div class="join_plan_sls_cardBdr">
                        <input type="radio" name="join_plan_sls_rad" id="join_plan_sls_rad${plan.plan_id}" class="join_plan_sls_radCls" value="${plan.plan_id.toLowerCase()}" />
                        <label for="join_plan_sls_rad${plan.plan_id}" class="join_plan_sls_lbl">
                            <div class="join_plan_sls_cardBox">
                                <div class="join_plan_sls_ttl_box">
                                    <div class="join_plan_sls_ttl_txt">${plan.plan_name}</div>
                                </div>
                                <div class="join_plan_sls_sub_box">
                                    <p class="join_plan_sls_sub_txt">${plan.plan_benefits.rsltn.bnft_desc}</p>
                                </div>
                                <div class="join_plan_sls_icon_bdr">
                                    <div class="join_plan_sls_icon_box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="join_plan_sls_icon_svg">
                                            <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            `;
            
            // Display the default plan option's features
            if((plan_obj[0] === "ultm")) bld_plan_ftr("ultm");
        });
        planSlsBox.innerHTML = planSlsBtns;

        // Selecting a plan option
        planSlsBtn = document.querySelectorAll(".join_plan_sls_cardBdr");
        planSlsBtn.forEach((oldbtn) => 
        {
            if(oldbtn.disp_atn)
            {
                btn.addEventListener("click", oldbtn.disp_atn);
            }
        });
        planSlsBtn.forEach((btn) => 
        {
            const sel_atn = () => 
            {
                let btn_opt = btn.querySelector("input[name='join_plan_sls_rad']").getAttribute("value");

                if((btn_opt !== ""))
                {
                    // Remove any selected states
                    planSlsBtn.forEach(isSlBtn => isSlBtn.hasAttribute("selected") ? isSlBtn.removeAttribute("selected") : null);

                    // Update the plan features
                    bld_plan_ftr(btn_opt);

                    // And the selected state to current element
                    btn.setAttribute("selected", "");
                }
            }

            btn.addEventListener("click", sel_atn);
            btn.disp_atn = sel_atn;
        });

        // Selects the default plan option
        document.querySelectorAll(".join_plan_sls_cardBdr")[2].click();

        // Moving to the next step
        planSbtBtn.addEventListener("click", async () => 
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if user isn't logged in
            if (!user)
            {
                notification(`notifyBad` , "You are not logged in.");
                return;
            }

            // Get the selected plan
            let sel_plan = document.querySelector(".join_plan_sls_cardBdr[selected]").querySelector("input[name='join_plan_sls_rad']").getAttribute("value");

            try
            {
                // Update the User's info
                await updateUserData(
                {
                    stp_steps: `3`,
                    curr_plan: 
                    {
                        curr_plan_id: `${sel_plan}`,
                        curr_plan_start: ``,
                        curr_plan_end: ``,
                    },
                });

                // Move to the next step
                switch_step(3);
            }
            catch (error)
            {
                console.error(error);
                notification('notifyBad' , 'An error occured. Please try again')
            }
        });
    }


    // Initialize payment options (Step 3)
    async function init_signup_3()
    {

        // Check that a plan has been selected
        const usrData = await getUserData();
        const usrCurrPlan = usrData?.curr_plan.curr_plan_id;
        const plan_obj = uvid_signup_plans[usrCurrPlan];

        if(!(typeof plan_obj !== "undefined") && (typeof plan_obj === "object") && (plan_obj !== null)) 
        {
            document.querySelectorAll("input.form_input_field").forEach(item => item.disabled = false);
            notification('notifyBad' , 'A plan is required to proceed');
            switch_step(2);
            return;
        }

        // Check if user already has saved payment methods
        const pymtMtdsData = usrData?.pymt_mtd;

        // Initialize modal for new users, as they don't have any saved payment methods
        if((typeof pymtMtdsData === "undefined") || ((typeof pymtMtdsData !== "object"))
            || (pymtMtdsData == null) || (Object.keys(pymtMtdsData).length <= 0)
        )
        {
            init_1st_setup_pymt_opt_register();
            return;
        }

        // Insert struct
        document.querySelector(".join_area").innerHTML = signup_3_1;

        // Get currently selected plan
        get_setup_sls_plan();

        // Build the payment options
        const pymtBox = document.createElement("div");
        let pymtItemsStruct = ``;
        pymtBox.classList.add("form_pymt_mtd_grid");

        // Build payment card elements
        Object.entries(pymtMtdsData).forEach(([key, card]) => 
        {
            let cardNo = card.pymt_cardNo.toString().replace(/\s/g, '');
            let cardNoTrim = cardNo.slice(-4);

            pymtItemsStruct +=
            `
                <div class="form_pymt_mtd_card_bdr" data-pymt-card-id="${key}" data-pymt-card-default="${card.pymt_isDflt}">
                    <div class="form_pymt_mtd_card_box">
                        <div class="form_pymt_mtd_card_static_icon_bdr">
                            <div class="form_pymt_mtd_card_static_icon_box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="form_pymt_mtd_card_static_icon_svg">
                                    <path fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5q-.002.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="form_pymt_mtd_card_det_bdr">
                            <div class="form_pymt_mtd_card_det_box">
                                <div class="form_pymt_mtd_det_name_box">
                                    <p class="form_pymt_mtd_det_name_txt">${card.pymt_cardName}</p>
                                </div>
                                <div class="form_pymt_mtd_det_info_box">
                                    <p class="form_pymt_mtd_det_info_txt">
                                        <span class="num_trim">••${cardNoTrim} |</span> 
                                        <span class="num_exp">${card.pymt_cardExp}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            cardNo, cardNoTrim = null;
        });

        pymtBox.innerHTML = pymtItemsStruct;
        document.querySelector(".form_pymt_mtd_box").appendChild(pymtBox);

        // Pymt selectors
        const pymtCardsBdr = pymtBox.querySelectorAll(".form_pymt_mtd_card_bdr");
        const pymtCardAddBtn = document.querySelector(".form_pymt_mtd_hdr_atn_btn");

        // Selecting a (default) payment option
        pymtCardsBdr.forEach((btn) => 
        {
            const btn_set_atn = async () => 
            {
                let btnId = btn.getAttribute("data-pymt-card-id");

                // Fetch payment methods
                let tempUserData = await getUserData();
                let pymtMtdsData = tempUserData?.pymt_mtd;

                // Return if payment methods is unobtainable
                if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 0))
                {
                    notification(`notifyBad`, `Failed to select card`);
                    return;
                }

                // Return if selected method doesn't exist
                let chsnPymr = pymtMtdsData[`${btnId}`] || null;

                if((chsnPymr == undefined) || (chsnPymr == null) || (typeof chsnPymr !== "object"))
                {
                    notification(`notifyBad`, `Selected payment method is unavailable`);
                    init_signup_3();
                    return;
                }

                // Set the chosen card as default, and all other cards to false
                Object.entries(pymtMtdsData).forEach(([key, pymt]) => 
                {
                    if((key === btnId))
                    {
                        pymt.pymt_isDflt = true;
                    }
                    else
                    {
                        pymt.pymt_isDflt = false;
                    }
                });

                // Update user data
                try
                {
                    await updateUserData(
                    {
                        pymt_mtd: pymtMtdsData
                    });

                    // Update UI
                    pymtCardsBdr.forEach(item => item.setAttribute("data-pymt-card-default", "false"));
                    btn.setAttribute("data-pymt-card-default", "true");

                    // Notify user
                    notification(`notifyGood` , `Payment card selected and set as default`);
                }
                catch(error)
                {
                    console.error(error)
                    notification(`notifyBad`, `Failed to select card`);
                }
            }

            btn.addEventListener("click", btn_set_atn);
        });

        // Adding a new payment card
        pymtCardAddBtn.onclick = () => 
        {
            initAddPymtMtdModal("init_signup_3");
        }

        
        // Starting memebership
        const pymtSbmtBtn = document.querySelector("#form_pymt_sbmtBtn");

        pymtSbmtBtn.addEventListener("click", async () => 
        {
            // Check if a card is selected
            let isDlft = false;
            pymtCardsBdr.forEach((btn) => 
            {
                if(btn.hasAttribute("data-pymt-card-default") && (btn.getAttribute("data-pymt-card-default") === "true"))
                {
                    isDlft = true;
                }
            });

            // Return if no card is selected
            if(!(isDlft))
            {
                notification(`notifyBad`, `Please select a payment option to continue`);
                return;
            }

            
            try
            {
                let start_date = getCurrDate("short");
                let end_date = getNextDate(start_date, membership_BILL_CYCLE, "short");

                // Update billing information
                let tempUserData = await getUserData();
                let currBillHist = tempUserData?.billing_hist || [];

                // Push new billing details
                currBillHist.push(
                    {
                        bill_plan_id: `${usrCurrPlan}`,
                        bill_plan_name: `${plan_obj.plan_name}`,
                        bill_plan_price: `${plan_obj.plan_price_month}`,
                        bill_plan_date: `${start_date}`,
                        bill_plan_status: null,
                    }
                );

                // Update the User's info
                await updateUserData(
                {
                    is_membership_active: true,
                    stp_steps: `outro`,
                    billing_hist: currBillHist,
                    curr_plan: 
                    {
                        curr_plan_id: `${usrCurrPlan}`,
                        curr_plan_start: `${start_date}`,
                        curr_plan_end: `${end_date}`,
                        curr_plan_next: `${usrCurrPlan}`,
                    },
                });

                // Notify the user
                generateNotificationMsg(
                    `Membership renewed`,
                    `
                        Your Uvid+ membership was renewed on ${start_date}.
                        Your next billing date is on ${end_date}.
                    `,
                    `View Membership`,
                    `#/settings/membership/manage`,
                    ``,
                    `Failed to set 'Renewal Success' notification`
                );

                // Initialize finalization message
                init_signup_outro();
            }
            catch(err)
            {
                console.error(err)
                notification(`notifyBad`, `Something went wrong. Try again later`);
            }
        });
    }

    // Initializes the modal for new users to enter their payment card details.
    async function init_1st_setup_pymt_opt_register()
    {

        // Check that a plan has been selected
        const usrData = await getUserData();
        const usrCurrPlan = usrData?.curr_plan.curr_plan_id;
        const plan_obj = uvid_signup_plans[usrCurrPlan];

        if((typeof plan_obj !== "undefined") && (typeof plan_obj === "object") && (plan_obj !== null)) 
        {
            document.querySelectorAll("input.form_input_field").forEach(item => item.disabled = false);
        }
        else
        {
            document.querySelectorAll("input.form_input_field").forEach(item => item.disabled = true);
            notification('notifyBad' , 'A plan is required to proceed');
            switch_step(2);
            return;
        }

        // Get currently selected plan
        get_setup_sls_plan();

        // Insert struct
        document.querySelector(".join_area").innerHTML = signup_3_2;

        // Definitions

            // All form fields
            const allFormFields = document.querySelectorAll(".form_input_field");

            // Card Number
            const card_num_cond = new RegExp("^[0-9]*$");
            const cardNum = document.querySelector("#form_pymt_cardNum");
            const cardNumWarn = document.querySelector("#form_pymt_cardNumWarn");
            let isCardNumValid = false;

            // Card Expiry date
            const card_exp_cond = new RegExp("^[0-9]*$");
            const cardExp = document.querySelector("#form_pymt_cardExp");
            const cardExpWarn = document.querySelector("#form_pymt_cardExpWarn");
            let isCardExpValid = false;

            // Card Security Code
            const card_code_cond = new RegExp("^[0-9]*$");
            const cardCode = document.querySelector("#form_pymt_cardSec");
            const cardCodeWarn = document.querySelector("#form_pymt_cardSecWarn");
            let isCardCodeValid = false;

            // Card Full Name
            const cardName = document.querySelector("#form_pymt_cardName");
            const cardNameWarn = document.querySelector("#form_pymt_cardNameWarn");
            let isCardNameValid = false;

            // Submit button
            const planFormSbtBtn = document.querySelector("#form_pymt_sbmtBtn");
            


        // Validates Input for Card Number

            // Conditions -
            /**
             *  1 - Should be at least thirteen (13) numbers
             */

            // Allows 0-9
            cardNum.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(card_num_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Card Number"
            // Adds a space after every four (4) numbers
            function validateCardNum(e)
            {
                // Checks if the field is empty
                if((e.data == null) && (cardNum.value.toString().length <= 0))
                {
                    cardNumWarn.textContent = "Required";
                    cardNumWarn.classList.add("active");
                    isCardNumValid = false;
                }
                // Checks if the card number length is less than the specified
                else
                {
                    const cardNumInp = e.target;
                    const cardNumVal = cardNumInp.value;
                    const cursor = cardNumInp.selectionStart;

                    // Store only digits
                    const digits = cardNumVal.replace(/\D/g, '');

                    // Format & break into groups of four (4)
                    const newCardNum = digits.match(/.{1,4}/g)?.join(' ') || '';

                    // Calculate the numnber of digits before the cursor
                    const digitsBeforeCursor = cardNumVal.slice(0, cursor).replace(/\D/g, '').length;

                    // Rebuild string and find new cursor position
                    let newCursor = 0;
                    let digitCount = 0;

                    for (let i = 0; i < newCardNum.length; i++) 
                    {
                        if (/\d/.test(newCardNum[i])) 
                        {
                            digitCount++;
                        }
                        if (digitCount === digitsBeforeCursor) 
                        {
                            newCursor = i + 1;
                            break;
                        }
                    }

                    cardNumInp.value = newCardNum;
                    cardNumInp.setSelectionRange(newCursor, newCursor);

                    if(digits.length < 13)
                    {
                        cardNumWarn.textContent = "Card number must be at least 13 digits long";
                        cardNumWarn.classList.add("active");
                        isCardNumValid = false;
                    }
                    // If all conditions are met, the input is valid, i.e "true";
                    else
                    {
                        cardNumWarn.textContent = "";
                        cardNumWarn.classList.remove("active");
                        isCardNumValid = true;
                    }
                }
            }

            cardNum.addEventListener("input" , validateCardNum);

            // Switch to the next field
            cardNum.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isCardNumValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    cardExp.focus();
                }
            }


        // Validates Input for Expiry Date

            // Conditions -
            /**
             *  1 - Should be in the format "MM/YY"
             */

            // Allows 0-9
            cardExp.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(card_exp_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Security Code"
            // Also Formats the input to "MM/YY"
            function validateCardExp(e)
            {
                let input = e.target;
                let raw = input.value;
                let cursor = input.selectionStart;

                // Strip non-digits and cap at 4 digits
                let digits = raw.replace(/\D/g, '').slice(0, 4);

                // Checks if the field is empty
                if((e.data == null) && (digits.length <= 0))
                {
                    cardExpWarn.textContent = "Required";
                    cardExpWarn.classList.add("active");
                    isCardExpValid = false;

                    return;
                }

                // Auto-prepend "0" if user entered single-digit month (3 → 03)
                if (digits.length === 1 && parseInt(digits, 10) > 1) 
                {
                    digits = '0' + digits;
                    cursor = cursor + 1;
                }

                // Format as MM/YY
                let formatted = '';

                if (digits.length >= 3) 
                {
                    formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
                } 
                else 
                {
                    formatted = digits;
                }

                // Detect if slash was added
                const addedSlash = formatted[cursor - 1] === '/' && raw[cursor - 2] !== '/';
                let newCursor = cursor;

                if (raw.length < formatted.length && addedSlash) 
                {
                    newCursor++;
                }

                input.value = formatted;
                input.setSelectionRange(newCursor, newCursor);

                if((digits > 4))
                {
                    const month = parseInt(digits.slice(0, 2), 10);
                    const year = parseInt(digits.slice(2), 10);

                        // get last 2 digits of current year
                    const currYr = new Date().getFullYear() % 100;
                    const maxValidYear = currYr + 50;

                    const isMonthValid = month >= 1 && month <= 12;
                    const isYearValid = year >= currYr && year <= maxValidYear;

                    if (!isMonthValid || !isYearValid) 
                    {
                        cardExpWarn.classList.add("active");
                        cardExpWarn.textContent = "Invalid expiry date";
                        isCardExpValid = false;
                    }
                    else
                    {
                        cardExpWarn.classList.remove("active");
                        cardExpWarn.textContent = '';
                        isCardExpValid = true;
                    }
                    return;
                }
                cardExpWarn.textContent = "Invalid expiry date";
                isCardExpValid = false;
            }

            cardExp.addEventListener("input" , validateCardExp);

            // Switch to the next field
            cardExp.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isCardExpValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    cardCode.focus();
                }
            }


        // Validates Input for Security Code

            // Conditions -
            /**
             *  1 - Should be at least three (3) numbers
             */

            // Allows 0-9
            cardCode.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(card_code_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Security Code"
            function validateSecCode(event)
            {
                // Return if value is not a number
                if(!(/^\d+$/.test(cardCode.value)))
                {
                    cardCodeWarn.textContent = "Invalid Security Code";
                    cardCodeWarn.classList.add("active");
                    isCardCodeValid = false;
                    return;
                }

                // Strip non-digits and cap at 4 digits
                let digits = cardCode.value.replace(/\D/g, '');

                // Checks if the field is empty
                if((event.data == null) && (digits.length <= 0))
                {
                    cardCodeWarn.textContent = "Required";
                    cardCodeWarn.classList.add("active");
                    isCardCodeValid = false;
                }
                else if((digits.length < 3))
                {
                    cardCodeWarn.textContent = "Invalid Security Code";
                    cardCodeWarn.classList.add("active");
                    isCardCodeValid = false;
                }
                // If all conditions are met, the input is valid, i.e "true";
                else
                {
                    cardCodeWarn.textContent = "";
                    cardCodeWarn.classList.remove("active");
                    isCardCodeValid = true;
                }
            }

            cardCode.addEventListener("input" , validateSecCode);

            // Switch to the next field
            cardCode.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isCardCodeValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    cardName.focus();
                }
            }


        // Validates Input for Card Name

            // Conditions -
            /**
             *  1 - At least two (2) non-whitespace characters separated by a space
             */
            
            function validateCardName(event)
            {
                let fname = cardName.value.toString().trim();
                let fullName_Condition = /^\s*\S+(?:\s+\S+)+\s*$/;

                // Checks if empty
                if((event.data == null) && (fname === ""))
                {
                    cardNameWarn.textContent = "Required";
                    cardNameWarn.classList.add("active");
                    isCardNameValid = false;
                }
                // Checks if Full name was entered
                else if(!(fullName_Condition.test(fname)))
                {
                    cardNameWarn.textContent = "First and last name required";
                    cardNameWarn.classList.add("active");
                    isCardNameValid = false;
                }
                else
                {
                    cardNameWarn.textContent = "";
                    cardNameWarn.classList.remove("active");
                    isCardNameValid = true;
                } 
            }

            cardName.addEventListener("input" , validateCardName);

            // Switch to the next field
            cardName.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined")) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    planFormSbtBtn.click();
                }
            }


        // Submission
        planFormSbtBtn.addEventListener("click" , async () => 
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if user isn't logged in
            if (!user)
            {
                notification(`notifyBad` , "You are not logged in.");
                return;
            }

            // If all input fields are filled correctly, update properties and finalise
            if(((isCardNumValid == true) && (isCardExpValid == true) && (isCardCodeValid == true) && (isCardNameValid == true)))
            {
                // Disable all input fields and buttons
                allFormFields.forEach(item => item.disabled = true);
                planFormSbtBtn.disabled = true;

                // Update the User's info
                let start_date = getCurrDate("short");

                try
                {
                    await updateUserData(
                    {
                        is_setup: false,
                        is_membership_active: true,
                        stp_steps: `outro`,
                        curr_plan: 
                        {
                            curr_plan_id: `${usrCurrPlan}`,
                            curr_plan_next: `${usrCurrPlan}`,
                            curr_plan_start: `${start_date}`,
                            curr_plan_end: `${getNextDate(start_date, membership_BILL_CYCLE, "short")}`,
                        },
                        pymt_mtd: 
                        {
                            [`${generateRandomString(32)}`]: 
                            {
                                pymt_type: `card`,
                                pymt_cardName: `${cardName.value}`,
                                pymt_cardNo: `${cardNum.value}`,
                                pymt_cardExp: `${cardExp.value}`,
                                pymt_cardCode: `${cardCode.value}`,
                                pymt_isDflt: true
                            }
                        },
                        billing_hist: 
                        [
                            {
                                bill_plan_id: `${usrCurrPlan}`,
                                bill_plan_name: `${plan_obj.plan_name}`,
                                bill_plan_price: `${plan_obj.plan_price_month}`,
                                bill_plan_date: `${start_date}`,
                                bill_plan_status: null,
                            }
                        ],
                    });

                    // Initialize finalization message
                    init_signup_outro();
                }
                catch(err)
                {
                    console.error(err)
                    notification(`notifyBad`, `Something went wrong. Try again later`);
                }
            }
            // If not filled correctly, alert user 
            else
            {
                notification(`notifyBad` , `Please check that all fields have been correctly filled`);
            }
        });
    }

    // Gets the information for the currently selected plan
    async function get_setup_sls_plan()
    {
        // Check that a plan has been selected
        const usrData = await getUserData();
        const usrCurrPlan = usrData?.curr_plan.curr_plan_id;
        const plan_obj = uvid_signup_plans[usrCurrPlan];
        
        // Switching plans
        const chsnPlanBdr = document.querySelector(".form_plan_bdr");
        let chsnPlanBtn;

        if(!(typeof plan_obj !== "undefined") && (typeof plan_obj === "object") && (plan_obj !== null)
            || (chsnPlanBdr == undefined) || (chsnPlanBdr == null)
        ) 
        {
            console.error("Failed to initialize currently selected plan")
            return;
        }

        // Insert the current plan
        chsnPlanBdr.innerHTML = 
        `
            <div class="form_plan_box">
                <div class="form_plan_det_bdr">
                    <div class="form_plan_det_box">
                        <div class="form_plan_price_box">
                            <p class="form_plan_price_txt">${plan_obj.plan_price_month}</p>
                        </div>
                        <div class="form_plan_name_box">
                            <p class="form_plan_name_txt">Uvid+ ${plan_obj.plan_name}</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="genBtnBox thin transBtn form_plan_atn_btn form_plan_atn_box">
                    <span class="genBtnText form_plan_atn_txt">Switch</span>
                </button>
            </div>
        `;
        chsnPlanBtn = document.querySelector(".form_plan_atn_btn");

        // Change your plan
        const switchPlan = () => switch_step(2);

        // Confirm before going back to change your plan
        const cfrmB4PlanSwitch = () =>
        {
            initConfirmModal(
                `Are you sure you want to go back`,
                `Current changes will not be saved`,
                `Go back`,
                `Stay`,
                switchPlan
            );
        }

        chsnPlanBtn.onclick = () => cfrmB4PlanSwitch();
    }


    // Displays welcome message after subscription is confirmed
    function init_signup_outro()
    {
        // document.querySelector(".join_fence").innerHTML = signup_outro;
        // document.querySelector(".join_fence").scrollTo(0,0);
        documentCtnt.insertAdjacentHTML('beforeend', signup_outro);

        let joinOutroBtn = document.querySelector(".join_outro_btn");
        let joinOutroTmr;
        
        joinOutroBtn.onclick = () => 
        {
            document.querySelector(".join_fence").remove();
            window.location.hash = "#/home"
        }

        // Start Initializing the homepage in the background
        joinOutroTmr = setTimeout(() => 
        {
            clearTimeout(joinOutroTmr);
            preHomeSection();
        }, 1000);
    }