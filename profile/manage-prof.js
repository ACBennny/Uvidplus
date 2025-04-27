/**********************************************************************************************************
 * This is the script file that handles profile management
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/


    
    let createProfStruct = 
    `
        <div class="genAtnModalBcg closeCreateProfBtn"></div>
        <div class="genAtnModalBox">
            <div class="genAtnModalCtnt">
                <div class="genAtnModalHeader">
                    <div class="genAtnModalHeaderIconBox closeCreateProfBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    <div class="genAtnModalHeaderText">
                        <span class="large">A</span>
                        <span class="small">dd Profile</span>
                    </div>
                </div>
                <div class="genAtnModalOptBcg createProfItemBcg">
                    <div class="genAtnModalOptBdr createProfItemBox">
                        <div class="newCLBdr active">
                            <div class="newCLBox">
                                <div class="newCLInputBdr">
                                    <div class="newCLInputBox">
                                        <input type="text" name="newProfInputField" id="newProfInputId" class="newCLInputClass" placeholder="Name your profile" />
                                    </div>
                                </div>
                                <div class="newCLWarnBdr">
                                    <div class="newCLWarnBox">
                                        <p id="newProfWarnId" class="newCLWarnText" tabindex="-1"></p>
                                    </div>
                                </div>
                                <div class="newCLAtnBdr">
                                    <div class="newCLAtnBox">
                                        <button type="button" id="createNewProf" class="genBtnBox inactiveBtn" disabled>
                                            <div class="genBtnText">Create</div>
                                        </button>
                                        <button type="button" id="cancelNewProf" class="genBtnBox hollowBtn closeCreateProfBtn">
                                            <div class="genBtnText">Cancel</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let createNewProfStruct = 
    `
        <div class="switchProfOptBox createProfileBtn">
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
    let profileLimit = 5;
    let mngProfTrstnTime = 10;
    

    function errorLoadingProfInfo()
    {
        notification(`notifyBad` , `Error loading profile info`);
    }


// Switch Profile

    function initManageProfileModal(type = "switch")
    {
        let switchProfBdr = document.createElement("div");
        switchProfBdr.classList.add("switchProfBdr");
        switchProfBdr.classList.add("inactive");

        // The Switch Profile Modal Structure
        switchProfBdr.innerHTML = 
        `
            <div class="switchProfNavBdr">
                <div class="switchProfNavBox">
                    <div class="switchProfNavLeft">
                        <a href="/Home.html" class="Companylogo navBarCompanylogo">
                            <div class="company_logoBdr">
                                <div class="company_logoBox Companylogo">
                                    <img src="/images/uvid-logo.png" alt="" class="company_logoImg">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="switchProfNavLeft"></div>
                </div>
            </div>
            <div class="switchProfBcg closeSwitchProf">
                <div class="switchProfBcgImgBox">
                    <img src="${selectedProfile.prof_bcgImg}" alt="Background image of the 'Switch Profiles' modal" class="switchProfBcgImg">
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

        // Append the fragment to DOM
        documentCtnt.appendChild(switchProfBdr);
        let switchProfOptBdr = switchProfBdr.querySelector(".switchProfOptBdr");

        // Fetch the data for the respective profiles
        if(((profileInfoInv == undefined) || (profileInfoInv.length <=0)))
        {
            errorLoadingProfInfo();
            return;
        }

        // Fill in the data
        for(let i = 0; i < profileInfoInv.length; i++)
        {
            const item = profileInfoInv[i];
            const switchProfCardStruct = 
            `
                <div class="switchProfOptBox profileOpt" data-prof-id="${item.prof_id}">
                    <div class="switchProfOptImgBdr">
                        <div class="switchProfOptImgBox">
                            <img src="${item.prof_frgImg}" alt="profile image" class="switchProfOptImg">
                        </div>
                        <div class="editProfileBadgeBdr">
                            <div class="editProfileBadgeBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="editProfileBadgeIcon">
                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
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

    
        // Attach selectors based on type
        if(type.toLowerCase() === "switch")
        {
            attachSwitchProfListeners();
        }
        else
        {
            // Attach selectors for edit modal
            attachEditProfListeners();
        }


        // Display the modal
        switchProfTimer = setTimeout(() => 
        {
            clearTimeout(switchProfTimer);

            documentBody.classList.add("bodystop");

            // Adds style class
            switchProfBdr.classList.remove("inactive");
            switchProfBdr.classList.add("active");

            // Add Create new profile listener
            attachCreateProfListeners();

            switchProfTimer2 = setTimeout(() => 
            {
                clearTimeout(switchProfTimer2);
                switchProfBdr.classList.remove("flow");
            }, mngProfTrstnTime);

        }, 10);
    }

    // Closes the Manage profile modal
    function closeManageProfModal()
    {
        let switchProfBdr = document.querySelector(".switchProfBdr");

        // Removes style classes
        switchProfBdr.classList.remove("active");
        getSelectedProfile();

        switchProfTimer = setTimeout(() => 
        {
            clearTimeout(switchProfTimer);
            switchProfBdr.remove();
            documentBody.classList.remove("bodystop");

            window.open('#/profile' , '_self');
        }, mngProfTrstnTime);
    }

    
    // Selectors for Switching Profile
    function attachSwitchProfListeners()
    {
        let switchProfOptBox = document.querySelectorAll(".switchProfOptBox.profileOpt");

        // Remove old listeners
        switchProfOptBox.forEach((box) => 
        {
            if(box.switch_atn)
            {
                box.addEventListener("click", box.switch_atn);
            }
        });

        // Add new listeners
        switchProfOptBox.forEach((box) => 
        {
            let boxId = box.getAttribute("data-prof-id");

            const box_atn = () =>
            {
                switchProfAtn(boxId);
            }

            box.addEventListener("click", box_atn);
            box.switch_atn = box_atn;
        });

        // Update action button
        document.querySelector(".editProfAtnBtn_Pc .editProfAtnBtn").onclick = () => 
        {
            window.open('#/profile/edit' , '_self');
        }
    }

    function switchProfAtn(switch_id)
    {
        let chsnProf = profileInfoInv.filter(item => item.prof_id === switch_id);

        // Deselect previous profiles
        profileInfoInv.forEach((prof) => 
        {
            prof.prof_selected = "no";
        });

        // Select the chosen profile
        chsnProf[0].prof_selected = "yes";

        // Close the modal
        closeManageProfModal();
    }


    // Selectors for edit profile
    function attachEditProfListeners()
    {
        let editProfOptBox = document.querySelectorAll(".switchProfOptBox.profileOpt");
        let atnBtn = document.querySelector(".editProfAtnBtn_Pc .editProfAtnBtn");

        // Update title text
        document.querySelector(".switchProfHeaderText").textContent = "Manage Profiles";

        // Remove old listeners
        editProfOptBox.forEach((box) => 
        {
            if(box.edit_atn)
            {
                box.addEventListener("click", box.edit_atn);
            }
        });

        // Add new listeners
        editProfOptBox.forEach((box) => 
        {
            let boxId = box.getAttribute("data-prof-id");

            const box_atn = () =>
            {
                window.open(`#/profile/edit/${boxId}`, `_self`);
            }

            // Visual reference for editing
            box.classList.add("editProfOPt");

            box.addEventListener("click", box_atn);
            box.edit_atn = box_atn;
        });

        // Update action button
        atnBtn.querySelector(".genBtnText").textContent = "Done";
        atnBtn.onclick = () => window.open('#/profile/switch' , '_self');
    }


    // opening the modal for creating a new collection
    function attachCreateProfListeners()
    {
        let openCreateProfBtn = document.querySelectorAll(".createProfileBtn");

        openCreateProfBtn.forEach(btn => 
        {
            if(btn.createProfFunc)
            {
                btn.removeEventListener(`click` , btn.createProfFunc);
            }
        });

        openCreateProfBtn.forEach(btn => 
        {
            let btn_create = () =>
            {
                if(profileInfoInv.length < profileLimit)
                {
                    createProfFunc(btn);
                    return;
                }
                notification(`notifyBad` , `You have created the max(${profileLimit}) number of profile`);
            }
            
            btn.addEventListener("click" , btn_create);
            btn.createProfFunc = btn_create;
        });
    }

    const createProfFunc = (e) =>
    {
        const createProfBdr = document.createElement("div");
        createProfBdr.classList.add("genAtnModalBdr");
        createProfBdr.innerHTML = createProfStruct;
        documentBody.appendChild(createProfBdr);

        const createProfCloseBtn = document.querySelectorAll(".closeCreateProfBtn");
        const newProfInput = document.querySelector("#newProfInputId");
        const newProfWarn = document.querySelector("#newProfWarnId");
        const createProfBtn = document.querySelector("#createNewProf");
        const newProfId = generateRandomString().toLowerCase();
        let inputUppBnd = 50;
        let plArr = [];
        let lastProfArr;
        let lastProfArrLength = 0;
        let currLength = 0;
        let wordCount = inputUppBnd;
        let createProfTimer;

        // Disabling btn to prevent multiple calls
        e.disabled = true;

        // Transitioning elements
        createProfTimer = setTimeout(() => 
        {
            documentBody.setAttribute(`data-modal-state` , `open`);
            createProfBdr.classList.add("active");
            clearTimeout(createProfTimer);
        }, 100);
        
        // Automatically focus on input feild after transition
        createProfBdr.addEventListener("transitionend" , function handleTransitionEnd()
        {
            createProfBdr.removeEventListener("transitionend" , handleTransitionEnd);
            newProfInput.focus();
        });

        // Checking input length
        function getWordCount(input)
        {
            plArr.push(input);
            lastProfArr = plArr.at(-1);
            lastProfArr = lastProfArr.toString();
            lastProfArr = lastProfArr.trim().replace(/\s+/g, ' ');
            lastProfArrLength = lastProfArr.length;

            // Update warn label
            currLength = wordCount - lastProfArrLength;
            newProfWarn.textContent = currLength;

            if(!(newProfWarn.classList.contains("active"))) newProfWarn.classList.add("active");
            newProfWarn.classList.toggle("empty" , currLength < 1);

            checkBeforeCreate(lastProfArr);
        }

        // Check if name is valid (3 - 64 characters)
        function checkBeforeCreate(val)
        {
            if((val.length <= inputUppBnd) && (val !== ""))
            {
                createProfBtn.disabled = false;
                createProfBtn.classList.replace("inactiveBtn" , "midSolidBtn");
            }
            else
            {
                createProfBtn.disabled = true;
                createProfBtn.classList.replace("midSolidBtn" , "inactiveBtn");
            }
        }

        newProfInput.addEventListener("input" , () => 
        {
            getWordCount(newProfInput.value);
        });

        // Create list
        function generateProfile(profName)
        {
            // Add new entry into the library
            profileInfoInv.push(
                {
                    prof_id: `${newProfId}`,
                    prof_selected: `no`,
                    prof_name: `${profName}`,
                    prof_type: `normal`,
                    prof_frgImg: `/images/uvid-profile-base.png`,
                    prof_bcgImg: `/images/uvid-green-bcg1-dark.jpg`,
                    prof_audio_lang: `English`,
                    prof_subtitle_lang: `English`,
                    prof_show_subtitles: `on`,
                    prof_auto_play: `off`,
                    prof_auto_next: `off`,
                    prof_auto_skip: `off`,
                    prof_lock_state: `unlocked`,
                    prof_lock_pin: `0000`,
                    prof_ctnt_restriction: `18+`,
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
                    prof_downloads:
                    [],
                    prof_notifications:
                    [],
                }
            );
            console.log(profileInfoInv.at(-1));

            // Notify user of the newly created profile
            notification(`notifyGood` , `Profile created successfully`);

            closeCreateProf(true);
        }

        createProfBtn.addEventListener("click" , () => 
        {
            generateProfile(newProfInput.value.toString().trim().replace(/\s+/g, ' '));
        });

        // Create list by pressing the "Enter" key
        newProfInput.addEventListener("keyup" , (e) => 
        {
            if((e.key === "Enter"))
            {
                createProfBtn.click();
            }
        });


        // Closes the createList modal
        function closeCreateProf(isProfNew = false)
        {
            createProfBtn.classList.replace("midSolidBtn" , "inactiveBtn");
            newProfWarn.classList.remove("active");
            newProfWarn.classList.remove("empty");
            newProfInput.value = "";
            newProfWarn.textContent = "";
            newProfInput.disabled = true;
            createProfBtn.disabled = true;
            createProfBdr.classList.remove("active");
            
            createProfBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                createProfBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(createProfBdr);
                e.disabled = false;
                documentBody.removeAttribute(`data-modal-state`);

                // Go to edit page
                if(isProfNew == true) window.open(`#/profile/edit/${newProfId}`, `_self`);
            });
        }

        // Closes the modal
        createProfCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeCreateProf);
        });
    }

