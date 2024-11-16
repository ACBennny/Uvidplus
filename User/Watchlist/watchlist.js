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
    let wlArray = [];
    let sortWLCardsArray = [];
    let newWLMaxSize = 10;
    let newWLCurrSize = 0;
    let createWLTimer;
    let userWLArrangeBtnBdr;
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
                            <span class="small">reate New Watchlist</span>
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

    
    function startUserPage()
    {
        let wlLibraryScriptTag = document.createElement("script");
        wlLibraryScriptTag.setAttribute(`src` , `/User/Watchlist/library.js`);
        document.body.appendChild(wlLibraryScriptTag);

        wlLibraryScriptTag.addEventListener("load" , () => 
        {
            loadSearchInventory();
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
                let inputUppBnd = 50;
                let inputLowBnd = 2;
                let plArr = [];
                let lastWLArr;
                let lastWLArrLength = 0;
                let currLength = 0;
                let wordCount = inputUppBnd;
    
                // Opening the modal
                openCreateWLBtn.forEach(btn => 
                {
                    btn.addEventListener("click" , () => 
                    {
                        btn.disabled = true;
                    });
                });
    
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
                    watchlistInventory.push(
                        {
                            wl_name: `${wlName}`,
                            wl_updated: `${getCurrDate()}`,
                            wl_bcg: `/Images/Uvid_green_bcg1_light.jpg`,
                            wl_desc: `No description`,
                            wl_items: [],
                        }
                    );
                    sortWLCardsArray.push(
                        {
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
                                    <div class="userWLCatalog_ItemBadgeBdr userWLCatalog_ItemDelWLBtn" title="Delete">
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
                    let currSelOpt = userWLArrangeBtnBdr.querySelector(".userOrderOptTab.active").getAttribute("data-card-sort-opt")
                    // Sort by "A-Z"
                    if((currSelOpt == "1"))
                    {
                        sortWLCardsByName("A-Z");
                        generateWLCards(sortWLCardsArray);
                    }
                    // Sort by "Z-A"
                    else if((currSelOpt == "2"))
                    {
                        sortWLCardsByName("Z-A");
                        generateWLCards(sortWLCardsArray);
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
                        openCreateWLBtn.forEach(btn => 
                        {
                            btn.addEventListener("click" , () => 
                            {
                                btn.disabled = false;
                            });
                        });
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


    // For error events
    function errorLoadingUserWatchlist()
    {
        notification(`notifyBad` , `An error occurred while loading your watchlist`);
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


    // For inserting the empty status
    function insertEmptyWLStatus()
    {
        // Clearing the watchlist bdr
        wlCatalogBdr.remove();

        // Inserting empty status
        wlBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyWLStruct);
    }


    // Getting the current date
    function getCurrDate()
    {
        let currentDate = new Date();
        let currYear = currentDate.getFullYear();
        let currMonth = currentDate.getMonth() + 1;
        let monthArr = [`Jan` , `Feb` , `Mar` , `Apr` , `May` , `Jun` , `Jul` , `Aug` , `Sep` , `Oct` , `Nov` , `Dec`];
        let currDay = currentDate.getDate();
        let dateInStr = `${monthArr[currMonth]} ${currDay}, ${currYear}`;
        return dateInStr;
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

        // Update the sort Wl card array
        watchlistInventory.forEach((val) => 
        {
            sortWLCardsArray.push(val);
        });

        // Generate the Watchlist cards
        generateWLCards(watchlistInventory);
        
        attachArrangeWLCardListeners();
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
                            <div class="userWLCatalog_ItemBadgeBdr userWLCatalog_ItemDelWLBtn" title="Delete">
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


    // Deleting your watchlists
    function delWLCatalogItem(index)
    {
        // Delete item from invetory
        watchlistInventory.splice(index , 1);
        sortWLCardsArray.splice(index , 1);

        // Remove item from catalog
        let delItem = document.getElementsByClassName("userWLCatalog_ItemBase")[index];
        delItem.remove();

        // Decrease the current watchlist size
        newWLCurrSize--;

        if((watchlistInventory.length <= 0))
        {
            insertEmptyBdr();
            return;
        }

        // Reattach listeners
        addOpenWLListeners();
        addDelWLEventListeners();
    }


    // Attaches Listeners to enable sorting
    function attachArrangeWLCardListeners()
    {
        userWLArrangeBtnBdr = document.querySelector(".userWLArrangeBtnBdr");
        let userWLArrangeBtnBox = userWLArrangeBtnBdr.querySelector(".userOrderBtnBox");
        let userWLArrangeOptBdr = userWLArrangeBtnBdr.querySelector(".userOrderOptBdr");
        let userOrderOptTabs = userWLArrangeBtnBdr.querySelectorAll(".userOrderOptTab");

        // Toggle the menu's visibility
        userWLArrangeBtnBox.addEventListener("click" , () => 
        {
            userWLArrangeOptBdr.classList.toggle("active");
        });

        // Selecting a sorting option
        userOrderOptTabs.forEach((tab) => 
        {
            tab.addEventListener("click" , () => 
            {
                let optNo = tab.getAttribute("data-card-sort-opt");

                // Add active class to the currently selected tab
                userOrderOptTabs.forEach((activeTab) => 
                {
                    activeTab.classList.remove("active");
                });
                tab.classList.add("active");

                switch(optNo)
                {
                    // Sort by date Added
                    case "0":
                        generateWLCards(watchlistInventory);
                        break;
                        
                    // Sort from A-Z
                    case "1":
                        sortWLCardsByName("A-Z");
                        generateWLCards(sortWLCardsArray);
                        break;
                        
                    // Sort from Z-A
                    case "2":
                        sortWLCardsByName("Z-A");
                        generateWLCards(sortWLCardsArray);
                        break;
                        
                    default:
                        notification(`notifyBad` , `An error occurred`);
                        break;
                }

                // Hide the menu
                userWLArrangeOptBdr.classList.remove("active");
            });
        });
    }


    // Sorting the watchlist cards by Name
    function sortWLCardsByName(order)
    {
        return sortWLCardsArray.sort((a, b) => 
        {
            // Ascending order
            if (order === "A-Z") 
            {
                return a.wl_name.localeCompare(b.wl_name);
            }
            // Descending order
            else if (order === "Z-A") 
            {
                return b.wl_name.localeCompare(a.wl_name);
            }
        })
    }

    // Opens the modal containing the info for a single watchlist
    function openWLModal(index)
    {
        let wlCurr = sortWLCardsArray[index];
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
                            <a href="${show_link}" class="wlModalGrid_CardCtntBdr">
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
                            </a>
                            <div class="wlModalActionFence wlModalAction_GridCardFence">
                                <div class="wlModalActionBase">
                                    <div class="wlModalActionBdr">
                                        <div class="wlModalActionBox">
                                            <button type="button" class="wlModalActionBtn">
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

