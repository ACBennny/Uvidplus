/***************************************************************
 * This will display the details about all shows
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    let info_pg_show_link = "";
    let info_pg_show_type = "";
    let info_pg_show_id = "";
    let showsStructData = {};
    const infoPageNav = 
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="topNav_titleBox">
                        <div class="topNav_titleText"></div>
                    </div>
                </section>
                <section class="topNav_section">
                    <div class="sideNavItemsCardBase">
                        <button type="button" class="sideNavItemsCardBdr shareShowBtn" title="Share this show">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                        <path fill-rule="evenodd" d="M16.5 2.25a3.25 3.25 0 0 0-3.2 3.824L8.57 9.386l-.068.053a3.25 3.25 0 1 0 0 5.121l.068.054l4.73 3.312q-.05.28-.05.574a3.25 3.25 0 1 0 .667-1.973L9.438 13.39c.2-.422.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136A3.25 3.25 0 1 0 16.5 2.25M14.75 5.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M6.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m10 6.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </button>
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
    const tv_ep_base = 
    `
        <div class="ep-list-box" id="info_ep_list">
            <div class="basic_slider_title_bdr">
                <div class="basic_slider_title_box">
                    <h2>
                        <span class="big">E</span>
                        <span class="small">pisodes</span>
                    </h2>
                    <p>Select an episode to watch</p>
                </div>
            </div>
            <div class=" sect-ep">
                <div class="sect-ep-navBox">
                    <div class="sect-ep-navTop">
                        <div class="sect-ep-navLeft">
                            <div class="seasons_headerBdr">
                                <div class="seasons_headerBox" title="Select Season" aria-label="Select Season" data-current-index="0">
                                    <div class="seasons_headerIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="seasons_headerIconSvg">
                                            <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div class="seasons_headerText">N/A</div>
                                </div>
                                <div class="seasons_selectorBdr">
                                    <div class="seasons_selectorHeader">
                                        <div class="seasons_selectorHeaderText">
                                            <span class="large">S</span>
                                            <span class="small">eason</span>
                                        </div>
                                        <div class="seasons_selectorHeaderIcon"></div>
                                    </div>
                                    <div class="seasons_selectorBox"></div>
                                </div>
                            </div>
                        </div>
                        <div class="sect-ep-navRight">
                            <div class="episode_searchBdr">
                                <div class="episode_searchBox">
                                    <input type="text" id="episode_searchField1Id" class="episode_searchFieldClass" inputmode="numeric" pattern="\d*" placeholder="Search">
                                </div>
                                <div class="episode_searchIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="episode_searchSvg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="episode_setBdr">
                                <div class="episode_setBox">
                                    <button type="button" class="episode_setBtn openGenMenuModalBtn" data-gen-menu-modal-type="show_ep_set">
                                        <div class="episode_setText">N/A</div>
                                        <div class="episode_setIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="episode_setSvg">
                                                <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <button type="button" class="genBtnBox genIconBtn transBtn episode_orderBtn">
                                <div class="genBtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                        <path d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z" />
                                        <path d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z" />
                                    </svg>
                                </div>
                            </button>
                            <button type="button" class="genBtnBox genIconBtn transBtn ssn_dwld_btn" title="Download season">
                                <div class="genBtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                        <path d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                                        <path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
                                    </svg>
                                </div>
                            </button>
                            <button type="button" class="genBtnBox genIconBtn transBtn ssn_markAsWatched_btn" title="Mark season as watched">
                                <div class="genBtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                        <path d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" />
                                        <path fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="sect-ep-navBtm">
                        <div class="episode_searchBdr">
                            <div class="episode_searchBox">
                                <input type="text" id="episode_searchField2Id" class="episode_searchFieldClass" inputmode="numeric" pattern="\d*" placeholder="Search">
                            </div>
                            <div class="episode_searchIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="episode_searchSvg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                </svg>
                            </div>
                        </div>
                        <div class="episode_setBdr">
                            <div class="episode_setBox">
                                <button type="button" class="episode_setBtn openGenMenuModalBtn" data-gen-menu-modal-type="show_ep_set">
                                    <div class="episode_setText">N/A</div>
                                    <div class="episode_setIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="episode_setSvg">
                                            <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="show-home-bx">
                    <div class="show-home">
                        <div class="show-sub showsub-atv">
                            <div class="showset"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let moreShowsToWatchStruct = 
    `
        <div class="moreShows_slider_base">
            <div class="basic_slider_bdr basic_carousel">
                <div class="basic_slider_title_bdr">
                    <div class="basic_slider_title_box">
                        <h2>
                            <span class="big">R</span>
                            <span class="small">ecommended</span>
                        </h2>
                        <p>More shows to try out</p>
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
        <div>
    `;
    let dwldSsn_notInDLBtnStruct = 
    `
        <div class="genBtnIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                <path d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                <path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
            </svg>
        </div>
    `;
    let dwldSsn_isInDLBtnStruct = 
    `
        <div class="genBtnIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                <path fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m12.428 6.181a.75.75 0 0 1 .063 1.06l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 0 1 1.122-.997l.772.87l2.106-2.37a.75.75 0 0 1 1.06-.063" clip-rule="evenodd" />
            </svg>
        </div>
    `;
    let selDwlDQltyStruct = 
    `
        <div class="dwldShowModalBase">
            <div class="dwldShowModalBdr">
                <div class="dwldShowModalBcg dwldShowModalCloseBtn"></div>
                <div class="dwldShowModalBox">
                    <div class="genMenuModalCtntBox epDLQltyCardModalCtntBox">
                        <div class="genMenuModalCtntSectBox">
                            <p class="genMenuModalCtntSectText">Select Download Quality</p>
                        </div>
                        <button class="genMenuModalCtntBtnBox epDLQltyCard" data-ep-qlty="Best">
                            <div class="genMenuModalCtntBtnText">Best</div>
                        </button>
                        <button class="genMenuModalCtntBtnBox epDLQltyCard" data-ep-qlty="Better">
                            <div class="genMenuModalCtntBtnText">Better</div>
                        </button>
                        <button class="genMenuModalCtntBtnBox epDLQltyCard selected" data-ep-qlty="Good">
                            <div class="genMenuModalCtntBtnText">Good</div>
                        </button>
                        <button class="genMenuModalCtntBtnBox epDLQltyCard" data-ep-qlty="Low">
                            <div class="genMenuModalCtntBtnText">Data Saver</div>
                        </button>
                    </div>
                    <div class="genMenuModalStickyBdr btm">
                        <div class="genMenuModalStickyBox">
                            <button type="button" class="genBtnBox midSolidBtn cnfrmDwldQlty">
                                <div class="genBtnText">OK</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div>
    `;
    let selAudioLangStruct = 
    `
        <div class="genMenuModalCtntBox epDLMoreLangCardModalCtntBox">
            <div class="genMenuModalCtntSectBox">
                <p class="genMenuModalCtntSectText">Additional Audio</p>
            </div>
            <div class="genMenuModalCtntDescBox">
                <p class="genMenuModalCtntDescText">
                    The following language(s):
                    <strong class="show_lang"></strong>
                    will be downloaded by default. Additional languages can be included with your download.
                    This can be changed anytime by going to Settings.
                </p>
            </div>
            <button class="genMenuModalCtntBtnBox selected epDLAudioCard">
                <div class="genMenuModalCtntBtnText">None</div>
            </button>
        </div>
        <div class="genMenuModalStickyBdr">
            <div class="genMenuModalStickyBox">
                <button type="button" class="genBtnBox midSolidBtn cnfrmDwldAudio">
                    <div class="genBtnText">OK</div>
                </button>
            </div>
        </div>
    `;
    const info_pg_dflt_bcg = `/images/uvid-green-bcg1-dark.jpg`;
    let trailerTimer;
    const prsnLmt = 20;
    const epSetLength = 40;
    let epSelectedSet = 0;
    let epSetArr = [];
    let sample_ep_duration = `00:57`;



    async function preShowSection()
    {
        info_pg_show_link = `#/${hash_parts[1]}/${hash_parts[2]}`;
        info_pg_show_id = `${hash_parts[2]}`;
        info_pg_show_type =  `${hash_parts[1].toString().toLowerCase()}`;

        // Fetch show details
        try
        {
            // return
            showsStructData = await __getUVPShowDet(info_pg_show_id, info_pg_show_type, ["videos","images","credits","keywords","recommendations","external_ids"]);

            if(((hash_parts[3]) && (hash_parts[3].toString().trim().toLowerCase() === "watch")))
            {
                initWatchPage();
            }
        }
        catch(error)
        {
            console.error(error);
            page_route_error("error");
            return;
        }
            
        const isAdltCtnt = showsStructData?.adult;

        // Return if user has adult content set to hidden
        if((isAdltCtnt == true) && (window?.____show_adult_ctnt == false))
        {
            window.location.hash = "#/home";
            notification('notifyBad', `The selected content is unavailable`);
            return;
        }

        let show_rating = showsStructData?.adult ? "Yes" : "No";
        let show_background = (showsStructData?.backdrop_path)
            ? `https://image.tmdb.org/t/p/original/${showsStructData?.backdrop_path}`
            : info_pg_dflt_bcg;
        let show_foreground = `https://image.tmdb.org/t/p/original/${showsStructData?.poster_path}`;

        let show_title = showsStructData?.name || showsStructData?.title || "N/A";

        let show_tagline = (showsStructData?.tagline) 
            ? 
                `
                    <div class="quick_det_bdr">
                        <div class="quick_det_box">
                            <div class="quick_det_item">
                                <span class="quick_det_text tagline">${showsStructData?.tagline}</span>
                            </div>
                        </div>
                    </div>
                ` 
            : "";
        let show_trailers = (getShowMainTrailer(showsStructData?.videos)?.key)
            ? `https://www.youtube.com/embed/${getShowMainTrailer(showsStructData?.videos)?.key}`
            : null;

        let show_scores = (typeof showsStructData?.vote_average === "number")
            ? Number(showsStructData?.vote_average).toFixed(1)
            : "N/A";
        let show_description = showsStructData?.overview || "No description available";
        let show_duration = `${showsStructData?.episode_run_time?.map(item => item).join(", ") || showsStructData?.runtime || "N/A"}`;

        let show_og_ttl = showsStructData?.original_name || showsStructData?.original_title || "N/A";
        let show_og_cntry = 
        `${
            showsStructData?.origin_country?.map(country => 
            {
                return uvp_regions.find(rgn => rgn.rg_code.toLowerCase() === country.toLowerCase())?.rg_name || "N/A";
            }).join(", ") || "N/A"
        }`;
        let show_languages = `${uvp_langs.find(lang => lang.iso_639_1.toLowerCase() === showsStructData?.original_language.toLowerCase())?.english_name || "N/A"}`;
        let show_type = info_pg_show_type.toUpperCase() || "N/A";
        let show_year = showsStructData?.first_air_date?.split("-")[0] || showsStructData?.release_date || "N/A";
        let show_airing_status = showsStructData?.status || "N/A";
        let show_studios = `${showsStructData?.production_companies?.map(item => item?.name).join(", ") || "N/A"}`;
        let show_genre = 
        `
            ${
                showsStructData?.genres?.map(genre => 
                {
                    const genre_match = uvp_genres.find(gnr => gnr?.id == genre?.id);
                    if(genre_match)
                    {
                        return `
                            <a class="abt-detText-minor abt-detText-link-text" onclick="window.open('${genre_match?.link}', '_self')">${genre_match?.name}</a>
                        `;
                    }
                    else
                    {
                        return `${genre?.name}`;
                    }
                }).join("") || "N/A"
            }
        `;
        let show_keywords = 
        `
            ${
                showsStructData?.keywords?.results?.map(item => item?.name).join(", ") ||
                showsStructData?.keywords?.keywords?.map(item => item?.name).join(", ") || 
                "N/A"
            }
        `;
        
        const showHTMLCtnt =  
        `
            <div class="info_pg_base">
                <div class="info_pg_bcg">
                    <div class="bcg_img_bdr">
                        <div class="bcg_img_box">
                            <div class="img_preload_box">
                                <div class="img_preload_sibling"></div>
                                <img loading="lazy" 
                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                    src="${show_background}" alt="Thumbnail image of ${show_title}" class="bcgImg"
                                >
                            </div>
                        </div>
                        <div class="bcg_img_gradient"></div>
                    </div>
                    <div class="info_pg_bdr">
                        <div class="info_pg_box">
                            <div class="title-plate">
                                <div class="title_ImgBdr">
                                    <div class="title_ImgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="title_Img"
                                            >
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="title_ctntBdr">
                                    <h1 id="show_Header_Name">${show_title}</h1>

                                    ${show_tagline}

                                    <div class="quick_det_bdr">
                                        <div class="quick_det_box">
                                            <div class="quick_det_item">
                                                <div class="quick_det_rating_icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quick_det_rating_svg">
                                                        <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                    </svg>
                                                </div>
                                                <span class="quick_det_text">${show_scores}</span>
                                            </div>
                                            <div class="quick_det_item">
                                                <span class="quick_det_text quick_det_divider">•</span>
                                            </div>
                                            <div class="quick_det_item">
                                                <span class="quick_det_text">${show_airing_status}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="info_atn_bdr">
                                        <button type="button" class="genBtnBox lightSolidBtn watchShowNowBtn">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                                </svg>
                                            </div>
                                            <div class="genBtnText">Play Now</div>
                                        </button>
                                        <div class="quick_atnBcg">
                                            <div class="quick_atnBdr">
                                                <div class="quick_atnBox watchTrailer_box" src="${show_trailers}" title="Watch trailer" aria-label="show-score">
                                                    <div class="quick_atnCtnt">
                                                        <div class="topCtnt">
                                                            <div class="topIconBox">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon">
                                                                    <path fill-rule="evenodd" d="M18.059 4.708a2.25 2.25 0 0 0-2.166-1.25a3 3 0 0 0-.51.096l-.446 3.74l3.118-.836a8 8 0 0 0 .289-.083a.25.25 0 0 0 .137-.238l-.01-.052l-.063-.24c-.19-.708-.26-.955-.35-1.137m-4.683 3.003l.447-3.743l-4.719 1.264l-.446 3.743zM7.098 9.394l.446-3.743c-.817.219-1.401.379-1.85.544c-.474.174-.728.33-.904.505c-.279.28-.48.628-.582 1.009c-.064.24-.072.537.014 1.034c.063.362.167.79.31 1.338zM3.25 11.093c-.226-.843-.408-1.526-.506-2.094c-.104-.6-.129-1.141.015-1.678a3.75 3.75 0 0 1 .97-1.681c.394-.393.875-.643 1.447-.853c.554-.203 1.259-.392 2.132-.626l.78-.21a.8.8 0 0 1 .286-.076l5.972-1.6l.021-.006a.8.8 0 0 1 .286-.076c.474-.126.821-.21 1.142-.232a3.75 3.75 0 0 1 3.609 2.084c.164.332.272.736.43 1.328l.023.084l.012.046c.048.176.097.359.109.534a1.75 1.75 0 0 1-.973 1.684a3 3 0 0 1-.562.186L9.697 10.25h6.355c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v1.107c0 1.367 0 2.47-.117 3.337c-.12.9-.38 1.658-.982 2.26s-1.36.86-2.26.981c-.866.117-1.969.117-3.336.117h-4.11c-1.368 0-2.47 0-3.337-.117c-.9-.12-1.658-.38-2.26-.981c-.602-.602-.86-1.36-.982-2.26c-.116-.867-.116-1.97-.116-3.337zm1.5.657V16c0 1.435.001 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.399.556c.755.101 1.756.103 3.192.103h4c1.435 0 2.436-.002 3.192-.103c.733-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-1c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.789-.3c-.483-.065-1.13-.066-2.094-.066zm8.448 2.83l.047.034l.042.03c.361.259.7.501.94.738c.27.265.523.623.523 1.118s-.252.852-.522 1.118c-.241.237-.58.48-.94.738l-.043.03l-.047.034c-.361.26-.706.506-1.001.652c-.315.155-.834.321-1.33-.029c-.43-.304-.533-.795-.574-1.138c-.043-.358-.043-.826-.043-1.358v-.094c0-.533 0-1 .043-1.358c.04-.343.144-.834.575-1.138c.495-.35 1.014-.185 1.329-.03c.295.146.64.394 1.001.653m-1.429.832c-.018.25-.02.593-.02 1.088s.002.838.02 1.088c.149-.097.34-.234.602-.421c.418-.3.658-.474.805-.619q.03-.028.046-.048l-.046-.048c-.147-.145-.387-.32-.805-.619a18 18 0 0 0-.602-.421" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="btmCtnt">
                                                            <p class="btmText">Trailer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="quick_atnBox like_buttonsBox open_quickAtnModalBdr" like-status="dflt" title="Rate this show">
                                                    <div class="quick_atnCtnt">
                                                        <div class="topCtnt">
                                                            <div class="topIconBox like_dflt">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon">
                                                                    <path fill-rule="evenodd" d="M12.438 2.778a.6.6 0 0 0-.438.03a.52.52 0 0 0-.28.33l-.476 1.834a8.4 8.4 0 0 1-.72 1.844c-.485.907-1.218 1.604-1.898 2.19l-1.438 1.24a.92.92 0 0 0-.315.774l.812 9.393a.916.916 0 0 0 .911.837h4.649c3.136 0 5.779-2.182 6.286-5.113l.705-4.08a.916.916 0 0 0-.901-1.073h-5.181c-.977 0-1.72-.876-1.562-1.84l.663-4.044a4 4 0 0 0-.076-1.664a.89.89 0 0 0-.596-.611zl.23-.714zm-1.09-1.321a2.1 2.1 0 0 1 1.549-.107l.145.047l-.23.714l.23-.714c.777.25 1.383.87 1.589 1.662c.193.746.229 1.524.104 2.284l-.663 4.044a.083.083 0 0 0 .082.097h5.18c1.5 0 2.636 1.352 2.38 2.829l-.705 4.08c-.638 3.688-3.938 6.357-7.764 6.357H8.596a2.416 2.416 0 0 1-2.405-2.208l-.813-9.393a2.42 2.42 0 0 1 .83-2.04l1.44-1.24c.655-.564 1.206-1.111 1.552-1.76a6.8 6.8 0 0 0 .592-1.514l.476-1.833a2.01 2.01 0 0 1 1.08-1.305m-8.38 8.028a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.75" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                            <div class="topIconBox like_yes">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon">
                                                                    <path d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735" />
                                                                    <path fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                            <div class="topIconBox like_no">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon">
                                                                    <path d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735" />
                                                                    <path fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="btmCtnt">
                                                            <p class="btmText">Rate</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="quick_atnBox wl_show_page openGenMenuModalBtn" data-gen-menu-modal-type="wl_body_cards" title="Watchlist">
                                                    <div class="quick_atnCtnt">
                                                        <div class="topCtnt">
                                                            <div class="topIconBox">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon wlIconSvg wlIconOUT">
                                                                    <path fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.474-.673-3.41-.568-5.304 1.088L14.53 6.97a.75.75 0 1 1-1.06 1.061l-2-1.999l-.01-.01c-2.058-2.14-4.224-2.335-5.836-1.598M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd" />
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon wlIconSvg wlIconIN hide">
                                                                    <path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="btmCtnt">
                                                            <p class="btmText">Watchlist</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="quick_atnBox openAddToCLBtn" title="Add to Collection">
                                                    <div class="quick_atnCtnt">
                                                        <div class="topCtnt">
                                                            <div class="topIconBox">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon">
                                                                    <path fill-rule="evenodd" d="M6.448 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zM3.616 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788C3.253 8.112 3.25 7.464 3.25 6.5s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd" />
                                                                    <path d="M18.25 3.5a.75.75 0 0 0-1.5 0v2.25H14.5a.75.75 0 0 0 0 1.5h2.25V9.5a.75.75 0 0 0 1.5 0V7.25h2.25a.75.75 0 0 0 0-1.5h-2.25z" />
                                                                    <path fill-rule="evenodd" d="M17.448 12.75h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066M6.448 12.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="btmCtnt">
                                                            <p class="btmText">Collections</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quickAtnModalBdr">
                                                <div class="quickAtnModalBox">
                                                    <button class="quickAtnModal_btn score_btn like_buttons add_to_LikedShowsBox" title="I like this show" aria-label="I like this epsidoe">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                            <path d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735" />
                                                            <path fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" />
                                                        </svg>
                                                        <p class="quickAtnModal_btnText score_btnText">I like this</p>
                                                    </button>
                                                    <button class="quickAtnModal_btn score_btn like_buttons add_to_DislikedShowsBox" title="This show isn't for me" aria-label="I don't like this episode">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                            <path d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735" />
                                                            <path fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd" />
                                                        </svg>
                                                        <p class="quickAtnModal_btnText score_btnText">Not for me</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="ctnt-plate">
                                <div class="tro">

                                    <div class="ctnt-tab-headerBcg">
                                        <div class="ctnt-tab-headerBdr">
                                            <div class="ctnt-tab-headerBox">
                                                <button type="button" class="ctnt-tab-headerOpt selected">
                                                    <div class="ctnt-tab-headerText">Overview</div>
                                                </button>
                                                <button type="button" class="ctnt-tab-headerOpt ">
                                                    <div class="ctnt-tab-headerText">Staff</div>
                                                </button>
                                                <button type="button" class="ctnt-tab-headerOpt ">
                                                    <div class="ctnt-tab-headerText">Gallery</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- About the Show -->
                                    <div class="sect-tab sect-abt-bdr selected" id="abt">
                                        <div class="sect-abt-box">
                                            <div class="sect-abt-card sect-abt-description">
                                                <div class="sect-abt-header">
                                                    <div class="sect-head">
                                                        <div class="sect-headText"><span class="major">D</span>escription</div>
                                                    </div>
                                                    <div class="sect-abt-headerText">Description</div>
                                                </div>
                                                <div class="abt-stmt-long">
                                                    <p class="abt-stmt-longText">${show_description}</p>
                                                </div>
                                                <div class="abt-stmt-short">
                                                    <p class="abt-stmt-shortText">${show_description}</p>
                                                    <div class="abt-stmt-detBdr" id="ep">
                                                        <div class="abt-stmt-detBox">
                                                            <label for="abt-stmt-checkBoxId" class="abt-stmt-detBtn read_more_btn">
                                                                <input type="checkbox" name="abt-stmt-checkBox" id="abt-stmt-checkBoxId" class="abt-stmt-checkBoxCls">
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sect-abt-card sect-abt-details">
                                                <div class="sect-abt-header">
                                                    <div class="sect-head">
                                                        <div class="sect-headText"><span class="major">D</span>etails</div>
                                                    </div>
                                                    <div class="sect-abt-headerText">Details</div>
                                                </div>
                                                <div class="abt-det"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Staff -->
                                    <div class="sect-tab">
                                        <div class="sect-wrapper sect-cast">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="major">C</span>ast</div>
                                            </div>
                                            <div class="sect-coming-soon-bdr">
                                                <div class="sect-coming-soon-box">
                                                    <div class="sect-coming-soon-text">No Cast</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sect-wrapper sect-crew">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="major">C</span>rew</div>
                                            </div>
                                            <div class="sect-coming-soon-bdr">
                                                <div class="sect-coming-soon-box">
                                                    <div class="sect-coming-soon-text">No Crew</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Gallery -->
                                    <div class="sect-tab">
                                        <div class="sect-wrapper sect-videos">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="major">C</span>lips & Trailers</div>
                                            </div>
                                            <div class="sect-coming-soon-bdr">
                                                <div class="sect-coming-soon-box">
                                                    <div class="sect-coming-soon-text">No Videos</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sect-wrapper sect-backdrops">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="major">B</span>ackdrops</div>
                                            </div>
                                            <div class="sect-coming-soon-bdr">
                                                <div class="sect-coming-soon-box">
                                                    <div class="sect-coming-soon-text">No Backdrops</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sect-wrapper sect-posters">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="major">P</span>osters</div>
                                            </div>
                                            <div class="sect-coming-soon-bdr">
                                                <div class="sect-coming-soon-box">
                                                    <div class="sect-coming-soon-text">No Posters</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Episodes -->
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.title = `Watch ${show_title} • Uvid+`;
        genShowLinkForCL = info_pg_show_link;
        epSetArr.length = 0;
        epSelectedSet = 0;
        topNavBar.innerHTML = infoPageNav;
        topNavBar.classList.add("initialize");
        let showType = info_pg_show_type;
        let showEpData = [];

        const infoPageBase = document.createElement("div");
        infoPageBase.className = "info_pg_base";
        infoPageBase.innerHTML = showHTMLCtnt;
        documentCtnt.insertAdjacentElement(`afterbegin` , infoPageBase);

        const abtDetBase = infoPageBase.querySelector(".abt-det");


        if((showType == "tv"))
        {
            let show_aired = `${showsStructData?.first_air_date || "N/A"} to ${showsStructData?.last_air_date || "N/A"}`;
            let show_seasons = showsStructData?.number_of_seasons || "N/A";
            let show_episodes = showsStructData?.number_of_episodes || "N/A";

            abtDetBase.innerHTML = 
            `
                <p class="abt-detText"><span class="abt-detText-major">Original Name</span><span class="abt-detText-minor">${show_og_ttl}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Original Lang.</span><span class="abt-detText-minor">${show_languages}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Origin Country</span><span class="abt-detText-minor">${show_og_cntry}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Type</span><span class="abt-detText-minor">${show_type}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Adult</span><span class="abt-detText-minor">${show_rating}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Seasons</span><span class="abt-detText-minor">${show_seasons}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Episodes</span><span class="abt-detText-minor">${show_episodes}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Duration</span><span class="abt-detText-minor">${show_duration} mins</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Release Year</span><span class="abt-detText-minor">${show_year}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Aired</span><span class="abt-detText-minor">${show_aired}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Status</span><span class="abt-detText-minor">${show_airing_status}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Studios</span><span class="abt-detText-minor">${show_studios}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Genres</span><span class="abt-detText-minor abt-detText-link-set">${show_genre}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Keywords</span><span class="abt-detText-minor">${show_keywords}</span></p>
            `;

            infoPageBase.querySelector(".tro").insertAdjacentHTML("beforeend", tv_ep_base);

            const seasonOverlaySelectorBox = infoPageBase.querySelector(".seasons_selectorBox");
            showEpData = showsStructData?.seasons?.filter(item => ((typeof item?.season_number === "number") && (item?.season_number > 0))) || [];
            
            if((showEpData.length > 0))
            {
                showEpData.forEach((ep , i) => 
                {
                    let epc = showEpData[i]?.episode_count;

                    // Configure the season selector
                    let seasonOverlaySelectorBoxInnerHTML = 
                    `
                        <button type="button" class="seasons_selector" show-type="${showType}" data-ep-length="${epc}" data-ssn-num="${ep?.season_number}">
                            <div class="selectorMain">${ep?.name || `Season ${ep?.season_number}`}</div>
                            <p class="selectorMinor">${epc} episodes</p>
                        </button>
                    `;
                    seasonOverlaySelectorBox.insertAdjacentHTML(`beforeend` , seasonOverlaySelectorBoxInnerHTML);

                    // Configure the episode set(s)
                    let dividend = epc;
                    let divider = epSetLength;
                    let quotient = Math.floor((dividend / divider));
                    let struct = ``;

                    // Set as null if available episodes is less than the divider
                    if((ep.show_ep <= divider))
                    {
                        epSetArr.push(
                            {
                                ep_set_struct: null,
                            }
                        );
                    }
                    else
                    {
                        // Create structs for each ep set
                        for(let i = 0; i < quotient; i++)
                        {
                            struct +=
                            `
                                <button type="button" class="genMenuModalCtntBtnBox showEpModalCtntBtnBox" data-ep-set-start="${(i * divider) + 1}" data-ep-set-end="${(i + 1) * divider}">
                                    <div class="genMenuModalCtntBtnText">${(i * divider) + 1} - ${(i + 1) * divider}</div>
                                </button>
                            `;
                        }

                        // Create struct for ep set of excess (remainder)
                        struct +=
                        `
                            <button type="button" class="genMenuModalCtntBtnBox showEpModalCtntBtnBox" data-ep-set-start="${(quotient * divider) + 1}" data-ep-set-end="${dividend}">
                                <div class="genMenuModalCtntBtnText">${(quotient * divider) + 1} - ${dividend}</div>
                            </button>
                        `;

                        // Push to epSetArr
                        epSetArr.push(
                            {
                                ep_set_struct: struct,
                            }
                        );
                    }

                });
                
                // Initialize the episode selector text
                let ssn_hdrTxt = document.querySelector(".seasons_headerText");
                let firstSsnSelector = document.querySelector(".seasons_selector");

                if((firstSsnSelector == undefined) || (firstSsnSelector == null)) return;
                let firstSsnSelectorMain = firstSsnSelector.querySelector(".selectorMain");
                
                ssn_hdrTxt.textContent = firstSsnSelectorMain.textContent;
                firstSsnSelector.classList.add("active");
            }
        }
        else if((showType === "movie"))
        {
            abtDetBase.innerHTML = 
            `
                <p class="abt-detText"><span class="abt-detText-major">Original Name</span><span class="abt-detText-minor">${show_og_ttl}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Original Lang.</span><span class="abt-detText-minor">${show_languages}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Origin Country</span><span class="abt-detText-minor">${show_og_cntry}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Type</span><span class="abt-detText-minor">${show_type}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Adult</span><span class="abt-detText-minor">${show_rating}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Release Date</span><span class="abt-detText-minor">${show_year}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Duration</span><span class="abt-detText-minor">${show_duration} mins</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Status</span><span class="abt-detText-minor">${show_airing_status}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Studios</span><span class="abt-detText-minor">${show_studios}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Genres</span><span class="abt-detText-minor abt-detText-link-set">${show_genre}</span></p>
                <p class="abt-detText"><span class="abt-detText-major">Keywords</span><span class="abt-detText-minor">${show_keywords}</span></p>
            `;

            // Insert the movie card
            infoPageBase.querySelector(".tro").insertAdjacentHTML(
                `afterend`,
                `
                    <div class="ep-list-box" id="info_ep_list">
                        <div class="basic_slider_title_bdr">
                            <div class="basic_slider_title_box">
                                <h2>
                                    <span class="big">W</span>
                                    <span class="small">atch Now</span>
                                </h2>
                                <p>Watch the full movie</p>
                            </div>
                        </div>
                        <div class=" sect-ep">
                            <div class="show-home-bx">
                                <div class="show-home">
                                    <div class="show-sub showsub-atv">
                                        <div class="showset">
                                            <div class="ep_cardBdr" data-ssn="1" data-ep="1" title="Watch '${show_title}'">
                                                <div class="ep_cardBox">
                                                    <div class="ep_cardThumbBdr">
                                                        <div class="ep_cardThumbBox">
                                                            <div class="img_preload_box">
                                                                <div class="img_preload_sibling"></div>
                                                                <img loading="lazy" 
                                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                                    src="${show_background}" 
                                                                    alt="Thumbnail image of ${show_title}" class="ep_cardThumbImg"
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" onclick="preWatchPage('#/movie/${info_pg_show_id}/watch')" class="ep_cardCtntBdr">
                                                        <div class="ep_cardCtntBox">
                                                            <div class="ep_cardCtnt_titleBox">
                                                                <p class="ep_cardCtnt_titleText">Full movie</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="ep_cardMenuBdr">
                                                        <div class="ep_cardMenuBox">
                                                            <button type="button" class="genBtnBox transBtn genIconBtn  openGenMenuModalBtn" data-gen-menu-modal-type="show_info_ep_cards" title="More Actions">
                                                                <div class="genBtnIcon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                                        <path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                                                                    </svg>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            );

            // Get Movie Collection if any
            getMovieCollection();
        }


        preInsertShowMediaCtnt();
        insertMoreShowsToWatch();
        startShowSection();
    }


    // Initialize the Info page functionalities
    async function startShowSection()
    {

        // DEFINITION

            let selectedProfile = await getSelectedProfile();
            let bcgImgBdr = document.querySelector(".bcg_img_bdr");
            let bcgImgBox = document.querySelector(".bcg_img_box");
            let bcgImgGradient = document.querySelector(".bcg_img_gradient");
            let bcgImgBdrBound = 0;
            let bcgImgBdrHeight = 0;
            let bcgImgBdrHalf = 0;
            let bcgImgBdr3Qarts = 0;
            let bcgImgBdr3QartsH = 0;
            let openQuickAtnModalBdr = document.querySelector(".open_quickAtnModalBdr");
            let quickAtnModalBdr = document.querySelector(".quickAtnModalBdr");
            let likeBtnBox = document.querySelector(".like_buttonsBox");
            let likeTheEp = document.querySelector(".add_to_LikedShowsBox");
            let dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
            let showHeaderName = document.querySelector("#show_Header_Name");
            let watchTrailerBox = document.querySelector('.watchTrailer_box');
            let dwldSsnBtn = document.querySelectorAll(".ssn_dwld_btn");
            let markSsnAsWatched = document.querySelectorAll(".ssn_markAsWatched_btn");
            let ctntNavBtns = document.querySelectorAll(".ctnt-tab-headerOpt");
            let ctntSectTabs = document.querySelectorAll(".sect-tab");
            let seasonHeaderBox = document.querySelector(".seasons_headerBox");
            let seasonHeaderText = document.querySelector(".seasons_headerText");
            let seasonSelectorBdr = document.querySelector(".seasons_selectorBdr");
            let seasonSelectorBox = document.querySelector(".seasons_selectorBox");
            let seasonSelector = document.querySelectorAll(".seasons_selector");
            let sortEPbtn = document.querySelectorAll('.episode_orderBtn');
            let epSearchField = document.querySelectorAll(".episode_searchFieldClass");
            let seasonSub;
            let seasonSet;

    
        // Reattaching listeners
        
            attachGenMenuModalEventListeners();
            attachAddToCLEventListeners();
            attachSharePageEventListeners();


        // POSITIONING THE CONTENT

            function checkBcgImgBdrBounds()
            {
                bcgImgBdrBound = bcgImgBdr.getBoundingClientRect();
                bcgImgBdrHeight = Math.round(bcgImgBdrBound.height);
                bcgImgBdrHalf = Math.round(bcgImgBdrHeight/2);
                bcgImgBdr3Qarts = bcgImgBdrHeight + bcgImgBdrHalf;
                bcgImgBdr3QartsH = bcgImgBdrHeight + bcgImgBdrHalf + 10;

                bcgImgBox.setAttribute("style", `--ImgHeight:${bcgImgBdr3Qarts}px`);
                bcgImgGradient.setAttribute("style", `--ImgHeight:${bcgImgBdr3QartsH}px`);

                if(seasonSelectorBdr?.classList.contains("active"))
                {
                    if(window.innerWidth <= 768)
                    {
                        documentBody.classList.add("bodystop");
                        return;
                    }
                    documentBody.classList.remove("bodystop");
                }
            }
            window.addEventListener("resize" , () => 
            {
                checkBcgImgBdrBounds();
            });
            checkBcgImgBdrBounds();



        // QUICK ACTIONS

            // Open Quick Actions Box
            openQuickAtnModalBdr.addEventListener("click" , () => 
            {
                quickAtnModalBdr.classList.toggle("active");
            });

            // Closing the Quick Actions Box
            document.addEventListener("click" , e => 
            {
                // Close the Scores Action Box
                if((
                    (openQuickAtnModalBdr.matches(":hover")) 
                    // || (quickAtnModalBdr.matches(":hover"))
                ))
                {
                    return;
                }
                quickAtnModalBdr.classList.remove("active");
            });



        // RATE THE SHOW

            // Getting Rate status on load
            let initRateLike = selectedProfile.prof_likes.filter(item => item.ls_item === info_pg_show_link);
            let initRateDislike = selectedProfile.prof_dislikes.filter(item => item.ds_item === info_pg_show_link);

            if(initRateLike.length > 0)
            {
                likeBtnBox.setAttribute(`like-status` , `yes`);
                likeBtnBox.querySelector(".btmText").textContent = "Rated";
                likeTheEp.classList.add("selected");
            }
            else if(initRateDislike.length > 0)
            {
                likeBtnBox.setAttribute(`like-status` , `no`);
                likeBtnBox.querySelector(".btmText").textContent = "Rated";
                dontLikeTheEp.classList.add("selected");
            }

            // Like the show
            likeTheEp.addEventListener("click" , async () => 
            {
                let selectedProfile = await getSelectedProfile();

                if(likeTheEp.classList.contains("selected"))
                {
                    // Remove from the likes array
                    selectedProfile.prof_likes = selectedProfile.prof_likes.filter(item => item.ls_item !== info_pg_show_link);
                    
                    // Update user data
                    await updUsrProfFlds(
                    {
                        prof_likes: selectedProfile.prof_likes
                    });

                    // Remove "selected" class from the like button
                    likeTheEp.classList.remove("selected");

                    // Update button Icon & text
                    likeBtnBox.setAttribute(`like-status` , `dflt`);
                    likeBtnBox.querySelector(".btmText").textContent = "Rate";
                }
                else
                {
                    // Remove from the disliked shows if present there
                    if(dontLikeTheEp.classList.contains("selected"))
                    {
                        // Remove item from the dislikes array
                        selectedProfile.prof_dislikes = selectedProfile.prof_dislikes.filter(item => item.ds_item !== info_pg_show_link);

                        // Remove "selected" class from the dislike button
                        dontLikeTheEp.classList.remove("selected");
                    }

                    // Add item to the likes array
                    selectedProfile.prof_likes.push(
                        {
                            ls_item: `${info_pg_show_link}`,
                        }
                    );

                    // Update user data
                    await updUsrProfFlds(
                    {
                        prof_likes: selectedProfile.prof_likes,
                        prof_dislikes: selectedProfile.prof_dislikes
                    });

                    // Add "selected" class to the like button
                    likeTheEp.classList.add("selected");

                    // Update button Icon & text
                    likeBtnBox.setAttribute(`like-status` , `yes`);
                    likeBtnBox.querySelector(".btmText").textContent = "Rated";
                }
            });
            
            // Dislike the show
            dontLikeTheEp.addEventListener("click" , async () => 
            {
                let selectedProfile = await getSelectedProfile();

                if(dontLikeTheEp.classList.contains("selected"))
                {
                    // Remove from the dislikes array
                    selectedProfile.prof_dislikes = selectedProfile.prof_dislikes.filter(item => item.ds_item !== info_pg_show_link);

                    // Update user data
                    await updUsrProfFlds(
                    {
                        prof_dislikes: selectedProfile.prof_dislikes
                    });

                    // Remove "selected" class from the like button
                    dontLikeTheEp.classList.remove("selected");

                    // Update button Icon & text
                    likeBtnBox.setAttribute(`like-status` , `dflt`);
                    likeBtnBox.querySelector(".btmText").textContent = "Rate";
                }
                else
                {
                    // Remove from the liked shows if present there
                    if(likeTheEp.classList.contains("selected"))
                    {
                        // Remove item from the likes array
                        selectedProfile.prof_likes = selectedProfile.prof_likes.filter(item => item.ls_item !== info_pg_show_link);

                        // Remove "selected" class from the like button
                        likeTheEp.classList.remove("selected");
                    }

                    // Add item to the likes array
                    selectedProfile.prof_dislikes.push(
                        {
                            ds_item: `${info_pg_show_link}`,
                        }
                    );

                    // Update user data
                    await updUsrProfFlds(
                    {
                        prof_likes: selectedProfile.prof_likes,
                        prof_dislikes: selectedProfile.prof_dislikes
                    });

                    // Add "selected" class to the like button
                    dontLikeTheEp.classList.add("selected");

                    // Update button Icon & text
                    likeBtnBox.setAttribute(`like-status` , `no`);
                    likeBtnBox.querySelector(".btmText").textContent = "Rated";
                }
            });



        // WATCHLIST

            // Toggle the state if show in watchlist
            let initShowinWL = selectedProfile.prof_watchlist.filter(item => item.wl_item === info_pg_show_link);

            if((initShowinWL.length > 0))
            {
                document.querySelectorAll(".wl_show_page").forEach((btn) => 
                {
                    btn.querySelector(".wlIconSvg.wlIconOUT").classList.add("hide");
                    btn.querySelector(".wlIconSvg.wlIconIN").classList.remove("hide");
                });
            }



        // WATCH TRAILER

            // Setting the title of the button
            watchTrailerBox.title = "Watch " + showHeaderName.textContent + " trailer";

            // Handling the rendering of thr trailer elements
            watchTrailerBox.addEventListener("click" , () => 
            {
                const src = watchTrailerBox.getAttribute("src");
                initShowMediaVid(src, watchTrailerBox?.title);
            });


        // NAVIGATING THE CONTENT TABS

            ctntNavBtns.forEach((thisBtn, i) => 
            {
                const navTab = () => 
                {
                    ctntNavBtns.forEach((othBtn) => 
                    {
                        if((othBtn.classList.contains("selected")))
                        {
                            othBtn.classList.remove("selected");
                        }
                    });
                    ctntSectTabs.forEach((oldTab) => 
                    {
                        if((oldTab.classList.contains("selected")))
                        {
                            oldTab.classList.remove("selected");
                        }
                    });
                    thisBtn.classList.add("selected");
                    ctntSectTabs[i].classList.add("selected");
                }
                thisBtn.addEventListener("click" , navTab);
            });

        

        // WATCH NOW

            // Inits the watch now button
            updInfoPageCTA();



        // ***** RETURN ******
        
            // if NO Episodes Present
            if((seasonSelector.length === 0))
            {
                if((info_pg_show_type === "tv"))
                {
                    document.querySelector(".watchShowNowBtn")?.addEventListener("click" , () => 
                    {
                        notification(`notifyBad` , `Episode not available`);
                    });
                }
                return;
            }



        // DOWNLOAD

            // Downloads show
            dwldSsnBtn.forEach((btn) => 
            {
                btn.addEventListener("click" , dwldShowSsn);
            });



        // MARK AS WATCHED

            // Mark entire season as watched
            markSsnAsWatched.forEach((btn) => 
            {
                const mark_atn = async () => 
                {
                    let selectedProfile = await getSelectedProfile();
                    let currSsnNo = 1 + Number(document.querySelector(".seasons_selector.active").getAttribute("data-index"));
                    let currSsnLength = Number(document.querySelector(".seasons_selector.active").getAttribute("data-ep-length"));
                    let show_type = `${info_pg_show_type.toLowerCase()}`;
                    let show_id = `${info_pg_show_link.split('/')[2]}`;

                    // Get all current season items from history
                    let hist_item = selectedProfile.prof_history.filter(item => 
                        item.hist_link.split('/')[2] === info_pg_show_link.split('/')[2]
                        && Number(item.hist_link.split('/')[4]) == currSsnNo
                    );

                    // Only Replace if entire season hasn't been marked as watched
                    if(hist_item.length != currSsnLength)
                    {
                        // Remove the old entry if any
                        if(hist_item.length > 0)
                        {
                            selectedProfile.prof_history = selectedProfile.prof_history.filter(item => 
                                !(item.hist_link.split('/')[2] === info_pg_show_link.split('/')[2]
                                && Number(item.hist_link.split('/')[4]) === currSsnNo)
                            );
                        }
    
                        // Add the updated entries
                        for(let i = 0; i < currSsnLength; i++)
                        {
                            selectedProfile.prof_history.push(
                                {
                                    hist_link: `#/${show_type}/${show_id}/watch/${currSsnNo}/${(i+1)}`,
                                    hist_currTime: `${sample_ep_duration}`, // Random value as no shows are streamed
                                    hist_totalTime: `${sample_ep_duration}`, // Random value as no shows are streamed
                                }
                            );
                        }

                        // Update user data
                        await updUsrProfFlds(
                        {
                            prof_history: selectedProfile.prof_history
                        });
                    }

                    // Notify the user
                    notification(`notifyGood` , `Season marked as watched`);
                }

                btn.addEventListener("click", mark_atn);
            });



        // SEASON SELECTOR

            seasonSub = document.querySelector('.show-sub');
            seasonSet = document.querySelector('.showset');

            // Open season selector
            seasonHeaderBox.addEventListener("click" , () => 
            {
                seasonSelectorBdr.classList.toggle("active");

                if(window.innerWidth <= 768)
                {
                    documentBody.classList.add("bodystop");
                }
            });
            
            // Select season
            seasonSelector.forEach((selector, ssn_no) => 
            {
                let seasonSelectorMain = selector.querySelector(".selectorMain");
                let epLengthNo = Number(selector.getAttribute("data-ep-length"));
                let seasonEpNo = selector.querySelector(".selectorMinor");
                let ssn_no_plus_one = Number(selector.getAttribute("data-ssn-num"));

                // Update from "episodes" to "episode" if length is one
                if(epLengthNo == 1)
                {
                    seasonEpNo.textContent = `${epLengthNo} epsisode`;
                }
                
                selector.addEventListener("click" , async () => 
                {
                    seasonHeaderBox.setAttribute(`data-current-index` , `${ssn_no}`);
                    seasonHeaderText.textContent = seasonSelectorMain.textContent;
                    seasonSub.scrollTo(0,0);
                    seasonSelector.forEach(one => 
                    { 
                        one.classList.remove("active");
                    });
                    selector.classList.add("active");
                    seasonSet.innerHTML = "";
                    epSearchField.forEach((valFld) => valFld.value = "");

                    // Update button if show is in downloads
                    let dwld_lib = await getUsrDwldInv();
                    let isShwInDL = dwld_lib?.filter(item => 
                        item?.dl_link?.trim()?.toLowerCase() === info_pg_show_link?.trim()?.toLowerCase()
                        && item?.dl_ssn == ssn_no_plus_one
                        && item?.dl_eps?.length == epLengthNo
                    );

                    if(isShwInDL?.length > 0)
                    {
                        dwldSsnBtn.forEach((btn) => 
                        {
                            btn.innerHTML = dwldSsn_isInDLBtnStruct;
                            btn.disabled = true;
                            btn.removeEventListener("click", dwldShowSsn);
                        });
                    }
                    else
                    {
                        dwldSsnBtn.forEach((btn) => 
                        {
                            btn.innerHTML = dwldSsn_notInDLBtnStruct;
                            btn.disabled = false;
                            btn.addEventListener("click", dwldShowSsn);
                        });
                    }

                    // Generate the first "epSetLength" episodes
                    if((epLengthNo > epSetLength))
                    {
                        generateShowEpCards(ssn_no_plus_one, 1, epSetLength);
                        
                        document.querySelectorAll(".episode_setBdr").forEach((bdr) => 
                        {
                            // Update the content
                            bdr.querySelector(".episode_setText").textContent = `1 - ${epSetLength}`;
    
                            // Display the bdr
                            bdr.classList.add("active");

                            // Update set start and end 
                            bdr.setAttribute(`data-ep-set-start` , `1`);
                            bdr.setAttribute(`data-ep-set-end` , `${epSetLength}`);
                        });
                    }
                    else
                    {
                        // Generate ALL episodes if less than epSetLength
                        generateShowEpCards(ssn_no_plus_one, 1, epLengthNo);
                        
                        document.querySelectorAll(".episode_setBdr").forEach((bdr) => 
                        {
                            // Update the content
                            bdr.querySelector(".episode_setText").textContent = `N/A`;
    
                            // Hide the bdr
                            bdr.classList.remove("active");

                            // Update set start and end 
                            bdr.removeAttribute(`data-ep-set-start`);
                            bdr.removeAttribute(`data-ep-set-end`);
                        });
                    }

                    seasonSelectorBdr.classList.remove("active");
                    documentBody.classList.remove("bodystop");
                });

                // Initialize after first load
                if((ssn_no == 0)) document.querySelectorAll(".seasons_selector")[ssn_no].click();
            });

            // Closing the Season Selector
            document.addEventListener("click" , e => 
            {
                if((seasonSelectorBdr.classList.contains("active")))
                {
                    // Close season selector
                    if((seasonHeaderBox.matches(":hover") || seasonSelectorBox.matches(":hover")))
                    {
                        return;
                    }
                    seasonSelectorBdr.classList.remove("active");
                    documentBody.classList.remove("bodystop");
                }
            });


        // SEARCHING FOR AN EPISODE

            epSearchField.forEach((field) => 
            {
                // Only numbers allowed as input
                field.addEventListener("beforeinput", (e) => 
                {
                    if((e.data !== null) && !(/^\d*$/.test(e.data)))
                    {
                        e.preventDefault();
                    }
                });

                // Filter episodes
                field.addEventListener("input", (e) => 
                {
                    let feildVal = field.value.toString().trim();
                    let ssn_curr_index = Number(seasonHeaderBox.getAttribute("data-current-index"));
                    let ep_curr_length = Number(seasonSelector[ssn_curr_index].getAttribute("data-ep-length"))

                    // Clear previous results
                    seasonSet.innerHTML = "";

                    // Update all feilds' value
                    epSearchField.forEach((valFld) => valFld.value = feildVal);

                    // Generate season list if feild empty
                    if(feildVal === "")
                    {
                        if(ep_curr_length > epSetLength)
                        {
                            // Generates the first "epSetLength" episodes of that season
                            generateShowEpCards(
                                (ssn_curr_index + 1),
                                Number(document.querySelector(".episode_setBdr").getAttribute(`data-ep-set-start`)),
                                Number(document.querySelector(".episode_setBdr").getAttribute(`data-ep-set-end`))
                            );
                        }
                        else
                        {
                            // Generates the episodes of that season
                            generateShowEpCards((ssn_curr_index + 1), 1, ep_curr_length);
                        }

                        // Scroll back to top of list
                        seasonSub.scrollTo(0,0);
                    }
                    else
                    {
                        // Generate cards for episodes that match input
                        for(let i = 1; i <= ep_curr_length; i++)
                        {
                            if(i.toString().includes(feildVal))
                            {
                                generateShowEpCards((ssn_curr_index + 1), i, i);
                            }
                        }
                    }
                });

                field.addEventListener("keydown", (e) => 
                {
                    if((typeof e !== "undefined") && (typeof e.key !== "undefined") && (e.key.toLowerCase() === "enter"))
                    {
                        field.blur();
                    }
                });
            });
            
            
        // SORTING THE EPISODES

            function sortEpisodesFunc() 
            {
                const containerParent = document.querySelector('.show-sub.showsub-atv');
                const container = containerParent.querySelector('.showset');
                const items = Array.from(container.querySelectorAll('.ep_cardBdr'));

                // Hide the Episodes
                seasonSub.classList.replace("showsub-atv" , "showsub-inatv");
                
                // Reverse the array of items
                const reversedItems = items.reverse();
                
                // Remove existing elements from the DOM
                items.forEach(item => container.removeChild(item));
                
                // Append reversed elements back to the container
                reversedItems.forEach(item => container.appendChild(item));

                // Scroll back to top of the episode list
                containerParent.scrollTo(0,0);

                // Display the Episodes
                seasonSub.classList.replace("showsub-inatv" , "showsub-atv");

            }

            sortEPbtn.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    sortEpisodesFunc();

                    // Update the sort text
                    if(btn.title == "Sort by latest episodes")
                    {
                        btn.title = "Sort by oldest episodes";
                        return;
                    }
                    btn.title = "Sort by latest episodes";
                });
            });
    }


    // Gets the show's main trailer
    function getShowMainTrailer(vids)
    {
        return (
            vids?.results.find(
                v =>
                    v.type === "Trailer" &&
                    v.site === "YouTube" &&
                    v.official === true
            ) ||
            vids?.results.find(
                v => v.type === "Trailer" && v.site === "YouTube"
            ) || null
        );
    }


    // Setting the Primary CTA button
    async function updInfoPageCTA()
    {
        const watchNowBtn = document.querySelector(".watchShowNowBtn");
        const selectedProfile = await getSelectedProfile();

        // Update the button if user has started watching the show
        const wn_hist = selectedProfile?.prof_history?.filter(item => 
            item?.hist_link?.split('/')[2] === info_pg_show_link?.split('/')[2]
        );

        if((wn_hist.length > 0))
        {
            let wn_hist_link = wn_hist[(wn_hist?.length - 1)]?.hist_link?.split('/');

            watchNowBtn.querySelector(".genBtnText").textContent = 
            info_pg_show_type?.toLowerCase() === "tv" 
                ? `Continue S${wn_hist_link[4]} E${wn_hist_link[5]}`
                : `Continue`;
        }

        // Open the most recent episode
        watchNowBtn.disabled = false;
        watchNowBtn.onclick = async () =>
        {
            watchNowBtn.disabled = true;
            let thisProf = await getSelectedProfile();

            // Get the most recent addition to watch history for that show
            let watchNowItem = thisProf.prof_history.filter(item => 
                item.hist_link.split('/')[2] === info_pg_show_link.split('/')[2]
            );

            if(watchNowItem.length > 0)
            {
                // Open if it exists
                preWatchPage(watchNowItem[(watchNowItem.length - 1)]?.hist_link);
            }
            else
            {
                // Open the first episode of the first show
                (info_pg_show_type == "tv")
                    ? document.querySelector('.showset')?.querySelectorAll(".ep_cardBdr .ep_cardCtntBdr")[0]?.click()
                    : preWatchPage(`${info_pg_show_link}/watch`);

            }
        };
    }


    // Fetch and insert Recommended shows
    function insertMoreShowsToWatch()
    {
        try
        {
            if(!(showsStructData?.recommendations) || (showsStructData?.recommendations?.results <= 0)) return;

            let struct = ``;
            let InfoPgBase = document.querySelector(".info_pg_base");
            InfoPgBase.insertAdjacentHTML(`afterend` , moreShowsToWatchStruct);
            let rmdArr = showsStructData?.recommendations?.results.filter(fltrFetchedShows);
            let moreShowsSliderCardBox = document.querySelector(".moreShows_slider_base .basic_slider_card_box");
            
            rmdArr.forEach((item) => 
            {
                let {
                    show_link = `#/${item?.media_type.toLowerCase()}/${item?.id}`,
                    show_foreground = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                    show_title = `${item?.name || item?.title || "N/A"}`,
                    show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                    show_type = `${item?.media_type.toUpperCase()}`,
                } = item;

                struct += 
                `
                    <div class="slide_card_base basic_carousel_card">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${show_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                            >
                                        </div>
                                    </div>
                                    <div class="cardInfoBdr">
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
            moreShowsSliderCardBox.insertAdjacentHTML(`beforeend` , struct);
            
            // Display the carousel
            let moreShowsSliderBase = document.querySelector(".moreShows_slider_base");
            moreShowsSliderBase.classList.add("has_loaded");
            basicSlider();
        }
        catch(err)
        {
            console.error(err);
            let moreShowsSliderBase = document.querySelector(".moreShows_slider_base");
            moreShowsSliderBase?.remove();
            notification(`notifyBad` , `Failed to load recommended shows`);
        }
    }


    // Retrieves and builds the carousel for the show's extra details
    async function preInsertShowMediaCtnt()
    {
        const prsnAll = `https://www.imdb.com/title/${showsStructData?.external_ids?.imdb_id}/fullcredits`;

        // Insert cast
        const castSets = showsStructData?.credits?.cast || [];

        if((castSets.length > 0))
        {
            let struct = ``;
            
            // Display a limited no. of persons if greater than limit
            if((castSets.length > prsnLmt))
            {
                for(let c = 0; c < prsnLmt; c++)
                {
                    const cast = castSets[c];
                    let img = cast?.profile_path == null
                        ? `/images/uvid-profile-base.png` 
                        : `https://image.tmdb.org/t/p/original/${cast?.profile_path}`;
                    struct += 
                    `
                        <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-person" data-prsn-id="${cast?.id}">
                            <div class="sect-crsl-card-box">
                                <div class="sect-crsl-img-base">
                                    <div class="sect-crsl-img-bdr">
                                        <div class="sect-crsl-img-box">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="${img}" alt="poster image" class="sect-crsl-img-src"
                                                >
                                            </div>
                                        </div>
                                        <div class="sect-crsl-prsn-bdr">
                                            <div class="sect-crsl-prsn-box">
                                                <div class="sect-crsl-prsn-mjr-box">
                                                    <p class="sect-crsl-prsn-mjr-txt">${cast?.name}</p>
                                                </div>
                                                <div class="sect-crsl-prsn-mnr-box">
                                                    <p class="sect-crsl-prsn-mnr-txt">${cast?.character}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // Add option to view more
                struct +=
                `
                    <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-view" data-view-type="cast">
                        <div class="sect-crsl-card-box">
                            <div class="sect-crsl-ntc-bdr">
                                <div class="sect-crsl-ntc-box">
                                    <p class="sect-crsl-ntc-txt">+${castSets.length - prsnLmt} more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            // Display all persons if not greater than limit
            else
            {
                castSets.forEach((cast) => 
                {
                    let img = cast?.profile_path == null
                        ? `/images/uvid-profile-base.png` 
                        : `https://image.tmdb.org/t/p/original/${cast?.profile_path}`;
                    struct += 
                    `
                        <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-person" data-prsn-id="${cast?.id}">
                            <div class="sect-crsl-card-box">
                                <div class="sect-crsl-img-base">
                                    <div class="sect-crsl-img-bdr">
                                        <div class="sect-crsl-img-box">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="${img}" alt="poster image" class="sect-crsl-img-src"
                                                >
                                            </div>
                                        </div>
                                        <div class="sect-crsl-prsn-bdr">
                                            <div class="sect-crsl-prsn-box">
                                                <div class="sect-crsl-prsn-mjr-box">
                                                    <p class="sect-crsl-prsn-mjr-txt">${cast?.name}</p>
                                                </div>
                                                <div class="sect-crsl-prsn-mnr-box">
                                                    <p class="sect-crsl-prsn-mnr-txt">${cast?.character}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            if((struct.trim() !== "")) await initInsertShowMediaCtnt("sect-cast", "vrtl", struct);
        }

        // Insert crew
        const crewSets = showsStructData?.credits?.crew || [];

        if((crewSets.length > 0))
        {
            let struct = ``;
            
            // Display a limited no. of persons if greater than limit
            if((crewSets.length > prsnLmt))
            {
                for(let c = 0; c < prsnLmt; c++)
                {
                    const crew = crewSets[c];
                    let img = crew?.profile_path == null
                        ? `/images/uvid-profile-base.png` 
                        : `https://image.tmdb.org/t/p/original/${crew?.profile_path}`;
                    struct += 
                    `
                        <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-person" data-prsn-id="${crew?.id}">
                            <div class="sect-crsl-card-box">
                                <div class="sect-crsl-img-base">
                                    <div class="sect-crsl-img-bdr">
                                        <div class="sect-crsl-img-box">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="${img}" alt="poster image" class="sect-crsl-img-src"
                                                >
                                            </div>
                                        </div>
                                        <div class="sect-crsl-prsn-bdr">
                                            <div class="sect-crsl-prsn-box">
                                                <div class="sect-crsl-prsn-mjr-box">
                                                    <p class="sect-crsl-prsn-mjr-txt">${crew?.name}</p>
                                                </div>
                                                <div class="sect-crsl-prsn-mnr-box">
                                                    <p class="sect-crsl-prsn-mnr-txt">${crew?.department}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // Add option to view more
                struct +=
                `
                    <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-view" data-view-type="crew">
                        <div class="sect-crsl-card-box">
                            <div class="sect-crsl-ntc-bdr">
                                <div class="sect-crsl-ntc-box">
                                    <p class="sect-crsl-ntc-txt">+${crewSets.length - prsnLmt} more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            // Display all persons if not greater than limit
            else
            {
                crewSets.forEach((crew) => 
                {
                    let img = crew?.profile_path == null
                        ? `/images/uvid-profile-base.png` 
                        : `https://image.tmdb.org/t/p/original/${crew?.profile_path}`;
                    struct += 
                    `
                        <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-person" data-prsn-id="${crew?.id}">
                            <div class="sect-crsl-card-box">
                                <div class="sect-crsl-img-base">
                                    <div class="sect-crsl-img-bdr">
                                        <div class="sect-crsl-img-box">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="${img}" alt="poster image" class="sect-crsl-img-src"
                                                >
                                            </div>
                                        </div>
                                        <div class="sect-crsl-prsn-bdr">
                                            <div class="sect-crsl-prsn-box">
                                                <div class="sect-crsl-prsn-mjr-box">
                                                    <p class="sect-crsl-prsn-mjr-txt">${crew?.name}</p>
                                                </div>
                                                <div class="sect-crsl-prsn-mnr-box">
                                                    <p class="sect-crsl-prsn-mnr-txt">${crew?.department}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            if((struct.trim() !== "")) await initInsertShowMediaCtnt("sect-crew", "vrtl", struct);
        }

        // Insert clips and trailers (YoutTube only)
        const videoSets = showsStructData?.videos?.results || [];

        if((videoSets.length > 0))
        {
            let struct = ``;
            videoSets.forEach((video) => 
            {
                if((video?.site?.trim()?.toLowerCase() === "youtube"))
                {
                    struct += 
                    `
                        <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-videos" data-vid-yt="${video?.key}" data-vid-name="${video?.name}">
                            <div class="sect-crsl-card-box">
                                <div class="sect-crsl-img-base">
                                    <div class="sect-crsl-img-bdr">
                                        <div class="sect-crsl-img-box">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="https://i.ytimg.com/vi/${video?.key}/hqdefault.jpg" alt="${video?.name} image" class="sect-crsl-img-src"
                                                >
                                            </div>
                                        </div>
                                        <div class="sect-crsl-icon-bdr">
                                            <div class="sect-crsl-icon-box">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sect-crsl-icon-svg">
                                                    <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
            if((struct.trim() !== "")) await initInsertShowMediaCtnt("sect-videos", "hrtl", struct);
        }

        // Insert backdrops
        const backdropSets = showsStructData?.images?.backdrops || [];

        if((backdropSets.length > 0))
        {
            let struct = ``;
            backdropSets.forEach((backdrop) => 
            {
                struct += 
                `
                    <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-backdrops">
                        <div class="sect-crsl-card-box">
                            <div class="sect-crsl-img-base">
                                <div class="sect-crsl-img-bdr">
                                    <div class="sect-crsl-img-box">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="https://image.tmdb.org/t/p/original/${backdrop?.file_path}" alt="poster image" class="sect-crsl-img-src"
                                            >
                                        </div>
                                    </div>
                                    <div class="sect-crsl-icon-bdr">
                                        <div class="sect-crsl-icon-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sect-crsl-icon-svg">
                                                <path d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            if((struct.trim() !== "")) await initInsertShowMediaCtnt("sect-backdrops", "hrtl", struct);
        }

        // Insert posters
        const posterSets = showsStructData?.images?.posters || [];

        if((posterSets.length > 0))
        {
            let struct = ``;
            posterSets.forEach((poster) => 
            {
                struct += 
                `
                    <div class="sect-crsl-card-bdr basic_carousel_card" data-sect-type="sect-posters">
                        <div class="sect-crsl-card-box">
                            <div class="sect-crsl-img-base">
                                <div class="sect-crsl-img-bdr">
                                    <div class="sect-crsl-img-box">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="https://image.tmdb.org/t/p/original/${poster?.file_path}" alt="poster image" class="sect-crsl-img-src"
                                            >
                                        </div>
                                    </div>
                                    <div class="sect-crsl-icon-bdr">
                                        <div class="sect-crsl-icon-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sect-crsl-icon-svg">
                                                <path d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            if((struct.trim() !== "")) await initInsertShowMediaCtnt("sect-posters", "vrtl", struct);
        }
    }

    async function initInsertShowMediaCtnt(loc = "",  orientation = "", struct = "")
    {
        // Build up the carousel
        const crslBase = document.createElement("div");
        crslBase.className = `sect-crsl-base basic_carousel`;
        crslBase.innerHTML = 
        `
            <div class="sect-crsl-bdr">
                <div class="sect-crsl-arr-bdr sect-crsl-arr-left arr_left">
                    <div class="sect-crsl-arr-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sect-crsl-arr-icon">
                            <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="sect-crsl-arr-bdr sect-crsl-arr-right arr_right">
                    <div class="sect-crsl-arr-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sect-crsl-arr-icon">
                            <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="sect-crsl-box">
                    <div class="sect-crsl-grid ${orientation} basic_carousel_slider">${struct}</div>
                </div>
            </div>
        `;

        // Remove the empty status  
        const sectElem = document.querySelector(`.${loc}`);
        sectElem?.querySelector(".sect-coming-soon-bdr")?.remove();

        // Insert the carousel
        sectElem?.insertAdjacentElement("beforeend", crslBase);

        // Re-initialize slider functionalities
        basicSlider();
        attachShowSectEvListenters();
    }

    function attachShowSectEvListenters()
    {
        const sect_cards = document.querySelectorAll(".sect-crsl-card-bdr");

        sect_cards.forEach((oldCard) => 
        {
            if((oldCard.card_atn)) oldCard.removeEventListener("click", oldCard.card_atn);
        });

        sect_cards.forEach((newCard) => 
        {
            const new_cd_atn = (e) => 
            {
                // Return if user is dragging
                if(isBasicSliderDragging)
                {
                    e.preventDefault();
                    return;
                }

                // Get the type of sector
                const sectType = newCard.getAttribute("data-sect-type").trim().toLowerCase() || "";

                if((sectType === "sect-posters") || (sectType === "sect-backdrops"))
                {
                    const imgBase = newCard.querySelector(".sect-crsl-img-base");
                    if(imgBase?.classList.contains("max"))
                    {
                        imgBase?.classList.add("min");

                        imgBase?.querySelector(".sect-crsl-img-box")?.addEventListener("animationend", function handleTransitionEnd()
                        {
                            imgBase?.querySelector(".sect-crsl-img-box")?.removeEventListener("animationend", handleTransitionEnd);
                            imgBase?.classList.remove("max", "min");
                        });
                    }
                    else
                    {
                        imgBase?.classList.add('max');
                    }
                }
                else if((sectType === "sect-videos"))
                {
                    const vidYt = newCard.getAttribute("data-vid-yt") || "";
                    const vidNm = newCard.getAttribute("data-vid-name") || "";

                    if((vidYt !== ""))
                    {
                        initShowMediaVid(`https://www.youtube.com/embed/${vidYt}`, vidNm);
                    }
                    else
                    {
                        console.error(`Yt Id: '${vidYt}' is inavlid`);
                        notification(`notifyBad`, `Trailer unavailable`);
                    }
                }
                else if((sectType === "sect-person"))
                {
                    const prsnId = newCard.getAttribute("data-prsn-id")?.toLowerCase() || "";
                    const prsnNm = newCard.querySelector(".sect-crsl-prsn-mjr-txt")?.textContent;
                    
                    if((prsnId !== ""))
                    {
                        window.open(`#/person/${prsnId}`, `_self`);
                    }
                    else
                    {
                        console.error(`Id: '${prsnId}' is inavlid`);
                        notification(`notifyBad`, `No details on '${prsnNm}' was found`);
                    }
                }
                else if((sectType === "sect-view"))
                {
                    const vType = newCard.getAttribute("data-view-type") || "";

                    if((vType !== ""))
                    {
                        dispMoreShowStaff(vType);
                    }
                    else
                    {
                        console.error(`No available links`);
                        notification(`notifyBad`, `Details unavailable at this time`);
                    }
                }
                else
                {
                    console.warn(`The sect type: '${sectType}' is invalid`);
                }
            }

            newCard.addEventListener("click", new_cd_atn);
            newCard.card_atn = new_cd_atn;
        });
    }

    function dispMoreShowStaff(type = "cast")
    {
        const infoMoreStaffBdr = document.createElement("div");
        infoMoreStaffBdr.className = "info_more_staff_bdr";
        infoMoreStaffBdr.innerHTML = 
        `
            <div class="info_more_staff_box">
                <div class="info_more_staff_ctnt_bdr">
                    <div class="info_more_staff_ctnt_box">
                        <div class="info_more_staff_nav_bdr">
                            <div class="info_more_staff_nav_box">
                                <div class="info_more_staff_nav_ttl_box">
                                    <div class="info_more_staff_nav_ttl_txt">${(type !== "cast") ? "Crew" : "Cast"}</div>
                                </div>
                                <button type="button" class="genBtnBox genIconBtn transBtn info_more_staff_cls_btn" title="Close the modal">
                                    <div class="genBtnIcon">
                                        <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genBtnSvg">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="info_more_staff_rslt_bdr">
                            <div class="info_more_staff_rslt_box">
                                <div class="info_more_staff_rslt_grid"></div>
                            </div>
                        </div>
                        <div class="info_more_staff_pgn_bdr">
                            <div class="info_more_staff_pgn_box">
                                <button type="button" class="genBtnBox genIconBtn greySolidBtn info_more_staff_pgn_btn info_more_staff_pgn_prev" title="Go to the previous page">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                                <div class="info_more_staff_pgn_num_box">
                                    <p class="info_more_staff_pgn_num_txt"></p>
                                </div>
                                <button type="button" class="genBtnBox genIconBtn greySolidBtn info_more_staff_pgn_btn info_more_staff_pgn_next" title="Go to the next page">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const selStaffArr = (type !== "cast") ? showsStructData?.credits?.crew : showsStructData?.credits?.cast;
        const staffPClsBtn = infoMoreStaffBdr.querySelector(".info_more_staff_cls_btn");
        const staffPrevBtn = infoMoreStaffBdr.querySelector(".info_more_staff_pgn_prev");
        const staffNextBtn = infoMoreStaffBdr.querySelector(".info_more_staff_pgn_next");
        const selStaffLen = selStaffArr?.length;
        let staffRsltStruct = ``;
        let staffLimit = prsnLmt;
        let currStaffPg = 0;
        let ttlStaffPg = (Math.floor(selStaffLen / staffLimit));
        let rmdStaffPg = selStaffLen % staffLimit;

        // Closes the modal
        const clsMoreStaffMdl = () =>
        {
            infoMoreStaffBdr.classList.remove("active");
            infoMoreStaffBdr.addEventListener("transitionend", function handleTransitionEnd()
            {
                infoMoreStaffBdr.removeEventListener("transitionend", handleTransitionEnd);
                infoMoreStaffBdr.remove();
                documentBody.classList.remove("bodystop");
            });
        }

        staffPClsBtn.onclick = () => clsMoreStaffMdl();


        // Generates the pages of staff
        const genStaffPg = (page) => 
        {
            staffRsltStruct = "";
            const startStaffGen = (page < (ttlStaffPg)) ? (staffLimit * page) : (selStaffArr?.length - rmdStaffPg);
            const endStaffGen = (page < (ttlStaffPg)) ? ((staffLimit * page) + staffLimit) : selStaffArr?.length;
            
            for(let i = startStaffGen; i < endStaffGen; i++)
            {
                let item = selStaffArr[i];
                let imgSrc = (type !== "cast")
                    ? (item?.profile_path == null)
                        ? `/images/uvid-profile-base.png` 
                        : `https://image.tmdb.org/t/p/original/${item?.profile_path}`
                    : (item?.profile_path == null)
                        ? `/images/uvid-profile-base.png` 
                        : `https://image.tmdb.org/t/p/original/${item?.profile_path}`

                staffRsltStruct += (type !== "cast")
                    ?   `
                            <div class="info_more_staff_rslt_card_bdr" onclick="window.open('#/person/${item?.id}', '_self')">
                                <div class="info_more_staff_rslt_card_box">
                                    <div class="info_more_staff_rslt_card_imgBdr">
                                        <div class="info_more_staff_rslt_card_imgBox">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="${imgSrc}" alt="Thumbnail image of ${item?.name}" class="info_more_staff_rslt_card_imgSrc"
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info_more_staff_rslt_card_det_bdr">
                                        <div class="info_more_staff_rslt_card_det_box">
                                            <div class="info_more_staff_rslt_card_mjr_box">
                                                <p class="info_more_staff_rslt_card_mjr_txt">${item?.name}</p>
                                            </div>
                                            <div class="info_more_staff_rslt_card_mnr_box">
                                                <p class="info_more_staff_rslt_card_mnr_txt">${item?.department}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    :   `
                            <div class="info_more_staff_rslt_card_bdr" onclick="window.open('#/person/${item?.id}', '_self')">
                                <div class="info_more_staff_rslt_card_box">
                                    <div class="info_more_staff_rslt_card_imgBdr">
                                        <div class="info_more_staff_rslt_card_imgBox">
                                            <div class="img_preload_box">
                                                <div class="img_preload_sibling"></div>
                                                <img loading="lazy" 
                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                    src="${imgSrc}" alt="Thumbnail image of ${item?.name}" class="info_more_staff_rslt_card_imgSrc"
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info_more_staff_rslt_card_det_bdr">
                                        <div class="info_more_staff_rslt_card_det_box">
                                            <div class="info_more_staff_rslt_card_mjr_box">
                                                <p class="info_more_staff_rslt_card_mjr_txt">${item?.name}</p>
                                            </div>
                                            <div class="info_more_staff_rslt_card_mnr_box">
                                                <p class="info_more_staff_rslt_card_mnr_txt">${item?.character}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
            }

            // Diplay results 
            infoMoreStaffBdr.querySelector(".info_more_staff_rslt_grid").innerHTML = staffRsltStruct;
            infoMoreStaffBdr.querySelector(".info_more_staff_ctnt_box").scrollTo(0, 0);

            // Update pagination
            currStaffPg = page;
            infoMoreStaffBdr.querySelector(".info_more_staff_pgn_num_txt").innerHTML = `<span class="num">${currStaffPg + 1}</span> of <span class="num">${ttlStaffPg + 1}</span>`;
            staffPrevBtn.disabled = currStaffPg === 0;
            staffNextBtn.disabled = currStaffPg === ttlStaffPg;
        }

        const genStaffPrev = () => genStaffPg((currStaffPg - 1));
        const genStaffNext = () => genStaffPg((currStaffPg + 1));

        staffPrevBtn.onclick = () => genStaffPrev();
        staffNextBtn.onclick = () => genStaffNext();

        documentCtnt.appendChild(infoMoreStaffBdr);
        
        setTimeout(() => 
        {
            infoMoreStaffBdr.classList.add("active");
            infoMoreStaffBdr.addEventListener("transitionend", function handleTransitionEnd()
            {
                infoMoreStaffBdr.removeEventListener("transitionend", handleTransitionEnd);
                documentBody.classList.add("bodystop");
                genStaffPg(0);
            });
        }, 100);
    }


    // Get Movie Collection if any
    async function getMovieCollection()
    {
        if((info_pg_show_type === "movie") && (showsStructData.belongs_to_collection) && (showsStructData.belongs_to_collection != null))
        {
            const show_collection = await fetchWithRetry(`https://api.themoviedb.org/3/collection/${showsStructData.belongs_to_collection.id}?api_key=${__uv_p_dev_tm_db_ap_ky}`);
            
            if(show_collection)
            {
                const cl_parts = show_collection?.parts?.filter(fltrFetchedShows) || [];

                if(cl_parts <= 0) return;

                document.querySelector(".info_pg_base")?.insertAdjacentHTML(
                    `afterend`,
                    `
                        <div class="related_shows_slider_base">
                            <div class="basic_slider_bdr basic_carousel">
                                <div class="basic_slider_title_bdr">
                                    <div class="basic_slider_title_box">
                                        <h2>
                                            <span class="big">R</span>
                                            <span class="small">elated</span>
                                        </h2>
                                        <p>${showsStructData?.belongs_to_collection?.name}</p>
                                    </div>
                                </div>
                                <div class="basic_slider_ctnt">
                                    <div class="basic_slider_box">
                                        <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="basic_slider_card_box basic_carousel_slider basic_homepage_slider_card_box">
                                            ${
                                                cl_parts.map((item) =>
                                                {
                                                    let {
                                                        show_link = `#/movie/${item?.id}`,
                                                        show_foreground = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                                                        show_title = `${item?.name || item?.title || "N/A"}`,
                                                        show_year = `${item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                                                        show_type = `${item?.media_type.toUpperCase()}`,
                                                    } = item;
                                                    
                                                    return`
                                                        <div class="slide_card_base basic_carousel_card">
                                                            <div class="slide_card_bdr">
                                                                <div class="slide_card_box">
                                                                    <div class="slide_card">
                                                                        <a href="${show_link}" class="cardLinkCover"></a>
                                                                        <div class="cardImgBox">
                                                                            <div class="img_preload_box">
                                                                                <div class="img_preload_sibling"></div>
                                                                                <img loading="lazy" 
                                                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                                                    src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                                                                >
                                                                            </div>
                                                                        </div>
                                                                        <div class="cardInfoBdr">
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
                                                }).join("")
                                            }
                                        </div>
                                        <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div>
                    `
                );

                // Re-initialize the slider listeners
                basicSlider();
            }
        }
    }


    // Initializes a modal to watch the videos associated with a show
    function initShowMediaVid(src = null, title = "")
    {
        const trailerTitle = title !== ""
            ? title
            : document.querySelector("#show_Header_Name")?.textContent;
        const trailerSrc = src.toString().trim();

        // if source is empty or not available(N/A) notify and return
        if(((trailerSrc == undefined) || (trailerSrc == null) || (trailerSrc === "") 
            || (trailerSrc === "undefined") || (trailerSrc === "null")
            || (trailerSrc.includes("undefined")) || (trailerSrc.includes("null"))
        ))
        {
            notification(`notifyBad` , `Trailer unavailable`);
            return;
        }

        const trailerBdr = document.createElement("div");
        trailerBdr.classList.add("trailer_Bdr");
        trailerBdr.innerHTML =
        `
            <div class="trailer_Box">
                <div class="closeTrailerIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="closeTrailer closeTrailerSvg">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <iframe class="trailer_Frame" src="${trailerSrc}" title="${trailerTitle}" frameborder="0" autoplay="true" allowfullscreen></iframe>
            </div>
        `;

        documentCtnt.appendChild(trailerBdr);
        documentBody.classList.add('bodystop');

        trailerTimer = setTimeout
        (
            function()
            {
                trailerBdr.classList.add("active");

                clearTimeout(trailerTimer);

                const closeTrailer = trailerBdr.querySelector(".closeTrailer");
                closeTrailer.addEventListener("click" , () => 
                {
                    trailerBdr.remove();
                    documentBody.classList.remove('bodystop');
                });
            }
        ,100);
    }



    // Generates a menu containing the various sets of episodes of the current season
    function showEpSetsMenu()
    {
        let ssn_index = Number(document.querySelector(".seasons_headerBox").getAttribute("data-current-index"));
        document.querySelector(".genMenuModalCtntBox.showEpModalCtntBox").innerHTML = epSetArr[ssn_index].ep_set_struct;

        let showEpModalCtntBtnBox = document.querySelectorAll(".genMenuModalCtntBtnBox.showEpModalCtntBtnBox");
        showEpModalCtntBtnBox[epSelectedSet].classList.add("selected");
        setTimeout(() => 
        {
            genMenuModalBox.scrollTo(
            {
                top: (Math.ceil((showEpModalCtntBtnBox[epSelectedSet].getBoundingClientRect().top - (window.innerHeight - (genMenuModalBox.getBoundingClientRect().height * 0.80)) - 25))),
                behavior: "smooth"
            });
        }, 100);
        
        showEpModalCtntBtnBox.forEach((btn, index) => 
        {
            btn.addEventListener("click" , () => 
            {
                epSelectedSet = index;
                let start = Number(btn.getAttribute("data-ep-set-start"));
                let end = Number(btn.getAttribute("data-ep-set-end"));

                // Clear any previous ep cards
                document.querySelector(".showset").innerHTML = "";

                // Update all feilds' value
                document.querySelectorAll(".episode_searchFieldClass").forEach((valFld) => valFld.value = "");

                // Generate the episodes
                generateShowEpCards((ssn_index + 1), start, end);

                // Update the episode set btns
                document.querySelectorAll(".episode_setBdr").forEach((bdr) => 
                {
                    bdr.querySelector(".episode_setText").textContent = `${start} - ${end}`;
                    bdr.setAttribute(`data-ep-set-start` , `${start}`);
                    bdr.setAttribute(`data-ep-set-end` , `${end}`);
                });
            });
        });
    }


    // Generates the episode cards
    function generateShowEpCards(ssn, start, end)
    {
        let struct = ``;
        document.querySelector(".show-sub").classList.replace("showsub-atv" , "showsub-inatv");

        for(let i = start; i <= end; i++)
        {
            struct += 
            `
                <div class="ep_cardBdr" data-ssn="${ssn}" data-ep="${i}" title="Watch episode ${i}">
                    <div class="ep_cardBox">
                        <div class="ep_cardThumbBdr">
                            <div class="ep_cardThumbBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                        src="
                                        ${
                                            (showsStructData?.backdrop_path)
                                            ? `https://image.tmdb.org/t/p/original/${showsStructData?.backdrop_path}`
                                            : info_pg_dflt_bcg
                                        }" 
                                        alt="Thumbnail image of Episode ${i}" class="ep_cardThumbImg"
                                    >
                                </div>
                            </div>
                        </div>
                        <button type="button" onclick="preWatchPage('#/tv/${info_pg_show_id}/watch/${ssn}/${i}')" class="ep_cardCtntBdr">
                            <div class="ep_cardCtntBox">
                                <div class="ep_cardCtnt_titleBox">
                                    <p class="ep_cardCtnt_titleText">Episode ${i}</p>
                                </div>
                            </div>
                        </button>
                        <div class="ep_cardMenuBdr">
                            <div class="ep_cardMenuBox">
                                <button type="button" class="genBtnBox transBtn genIconBtn  openGenMenuModalBtn" data-gen-menu-modal-type="show_info_ep_cards" title="More Actions">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        document.querySelector(".showset").insertAdjacentHTML(`beforeend`, struct);
        document.querySelector(".show-sub").scrollTo(0,0);
        document.querySelector(".show-sub").classList.replace("showsub-inatv" , "showsub-atv");
        attachGenMenuModalEventListeners();
    }


    // Context menu for the Episode cards
    function showInfoEpCardAtns(btnEvent)
    {
        // Get the clicked button
        let epCardMenuBtn = btnEvent.target.closest("[data-gen-menu-modal-type='show_info_ep_cards']");
        
        if (!epCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='show_info_ep_cards'] not found.");
            return;
        }

        // Find the parent 
        let epCardBdr = epCardMenuBtn.closest(".ep_cardBdr");
        if (!epCardBdr)
        {
            console.error("Parent element not found.");
            return;
        }

        // Get all parents elements to obtain the current index
        let allGridCards = Array.from(document.querySelectorAll(".ep_cardBdr"));
        let epCardIndex = allGridCards.indexOf(epCardBdr);

        if(epCardIndex === -1)
        {
            console.error("Failed to find the index of the clicked card.");
            return;
        }

        // Add selectors
        let epShowType = info_pg_show_type.toLowerCase();
        let epCardName = document.querySelector(".selectorMain")?.textContent?.toString()?.trim();
        let epCardSsnNum = Number(epCardBdr.getAttribute("data-ssn"));
        let epCardEpNum = Number(epCardBdr.getAttribute("data-ep"));
        let epCardEpLink = epCardBdr.querySelector(".ep_cardCtntBdr")?.getAttribute("href");
        let epCardTitle = document.querySelector(".genMenuModalCtntSectText.ep_num_title");
        let epCardPlyBtn = document.querySelector(".genMenuModalCtntBtnBox.ep_watchNow_btn");
        let epCardMarkAsWatchedBtn = document.querySelector(".genMenuModalCtntBtnBox.ep_markedAsWatched_btn");
        let epCardDwldBtn = document.querySelector(".genMenuModalCtntBtnBox.ep_dwld_btn");

        // Update temp variables
        temp_ssn_num = epCardSsnNum;
        temp_ep_num_or_length = epCardEpNum;

        // Display the episode number
        epCardTitle.textContent = epShowType === "movie" ? `Movie` : `Episode ${epCardEpNum}`;

        // Watch the episode
        epCardPlyBtn.onclick = () => window.open(`${epCardEpLink}` , `_self`);

        // Mark as watched
        epCardMarkAsWatchedBtn.onclick = async () => 
        {
            let selectedProfile = await getSelectedProfile();
            let show_type = `${epShowType}`;
            let show_id = `${info_pg_show_link.split('/')[2]}`;
            let showLink = (epShowType === "tv")
                ? `#/${show_type}/${show_id}/watch/${epCardSsnNum}/${epCardEpNum}`
                : `#/${show_type}/${show_id}/watch`;
            let isItem = selectedProfile?.prof_history?.at(-1)?.hist_link;

            if(isItem !== showLink)
            {
                // Remove the old entry
                selectedProfile.prof_history = selectedProfile.prof_history.filter(item => item.hist_link !== showLink);
    
                // Add new entry
                selectedProfile.prof_history.push(
                    {
                        hist_link: showLink,
                        hist_currTime: `${sample_ep_duration}`, // Random value as no shows are streamed
                        hist_totalTime: `${sample_ep_duration}`, // Random value as no shows are streamed
                    }
                );

                // Update user data
                await updUsrProfFlds(
                {
                    prof_history: selectedProfile.prof_history
                });
            }

            // Notify the user
            if(show_type === "movie")
            {
                notification(`notifyGood` , `Movie marked as watched`);
            }
            else
            {
                notification(`notifyGood` , `Episode marked as watched`);
            }
        };

        // Update btn if show is downloaded
        updEditShowInDLBtn(info_pg_show_link, epCardSsnNum, epCardEpNum);

        // Download the show
        epCardDwldBtn.onclick = () => 
        {
            if((epShowType === "tv"))
            {
                selDwldPpty('episode', epCardName, epCardSsnNum, epCardEpNum);
            }
            else
            {
                selDwldPpty('episode', epCardName);
            }
        }
    }


    // Download an entire Season
    function dwldShowSsn()
    {
        let selSsn = document.querySelector(".seasons_selector.active");
        let ssnName = selSsn.querySelector(".selectorMain")?.textContent?.toString()?.trim();
        let currSsn = Number(selSsn.getAttribute("data-ssn-num"));
        let epLength = Number(selSsn.getAttribute("data-ep-length"));

        // Configure Properties of the downloads
        selDwldPpty("season", ssnName, currSsn, epLength);
    }

    // Selecting download quality
    function selDwldPpty(origin, ssnName, ssnNum, ep_num_or_length)
    {
        // Insert modal struct
        documentBody.insertAdjacentHTML(`beforeend` , selDwlDQltyStruct);

        let dwldShowModalBase = document.querySelector(".dwldShowModalBase");
        let dwldShowModalBox = document.querySelector(".dwldShowModalBox");
        let dwldShowModalCloseBtn = document.querySelector(".dwldShowModalCloseBtn");
        let epDLQltyCard = document.querySelectorAll(".epDLQltyCard");
        let cnfrmDwldQlty = document.querySelector(".cnfrmDwldQlty");
        let dwldShowModalTimer;
        let epDLAudioCard;
        let cnfrmDwldAudio;
        let temp_ep_qlty = "Good";
        let temp_ep_size = 0;
        let temp_ep_audio = `${showsStructData?.spoken_languages.map(item => item?.english_name).join(", ")}`;
        

        // Display modal
        dwldShowModalTimer = setTimeout(() => 
        {
            clearTimeout(dwldShowModalTimer);
            dwldShowModalBase.classList.add("active");
            documentBody.setAttribute(`data-modal-state` , `open`);
        }, 100);

        // CLose the modal
        const closeDwldShowModal = () => 
        {
            dwldShowModalBase.classList.remove("active");

            dwldShowModalTimer = setTimeout(() => 
            {
                clearTimeout(dwldShowModalTimer);
                dwldShowModalBase.remove();
                documentBody.removeAttribute("data-modal-state");
            }, 300);
        }
        dwldShowModalCloseBtn.addEventListener("click" , closeDwldShowModal);

        // Add selected class to the chosen option
        epDLQltyCard.forEach((card) => 
        {
            if(card.atn)
            {
                card.removeEventListener("click", card.atn);
            }
        });
        epDLQltyCard.forEach((card) => 
        {
            let selOptQlty = card.getAttribute("data-ep-qlty");
            let selOptText = card.querySelector(".genMenuModalCtntBtnText");
            let thisSize = 0;
            
            // Configure sizes for the episode(s)
            switch(selOptQlty.toLowerCase())
            {
                case 'best':
                    thisSize = getRandShowSize(550, 700);
                    card.setAttribute(`data-ep-size` , `${thisSize}`);
                    selOptText.textContent = `Best (${thisSize} MB)`;
                    break;

                case 'better':
                    thisSize = getRandShowSize(320, 450);
                    card.setAttribute(`data-ep-size` , `${thisSize}`);
                    selOptText.textContent = `Better (${thisSize} MB)`;
                    break;
                    
                case 'good':
                    thisSize = getRandShowSize(150, 300);
                    temp_ep_size = thisSize;
                    card.setAttribute(`data-ep-size` , `${thisSize}`);
                    selOptText.textContent = `Good (${thisSize} MB)`;
                    break;
                    
                case 'low':
                    thisSize = getRandShowSize(50, 110);
                    card.setAttribute(`data-ep-size` , `${thisSize}`);
                    selOptText.textContent = `Data Saver (${thisSize} MB)`;
                    break;
                    
                default:
                    notification(`notifyBad` , `An error occurred`);
                    console.warn(`No matching case for the attribute: ${selOptQlty}`);
                    break;
            }

            const card_atn = () => 
            {
                // Add selected class to current class
                epDLQltyCard.forEach((oldCls) => oldCls.classList.remove("selected"));
                card.classList.add("selected");

                // Get and update temp ep qlty and size
                let selOptSize = Number(card.getAttribute("data-ep-size"));
                temp_ep_qlty = selOptQlty;
                temp_ep_size = selOptSize;
            }
            card.addEventListener("click", card_atn);
            card.atn = card_atn;
        });

        // Confirm the quality and move to additional audio lang
        const cnfrmQltyAtn = () => 
        {
            // Insert Additonal Audio Lang struct
            dwldShowModalBox.innerHTML = selAudioLangStruct;

            // Attach selectors
            let dfltAudioLang = document.querySelector(".epDLMoreLangCardModalCtntBox .show_lang");
            epDLAudioCard = document.querySelectorAll(".epDLAudioCard");
            cnfrmDwldAudio = document.querySelector(".cnfrmDwldAudio");

            // Update default language text
            dfltAudioLang.textContent = `${showsStructData?.spoken_languages.map(item => item?.english_name).join(", ")}`;
            
            // Add "selected" class to chosen option
            epDLAudioCard.forEach((card) => 
            {
                if(card.atn)
                {
                    card.removeEventListener("click", card.atn);
                }
            });
            epDLAudioCard.forEach((card) => 
            {
                const card_atn = () => 
                {
                    // Add selected class to current class
                    epDLAudioCard.forEach((oldCls) => oldCls.classList.remove("selected"));
                    card.classList.add("selected");
    
                    // Get and update temp ep qlty
                    let selOptAudio = card.querySelector(".genMenuModalCtntBtnText").textContent;
                    temp_ep_audio = selOptAudio.trim() === "None" ? `${dfltAudioLang.textContent}` : `${dfltAudioLang.textContent}, ${selOptAudio}`;
                }
                card.addEventListener("click", card_atn);
                card.atn = card_atn;
            });

            // Confirm Chosen option
            cnfrmDwldAudio.addEventListener("click" , cnfrmAudioAtn);
        }
        cnfrmDwldQlty.addEventListener("click" , cnfrmQltyAtn);


        // For Additional Languages
        // Confirm the audio and download episode(s)
        const cnfrmAudioAtn = () => 
        {
            // Download episode or season
            if(origin === "season")
            {
                addSsnToDwlDLib(
                    `${info_pg_show_link}`,
                    temp_ep_size,
                    `${temp_ep_qlty}`,
                    `${temp_ep_audio}`,
                    ssnName,
                    ssnNum,
                    ep_num_or_length
                );

                // Update button content & remove listener
                document.querySelectorAll(".ssn_dwld_btn").forEach((btn) => 
                {
                    btn.innerHTML = dwldSsn_isInDLBtnStruct;
                    btn.disabled = true;
                    btn.removeEventListener("click", dwldShowSsn);
                });
            }
            else
            {
                if((info_pg_show_type.toLowerCase() === "tv"))
                {
                    addEpToDwlDLib(
                        `${info_pg_show_link}`,
                        info_pg_show_type,
                        temp_ep_size,
                        `${temp_ep_qlty}`,
                        `${temp_ep_audio}`,
                        ssnName,
                        ssnNum,
                        ep_num_or_length
                    );
                }
                else
                {
                    addEpToDwlDLib(
                        `${info_pg_show_link}`,
                        info_pg_show_type,
                        temp_ep_size,
                        `${temp_ep_qlty}`,
                        `${temp_ep_audio}`,
                    );
                }
            }

            // Close the modal
            closeDwldShowModal();
        }
    }


