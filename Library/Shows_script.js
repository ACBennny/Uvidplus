
/***************************************************************
 * This will hold the code for the respective Show categories
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let path = window.location.pathname;
    let pathFilename = path.split('/').pop().split('.').shift();
    let pathFilenameLC = pathFilename.toLocaleLowerCase();
    let thisHTMLData;

    window.addEventListener(`load` , () => 
    {
        loadInventory();
    });

    function loadInventory()
    {
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`src` , `/inventory.js`);
    
        invScriptTag.addEventListener("load" , () => 
        {
            preShowSection();
        });

        document.body.appendChild(invScriptTag);
    }

    function preShowSection()
    {
        thisHTMLData = searchInventory.filter((item) => 
        {
            let titleWithoutSpaces = item.show_title.replace(/\s+/g, '').toLowerCase();
            let invFileName = item.show_link.split('/').pop().split('.').shift();
            let invFileNameLC = invFileName.toLocaleLowerCase();
            return invFileNameLC === pathFilenameLC;
        });

        // If no match, redirect to error page
        if(thisHTMLData.length <= 0)
        {
            window.open(`/Error404.html` , `_self`);
            return;
        }
        
        let showHTMLCtnt = thisHTMLData.map((item) => 
        {
            const { show_foreground, show_background, show_title, show_scores, show_trailers, show_languages, show_status, 
                    show_aired, show_genre, show_theme, show_subtitles, show_studios, show_rating, show_description, 
                    show_type, } = item;
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
                                            <div class="quick_atnBox open_quickAtnModalBdr like_buttonsBox" title="View ratings" aria-label="View ratings">
                                                <div class="quick_atnCtnt">
                                                    <div class="topCtnt">
                                                        <div class="ratingBdr">
                                                            <div class="ratingBox">
                                                                <div class="ratingIconBox">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="ratingIcon">
                                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                                    </svg>
                                                                </div>
                                                                <div class="ratingIconNo">${show_scores}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btmCtnt">
                                                        <p class="btmText">Rating</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quick_atnBox watchTrailer_box" src="N/A" title="Watch trailer">
                                                <div class="quick_atnCtnt">
                                                    <div class="topCtnt">
                                                        <div class="topIconBox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="topIcon">
                                                                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="btmCtnt">
                                                        <p class="btmText">Trailer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quick_atnBox open_quickAtnModalBdr" title="View more actions" aria-label="View more actions">
                                                <div class="quick_atnCtnt">
                                                    <div class="topCtnt">
                                                        <div class="topIconBox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="topIcon">
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
                                        <div class="quickAtnModalBdr ratingActionBdr">
                                            <div class="quickAtnModalBox ratingActionBox">
                                                <button class="quickAtnModal_btn rating_btn like_buttons add_to_LikedShowsBox" title="I like this epsidoe" aria-label="I like this epsidoe">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="quickAtnModal_btnIcon rating_btnIcon add_to_LikedShows">
                                                        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
                                                    </svg>
                                                    <p class="quickAtnModal_btnText rating_btnText">I like this</p>
                                                </button>
                                                <button class="quickAtnModal_btn rating_btn like_buttons add_to_DislikedShowsBox" title="I don't like this episode" aria-label="I don't like this episode">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="quickAtnModal_btnIcon rating_btnIcon add_to_DislikedShows">
                                                        <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/>
                                                    </svg>
                                                    <p class="quickAtnModal_btnText rating_btnText">I don't like this</p>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="quickAtnModalBdr">
                                            <div class="quickAtnModalBox">
                                                <button class="quickAtnModal_btn watchShowNowBtn" title="Watch Now" aria-label="Watch Now">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="quickAtnModal_btnIcon rating_btnIcon add_to_LikedShows">
                                                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
                                                    </svg>
                                                    <p class="quickAtnModal_btnText">Watch Now</p>
                                                </button>
                                                <button class="quickAtnModal_btn add_to_WatchListBox" title="Add to Watchlist" aria-label="Add to Watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="quickAtnModal_btnIcon add_to_WatchListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="quickAtnModal_btnIcon remove_from_WatchListIcon">
                                                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                    </svg>
                                                    <p class="quickAtnModal_btnText add_to_WatchListText">WatchList</p>
                                                </button>
                                                <button class="quickAtnModal_btn add_to_Playlist openAddToPLBtn" title="Add to Playlist" aria-label="Add to Playlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="quickAtnModal_btnIcon rating_btnIcon add_to_LikedShows">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                    <p class="quickAtnModal_btnText">Playlist</p>
                                                </button>
                                                <button class="quickAtnModal_btn shareShowBtn" title="Share this show" aria-label="Share this show">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="quickAtnModal_btnIcon rating_btnIcon add_to_LikedShows">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z"/>
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
                                                <div class="sect-headText"><span class="1">A</span>bout</div>
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
                                                    <p class="abt-cardText"><span>Languages</span>${show_languages}</p>
                                                    <p class="abt-cardText"><span>Status</span>${show_status}</p>
                                                    <p class="abt-cardText"><span>Studios</span>${show_studios}</p>
                                                    <p class="abt-cardText"><span>Theme</span>${show_theme}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Seasons List -->
                                        <div class="sect-ep">
                                            <div class="sect-head">
                                                <div class="sect-headText"><span class="1">W</span>atch</div>
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
                                                <div class="episode_sortBdr">
                                                    <div class="episode_sortBox sort_EpisodesBtn" title="Sort">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="episode_sortIcon">
                                                            <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
                                                        </svg>
                                                        <div class="episode_sortText"></div>
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

        document.body.insertAdjacentHTML(`afterbegin` , showHTMLCtnt);
        document.title = `Uvid • Watch ${thisHTMLData[0].show_title}`;
        allImages();

        let seasonOverlaySelectorBox = document.querySelector(".seasons_selectorBox");
        let showEpData = thisHTMLData[0].show_watch;
        let tvPlus = 1;
        showEpData.forEach((tp, eps) => 
        {
            let showType = tp.show_wtp.toLowerCase();

            if(showType == `tv`)
            {
                let seasonOverlaySelectorBoxInnerHTML = 
                `
                    <div class="seasons_selector" show-type="${tp.show_wtp}" ep-length="${tp.show_wep}">
                        <div class="selectorMain">Season ${tvPlus}</div>
                        <p class="selectorMinor">${tp.show_wep} episodes</p>
                    </div>
                `;
                seasonOverlaySelectorBox.insertAdjacentHTML(`beforeend` , seasonOverlaySelectorBoxInnerHTML);
                tvPlus++;
            }
            else if((showType == `movie`) || showType == `movies`)
            {
                let seasonOverlaySelectorBoxInnerHTML = 
                `
                    <div class="seasons_selector" show-type="${tp.show_wtp}" ep-length="1">
                        <div class="selectorMain">${tp.show_wep}</div>
                        <p class="selectorMinor">1 episode</p>
                    </div>
                `;
                seasonOverlaySelectorBox.insertAdjacentHTML(`beforeend` , seasonOverlaySelectorBoxInnerHTML);
            }
        });

        setSeasonHeaderText();
        startShowSection();
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
            const openQuickAtnModalBdr = document.querySelectorAll(".open_quickAtnModalBdr");
            const quickAtnModalBdr = document.querySelectorAll(".quickAtnModalBdr");
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
            const sortEPbtn = document.querySelectorAll('.sort_EpisodesBtn');
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
        
            attachWatchListEventListeners();
            attachAddToPLEventListeners();
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

            // Open QuickActions Box
            openQuickAtnModalBdr.forEach((btn, b) => 
            {
                btn.addEventListener("click" , () => 
                {
                    quickAtnModalBdr.forEach(bdr => 
                    {
                        bdr.classList.remove("active");
                    });
                    quickAtnModalBdr[b].classList.add("active");
                });
            });



        // RATINGS

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


        // CLOSING THE QUICK ACTION MODAL

            document.addEventListener("click" , e => 
            {
                // Close the Ratings Action Box
                if(    ((openQuickAtnModalBdr[0].matches(":hover")) || (quickAtnModalBdr[0].matches(":hover")))
                    || ((openQuickAtnModalBdr[1].matches(":hover")) || (quickAtnModalBdr[1].matches(":hover")))
                )
                {
                    return;
                }
                quickAtnModalBdr[0].classList.remove("active");
                quickAtnModalBdr[1].classList.remove("active");
            });


        // Return if No Episodes Presessnt
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
                watchNowLink = seasonSet[0].querySelectorAll(".episodes")[0].href;
                window.open(watchNowLink , "_self");
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

            // Closing the Selctor
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
                    const sortEPbtnText = btn.querySelector('.episode_sortText');
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
                redirectToJJkForDevTests();
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
                        box.classList.remove("inactive");
                        box.classList.add("active");
                        console.log("done");
                    });
                    showAllEpBdr[b].classList.remove("active");
                });
            });
    }

    // Redirects users to the JJK Episodes page as it's the only one currently active
    function redirectToJJkForDevTests()
    {
        const watchEpBox = document.querySelectorAll(".episodes");

        // Properties of the Episode Box (Button)
        watchEpBox.forEach(epBox => 
        {
            // Get text content
            const epBoxSpan = epBox.querySelector("span");
            const epBoxSpanCtnt = epBoxSpan.textContent

            // Set the title
            epBox.title = "Watch " +  epBoxSpanCtnt;

            /**
             * TESTING: This is a test link to the conly current active page to watch as it is being developed
             * All links in this department will be redierected to this page
             */
            epBox.href = "/Library/Anime/Watch/JujutsuKaisen/S1/Ep1.html";
        });
    }















