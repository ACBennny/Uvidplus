 
/***************************************************************
 * This will hold the code for the Home Page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/




    function preHomeSection()
    {
        // Insert structure
        documentCtnt.insertAdjacentHTML(`afterbegin` , homeStruct);
        // basicSlider();

        // Initialize Home Section
        startHomeSection();

        // generate random shows to fill the sections
        genRandShowsForHomePage();

        // Fetching watch history
        preFetchingShowsFromHistory();
    }


    function startHomeSection()
    {
        // Setting the Top Navbar
        topNavBar.insertAdjacentHTML(`afterbegin` , topNavBarStruct);
        topNavBar.classList.add("active");

        // Intro slides
        genHeroSectionForHomePage();

        // Latest Ep section
        genLatestShowsForHomePage();

        // Featured section
        genFeaturedSectForHomePage();

        // News Section
        genNewsForHomePage();
    }


    // Generates the latest shows
    function genHeroSectionForHomePage()
    {
        let hmHeroGrid = document.querySelector(".hm_hero_grid");
        let hmHeroBulletBox = document.querySelector(".hm_hero_bulletBox");
        let hmHeroBulletBtn;
        let hmHeroCard;
        let hmHeroTimer;
        let hmHeroTransition = 300;
        let hmHeroSlideStruct = ``;
        let auto_slide_count = 0;
        let auto_slide_timer;
        let init_auto_slide_timer_count = 15;
        let auto_slide_timer_count = init_auto_slide_timer_count;

        // Randomize the array
        let tempInv = intro_img_lib;
        let tempShuffle = shuffleArray([...tempInv]);


        // Automatic Slider - slides after 15 seconds
        const hmHeroAutoSlide = () =>
        {
            auto_slide_timer = setInterval(() =>
            {
                auto_slide_timer_count--;
                if(auto_slide_timer_count == 0)
                {
                    setNextSlide();
                    resetHmHeroAutoSlide();
                }
            }, 1000);
        }
        
        // Clears and recalls the autoSlider
        const resetHmHeroAutoSlide = () =>
        {
            clearInterval(auto_slide_timer);
            auto_slide_timer_count = init_auto_slide_timer_count;
            hmHeroAutoSlide();
        }

        // This moves to the next slide
        const setNextSlide = () =>
        {
            auto_slide_count = (auto_slide_count + 1) % hmHeroBulletBtn.length;
            setCurrSlideElem(auto_slide_count);
        }

        // This moves to the previous slide
        const setPrevSlide = () =>
        {
            auto_slide_count = (auto_slide_count - 1 + hmHeroBulletBtn.length) % hmHeroBulletBtn.length;
            setCurrSlideElem(auto_slide_count);
        }

        // Adds "selected" class to the current slide and bullet btn
        const setCurrSlideElem = (currIndex) => 
        {
            resetHmHeroAutoSlide();
            hmHeroCard.forEach((oldCard) => 
            {
                if(oldCard.classList.contains("selected"))
                {
                    oldCard.classList.remove("selected");
                }
            });
            hmHeroBulletBtn.forEach((oldBulbtn) => 
            {
                if(oldBulbtn.classList.contains("selected"))
                {
                    oldBulbtn.classList.remove("selected");
                }
            });
            hmHeroBulletBtn[currIndex].classList.add("selected");
            hmHeroCard[currIndex].classList.add("selected");
        }

        // Pause auto slider while user is hovering the show's details
        const pauseHmHeroAutoSlider = (state = false) =>
        {
            if(state == true)
            {
                hmHeroTimer = setInterval(() => auto_slide_timer_count = init_auto_slide_timer_count, 1000);
            }
            else
            {
                clearInterval(hmHeroTimer);
            }
        }


        // Fetch and insert the cards of the hero section
        for(let i = 0; i < 10; i++)
        {
            let item = tempShuffle[i];
            let itemLnk = item.intro_link.split('/')[2];
            let itemLook = infoInvLinkMap.get(itemLnk);

            if(itemLook)
            {
                let {
                    show_background,
                    show_thumbnail,
                    show_link,
                    show_title,
                    show_type,
                    show_year,
                    show_scores,
                    show_genre,
                    show_description
                } = itemLook;

                hmHeroSlideStruct +=
                `
                    <div class="hm_hero_cardBdr">
                        <div class="hm_hero_cardBox">
                            <div class="hm_hero_bcgBdr">
                                <div class="hm_hero_bcgBox">
                                    <img src="${show_background}" class="hm_hero_bcgImg">
                                </div>
                            </div>
                            <div class="hm_hero_cardCtntBdr">
                                <div class="hm_hero_cardCtntBox">
                                    <div class="hm_hero_frgBdr">
                                        <div class="hm_hero_frgBox">
                                            <img src="${show_background}" class="hm_hero_frgImg hm_hero_frgImg_lrg">
                                            <img src="${show_thumbnail}" class="hm_hero_frgImg hm_hero_frgImg_sml">
                                        </div>
                                        <a draggable="false" href="${show_link}" class="hm_hero_iconBase">
                                            <div class="hm_hero_iconBdr">
                                                <div class="hm_hero_iconBox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hm_hero_iconSvg">
                                                        <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="hm_hero_detBdr">
                                        <div class="hm_hero_detBox">
                                            <div class="hm_hero_detSptLgtBox">
                                                <p class="hm_hero_detSptLgtText">#${i+1} Spotlight</p>
                                            </div>
                                            <div class="hm_hero_detTitleBox">
                                                <div class="hm_hero_detTitleText">${show_title}</div>
                                            </div>
                                            <div class="hm_hero_detTagBdr">
                                                <div class="hm_hero_detTagBox">
                                                    <div class="hm_hero_detTagIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hm_hero_detTagSvg">
                                                            <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                        </svg>
                                                    </div>
                                                    <p class="hm_hero_detTagText">${show_scores}</p>
                                                </div>
                                                <div class="hm_hero_detTagBox">
                                                    <p class="hm_hero_detTagText">•</p>
                                                </div>
                                                <div class="hm_hero_detTagBox">
                                                    <p class="hm_hero_detTagText">${show_type}</p>
                                                </div>
                                                <div class="hm_hero_detTagBox">
                                                    <p class="hm_hero_detTagText">•</p>
                                                </div>
                                                <div class="hm_hero_detTagBox">
                                                    <p class="hm_hero_detTagText">${show_year}</p>
                                                </div>
                                            </div>
                                            <div class="hm_hero_detDescBox">
                                                <p class="hm_hero_detDescText">${show_description}</p>
                                            </div>
                                            <div class="hm_hero_detAtnBox">
                                                <a draggable="false" href="${show_link}" class="genBtnBox lightSolidBtn" title="Watch ${show_title}">
                                                    <div class="genBtnIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                                        </svg>
                                                    </div>
                                                    <span class="genBtnText">Play Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Remove item to prevent duplication
                tempShuffle = tempShuffle.filter(item => item.show_link !== tempShuffle[i].intro_link);

                // Add a bullet to navigate to the slide
                hmHeroBulletBox.insertAdjacentHTML(
                    `beforeend`, 
                    `<span class="hm_hero_bulletBtn" role="button" aria-label="Go to slide ${i + 1}"></span>`
                );
            }
            else
            {
                console.log(`${itemLnk} not found`);
            }
        }

        // Attach queryselectors
        hmHeroGrid.insertAdjacentHTML(`beforeend`, hmHeroSlideStruct);
        hmHeroCard = document.querySelectorAll(".hm_hero_cardBdr");
        hmHeroBulletBtn = document.querySelectorAll(".hm_hero_bulletBtn");
        let hmSlidebtnPrev = document.querySelector('.hm_hero_ctrlBtn_prev');
        let hmSlidebtnNext = document.querySelector('.hm_hero_ctrlBtn_next');

        // Select the first element
        hmHeroTimer = setTimeout(() => 
        {
            clearTimeout(hmHeroTimer);
            hmHeroCard[0].classList.add("selected");
            hmHeroBulletBtn[0].classList.add("selected");
        }, hmHeroTransition);


        // Go to previous slide
        hmSlidebtnPrev.addEventListener("click" , setPrevSlide)

        // Go to next slide
        hmSlidebtnNext.addEventListener("click" , setNextSlide);

        // Go to a particular slide
        hmHeroBulletBtn.forEach((bulBtn, bulIndex) => 
        {
            const bul_atn = () =>
            {
                auto_slide_count = bulIndex;
                setCurrSlideElem(auto_slide_count);
            }
            bulBtn.addEventListener("click" , bul_atn);
        });

        // Pause timer while user hovers over show details
        hmHeroCard.forEach((card) => 
        {
            let detBdr = card.querySelector(".hm_hero_detBdr");

            const start_hvr_atn = () =>
            {
                pauseHmHeroAutoSlider(true);
            }
            const stop_hvr_atn = () =>
            {
                pauseHmHeroAutoSlider(false);
            }

            detBdr.addEventListener("mouseenter" , start_hvr_atn);
            detBdr.addEventListener("mouseleave" , stop_hvr_atn);
        });


        // Starts auto-slider
        hmHeroAutoSlide();

        let hmHeroDragPosX = 0;
        let isHmHeroDragging = false;
        let hmDragThresholdFactor = 0.25;

        const switchhmHeroCard = (newIndex) => 
        {
            // Handle out of bounds input, if any
            if((newIndex < 0))
            {
                auto_slide_count = (hmHeroCard.length - 1);
            }
            else if((newIndex >= hmHeroCard.length))
            {
                auto_slide_count = 0;
            }

            // Remove "selected" class from current
            hmHeroCard[auto_slide_count].classList.remove('selected');
            hmHeroBulletBtn[auto_slide_count].classList.remove('selected');

            // Update index
            auto_slide_count = newIndex;

            // Add "selected" class to new element
            hmHeroCard[auto_slide_count].classList.add('selected');
            hmHeroBulletBtn[auto_slide_count].classList.add('selected');
        }

        const startHmHeroDrag = (event) =>
        {
            isHmHeroDragging = true;
            hmHeroDragPosX = event.touches ? event.touches[0].clientX : event.clientX;
            pauseHmHeroAutoSlider(true);
        }

        const endHmHeroDrag = (event) =>
        {
            if (!isHmHeroDragging) return;
            isHmHeroDragging = false;

            const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
            const diffX = endX - hmHeroDragPosX;
            const hmHeroCardWidth = hmHeroGrid.offsetWidth;
            const threshold = hmHeroCardWidth * hmDragThresholdFactor;

            // Determine direction
            if (diffX < -threshold) 
            {
                // Dragging left
                if(auto_slide_count < hmHeroCard.length - 1)
                {
                    switchhmHeroCard(auto_slide_count + 1);
                }
                else 
                {
                    // If at the last parent, go back to the first parent
                    switchhmHeroCard(0);
                }
            } 
            else if(diffX > threshold) 
            {
                // Dragging right
                if (auto_slide_count > 0) 
                {
                    switchhmHeroCard(auto_slide_count - 1);
                }
                else
                {
                    // If at the first parent, go to the last parent
                    switchhmHeroCard(hmHeroCard.length - 1);
                }
            }

            // Play auto slide
            pauseHmHeroAutoSlider(false);
            resetHmHeroAutoSlide();
        }

        // Event listeners for dragging
        hmHeroGrid.addEventListener('mousedown', startHmHeroDrag);
        hmHeroGrid.addEventListener('touchstart', startHmHeroDrag);

        hmHeroGrid.addEventListener('mouseup', endHmHeroDrag);
        hmHeroGrid.addEventListener('touchend', endHmHeroDrag);
    }


    // Generates the latest shows
    function genLatestShowsForHomePage()
    {
        let scheduleLink = document.querySelector(".schedule_link");
        let latestEpBox = document.querySelector(".latestEp_box");
        let lastestStruct  = ``;
        let latestEp_ShowMoreCardsBtn = document.querySelector(".latestEp_view_more");
        let latestEp_ViewScheduleBtn = document.querySelector(".latestEp_schedule");
        let noOfVisible_latestEpChildren = 6;

        let tempInv = latest_shows_lib;
        let tempShuffle = shuffleArray([...tempInv]);

        // Fetch the content
        for(let i = 0; i < tempShuffle.length; i++)
        {
            let item = tempShuffle[i];
            let itemLink = item.ls_link;
            let itemSsn = itemLink.split('/')[4];
            let itemEp = itemLink.split('/')[5];
            let itemLook = infoInvLinkMap.get(itemLink.split('/')[3]);

            if(itemLook)
            {
                let {
                    show_thumbnail,
                    show_foreground,
                    show_title
                } = itemLook;

                lastestStruct +=
                `
                    <a href="${itemLink}" class="latestEp_card type1_ctntCard">
                        <div class="latestEp_cardImgBox">
                            <img src="${show_foreground}" alt="Image of ${show_title}" class="latestEp_cardImg">
                            <div class="type1_ctntImg_hover">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                    <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                </svg>
                            </div>
                        </div>
                        <div class="latestEp_cardDet">
                            <div class="latestEp_cardTitleBox">
                                <div class="latestEp_cardTitle">${show_title}</div>
                                <p class="latestEp_cardSubTitle">Season ${itemSsn} • Episode ${itemEp}</p>
                            </div>
                        </div>
                    </a>
                `;
                
            }
        }
        latestEpBox.insertAdjacentHTML(`beforeend` , lastestStruct);

        let latestEpCards = document.querySelectorAll(".latestEp_card");

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
    }


    // Generate the Featured section      
    function genFeaturedSectForHomePage()
    {
        let tempInv = searchInventory;
        let tempShuffle = shuffleArray([...tempInv]);
        let ftrBdr = document.querySelectorAll(".ftr_bdr");

        // Insert a random show for the featured section
        ftrBdr.forEach((bdr, i) => 
        {
            let item = tempShuffle[i];

            bdr.innerHTML = 
            `  
                <div class="ftr_box">
                    <div class="ftr_bcg_bdr">
                        <div class="ftr_bcg_box">
                            <img src="${item.show_background}" class="ftr_bcg_img">
                        </div>
                    </div>
                    <div class="ftr_bcg_cover"></div>
                    <div class="ftr_ctnt_bdr">
                        <div class="ftr_ctnt_box">
                            <div class="ftr_frg_bdr">
                                <div class="ftr_frg_box">
                                    <img src="${item.show_foreground}" class="ftr_frg_img">
                                </div>
                            </div>
                            <div class="ftr_desc_bdr">
                                <div class="ftr_desc_box">
                                    <div class="ftr_desc_titleBox">
                                        <div class="ftr_desc_titleText">${item.show_title}</div>
                                    </div>
                                    <div class="ftr_desc_bodyBox">
                                        <p class="ftr_desc_bodyText">${item.show_description}</p>
                                    </div>
                                    <div class="ftr_desc_atnBox">
                                        <a href="${item.show_link}" class="genBtnBox lightSolidBtn" title="Watch ${item.show_title}">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                                </svg>
                                            </div>
                                            <span class="genBtnText">Play Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }


    // Generates some articles from the news
    function genNewsForHomePage()
    {
        let newsCtnt = document.querySelector(".news_Ctnt");
        let newsCardStruct = ``;

        // Fetch the news content
        for(let i = 0; i < news_article_lib.length; i++)
        {
            let item = news_article_lib[i];

            newsCardStruct +=
            `
                <a href="#/news" class="news_card type1_ctntCard">
                    <div class="news_cardImgBox">
                        <img src="${item.na_img}" alt="Image of a news" class="news_cardImg">
                        <div class="type1_ctntImg_hover">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                <path d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z" />
                            </svg>
                        </div>
                    </div>
                    <div class="news_cardDet">
                        <div class="news_cardTitleBox">
                            <div class="news_cardTitle">${item.na_title}</div>
                        </div>
                        <div class="news_cardPostBox">
                            <h5 class="news_cardPost">${item.na_date}</h5>
                        </div>
                    </div>
                </a>
            `;
        }
        newsCtnt.insertAdjacentHTML(`beforeend` , newsCardStruct);

        let newsCard = document.querySelectorAll(".news_card");

        newsCard.forEach(card => 
        {
            const newsCardImg = card.querySelector(".news_cardImg");
            const newsCardTitle = card.querySelector(".news_cardTitle");

            // Setting the title
            card.title = "Read \"" + newsCardTitle.textContent + "\"";

            // Setting the alt text of Image
            newsCardImg.alt = "News image";
        });
    }


    // Generates random shows for the sections in the home page
    function genRandShowsForHomePage()
    {
        let genHmPgBx = document.querySelectorAll(".basic_homepage_slider_card_box");

        if(genHmPgBx.length <= 0)
        {
            notification(`notifyBad` , `Failed to fetch content`);
            return;
        }

        
        genHmPgBx.forEach((box) => 
        {
            let tempInv = searchInventory;
            let tempShuffle = shuffleArray([...tempInv]);
            let genHmPgStruct = ``;

            for(let i = 0; i < 25; i++)
            {
                let item = tempShuffle[i];
                genHmPgStruct += 
                `
                    <div class="slide_card_base basic_carousel_card">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card ">
                                    <a href="${item.show_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${item.show_thumbnail}" alt="Image of ${item.show_title}" class="cardImg">
                                    </div>
                                    <div class="cardinfo cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${item.show_type}</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${item.show_year}</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${item.show_title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide_card_bcg"></div>
                        </div>
                    </div>
                `;

                // Remove item to prevent duplication
                tempShuffle = tempShuffle.filter(item => item.show_link !== tempShuffle[i].show_link);
            }

            box.innerHTML = genHmPgStruct;

            basicSlider();
        });
    }



    