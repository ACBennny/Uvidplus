/***************************************************************
 * This will hold the code for General functions of the Watchlist page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// VARIABLE DECLARATIONS

    let wlBodyCtntBox = document.querySelector(".wl_body_ctnt_box");
    let wlCatalogBdr = wlBodyCtntBox.querySelector(".userWLCatalogBdr");
    let wlCatalogGrid = document.querySelector(".userWLCatalogGrid");
    let wlModalBase = document.querySelector(".wlModalBase");
    let wlModalBox = document.querySelector(".wlModalBox");
    let emptyUserPageBdr = document.querySelector(".emptyUserPageBdr");
    let wlLibraryIndexedInv;
    let newWLMaxSize = 10;
    let newWLCurrSize = 0;
    let createWLTimer;
    let wlBodySortTabs;
    let wlBodySortTabIndex = 0;
    let wlBodyCardIndex = null;
    let userWLCatalog_ItemBase;
    let currCatalogItemBase;
    let wlModalMap;
    let wlModalBaseBarBdr;
    let wlModalBaseTitleText;
    let wlModalBaseCloseBtn;
    let wlModalHeadBase;
    let wlModalHeaderBcgImg;
    let wlModalHeaderThumbImg;
    let wlModalHeader_DetInfo_TitleText;
    let wlModalHeader_DetInfo_TagsCountText;
    let wlModalHeader_DetInfo_TagsUpdateText;
    let wlModalHeader_DetInfo_DescText;
    let wlModalGridBox;
    let currOpenWLActionMenuIndex = null;
    let wlModalActionMenuBdr;
    let wlModalSortTypeText;
    let wlModalSortOrderText;
    let wlModalGrid_CardBdr;
    let closeWLModalTimer;
    let wlModalDfltInv = [];
    let wlModalIndexedInv;
    let wlModalSortTypeTabs;
    let wlModalSortTypeTabIndex = 0;
    let wlModalSortOrderTabs;
    let wlModalSortOrderTabIndex = 0;
    let wlModalFilterStatusTabs;
    let wlModalFilterStatusTabIndex = 0;
    let wlModalFilterTypeTabs;
    let wlModalFilterTypeTabIndex = 0;
    let addShowToWLArray = [];
    let addShowToWLBase;
    let emptyWLStruct = 
    `
        <div class="emptyUserPageBdr">
            ${emptyUserPageBdr.innerHTML}
        </div>
    `;
    let createWLStruct = 
    `
        <div class="genAtnModalBcg closeCreateWLBtn"></div>
        <div class="genAtnModalBox createWLBox">
            <div class="genAtnModalCtnt">
                <div class="genAtnModalHeader">
                    <div class="genAtnModalHeaderIconBox closeCreateWLBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    <h3 class="genAtnModalHeaderText">
                        <span class="large">C</span>
                        <span class="small">reate Watchlist</span>
                    </h3>
                </div>
                <div class="genAtnModalOptBcg createWLItemBcg">
                    <div class="genAtnModalOptBdr createWLItemBox">
                        <div class="newWLBdr active">
                            <div class="newWLBox">
                                <div class="newWLInputBdr">
                                    <div class="newWLInputBox">
                                        <input type="text" name="newWLInputField" id="newWLInputId" class="newWLInputClass" placeholder="Name your watchlist" />
                                    </div>
                                </div>
                                <div class="newWLWarnBdr">
                                    <div class="newWLWarnBox">
                                        <p id="newWLWarnId" class="newWLWarnText" tabindex="-1"></p>
                                    </div>
                                </div>
                                <div class="newWLAtnBdr">
                                    <div class="newWLAtnBox">
                                        <button type="button" id="createNewWL" class="newWLAtnBtn inactiveBtn" disabled>Create</button>
                                        <button type="button" id="cancelNewWL" class="newWLAtnBtn hollowBtn closeCreateWLBtn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let readFullDescWLStruct = 
    `
        <div class="genAtnModalBcg closeReadFullDescWLBtn"></div>
        <div class="genAtnModalBox readFullDescBox">
            <div class="genAtnModalCtnt">
                <div class="genAtnModalHeader">
                    <div class="genAtnModalHeaderIconBox closeReadFullDescWLBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    <h3 class="genAtnModalHeaderText">
                        <span class="large">D</span>
                        <span class="small">escription</span>
                    </h3>
                </div>
                <div class="genAtnModalOptBcg ">
                    <div class="genAtnModalDescTextBdr">
                        <div class="genAtnModalDescTextBox"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    



//  GENERAL FUNCTIONS

    function startUserPage()
    {
        let wlLibraryScriptTag = document.createElement("script");
        wlLibraryScriptTag.setAttribute(`src` , `/User/Watchlist/library.js`);
        document.body.appendChild(wlLibraryScriptTag);

        wlLibraryScriptTag.addEventListener("load" , () => 
        {
            loadSearchInventory();
            loadGenMenuModalInv();
            attachCreateWLEventListeners();
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


    // Removing the empty bdr
    function removingEmptyBdr()
    {
        emptyUserPageBdr = document.querySelector(".emptyUserPageBdr");
        emptyUserPageBdr.remove();
    }
    

    // Loading the search inventory
    function loadSearchInventory()
    {
        // Check if inventory.js has been initialized
        let invScriptID = document.querySelector("#inventoryID");

        if(!(invScriptID == undefined))
        {
            fetchUserWatchList();
            return;
        }

        // If not, initialize
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`id` , `inventoryID`);
        invScriptTag.setAttribute(`src` , `/inventory.js`);
        document.body.appendChild(invScriptTag);

        invScriptTag.addEventListener("load" , () => 
        {
            fetchUserWatchList();
        });
        invScriptTag.addEventListener("error" , () => 
        {
            errorLoadingUserWatchlist();
        });
    }


    // For error while loading watchlists 
    function errorLoadingUserWatchlist()
    {
        notification(`notifyBad` , `An error occurred while loading your watchlist`);
    }


    // Getting the current date
    function getCurrDate()
    {
        let currentDate = new Date();
        let currYear = currentDate.getFullYear();
        let currMonth = currentDate.getMonth() + 0;
        let monthArr = [`Jan` , `Feb` , `Mar` , `Apr` , `May` , `Jun` , `Jul` , `Aug` , `Sep` , `Oct` , `Nov` , `Dec`];
        let currDay = currentDate.getDate();
        let dateInStr = `${monthArr[currMonth]} ${currDay}, ${currYear}`;
        return dateInStr;
    }






// SORTING FUNCTIONS

    // Sort the WL by Recently Added  (AKA Sort to original order)
    function sortWLByRecAdded(arr)
    {
        return arr.sort((a, b) => a.index - b.index);
    }

    // Sorting the watchlist cards by Name
    function sortWLByName(arr, arrPrpty, order = 'A-Z')
    {
        return arr.sort((a, b) => 
        {
            // Ascending order
            if (order === "A-Z") 
            {
                return a[arrPrpty].localeCompare(b[arrPrpty]);
            }
            // Descending order
            else if (order === "Z-A") 
            {
                return b[arrPrpty].localeCompare(a[arrPrpty]);
            }
        });
    }

    // Sort the WL by Recently Added 
        // NO FUNCTION NEEDED ATM AS IT GENERATES THE DEFUALT LIST

    // Sort the WL by Recently Updated
    function sortWLByRecUpd(arr, arrPrpty, order = 'asc')
    {
        notification(`notifyBad` , `Option unavailable`);
    }

    // Sort the WL by Year
    function sortWLByYear(arr, arrPrpty, order = 'asc')
    {
        return arr.sort((a, b) => 
        {
            const yearA = parseInt(a[arrPrpty], 10);
            const yearB = parseInt(b[arrPrpty], 10);
    
            return order === 'dsc' ? yearB - yearA : yearA - yearB;
        });
    }

    // Sort the WL by Score
    function sortWLByScore(arr, arrPrpty, order = 'asc')
    {
        return arr.sort((a, b) => 
        {
            const scoreA = parseFloat(a[arrPrpty]);
            const scoreB = parseFloat(b[arrPrpty]);
    
            return order === 'dsc' ? scoreB - scoreA : scoreA - scoreB;
        });
    }

    // Reversing the WL array order
    function reverseWLArray(arr)
    {
        arr.reverse();
    }




// FILTERING FUNCTIONS


    // Filtering the wl modal cards based on "Show Status" i.e. watching, planned, etc
    function filterWLModalStatus(filterOptNo)
    {
        if(filterOptNo == 0)
        {
            wlModalGrid_CardBdr.forEach((bdr) => 
            {
                if(bdr.classList.contains("notShowStatusMatch"))
                {
                    bdr.classList.remove("notShowStatusMatch");
                }
            });
        }
        else
        {
            wlModalGrid_CardBdr.forEach((bdr) => 
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
        wlModalGrid_CardBdr.forEach((bdr) => 
        {
            if(bdr.classList.contains("notShowTypeMatch"))
            {
                bdr.classList.remove("notShowTypeMatch");
            }

            if(bdr.querySelector(".wlModalGridCard_Type").textContent.toLowerCase() != filterTypeText.toLowerCase())
            {
                bdr.classList.add("notShowTypeMatch");
            }
        });
    }






// WATCHLIST CARDS 

    // opening the modal for creating a new watchlist
    function attachCreateWLEventListeners()
    {
        let openCreateWLBtn = document.querySelectorAll(".userCreateWLBtn");

        openCreateWLBtn.forEach(btn => 
        {
            if(btn.createWLFunc)
            {
                btn.removeEventListener(`click` , btn.createWLFunc);
            }
        });

        openCreateWLBtn.forEach(btn => 
        {
            const createWLFunc = () =>
            {
                const createListBdr = document.createElement("div");
                createListBdr.classList.add("genAtnModalBdr");
                createListBdr.innerHTML = createWLStruct;
                documentBody.appendChild(createListBdr);
    
                const createListCloseBtn = document.querySelectorAll(".closeCreateWLBtn");
                const createListBox = document.querySelector(".createWLBox");
                const newWLInput = document.querySelector("#newWLInputId");
                const newWLWarn = document.querySelector("#newWLWarnId");
                const createWLBtn = document.querySelector("#createNewWL");
                const newListId = generateRandomString();
                let inputUppBnd = 50;
                let inputLowBnd = 2;
                let plArr = [];
                let lastWLArr;
                let lastWLArrLength = 0;
                let currLength = 0;
                let wordCount = inputUppBnd;
    
                // Disabling btn to prevent multiple calls
                btn.disabled = true;
    
                // Transitioning elements
                createWLTimer = setTimeout(() => 
                {
                    documentBody.classList.add("bodystop");
                    createListBdr.classList.add("active");
                    createListBox.classList.add("active");
                    clearTimeout(createWLTimer);
                }, 100);
                
                // Automatically focus on input feild after transition
                createListBox.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    newWLInput.focus();
                    createListBox.removeEventListener("transitionend" , handleTransitionEnd);
                });
    
                // checking input length
                function getWordCount(input)
                {
                    plArr.push(input);
                    lastWLArr = plArr.at(-1);
                    lastWLArrLength = lastWLArr.length;
    
                    // update warn label
                    currLength = wordCount - lastWLArrLength;
                    newWLWarn.textContent = currLength;
    
                    newWLWarn.classList.toggle("active" , currLength < 16);
                    newWLWarn.classList.toggle("empty" , currLength < 1);
    
                    checkBeforeCreate(lastWLArr);
                }
    
                // Check if name is valid (3 - 64 characters)
                function checkBeforeCreate(val)
                {
                    if(val.length < inputLowBnd || (val.length > inputUppBnd))
                    {
                        createWLBtn.disabled = true;
                        createWLBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                        return;
                    }
                    createWLBtn.disabled = false;
                    createWLBtn.classList.replace("inactiveBtn" , "midSolidBtn");
                }
    
                newWLInput.addEventListener("input" , () => 
                {
                    getWordCount(newWLInput.value);
                });
    
                // Ensures createList doesnt exist before creating a new one
                function generateList(wlName)
                {
                    // Compare the current and max WL library size and return if equal/greater
                    if((newWLCurrSize >= newWLMaxSize))
                    {
                        notification(`notifyBad` , `You have created the max (${newWLMaxSize}) number of watchlists`);
                        return;
                    }

                    // Remove the empty bdr if present
                    if((newWLCurrSize <= 0))
                    {
                        removingEmptyBdr();
                    }

                    // Add new entry into the library & sort array
                    wlLibraryIndexedInv.push(
                        {
                            wl_id: `${newListId}`,
                            wl_name: `${wlName}`,
                            wl_updated: `${getCurrDate()}`,
                            wl_bcg: `/Images/Uvid_green_bcg1_light.jpg`,
                            wl_desc: `No description`,
                            wl_items: [],
                        }
                    );

                    // Insert new list into DOM
                    let newListHTML = 
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
                                                        <img class="userWLCatalog_ItemThumbImg" src="/Images/Uvid_green_bcg1_light.jpg" alt="Thumbnail image for the watchlist: ${wlName}">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="userWLCatalog_ItemDetBase">
                                        <div class="userWLCatalog_ItemDetBdr">
                                            <div class="userWLCatalog_ItemDetBox">
                                                <div class="userWLCatalog_ItemDetMajorBox">
                                                    <div class="userWLCatalog_ItemDetMajorText userWLCatalog_ItemDetTitleText">${wlName}</div>
                                                </div>
                                                <div class="userWLCatalog_ItemDetMinorBox">
                                                    <div class="userWLCatalog_ItemDetMinorIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userWLCatalog_ItemDetMinorSvg">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                    <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemCountText">0 items</p>
                                                </div>
                                                <div class="userWLCatalog_ItemDetMinorBox">
                                                    <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemYearText">Updated on ${getCurrDate()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="userWLCatalog_ItemOpenWLBdr">
                                        <button type="button" class="userWLCatalog_ItemOpenWLBtn"></button>
                                    </div>
                                    <div class="userWLCatalog_ItemBadgeBdr wlDeleteBtn" title="Delete">
                                        <div class="userWLCatalog_ItemBadgeBox">
                                            <div class="userWLCatalog_ItemBadgeIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userWLCatalog_ItemBadgeSvg">
                                                    <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                                    <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    wlCatalogGrid.insertAdjacentHTML(`beforeend` , newListHTML);

                    // Increase the watchlist size
                    newWLCurrSize++;

                    // Notify user of the newly created playlist
                    notification(`notifyGood` , `"${wlName}" was created successfully`);

                    // Update the sorting if 2nd/3rd option was is currently selected
                    if((wlBodySortTabIndex == 1))
                    {
                        // Sort by "A-Z"
                        sortWLByName(wlLibraryIndexedInv, "wl_name", "A-Z");
                        generateWLCards(wlLibraryIndexedInv);
                    }
                    else if((wlBodySortTabIndex == 2))
                    {
                        // Sort by "Z-A"
                        sortWLByName(wlLibraryIndexedInv, "wl_name", "A-Z");
                        generateWLCards(wlLibraryIndexedInv);
                    }
                
                    addOpenWLListeners();
                    addDelWLEventListeners();
                    closeCreateWL();
                }
    
                createWLBtn.addEventListener("click" , () => 
                {
                    generateList(newWLInput.value);
                });
    
                // Create list by pressing the "Enter" key
                newWLInput.addEventListener("keyup" , (e) => 
                {
                    if((e.key === "Enter"))
                    {
                        createWLBtn.click();
                    }
                });
    
    
                // Closes the createList modal
                function closeCreateWL()
                {
                    createWLBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                    newWLWarn.classList.remove("active");
                    newWLWarn.classList.remove("empty");
                    newWLInput.value = "";
                    newWLWarn.textContent = "";
                    newWLInput.disabled = true;
                    createWLBtn.disabled = true;
                    documentBody.classList.remove("bodystop");
                    createListBdr.classList.remove("active");
                    createListBox.classList.remove("active");
    
                    createWLTimer = setTimeout(() => 
                    {
                        documentBody.removeChild(createListBdr);
                        btn.disabled = false;
                        documentBody.classList.remove("bodystop");
                        clearTimeout(createWLTimer);
    
                    }, 300);
                }
    
                // Closes the modal
                createListCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeCreateWL);
                });
            }
            
            btn.addEventListener("click" , createWLFunc);
            btn.createWLFunc = createWLFunc;
        });
    }


    // Attaches Listeners to enable sorting of WL Cards
    function attachArrangeWLCardListeners()
    {
        wlBodySortTabs = document.querySelectorAll(".wlBodySortCtnt .wlBodySortTabs");
        
        // Add selected class to the current button index
        wlBodySortTabs[wlBodySortTabIndex].classList.add("selected");

        // Selecting a sorting option
        wlBodySortTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener("click" , tab.action);
            }
        });
        wlBodySortTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                wlBodySortTabIndex = index;

                // Get option number
                let optNo = tab.getAttribute("data-body-sort-opt");

                // Add selected class to the currently selected tab
                wlBodySortTabs.forEach((selectedTab) => 
                {
                    selectedTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                switch(optNo)
                {
                    // Sort by date Added
                    case "0":
                        sortWLByRecAdded(wlLibraryIndexedInv);
                        generateWLCards(wlLibraryIndexedInv);
                        break;
                        
                    // Sort from A-Z
                    case "1":
                        sortWLByName(wlLibraryIndexedInv, "wl_name", "A-Z");
                        generateWLCards(wlLibraryIndexedInv);
                        break;
                        
                    // Sort from Z-A
                    case "2":
                        sortWLByName(wlLibraryIndexedInv, "wl_name", "Z-A");
                        generateWLCards(wlLibraryIndexedInv);
                        break;
                        
                    default:
                        notification(`notifyBad` , `An error occurred`);
                        break;
                }
            }
            tab.addEventListener("click" , action);
            tab.action = action;
        });
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
                wlBodyCardIndex = i;
                openWLModal();
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }


    // Fetches watchlist info
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

        // Remove the empty bdr
        removingEmptyBdr();
        
        // Map the watchistlist invenory with its item index
        wlLibraryIndexedInv = watchlistInventory.map((watchlist, index) => 
        {
            return { ...watchlist, index };
        });

        // Generate the Watchlist cards
        generateWLCards(wlLibraryIndexedInv);
        
        // Call the function for operating the menu modals
        attachMenuModalEventListeners();

        // Preprocess searchInventory into a Map for the WL Modal
        wlModalMap = new Map(
            searchInventory.map(item => 
            {
                const invShowLinkLC = item.show_link.substring(item.show_link.indexOf('=') + 1).toLowerCase();
                return [invShowLinkLC, item];
            })
        );
    }
    

    // Filling in the content
    function generateWLCards(inv)
    {
        // Clear the Grid
        wlCatalogGrid.innerHTML = "";

        // Reset the current card size
        newWLCurrSize = 0;

        // Struct to contain the cards' HTML
        let wlCatalogItemBaseStruct = ``;

        
        for(let i = 0; i < inv.length; i++)
        {
            let wl = inv[i];

            wlCatalogItemBaseStruct += 
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
                                                <img class="userWLCatalog_ItemThumbImg" src="${wl.wl_bcg}" alt="Thumbnail image for the watchlist: ${wl.wl_name}">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userWLCatalog_ItemDetMinorSvg">
                                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                </svg>
                                            </div>
                                            <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemCountText">${wl.wl_items.length} items</p>
                                        </div>
                                        <div class="userWLCatalog_ItemDetMinorBox">
                                            <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemYearText">Updated on ${wl.wl_updated}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="userWLCatalog_ItemOpenWLBdr">
                                <button type="button" class="userWLCatalog_ItemOpenWLBtn"></button>
                            </div>
                            <!-- <div class="userWLCatalog_ItemBadgeBdr wlDeleteBtn" title="Delete">
                                <div class="userWLCatalog_ItemBadgeBox">
                                    <div class="userWLCatalog_ItemBadgeIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userWLCatalog_ItemBadgeSvg">
                                            <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                            <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            `;

            // Increase the watchlist size
            newWLCurrSize++;
        }

        // Insert items into the DOM
        wlCatalogGrid.insertAdjacentHTML(`beforeend` , wlCatalogItemBaseStruct);

        // Add listeneners
        addOpenWLListeners();
        addDelWLEventListeners();
        
        window.scrollTo(0,0);
    }






// WATCHLIST MODAL


    // Opens the modal containing the info for a single watchlist
    function openWLModal()
    {
        wlModalBaseBarBdr = document.querySelector(".wlModalBaseBarBdr");
        wlModalBaseTitleText = document.querySelector(".wlModalBaseTitleText");
        wlModalBaseCloseBtn = document.querySelector(".wlModalBaseCloseBtn");
        wlModalHeadBase = document.querySelector(".wlModalHeadBase");
        wlModalHeaderBcgImg = document.querySelector(".wlModalHeader_BcgImg");
        wlModalHeaderThumbImg = document.querySelector(".wlModalHeader_thumbImg");
        wlModalHeader_DetInfo_TitleText = document.querySelector(".wlModalHeader_DetInfo_TitleText");
        wlModalHeader_DetInfo_TagsCountText = document.querySelector(".wlModalHeader_DetInfo_TagsCountText");
        wlModalHeader_DetInfo_TagsUpdateText = document.querySelector(".wlModalHeader_DetInfo_TagsUpdateText");
        wlModalHeader_DetInfo_DescText = document.querySelector(".wlModalHeader_DetInfo_DescText");
        wlModalGridBox = document.querySelector(".wlModalGridBox");
        wlModalActionMenuBdr = document.querySelector(".wlModalAction_MenuBdr");
        wlModalSortTypeText = document.querySelector(".wlModalCtnt_sortStatusText .status_type");
        wlModalSortOrderText = document.querySelector(".wlModalCtnt_sortStatusText .status_order");
        closeWLModalTimer;

        // Setting the titlebar's width
        let wlModalBoxScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Getting scrollbar width
        wlModalBox.addEventListener("scroll" , toggleModalBar);

        // For scrollbars that are hidden
        if(wlModalBoxScrollbarWidth == 0)
        {
            // If device is not mobile set to 10px
            if(!(window.matchMedia("(hover: none)").matches)) wlModalBoxScrollbarWidth = 10;
        }
        wlModalBaseBarBdr.setAttribute(`style` , `--wlModalBoxScrollbarWidth: ${wlModalBoxScrollbarWidth}px`);

        // Setting the Background
        updWLModalImg();

        // Setting the title
        updWLModalTitle();

        // Setting the Item count
        updWLModalShowCount();

        // Setting the update date
        updWLModalTimePrpty(wlLibraryIndexedInv[wlBodyCardIndex].wl_updated);

        // Setting the description
        updWLModalDesc();

        // Setting the default sort option
        wlModalSortTypeText.textContent = `Manual`;
        wlModalSortOrderText.textContent = `Asc ↑`;

        // Filling in the grid content
        for(let g = 0; g < wlLibraryIndexedInv[wlBodyCardIndex].wl_items.length; g++)
        {
            let itemId = wlLibraryIndexedInv[wlBodyCardIndex].wl_items[g].wl_itemId;
            let itemIdLC = itemId.substring(itemId.indexOf('=') + 1).toLowerCase();
            let itemMatch = wlModalMap.get(itemIdLC);

            // If match found, add to grid
            if (itemMatch) 
            {
                const {
                    show_watch_status,
                    show_background,
                    show_foreground,
                    show_link,
                    show_title,
                    show_scores,
                    show_type,
                    show_year,
                    show_description,
                } = itemMatch;

                wlModalGrid_CardBdr = document.createElement("li");
                wlModalGrid_CardBdr.classList.add("wlModalGrid_CardBdr");
                wlModalGrid_CardBdr.classList.add("genDraggableElement");
                wlModalGrid_CardBdr.setAttribute(`data-show-index` , g);
                wlModalGrid_CardBdr.setAttribute(`data-show-status-opt` , show_watch_status);
                
                let itemStruct = 
                `
                    <div class="wlModalGrid_CardBox">
                        <div class="wlModalGrid_CardHandleBdr" draggable="true">
                            <div class="wlModalGrid_CardHandleBox">
                                <div class="wlModalGrid_CardHandleIcon genDraggableHandles">
                                    <svg class="wlModalGrid_CardHandleSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="wlModalGrid_CardRankBdr">
                            <div class="wlModalGrid_CardRankBox">
                                <div class="wlModalGrid_CardRankNo">${g + 1}</div>
                            </div>
                        </div>
                        <div onclick="window.open('${show_link}' , '_self')" data-card-link="${show_link}" class="wlModalGrid_CardCtntBdr">
                            <div class="wlModalGrid_CardCtntBox">
                                <div class="wlModalGrid_CardCtntThumbBdr">
                                    <div class="wlModalGrid_CardCtntThumbBox">
                                        <img class="wlModalGrid_CardCtntThumbImg img_large" src="${show_background}" alt="Thumbnail image for ${show_title}">
                                        <img class="wlModalGrid_CardCtntThumbImg img_small" src="${show_foreground}" alt="Thumbnail image for ${show_title}">
                                    </div>
                                </div>
                                <div class="wlModalGrid_CardCtntDetBdr">
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
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagScoreText wlModalGridCard_Score">${show_scores}</div>
                                                </div>
                                                <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagTypeText wlModalGridCard_Type">${show_type}</div>
                                                </div>
                                                <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagReleaseText wlModalGridCard_Year">${show_year}</div>
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
                                        <button type="button" class="wlModalActionBtn openGenMenuModalBtn" data-gen-menu-modal-type="wl_modal_cards">
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
                `;
                wlModalGrid_CardBdr.innerHTML = itemStruct;
                
                // Fill up the array
                wlModalDfltInv.push(itemMatch);
                
                // Append item to the grid
                wlModalGridBox.appendChild(wlModalGrid_CardBdr);
            }
        }

        // Create map with index
        wlModalIndexedInv = wlModalDfltInv.map((show, index) => 
        {
            return { ...show, index };
        });

        // Opening the modal
        wlModalBase.classList.add("active");
        document.body.classList.add("bodystop");
        wlModalGrid_CardBdr = document.querySelectorAll(".wlModalGrid_CardBdr");

        // Closing the modal
        wlModalBaseCloseBtn.addEventListener("click" , () => 
        {
            // Regenerate the wl body cards
            generateWLCards(wlLibraryIndexedInv);

            wlModalBox.scrollTo(null, 0);
            wlModalBase.classList.remove("active");
            document.body.classList.remove("bodystop");

            // Resets the sort & filters
            wlModalSortTypeTabIndex = 0;
            wlModalSortOrderTabIndex = 0;
            wlModalFilterStatusTabIndex = 0;
            wlModalFilterTypeTabIndex = 0;

            // Removes the content in the modal
            wlModalBase.addEventListener("transitionend" , function handleTransitionEnd()
            {
                wlModalBase.removeEventListener("transitionend" , handleTransitionEnd);
                wlModalHeaderBcgImg.setAttribute(`src` , ``);
                wlModalHeaderThumbImg.setAttribute(`src` , ``);
                wlModalHeader_DetInfo_TitleText.textContent = `N/A`;
                wlModalHeader_DetInfo_TagsCountText.textContent = `N/A`;
                wlModalHeader_DetInfo_TagsUpdateText.textContent = `N/A`;
                wlModalHeader_DetInfo_DescText.textContent = `N/A`;
                wlModalSortTypeText.textContent = `N/A`;
                wlModalSortOrderText.textContent = `N/A`;
                wlModalGrid_CardBdr.forEach((card) => 
                {
                    card.remove();
                });
            });
        });

        // Attaches listeners
        attachWLModalListeners();
    }

    // Attaching listeners
    function attachWLModalListeners()
    {
        attachReadFullDescWLModalEventListeners();
        attachAddToWLEventListeners();
        addDelWLEventListeners();
        attachMenuModalEventListeners();
        addDragAndSortListEventListeners();
        attachAddShowsToWLListeners();
    }


    // Generates the WL cards
    function generateWLModalCards(arr, order = 'asc')
    {
        // CLear the pevious wlModalGridBox
        wlModalGridBox.innerHTML = "";

        // Fill in the wlModalGridBox with the provided array
        for(let i = 0; i < arr.length; i++)
        {
            let rank = order == 'dsc' ? (arr.length - i) : (i + 1);
            let item = arr[i]; 
            let itemStruct = 
            `
                <li class="wlModalGrid_CardBdr genDraggableElement" data-show-index="${i}" data-show-status-opt="${item.show_watch_status}">
                    <div class="wlModalGrid_CardBox">
                        <div class="wlModalGrid_CardHandleBdr" draggable="true">
                            <div class="wlModalGrid_CardHandleBox">
                                <div class="wlModalGrid_CardHandleIcon genDraggableHandles">
                                    <svg class="wlModalGrid_CardHandleSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="wlModalGrid_CardRankBdr">
                            <div class="wlModalGrid_CardRankBox">
                                <div class="wlModalGrid_CardRankNo">${rank}</div>
                            </div>
                        </div>
                        <div onclick="window.open('${item.show_link}' , '_self')" data-card-link="${item.show_link}" class="wlModalGrid_CardCtntBdr">
                            <div class="wlModalGrid_CardCtntBox">
                                <div class="wlModalGrid_CardCtntThumbBdr">
                                    <div class="wlModalGrid_CardCtntThumbBox">
                                        <img class="wlModalGrid_CardCtntThumbImg img_large" src="${item.show_background}" alt="Thumbnail image for ${item.show_title}">
                                        <img class="wlModalGrid_CardCtntThumbImg img_small" src="${item.show_foreground}" alt="Thumbnail image for ${item.show_title}">
                                    </div>
                                </div>
                                <div class="wlModalGrid_CardCtntDetBdr">
                                    <div class="wlModalGrid_CardCtntDetBox">
                                        <div class="wlModalGrid_CardCtnt_DetTitleBox">
                                            <div class="wlModalGrid_CardCtnt_DetTitleText">${item.show_title}</div>
                                        </div>
                                        <div class="wlModalGrid_CardCtnt_DetTagBdr">
                                            <div class="wlModalGrid_CardCtnt_DetTagBox">
                                                <div class="wlModalGrid_CardCtnt_DetTagSectBox wlModalGrid_CardCtnt_DetTagScoreBox">
                                                    <div class="wlModalGrid_CardCtnt_DetTagScoreIcon">
                                                        <svg class="wlModalGrid_CardCtnt_DetTagScoreSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagScoreText wlModalGridCard_Score">${item.show_scores}</div>
                                                </div>
                                                <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagTypeText wlModalGridCard_Type">${item.show_type}</div>
                                                </div>
                                                <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagReleaseText wlModalGridCard_Year">${item.show_year}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wlModalGrid_CardCtnt_DetDescBox">
                                            <p class="wlModalGrid_CardCtnt_DetDescText">${item.show_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wlModalActionFence wlModalAction_GridCardFence">
                            <div class="wlModalActionBase">
                                <div class="wlModalActionBdr">
                                    <div class="wlModalActionBox">
                                        <button type="button" class="wlModalActionBtn openGenMenuModalBtn" data-gen-menu-modal-type="wl_modal_cards">
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
                </li>
            `;
            wlModalGridBox.insertAdjacentHTML(`beforeend` , itemStruct);
        }

        // Re-attach selector(s)
        wlModalGrid_CardBdr = document.querySelectorAll(".wlModalGrid_CardBdr");

        // Re-attach event listeners here
        attachWLModalListeners();
    }


    // Update the wl Modal bcg/thumbnail
    function updWLModalImg(ctnt = wlLibraryIndexedInv[wlBodyCardIndex].wl_bcg)
    {
        // Updating the array
        wlLibraryIndexedInv[wlBodyCardIndex].wl_bcg = ctnt;

        // Setting the Background
        wlModalHeaderBcgImg.setAttribute(`src` , `${ctnt}`);

        // Setting the Thumbnail
        wlModalHeaderThumbImg.setAttribute(`src` , `${ctnt}`);
    }

    // Update the watchlist title
    function updWLModalTitle(ctnt = wlLibraryIndexedInv[wlBodyCardIndex].wl_name)
    {
        // Updating the array
        wlLibraryIndexedInv[wlBodyCardIndex].wl_name = ctnt;

        // Setting the title Bar Title
        wlModalBaseTitleText.textContent = `${ctnt}`;

        // Setting the Header title
        wlModalHeader_DetInfo_TitleText.textContent = `${ctnt}`;
    }

    // Update the watchlist description
    function updWLModalDesc(ctnt = wlLibraryIndexedInv[wlBodyCardIndex].wl_desc)
    {
        // Updating the array 
        wlLibraryIndexedInv[wlBodyCardIndex].wl_desc = ctnt;

        // Updating the description text
        wlModalHeader_DetInfo_DescText.textContent = `${ctnt}`;
    }

    // Update the watchlist total show count
    function updWLModalShowCount()
    {
        // Updating the count text
        wlModalHeader_DetInfo_TagsCountText.textContent = `${wlLibraryIndexedInv[wlBodyCardIndex].wl_items.length} items`;
    }

    // Update "last updated" property
    function updWLModalTimePrpty(ctnt = getCurrDate())
    {
        // Update array
        wlLibraryIndexedInv[wlBodyCardIndex].wl_updated = `${ctnt}`;

        // Update text
        wlModalHeader_DetInfo_TagsUpdateText.textContent = `${wlLibraryIndexedInv[wlBodyCardIndex].wl_updated}`;
    }


    // Adds the 'sticky' class to the wl modal title bar to display the wl name
    // and provide options for actions to be performed on the watchlist
    function toggleModalBar(event)
    {
        if(wlModalBox.scrollTop > wlModalHeadBase.getBoundingClientRect().height)
        {
            wlModalBaseBarBdr.classList.add("sticky");
        }
        else
        {
            wlModalBaseBarBdr.classList.remove("sticky");
        }
    }


    // Attaches listener to let users view the full description of their watchlist
    function attachReadFullDescWLModalEventListeners()
    {
        let openReadFullDesc = document.querySelectorAll(".openReadFullDescBtn");

        openReadFullDesc.forEach(btn => 
        {
            if(btn.action)
            {
                btn.removeEventListener(`click` , btn.action);
            }
        });

        openReadFullDesc.forEach(btn => 
        {
            const action = () =>
            {
                const readFullDescBdr = document.createElement("div");
                readFullDescBdr.classList.add("genAtnModalBdr");
                readFullDescBdr.innerHTML = readFullDescWLStruct;
                documentBody.appendChild(readFullDescBdr);
    
                const readFullDescCloseBtn = document.querySelectorAll(".closeReadFullDescWLBtn");
                const readFullDescBox = document.querySelector(".readFullDescBox");
                const readFullDescCtntBox = document.querySelector(".genAtnModalDescTextBox");
    
                // Disabling btn to prevent multiple calls
                btn.disabled = true;

                // Filling in the content
                readFullDescCtntBox.textContent = `${document.querySelector(".wlModalHeader_DetInfo_DescText").textContent}`;
    
                // Transitioning elements
                createWLTimer = setTimeout(() => 
                {
                    readFullDescBdr.classList.add("active");
                    readFullDescBox.classList.add("active");
                    clearTimeout(createWLTimer);
                }, 100);
    
                // Closes the readFullDesc modal
                function closeReadFullDescWL()
                {
                    readFullDescBdr.classList.remove("active");
                    readFullDescBox.classList.remove("active");
    
                    createWLTimer = setTimeout(() => 
                    {
                        documentBody.removeChild(readFullDescBdr);
                        openReadFullDesc.forEach(btn => 
                        {
                            btn.addEventListener("click" , () => 
                            {
                                btn.disabled = false;
                            });
                        });
                        clearTimeout(createWLTimer);
    
                    }, 300);
                }
    
                // Closes the modal
                readFullDescCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeReadFullDescWL);
                });
            }
            
            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }


    // Adding Event listeners for deleting watchlist items
    function addDelWLEventListeners()
    {
        let wlDeleteBtn = document.querySelectorAll(".wlDeleteBtn");

        wlDeleteBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        wlDeleteBtn.forEach((btn, i) => 
        {
            const action = () => 
            {
                initConfirmModal(
                    `Are you sure you want to delete this watchlist?`,
                    `Note: This action cannot be undone`,
                    `Yes`,
                    `No`,
                    deleteWatchlist
                );
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }

    // Deleting your watchlists
    function deleteWatchlist()
    {
        // Close the modal
        wlModalBaseCloseBtn.click();

        // Delete from the watchlist inv
        wlLibraryIndexedInv = wlLibraryIndexedInv.filter((item) => item.wl_id != wlLibraryIndexedInv[wlBodyCardIndex].wl_id);

        // Remove item from catalog
        let delItem = document.getElementsByClassName("userWLCatalog_ItemBase")[wlBodyCardIndex];
        delItem.remove();

        // Decrease the current watchlist size
        newWLCurrSize--;

        // Notify users that the watchlist has been deleted
        notification(`notifyGood` , `Watchlist successfully deleted`);

        if((watchlistInventory.length <= 0))
        {
            insertEmptyBdr();
            return;
        }

        // Reattach listeners
        addOpenWLListeners();
        addDelWLEventListeners();
    }


    // Attaches Listeners to enable Sorting shows in the WL Modal
    function attachSortWLModalListeners()
    {
        // Variable Definitions
        wlModalSortTypeTabs = document.querySelectorAll(".wlModalSortCtnt .wlModalSortTypeTabs");
        wlModalSortOrderTabs = document.querySelectorAll(".wlModalSortCtnt .wlModalSortOrderTabs");

        wlModalSortTypeTabs[wlModalSortTypeTabIndex].classList.add("selected");
        wlModalSortOrderTabs[wlModalSortOrderTabIndex].classList.add("selected");

        wlModalSortTypeText.innerHTML = wlModalSortTypeTabs[wlModalSortTypeTabIndex].innerHTML;
        wlModalSortOrderText.innerHTML = wlModalSortOrderTabs[wlModalSortOrderTabIndex].innerHTML;

        // Selecting a sorting option for "Show Status"
        wlModalSortTypeTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        wlModalSortTypeTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                wlModalSortTypeTabIndex = index;

                // Update the card "handle" visibility
                if(index == 0)
                {
                    wlModalGridBox.setAttribute(`data-sort-handle-visibility` , `true`);
                }
                else
                {
                    wlModalGridBox.setAttribute(`data-sort-handle-visibility` , `false`);
                }

                // Get option number
                let optNo = Number(tab.getAttribute("data-sort-type-opt"));

                // Add selected class to the currently selected tab
                wlModalSortTypeTabs.forEach((activeTab) => 
                {
                    activeTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                sortWLModalCards(optNo);

                // Update the sort type & order texts
                wlModalSortTypeText.textContent = tab.querySelector(".genMenuModalCtntBtnText").textContent;
                wlModalSortOrderText.textContent = `Asc ↑`;
                wlModalSortOrderTabIndex = 0;

            }
            tab.addEventListener("click" , action);
            tab.action = action;
        });

        // Selecting a sorting option for "Show Type"
        wlModalSortOrderTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        wlModalSortOrderTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index

                // Add "selected" class to the tab without it
                wlModalSortOrderTabs.forEach((selectedTab) => 
                {
                    if(selectedTab.classList.contains("selected"))
                    {
                        selectedTab.classList.remove("selected");
                    }
                    else
                    {
                        selectedTab.classList.add("selected");
                    }
                });

                // Reverse the list
                reverseWLArray(wlModalIndexedInv);

                // Print the reversed list
                if(wlModalSortOrderTabIndex == 0)
                {
                    wlModalSortOrderTabIndex = 1;
                    generateWLModalCards(wlModalIndexedInv, 'dsc');
                }
                else if(wlModalSortOrderTabIndex == 1)
                {
                    wlModalSortOrderTabIndex = 0;
                    generateWLModalCards(wlModalIndexedInv);
                }

                // Update the sort type text
                wlModalSortOrderText.textContent = wlModalSortOrderTabs[wlModalSortOrderTabIndex].querySelector(".genMenuModalCtntBtnText").textContent;

            }
            tab.addEventListener("click" , action);
            tab.action = action;
        });
    }

    // Sorts the WL Modal Cards in the provided order
    function sortWLModalCards(optNo)
    {
        switch(optNo)
        {
            // Manual
            case 0:
                generateWLModalCards(wlModalIndexedInv);
                wlModalGridBox.setAttribute(`data-sort-handle-visibility` , `true`);
                break;

            // Recently Added
            case 1:
                generateWLModalCards(wlModalIndexedInv);
                break;
                
            // Recently Updated
            case 2:
                sortWLByRecUpd(wlModalIndexedInv, null, 'asc');
                break;
                
            // Alphabetical
            case 3:
                sortWLByName(wlModalIndexedInv, 'show_title', 'A-Z');
                generateWLModalCards(wlModalIndexedInv);
                break;
                
            // Release
            case 4:
                sortWLByYear(wlModalIndexedInv, 'show_year', 'asc');
                generateWLModalCards(wlModalIndexedInv);
                break;
                
            // Score
            case 5:
                sortWLByScore(wlModalIndexedInv, 'show_scores', 'asc');
                generateWLModalCards(wlModalIndexedInv);
                break;
                
            // If none, display error
            default:
                notification(`notifyBad` , `An error occurred while sorting`);
                break;
        }
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
                        wlModalGrid_CardBdr.forEach((bdr) => 
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
                
            // Completed
            case 4:
                filterWLModalStatus(4);
                break;
                
            // Dropped
            case 5:
                filterWLModalStatus(5);
                break;
                
            // Notify of error 
            default:
                notification(`notifyBad` , `An error occured while filtering`);
                break;
        }
    }


    // Attaches listeners for the WL Modal cards
    function attachWLModalCardListeners(event)
    {
        // Get the clicked button
        let wlModalGridCardMenuBtn = event.target.closest("[data-gen-menu-modal-type='wl_modal_cards']");
        
        if (!wlModalGridCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='wl_modal_cards'] not found.");
            return;
        }
    
        // Find the parent 
        let wlModalGridCardBdr = wlModalGridCardMenuBtn.closest(".wlModalGrid_CardBdr");
        if (!wlModalGridCardBdr)
        {
            console.error("Parent element not found.");
            return;
        }
    
        // Get all parents elements to obtain the current index
        let allGridCards = Array.from(document.querySelectorAll(".wlModalGrid_CardBdr"));
        let wlModalGridCardIndex = allGridCards.indexOf(wlModalGridCardBdr);
    
        if (wlModalGridCardIndex === -1)
        {
            console.error("Failed to find the index of the clicked card.");
            return;
        }
    
        // Add selectors
        let wlModalGridCardLink = wlModalGridCardBdr.querySelector(".wlModalGrid_CardCtntBdr")?.getAttribute("data-card-link");
        let wlModalGridCardTitle = wlModalGridCardBdr.querySelector(".wlModalGrid_CardCtnt_DetTitleText")?.textContent;
        let wlModalGridCardImage = wlModalGridCardBdr.querySelector(".wlModalGrid_CardCtntThumbImg.img_large")?.getAttribute("src");
        let watchShowBtn = document.querySelector(".wlModalCardWatchNowBtn");
        let editShowStatusBtn = document.querySelector(".wlModalEditWatchStatusBtn");
        let setWLThumbBtn = document.querySelector(".setWLThumbnailBtn");
        let removeShowBtn = document.querySelector(".wlModalGridCardRemoveBtn");


        // Watch Now
        watchShowBtn.onclick = () => window.open(`${wlModalGridCardLink}` , `_self`);

        // Edit show status (unavailable)
        editShowStatusBtn.onclick = () => notification(`notifyBad` , `Option unavailable`);

        // Add to watchlist 
        attachAddToWLEventListeners();

        // Set as watchlist thumbnail
        setWLThumbBtn.onclick = () => 
        {
            // Update the watchlist inventory
            wlLibraryIndexedInv[wlBodyCardIndex].wl_bcg = wlModalGridCardImage;

            // Update the WL Header Bcg img
            updWLModalImg(wlModalGridCardImage);
            
            // Set "Last updated"
            updWLModalTimePrpty();
        }

        // Sharing the Show
        attachSharePageEventListeners(wlModalGridCardLink , wlModalGridCardTitle);

        // Confirm before removing the show
        removeShowBtn.onclick = () => 
        {
            initConfirmModal(
                "Are you sure you want to remove this show?",
                null,
                "Remove",
                "Cancel",
                removeWlModalGridCard
            );
        }

        // Removes the selected wl modal card from the watchlist
        const removeWlModalGridCard = () => 
        {
            // Remove element from watchlist inventory
            if(wlLibraryIndexedInv[wlBodyCardIndex].wl_items)
            {
                wlLibraryIndexedInv[wlBodyCardIndex].wl_items = wlLibraryIndexedInv[wlBodyCardIndex].wl_items.filter(subItem => subItem.wl_itemId !== wlModalGridCardLink);
            }
    
            // Remove from the wl modal arrays
            wlModalIndexedInv = wlModalIndexedInv.filter((item) => item.show_link !== wlModalGridCardLink);

            // Remove the wl card
            wlModalGridCardBdr.remove();

            // Update Show count
            updWLModalShowCount();
            
            // Set "Last updated"
            updWLModalTimePrpty();

            // Reattach listeners
            attachMenuModalEventListeners();
        }
    
    }


    // Add Shows to your watchlist
    function attachAddShowsToWLListeners()
    {
        let addShowToWLBtn = document.querySelectorAll(".addShowsToWL");

        addShowToWLBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        addShowToWLBtn.forEach((btn) => 
        {

            btn.addEventListener("click" , initAddShowToWLModal);
            btn.action = initAddShowToWLModal;
        });
    }

    function initAddShowToWLModal()
    {
        let addShowToWLStruct = 
        `
            <div class="quickSearchBase addShowToWLBase">
                <div class="quickSearchBcg"></div>
                <div class="quickSearchBdr">
                    <div class="quickSearchBox">
                        <div class="quickSearchNoteBdr">
                            <div class="quickSearchNoteBox">
                                <p class="quickSearchNoteText">Click on a show to add</p>
                            </div>
                        </div>
                        <div class="quickSearchInputBdr">
                            <div class="quickSearchInputBox">
                                <div class="quickSearchInputIcon quickSearchInputLeftIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickSearchInputSvg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                    </svg>
                                </div>
                                <input type="text" name="quickSearchInputFieldName" id="addShowToWLInputField" class="quickSearchInputFieldClass" placeholder="Search..">
                                <label for="addShowToWLInputField" class="quickSearchInputIcon quickSearchInputRightIcon quickSearchClearInput">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="quickSearchInputSvg">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div class="quickSearchResultBdr">
                            <div class="quickSearchResultBox catalogBox"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        let timer;

        documentBody.insertAdjacentHTML(`beforeend` , addShowToWLStruct);
        timer = setTimeout(() => 
        {
            clearTimeout(timer);
            initAddShowToWL();
        }, 10);
    }


    // Initializes the modal for users to search up shows to add to their watchlist
    function initAddShowToWL()
    {

        // Definitions
        addShowToWLBase = document.querySelector(".addShowToWLBase");
        let addShowToWLBcg = addShowToWLBase.querySelector(".quickSearchBcg");
        let addShowToWLInputField = addShowToWLBase.querySelector("#addShowToWLInputField");
        let addShowToWLClearInput = addShowToWLBase.querySelector(".quickSearchClearInput");
        let addShowToWLResultBox = addShowToWLBase.querySelector(".quickSearchResultBox");
        let addShowToWLQuery;

        // Display modal
        addShowToWLBase.classList.add("active");
        addShowToWLBase.addEventListener("transitionend" , function handleTransitionEnd()
        {
            documentBody.setAttribute(`data-modal-state` , `open`);
            addShowToWLInputField.focus();
            addShowToWLBase.removeEventListener("transitionend" , handleTransitionEnd);
        });


        // Function to display search results
        const displayAddShowToWLResult = (items) => 
        {
            // empty the array
            addShowToWLArray.length = 0;

            // Only seven results are displayed
            const resultRange = items.slice(0, 7);

            addShowToWLResultBox.innerHTML = resultRange.map((item) => 
            {
                const { show_link, show_thumbnail, show_title, show_scores, show_type, show_year, show_airing_status } = item;
                if((addShowToWLQuery.length > 0) && (addShowToWLQuery != undefined) && (addShowToWLQuery != null) && (addShowToWLQuery != " "))
                {
                    // Add found items into the array
                    addShowToWLArray.push(item);
                    return `
                        <div class="quickSearchResultCardBdr addItemToWLBtn" data-link="${show_link}">
                            <div class="quickSearchResultCardBox">
                                <div class="quickSearchResultCardThumbBdr">
                                    <div class="quickSearchResultCardThumbBox">
                                        <img src="${show_thumbnail}" alt="Thumbnail image of ${show_title}" class="quickSearchResultCardThumbImg">
                                    </div>
                                </div>
                                <div class="quickSearchResultDetBdr">
                                    <div class="quickSearchResultDetBox">
                                        <div class="cardInfoBox">
                                            <div class="quickSearchResultDetTitleBox">
                                                <h3 class="quickSearchResultDetTitleText">${show_title}</h3>
                                            </div>
                                            <div class="quickSearchResultDetTagBdr">
                                                <div class="quickSearchResultDetTagBox">
                                                    <div class="quickSearchResultDetTagSectBox quickSearchResultDetTagScoreBox">
                                                        <div class="quickSearchResultDetTagScoreIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickSearchResultDetTagScoreSvg">
                                                                <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                            </svg>
                                                        </div>
                                                        <p class="quickSearchResultDetTagSectText">${show_scores}</p>
                                                    </div>
                                                    <div class="quickSearchResultDetTagSectBox">
                                                        <p class="quickSearchResultDetTagSectText">•</p>
                                                    </div>
                                                    <div class="quickSearchResultDetTagSectBox">
                                                        <p class="quickSearchResultDetTagSectText">${show_type}</p>
                                                    </div>
                                                    <div class="quickSearchResultDetTagSectBox">
                                                        <p class="quickSearchResultDetTagSectText">•</p>
                                                    </div>
                                                    <div class="quickSearchResultDetTagSectBox">
                                                        <p class="quickSearchResultDetTagSectText">${show_year}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quickSearchResultDetDescBox">
                                                <h3 class="quickSearchResultDetDescText">${show_airing_status}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
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
            addItemToWL();
        };

        // Filter and display result based on user's entry
        function filterAddShowToWLInput()
        {
            addShowToWLQuery = addShowToWLInputField.value.trim().toLowerCase();
            encodedSearchQuery = encodeURIComponent(addShowToWLQuery);

            // Filter Items
            const filteredData = searchInventory.filter((item) => item.show_searchKey.toLowerCase().includes(addShowToWLQuery));
            displayAddShowToWLResult(filteredData);
            
            // Toggle the clear input & catalog Icons
            if(addShowToWLInputField.value.length > 0)
            {
                addShowToWLClearInput.classList.add("isTyping");
                return;
            }
            addShowToWLClearInput.classList.remove("isTyping");
        }
        
        // Get user entry
        addShowToWLInputField.addEventListener("keyup", e => 
        {
            filterAddShowToWLInput(e);
        });

        // Clears the search field
        addShowToWLClearInput.addEventListener("click" , () => 
        {
            addShowToWLInputField.value = "";
            addShowToWLQuery = "";
            addShowToWLClearInput.classList.remove("active");
            filterAddShowToWLInput();
        });

        // Close Quick Search
        addShowToWLBcg.addEventListener("click" , closeAddShowToWL);
    }

    // Closes the watchist
    function closeAddShowToWL()
    {
        addShowToWLBase.classList.remove("active");
        documentBody.removeAttribute(`data-modal-state`);
        addShowToWLBase.addEventListener("transitionend" , function handleTransitionEnd()
        {
            addShowToWLBase.removeEventListener("transitionend" , handleTransitionEnd);
            addShowToWLBase.remove();
        });
    }

    // Performs the addition of the selected show to the watchlist
    function addItemToWL()
    {
        const btn = document.querySelectorAll('.addItemToWLBtn');

        btn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        btn.forEach((btn, index) => 
        {
            const action = () =>
            {

                // check if show exists in watchlist
                let thisItem = wlModalIndexedInv.filter(item => item.show_link === addShowToWLArray[index].show_link)
                if(thisItem.length <= 0)
                {

                    // Add new item into the library array
                    if(wlLibraryIndexedInv[wlBodyCardIndex].wl_items)
                    {
                        wlLibraryIndexedInv[wlBodyCardIndex].wl_items.push(
                            {
                                wl_itemId: `${addShowToWLArray[index].show_link}`,
                            }
                        );
                    }

                    // Adds item to the default & sort array of that specific watchlist
                    wlModalIndexedInv.push(addShowToWLArray[index]);

                    // Append item to the DOM
                    sortWLModalCards(wlModalSortTypeTabIndex);

                    // Update Show Count
                    updWLModalShowCount();
            
                    // Set "Last updated"
                    updWLModalTimePrpty();

                    // Notify user
                    notification(`notifyGood` , `Show added successfully`);

                    // Close the modal
                    closeAddShowToWL();
                }
                else
                {
                    notification(`notifyBad` , `Show already in watchlist`);
                }
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }

    
    


