 
/***************************************************************
 * This will hold the HTML Struct code for the Home Page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    const tempHomeHTML = 
    `
        <!-- Intro Slides -->
        <div class="intro_slide_bdr">
            <div class="intro_slide_ctnt_bdr">
                <div class="intro_slide_ctnt_box">
                    <div class="intro_slide_box_main">
                        <div class="intro_slide_box">

                            <!-- Slide Cover -->
                            <div class="intro_slide_cover"></div>

                            <!-- Radio Buttons -->
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad1" checked />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad2" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad3" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad4" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad5" />
                            <input type="radio" name="input_slider_radio" class="intro_rad" id="intro_rad6" />

                            <!-- Left Arrow -->
                            <div class="slide_arrow left_slide_arrow" id="left_arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="introSlideIcon intro_icon_Left">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                                </svg>
                            </div>

                            <!-- Slides -->
                            <div class="intro_info_bdr bdr_1">
                                <img class="bcg_over700 over_1" src="/Library/Images/other_images/Anime_images/mha_wide.png">
                                <img class="bcg_less700 less_1" src="/Library/Images/other_images/Anime_images/mha_thin.png">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/mha_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Action, Fantasy, Shonen</h5>
                                            <p class="intro_desc">
                                                The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, 
                                                with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. 
                                                This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.
                                                Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. 
                                                Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems 
                                                that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. 
                                                All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!
                                                Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for 
                                                its excellent hero training program, and this year's freshmen look especially promising. With his bizarre 
                                                but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what 
                                                it really means to be a hero.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch My Hero Academia" class="play_Now btn lightSolidBtn" href="/Library/Anime/MyHeroAcademia.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_2">
                                <img class="bcg_over700 over_2" src="/Library/Images/other_images/Anime_images/windBreakerWider.png">
                                <img class="bcg_less700 less_2" src="/Library/Images/other_images/Anime_images/windBreakerSmall.png">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/wind_breaker.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">School, Battles, Power</h5>
                                            <p class="intro_desc">
                                                From an early age, Haruka Sakura was made an outcast due to his unconventional appearance 
                                                and lack of social skills. However, the rough treatment turned him into a proficient fighter, 
                                                which is now the only thing he prides himself on. Starting at Furin High School, where it is 
                                                rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.
                                                Involved in a street brawl the day before his enrollment, Sakura happens to meet a group of 
                                                his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating 
                                                that what the school actually cares about is protecting the town of Makochi from any harm — hence 
                                                why the students call themselves "Bofurin." Surprised by the support and appreciation of the townspeople, 
                                                Sakura has a hard time accepting their goodwill. Though unfamiliar with kindness being shown to him, 
                                                Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. 
                                                After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch Windbreaker" class="play_Now btn lightSolidBtn" href="/Library/Anime/WindBreaker.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_3">
                                <img class="bcg_over700 over_3" src="/Library/Images/other_images/Anime_images/yatagarasu_wide.png">
                                <img class="bcg_less700 less_3" src="/Library/Images/other_images/Anime_images/yatagarasu_thin.png">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/yatagarasu_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Historical, Mythical, Royalty</h5>
                                            <p class="intro_desc">
                                                Yukiya is the lackluster second son of a regional boss in the North House territory. 
                                                His younger brother has overtaken him in academics. He is no good at sword battle, either. 
                                                Not that this ever bothers him. So it comes as a shock when this boy, who claims to have 
                                                no ambition whatsoever, is the one chosen to attend the Imperial Prince in Court--. 
                                                What awaits Yukiya and his new master is intrigue, murder, a mysterious drug, 
                                                and invasion from an unexpected enemy. Can they save the world of Yatagarasu?
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch Yatagarasu" class="play_Now btn lightSolidBtn" href="/Library/Anime/Yatagarasu.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_4">
                                <img class="bcg_over700 over_4" src="/Library/Images/other_images/Anime_images/train_wide.jpg">
                                <img class="bcg_less700 less_4" src="/Library/Images/other_images/Anime_images/train_thin.jpg">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/train_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Train, Journey, Adventures</h5>
                                            <p class="intro_desc">
                                                Shizuru Chikura, a high school student from Agano, is desperately searching for her friend, 
                                                Youka Nakatomi. Coming across a picture in a newspaper placing Youka in Ikebukuro, 
                                                Shizuru starts packing for a trip. But with public transportation effectively shut down, her options are limited. 
                                                Fortunately, Tairo Zenjirou, a senile old conductor and the only human adult in town, 
                                                comes to the rescue when he teaches her how to operate an abandoned train.
                                                With her destination set, Shizuru ventures off on a journey to find her missing friend. 
                                                On the day of departure, however, her other classmates — Nadeshiko Hoshi, Reimi Kuga, 
                                                and Akira Shinonome—decide to tag along at the last minute as they embark on this 
                                                one-track adventure that might expose them to dangers far surpassing anything 
                                                they have encountered in Agano.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch a Train to the End of The World" class="play_Now btn lightSolidBtn" href="/Library/Anime/TrainToTheEndOfTheWorld.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_5">
                                <img class="bcg_over700 over_5" src="/Library/Images/other_images/Anime_images/SoundEuphonium3_wide.png">
                                <img class="bcg_less700 less_5" src="/Library/Images/other_images/Anime_images/SoundEuphonium3_thin.jpg"">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/other_images/Anime_images/SoundEuphonium3_logo.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">Drama, Music, Romance</h5>
                                            <p class="intro_desc">
                                                With the ensemble contest behind them, the members of the Kitauji High School concert band now aim to 
                                                win a gold medal at the national competition. For third-year club president Kumiko Oumae and her friends, 
                                                it is their last chance before graduation. Filled with anticipation and anxiety, Kumiko worries if she can 
                                                successfully lead the band. Amid her struggles, Kumiko encounters transfer student Mayu Kuroe. From her gentle 
                                                demeanor to her talented euphonium skills, Mayu was a member of the Seira Girls' School concert band—a regular 
                                                at nationals. While Mayu is friendly, Kumiko cannot help but have an indescribable feeling from their meeting.
                                                As new members arrive and plans are set in motion, the club, with an insatiable hunger for a gold medal, 
                                                learns what it truly takes to propel themselves to reach the national level.
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch Euphonium" class="play_Now btn lightSolidBtn" href="/Library/Anime/SoundEuphonium.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_6">
                                <img class="bcg_over700 over_6" src="/Library/Anime/Watch/ClassroomoftheElite/img/3.jpg">
                                <img class="bcg_less700 less_6" src="/Library/Anime/Watch/ClassroomoftheElite/img/4.jpg">
                                <div class="intro_info_bcg">
                                    <div class="intro_info_box">
                                        <div class="info_title_img">
                                            <img src="/Library/Images/intro_images/anime_intro_images/intro_title_images/5.png" alt="">
                                        </div>
                                        <div class="intro_info_notes">
                                            <h5 class="intro_genre">School, Danger, Competition</h5>
                                            <p class="intro_desc">
                                                On the surface, Koudo Ikusei Senior High School is a utopia. The students enjoy an unparalleled amount of freedom, 
                                                and it is ranked highly in Japan. However, the reality is less than ideal. Four classes, A through D, are ranked in 
                                                order of merit, and only the top classes receive favorable treatment. Kiyotaka Ayanokouji is a student of Class D, 
                                                where the school dumps its worst. There he meets the unsociable Suzune Horikita, who believes she was placed in 
                                                Class D by mistake and desires to climb all the way to Class A, and the seemingly amicable class idol Kikyou Kushida, 
                                                whose aim is to make as many friends as possible. While class membership is permanent, class rankings are not; 
                                                students in lower ranked classes can rise in rankings if they score better than those in the top ones. 
                                                Additionally, in Class D, there are no bars on what methods can be used to get ahead. 
                                                In this cutthroat school, can they prevail against the odds and reach the top?
                                            </p>
                                            <div class="playShow_box">
                                                <a title="Watch the Classroom of the Elite" class="play_Now btn lightSolidBtn" href="/Library/Anime/ClassroomoftheElite.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- slide btns -->
                            <div class="intro_slide_nav_box">
                                <label for="intro_rad1" class="slide_nav_btn slide_btn_1"></label>
                                <label for="intro_rad2" class="slide_nav_btn slide_btn_2"></label>
                                <label for="intro_rad3" class="slide_nav_btn slide_btn_3"></label>
                                <label for="intro_rad4" class="slide_nav_btn slide_btn_4"></label>
                                <label for="intro_rad5" class="slide_nav_btn slide_btn_5"></label>
                                <label for="intro_rad6" class="slide_nav_btn slide_btn_6"></label>
                            </div>

                            <!-- Right Arrow -->
                            <div class="slide_arrow right_slide_arrow" id="right_arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="introSlideIcon intro_icon_Right">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="give_space"></div> -->

        <!-- Sub Slides -->
        <div class="more_content">
            
            <!-- Top Picks -->
            <div class="basic_slider_bdr">
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
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Continue watching -->
            <div class="basic_slider_bdr">
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
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
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
                            <a href="#" class="seeAll schedule_link">Schedule ›</a>
                        </div>
                    </div>
                    <div class="latestEp_bdr">
                        <div class="latestEp_box">
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/ClassroomoftheElite/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Classroom of the Elite S3</h4>
                                        <p class="latestEp_cardSubTitle">Episode 5</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">11:30pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/BongouStrayDogs/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Bongou Stray Dogs S5</h4>
                                        <p class="latestEp_cardSubTitle">Episode 4</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">11:15pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/AttackOnTitan/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Attack On Titans Final Season</h4>
                                        <p class="latestEp_cardSubTitle">Episode 4</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">11:00pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/OnePiece/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">One Piece</h4>
                                        <p class="latestEp_cardSubTitle">Episode 1093</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">10:30pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/CyberpunkEdgeRunners/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">CyberPunk: Edgerunners S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 12</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">9:45pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/JujutsuKaisen/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Jijutsu Kaisen S2</h4>
                                        <p class="latestEp_cardSubTitle">Episode 9</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">9:35pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/ASignOfAffection/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">A Sign Of Affection S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 10</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">9:15pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Images/other_images/Anime_images/Metallic_Rouge.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Metallic Rouge S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 8</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">7:30pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/Another/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Another S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 12</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">6:00pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/SoloLeveling/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Solo Levelling S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 7</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">5:45pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/Haikyuu/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Haikyu S2</h4>
                                        <p class="latestEp_cardSubTitle">Episode 2</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">5:15pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/MashleMagicAndMuscle/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Mashle Magic And Muscle S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 11</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">4:40pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/RentaGirlfriend/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Rent A Girlfriend S2</h4>
                                        <p class="latestEp_cardSubTitle">Episode 12</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">4:25pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/HeavenOfficialsBlessing/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Heave official's Blessings S1</h4>
                                        <p class="latestEp_cardSubTitle">Episode 8</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">3:00pm</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/Anime/Watch/DemonSlayer/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="type1_ctntImg_hoverIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="latestEp_cardDet">
                                    <div class="latestEp_cardTitleBox">
                                        <h4 class="latestEp_cardTitle">Demon Slayer S3</h4>
                                        <p class="latestEp_cardSubTitle">Episode 3</p>
                                    </div>
                                    <div class="latestEp_cardPostBox">
                                        <h5 class="latestEp_cardPost">1:45pm</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="latestEp_btn latestEp_view_more darkSolidBtn">show more</div>
                    <div class="latestEp_btn latestEp_schedule inactive darkSolidBtn">Schedule</div>
                </div>
            </div>

            <!-- Popular Shows -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">P</span>
                            <span class="small">opular</span>
                        </h2>
                        <p>Uvid Most Popular Shows</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top Rated -->
            <div class="basic_slider_bdr">
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
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Watch this Series: Demon Slayer -->
            <div class="watchSectionBdr">
                <div class="watchSectionBox foreSectionBox">
                    <div class="watchSection watchSectionDet">
                        <div class="infoBox">
                            <div class="watchHead">Demon Slayer</div>
                            <div class="watchType">Series</div>
                            <p class="watchInfo">
                                Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series that follows the story of Tanjiro Kamado, 
                                a young boy who becomes a demon slayer after his family is attacked by demons. The series is set in Taishō-era 
                                Japan and features a secret organization called the Demon Slayer Corps that has been fighting against demons for 
                                centuries. The demons in the series are former humans who possess supernatural abilities such as super strength, 
                                rapid regeneration, and unique powers referred to as “Blood Demon Art”.
                            </p>
                            <div class="watchActionBox">
                                <a href="/Library/Anime/Watch/DemonSlayer/S1/Ep1.html" class="watchAction watchEpLink lightSolidBtn"
                                title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/Anime/Watch/DemonSlayer/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library/Anime/DemonSlayer.html" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="goToSeries_icon">
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                    </svg>
                                </span>
                                <p class="goToSeries_text">Details</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Watch this Series: Jujutsu Kaisen -->
            <div class="watchSectionBdr">
                <div class="watchSectionBox backSectionBox">
                    <div class="watchSection watchSectionDet">
                        <div class="infoBox">
                            <div class="watchHead">Jujutsu Kaisen</div>
                            <div class="watchType">Series</div>
                            <p class="watchInfo">
                                Jujutsu Kaisen is a popular anime series that premiered in 2018. 
                                It is based on the manga of the same name written and illustrated by Gege Akutami. 
                                The story follows a high school student named Yuji Itadori who becomes a Jujutsu Sorcerer 
                                after swallowing a cursed object to protect his friends. He then joins the Tokyo Metropolitan 
                                Magic Technical College to learn more about Jujutsu and fight against cursed spirits.
                            </p>
                            <div class="watchActionBox">
                                <a href="/Library/Anime/Watch/JujutsuKaisen/S1/Ep1.html" class="watchAction watchEpLink lightSolidBtn" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/Anime/Watch/JujutsuKaisen/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library/Anime/JujutsuKaisen.html" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="goToSeries_icon">
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                    </svg>
                                </span>
                                <p class="goToSeries_text">Details</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Anime -->
            <div class="basic_slider_bdr">
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
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Classic -->
            <div class="basic_slider_bdr">
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
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="mostViewedBdr type1_Ctnt_bdr">
                <div class="mostViewedBox type1_Ctnt_box">
                    <div class="type1_Ctnt_boxHead">
                        <div class="type1_Ctnt_box_HeadLeft">
                            <h1>
                                <span class="firsttxt">M</span>
                                <span class="secondtxt">ost Viewed</span>
                            </h1>
                        </div>
                        <div class="type1_Ctnt_box_HeadRight">
                            <div class="mostViewedCategoryBox">
                                <div class="mostViewedCategoryItem active">
                                    <span class="mostViewedCategoryItemInitial">D</span>
                                    <span class="mostViewedCategoryItemEnding">ay</span>
                                </div>
                                <div class="mostViewedCategoryItem">
                                    <span class="mostViewedCategoryItemInitial">W</span>
                                    <span class="mostViewedCategoryItemEnding">eek</span>
                                </div>
                                <div class="mostViewedCategoryItem">
                                    <span class="mostViewedCategoryItemInitial">M</span>
                                    <span class="mostViewedCategoryItemEnding">onth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mostViewedRankBdr">
                        <div class="mostViewedRankBox">
                            <div class="mostViewedRankNo1Bdr">
                                <a href="/Library/Anime/DemonSlayer.html" class="mostViewedRankNo1Box">
                                    <div class="mostViewedRankNo1ImgBdr">
                                        <div class="mostViewedRankNo1ImgBox">
                                            <img src="/Library/Anime/Watch/DemonSlayer/img/2.jpg" alt="" class="mostViewedRankNo1Img">
                                        </div>
                                    </div>
                                    <div class="mostViewedRankNo1DetBdr">
                                        <div class="mostViewedRankNo1DetBox">
                                            <div class="mostViewedRankNo1SignBdr">
                                                <div class="mostViewedRankNo1SignBox">
                                                    <h2 class="mostViewedRankNo1SignText">01</h2>
                                                </div>
                                            </div>
                                            <div class="mostViewedRankDetBdr">
                                                <div class="mostViewedRankDetBox">
                                                    <div class="mostViewedRankDetTitleBox">
                                                        <div class="mostViewedRankDetTitleText">Demon Slayer</div>
                                                    </div>
                                                    <div class="mostViewedRankDetTagBdr">
                                                        <div class="mostViewedRankDetTagBox">
                                                            <div class="mostViewedRankDetTagText">TV</div>
                                                        </div>
                                                        <div class="mostViewedRankDetTagBox">
                                                            <div class="mostViewedRankDetTagText mostViewedRankDetTagTextDivider">/</div>
                                                        </div>
                                                        <div class="mostViewedRankDetTagBox">
                                                            <div class="mostViewedRankDetTagText">2019</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="mostViewedRankOthersBdr">
                                <div class="mostViewedRankOthersBox">
                                    <a href="/Library/Anime/OnePiece.html" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/Anime/Watch/OnePiece/img/2.jpg" alt="" class="mostViewedRankOthersImg">
                                                </div>
                                            </div>
                                            <div class="mostViewedRankOthersDetBdr">
                                                <div class="mostViewedRankOthersDetBox">
                                                    <div class="mostViewedRankDetBdr">
                                                        <div class="mostViewedRankDetBox">
                                                            <div class="mostViewedRankDetTitleBox">
                                                                <div class="mostViewedRankDetTitleText">One Piece</div>
                                                            </div>
                                                            <div class="mostViewedRankDetTagBdr">
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">TV</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText mostViewedRankDetTagTextDivider">/</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">1999</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/Library/Anime/JujutsuKaisen.html" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/Anime/Watch/JujutsuKaisen/img/2.jpg" alt="" class="mostViewedRankOthersImg">
                                                </div>
                                            </div>
                                            <div class="mostViewedRankOthersDetBdr">
                                                <div class="mostViewedRankOthersDetBox">
                                                    <div class="mostViewedRankDetBdr">
                                                        <div class="mostViewedRankDetBox">
                                                            <div class="mostViewedRankDetTitleBox">
                                                                <div class="mostViewedRankDetTitleText">Jujutsu Kaisen</div>
                                                            </div>
                                                            <div class="mostViewedRankDetTagBdr">
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">TV</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText mostViewedRankDetTagTextDivider">/</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">2018</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/Library/Anime/Naruto.html" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/Anime/Watch/Naruto/img/2.jpg" alt="" class="mostViewedRankOthersImg">
                                                </div>
                                            </div>
                                            <div class="mostViewedRankOthersDetBdr">
                                                <div class="mostViewedRankOthersDetBox">
                                                    <div class="mostViewedRankDetBdr">
                                                        <div class="mostViewedRankDetBox">
                                                            <div class="mostViewedRankDetTitleBox">
                                                                <div class="mostViewedRankDetTitleText">Naruto</div>
                                                            </div>
                                                            <div class="mostViewedRankDetTagBdr">
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">TV</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText mostViewedRankDetTagTextDivider">/</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">2002</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/Library/Anime/ChainsawMan.html" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/Anime/Watch/ChainsawMan/img/2.jpg" alt="" class="mostViewedRankOthersImg">
                                                </div>
                                            </div>
                                            <div class="mostViewedRankOthersDetBdr">
                                                <div class="mostViewedRankOthersDetBox">
                                                    <div class="mostViewedRankDetBdr">
                                                        <div class="mostViewedRankDetBox">
                                                            <div class="mostViewedRankDetTitleBox">
                                                                <div class="mostViewedRankDetTitleText">Chainsaw man</div>
                                                            </div>
                                                            <div class="mostViewedRankDetTagBdr">
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">TV</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText mostViewedRankDetTagTextDivider">/</div>
                                                                </div>
                                                                <div class="mostViewedRankDetTagBox">
                                                                    <div class="mostViewedRankDetTagText">2022</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Action -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">A</span>
                            <span class="small">ction</span>
                        </h2>
                        <p>Action packed shows wating for you</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Comedy -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">C</span>
                            <span class="small">omedy</span>
                        </h2>
                        <p>Hilarious masterpieces</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Watch this Series: One Piece -->
            <div class="watchSectionBdr">
                <div class="watchSectionBox foreSectionBox">
                    <div class="watchSection watchSectionDet">
                        <div class="infoBox">
                            <div class="watchHead">One Piece</div>
                            <div class="watchType">Series</div>
                            <p class="watchInfo">
                                Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up 
                                aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. 
                                Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the 
                                Pirates title that comes with it. The late King of the Pirates, Gol D. Roger, stirred up the world before his death by 
                                disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful 
                                pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, 
                                he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.
                                As he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, 
                                together embracing perils and wonders on their once-in-a-lifetime adventure.
                            </p>
                            <div class="watchActionBox">
                                <a href="/Library/Anime/Watch/OnePiece/S1/Ep1.html" class="watchAction watchEpLink lightSolidBtn" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/Anime/Watch/OnePiece/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library/Anime/OnePiece.html" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="goToSeries_icon">
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                    </svg>
                                </span>
                                <p class="goToSeries_text">Details</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Watch this Series: Naruto -->
            <div class="watchSectionBdr">
                <div class="watchSectionBox backSectionBox">
                    <div class="watchSection watchSectionDet">
                        <div class="infoBox">
                            <div class="watchHead">Naruto</div>
                            <div class="watchType">Series</div>
                            <p class="watchInfo">
                                Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, 
                                the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the leader of 
                                the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.
                                In the present, Naruto is a hyperactive and knuckle-headed ninja growing up within Konohagakure. 
                                Shunned because of the demon inside him, Naruto struggles to find his place in the village. 
                                His one burning desire to become the Hokage and be acknowledged by the villagers who despite him. 
                                However, while his goal leads him to unbreakable bonds with lifelong friends, it also lands him 
                                in the crosshairs of many deadly foes.
                            </p>
                            <div class="watchActionBox">
                                <a href="/Library/Anime/Watch/Naruto/S1/Ep1.html" class="watchAction watchEpLink lightSolidBtn" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="watchActionIcon">
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="addToListBtnIcon">
                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/Anime/Watch/Naruto/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library/Anime/Naruto.html" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="goToSeries_icon">
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                    </svg>
                                </span>
                                <p class="goToSeries_text">Details</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Horror -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">H</span>
                            <span class="small">orror</span>
                        </h2>
                        <p>Don't watch these shows alone</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sci-fi -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">S</span>
                            <span class="small">ci-fi</span>
                        </h2>
                        <p>Explore the boundaries of science fiction</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
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
                            <a href="#" class="seeAll">See All ›</a>
                        </div>
                    </div>
                    <div class="news_grid">
                        <div class="news_gridSect">
                            <div class="news_Ctnt">
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/chainsawman4.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Chainsaw Becoming one of the most watched Anime</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">19th March 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/ASignOFAffection.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">"Anime hits on a differrent level.."</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">14th February 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/DemonSlayer_RoarOfVictory.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Watch Demon Slayer Roar of Victory in theatres</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">2nd February 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/Goku.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Goku Never dies? Why?</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">21st January 2024</h5>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/MashleMAgicAndMuscle.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="type1_ctntImg_hoverIcon" viewBox="0 0 512 512">
                                                <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="news_cardDet">
                                        <div class="news_cardTitleBox">
                                            <h3 class="news_cardTitle">Anime lineups for the year</h3>
                                        </div>
                                        <div class="news_cardPostBox">
                                            <h5 class="news_cardPost">2nd January 2024</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Romance -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">R</span>
                            <span class="small">omance</span>
                        </h2>
                        <p>Heartfelt and endearing stories</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Musical -->
            <div class="basic_slider_bdr">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">M</span>
                            <span class="small">usical</span>
                        </h2>
                        <p>Entrancing and melodious stories</p>
                    </div>
                </div>
                <div class="basic_slider_ctnt">
                    <div class="basic_slider_box">
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Left">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalPanic.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Panic</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/FullmetalAlchemistBrotherhood.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Fullmetal Alchemist: Brotherhood</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/BlueExorcist.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Blue Exorcist</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/CyberpunkEdgerunners.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Cyberpunk Edgerunners</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/TomodachiGame.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Tomodachi Game</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/KaguyaSama.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kaguya Sama</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/Kakegurui.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Kakegurui</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">That I recently got Reincarnated as a Slime</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library/Anime/RisingoftheShieldHero.html" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/Anime/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardinfo cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">Anime</p>
                                                        </div>
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">2024</p>
                                                        </div>
                                                    </div>
                                                    <div class="cardInfo_titleBox">
                                                        <h3 class="cardInfo_titleText">Rising of the Shield Hero</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
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
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="basic_slide_arrowIcon basic_icon_Right">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
