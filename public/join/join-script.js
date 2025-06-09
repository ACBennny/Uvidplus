/*************************************************************
 * This is the script for the Join page of Uvid+
 * Here , user will be able to create, log in or recover their account
 * There is also form validation to ensure proficiency of inputs in the data fields
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// DEFINITION

    

   


    // PASS FIELD TOGGLE

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




