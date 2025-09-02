 /***************************************************************
 * This will hold the code for the Home Page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    const hm_pg_nav  =
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="company_logoBdr" onclick="window.location.hash = page_route_fallback()">
                        <div class="company_logoBox Companylogo">
                            <img loading="eager" src="/images/uvid-logo.png" alt="" class="company_logoImg">
                        </div>
                    </div>
                </section>
                <section class="topNav_section">
                    <div class="sideNavItemsCardBase">
                        <div class="sideNavItemsCardBdr openQuickSearchBtn">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sideNavItemsCardBase">
                        <div class="sideNavItemsCardBdr openCastingOptBtn" onclick="notification('notifyBad' , 'Feature currently unavailable')">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                        <path d="M6.452 3.25c-.418 0-.685 0-.918.023a4.75 4.75 0 0 0-4.261 4.261c-.023.233-.023.5-.023.918V8.5a.75.75 0 1 0 1.5 0c0-.482 0-.669.016-.819A3.25 3.25 0 0 1 5.68 4.766c.15-.015.337-.016.819-.016H14c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14a.75.75 0 0 0 0 1.5h.056c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153z" />
                                        <path d="M2 10.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 20a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 10.25" />
                                        <path d="M1.25 14a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 20a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75" />
                                        <path d="M2 16.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 20a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;

    const homeStruct = 
    `
        <div class="hm_bdr">
            <div class="preload_2_bdr">
                <div class="preload_2_box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="preload_2_spinner">
                        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                            <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    `;

    const news_article_lib = 
    [
        {
            na_img: `/images/uvid-news.jpg`,
            na_title: `New plans for the News category`,
            na_date: `19th March 2025`,
        },
        {
            na_img: `/images/uvid-anime2.jpg`,
            na_title: `"Anime hits on a differrent level.."`,
            na_date: `4th February 2025`,
        },
        {
            na_img: `/images/uvid-cartoon3.jpg`,
            na_title: `Top New Family Shows to Watch`,
            na_date: `27th February 2025`,
        },
        {
            na_img: `/images/uvid-movies0.jpg`,
            na_title: `Have you watched these shows from Marvel?`,
            na_date: `21st January 2025`,
        },
        {
            na_img: `/images/uvid-bcg2.jpg`,
            na_title: `Movie Lineups for the Year`,
            na_date: `2nd January 2025`,
        },
    ];



    function preHomeSection()
    {
        // Insert structure
        documentCtnt.insertAdjacentHTML(`afterbegin` , homeStruct);

        // Initialize Home Section
        startHomeSection();
    }


    async function startHomeSection()
    {
        const homeBdr = document.querySelector(".hm_bdr");
        const homeBox = document.createElement("div");
        homeBox.className = "";
        homeBox.innerHTML = 
        `
            <!---- Hero Section ------>
                <div class="hm_hero_bdr">
                    <div class="hm_hero_box">
                        <div class="hm_hero_grid"></div>
                        <div class="hm_hero_ctrlBdr">
                            <div class="hm_hero_ctrlBox">
                                <button type="button" class="hm_hero_ctrlBtn hm_hero_ctrlBtn_prev genBtnBox genIconBtn transBtn">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                                <button type="button" class="hm_hero_ctrlBtn hm_hero_ctrlBtn_next genBtnBox genIconBtn transBtn">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="hm_hero_bulletBdr">
                            <div class="hm_hero_bulletBox"></div>
                        </div>
                    </div>
                </div>

                <!-- <div class="give_space"></div> -->

                <!-- Sub Slides -->
                <div class="more_content hm_more_ctnt">

                    <!-- Featured -->
                    <div class="basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">F</span>
                                    <span class="small">eatured</span>
                                </h2>
                                <p>Featured on Uvid+</p>
                            </div>
                        </div>
                        <div class="ftr_bdr"></div>
                    </div>

                    <!-- Continue watching -->
                    <div class="basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">C</span>
                                    <span class="small">ontinue</span>
                                </h2>
                                <p>Pick up where you left off</p>
                            </div>
                        </div>
                        <div class="basic_slider_ctnt">
                            <div class="basic_slider_box">
                                <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                        <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="basic_slider_card_box basic_carousel_slider basic_continue_slider_card_box">
                                    <div class="slide_card_base basic_carousel_card crsl_more_btn more_continue_card" data-crsl-more-type="continue">
                                        <div class="slide_card_bdr">
                                            <div class="slide_card_box">
                                                <div class="slide_card ">
                                                    <div class="view_more_bdr">
                                                        <div class="view_more_box">
                                                            <p class="view_more_name">Load more</p>
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
                                </div>
                                <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <!-- ------ LATEST SHOWS ----- -->
                    <div class="type1_Ctnt_bdr">
                        <div class="type1_Ctnt_box">
                            <div class="type1_Ctnt_boxHead">
                                <div class="type1_Ctnt_box_HeadLeft">
                                    <h1>
                                        <span class="firsttxt">L</span>
                                        <span class="secondtxt">atest</span>
                                    </h1>
                                </div>
                                <div class="type1_Ctnt_box_HeadRight">
                                    <a href="#/schedule" class="seeAll schedule_link">Schedule ›</a>
                                </div>
                            </div>
                            <div class="latestEp_bdr">
                                <div class="latestEp_box"></div>
                            </div>
                            <div class="latestEp_btn latestEp_view_more darkSolidBtn">show more</div>
                            <div class="latestEp_btn latestEp_schedule inactive darkSolidBtn">Schedule</div>
                        </div>
                    </div>


                    <!-- Popular Shows -->
                    <div class="basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">P</span>
                                    <span class="small">opular</span>
                                </h2>
                                <p>Here's what everyone's watching</p>
                            </div>
                        </div>
                        <div class="basic_slider_ctnt">
                            <div class="basic_slider_box">
                                <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                        <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="basic_slider_card_box basic_carousel_slider basic_homepage_slider_card_box"></div>
                                <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Top Rated -->
                    <div class="basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">T</span>
                                    <span class="small">op Rated</span>
                                </h2>
                                <p>Our viewers love these shows</p>
                            </div>
                        </div>
                        <div class="basic_slider_ctnt">
                            <div class="basic_slider_box">
                                <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                        <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="basic_slider_card_box basic_carousel_slider basic_homepage_slider_card_box"></div>
                                <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Top Airing -->
                    <div class="top_tv_bdr basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">T</span>
                                    <span class="small">op Airing</span>
                                </h2>
                                <p>Top Airing Shows</p>
                            </div>
                        </div>
                        <div class="basic_slider_ctnt">
                            <div class="basic_slider_box">
                                <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                        <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="basic_slider_card_box basic_carousel_slider"></div>
                                <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Anime -->
                    <div class="basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">A</span>
                                    <span class="small">nime</span>
                                </h2>
                                <p>Top tier animation from our friends in Japan</p>
                            </div>
                        </div>
                        <div class="basic_slider_ctnt">
                            <div class="basic_slider_box">
                                <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                        <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="basic_slider_card_box basic_carousel_slider basic_homepage_slider_card_box"></div>
                                <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- ------- NEWS ------- -->
                    <div class="type1_Ctnt_bdr">
                        <div class="type1_Ctnt_box">
                            <div class="type1_Ctnt_boxHead">
                                <div class="type1_Ctnt_box_HeadLeft">
                                    <h1>
                                        <span class="firsttxt">N</span>
                                        <span class="secondtxt">ews</span>
                                    </h1>
                                </div>
                                <div class="type1_Ctnt_box_HeadRight">
                                    <a href="#/news" class="seeAll">See All ›</a>
                                </div>
                            </div>
                            <div class="news_grid">
                                <div class="news_gridSect">
                                    <div class="news_Ctnt"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <!-- Upcoming -->
                    <div class="upc_bdr basic_slider_bdr basic_carousel">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">U</span>
                                    <span class="small">pcoming</span>
                                </h2>
                                <p>Get ready for these shows</p>
                            </div>
                        </div>
                        <div class="basic_slider_ctnt">
                            <div class="basic_slider_box">
                                <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                        <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="basic_slider_card_box basic_carousel_slider "></div>
                                <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        `;


        // Generates the Home pages Hero Section
        async function genHeroSectionForHomePage()
        {
            let hmHeroGrid = homeBox.querySelector(".hm_hero_grid");
            let hmHeroBulletBox = homeBox.querySelector(".hm_hero_bulletBox");
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
            let trending_day_tv_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/trending/tv/day?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}`);
            let trending_day_mv_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/trending/movie/day?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}`);

            let trending_cmb = mergeAltArrSets(
                addMediaTypeToShowSets(trending_day_tv_fetch?.results?.filter(fltrFetchedShows), "tv"),
                addMediaTypeToShowSets(trending_day_mv_fetch?.results?.filter(fltrFetchedShows), "movie")
            );


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
                let item = trending_cmb[i];

                    let {
                        show_link = `#/${item?.media_type.toLowerCase()}/${item?.id}`,
                        show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                        show_background = (item?.backdrop_path) ? `https://image.tmdb.org/t/p/original/${item?.backdrop_path}` : info_pg_dflt_bcg,
                        show_title = `${item?.name || item?.title || "N/A"}`,
                        show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                        show_type = `${item?.media_type.toUpperCase()}`,
                        show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                        show_description = item?.overview || "No description available",
                    } = item;

                    hmHeroSlideStruct +=
                    `
                        <div class="hm_hero_cardBdr">
                            <div class="hm_hero_cardBox">
                                <div class="hm_hero_bcgBdr">
                                    <div class="hm_hero_bcgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                src="${show_background}" alt="Background image of ${show_title}" class="hm_hero_bcgImg"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="hm_hero_cardCtntBdr">
                                    <div class="hm_hero_cardCtntBox">
                                        <div class="hm_hero_frgBdr">
                                            <div class="hm_hero_frgBox">
                                                <div class="img_preload_box">
                                                    <div class="img_preload_sibling"></div>
                                                    <img loading="lazy" 
                                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                        src="${show_background}" alt="Landscape thumbnail image of ${show_title}" class="hm_hero_frgImg hm_hero_frgImg_lrg"
                                                    >
                                                    <img loading="lazy" 
                                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                        src="${show_foreground}" alt="Portrait thumbnail image of ${show_title}" class="hm_hero_frgImg hm_hero_frgImg_sml"
                                                    >
                                                </div>
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
                                                    <p class="hm_hero_detSptLgtText">#${i+1} Trending</p>
                                                </div>
                                                <div class="hm_hero_detTitleBox">
                                                    <h1 class="hm_hero_detTitleText">${show_title}</h1>
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
                                                    <a draggable="false" href="${show_link}" class="genBtnBox lightSolidBtn" title="View more info on ${show_title}">
                                                        <div class="genBtnIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <span class="genBtnText">Details</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    // Add a bullet to navigate to the slide
                    hmHeroBulletBox.insertAdjacentHTML(
                        `beforeend`, 
                        `<span class="hm_hero_bulletBtn" role="button" aria-label="Go to slide ${i + 1}"></span>`
                    );
            }

            // Attach queryselectors
            hmHeroGrid.insertAdjacentHTML(`beforeend`, hmHeroSlideStruct);
            hmHeroCard = homeBox.querySelectorAll(".hm_hero_cardBdr");
            hmHeroBulletBtn = homeBox.querySelectorAll(".hm_hero_bulletBtn");
            let hmSlidebtnPrev = homeBox.querySelector('.hm_hero_ctrlBtn_prev');
            let hmSlidebtnNext = homeBox.querySelector('.hm_hero_ctrlBtn_next');

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


        // Generate the Featured section      
        async function genFeaturedSectForHomePage()
        {
            const ftr_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}`);
            const ftr_movie = shuffleArray(ftr_fetch?.results?.filter(fltrFetchedShows));
            const ftrBdr = homeBox.querySelectorAll(".ftr_bdr");

            // Insert a random show for the featured section
            ftrBdr.forEach((bdr, i) => 
            {
                let item = ftr_movie[i];
                let {
                        show_link = `#/movie/${item?.id}`,
                        show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                        show_background = (item?.backdrop_path) ? `https://image.tmdb.org/t/p/original/${item?.backdrop_path}` : info_pg_dflt_bcg,
                        show_title = `${item?.name || item?.title || "N/A"}`,
                        show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                        show_type = `${item?.media_type.toUpperCase()}`,
                        show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                        show_description = item?.overview || "No description available",
                    } = item;

                bdr.innerHTML = 
                `  
                    <div class="ftr_box">
                        <div class="ftr_bcg_bdr">
                            <div class="ftr_bcg_box">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        src="${show_background}" alt="Background image of ${show_title}" class="ftr_bcg_img"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="ftr_bcg_cover"></div>
                        <div class="ftr_ctnt_bdr">
                            <div class="ftr_ctnt_box">
                                <div class="ftr_frg_bdr">
                                    <div class="ftr_frg_box">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="ftr_frg_img"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="ftr_desc_bdr">
                                    <div class="ftr_desc_box">
                                        <div class="ftr_desc_titleBox">
                                            <div class="ftr_desc_titleText">${show_title}</div>
                                        </div>
                                        <div class="ftr_desc_bodyBox">
                                            <p class="ftr_desc_bodyText">${show_description}</p>
                                        </div>
                                        <div class="ftr_desc_atnBox">
                                            <a href="${show_link}" class="genBtnBox lightSolidBtn" title="View more info on ${show_title}">
                                                <div class="genBtnIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                        <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span class="genBtnText">Details</span>
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


        // Generates the latest shows
        async function genLatestShowsForHomePage()
        {
            let scheduleLink = homeBox.querySelector(".schedule_link");
            let latestEpBox = homeBox.querySelector(".latestEp_box");
            let lastestStruct  = ``;
            let latestEp_ShowMoreCardsBtn = homeBox.querySelector(".latestEp_view_more");
            let latestEp_ViewScheduleBtn = homeBox.querySelector(".latestEp_schedule");
            let noOfVisible_latestEpChildren = 6;

            const latest_tv_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/tv/popular?sort_by=release_date.desc&first_air_date.lte=TODAY&vote_count.gte=1&include_adult=false&api_key=${__uv_p_dev_tm_db_ap_ky}`);
            const latest_mv_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/movie/popular??sort_by=release_date.desc&first_air_date.lte=TODAY&vote_count.gte=1&include_adult=false&api_key=${__uv_p_dev_tm_db_ap_ky}`);

            const latest_tv_fltr = latest_tv_fetch?.results?.filter(item => 
            {
                if(!window.__show_adult_ctnt && item.adult) return false;
                if (!isNonScripted(item)) return false;
                return true;
            })?.map(item => 
            {
                return __getUVPShowDet(item?.id, "tv");
            });

            const latest_tv_eps = await Promise.all(latest_tv_fltr);
            const latest_mv_fltr = latest_mv_fetch?.results?.filter(item => 
            {
                if(!window.__show_adult_ctnt && item.adult) return false;
                return true;
            });

            const latest_cmb = mergeAltArrSets(
                addMediaTypeToShowSets(latest_tv_eps, "tv"),
                addMediaTypeToShowSets(latest_mv_fltr, "movie"),
            )

            // Fetch the content
            latest_cmb.forEach((item) => 
            {
                if((item?.media_type === "tv"))
                {
                    let {
                        show_link = `#/tv/${item?.id}/watch/${item?.last_episode_to_air?.season_number}/${item?.last_episode_to_air?.episode_number}`,
                        show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                        show_title = `${item?.name || "N/A"}`,
                        show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                        show_type = `tv`,
                        show_ssn = item?.last_episode_to_air?.season_number,
                        show_ep = item?.last_episode_to_air?.episode_number,
                        show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                    } = item;

                    lastestStruct +=
                    `
                        <a href="${show_link}" title="Watch ${show_title} S${show_ssn} E${show_ep}" class="latestEp_card type1_ctntCard">
                            <div class="latestEp_cardImgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="latestEp_cardImg"
                                    >
                                </div>
                                <div class="type1_ctntImg_hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                        <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="latestEp_cardDet">
                                <div class="latestEp_cardTitleBox">
                                    <div class="latestEp_cardTitle">${show_title}</div>
                                    <p class="latestEp_cardSubTitle">Season ${show_ssn} • Episode ${show_ep}</p>
                                </div>
                            </div>
                        </a>
                    `;
                }
                else if((item?.media_type === "movie"))
                {
                    let {
                        show_link = `#/movie/${item?.id}/watch`,
                        show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                        show_title = `${item?.title || "N/A"}`,
                        show_year = `${item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                        show_type = `movie`,
                        show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                    } = item;

                    lastestStruct +=
                    `
                        <a href="${show_link}" title="Watch ${show_title} full movie" class="latestEp_card type1_ctntCard">
                            <div class="latestEp_cardImgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="latestEp_cardImg"
                                    >
                                </div>
                                <div class="type1_ctntImg_hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                        <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="latestEp_cardDet">
                                <div class="latestEp_cardTitleBox">
                                    <div class="latestEp_cardTitle">${show_title}</div>
                                    <p class="latestEp_cardSubTitle">Full movie</p>
                                </div>
                            </div>
                        </a>
                    `;
                }
                    
            });
            latestEpBox.insertAdjacentHTML(`beforeend` , lastestStruct);

            let latestEpCards = homeBox.querySelectorAll(".latestEp_card");

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
                window.open(scheduleLink.getAttribute("href") , "_self");
            });
        }


        // Gets Top Sections for the home page
        async function genTopSectsForHomePage()
        {
            const randList = 
            [
                {
                tv_lnk: `https://api.themoviedb.org/3/tv/popular?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}` ,
                mv_lnk: `https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}` ,
                },
                {
                tv_lnk: `https://api.themoviedb.org/3/tv/top_rated?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}` ,
                mv_lnk: `https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}` ,
                },
                {
                tv_lnk: `https://api.themoviedb.org/3/discover/tv?with_keywords=210024&sort_by=popularity.desc&vote_count.gte=50&include_adult=false&api_key=${__uv_p_dev_tm_db_ap_ky}` ,
                mv_lnk: `https://api.themoviedb.org/3/discover/movie?with_keywords=210024&sort_by=popularity.desc&vote_count.gte=50&include_adult=false&api_key=${__uv_p_dev_tm_db_ap_ky}` ,
                },
            ]
            let genHmPgBx = homeBox.querySelectorAll(".basic_homepage_slider_card_box");

            if(genHmPgBx.length <= 0)
            {
                notification(`notifyBad` , `Failed to fetch content`);
                return;
            }

            
            genHmPgBx.forEach(async (box, i) => 
            {
                let genHmPgSect_struct = ``;
            
                const tv_fetch = await fetchWithRetry(randList[i].tv_lnk);
                const mv_fetch = await fetchWithRetry(randList[i].mv_lnk);

                const cmb_rslts = mergeAltArrSets(
                    addMediaTypeToShowSets(
                        tv_fetch?.results?.filter(item => 
                        {
                            if(!window.__show_adult_ctnt && item.adult) return false;
                            if (!isNonScripted(item)) return false;
                            return true
                        }),
                        "tv"
                    ),
                    addMediaTypeToShowSets(
                        mv_fetch?.results?.filter(item => 
                        {
                            if(!window.__show_adult_ctnt && item.adult) return false;
                            return true
                        }),
                        "movie"
                    ),
                )

                cmb_rslts.forEach((item) => 
                {
                    let {
                            show_link = `#/${item?.media_type}/${item?.id}`,
                            show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                            show_title = `${item?.name || item?.title || "N/A"}`,
                            show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                            show_type = `${item?.media_type}`,
                            show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                        } = item;

                    genHmPgSect_struct += 
                    `  
                        <div class="slide_card_base basic_carousel_card">
                            <div class="slide_card_bdr">
                                <div class="slide_card_box">
                                    <div class="slide_card ">
                                        <a href="${show_link}" class="cardLinkCover"></a>
                                        <div class="cardImgBox">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                                >
                                            </div>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide_card_bcg"></div>
                            </div>
                        </div>
                    `;
                });

                box.innerHTML = genHmPgSect_struct;

                basicSlider();
            });
        }


        // Generate the Top Airing section      
        async function genTopAiringSectForHomePage()
        {
            const top_tv_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/tv/on_the_air?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}`);
            const top_tv_airs = shuffleArray(top_tv_fetch?.results?.filter(item => 
            {
                if(!window.__show_adult_ctnt && item.adult) return false
                return true
            }));
            const top_tvBdr = homeBox.querySelector(".top_tv_bdr .basic_slider_card_box");
            let top_tv_struct = ``;

            
            top_tv_airs.forEach((item) => 
            {
                let {
                        show_link = `#/tv/${item?.id}`,
                        show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                        show_title = `${item?.name || item?.title || "N/A"}`,
                        show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                        show_type = `tv`,
                        show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                    } = item;

                top_tv_struct += 
                `  
                    <div class="slide_card_base basic_carousel_card">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card ">
                                    <a href="${show_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                            >
                                        </div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide_card_bcg"></div>
                        </div>
                    </div>
                `;
            });

            top_tvBdr.innerHTML = top_tv_struct;
        }


        // Generate the Upcoming section 
        async function genUpcomingSectForHomePage()
        {
            const upc_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/movie/upcoming?sort_by=popularity.desc&vote_count.gte=50&api_key=${__uv_p_dev_tm_db_ap_ky}`);
            const upc_movie = shuffleArray(upc_fetch?.results?.filter(item => 
            {
                if(!window.__show_adult_ctnt && item.adult) return false
                return true
            }));
            const upcBdr = homeBox.querySelector(".upc_bdr .basic_slider_card_box");
            let upc_struct = ``;

            
            upc_movie.forEach((item) => 
            {
                let {
                        show_link = `#/movie/${item?.id}`,
                        show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                        show_title = `${item?.name || item?.title || "N/A"}`,
                        show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                        show_type = `movie`,
                        show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : "N/A",
                    } = item;

                upc_struct += 
                `  
                    <div class="slide_card_base basic_carousel_card">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card ">
                                    <a href="${show_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                            >
                                        </div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide_card_bcg"></div>
                        </div>
                    </div>
                `;
            });

            upcBdr.innerHTML = upc_struct;
        }


        // Generates some articles from the news
        function genNewsForHomePage()
        {
            let newsCtnt = homeBox.querySelector(".news_Ctnt");
            let newsCardStruct = ``;

            // Fetch the news content
            for(let i = 0; i < news_article_lib.length; i++)
            {
                let item = news_article_lib[i];

                newsCardStruct +=
                `
                    <a href="#/news" class="news_card type1_ctntCard">
                        <div class="news_cardImgBox">
                            <div class="img_preload_box">
                                <div class="img_preload_sibling"></div>
                                <img loading="lazy" 
                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                    src="${item.na_img}" alt="Thumbnail image of ${item.na_title}" class="news_cardImg"
                                >
                            </div>
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

            let newsCard = homeBox.querySelectorAll(".news_card");

            newsCard.forEach(card => 
            {
                const newsCardImg = card.querySelector(".news_cardImg");
                const newsCardTitle = card.querySelector(".news_cardTitle");

                // Setting the title
                card.title = "Read \"" + newsCardTitle.textContent + "\"";

                // Setting the alt text of Image
                newsCardImg.alt = "News image";

                card.onclick = (e) => 
                {
                    e.preventDefault()
                    notification(`notifyGood`, `Coming Soon!`);
                }
            });
        }


        // Build sections of the homepage
        try
        {
            // Intro slides
            await genHeroSectionForHomePage();

            // Featured section
            await genFeaturedSectForHomePage();

            // Latest Shows section
            await genLatestShowsForHomePage();

            // Popular, Top Rated & Anime
            await genTopSectsForHomePage();

            // Fetch top airing section
            await genTopAiringSectForHomePage();

            // Upcoming section
            await genUpcomingSectForHomePage();

            // News Section
            genNewsForHomePage();

            // Append homepage
            homeBdr.innerHTML = "";
            homeBdr.appendChild(homeBox);

            // Re-initialize basic slider
            basicSlider();
        }
        catch(err)
        {
            console.error("Homepage initialization error", err);
            notification(`notifyBad`, `An error occured while loading. Please try again later`);

            // Suggest refreshing the page to the user
            initConfirmModal(
                `Refresh page?`,
                `If error persists after refreshing, you can submit a report through our feedback form.`,
                `Refresh`,
                `Cancel`,
                refreshPage
            );
        }
        
        // Update Navbar active states
        sideNavLinks[1].classList.add("active");
        btmNavLinks[0].classList.add("active");
        
        // Setting the Top Navbar
        topNavBar.insertAdjacentHTML(`afterbegin` , hm_pg_nav);
        topNavBar.classList.add("active");
        attachInitQuickSearchListeners();

        // Fetching watch history
        crsl_load_more_listener(true);
    }

    