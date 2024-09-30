/***************************************************************
 * This will hold the code for General functions of the History page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let historyCtntBox = document.querySelector(".history_ctnt_box");
    let historyCatalogBase = historyCtntBox.querySelector(".basicCatalogBase");
    let historyCatalogBox = document.querySelector(".history_catalog_box");
    let emptyUserPageBdr = document.querySelector(".emptyUserPageBdr");
    let emptyhistoryStruct = 
    `
        <div class="emptyUserPageBdr">
            <div class="emptyUserPageBox">
                <div class="emptyUserPageCtnt">
                    <div class="emptyUserPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="emptyUserPageIconSvg">
                            <path d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/>
                        </svg>
                    </div>
                    <div class="emptyUserPageNoteBox">
                        <p class="emptyUserPageNoteText">Your watch history will appear here</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    function startUserPage()
    {
        let historyLibraryScriptTag = document.createElement("script");
        historyLibraryScriptTag.setAttribute(`src` , `/User/History/library.js`);
        document.body.appendChild(historyLibraryScriptTag);

        historyLibraryScriptTag.addEventListener("load" , () => 
        {
            fetchUserHistory();
        });
        historyLibraryScriptTag.onerror = function() 
        {
            errorLoadingUserHistory();
        };

        // For error events
        function errorLoadingUserHistory()
        {
            notification(`notifyBad` , `An error occurred while loading history`);
        }

        // For inserting the empty status
        function insertEmptyHistStatus()
        {
            // Clearing watch history
            historyCatalogBase.remove();

            // Inserting empty status
            historyCtntBox.insertAdjacentHTML(`afterbegin` , emptyhistoryStruct);
        }

        function fetchUserHistory()
        {
            // Check if content of library is available
            if(((historyInventory == undefined) || (historyInventory.length <= 0)))
            {
                errorLoadingUserHistory();
                return;
            }

            // Remove the empty status
            emptyUserPageBdr.remove();
            
            // Fetch the watch history
            for(let i = 0; i < historyInventory.length; i++)
            {
                const item = historyInventory[i];
                const historyCardStruct = 
                `
                    <div class="slide_card_base history_card max_sizing">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card ">
                                    <a href="${item.hist_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${item.hist_thumbnail}" alt="Image of ${item.hist_title}" class="cardImg">
                                    </div>
                                    <div class="cardQualityBox">
                                        <h1 class="cardQualityText">${item.hist_quality}</h1>
                                    </div>
                                    <div class="cardinfo cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${item.hist_type}</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${item.hist_year}</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${item.hist_title}</h3>
                                            </div>
                                            <div class="cardProgressBox" style="--cardProgressBarCurrLengthWidth: 0%">
                                                <div class="cardProgressHeader">
                                                    <div class="cardProgressName">
                                                        <p class="cardProgressName_text">
                                                            <span class="cardProgressName_szn">S${item.hist_season}</span>
                                                            <span class="cardProgressName_eps">E${item.hist_episode}</span>
                                                        </p>
                                                    </div>
                                                    <div class="cardProgressTime">
                                                        <p class="cardProgressTime_current">${item.hist_currTime}</p>
                                                        <p class="cardProgressTime_divider">/</p>
                                                        <p class="cardProgressTime_total">${item.hist_totalTime}</p>
                                                    </div>
                                                </div>
                                                <div class="cardProgressBarBdr">
                                                    <div class="cardProgressBarBox cardProgressBar_totalLength">
                                                        <div class="cardProgressBar_currLength"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox removeThisShowFromHistory" title="Remove from history">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon">
                                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="slide_card_bcg"></div>
                        </div>
                    </div>
                `;
                historyCatalogBox.insertAdjacentHTML(`beforeend`, historyCardStruct);
            }

            const historyCard = document.querySelectorAll(".history_card");

            // Function to convert time to seconds, handling both "HH:MM:SS" and "MM:SS" formats
            function timeToSeconds(time) 
            {
                const parts = time.split(':').map(Number);
            
                if (parts.length === 3) 
                {
                    // "HH:MM:SS" format
                    return parts[0] * 3600 + parts[1] * 60 + parts[2];
                } 
                else if (parts.length === 2) 
                {
                    // "MM:SS" format
                    return parts[0] * 60 + parts[1];
                } 
                else 
                {
                    notification(`notifyBad` , `Invalid time format`);
                }
            }
            
            // Get the current time and total time elements
            const cardProgressBox = document.querySelectorAll(".cardProgressBox");
            cardProgressBox.forEach((box) => 
            {
                const cardProgressTime = box.querySelector(".cardProgressTime");
                const currentTimeElement = cardProgressTime.querySelector('.cardProgressTime_current');
                const totalTimeElement = cardProgressTime.querySelector('.cardProgressTime_total');
                
                // Convert current time and total time to seconds
                const currentTime = timeToSeconds(currentTimeElement.textContent);
                const totalTime = timeToSeconds(totalTimeElement.textContent);
                
                // Calculate the percentage
                const percentage = (currentTime / totalTime) * 100;
                
                // Set the CSS variable with the calculated percentage
                box.setAttribute(`style` , `--cardProgressBarCurrLengthWidth:${percentage}%`);
            });

            // Removing "ONE" Show from History
            let removeThisShowFromHistory = document.querySelectorAll(".removeThisShowFromHistory");
            removeThisShowFromHistory.forEach((btn) => 
            {
                btn.addEventListener("click" , function()
                {
                    const parentOfBtn = this.closest('.history_card');
                    if (parentOfBtn) 
                    {
                        // Remove the history card
                        parentOfBtn.remove(); 

                        // Check if there are any remaining history cards
                        const remainingHistoryCards = document.querySelectorAll(".history_card");
                        if (remainingHistoryCards.length === 0) 
                        {
                            // Inserting empty status if there are none
                            insertEmptyHistStatus();
                        }

                        notification(`notifyGood` , `Show removed from history`);
                        return;
                    }
                    failedLoadErrorMsg();
                });
            });
            
            // Removing "ALL" Shows From history
            let removeAllShowsFromHistory = document.querySelectorAll(".removeAllShowsFromHistory");
            removeAllShowsFromHistory.forEach((btn) => 
            {
                btn.addEventListener("click" , () => 
                {
                    // Disable button
                    btn.disabled = true;

                    // Insert empty status
                    insertEmptyHistStatus();

                    // Alert user
                    notification(`notifyGood` , `Your History has been cleared successfully`);
                });
            });
        }
    }




