
/***************************************************************
 * This will hold the code for the different sections of the website 
    The sections include:
    - Anime
    - TV Shows
    - Movies
    - Cartoon
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// LOADS THE ITEMS IN THE INVENTORY FOR EACH SECTION

    

    window.addEventListener("load" , loadInventory);

    function loadInventory()
    {
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`src` , `/inventory.js`);

        invScriptTag.addEventListener("load" , () => 
        {
            launchCatalog();
        });

        document.body.appendChild(invScriptTag);
    }


    function launchCatalog()
    {
        let catalogHTML = 
        `
            <div class="give_space" id="top"></div>

            <div class="catalogTitleBdr">
                <div class="catalogTitleBox">
                    <div class="catalogTitleText">
                        <div class="catalogTitleTextFirst"></div>
                        <div class="catalogTitleTextOthers"></div>
                    </div>
                </div>
            </div>
            <div class="basicCatalogBase">
                <div class="basicCatalogBdr">
                    <div class="basicCatalogBox max_sizing showCatalog"></div>
                    <div id="basicLoadingIndicator">
                        <div class="basicSpinner"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML(`afterbegin` , catalogHTML);

        let catalogTitleText = document.querySelector(".catalogTitleText");
        let catalogTitleTextFirst = catalogTitleText.querySelector(".catalogTitleTextFirst");
        let catalogTitleTextOthers = catalogTitleText.querySelector(".catalogTitleTextOthers");
        let catalogPagePathName = window.location.pathname;
        let extractedCatalogPagePath = catalogPagePathName.replace(/\.html$/, "");
        let catalogPageSpecificSegment = extractedCatalogPagePath.substring(extractedCatalogPagePath.lastIndexOf('/') + 1);
        let catalogPageSpecificFirstLetter;
        let catalogPageSpecificOtherLetters;
        
        // Add "shows" if value is "Tv"
        if(catalogPageSpecificSegment.toLowerCase() == "tv")
        {
            catalogPageSpecificSegment = `${catalogPageSpecificSegment} Shows`;
        }

        // Separate the First letter and other letters after it
        catalogPageSpecificFirstLetter = catalogPageSpecificSegment.substring(0 , 1);
        catalogPageSpecificOtherLetters = catalogPageSpecificSegment.substring(catalogPageSpecificSegment.lastIndexOf(catalogPageSpecificFirstLetter) + 1);

        // Assign values to their specific location
        catalogTitleTextFirst.textContent = catalogPageSpecificFirstLetter.toUpperCase();
        catalogTitleTextOthers.textContent = catalogPageSpecificOtherLetters.toLowerCase();
        
        // Fetch the content
        fetchCatalog(catalogPageSpecificSegment);
    }


    function fetchCatalog(page) 
    {
        const whatPage = page.toLowerCase();
        const showCatalog = document.querySelector(".showCatalog");
        const basicLoadingIndicator = document.getElementById("basicLoadingIndicator");
        let thisPageType;
    
        let catalogInvSize = 0;
        let currentIndex = 0;
        const noOfItemsToLoad = 20;

        // Determine the show type based on the current page
        switch (whatPage) 
        {
            case 'recent':
                thisPageType = "all";
                break;
            case 'movies':
                thisPageType = "movie";
                break;
            case 'tv shows':
                thisPageType = "tv";
                break;
            default:
                notification(`notifyBad`, `An error occurred`);
        }
        
        const filteredItems = searchInventory.filter(item => 
        {
            const showtype = item.show_type.toLowerCase();
            return thisPageType === 'all' || showtype === thisPageType;
        });

        catalogInvSize = filteredItems.length;
    
        function loadItems() 
        {
    
            const endIndex = Math.min(currentIndex + noOfItemsToLoad, catalogInvSize);
            for (let i = currentIndex; i < endIndex; i++) 
            {
                const item = filteredItems[i];
                const cardHTML = 
                `
                    <div class="slide_card_base">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${item.show_link}" title="Watch ${item.show_title}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${item.show_thumbnail}" alt="Thumbnail image of ${item.show_title}" class="cardImg">
                                    </div>
                                    <div class="cardQualityBox">
                                        <h1 class="cardQualityText">${item.show_quality}</h1>
                                    </div>
                                    <div class="cardinfo cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${item.show_type}</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${item.show_year}</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${item.show_title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox openAddToWLBtn" title="Add to Watchlist">
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
                showCatalog.insertAdjacentHTML('beforeend', cardHTML);
            }
    
            currentIndex = endIndex;
    
            // Reattaching listeners after adding new items
            attachAddToWLEventListeners();
    
            if (currentIndex >= catalogInvSize) 
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
            rootMargin: '0px',
            threshold: 0.1
        });
    
        observer.observe(basicLoadingIndicator);
    
        loadItems();
    }
    

    


    



    







