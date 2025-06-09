/***************************************************************
 * This will hold the code for General functions of the Watchlist page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// VARIABLE DECLARATIONS

    let wlBodyCtntBox;
    let wlCatalogBdr;
    let wlCatalogGrid;
    let wlEmptyMyListPageBdr;
    let wlModalFilterStatusTabs;
    let wlModalFilterTypeTabs;
    let wlModalFilterStatusTabIndex = 0;
    let wlModalFilterTypeTabIndex = 0;
    let wlLibraryIndexedInv;
    let wlBodyCardBase;
    let delWLBodyCards;
    let mylist_watchlist_struct =
    `
        <div class="myListBodyBox">
            <div class="myListBodyTitleBdr">
                <div class="myListBodyTitleBox">
                    <div class="myListBodyTitleIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListBodyTitleIconSvg">
                            <path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663" />
                        </svg>
                    </div>
                    <span class="myListBodyTitleText">Watchlist</span>
                </div>
                <div class="myListNavAtnBdr">
                    <div class="myListNavAtnBox">
                        <button type="button" aria-haspopup="menu" class="genBtnBox greySolidBtn  openGenMenuModalBtn" data-gen-menu-modal-type="wl_body_filter">
                            <div class="genBtnIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                    <path fill-rule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M14.5 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M5.75 17a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0m3.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd" />
                                    <path d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-7.75 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z" />
                                </svg>
                            </div>
                            <div class="genBtnText">Filter</div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="myListBodyCtntBdr">
                <div class="myListBodyCtntBox wl_body_ctnt_box">
                    <div class="basicCatalogBase">
                        <div class="basicCatalogBdr">
                            <div class="basicCatalogBox"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `;
    let emptyWLStruct = 
    `
        <div class="emptyMyListPageBdr watchlist">
            <div class="emptyMyListPageBox">
                <div class="emptyMyListPageCtnt">
                    <div class="emptyMyListPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyMyListPageIconSvg">
                            <path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137c0-4.6 4.923-7.935 9.264-4.323L9.81 8.204a.75.75 0 0 0 .253.906l2.833 2.024l-2.466 2.878a.75.75 0 0 0 .039 1.018l1.7 1.7l-.91 3.64c-.756-.253-1.516-.843-2.298-1.46q-.417-.326-.856-.663" />
                            <path d="M12.812 20.345c.732-.265 1.469-.837 2.226-1.434q.417-.328.856-.664C18.702 16.083 22 13.542 22 9.137c0-4.515-4.741-7.81-9.02-4.518l-1.553 3.622l3.009 2.149a.75.75 0 0 1 .133 1.098l-2.548 2.973l1.51 1.509a.75.75 0 0 1 .197.712z" />
                        </svg>
                    </div>
                    <div class="emptyMyListPageNoteBox">
                        <p class="emptyMyListPageNoteText">Your watchlist is empty</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    



//  GENERAL FUNCTIONS

    function start_mylist_watchlist_page()
    {
        document.querySelector(".myListBodyBdr").insertAdjacentHTML(`afterbegin` , mylist_watchlist_struct);
        wlBodyCtntBox = document.querySelector(".wl_body_ctnt_box");
        wlCatalogBdr = wlBodyCtntBox.querySelector(".basicCatalogBdr");
        wlCatalogGrid = document.querySelector(".basicCatalogBox");
        
        fetchMyWatchlist();
    }

    
    // Inserting the empty bdr when there are no watchlists
    function insertEmptyWLBdr()
    {
        wlBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyWLStruct);
    }


    // Removing the empty bdr
    function removingEmptyWLBdr()
    {
        wlEmptyMyListPageBdr = document.querySelector(".emptyMyListPageBdr.watchlist");
        if(wlEmptyMyListPageBdr != undefined) wlEmptyMyListPageBdr.remove();
    }


    // For error while loading watchlists 
    function errorLoadingMyListWatchlist()
    {
        notification(`notifyBad` , `An error occurred while loading your watchlist`);
    }








// FILTERING FUNCTIONS


    // Filtering the wl modal cards based on "Show Status" i.e. watching, planned, etc
    function filterWLModalStatus(filterOptNo)
    {
        if(filterOptNo == 0)
        {
            wlBodyCardBase.forEach((bdr) => 
            {
                if(bdr.classList.contains("notShowStatusMatch"))
                {
                    bdr.classList.remove("notShowStatusMatch");
                }
            });
        }
        else
        {
            wlBodyCardBase.forEach((bdr) => 
            {
                if(bdr.classList.contains("notShowStatusMatch"))
                {
                    bdr.classList.remove("notShowStatusMatch");
                }
    
                if(Number(bdr.getAttribute("data-show-status-opt")) != filterOptNo)
                {
                    bdr.classList.add("notShowStatusMatch");
                }
            });
        }
    }

    // Filtering the wl modal cards based on "Show Type" i.e. movie, tv
    function filterWLModalType(filterTypeText)
    {
        wlBodyCardBase.forEach((bdr) => 
        {
            if(bdr.classList.contains("notShowTypeMatch"))
            {
                bdr.classList.remove("notShowTypeMatch");
            }

            // The first ".cardInfo_tagText" is the show type
            if(bdr.querySelectorAll(".cardInfo_tagText")[0].textContent.toLowerCase() != filterTypeText.toLowerCase())
            {
                bdr.classList.add("notShowTypeMatch");
            }
        });
    }
    

    // Attaches Listeners to enable filtering shows in the WL Modal
    function attachFilterWLModalListeners()
    {

        // Variable Definitions
        wlModalFilterStatusTabs = document.querySelectorAll(".wlModalFilterCtnt .wlModalFilterStatusTabs");
        wlModalFilterTypeTabs = document.querySelectorAll(".wlModalFilterCtnt .wlModalFilterTypeTabs");
        
        wlModalFilterStatusTabs[wlModalFilterStatusTabIndex].classList.add("selected");
        wlModalFilterTypeTabs[wlModalFilterTypeTabIndex].classList.add("selected");

        // Selecting a sorting option for "Show Status"
        wlModalFilterStatusTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        wlModalFilterStatusTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                wlModalFilterStatusTabIndex = index;

                // Get option number
                let optNo = Number(tab.getAttribute("data-show-status-opt"));

                // Add selected class to the currently selected tab
                wlModalFilterStatusTabs.forEach((selectedTab) => 
                {
                    selectedTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                filterWLCardsByWatchStatus(optNo);
            }

            tab.addEventListener("click" , action);
            tab.action = action;
        });

        // Selecting a sorting option for "Show Type"
        wlModalFilterTypeTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        wlModalFilterTypeTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                wlModalFilterTypeTabIndex = index;

                // Get option number
                let optNo = tab.getAttribute("data-show-type-opt");

                // Add selected class to the currently selected tab
                wlModalFilterTypeTabs.forEach((selectedTab) => 
                {
                    selectedTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                switch(optNo)
                {
                    // Dispaly All
                    case "0":
                        wlBodyCardBase.forEach((bdr) => 
                        {
                            if(bdr.classList.contains("notShowTypeMatch"))
                            {
                                bdr.classList.remove("notShowTypeMatch");
                            }
                        });
                        break;

                    // Display Movies
                    case "1":
                        filterWLModalType("movies");
                        break;
                        
                    // Display Tv
                    case "2":
                        filterWLModalType("tv");
                        break;
                        
                    // Notify of error 
                    default:
                        notification(`notifyBad` , `An error occured while filtering`);
                        break;
                }
            }
            tab.addEventListener("click" , action);
            tab.action = action;
        });
    }

    // Filter WL Cards based on show watch status
    function filterWLCardsByWatchStatus(optNo)
    {
        switch(optNo)
        {
            // All
            case 0:
                filterWLModalStatus(0);
                break;

            // Planned
            case 1:
                filterWLModalStatus(1);
                break;
                
            // Watching
            case 2:
                filterWLModalStatus(2);
                break;
                
            // On-hold
            case 3:
                filterWLModalStatus(3);
                break;
                
            // Dropped
            case 4:
                filterWLModalStatus(4);
                break;
                
            // Completed
            case 5:
                filterWLModalStatus(5);
                break;
                
            // Notify of error 
            default:
                notification(`notifyBad` , `An error occured while filtering`);
                break;
        }
    }


    



// WATCHLIST CARDS

    // Fetch
    async function fetchMyWatchlist()
    {
        let selectedProfile = await getSelectedProfile();

        // Return if failed to access library
        if(((selectedProfile.prof_watchlist === undefined)))
        {
            errorLoadingMyListWatchlist();
            return;
        }

        // Return if the library is empty
        if(((selectedProfile.prof_watchlist.length === 0)))
        {
            insertEmptyWLBdr();
            return;
        }

        // Map the watchistlist invenory with its item index
        await initWLIndexedMap();

        // Fetch and display the content
        insert_wl_cards();
    }


    // Initializes the DL Map
    async function initWLIndexedMap()
    {
        let selectedProfile = await getSelectedProfile();

        wlLibraryIndexedInv = selectedProfile.prof_watchlist.map((watchlist, index) => 
        {
            return { ...watchlist, index };
        });
    }


    // Generating the cards
    function insert_wl_cards()
    {

        let struct =  ``;

        // Filling in the grid content
        for(let g = 0; g < wlLibraryIndexedInv.length; g++)
        {
            let itemId = wlLibraryIndexedInv[g].wl_item;
            let itemStatus = wlLibraryIndexedInv[g].wl_status;
            let itemIdLC = itemId.split('/')[2];
            let itemMatch = infoInvLinkMap.get(itemIdLC);
            
            // If match found, add to grid
            if (itemMatch) 
            {
                let {
                    show_link,
                    show_title,
                    show_type,
                    show_year,
                    show_foreground,
                } = itemMatch;

                
                struct += 
                `
                    <div class="slide_card_base max_sizing wl_body_card_base" data-show-status-opt="${itemStatus}">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${show_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img loading="lazy" onload="this.classList.add('loaded')" src="${show_foreground}" alt="" class="cardImg">
                                    </div>
                                    <div class="cardInfoBdr">
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
                                        <button type="button" class="cardAddToListBox openGenMenuModalBtn" data-gen-menu-modal-type="wl_body_cards">
                                            <div class="cardAddToListIconBox" title="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cardAddToListIcon">
                                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                </svg>
                                            </div>
                                        </button>
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
                console.error(`${itemIdLC} not found`);
            }
        }

        // Insert struct into DOM
        wlCatalogGrid.insertAdjacentHTML(`afterbegin` , struct);

        // Attach query selector
        wlBodyCardBase = document.querySelectorAll(".slide_card_base.wl_body_card_base");

        // Attach listeners
        attachGenMenuModalEventListeners();
    }


    // Attaching listeners
    function attachWLCardListeners(event)
    {
        // Get the clicked button
        let wlCardMenuBtn = event.target.closest("[data-gen-menu-modal-type='wl_body_cards']");
        
        if (!wlCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='wl_body_cards'] not found.");
            return;
        }

        // Find the parent 
        let wlCardBdr = wlCardMenuBtn.closest(".slide_card_base.wl_body_card_base");
        if (!wlCardBdr)
        {
            console.error("Parent element not found.");
            return;
        }

        // Get all parents elements to obtain the current index
        let allGridCards = Array.from(document.querySelectorAll(".slide_card_base.wl_body_card_base"));
        let wlCardIndex = allGridCards.indexOf(wlCardBdr);

        if (wlCardIndex === -1)
        {
            console.error("Failed to find the index of the clicked card.");
            return;
        }

        // Add selectors
        let wlCardStatus = Number(wlCardBdr.getAttribute("data-show-status-opt"));
        let wlCardLink = wlCardBdr.querySelector(".cardLinkCover")?.getAttribute("href");
        let wlWatchStatusOpt = document.querySelectorAll(".wlWatchStatusOpt");
        let delWLBodyCards = document.querySelector(".delWLBodyCards");
        
        // Change watch status
        wlWatchStatusOpt.forEach((prevItem) => 
        {
            if(prevItem.action)
            {
                prevItem.removeEventListener("click" , prevItem.action);
            }
        });
        wlWatchStatusOpt.forEach((currItem) => 
        {
            // Add the "selected" class to the currently selected option
            if((Number(currItem.getAttribute("data-show-status-opt")) == wlCardStatus))
            {
                currItem.classList.add("selected");
            }

            const upd_watch_status = async () => 
            {
                let selectedProfile = await getSelectedProfile();

                // Get the status option
                currItemStatusOpt = currItem.getAttribute("data-show-status-opt");

                // Update status in profile watchlist array
                selectedProfile.prof_watchlist.forEach((item) => 
                {
                    if(item.wl_item === wlCardLink)
                    {
                        item.wl_status = Number(currItemStatusOpt);
                    }
                });

                // Update user data
                await updUsrProfFlds(
                {
                    prof_watchlist: selectedProfile.prof_watchlist
                });

                // Re-initialize the map
                await initWLIndexedMap();

                // Update status on card
                wlCardBdr.setAttribute(`data-show-status-opt` , `${currItemStatusOpt}`);

                // Notify user of change
                notification(`notifyGood` , `Watch status updated`);
            }

            currItem.addEventListener("click" , upd_watch_status);
            currItem.action = upd_watch_status;
        });


        // Remove from watchlist
        delWLBodyCards.classList.remove("hidden");
        delWLBodyCards.onclick = async () => 
        {
            let selectedProfile = await getSelectedProfile();

            // Remove item from watchlist indexed inv
            selectedProfile.prof_watchlist = selectedProfile.prof_watchlist.filter(item => item.wl_item !== wlCardLink);

            // Update user data
            await updUsrProfFlds(
                {
                    prof_watchlist: selectedProfile.prof_watchlist
                }
            );

            // Re-initialize the map
            await initWLIndexedMap();
            console.log(`Removed ${wlCardLink}`);
            console.log(selectedProfile.prof_watchlist);

            // Remove card from grid
            wlCardBdr.remove();

            // Reattach listeners
            attachGenMenuModalEventListeners();

            // Notify users of the removal
            notification(`notifyGood` , `Show removed from watchlist`);
        }
    }






