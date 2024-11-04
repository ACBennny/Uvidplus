/***************************************************************
 * This will display the details about all shows
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    let libPathname = window.location.pathname; 
    let libSearchLink = window.location.search;
    let libNextPath = `${libPathname}${libSearchLink}`;
    let libQuery = new URLSearchParams(window.location.search);
    let showQuery = libQuery.get("info");
    let showQueryLC = showQuery.toLowerCase();
    let path = window.location.pathname;
    let pathFilename = path.split('/').pop().split('.').shift();
    let pathFilenameLC = pathFilename.toLowerCase();
    let thisHTMLData;
    let moreShowsToWatchStruct = 
    `
        <!-- More Shows -->
        <div class="moreShows_slider_base">
            <div class="basic_slider_bdr">
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
                        <div class="basic_slide_arrow left_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="basic_slider_card_box"></div>
                        <div class="basic_slide_arrow right_slide_arrow hide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        <div>
    `;

    window.addEventListener(`load` , () => 
    {
        loadInventory();
    });

    function loadInventory()
    {
        // Check if inventory.js has been initialized
        let invScriptID = document.querySelector("#inventoryID");

        if(!(invScriptID == undefined))
        {
            preShowSection();
            return;
        }

        // If not, initialize
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`id` , `inventoryID`);
        invScriptTag.setAttribute(`src` , `/inventory.js`);
        document.body.appendChild(invScriptTag);

        invScriptTag.addEventListener("load" , () => 
        {
            preShowSection();
        });
        invScriptTag.addEventListener("error" , () => 
        {
            notification(`notifyBad` , `Error fetching show Info`);
        });
    }

    function preShowSection()
    {
        thisHTMLData = searchInventory.filter((item) => 
        {
            let invShowLink = item.show_link;
            let invShowLinkLC = invShowLink.substring(invShowLink.indexOf('=') + 1).toLowerCase();
            return invShowLinkLC === showQueryLC;
        });

        // If no match, redirect to error page
        if(thisHTMLData.length <= 0)
        {
            window.open(`/Error/404/index.html` , `_self`);
            return;
        }
        
        let showHTMLCtnt = thisHTMLData.map((item) => 
        {
            const { 
                show_foreground, 
                show_background, 
                show_title, 
                show_type, 
                show_rating, 
                show_scores, 
                show_trailers, 
                show_year, 
                show_status, 
                show_aired, 
                show_genre, 
                show_theme, 
                show_subtitles, 
                show_studios, 
                show_country, 
                show_description, 
                show_languages, 
            } = item;
            return `
                <div class="watch_base" id="top">

                    <!-- main -->
                    <div class="main_bcg">
                        <div class="bcg_img_bdr">
                            <div class="bcg_img_box">
                                <img src="${show_background}" alt="Background image of ${show_title}" class="bcgImg">
                            </div>
                            <div class="bcg_img_gradient"></div>
                        </div>
                        <div class="main_bdr">
                            <div class="main_box">
                                <div class="title_ImgBdr">
                                    <div class="title_ImgBox">
                                        <img src="${show_foreground}" alt="Foreground image of ${show_title}" class="title_Img">
                                    </div>
                                </div>
                                <div class="title-plate">
                                    
                                    <!-- title -->
                                    <h1 id="show_Header_Name">${show_title}</h1>

                                    <!-- Quick Actions -->
                                    <div class="quick_atnBcg">
                                        <div class="quick_atnBdr">
                                            <div class="quick_atnBox like_buttonsBox" title="show cores" aria-label="scores">
                                                <div class="quick_atnCtnt">
                                                    <div class="topCtnt">
                                                        <div class="scoreBdr">
                                                            <div class="scoreBox">
                                                                <div class="scoreIconBox">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="scoreIcon">
                                                                        <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="scoreIconNo">${show_scores}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btmCtnt">
                                                        <p class="btmText">Score</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quick_atnBox watchShowNowBtn" src="N/A" title="Watch trailer">
                                                <div class="quick_atnCtnt">
                                                    <div class="topCtnt">
                                                        <div class="topIconBox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="topIcon">
                                                                <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="btmCtnt">
                                                        <p class="btmText">Watch Now</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quick_atnBox open_quickAtnModalBdr" title="View more actions" aria-label="View more actions">
                                                <div class="quick_atnCtnt">
                                                    <div class="topCtnt">
                                                        <div class="topIconBox">
                                                            <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="topIcon">
                                                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="btmCtnt">
                                                        <p class="btmText">More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="quickAtnModalBdr">
                                            <div class="quickAtnModalBox">
                                                <button class="quickAtnModal_btn score_btn like_buttons add_to_LikedShowsBox" title="I like this epsidoe" aria-label="I like this epsidoe">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                        <path d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735" />
                                                        <path fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" />
                                                    </svg>
                                                    <p class="quickAtnModal_btnText score_btnText">I like this</p>
                                                </button>
                                                <button class="quickAtnModal_btn score_btn like_buttons add_to_DislikedShowsBox" title="I don't like this episode" aria-label="I don't like this episode">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                        <path d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735" />
                                                        <path fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd" />
                                                    </svg>
                                                    <p class="quickAtnModal_btnText score_btnText">I don't like this</p>
                                                </button>
                                                <button class="quickAtnModal_btn watchTrailer_box" title="Watch Now" aria-label="Watch Now">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                        <path d="M11.25 2c-1.366.001-2.519.01-3.5.068V6.25h3.5zm-5 .221c-1.223.195-2.101.56-2.786 1.243c-.684.684-1.048 1.563-1.242 2.786H6.25z" />
                                                        <path fill-rule="evenodd" d="M2 12c0-1.7 0-3.094.069-4.25H21.93C22 8.906 22 10.3 22 12s0 3.094-.069 4.25H2.07C2 15.094 2 13.7 2 12m10.411-1.596C13.471 11.116 14 11.472 14 12s-.53.884-1.589 1.596c-1.073.721-1.61 1.082-2.01.817C10 14.148 10 13.433 10 12s0-2.148.4-2.413s.938.096 2.011.817" clip-rule="evenodd" />
                                                        <path d="M21.778 6.25c-.194-1.223-.558-2.102-1.242-2.786s-1.563-1.048-2.786-1.243V6.25zM12.75 2c1.366.001 2.519.01 3.5.068V6.25h-3.5zm9.028 15.75H17.75v4.028c1.223-.194 2.102-.559 2.785-1.243c.685-.684 1.05-1.562 1.243-2.785m-5.528 0v4.181c-.981.058-2.134.067-3.5.069v-4.25zm-5 4.25v-4.25h-3.5v4.181c.981.058 2.134.067 3.5.069m-5-4.25v4.028c-1.223-.194-2.101-.559-2.786-1.243c-.684-.684-1.048-1.562-1.242-2.785z" />
                                                    </svg>
                                                    <p class="quickAtnModal_btnText">Watch Trailer</p>
                                                </button>
                                                <button class="quickAtnModal_btn add_to_Playlist openAddToWLBtn" title="Add to Watchlist" aria-label="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                    </svg>
                                                    <p class="quickAtnModal_btnText">Add to Watchlist</p>
                                                </button>
                                                <button class="quickAtnModal_btn shareShowBtn" title="Share this show" aria-label="Share this show">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickAtnModal_btnIcon">
                                                        <path fill-rule="evenodd" d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023" clip-rule="evenodd" />
                                                    </svg>
                                                    <p class="quickAtnModal_btnText">Share</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Content -->
                                    <div class="tro">

                                        <!-- About the Show -->
                                        <div class="sect-abt" id="abt">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="1">S</span>ynopsis</div>
                                            </div>
                                            <div class="sect-dv">
                                                <div class="abt-stmt">
                                                    <p class="abt-stmtText">${show_description}</p>
                                                    <div class="abt-stmt-detBdr" id="ep">
                                                        <div class="abt-stmt-detBox">
                                                            <label for="abt-stmt-checkBoxId" class="abt-stmt-detBtn read_more_btn">
                                                                <input type="checkbox" name="abt-stmt-checkBox" id="abt-stmt-checkBoxId" class="abt-stmt-checkBoxCls">
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="abt-card">
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Type</span><span class="abt-cardText-minor">${show_type}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Rating</span><span class="abt-cardText-minor">${show_rating}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Languages</span><span class="abt-cardText-minor">${show_languages}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Subtitles</span><span class="abt-cardText-minor">${show_subtitles}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Release Year</span><span class="abt-cardText-minor">${show_year}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Status</span><span class="abt-cardText-minor">${show_status}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Aired</span><span class="abt-cardText-minor">${show_aired}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Studios</span><span class="abt-cardText-minor">${show_studios}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Country</span><span class="abt-cardText-minor">${show_country}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Genres</span><span class="abt-cardText-minor">${show_genre}</span></p>
                                                    <p class="abt-cardText"><span class="abt-cardText-major">Theme</span><span class="abt-cardText-minor">${show_theme}</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Seasons List -->
                                        <div class="sect-ep">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="1">E</span>pisodes</div>
                                            </div>
                                            <div class="sect-controls">
                                                <div class="seasons_headerBdr">
                                                    <div class="seasons_headerBox" title="Select Season" aria-label="Select Season">
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
                                                <div class="episode_orderBdr">
                                                    <div class="episode_orderBox episode_orderBtn" title="Sort by oldest episodes">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="episode_orderIcon">
                                                            <path d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z" />
                                                            <path d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z" />
                                                        </svg>
                                                        <div class="episode_orderText"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="show-home-bx">
                                                <div class="show-home"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        documentCtnt.insertAdjacentHTML(`afterbegin` , showHTMLCtnt);
        document.title = `Uvid • Watch ${thisHTMLData[0].show_title}`;
        allImages();

        let seasonOverlaySelectorBox = document.querySelector(".seasons_selectorBox");
        let showType = thisHTMLData[0].show_type.toLowerCase();
        let showEpData;
        let tvPlus = 1;

        if((showType == "tv"))
        {
            showEpData = thisHTMLData[0].show_episodes;
            let checkIfEpPresent = showEpData[0].show_ep;
            
            if(checkIfEpPresent != "N/A")
            {
                showEpData.forEach((ep , epc) => 
                {
                    let seasonOverlaySelectorBoxInnerHTML = 
                    `
                        <div class="seasons_selector" show-type="${showType}" ep-length="${ep.show_ep}">
                            <div class="selectorMain">Season ${epc + 1}</div>
                            <p class="selectorMinor">${ep.show_ep} episodes</p>
                        </div>
                    `;
                    seasonOverlaySelectorBox.insertAdjacentHTML(`beforeend` , seasonOverlaySelectorBoxInnerHTML);
                });
            }
        }
        else if((showType == "movie" , (showType == "movies")))
        {

        }

        insertMoreShowsToWatch();
        setSeasonHeaderText();
        startShowSection();
    }

    function postInsertMoreShowsToWatch()
    {
        let moreShowsSliderBase = document.querySelector(".moreShows_slider_base");
        let basicSliderScriptTag = document.createElement("script");
        basicSliderScriptTag.setAttribute(`src` , `/basic_slider.js`);
        document.body.appendChild(basicSliderScriptTag);

        basicSliderScriptTag.addEventListener("load" , () => 
        {
            moreShowsSliderBase.classList.add("has_loaded");
            basicSlider();
        });

        basicSliderScriptTag.addEventListener("error" , () => 
        {
            moreShowsSliderBase.remove();
            notification(`notifyBad` , `Failed to load recommended shows`);
        });
    }

    function insertMoreShowsToWatch()
    {
        let watchBase = document.querySelector(".watch_base");
        watchBase.insertAdjacentHTML(`afterend` , moreShowsToWatchStruct);
        
        let moreShowsSliderCardBox = document.querySelector(".moreShows_slider_base .basic_slider_card_box");
        for(let i = 0; i < 30; i++)
        {
            let item = searchInventory[i];
            let struct = 
            `
                <div class="slide_card_base">
                    <div class="slide_card_bdr">
                        <div class="slide_card_box">
                            <div class="slide_card">
                                <a href="${item.show_link}" class="cardLinkCover"></a>
                                <div class="cardImgBox">
                                    <img src="${item.show_thumbnail}" alt="" class="cardImg">
                                </div>
                                <div class="cardQualityBox">
                                    <h1 class="cardQualityText">${item.show_quality}</h1>
                                </div>
                                <div class="cardInfoBdr">
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
            `;
            moreShowsSliderCardBox.insertAdjacentHTML(`beforeend` , struct);
        }
        postInsertMoreShowsToWatch();
    }

    function setSeasonHeaderText()
    {
        let sns_hdrTxt = document.querySelector(".seasons_headerText");
        let firstSnsSelector = document.querySelector(".seasons_selector");

        if((firstSnsSelector == undefined) || (firstSnsSelector == null)) return;
        let firstSnsSelectorMain = firstSnsSelector.querySelector(".selectorMain");
        
        sns_hdrTxt.textContent = firstSnsSelectorMain.textContent;
        firstSnsSelector.classList.add("active");
    }

    function startShowSection()
    {

        // DEFINITION

            const bcgImgBdr = document.querySelector(".bcg_img_bdr");
            const bcgImgBox = document.querySelector(".bcg_img_box");
            const bcgImgGradient = document.querySelector(".bcg_img_gradient");
            let bcgImgBdrBound;
            let bcgImgBdrHeight;
            let bcgImgBdrHalf;
            let bcgImgBdr3Qarts;
            let bcgImgBdr3QartsH;
            const openQuickAtnModalBdr = document.querySelector(".open_quickAtnModalBdr");
            const quickAtnModalBdr = document.querySelector(".quickAtnModalBdr");
            const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
            const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
            const showHeaderName = document.querySelector("#show_Header_Name");
            const watchTrailerBox = document.querySelector('.watchTrailer_box');
            let trailerTimer;
            let seasonHome = document.querySelector(".show-home");
            let seasonHTML = 
            `
                <div class="show-sub showsub-inatv">
                    <div class="showset"></div>
                </div>
            `;
            const seasonHeaderBox = document.querySelector(".seasons_headerBox");
            const seasonHeaderText = document.querySelector(".seasons_headerText");
            const seasonSelectorBdr = document.querySelector(".seasons_selectorBdr");
            const seasonSelectorBox = document.querySelector(".seasons_selectorBox");
            const seasonSelector = document.querySelectorAll(".seasons_selector");
            const seasonAtv = document.querySelectorAll('.season-select');
            const sortEPbtn = document.querySelectorAll('.episode_orderBtn');
            const seasonBox = document.querySelector('.show-home-bx');
            let seasonSub;
            let epLinkName = showHeaderName.textContent.replace(/\s+/g, '');
            let seasonSet;
            const showAllEpHtml = 
            `
                <div class="showall_EpBdr active">
                    <div class="showall_EpBox">
                        <div class="showall_EpBtn darkSolidBtn">show more</div>
                    </div>
                </div>
            `;
            let seasonEpOvf;
            let showAllEpBdr;
            let showAllEpBtn;
            const noOfEpShown = 12;
            const watchNowBtn = document.querySelector(".watchShowNowBtn");
            let watchNowLink;
            function extractPath(url) 
            {
                const urlObj = new URL(url);
                const pathSegments = urlObj.pathname.split('/');
                pathSegments.pop();
                const basePath = pathSegments.join('/');
                
                return basePath;
            }
            let epLinkDomain = extractPath(window.location.href);

    
        // Reattaching listeners
        
            attachAddToWLEventListeners();
            attachSharePageEventListeners();


        // POSITIONING THE CONTENT

            function checkBcgImgBdrBounds()
            {
                bcgImgBdrBound = bcgImgBdr.getBoundingClientRect();
                bcgImgBdrHeight = bcgImgBdrBound.height;
                bcgImgBdrHalf = Math.round(bcgImgBdrHeight/2);
                bcgImgBdr3Qarts = bcgImgBdrHeight + bcgImgBdrHalf;
                bcgImgBdr3QartsH = bcgImgBdrHeight + bcgImgBdrHalf + 10;

                bcgImgBox.setAttribute("style", `--ImgHeight:${bcgImgBdr3Qarts}px`);
                bcgImgGradient.setAttribute("style", `--ImgHeight:${bcgImgBdr3QartsH}px`);

                if(seasonSelectorBdr.classList.contains("active"))
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
            window.addEventListener("change" , () => 
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
                if(((openQuickAtnModalBdr.matches(":hover")) || (quickAtnModalBdr.matches(":hover")))
                )
                {
                    return;
                }
                quickAtnModalBdr.classList.remove("active");
            });



        // ScoreS

            // Like the show
            likeTheEp.addEventListener("click" , () => 
            {
                likeTheEp.classList.toggle("active");
                dontLikeTheEp.classList.remove("active");
            });
            
            // Dislike the show
            dontLikeTheEp.addEventListener("click" , () => 
            {
                dontLikeTheEp.classList.toggle("active");
                likeTheEp.classList.remove("active");
            });



        // WATCH TRAILER

            // Setting the title of the button
            watchTrailerBox.title = "Watch " + showHeaderName.textContent + " trailer";

            // Handling the rendering of thr trailer elements
            watchTrailerBox.addEventListener("click" , () => 
            {
                const trailerTitle = showHeaderName.textContent;
                const trailerSrc = watchTrailerBox.getAttribute("src");

                // if source is empty or not available(N/A) notify and return
                if(((trailerSrc == undefined) || (trailerSrc == null) || (trailerSrc == ``) || (trailerSrc == `N/A`) || (trailerSrc == `null`) || (trailerSrc == ` `)))
                {
                    notification(`notifyBad` , `No trailers available`);
                    return;
                }

                const trailerBdr = document.createElement("div");
                trailerBdr.classList.add("trailer_Bdr");
                trailerBdr.innerHTML =
                `
                    <div class="trailer_Box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="closeTrailer">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                        <iframe class="trailer_Frame" src="${trailerSrc}" title="${trailerTitle}" frameborder="0"  allowfullscreen></iframe>
                    </div>
                `;

                documentBody.appendChild(trailerBdr);
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
                            documentBody.removeChild(trailerBdr);
                            documentBody.classList.remove('bodystop');
                        });
                    }
                ,100);
            });




        // Return if No Episodes Present
        if((seasonSelector.length === 0))
        {
            watchNowBtn.addEventListener("click" , () => 
            {
                notification(`notifyBad` , `Episode not available`);
            });
            return;
        }


        // WATCH NOW

            // Redirecting the user to first episode of the show
            watchNowBtn.addEventListener("click" , () => 
            {
                // watchNowLink = seasonSet[0].querySelectorAll(".episodes")[0].href;
                // window.open(watchNowLink , "_self");
                notification(`notifyBad` , `Feature currently unavailable`);
            });



        // SEASON SELECTOR

            // Adding the episodes to the DOM
            seasonSelector.forEach(selector =>
            {
                let epLength = selector.getAttribute("ep-length");
                let seasonEpNo = selector.querySelector(".selectorMinor");
                seasonEpNo.textContent = `${epLength} epsisodes`;
                if(epLength == "1")
                {
                    seasonEpNo.textContent = `${epLength} epsisode`;
                }

                seasonHome.insertAdjacentHTML("beforeend" , seasonHTML);
            });

            seasonSub = document.querySelectorAll('.show-sub');
            seasonSet = document.querySelectorAll('.showset');
                
            seasonSelector.forEach((selector, sls) =>
            {
                let showType = selector.getAttribute("show-type");
                let epLength = selector.getAttribute("ep-length");
                let epLengthNo = Number(epLength);
                let seasonSetIndex = seasonSet[sls];
                let slsPlus = sls + 1;

                if((showType == "tv"))
                {
                    for(let ep = 0; ep < epLengthNo; ep++)
                    {
                        let epPlus = ep + 1;
                        let episodeHTML = 
                        `
                            <a href="${epLinkDomain}/Watch/${epLinkName}/S${slsPlus}/Ep${epPlus}.html" title="" class="episodes inactive">
                                <span class="episodesText">Ep ${epPlus}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="episodesIcon">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                            </a>
                        `;
                        seasonSetIndex.insertAdjacentHTML("beforeend" , episodeHTML);
                    }
                }
                else if((showType == "movie") || (showType == "movies"))
                {
                    for(let ep = 0; ep < epLengthNo; ep++)
                    {
                        let epPlus = ep + 1;
                        let movieName = selector.querySelector(".selectorMain").textContent.replace(/\s+/g, '');
                        let episodeHTML = 
                        `
                            <a href="${epLinkDomain}/Watch/${epLinkName}/Movies/${movieName}.html" title="" class="episodes inactive">
                                <span class="episodesText">Ep ${epPlus}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="episodesIcon">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                            </a>
                        `;
                        seasonSetIndex.insertAdjacentHTML("beforeend" , episodeHTML);
                    };
                }
            });

            // Displaying the first season
            seasonSub[0].classList.add("showsub-atv");
            seasonSub[0].classList.remove("showsub-inatv");

            // Setting the number of episodes

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
            seasonSelector.forEach((selector, s) => 
            {
                const seasonSelectorMain = selector.querySelector(".selectorMain");
                const seasonSelectorMinor = selector.querySelector(".selectorMinor");
                
                selector.addEventListener("click" , () => 
                {
                    seasonHeaderText.textContent = seasonSelectorMain.textContent;
                    seasonSub.forEach(ctnt => 
                    {
                        ctnt.classList.remove("showsub-atv");
                        ctnt.classList.add("showsub-inatv");
                    });
                    seasonSelector.forEach(one => 
                    { 
                        one.classList.remove("active");
                    });
                    seasonSub[s].classList.remove("showsub-inatv");
                    seasonSub[s].classList.add("showsub-atv");
                    selector.classList.add("active");

                    seasonSelectorBdr.classList.remove("active");
                    documentBody.classList.remove("bodystop");
                });
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
            
            
            
        // SORTING THE EPISODES

            function sortEpisodesFunc() 
            {
                const container = document.querySelector('.show-sub.showsub-atv .showset');
                const items = Array.from(container.querySelectorAll('.episodes'));
                
                // Reverse the array of items
                const reversedItems = items.reverse();
                
                // Remove existing elements from the DOM
                items.forEach(item => container.removeChild(item));
                
                // Append reversed elements back to the container
                reversedItems.forEach(item => container.appendChild(item));

                // Update the sort text

            }

            sortEPbtn.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    sortEpisodesFunc();
                    const sortEPbtnText = btn.querySelector('.episode_orderText');
                    sortEPbtnText.classList.toggle("active");

                    if(btn.title == "Sort by latest episodes")
                    {
                        btn.title = "Sort by oldest episodes";
                        return;
                    }
                    btn.title = "Sort by latest episodes";
                });
            });


            


        // EPISODES

            // Showing the first ten episodes on page load
            seasonSub.forEach(set => 
            {
                let setEpBox = set.querySelector(".showset").querySelectorAll(".episodes");

                // Add a "show more" button if the the no of episodes is greater than the margin
                if(setEpBox.length > noOfEpShown)
                {
                    for(let i = 0; i < noOfEpShown; i++)
                    {
                        setEpBox[i].classList.remove("inactive");
                        setEpBox[i].classList.add("active");
                    }
                    set.classList.add("epSetOverflow");
                    set.insertAdjacentHTML("beforeend" , showAllEpHtml);
                }
                // If not, just display the episodes present in the set
                else if(setEpBox.length <= noOfEpShown)
                {
                    for(let i = 0; i < setEpBox.length; i++)
                    {
                        setEpBox[i].classList.remove("inactive");
                        setEpBox[i].classList.add("active");
                    }
                }

                setEpBox.forEach(epBox => 
                {
                    // Get text content
                    const epBoxSpan = epBox.querySelector("span");
                    const epBoxSpanCtnt = epBoxSpan.textContent
        
                    // Set the title
                    epBox.title = "Watch " +  epBoxSpanCtnt;
        
                    /**
                     * VIDEO PLAYER: This feture is currently unavailable to renovations
                     * A notification will be displayed to alert the user
                     */
                    epBox.removeAttribute("href");
                    epBox.addEventListener("click" , () => 
                    {
                        notification(`notifyBad` , `Feature currently unavailable`);
                    });
                    
                });
            });

            // Showing all Episodes via onclick
            showAllEpBdr = document.querySelectorAll('.showall_EpBdr');
            showAllEpBtn = document.querySelectorAll('.showall_EpBtn');
            seasonEpOvf = document.querySelectorAll(".epSetOverflow");
            
            showAllEpBtn.forEach((btn, b) => 
            {
                btn.addEventListener("click" , () => 
                {
                    let chosenSetEpBox = seasonEpOvf[b].querySelectorAll(".episodes");
                    chosenSetEpBox.forEach(box => 
                    {
                        box.classList.replace("inactive" , "active");
                    });
                    showAllEpBdr[b].classList.remove("active");
                });
            });
    }

















