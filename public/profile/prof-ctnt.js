/*****************************************************************************
 * This will code for constructing carousels of a user's slected profile
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
*****************************************************************************/


// Declarations

    let crsl_slider_box;
    let crsl_step = 20;
    let crsl_history_curr_index = 0;
    let crsl_likes_curr_index = 0;
    let crsl_dislikes_curr_index = 0;
    let crsl_type_fnd = "";
    let crsl_type_map = 
    {
        "continue": "prof_history", 
        "history": "prof_history", 
        "likes" : "prof_likes", 
        "dislikes": "prof_dislikes"
    };
    let crsl_empty_struct = 
    `
        <div class="slide_card_base basic_carousel_card">
            <div class="slide_card_bdr">
                <div class="slide_card_box">
                    <div class="slide_card ">
                        <div class="view_more_bdr">
                            <div class="view_more_box">
                                <p class="view_more_name">Nothing to see here</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide_card_bcg"></div>
            </div>
        </div>
    `;




    // Error notification
    function crsl_error(type = "", is_ctnt = false)
    {
        if((is_ctnt)) return notification("notifyGood", `All shows have been fetched`);

        console.error(`${type} is not valid`);
        notification("notifyBad", "An error occured while fetching profile info");
        
    }


    
    // Constructs the carousel
    async function crsl_construct(type = "", init = false)
    {
        type = type.toLowerCase();
        let selectedProfile = await getSelectedProfile();
        let crsl_struct = ``;

        Object.entries(crsl_type_map).forEach(async ([key, fld]) =>
        {
            if((type === key))
            {

                let this_slider_box = document.querySelectorAll(`.basic_${type}_slider_card_box`);

                // Return if no carousel exists to place content in
                if((this_slider_box == undefined) || (this_slider_box == null) || (this_slider_box.length <= 0)) return crsl_error(type);

                // Display an "Empty Status" message to the user if there's no content to display
                if((selectedProfile[fld] == undefined) || (selectedProfile[fld] == null) || (selectedProfile[fld].length <= 0))
                {
                    this_slider_box.forEach((box) => 
                    {
                        // If the user is on the home page, remove all "Continue" carousel components
                        if((type === "continue") && (hash_parts[1] === "home"))
                        {
                            box.closest(".basic_slider_bdr.basic_carousel").remove();
                        }
                        else
                        {
                            box.innerHTML = crsl_empty_struct;
                        }
                    });
                    return;
                }

                // Fetch content for each carousel
                if((type === "continue") || (type === "history"))
                {
                    crsl_history_curr_index = init == true ? selectedProfile[fld].length : crsl_history_curr_index;
                    const next_index = Math.max((crsl_history_curr_index - crsl_step), 0);
                    const hist_items = selectedProfile[fld]?.slice(next_index, crsl_history_curr_index);
                    const hist_fetch = hist_items.map(item => 
                    {
                        const itemSplit = item?.hist_link?.split('/');
                        const itemType = itemSplit[1];
                        const itemId = itemSplit[2];
                        
                        return __getUVPShowDet(itemId, itemType);
                    });
                    let hist_sets = await Promise.all(hist_fetch);
                    hist_sets = hist_sets.reverse();

                    hist_items.reverse().forEach((hist_item, i) =>
                    {
                        const itemLink = hist_item?.hist_link;
                        const itemSplit = itemLink.split('/');
                        const itemType = itemSplit[1];
                        const itemSsn = itemSplit[4];
                        const itemEp = itemSplit[5];
                        const itemMatch = hist_sets[i];

                        // Convert current time and total time to seconds
                        const currentTime = timeToSeconds(hist_item.hist_currTime);
                        const totalTime = timeToSeconds(hist_item.hist_totalTime);
                        const percentage = Math.round(((currentTime / totalTime) * 100));
                        const percent_bound = type === "continue" ? 100 : 1000;

                        if(itemMatch && (percentage < percent_bound))
                        {
                            const {
                                show_title = `${itemMatch?.name || itemMatch?.title || "N/A"}`,
                                show_year = `${itemMatch?.first_air_date?.toString()?.trim()?.split("-")[0] || itemMatch?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                                show_foreground = `https://image.tmdb.org/t/p/original/${itemMatch?.poster_path}`,
                            } = itemMatch;

                            // Insert correct layout for episode count based on show type
                            const itemPrgTxt = itemType.toLowerCase() === "tv"
                            ?
                                `
                                    <span class="cardProgressName_szn">S${itemSsn}</span>
                                    <span class="cardProgressName_eps">E${itemEp}</span>
                                `
                            : `Movie`;

                            crsl_struct += 
                            `
                                <div class="slide_card_base basic_carousel_card crsl_card">
                                    <div class="slide_card_bdr">
                                        <div class="slide_card_box">
                                            <div class="slide_card ">
                                                <a href="${itemLink}" class="cardLinkCover"></a>
                                                <div class="cardImgBox">
                                                    <div class="img_preload_box">
                                                        <div class="img_preload_sibling"></div>
                                                        <img loading="lazy" 
                                                            onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                            onerror="this.parentElement.classList.add('loaderror')"
                                                            src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                                        >
                                                    </div>
                                                </div>
                                                <div class="cardinfo cardInfoBdr">
                                                    <div class="cardInfoBox">
                                                        <div class="cardInfo_tagBdr">
                                                            <div class="cardInfo_tagBox">
                                                                <p class="cardInfo_tagText">${itemType}</p>
                                                            </div>
                                                            <div class="cardInfo_tagBox">
                                                                <p class="cardInfo_tagText">${show_year}</p>
                                                            </div>
                                                        </div>
                                                        <div class="cardInfo_titleBox">
                                                            <h3 class="cardInfo_titleText">${show_title}</h3>
                                                        </div>
                                                        <div class="cardProgressBox" style="--cardProgressBarCurrLengthWidth: ${percentage}%">
                                                            <div class="cardProgressHeader">
                                                                <div class="cardProgressName">
                                                                    <p class="cardProgressName_text">${itemPrgTxt}</p>
                                                                </div>
                                                                <div class="cardProgressTime">
                                                                    <p class="cardProgressTime_current">${hist_item.hist_currTime}</p>
                                                                    <p class="cardProgressTime_divider">/</p>
                                                                    <p class="cardProgressTime_total">${hist_item.hist_totalTime}</p>
                                                                </div>
                                                            </div>
                                                            <div class="cardProgressBarBdr">
                                                                <div class="cardProgressBarBox cardProgressBar_totalLength">
                                                                    <div class="cardProgressBar_currLength"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cardAddToListBdr">
                                                    <div class="cardAddToListBox">
                                                        <div class="cardAddToListIconBox crsl_remove_btn" data-crsl-remove-type="history" title="Remove from history">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
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
                        }
                    });

                    // Update the current index
                    crsl_history_curr_index = next_index;

                    // Insert items before the "Load More" button
                    this_slider_box.forEach((box) => 
                    {
                        let more_btn = box.querySelector(`.crsl_more_btn.more_${type}_card`);

                        // Display the "Empty" status message if the struct is empty
                        if((crsl_struct === ""))
                        {
                            // If the user is on the home page, remove all "Continue" carousel components
                            if((type === "continue") && (hash_parts[1] === "home")) return box.closest(".basic_slider_bdr.basic_carousel").remove();

                            return box.innerHTML = crsl_empty_struct;
                        }

                        // Insert the content
                        more_btn.insertAdjacentHTML(`beforebegin`, crsl_struct);
                        
                        // Scroll back to start of slider
                        if((init)) box.scrollTo(
                        {
                            left: 0,
                            behavior: "instant"
                        });

                        // Remove the more button if all content have been fetched
                        if((crsl_history_curr_index <= 0))
                        {
                            more_btn.remove();
                            return;
                        }
                    });
                }
                else if(type === "likes")
                {
                    crsl_likes_curr_index = init == true ? selectedProfile[fld].length : crsl_likes_curr_index;
                    const next_index = Math.max((crsl_likes_curr_index - crsl_step), 0);
                    const likes_items = selectedProfile[fld]?.slice(next_index, crsl_likes_curr_index);
                    const likes_fetch = likes_items.map(item => 
                    {
                        const itemSplit = item?.ls_item?.split('/');
                        const itemType = itemSplit[1];
                        const itemId = itemSplit[2];
                        
                        return __getUVPShowDet(itemId, itemType);
                    });
                    let likes_sets = await Promise.all(likes_fetch);
                    likes_sets = likes_sets.reverse();

                    likes_items.reverse().forEach((likes_item, i) =>
                    {
                        const itemLink = likes_item.ls_item;
                        const itemSplit = itemLink.split('/');
                        const itemType = itemSplit[1];
                        const itemMatch = likes_sets[i];

                        if(itemMatch)
                        {
                            const {
                                show_title = `${itemMatch?.name || itemMatch?.title || "N/A"}`,
                                show_year = `${itemMatch?.first_air_date?.toString()?.trim()?.split("-")[0] || itemMatch?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                                show_foreground = `https://image.tmdb.org/t/p/original/${itemMatch?.poster_path}`,
                            } = itemMatch;
                            
                            crsl_struct += 
                            `
                                <div class="slide_card_base max_sizing basic_carousel_card crsl_card">
                                    <div class="slide_card_bdr">
                                        <div class="slide_card_box">
                                            <div class="slide_card">
                                                <a href="${itemLink}" class="cardLinkCover"></a>
                                                <div class="cardImgBox">
                                                    <div class="img_preload_box">
                                                        <div class="img_preload_sibling"></div>
                                                        <img loading="lazy" 
                                                            onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                            onerror="this.parentElement.classList.add('loaderror')"
                                                            src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                                        >
                                                    </div>
                                                </div>
                                                <div class="cardInfoBdr">
                                                    <div class="cardInfoBox">
                                                        <div class="cardInfo_tagBdr">
                                                            <div class="cardInfo_tagBox">
                                                                <p class="cardInfo_tagText">${itemType}</p>
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
                                                <div class="cardAddToListBdr">
                                                    <div class="cardAddToListBox">
                                                        <div class="cardAddToListIconBox crsl_remove_btn" data-crsl-remove-type="likes" title="Remove from likes">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
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
                        }
                    });

                    // Update the current index
                    crsl_likes_curr_index = next_index;

                    // Insert items before the "Load More" button
                    this_slider_box.forEach((box) => 
                    {
                        let more_btn = box.querySelector(`.crsl_more_btn.more_${type}_card`)

                        // Insert the content
                        more_btn.insertAdjacentHTML(`beforebegin`, crsl_struct);
                        
                        // Scroll back to start of slider
                        if((init)) box.scrollTo(
                        {
                            left: 0,
                            behavior: "instant"
                        });

                        // Remove the more button if all content have been fetched
                        if((crsl_likes_curr_index <= 0))
                        {
                            more_btn.remove();
                            return;
                        }
                    });
                }
                else if(type === "dislikes")
                {
                    crsl_dislikes_curr_index = init == true ? selectedProfile[fld].length : crsl_dislikes_curr_index;
                    const next_index = Math.max((crsl_dislikes_curr_index - crsl_step), 0);
                    const dislikes_items = selectedProfile[fld]?.slice(next_index, crsl_dislikes_curr_index);
                    const dislikes_fetch = dislikes_items.map(item => 
                    {
                        const itemSplit = item?.ds_item?.split('/');
                        const itemType = itemSplit[1];
                        const itemId = itemSplit[2];
                        
                        return __getUVPShowDet(itemId, itemType);
                    });
                    let dislikes_sets = await Promise.all(dislikes_fetch);
                    dislikes_sets = dislikes_sets.reverse();

                    dislikes_items.reverse().forEach((dislikes_item, i) =>
                    {
                        const itemLink = dislikes_item.ds_item;
                        const itemSplit = itemLink.split('/');
                        const itemType = itemSplit[1];
                        const itemMatch = dislikes_sets[i];

                        if(itemMatch)
                        {
                            const {
                                show_title = `${itemMatch?.name || itemMatch?.title || "N/A"}`,
                                show_year = `${itemMatch?.first_air_date?.toString()?.trim()?.split("-")[0] || itemMatch?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                                show_foreground = `https://image.tmdb.org/t/p/original/${itemMatch?.poster_path}`,
                            } = itemMatch;
                            
                            crsl_struct += 
                            `
                                <div class="slide_card_base max_sizing basic_carousel_card crsl_card">
                                    <div class="slide_card_bdr">
                                        <div class="slide_card_box">
                                            <div class="slide_card">
                                                <a href="${itemLink}" class="cardLinkCover"></a>
                                                <div class="cardImgBox">
                                                    <div class="img_preload_box">
                                                        <div class="img_preload_sibling"></div>
                                                        <img loading="lazy" 
                                                            onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                            onerror="this.parentElement.classList.add('loaderror')"
                                                            src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="cardImg"
                                                        >
                                                    </div>
                                                </div>
                                                <div class="cardInfoBdr">
                                                    <div class="cardInfoBox">
                                                        <div class="cardInfo_tagBdr">
                                                            <div class="cardInfo_tagBox">
                                                                <p class="cardInfo_tagText">${itemType}</p>
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
                                                <div class="cardAddToListBdr">
                                                    <div class="cardAddToListBox">
                                                        <div class="cardAddToListIconBox crsl_remove_btn" data-crsl-remove-type="likes" title="Remove from likes">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
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
                        }
                    });

                    // Update the current index
                    crsl_dislikes_curr_index = next_index;

                    // Insert items before the "Load More" button
                    this_slider_box.forEach((box) => 
                    {
                        let more_btn = box.querySelector(`.crsl_more_btn.more_${type}_card`)

                        // Insert the content
                        more_btn.insertAdjacentHTML(`beforebegin`, crsl_struct);
                        
                        // Scroll back to start of slider
                        if((init)) box.scrollTo(
                        {
                            left: 0,
                            behavior: "instant"
                        });

                        // Remove the more button if all content have been fetched
                        if((crsl_dislikes_curr_index <= 0))
                        {
                            more_btn.remove();
                            return;
                        }
                    });
                }
                else
                {
                    crsl_error(type);
                    return;
                }

                // Attach the remove button listeners
                crsl_remove_listeners();

                // Re-initialize sliders
                basicSlider();

                return;
            }
        });

    }



    // "Load More" button listeners
    function crsl_load_more_listener(init = false)
    {
        const crslMorebtns = document.querySelectorAll(".crsl_more_btn");

        crslMorebtns.forEach((oldBtn) => 
        {
            if(oldBtn.more_atn) oldBtn.removeEventListener("click" , oldBtn.more_atn);
        });

        crslMorebtns.forEach((newBtn) => 
        {
            const btn_more_atn = async () => 
            {
                let btn_more_type = newBtn.getAttribute("data-crsl-more-type");

                if((init))
                {
                    await crsl_construct(btn_more_type.toLowerCase(), true);
                    init = false;
                }
                else
                {
                    await crsl_construct(btn_more_type.toLowerCase());
                }
            }

            newBtn.addEventListener("click" , btn_more_atn);
            newBtn.more_atn = btn_more_atn;

            // Simulate click during first initialization
            if((init)) newBtn.click();
        });
    }
    


    // "Remove" button cards
    function crsl_remove_listeners()
    {
        const crslRemoveBtns = document.querySelectorAll(".crsl_remove_btn");

        crslRemoveBtns.forEach((oldBtn) => 
        {
            if(oldBtn.more_atn) oldBtn.removeEventListener("click" , oldBtn.more_atn);
        });

        crslRemoveBtns.forEach((newBtn) => 
        {
            const btn_more_atn = async function()
            {
                const selectedProfile = await getSelectedProfile();
                const btn_more_type = newBtn.getAttribute("data-crsl-remove-type").toLowerCase();
                const parentOfBtn = this.closest('.basic_carousel_card.crsl_card');
                const allCrslCards = Array.from(document.querySelectorAll(`.basic_${btn_more_type}_slider_card_box .crsl_card`));
                const parentCrsl = parentOfBtn.closest(`.basic_${btn_more_type}_slider_card_box`);

                if (parentOfBtn) 
                {
                    if((btn_more_type === "history"))
                    {
                        // Remove item from history array
                        selectedProfile.prof_history = selectedProfile.prof_history.filter((item) => item.hist_link !== parentOfBtn.querySelector(".cardLinkCover").getAttribute("href"));

                        // Update user data
                        await updUsrProfFlds(
                        {
                            prof_history: selectedProfile.prof_history
                        });

                        // Remove item from DOM
                        parentOfBtn.remove();

                        // Notify user
                        notification(`notifyGood` , `Show removed from History`);
                    }
                    else if((btn_more_type === "likes"))
                    {
                        // Remove item from likes array
                        selectedProfile.prof_likes = selectedProfile.prof_likes.filter((item) => item.ls_item !== parentOfBtn.querySelector(".cardLinkCover").getAttribute("href"));

                        // Update user data
                        await updUsrProfFlds(
                        {
                            prof_likes: selectedProfile.prof_likes
                        });

                        // Remove item from DOM
                        parentOfBtn.remove();

                        // Notify user
                        notification(`notifyGood` , `Show removed from Likes`);
                    }
                    else if((btn_more_type === "dislikes"))
                    {
                        // Remove item from dislikes array
                        selectedProfile.prof_dislikes = selectedProfile.prof_dislikes.filter((item) => item.ds_item !== parentOfBtn.querySelector(".cardLinkCover").getAttribute("href"));

                        // Update user data
                        await updUsrProfFlds(
                        {
                            prof_dislikes: selectedProfile.prof_dislikes
                        });

                        // Remove item from DOM
                        parentOfBtn.remove();

                        // Notify user
                        notification(`notifyGood` , `Show removed from Dislikes`);
                    }
                
                    // Add the "Empty" status message if empty
                    if(allCrslCards.length <= 1) parentCrsl.innerHTML = crsl_empty_struct;

                    return;
                }
            }

            newBtn.addEventListener("click" , btn_more_atn);
            newBtn.more_atn = btn_more_atn;
        });
    }
    
