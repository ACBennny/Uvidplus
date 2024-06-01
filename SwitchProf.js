/**********************************************************************************************************
 * This is the script file that handles the switching of profiles
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



    let navProfleImg = document.querySelector(".navBarProfileImage");
    let switchProfTimer;
    let switchProfHTML = 
    `
        <div class="switchProfBcg closeSwitchProf">
            <div class="switchProfBcgImgBox">
                <img src="/Images/Uvid_green_bcg1_light.jpg" alt="Background image of the 'Switch Profiles' modal" class="switchProfBcgImg">
            </div>
        </div>
        <div class="switchProfBox active">
            <div class="switchProfBoxCtnt">
                <div class="switchProfHeader">
                    <span class="switchProfHeaderText">Who's watching?</span>
                </div>
                <div class="switchProfOptBcg">
                    <div class="switchProfOptBdr">
                        <div class="switchProfOptBox changeProfOPt">
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
                        <div class="switchProfOptBox changeProfOPt">
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
                        <div class="switchProfOptBox changeProfOPt">
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
                        <div class="switchProfOptBox changeProfOPt">
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
    let switchProfBox;
    let switchProfOPtBox;
    let changeProfOPt;
    let editProfOPt;
    let manageProfBtn;
    let saveEditsBtn;

    // Opens the Notification Box
    function instantiateSwitchProfBdr()
    {
        // The border holding the elements of the notification box
        const switchProfBdr = document.createElement("div");
        switchProfBdr.classList.add("switchProfBdr");

        // The Notification Bar Structure
        switchProfBdr.innerHTML = switchProfHTML;

        // Append the fragment to navBarRightCtnt of the navbar
        documentBody.appendChild(switchProfBdr);

        // Definitons
        switchProfBox = document.querySelector(".switchProfBox");
        switchProfOPtBox = document.querySelectorAll(".switchProfOptBox");
        changeProfOPt = document.querySelectorAll(".changeProfOPt");
        editProfOPt = document.querySelectorAll(".switchProfOpt");
        manageProfBtn = document.querySelector(".switchProfOpt");
        saveEditsBtn = document.querySelector(".switchProfOpt");

        // Opens the Switch Profile Modal
        switchProfTimer = setTimeout(() => 
        {
            documentBody.classList.add("bodystop");

            // Adds style class
            switchProfBdr.classList.add("active");

            // Slides in the Notification box
            switchProfBox.classList.add("active");

            // clear timer once time runs out
            clearTimeout(switchProfTimer);

        } , 100);

        // Switching a profile
        changeProfOPt.forEach((opt) => 
        {
            let optImg = opt.querySelector(".switchProfOptImg");
            let optSrc = optImg.getAttribute("src");

            opt.addEventListener("click" , () => 
            {
                // Update the profile image 
                navProfleImg.setAttribute("src" , optSrc);

                // Close the switch profile modal
                closeswitchProfBdr();
            });
        });

        // Closes the Switch Profile Modal
        function closeswitchProfBdr()
        {

            // Removes style classes
            switchProfBdr.classList.add("active");
            switchProfBdr.classList.remove("active");
            switchProfBox.classList.remove("active");

            switchProfTimer = setTimeout(() => 
            {
                // Remove Child Nodes
                documentBody.removeChild(switchProfBdr);

                // clear timer once time runs out
                clearTimeout(switchProfTimer);

                documentBody.classList.remove("bodystop");
            },1000);
        
        }
    }