
/***************************************************************
 * This will hold the code for loading the history & likes of a profile
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// LOADS THE ITEMS IN THE INVENTORY FOR EACH SECTION

    

    // window.addEventListener("load" , loadInventory);

    // function loadInventory()
    // {
    //     loadScriptOnce(
    //         `/inventory.js`,
    //         `inventoryID`,
    //         [
    //             {func_name: `launchCatalog`, ev_name: null,},
    //         ],
    //         [
    //             {func_name: `failedScriptLoad`, ev_name: null,},
    //         ],
    //     );
    // }


    function launchCatalog(displayType, pageName = hash_parts[0])
    {
        let basicSectHTML = 
        `
            <div class="give_space" id="top"></div>

            <div class="basicSectTitleBdr">
                <div class="basicSectTitleBox">
                    <div class="basicSectTitleText">
                        <div class="basicSectTitleTextFirst"></div>
                        <div class="basicSectTitleTextOthers"></div>
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
        documentCtnt.insertAdjacentHTML(`afterbegin` , basicSectHTML);

        let basicSectTitleText = document.querySelector(".basicSectTitleText");
        let basicSectTitleTextFirst = basicSectTitleText.querySelector(".basicSectTitleTextFirst");
        let basicSectTitleTextOthers = basicSectTitleText.querySelector(".basicSectTitleTextOthers");
        let basicSectPageName = pageName;
        let basicSectPageNameFirst;
        let basicSectPageNameOthers;
        

        // Separate the First letter and other letters after it
        basicSectPageNameFirst = basicSectPageName.substring(0 , 1);
        basicSectPageNameOthers = basicSectPageName.substring(basicSectPageName.lastIndexOf(basicSectPageNameFirst) + 1);

        // Assign values to their specific location
        basicSectTitleTextFirst.textContent = basicSectPageNameFirst.toUpperCase();
        basicSectTitleTextOthers.textContent = basicSectPageNameOthers.toLowerCase();
        
        // Fetch the content
        fetchCatalog(displayType, basicSectPageName);
    }


    function section_catalog_display(page) 
    {
        const whatPage = page.toLowerCase();
        const showCatalog = document.querySelector(".showCatalog");
        const basicLoadingIndicator = document.getElementById("basicLoadingIndicator");
        let thisPageType;
    
        let basicSectInvSize = 0;
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

        basicSectInvSize = filteredItems.length;
    
        // Insert the info of the selected shows
        function loadItems() 
        {
    
            const endIndex = Math.min(currentIndex + noOfItemsToLoad, basicSectInvSize);
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
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="${item.show_foreground}" alt="Thumbnail image of ${item.show_title}" class="cardImg"
                                            >
                                        </div>
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
            attachAddToCLEventListeners();
    
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
    

    


    



    







