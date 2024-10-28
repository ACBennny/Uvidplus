 
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="introSlideIcon intro_icon_Left">
                                    <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
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
                                                <a title="Watch My Hero Academia" class="play_Now btn lightSolidBtn" href="/Library.html?info=MyHeroAcademia">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
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
                                                <a title="Watch Windbreaker" class="play_Now btn lightSolidBtn" href="/Library.html?info=WindBreaker">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
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
                                                <a title="Watch Yatagarasu" class="play_Now btn lightSolidBtn" href="/Library.html?info=Yatagarasu">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
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
                                                <a title="Watch a Train to the End of The World" class="play_Now btn lightSolidBtn" href="/Library.html?info=TrainToTheEndOfTheWorld">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
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
                                                <a title="Watch Euphonium" class="play_Now btn lightSolidBtn" href="/Library.html?info=SoundEuphonium">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro_info_bdr bdr_6">
                                <img class="bcg_over700 over_6" src="/Library/TV/Watch/ClassroomoftheElite/img/3.jpg">
                                <img class="bcg_less700 less_6" src="/Library/TV/Watch/ClassroomoftheElite/img/4.jpg">
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
                                                <a title="Watch the Classroom of the Elite" class="play_Now btn lightSolidBtn" href="/Library.html?info=ClassroomoftheElite">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Watch Now</span>
                                                </a>
                                                <div class="openAddToWLBtn save_to_List btn hollowBtn" title="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="introSlideIcon intro_icon_Right">
                                    <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box basic_history_slider_card_box"></div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
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
                            <a href="/Schedule.html" class="seeAll schedule_link">Schedule ›</a>
                        </div>
                    </div>
                    <div class="latestEp_bdr">
                        <div class="latestEp_box">
                            <a href="#" class="latestEp_card type1_ctntCard">
                                <div class="latestEp_cardImgBox">
                                    <img src="/Library/TV/Watch/ClassroomoftheElite/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/BongouStrayDogs/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/AttackOnTitan/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/OnePiece/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/CyberpunkEdgeRunners/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/JujutsuKaisen/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/ASignOfAffection/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/Another/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/SoloLeveling/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/Haikyuu/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/MashleMagicAndMuscle/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/RentaGirlfriend/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/HeavenOfficialsBlessing/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                                    <img src="/Library/TV/Watch/DemonSlayer/img/2.jpg" alt="" class="latestEp_cardImg">
                                    <div class="type1_ctntImg_hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                                <a href="/Library.html?info=DemonSlayer" class="watchAction watchEpLink lightSolidBtn"
                                title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/TV/Watch/DemonSlayer/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library.html?info=DemonSlayer" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="goToSeries_icon">
                                        <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
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
                                <a href="/Library.html?info=JujutsuKaisen" class="watchAction watchEpLink lightSolidBtn" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/TV/Watch/JujutsuKaisen/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library.html?info=JujutsuKaisen" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="goToSeries_icon">
                                        <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                                <a href="/Library.html?info=DemonSlayer" class="mostViewedRankNo1Box">
                                    <div class="mostViewedRankNo1ImgBdr">
                                        <div class="mostViewedRankNo1ImgBox">
                                            <img src="/Library/TV/Watch/DemonSlayer/img/2.jpg" alt="" class="mostViewedRankNo1Img">
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
                                    <a href="/Library.html?info=OnePiece" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/TV/Watch/OnePiece/img/2.jpg" alt="" class="mostViewedRankOthersImg">
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
                                    <a href="/Library.html?info=JujutsuKaisen" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/TV/Watch/JujutsuKaisen/img/2.jpg" alt="" class="mostViewedRankOthersImg">
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
                                    <a href="/Library.html?info=Naruto" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/TV/Watch/Naruto/img/2.jpg" alt="" class="mostViewedRankOthersImg">
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
                                    <a href="/Library.html?info=ChainsawMan" class="mostViewedRankOthersCardBdr">
                                        <div class="mostViewedRankOthersCardBox">
                                            <div class="mostViewedRankOthersImgBdr">
                                                <div class="mostViewedRankOthersImgBox">
                                                    <img src="/Library/TV/Watch/ChainsawMan/img/2.jpg" alt="" class="mostViewedRankOthersImg">
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                                <a href="/Library.html?info=OnePiece" class="watchAction watchEpLink lightSolidBtn" title="">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/TV/Watch/OnePiece/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library.html?info=OnePiece" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="goToSeries_icon">
                                        <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
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
                                <a href="/Library.html?info=Naruto" class="watchAction watchEpLink lightSolidBtn" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="watchActionIcon">
                                        <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                    </svg>
                                    <span>Watch S1 Ep1</span>
                                </a>
                                <div class="openAddToWLBtn watchAction addToListBtn hollowBtn" title="Add to Watchlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="addToListBtnIcon">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                    </svg>
                                    <span>Add to Watchlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watchSection watchSectionImgBdr">
                        <div class="watchImgBox">
                            <img src="/Library/TV/Watch/Naruto/img/1.jpg" alt="" class="watchImg">
                            <a href="/Library.html?info=Naruto" class="goToSeries" title="">
                                <span class="goToSeries_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="goToSeries_icon">
                                        <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
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
                            <a href="/News.html" class="seeAll">See All ›</a>
                        </div>
                    </div>
                    <div class="news_grid">
                        <div class="news_gridSect">
                            <div class="news_Ctnt">
                                <a href="#" class="news_card type1_ctntCard">
                                    <div class="news_cardImgBox">
                                        <img src="/Library/Images/other_images/Anime_images/chainsawman4.jpg" alt="Image of a news" class="news_cardImg">
                                        <div class="type1_ctntImg_hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                                <path d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z" />
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                                <path d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z" />
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                                <path d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z" />
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                                <path d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z" />
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="type1_ctntImg_hoverIcon">
                                                <path d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box">
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalPanic" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/5.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/6.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=FullmetalAlchemistBrotherhood" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/7.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=BlueExorcist" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/9.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=CyberpunkEdgerunners" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/15.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=TomodachiGame" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/16.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=KaguyaSama" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/17.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=Kakegurui" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/18.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=ThatIRecentlyGotReincarnatedAsASlime" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/19.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                            <div class="slide_card_base">
                                <div class="slide_card_bdr">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="/Library.html?info=RisingoftheShieldHero" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="/Library/TV/img/20.jpg" alt="" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">HD</h1>
                                            </div>
                                            <div class="cardInfoBdr">
                                                <div class="cardInfoBox">
                                                    <div class="cardInfo_tagBdr">
                                                        <div class="cardInfo_tagBox">
                                                            <p class="cardInfo_tagText">TV</p>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
