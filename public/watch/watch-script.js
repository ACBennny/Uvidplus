/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    const watch_pg_struct = 
    `
        <div class="watch_pg_base active">
            <div class="watch_pg_bcg"></div>
            <div class="watch_pg_bdr">
                <div class="watch_pg_box">
                    <div class="">
                        <div class="">
                            <div class="vid_bdr">
                                <div class="vid_box">
                                    <div class="container video_player show-controls">
                                        <video preload="metadata" class="main-video">
                                            <source src="/Library/TV/Watch/JujutsuKaisen/S1/Media/3_360p.mp4" size="360" type="video/mp4">
                                            <source src="/Library/TV/Watch/JujutsuKaisen/S1/Media/3_360p.mp4" size="480" type="video/mp4">
                                            <source src="/Library/TV/Watch/JujutsuKaisen/S1/Media/3_720p.mp4" size="640" type="video/mp4">
                                            <source src="/Library/TV/Watch/JujutsuKaisen/S1/Media/3_720p.mp4" size="720" type="video/mp4">
                                            <source src="/Library/TV/Watch/JujutsuKaisen/S1/Media/3_1080p.mp4" size="1080" type="video/mp4">
                                            <track label="English" kind="subtitles" src="/Library/subtitleTest1.vtt" srclang="en">
                                            <track label="Japanese" kind="subtitles" src="/Library/subtitleTest2.vtt" srclang="en">
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="watch_pg_nav_bdr">
                        <div class="watch_pg_nav_box">
                            <div class="watch_pg_det_bdr">
                                <div class="watch_pg_det_box">
                                    <button type="button" class="genBtnBox transBtn thin watch_pg_ret_btn">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <span class="genBtnText">Back</span>
                                    </button>
                                    <div class="watch_pg_dvd_box">
                                        <p class="watch_pg_dvd_txt">/</p>
                                    </div>
                                    <div class="watch_pg_ttl_box">
                                        <p class="watch_pg_ttl_txt">The Day I Reincarnated As a Slime: Never actually happened cus it was just a dream or nightmare I heard someone else talking about with me</p>
                                    </div>
                                    <div class="watch_pg_ep_box">
                                        <div class="watch_pg_ep_txt">S109E1096</div>
                                    </div>
                                </div>
                            </div>
                            <div class="watch_pg_atn_bdr">
                                <div class="watch_pg_atn_box">
                                    <button type="button" class="genBtnBox genIconBtn transBtn watch_pg_prev_ep_btn" title="Previous Episode">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648zM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" />
                                            </svg>
                                        </div>
                                    </button>
                                    <button type="button" class="genBtnBox genIconBtn transBtn watch_pg_next_ep_btn" title="Next Episode">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648zM22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z" />
                                            </svg>
                                        </div>
                                    </button>
                                    <button type="button" class="genBtnBox transBtn watch_pg_ep_sel_btn">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                    <path d="M9.99 10.91a1.49 1.49 0 0 1 1.615-.022l3.371 2.09c.538.334.774.91.774 1.432c0 .523-.236 1.099-.774 1.432l-3.371 2.09c-.54.334-1.157.28-1.615-.022a1.67 1.67 0 0 1-.74-1.41v-4.18c0-.593.289-1.114.74-1.41m.823 1.254c-.019.012-.063.056-.063.156v4.18c0 .1.044.144.063.156l.001.001l3.372-2.09c.021-.013.064-.059.064-.157s-.043-.143-.064-.157l-3.371-2.09z" />
                                                    <path d="M8.7 1.25c-.22 0-.39 0-.536.016A2.75 2.75 0 0 0 5.71 3.87a2.89 2.89 0 0 0-2.055 2.721c-.6.18-1.119.465-1.543.923c-.652.705-.854 1.572-.862 2.586c-.007.975.167 2.207.382 3.736l.44 3.114c.168 1.196.305 2.168.518 2.929c.223.797.552 1.452 1.16 1.956c.604.5 1.32.715 2.166.817c.819.098 1.849.098 3.13.098h5.907c1.282 0 2.312 0 3.13-.098c.847-.102 1.563-.317 2.167-.817c.608-.504.937-1.16 1.16-1.956c.213-.761.35-1.733.519-2.93l.439-3.113c.216-1.53.39-2.761.382-3.736c-.008-1.014-.21-1.881-.862-2.586c-.424-.458-.943-.742-1.544-.923a2.89 2.89 0 0 0-2.054-2.72a2.75 2.75 0 0 0-2.454-2.605c-.147-.016-.316-.016-.536-.016zm10.11 5.078a1.38 1.38 0 0 0-1.348-1.078H6.538c-.669 0-1.212.47-1.349 1.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078M16.769 3.75a1.25 1.25 0 0 0-1.092-.993a5 5 0 0 0-.417-.007H8.74c-.28 0-.361.001-.417.007a1.25 1.25 0 0 0-1.092.993zM3.213 8.533c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579" />
                                                </g>
                                            </svg>
                                        </div>
                                        <span class="genBtnText">Episodes</span>
                                    </button>
                                    <button type="button" class="genBtnBox greySolidBtn watch_pg_ply_sel_btn">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <span class="genBtnText">Source</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    

    // Init watch page
    function initWatchPage()
    {
        //
        documentCtnt.insertAdjacentHTML('beforeend', watch_pg_struct);
    }


    // Add listeners for the watch page
    function addWatchPageListeners()
    {
        // DEFINITIONS

            const nextEpCtntCardBdr = document.querySelectorAll(".next_epCardBdr");   
            const mediaActionBox = document.querySelector(".media_actions_box");
            const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
            const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");



        // NEXT AND PREVIOUS EPISODE DETAILS

            // Setting episode card atrributes
            nextEpCtntCardBdr.forEach(cardBdr => 
            {
                const cardlink = cardBdr.querySelector(".next_epCardBox");
                const cardImage = cardBdr.querySelector(".next_epImg");
                const cardEpTitle = cardBdr.querySelector(".next_epDetTitle");
                const cardShowName = cardBdr.querySelector(".next_epDetShow");

                cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
                cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
            });




        // THUMBS UP/ DOWN

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




        // MORE EPISODES

            const openMoreEpOverlay = document.querySelectorAll(".open_MoreEpOverlay");

            openMoreEpOverlay.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    notification(`notifyBad` , `An error occurred`);
                });
            });
    }










