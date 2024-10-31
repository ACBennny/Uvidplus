
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
        // Check if inventory.js has been initialized
        let invScriptID = document.querySelector("#inventoryID");

        if(!(invScriptID == undefined))
        {
            preShowSection();
            return;
        }

        // If not, initialize
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`id` , `inventoryID`);
        invScriptTag.setAttribute(`src` , `/inventory.js`);
        document.body.appendChild(invScriptTag);

        invScriptTag.addEventListener("load" , () => 
        {
            launchCatalog();
        });
        invScriptTag.addEventListener("error" , () => 
        {
            notification(`notifyBad` , `An error occurred`);
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
        documentCtnt.insertAdjacentHTML(`afterbegin` , catalogHTML);

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
        
        // Get the shows of the given show type
        const filteredItems = searchInventory.filter(item => 
        {
            const showtype = item.show_type.toLowerCase();
            return thisPageType === 'all' || showtype === thisPageType;
        });

        catalogInvSize = filteredItems.length;
    
        // Insert the info of the selected shows
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
                                    <a href="${item.show_link}" title="Watch ${item.show_title}" class="cardLinkCover" draggable="false"></a>
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
    

    


    



    







