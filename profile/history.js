/***************************************************************
 * This will hold the code for General functions of the History page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



    let basicHistorySliderCardBox;


    function preFetchingShowsFromHistory(type)
    {
        basicHistorySliderCardBox = document.querySelectorAll(".basic_history_slider_card_box");

        if(basicHistorySliderCardBox.length <= 0)
        {
            notification(`notifyBad` , `Failed to fetch History`);
            return;
        }
        fetchProfileHistory(type);
    }

    function hist_or_contd_cond(type = "continue")
    {
        if(type.trim().toLowerCase() === "continue")
        {
            return true;
        }
        return false;
    }


    function fetchProfileHistory(type) 
    {
        // Check if content of library is available
        if(((selectedProfile.prof_history === undefined)))
        {
            errorLoadingMyListHistory();
            return;
        }
        if(((selectedProfile.prof_history.length === 0)))
        {
            return;
        }
        
        let struct = ``;

        // Add items starting from the last item (most recently added)
        for(let i = (selectedProfile.prof_history.length - 1); i >= 0; i--)
        {
            let item = selectedProfile.prof_history[i];
            let itemLink = item.hist_link
            let itemSplit = itemLink.split('/');
            let itemSsn = itemSplit[4];
            let itemEp = itemSplit[5];
            let itemMatch = infoInvLinkMap.get(itemSplit[3]);

            // Convert current time and total time to seconds
            let currentTime = timeToSeconds(item.hist_currTime);
            let totalTime = timeToSeconds(item.hist_totalTime);
            let percentage = Math.round(((currentTime / totalTime) * 100));
            let percent_bound = hist_or_contd_cond(type) ? 100 : 1000;

            if(itemMatch && (percentage < percent_bound))
            {
                const {
                    show_title,
                    show_type,
                    show_year,
                    show_thumbnail,
                } = itemMatch;

                struct += 
                `
                    <div class="slide_card_base basic_carousel_card history_card">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card ">
                                    <a href="${itemLink}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${show_thumbnail}" alt="Image of ${show_title}" class="cardImg">
                                    </div>
                                    <div class="cardinfo cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${show_type}</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${show_year}</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${show_title}</h3>
                                            </div>
                                            <div class="cardProgressBox" style="--cardProgressBarCurrLengthWidth: ${percentage}%">
                                                <div class="cardProgressHeader">
                                                    <div class="cardProgressName">
                                                        <p class="cardProgressName_text">
                                                            <span class="cardProgressName_szn">S${itemSsn}</span>
                                                            <span class="cardProgressName_eps">E${itemEp}</span>
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
            }
        }

        basicHistorySliderCardBox.forEach((box) => 
        {
            box.insertAdjacentHTML('beforeend', struct);
        });

        // Attach selectors
        let historyCard = document.querySelectorAll(".history_card");
        let removeThisShowFromHistory = document.querySelectorAll(".removeThisShowFromHistory");
        let removeAllShowsFromHistory = document.querySelectorAll(".removeAllShowsFromHistory");

        // Removing "ONE" Show from History
        removeThisShowFromHistory.forEach((btn) => 
        {
            btn.addEventListener("click" , function()
            {
                const parentOfBtn = this.closest('.history_card');
                if (parentOfBtn) 
                {
                    // Remove item from history array
                    selectedProfile.prof_history = selectedProfile.prof_history.filter((item) => item.hist_link !== parentOfBtn.querySelector(".cardLinkCover").getAttribute("href"));

                    // Remove item from DOM
                    parentOfBtn.remove();

                    // Reattach listeners
                    attachGenMenuModalEventListeners();

                    // Notify user
                    notification(`notifyGood` , `Show removed from history`);
                    
                    return;
                }
                failedLoadErrorMsg();
            });
        });
        
        // Removing "ALL" Shows From history
        removeAllShowsFromHistory.forEach((btn) => 
        {
            btn.addEventListener("click" , () => 
            {
                historyCard.forEach((card) => 
                {
                    card.remove();
                });
                notification(`notifyGood` , `All Shows have been cleared successfully `);
            });
        });

        // Initialize sliding functionalities
        basicSlider();
    }

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



