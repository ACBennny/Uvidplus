
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

// DECLARATIONS

    let catalogStruct = 
    `
        <div class="catalogBase">
            <div class="catalogBdr">
                <div class="catalogBox">
                    <div class="catalogHeadBdr">
                        <div class="catalogHeadBox">
                            <div class="catalogSearchBdr">
                                <div class="catalogSearchBox">
                                    <div class="catalogSearchInputItem">
                                        <div class="catalogSearchInputIcon catalogSearchInputLeftIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogSearchInputSvg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                            </svg>
                                        </div>
                                        <input type="text" name="catalogSearchFieldName" id="catalogSearchFieldId" class="catalogSearchFieldClass" placeholder="Search..">
                                        <label for="catalogSearchFieldId" class="catalogSearchInputIcon catalogSearchInputRightIcon catalogSearchInputClearIcon">
                                            <svg transform="scale(0.75)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="catalogSearchInputSvg">
                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                            </svg>
                                        </label>
                                    </div>
                                    <div class="catalogSearchItem toggleCatalogFilters" aria-label="toggle-catalog-filters" title="Apply Filters">
                                        <div class="catalogSearchIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogSearchSvg">
                                                <path fill-rule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M14.5 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M5.75 17a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0m3.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd" />
                                                <path d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-7.75 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z" />
                                            </svg>
                                        </div>
                                        <p class="catalogSearchText">Filters</p>
                                    </div>
                                    <div class="catalogSearchItem clearCatalogFilters" aria-label="clear-catalog-filters" title="Clear Filters">
                                        <div class="catalogSearchIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogSearchSvg">
                                                <path d="M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 0 1-1.415.5A2.25 2.25 0 0 0 12 2.75M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m3.165 2.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104s1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303c-.14-.705-.204-1.643-.294-2.99z" />
                                                <path d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821m5.821.821a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15z" />
                                            </svg>
                                        </div>
                                        <p class="catalogSearchText">Clear Filters</p>
                                    </div>
                                </div>
                            </div>
                            <div class="catalogFilterBdr">
                                <div class="catalogFilterBox"></div>
                            </div>
                        </div>
                    </div>
                    <div class="catalogGridBdr">
                        <div class="catalogGridBox basicCatalogBox"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="backToTopOfCatalogBdr">
            <div class="backToTopOfCatalogBox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="backToTopOfCatalogSvg">
                    <path fill-rule="evenodd" d="M11.47 3.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.72V20a.75.75 0 0 1-1.5 0V5.81l-4.72 4.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    `;

    let catalogURLandQueryBase = `/Catalog.html?search=&sort=&format=&quality=&genre=&year=&origin=`;
    let catalogParamsOrder = ["search", "sort", "format", "quality", "genre", "year", "origin"];
    let catalogURLandQueryCombine;
    let catalogURLParams = new URLSearchParams(window.location.search);
    let catalogURLSearchParam;
    let catalogURLSortParam;
    let catalogURLFormatParam;
    let catalogURLQualityParam;
    let catalogURLGenreParam;
    let catalogURLYearParam;
    let catalogURLOriginParam;
    let catalogSearchQuery;
    let catalogSearchInput;
    let catalogSearchXmark;
    let catalogGridBox;
    let toggleCatalogFilters;
    let clearCatalogFilters;
    let catalogFilterBdr;
    let catalogFilterBox;
    let catalogFilterCardBdr;
    let catalogFilterDisplayBtn;
    let catalogFilterListMenu;
    let backToTopOfCatalogBtn;
    let currFilterMenuIndex = null;


    window.addEventListener("load" , loadInventory);


    function loadInventory()
    {
        // Check if inventory.js has been initialized
        let invScriptID = document.querySelector("#inventoryID");

        if(!(invScriptID == undefined))
        {
            initCatalogBase();
            return;
        }

        // If not, initialize
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`id` , `inventoryID`);
        invScriptTag.setAttribute(`src` , `/inventory.js`);
        document.body.appendChild(invScriptTag);

        invScriptTag.addEventListener("load" , () => 
        {
            initCatalogBase();
        });
        invScriptTag.addEventListener("error" , () => 
        {
            notification(`notifyBad` , `Error loading Catalog`);
        });
    }


