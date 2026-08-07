/*************************************************************
 * This is the script for the Setup page of Uvid+
 * 
 * This are attributes of a user in Uvid+
 * 
 *      email: ``, // The user's email
 *      full_name: ``, // The user's full name
 *      cast_data_usage_ul: `auto`, // The Upper limit on how much data will be used during casting
 *      dwld_qlty_pref: `Always ask`, // The preferred quality for downloaded shows
 *      dwld_audio_pref: `Always ask`, // The preferred audio language for downloaded shows
 *      wifi_only_dwld: true, // Boolean for whether to ONLY download using wifi
 *      wifi_only_stream: false, // Boolean for only streaming when there's wifi
 *      cellular_stream_ntfy: true, // Notify user when straming with mobile data
 *      conn_apps: [], // Apps connected to the user's account. Not available yet
 *      device_mngmt: [], // Manage all devices you've logged into. Not available yet
 * 
 *      // Profiles (1 defualt profile, 4 more profiles can be added)
 *      profiles:
 *      [
 *          {
 *              prof_id: `dflt`, // Id for default profile. (Other profiles have a randomly generated id)
 *              prof_selected: true, // Boolean deciding whether this is the currently selected profile
 *              prof_name: `Uvid+`, // I may give option to provide a name during sign up process
 *              prof_type: `default`, // This marks a default profile. Others are labelled "other". Default can't be deleted.
 *              prof_frgImg: `/images/uvid-profile-base.png`, // The foreground/profile picture (pfp) of the profile
 *              prof_bcgImg: `/images/uvid-green-bcg1-dark.jpg`, // The background picture of the profile
 *              prof_audio_lang: `English`, // The selected audio language
 *              prof_subtitle_lang: `English`, // The selected subtitle language
 *              prof_show_subtitles: false, // Boolean deciding whether to show subtitles by default
 *              prof_auto_play: false, // Boolean deciding whether to auto play videos on page load
 *              prof_auto_next: false, // Boolean deciding whether to automatically move to the next show in list (i.e. season)
 *              prof_auto_skip: false, // Boolean deciding whether to automatically skip intros and outros of shows whenever possible
 *              prof_lock_state: false, // Boolean deciding whether the profile is locked
 *              prof_lock_pin: `0000`, // Lock pin combination for the profile
 *              prof_ctnt_restriction: `18+`, // The age restriction for shows
 *              prof_history:
 *              [
 *                  {
 *                      hist_link: ``, // The link of the show(containing the ssn and episode if applicable)
 *                      hist_currTime: ``, // The timeline where the user is currently watching
 *                      hist_totalTime: ``, // The total duration of the show
 *                  },
 *              ],
 *              prof_likes:
 *              [
 *                  {
 *                      ls_item: ``, // Link of the liked show
 *                  },
 *              ],
 *              prof_dislikes:
 *              [
 *                  {
 *                      ds_item: ``, // Link of the disliked show
 *                  },
 *              ],
 *              prof_watchlist:
 *              [
 *                  {
 *                      wl_item: ``, // Link of the show
 *                      wl_status: 1, // watch status
 *                  },
 *              ],
 *              prof_collections:
 *              [
 *                  {
 *                      cl_id: ``, // Unique id to distinguish collections from each other
 *                      cl_name: ``, // Name of Collection
 *                      cl_updated: ``, // Last date the colection was updated
 *                      cl_bcg: ``, // The background image of the collection
 *                      cl_desc: ``, // An optional description of the collection
 *                      cl_items: // This contains all the shows in this collection
 *                      [
 *                          {
 *                              cl_itemId: ``, // Link of the show
 *                          },
 *                      ],
 *                  },
 *              ],
 *              prof_notifications:
 *              [
 *                  {
 *                      notify_addedDate: ``, // The date when the notification was created
 *                      notify_readStatus: false, // Boolean deciding whether the notification has been read
 *                      notify_thumbnail: ``, // The thumbnail (or background) image of the notification
 *                      notify_mainTopic: ``, // Title text of the notification
 *                      notify_subTopic: ``, // A slightly longer description of the notification
 *                      notify_actionText: ``, // The text used in the action button
 *                      notify_actionLink: ``, // The destination of the notification
 *                  },
 *              ],
 *          },
 *      ],
 * ************************************************************/


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
            jn_area.innerHTML = signup_form;
            init_signup();
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

    // Initialize the sign up intro
    function init_signup_intro()
    {
        let introSbtBtn = document.querySelector(".join_intro_submitBtn");

        introSbtBtn.onclick = () => 
        {
            init_signup_rmnd();
        }
    }

    // Initialize important reminder
    function init_signup_rmnd()
    {
        document.querySelector(".join_fence").scrollTo(0,0);
        document.querySelector(".join_area").innerHTML = signup_ntc;

        let joinNtcBtn = document.querySelector(".join_ntc_btn");

        joinNtcBtn.onclick = () => 
        {
            init_signup_choice();
        }
    }

    // Initialize the signup choice
    function init_signup_choice()
    {
        document.querySelector(".join_fence").scrollTo(0,0);
        document.querySelector(".join_area").innerHTML = signup_choice;

        const joinMtdPswdAtn = () => 
        {
            switch_step(1);
        }

        const joinMtdPrvdAtn = () => initPrvdModal();

        const joinMtdPswdBtn = document.querySelector("#join_mtd_empwsd_btn");
        const joinMtdPrvdBtn = document.querySelector("#join_mtd_emprvd_btn");

        joinMtdPswdBtn.onclick = () => 
        {
            initConfirmModal(
                `Use 'Email/Password'?`,
                `Confirm if you want to use this method to sign up`,
                `Proceed`,
                `Back`,
                joinMtdPswdAtn
            );
        }

        joinMtdPrvdBtn.onclick = () => 
        {
            initConfirmModal(
                `Use 'Email Providers'?`,
                `Confirm if you want to use this method to sign up`,
                `Proceed`,
                `Back`,
                joinMtdPrvdAtn
            );
        }
    }

    // Initialize sign up form
    function init_signup()
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

                // Checks if there is any value in the input field
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
                        const uid = user.uid;

                        // Send verification email
                        await user.sendEmailVerification();

                        // Setup firebase
                        window._is_uvp_fb_setup = false;
                        const isFbStp = await uvp_fb_setup(uid, newFullName.value);

                        if(!isFbStp) throw new Error("Firebase user initialization in firestore failed");

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
                        notification(`notifyBad` , `An error occurred during account creation`);

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


    // Creates a user's profile in firebase after user's account has been created
    async function uvp_fb_setup(usr_id = "", usr_nm = "")
    {
        try
        {
            const uv_fb_db = window.firebaseDB;

            if((
                (window._is_uvp_fb_setup == undefined || typeof window._is_uvp_fb_setup !== "boolean" || window._is_uvp_fb_setup != false)
                || (typeof uv_fb_db === "undefined" || uv_fb_db == null)
                || (typeof usr_id !== "string" || usr_id === "")
                || (typeof usr_nm !== "string" || usr_nm === "")
            )) throw new Error("Invlaid param");

            const nm_split = usr_nm?.trim()?.split(" ");
            const start_date = getCurrDate("short");
            const start_mn = start_date.split("/")[1];
            const start_yr = Number(start_date.split("/")[2]) + 50;

            // Update the user details 
            const new_sgl_usr_obj = 
            {
                full_name: usr_nm,
                cast_data_usage_ul: 0,
                dwld_qlty_pref: 0,
                dwld_audio_pref: 0,
                use_ext_plr: true,
                wifi_only_dwld: true,
                wifi_only_stream: false,
                cellular_stream_ntfy: true,
                stp_steps: `outro`,
                downloads: [],
                profiles:
                {
                    [`${generateRandomString().toLowerCase()}`]: 
                    {
                        prof_selected: true,
                        prof_name: `${(nm_split[0]) ? nm_split[0] : usr_nm}`,
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
            await uv_fb_db.collection("uvp_fb_users").doc(usr_id).set(new_sgl_usr_obj);

            window._is_uvp_fb_setup = true;
            return true;
        }
        catch(err)
        {
            notification('notifyBad', 'A fatal error has occured. Kindly reload the page.');
            console.error(err);
            window._is_uvp_fb_setup = false;
            return false;
        }
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
                    window.location.replace(page_route_fallback());
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

    // Verification email send fail guide
    function vrfy_fail_guide() 
    {
        window.open('#/help/article/16081474', '_blank');
    }


