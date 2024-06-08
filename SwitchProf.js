/**********************************************************************************************************
 * This is the script file that handles the switching of profiles
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



    let navProfleImg = document.querySelector(".navBarProfileImage");
    let switchProfTimer;
    let switchProfTimer2;
    let switchProfHTML = 
    `
        <div class="navBox profileNavBox">
            <div class="navBar">
                <div class="navBarLeft">
                    <a href="/index.html" class="Companylogo navBarCompanylogo">
                        <h1 class="lhead">U</h1>
                        <h1 class="lname">vid</h1>
                    </a>
                </div>
                <div class="navBarRight">
                    <div class="signUpBdr">
                        <div class="signUpBox lightSolidBtn">Save</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="switchProfBcg closeSwitchProf">
            <div class="switchProfBcgImgBox">
                <img src="/Images/Uvid_green_bcg1_light.jpg" alt="Background image of the 'Switch Profiles' modal" class="switchProfBcgImg">
            </div>
        </div>
        <div class="switchProfBox">
            <div class="switchProfBoxCtnt userProfileScrollbar">
                <div class="switchProfHeader">
                    <span class="switchProfHeaderText">Who's watching?</span>
                </div>
                <div class="switchProfOptBcg">
                    <div class="switchProfOptBdr">
                        <div class="switchProfOptBox profileOpt" data-background-image="Uvid_green_bcg2.jpg">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="/Images/Uvid_profilebase.png" alt="profile_img" class="switchProfOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchProfOptTextBox">
                                <p class="switchProfOptText">acbennny</p>
                            </div>
                        </div>
                        <div class="switchProfOptBox profileOpt" data-background-image="uvid_red_velvet1.jpg">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="/Images/pfp/red_velvet_cupcake.jpg" alt="profile_img" class="switchProfOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchProfOptTextBox">
                                <p class="switchProfOptText">Velvet</p>
                            </div>
                        </div>
                        <div class="switchProfOptBox profileOpt" data-background-image="Uvid_TVShows.jpg">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="/Images/pfp/IMG_0371.jpg" alt="profile_img" class="switchProfOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchProfOptTextBox">
                                <p class="switchProfOptText">Sarah</p>
                            </div>
                        </div>
                        <div class="switchProfOptBox profileOpt" data-background-image="Uvid_Anime.jpg">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="/Images/pfp/IMG_1239.jpg" alt="profile_img" class="switchProfOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchProfOptTextBox">
                                <p class="switchProfOptText">Aston</p>
                            </div>
                        </div>
                        <div class="switchProfOptBox addNewProfBox">
                            <div class="addNewProfIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="addNewProfIcon">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                </svg>
                            </div>
                            <div class="switchProfOptTextBox">
                                <p class="switchProfOptText">Add New</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actionBtnBcg">
                    <div class="actionBtnBdr">
                        <button class="actionBtnBox manageProfBtn">Manage Profiles</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    
    function instantiateSwitchProfBdr()
    {
        // The border holding the elements of the Switch Profile Modal
        const switchProfBdr = document.createElement("div");
        switchProfBdr.classList.add("switchProfBdr");
        switchProfBdr.classList.add("inactive");

        // The Switch Profile Modal Structure
        switchProfBdr.innerHTML = switchProfHTML;

        // Append the fragment to DOM
        documentBody.appendChild(switchProfBdr);
        documentBody.classList.add("bodystop");

        // Definitons
        let mainHeader = document.querySelector(".switchProfHeaderText");
        let profileOpt = document.querySelectorAll(".profileOpt");
        let actionBtnBox = document.querySelector(".actionBtnBox");

        // Opens the Switch Profile Modal
        switchProfTimer = setTimeout(() => 
        {
            clearTimeout(switchProfTimer);

            // Adds style class
            switchProfBdr.classList.remove("inactive");
            switchProfBdr.classList.add("active");
            switchProfBdr.classList.add("flow");

            switchProfTimer2 = setTimeout(() => 
            {
                clearTimeout(switchProfTimer2);
                switchProfBdr.classList.remove("flow");
            }, 750);

        }, 100);

        // Closes the Switch Profile Modal
        function closeswitchProfBdr()
        {
            // Removes style classes
            switchProfBdr.classList.add("flow");
            switchProfBdr.classList.remove("inactive");
            switchProfBdr.classList.remove("active");

            switchProfTimer = setTimeout(() => 
            {
                clearTimeout(switchProfTimer);

                // Remove Child Nodes
                documentBody.removeChild(switchProfBdr);
                documentBody.classList.remove("bodystop");
            },1000);
        }

        // Switching a profile
        function effectProfChange(src)
        {
            // Update the profile image 
            navProfleImg.setAttribute("src" , src);

            // Close the switch profile modal
            closeswitchProfBdr();
        }

        // Attaches the listener for the "editing of profile" events
        profileOpt.forEach((opt) => 
        {
            let optImg = opt.querySelector(".switchProfOptImg");
            let optSrc = optImg.getAttribute("src");

            const callEffectProfChange = () => {effectProfChange(optSrc)};

            opt.addEventListener("click" , callEffectProfChange);
            opt.callEffectProfChange = callEffectProfChange;
        });


        // Manage (Edit) Profiles
        function switchToEditProf()
        {
            actionBtnBox.removeEventListener("click" , switchToEditProf);
            actionBtnBox.addEventListener("click" , switchToChangeProf);
            actionBtnBox.textContent = "Done";
            mainHeader.textContent = "Manage Profiles";

            // Removes the current eventlistener
            profileOpt.forEach(opt => 
            {
                if(opt.callEffectProfChange)
                {
                    opt.removeEventListener("click" , opt.callEffectProfChange);
                }
                opt.classList.add("editProfOPt");
            });

            // Sets eventlistener to save changes after all edits are done
            profileOpt.forEach((opt) => 
            {
                let optName = opt.querySelector(".switchProfOptText");
                let optImg = opt.querySelector(".switchProfOptImg");
                let optSrc = optImg.getAttribute("src");
                let optBcg = opt.getAttribute("data-background-image");
    
                const callOpenEditModal = () => {openEditModal(optName.textContent, optSrc, optBcg)};
    
                opt.addEventListener("click" , callOpenEditModal);
                opt.callOpenEditModal = callOpenEditModal;
            });
        }
        actionBtnBox.addEventListener("click" , switchToEditProf);

        // Finalise all edits
        function switchToChangeProf()
        {
            actionBtnBox.removeEventListener("click" , switchToChangeProf);
            actionBtnBox.addEventListener("click" , switchToEditProf);
            actionBtnBox.textContent = "Manage Profiles";
            mainHeader.textContent = "Who's watching?";

            // Removes the current eventlistener
            profileOpt.forEach(opt => 
            {
                if(opt.callOpenEditModal)
                {
                    opt.removeEventListener("click" , opt.callOpenEditModal);
                }
                opt.classList.remove("editProfOPt");
            });

            // Attaches the listener for the "changing of profile" events
            profileOpt.forEach((opt) => 
            {
                let optImg = opt.querySelector(".switchProfOptImg");
                let optSrc = optImg.getAttribute("src");
    
                const callEffectProfChange = () => {effectProfChange(optSrc)};
    
                opt.addEventListener("click" , callEffectProfChange);
                opt.callEffectProfChange = callEffectProfChange;
            })
        }

        function openEditModal(name, forePic, bcgPic)
        {
            console.log(`Name: ${name} \nImg: ${forePic} \nBcg: ${bcgPic}`);
        }
    }