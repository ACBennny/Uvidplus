 
/***************************************************************
 * This will hold the HTML Struct code for the Home Page
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
        <div class="more_content">
            
            <!-- Top Picks -->
            <div class="basic_slider_bdr basic_carousel">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">T</span>
                            <span class="small">op Picks</span>
                        </h2>
                        <p>Top Picks for you</p>
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
                        <p>Uvid+ Most Popular Shows</p>
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


            <!--- Featured --->
            <div class="ftr_bdr"></div>


            <!-- Classic -->
            <div class="basic_slider_bdr basic_carousel">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">C</span>
                            <span class="small">lassic</span>
                        </h2>
                        <p>Catchup on some these thrilling classics</p>
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

            <!-- Anime -->
            <div class="basic_slider_bdr basic_carousel">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">A</span>
                            <span class="small">nime</span>
                        </h2>
                        <p>Some great animes to watch</p>
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
            <div class="basic_slider_bdr basic_carousel">
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
                        <div class="basic_slider_card_box basic_carousel_slider basic_homepage_slider_card_box"></div>
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
