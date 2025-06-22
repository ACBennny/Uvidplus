
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
        <div class="catalogBase hide">
            <div class="catalogBdr">
                <div class="catalogBox">
                    <div class="toggleCatFiltbdr">
                        <div class="toggleCatFiltBox">
                            <button type="button" class="genBtnBox greySolidBtn toggleCatFiltBtn" title="Toggle filters">
                                <div class="genBtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                        <path d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3" />
                                    </svg>
                                </div>
                                <span class="genBtnText">Filter</span>
                            </button>
                        </div>
                    </div>
                    <div class="catalogHeadBdr">
                        <div class="catalogHeadBcg">
                            <div class="catalogHeadBox">
                                <div class="catalogHeadTitleBox">
                                    <div class="catalogHeadTitleText">Filter</div>
                                </div>
                                <div class="catalogFilterBdr">
                                    <div class="catalogFilterBox"></div>
                                </div>
                                <div class="catalogHeadTitleBox">
                                    <div class="catalogHeadTitleText">Genre</div>
                                </div>
                                <div class="catalogGenreBdr">
                                    <div class="catalogGenreBox"></div>
                                </div>
                                <div class="catalogActionBdr">
                                    <div class="catalogActionBox">
                                        <button type="button" class="genBtnBox midSolidBtn applycatFiltBtn" title="Apply selected filters">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                </svg>
                                            </div>
                                            <span class="genBtnText">Apply</span>
                                        </button>
                                        <button type="button" class="genBtnBox greySolidBtn clearCatalogFilters" title="Clear all filters">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524"></path>
                                                    <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span class="genBtnText">Clear</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalogResultBdr">
                        <div class="catalogResultTitleBox"></div>
                        <div class="emptyResultBdr">
                            <div class="emptyResultBox">
                                <div class="emptyResultText">Oops!</div>
                                <div class="emptyResultText">No results found :(</div>
                            </div>
                        </div>
                        <div class="catalogResultBox basicCatalogBox"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let searchstruct = 
    `
        <div class="catalogSearchBase">
            <div class="catalogSearchBdr">
                <div class="catalogSearchInputCover"></div>
                <div class="catalogSearchInputIcon catalogSearchInputLeftIcon openCatalogSearchInputCoverIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogSearchInputSvg">
                        <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="catalogSearchInputIcon catalogSearchInputLeftIcon catalogSearchFieldIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogSearchInputSvg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                    </svg>
                </div>
                <div class="catalogSearchBox">
                    <input type="text" name="catalogSearchFieldName" id="catalogSearchFieldId" class="catalogSearchFieldClass" placeholder="What do you want to watch?" disabled>
                    <label for="catalogSearchFieldId" class="catalogSearchInputIcon catalogSearchInputRightIcon catalogSearchInputClearIcon">
                        <svg transform="scale(0.75)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="catalogSearchInputSvg">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    `;

    let categoriesBase;
    let catalogBase;
    let catalogParamsOrder = ["search", "sort", "format", "quality", "status", "rating", "score", "year", "origin", "genre"];
    let catalogURLandQueryCombine;
    let catalogURLParams;
    let catalogURLSearchParam;
    let catalogURLSortParam;
    let catalogURLFormatParam;
    let catalogURLQualityParam;
    let catalogURLStatusParam;
    let catalogURLScoreParam;
    let catalogURLYearParam;
    let catalogURLOriginParam;
    let catalogURLGenreParam;
    let catalogURLRatingParam;
    let catalogSearchQuery = "";
    let catalogSearchBdr;
    let catalogSearchInputCover;
    let openCatalogSearchInputCoverIcon;
    let catalogSearchInput;
    let catalogSearchXmark;
    let toggleCatFiltBtn;
    let catalogHeadBdr;
    let catalogResultBox;
    let clearCatalogFilters;
    let catalogFilterBdr;
    let catalogFilterBox;
    let catalogFilterSelect;
    let catalogGenreBox;
    let catalogGenreCards;
    let catalogFilterDisplayBtn;
    let catalogFilterListMenu;
    let catalogResultTitleBox;
    let noResultsFound;
    let applycatFiltBtn;
    let currFilterMenuIndex = null;
    let sortParam = { key: '', order: 'dsc' };
    let selectedGenres = [];
    let selectedFilters = 
    {
        Search: [],
        Format: [],
        Quality: [],
        Status: [],
        Rating: [],
        Score: [],
        Year: [],
        Origin: [],
        Genres: [],
    };




    // INTIALIZING URL PARAMS

        function initURLParams()
        {
            // Get current url params
            catalogURLParams = new URLSearchParams(hash_parts[2]);

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
                const newUrl = `#/explore/?${catalogParamsOrder.map(param => `${param}=${catalogURLParams.get(param).toLowerCase()}`).join('&')}`;

                // Update the URL without reloading the page
                window.history.replaceState(null, '', newUrl);

            // GETTING EACH PARAM VALUE

                catalogURLSearchParam = catalogURLParams.get(`${catalogParamsOrder[0]}`);
                catalogURLSortParam = catalogURLParams.get(`${catalogParamsOrder[1]}`);
                catalogURLFormatParam = catalogURLParams.get(`${catalogParamsOrder[2]}`);
                catalogURLQualityParam = catalogURLParams.get(`${catalogParamsOrder[3]}`);
                catalogURLStatusParam = catalogURLParams.get(`${catalogParamsOrder[4]}`);
                catalogURLRatingParam = catalogURLParams.get(`${catalogParamsOrder[5]}`);
                catalogURLScoreParam = catalogURLParams.get(`${catalogParamsOrder[6]}`);
                catalogURLYearParam = catalogURLParams.get(`${catalogParamsOrder[7]}`);
                catalogURLOriginParam = catalogURLParams.get(`${catalogParamsOrder[8]}`);
                catalogURLGenreParam = catalogURLParams.get(`${catalogParamsOrder[9]}`);

                // Combining params
                catalogURLandQueryCombine = `#/explore/?search=${catalogURLSearchParam}&sort=${catalogURLSortParam}&format=${catalogURLFormatParam}&quality=${catalogURLFormatParam}&genre=${catalogURLGenreParam}&year=${catalogURLYearParam}&origin=${catalogURLOriginParam}`;
        }


    // UPDATING THE URL PARAMS

        function updateURLParams(theURLParam, paramValue)
        {
            // Set the given param
            catalogURLParams.set(theURLParam , paramValue);

            // Rebuild the URL in the original order
            const newUrl = `#/explore/?${catalogParamsOrder.map(param => `${param}=${catalogURLParams.get(param).toLowerCase()}`).join('&')}`;

            // Update the URL without reloading the page
            window.history.replaceState(null, '', newUrl);
        }
        

    // INITIALIZING THE CATALOG BASE

        function initCatalogBase()
        {
            // DOM Insertions
            documentCtnt.insertAdjacentHTML(`afterbegin` , catalogStruct);
            topNavBar.insertAdjacentHTML(`afterbegin` , searchstruct);
            topNavBar.classList.add("initialize");

            initURLParams();
            preSanitizaUserInput();


            // Definitions
            catalogSearchQuery = '';
            categoriesBase = document.querySelector(".categoriesBase");
            catalogBase = document.querySelector(".catalogBase");
            catalogSearchBdr = document.querySelector(".catalogSearchBdr");
            catalogSearchInputCover = document.querySelector(".catalogSearchInputCover");
            catalogSearchInput = document.querySelector('#catalogSearchFieldId');
            openCatalogSearchInputCoverIcon = document.querySelector(".openCatalogSearchInputCoverIcon");
            catalogSearchXmark = document.querySelector(".catalogSearchInputClearIcon");
            toggleCatFiltBtn = document.querySelector(".toggleCatFiltBtn");
            catalogHeadBdr = document.querySelector(".catalogHeadBdr");
            catalogResultBox = document.querySelector(".basicCatalogBox");
            clearCatalogFilters = document.querySelector(".clearCatalogFilters");
            catalogFilterBdr = document.querySelector(".catalogFilterBdr");
            catalogFilterBox = document.querySelector(".catalogFilterBox");
            catalogGenreBox = document.querySelector(".catalogGenreBox");
            catalogResultTitleBox = document.querySelector(".catalogResultTitleBox");
            noResultsFound = document.querySelector(".emptyResultBdr");
            applycatFiltBtn = document.querySelector(".applycatFiltBtn");


            // Open the search input
            catalogSearchInputCover.addEventListener("click" , () => 
            {
                toggleInputFieldState(true);
            });


            // Close the search input
            openCatalogSearchInputCoverIcon.addEventListener("click" , () => 
            {
                toggleInputFieldState(false);
            });


            // Update catalog search Input and add event listener   
            catalogSearchInput.setAttribute(`value` , `${catalogURLSearchParam}`);

            catalogSearchInput.addEventListener("input", () => 
            {
                // Update result text and Hide/Unhide x-mark button while typing
                if(catalogSearchInput.value.length > 0)
                {
                    catalogSearchXmark.classList.add("isTyping");
                }
                else
                {
                    catalogSearchXmark.classList.remove("isTyping");
                }
    
                // Automatically scrolls the page back to top for every input
                window.scrollTo(null , 0);

                // Filter inputs
                getFilterAndSortInput();
            });
            catalogSearchInput.addEventListener("click" , () => 
            {
                catalogHeadBdr.classList.remove("show");
            });


            // Clear Search field
            catalogSearchXmark.addEventListener("click" , () => 
            {
                catalogSearchInput.value = "";
                catalogSearchQuery = "";
                catalogSearchXmark.classList.remove("active");
                getFilterAndSortInput();
            });


            // Open/Close filters
            toggleCatFiltBtn.addEventListener("click" , () => 
            {
                catalogHeadBdr.classList.toggle("show");
            });


            // Apply filters
            applycatFiltBtn.addEventListener("click" , getFilterAndSortInput);

            
            // Clear all filters
            clearCatalogFilters.addEventListener("click" , () => 
            {
                // Clear Search input
                catalogSearchInput.value = "";
                catalogSearchQuery = "";
                catalogSearchXmark.classList.remove("active");

                // Clear field values and url params
                catalogFilterSelect.forEach((field, index) => 
                {
                    field.value = "";
                    updateURLParams(catalogParamsOrder[index + 1], '');
                });

                // Clear active Genre cards and url params
                catalogGenreCards.forEach((card) => 
                {
                    if(card.classList.contains("active"))
                    {
                        card.classList.remove("active");
                    }
                });
                updateURLParams(catalogParamsOrder[9], '');
                
                // Close the filter menu
                catalogHeadBdr.classList.remove("show");
            });


            // initialize filters
            initCatalogFilters();

        }



    // INITIALIZING CATALOG FILTERS
    

        function errorLoadingFilters()
        {
            topNavBar.classList.remove("initialize");
            toggleCatFiltBtn.remove();
            failedScriptLoad();
            notification(`notifyBad` , `Error loading Filters`);
            notification(`notifyBad` , `Please reload page`);
        }
    
        // Importing from inventory
        function initCatalogFilters()
        {
            // Generate the filter cards to contain the filter menus
            for(let i = 0; i < filterInv.length; i++)
            {
                let catFiltBdr = document.createElement("div");
                catFiltBdr.classList.add("catalogFilterCardBdr");
    
                let catFiltBox = document.createElement("div");
                catFiltBox.classList.add("catalogFilterCardBox");
                catFiltBox.innerHTML = 
                `
                        <div class="catalogFilterDisplayIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="catalogFilterDisplaySvg">
                                <path fill-rule="evenodd" d="M13.698 3.314a.75.75 0 0 1 .809.133l6 5.5a.75.75 0 0 1-1.014 1.106L14.75 5.705V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .448-.687M10 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.257.553l-6-5.5a.75.75 0 0 1 1.014-1.106l4.743 4.348V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="catalogFilterTitleBox">
                            <div class="catalogFilterTitleText">${filterInv[i].category}</div>
                        </div>
                `;
    
                // Create the selctor bdr
                let catSelBdr = document.createElement("div");
                catSelBdr.classList.add("catalogFilterSelectBdr");
    
                // Create the selector element
                let catSelBox = document.createElement("select");
                catSelBox.classList.add("catalogFilterSelectBox");
                catSelBox.setAttribute(`name` , `${filterInv[i].category.toLowerCase()}`);
                catSelBox.setAttribute(`id` , `filter_${filterInv[i].category.toLowerCase()}`);
                catSelBox.innerHTML = `<option value="">Any</option>`;
    
                for(let j = 0; j < filterInv[i].options.length; j++)
                {
                    if((filterInv[i].category.toLowerCase() === "sort"))
                    {
                        catSelBox.insertAdjacentHTML(
                            `beforeend`,
                            `
                                <option value="${filterInv[i].options[j].opt_value},${filterInv[i].options[j].opt_order}">${filterInv[i].options[j].opt_name}</option>
                            `
                        );
                    }
                    else
                    {
                        catSelBox.insertAdjacentHTML(
                            `beforeend`,
                            `
                                <option value="${filterInv[i].options[j].toLowerCase()}">${filterInv[i].options[j]}</option>
                            `
                        );
                    }
                }
                catSelBdr.appendChild(catSelBox);
                catFiltBox.appendChild(catSelBdr);
                catFiltBdr.appendChild(catFiltBox);
                catalogFilterBox.appendChild(catFiltBdr);
            }
    
    
            // Generate the Genre options
            for(let i = 0; i < genreInv.length; i++)
            {
                let catGnrBdr = document.createElement("div");
                catGnrBdr.classList.add("catalogGenreCard");
                catGnrBdr.setAttribute(`data-id` , `${genreInv[i].toLowerCase()}`);
                catGnrBdr.innerHTML = genreInv[i];
                catalogGenreBox.appendChild(catGnrBdr);
            }    
    
            // Define the elements
            catalogFilterSelect = document.querySelectorAll(".catalogFilterSelectBox");
            catalogGenreCards = document.querySelectorAll(".catalogGenreCard");
            let oneNotDflt = false;
            let urlGenres = catalogURLGenreParam.split(",");


            // Check if url params exist and apply accordingly
            catalogFilterSelect.forEach((field) =>
            {
                switch(field.name)
                {
                    case 'sort':
                        field.value = `${catalogURLSortParam.toLowerCase()}`;
                        break;

                    case 'format':
                        field.value = `${catalogURLFormatParam.toLowerCase()}`;
                        break;
                        
                    case 'quality':
                        field.value = `${catalogURLQualityParam.toLowerCase()}`;
                        break;
                        
                    case 'status':
                        field.value = `${catalogURLStatusParam.toLowerCase()}`;
                        break;
                        
                    case 'rating':
                        field.value = `${catalogURLRatingParam.toLowerCase()}`;
                        break;
                        
                    case 'score':
                        field.value = `${catalogURLScoreParam.toLowerCase()}`;
                        break;
                        
                    case 'year':
                        field.value = `${catalogURLYearParam.toLowerCase()}`;
                        break;
                        
                    case 'origin':
                        field.value = `${catalogURLOriginParam.toLowerCase()}`;
                        break;

                    default:
                        notification(`notifyBad` , `An error occurred during initialization`);
                        break;
                }
            });

            catalogGenreCards.forEach((card) => 
            {
                // Add active state to card if available
                urlGenres.forEach((item) => 
                {
                    if((card.getAttribute("data-id").toLowerCase() === item.toLowerCase()) && !(card.classList.contains("active")))
                    {
                        card.classList.add("active");
                    }
                });

                // Toggle active state for each genre option
                card.addEventListener("click" , () =>
                {
                    card.classList.toggle("active");
                })
            });


            // Check if any filter option was selected
            catalogSearchQuery = catalogSearchInput.value.toString().trim().replace(/\s+/g, ' ').toLowerCase();
            if(catalogSearchQuery.length > 0)
            {
                oneNotDflt = true;
            }
            catalogFilterSelect.forEach((field) =>
            {
                if(field.value.toString() !== "")
                {
                    oneNotDflt = true;
                    return;
                }
            });
            catalogGenreCards.forEach((card) =>
            {
                if((card.classList.contains("active")))
                {
                    oneNotDflt = true;
                    return;
                }
            });
            initToApplyCatalogFilter(oneNotDflt);
        }

        // If at least one attribute is not default, then apply filter
        function initToApplyCatalogFilter(once = false)
        {
            if(once == true)
            {
                once = false;
                getFilterAndSortInput();
                toggleInputFieldState(true);
            }
        }



    // FILTER & DISPLAY ITEMS

        // Enable/Disable Input Field
        function toggleInputFieldState(state = false)
        {
            if(state == true)
            {
                window.scrollTo(0, 0);
                categoriesBase.classList.add("hide");
                catalogBase.classList.remove("hide");
                catalogSearchBdr.classList.add("search_atv");
                catalogSearchInput.disabled = false;
                catalogSearchInput.focus();
                noResultsFound.classList.remove("active");
            }
            else
            {
                categoriesBase.classList.remove("hide");
                catalogBase.classList.add("hide");
                catalogSearchBdr.classList.remove("search_atv");
                catalogSearchInput.value = "";
                getFilterAndSortInput();
                catalogSearchInput.disabled = true;
                catalogHeadBdr.classList.remove("show");
            }
        }

        // Get values from search, filter & sort
        function getFilterAndSortInput()
        {
            // Empty the arrays
            selectedFilters.Search.length = 0;
            selectedFilters.Format.length = 0;
            selectedFilters.Quality.length = 0;
            selectedFilters.Status.length = 0;
            selectedFilters.Rating.length = 0;
            selectedFilters.Score.length = 0;
            selectedFilters.Year.length = 0;
            selectedFilters.Origin.length = 0;
            selectedFilters.Genres.length = 0;
            sortParam.key = "";
            sortParam.order = "";
            selectedGenres.length = 0;

            // Get value from search field
            catalogSearchQuery = postSanitizeUserInput(catalogSearchInput.value.toString().trim().replace(/\s+/g, ' ').toLowerCase());
            selectedFilters.Search.push(catalogSearchQuery);
            updateURLParams(catalogParamsOrder[0], catalogSearchQuery);


            // Get values from filter selectors
            catalogFilterSelect.forEach((select) => 
            {
                switch(select.name)
                {
                    case 'sort':
                        let sortEntries = select.value.split(",");
                        sortParam.key = `${sortEntries[0]}`;
                        sortParam.order = `${sortEntries[1]}`;
                        updateURLParams(catalogParamsOrder[1], select.value);
                        break;
                        
                    case 'format':
                        selectedFilters.Format.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[2], select.value);
                        break;
                        
                    case 'quality':
                        selectedFilters.Quality.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[3], select.value);
                        break;
                        
                    case 'status':
                        selectedFilters.Status.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[4], select.value);
                        break;
                        
                    case 'rating':
                        selectedFilters.Rating.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[5], select.value);
                        break;
                        
                    case 'score':
                        selectedFilters.Score.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[6], select.value);
                        break;
                        
                    case 'year':
                        selectedFilters.Year.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[7], select.value);
                        break;
                        
                    case 'origin':
                        selectedFilters.Origin.push(`${select.value}`);
                        updateURLParams(catalogParamsOrder[8], select.value);
                        break;

                    default:
                        notification(`notifyBad` , `An error occurred while filtering`);
                        break;
                }
            });


            // Get values from genre filters
            catalogGenreCards.forEach((card) => 
            {
                if(card.classList.contains("active"))
                {
                    let selGenre = card.getAttribute("data-id");
                    selectedFilters.Genres.push(`${selGenre}`);
                    selectedGenres.push(`${selGenre}`);
                }
            });
            updateURLParams(catalogParamsOrder[9], selectedGenres);


            // Apply sort and Filter 
            let result = filterAndSortMovies(searchInventory, selectedFilters, sortParam);
            displayCatalogResult(result, result.length);
            catalogHeadBdr.classList.remove("show");

        }

        // Filter Invetory items
        function filterShows(shows, filters) 
        {
            return shows.filter(show => 
            {
                return Object.entries(filters).every(([category, options]) => 
                {
                    const propertyMapping = 
                    {
                        Search: "show_searchKey",
                        Format: "show_type",
                        Quality: "show_quality",
                        Status: "show_airing_status",
                        Rating: "show_rating",
                        Score: "show_scores",
                        Year: "show_year",
                        Origin: "show_country",
                        Genres: "show_genre",
                    };
        
                    const showProperty = propertyMapping[category];
                    if (!showProperty) return true;
                    if(options.length === 0 || options.includes('')) return true;
        
                    const showValue = show[showProperty];
        
                    if (category === "Genres") 
                    {
                        // Split genres by a delimiter (comma-separated)
                        const showGenres = showValue.split(",").map(genre => genre.trim().toLowerCase());

                        // Fetch shows that match ALL selected genre matches
                        return options.every(option => showGenres.includes(option.toLowerCase())); 
                    }

                    if (category === "Score") 
                    {
                        // Convert the show scores to numbers for proper comparison
                        const showScore = parseFloat(showValue);
                        
                        // Include the show if it falls within any selected score range 
                        // (i.e. if "8" is selected, it includes all shows between 8.0 and 8.9)
                        return options.some((option) => 
                        {
                            const lowerBound = parseInt(option, 10);
                            const upperBound = lowerBound + 0.9;
                            return showScore >= lowerBound && showScore <= upperBound;
                        });
                    }

                    if(category === "Search")
                    {
                        return options.some(option => showValue.toLowerCase().includes(option.toLowerCase()));
                    }
        
                    // Default case for non-multi-value properties
                    // return options.includes(showValue);
                    return options.some(option => option.toLowerCase() === showValue.toLowerCase());
                });
            });
        }

        // Sort Inventory items
        function sortShows(movies, { key, order = "asc" }) 
        {
            return movies.sort((a, b) => 
            {
                const aValue = key === "show_scores" ? parseFloat(a[key]) : a[key];
                const bValue = key === "show_scores" ? parseFloat(b[key]) : b[key];
        
                if (order === "asc") 
                {
                    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
                }
                else
                {
                    return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
                }
            });
        }

        // Combined Filter & Sort Functionality
        function filterAndSortMovies(shows, filters, sortParam) 
        {
            const filteredMovies = filterShows(shows, filters);
            return sortShows(filteredMovies, sortParam);
        }

        // Display items
        function displayCatalogResult(items, resultLength) 
        {
            catalogResultBox.innerHTML = items.map((item) => 
            {
                const { show_link, show_foreground, show_title, show_type, show_year } = item;

                if((catalogSearchQuery === "") || ((item == undefined) || (item == null)))
                {
                    return``;
                }

                    return `
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
            }).join('');

            // Let user know if no result was found for their query
            if((catalogResultBox.innerHTML === "") && (catalogSearchQuery.length > 0) && (catalogSearchQuery !== ""))
            {
                noResultsFound.classList.add("active");
            }
            else
            {
                noResultsFound.classList.remove("active");
            }

            if((resultLength > 0) && (catalogSearchQuery !== ""))
            {
                catalogResultTitleBox.innerHTML = 
                `
                    <div class="catalogResultTitleText catalogResultTitleStatic">Results</div>
                    <div class="catalogResultTitleText catalogResultTitleDynamic">(${resultLength})</div>
                `;
            }
            else
            {
                catalogResultTitleBox.innerHTML = 
                `
                    <div class="catalogResultTitleText catalogResultTitleStatic">Results</div>
                    <div class="catalogResultTitleText catalogResultTitleDynamic">(0)</div>
                `;
            }
        };








