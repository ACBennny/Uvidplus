/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    const wpg_ctrl_int = 
    `
        <button type="button" class="genBtnBox greySolidBtn hide watch_pg_eps_sel_btn">
            <div class="genBtnIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                    <path d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z" />
                    <path fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561s-2.636-.987-6.01-.987m-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794z" clip-rule="evenodd" />
                </svg>
            </div>
            <span class="genBtnText">Episodes</span>
        </button>
    `;
    const wpg_ctrl_ext = 
    `
        <button type="button" class="genBtnBox genIconBtn transBtn hide watch_pg_eps_sel_btn">
            <div class="genBtnIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                    <path d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z" />
                    <path fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561s-2.636-.987-6.01-.987m-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794z" clip-rule="evenodd" />
                </svg>
            </div>
        </button>
        <button type="button" class="genBtnBox greySolidBtn watch_pg_plyr_sel_btn openGenMenuModalBtn" data-gen-menu-modal-type="watch_plyr_sel_menu">
            <div class="genBtnIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                    <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                </svg>
            </div>
            <span class="genBtnText">Player</span>
        </button>
    `;
    let watch_pg_show_link = "";
    let watch_pg_show_ssns = [];
    let watchPgShowSsn = 0;
    let watchPgShowEps = 1;
    let isWpgExt = false;
    let extDfltPlyrExt = "_ext_use_sel_ext_plyr_1";
    let extDfltPlyrPos = 0;
    let watchPgRetBtn;
    let watchPgSsnTxt;
    let watchPgEpsTxt;


    // Opens the Watch Page without reloading the page
    function preWatchPage(url = "")
    {
        if(url.length > 0)
        {
            history.pushState(null, '', url);
            initWatchPage(url.split("/")[4], url.split("/")[5]);
        }
    }

    // Update Show info
    function updWatchInfo()
    {
        watchPgSsnTxt.textContent = `S${watchPgShowSsn}`;
        watchPgEpsTxt.textContent = `E${watchPgShowEps}`;
        history.pushState(null, '', `#/${info_pg_show_type.toLowerCase()}/${info_pg_show_id}/watch/${watchPgShowSsn}/${watchPgShowEps}`);
    }


    // Format and fix the given season and episode of the selected show
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
        const __temp_usr_dt = await getUserData();
        const __is_ext = __temp_usr_dt?.use_ext_plr;

        if((typeof __is_ext === "boolean")) isWpgExt = __is_ext;

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
                            ${
                                ((isWpgExt == true)) ? `<div id="watch_pg_plyr_ext_box_id" class="watch_pg_plyr_ext_box_cls"></div>`
                                :   `
                                        <div class="vid_bdr">
                                            <div class="vid_box">
                                                <div class="container video_player show-controls">
                                                </div>
                                            </div>
                                        </div>
                                    `
                            }
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
                                    ${((isWpgExt !== undefined) && (isWpgExt == true)) ? wpg_ctrl_ext : wpg_ctrl_int}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentCtnt.insertAdjacentElement('beforeend', watchPgBase);

        // Add selectors
        watchPgRetBtn = watchPgBase.querySelector(".watch_pg_ret_btn");
        watchPgSsnTxt = watchPgBase.querySelector(".watch_pg_ep_txt .ssn");
        watchPgEpsTxt = watchPgBase.querySelector(".watch_pg_ep_txt .eps");
        let watchPgPrevBtn = watchPgBase.querySelector(".watch_pg_prev_ep_btn");
        let watchPgNextBtn = watchPgBase.querySelector(".watch_pg_next_ep_btn");
        let watchPgSelEpBtn = watchPgBase.querySelector(".watch_pg_eps_sel_btn");
        let watch_pg_tmr;

        // Returning back to show's info page (Closes the watch page)
        const clsWatchPgMdl = async (isVal = false) =>
        {
            document.querySelector(".watch_pg_plyr_ldr_bdr").classList.remove("loaded");

            if((isWpgExt == true))
            {
                document.querySelectorAll(".watch_pg_plyr_ext_box_cls").forEach((box) => 
                {
                    const box_frm = box.querySelector(".watch_pg_plyr_ext_frm_cls");
                    if(box_frm) box_frm.remove();
                    box.innerHTML = "";
                });
            }
            else
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

                await saveWatchProgessInHist();
            }

            // Update show's CTA button
            updInfoPageCTA();

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

        // Update layout for tv shows
        if(info_pg_show_type.toLowerCase() === "tv")
        {
            // Get and organize the seasons
            watch_pg_show_ssns = showsStructData?.seasons?.filter(item => ((typeof item?.season_number === "number") && (item?.season_number > 0))) || [];
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
                ((isWpgExt == true)) ? init_ext_plyr(extDfltPlyrExt) : restartVid();
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
                ((isWpgExt == true)) ? init_ext_plyr(extDfltPlyrExt) : restartVid();
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

        if((isWpgExt == true)) document.querySelector(".watch_pg_plyr_sel_btn").querySelector(".genBtnText").textContent = `Player ${extDfltPlyrExt.slice((extDfltPlyrExt.length - 1))}`;

        // Display base
        watch_pg_tmr = setTimeout(() => 
        {
            clearTimeout(watch_pg_tmr);
            watchPgBase.classList.add("active");
            attachGenMenuModalEventListeners();

            watchPgBase.addEventListener("transitionend", function handleTransitionEnd()
            {
                documentBody.classList.add("bodystop");
                watchPgBase.removeEventListener("transitionend", handleTransitionEnd);

                ((isWpgExt == true)) ? init_ext_plyr(extDfltPlyrExt) : preUVPlyr();
            });
        },300);

        // Close the watch page
        watchPgRetBtn.onclick = () => clsWatchPgMdl();
    }

    const fail_ext_plyr = async () =>
    {
        notification('notifyBad', `Something went wrong. Reloading Now`);
        preload.classList.remove("preloadClose");
        try
        {
            await updateUserData({use_ext_plr: false});
        }
        catch(err)
        {}
        window.location.reload();
    }

    let init_ext_plyr = async (ext, ext_pos = 0) =>
    {
        try
        {
            updUsrWatchHist();
            document.querySelector(".watch_pg_plyr_ldr_bdr").classList.remove("loaded");
            
            if((typeof ext !== "string") || (ext === "")) throw new Error("");

            const _ext_frm_base = document.querySelector(".watch_pg_base");
            const _ext_frm_wrap = document.getElementById("watch_pg_plyr_ext_box_id");
            let _ext_ssn_ep = {};

            if((
                (!isPageWatchPage())
                || (!(_ext_frm_wrap) || (typeof _ext_frm_wrap !== "object") || (_ext_frm_wrap == null))
                || (typeof isWpgExt !== "boolean")
                || ((typeof isWpgExt === "boolean") && !isWpgExt)
                || ((typeof info_pg_show_link !== "string")|| (info_pg_show_link === ""))
                || ((typeof info_pg_show_type !== "string")|| (info_pg_show_type === ""))
                || ((typeof info_pg_show_id !== "string") || (info_pg_show_id === ""))
            )) throw new Error("");
            
            if((info_pg_show_type.toLowerCase() === "tv"))
            {
                _ext_ssn_ep = formatWatchPgSsnEp(Number(watchPgShowSsn), Number(watchPgShowEps));
                watchPgShowSsn = _ext_ssn_ep?.season;
                watchPgShowEps = _ext_ssn_ep?.episode;
            }

            if((typeof watchPgShowSsn !== "number") || (typeof watchPgShowSsn !== "number")) throw new Error("");

            const _ext_id = info_pg_show_id;
            const _ext_ssn = watchPgShowSsn;
            const _ext_eps = watchPgShowEps;
            const _ext_show_link = ((info_pg_show_type.toLowerCase() === "tv")) ? `${info_pg_show_link}/watch/${_ext_ssn}/${_ext_eps}` : `${info_pg_show_link}/watch`;
            const _ext_theme = "1FC316";
            const _ext_theme_sec = "ABABAB";
            const _ext_subttl_lang = "en";
            const _ext_thisProf = await getSelectedProfile();
            const _ext_auto_mute = ((_ext_thisProf?.prof_auto_mute) && (typeof _ext_thisProf?.prof_auto_mute === "boolean")) ? _ext_thisProf?.prof_auto_mute : false;
            const _ext_auto_next = ((_ext_thisProf?.prof_auto_next) && (typeof _ext_thisProf?.prof_auto_next === "boolean")) ? _ext_thisProf?.prof_auto_next : false;
            const _ext_auto_play = ((_ext_thisProf?.prof_auto_play) && (typeof _ext_thisProf?.prof_auto_play === "boolean")) ? _ext_thisProf?.prof_auto_play : false;
            const _ext_auto_skip = ((_ext_thisProf?.prof_auto_skip) && (typeof _ext_thisProf?.prof_auto_skip === "boolean")) ? _ext_thisProf?.prof_auto_skip : false;
            const _ext_prof_hist = _ext_thisProf?.prof_history?.filter(item => item?.hist_link === _ext_show_link) || [];
            const _ext_vd_prgs = ((_ext_prof_hist.length > 0) && (_ext_prof_hist[0]?.hist_currTime)) ? timeToSeconds(`${_ext_prof_hist[0]?.hist_currTime}`) : 0;
            const _ext_ap = ((_ext_auto_play == true)) ? 1 : 0;
            const _ext_an = ((_ext_auto_next == true)) ? 1 : 0;
            let _ext_frm_org = ``;
            let _ext_frm_src = ``;

            switch(ext)
            {
                case '_ext_use_sel_ext_plyr_1':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://player.videasy.net/tv/${_ext_id}/${_ext_ssn}/${_ext_eps}?progress=${_ext_vd_prgs}&nextEpisode=true&autoplayNextEpisode=${_ext_auto_next}&episodeSelector=true&overlay=true"&color=${_ext_theme.toLowerCase()}` 
                        : `https://player.videasy.net/movie/${_ext_id}?progress=${_ext_vd_prgs}&overlay=true"&color=${_ext_theme.toLowerCase()}`;
                    break;


                case '_ext_use_sel_ext_plyr_2':
                    const _2_origs = [`vidfast.pro`, `vidfast.xyz`, `vidfast.io`, `vidfast.net`, `vidfast.in`, `vidfast.me`, `vidfast.pm`];
                    _ext_frm_org = `https://${_2_origs[ext_pos]}`;
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://${_2_origs[ext_pos]}/tv/${_ext_id}/${_ext_ssn}/${_ext_eps}?theme=${_ext_theme}&startAt=${_ext_vd_prgs}&autoPlay=${_ext_auto_play}&nextButton=true&autoNext=${_ext_auto_next}&title=true&poster=true&fullScreenButton=true&sub=${_ext_subttl_lang}&hideServer=false` 
                        : `https://${_2_origs[ext_pos]}/movie/${_ext_id}?theme=${_ext_theme}&startAt=${_ext_vd_prgs}&autoPlay=${_ext_auto_play}&title=true&poster=true&fullScreenButton=true&sub=${_ext_subttl_lang}&hideServer=false`;
                    break;
                    

                case '_ext_use_sel_ext_plyr_3':
                    const _3_origs = [`vidsrc.xyz`, `vidsrc.in`, `vidsrc.pm`, `vidsrc.net`];
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://${_3_origs[ext_pos]}/embed/tv?tmdb=${_ext_id}&season=${_ext_ssn}&episode=${_ext_eps}&ds_lang=${_ext_subttl_lang}&autoplay=${_ext_ap}&autonext=${_ext_an}` 
                        : `https://${_3_origs[ext_pos]}/embed/movie?tmdb=${_ext_id}&ds_lang=${_ext_subttl_lang}&autoplay=${_ext_ap}`;
                    break;

                    
                case '_ext_use_sel_ext_plyr_4':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://vidsrc.cc/v3/embed/tv/${_ext_id}/${_ext_ssn}/${_ext_eps}?autoPlay=${_ext_auto_play}&poster=true` 
                        : `https://vidsrc.cc/v3/embed/movie/${_ext_id}?autoPlay=${_ext_auto_play}&poster=true`;
                    break;

                case '_ext_use_sel_ext_plyr_5':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://111movies.com/tv/${_ext_id}/${_ext_ssn}/${_ext_eps}` 
                        : `https://111movies.com/movie/${_ext_id}`;
                    break;
                    
                case '_ext_use_sel_ext_plyr_6':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://vidlink.pro/tv/744653/${_ext_ssn}/${_ext_eps}?primaryColor=${_ext_theme}&secondaryColor=${_ext_theme_sec.toLowerCase()}&iconColor=dfdfdf&icons=default&player=default&title=true&poster=true&autoplay=${_ext_auto_play}&nextbutton=true` 
                        : `https://vidlink.pro/movie/744653?primaryColor=${_ext_theme}&secondaryColor=${_ext_theme_sec.toLowerCase()}&iconColor=dfdfdf&icons=default&player=default&title=true&poster=true&autoplay=${_ext_auto_play}&nextbutton=false`;
                    break;
                    
                case '_ext_use_sel_ext_plyr_7':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://player.smashystream.com/tv/${_ext_id}?s=${_ext_ssn}&e=${_ext_eps}` 
                        : `https://player.smashystream.com/movie/${_ext_id}`;
                    break;
                    
                case '_ext_use_sel_ext_plyr_8':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://multiembed.mov/directstream.php?video_id=${_ext_id}&tmdb=1&s=${_ext_ssn}&e=${_ext_eps}&check=1` 
                        : `https://multiembed.mov/directstream.php?video_id=${_ext_id}&tmdb=1&check=1`;
                    break;
                    
                case '_ext_use_sel_ext_plyr_9':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://vidjoy.pro/embed/tv/${_ext_id}/${_ext_ssn}/${_ext_eps}?adFree=true` 
                        : `https://vidjoy.pro/embed/movie/${_ext_id}?adFree=true`;
                    break;
                    
                case '_ext_use_sel_ext_plyr_10':
                    _ext_frm_src = (info_pg_show_type.toLowerCase() === "tv") 
                        ? `https://embed.su/embed/tv/${_ext_id}/${_ext_ssn}/${_ext_eps}` 
                        : `https://embed.su/embed/movie/${_ext_id}`;
                    break;

                default:
                    throw new Error("");
                    break;
            }
            
            extDfltPlyrExt = ext;
            extDfltPlyrPos = ext_pos;

            const _ext_usr_watch_hist_upd = async (_this_ssn, _this_eps, currTime = 0, ttlTime = 57) =>
            {
                try
                {
                    currTime = ((typeof Number(currTime) === "number") && !(isNaN(currTime))) ? Math.floor(currTime?.toFixed(0)) : 0;
                    ttlTime = ((typeof Number(ttlTime) === "number") && !(isNaN(ttlTime))) ? Math.floor(ttlTime?.toFixed(0)) : 57;

                    if((Math.abs((currTime - lastUVidSv)) >= sv_prd_cycle) && !isUVidSv)
                    {
                        lastUVidSv = currTime;
                        await updUsrWatchHist(secondsToTime(currTime), secondsToTime(ttlTime));

                        if((info_pg_show_type.toLowerCase() === "tv"))
                        {
                            _ext_ssn_ep = formatWatchPgSsnEp(Number(_this_ssn), Number(_this_eps));
                            watchPgShowSsn = _ext_ssn_ep?.season;
                            watchPgShowEps = _ext_ssn_ep?.episode;
                        }
                        
                        updWatchInfo();
                    }
                }
                catch(_ext_sv_err){}
            }
            
            const _ext_plyr_1_frm_lstnr = async (_ext_event) =>
            {
                try
                {
                    if((typeof _ext_event.data === "string"))
                    {
                        const _ext_ev_dt = JSON.parse(_ext_event?.data);
                        const _ext_data = JSON.parse(_ext_ev_dt?.data);
                        
                        if((info_pg_show_type.toLowerCase() === "tv"))
                        {
                            const _ext_last_ssn = _ext_data[`tv-${_ext_id}`]?.last_season_watched;
                            const _ext_last_ep = _ext_data[`tv-${_ext_id}`]?.last_episode_watched;
                            const _ext_cur_time = _ext_data[`tv-${_ext_id}`]?.show_progress[`s${_ext_last_ssn}e${_ext_last_ep}`]?.progress?.watched || _ext_data[`tv-${_ext_id}`]?.progress?.watched;
                            const _ext_ttl_dur = _ext_data[`tv-${_ext_id}`]?.show_progress[`s${_ext_last_ssn}e${_ext_last_ep}`]?.progress?.duration || _ext_data[`tv-${_ext_id}`]?.progress?.duration;

                            _ext_usr_watch_hist_upd(_ext_last_ssn, _ext_last_ep, _ext_cur_time, _ext_ttl_dur);
                        }
                        else
                        {
                            const _ext_cur_time = _ext_data[`movie-${_ext_id}`]?.progress?.watched;
                            const _ext_ttl_dur = _ext_data[`movie-${_ext_id}`]?.progress?.duration;

                            _ext_usr_watch_hist_upd(null, null, _ext_cur_time, _ext_ttl_dur);
                        }
                    }
                }
                catch(_ext_err){}
            }

            const _ext_plyr_2_frm_lstnr = ({origin, data}) =>
            {
                try
                {
                    if((origin !== _ext_frm_org) || !(data)) return;

                    if((data.type === "PLAYER_EVENT"))
                    {
                        const {currentTime, duration, season, episode} = data.data;
                        _ext_usr_watch_hist_upd(season, episode, currentTime, duration);
                    }
                }
                catch(_ext_err){}
            }

            _ext_frm_base.oncontextmenu = (e) => {e.preventDefault(); fail_ext_plyr();}
            _ext_frm_wrap.oncontextmenu = (e) => {e.preventDefault(); fail_ext_plyr();}

            const _ext_cur_frm = document.getElementById("watch_pg_plyr_ext_frm_id");
            if(_ext_cur_frm) _ext_cur_frm.remove();

            const _ext_new_frm = document.createElement("iframe");
            _ext_new_frm.className = "watch_pg_plyr_ext_frm_cls";
            _ext_new_frm.setAttribute("id", "watch_pg_plyr_ext_frm_id");
            _ext_new_frm.setAttribute("frameborder", "0");
            _ext_new_frm.setAttribute("allowfullscreen", "");
            _ext_new_frm.setAttribute("allow", "encrypted-media");
            _ext_new_frm.setAttribute("src", _ext_frm_src);

            _ext_new_frm.oncontextmenu = (e) => {e.preventDefault();}

            if((ext === "_ext_use_sel_ext_plyr_1"))
            {
                window.onmessage = (_ext_event) => _ext_plyr_1_frm_lstnr(_ext_event);
            }
            else if((ext === "_ext_use_sel_ext_plyr_2"))
            {
                window.onmessage = ({origin, data}) => _ext_plyr_2_frm_lstnr({origin, data});
            }
            
            _ext_frm_wrap.innerHTML = "";
            _ext_frm_wrap.insertAdjacentElement('afterbegin', _ext_new_frm);

            setTimeout(() => document.querySelector(".watch_pg_plyr_ldr_bdr").classList.add("loaded"), 1000);
        }
        catch(error) 
        {
            fail_ext_plyr();
        }
    }
    
    async function addExtSelEvLstnr(btnEv)
    {
        try
        {
            const ply_sets = [1, 7, 4, 1, 1, 1, 1, 1, 1, 1];
            const _ext_plyr_sel_btn = document.querySelector(".watch_pg_plyr_sel_btn");
            const _ext_frm_wrap = document.getElementById("watch_pg_plyr_ext_box_id");
            const _ext_menu_box = document.querySelector(".watchPlyrSelCtntBox");
            let _ext_menu_opt_struct = ``;

            if((
                (!isPageWatchPage())
                || ply_sets.length <= 0
                || (!(_ext_plyr_sel_btn) || (typeof _ext_plyr_sel_btn !== "object") || (_ext_plyr_sel_btn == null))
                || (!(_ext_frm_wrap) || (typeof _ext_frm_wrap !== "object") || (_ext_frm_wrap == null))
                || (!(_ext_menu_box) || (typeof _ext_menu_box !== "object") || (_ext_menu_box == null))
                || (typeof isWpgExt !== "boolean")
                || ((typeof isWpgExt === "boolean") && !isWpgExt)
                || ((typeof info_pg_show_link !== "string")|| (info_pg_show_link === ""))
                || ((typeof info_pg_show_type !== "string")|| (info_pg_show_type === ""))
                || ((typeof info_pg_show_id !== "string") || (info_pg_show_id === ""))
            )) throw new Error("");


            for(let e = 0; e < ply_sets.length; e++)
            {
                for(let p = 1; p <= ply_sets[e]; p++)
                {
                    _ext_menu_opt_struct +=
                    `
                        <button class="genMenuModalCtntBtnBox watchPlyrSelCtntBtn ${(e > 1) ? 'important' : ''}" data-sel-id="${e + 1}" data-sel-pos="${(p - 1)}">
                            <div class="genMenuModalCtntBtnIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                    <path fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd" />
                                    <path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" />
                                </svg>
                            </div>
                            <div class="genMenuModalCtntBtnText">Player ${(p > 1) ? `${e + 1} - ${p}` : `${e + 1}`}</div>
                        </button>
                    `;
                }
            }

            _ext_menu_box.oncontextmenu = (e) => {e.preventDefault(); fail_ext_plyr();}
            _ext_menu_box.innerHTML = 
            `
                <div class="genMenuModalCtntSectBox">
                    <p class="genMenuModalCtntSectText">Select External Player</p>
                </div>
                <div class="genMenuModalCtntDescBox">
                    <p class="genMenuModalCtntDescText">
                        Options marked <strong>RED</strong> have near zero support for any Uvid+ features.
                        Non-red options may have limited support but can still be inaccurate or fail.
                    </p>
                </div>
                ${_ext_menu_opt_struct}
            `;

            const _ext_menu_btns = _ext_menu_box.querySelectorAll(".genMenuModalCtntBtnBox.watchPlyrSelCtntBtn");

            if((_ext_menu_btns.length <= 0)) throw new Error("");

            _ext_menu_btns.forEach((btn) => 
            {
                btn.addEventListener("contextmenu", (e) => 
                {
                    e.preventDefault();
                    fail_ext_plyr();
                });

                btn.addEventListener("click", () => 
                {
                    btn.disabled = true;
                    _ext_menu_btns.forEach((_oth_btn) => _oth_btn.disabled = true);

                    try
                    {
                        const btn_ext = Number(btn.getAttribute("data-sel-id"));
                        const btn_pos = Number(btn.getAttribute("data-sel-pos"));

                        if((typeof btn_ext !== "number") || isNaN(btn_ext) || (typeof btn_pos !== "number") || isNaN(btn_pos)) throw new Error("");

                        _ext_plyr_sel_btn.querySelector(".genBtnText").textContent = btn.querySelector(".genMenuModalCtntBtnText")?.textContent || `Player ${(btn_pos > 0) ? `${btn_ext - 1}-${btn_pos + 1}` : (btn_ext- 1)}`;
                        init_ext_plyr(`_ext_use_sel_ext_plyr_${btn_ext}`, btn_pos);
                    }
                    catch(btn_err)
                    {
                        fail_ext_plyr();
                    }
                });
            });
        }
        catch(error)
        {
            fail_ext_plyr();
        }
    }


