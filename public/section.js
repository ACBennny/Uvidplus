
/***************************************************************
 * This will hold the code for loading the history & likes of a profile
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    function section_category_display(page) 
    {
        const showCatalog = document.querySelector(".showCatalog");
        const basicLoadingIndicator = document.getElementById("basicLoadingIndicator");
    
        let curr_gnr_tv_pg = 1;
        let curr_gnr_mv_pg = 1;
        let ttl_gnr_tv_pg = 0;
        let ttl_gnr_mv_pg = 0;
        let ttl_gnr_tv_rslt = 0;
        let ttl_gnr_mv_rslt = 0;
        let category_sets = [];

        // Fetch info of the given category
        async function fetchItems()
        {
            switch (page.toLowerCase()) 
            {
                case 'genres':

                    const { 
                        results: gnr_sets_tv_rslt, 
                        totalPages: gnr_sets_tv_ttl_pg, 
                        currentPage: gnr_sets_tv_curr_pg,
                        totalResults: gnr_sets_tv_ttl_rslt 
                    } = await findGenreCategory(genrePgId, "tv", curr_gnr_tv_pg);

                    const { 
                        results: gnr_sets_mv_rslt, 
                        totalPages: gnr_sets_mv_ttl_pg, 
                        currentPage: gnr_sets_mv_curr_pg,
                        totalResults: gnr_sets_mv_ttl_rslt 
                    } = await findGenreCategory(genrePgId, "movie", curr_gnr_mv_pg);

                    let gnr_category = [];

                    curr_gnr_tv_pg = gnr_sets_tv_curr_pg + 1;
                    ttl_gnr_tv_pg = gnr_sets_tv_ttl_pg;
                    ttl_gnr_tv_rslt = gnr_sets_tv_ttl_rslt;

                    curr_gnr_mv_pg = gnr_sets_mv_curr_pg + 1;
                    ttl_gnr_mv_pg = gnr_sets_mv_ttl_pg;
                    ttl_gnr_mv_rslt = gnr_sets_mv_ttl_rslt;

                    gnr_sets_tv_rslt.forEach((item) => gnr_category.push(item));
                    gnr_sets_mv_rslt.forEach((item) => gnr_category.push(item));

                    loadItems(gnr_category);
                    break;
                case 'movies':
                    base_url = "movie";
                    break;
                case 'tv shows':
                    base_url = "tv";
                    break;
                default:
                    notification(`notifyBad`, `An error occurred`);
            }
        }
    
        // Insert the info of the selected shows
        function loadItems(inv = []) 
        {
            for (let i = currentIndex; i < endIndex; i++) 
            {
                const item = inv[i];
                const {
                    show_link = `#/${item?.media_type}/${item?.id}`,
                    show_type = `${item?.media_type}`,
                    show_title = `${item?.name || item?.title || "N/A"}`,
                    show_foreground = `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                    show_year = `${item?.first_air_date?.toString()?.trim()?.split("-")[0] || item?.release_date?.toString()?.trim()?.split("-")[0] || "N/A"}`,
                } = item;
                const cardHTML = 
                `
                    <div class="slide_card_base max_sizing">
                        <div class="slide_card_bdr ">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${show_link}" title="Watch ${show_title}" class="cardLinkCover"></a>
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
                                    <div class="cardinfo cardInfoBdr">
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
                showCatalog.insertAdjacentHTML('beforeend', cardHTML);
            }

            if (currentIndex >= basicSectInvSize) 
            {
                observer.unobserve(basicLoadingIndicator);
                basicLoadingIndicator.style.display = 'none';
            }
        }
    
        const observer = new IntersectionObserver((entries) => 
        {
            if (entries[0].isIntersecting) 
            {
                // Load the next set of items when the basicLoadingIndicator is in view
                loadItems(whatPage); 
            }
        }, {
            root: null,
            rootMargin: '0rem',
            threshold: 0.1
        });
    
        observer.observe(basicLoadingIndicator);
    
        loadItems();
    }
    

    


    



    







