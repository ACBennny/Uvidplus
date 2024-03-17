/*************************************************************
 * This is the script for the Join page of Uvid
 * Here , user will be able to create, log in or  recover their account
 * There is also form validation to ensure proficiency of inputs in the data fields
 * 
 * @name (Uvid)
 * @author (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


// PRELOADER

    //This function makes the preloader to be removed after the skeleton of the website has been loaded
    
    document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
    const preload = document.querySelector('#preloader');

    window.addEventListener("DOMContentLoaded", () => {
        preload.style.display = "none";
        document.body.classList.add('bodystart');
        document.oncontextmenu = document.body.oncontextmenu = function() {return true;}
    });


// This contains all code related to the sign-in/sign-up fornm


        //This function enables the user to toggle between the sign in and sign up form
        let logn = document.querySelector('.log');
        let sgnn = document.querySelector('.sgn');
        let regBehind = document.querySelector('.prmptlog');
        let lsb = document.querySelector('.lsbut');
        let frm = document.querySelector('.fbx');
        let sgnh2 = lsb.getElementsByTagName('label')[0];
        let logh2 = lsb.getElementsByTagName('label')[1];

        // to toggle tosign up
        // this makes the border of the "sign up" visible to make user aware they're on the "sign up" form
        sgnh2.addEventListener('click' , () => {
            sgnh2.classList.add('lsactive');
            logh2.classList.remove('lsactive');
            // frm.style.transform = "translateX(0px)";
        });

        logh2.addEventListener('click' , () => {
            logh2.classList.add('lsactive');
            sgnh2.classList.remove('lsactive');
            // frm.style.transform = "translateX(-350px)";
        });

        // to toggle to sign up
        // this makes the border of the "sign up" visible to make user aware they're on the "sign up" form
        sgnn.addEventListener('click' , () => {
            sgnh2.classList.add('lsactive');
            logh2.classList.remove('lsactive');
            // frm.style.transform = "translateX(0px)";
        });

        logn.addEventListener('click' , () => {
            logh2.classList.add('lsactive');
            sgnh2.classList.remove('lsactive');
        });





    // This slides to the sign in form so user can sign in

        // if and ONLY if certain conditions are met. They are;
        /* 
            1.  Username must be minimun of '5' characters but 
                not more than '20' characters
            2.  Password must be minimun of '8' characters but
            3.  User must make sure password is the same for "Confirm password"
            4.  User must have a valid email (this will not be tested atm) 
        */


    // CREATING ACCOUNT (SIGN UP)

        // Turns off autocomplete
        const allInputFields = document.querySelectorAll('.form_section input');
        allInputFields.forEach(inputField => {
            inputField.autocomplete = "off";
        });
    

        // Validates Input for Username

            // Conditions -
            /**
             *  1 - Contains Only LETTERS and NUMBERS and ONE underscore
             *  2 - Cannot contain only numbers
             *  3 - Can ONLY start/end with a a letter NOT numbers or underscore
             */


            // Validation function For "Username"

            const userName_Condition = new RegExp("^[a-zA-Z0-9_]*$");
            let userArray = [];
            const userName = document.querySelector("#uname");
            const newUserWarn = document.querySelector(".newUser_warn");

            // Sepcifies the allowed characters for Before input
            userName.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(userName_Condition).test(event.data))
                event.preventDefault();
            });
                
                let isUserValid = false;
            
                function validateUsername(event){
                    userArray.push(userName.value);
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
                        isUserValid = false;
                    }
                    //Checks if username has more than "one" underscore
                    else if(unScr.length > 1)
                    {
                        newUserWarn.textContent = "Username can ONLY have ONE underscore";
                        isUserValid = false;
                    }
                    // Checks if username contains only numbers and starts with a number
                    else if(!(lastCurArrayVal.match(userNameCond_letter)) && (lastCurArrayVal.match(userNameCond_num)))
                    {
                        newUserWarn.textContent = "Username can NOT start with a number or contain only numbers";
                        isUserValid = false;
                    }
                    // Checks if username is between "5" and "20" characters
                    else if(((lastCurArrayVal.length > 0) && (lastCurArrayVal.length < 5)) || (lastCurArrayVal.length > 20))
                    {
                        newUserWarn.textContent = "Username length must be \"5\" min and \"20\" max";
                        isUserValid = false;
                    }
                    else if((event.data == null) && (lastCurArrayVal.length <= 0))
                    {
                        newUserWarn.textContent = "Required";
                        isUserValid = false;
                    }
                    else
                    {
                        newUserWarn.textContent = "";
                        isUserValid = true;
                        console.log("User bool = " + isUserValid);
                    }

                    
                }

                userName.addEventListener("input" , validateUsername);
                

        // Validates Input for Password
            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */

            // Allows all except spaces
            const new_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

            let passwordArray = [];
            const newPassword = document.querySelector("#upass");
            const newPassWarn = document.querySelector(".newPass_warn");
            let isPassValid = false;

            // Sepcifies the allowed characters for Before input
            newPassword.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Validation for Password

                function validateNewPassword(event) {
                    passwordArray.push(newPassword.value);
                    let lastPassArrayVal = passwordArray.at(-1);
                    const userPass_Cond_SpecialChar = /\W/g;
                    const userPass_Cond_num = /\d/g;
                    const userPass_Cond_Lett = /[A-Z a-z]/g;

                    // Checks if there is any value int the input feild
                    if(((event.data == null) && (upass.length <= 0)))
                    {
                        newPassWarn.textContent = "Required";
                        isPassValid = false;
                    }
                    // Checks if the pattern is less "8" characters and above than "100" characters
                    else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                    {
                        newPassWarn.textContent = "Password length must be \"8\" min and \"100\" max";
                        isPassValid = false;
                    }
                    // Checks if the input fits the specified pattern
                    else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                        && lastPassArrayVal.match(userPass_Cond_Lett)
                        && lastPassArrayVal.match(userPass_Cond_num)
                    ))
                    {
                        newPassWarn.textContent = "Password must contain at least one of a letter, number, and a special character";
                        isPassValid = false;
                    }
                    // If all checks are completed then it is accepted
                    else
                    {
                        newPassWarn.textContent = "";
                        isPassValid = true;
                        console.log("Pass bool = " + isPassValid);
                    }
                }

                newPassword.addEventListener("input" , validateNewPassword);

            // Validation for Confirm Password
                const confirmPassword = document.querySelector("#ucfmpass");
                const confNewPassWarn = document.querySelector(".confNewPass_warn");
                let confPasswordArray = [];
                let isConfPassValid = false;

                confirmPassword.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(new_pass_cond).test(event.data))
                    event.preventDefault();
                });

                    function confirmNewPass(event){
                        confPasswordArray.push(ucfmpass.value);
                        let lastConfPassArrayVal = confPasswordArray.at(-1);

                        if(((event.data == null) && (lastConfPassArrayVal.length <= 0)))
                        {
                            confNewPassWarn.textContent = "Required";
                            isConfPassValid = false;
                        }
                        else if( lastConfPassArrayVal != upass.value)
                        {
                            confNewPassWarn.textContent = "Passwords do not match";
                            isConfPassValid = false;
                        }
                        else
                        {
                            confNewPassWarn.textContent = "";
                            isConfPassValid = true;
                            console.log("ConfPass bool = " + isConfPassValid);
                        }
                    }

                confirmPassword.addEventListener("input" , confirmNewPass);


        // Validates Input for Email
            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Will be verified before account can be created
             *  3 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
             */

            // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
            const new_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

            let emailArray = [];
            const newEmail = document.querySelector("#umail");
            const newEmailWarn = document.querySelector(".newEmail_warn");
            let isEmailValid = false;

            newEmail.addEventListener("beforeinput", (event) => {
                if (event.data != null && !(new_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Email"
                function validateNewEmail(event){
                    emailArray.push(umail.value);
                    let lastEmailArrayval = emailArray.at(-1);

                    let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // Checks if the field is empty
                    if((event.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        newEmailWarn.textContent = "Required";
                        isEmailValid = false;
                    }
                    else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
                    {
                        newEmailWarn.textContent = "Email is invalid";
                        isEmailValid = false;
                    }
                    // // If all condition are met, the Email is valid, i.e "true";
                    else
                    {
                        newEmailWarn.textContent = "";
                        isEmailValid = true;
                        console.log("Email bool = " + isEmailValid);
                    }

                    
                }

                newEmail.addEventListener("input" , validateNewEmail);

            

        // Validates Input for Terms and conditions and Sign In Button

            // Conditions -
            /**
             *  1 - User must correctly fill all required fields before the TandC btn is active
             *  2 - User needs to tick for in order for sign Up btn to be active
             */
            const check_if_FieldsAreValid = document.querySelectorAll(".req_to_submit");
            const checkTandCBox = document.querySelector(".signIn_checkbox_bdr");
            const checkTandCBoxWarn = document.querySelector(".signIn_TandC_warn");
            const checkTandC = document.querySelector("#signIn_checkbox_id");
            const ourTermsBtn = document.querySelectorAll('#tandc_btn');

            // If user clicks on "info" icon the a new window is opened to display the terms and conditions
                ourTermsBtn.forEach(termBtn => {
                    termBtn.addEventListener("click" , (e) => {
                        // Lets user know that they are being re-directed
                        let askToOpen = confirm("This will open our \" Terms and Conditions\" in a new tab");
                        if(askToOpen == false)
                        {
                            e.preventDefault;
                        }
                        else
                        {
                            window.open("Uvid-tc.html" , "_blank");
                        }
                    });
                });


            // Checks If user fills All input fields Correctly
            const signUpBtn = document.querySelector("#signUp_btn");
                signUpBtn.addEventListener("click" , () => {
                    // If all input fields are filled correctly, the checkbox is "active"
                    if(((isUserValid == true) && (isPassValid == true) && (isConfPassValid == true) && (isEmailValid == true)))
                    {
                        checkTandCBoxWarn.textContent = "";
                        signUpSuccessBox.style.display = "flex";
                        console.log("Available!");
                    }
                    // If not filled correctly, the signup button is removed and checkbox is inactive
                    else
                    {
                        checkTandCBoxWarn.textContent = "Please Check that all fields have been filled correctly";
                        console.log("Not available!");
                    }
                });




    // LOGGING IN TO YOUR ACCOUNT

        // Validates Input for Email
            // Conditions -
            /**
             *  1 - Should be valid and active
             *  2 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
             */
            // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
            
            const logInWarn = document.querySelector(".logIn_warn");

            const user_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

            let userLogArray = [];
            const userEmail = document.querySelector("#usrname_log");
            let isUserLogValid = false;

            userEmail.addEventListener("beforeinput", (event) => {
                if (event.data != null && !(new_email_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "User"
            function validateLogInUsername(event){
                userLogArray.push(usrname_log.value);
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
                    console.log("User bool = " + isUserLogValid);
                }

                
            }

            userEmail.addEventListener("input" , validateLogInUsername);


        // Validates Input for Password
            // Conditions -
            /**
             *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
             *  2 - Confirm password should be the same with password
             */

            // Allows all except spaces
            const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

            let userpasswordArray = [];
            const userPassword = document.querySelector("#usrpass_log");
            let isUserPassValid = false;

            // Sepcifies the allowed characters for Before input
            userPassword.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(new_pass_cond).test(event.data))
                event.preventDefault();
            });

            // Validation for Password

                function validateUserPassword(event) {
                    userpasswordArray.push(usrpass_log.value);
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
                        console.log("pass good");
                        console.log("Pass bool = " + isUserPassValid);
                    }
                }

                userPassword.addEventListener("input" , validateUserPassword);


        //  Validate Log in details

            let testLog_user = "uvidtestuser";
            let testLog_email = "craft.testuser.Acc.email@gmail.com";
            let testLog_pass = "@abcd=1234";

                // Checks if user's input is valid and if the inputted values correct
                function validateLogInCreds()
                {
                    console.log("user = " + usrname_log.value);
                    console.log("pass = " + usrpass_log.value);
                    // This occurs if user's input is valid and the inputted values are correct
                    if(((isUserLogValid == true) 
                        && (isUserPassValid == true) 
                        && (usrname_log.value == testLog_user.valueOf()) 
                        && (usrpass_log.value == testLog_pass.valueOf())
                    ))
                    {
                        logInWarn.textContent = "Logging in...";
                        // setTimeout(verification, 2500);
                        console.log("Logged In ✊");
                        valg.style.display = "flex";
                        // window.location.pathname = "Uvid.html";
                    }
                    // If it is not correct, the user is required to try again
                    else
                    {
                        logInWarn.textContent = "Email or Password is incorrect";
                    }
                }


        // Forgot Password
            const resetPass_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

            let resetPassArray = [];
            const resetPass_email = document.querySelector("#resetPass_email_input");
            const resetPass_Label = document.querySelector("#submit_request_label");
            const resetPass_Send = document.querySelector("#submit_request");
            const resetPass_warn = document.querySelector("#resetPass_warn");
            let resetPass_validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Sepcifies the allowed characters for Before input
            resetPass_email.addEventListener("beforeinput", (event) => {
                if(event.data != null && !(resetPass_email_cond).test(event.data))
                event.preventDefault();
            });

                function resetPasswordRequest(e)
                {
                    // adds user input into array
                    resetPassArray.push(resetPass_email_input.value);
                    let lastEmailArrayval = resetPassArray.at(-1);

                    // Checks if the field is empty
                    if((e.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        resetPass_warn.textContent = "Invalid Email";
                    }
                    // Condition for valid email
                    else if(!(lastEmailArrayval.match(resetPass_validEmail)))
                    {
                        resetPass_warn.textContent = "Invalid Email";
                    }
                    // If conditions are met, function is called to send the email
                    else
                    {
                        resetPass_warn.textContent = " Email is sending..";
                        console.log("Email is good");
                        // emailPassLink();
                        recacc.click();
                    }

                    // Generating link String Function
                    function generateRandomString() {
                        const length = 16;
                        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        var result = '';
                        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                        return result;
                    }

                    // Generate a random link
                    var link_sample = generateRandomString();
                    console.log('Link redirect Sample:', link_sample);

                    // Carries out the sending of the email
                    function emailPassLink(){
                        // Gets string for link
                        let thisLinkcart1 = generateRandomString();
                        let thisLinkcart2 = generateRandomString();

                        // Email content
                        let link_part1 = thisLinkcart1;
                        let link_part2 = thisLinkcart2;
                        new_email_verBtn.value = resetPass_email_input.value;
                        new_email_verSubject.value = "Password Reset";
                        new_email_verBody.value= "This is a test (jokes) Passwrd request for " + resetPass_email_input.value + ". Click here to reset your password " 
                        + "https://bluecraftologies.com/Join/LogIn/?=Password+Error+Req+%20%Request+Reset+Email=?%value!/" + link_part1 
                        + "/blueCrafts_Request+Error+%201%+Req+open=null?/Users/" + link_part2 + "/if+fall=open!+%call%lessChange.aspx";
                        // console.log("email val => " + new_email_verBody.value);

                        // Simulates click of button after "5" seconds
                        setTimeout(() => resetPass_Send.click() , 5000);

                        // Send Email
                        resetPass_Send.addEventListener("click" , () => {

                            // Changes sub-title to "An OTP has been sent to your email";
                            resetPass_warn.textContent = "Email has been sent";
                            console.log("Email has been sent!");

                            setTimeout(() => window.location.reload(), 10000);

                            /* ========= Code by Post Mail =========== starts ===*/
                                // var form_id_js = "email_form";

                                // var data_js = {
                                //     "access_token": "0m8ikok0thqv6rtoucea493n"
                                // };
    
                                // var sendButton = document.getElementById("submit_request");
    
                                // function js_send() {
                                //     sendButton.value='Sending…';
                                //     sendButton.disabled=true;
                                //     var request = new XMLHttpRequest();
    
                                //     var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
                                //     var message = document.querySelector("#" + form_id_js + " [name='text']").value;
                                //     data_js['subject'] = subject;
                                //     data_js['text'] = message;
                                //     var params = toParams(data_js);
    
                                //     request.open("POST", "https://postmail.invotes.com/send", true);
                                //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
                                //     request.send(params);
    
                                //     return false;
                                // }
    
                                // sendButton.onclick = js_send();
    
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
                        });
                    }
                }

                // Calls function to validate and send reset password link
                resetPass_Label.addEventListener("click" , resetPasswordRequest);


                
                const logInBtn = document.querySelector("#logIn_btn");
                
                
                logInBtn.addEventListener("click" , validateLogInCreds);




    // After creating their account This prompts the user to use their details to log in

        const signUpSuccessBox = document.querySelector(".recbase0");
        let promptLogIn = document.querySelector('#cotn');
        let signfrm = document.querySelector('.signform');
        let frshfrm = document.querySelector('.rfrshfrm');

            // Prompts for a verification <== Not added atm
            // Opens the box, to let user know their account has been created

            // ====>  Verification process NOTE: Not added atm  <====
    
            // Prompts user to sign in once account has been created
            promptLogIn.addEventListener("click" , () => {
                signUpSuccessBox.style.display = "none";
                sgnh2.style.display = "none";
                signfrm.style.display = "none";
                logh2.click();
            });


    
    // These are temporary and will be upgraded in the future
        // Account Issues 
            // If user has issues with creating an account
            const accSignUpIssueBox = document.querySelector(".recbase5");
            const closeaccSignUpIssueBox = document.querySelector("#closeQuickAccGuide");
            const accSignUpIssueBtn = document.querySelector(".acc_create_issue");

            accSignUpIssueBtn.addEventListener("click" , () => {
                accSignUpIssueBox.style.display = "flex";
            });

            closeaccSignUpIssueBox.addEventListener("click" , () => {
                accSignUpIssueBox.style.display = "none";
            });
        
        // Forgot PAssword
            // If user forgets password (alt - original text)
            let recacc = document.querySelector('.retnw');
            let reqfrm = document.querySelector('.recbase1');
            let re1 = reqfrm.getElementsByTagName('i')[0];
            let reaccreq = document.querySelector('#submit_request_label');
            let valfrm = document.querySelector('.recbase2');
            let re2 = valfrm.getElementsByTagName('i')[0];
            let valreq = document.querySelector('#valcde');

            //this displays a menu requesting for users email
            recacc.onclick = () => {
                reqfrm.style.display = "flex";
            }

            // tHis closes the menu opened by the function above when the "x" button is clicked
            re1.onclick = () => {
                reqfrm.style.display = "none";
            }

            // This opens a tab after sending a code to the inputed email
            reaccreq.onclick = () => {
                reqfrm.style.display = "none";
                valfrm.style.display = "flex";
            }

            //it closes the tab when 'x' button is clicked
            re2.onclick = () => {
                valfrm.style.display = "none";
            }

            // WHen user inputs code
            valreq.onclick = () => {
                valfrm.style.display = "none";
                valg.style.display = "flex";
            }









// If users log in details are correct, this opens

let valg = document.querySelector('.recbase3');
let confrm = document.querySelector('#confm');
let maingate = document.querySelector('.gate0');
let g01 = document.querySelector('.gch1');
let g02 = document.querySelector('.gch2');
let g03 = document.querySelector('.gch3');
let g04 = document.querySelector('.gch4');
let g05 = document.querySelector('.gch5');
let g06 = document.querySelector('.gch6');
let g1 = document.querySelector('.g1');
let g2 = document.querySelector('.g2');
let fz = document.querySelector('.gnr');


// function to animate the opening
    confrm.onclick = () => {
        fz.classList.add("active");
        valg.style.display = "none";
        regBehind.style.display = "none";
        g1.classList.add('gatexpand');
        g2.classList.add('gatexpand');
        g01.style.transform = "rotate(0deg)";
        g02.style.transform = "rotate(90deg)";
        g03.style.transform = "rotate(180deg)";
        g04.style.transform = "rotate(360deg)";
        g05.style.transform = "rotate(270deg)";
        g06.style.transform = "rotate(180deg)";
    }




// GATES


    /* 
        This section askes the user to choose their prefered show
        The option chose will open the section with the same name
    */

        let fzAll = fz.querySelectorAll('button');
        let fz1 = document.querySelector('#fz1');
        let fz2 = document.querySelector('#fz2');
        let fz3 = document.querySelector('#fz3');
        let fz4 = document.querySelector('#fz4');
        let fz5 = document.querySelector('#fz5');
        let fz6 = document.querySelector('#fz6');
        let home = document.querySelector('.home');
        // fz.style.display = "flex";

            function closeGenrePick()
            {
                fz.style.display = "none";
                g1.style.width = "0%";
                g2.style.width = "0%";
                setTimeout(() => window.location.pathname = "Uvid_Home/Home.html", 1500);
            }


            fzAll.forEach(fz => {
                fz.addEventListener("click" , () => {
                    closeGenrePick();
                });
            });
