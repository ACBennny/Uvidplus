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
            let userEmailArray = [];
            const userEmail = document.querySelector("#form_logIn_id");
            let isUserEmailValid = false;
            
            // Password
            const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
            let userpasswordArray = [];
            const userPassword = document.querySelector("#form_logIn_pass");
            let isUserPassValid = false;

            // Warning
            const logInWarn = document.querySelector("#logIn_warn");

            // Account Recovery / Reset Password
            let testTimer;

            // Submitting Info
            const logInBtn = document.querySelector("#logIn_btn");


            // Forgot password
            const resetPass_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
            let resetPassArray = [];
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
                userEmailArray.push(userEmail.value);
                let lastEmailArrayval = userEmailArray.at(-1);
                let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                // Checks if the field is empty
                if((event.data == null) && (lastEmailArrayval.length <= 0))
                {
                    isUserEmailValid = false;
                }
                else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
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
                userpasswordArray.push(userPassword.value);
                let lastPassArrayVal = userpasswordArray.at(-1);
                const userPass_Cond_SpecialChar = /\W/g;
                const userPass_Cond_num = /\d/g;
                const userPass_Cond_Lett = /[A-Z a-z]/g;

                // Checks if there is any value in the input feild
                if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                {
                    isUserPassValid = false;
                }
                // Checks if the pattern is less "8" characters and above than "100" characters
                else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                {
                    isUserPassValid = false;
                }
                // Checks if the input fits the specified pattern
                else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                    && lastPassArrayVal.match(userPass_Cond_Lett)
                    && lastPassArrayVal.match(userPass_Cond_num)
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
        
        


        // Forgot Password
            
            // Sepcifies the allowed characters for Before input
            resetPass_email.addEventListener("beforeinput", (event) => 
            {
                if(event.data != null && !(resetPass_email_cond).test(event.data))
                event.preventDefault();
            });

            function resetPasswordRequest(e)
            {
                // adds user input into array
                resetPassArray.push(resetPass_email.value);
                let lastEmailArrayval = resetPassArray.at(-1);

                // Checks if the field is empty
                if((e.data == null) && (lastEmailArrayval.length <= 0))
                {
                    resetPass_SubmitBtn.disabled = true;
                    resetPass_warn.textContent = "Invalid Email";
                    resetPass_warn.classList.add("active");
                }
                // Condition for valid email
                else if(!(lastEmailArrayval.match(resetPass_validEmail)))
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

    