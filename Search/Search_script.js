
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



    window.addEventListener("load" , loadInventory);

    function loadInventory()
    {
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`src` , `/inventory.js`);
    
        invScriptTag.addEventListener("load" , () => 
        {
            startSearchEngine();
        });

        document.body.appendChild(invScriptTag);
    }
    

    function startSearchEngine()
    {

        // INITIALIZATION
        let searchBodyHTML = 
        `
            <!-- ------ Search Bar ------ -->
            <div class="searchBase">
                <div class="searchBdr">
                    <div class="searchBox navBarSearchBox" name="navSearchForm">
                        <label for="searchInput" class="searchIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="searchIcon">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </label>
                        <span class="searchInputBox">
                            <input type="text" name="search_key" id="searchInput" class="searchFieldClass" placeholder="Search...">
                        </span>
                        <label for="searchInput" class="searchIconBox clearSearchFieldIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="clearSearchFieldIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            
            <!-- ------ search Results------ -->
            <div class="searchbox-border">
                <div class="search_Result_title">
                    <div class="search_Result_titleText">
                        <span class="srt_static">Search results for:</span>
                        <span class="srt_dynamic"></span>
                    </div>
                </div>
                <div class="basicCatalogBase">
                    <div class="basicCatalogBdr">
                        <div class="basicCatalogBox max_sizing" id="catalogId"></div>
                    </div>
                </div>
            </div>
        `;
        documentCtnt.insertAdjacentHTML(`afterbegin` , searchBodyHTML);

        // DECLARATIONS

            let search_query = '';
            const searchTitle = document.querySelector(".srt_dynamic");
            const searchInput = document.getElementById('searchInput');
            const searchXmark = document.querySelector(".clearSearchFieldIconBox");
            const searchwall = document.querySelector("#catalogId");
    
    
            // Function to display items
            const displayItem = (items) => 
            {
                searchwall.innerHTML = items.map((item) => 
                {
                    const { show_link, show_thumbnail, show_title, show_type, show_year, show_quality } = item;
                    if((search_query.length > 0) && (search_query != undefined) && (search_query != null) && (search_query != " "))
                    {
                        return `
                            <div class="slide_card_base max_sizing">
                                <div class="slide_card_bdr ">
                                    <div class="slide_card_box">
                                        <div class="slide_card">
                                            <a href="${show_link}" title="Watch ${show_title}" class="cardLinkCover"></a>
                                            <div class="cardImgBox">
                                                <img src="${show_thumbnail}" alt="Thumbnail image of ${show_title}" class="cardImg">
                                            </div>
                                            <div class="cardQualityBox">
                                                <h1 class="cardQualityText">${show_quality}</h1>
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
                                            <div class="cardAddToListBdr">
                                                <div class="cardAddToListBox">
                                                    <div class="cardAddToListIconBox  openAddToWLBtn" title="Add to Watchlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="slide_card_bcg"></div>
                                </div>
                            </div>
                        `;
                    }
                    else
                    {
                        return null;
                    }
                }).join('');

                // Reattaching listeners
                attachAddToWLEventListeners();
            };
    
            searchInput.addEventListener("keyup", filterInput);

            // Clears search field
            searchInput.addEventListener("input" , () => 
            {
                if(searchInput.value.length > 0)
                {
                    searchXmark.classList.add("active");
                    return;
                }
                searchXmark.classList.remove("active");
            });

            searchXmark.addEventListener("click" , () => 
            {
                searchInput.value = "";
                search_query = "";
                searchXmark.classList.remove("active");
                filterInput();
            });

            // Filter and display result based on user's entry
            function filterInput()
            {
                search_query = searchInput.value.trim().toLowerCase();
                searchTitle.textContent = `"${search_query}"`;
                const filteredData = searchInventory.filter((item) => item.show_searchKey.toLowerCase().includes(search_query));
                displayItem(filteredData);
    
                // Automatically scrolls the page back to top for every input
                window.scrollTo(null , 0);
            }
            
            searchInput.addEventListener("keyup", filterInput);
    }








