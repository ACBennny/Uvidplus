 
/***************************************************************
 * This will hold the code for the Home Page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    window.addEventListener("load", preHomeSection);

    function preHomeSection()
    {
        // INSERTING INTO DOM

        documentCtnt.insertAdjacentHTML(`afterbegin` , tempHomeHTML);

        // FETCHING USER HISTORY
        
            preFetchingShowsFromHistory();

        // CREATING THE BASIC SLIDER

            let basicSliderScriptTag = document.createElement("script");
            basicSliderScriptTag.setAttribute(`src` , `/basic_slider.js`);
    
            basicSliderScriptTag.addEventListener("load" , () => 
            {
                basicSlider();
                startHomeSection();
            });
            document.body.appendChild(basicSliderScriptTag);
    }

    function startHomeSection()
    {

        // DEFINTION

            const slideCover = document.querySelector('.intro_slide_cover');
            const intro_Slide_radioBtn = document.querySelectorAll('.intro_rad');
            const intro_LeftSlide_btn = document.querySelector('.intro_slide_ctnt_box .left_slide_arrow .intro_icon_Left');
            const intro_RightSlide_btn = document.querySelector('.intro_slide_ctnt_box .right_slide_arrow .intro_icon_Right');
            let auto_slide_count = 0;
            let auto_slide_timer;
            let auto_slide_timer_count = 15;
            const scheduleLink = document.querySelector(".schedule_link");
            const latestEpCards = document.querySelectorAll(".latestEp_card");
            const latestEp_ShowMoreCardsBtn = document.querySelector(".latestEp_view_more");
            const latestEp_ViewScheduleBtn = document.querySelector(".latestEp_schedule");
            const watchSectionBdr = document.querySelectorAll(".watchSectionBdr");
            let noOfVisible_latestEpChildren = 6;
            const newsCard = document.querySelectorAll(".news_card");



        // INTRO SLIDES

            // For transition (blur) effect when switching sides
            function flshBur()
            {
                slideCover.classList.add("active");
                setTimeout(() => slideCover.classList.remove("active"), 400);
            }

            // This moves to the next slide
            function nextSlideSet()
            {
                auto_slide_count = (auto_slide_count + 1) % intro_Slide_radioBtn.length;
                setTimeout(() => intro_Slide_radioBtn[auto_slide_count].checked = true, 200);
                flshBur();
            }

            // This moves to the previous slide
            function prevSlideSet()
            {
                auto_slide_count = (auto_slide_count - 1 + intro_Slide_radioBtn.length) % intro_Slide_radioBtn.length;
                setTimeout(() => intro_Slide_radioBtn[auto_slide_count].checked = true, 200);
                flshBur();
            }

            // Left button to slide left
            intro_LeftSlide_btn.addEventListener("click" , () =>
            {
                prevSlideSet();
                resetIntroAutoSlide();
            });

            // Roght button to slide Right
            intro_RightSlide_btn.addEventListener("click" , () =>
            {
                nextSlideSet();
                resetIntroAutoSlide();
            });

            // The nav buttons to choose to a particular slide
            intro_Slide_radioBtn.forEach(radBtn => 
            {
                radBtn.addEventListener("click" , () => 
                {
                    resetIntroAutoSlide();
                });
            });



            // Automatic Slider - slides after 15 seconds
            function introAutoSlide()
            {
                auto_slide_timer = setInterval(function()
                {
                    auto_slide_timer_count--;
                    if(auto_slide_timer_count == 0)
                    {
                        nextSlideSet();
                        resetIntroAutoSlide();
                    }
                }, 1000);
            }

            // Clears and recalls the autoSlider
            function resetIntroAutoSlide()
            {
                clearInterval(auto_slide_timer);
                auto_slide_timer_count = 15;
                introAutoSlide();
            }


            // Starts auto-slider
            introAutoSlide();



        // LATEST SHOWS

            // On page load it displays the first 6 children
            for(let i = 0; i < noOfVisible_latestEpChildren; i++)
            {
                latestEpCards[i].classList.add("visible_LatestEp");
            }

            // Latest Show Card Details
            latestEpCards.forEach(latestEpCard => 
            {
                const showTitle = latestEpCard.querySelector(".latestEp_cardTitle");
                const showSubTitle = latestEpCard.querySelector(".latestEp_cardSubTitle");
                const showImg = latestEpCard.querySelector(".latestEp_cardImg");

                // Set the title of the Episode link
                latestEpCard.title = "Watch " + showTitle.textContent + " " + showSubTitle.textContent;

                // Setting the alt text of the images
                showImg.alt = "Image of the Anime " + showTitle.textContent;

                // Setting the href to the error page (direct viewing of episodes is not ready)
                latestEpCard.href = "/Error/404/index.html";
            });

            
            // Displays all of the remaining hidden show cards
            latestEp_ShowMoreCardsBtn.addEventListener("click" , () => 
            {

                // adding visible class to allow display of cards with forEach loop
                latestEpCards.forEach(hiddenCard => {
                    hiddenCard.classList.add("visible_LatestEp");
                });

                // Removing the button after displaying hidden cards
                latestEp_ShowMoreCardsBtn.classList.add("inactive");
                latestEp_ViewScheduleBtn.classList.remove("inactive");
            });

            // View schedule
            latestEp_ViewScheduleBtn.addEventListener("click" , () => 
            {
                window.open(scheduleLink.getAttribute("href") , "_blank");
            });




        // NEWS

            newsCard.forEach(card => 
            {
                const newsCardImg = card.querySelector(".news_cardImg");
                const newsCardTitle = card.querySelector(".news_cardTitle");

                // Setting the title
                card.title = "Read \"" + newsCardTitle.textContent + "\"";

                // Setting the alt text of Image
                newsCardImg.alt = "News image";
            });

        

        // DOUBLE SIDED SHOWS

            // Double Sided Show Details
            watchSectionBdr.forEach(sectionBdr => 
            {
                const showHead = sectionBdr.querySelector(".watchHead");
                const showEpLink = sectionBdr.querySelector(".watchEpLink");
                const showImg = sectionBdr.querySelector(".watchImg");
                const showToSeries = sectionBdr.querySelector(".goToSeries");

                // Set the title of the Episode link
                showEpLink.title = "Watch " + showHead.textContent + " Season 1 Episode 1";

                // Setting the alt text of the
                showImg.alt = "Image of the Anime " + showHead.textContent;

                // Setting the title of the "To Series" link
                showToSeries.title = "Go to " + showHead.textContent + " series";
            });
    }

    function preFetchingShowsFromHistory()
    {
        const basicHistorySliderCardBox = document.querySelector(".basic_history_slider_card_box");
        let viewMoreHistoryStruct = 
        `
            <div class="slide_card_base history_card">
                <div class="slide_card_bdr">
                    <div class="slide_card_box">
                        <div class="slide_card ">
                            <a href="/User/History.html" class="cardLinkCover"></a>
                            <div class="view_more_bdr">
                                <div class="view_more_box">
                                    <p class="view_more_name">View more</p>
                                    <div class="view_more_dot_box">
                                        <span class="view_more_dots"></span>
                                        <span class="view_more_dots"></span>
                                        <span class="view_more_dots"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide_card_bcg"></div>
                </div>
            </div>
        `;

        if(basicHistorySliderCardBox === undefined)
        {
            notification(`notifyBad` , `Failed to fetch History`);
            return;
        }

        function startFetchingUserHistory()
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
                    basicHistorySliderCardBox.insertAdjacentHTML('beforeend', historyCardStruct);
                }

                // Add the "View More" card to redirect users to the History page
                basicHistorySliderCardBox.insertAdjacentHTML(`beforeend` , viewMoreHistoryStruct);

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
                        notification(`notifyGood` , `All Shows have been cleared successfully `);
                    });
                });

            }
        }
        startFetchingUserHistory();
    }