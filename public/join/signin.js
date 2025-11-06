/*************************************************************
 * This is the script for the Sign In page of Uvid+
 * Here , users will be able to:
 * 1. sign in to their account
 * 2. Recover their sign in detail(s) [password] if forgotten
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


// DEFINITIONS

    // Initialize forms
    function initSignInForm()
    {
        documentBody.classList.add("bodystop");
        documentCtnt.insertAdjacentHTML(`beforeend` , signin_form);
        topNavBar.innerHTML = signin_nav;
        topNavBar.classList.add("initialize");

        // Definitions

            // Forms
            const signInForm = document.querySelector(".signIn_FormBox");
            const recPassForm = document.querySelector(".RecoverAcc_FormBox");
            const goToLogInForm = document.querySelectorAll(".toLogInForm");
            const goToRecoverAccForm = document.querySelectorAll(".toRecoverAccForm");

            // See & Hide password
            tgl_pass_fld_state();

            // All form warnings
            const allFormFields = document.querySelectorAll(".form_input_field");
            const allFormFieldWarns = document.querySelectorAll(".form_input_bdr .form_input_warn");

            // User email
            const user_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
            const userEmail = document.querySelector("#form_logIn_id");
            let isUserEmailValid = false;
            
            // Password
            const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
            const userPassword = document.querySelector("#form_logIn_pass");
            let isUserPassValid = false;

            // Warning
            const logInWarn = document.querySelector("#logIn_warn");

            // Submitting Info
            const logInBtn = document.querySelector("#logIn_btn");
            const prvdSignIn = document.querySelector("#emPrvd_btn");


            // Forgot password
            const resetPass_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
            const resetPass_email = document.querySelector("#form_recover_Acc");
            const resetPass_warn = document.querySelector("#form_recover_AccWarn");
            const resetPass_SubmitBtn = document.querySelector("#recoverAcc_btn");
            let resetPass_validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        // Switching between forms

            // Clears fields after a form switch
            function hidePP()
            {
                document.querySelectorAll(".form_PassBox .form_Pass").forEach(field => 
                {
                    field.type = "password";
                });
                document.querySelectorAll(".form_input_box .togglePass_btn").forEach((one, i) => 
                {
                    one.classList.replace("fa-eye-slash" , "fa-eye");
                });
            }

            function clearFields()
            {
                // allFormFields.forEach(field => 
                // {
                //     field.value = "";
                // });
                allFormFieldWarns.forEach(warn => 
                {
                    warn.textContent = "";
                    warn.classList.remove("active");
                });
                hidePP();
            }

            // Switches to Log In form
            goToLogInForm.forEach(elem => 
            {
                elem.addEventListener("click" , () => 
                {
                    signInForm.classList.add("active");
                    recPassForm.classList.remove("active");
                    clearFields();
                });
            });

            // Switching to Account Recovery form
            goToRecoverAccForm.forEach(elem => 
            {
                elem.addEventListener("click" , () => 
                {
                    recPassForm.classList.add("active");
                    signInForm.classList.remove("active");
                    clearFields();
                });
            });

            
        // Validates Input for Username

            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Characters allowed a-z , A-Z , 0-9, underscore
             */

            userEmail.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(user_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "User"
            function validateLogInEmail(event)
            {
                let eml = userEmail.value.toString().trim();
                let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                // Checks if the field is empty
                if((event.data == null) && (eml === ""))
                {
                    isUserEmailValid = false;
                }
                else if(!(check_for_AtSign_in_Email.test(eml)))
                {
                    isUserEmailValid = false;
                }
                // If all condition are met, the Email is valid, i.e "true";
                else
                {
                    isUserEmailValid = true;
                }
            }

            userEmail.addEventListener("input" , validateLogInEmail);

            // Switch to the next field
            userEmail.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isUserEmailValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    userPassword.focus();
                }
            }


        // Validates Input for Password

            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */


            // Sepcifies the allowed characters for Before input
            userPassword.addEventListener("beforeinput", (event) => 
            {
                if(event.data != null && !(user_pass_cond).test(event.data))
                    event.preventDefault();
            });


            // Validation for Password
            function validateUserPassword(event) 
            {
                let pswd = userPassword.value.toString().trim();
                const userPass_Cond_SpecialChar = /\W/g;
                const userPass_Cond_num = /\d/g;
                const userPass_Cond_Lett_Upr = /[A-Z]/g;
                const userPass_Cond_Lett_Lwr = /[a-z]/g;

                // Checks if there is any value in the input feild
                if(((event.data == null) && (pswd === "")))
                {
                    isUserPassValid = false;
                }
                // Checks if the pattern is less "8" characters and above than "100" characters
                else if(((pswd.length > 0) && (pswd.length < 8)))
                {
                    isUserPassValid = false;
                }
                // Checks if the input fits the specified pattern
                else if(!(userPass_Cond_SpecialChar.test(pswd) 
                    && userPass_Cond_num.test(pswd)
                    && userPass_Cond_Lett_Upr.test(pswd)
                    && userPass_Cond_Lett_Lwr.test(pswd)
                ))
                {
                    isUserPassValid = false;
                }
                // If all checks are completed then it is accepted
                else
                {
                    // logInWarn.textContent = "";
                    isUserPassValid = true;
                }
            }

            userPassword.addEventListener("input" , validateUserPassword);

            // Switch to the next field
            userPassword.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isUserPassValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    logInBtn.click();
                }
            }


        //  Validate Log in details

            // Checks if user's input is valid and if the inputted values correct
            async function signInUvidUser(email, password) 
            {
                // Return if credentials are invalid
                if(!(isUserEmailValid && isUserPassValid)) return notification("notifyBad" , "Email or Password is incorrect");
                
                // Disable all fields & signin button
                allFormFields.forEach(item => item.disabled = true);
                logInBtn.disabled = true;

                const auth = window.firebaseAuth;

                try 
                {
                    await auth.signInWithEmailAndPassword(email, password);

                    // Notify user
                    notification("notifyGood", "Signed in");

                    // Checks and defers to the page user might have been trying to access
                    // defer_page_route('get');
                } 
                catch(error) 
                {
                    // console.error("Sign-in error:", error);
                    notification(`notifyBad` , `Invalid credentials or account doesn't exist`);

                    // Enable all fields & signin button
                    allFormFields.forEach(item => item.disabled = false);
                    logInBtn.disabled = false;
                }
            }
                

            logInBtn.addEventListener("click" , () => 
            {
                signInUvidUser(userEmail.value , userPassword.value);
            });




        // Sign In with a Provider

            prvdSignIn.onclick = () => initPrvdModal();
        
        


        // Forgot Password
            
            // Sepcifies the allowed characters for Before input
            resetPass_email.addEventListener("beforeinput", (event) => 
            {
                if(event.data != null && !(resetPass_email_cond).test(event.data))
                event.preventDefault();
            });

            function resetPasswordRequest(e)
            {
                let rst_pswd = resetPass_email.value.toString().trim();

                // Checks if the field is empty
                if((e.data == null) && (rst_pswd === ""))
                {
                    resetPass_SubmitBtn.disabled = true;
                    resetPass_warn.textContent = "Invalid Email";
                    resetPass_warn.classList.add("active");
                }
                // Condition for valid email
                else if(!(resetPass_validEmail.match(rst_pswd)))
                {
                    resetPass_SubmitBtn.disabled = true;
                    resetPass_warn.textContent = "Invalid Email";
                    resetPass_warn.classList.add("active");
                }
                // If conditions are met, function is called to send the email
                else
                {
                    resetPass_SubmitBtn.disabled = false;
                    resetPass_warn.textContent = "";
                    resetPass_warn.classList.remove("active");
                }

            }
            resetPass_email.addEventListener("input", resetPasswordRequest);

            // Sends password request if email is exists and is valid
            function sendPasswordReset(email)
            {
                if(resetPass_SubmitBtn.disabled == true) return;

                const auth = window.firebaseAuth;

                // Send password reset email
                auth.sendPasswordResetEmail(email)
                .then(() => 
                {
                    resetPass_email.disabled = true;
                    resetPass_SubmitBtn.disabled = true;

                    // Notify user
                    notification(`notifyGood`, "Password reset email sent. Check your inbox(and spam)");
                })
                .catch((error) => 
                {
                    console.error("Failed to send password reset email:", error);
                    if (error.code === "auth/user-not-found") 
                    {
                        notification(`notifyBad`, "No user found with this email.");
                    } 
                    else if (error.code === "auth/invalid-email") 
                    {
                        notification(`notifyBad`, "Invalid email address.");
                    }
                    else
                    {
                        notification(`notifyBad`, "Something went wrong. Try again.");
                    }
                });
            }

            // Calls function to validate and send reset password link
            resetPass_SubmitBtn.addEventListener("click" , () => 
            {
                sendPasswordReset(resetPass_email.value);
            });
    }


    // Sign In with a Provider
    function initPrvdModal()
    {
        try
        {
            const cnctEmPrvdBdr = document.createElement("div");
            cnctEmPrvdBdr.classList.add("genAtnModalBdr");
            cnctEmPrvdBdr.innerHTML = 
            `
                <div class="genAtnModalBcg closeCnctEmPrvdBtn"></div>
                <div class="genAtnModalBox">
                    <div class="genAtnModalCtnt">
                        <div class="genAtnModalHeader">
                            <div class="genAtnModalHeaderIconBox closeCnctEmPrvdBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>
                            <div class="genAtnModalHeaderText">
                                <span class="large">S</span>
                                <span class="small">elect an Email Provider</span>
                            </div>
                        </div>
                        <div class="genAtnModalOptBcg createProfItemBcg">
                            <div class="genAtnModalOptBdr createProfItemBox">
                                <button class="genAtnModalOptBox cnctEmPrvdItem" data-prvd="google">
                                    <div class="genAtnModalOptIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIconSvg">
                                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z" />
                                        </svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox ">
                                        <span class="genAtnModalOptText ">Google</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            documentCtnt.appendChild(cnctEmPrvdBdr);

            const cnctEmPrvdCloseBtn = document.querySelectorAll(".closeCnctEmPrvdBtn");
            const cnctEmPrvdItemBtn = document.querySelectorAll(".cnctEmPrvdItem");
            let cnctEmPrvdTimer;

            // Transitioning elements
            cnctEmPrvdTimer = setTimeout(async () => 
            {
                clearTimeout(cnctEmPrvdTimer);
                documentBody.setAttribute(`data-modal-state` , `open`);
                cnctEmPrvdBdr.classList.add("active");
            }, 250);

            // Closes the CnctEmPrvd modal
            async function closeCnctEmPrvd()
            {
                cnctEmPrvdBdr.classList.remove("active");
                cnctEmPrvdBdr.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    cnctEmPrvdBdr.removeEventListener("transitionend" , handleTransitionEnd);
                    cnctEmPrvdBdr.remove();
                    documentBody.removeAttribute(`data-modal-state`);
                    joinMtdPrvdBtn.disabled = false;
                });
            }

            async function em_prvd_signin(provider)
            {
                const auth = window.firebaseAuth;
                auth.signInWithPopup(provider)
                    .then(async (result) => 
                    {
                        if(result?.user)
                        {
                            const user = result?.user;
                            const isNewUser = Boolean(result?.additionalUserInfo?.isNewUser);

                            // Initialize new user's details in firebase
                            if(isNewUser)
                            {
                                window._is_uvp_fb_setup = false;
                                const isFbStp = await uvp_fb_setup(user.uid, (user?.displayName || `First-name-${generateRandomString()} Last-name-${generateRandomString()}`));

                                if(!isFbStp) throw new Error("Firebase user initialization in firestore failed");

                            }

                            // Refresh page to update UI
                            refreshUserState();
                        }
                    })
                    .catch((error) => 
                    {
                        console.error(error);
                    });
            }

            // Sign up with chosen provider
            const getEmPrvd = async (prvd = "") =>
            {
                if(typeof prvd !== "string") throw new Error("Invalid provider type");

                switch(prvd.toLowerCase())
                {
                    case 'google':
                        const provider = new firebase.auth.GoogleAuthProvider();
                        em_prvd_signin(provider);
                        break;
                    default:
                        notification('notifyBad', 'Invalid or no provider was selected');
                        break;
                }
            }

            // Sign in with resp[ective provider
            cnctEmPrvdItemBtn.forEach((btn) => 
            {
                btn.onclick = () => getEmPrvd(`${btn.getAttribute("data-prvd")?.toLowerCase() || ""}`);
            });

            // Closes the modal
            cnctEmPrvdCloseBtn.forEach(one => 
            {
                one.addEventListener("mousedown" , closeCnctEmPrvd);
            });
        }
        catch(error)
        {
            notification('notifyBad', 'An error occurred');
            console.error(error);
        }
    }

    