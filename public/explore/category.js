/*******************************************************************************************
 * The will fetch and display the appropriate for content for each category
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 ******************************************************************************************/


    // Initializes the category page
    function initCategoryPg()
    {
        const categoryStruct = 
        `
            <div class="categoryBase">
                <div class="categoryBdr">
                    <div class="categorySiteNameBdr">
                        <div class="categorySiteNameBox">
                            <div class="categorySiteNameTop"></div>
                            <p class="categorySiteNameBtm"></p>
                        </div>
                    </div>
                    <div class="categoryBox showCatalog"></div>
                    <div class="preload_2_bdr" id="basicCatalogPreLdr">
                        <div class="preload_2_box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="preload_2_spinner">
                                <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;

        documentCtnt.insertAdjacentHTML(`afterbegin` , categoryStruct);

        const ttlTop = document.querySelector(".categorySiteNameTop");
        const ttlBtm = document.querySelector(".categorySiteNameBtm");

        if(!(hash_parts[1] === "category")) 
        {
            document.querySelector(".categoryBase")?.remove();
            page_route_error("error");
            return;
        }
        
        const ctg_entry = `#/category/${hash_parts[2]}`;
        const ctg_match = uvp_categories.find(item => item?.link === ctg_entry);
        
        if(ctg_match)
        {
            const ctg_name = ctg_match?.name || "";
            const ctg_tagln = ctg_match?.tagline || "";
            const ctg_path_1 = ctg_match?.path_1 || "";
            const ctg_path_2 = ctg_match?.path_2 || "";
            const ctg_both = ctg_match?.both || null;
            const ctg_type = ctg_match?.type || "";

            ttlTop.textContent = (ctg_name !== "")
                ? `${ctg_name}`
                : "Explore";
            ttlBtm.textContent = (ctg_tagln !== "")
                ? `${ctg_tagln}`
                : "Let's explore";

            // Fetch & display shows in the category 
            category_sect_display(
            {
                "both": ctg_both,
                "type": ctg_type,
                "path_1": ctg_path_1,
                "path_2": ctg_path_2,
            });
        }
        else
        {
            // Check if it's a genre
            const genre_match = uvp_genres.find(item => item?.link === ctg_entry);
            
            if(!genre_match) return page_route_error("error");
            
            const genre_name = genre_match?.name || "";
            const genre_tagln = genre_match?.tagline || "";

            ttlTop.textContent = (genre_name !== "")
                ? `${genre_name}`
                : "Explore genres";
            ttlBtm.textContent = (genre_tagln !== "")
                ? `${genre_tagln}`
                : "Let's explore";

            // Fetch & display shows in the category 
            category_sect_display(
            {
                "both": true,
                "type": "",
                "path_1": `/discover`,
                "path_2": `?with_genres=${genre_match?.id}&sort_by=popularity.desc&vote_count.gte=50&include_adult=false`,
            });
        }
    }


    // Fetch and display the content of the chosen category
    function category_sect_display(opt = {both: true, type: "", path_1: "", path_2: ""}) 
    {
        const showCatalog = document.querySelector(".showCatalog");
        const ctgPreLdr = document.getElementById("basicCatalogPreLdr");
        const path_base = `https://api.themoviedb.org/3`;
        
        let isTVRslt = false;
        let isMVRslt = false;
    
        let curr_tv_pg = 1;
        let curr_mv_pg = 1;
        let ttl_tv_pgs = 0;
        let ttl_mv_pgs = 0;
        let ttl_tv_rslt = 0;
        let ttl_mv_rslt = 0;

        // Fetch info of the given category
        async function fetchItems()
        {
            // Fetch either tv, movie or both
            if((opt?.both))
            {
                const { 
                    results: ctg_sets_tv_rslt, 
                    totalPages: ctg_sets_tv_ttl_pg, 
                    currentPage: ctg_sets_tv_curr_pg,
                    totalResults: ctg_sets_tv_ttl_rslt 
                } = await findShowCategory("tv", `${path_base}${opt?.path_1}/tv${opt?.path_2}&page=${curr_tv_pg}`);

                const { 
                    results: ctg_sets_mv_rslt, 
                    totalPages: ctg_sets_mv_ttl_pg, 
                    currentPage: ctg_sets_mv_curr_pg,
                    totalResults: ctg_sets_mv_ttl_rslt 
                } = await findShowCategory("movie", `${path_base}${opt?.path_1}/movie${opt?.path_2}&page=${curr_mv_pg}`);

                isTVRslt = ctg_sets_tv_rslt?.length > 0 ? true : false;
                isMVRslt = ctg_sets_mv_rslt?.length > 0 ? true : false;

                ttl_tv_pgs = ctg_sets_tv_ttl_pg;
                ttl_tv_rslt = ctg_sets_tv_ttl_rslt;

                ttl_mv_pgs = ctg_sets_mv_ttl_pg;
                ttl_mv_rslt = ctg_sets_mv_ttl_rslt;

                const ctg_section = mergeAltArrSets(
                    addMediaTypeToShowSets(ctg_sets_tv_rslt, "tv"), 
                    addMediaTypeToShowSets(ctg_sets_mv_rslt, "movie")
                );

                loadItems(ctg_section);

                curr_tv_pg = ctg_sets_tv_curr_pg + 1;
                curr_mv_pg = ctg_sets_mv_curr_pg + 1;
            }
            else
            {
                if((opt?.type === "tv"))
                {
                    const { 
                        results: ctg_sets_tv_rslt, 
                        totalPages: ctg_sets_tv_ttl_pg, 
                        currentPage: ctg_sets_tv_curr_pg,
                        totalResults: ctg_sets_tv_ttl_rslt 
                    } = await findShowCategory("tv", `${path_base}${opt?.path_1}/tv${opt?.path_2}&page=${curr_tv_pg}`);

                    isTVRslt = ctg_sets_tv_rslt?.length > 0 ? true : false;
                    ttl_tv_pgs = ctg_sets_tv_ttl_pg;
                    ttl_tv_rslt = ctg_sets_tv_ttl_rslt;

                    loadItems(addMediaTypeToShowSets(ctg_sets_tv_rslt, "tv"));

                    curr_tv_pg = ctg_sets_tv_curr_pg + 1;
                }
                else if((opt?.type === "movie"))
                {
                    const { 
                        results: ctg_sets_mv_rslt, 
                        totalPages: ctg_sets_mv_ttl_pg, 
                        currentPage: ctg_sets_mv_curr_pg,
                        totalResults: ctg_sets_mv_ttl_rslt 
                    } = await findShowCategory("movie", `${path_base}${opt?.path_1}/movie${opt?.path_2}&page=${curr_mv_pg}`);

                    isMVRslt = ctg_sets_mv_rslt?.length > 0 ? true : false;
                    ttl_mv_pgs = ctg_sets_mv_ttl_pg;
                    ttl_mv_rslt = ctg_sets_mv_ttl_rslt;
                    
                    loadItems(addMediaTypeToShowSets(ctg_sets_mv_rslt, "movie"));
                    
                    curr_mv_pg = ctg_sets_mv_curr_pg + 1;
                }
                else
                {
                    notification("notifyBad", `An error occurred. Please try again later.`);
                    console.error("No matching category found");
                    observer.unobserve(ctgPreLdr);
                }
            }
        }
    
        // Insert the info of the selected shows
        async function loadItems(inv = []) 
        {
            let struct = ``;

            inv.forEach((item) =>
            {
                const {
                    show_link = `#/${item?.media_type}/${item?.id}`,
                    show_type = `${item?.media_type}`,
                    show_scores = (typeof item?.vote_average === "number") ? Number(item?.vote_average).toFixed(1) : 'N/A',
                    show_title = `${item?.name || item?.title || "N/A"}`,
                    show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                    show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                    show_description = item?.overview || "No description available",
                } = item;

                struct += 
                `
                    <div class="categoryCardBdr">
                    <a href="${show_link}" title="Watch ${show_title}" class="categoryCardBox">
                        <div class="categoryImgBdr">
                            <div class="categoryImgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                        src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="categoryImg"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="categoryDetBdr">
                            <div class="categoryDetBox">
                                <div class="categoryDetTitleBdr">
                                    <div class="categoryDetTitleBox">
                                        <div class="categoryDetTitleText">${show_title}</div>
                                    </div>
                                </div>
                                <div class="categoryDetFeatureBdr">
                                    <div class="categoryDetFeatureBox">
                                        <div class="categoryDetFeatureCard">
                                            <div class="categoryDetFeatureCard_Top">Type</div>
                                            <div class="categoryDetFeatureCard_Btm">${show_type}</div>
                                        </div>
                                        <div class="categoryDetFeatureCard">
                                            <div class="categoryDetFeatureCard_Top">Score</div>
                                            <div class="categoryDetFeatureCard_Btm">${show_scores}</div>
                                        </div>
                                        <div class="categoryDetFeatureCard">
                                            <div class="categoryDetFeatureCard_Top">Year</div>
                                            <div class="categoryDetFeatureCard_Btm">${show_year}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="categoryDetAboutBdr">
                                    <div class="categoryDetAboutBox">
                                        <p class="categoryDetAboutText">${show_description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                `;
            });

            showCatalog.insertAdjacentHTML('beforeend', struct);

            if(
                (!isTVRslt && !isMVRslt) || 
                (curr_tv_pg >= ttl_tv_pgs && curr_mv_pg >= ttl_mv_pgs)
            )
            {
                observer.unobserve(ctgPreLdr);
                ctgPreLdr.style.display = 'none';
            }
        }
    
        const observer = new IntersectionObserver((entries) => 
        {
            if (entries[0].isIntersecting) 
            {
                // Load the next set of items when the ctgPreLdr is in view
                fetchItems(); 
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
    
        observer.observe(ctgPreLdr);
    }



