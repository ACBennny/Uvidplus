
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="searchIconSvg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
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








