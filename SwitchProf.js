/**********************************************************************************************************
 * This is the script file that handles the switching of profiles
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



    let navProfleImg = document.querySelectorAll(".navBarProfileImage");
    let navProfileName = document.querySelector(".navBarProfileNameWatching");
    let switchProfTimer;
    let switchProfTimer2;
    let currProfOpt = `profile-is-curr-being-edited`;
    let defaultProfName = `acbennny`;
    let defaultProfFrg = `/Images/Uvid_profilebase.png`;
    let defaultProfBcg = `/Images/Uvid_green_bcg1_dark.jpg`;
    let switchProfBdrHTML = 
    `
        <div class="navBox profileNavBox">
            <div class="navBar profileNavBar">
                <div class="navBarLeft">
                    <div class="spacing"></div>
                    <a href="/Home.html" class="Companylogo navBarCompanylogo">
                        <h1 class="lhead">U</h1>
                        <h1 class="lname">vid</h1>
                    </a>
                </div>
                <div class="navBarRight">
                    <div class="signUpBdr">
                        <div class="signUpBox lightSolidBtn editProfAtnBtn editProfAtnBtn_Mob">Edit</div>
                        <div class="spacing"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="switchProfBcg closeSwitchProf">
            <div class="switchProfBcgImgBox">
                <img src="${defaultProfBcg}" alt="Background image of the 'Switch Profiles' modal" class="switchProfBcgImg">
            </div>
        </div>
        <div class="switchProfBox">
            <div class="switchProfBoxCtnt">
                <div class="switchProfHeader">
                    <span class="switchProfHeaderText">Who's watching?</span>
                </div>
                <div class="switchProfOptBcg">
                    <div class="switchProfOptBdr">
                        <div class="switchProfOptBox profileOpt" data-background-image="${defaultProfBcg}">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="${defaultProfFrg}" alt="profile image" class="switchProfOptImg">
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
                                <p class="switchProfOptText">${defaultProfName}</p>
                            </div>
                        </div>
                        <div class="switchProfOptBox profileOpt" data-background-image="/Images/Uvid_TVShows.jpg">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="/Images/pfp/pfp_2.jpg" alt="profile image" class="switchProfOptImg">
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
                                <p class="switchProfOptText">Alvare</p>
                            </div>
                        </div>
                        <div class="switchProfOptBox profileOpt" data-background-image="/Images/Uvid_Anime.jpg">
                            <div class="switchProfOptImgBdr">
                                <div class="switchProfOptImgBox">
                                    <img src="/Images/pfp/pfp_4.jpg" alt="profile image" class="switchProfOptImg">
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
                        <div class="switchProfOptBox createProfile hidden">
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
                <div class="editProfAtnBdr editProfAtnBtn_Pc">
                    <div class="editProfAtnBox">
                        <div class="editProfAtnBtn editProfAtnBtn">Edit</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let switchProfOptHTML = 
    `
        <div class="switchProfOptBox profileOpt" id="${currProfOpt}" data-background-image="${defaultProfBcg}">
            <div class="switchProfOptImgBdr">
                <div class="switchProfOptImgBox">
                    <img src="${defaultProfFrg}" alt="profile image" class="switchProfOptImg">
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
                <p class="switchProfOptText">${defaultProfName}</p>
            </div>
        </div>
    `;

    let setSwitchBodyStop;
    function instantiateSwitchProfBdr()
    {
        // The border holding the elements of the Switch Profile Modal
        const switchProfBdr = document.createElement("div");
        switchProfBdr.classList.add("switchProfBdr");
        switchProfBdr.classList.add("inactive");

        // The Switch Profile Modal Structure
        switchProfBdr.innerHTML = switchProfBdrHTML;

        // Append the fragment to DOM
        documentBody.appendChild(switchProfBdr);
        setSwitchBodyStop = setTimeout(() => 
        {
            documentBody.classList.add("bodystop");
            clearTimeout(setSwitchBodyStop);
        }, 10);
        allImages();


        // Definitons
        let profileNavBox = switchProfBdr.querySelector(".profileNavBox");
        let navbarHeight = (document.querySelector(".profileNavBar").getBoundingClientRect().height * 2) + 10;
        let mainHeader = switchProfBdr.querySelector(".switchProfHeaderText");
        let mainProfileBcg = switchProfBdr.querySelector(".switchProfBcgImg");
        let switchProfBcgImg = switchProfBdr.querySelector(".switchProfBcgImg");
        let switchProfBoxCtnt = switchProfBdr.querySelector(".switchProfBoxCtnt");
        let switchProfOptBdr = switchProfBdr.querySelector(".switchProfOptBdr");
        let createProfile = switchProfBdr.querySelector(".createProfile");
        let profileOpt = switchProfBdr.querySelectorAll(".profileOpt");
        let editProfAtnBtn = switchProfBdr.querySelectorAll(".editProfAtnBtn");
        let editProfAtnBtnMob = switchProfBdr.querySelector(".editProfAtnBtn_Mob");
        let editProfOptTempName;
        let editProfOptTempFrg;
        let editProfOptTempBcg;
        let editProfFence;
        let editProfTimer;

        // Function to change the eventlistener of the action button
        function changeEditProfAtnListener(theAtnEv, theOldFunc, theNewFunc, theTxtCtnt)
        {
            editProfAtnBtn.forEach(btn => 
            {
                btn.removeEventListener(`${theAtnEv}` , theOldFunc);
                btn.addEventListener(`${theAtnEv}` , theNewFunc);
                btn.textContent = `${theTxtCtnt}`;
            });
        }

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
        function closeswitchProfBdr(bcg)
        {
            // Removes style classes
            switchProfBdr.classList.add("flow");
            switchProfBdr.classList.remove("inactive");
            switchProfBdr.classList.remove("active");

            switchProfTimer = setTimeout(() => 
            {
                clearTimeout(switchProfTimer);

                // Update the HTML
                mainProfileBcg.setAttribute(`src` , `${bcg}`);
                switchProfBdrHTML = switchProfBdr.innerHTML;

                // Remove Child Nodes
                documentBody.removeChild(switchProfBdr);
                documentBody.classList.remove("bodystop");
            },800);
        }

        // Switching a profile
        function effectProfChange(name, frg, bcg)
        {
            // Update the profile image 
            navProfleImg.forEach(img => 
            {
                img.setAttribute(`src` , `${frg}`);
            });

            // Update the profile Name
            navProfileName.textContent = `${name}`;

            // Close the switch profile modal
            closeswitchProfBdr(bcg);
        }

        // Attaches the listener for the "editing of profile" events
        profileOpt.forEach((opt) => 
        {
            let optName = opt.querySelector(".switchProfOptText").textContent;
            let optImg = opt.querySelector(".switchProfOptImg").getAttribute("src");
            let optBcg = opt.getAttribute("data-background-image");

            const callEffectProfChange = () => 
            {
                effectProfChange(optName, optImg, optBcg);
            }

            opt.addEventListener("click" , callEffectProfChange);
            opt.callEffectProfChange = callEffectProfChange;
        });

        // Creating a new profile ***** NOT WORKING - Elemments added after Initial DOM Insertion dont respond to code or inputs *****
        // function addProfile()
        // {
        //     createProfile.insertAdjacentHTML(`beforebegin`, `${switchProfOptHTML}`);

        //     if(profileOpt.length > 3)
        //     {
        //         createProfile.classList.add("inactive");
        //     }
        //     openEditModal(`${defaultProfName}`, `${defaultProfFrg}`, `${defaultProfBcg}`);
        // }
        // createProfile.addEventListener("click" , addProfile);
        createProfile.addEventListener("click" , () => 
        {
            notification(`notifyBad` , `Error proceessing request`);
        });


        // Edit Profiles
        function switchToEditProf()
        {
            changeEditProfAtnListener(`click` , switchToEditProf , switchToChangeProf , `Done`);
            mainHeader.textContent = "Edit Profiles";
            createProfile.classList.remove("hidden");

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
                const callOpenEditModal = () => 
                {
                    let optName = opt.querySelector(".switchProfOptText");
                    let optImg = opt.querySelector(".switchProfOptImg");
                    let optImgSrc = optImg.getAttribute("src");
                    let optBcg = opt.getAttribute("data-background-image");
                    
                    opt.setAttribute(`id` , `${currProfOpt}`);
                    openEditModal(optName.textContent, optImgSrc, optBcg);
                };
    
                opt.addEventListener("click" , callOpenEditModal);
                opt.callOpenEditModal = callOpenEditModal;
            });
        }
        editProfAtnBtn.forEach((btn) => 
        {
            btn.addEventListener("click" , switchToEditProf);
        });


        // Switch back to "Changing of Profiles" modal
        function switchToChangeProf()
        {
            changeEditProfAtnListener(`click` , switchToChangeProf , switchToEditProf , `Edit`);
            mainHeader.textContent = "Who's watching?";
            createProfile.classList.add("hidden");

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
                let optName = opt.querySelector(".switchProfOptText").textContent;
                let optImg = opt.querySelector(".switchProfOptImg").getAttribute("src");
                let optBcg = opt.getAttribute("data-background-image");
    
                const callEffectProfChange = () => 
                {
                    effectProfChange(optName, optImg, optBcg);
                }
    
                opt.addEventListener("click" , callEffectProfChange);
                opt.callEffectProfChange = callEffectProfChange;
            });
        }

        // This function instantiates the modal for editing unique profiles
        function openEditModal(profName, forePic, bcgPic)
        {
            let editProfHTML =
            `
                <!-- <div class="editProfileFence"> -->
                    <div class="editProfileBcgImgBdr editProfilePcBcgImgBdr">
                        <div class="editProfileBcgImgBox">
                            <img src="${bcgPic}" alt="" class="editProfileBcgImg">
                        </div>
                    </div>
                    <div class="editProfileBase">
                        <div class="editProfileBdr">
                            <div class="editBcgImgBtnBdr openSelectBcgPicModal">
                                <button type="button" class="editBcgImgBtnBox">
                                    <div class="editBcgImgBtnIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editBcgImgBtnIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                    <div class="editBcgImgBtnTextBox">
                                        <p class="editBcgImgBtnText">Update Background Image</p>
                                    </div>
                                </button>
                            </div>
                            <div class="editProfileBcgImgOverlayBdr openSelectBcgPicModal">
                                <div class="editProfileBcgImgOverlayBox">
                                    <p class="editProfileBcgImgOverlayText">Update Background Image</p>
                                </div>
                            </div>
                            <div class="editProfileFrgImgBase " title="Change Profile Image">
                                <div class="editProfileFrgImgBdr">
                                    <div class="editProfileFrgImgBox">
                                        <img src="${forePic}" alt="" class="editProfileFrgImg">
                                    </div>
                                    <div class="editProfileFrgImgOverlayBdr openSelectFrgPicModal">
                                        <div class="editProfileFrgImgOverlayBox">
                                            <p class="editProfileFrgImgOverlayText">Change</p>
                                        </div>
                                    </div>
                                    <div class="editProfileBadgeBdr">
                                        <div class="editProfileBadgeBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="editProfileBox">
                                <div class="editProfileTitleBox">
                                    <span class="editProfileTitle">Edit Profile</span>
                                </div>
                                <div class="editProfileDetBdr">
                                    <div class="editProfileDetBox">
                                        <div class="editProfileDetSect profileNameSection">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Profile Name</div>
                                                </div>
                                                <div class="editProfileNameBdr">
                                                    <div class="editProfileNameBox">
                                                        <input type="text" value="${profName}" name="editProfileNameField" id="editProfileNameField" class="editProfileNameField" placeholder="Enter here.."/>
                                                    </div>
                                                </div>
                                                <div class="editProfileNameWarnBdr">
                                                    <div class="editProfileNameWarnBox">
                                                        <p class="editProfileNameWarnText">Name must be between 2 and 50 characters.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">App Language</div>
                                                    <div class="editProfileLangSelectBdr" id="appLangSelect">
                                                        <div class="editProfileLangSelectBox">
                                                            <p class="editProfileLangSelectText">English</p>
                                                        </div>
                                                        <div class="editProfileLangOptBdr">
                                                            <div class="editProfileLangOptBox">
                                                                <p class="editProfileLangOptItems">Arabic</p>
                                                                <p class="editProfileLangOptItems">Bulgarian</p>
                                                                <p class="editProfileLangOptItems">Chinese (Simplified)</p>
                                                                <p class="editProfileLangOptItems">Chinese (Traditional)</p>
                                                                <p class="editProfileLangOptItems">Croatian</p>
                                                                <p class="editProfileLangOptItems">Czech</p>
                                                                <p class="editProfileLangOptItems">Danish</p>
                                                                <p class="editProfileLangOptItems">Dutch</p>
                                                                <p class="editProfileLangOptItems active">English</p>
                                                                <p class="editProfileLangOptItems">Finnish</p>
                                                                <p class="editProfileLangOptItems">French (France)</p>
                                                                <p class="editProfileLangOptItems">German</p>
                                                                <p class="editProfileLangOptItems">Greek</p>
                                                                <p class="editProfileLangOptItems">Gurajati</p>
                                                                <p class="editProfileLangOptItems">Hebrew</p>
                                                                <p class="editProfileLangOptItems">Hindi</p>
                                                                <p class="editProfileLangOptItems">Hungarian</p>
                                                                <p class="editProfileLangOptItems">Indonesia</p>
                                                                <p class="editProfileLangOptItems">Italian</p>
                                                                <p class="editProfileLangOptItems">Japanese</p>
                                                                <p class="editProfileLangOptItems">Korean</p>
                                                                <p class="editProfileLangOptItems">Norwegian</p>
                                                                <p class="editProfileLangOptItems">Polish</p>
                                                                <p class="editProfileLangOptItems">Portugese (Brazil)</p>
                                                                <p class="editProfileLangOptItems">Portugese (Portugal)</p>
                                                                <p class="editProfileLangOptItems">Punjabi</p>
                                                                <p class="editProfileLangOptItems">Romanian</p>
                                                                <p class="editProfileLangOptItems">Russian</p>
                                                                <p class="editProfileLangOptItems">Spanish</p>
                                                                <p class="editProfileLangOptItems">Swedish</p>
                                                                <p class="editProfileLangOptItems">Tamil</p>
                                                                <p class="editProfileLangOptItems">Thai</p>
                                                                <p class="editProfileLangOptItems">Turkish</p>
                                                                <p class="editProfileLangOptItems">Vietnamese</p>
                                                                <p class="editProfileLangOptItems">Ukrainian</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        Set your preferred language for all contents of the app.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Audio Language</div>
                                                    <div class="editProfileLangSelectBdr" id="audioLangSelect">
                                                        <div class="editProfileLangSelectBox">
                                                            <p class="editProfileLangSelectText">English</p>
                                                        </div>
                                                        <div class="editProfileLangOptBdr">
                                                            <div class="editProfileLangOptBox">
                                                                <p class="editProfileLangOptItems">Arabic</p>
                                                                <p class="editProfileLangOptItems">Bulgarian</p>
                                                                <p class="editProfileLangOptItems">Chinese (Simplified)</p>
                                                                <p class="editProfileLangOptItems">Chinese (Traditional)</p>
                                                                <p class="editProfileLangOptItems">Croatian</p>
                                                                <p class="editProfileLangOptItems">Czech</p>
                                                                <p class="editProfileLangOptItems">Danish</p>
                                                                <p class="editProfileLangOptItems">Dutch</p>
                                                                <p class="editProfileLangOptItems active">English</p>
                                                                <p class="editProfileLangOptItems">Finnish</p>
                                                                <p class="editProfileLangOptItems">French (France)</p>
                                                                <p class="editProfileLangOptItems">German</p>
                                                                <p class="editProfileLangOptItems">Greek</p>
                                                                <p class="editProfileLangOptItems">Gurajati</p>
                                                                <p class="editProfileLangOptItems">Hebrew</p>
                                                                <p class="editProfileLangOptItems">Hindi</p>
                                                                <p class="editProfileLangOptItems">Hungarian</p>
                                                                <p class="editProfileLangOptItems">Indonesia</p>
                                                                <p class="editProfileLangOptItems">Italian</p>
                                                                <p class="editProfileLangOptItems">Japanese</p>
                                                                <p class="editProfileLangOptItems">Korean</p>
                                                                <p class="editProfileLangOptItems">Norwegian</p>
                                                                <p class="editProfileLangOptItems">Polish</p>
                                                                <p class="editProfileLangOptItems">Portugese (Brazil)</p>
                                                                <p class="editProfileLangOptItems">Portugese (Portugal)</p>
                                                                <p class="editProfileLangOptItems">Punjabi</p>
                                                                <p class="editProfileLangOptItems">Romanian</p>
                                                                <p class="editProfileLangOptItems">Russian</p>
                                                                <p class="editProfileLangOptItems">Spanish</p>
                                                                <p class="editProfileLangOptItems">Swedish</p>
                                                                <p class="editProfileLangOptItems">Tamil</p>
                                                                <p class="editProfileLangOptItems">Thai</p>
                                                                <p class="editProfileLangOptItems">Turkish</p>
                                                                <p class="editProfileLangOptItems">Vietnamese</p>
                                                                <p class="editProfileLangOptItems">Ukrainian</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        Set your preferred language for the audio of your shows.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Subtitle/CC Language</div>
                                                    <div class="editProfileLangSelectBdr" id="subCCLangSelect">
                                                        <div class="editProfileLangSelectBox">
                                                            <p class="editProfileLangSelectText">English</p>
                                                        </div>
                                                        <div class="editProfileLangOptBdr">
                                                            <div class="editProfileLangOptBox">
                                                                <p class="editProfileLangOptItems">Arabic</p>
                                                                <p class="editProfileLangOptItems">Bulgarian</p>
                                                                <p class="editProfileLangOptItems">Chinese (Simplified)</p>
                                                                <p class="editProfileLangOptItems">Chinese (Traditional)</p>
                                                                <p class="editProfileLangOptItems">Croatian</p>
                                                                <p class="editProfileLangOptItems">Czech</p>
                                                                <p class="editProfileLangOptItems">Danish</p>
                                                                <p class="editProfileLangOptItems">Dutch</p>
                                                                <p class="editProfileLangOptItems active">English</p>
                                                                <p class="editProfileLangOptItems">Finnish</p>
                                                                <p class="editProfileLangOptItems">French (France)</p>
                                                                <p class="editProfileLangOptItems">German</p>
                                                                <p class="editProfileLangOptItems">Greek</p>
                                                                <p class="editProfileLangOptItems">Gurajati</p>
                                                                <p class="editProfileLangOptItems">Hebrew</p>
                                                                <p class="editProfileLangOptItems">Hindi</p>
                                                                <p class="editProfileLangOptItems">Hungarian</p>
                                                                <p class="editProfileLangOptItems">Indonesia</p>
                                                                <p class="editProfileLangOptItems">Italian</p>
                                                                <p class="editProfileLangOptItems">Japanese</p>
                                                                <p class="editProfileLangOptItems">Korean</p>
                                                                <p class="editProfileLangOptItems">Norwegian</p>
                                                                <p class="editProfileLangOptItems">Polish</p>
                                                                <p class="editProfileLangOptItems">Portugese (Brazil)</p>
                                                                <p class="editProfileLangOptItems">Portugese (Portugal)</p>
                                                                <p class="editProfileLangOptItems">Punjabi</p>
                                                                <p class="editProfileLangOptItems">Romanian</p>
                                                                <p class="editProfileLangOptItems">Russian</p>
                                                                <p class="editProfileLangOptItems">Spanish</p>
                                                                <p class="editProfileLangOptItems">Swedish</p>
                                                                <p class="editProfileLangOptItems">Tamil</p>
                                                                <p class="editProfileLangOptItems">Thai</p>
                                                                <p class="editProfileLangOptItems">Turkish</p>
                                                                <p class="editProfileLangOptItems">Vietnamese</p>
                                                                <p class="editProfileLangOptItems">Ukrainian</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        Set your preferred language for your subtitles/CC.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Closed Caption</div>
                                                    <div class="editProfileDetSectToggle">
                                                        <div class="genCheckBoxBase">
                                                            <input type="checkbox" id="autoCCDisplay" class="genCheckBoxInput" tabindex="-1">
                                                            <label for="autoCCDisplay" class="genCheckBoxToggle">
                                                                <span class="genCheckBoxToggleCircle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        By enabling this, closed captions will be shown automatically if they are available.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Autoplay</div>
                                                    <div class="editProfileDetSectToggle">
                                                        <div class="genCheckBoxBase">
                                                            <input type="checkbox" id="autoNextVidPlay" class="genCheckBoxInput" tabindex="-1" checked>
                                                            <label for="autoNextVidPlay" class="genCheckBoxToggle">
                                                                <span class="genCheckBoxToggleCircle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        By enabling this, the next video in a series plays automatically.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Background Video</div>
                                                    <div class="editProfileDetSectToggle">
                                                        <div class="genCheckBoxBase">
                                                            <input type="checkbox" id="autoBcgVidPlay" class="genCheckBoxInput" tabindex="-1" checked>
                                                            <label for="autoBcgVidPlay" class="genCheckBoxToggle">
                                                                <span class="genCheckBoxToggleCircle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        By enabling this, landing pages will automatically play videos in the background throughout the app.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Kid's Profile</div>
                                                    <div class="editProfileDetSectToggle">
                                                        <div class="genCheckBoxBase">
                                                            <input type="checkbox" id="thisIsKidsProfile" class="genCheckBoxInput" tabindex="-1">
                                                            <label for="thisIsKidsProfile" class="genCheckBoxToggle">
                                                                <span class="genCheckBoxToggleCircle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        By enabling this, the interface is changed to a kid friendly design and only content suitable for kids is shown.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Mature Content</div>
                                                    <div class="editProfileDetSectToggle">
                                                        <div class="genCheckBoxBase">
                                                            <input type="checkbox" id="matureCtntId" class="genCheckBoxInput" tabindex="-1">
                                                            <label for="matureCtntId" class="genCheckBoxToggle">
                                                                <span class="genCheckBoxToggleCircle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText">
                                                        By enabling this, you confirm that you are at least 18 years of age.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Danger Zone</div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText deleteProfile">
                                                        Delete Profile
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="selectPicBdr selectFrgPicBdr">
                                    <div class="selectPicBox">
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Featured</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectFrgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_0.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_1.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_2.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_3.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_4.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_5.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_6.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_7.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_8.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_9.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_10.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_11.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_12.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Uvid</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectFrgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_10.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_11.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_12.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_3.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_1.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_4.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_6.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_5.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_8.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_7.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_2.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_9.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_0.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Movies</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectFrgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_0.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_1.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_2.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_3.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_4.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_5.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_6.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_7.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_8.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_9.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_10.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_11.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_12.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">TV Shows</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectFrgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_10.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_11.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_12.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_3.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_1.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_4.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_6.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_5.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_8.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_7.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_2.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_9.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_0.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Anime</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectFrgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_0.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_1.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_2.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_3.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_4.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_5.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_6.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_7.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_8.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_9.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_10.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_11.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_12.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Cartoon</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectFrgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_10.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_11.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_12.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_3.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_1.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_4.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_6.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_5.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_8.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_7.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_2.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_9.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                                            <div class="selectFrgPicCarouselCard">
                                                                <div class="selectFrgPicCarouselImgBox">
                                                                    <img src="/Images/pfp/pfp_0.jpg" alt="" class="selectFrgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="selectPicBdr selectBcgPicBdr">
                                    <div class="selectPicBox">
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Featured</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_green_bcg1_light.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/blue.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg0.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/green.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/grey.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_green_bcg1_dark.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/orange.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/purple.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/default.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/pink.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Solid</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/default.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/red.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/blue.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/green.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/grey.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/pink.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/orange.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/yellow.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/purple.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Uvid</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg0.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_green_bcg2.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg1.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_green_bcg1_dark.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg2.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_green_bcg1_light.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg3.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/default.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Movies</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_movies0.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg1.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_movies1.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg3.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">TV Shows</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_TVShows.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_documentary.png" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_bcg2.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Anime</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_Anime.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/uvid_red_velvet0.png" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/uvid_red_velvet1.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/red.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/grey.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/purple.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selectPicSect">
                                            <div class="selectPicSectHeader">
                                                <p class="selectPicSectHeaderText">Cartoon</p>
                                            </div>
                                            <div class="selectPicSectCarouselBdr">
                                                <div class="selectPicSectCarouselBox">

                                                    <!-- Arrows -->
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrLeft selectFrgPicCarouselArrLeft">
                                                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="selectPicCarouselArr selectPicCarouselArrRight selectFrgPicCarouselArrRight">
                                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                                        </svg>
                                                    </div>

                                                    <!-- Grid -->
                                                    <div class="selectPicCarouselGrid selectBcgPicCarouselGrid">
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_Cartoon2.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_Cartoon3.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/Uvid_Cartoon1.png" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/orange.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/yellow.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                                            <div class="selectBcgPicCarouselCard">
                                                                <div class="selectBcgPicCarouselImgBox">
                                                                    <img src="/Images/bcg/pink.jpg" alt="" class="selectBcgPicCarouselImg">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            `;
            editProfFence = document.createElement("div");
            editProfFence.classList.add("editProfileFence");
            editProfFence.innerHTML = editProfHTML;
            switchProfBdr.appendChild(editProfFence);

            editProfAtnBtnMob.classList.add("active");
            changeEditProfAtnListener(`click` , switchToChangeProf , saveCurrProfEdits , `Save`);


            let editProfileBase = document.querySelector(".editProfileBase");
            let editProfileNameField = document.querySelector("#editProfileNameField");
            let editProfileNameWarnBdr = document.querySelector(".editProfileNameWarnBdr");
            let editProfileLangSelectBdr = document.querySelectorAll(".editProfileLangSelectBdr");
            let openSelectFrgPicModal = document.querySelectorAll(".openSelectFrgPicModal");
            let openSelectBcgPicModal = document.querySelectorAll(".openSelectBcgPicModal");
            let selectFrgPicBdr = document.querySelector(".selectFrgPicBdr");
            let selectBcgPicBdr = document.querySelector(".selectBcgPicBdr");
            let editProfileTitle = document.querySelector(".editProfileTitle");
            let editProfileDetBox = document.querySelector(".editProfileDetBox");
            let selectPicCarouselGrid = document.querySelectorAll(".selectPicCarouselGrid");
            let editProfileFrgImg = document.querySelector(".editProfileFrgImg");
            let editProfileBcgImg = document.querySelector(".editProfileBcgImg");
            let selectFrgPicCarouselCard = document.querySelectorAll(".selectFrgPicCarouselCard");
            let selectBcgPicCarouselCard = document.querySelectorAll(".selectBcgPicCarouselCard");
            let deleteProfile = document.querySelector(".deleteProfile");

            // The slider for select pic modals
            function selectPicSlider()
            {
                selectPicCarouselGrid.forEach((item, i) => 
                {
                    let selectPicCarouselCardBox = document.querySelectorAll('.selectPicCarouselCardBox');
                    let leftArrBox = [...document.querySelectorAll('.selectPicCarouselArrLeftBox')];
                    let rightArrBox = [...document.querySelectorAll('.selectPicCarouselArrRightBox')];
                    let boxErrorMargin = 10;
                    let boxDimension = item.getBoundingClientRect();
                    let boxWidth = boxDimension.width;
                    let boxW = boxWidth - boxErrorMargin;
                    let multiCardSlide = boxW;
                    let boxChildrenDimension = selectPicCarouselCardBox[0].getBoundingClientRect();
                    let boxChildrenWidth = boxChildrenDimension.width;
                    console.log(`the width is: ${boxChildrenWidth}`)
                    let singleCardSlide = boxChildrenWidth;

                    // Slides Right
                    rightArrBox[i].addEventListener("click" , () => 
                    {
                        // Slides by total cards visible
                        item.scrollLeft += multiCardSlide;
        
                        // Slides by one card
                        // item.scrollLeft += singleCardSlide;
                    });

                    // Slides Left
                    leftArrBox[i].addEventListener("click" , () => 
                    {
                        // Slides by total cards visible
                        item.scrollLeft -= multiCardSlide;
        
                        // Slides by one card
                        // item.scrollLeft -= singleCardSlide;
                    });

                    // Unhide right arrow if content is overflowing
                    if((item.scrollWidth) > (Math.ceil((item.clientWidth)) + boxErrorMargin))
                    {
                        rightArrBox[i].classList.remove("hide");
                    }
                    else
                    {
                        leftArrBox[i].classList.add("hide");
                        rightArrBox[i].classList.add("hide");
                    }

                    // Hides button  when boundary is reached
                    item.addEventListener("scroll" , () => {
                        let scrollStart = boxErrorMargin;
                        let scrollEnd = item.scrollWidth;
                        let scrollOffWidth = Math.ceil(item.offsetWidth);
                        let currScrollLeft = Math.ceil(item.scrollLeft);
                        let currScroll = Math.ceil((scrollOffWidth + currScrollLeft));

                        // Hides Right button
                        if(!(((currScroll) >= scrollEnd) || ((currScroll) >= (scrollEnd - boxErrorMargin))))
                        {
                            rightArrBox[i].classList.remove("hide");
                        }
                        else
                        {
                            rightArrBox[i].classList.add("hide");
                        }

                        // Hides Left button
                        if(!(currScrollLeft <= scrollStart))
                        {
                            leftArrBox[i].classList.remove("hide");
                        }
                        else
                        {
                            leftArrBox[i].classList.add("hide");
                        }
                    });

                });
            }
            // selectPicSlider();

            // Initialisation
            editProfOptTempName = editProfileNameField.value.trim().replace(/\s+/g, ' ');
            editProfOptTempBcg = editProfileFrgImg.getAttribute("src");
            editProfOptTempBcg = editProfileBcgImg.getAttribute("src");

            // Visualise warning if naming condition is breached
            editProfileNameField.addEventListener("input" , () => 
            {
                let fieldVal = editProfileNameField.value.trim().replace(/\s+/g, ' ');

                if(((fieldVal != undefined) && (fieldVal != null) && (fieldVal != "  "))
                    && ((fieldVal.length >= 2) && (fieldVal.length <= 50)))
                {
                    editProfileNameWarnBdr.classList.remove("active");
                }
                else
                {
                    editProfileNameWarnBdr.classList.add("active");
                }

                // Update the temp value for profile name
                editProfOptTempName = fieldVal;
            });

            // Selecting Languages for different components of the app
            editProfileLangSelectBdr.forEach(bdr => 
            {
                let editProfileLangSelectBox = bdr.querySelector(".editProfileLangSelectBox");
                let editProfileLangSelectText = bdr.querySelector(".editProfileLangSelectText");
                let editProfileLangOptBdr = bdr.querySelector(".editProfileLangOptBdr");
                let editProfileLangOptItems = bdr.querySelectorAll(".editProfileLangOptItems");

                // Opening the modal
                editProfileLangSelectBox.addEventListener("click" , () => 
                {
                    bdr.classList.toggle("active");
                });

                // selecting and updating
                editProfileLangOptItems.forEach(item => 
                {
                    item.addEventListener("click" , () => 
                    {
                        editProfileLangOptItems.forEach(otherItem => 
                        {
                            otherItem.classList.remove("active");
                        });
                        item.classList.add("active");
                        editProfileLangSelectText.textContent = item.textContent;
                        bdr.classList.remove("active");
                    });
                });

                // Closing the modal
                document.addEventListener("click" , () => 
                {
                    if(bdr.matches(":hover"))
                    {
                        return;
                    }
                    bdr.classList.remove("active");
                });
            });

            // Opening the Profile(Frg) Pic Select Modal
            openSelectFrgPicModal.forEach((frg) => 
            {
                frg.addEventListener("click" , () => 
                {
                    openSelectFrgPicModal.forEach(currFrgModal => 
                    {
                        currFrgModal.classList.add("inactive");
                    });
                    openSelectBcgPicModal.forEach(currBcgModal => 
                    {
                        currBcgModal.classList.add("inactive");
                    });
                    selectBcgPicBdr.classList.remove("active");
                    selectFrgPicBdr.classList.add("active");
                    editProfileDetBox.classList.add("inactive");
                    editProfileTitle.textContent = `Choose your Avatar`;
                    selectPicSlider();
                    // Calls the function again if window changes size
                    window.addEventListener("resize" , selectPicSlider);
                    window.addEventListener("change" , selectPicSlider);
                    changeEditProfAtnListener(`click` , saveCurrProfEdits , closeSelectPicModals , `Back`);
                });
            });

            // Opening the PBackground(Bcg) Pic Select Modal
            openSelectBcgPicModal.forEach((bcg) => 
            {
                bcg.addEventListener("click" , () => 
                {
                    openSelectFrgPicModal.forEach(currFrgModal => 
                    {
                        currFrgModal.classList.add("inactive");
                    });
                    openSelectBcgPicModal.forEach(currBcgModal => 
                    {
                        currBcgModal.classList.add("inactive");
                    });
                    selectFrgPicBdr.classList.remove("active");
                    selectBcgPicBdr.classList.add("active");
                    editProfileDetBox.classList.add("inactive");
                    editProfileTitle.textContent = `Choose your Background Image`;
                    selectPicSlider();
                    // Calls the function again if window changes size
                    window.addEventListener("resize" , selectPicSlider);
                    window.addEventListener("change" , selectPicSlider);
                    changeEditProfAtnListener(`click` , saveCurrProfEdits , closeSelectPicModals , `Back`);
                });
            });

            // Updating the Profile (Frg) Pic
            selectFrgPicCarouselCard.forEach((card) => 
            {
                let img = card.querySelector(".selectFrgPicCarouselImg");
                let imgSrc = img.getAttribute("src");

                card.addEventListener("click" , () => 
                {
                    editProfileFrgImg.setAttribute(`src` , `${imgSrc}`);
                    editProfOptTempFrg = imgSrc;
                    closeSelectPicModals();
                });
            });

            // Updating the Background (Bcg) Pic
            selectBcgPicCarouselCard.forEach((card) => 
            {
                let img = card.querySelector(".selectBcgPicCarouselImg");
                let imgSrc = img.getAttribute("src");

                card.addEventListener("click" , () => 
                {
                    editProfileBcgImg.setAttribute(`src` , `${imgSrc}`);
                    editProfOptTempBcg = imgSrc;
                    closeSelectPicModals();
                });
            });

            // Closing the select Pic Modals
            function closeSelectPicModals()
            {
                openSelectFrgPicModal.forEach(currFrgModal => 
                {
                    currFrgModal.classList.remove("inactive");
                });
                openSelectBcgPicModal.forEach(currBcgModal => 
                {
                    currBcgModal.classList.remove("inactive");
                });
                selectFrgPicBdr.classList.remove("active");
                selectBcgPicBdr.classList.remove("active");
                editProfileDetBox.classList.remove("inactive");

                window.removeEventListener("resize" , selectPicSlider);
                window.removeEventListener("change" , selectPicSlider);
                editProfileTitle.textContent = `Edit Profile`;
                changeEditProfAtnListener(`click` , closeSelectPicModals , saveCurrProfEdits , `Save`);
            }

            // Deleting a profile
            deleteProfile.addEventListener("click" , () => 
            {
                let warnAlert = confirm(`Are you sure you want to delete this profile? \nThis action can not be undone.`);
                if(warnAlert == false)
                {
                    event.preventDefault();
                }
                else
                {
                    notification(`notifyBad` , `Profile deleted`);
                    editProfOptTempName, editProfOptTempFrg, editProfOptTempBcg = null;
                    let profCurrBeignEdited = document.querySelector("#profile-is-curr-being-edited");
                    switchProfOptBdr.removeChild(profCurrBeignEdited);

                    switchProfBdr.removeChild(editProfFence);
                    editProfAtnBtnMob.classList.remove("active");
                    changeEditProfAtnListener(`click` , saveCurrProfEdits , switchToChangeProf , `Done`);
                }
            });
        }

        // Save Edits made to a profile and return back to the "Edits profile" modal
        function saveCurrProfEdits()
        {
            notification(`notifyGood` , `Changes saved`);
            let profCurrBeignEdited = document.querySelector("#profile-is-curr-being-edited");
            let profCurrName = profCurrBeignEdited.querySelector(".switchProfOptText");
            let profCurrFrgImg = profCurrBeignEdited.querySelector(".switchProfOptImg");
            
            // Update the Profile Name
            if(((editProfOptTempName != null) || (editProfOptTempName != undefined)))
            {
                profCurrName.textContent = `${editProfOptTempName}`;
            }
            // Update the Foreground (Frg) pic
            if(((editProfOptTempFrg != null) || (editProfOptTempFrg != undefined)))
            {
                profCurrFrgImg.setAttribute(`src` , `${editProfOptTempFrg}`);
            }
            // Update the Background (Bcg) pic
            if(((editProfOptTempBcg != null) || (editProfOptTempBcg != undefined)))
            {
                profCurrBeignEdited.setAttribute(`data-background-image` , `${editProfOptTempBcg}`);
                switchProfBcgImg.setAttribute(`src` , `${editProfOptTempBcg}`);
            }
            // Clear the variables after updating
            editProfOptTempName, editProfOptTempFrg, editProfOptTempBcg = null;

            profCurrBeignEdited.removeAttribute("id");

            switchProfBdr.removeChild(editProfFence);
            editProfAtnBtnMob.classList.remove("active");
            changeEditProfAtnListener(`click` , saveCurrProfEdits , switchToChangeProf , `Done`);
        }
    }