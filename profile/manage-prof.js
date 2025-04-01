/**********************************************************************************************************
 * This is the script file that handles profile management
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



    let createNewProfStruct = 
    `
        <div class="switchProfOptBox createProfile" onclick="window.open('#/profile/create', '_self')">
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
                    <div class="switchProfNavLeft">
                        <button type="button" aria-haspopup="false" class="genBtnBox lightSolidBtn switchProfNavBtn editProfAtnBtn editProfAtnBtn_Mob">
                            <div class="genBtnText ">Edit</div>
                        </button>
                    </div>
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

