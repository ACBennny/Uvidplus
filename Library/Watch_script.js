/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/
    

// DEFINITIONS

    const majorTitle = document.querySelector(".largeText2");
    const nextEpCtntCardBdr = document.querySelectorAll(".next_epCardBdr");   
    const mediaActionBox = document.querySelector(".media_actions_box");
    const openMediaActionBox = document.querySelector(".open_fullMediaActionBox");
    const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
    const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
    const addToWatchListBox = document.querySelector(".add_to_WatchListBox");
    const addToWatchListText = addToWatchListBox.querySelector(".media_optText");
    const addToDwldBox = document.querySelector(".add_to_DwldBox");



// NEXT AND PREVIOUS EPISODE DETAILS

    // Setting episode card atrributes
    nextEpCtntCardBdr.forEach(cardBdr => 
    {
        const cardlink = cardBdr.querySelector(".next_epCardBox");
        const cardImage = cardBdr.querySelector(".next_epImg");
        const cardEpTitle = cardBdr.querySelector(".next_epDetTitle");
        const cardShowName = cardBdr.querySelector(".next_epDetShow");

        cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
        cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
    });



// ACTON TAB

    // Expand/Contract Action tab
    openMediaActionBox.addEventListener("click" , () => 
    {
        mediaActionBox.classList.toggle("active");
    });



// THUMBS UP/ DOWN

    // Like the show
    likeTheEp.addEventListener("click" , () => 
    {
        likeTheEp.classList.toggle("active");
        dontLikeTheEp.classList.remove("active");
    });
    
    // Dislike the show
    dontLikeTheEp.addEventListener("click" , () => 
    {
        dontLikeTheEp.classList.toggle("active");
        likeTheEp.classList.remove("active");
    });



// WATCHLIST

    addToWatchListBox.addEventListener("click" , () => 
    {
        if(addToWatchListBox.classList.contains("active"))
        {
            addToWatchListBox.classList.remove("active");
            addToWatchListText.textContent = "Add to WatchList";
            addToWatchListBox.title = "Add to WatchList";
            addToWatchListBox.ariaLabel = "Add to WatchList";
            return;
        }
        addToWatchListBox.classList.add("active");
        addToWatchListText.textContent = "Remove from WatchList";
        addToWatchListBox.title = "Remove from WatchList";
        addToWatchListBox.ariaLabel = "Remove from WatchList";
    });



// DOWNLOAD

    function instantiateDwlddr()
    {
        // The border holding the elements of the notification box
        const switchAccBdr = document.createElement("div");
        switchAccBdr.classList.add("switchAccBdr");

        // The Notification Bar Structure
        switchAccBdr.innerHTML = 
        `
            <div class="switchAccBcg closeSwitchAcc"></div>
            <div class="switchAccBox">
                <div class="switchAccBoxCtnt">
                    <div class="switchAccHeader">
                        <div class="close_switchAccIconBox closeSwitchAcc">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="close_switchAccIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <h3 class="switchAccHeaderText">Switch Accounts</h3>
                    </div>
                    <div class="switchAccOptBcg">
                        <div class="switchAccOptBdr">
                            <div class="switchAccOptBox">
                                <div class="switchAccOptImgBox switchAcc_AddAccIconBox">
                                    <img src="/Images/Uvid_profilebase.png" alt="profile_img" class="switchAccOptImg">
                                </div>
                                <div class="switchAccOptTextBox">
                                    <span class="switchAccOptText">ACBennny</span>
                                </div>
                            </div>
                            <div class="switchAccOptBox switchAcc_AddAccBox">
                                <div class="switchAccOptImgBox switchAcc_AddAccIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="switchAcc_AddAccBoxIcon">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                    </svg>
                                </div>
                                <div class="switchAccOptTextBox">
                                    <span class="switchAccOptText">Add Account</span>
                                </div>
                            </div>
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
                addToDwldBox.disabled = true;
                documentBody.classList.remove("bodystop");

                // Removes style classes
                switchAccBdr.classList.remove("active");
                switchAccBox.classList.remove("active");

                setTimeout(() => 
                {
                    // Remove Child Nodes
                    documentBody.removeChild(switchAccBdr);
                    addToDwldBox.disabled = false;

                    // clear timer once time runs out
                    clearTimeout(switchAccTimer);
                },1000);
            
            }

            const switchAccClose = document.querySelectorAll(".closeSwitchAcc");
            switchAccClose.forEach(one => 
            {
                one.addEventListener("mousedown" , closeSwitchAccBdr);
            });

            // clear timer once time runs out
            clearTimeout(switchAccTimer);

        } , 100);
    }

    addToDwldBox.addEventListener("click" , instantiateDwlddr);









