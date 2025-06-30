/**********************************************************************************************************
 * This is the script file that handles the editing of selected profile
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/

    // Declarations
    let editProfHTML =
    `
        <div class="switchProfNavBdr">
            <div class="switchProfNavBox">
                <div class="switchProfNavLeft">
                    <a href="/Home.html" class="Companylogo navBarCompanylogo">
                        <div class="company_logoBdr">
                            <div class="company_logoBox Companylogo">
                                <img loading="eager" src="/images/uvid-logo.png" alt="" class="company_logoImg">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="switchProfNavLeft">
                    <button type="button" aria-haspopup="false" class="genBtnBox lightSolidBtn switchProfNavBtn editProfAtnBtn">
                        <div class="genBtnText ">Save</div>
                    </button>
                </div>
            </div>
        </div>
        <div class="editProfileBcgImgBdr editProfilePcBcgImgBdr">
            <div class="editProfileBcgImgBox">
                <div class="img_preload_box">
                    <div class="img_preload_sibling"></div>
                    <img loading="lazy" 
                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                        src="" alt="Background Image" class="editProfileBcgImg"
                    >
                </div>
            </div>
        </div>
        <div class="editProfileBase">
            <div class="editProfileBdr">
                <div class="editProfileBcgImgOverlayBdr openSelectBcgPicModal">
                    <div class="editProfileBcgImgOverlayBox">
                        <p class="editProfileBcgImgOverlayText">Update Background Image</p>
                    </div>
                </div>
                <div class="editProfileFrgImgBase " title="Change Profile Image">
                    <div class="editProfileFrgImgBdr">
                        <div class="editProfileFrgImgBox">
                            <div class="img_preload_box">
                                <div class="img_preload_sibling"></div>
                                <img loading="lazy" 
                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                    src="" alt="Foreground Image" class="editProfileFrgImg"
                                >
                            </div>
                        </div>
                        <div class="editProfileFrgImgOverlayBdr openSelectFrgPicModal">
                            <div class="editProfileFrgImgOverlayBox">
                                <p class="editProfileFrgImgOverlayText">Change</p>
                            </div>
                        </div>
                        <div class="editProfileBadgeBdr">
                            <div class="editProfileBadgeBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="editProfileBadgeIcon">
                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
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
                                            <input type="text" value="" name="editProfileNameField" id="editProfileNameField" class="editProfileNameField" placeholder="Enter here.."/>
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
                            <div class="editProfileDetSect delProfileDetSect">
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
    let profId;
    let profItem;
    let editProfFence;
    let editProfAtnBtn;
    let editProfileBase;
    let editProfileBox;
    let deleteProfile;
    let editProfileTitle;
    let editProfileNameField;
    let editProfileNameWarnBdr;
    let editProfileLangSelectBdr;
    let editProfileDetBox;
    let selectFrgPicBdr;
    let selectFrgPicCarouselCard;
    let selectBcgPicBdr;
    let selectPicCarouselGrid;
    let selectBcgPicCarouselCard;
    let openSelectFrgPicModal;
    let openSelectBcgPicModal;
    let editProfileFrgImg;
    let editProfileBcgImg;
    


    // Fetches the related info of the given profile to initialize the edit modal
    async function initProfEditModal()
    {
        profId = hash_parts[3] || window.location.hash.split('/')[3];
        let isProfId = await getUsrProfFld(profId);

        // Return to profile page if id doesn't exist
        if(((isProfId == undefined) || (isProfId == null)))
        {
            window.open("#/profile" , "_self");

            notification(`notifyBad` , `Profile not found`);
            return;
        }
        documentBody.classList.add("bodystop");

        profItem = isProfId[1];

        editProfFence = document.createElement("div");
        editProfFence.classList.add("editProfileFence");
        editProfFence.innerHTML = editProfHTML;
        documentCtnt.appendChild(editProfFence);

        // Attach selectors
        editProfAtnBtn = document.querySelectorAll(".editProfAtnBtn");
        editProfileBase = document.querySelector(".editProfileBase");
        editProfileBox = document.querySelector(".editProfileBox");
        editProfileNameField = document.querySelector("#editProfileNameField");
        editProfileNameWarnBdr = document.querySelector(".editProfileNameWarnBdr");
        editProfileLangSelectBdr = document.querySelectorAll(".editProfileLangSelectBdr");
        editProfileTitle = document.querySelector(".editProfileTitle");
        editProfileDetBox = document.querySelector(".editProfileDetBox");
        deleteProfile = document.querySelector(".deleteProfile");
        openSelectFrgPicModal = document.querySelectorAll(".openSelectFrgPicModal");
        openSelectBcgPicModal = document.querySelectorAll(".openSelectBcgPicModal");
        editProfileFrgImg = document.querySelector(".editProfileFrgImg");
        editProfileBcgImg = document.querySelector(".editProfileBcgImg");

        // Initialize sanitization
        preSanitizaUserInput();

        // Set the default Values
        editProfileNameField.value = `${profItem.prof_name.toString().trim().replace(/\s+/g, ' ')}`;
        editProfileFrgImg.setAttribute(`src` , `${profItem.prof_frgImg}`);
        editProfileBcgImg.setAttribute(`src` , `${profItem.prof_bcgImg}`);
        

        // Set the action button listener
        changeEditProfAtnListener(`click` , null , saveCurrProfEdits , `Save`);

        // Visualise warning if naming condition is breached
        editProfileNameField.addEventListener("input" , () => 
        {
            let fieldVal = postSanitizeUserInput(editProfileNameField.value.trim().replace(/\s+/g, ' '));

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
                editProfileDetBox.classList.add("inactive");
                editProfileTitle.textContent = `Choose your Avatar`;

                // Remove the foreground modal
                if(selectBcgPicBdr) selectBcgPicBdr.remove();

                // Initialize the foreground modal
                insertFrgImgModal();

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
                editProfileDetBox.classList.add("inactive");
                editProfileTitle.textContent = `Choose your Background Image`;

                // Remove the foreground modal
                if(selectFrgPicBdr) selectFrgPicBdr.remove();

                // Initialize the background modal
                insertBcgImgModal();
                
                changeEditProfAtnListener(`click` , saveCurrProfEdits , closeSelectPicModals , `Back`);
            });
        });

        // Remove delete section if default
        if((profItem.prof_type === `default`))
        {
            document.querySelector(".delProfileDetSect").remove();
        }

        // Confirm before deleting a profile
        deleteProfile.addEventListener("click" , () => 
        {
            if((profItem.prof_type === `default`))
            {
                notification(`notifyBad` , `You can not delete the default profile`);
            }
            else
            {
                initConfirmModal(
                    `Are you sure you want to delete this profile?`,
                    `This action can not be undone.`,
                    `Delete`,
                    `Cancel`,
                    enfDelProf
                );
            }
        });

        // Deleting a profile
        const enfDelProf = async () => 
        {
            // Remove profile from user data
            updateUserData(
            {
                [`profiles.${profId}`]: firebase.firestore.FieldValue.delete()
            });
            
            // Select the default profile
            const profileInfoInv = await getUsrProfInv();
            let delProf = Object.entries(profileInfoInv).find(([key, prof]) => prof.prof_type === "default");
            await switchProfAtn(delProf[0]);

            // Return back to manage profiles
            window.open("#/profile/switch" , "_self");

            // Notify the user
            notification(`notifyBad` , `Profile deleted`);
        }
    }


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


    // Save Edits made to a profile and return back to the "Edits profile" modal
    async function saveCurrProfEdits()
    {
        // Update attributes
        profItem.prof_name = postSanitizeUserInput(editProfileNameField.value);
        profItem.prof_frgImg = editProfileFrgImg.getAttribute("src");
        profItem.prof_bcgImg = editProfileBcgImg.getAttribute("src");

        // Update user data
        await updUsrProfFlds(
        {
            prof_name: postSanitizeUserInput(editProfileNameField.value),
            prof_frgImg: editProfileFrgImg.getAttribute("src"),
            prof_bcgImg: editProfileBcgImg.getAttribute("src"),
        }, profId);

        // Notify users
        notification(`notifyGood` , `Changes saved`);

        // Switch back to "Manage Profiles" section
        window.open("#/profile/switch", "_self");
    }

     
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
        editProfileDetBox.classList.remove("inactive");
        editProfileTitle.textContent = `Edit Profile`;

        // Remove the foreground and background modals
        if(selectFrgPicBdr) selectFrgPicBdr.remove();
        if(selectBcgPicBdr) selectBcgPicBdr.remove();

        // Update listeners
        changeEditProfAtnListener(`click` , closeSelectPicModals , saveCurrProfEdits , `Save`);

        // Scroll back to the top
        document.querySelector(".editProfileBase").scrollTo(
        {
            top: 0,
            behavior: "instant"
        });
    }


    // Inserts the modal for changing the foreground picture
    function insertFrgImgModal()
    {
        let struct = 
        `
            <div class="selectPicBdr selectFrgPicBdr active">
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

        // Scroll back to the top
        document.querySelector(".editProfileBase").scrollTo(
        {
            top: 0,
            behavior: "instant"
        });

        // Insert the different sections in the modal
        let selectPicBox = document.querySelector(".selectFrgPicBdr .selectPicBox");

        for(let i=0; i < frgImgArray.length; i++)
        {
            let item = frgImgArray[i];
            let sect = 
            `
                <div class="selectPicSect basic_carousel">
                    <div class="selectPicSectHeader">
                        <p class="selectPicSectHeaderText">${item.frg_sectname}</p>
                    </div>
                    <div class="selectPicSectCarouselBdr">
                        <div class="selectPicSectCarouselBox">

                            <!-- Arrows -->
                            <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox arr_left hide">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrLeft">
                                    <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox arr_right hide">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrRight">
                                    <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <!-- Grid -->
                            <div class="selectPicCarouselGrid selectFrgPicCarouselGrid basic_carousel_slider"></div>
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
                    <div class="selectPicCarouselCardBox selectFrgPicCarouselCardBox basic_carousel_card">
                        <div class="selectFrgPicCarouselCard">
                            <div class="selectFrgPicCarouselImgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                        src="${item.img_src}" alt="Profile foreground image ${j}" class="selectFrgPicCarouselImg"
                                    >
                                </div>
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

            card.addEventListener("click" , (e) => 
            {
                if(isBasicSliderDragging)
                {
                    e.preventDefault();
                    return;
                }
                editProfileFrgImg.setAttribute(`src` , `${imgSrc}`);
                editProfOptTempFrg = imgSrc;
                closeSelectPicModals();
            });
        });

        // Initialize slider functionalities
        basicSlider();
    }

    function errorloadFrgImgLib()
    {
        notification(`notifyBad` , `Error loading foreground Images`);
    }


    // Inserts the modal for changing the foreground picture
    function insertBcgImgModal()
    {
        let struct = 
        `
            <div class="selectPicBdr selectBcgPicBdr active">
                <div class="selectPicBox"></div>
            </div>
        `;
        let bcgImgArray = BcgImgLib.bcgImgInv;
        editProfileBox.insertAdjacentHTML(`beforeend` , struct);

        // Scroll back to the top
        document.querySelector(".editProfileBase").scrollTo(
        {
            top: 0,
            behavior: "instant"
        });

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
                <div class="selectPicSect basic_carousel">
                    <div class="selectPicSectHeader">
                        <p class="selectPicSectHeaderText">${item.bcg_sectname}</p>
                    </div>
                    <div class="selectPicSectCarouselBdr">
                        <div class="selectPicSectCarouselBox">

                            <!-- Arrows -->
                            <div class="selectPicCarouselArrBox selectPicCarouselArrLeftBox arr_left hide">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrLeft">
                                    <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="selectPicCarouselArrBox selectPicCarouselArrRightBox arr_right hide">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="selectPicCarouselArr selectPicCarouselArrRight">
                                    <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <!-- Grid -->
                            <div class="selectPicCarouselGrid selectBcgPicCarouselGrid basic_carousel_slider"></div>
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
                    <div class="selectPicCarouselCardBox selectBcgPicCarouselCardBox basic_carousel_card">
                        <div class="selectBcgPicCarouselCard">
                            <div class="selectBcgPicCarouselImgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                        src="${item.img_src}" alt="Profile background image ${j}" class="selectBcgPicCarouselImg"
                                    >
                                </div>
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

            card.addEventListener("click" , async (e) => 
            {
                if(isBasicSliderDragging)
                {
                    e.preventDefault();
                    return;
                }
                editProfileBcgImg.setAttribute(`src` , `${imgSrc}`);
                editProfOptTempBcg = imgSrc;
                closeSelectPicModals();
            });
        });

        // Initialize slider functionalities
        basicSlider();
    }

    function errorloadBcgImgLib()
    {
        notification(`notifyBad` , `Error loading Background Images`);
    }
