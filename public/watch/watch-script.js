/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



    let watch_pg_show_link = "";
    let watch_pg_show_ssns = [];
    let watchPgShowSsn = 0;
    let watchPgShowEps = 1;


    // Opens the Watch Page without reloading the page
    function preWatchPage(url = "")
    {
        if(url.length > 0)
        {
            history.pushState(null, '', url);
            initWatchPage(url.split("/")[4], url.split("/")[5]);
        }
    }


    function formatWatchPgSsnEp(season, episode)
    {
        // If array is empty, no episodes exist
        if (!watch_pg_show_ssns.length) return { season: null, episode: null };

        // Default to first season and episode if invalid types or undefined/null
        if(typeof season !== 'number' || typeof episode !== 'number' || isNaN(season) || isNaN(episode))
        {
            return {
                season: watch_pg_show_ssns[0]?.season_number,
                episode: 1
            };
        }

        const seasonIndex = watch_pg_show_ssns.findIndex(s => s.season_number === season);
        const maxEpisodes = watch_pg_show_ssns[seasonIndex].episode_count;

        // Fallback to first available season & episode
        if (seasonIndex === -1) 
        {
            return {
                season: watch_pg_show_ssns[0].season_number,
                episode: 1,
            };
        }

        // Clamp to the first episode if less than one
        if (episode < 1) episode = 1;

        // Clamp to the last episode if less than one
        if (episode > maxEpisodes) episode = maxEpisodes;

        return { season, episode };
    }
    

    // Init watch page
    async function initWatchPage(ssn = null, eps = null)
    {
        // Build page base
        let show_title = showsStructData?.name || showsStructData?.title || "N/A";
        const watchPgBase = document.createElement("div");
        watchPgBase.className = "watch_pg_base";
        watchPgBase.innerHTML = 
        `
            <div class="watch_pg_bcg"></div>
            <div class="watch_pg_bdr">
                <div class="watch_pg_box">
                    <div class="watch_pg_plyr_bdr">
                        <div class="watch_pg_plyr_box">
                            <div class="watch_pg_plyr_ldr_bdr">
                                <div class="watch_pg_plyr_ldr_box">
                                    <div class="watch_pg_plyr_ldr_pctl_bdr">
                                        <div class="watch_pg_plyr_ldr_icon_bdr">
                                        </div>
                                        <div class="watch_pg_plyr_ldr_pctl_box">
                                            <p class="watch_pg_plyr_ldr_pctl_txt">N/A%</p>
                                        </div>
                                        <div class="watch_pg_plyr_atn_bdr">
                                            <button type="button" class="genBtnBox genIconBtn transBtn watch_pg_plyr_atn_btn hide" disabled>
                                                <div class="genBtnIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                        <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        <p class="watch_pg_ttl_txt">${show_title}</p>
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

        // Returning back to show's info page (Closes the watch page)
        const clsWatchPgMdl = async (isVal = false) =>
        {
            // Stop and remove video
            document.querySelector(".watch_pg_plyr_ldr_bdr").classList.remove("loaded");
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
                        if(source.src.startsWith("blob:"))
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

            // Update show's CTA button
            if((isVal == true))
            {
                await saveWatchProgessInHist();
                updInfoPageCTA();
            }

            // Update page url with equivalent
            history.pushState(null, '', info_pg_show_link);

            watchPgBase.classList.remove("active");
            watch_pg_tmr = setTimeout(() => 
            {
                clearTimeout(watch_pg_tmr);
                documentBody.classList.remove("bodystop");
                watchPgBase.remove();
            },300);
        }

        // Update Show info
        const updWatchInfo = () =>
        {
            watchPgSsnTxt.textContent = `S${watchPgShowSsn}`;
            watchPgEpsTxt.textContent = `E${watchPgShowEps}`;
            history.pushState(null, '', `#/${info_pg_show_type.toLowerCase()}/${info_pg_show_id}/watch/${watchPgShowSsn}/${watchPgShowEps}`);

            // Restart video
            restartVid();
        }

        // Update layout for tv shows
        if(info_pg_show_type.toLowerCase() === "tv")
        {
            // Get and organize the seasons
            watch_pg_show_ssns = showsStructData?.seasons?.filter(item => typeof item?.season_number === "number");
            watch_pg_show_ssns.sort((a, b) => 
            {
                const valA = Number(a["season_number"]) || 0;
                const valB = Number(b["season_number"]) || 0;
                return valA - valB;
            });

            // Get and format season & episode
            const valSsnEp = formatWatchPgSsnEp(Number(hash_parts[4] || ssn), Number(hash_parts[5] || eps));
            watchPgShowSsn = valSsnEp?.season;
            watchPgShowEps = valSsnEp?.episode;

            // Clean up url (Remove unsued sections)
            history.replaceState(null, '', `#/${info_pg_show_type}/${info_pg_show_id}/watch/${watchPgShowSsn}/${watchPgShowEps}`);

            // Check if season & episode is available
            if((watchPgShowSsn == null) || (watchPgShowEps == null))
            {
                console.error(`Invalid Season or Episode`);
                notification(`notifyBad` , `Episode unavailable or doesn't exist`);
                clsWatchPgMdl();
                return;
            }

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
                    const prevSsnIndex = watch_pg_show_ssns.findIndex(ssn => ssn.season_number === watchPgShowSsn) - 1;
                    // Return if user is at the end of the series
                    if(prevSsnIndex >= 0)
                    {
                        // Set values for new season
                        watchPgShowSsn = watch_pg_show_ssns[prevSsnIndex]?.season_number;
                        watchPgShowEps = watch_pg_show_ssns[prevSsnIndex]?.episode_count;
                    }
                    else
                    {
                        notification ('notifyBad', `You are at the start of the series`);
                        return;
                    }
                }
                else
                {
                    watchPgShowEps--;
                }
                updWatchInfo();
            }

            // Going to the next episode
            watchPgNextBtn.onclick = () =>
            {
                const ssnIndex = watch_pg_show_ssns.findIndex(ssn => ssn?.season_number === watchPgShowSsn);
                const maxEpisode = watch_pg_show_ssns[ssnIndex]?.episode_count;

                if((watchPgShowEps >= maxEpisode))
                {
                    const nextSsnIndex = ssnIndex + 1;

                    // Return if user is at the end of the series
                    if(nextSsnIndex >= watch_pg_show_ssns.length)
                    {
                        notification ('notifyBad', `You are at the end of the series`);
                        return;
                    }
                    else
                    {
                        // Set values for new season
                        watchPgShowSsn = watch_pg_show_ssns[nextSsnIndex]?.season_number;
                        watchPgShowEps = 1;
                    }
                }
                else
                {
                    watchPgShowEps++;
                }
                updWatchInfo();
            }
            
            // Selecting Episodes (Currently redirects you to the shows info page)
            watchPgSelEpBtn.onclick = () => 
            {
                // Close the modal
                clsWatchPgMdl();

                // Scroll to the episode section
                let epSect = document.getElementById("info_ep_list");

                if(epSect)
                {
                    window.scrollTo(
                    {
                        top: Math.ceil((epSect.getBoundingClientRect().top + window.pageYOffset)),
                        behavior: "smooth"
                    });
                }
            }
        }
        else
        {
            // Clean up url (Remove unsued sections)
            history.replaceState(null, '', `#/${info_pg_show_type}/${info_pg_show_id}/watch`);

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

                // Build the video player
                preUVPlyr();
            });
        },300);

        // Close the watch page
        watchPgRetBtn.onclick = () => clsWatchPgMdl();
    }


