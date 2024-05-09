/*************************************************************
 * This is the script for the Join page of Uvid
 * Here , user will be able to create, log in or  recover their account
 * There is also form validation to ensure proficiency of inputs in the data fields
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


/*************************************************************
 * This is the script for the landing page of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


// DEFINITION

    const bodyDoc = document.body;
    const preloaderBdr = document.querySelector('#preloader');

    // Form Switching

        // The Forms
        const joinMMLogInForm = document.querySelector(".logIn_FormBox");
        const joinMMRecoverAccForm = document.querySelector(".RecoverAcc_FormBox");
        const joinMMSignUpForm = document.querySelector(".signUp_FormBox");

        // The Buttons 
        const goToLogInForm = document.querySelectorAll(".toLogInForm");
        const goToRecoverAccForm = document.querySelectorAll(".toRecoverAccForm");
        const goToSignUpForm = document.querySelectorAll(".toSignUpForm");

        // All form fields and warnings
        const allFormFields = document.querySelectorAll(".form_input_box .form_input_field");
        const allInputFields = document.querySelectorAll('.form_input_box input');
        const allFormFieldWarns = document.querySelectorAll(".form_input_bdr .form_input_warn");


    // Form Validation

        // Log In Form

            // Username
            const user_name_cond = new RegExp("^[a-zA-Z0-9_]*$");
            let userLogArray = [];
            const userName = document.querySelector("#form_logIn_id");
            let isUserLogValid = false;
            
            // Password
            const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
            let userpasswordArray = [];
            const userPassword = document.querySelector("#form_logIn_pass");
            let isUserPassValid = false;

            // Warning
            const logInWarn = document.querySelector("#logIn_warn");


            // Account Recovery / Reset Password
            let testLog_user = "uvidtestuser";
            let testLog_email = "craft.testuser.Acc.email@gmail.com";
            let testLog_pass = "@abcd=1234";
            let testTimer;

            // Submitting Info


        
        // Sign In Form

            // Username
            const userName_Condition = new RegExp("^[a-zA-Z0-9_]*$");
            let userArray = [];
            const newUserName = document.querySelector("#form_signUp_user");
            const newUserWarn = document.querySelector("#form_signUp_userWarn");
            let isUserValid = false;

            // Email
            const new_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
            let emailArray = [];
            const newEmail = document.querySelector("#form_signUp_email");
            const newEmailWarn = document.querySelector("#form_signUp_emailWarn");
            let isEmailValid = false;


            // Password
            const new_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

            let passwordArray = [];
            const newPassword = document.querySelector("#form_signUp_pass");
            const newPassWarn = document.querySelector("#form_signUp_passWarn");

            // See & Hide password
            const seeUnseePassField = document.querySelectorAll(".form_PassBox .form_Pass");
            const seeUnseePass = document.querySelectorAll(".form_input_box .seeUnseePass");

            // Conditions for password
            const newPassInputBdr = document.querySelector(".form_Pass_input_bdr");
            const newPassInputBox = document.querySelector(".form_PassBox");
            const newPassCondBox = document.querySelector(".form_condBox");
            const newPassCondMain = document.querySelectorAll(".listItem_ctnt");

            const newPassLength = document.querySelector(".listItem_ctnt.passLength");
            const newPassLetter = document.querySelector(".listItem_ctnt.passLetter");
            const newPassNumber = document.querySelector(".listItem_ctnt.passNumber");
            const newPassSpecChar = document.querySelector(".listItem_ctnt.passSpecChar");

            // The icons for each event
            const newPassLengthIcn = newPassLength.querySelector(".listItem_ctntIcon i");
            const newPassLetterIcn = newPassLetter.querySelector(".listItem_ctntIcon i");
            const newPassNumberIcn = newPassNumber.querySelector(".listItem_ctntIcon i");
            const newPassSpecCharIcn = newPassSpecChar.querySelector(".listItem_ctntIcon i");

            // Boolean variables for each event. Only true if condition is met
            let isPassLengthValid = false;
            let isPassLetterValid = false;
            let isPassNumberValid = false;
            let isPassSpecCharValid = false;

            // The final validation. This is only true if all booleans of the conditions are true
            let isPassValid = false;

            // Confirm Password
            const confirmPassword = document.querySelector("#form_signUp_confpass");
            const confNewPassWarn = document.querySelector("#form_signUp_confpassWarn");
            let confPasswordArray = [];
            let isConfPassValid = false;


            // Forgot password
            const resetPass_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
            let resetPassArray = [];
            const resetPass_email = document.querySelector("#form_recover_Acc");
            const resetPass_warn = document.querySelector("#form_recover_AccWarn");
            const resetPass_SubmitBtn = document.querySelector("#recoverAcc_btn");
            let resetPass_validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Submitting info
            const signUpBtn = document.querySelector("#signUp_btn");
            signUpBtn.disabled = false;




// BODY



// PRELOADER

    // This function removes the preloader after the skeleton of the website has been loaded

    window.addEventListener("load", () => {
        preloaderBdr.style.display = "none";
        bodyDoc.classList.add("bodystart");
        AccountJoin();
    });




// ACCOUNT LOG IN / SIGN UP

    // Function to show the forms with Scroll Reveal - Simulated
    function AccountJoin()
    {
        const joinMMHouse = document.querySelector(".join_house");
        let housetimer;
        housetimer = setTimeout(() => {

            // style class to simulate it
            joinMMHouse.classList.add("active");

            // Clearing out timer
            clearTimeout(housetimer);
        }, 250);
    }



// SWITCHING BETWEEN FORMS

    // Clears fields after a form switch
    function hidePP()
    {
        seeUnseePassField.forEach(field => 
        {
            field.type = "password";
        });
        seeUnseePass.forEach((one, i) => 
        {
            one.classList.replace("fa-eye-slash" , "fa-eye");
        });
    }

    function clearFields()
    {
        allFormFields.forEach(field => 
        {
            field.value = "";
        });
        allFormFieldWarns.forEach(warn => 
        {
            warn.textContent = "";
            warn.classList.remove("active");
        });
        hidePP();
    }

    // Switches to Log In form
    goToLogInForm.forEach(elem => {
        elem.addEventListener("click" , () => {
            joinMMLogInForm.classList.add("active");
            joinMMRecoverAccForm.classList.remove("active");
            joinMMSignUpForm.classList.remove("active");
            clearFields();
        });
    });

    // Switching to Account Recovery form
    goToRecoverAccForm.forEach(elem => {
        elem.addEventListener("click" , () => {
            joinMMRecoverAccForm.classList.add("active");
            joinMMLogInForm.classList.remove("active");
            joinMMSignUpForm.classList.remove("active");
            clearFields();
        });
    });

    // Switching to Sign Up form
    goToSignUpForm.forEach(elem => {
        elem.addEventListener("click" , () => {
            joinMMSignUpForm.classList.add("active");
            joinMMLogInForm.classList.remove("active");
            joinMMRecoverAccForm.classList.remove("active");
            clearFields();
        });
    });




//  VALIDATING USER INPUTS


    // LOGGING IN TO YOUR ACCOUNT

        // Validates Input for Username
            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Characters allowed a-z , A-Z , 0-9, underscore
             */

            userName.addEventListener("beforeinput", (event) => {
                if (event.data != null && !(user_name_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "User"
            function validateLogInUsername(event){
                userLogArray.push(userName.value);
                let lastCurArrayVal = userLogArray.at(-1);

                let userNameCond_letter = /^[A-Z a-z]/g;
                let userNameCond_num = /\d/g;
                let userScrCond = /(^_|_$)/gi;
                let tempArray = userLogArray;
                let lastTempArrayVal = tempArray.at(-1);
                let unScr = lastTempArrayVal.replace(/[^_]/g, "");

                // Checks if username starts/ends with an underscore
                if((lastCurArrayVal.match(userScrCond)))
                {
                    isUserLogValid = false;
                }
                //Checks if username has more than "one" underscore
                else if(unScr.length > 1)
                {
                    isUserLogValid = false;
                }
                // Checks if username contains only numbers and starts with a number
                else if(!(lastCurArrayVal.match(userNameCond_letter)) && (lastCurArrayVal.match(userNameCond_num)))
                {
                    isUserLogValid = false;
                }
                // Checks if username is between "5" and "20" characters
                else if(((lastCurArrayVal.length > 0) && (lastCurArrayVal.length < 5)) || (lastCurArrayVal.length > 20))
                {
                    isUserLogValid = false;
                }
                else if((event.data == null) && (lastCurArrayVal.length <= 0))
                {
                    isUserLogValid = false;
                }
                else
                {
                    isUserLogValid = true;
                }

                
            }

            userName.addEventListener("input" , validateLogInUsername);


        // Validates Input for Password
            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */


            // Sepcifies the allowed characters for Before input
            userPassword.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(user_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Validation for Password

                function validateUserPassword(event) {
                    userpasswordArray.push(userPassword.value);
                    let lastPassArrayVal = userpasswordArray.at(-1);
                    const userPass_Cond_SpecialChar = /\W/g;
                    const userPass_Cond_num = /\d/g;
                    const userPass_Cond_Lett = /[A-Z a-z]/g;

                    // Checks if there is any value int the input feild
                    if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserPassValid = false;
                    }
                    // Checks if the pattern is less "8" characters and above than "100" characters
                    else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserPassValid = false;
                    }
                    // Checks if the input fits the specified pattern
                    else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                        && lastPassArrayVal.match(userPass_Cond_Lett)
                        && lastPassArrayVal.match(userPass_Cond_num)
                    ))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
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


        //  Validate Log in details

                // Checks if user's input is valid and if the inputted values correct
                function validateLogInCreds()
                {
                    // This occurs if user's input is valid and the inputted values are correct
                    if(((isUserLogValid == true) 
                        && (isUserPassValid == true) 
                        && (userName.value == testLog_user.valueOf()) 
                        && (userPassword.value == testLog_pass.valueOf())
                    ))
                    {
                        logInWarn.textContent = "Logging in...";
                        logInWarn.classList.add("active");
                        testTimer = setTimeout(() => 
                        {
                            window.location.pathname = "/Library/Anime.html";
                        }, 1500);
                    }
                    // If it is not correct, the user is required to try again
                    else
                    {
                        logInWarn.textContent = "Email or Password is incorrect";
                        logInWarn.classList.add("active");
                    }
                }


        // Forgot Password
            
            // Sepcifies the allowed characters for Before input
            resetPass_email.addEventListener("beforeinput", (event) => {
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
                        resetPass_warn.textContent = "Invalid Email";
                        resetPass_warn.classList.add("active");
                    }
                    // Condition for valid email
                    else if(!(lastEmailArrayval.match(resetPass_validEmail)))
                    {
                        resetPass_warn.textContent = "Invalid Email";
                        resetPass_warn.classList.add("active");
                    }
                    // If conditions are met, function is called to send the email
                    else
                    {
                        resetPass_SubmitBtn.value='Email Sent';
                        resetPass_SubmitBtn.disabled=true;
                        resetPass_warn.textContent = "";
                        resetPass_warn.classList.remove("active");
                        emailPassLink();

                        // Generating link String Function
                        function generateRandomString() {
                            const length = 16;
                            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                            var result = '';
                            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                            return result;
                        };

                        // Carries out the sending of the email
                        function emailPassLink(){
                            // Gets string for link
                            let thisLinkcart1 = generateRandomString();
                            let thisLinkcart2 = generateRandomString();

                            // Email content
                            let link_part1 = thisLinkcart1;
                            let link_part2 = thisLinkcart2;
                            let new_email_verBtn = resetPass_email.value;
                            let new_email_verSubject = "Password Reset";
                            let new_email_verBody= "This is a test (jokes) Password request for " + resetPass_email.value + ". Click here to reset your password " 
                            + "https://bluecraftologies.com/Join/LogIn/?=Password+Error+Req+%20%Request+Reset+Email=?%value!/" + link_part1 
                            + "/blueCrafts_Request+Error+%201%+Req+open=null?/Users/" + link_part2 + "/if+fall=open!+%call%lessChange.aspx";
                            // console.log("email val => " + new_email_verBody);

                            // Send Email
                            setTimeout(() => 
                            {
                                // Reloads page after  seconds
                                setTimeout(() => window.location.reload(), 10000);

                                /* ========= Code by Post Mail =========== starts ===*/
                                    // var form_id_js = "RecoverAcc_form";

                                    // var data_js = {
                                    //     "access_token": "0m8ikok0thqv6rtoucea493n"
                                    // };
        
                                    // function js_send() {
                                    //     var request = new XMLHttpRequest();
        
                                    //     var subject = new_email_verSubject;
                                    //     var message = new_email_verBody;
                                    //     data_js['subject'] = subject;
                                    //     data_js['text'] = message;
                                    //     var params = toParams(data_js);
        
                                    //     request.open("POST", "https://postmail.invotes.com/send", true);
                                    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
                                    //     request.send(params);
        
                                    //     return false;
                                    // }
        
                                    // setTimeout(() => js_send(), 1);
        
                                    // function toParams(data_js) {
                                    //     var form_data = [];
                                    //     for ( var key in data_js ) {
                                    //         form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
                                    //     }
        
                                    //     return form_data.join("&");
                                    // }
        
                                    // var js_form = document.getElementById(form_id_js);
                                    // js_form.addEventListener("submit", function (e) {
                                    //     e.preventDefault();
                                    // });
                                /* ========= Code by Post Mail =========== ends ==*/
                                /* ===== ==> Visit https://postmail.invotes.com <== testing only! === */
                            } , 1000);
                        }
                    }

                    
                }

                // Calls function to validate and send reset password link
                resetPass_SubmitBtn.addEventListener("click" , resetPasswordRequest);
                

            const logInBtn = document.querySelector("#logIn_btn");
            logInBtn.addEventListener("click" , validateLogInCreds);


    // CREATING ACCOUNT (SIGN UP)

        // Turns off autocomplete
        allInputFields.forEach(inputField => 
        {
            inputField.ariaAutoComplete = "off";
            inputField.ariaHasPopup = false;
            inputField.autoCorrect = false;
        });
    

        // Validates Input for Username

            // Conditions -
            /**
             *  1 - Contains Only LETTERS and NUMBERS and ONE underscore
             *  2 - Cannot contain only numbers
             *  3 - Can ONLY start/end with a a letter NOT numbers or underscore
             */


            // Validation function For "Username"

            // Sepcifies the allowed characters for Before input
            newUserName.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(userName_Condition).test(event.data))
                event.preventDefault();
            });
                
            
                function validateUsername(event)
                {
                    userArray.push(newUserName.value);
                    let lastCurArrayVal = userArray.at(-1);

                    let userNameCond_letter = /^[A-Z a-z]/g;
                    let userNameCond_num = /\d/g;
                    let userScrCond = /(^_|_$)/gi;
                    let tempArray = userArray;
                    let lastTempArrayVal = tempArray.at(-1);
                    let unScr = lastTempArrayVal.replace(/[^_]/g, "");

                    // Checks if username starts/ends with an underscore
                    if((lastCurArrayVal.match(userScrCond)))
                    {
                        newUserWarn.textContent = "Username can NOT start/end with an underscore";
                        newUserWarn.classList.add("active");
                        isUserValid = false;
                    }
                    //Checks if username has more than "one" underscore
                    else if(unScr.length > 1)
                    {
                        newUserWarn.textContent = "Username can ONLY have ONE underscore";
                        newUserWarn.classList.add("active");
                        isUserValid = false;
                    }
                    // Checks if username contains only numbers and starts with a number
                    else if(!(lastCurArrayVal.match(userNameCond_letter)) && (lastCurArrayVal.match(userNameCond_num)))
                    {
                        newUserWarn.textContent = "Username can NOT start with a number or contain only numbers";
                        newUserWarn.classList.add("active");
                        isUserValid = false;
                    }
                    // Checks if username is between "5" and "20" characters
                    else if(((lastCurArrayVal.length > 0) && (lastCurArrayVal.length < 5)) || (lastCurArrayVal.length > 20))
                    {
                        newUserWarn.textContent = "Username length must be \"5\" min and \"20\" max";
                        newUserWarn.classList.add("active");
                        isUserValid = false;
                    }
                    else if((event.data == null) && (lastCurArrayVal.length <= 0))
                    {
                        newUserWarn.textContent = "Required";
                        newUserWarn.classList.add("active");
                        isUserValid = false;
                    }
                    else
                    {
                        newUserWarn.textContent = "";
                        newUserWarn.classList.remove("active");
                        isUserValid = true;
                    }

                    
                }

                newUserName.addEventListener("input" , validateUsername);
        
        
        // Validates Input for Email
            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Will be verified before account can be created
             *  3 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
             */

            // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
            newEmail.addEventListener("beforeinput", (event) => {
                if (event.data != null && !(new_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Email"
                function validateNewEmail(event)
                {
                    emailArray.push(newEmail.value);
                    let lastEmailArrayval = emailArray.at(-1);

                    let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // Checks if the field is empty
                    if((event.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        newEmailWarn.textContent = "Required";
                        newEmailWarn.classList.add("active");
                        isEmailValid = false;
                    }
                    else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
                    {
                        newEmailWarn.textContent = "Invalid Email";
                        newEmailWarn.classList.add("active");
                        isEmailValid = false;
                    }
                    // // If all condition are met, the Email is valid, i.e "true";
                    else
                    {
                        newEmailWarn.textContent = "";
                        newEmailWarn.classList.remove("active");
                        isEmailValid = true;
                    }

                    
                }

                newEmail.addEventListener("input" , validateNewEmail);




        // Validates Input for Password
            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */

            // Password Regex - Allows all except spaces
            newPassword.addEventListener("beforeinput", (event) => 
            {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Unhides the icon to change the input tpye of the password
            seeUnseePassField.forEach((field, i) => 
            {
                field.addEventListener("input" , () => 
                {
                    // if the length is greater than zero unhide icon
                    if(field.value.length > 0)
                    {
                        seeUnseePass[i].classList.add("active");
                        return;
                    }
                    // if less than zero covert type back to password and hide icon
                    field.type = "password";
                    seeUnseePass[i].classList.remove("active");
                });
            });

            // Allows user to change input type for password in order to see password via onclick
            seeUnseePass.forEach((one, i) => 
            {
                one.addEventListener("click" , () => 
                {
                    if(one.classList.contains("fa-eye-slash"))
                    {
                        seeUnseePassField[i].type = "password";
                        one.classList.replace("fa-eye-slash" , "fa-eye");
                        return;
                    }
                    seeUnseePassField[i].type = "text";
                    one.classList.replace("fa-eye" , "fa-eye-slash");
                });
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
                passwordArray.push(newPassword.value);
                let lastPassArrayVal = passwordArray.at(-1);
                const userPass_Cond_SpecialChar = /\W/g;
                const userPass_Cond_num = /\d/g;
                const userPass_Cond_Lett = /[A-Z a-z]/g;

                // Checks if there is any value in the input feild
                if(((event.data == null) && (newPassword.length <= 0)))
                {
                    newPassLength.classList.replace("goodCond" , "badCond");
                    newPassLengthIcn.classList.replace("fa-circle-check" , "fa-xmark-circle");
                    isPassLengthValid = false;
                    isPassLetterValid = false;
                    isPassNumberValid = false;
                    isPassSpecCharValid = false;
                }

                // Checks if the pattern is less "8" characters
                if(((lastPassArrayVal.length > -1) && (lastPassArrayVal.length < 8)))
                {
                    newPassLength.classList.replace("goodCond" , "badCond");
                    newPassLengthIcn.classList.replace("fa-circle-check" , "fa-xmark-circle");
                    isPassLengthValid = false;
                }
                else
                {
                    newPassLength.classList.replace("badCond" , "goodCond");
                    newPassLengthIcn.classList.replace("fa-xmark-circle" , "fa-circle-check");
                    isPassLengthValid = true;
                }

                // Checks if it contains a Letter
                if((lastPassArrayVal.match(userPass_Cond_Lett)))
                {
                    newPassLetter.classList.replace("badCond" , "goodCond");
                    newPassLetterIcn.classList.replace("fa-xmark-circle" , "fa-circle-check");
                    isPassLetterValid = true;
                }
                else
                {
                    newPassLetter.classList.replace("goodCond" , "badCond");
                    newPassLetterIcn.classList.replace("fa-circle-check" , "fa-xmark-circle");
                    isPassLetterValid = false;
                }

                // Checks if it contains number
                if((lastPassArrayVal.match(userPass_Cond_num)))
                {
                    newPassNumber.classList.replace("badCond" , "goodCond");
                    newPassNumberIcn.classList.replace("fa-xmark-circle" , "fa-circle-check");
                    isPassNumberValid = true;
                }
                else
                {
                    newPassNumber.classList.replace("goodCond" , "badCond");
                    newPassNumberIcn.classList.replace("fa-circle-check" , "fa-xmark-circle");
                    isPassNumberValid = false;
                }
                
                // Checks if it contains a special character
                if((lastPassArrayVal.match(userPass_Cond_SpecialChar)))
                {
                    newPassSpecChar.classList.replace("badCond" , "goodCond");
                    newPassSpecCharIcn.classList.replace("fa-xmark-circle" , "fa-circle-check");
                    isPassSpecCharValid = true;
                }
                else
                {
                    newPassSpecChar.classList.replace("goodCond" , "badCond");
                    newPassSpecCharIcn.classList.replace("fa-circle-check" , "fa-xmark-circle")
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

            // Validation for Confirm Password
            confirmPassword.addEventListener("beforeinput", (event) => 
            {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            function confirmNewPass(event)
            {
                confPasswordArray.push(confirmPassword.value);
                let lastConfPassArrayVal = confPasswordArray.at(-1);

                if(((event.data == null) && (lastConfPassArrayVal.length <= 0)))
                {
                    confNewPassWarn.textContent = "Required";
                    confNewPassWarn.classList.add("active");
                    isConfPassValid = false;
                }
                else if((isPassValid == false) || (lastConfPassArrayVal != newPassword.value))
                {
                    confNewPassWarn.textContent = "Passwords do not match";
                    confNewPassWarn.classList.add("active");
                    isConfPassValid = false;
                }
                else
                {
                    confNewPassWarn.textContent = "";
                    confNewPassWarn.classList.remove("active");
                    isConfPassValid = true;
                }
            }

            confirmPassword.addEventListener("input" , confirmNewPass);



            // Checks If user fills All input fields Correctly
            signUpBtn.addEventListener("click" , () => 
            {
                // If all input fields are filled correctly, call verification funnction to verify user
                // if(((signUpBtn.disabled == false) && (isUserValid == true) && (isPassValid == true) && (isConfPassValid == true) && (isEmailValid == true)))
                // {
                //     signUpBtn.disabled = true;
                //     verification(newEmail.value);
                // }
                // // If not filled correctly, alert user 
                // else
                // {
                //     alert("Please Check that all fields have been filled correctly");
                // }
                verification(newEmail.value);
            });




        // Verification (through email)

            function verification(personnel , destination)
            {
                // Verification Popup modal
                const verCodeBdr = document.createElement("div");
                verCodeBdr.classList.add("vercode_bdr");
                verCodeBdr.innerHTML = 
                ` 
                <!-- preloader -->
                <div class="ver_loader">
                    <span class="vl_1">
                        <span class="vl_2"></span>
                    </span>
                    <p class="vl_note">
                        <span id="loader_ctnt">Processing</span>
                        <span id="vl_note_loader">
                            <i class="fa-solid fa-circle" style="--i:1"></i>
                            <i class="fa-solid fa-circle" style="--i:2"></i>
                            <i class="fa-solid fa-circle" style="--i:3"></i>
                        </span>
                    </p>
                </div>
                    
                <!-- close box -->
                <div class=" genIconBox close_verification_box">
                    <i class="fa-solid fa-xmark genIcon"></i>
                </div>

                <!-- background -->
                <div class="vercode_bcg"></div>

                <!-- content -->
                <div class="vercode_box">
                    <form  class="email_verForm"  id="email_form">

                        <!-- Title -->
                        <div class="ask_for_ver">
                            <h4>Verification</h4>
                            <p>
                                <span id="ver_sub_title"> Request a code</span>
                            </p>
                        </div>
                        <input type="text" name="reply_to" placeholder="Your Email" id="new_email_verBtn"/>

                        <!-- Validation field -->
                        <span class="typeincode">
                            <!-- <h4>An OTP has been sent to your email</h4> -->
                            <span class="input_verCode_num">
                                <input id="input_verCode" type="text" placeholder="Enter Code here"/>
                            </span>
                            <p>Code expires in <span id="time_countdown">300</span>seconds</p>
                        </span>

                        <!-- set the reply-to address -->
                        <span class="ver_req_box">
                            <input id="submit_form" type="button" value="Get Code" class="genBtn" />
                            <input id="submit_verCode" type="button" value="Verify" class="hideBtn genBtn" />
                            <input id="request_verCode" type="button" value="Try Again" class="hideBtn genBtn" />
                            <p class="ver_sent_warn"></p>
                        </span>
                    
                        <!-- Form Provider - Powered by Postmail -->
                        <p class="form_provider">
                            <a href="https://acbennny.netlify.app" target="_blank" class="by_ABC">Made by acbennny</a>
                            <a href="https://postmail.invotes.com" target="_blank" class="by_PM">Powered by PostMail</a>
                        </p>
                    </form>
                </div>
                `;
                bodyDoc.appendChild(verCodeBdr);
                const verCodeBox_loader = verCodeBdr.querySelector(".ver_loader");
                const ver_loader_note_ctnt = verCodeBox_loader.querySelector("#loader_ctnt");
                const close_verCodeBdr = verCodeBdr.querySelector(".close_verification_box");
                const sendVerCode = verCodeBdr.querySelector(".ver_req_box #submit_form");
                const valVerCode = verCodeBdr.querySelector(".ver_req_box #submit_verCode");
                const reqVerCode = verCodeBdr.querySelector(".ver_req_box #request_verCode");
                const verCodeBox = verCodeBdr.querySelector('.ask_for_ver');
                const verCodeTitle = verCodeBox.querySelector('.ask_for_ver h4');
                const verCodeSubTitle = verCodeBox.querySelector('.ask_for_ver p');
                const verCodeSubTitleCtnt = verCodeSubTitle.querySelector('#ver_sub_title');
                const enterOtp = verCodeBdr.querySelector(".typeincode");
                const enterOtpInput = enterOtp.querySelector("#input_verCode");
                const verCodeTimer = enterOtp.querySelector('p #time_countdown');
                let timer;

                // Preloader
                ver_loader_note_ctnt.draggable = false;

                // if box is closed , it opens
                if(!(verCodeBdr.classList.contains("active")))
                {
                    document.body.classList.add('off_Flow');
                    document.body.classList.remove('on_Flow');
                    verCodeBdr.classList.add("active");
                    verCodeBox_loader.classList.add("active");
                    verCodeLoader();
                    emailVerCode();

                }

                // Closes the verification box
                close_verCodeBdr.addEventListener("click" , (e) => 
                {
                    let warn_to_close = confirm(" Please note that closing this form will forfeit the account creation process \nAll unsaved changes would be lost");
                    if((warn_to_close == false))
                    {
                        e.preventDefault();
                    }
                    else
                    {
                        window.location.reload();
                    }
                });

                // Removes preloader after "5" seconds
                function verCodeLoader()
                {
                    verCodeBox_loader.classList.add("active");
                    if((verCodeBox_loader.classList.contains("active")))
                    {
                        setTimeout(() => verCodeBox_loader.classList.remove("active") , 5000);
                    }
                }
                    
                //  Generating OTP String
                function generateRandomString()
                {
                    const length = 32
                    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()|\"@#$%&*^&!~`/;:<>[{]}-+=?';
                    var result = '';
                    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                    return result;
                }

                // Generate a random secret key
                var secret = generateRandomString(32);
                // console.log('Secret key:', secret);

                // Generate OTP num
                function generateOTP()
                {
                    const len = 8;
                    let otp = '';
                    const digits = '0123456789';
                    for (let i = 0; i < len; i++)
                    {
                        otp += digits[Math.floor(Math.random() * 10)];
                    }
                    return otp;
                }
                
                // Carries the sending of email
                function emailVerCode()
                {
                    verCodeSubTitleCtnt.textContent = "Request a code";
                    
                    // Gets code
                    // let thisVercart = generateRandomString();
                    let thisVercart = generateOTP();
                    // console.log(" val => " + thisVercart);
                    
                    // Stores user input for code
                    let enterCodeArray = [];

                    // Countdown timer for verification code
                    const timePeriod = 300;

                    function verTimer() 
                    {
                        let sec = timePeriod;
                        timer = setInterval(function()
                        {
                            sec--;

                            // Displays timer in page
                            verCodeTimer.textContent = sec;

                            //
                            if(sec == 200)
                            {
                                let askIfNoCode = confirm("Haven't seen your code? \nWill you like to have it displayed? (for dev testing)");
                                if(askIfNoCode == false)
                                {
                                    event.preventDefault();
                                }
                                else
                                {
                                    askIfNoCode = "";
                                    alert("Your code is : " + thisVercart);
                                }
                            }
                            
                            // Once timer hits "0" , a notification is diplayed and field for vercode is closed. User would need to request a new one
                            if (sec <= 0)
                            {
                                clearInterval(timer);
                                verCodeSubTitleCtnt.textContent = "Your code has expired. You will need to request a new one";
                                enterOtp.classList.remove("active");
                                valVerCode.classList.add("hideBtn");
                                reqVerCode.classList.remove("hideBtn");
                                verCodeTimer.textContent = "300";
                            }
                        }, 1000);
                    }

                    // Email content
                    let currVerC = thisVercart;
                    // console.log("email val => " + currVerC);
                    let new_email_verBtn = destination;
                    let new_email_verSubject = "Account Creation";
                    let new_email_verBody = "This is a OTP request for " + personnel + ". Your OTP is " + currVerC +" \n\n . Please do not share this code with anyone.";

                    // Makes send button active
                    if((sendVerCode.classList.contains("hideBtn")))
                    {
                        sendVerCode.classList.remove("hideBtn");
                        reqVerCode.classList.add("hideBtn");
                    }

                    // Send Email
                    sendVerCode.addEventListener("click" , () => 
                    {

                        /* ========= Code by Post Mail =========== starts ===*/
                            // var form_id_js = "signUp_form";

                            // var data_js = {
                            //     "access_token": "0m8ikok0thqv6rtoucea493n"
                            // };

                            // function js_send() {
                            //     var request = new XMLHttpRequest();

                            //     var subject = new_email_verSubject;
                            //     var message = new_email_verBody;
                            //     data_js['subject'] = subject;
                            //     data_js['text'] = message;
                            //     var params = toParams(data_js);

                            //     request.open("POST", "https://postmail.invotes.com/send", true);
                            //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                            //     request.send(params);

                            //     return false;
                            // }

                            // setTimeout(() => js_send(), 1);

                            // function toParams(data_js) {
                            //     var form_data = [];
                            //     for ( var key in data_js ) {
                            //         form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
                            //     }

                            //     return form_data.join("&");
                            // }

                            // var js_form = document.getElementById(form_id_js);
                            // js_form.addEventListener("submit", function (e) {
                            //     e.preventDefault();
                            // });
                        /* ========= Code by Post Mail =========== ends ==*/
                        /* ===== ==> Visit https://postmail.invotes.com <== testing only! === */
                        
                        // Removes the submit button and Replaces with validation button
                        sendVerCode.classList.add("hideBtn");
                        valVerCode.classList.remove("hideBtn");

                        // Changes sub-title to "An OTP has been sent to your email";
                        verCodeBox_loader.classList.add("active") 
                        if((verCodeBox_loader.classList.contains("active")))
                        {
                            let loadtimeVerSuccess = 10;
                            let sec = loadtimeVerSuccess;
                            let verSuccesstimer = setInterval(
                                function ()
                                {
                                    sec--;
                                    if(sec == 9)
                                    {
                                        ver_loader_note_ctnt.textContent = "Generating code";
                                    }
                                    if(sec == 4)
                                    {
                                        ver_loader_note_ctnt.textContent = "Sending Code";
                                    }
                                    if(sec == 1)
                                    {
                                        ver_loader_note_ctnt.textContent = "Success";
                                    }
                                    if(sec == 0)
                                    {
                                        clearInterval(verSuccesstimer);
                                        verCodeBox_loader.classList.remove("active");
                                        verCodeTitle.textContent = "Verification";
                                        verCodeSubTitleCtnt.textContent = "An OTP has been sent to your email";
                                        // Starts timer
                                        verTimer();
                                    }
                                }
                            , 1000);

                            // Activates Input field for Code
                            enterOtp.classList.add("active");
                        }
                    });

                    
                    // VALIDATING CODE

                        // Array to store wrong values
                        const invalidVerArray = [];

                        // Conditon for input - Allows only numbers
                        const enterOtp_Condition = new RegExp("^[0-9]*$");
                        enterOtpInput.ariaAutoComplete = "none";
                        enterOtpInput.autoComplete = "off";
                        enterOtpInput.autoCapitalize = "off";
                        enterOtpInput.autoCorrect = "off";
                        enterOtpInput.spellCheck = false;
                        enterOtpInput.ariaHasPopup = false;

                        enterOtpInput.addEventListener("beforeinput", (event) => 
                        {
                            if (event.data != null && !(enterOtp_Condition.test(event.data))) 
                                event.preventDefault();
                        });

                        // Stores user input in an array
                        enterOtpInput.addEventListener("input" , () =>
                        {
                            enterCodeArray.push(enterOtpInput.value);
                            let lastEnterCodeArrayVal = enterCodeArray.at(-1);
                        });

                        // Click to Validate
                        valVerCode.addEventListener("click" , () =>
                        {
                            // Gets last value in array
                            let lastEnterCodeArrayVal = enterCodeArray.at(-1);
                            // Assigns last value to avraible
                            let currValue = lastEnterCodeArrayVal;
                            // Makes preloader active
                            verCodeBox_loader.classList.add("active");
                            // Changes text Note on preloader to "verifying"
                            ver_loader_note_ctnt.textContent = "Verifying";

                            // Compares value inputed after 2.5 seconds
                            setTimeout(()=> 
                            {
                                // If user's inputeed is correct, this occurs
                                if(currValue == thisVercart)
                                {
                                    // Clears timer
                                    clearInterval(timer);

                                    // Sequence of messages displayed at differnet points ove a second period before is redirected to homepage
                                    setTimeout(
                                        function()
                                        {
                                            let loadtimeVerSuccess = 20;
                                            let seconds = loadtimeVerSuccess;
                                            let verSuccesstimer = setInterval(
                                                function (){
                                                    seconds--;
                                                    if(seconds == 19)
                                                    {
                                                        ver_loader_note_ctnt.textContent = "Verified";
                                                    }
                                                    if(seconds == 17)
                                                    {
                                                        ver_loader_note_ctnt.textContent = "Creating Account";
                                                    }
                                                    if(seconds == 7)
                                                    {
                                                        ver_loader_note_ctnt.textContent = "Account Created";
                                                    }
                                                    if(seconds == 5)
                                                    {
                                                        ver_loader_note_ctnt.textContent = "Redirecting";
                                                    }
                                                    if(seconds == 0)
                                                    {
                                                        clearInterval(verSuccesstimer);
                                                        preloaderBdr.style.display = "flex";
                                                        setTimeout(() => 
                                                        {
                                                            // preloaderBdr.style.display = "none";
                                                            window.location.pathname = "/Library/Anime.html";
                                                        }, 3000);
                                                    }
                                                }
                                            , 1000);
                                        }
                                    ,2500);
                                }
                                // If User makes more than three (3) wrong attempts this occurs
                                else if(invalidVerArray.length > 2)
                                {
                                    // Clears timer
                                    clearInterval(timer);

                                    // Makes preloader text note to ""
                                    ver_loader_note_ctnt.textContent = "";
                                    verCodeSubTitleCtnt.textContent = "You have made too many incorrect attempts";

                                    // The input field for user ver code is hidden
                                    enterOtp.classList.remove("active");

                                    // The try again button is made active
                                    valVerCode.classList.add("hideBtn");

                                    // The verify button is hidden
                                    reqVerCode.classList.remove("hideBtn");

                                    // Removes preloader after 2.5seconds
                                    setTimeout(() => verCodeBox_loader.classList.remove("active") , 2500);
                                }
                                // If user's input is incorrect, this occurs
                                else
                                {
                                    // Sets preloader text note to "invalid code"
                                    ver_loader_note_ctnt.textContent = "Invalid Code";

                                    // Adds the user input into the invalid array
                                    invalidVerArray.push(enterOtpInput.value);

                                    // Removes preloader after 2.5seconds
                                    setTimeout(() => verCodeBox_loader.classList.remove("active") , 2500);
                                }
                            },2500);
                        });
                }

                // Requesting new code
                reqVerCode.addEventListener("click" , emailVerCode);
                
            }



