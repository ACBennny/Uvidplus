 
/***************************************************************
 * This will hold the HTML Struct code for the Home Page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

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
                        <div class="basic_slider_card_box basic_carousel_slider basic_history_slider_card_box"></div>
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