// INTIALIZING URL PARAMS

    function initURLParams()
    {
        
        // REPLACING MISSING PARAMS

            // Check if any parameter is missing and add it if necessary
            catalogParamsOrder.forEach(param => 
            {
                if (!catalogURLParams.has(param)) 
                {
                    // Add missing parameter with an empty value
                    catalogURLParams.set(param, '');
                }
            });

            // Rebuild the URL in the original order
            const newUrl = `${window.location.pathname}?${catalogParamsOrder.map(param => `${param}=${catalogURLParams.get(param)}`).join('&')}`;

            // Update the URL without reloading the page
            window.history.replaceState(null, '', newUrl);

        // GETTING EACH PARAM VALUE

            catalogURLSearchParam = catalogURLParams.get(`${catalogParamsOrder[0]}`);
            catalogURLSortParam = catalogURLParams.get(`${catalogParamsOrder[1]}`);
            catalogURLFormatParam = catalogURLParams.get(`${catalogParamsOrder[2]}`);
            catalogURLQualityParam = catalogURLParams.get(`${catalogParamsOrder[3]}`);
            catalogURLGenreParam = catalogURLParams.get(`${catalogParamsOrder[4]}`);
            catalogURLYearParam = catalogURLParams.get(`${catalogParamsOrder[5]}`);
            catalogURLOriginParam = catalogURLParams.get(`${catalogParamsOrder[6]}`);

            // Displaying params
            console.log(
                `
                    catalogURLSearchParam: ${catalogURLSearchParam},\n
                    catalogURLSortParam: ${catalogURLSortParam},\n
                    catalogURLFormatParam: ${catalogURLFormatParam},\n
                    catalogURLQualityParam: ${catalogURLFormatParam},\n
                    catalogURLGenreParam: ${catalogURLGenreParam},\n
                    catalogURLYearParam: ${catalogURLYearParam},\n
                    catalogURLOriginParam: ${catalogURLOriginParam},\n
                `
            );

            catalogURLandQueryCombine = `/Catalog.html?search=${catalogURLSearchParam}&sort=${catalogURLSortParam}&format=${catalogURLFormatParam}&quality=${catalogURLFormatParam}&genre=${catalogURLGenreParam}&year=${catalogURLYearParam}&origin=${catalogURLOriginParam}`;
    }


// UPDATING THE URL PARAMS

    function updateURLParams(theURLParam, paramValue)
    {
        // Set the given param
        catalogURLParams.set(theURLParam , paramValue);
        console.log(`the ${theURLParam} updated to : ${paramValue}`);

        // Rebuild the URL in the original order
        const newUrl = `${window.location.pathname}?${catalogParamsOrder.map(param => `${param}=${catalogURLParams.get(param)}`).join('&')}`;
        console.log("updated url = " , newUrl);

        // Update the URL without reloading the page
        window.history.replaceState(null, '', newUrl);
    }


// SCROLLING BACK TO TOP

    window.addEventListener("scroll" , () => 
    {
        // Display the back-to-top button after user has scrolled 25% of the page
        backToTopOfCatalogBtn.classList.toggle("active" , window.scrollY > Math.round((document.documentElement.scrollWidth * 0.25)));
    });
    

