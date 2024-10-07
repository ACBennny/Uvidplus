/***************************************************************
 * This will hold the code for General functions of the Watchlist page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let wlBodyCtntBox = document.querySelector(".wl_body_ctnt_box");
    let wlCatalogBdr = wlBodyCtntBox.querySelector(".userWLCatalogBdr");
    let wlCatalogGrid = document.querySelector(".userWLCatalogGrid");
    let wlModalBase = document.querySelector(".wlModalBase");
    let wlModalBox = document.querySelector(".wlModalBox")
    let emptyUserPageBdr = document.querySelector(".emptyUserPageBdr");
    let emptyWLStruct = 
    `
        <div class="emptyUserPageBdr">
            <div class="emptyUserPageBox">
                <div class="emptyUserPageCtnt">
                    <div class="emptyUserPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="emptyUserPageIconSvg">
                            <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                        </svg>
                    </div>
                    <div class="emptyUserPageNoteBox">
                        <p class="emptyUserPageNoteText">
                            You don't have any watchlists.
                            </br>
                            Click the button below to create your own unique watchlists.
                        </p>
                    </div>
                    <button class="emptyUserCreateBtn createNewWLBtn darkSolidBtn">Create Watchlist</button>
                </div>
            </div>
        </div>
    `;
    let wlArray = [];

    function startUserPage()
    {
        let wlLibraryScriptTag = document.createElement("script");
        wlLibraryScriptTag.setAttribute(`src` , `/User/Watchlist/library.js`);
        document.body.appendChild(wlLibraryScriptTag);

        wlLibraryScriptTag.addEventListener("load" , () => 
        {
            loadSearchInventory();
        });
        wlLibraryScriptTag.onerror = function() 
        {
            errorLoadingUserWatchlist();
        };
    }

    
    // Inserting the empty bdr when there are no watchlists
    function insertEmptyBdr()
    {
        wlBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyWLStruct);
    }

    // For error events
    function errorLoadingUserWatchlist()
    {
        notification(`notifyBad` , `An error occurred while loading your watchlist`);
    }
    
    // 
    function loadSearchInventory()
    {
        let searchInvScriptTag = document.createElement("script");
        searchInvScriptTag.setAttribute(`src` , `/inventory.js`);
        document.body.appendChild(searchInvScriptTag);

        searchInvScriptTag.addEventListener("load" , () => 
        {
            fetchUserWatchList();
        });
        searchInvScriptTag.onerror = function() 
        {
            errorLoadingUserWatchlist();
        };
    }

    // For inserting the empty status
    function insertEmptyWLStatus()
    {
        // Clearing the watchlist bdr
        wlCatalogBdr.remove();

        // Inserting empty status
        wlBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyWLStruct);
    }

    // 
    function fetchUserWatchList()
    {
        // Check if the library is available
        if(((watchlistInventory == undefined) || (searchInventory == undefined)))
        {
            errorLoadingUserWatchlist();
            return;
        }

        // Check if there is content inside the library
        if(((watchlistInventory.length <= 0) || (searchInventory.length <= 0)))
        {
            return;
        }

        // Remove the empty status
        emptyUserPageBdr.remove();

        // Filling in the content
        for(let i = 0; i < watchlistInventory.length; i++)
        {
            let wl = watchlistInventory[i];
            let firstElemImgSrc;
            let firstElemImgId = wl.wl_items[0].wl_itemId;
            let firstElemImgIdLC = firstElemImgId.substring(firstElemImgId.indexOf('=') + 1).toLowerCase();
            searchInventory.forEach((item) => 
            {
                let invShowLink = item.show_link;
                let invShowLinkLC = invShowLink.substring(invShowLink.indexOf('=') + 1).toLowerCase();

                if(invShowLinkLC === firstElemImgIdLC)
                {
                    firstElemImgSrc = item.show_background;
                    return;
                }
            });

            let wlCatalogItemBaseStruct = 
            `
                <div class="userWLCatalog_ItemBase">
                    <div class="userWLCatalog_ItemBdr">
                        <div class="userWLCatalog_ItemBox">
                            <div class="userWLCatalog_ItemStackBdr">
                                <div class="userWLCatalog_ItemStackBox">
                                    <div class="userWLCatalog_ItemStackLvlAll userWLCatalog_ItemStackLvl3"></div>
                                    <div class="userWLCatalog_ItemStackLvlAll userWLCatalog_ItemStackLvl2"></div>
                                    <div class="userWLCatalog_ItemStackLvlAll userWLCatalog_ItemStackLvl1">
                                        <div class="userWLCatalog_ItemThumbBdr">
                                            <div class="userWLCatalog_ItemThumbBox">
                                                <img class="userWLCatalog_ItemThumbImg" src="${firstElemImgSrc}" alt="Thumbnail image for the watchlist: ${wl.wl_name}">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="userWLCatalog_ItemDetBase">
                                <div class="userWLCatalog_ItemDetBdr">
                                    <div class="userWLCatalog_ItemDetBox">
                                        <div class="userWLCatalog_ItemDetMajorBox">
                                            <div class="userWLCatalog_ItemDetMajorText userWLCatalog_ItemDetTitleText">${wl.wl_name}</div>
                                        </div>
                                        <div class="userWLCatalog_ItemDetMinorBox">
                                            <div class="userWLCatalog_ItemDetMinorIcon">
                                                <svg class="userWLCatalog_ItemDetMinorSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                </svg>
                                            </div>
                                            <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemCountText">${wl.wl_items.length} items</p>
                                        </div>
                                        <div class="userWLCatalog_ItemDetMinorBox">
                                            <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemYearText">Updated on recently</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="userWLCatalog_ItemOpenWLBdr">
                                <button class="userWLCatalog_ItemOpenWLBtn"></button>
                            </div>
                            <div class="userWLCatalog_ItemBadgeBdr userWLCatalog_ItemDelWLBtn" title="Delete">
                                <div class="userWLCatalog_ItemBadgeBox">
                                    <div class="userWLCatalog_ItemBadgeIcon">
                                        <svg class="userWLCatalog_ItemBadgeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            wlCatalogGrid.insertAdjacentHTML(`beforeend` , wlCatalogItemBaseStruct);
        }

        addOpenWLListeners();
        addDelWLEventListeners();
    }


    // Adding Event listeners for Opening watchlist modal
    function addOpenWLListeners()
    {

        let userWLCatalogItemOpenWLBtn = document.querySelectorAll(".userWLCatalog_ItemOpenWLBtn");

        userWLCatalogItemOpenWLBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        userWLCatalogItemOpenWLBtn.forEach((btn, i) => 
        {
            const action = () => 
            {
                openWLModal(i);
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }


    // Adding Event listeners for deleting watchlist items
    function addDelWLEventListeners()
    {
        let userWLCatalog_ItemDelWLBtn = document.querySelectorAll(".userWLCatalog_ItemDelWLBtn");

        userWLCatalog_ItemDelWLBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        userWLCatalog_ItemDelWLBtn.forEach((btn, i) => 
        {
            const action = () => 
            {
                delWLCatalogItem(i);
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }

    function delWLCatalogItem(index)
    {
        // Delete item from invetory
        watchlistInventory.splice(index , 1);

        // Remove item from catalog
        let delItem = document.getElementsByClassName("userWLCatalog_ItemBase")[index];
        delItem.remove();

        if((watchlistInventory.length <= 0))
        {
            insertEmptyBdr();
            return;
        }

        // Reattach listeners
        addOpenWLListeners();
        addDelWLEventListeners();
    }

    function openWLModal(index)
    {
        let wlCurr = watchlistInventory[index];
        let userWLCatalog_ItemBase = document.querySelectorAll(".userWLCatalog_ItemBase");
        let currCatalogItemBase = userWLCatalog_ItemBase[index];
        let wlModalBaseClose = document.querySelector(".wlModalBaseClose");
        let wlModalHeaderBcgImg = document.querySelector(".wlModalHeader_BcgImg");
        let wlModalHeaderThumbImg = document.querySelector(".wlModalHeader_thumbImg");
        let wlModalHeader_DetInfo_TitleText = document.querySelector(".wlModalHeader_DetInfo_TitleText");
        let wlModalHeader_DetInfo_TagsCountText = document.querySelector(".wlModalHeader_DetInfo_TagsCountText");
        let wlModalHeader_DetInfo_TagsUpdateText = document.querySelector(".wlModalHeader_DetInfo_TagsUpdateText");
        let wlModalHeader_DetInfo_DescText = document.querySelector(".wlModalHeader_DetInfo_DescText");
        let wlModalGridBox = document.querySelector(".wlModalGridBox");
        let wlModalGrid_CardBdr;
        let closeTimer;

        // Setting the Background
        wlModalHeaderBcgImg.setAttribute(`src` , currCatalogItemBase.querySelector(".userWLCatalog_ItemThumbImg").getAttribute(`src`));

        // Setting the Thumbnail
        wlModalHeaderThumbImg.setAttribute(`src` , currCatalogItemBase.querySelector(".userWLCatalog_ItemThumbImg").getAttribute(`src`));

        // Setting the title
        wlModalHeader_DetInfo_TitleText.textContent = currCatalogItemBase.querySelector(".userWLCatalog_ItemDetTitleText").textContent;

        // Setting the Item count
        wlModalHeader_DetInfo_TagsCountText.textContent = currCatalogItemBase.querySelector(".userWLCatalog_ItemCountText").textContent;

        // Setting the update date
        wlModalHeader_DetInfo_TagsUpdateText.textContent = currCatalogItemBase.querySelector(".userWLCatalog_ItemYearText").textContent;

        // Setting the description
        wlModalHeader_DetInfo_DescText.textContent = wlCurr.wl_desc;

        // Filling in the grid content
        for(let g = 0; g < wlCurr.wl_items.length; g++)
        {
            let itemId = wlCurr.wl_items[g].wl_itemId;
            let itemIdLC = itemId.substring(itemId.indexOf('=') + 1).toLowerCase();
            let itemData = searchInventory.filter((item) => 
            {
                let invShowLink = item.show_link;
                let invShowLinkLC = invShowLink.substring(invShowLink.indexOf('=') + 1).toLowerCase();
                return invShowLinkLC === itemIdLC;
            });
            let itemStruct = itemData.map((item) => 
            {
                const {
                    show_background, 
                    show_foreground, 
                    show_link, 
                    show_title, 
                    show_scores, 
                    show_type, 
                    show_year, 
                    show_description, 
                } = item;

                return `
                    <div class="wlModalGrid_CardBdr">
                        <div class="wlModalGrid_CardBox">
                            <div class="wlModalGrid_CardHandleBdr">
                                <div class="wlModalGrid_CardHandleBox">
                                    <div class="wlModalGrid_CardHandleIcon">
                                        <svg class="wlModalGrid_CardHandleSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="wlModalGrid_CardCtntBdr">
                                <div class="wlModalGrid_CardCtntBox">
                                    <div class="wlModalGrid_CardCtntThumbBdr">
                                        <div class="wlModalGrid_CardCtntThumbBox">
                                            <img class="wlModalGrid_CardCtntThumbImg img_large" src="${show_background}" alt="Thumbnail image for ${show_title}">
                                            <img class="wlModalGrid_CardCtntThumbImg img_small" src="${show_foreground}" alt="Thumbnail image for ${show_title}">
                                        </div>
                                    </div>
                                    <div class="wlModalGrid_CardCtntDetBdr" data-ctnt-link="${show_link}">
                                        <div class="wlModalGrid_CardCtntDetBox">
                                            <div class="wlModalGrid_CardCtnt_DetTitleBox">
                                                <div class="wlModalGrid_CardCtnt_DetTitleText">${show_title}</div>
                                            </div>
                                            <div class="wlModalGrid_CardCtnt_DetTagBdr">
                                                <div class="wlModalGrid_CardCtnt_DetTagBox">
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox wlModalGrid_CardCtnt_DetTagScoreBox">
                                                        <div class="wlModalGrid_CardCtnt_DetTagScoreIcon">
                                                            <svg class="wlModalGrid_CardCtnt_DetTagScoreSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagScoreText">${show_scores}</div>
                                                    </div>
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagTypeText">${show_type}</div>
                                                    </div>
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagReleaseText">${show_year}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wlModalGrid_CardCtnt_DetDescBox">
                                                <p class="wlModalGrid_CardCtnt_DetDescText">${show_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wlModalActionFence wlModalAction_GridCardFence">
                                <div class="wlModalActionBase">
                                    <div class="wlModalActionBdr">
                                        <div class="wlModalActionBox">
                                            <button class="wlModalActionBtn">
                                                <div class="wlModalActionBtnIcon">
                                                    <svg class="wlModalActionBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            wlModalGridBox.insertAdjacentHTML(`beforeend` , itemStruct);
        }

        // Opening the modal
        wlModalBase.classList.add("active");
        document.body.classList.add("bodystop");
        wlModalGrid_CardBdr = document.querySelectorAll(".wlModalGrid_CardBdr");

        // Closing the modal
        wlModalBaseClose.addEventListener("click" , () => 
        {
            wlModalBox.scrollTo(null, 0);
            wlModalBase.classList.remove("active");
            document.body.classList.remove("bodystop");

            // Removes the content in the modal
            closeTimer = setTimeout(() => 
            {
                clearTimeout(closeTimer);
                wlModalHeaderBcgImg.setAttribute(`src` , ``);
                wlModalHeaderThumbImg.setAttribute(`src` , ``);
                wlModalHeader_DetInfo_TitleText.textContent = ``;
                wlModalHeader_DetInfo_TagsCountText.textContent = ``;
                wlModalHeader_DetInfo_TagsUpdateText.textContent = ``;
                wlModalHeader_DetInfo_DescText.textContent = ``;
                wlModalGrid_CardBdr.forEach((card) => 
                {
                    card.remove();
                });
            }, 500);
        });
    }