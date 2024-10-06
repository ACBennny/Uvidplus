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

    function startUserPage()
    {
        let wlLibraryScriptTag = document.createElement("script");
        wlLibraryScriptTag.setAttribute(`src` , `/User/Watchlist/library.js`);
        document.body.appendChild(wlLibraryScriptTag);

        wlLibraryScriptTag.addEventListener("load" , () => 
        {
            fetchUserWatchList();
        });
        wlLibraryScriptTag.onerror = function() 
        {
            errorLoadingUserWatchlist();
        };

        // For error events
        function errorLoadingUserWatchlist()
        {
            notification(`notifyBad` , `An error occurred while loading your watchlist`);
        }

        // For inserting the empty status
        function insertEmptyWLStatus()
        {
            // Clearing the watchlist bdr
            wlCatalogBdr.remove();

            // Inserting empty status
            wlBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyWLStruct);
        }

        function fetchUserWatchList()
        {
            // Check if the library is available
            if(((watchlistInventory == undefined)))
            {
                errorLoadingUserWatchlist();
                return;
            }

            // Check if there is content inside the library
            if((watchlistInventory.length <= 0))
            {
                return;
            }

            // Remove the empty status
            emptyUserPageBdr.remove();

            

            /// Testing 
            let userWLCatalogItemBase = document.querySelectorAll(".userWLCatalog_ItemBase");
            let wlModalBase = document.querySelector(".wlModalBase");
            let wlModalBaseClose = document.querySelector(".wlModalBaseClose");

            userWLCatalogItemBase.forEach((item) => 
            {
                item.addEventListener("click" , () => 
                {
                    wlModalBase.classList.toggle("active");
                    document.body.classList.add("bodystop");
                });
            });

            wlModalBaseClose.addEventListener("click" , () => 
            {
                wlModalBase.classList.remove("active");
                document.body.classList.remove("bodystop");
            });
        }
    }