// INITIALIZING THE CATALOG BASE

    function initCatalogBase()
    {
        // INITIALIZATION

            documentCtnt.insertAdjacentHTML(`afterbegin` , catalogStruct);

            initURLParams();
            loadFiltersInventory();


        // DEFINITIONS

            catalogSearchQuery = '';
            catalogSearchInput = document.querySelector('#catalogSearchFieldId');
            catalogSearchXmark = document.querySelector(".catalogSearchInputClearIcon");
            catalogGridBox = document.querySelector(".basicCatalogBox");
            toggleCatalogFilters = document.querySelector(".toggleCatalogFilters");
            clearCatalogFilters = document.querySelector(".clearCatalogFilters");
            catalogFilterBdr = document.querySelector(".catalogFilterBdr");
            catalogFilterBox = document.querySelector(".catalogFilterBox");
            backToTopOfCatalogBtn = document.querySelector(".backToTopOfCatalogBdr");

        // Let users know the filtering isn't working
            // notification(`notifyBad` , `Filtering is not operational`);


        // Scroll to top of page

            backToTopOfCatalogBtn.addEventListener("click" , () => 
            {
                window.scrollTo(0, 0);
            });


        // DISPLAY ALL ITEMS AFTER LOADING

            for(let i = 0; i < searchInventory.length; i++)
            {
                let items = searchInventory[i];
                let struct = 
                `
                    <div class="slide_card_base max_sizing">
                        <div class="slide_card_bdr ">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${items.show_link}" title="Watch ${items.show_title}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${items.show_thumbnail}" alt="Thumbnail image of ${items.show_title}" class="cardImg">
                                    </div>
                                    <div class="cardQualityBox">
                                        <h1 class="cardQualityText">${items.show_quality}</h1>
                                    </div>
                                    <div class="cardinfo cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${items.show_type}</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${items.show_year}</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${items.show_title}</h3>
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
                catalogGridBox.insertAdjacentHTML(`beforeend` , struct);

                // Reattaching listeners
                attachAddToWLEventListeners();
            }


        // Clear all filters

            clearCatalogFilters.addEventListener("click" , () => 
            {
                // Clear Search input
                catalogSearchInput.value = "";
                catalogSearchQuery = "";
                catalogSearchXmark.classList.remove("active");
                filterCatalogSearchInput();

                // Clear and close filters
                catalogFilterDisplayBtn.forEach((btn) => 
                {
                    btn.setAttribute(`aria-expanded` , `false`);
                });
                let catalogFilterListMenu = document.querySelectorAll(".catalogFilterListBox");

                catalogFilterListMenu.forEach((listMenu, menuIndex) => 
                {
                    let catalogFilterListOptions = listMenu.querySelectorAll(".catalogFilterListItem");

                    catalogFilterListOptions.forEach((listOpt) => 
                    {
                        listOpt.classList.remove("selected");
                        catalogFilterDisplayBtn[menuIndex].querySelector(".catalogFilterDisplayValueText").textContent = "Any";
                        updateURLParams(catalogParamsOrder[menuIndex + 1], '');
                    });
                });
            });

        // Update catalog search Input and add event listener
            
            catalogSearchInput.setAttribute(`value` , `${catalogURLSearchParam}`);
            filterCatalogSearchInput();

            catalogSearchInput.addEventListener("keyup", filterCatalogSearchInput);


        // Clear Search Feild

            catalogSearchXmark.addEventListener("click" , () => 
            {
                catalogSearchInput.value = "";
                catalogSearchQuery = "";
                catalogSearchXmark.classList.remove("active");
                filterCatalogSearchInput();
            });
    }

    
// DISPLAY ITEMS FROM SEARCH

    function filterCatalogSearchInput()
    {
        catalogSearchQuery = catalogSearchInput.value.trim().toLowerCase();
        
        // Update Url Params
        updateURLParams(catalogParamsOrder[0], catalogSearchQuery);

        // Filter Items
        filterCatalogResult(catalogSearchQuery, `show_searchKey`);
        
        // Hides/Unhides x-mark button while typing
        if(catalogSearchInput.value.length > 0)
        {
            catalogSearchXmark.classList.add("isTyping");
            return;
        }
        catalogSearchXmark.classList.remove("isTyping");
    }


// FILTER & DISPLAY ITEMS

    // Filter items
    function filterCatalogResult(filterVal, filterProperty)
    {
        const filteredData = searchInventory.filter((item) => 
            item[filterProperty]?.toLowerCase().includes(filterVal.toLowerCase())
        );
        
        displayCatalogResult(filteredData);

        // Automatically scrolls the page back to top for every input
        window.scrollTo(null , 0);
    }

    // Display items
    function displayCatalogResult(items) 
    {
        catalogGridBox.innerHTML = items.map((item) => 
        {
            const { show_link, show_thumbnail, show_title, show_type, show_year, show_quality } = item;

            if(((item == undefined || (item == null))))
            {
                notification(`notifyBad` , `No results found`);
                return``;
            }

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
        }).join('');

        // Reattaching listeners
        attachAddToWLEventListeners();
    };


// INITIALIZING CATALOG FILTERS

    // Loading inventory file
    function loadFiltersInventory()
    {
        let catalogFilterInvTag = document.createElement("script");
        catalogFilterInvTag.setAttribute(`id` , `filterInventoryId`);
        catalogFilterInvTag.setAttribute(`src` , `/Catalog/filterInventory.js`);
        document.body.appendChild(catalogFilterInvTag);

        catalogFilterInvTag.addEventListener("load" , () => 
        {
            initCatalogFilters();
        });
        catalogFilterInvTag.addEventListener("error" , () => 
        {
            notification(`notifyBad` , `Error loading Filters`);
            toggleCatalogFilters.addEventListener("click" , () => 
            {
                notification(`notifyBad` , `An error occured`);
            });
            clearCatalogFilters.addEventListener("click" , () => 
            {
                notification(`notifyBad` , `An error occured`);
            });
        });

    }

    // Importing from inventory
    function initCatalogFilters()
    {

        // Generate the filter cards to contain the filter menus
        for(let i = 0; i < 6; i++)
        {
            let catalogFilterCard = document.createElement("div");
            catalogFilterCard.classList.add("catalogFilterCardBdr");
            catalogFilterCard.innerHTML = 
            `
                <div class="catalogFilterCardBox">
                    <div class="catalogFilterTitleBox">
                        <div class="catalogFilterTitleText">${filterInv[i].category}</div>
                    </div>
                    <button type="button" aria-haspopup="listbox" aria-expanded="false" class="catalogFilterDisplayBtn">
                        <div class="catalogFilterDisplayValueBox">
                            <div class="catalogFilterDisplayValueText">Any</div>
                        </div>
                        <div class="catalogFilterDisplayIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogFilterDisplaySvg">
                                <path fill-rule="evenodd" d="M13.698 3.314a.75.75 0 0 1 .809.133l6 5.5a.75.75 0 0 1-1.014 1.106L14.75 5.705V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .448-.687M10 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.257.553l-6-5.5a.75.75 0 0 1 1.014-1.106l4.743 4.348V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </button>
                </div>
            `;
            catalogFilterBox.appendChild(catalogFilterCard);
        }

        // Open/close filter bdr
        toggleCatalogFilters.addEventListener("click" , () => 
        {
            catalogFilterBdr.classList.toggle("active");
        });

        // Define the display button
        catalogFilterCardBdr = document.querySelectorAll(".catalogFilterCardBdr");
        catalogFilterDisplayBtn = document.querySelectorAll(".catalogFilterDisplayBtn");

        catalogFilterDisplayBtn.forEach((btn, index) => 
        {
            // Initialize each filter menu
            initCatalogFilterMenu(index);

            // Opening and Closing of the menu through the filter display buttons
            btn.addEventListener("click", () => 
            {
                if (btn.getAttribute("aria-expanded") === "true")
                {
                    closeFilterMenusInside(index);
                }
                else
                {
                    // Close any previously open menus
                    if (currFilterMenuIndex !== null)
                    {
                        closeFilterMenusInside(currFilterMenuIndex);
                    }
    
                    // Open the current menu
                    btn.setAttribute("aria-expanded", "true");
                    documentBody.classList.add("bodystop");
                    currFilterMenuIndex = index;
                    
                    catalogFilterListMenu[index].addEventListener("transitionend", function handleTransitionEnd()
                    {
                        catalogFilterListMenu[index].removeEventListener("transitionend", handleTransitionEnd);
                        document.addEventListener("click", closeFilterMenusOutside);
                    });
    
                    toggleDocBodyOverflow(index);
                    window.addEventListener("change", () => toggleDocBodyOverflow(index));
                    window.addEventListener("resize", () => toggleDocBodyOverflow(index));
                }
            });

        });

        // TO DO: ===>  Define the Filter menus
        catalogFilterListMenu = document.querySelectorAll(".catalogFilterListBox");

        catalogFilterListMenu.forEach((listMenu, menuIndex) => 
        {
            let catalogFilterListOptions = listMenu.querySelectorAll(".catalogFilterListItem");

            catalogFilterListOptions.forEach((listOpt , optIndex) => 
            {
                listOpt.addEventListener("click" , () => 
                {
                    // Remove all other active classes
                    catalogFilterListOptions.forEach((currAtv) => 
                    {
                        currAtv.classList.remove("selected");
                    });
                    // Add the active state identifier
                    listOpt.classList.add("selected");

                    // Update the display text
                    let listOptText = listOpt.querySelector(".catalogFilterListName");
                    let listOptTextCtnt = listOptText.textContent;
                    let listOptTextCtntLC = listOptText.textContent.toLowerCase();
                    let filterTitleText = catalogFilterCardBdr[menuIndex].querySelector(".catalogFilterTitleText");
                    let filterTitleTextLC = filterTitleText.textContent.toLowerCase();
                    let filterDisplayValueText = catalogFilterDisplayBtn[menuIndex].querySelector(".catalogFilterDisplayValueText");
                    filterDisplayValueText.textContent = listOptTextCtnt;

                    // Update the URL Params (One is added to the index due to search being the first param)
                    updateURLParams(catalogParamsOrder[menuIndex + 1], listOptTextCtntLC);

                    // TO DO: Update the catalog filters
                    displayCatalogFilterItems(filterTitleTextLC, listOptTextCtntLC);
                });
            });
        });
    }


    // Toggles the document body's overflow based on screen size
    function toggleDocBodyOverflow(currBtn)
    {
        if(((catalogFilterDisplayBtn[currBtn].getAttribute("aria-expanded") == "true") && (window.innerWidth < 768)))
        {
            documentBody.classList.add("bodystop");
            return;
        }
        documentBody.classList.remove("bodystop");
    }


    // Closes the Filter Display Menus (via mouse clicks on other areas beside the display filter buttons)
    function closeFilterMenusOutside(event)
    {
        if (
            !event.target.closest(".catalogFilterCardBdr") &&
            !event.target.closest(".catalogFilterDisplayBtn")
        )
        {
            catalogFilterDisplayBtn.forEach((btn, index) => 
            {
                if (btn.getAttribute("aria-expanded") === "true")
                {
                    closeFilterMenusInside(index);
                }
            });
        }
    }
        
    function closeFilterMenusInside(index) 
    {
        catalogFilterDisplayBtn[index].setAttribute("aria-expanded", "false");
        documentBody.classList.remove("bodystop");
        document.removeEventListener("click", closeFilterMenusOutside);
    }


    // Initializes the catalog filter menus
    function initCatalogFilterMenu(index)
    {

        let catalogFilterCardBox = catalogFilterDisplayBtn[index].closest(".catalogFilterCardBox");
        let catalogFilterTitleText = catalogFilterCardBox.querySelector(".catalogFilterTitleText");
        let catalogFilterTitleTextLC = catalogFilterTitleText.textContent.toLowerCase();

        // Creating the menu
        let thisFilterListBox = document.createElement("ul");
        thisFilterListBox.classList.add("catalogFilterListBox");
        thisFilterListBox.setAttribute(`role` , `listbox`);

        if(((catalogFilterTitleTextLC == "genre") || (catalogFilterTitleTextLC == "origin")))
        {
            thisFilterListBox.setAttribute(`aria-multiselectable` , `true`);
        }
        else
        {
            thisFilterListBox.setAttribute(`aria-multiselectable` , `false`);
        }
        

        // Fill in the options of the menu
        let filterListOptArray = filterInv[index].options;

        for(let j = 0; j < filterListOptArray.length; j++)
        {
            let struct = 
            `
                <li class="catalogFilterListItem" role="option">
                    <span class="catalogFilterListName">${filterListOptArray[j]}</span>
                    <span class="catalogFilterListIcon">
                        <svg class="catalogFilterListSvg" style="transform: scale(0.75);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                    </span>
                </li>
            `;
            thisFilterListBox.insertAdjacentHTML(`beforeend` , struct);
        }

        catalogFilterCardBox.appendChild(thisFilterListBox);
        
    }


//  TO DO: DISPLAY ITEM FROM FILTERS

    function displayCatalogFilterItems(displayTitle, displayValue)
    {
        switch(displayTitle)
        {
            case 'format':
                filterCatalogResult(displayValue , `show_type`);
                console.log(displayTitle)
                break;
                
            case 'quality':
                filterCatalogResult(displayValue , `show_quality`);
                console.log(displayTitle)
                break;
                
            case 'year':
                filterCatalogResult(displayValue , `show_year`);
                console.log(displayTitle)
                break;
                
            case 'genre':
                filterCatalogResult(displayValue , `show_genre`);
                console.log(displayTitle)
                break;
                
            case 'origin':
                filterCatalogResult(displayValue , `show_country`);
                console.log(displayTitle)
                break;
                
            case 'sort by':
                notification(`notifyBad` , `Error filtering`);
                console.log(displayTitle)
                break;
                
            default:
                console.log(displayTitle)
                notification(`notifyBad` , `An Error occured`);
                break;
        }
        // Perform action for single selectable options
        // if(((displayTitle == "format") || (displayTitle == "quality") || (displayTitle == "year")))
        // {
        //     filterCatalogResult(displayValue , ``);
        // }
        // // Perform action for multi-selectable options
        // else if(((displayTitle == "genre") || (displayTitle == "origin")))
        // {}
        // // Perform action for sorting the items (Sort by)
        // else
        // {}
    }








