/***************************************************************
 * This will hold the code for General functions of the Download page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// VARIABLE DECLARATIONS

    let dlPg_topNavBdr;
    let dlEmptyMyListPageBdr;
    let dlLibraryIndexedInv;
    let dwldListBodyBox;
    let dlBodyCtntBox;
    let dlCatalogBdr;
    let dlCatalogGrid;
    let dlCtgGridCardBdr;
    let dlBdy_selAllTimer;
    let dlMdlBase;
    let dlMdlBox;
    let dlMdlHdr_TitleText;
    let dlMdlHdr_epNo;
    let dlMdlHdr_epSize;
    let dlMdlCtntGrid;
    let dlMdl_selAllTimer;
    let dLMdlGridCard_detBdr;
    let dlMdlDel_Rfrsh;
    let dlMdlDel_Trstn = 3000;
    let mylist_downloads_struct =
    `
        <div class="myListBodyBox dwldListBodyBox genTick_chkSelState">
            <div class="myListBodyTitleBdr">
                <div class="myListBodyTitleBox">
                    <div class="myListBodyTitleIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListBodyTitleIconSvg">
                            <path d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                            <path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
                        </svg>
                    </div>
                    <span class="myListBodyTitleText">Downloads</span>
                </div>
                <div class="myListNavAtnBdr">
                    <div class="myListNavAtnBox">
                        <label for="dlBodyHdrSelAll_chkFldId" class="dlBodyHdr_ssnSelAllBdr dlBodyHdr_selAllLbl">
                            <div class="dlMdlHdr_ssnSelAllChkBdr genTick_chkBase">
                                <div class="genTick_chkBdr">
                                    <div class="genTick_chkBox">
                                        <label for="dlBodyHdrSelAll_chkFldId" class="genTick_chkFldLbl ">
                                            <input type="checkbox" id="dlBodyHdrSelAll_chkFldId" class="genTick_chkFldCls">
                                            <div class="genTick_chkFldIconBox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genTick_chkFldIconSvg">
                                                    <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="dlMdlHdr_epDetBox">
                                <p class="dlMdlHdr_epDetText">Select All</p>
                            </div>
                        </label>
                        <div class="dlBodyAtnBtnsBox">
                            <button type="button" class="genBtnBox midSolidBtn dlBdyHdr_delBtn hide">
                                <div class="genBtnText">Delete</div>
                            </button>
                            <button type="button" class="genBtnBox greySolidBtn dlBdyHdr_editBtn hide">
                                <div class="genBtnText">Edit</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="myListBodyCtntBdr">
                <div class="myListBodyCtntBox dl_body_ctnt_box">
                    <div class="myListDLCatalogBdr">
                        <div class="myListDLCatalogBox">
                            <div class="myListDLCatalogGrid"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="dlMdlBase">
            <div class="dlMdlBcg dlMdlBaseCloseBtn"></div>
            <div class="dlMdlBdr">
                <div class="dlMdlBox genTick_chkSelState">
                    <div class="dlMdlHdrBdr">
                        <div class="dlMdlHdrBox">
                            <div class="dlMdlHdr_top">
                                <div class="dlMdlHdr_BckBtnBdr">
                                    <button type="button" class="genBtnBox transBtn genIconBtn dlMdlBaseCloseBtn" title="Close Download list">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div class="dlMdlHdr_TitleBox">
                                    <div class="dlMdlHdr_TitleText">N/A</div>
                                </div>
                            </div>
                            <div class="dlMdlHdr_btm">
                                <div class="dlMdlHdr_ssnDetBdr">
                                    <div class="dlMdlHdr_epDetBox">
                                        <p class="dlMdlHdr_epDetText dlMdlHdr_epNo">N/A</p>
                                    </div>
                                    <div class="dlMdlHdr_epDetBox">
                                        <p class="dlMdlHdr_epDetText ">•</p>
                                    </div>
                                    <div class="dlMdlHdr_epDetBox">
                                        <p class="dlMdlHdr_epDetText dlMdlHdr_epSize">N/A</p>
                                    </div>
                                </div>
                                <label class="dlMdlHdr_ssnSelAllBdr dlMdlHdr_ssnSelAllLbl">
                                    <div class="dlMdlHdr_ssnSelAllChkBdr genTick_chkBase">
                                        <div class="genTick_chkBdr">
                                            <div class="genTick_chkBox">
                                                <label for="dlMdlHdr_ssnSelAll_chkFldId" class="genTick_chkFldLbl">
                                                    <input type="checkbox" id="dlMdlHdr_ssnSelAll_chkFldId" class="genTick_chkFldCls">
                                                    <div class="genTick_chkFldIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genTick_chkFldIconSvg">
                                                            <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dlMdlHdr_epDetBox">
                                        <p class="dlMdlHdr_epDetText">Select All</p>
                                    </div>
                                </label>
                                <div class="dlMdlHdr_ssnAtnBdr">
                                    <button type="button" class="genBtnBox midSolidBtn dlMdlHdr_epDelBtn hide">
                                        <div class="genBtnText">Delete</div>
                                    </button>
                                    <button type="button" class="genBtnBox greySolidBtn dlMdlHdr_ssnAtnBtn">
                                        <div class="genBtnText">Edit</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dlMdlCtntBdr">
                        <div class="dlMdlCtntBox">
                            <div class="dlMdlCtntGrid"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let emptyDLStruct = 
    `
        <div class="emptyMyListPageBdr downloads">
            <div class="emptyMyListPageBox">
                <div class="emptyMyListPageCtnt">
                    <div class="emptyMyListPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyMyListPageIconSvg">
                            <path d="M16.07 9.952c1.329 0 2.462 0 3.366.102q.23.025.458.064c.532.09 1.05.235 1.53.488v-.85c0-.91 0-1.663-.085-2.264c-.09-.635-.286-1.197-.756-1.66a3 3 0 0 0-.241-.214c-.512-.408-1.126-.575-1.82-.652c-.67-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.335-.006-1.653-.087a2.7 2.7 0 0 1-.536-.196c-.285-.14-.532-.351-1.228-.968l-.474-.42a7 7 0 0 0-.48-.403a4.3 4.3 0 0 0-2.182-.803A8 8 0 0 0 8.413 2h-.116c-.641 0-1.064 0-1.431.061c-1.605.268-2.903 1.39-3.219 2.875c-.072.337-.071.724-.071 1.283v4.387c.48-.253.998-.399 1.53-.488q.227-.039.458-.064c.904-.102 2.037-.102 3.367-.102z" />
                            <path fill-rule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868c.363 1.885.544 2.827 1.172 3.452q.246.245.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472q.298-.184.544-.429c.628-.625.81-1.567 1.172-3.452c.503-2.618.755-3.927.145-4.868a3 3 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a3 3 0 0 0-.57.646m6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.324.765.723s-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="emptyMyListPageNoteBox">
                        <p class="emptyMyListPageNoteText">You have no saved shows</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    let dlPageNav = 
    `
        <div class="topNavBdr dlPgNav genTick_chkSelState">
            <div class="topNavBox">
                <section class="topNav_section">
                    <label class="dlBodyHdr_ssnSelAllBdr dlBodyHdr_selAllLbl">
                        <div class="dlMdlHdr_ssnSelAllChkBdr genTick_chkBase">
                            <div class="genTick_chkBdr">
                                <div class="genTick_chkBox">
                                    <label for="dlBodyNavSelAll_chkFldId" class="genTick_chkFldLbl dlBodyHdr_selAllLbl">
                                        <input type="checkbox" id="dlBodyNavSelAll_chkFldId" class="genTick_chkFldCls">
                                        <div class="genTick_chkFldIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genTick_chkFldIconSvg">
                                                <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="dlMdlHdr_epDetBox">
                            <p class="dlMdlHdr_epDetText">Select All</p>
                        </div>
                    </label>
                </section>
                <section class="topNav_section">
                    <button type="button" class="genBtnBox midSolidBtn dlBdyHdr_delBtn hide">
                        <div class="genBtnText">Delete</div>
                    </button>
                    <button type="button" class="genBtnBox greySolidBtn dlBdyHdr_editBtn hide">
                        <div class="genBtnText">Edit</div>
                    </button>
                </section>
            </div>
        </div>
    `;




//  GENERAL FUNCTIONS

    function start_mylist_downloads_page()
    {
        document.querySelector(".myListBodyBdr").insertAdjacentHTML(`afterbegin` , mylist_downloads_struct);
        dwldListBodyBox = document.querySelector(".dwldListBodyBox");
        dlBodyCtntBox = document.querySelector(".dl_body_ctnt_box");
        dlCatalogBdr = dlBodyCtntBox.querySelector(".myListDLCatalogBdr");
        dlCatalogGrid = document.querySelector(".myListDLCatalogGrid");
        
        fetchMyDownloads();
    }


    // Inserting the empty bdr when there are no downloads
    function insertEmptyDLBdr()
    {
        dlBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyDLStruct);
    }


    // Removing the empty bdr
    function removingEmptyDLBdr()
    {
        dlEmptyMyListPageBdr = document.querySelector(".emptyMyListPageBdr.downloads");
        if(dlEmptyMyListPageBdr != undefined) dlEmptyMyListPageBdr.remove();
    }


    // For error while loading downloadss 
    function errorLoadingMyListDownloads()
    {
        notification(`notifyBad` , `An error occurred while fetching your downloads`);
    }


    // Updates the url during accessment of the DL Modal
    function updURLforDLModal(url)
    {
        const newDLurl = `#/my-list/downloads/${url}`;

        if(url === "")
        {
            window.history.replaceState(null, '', '#/my-list/downloads/');
        }
        else
        {
            window.history.replaceState(null, '', newDLurl);
        }
    }






// FILTERING FUNCTIONS


    // Filtering the dl modal cards based on "Show Status" i.e. watching, planned, etc
    function filterDLModalStatus(filterOptNo)
    {
        if(filterOptNo == 0)
        {
            dlModalGrid_CardBdr.forEach((bdr) => 
            {
                if(bdr.classList.contains("notShowStatusMatch"))
                {
                    bdr.classList.remove("notShowStatusMatch");
                }
            });
        }
        else
        {
            dlModalGrid_CardBdr.forEach((bdr) => 
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

    // Filtering the dl modal cards based on "Show Type" i.e. movie, tv
    function filterDLModalType(filterTypeText)
    {
        dlModalGrid_CardBdr.forEach((bdr) => 
        {
            if(bdr.classList.contains("notShowTypeMatch"))
            {
                bdr.classList.remove("notShowTypeMatch");
            }

            if(bdr.querySelector(".dlModalGridCard_Type").textContent.toLowerCase() != filterTypeText.toLowerCase())
            {
                bdr.classList.add("notShowTypeMatch");
            }
        });
    }





// DWLD BODY

    // Fetch Downloads
    async function fetchMyDownloads()
    {
        let dwld_lib = await getUsrDwldInv();

        // Return if failed to access library
        if(((dwld_lib === undefined)))
        {
            errorLoadingMyListDownloads();
            return;
        }

        // Return if the library is empty
        if(((dwld_lib.length === 0)))
        {
            insertEmptyDLBdr();
            return;
        }

        // Map the download invenory with its item index
        await initDLIndexedMap();
        
        // Insert top nav items
        topNavBar.innerHTML = dlPageNav;
        dlPg_topNavBdr = document.querySelector(".topNavBdr.dlPgNav");

        // Display the edit button
        document.querySelectorAll(".dlBdyHdr_editBtn").forEach((editBtn) => 
        {
            editBtn.classList.remove("hide");
        });

        // Generate the DL Cards
        insert_dl_body_cards();
    }


    // Initializes the DL Map
    async function initDLIndexedMap()
    {
        let dwld_lib = await getUsrDwldInv();
        
        dlLibraryIndexedInv = dwld_lib.map((dwld, index) => 
        {
            return { ...dwld, index };
        });
    }


    // Generating the cards
    function insert_dl_body_cards()
    {
        let struct =  ``;
        dlCatalogGrid.innerHTML = ``;

        // Filling in the grid content
        for(let g = 0; g < dlLibraryIndexedInv.length; g++)
        {
            let item = dlLibraryIndexedInv[g];
            let itemId = item.dl_id;
            let itemType = item.dl_type;
            let itemSsn = item.dl_type === "tv" ? ` - Season ${item.dl_ssn}` : ``;
            let itemEp = item.dl_type === "tv" ? item.dl_eps.length : 1;
            let itemEpNo = Number(itemEp) == 1 ? `1 episode` : `${itemEp} episodes`;
            let itemSize = 0;
            let itemSizeStr = 0;
            let itemLnk = item.dl_link;
            let itemLnkLC = itemLnk.split('/')[2];
            let itemMatch = infoInvLinkMap.get(itemLnkLC);

            // Calculate show size
            if(itemType === "movie")
            {
                itemSize = Number(item.dl_mov_size);
            }
            else
            {
                item.dl_eps.forEach((ep) => 
                {
                    itemSize += Number(ep.dl_ep_size);
                });
            }

            // Truncate to GB if greater than 900
            itemSizeStr = convMBtoGB(itemSize, 900);
            
            // If match found, add to grid
            if (itemMatch) 
            {
                let {
                    show_title,
                    show_foreground,
                    show_background,
                } = itemMatch;

                
                struct += 
                `
                    <div class="dlCtgGridCardBdr" data-id="${itemId}" data-type="${itemType}" data-link="${itemLnk}">
                        <div class="dlCtgGridCardBox">
                            <label for="dlCtgGridCard_chkFldId_${itemId}" class="dLCtgGridCard_ovrlyLbl"></label>
                            <div class="dlCtgGridCard_sect1 genTick_chkBase">
                                <div class="genTick_chkBdr">
                                    <div class="genTick_chkBox">
                                        <label for="dlCtgGridCard_chkFldId_${itemId}" class="genTick_chkFldLbl dlCtgGridCard_chkFldLbl">
                                            <input type="checkbox" id="dlCtgGridCard_chkFldId_${itemId}" class="genTick_chkFldCls">
                                            <div class="genTick_chkFldIconBox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genTick_chkFldIconSvg">
                                                    <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="dlCtgGridCard_sect2">
                                <button type="button" class="transBtn dlCtgGridCard_sect2Btn" title="View ${show_title} ${itemSsn}"></button>
                                <div class="dlCtgGridCard_sectInfo">
                                    <div class="dlCtgGridCard_ImgBdr">
                                        <div class="dlCtgGridCard_ImgBox">
                                            <img loading="lazy" onload="this.classList.add('loaded')" src="${show_background}" class="dlCtgGridCard_ImgSrc dlCtgGridCard_ImgSrcLrg">
                                            <img loading="lazy" onload="this.classList.add('loaded')" src="${show_foreground}" class="dlCtgGridCard_ImgSrc dlCtgGridCard_ImgSrcSml">
                                        </div>
                                    </div>
                                    <div class="dlCtgGridCard_detBdr">
                                        <div class="dlCtgGridCard_detBox">
                                            <div class="dlCtgGridCard_detTitleBox">
                                                <div class="dlCtgGridCard_detTitleText">${show_title} ${itemSsn}</div>
                                            </div>
                                            <div class="dlCtgGridCard_detPrptyBdr">
                                                <div class="dlCtgGridCard_detPrptyBox">
                                                    <p class="dlCtgGridCard_detPrptyText dlCtgGridCard_detPrptyEpNo">${itemEpNo}</p>
                                                </div>
                                                <div class="dlCtgGridCard_detPrptyBox">
                                                    <p class="dlCtgGridCard_detPrptyText ">•</p>
                                                </div>
                                                <div class="dlCtgGridCard_detPrptyBox">
                                                    <p class="dlCtgGridCard_detPrptyText dlCtgGridCard_detPrptySize">${itemSizeStr}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        // Insert struct into DOM
        dlCatalogGrid.insertAdjacentHTML(`afterbegin` , struct);

        // Attach query selectors
        dlCtgGridCardBdr = document.querySelector(".dlCtgGridCardBdr");

        // Attach listeners
        call_openDLModal();
        attachEditDLBodyCardListeners();
        attachSelAllDLBodyCardListeners();
        attachSelSnglDLBodyCardListeners();
        attachDelDLBodyCardListeners();

        // Open modal after initialization
        postLoadDLModalCall();
    }


    // Function to call the initiate DL Modal function
    function call_openDLModal()
    {
        let btn = document.querySelectorAll(".dlCtgGridCard_sect2Btn");

        btn.forEach((oldBtn) => 
        {
            if(oldBtn.open_atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.open_atn);
            }
        });

        btn.forEach((newBtn) => 
        {
            const call_open_atn = (e) =>
            {
                let parentElem = e.target.closest(".dlCtgGridCardBdr");
                let sectElem = e.target.closest(".dlCtgGridCard_sect2");
                let dl_id = parentElem.getAttribute("data-id");
                let dl_type = parentElem.getAttribute("data-type");
                let dl_link = parentElem.getAttribute("data-link");
                let dl_title = sectElem.querySelector(".dlCtgGridCard_detTitleText").textContent;
                let dl_epNo = sectElem.querySelector(".dlCtgGridCard_detPrptyEpNo").textContent;
                let dl_size = sectElem.querySelector(".dlCtgGridCard_detPrptySize").textContent;

                updURLforDLModal(dl_id);
                openDLModal(dl_id, dl_type, dl_link, dl_title, dl_epNo, dl_size);
            }

            newBtn.addEventListener("click" , call_open_atn);
            newBtn.open_atn = call_open_atn;
        });
    }


    // Opening DL modal via after page initialization
    function postLoadDLModalCall()
    {
        // Get the path from the url
        let dl_specific_path = window.location.hash.split('/')[3];

        // Return if path doesn't exist
        if((dl_specific_path == undefined) || (dl_specific_path == null) || (dl_specific_path === '')) return;

        // If path exits compare it to the id of the collection
        let dl_specific_item = dlLibraryIndexedInv.filter((item) => 
        {
            return dl_specific_path.toLowerCase() === item.dl_id.toLowerCase();
        });

        // Simulate a click on the collection card that matches the path
        if(dl_specific_item.length > 0)
        {
            document.querySelectorAll(`.dlCtgGridCard_sect2Btn`)[dl_specific_item[0].index].click();
        }
        else
        {
            // If no match was found, remove the value from the url
            updURLforDLModal('');
        }
    }


    // Opening Multi-selecting (Editing)
    function attachEditDLBodyCardListeners()
    {
        let dlBdyMdlHdr_ssnAtnBtn = document.querySelectorAll(".dlBdyHdr_editBtn");

        dlBdyMdlHdr_ssnAtnBtn.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click", oldBtn.atn);
            }
        });

        dlBdyMdlHdr_ssnAtnBtn.forEach((newBtn) => 
        {
            const edit_atn = () =>
            {
                if(dwldListBodyBox.getAttribute("data-cards-are-selectable") === "true")
                {
                    dwldListBodyBox.removeAttribute("data-cards-are-selectable");
                    dlPg_topNavBdr.removeAttribute("data-cards-are-selectable");

                    // Update the textcontent of all edit buttons
                    document.querySelectorAll(".dlBdyHdr_editBtn").forEach((editBtn) => 
                    {
                        editBtn.querySelector(".genBtnText").textContent = "Edit";
                    });

                    // Deselect all selected cards and select-all-card btn
                    document.querySelectorAll(".dlBodyHdr_selAllLbl .genTick_chkFldCls").forEach((btn) =>
                    {
                        btn.checked = false;
                    });
                    document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls:checked").forEach((btn) => 
                    {
                        btn.checked = false;
                    });

                    // Hide delete button
                    document.querySelectorAll(".dlBdyHdr_delBtn").forEach((btn) => 
                    {
                        btn.querySelector(".genBtnText").textContent = `Delete`;
                        btn.classList.add("hide");
                    });
                }
                else
                {
                    dwldListBodyBox.setAttribute("data-cards-are-selectable", "true");
                    dlPg_topNavBdr.setAttribute("data-cards-are-selectable", "true");

                    // Update the textcontent of all edit buttons
                    document.querySelectorAll(".dlBdyHdr_editBtn").forEach((editBtn) => 
                    {
                        editBtn.querySelector(".genBtnText").textContent = "Cancel";
                    });
                }
            }

            newBtn.addEventListener("click", edit_atn);
            newBtn.atn = edit_atn;
        });
    }


    // Selecting all episodes
    function attachSelAllDLBodyCardListeners()
    {
        let dlBdyCardChkBoxLbl = document.querySelectorAll(".dlBodyHdr_selAllLbl");

        dlBdyCardChkBoxLbl.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.atn);
            }
        });

        dlBdyCardChkBoxLbl.forEach((newBtn) => 
        {
            const clck_atn = () => 
            {

                dlBdy_selAllTimer = setTimeout(() => 
                {
                    let chkBox = newBtn.querySelector(".genTick_chkFldCls");
                    clearTimeout(dlBdy_selAllTimer);

                    if(chkBox.checked == true)
                    {
                        // Select all ep cards
                        document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls").forEach((btn) => 
                        {
                            if(btn.checked != true) btn.checked = true;
                        });

                        // Select all "select-all-card" buttons
                        document.querySelectorAll(".dlBodyHdr_selAllLbl .genTick_chkFldCls").forEach((chkbox) => 
                        {
                            chkbox.checked = true;
                        });
    
                        // Display delete button
                        toggleDelDLBodyCardBtn();
                    }
                    else
                    {
                        // Deselect all ep cards
                        document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls").forEach((btn) => 
                        {
                            btn.checked = false;
                        });

                        // Select all "select-all-card" buttons
                        document.querySelectorAll(".dlBodyHdr_selAllLbl .genTick_chkFldCls").forEach((chkbox) => 
                        {
                            chkbox.checked = false;
                        });
    
                        // Hide delete button
                        toggleDelDLBodyCardBtn();
                    }
                },100);
            }

            newBtn.addEventListener("click" , clck_atn);
            newBtn.atn = clck_atn;
        });
    }


    // Selecting single episode(s)
    function attachSelSnglDLBodyCardListeners()
    {
        let dlBdyCardChkBoxLbl = document.querySelectorAll(".dlCtgGridCard_chkFldLbl");

        dlBdyCardChkBoxLbl.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.atn);
            }
        });

        dlBdyCardChkBoxLbl.forEach((newBtn) => 
        {
            const clck_atn = () => 
            {
                toggleSelAllDLBodyCard();
                toggleDelDLBodyCardBtn();
            }

            newBtn.addEventListener("click" , clck_atn);
            newBtn.atn = clck_atn;
        });
    }


    // Selecting/Deselecting the "select-all-cards" button
    function toggleSelAllDLBodyCard()
    {
        let allChkBoxes = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls");
        let chkdEps = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls:checked");
        if(allChkBoxes.length == chkdEps.length)
        {
            document.querySelectorAll(".dlBodyHdr_selAllLbl .genTick_chkFldCls").forEach((editBtn) => 
            {
                editBtn.checked = true;
            });
        }
        else
        {
            document.querySelectorAll(".dlBodyHdr_selAllLbl .genTick_chkFldCls").forEach((editBtn) => 
            {
                editBtn.checked = false;
            });
        }
    }


    // Toggling the delete episode button visibility
    function toggleDelDLBodyCardBtn()
    {
        let checkedDLMdlEpCards = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls:checked");

        if(checkedDLMdlEpCards.length > 0)
        {
            document.querySelectorAll(".dlBdyHdr_delBtn").forEach((btn) => 
            {
                btn.querySelector(".genBtnText").textContent = `Delete (${checkedDLMdlEpCards.length})`;
                btn.classList.remove("hide");
            });
        }
        else
        {
            document.querySelectorAll(".dlBdyHdr_delBtn").forEach((btn) => 
            {
                btn.querySelector(".genBtnText").textContent = `Delete`;
                btn.classList.add("hide");
            });
        }
    }


    // Deleting episodes
    function attachDelDLBodyCardListeners()
    {
        let delDLBodyEpBtn = document.querySelectorAll(".dlBdyHdr_delBtn");

        delDLBodyEpBtn.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.atn);
            }
        });

        delDLBodyEpBtn.forEach((newBtn) => 
        {
            const dlt_atn = async () => 
            {
                let dwld_lib = await getUsrDwldInv();

                // Identify the card(s) to be removed
                let allChkBoxes = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls");
                let chkdEps = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls:checked");

                if(allChkBoxes.length == chkdEps.length)
                {
                    // Delete all elements if all are selected
                    dwld_lib.length = 0;

                    // Clear all cards
                    dlCatalogGrid.innerHTML = "";
                    
                    // Close the delete operation
                    document.querySelectorAll(".dlBdyHdr_editBtn")[0].click();

                    // Hide the edit button
                    document.querySelectorAll(".dlBdyHdr_editBtn").forEach((editBtn) => 
                    {
                        editBtn.classList.add("hide");
                    });
                
                    // Display empty download
                    insertEmptyDLBdr();
                }
                else
                {
                    chkdEps.forEach((chkBox) => 
                    {
                        let parentDiv = chkBox.closest(".dlCtgGridCardBdr");
                        let dlCardEpId = parentDiv.getAttribute("data-id");
        
                        // Remove the episode from DL array
                        dwld_lib = dwld_lib.filter(item => item.dl_id !== dlCardEpId);

                        // Remove from Grid
                        parentDiv.remove();
                    });

                    // Close the delete operation
                    document.querySelectorAll(".dlBdyHdr_editBtn")[0].click();

                    // Update user data
                    await updateUserData(
                    {
                        downloads: dwld_lib
                    });

                    // Update the DL Map
                    await initDLIndexedMap();
        
                    // Regenerate the DL Body Cards
                    insert_dl_body_cards();
                    window.scrollTo(0,0);
                }
            }

            newBtn.addEventListener("click" , dlt_atn);
            newBtn.atn = dlt_atn;
        });
    }





// DWLD MODAL

    // Open the modal
    function openDLModal(id, type, link, title, epNo, size)
    {
        //

        // Attach query selectors
        dlMdlBase = document.querySelector(".dlMdlBase");
        dlMdlBox = document.querySelector(".dlMdlBox");
        dlMdlHdr_TitleText = document.querySelector(".dlMdlHdr_TitleText");
        dlMdlHdr_epNo = document.querySelector(".dlMdlHdr_epNo");
        dlMdlHdr_epSize = document.querySelector(".dlMdlHdr_epSize");
        dlMdlCtntGrid = document.querySelector(".dlMdlCtntGrid");

        // Set the title, length, and size
        dlMdlHdr_TitleText.textContent = title;
        dlMdlHdr_epNo.textContent = epNo;
        dlMdlHdr_epSize.textContent = size;

        // Clear the grid
        dlMdlCtntGrid.innerHTML = "";

        // Fetch the episodes and their info
        let dlItem = dlLibraryIndexedInv.filter(item => item.dl_id === id);

        if(dlItem.length > 0)
        {
            if(type === "movie")
            {
                let movLnk = `#/watch/movie/${link.toString().split('/')[2]}/1`;
                generate_dlModalGridCards(
                    `${id}`,
                    `${link}`,
                    `${type}`,
                    `${dlItem[0].dl_mov_qlty}`,
                    `${movLnk}`,
                    `${dlItem[0].dl_mov_lang}`,
                    `movie`,
                    `Full movie`,
                    `${size}`,
                );
            }
            else
            {
                for(let i = 0; i < dlItem[0].dl_eps.length; i++)
                {
                    let item = dlItem[0].dl_eps[i];
                    generate_dlModalGridCards(
                        `${id}`,
                        `${link}`,
                        `${type}`,
                        `${item.dl_ep_qlty}`,
                        `#/watch/tv/${link.toString().split('/')[2]}/${dlItem[0].dl_ssn}/${item.dl_ep_num}`,
                        `${item.dl_ep_lang}`,
                        `${item.dl_ep_num}`,
                        `Episode ${item.dl_ep_num}`,
                        `${item.dl_ep_size} MB`,
                    );
                }
            }
        }
        else
        {
            // Let users no no items are available
            notification(`notifyBad` , `No episodes available`);
            return;
        }

        // Scroll to start
        dlMdlBox.scrollTo(0,0);

        // Display the modal
        dlMdlBase.classList.add("active");
        documentBody.classList.add("bodystop");

        // Attach listeners
        attachAllDLModalListeners(id);
    }


    // Attaches Listeners
    function attachAllDLModalListeners(showId)
    {
        attachCloseDLModalListeners();
        attachEditDLModalEpListeners();
        attachSelSnglDLModalEpListeners();
        attachSelAllDLModalEpListeners();
        attachDelDLModalEpListeners(showId)
        attachGenMenuModalEventListeners();
    }


    // Generates the DL Modal Grid Cards
    function generate_dlModalGridCards(showId, showLink, showType, showQlty, eplink, epLang, chkBxId, title, size)
    {
        dlMdlCtntGrid.insertAdjacentHTML(
            `beforeend`,
            `
                <div class="dLMdlGridCardBdr" data-id="${showId}" data-show-link="${showLink}" data-type="${showType}" data-qlty="${showQlty}" data-ep-link="${eplink}">
                    <div class="dLMdlGridCardBox">
                        <label for="dLMdlGridCard_chkFldId_${chkBxId}" class="dLMdlGridCard_ovrlyLbl"></label>
                        <div class="dLMdlGridCard_edit genTick_chkBase">
                            <div class="genTick_chkBdr">
                                <div class="genTick_chkBox">
                                    <label for="dLMdlGridCard_chkFldId_${chkBxId}" class="genTick_chkFldLbl dLMdlGridCard_chkFldLbl">
                                        <input type="checkbox" id="dLMdlGridCard_chkFldId_${chkBxId}" class="genTick_chkFldCls">
                                        <div class="genTick_chkFldIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genTick_chkFldIconSvg">
                                                <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="dLMdlGridCard_detBdr" onclick="window.open('${eplink}' , '_self')">
                            <div class="dLMdlGridCard_detBox">
                                <div class="dLMdlGridCard_detTitleBox">
                                    <div class="dLMdlGridCard_detTitleText">${title}</div>
                                </div>
                                <div class="dLMdlGridCard_prptyBdr">
                                    <div class="dLMdlGridCard_prptyBox">
                                        <p class="dLMdlGridCard_prptyText">Quality:</p>
                                        <p class="dLMdlGridCard_prptyText">${showQlty}</p>
                                    </div>
                                </div>
                                <div class="dLMdlGridCard_prptyBdr">
                                    <div class="dLMdlGridCard_prptyBox">
                                        <p class="dLMdlGridCard_prptyText">Audio:</p>
                                        <p class="dLMdlGridCard_prptyText">${epLang}</p>
                                    </div>
                                </div>
                                <div class="dLMdlGridCard_sizeBox">
                                    <p class="dLMdlGridCard_sizeText">${size}</p>
                                </div>
                            </div>
                        </div>
                        <div class="dLMdlGridCard_AtnBdr">
                            <div class="dLMdlGridCard_AtnBox">
                                <button type="button" aria-haspopup="menu" class="genBtnBox genIconBtn transBtn openGenMenuModalBtn" data-gen-menu-modal-type="dl_modal_cards">
                                    <div class="genBtnIcon">
                                        <svg transform="scale(0.80)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" class="genBtnSvg">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }


    // Closes the Modal
    function attachCloseDLModalListeners()
    {
        let dlMdlCloseBtn = document.querySelectorAll(".dlMdlBaseCloseBtn");

        // Close the modal
        dlMdlCloseBtn.forEach((oldBtn) => 
        {
            if(oldBtn.mdl_atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.mdl_atn);
            }
        });
        dlMdlCloseBtn.forEach((btn) => 
        {
            const close_atn = () => 
            {
                dlMdlBase.classList.remove("active");
                dlMdlCtntGrid.scrollTo(0,0);
                updURLforDLModal('');

                dlMdlBase.addEventListener("transitionend", function handleTransitionEnd()
                {
                    dlMdlBase.removeEventListener("transitionend", handleTransitionEnd);

                    dlMdlHdr_TitleText.textContent = "N/A";
                    dlMdlHdr_epNo.textContent = "N/A";
                    dlMdlHdr_epSize.textContent = "N/A";
                    dlMdlCtntGrid.innerHTML = "";

                    document.querySelectorAll(".dlMdlHdr_ssnAtnBtn").forEach((btn) => 
                    {
                        btn.querySelector(".genBtnText").textContent = "Edit";
                    });

                    if(dlMdlBox.getAttribute("data-cards-are-selectable") === "true")
                    {
                        dlMdlBox.removeAttribute("data-cards-are-selectable");

                        // Deselect all selected ep cards and select-all-ep btn
                        document.querySelectorAll(".dlMdlHdr_ssnSelAllLbl .genTick_chkFldCls").forEach((btn) =>
                        {
                            btn.checked = false;
                        });
                        document.querySelectorAll(".dLMdlGridCard_chkFldLbl .genTick_chkFldCls:checked").forEach((btn) => 
                        {
                            btn.checked = false;
                        });
    
                        // Hide delete button
                        document.querySelectorAll(".dlMdlHdr_epDelBtn").forEach((btn) => 
                        {
                            btn.querySelector(".genBtnText").textContent = `Delete`;
                            btn.classList.add("hide");
                        });
                    }

                    documentBody.classList.remove("bodystop");
                });
            }

            btn.addEventListener("click" , close_atn);
            btn.mdl_atn = close_atn;
        });
    }


    // Opening Multi-selecting (Editing)
    function attachEditDLModalEpListeners()
    {
        let dlMdlHdr_ssnAtnBtn = document.querySelectorAll(".dlMdlHdr_ssnAtnBtn");

        dlMdlHdr_ssnAtnBtn.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click", oldBtn.atn);
            }
        });

        dlMdlHdr_ssnAtnBtn.forEach((newBtn) => 
        {
            const edit_atn = () =>
            {
                if(dlMdlBox.getAttribute("data-cards-are-selectable") === "true")
                {
                    dlMdlBox.removeAttribute("data-cards-are-selectable");

                    // Update the textcontent of all edit buttons
                    document.querySelectorAll(".dlMdlHdr_ssnAtnBtn").forEach((editBtn) => 
                    {
                        editBtn.querySelector(".genBtnText").textContent = "Edit";
                    });

                    // Deselect all selected ep cards and select-all-ep btn
                    document.querySelectorAll(".dlMdlHdr_ssnSelAllLbl .genTick_chkFldCls").forEach((btn) =>
                    {
                        btn.checked = false;
                    });
                    document.querySelectorAll(".dLMdlGridCard_chkFldLbl .genTick_chkFldCls:checked").forEach((btn) => 
                    {
                        btn.checked = false;
                    });

                    // Hide delete button
                    document.querySelectorAll(".dlMdlHdr_epDelBtn").forEach((btn) => 
                    {
                        btn.querySelector(".genBtnText").textContent = `Delete`;
                        btn.classList.add("hide");
                    });
                }
                else
                {
                    dlMdlBox.setAttribute("data-cards-are-selectable", "true");

                    // Update the textcontent of all edit buttons
                    document.querySelectorAll(".dlMdlHdr_ssnAtnBtn").forEach((editBtn) => 
                    {
                        editBtn.querySelector(".genBtnText").textContent = "Cancel";
                    });
                }
            }

            newBtn.addEventListener("click", edit_atn);
            newBtn.atn = edit_atn;
        });
    }


    // Selecting all episodes
    function attachSelAllDLModalEpListeners()
    {
        let dlModalEpChkBoxLbl = document.querySelectorAll(".dlMdlHdr_ssnSelAllLbl");

        dlModalEpChkBoxLbl.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.atn);
            }
        });

        dlModalEpChkBoxLbl.forEach((newBtn) => 
        {

            const clck_atn = () => 
            {
                dlMdl_selAllTimer = setTimeout(() => 
                {
                    let chkBox = newBtn.querySelector(".genTick_chkFldCls");
                    clearTimeout(dlMdl_selAllTimer);

                    if(chkBox.checked == true)
                    {
                        // Select all ep cards
                        document.querySelectorAll(".dLMdlGridCard_chkFldLbl .genTick_chkFldCls").forEach((btn) => 
                        {
                            if(btn.checked != true) btn.checked = true;
                        });

                        // Select all "select-all-card" buttons
                        document.querySelectorAll(".dlMdlHdr_selAllLbl .genTick_chkFldCls").forEach((chkbox) => 
                        {
                            chkbox.checked = true;
                        });
    
                        // Display delete button
                        toggleDelDLModalEpBtn();
                    }
                    else
                    {
                        // Deselect all ep cards
                        document.querySelectorAll(".dLMdlGridCard_chkFldLbl .genTick_chkFldCls").forEach((btn) => 
                        {
                            btn.checked = false;
                        });

                        // Select all "select-all-card" buttons
                        document.querySelectorAll(".dlMdlHdr_selAllLbl .genTick_chkFldCls").forEach((chkbox) => 
                        {
                            chkbox.checked = true;
                        });
    
                        // Hide delete button
                        toggleDelDLModalEpBtn();
                    }
                },100);
            }

            newBtn.addEventListener("click" , clck_atn);
            newBtn.atn = clck_atn;
        });
    }


    // Selecting/Deselecting the "select-all-ep" button
    function toggleSelAllDLModalCard()
    {
        let allChkBoxes = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls");
        let chkdEps = document.querySelectorAll(".dlCtgGridCardBdr .genTick_chkFldCls:checked");
        if(allChkBoxes.length == chkdEps.length)
        {
            document.querySelectorAll(".dlMdlHdr_ssnSelAllLbl .genTick_chkFldCls").forEach((editBtn) => 
            {
                editBtn.checked = true;
            });
        }
        else
        {
            document.querySelectorAll(".dlMdlHdr_ssnSelAllLbl .genTick_chkFldCls").forEach((editBtn) => 
            {
                editBtn.checked = false;
            });
        }
    }


    // Selecting single episode(s)
    function attachSelSnglDLModalEpListeners()
    {
        let dlModalEpChkBoxLbl = document.querySelectorAll(".dLMdlGridCard_chkFldLbl");

        dlModalEpChkBoxLbl.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.atn);
            }
        });

        dlModalEpChkBoxLbl.forEach((newBtn) => 
        {
            const clck_atn = () => 
            {
                toggleSelAllDLModalCard();
                toggleDelDLModalEpBtn();
            }

            newBtn.addEventListener("click" , clck_atn);
            newBtn.atn = clck_atn;
        });
    }


    // Toggling the delete episode button visibility
    function toggleDelDLModalEpBtn()
    {
        let checkedDLMdlEpCards = document.querySelectorAll(".dLMdlGridCard_chkFldLbl .genTick_chkFldCls:checked");

        if(checkedDLMdlEpCards.length > 0)
        {
            document.querySelectorAll(".dlMdlHdr_epDelBtn").forEach((btn) => 
            {
                btn.querySelector(".genBtnText").textContent = `Delete (${checkedDLMdlEpCards.length})`;
                btn.classList.remove("hide");
            });
        }
        else
        {
            document.querySelectorAll(".dlMdlHdr_epDelBtn").forEach((btn) => 
            {
                btn.querySelector(".genBtnText").textContent = `Delete`;
                btn.classList.add("hide");
            });
        }
    }


    // Deleting episodes
    function attachDelDLModalEpListeners(dlCardId)
    {
        let delDLModalEpBtn = document.querySelectorAll(".dlMdlHdr_epDelBtn");

        delDLModalEpBtn.forEach((oldBtn) => 
        {
            if(oldBtn.atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.atn);
            }
        });

        delDLModalEpBtn.forEach((newBtn) => 
        {
            const dlt_atn = async () => 
            {
                let dwld_lib = await getUsrDwldInv();
                
                // Identify the card(s) to be removed
                let allChkBoxes = document.querySelectorAll(".dLMdlGridCardBdr .genTick_chkFldCls");
                let chkdEps = document.querySelectorAll(".dLMdlGridCardBdr .genTick_chkFldCls:checked");

                if(allChkBoxes.length == chkdEps.length)
                {
                    // Delete all elements if all are selected
                    dwld_lib = dwld_lib.filter(item => item.dl_id !== dlCardId);
                
                    // Close the modal
                    document.querySelectorAll(".dlMdlBaseCloseBtn")[0].click();
                }
                else
                {
                    chkdEps.forEach((chkBox, index) => 
                    {
                        let parentDiv = chkBox.closest(".dLMdlGridCardBdr");
                        let dlCardEpLnk = parentDiv.getAttribute("data-ep-link");

                        // Get the specific episode
                        let thisEp = Number(dlCardEpLnk.split('/')[5]);
        
                        // Remove the episode from DL array
                        dwld_lib.forEach((item) => 
                        {
                            if(item.dl_id === dlCardId)
                            {
                                // Delete the episode
                                item.dl_eps = item.dl_eps.filter(subItem => Number(subItem.dl_ep_num) !== thisEp);
                            }
                        });

                        // Remove from Grid
                        parentDiv.remove();
                    });
                }

                // Update user data
                await updateUserData(
                {
                    downloads: dwld_lib
                });

                // Update the DL Map
                await initDLIndexedMap();
    
                // Regenerate the DL Body Cards
                insert_dl_body_cards();

                // Close the delete operation
                document.querySelectorAll(".dlMdlHdr_ssnAtnBtn")[0].click();
            }

            newBtn.addEventListener("click" , dlt_atn);
            newBtn.atn = dlt_atn;
        });
    }


    // DL Modal Card listeners
    function attachDLModalEpListeners(btnEvent)
    {
        // Get the clicked button
        let dlCardMenuBtn = btnEvent.target.closest("[data-gen-menu-modal-type='dl_modal_cards']");
        
        if (!dlCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='dl_modal_cards'] not found.");
            return;
        }

        // Find the parent 
        let dlCardBdr = dlCardMenuBtn.closest(".dLMdlGridCardBdr");
        if (!dlCardBdr)
        {
            console.error("Parent element not found.");
            return;
        }

        // Get all parents elements to obtain the current index
        let allGridCards = Array.from(document.querySelectorAll(".dLMdlGridCardBdr"));
        let dlCardIndex = allGridCards.indexOf(dlCardBdr);

        if(dlCardIndex === -1)
        {
            console.error("Failed to find the index of the clicked card.");
            return;
        }

        // Add selectors
        let dlCardId = dlCardBdr.getAttribute("data-id");
        let dlCardShwLnk = dlCardBdr.getAttribute("data-show-link");
        let dlCardEpLnk = dlCardBdr.getAttribute("data-ep-link");
        let dlCardTitle = document.querySelector(".dlModalEpNumTitle");
        let dlCardPlyBtn = document.querySelector(".dlModalCardWatchNowBtn");
        let dlCardDelEpBtn = document.querySelector(".dlModalCardDelEpBtn");
        let dlCardViewDetBtn = document.querySelector(".dlModalCardViewDetBtn");

        // Display the episode number
        dlCardTitle.textContent = `Episode ${dlCardEpLnk.split('/')[5]}`;

        // Watch the Episode
        dlCardPlyBtn.onclick = () => window.open(`${dlCardEpLnk}` , `_self`);

        // View Details of the show
        dlCardViewDetBtn.onclick = () => window.open(`${dlCardShwLnk}` , `_self`);

        // Delete Episode
        dlCardDelEpBtn.onclick = async () => 
        {
            let dwld_lib = await getUsrDwldInv();

            if(allGridCards.length == 1)
            {
                // Delete item if deleted episode was the last item
                dwld_lib = dwld_lib.filter(item => item.dl_id !== dlCardId);
            
                // Close the modal
                document.querySelectorAll(".dlMdlBaseCloseBtn")[0].click();
            }
            else
            {
                // Get the specific episode
                let thisEp = Number(dlCardEpLnk.split('/')[5]);

                // Remove the episode from DL array
                dwld_lib.forEach((item) => 
                {
                    if(item.dl_id === dlCardId)
                    {
                        // Delete the episode
                        item.dl_eps = item.dl_eps.filter(subItem => Number(subItem.dl_ep_num) !== thisEp);
                    }
                });

                // Remove the card from the Grid
                dlCardBdr.remove();

                // Send notification when episode is deleted
                notification(`notifyGood` , `Episode ${dlCardEpLnk.split('/')[5]} deleted`);
            }

            // Update user data
            await updateUserData(
            {
                downloads: dwld_lib
            });

            // Update the DL Map
            await initDLIndexedMap();

            // Regenerate the DL Body Cards
            insert_dl_body_cards();
        };
    }







