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
            ${emptyUserPageBdr.innerHTML}
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
            // Check if the library is available
            if((historyInventory == undefined))
            {
                errorLoadingUserHistory();
                return;
            }

            // Check if there is content inside the library
            if((historyInventory.length <= 0))
            {
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                    <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                                    <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
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




