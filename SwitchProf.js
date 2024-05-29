/**********************************************************************************************************
 * This is the script file that handles the switching of profiles
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



    let switchAccTimer;

    // Opens the Notification Box
    function instantiateSwitchAccBdr()
    {
        // The border holding the elements of the notification box
        const switchAccBdr = document.createElement("div");
        switchAccBdr.classList.add("switchAccBdr");

        // The Notification Bar Structure
        switchAccBdr.innerHTML = 
        `
            <div class="switchAccBcg closeSwitchAcc">
            <div class="switchAccBcgImageBox">
                <img src="/Images/Uvid_green_bcg1_light.jpg" alt="Background image of the 'Switch Profiles' modal" class="switchAccBcgImage">
            </div>
        </div>
        <div class="switchAccBox active">
            <div class="switchAccBoxCtnt">
                <div class="switchAccHeader">
                    <span class="switchAccHeaderText">Who's watching?</span>
                </div>
                <div class="switchAccOptBcg">
                    <div class="switchAccOptBdr">
                        <div class="switchAccOptBox switchProfOpt">
                            <div class="switchAccOptImgBdr">
                                <div class="switchAccOptImgBox">
                                    <img src="/Images/pfp/red_velvet_cupcake.jpg" alt="profile_img" class="switchAccOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchAccOptTextBox">
                                <p class="switchAccOptText">Velvet</p>
                            </div>
                        </div>
                        <div class="switchAccOptBox switchProfOpt">
                            <div class="switchAccOptImgBdr">
                                <div class="switchAccOptImgBox">
                                    <img src="/Images/pfp/IMG_0371.jpg" alt="profile_img" class="switchAccOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchAccOptTextBox">
                                <p class="switchAccOptText">Sarah</p>
                            </div>
                        </div>
                        <div class="switchAccOptBox switchProfOpt">
                            <div class="switchAccOptImgBdr">
                                <div class="switchAccOptImgBox">
                                    <img src="/Images/pfp/IMG_1239.jpg" alt="profile_img" class="switchAccOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchAccOptTextBox">
                                <p class="switchAccOptText">Aston</p>
                            </div>
                        </div>
                        <div class="switchAccOptBox switchProfOpt">
                            <div class="switchAccOptImgBdr">
                                <div class="switchAccOptImgBox">
                                    <img src="/Images/Uvid_profilebase.png" alt="profile_img" class="switchAccOptImg">
                                </div>
                                <div class="editProfileBadgeBdr">
                                    <div class="editProfileBadgeBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="editProfileBadgeIcon">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="switchAccOptTextBox">
                                <p class="switchAccOptText">pomputorri</p>
                            </div>
                        </div>
                        <div class="switchAccOptBox switchAcc_AddAccBox">
                            <div class="switchAcc_AddAccIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="switchAcc_AddAccBoxIcon">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                </svg>
                            </div>
                            <div class="switchAccOptTextBox">
                                <p class="switchAccOptText">Add New</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actionBtnBcg">
                    <div class="actionBtnBdr">
                        <button class="actionBtnBox manageProfBtn" disabled>Manage Profiles</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Append the fragment to navBarRightCtnt of the navbar
        documentBody.appendChild(switchAccBdr);

        
        switchAccTimer = setTimeout(() => 
        {
            documentBody.classList.add("bodystop");

            // Adds style class
            switchAccBdr.classList.add("active");

            // Slides in the Notification box
            const switchAccBox = document.querySelector(".switchAccBox");
            switchAccBox.classList.add("active");


            // Closes the Notification box
            function closeSwitchAccBdr()
            {
                documentBody.classList.remove("bodystop");

                // Removes style classes
                switchAccBdr.classList.remove("active");
                switchAccBox.classList.remove("active");

                setTimeout(() => 
                {
                    // Remove Child Nodes
                    documentBody.removeChild(switchAccBdr);

                    // clear timer once time runs out
                    clearTimeout(switchAccTimer);
                },1000);
            
            }

            const switchAccClose = document.querySelectorAll(".closeSwitchAcc");
            switchAccClose.forEach(one => 
            {
                one.addEventListener("click" , closeSwitchAccBdr);
            });

            // clear timer once time runs out
            clearTimeout(switchAccTimer);

        } , 100);
    }