/***************************************************************
 * This will hold the code for the person page (casts & crew)
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


let prsnData = {};

    // Initializes the Perosn Page
    async function initPrsnPg()
    {
        // return
        const prsn_id = Number(hash_parts[2]);

        if((typeof prsn_id !== "number") || (isNaN(prsn_id))) return page_route_error("error");

        try
        {
            prsnData = await fetchWithRetry(`https://api.themoviedb.org/3/person/${prsn_id}?api_key=${__uv_p_dev_tm_db_ap_ky}&append_to_response=images`);
        }
        catch(error)
        {
            console.error(error);
            return page_route_error("error");
        }

        const isAdult = prsnData?.adult;

        if((isAdult == true) && (window?.____show_adult_ctnt == false))
        {
            window.location.hash = "#/home";
            notification('notifyBad', `The selected content is unavailable`);
            return;
        }

        const prsn_pfp = (prsnData?.profile_path)
            ? `https://image.tmdb.org/t/p/original/${prsnData?.profile_path}` 
            :  "/images/uvid-profile-base.png";
        const prsn_name_mjr = prsnData?.name;
        const prsn_dpmt = prsnData?.known_for_department;
        const prsn_dob = prsnData?.birthday;
        const prsn_lob = prsnData?.place_of_birth;
        const prsn_name_oth = 
        `
            ${
                prsnData?.also_known_as?.map((item) => `<p class="prsn_det_sub_txt list_item">${item}</p>`).join("")
            }
        `;
        const prsn_bio = prsnData?.biography;

        const prsn_struct = 
        `
            <div class="prsn_bdr">
                <div class="prsn_box">
                    <div class="prsn_info_bdr">
                        <div class="prsn_info_box">
                            <div class="prsn_pfp_bdr">
                                <div class="prsn_pfp_bcg">
                                    <div class="img_preload_box">
                                        <div class="img_preload_sibling"></div>
                                        <img loading="lazy" 
                                            onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                            onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                            src="${prsn_pfp}" alt="profile image of ${prsn_name_mjr}" class="prsn_pfp_img"
                                        >
                                    </div>
                                </div>
                                <div class="prsn_pfp_box">
                                    <div class="img_preload_box">
                                        <div class="img_preload_sibling"></div>
                                        <img loading="lazy" 
                                            onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                            onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                            src="${prsn_pfp}" alt="profile image of ${prsn_name_mjr}" class="prsn_pfp_img"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="prsn_det_bdr">
                                <div class="prsn_det_box">
                                    <div class="prsn_det_ttl_box"> 
                                        <div class="prsn_det_ttl_txt">${prsn_name_mjr}</div>
                                    </div>
                                    <div class="prsn_det_sub_box">
                                        <p class="prsn_det_sub_txt"><strong>Department:</strong></p>
                                        <p class="prsn_det_sub_txt">${prsn_dpmt}</p>
                                    </div>
                                    <div class="prsn_det_sub_box">
                                        <p class="prsn_det_sub_txt"><strong>Birthday:</strong></p>
                                        <p class="prsn_det_sub_txt">${prsn_dob}</p>
                                    </div>
                                    <div class="prsn_det_sub_box">
                                        <p class="prsn_det_sub_txt"><strong>Place of Birth:</strong></p>
                                        <p class="prsn_det_sub_txt">${prsn_lob}</p>
                                    </div>
                                    <div class="prsn_det_sub_box">
                                        <p class="prsn_det_sub_txt"><strong>Also Known as:</strong></p>
                                        ${prsn_name_oth}
                                    </div>
                                    <div class="prsn_det_bio_box">
                                        <p class="prsn_det_bio_txt">${prsn_bio}</p>
                                        <label class="prsn_det_bio_btn">
                                            <input type="checkbox" name="prsn_det_bio_inp" id="prsn_det_bio_inpId" class="prsn_det_bio_inpCls">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert structure
        documentCtnt.insertAdjacentHTML(`afterbegin`, prsn_struct);

        // Initialize the person's mediography
        initPrsnMediography();

        //Initialize the person's filmography
        initPrsnFilmography();
    }



    // Builds and displays media related to the person
    function initPrsnMediography() 
    {
        try
        {
            if((prsnData?.images) && (prsnData?.images?.profiles?.length > 0))
            {

                document.querySelector(".prsn_bdr")?.insertAdjacentHTML(
                    `afterend`,
                    `
                        <div class="prsn_basic_carousel prsn_pfp_slider_base">
                            <div class="basic_slider_bdr basic_carousel">
                                <div class="basic_slider_title_bdr">
                                    <div class="basic_slider_title_box">
                                        <h2>
                                            <span class="big">M</span>
                                            <span class="small">ediography</span>
                                        </h2>
                                        <p>Related media</p>
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
                                                prsnData?.images?.profiles?.map((item) =>
                                                {
                                                    const pfp_src = item?.file_path
                                                        ? `https://image.tmdb.org/t/p/original/${item?.file_path}`
                                                        : "/images/uvid-profile-base.png";

                                                    return`
                                                        <div class="slide_card_base basic_carousel_card">
                                                            <div class="slide_card_bdr">
                                                                <div class="slide_card_box">
                                                                    <div class="slide_card">
                                                                        <div class="cardImgBox">
                                                                            <div class="img_preload_box">
                                                                                <div class="img_preload_sibling"></div>
                                                                                <img loading="lazy" 
                                                                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                                                    src="${pfp_src}" alt="Thumbnail image of ${prsnData?.name}" class="cardImg"
                                                                                >
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
        catch(err)
        {
            console.error(err);
            document.querySelector(".prsn_pfp_slider_base")?.remove();
            notification(`notifyBad` , `Failed to load media`);
        }
    }


    
    // Initializes the shows known to the person
    async function initPrsnFilmography()
    {
        try
        {
            const prsn_id = prsnData?.id || Number(hash_parts[2]);

            if(((typeof prsn_id === "number") && !(isNaN(prsn_id))))
            {
                const prsn_credits_fetch = await fetchWithRetry(`https://api.themoviedb.org/3/person/${prsn_id}/combined_credits?api_key=${__uv_p_dev_tm_db_ap_ky}`);
                
                if(prsn_credits_fetch)
                {
                    const prsn_credits_cmbn = mergeAltArrSets(
                        (prsn_credits_fetch?.cast?.filter(fltrFetchedShows) || []),
                        (prsn_credits_fetch?.crew?.filter(fltrFetchedShows) || [])
                    )

                    if(prsn_credits_cmbn.length <= 0) return;

                    const prsn_film_insert = (document.querySelector(".prsn_pfp_slider_base"))
                        ? document.querySelector(".prsn_pfp_slider_base")
                        : document.querySelector(".prsn_bdr");

                    prsn_film_insert?.insertAdjacentHTML(
                        `afterend`,
                        `
                            <div class="prsn_basic_carousel prsn_films_slider_base">
                                <div class="basic_slider_bdr basic_carousel">
                                    <div class="basic_slider_title_bdr">
                                        <div class="basic_slider_title_box">
                                            <h2>
                                                <span class="big">F</span>
                                                <span class="small">ilmography</span>
                                            </h2>
                                            <p>Shows ${prsnData?.name} is known for</p>
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
                                                    prsn_credits_cmbn.map((item) =>
                                                    {
                                                        let {
                                                            show_link = `#/${item?.media_type.toLowerCase()}/${item?.id}`,
                                                            show_foreground = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                                                            show_title = `${item?.name || item?.title || "N/A"}`,
                                                            show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
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
        catch(err)
        {
            console.error(err);
            document.querySelector(".prsn_films_slider_base")?.remove();
            notification(`notifyBad` , `Failed to load filmography`);
        }
    }

