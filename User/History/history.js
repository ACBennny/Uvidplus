/***************************************************************
 * This will hold the code for General functions of the History page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let historyCtntBox = document.querySelector(".history_ctnt_box");

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

        function fetchUserHistory()
        {
            // Chekc if content of library is available
            if(((historyInventory === undefined) || (historyInventory.length <= 0)))
            {
                errorLoadingUserHistory();
                return;
            }
            
            for(let i = 0; i < historyInventory.length; i++)
            {
                const item = historyInventory[i];
                const historyCardStruct = 
                `
                    <div class="slide_card_base history_card">
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
                historyCtntBox.insertAdjacentHTML('beforeend', historyCardStruct);
            }

            const historyCard = document.querySelectorAll(".history_card");

            // Function to convert time to seconds, handling both "HH:MM:SS" and "MM:SS" formats
            function timeToSeconds(time) {
                const parts = time.split(':').map(Number);
            
                if (parts.length === 3) 
                {
                    // "HH:MM:SS" format
                    return parts[0] * 3600 + parts[1] * 60 + parts[2];
                } else if (parts.length === 2) 
                {
                    // "MM:SS" format
                    return parts[0] * 60 + parts[1];
                } else {
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
                        parentOfBtn.remove();
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
                    historyCard.forEach((card) => 
                    {
                        card.remove();
                    });
                    notification(`notifyGood` , `Your History has been cleared successfully`);
                });
            });
        }
    }




