/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    let watch_pg_show_name = null;
    let watchPgShowData = null;
    let watchPgShowSsn = null;
    let watchPgShowEps = null;
    

    // Init watch page
    function initWatchPage(namePrvd)
    {
        watch_pg_show_name = namePrvd || hash_parts[3];
        watchPgShowSsn = Number(hash_parts[4]);
        watchPgShowEps = Number(hash_parts[5]);
        watchPgShowData = infoInvLinkMap.get(watch_pg_show_name);

        // If no match, redirect to error page
        if(!(watchPgShowData))
        {
            page_route_error();
            return;
        }

        // Check if episode is available
        if(watchPgShowData.show_type.toLowerCase() === "tv" && (
            (watchPgShowSsn > watchPgShowData?.show_episodes.length) 
            || (watchPgShowEps > watchPgShowData?.show_episodes[(watchPgShowSsn - 1)]?.show_ep)
        ))
        {
            console.error("Unavailable");
            page_route_error();
            return;
        }

        // Build page base
        const watchPgBase = document.createElement("div");
        watchPgBase.className = "watch_pg_base";
        watchPgBase.innerHTML = 
        `
            <div class="watch_pg_bcg"></div>
            <div class="watch_pg_bdr">
                <div class="watch_pg_box">
                    <div class="watch_pg_ply_bdr">
                        <div class="watch_pg_ply_box">
                            <div class="vid_bdr">
                                <div class="vid_box">
                                    <div class="container video_player show-controls">
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
                                        <p class="watch_pg_ttl_txt">${watchPgShowData.show_title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="watch_pg_atn_bdr">
                                <div class="watch_pg_atn_box">
                                    <div class="watch_pg_ep_box">
                                        <p class="watch_pg_ep_txt">
                                            <span class="ssn">Sn/a</span>
                                            <span class="eps">En/a</span>
                                        </p>
                                    </div>
                                    <button type="button" class="genBtnBox genIconBtn transBtn hide watch_pg_prev_ep_btn" title="Previous Episode">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648zM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" />
                                            </svg>
                                        </div>
                                    </button>
                                    <button type="button" class="genBtnBox genIconBtn transBtn hide watch_pg_next_ep_btn" title="Next Episode">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648zM22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z" />
                                            </svg>
                                        </div>
                                    </button>
                                    <button type="button" class="genBtnBox greySolidBtn hide watch_pg_eps_sel_btn">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z" />
                                                <path fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561s-2.636-.987-6.01-.987m-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <span class="genBtnText">Episodes</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentCtnt.insertAdjacentElement('beforeend', watchPgBase);

        // Add selectors
        const watchPgRetBtn = watchPgBase.querySelector(".watch_pg_ret_btn");
        const watchPgSsnTxt = watchPgBase.querySelector(".watch_pg_ep_txt .ssn");
        const watchPgEpsTxt = watchPgBase.querySelector(".watch_pg_ep_txt .eps");
        const watchPgPrevBtn = watchPgBase.querySelector(".watch_pg_prev_ep_btn");
        const watchPgNextBtn = watchPgBase.querySelector(".watch_pg_next_ep_btn");
        const watchPgSelEpBtn = watchPgBase.querySelector(".watch_pg_eps_sel_btn");
        let watch_pg_tmr;

        // Update layout for tv
        if(watchPgShowData.show_type.toLowerCase() === "tv")
        {
            // Update Episode number
            watchPgSsnTxt.textContent = `S${watchPgShowSsn}`;
            watchPgEpsTxt.textContent = `E${watchPgShowEps}`;

            // Remove hidden classes
            [watchPgPrevBtn, watchPgNextBtn, watchPgSelEpBtn].forEach(item => item.classList.remove("hide"));

            // Going to the previous episode
            watchPgPrevBtn.onclick = () =>
            {
                if((watchPgShowEps <= 1))
                {
                    // Return if user is at the end of the series
                    if(watchPgShowSsn >= watchPgShowData.show_episodes.length)
                    {
                        notification ('notifyBad', `You are at the start of the series`);
                        return;
                    }
                    else
                    {
                        // Set values for new season
                        watchPgShowSsn--
                        watchPgShowEps = watchPgShowData.show_episodes[(watchPgShowSsn - 1)].show_ep;
                    }
                }
                else
                {
                    watchPgShowEps--;
                }

                watchPgSsnTxt.textContent = `S${watchPgShowSsn}`;
                watchPgEpsTxt.textContent = `E${watchPgShowEps}`;
                history.pushState(null, '', `#/watch/${watchPgShowData.show_type.toLowerCase()}/${watch_pg_show_name}/${watchPgShowSsn}/${watchPgShowEps}`);

                // Restart video
                mainVideo.currentTime = 0;
            }

            // Going to the next episode
            watchPgNextBtn.onclick = () =>
            {
                if((watchPgShowEps >= watchPgShowData.show_episodes[(watchPgShowSsn - 1)].show_ep))
                {
                    // Return if user is at the end of the series
                    if(watchPgShowSsn >= watchPgShowData.show_episodes.length)
                    {
                        notification ('notifyBad', `You are at the end of the series`);
                        return;
                    }
                    else
                    {
                        // Set values for new season
                        watchPgShowSsn--;
                        watchPgShowEps = 1;
                    }
                }
                else
                {
                    watchPgShowEps++;
                }

                watchPgSsnTxt.textContent = `S${watchPgShowSsn}`;
                watchPgEpsTxt.textContent = `E${watchPgShowEps}`;
                history.pushState(null, '', `#/watch/${watchPgShowData.show_type.toLowerCase()}/${watch_pg_show_name}/${watchPgShowSsn}/${watchPgShowEps}`);

                // Restart video
                mainVideo.currentTime = 0;
            }
            
            // Selecting Episodes (Currently redirects you to the shows info page)
            watchPgSelEpBtn.onclick = () => 
            {
                // Close the modal
                clsWatchPgMdl();

                //
                let epNav = document.querySelectorAll(".info_pg_base .ctnt-tab-headerOpt");

                if(!epNav || (epNav.length <= 0))
                {
                    notification('notifyBad', `An error occured`);
                    return;
                }

                // Click the "Episodes" button
                epNav[1].click()

                // Scroll to the section
                window.scrollTo(
                {
                    top: Math.ceil((epNav[1].getBoundingClientRect().top + window.pageYOffset)),
                    behavior: "smooth"
                });
            }
        }
        else
        {
            // Update layout for movie
            watchPgSsnTxt.remove();
            watchPgEpsTxt.remove();
            watchPgBase.querySelector(".watch_pg_ep_txt").textContent = "Full movie";

            // Remove the prev, next, and ep select buttons
            watchPgPrevBtn.remove();
            watchPgNextBtn.remove();
            watchPgSelEpBtn.remove();
        }

        // Display base
        watch_pg_tmr = setTimeout(() => 
        {
            clearTimeout(watch_pg_tmr);
            documentBody.classList.add("bodystop");
            watchPgBase.classList.add("active");

            watchPgBase.addEventListener("transitionend", function handleTransitionEnd()
            {
                watchPgBase.removeEventListener("transitionend", handleTransitionEnd);

                // Load the show's information
                preShowSection(watch_pg_show_name);

                // Building the video player
                initUVPlyr();
            });
        },300);

        // Returning back to show's info page (Closes the watch page)
        const clsWatchPgMdl = () =>
        {
            // Stop and remove video
            const currVid = document.querySelector(".video_player .main-video");
            if(currVid) 
            {
                currVid.pause();

                // Revoke the blob URL to free memory
                const srcSets = currVid.querySelectorAll("source");
                if((srcSets) && (srcSets.length > 0))
                {
                    srcSets.forEach((source) => 
                    {
                        // Revoke blob URL
                        if (source.src.startsWith("blob:"))
                        {
                            URL.revokeObjectURL(source.src);
                        }

                        // Remove src
                        source.removeAttribute("src"); 
                    });
                }

                // Revoke the video's src
                URL.revokeObjectURL(currVid.src);
                currVid.removeAttribute("src");

                // Unload the video
                currVid.load();
            }

            // Update page url with equivalent
            history.pushState(null, '', `#/info/${watch_pg_show_name}`);

            watchPgBase.classList.remove("active");
            watch_pg_tmr = setTimeout(() => 
            {
                clearTimeout(watch_pg_tmr);
                documentBody.classList.remove("bodystop");
                watchPgBase.remove();
            },300);
        }

        watchPgRetBtn.onclick = () => clsWatchPgMdl();
    }

    // Add listeners for the watch page
    function addWatchPageListeners()
    {
    }










