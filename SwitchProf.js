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
    let setSwitchBodyStop;
    let currProfOpt = `profile-is-curr-being-edited`;
    let defaultProfName = `acbennny`;
    let defaultProfFrg = `/Images/Uvid_profilebase.png`;
    let defaultProfBcg = `/Images/Uvid_green_bcg1_light.jpg`;
    let profileInfoArray;
    let switchProfBdrHTML = 
    `
        <div class="switchProfNavBdr">
            <div class="switchProfNavBox">
                <div class="switchProfNavLeft">
                    <a href="/Home.html" class="Companylogo navBarCompanylogo">
                        <div class="company_logoBdr">
                            <div class="company_logoBox Companylogo">
                                <img src="/Images/uvidLogo.png" alt="" class="company_logoImg">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="switchProfNavLeft">
                    <button type="button" aria-haspopup="false" class="genBtnBox lightSolidBtn switchProfNavBtn editProfAtnBtn editProfAtnBtn_Mob">
                        <div class="genBtnText ">Edit</div>
                    </button>
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
                    <div class="switchProfOptBdr"></div>
                </div>
                <div class="editProfAtnBdr editProfAtnBtn_Pc">
                    <div class="editProfAtnBox genBtnBox">
                        <button type="button" aria-haspopup="false" class="genBtnBox editProfAtnBtn">
                            <div class="genBtnText ">Edit</div>
                        </button>
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
    let createNewProfStruct = 
    `
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
    `;


    function errorLoadingProfInfo()
    {
        notification(`notifyBad` , `Error loading profile info`);
    }

    function loadProfInfo()
    {
        loadScriptOnce(`/SwitchProfile/profInfoLib.js` , `profInfoLibId` , instantiateSwitchProfModal , errorLoadingProfInfo);
    }
    

    function instantiateSwitchProfModal()
    {
        profileInfoArray = ProfileInfoLib.profileInfoInv;

        // The border holding the elements of the Switch Profile Modal
        const switchProfBdr = document.createElement("div");
        switchProfBdr.classList.add("switchProfBdr");
        switchProfBdr.classList.add("inactive");

        // The Switch Profile Modal Structure
        switchProfBdr.innerHTML = switchProfBdrHTML;

        // Append the fragment to DOM
        documentBody.appendChild(switchProfBdr);
        let switchProfOptBdr = switchProfBdr.querySelector(".switchProfOptBdr");
        fetchProfInfo();

        // Fetch the data for the respective profiles
        function fetchProfInfo()
        {
            if(((profileInfoArray == undefined) || (profileInfoArray.length <=0)))
            {
                errorLoadingProfInfo();
                return;
            }
            for(let i = 0; i < profileInfoArray.length; i++)
            {
                const item = profileInfoArray[i];
                const switchProfCardStruct = 
                `
                    <div class="switchProfOptBox profileOpt" data-profile-index="${i}" data-profile-type="${item.prof_type}" data-background-image="${item.prof_bcgImg}">
                        <div class="switchProfOptImgBdr">
                            <div class="switchProfOptImgBox">
                                <img src="${item.prof_frgImg}" alt="profile image" class="switchProfOptImg">
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
                            <p class="switchProfOptText">${item.prof_name}</p>
                        </div>
                    </div>
                `;
                switchProfOptBdr.insertAdjacentHTML(`beforeend` , switchProfCardStruct);
            }

            // Insert the "Add New Profile" option
            switchProfOptBdr.insertAdjacentHTML(`beforeend` , createNewProfStruct);

            // start the modal
            startSwitchProfModal();
        }

        function startSwitchProfModal()
        {
            setSwitchBodyStop = setTimeout(() => 
            {
                documentBody.classList.add("bodystop");
                clearTimeout(setSwitchBodyStop);
            }, 10);

            // Definitons
            let profileNavBox = switchProfBdr.querySelector(".profileNavBox");
            let navbarHeight = (document.querySelector(".switchProfNavBdr").getBoundingClientRect().height * 2) + 10;
            let mainHeader = switchProfBdr.querySelector(".switchProfHeaderText");
            let mainProfileBcg = switchProfBdr.querySelector(".switchProfBcgImg");
            let switchProfBcgImg = switchProfBdr.querySelector(".switchProfBcgImg");
            let switchProfBoxCtnt = switchProfBdr.querySelector(".switchProfBoxCtnt");
            let switchProfOptBox = switchProfBdr.querySelectorAll(".switchProfOptBox");
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
                    btn.querySelector(`.genBtnText`).textContent = `${theTxtCtnt}`;
                });
            }

            // Justifying postion for Switch Modal
            function justifySwitchModalCtntPos()
            {
                if((switchProfBoxCtnt.scrollHeight) > (Math.ceil((switchProfBoxCtnt.clientHeight))))
                {
                    switchProfBoxCtnt.classList.add("has_scrollbar");
                    return;
                }
                switchProfBoxCtnt.classList.remove("has_scrollbar");
            }
            justifySwitchModalCtntPos();
            window.addEventListener("change" , () => 
            {
                justifySwitchModalCtntPos();
            });
            window.addEventListener("resize" , () => 
            {
                justifySwitchModalCtntPos();
            });

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
                    switchProfOptBox.forEach((box) => 
                    {
                        box.remove();
                    });
                    switchProfBdrHTML = switchProfBdr.innerHTML;

                    // Remove Child Nodes
                    removeScriptById(`profInfoLibId`);
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

                // Update the profile page (if currently in it)
                updateUserProfilePage(`${name}`, `${frg}`, `${bcg}`);
            }

            function updateUserProfilePage(name, frg, bcg)
            {
                let userHeaderBcgImg = document.querySelector(".userHeaderBcgImg");
                let userHeaderTitleText_userName = document.querySelector(".userHeaderTitleText_userName");
                let userProfFrgImg = document.querySelector(".userProfFrgImg");
                let userProfNameField = document.querySelector("#userProfNameField");

                if((userHeaderBcgImg != undefined))
                {
                    userHeaderBcgImg.setAttribute(`src` , `${bcg}`);
                }
                if((userHeaderTitleText_userName != undefined))
                {
                    userHeaderTitleText_userName.textContent = `${name}`;
                }
                if((userProfFrgImg != undefined))
                {
                    userProfFrgImg.setAttribute(`src` , `${frg}`);
                }
                if((userProfNameField != undefined))
                {
                    userProfNameField.setAttribute(`value` , `${name}`);
                }
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
                                                    <div class="editProfileDetSectHeadText">Background</div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText openSelectBcgPicModal">
                                                        <span class="">Update</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="editProfileDetSect">
                                            <div class="editProfileDetSectCtnt">
                                                <div class="editProfileDetSectHead">
                                                    <div class="editProfileDetSectHeadText">Delete Profile</div>
                                                </div>
                                                <div class="editProfileDetSectBody">
                                                    <p class="editProfileDetSectBodyText ">
                                                        <span class="deleteProfile">Delete</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                `;
                
                editProfFence = document.createElement("div");
                editProfFence.classList.add("editProfileFence");
                editProfFence.innerHTML = editProfHTML;
                switchProfBdr.appendChild(editProfFence);

                editProfAtnBtnMob.classList.add("active");
                changeEditProfAtnListener(`click` , switchToChangeProf , saveCurrProfEdits , `Save`);


                let editProfileBase = document.querySelector(".editProfileBase");
                let editProfileBox = document.querySelector(".editProfileBox");
                let editProfileNameField = document.querySelector("#editProfileNameField");
                let editProfileNameWarnBdr = document.querySelector(".editProfileNameWarnBdr");
                let editProfileLangSelectBdr = document.querySelectorAll(".editProfileLangSelectBdr");
                let openSelectFrgPicModal = document.querySelectorAll(".openSelectFrgPicModal");
                let openSelectBcgPicModal = document.querySelectorAll(".openSelectBcgPicModal");
                let editProfileTitle = document.querySelector(".editProfileTitle");
                let editProfileDetBox = document.querySelector(".editProfileDetBox");
                let editProfileFrgImg = document.querySelector(".editProfileFrgImg");
                let editProfileBcgImg = document.querySelector(".editProfileBcgImg");
                let deleteProfile = document.querySelector(".deleteProfile");
                let selectFrgPicBdr;
                let selectFrgPicCarouselCard;
                let selectBcgPicBdr;
                let selectPicCarouselGrid;
                let selectBcgPicCarouselCard;

                // Justifying postion for Switch Modal
                function justifyEditModalCtntPos()
                {
                    if((editProfileBase.scrollHeight) > (Math.ceil((editProfileBase.clientHeight))))
                    {
                        editProfileBase.classList.add("has_scrollbar");
                        return;
                    }
                    editProfileBase.classList.remove("has_scrollbar");
                }
                justifyEditModalCtntPos();
                window.addEventListener("change" , () => 
                {
                    justifyEditModalCtntPos();
                });
                window.addEventListener("resize" , () => 
                {
                    justifyEditModalCtntPos();
                });

                // Inserts the modal for changing the foreground picture
                function insertFrgImgModal()
                {
                    let struct = 
                    `
                        <div class="selectPicBdr selectFrgPicBdr">
                            <div class="selectPicBox"></div>
                        </div>
                    `;
                    let frgImgArray = FrgImgLib.frgImgInv;
                    editProfileBox.insertAdjacentHTML(`beforeend` , struct);

                    // Check if the inventory is defined and not empty
                    if(((frgImgArray == undefined) || (frgImgArray.length == 0)))
                    {
                        errorloadFrgImgLib();
                        return;
                    }

                    // Insert the different sections in the modal
                    let selectPicBox = document.querySelector(".selectFrgPicBdr .selectPicBox");
                    for(let i=0; i < frgImgArray.length; i++)
                    {
                        let item = frgImgArray[i];
                        let sect = 
                        `
                            <div class="selectPicSect">
                                <div class="selectPicSectHeader">
                                    <p class="selectPicSectHeaderText">${item.frg_sectname}</p>
                                </div>
                                <div class="selectPicSectCarouselBdr">
                                    <div class="selectPicSectCarouselBox">

                                        <!-- Arrows -->
                                        <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrLeft">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrRight">
                                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>

                                        <!-- Grid -->
                                        <div class="selectPicCarouselGrid selectFrgPicCarouselGrid"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                        selectPicBox.insertAdjacentHTML(`beforeend` , sect);
                    }

                    // Filling the options of the various sects
                    for(let i = 0; i < frgImgArray.length; i++)
                    {
                        let selectFrgPicCarouselGrid = document.querySelectorAll(".selectFrgPicCarouselGrid")[i];
                        let frgImgSrcSet = frgImgArray[i].frg_ImgSrcSet;
                        for(let j = 0; j < frgImgSrcSet.length; j++)
                        {
                            let item = frgImgSrcSet[j];
                            let struct = 
                            `
                                <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox">
                                    <div class="selectFrgPicCarouselCard">
                                        <div class="selectFrgPicCarouselImgBox">
                                            <img src="${item.img_src}" alt="Profile foreground image ${j}" class="selectFrgPicCarouselImg">
                                        </div>
                                    </div>
                                </div>
                            `;
                            selectFrgPicCarouselGrid.insertAdjacentHTML(`beforeend` , struct);
                        }
                    }

                    selectFrgPicBdr = document.querySelector(".selectFrgPicBdr");
                    selectFrgPicCarouselCard = document.querySelectorAll(".selectFrgPicCarouselCard");

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
                            justifyEditModalCtntPos();
                        });
                    });
                }
                function errorloadFrgImgLib()
                {
                    notification(`notifyBad` , `Error loading foreground Images`);
                }
                loadScriptOnce(`/SwitchProfile/frgImgLib.js` , `loadFrgImgLibId` , insertFrgImgModal, errorloadFrgImgLib);

                // Inserts the modal for changing the foreground picture
                function insertBcgImgModal()
                {
                    let struct = 
                    `
                        <div class="selectPicBdr selectBcgPicBdr">
                            <div class="selectPicBox"></div>
                        </div>
                    `;
                    let bcgImgArray = BcgImgLib.bcgImgInv;
                    editProfileBox.insertAdjacentHTML(`beforeend` , struct);

                    // Check if the inventory is defined and not empty
                    if(((bcgImgArray == undefined) || (bcgImgArray.length == 0)))
                    {
                        errorloadBcgImgLib();
                        return;
                    }

                    // Insert the different sections in the modal
                    let selectPicBox = document.querySelector(".selectBcgPicBdr .selectPicBox");
                    for(let i=0; i < bcgImgArray.length; i++)
                    {
                        let item = bcgImgArray[i];
                        let sect = 
                        `
                            <div class="selectPicSect">
                                <div class="selectPicSectHeader">
                                    <p class="selectPicSectHeaderText">${item.bcg_sectname}</p>
                                </div>
                                <div class="selectPicSectCarouselBdr">
                                    <div class="selectPicSectCarouselBox">

                                        <!-- Arrows -->
                                        <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrLeft">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrRight">
                                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>

                                        <!-- Grid -->
                                        <div class="selectPicCarouselGrid selectBcgPicCarouselGrid"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                        selectPicBox.insertAdjacentHTML(`beforeend` , sect);
                    }

                    // Filling the options of the various sects
                    for(let i = 0; i < bcgImgArray.length; i++)
                    {
                        let selectBcgPicCarouselGrid = document.querySelectorAll(".selectBcgPicCarouselGrid")[i];
                        let bcgImgSrcSet = bcgImgArray[i].bcg_ImgSrcSet;
                        for(let j = 0; j < bcgImgSrcSet.length; j++)
                        {
                            let item = bcgImgSrcSet[j];
                            let struct = 
                            `
                                <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox">
                                    <div class="selectBcgPicCarouselCard">
                                        <div class="selectBcgPicCarouselImgBox">
                                            <img src="${item.img_src}" alt="Profile background image ${j}" class="selectBcgPicCarouselImg">
                                        </div>
                                    </div>
                                </div>
                            `;
                            selectBcgPicCarouselGrid.insertAdjacentHTML(`beforeend` , struct);
                        }
                    }

                    selectBcgPicBdr = document.querySelector(".selectBcgPicBdr");
                    selectBcgPicCarouselCard = document.querySelectorAll(".selectBcgPicCarouselCard");

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
                            justifyEditModalCtntPos();
                        });
                    });
                }
                function errorloadBcgImgLib()
                {
                    notification(`notifyBad` , `Error loading Background Images`);
                }
                loadScriptOnce(`/SwitchProfile/bcgImgLib.js` , `loadBcgImgLibId` , insertBcgImgModal, errorloadBcgImgLib);

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

                    justifyEditModalCtntPos();
                    selectPicSlider();
                    
                    // Calls the function again if window changes size
                    window.removeEventListener("resize" , selectPicSlider);
                    window.removeEventListener("change" , selectPicSlider);
                    editProfileTitle.textContent = `Edit Profile`;
                    changeEditProfAtnListener(`click` , closeSelectPicModals , saveCurrProfEdits , `Save`);
                }
                

                // The slider for select pic modals
                function selectPicSlider()
                {
                    selectPicCarouselGrid = document.querySelectorAll(".selectPicCarouselGrid");
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
                editProfOptTempFrg = editProfileFrgImg.getAttribute("src");
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

                        justifyEditModalCtntPos();
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

                        justifyEditModalCtntPos();
                        selectPicSlider();
                        // Calls the function again if window changes size
                        window.addEventListener("resize" , selectPicSlider);
                        window.addEventListener("change" , selectPicSlider);
                        changeEditProfAtnListener(`click` , saveCurrProfEdits , closeSelectPicModals , `Back`);
                    });
                });

                // Deleting a profile
                deleteProfile.addEventListener("click" , (e) => 
                {
                    let warnAlert = confirm(`Are you sure you want to delete this profile? \nThis action can not be undone.`);
                    if(warnAlert == false)
                    {
                        e.preventDefault();
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
                let profCurrIndex = parseInt(profCurrBeignEdited.getAttribute("data-profile-index"));
                let profLibCurrObj = profileInfoArray[profCurrIndex];

                // let loadFrgImgLibId = document.querySelector("#loadFrgImgLibId");
                // let loadBcgImgLibId = document.querySelector("#loadBcgImgLibId");

                // Remove the image library scripts
                // loadFrgImgLibId.remove();
                // loadBcgImgLibId.remove();
                removeScriptById(`loadFrgImgLibId`);
                removeScriptById(`loadBcgImgLibId`);
                
                // Update the Profile Name
                if(((editProfOptTempName != null) || (editProfOptTempName != undefined)))
                {
                    // Update profile name in the switchProf modal
                    profCurrName.textContent = `${editProfOptTempName}`;

                    // Update profile name in the "profInfolib" library
                    profLibCurrObj.prof_name = `${editProfOptTempName}`;
                }
                // Update the Foreground (Frg) pic
                if(((editProfOptTempFrg != null) || (editProfOptTempFrg != undefined)))
                {
                    // Update profile frg in the switchProf modal
                    profCurrFrgImg.setAttribute(`src` , `${editProfOptTempFrg}`);

                    // Update profile frg in the "profInfolib" library
                    profLibCurrObj.prof_frgImg = `${editProfOptTempFrg}`;
                }
                // Update the Background (Bcg) pic
                if(((editProfOptTempBcg != null) || (editProfOptTempBcg != undefined)))
                {
                    // Update the profile bcg in the switchProf modal
                    profCurrBeignEdited.setAttribute(`data-background-image` , `${editProfOptTempBcg}`);

                    // Update the background pic of the switchProf modal
                    switchProfBcgImg.setAttribute(`src` , `${editProfOptTempBcg}`);

                    // Update profile bcg in the "profInfolib" library
                    profLibCurrObj.prof_bcgImg = `${editProfOptTempBcg}`;
                }
                // Clear the variables after updating
                editProfOptTempName, editProfOptTempFrg, editProfOptTempBcg = null;

                // Remove the id from the profile
                profCurrBeignEdited.removeAttribute("id");

                // Remove the editProf modal from DOm
                switchProfBdr.removeChild(editProfFence);
                editProfAtnBtnMob.classList.remove("active");
                changeEditProfAtnListener(`click` , saveCurrProfEdits , switchToChangeProf , `Done`);
            }

        }
    }