/***************************************************************
 * This will hold the code for General functions of the Collections page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// VARIABLE DECLARATIONS

let clBodyCtntBox;
let clCatalogBdr;
let clCatalogGrid;
let clModalBase;
let clModalBox;
let emptyCLPageBdr;
let clLibraryIndexedInv;
let newCLMaxSize = 100;
let oneCLMaxSize = 1000;
let newCLCurrSize = 0;
let createCLTimer;
let clBodySortTabs;
let clBodySortTabIndex = 0;
let clBodyCardIndex = null;
let myListCLCatalog_ItemBase;
let clModalBaseBarBdr;
let clModalBaseTitleText;
let clModalBaseCloseBtn;
let clModalHeadBase;
let clModalHeaderBcgImg;
let clModalHeaderThumbImg;
let clModalHeader_DetInfo_TitleText;
let clModalHeader_DetInfo_TagsCountText;
let clModalHeader_DetInfo_TagsUpdateText;
let clModalHeader_DetInfo_DescText;
let clModalGridBox;
let currOpenCLActionMenuIndex = null;
let clModalActionMenuBdr;
let clModalSortTypeText;
let clModalSortOrderText;
let clModalGrid_CardBdr;
let closeCLModalTimer;
let clModalDfltInv = [];
let clModalIndexedInv;
let clModalSortTypeTabs;
let clModalSortTypeTabIndex = 0;
let clModalSortOrderTabs;
let clModalSortOrderTabIndex = 0;
let clModalFilterStatusTabs;
let clModalFilterStatusTabIndex = 0;
let clModalFilterTypeTabs;
let clModalFilterTypeTabIndex = 0;
let addShowToCLArray = [];
let addShowToCLBase;
let clClickedModalCardShowName;
let mylist_collections_struct =
`
    <div class="myListBodyBox">
        <div class="myListBodyTitleBdr">
            <div class="myListBodyTitleBox">
                <div class="myListBodyTitleIconBox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListBodyTitleIconSvg">
                        <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                    </svg>
                </div>
                <span class="myListBodyTitleText">Collections</span>
            </div>
            <div class="myListNavAtnBdr">
                <div class="myListNavAtnBox">
                    <button type="button" aria-haspopup="menu" class="genBtnBox greySolidBtn myListCreateCLBtn">
                        <div class="genBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genBtnSvg">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                            </svg>
                        </div>
                        <div class="genBtnText">Add</div>
                    </button>
                    <button type="button" aria-haspopup="menu" class="genBtnBox greySolidBtn  openGenMenuModalBtn" data-gen-menu-modal-type="cl_body_sort">
                        <div class="genBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                <path fill-rule="evenodd" d="M22.75 7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genBtnText">Sort</div>
                    </button>
                </div>
            </div>
        </div>
        <div class="myListBodyCtntBdr">
            <div class="myListBodyCtntBox cl_body_ctnt_box">
                <div class="myListCLCatalogBdr">
                    <div class="myListCLCatalogBox">
                        <div class="myListCLCatalogGrid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!------ Collections Modal ------>
    <div class="clModalBase">
        <div class="clModalBdr">
            <div class="clModalBox">
                <div class="clModalBaseBarBdr">
                    <div class="clModalBaseBarBox">
                        <button type="button" class="genBtnBox greySolidBtn genIconBtn clModalBaseCloseBtn" title="Close Collection">
                            <div class="genBtnIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                    <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        <div class="clModalBaseTitleBdr">
                            <div class="clModalBaseTitleBox">
                                <div class="clModalBaseTitleText">N/A</div>
                                <div class="clModalActionFence clModalBaseBar_SortFence">
                                    <div class="clModalActionBase">
                                        <div class="clModalActionBdr">
                                            <div class="clModalActionBox">
                                                <button class="clModalActionBtn openGenMenuModalBtn" data-gen-menu-modal-type="cl_modal_header">
                                                    <div class="clModalActionBtnIcon">
                                                        <svg class="clModalActionBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
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
                    </div>
                </div>
                <div class="clModalHeadBase">
                    <div class="clModalHeadBdr">
                        <div class="clModalHead_underlayerBdr">
                            <div class="clModalHead_underlayerBox">
                                <div class="clModalHeader_BcgBdr">
                                    <div class="clModalHeader_BcgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="/images/uvid-green-bcg1-light.jpg" alt="The collections header background image" class="clModalHeader_BcgImg"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="clModalHeader_Shadow"></div>
                            </div>
                        </div>
                        <div class="clModalHeadBox">
                            <div class="clModalHeader_thumbBase">
                                <div class="clModalHeader_thumbBdr">
                                    <div class="clModalHeader_thumbBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="/images/uvid-green-bcg1-light.jpg" alt="The collections header thumbnail image" class="clModalHeader_thumbImg"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clModalHeader_DetBdr">
                                <div class="clModalHeader_DetBox">
                                    <div class="clModalHeader_DetInfoBdr">
                                        <div class="clModalHeader_DetInfoBox">
                                            <div class="clModalHeader_DetInfo_TitleBox">
                                                <div class="clModalHeader_DetInfo_TitleText">N/A</div>
                                            </div>
                                            <div class="clModalHeader_DetInfo_TagsBdr">
                                                <div class="clModalHeader_DetInfo_TagsBox">
                                                    <div class="clModalHeader_DetInfo_TagsItem clModalHeader_DetInfo_TagsCount">
                                                        <div class="clModalHeader_DetInfo_TagsCountIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="clModalHeader_DetInfo_TagsCountSvg">
                                                                <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                                                            </svg>
                                                        </div>
                                                        <p class="clModalHeader_DetInfo_TagsCountText">N/A</p>
                                                    </div>
                                                    <div class="clModalHeader_DetInfo_TagsItem clModalHeader_DetInfo_TagsSeparator">•</div>
                                                    <div class="clModalHeader_DetInfo_TagsItem clModalHeader_DetInfo_TagsUpdate">
                                                        <p class="clModalHeader_DetInfo_TagsUpdateText">N/A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clModalHeader_DetInfo_DescBox">
                                                <p class="clModalHeader_DetInfo_DescText">N/A</p>
                                            </div>
                                            <div class="clModalHeader_DetInfo_MoreBdr">
                                                <div class="clModalHeader_DetInfo_MoreBox">
                                                    <button class="clModalHeader_DetInfo_MoreBtn">
                                                        <p class="clModalHeader_DetInfo_MoreText openReadFullDescBtn">Read more</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="clModalHeader_ActionBdr">
                                                <div class="clModalHeader_ActionBox">
                                                    <button type="button" class="genBtnBox midSolidBtn addShowsToCL">
                                                        <div class="genBtnIcon">
                                                            <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genBtnSvg">
                                                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="genBtnText">Add Shows</div>
                                                    </button>
                                                    <button type="button" class="genBtnBox greySolidBtn genIconBtn openEditCLBtn" title="Edit Collection">
                                                        <div class="genBtnIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="genBtnBox greySolidBtn genIconBtn openMultiAddToCLBtn" title="Add all to..">
                                                        <div class="genBtnIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                                <path fill-rule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
                                                                <path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5m-11 0c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="genBtnBox greySolidBtn genIconBtn clDeleteBtn" title="Delete collection">
                                                        <div class="genBtnIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clModalCtntBase">
                    <div class="clModalCtntBdr">
                        <div class="clModalCtntBox">
                            <div class="clModalCtnt_sortBdr">
                                <div class="clModalCtnt_sortBox">
                                    <div class="clModalCtnt_sortSect clModalCtnt_sortStatusBdr">
                                        <div class="clModalCtnt_sortStatusBox">
                                            <div class="clModalCtnt_sortStatusText">
                                                <span class="status_type">N/A</span>
                                                <span class="status_divider">•</span>
                                                <span class="status_order">N/A</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clModalCtnt_sortSect clModalCtnt_sortFilterBdr">
                                        <div class="clModalCtnt_sortFilterBox">
                                            <button type="button" aria-haspopup="menu" class="genBtnBox greySolidBtn genIconBtn transBtn openGenMenuModalBtn" data-gen-menu-modal-type="cl_modal_sort" title="Sort">
                                                <div class="genBtnIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                        <path fill-rule="evenodd" d="M22.75 7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </button>
                                            <button type="button" aria-haspopup="menu" class="genBtnBox greySolidBtn genIconBtn transBtn openGenMenuModalBtn" data-gen-menu-modal-type="cl_modal_filter" title="Filter">
                                                <div class="genBtnIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                        <path fill-rule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M14.5 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M5.75 17a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0m3.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd" />
                                                        <path d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-7.75 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clModalGridBase">
                                <div class="clModalGridBdr">
                                    <ul class="clModalGridBox genDraggableContainer"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
let emptyCLStruct = 
`
    <div class="emptyMyListPageBdr collections">
        <div class="emptyMyListPageBox">
            <div class="emptyMyListPageCtnt">
                <div class="emptyMyListPageIconBox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyMyListPageIconSvg">
                        <path d="M16.07 9.952c1.329 0 2.462 0 3.366.102q.23.025.458.064c.532.09 1.05.235 1.53.488v-.85c0-.91 0-1.663-.085-2.264c-.09-.635-.286-1.197-.756-1.66a3 3 0 0 0-.241-.214c-.512-.408-1.126-.575-1.82-.652c-.67-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.335-.006-1.653-.087a2.7 2.7 0 0 1-.536-.196c-.285-.14-.532-.351-1.228-.968l-.474-.42a7 7 0 0 0-.48-.403a4.3 4.3 0 0 0-2.182-.803A8 8 0 0 0 8.413 2h-.116c-.641 0-1.064 0-1.431.061c-1.605.268-2.903 1.39-3.219 2.875c-.072.337-.071.724-.071 1.283v4.387c.48-.253.998-.399 1.53-.488q.227-.039.458-.064c.904-.102 2.037-.102 3.367-.102z" />
                        <path fill-rule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868c.363 1.885.544 2.827 1.172 3.452q.246.245.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472q.298-.184.544-.429c.628-.625.81-1.567 1.172-3.452c.503-2.618.755-3.927.145-4.868a3 3 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a3 3 0 0 0-.57.646m6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.324.765.723s-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="emptyMyListPageNoteBox">
                    <p class="emptyMyListPageNoteText">
                        You don't have any collections.
                        </br>
                        Click the "Add" button to start creating your own unique collections.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;
let createCLStruct = 
`
    <div class="genAtnModalBcg closeCreateCLBtn"></div>
    <div class="genAtnModalBox">
        <div class="genAtnModalCtnt">
            <div class="genAtnModalHeader">
                <div class="genAtnModalHeaderIconBox closeCreateCLBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <div class="genAtnModalHeaderText">
                    <span class="large">C</span>
                    <span class="small">reate Collection</span>
                </div>
            </div>
            <div class="genAtnModalOptBcg createCLItemBcg">
                <div class="genAtnModalOptBdr createCLItemBox">
                    <div class="newCLBdr active">
                        <div class="newCLBox">
                            <div class="newCLInputBdr">
                                <div class="newCLInputBox">
                                    <input type="text" name="newCLInputField" id="newCLInputId" class="newCLInputClass" placeholder="Name your collection" />
                                </div>
                            </div>
                            <div class="newCLWarnBdr">
                                <div class="newCLWarnBox">
                                    <p id="newCLWarnId" class="newCLWarnText" tabindex="-1"></p>
                                </div>
                            </div>
                            <div class="newCLAtnBdr">
                                <div class="newCLAtnBox">
                                    <button type="button" id="createNewCL" class="genBtnBox inactiveBtn" disabled>
                                        <div class="genBtnText">Create</div>
                                    </button>
                                    <button type="button" id="cancelNewCL" class="genBtnBox hollowBtn closeCreateCLBtn">
                                        <div class="genBtnText">Cancel</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
let readFullDescCLStruct = 
`
    <div class="genAtnModalBcg closeReadFullDescCLBtn"></div>
    <div class="genAtnModalBox readFullDescBox">
        <div class="genAtnModalCtnt">
            <div class="genAtnModalHeader">
                <div class="genAtnModalHeaderIconBox closeReadFullDescCLBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <div class="genAtnModalHeaderText">
                    <span class="large">D</span>
                    <span class="small">escription</span>
                </div>
            </div>
            <div class="genAtnModalOptBcg ">
                <div class="genAtnModalDescTextBdr">
                    <div class="genAtnModalDescTextBox"></div>
                </div>
            </div>
        </div>
    </div>
`;
let editCLStruct =
`
    <div class="genAtnModalBcg closeEditCLModalBtn"></div>
    <div class="genAtnModalBox">
        <div class="genAtnModalCtnt">
            <div class="genAtnModalHeader">
                <div class="genAtnModalHeaderIconBox closeEditCLModalBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <div class="genAtnModalHeaderText">
                    <span class="large">E</span>
                    <span class="small">dit Collection</span>
                </div>
            </div>
            <div class="genAtnModalOptBcg editCLItemBcg">
                <div class="genAtnModalOptBdr editCLItemBox">
                    <div class="genAtnModalOptBox editSectionBtn" title="Edit Title" aria-label="edit-title-btn">
                        <div class="genAtnModalOptIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIconSvg">
                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                            </svg>
                        </div>
                        <div class="genAtnModalOptTextBox ">
                            <span class="genAtnModalOptText ">Title</span>
                        </div>
                    </div>
                    <div class="newCLBdr">
                        <div class="newCLBox">
                            <div class="newCLInputBdr">
                                <div class="newCLInputBox">
                                    <input data-initial-value-type="title" type="text" name="editCLTitleInputField" id="editCLTitleInputId" class="newCLInputClass editCLInputClass" placeholder="Enter title" disabled />
                                </div>
                            </div>
                            <div class="newCLWarnBdr">
                                <div class="newCLWarnBox">
                                    <p id="editCLWarnId" class="newCLWarnText" tabindex="-1" data-word-limit="100"></p>
                                </div>
                            </div>
                            <div class="newCLAtnBdr">
                                <div class="newCLAtnBox">
                                    <button type="button" id="saveCLTitleEdit" class="genBtnBox inactiveBtn saveCLEditBtn" data-save-type="title" disabled>
                                        <div class="genBtnText">Update</div>
                                    </button>
                                    <button type="button" id="cancelCLTitleEdit" class="genBtnBox hollowBtn closeEditSectionBtn">
                                        <div class="genBtnText">Cancel</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="genAtnModalOptBox editSectionBtn" title="Edit Description" aria-label="edit-description-btn">
                        <div class="genAtnModalOptIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIconSvg">
                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                            </svg>
                        </div>
                        <div class="genAtnModalOptTextBox ">
                            <span class="genAtnModalOptText ">Description</span>
                        </div>
                    </div>
                    <div class="newCLBdr">
                        <div class="newCLBox">
                            <div class="newCLInputBdr">
                                <div class="newCLInputBox">
                                    <textarea data-initial-value-type="description" type="text" name="editCLDescInputField" id="editCLDescInputId" class="newCLTextAreaClass editCLInputClass" placeholder="Enter description" disabled></textarea>
                                </div>
                            </div>
                            <div class="newCLWarnBdr">
                                <div class="newCLWarnBox">
                                    <p id="editCLWarnId" class="newCLWarnText" tabindex="-1" data-word-limit="1000"></p>
                                </div>
                            </div>
                            <div class="newCLAtnBdr">
                                <div class="newCLAtnBox">
                                    <button type="button" id="saveCLDescEdit" class="genBtnBox inactiveBtn saveCLEditBtn" data-save-type="description" disabled>
                                        <div class="genBtnText">Update</div>
                                    </button>
                                    <button type="button" id="cancelCLDescEdit" class="genBtnBox hollowBtn closeEditSectionBtn">
                                        <div class="genBtnText">Cancel</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;




//  GENERAL FUNCTIONS

    function start_mylist_collections_page()
    {
        document.querySelector(".myListBodyBdr").insertAdjacentHTML(`afterbegin` , mylist_collections_struct);
        clBodyCtntBox = document.querySelector(".cl_body_ctnt_box");
        clCatalogBdr = clBodyCtntBox.querySelector(".myListCLCatalogBdr");
        clCatalogGrid = document.querySelector(".myListCLCatalogGrid");
        clModalBase = document.querySelector(".clModalBase");
        clModalBox = document.querySelector(".clModalBox");

        fetchMyCollections();
        attachCreateCLEventListeners();

    }


    // Inserting the empty bdr when there are no collections
    function insertEmptyCLBdr()
    {
        clBodyCtntBox.insertAdjacentHTML(`afterbegin` , emptyCLStruct);
    }


    // Removing the empty bdr
    function removeEmptyCLPageBdr()
    {
        emptyCLPageBdr = document.querySelector(".emptyMyListPageBdr.collections");

        if(emptyCLPageBdr != undefined) emptyCLPageBdr.remove();
    }


    // Updates the url during accessment of the CL Modal
    function updURLforCLModal(url)
    {
        const newCLurl = `#/my-list/collections/${url}`;

        if(url === "")
        {
            window.history.replaceState(null, '', '#/my-list/collections/');
        }
        else
        {
            window.history.replaceState(null, '', newCLurl);
        }
    }


    // Initializes the DL Map
    async function initCLIndexedMap()
    {
        let selectedProfile = await getSelectedProfile();

        clLibraryIndexedInv = selectedProfile.prof_collections.map((collection, index) => 
        {
            return { ...collection, index };
        });
    }






// SORTING FUNCTIONS

    // Sort the CL by Recently Added  (AKA Sort to original order)
    function sortCLByRecAdded(arr)
    {
        return arr.sort((a, b) => a.index - b.index);
    }

    // Sorting the collection cards by Name
    function sortCLByName(arr, arrPrpty, order = 'A-Z')
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

    // Sort the CL by Recently Updated
    function sortCLByRecUpd(arr, arrPrpty, order = 'asc')
    {
        notification(`notifyBad` , `An error occurred`);
    }

    // Sort the CL by Year
    function sortCLByYear(arr, arrPrpty, order = 'asc')
    {
        return arr.sort((a, b) => 
        {
            const yearA = parseInt(a[arrPrpty], 10);
            const yearB = parseInt(b[arrPrpty], 10);

            return order === 'dsc' ? yearB - yearA : yearA - yearB;
        });
    }

    // Sort the CL by Score
    function sortCLByScore(arr, arrPrpty, order = 'asc')
    {
        return arr.sort((a, b) => 
        {
            const scoreA = parseFloat(a[arrPrpty]);
            const scoreB = parseFloat(b[arrPrpty]);

            return order === 'dsc' ? scoreB - scoreA : scoreA - scoreB;
        });
    }

    // Reversing the CL array order
    function reverseCLArray(arr)
    {
        arr.reverse();
    }






// FILTERING FUNCTIONS


    // Filtering the cl modal cards based on "Show Status" i.e. watching, planned, etc
    function filterCLModalStatus(filterOptNo)
    {
        if(filterOptNo == 0)
        {
            clModalGrid_CardBdr.forEach((bdr) => 
            {
                if(bdr.classList.contains("notShowStatusMatch"))
                {
                    bdr.classList.remove("notShowStatusMatch");
                }
            });
        }
        else
        {
            clModalGrid_CardBdr.forEach((bdr) => 
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

    // Filtering the cl modal cards based on "Show Type" i.e. movie, tv
    function filterCLModalType(filterTypeText)
    {
        clModalGrid_CardBdr.forEach((bdr) => 
        {
            if(bdr.classList.contains("notShowTypeMatch"))
            {
                bdr.classList.remove("notShowTypeMatch");
            }

            if(bdr.querySelector(".clModalGridCard_Type").textContent.toLowerCase() != filterTypeText.toLowerCase())
            {
                bdr.classList.add("notShowTypeMatch");
            }
        });
    }






// COLLECTIONS CARDS 

    // opening the modal for creating a new collection
    function attachCreateCLEventListeners()
    {
        let openCreateCLBtn = document.querySelectorAll(".myListCreateCLBtn");

        openCreateCLBtn.forEach(btn => 
        {
            if(btn.createCLFunc)
            {
                btn.removeEventListener(`click` , btn.createCLFunc);
            }
        });

        openCreateCLBtn.forEach(btn => 
        {
            const createCLFunc = () =>
            {
                const createListBdr = document.createElement("div");
                createListBdr.classList.add("genAtnModalBdr");
                createListBdr.innerHTML = createCLStruct;
                documentCtnt.appendChild(createListBdr);

                const createListCloseBtn = document.querySelectorAll(".closeCreateCLBtn");
                const newCLInput = document.querySelector("#newCLInputId");
                const newCLWarn = document.querySelector("#newCLWarnId");
                const createCLBtn = document.querySelector("#createNewCL");
                const newListId = generateRandomString();
                let inputUppBnd = 50;
                let lastCLArr;
                let lastCLArrLength = 0;
                let currLength = 0;
                let wordCount = inputUppBnd;

                // Disabling btn to prevent multiple calls
                btn.disabled = true;

                // Initialize sanitization
                preSanitizaUserInput();

                // Transitioning elements
                createCLTimer = setTimeout(() => 
                {
                    documentBody.setAttribute(`data-modal-state` , `open`);
                    createListBdr.classList.add("active");
                    clearTimeout(createCLTimer);
                }, 100);
                
                // Automatically focus on input feild after transition
                createListBdr.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    createListBdr.removeEventListener("transitionend" , handleTransitionEnd);
                    newCLInput.focus();
                });

                // checking input length
                function getWordCount(input)
                {
                    lastCLArr = postSanitizeUserInput(input).toString().trim().replace(/\s+/g, ' ');
                    lastCLArrLength = lastCLArr.length;

                    // update warn label
                    currLength = wordCount - lastCLArrLength;
                    newCLWarn.textContent = currLength;

                    if(!(newCLWarn.classList.contains("active"))) newCLWarn.classList.add("active");
                    newCLWarn.classList.toggle("empty" , currLength < 1);

                    checkBeforeCreate(lastCLArr);
                }

                // Check if name is valid (3 - 64 characters)
                function checkBeforeCreate(val)
                {
                    if((val.length <= inputUppBnd) && (val !== ""))
                    {
                        createCLBtn.disabled = false;
                        createCLBtn.classList.replace("inactiveBtn" , "midSolidBtn");
                    }
                    else
                    {
                        createCLBtn.disabled = true;
                        createCLBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                    }
                }

                newCLInput.addEventListener("input" , () => 
                {
                    getWordCount(newCLInput.value);
                });

                // Create list
                async function generateList(clName)
                {
                    // Return if there's no input
                    if((clName === ""))
                    {
                        notification(`notifyBad` , `Collection name cannot be empty`);
                        return;
                    }

                    // Compare the current and max CL library size and return if equal/greater
                    if((newCLCurrSize >= newCLMaxSize))
                    {
                        notification(`notifyBad` , `You have created the max (${newCLMaxSize}) number of collections`);
                        return;
                    }

                    // Remove the empty bdr if present
                    if((newCLCurrSize <= 0))
                    {
                        removeEmptyCLPageBdr();
                    }

                    // Add new entry into the library & sort array
                    clLibraryIndexedInv.push(
                        {
                            index: clLibraryIndexedInv.length,
                            cl_id: `${newListId.toLowerCase()}`,
                            cl_name: `${clName}`,
                            cl_updated: `${getCurrDate()}`,
                            cl_bcg: `/images/uvid-green-bcg1-light.jpg`,
                            cl_desc: `No description`,
                            cl_items: [],
                        }
                    );
                    

                    // Update user data
                    await updUsrProfFlds(
                        {
                            prof_collections: clLibraryIndexedInv
                        }
                    );

                    // Insert new list into DOM
                    let newListHTML = 
                    `
                        <div class="myListCLCatalog_ItemBase">
                            <div class="myListCLCatalog_ItemBdr">
                                <div class="myListCLCatalog_ItemBox">
                                    <div class="myListCLCatalog_ItemStackBdr">
                                        <div class="myListCLCatalog_ItemStackBox">
                                            <div class="myListCLCatalog_ItemStackLvlAll myListCLCatalog_ItemStackLvl3"></div>
                                            <div class="myListCLCatalog_ItemStackLvlAll myListCLCatalog_ItemStackLvl2"></div>
                                            <div class="myListCLCatalog_ItemStackLvlAll myListCLCatalog_ItemStackLvl1">
                                                <div class="myListCLCatalog_ItemThumbBdr">
                                                    <div class="myListCLCatalog_ItemThumbBox">
                                                        <div class="img_preload_box">
                                                            <div class="img_preload_sibling"></div>
                                                            <img loading="lazy" 
                                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                                src="/images/uvid-green-bcg1-light.jpg" alt="Thumbnail image for the collection: ${clName}" class="myListCLCatalog_ItemThumbImg"
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="myListCLCatalog_ItemDetBase">
                                        <div class="myListCLCatalog_ItemDetBdr">
                                            <div class="myListCLCatalog_ItemDetBox">
                                                <div class="myListCLCatalog_ItemDetMajorBox">
                                                    <div class="myListCLCatalog_ItemDetMajorText myListCLCatalog_ItemDetTitleText">${clName}</div>
                                                </div>
                                                <div class="myListCLCatalog_ItemDetMinorBox">
                                                    <div class="myListCLCatalog_ItemDetMinorIcon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListCLCatalog_ItemDetMinorSvg">
                                                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                            <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                            <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                            <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                        </svg>
                                                    </div>
                                                    <p class="myListCLCatalog_ItemDetMinorText myListCLCatalog_ItemCountText">0 items</p>
                                                </div>
                                                <div class="myListCLCatalog_ItemDetMinorBox">
                                                    <p class="myListCLCatalog_ItemDetMinorText myListCLCatalog_ItemYearText">Updated on ${getCurrDate()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="myListCLCatalog_ItemOpenCLBdr">
                                        <button type="button" class="myListCLCatalog_ItemOpenCLBtn"></button>
                                    </div>
                                    <div class="myListCLCatalog_ItemBadgeBdr clDeleteBtn" title="Delete">
                                        <div class="myListCLCatalog_ItemBadgeBox">
                                            <div class="myListCLCatalog_ItemBadgeIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListCLCatalog_ItemBadgeSvg">
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

                    clCatalogGrid.insertAdjacentHTML(`beforeend` , newListHTML);

                    // Increase the collection size
                    newCLCurrSize++;

                    // Notify user of the newly created collection
                    notification(`notifyGood` , `"${clName}" was created successfully`);

                    // Update the sorting if 2nd/3rd option was is currently selected
                    if((clBodySortTabIndex == 1))
                    {
                        // Sort by "A-Z"
                        sortCLByName(clLibraryIndexedInv, "cl_name", "A-Z");
                        generateCLCards(clLibraryIndexedInv);
                    }
                    else if((clBodySortTabIndex == 2))
                    {
                        // Sort by "Z-A"
                        sortCLByName(clLibraryIndexedInv, "cl_name", "A-Z");
                        generateCLCards(clLibraryIndexedInv);
                    }
                
                    addOpenCLListeners();
                    addDelCLEventListeners();
                    closeCreateCL();
                }

                createCLBtn.addEventListener("click" , () => 
                {
                    createCLBtn.disabled = true;
                    generateList(postSanitizeUserInput(newCLInput.value).toString().trim().replace(/\s+/g, ' '));
                });

                // Create list by pressing the "Enter" key
                newCLInput.addEventListener("keyup" , (e) => 
                {
                    if((e.key === "Enter"))
                    {
                        createCLBtn.click();
                    }
                });


                // Closes the createList modal
                function closeCreateCL()
                {
                    createCLBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                    newCLWarn.classList.remove("active");
                    newCLWarn.classList.remove("empty");
                    newCLInput.value = "";
                    newCLWarn.textContent = "";
                    newCLInput.disabled = true;
                    createCLBtn.disabled = true;
                    createListBdr.classList.remove("active");
                    
                    createListBdr.addEventListener("transitionend" , function handleTransitionEnd()
                    {
                        createListBdr.removeEventListener("transitionend" , handleTransitionEnd);
                        createListBdr.remove();
                        btn.disabled = false;
                        documentBody.removeAttribute(`data-modal-state`);
                    });
                }

                // Closes the modal
                createListCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeCreateCL);
                });
            }
            
            btn.addEventListener("click" , createCLFunc);
            btn.createCLFunc = createCLFunc;
        });
    }


    // Attaches Listeners to enable sorting of CL Cards
    function attachArrangeCLCardListeners()
    {
        clBodySortTabs = document.querySelectorAll(".clBodySortCtnt .clBodySortTabs");
        
        // Add selected class to the current button index
        clBodySortTabs[clBodySortTabIndex].classList.add("selected");

        // Selecting a sorting option
        clBodySortTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener("click" , tab.action);
            }
        });
        clBodySortTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                clBodySortTabIndex = index;

                // Get option number
                let optNo = tab.getAttribute("data-body-sort-opt");

                // Add selected class to the currently selected tab
                clBodySortTabs.forEach((selectedTab) => 
                {
                    selectedTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                switch(optNo)
                {
                    // Sort by date Added
                    case "0":
                        sortCLByRecAdded(clLibraryIndexedInv);
                        generateCLCards(clLibraryIndexedInv);
                        break;
                        
                    // Sort from A-Z
                    case "1":
                        sortCLByName(clLibraryIndexedInv, "cl_name", "A-Z");
                        generateCLCards(clLibraryIndexedInv);
                        break;
                        
                    // Sort from Z-A
                    case "2":
                        sortCLByName(clLibraryIndexedInv, "cl_name", "Z-A");
                        generateCLCards(clLibraryIndexedInv);
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


    // Fetches collection info
    async function fetchMyCollections()
    {
        let selectedProfile = await getSelectedProfile();

        // Return if failed to access library
        if((selectedProfile.prof_collections == undefined))
        {
            errorLoadingMyListCollection();
            return;
        }
        
        // Map the watchistlist invenory with its item index
        clLibraryIndexedInv = selectedProfile.prof_collections.map((collection, index) => 
        {
            return { ...collection, index };
        });

        // Generate the Collection cards
        generateCLCards(clLibraryIndexedInv);
        
        // Call the function for the gen menu modals
        attachGenMenuModalEventListeners();

        // Open the CL Modal if available via url
        postLoadCLModalCall();
    }


    // Filling in the content
    function generateCLCards(inv)
    {
        // Return if the user has no collections
        if((inv.length <= 0))
        {
            insertEmptyCLBdr();
            return;
        }

        // Remove the empty bdr
        removeEmptyCLPageBdr();

        // Clear the Grid
        clCatalogGrid.innerHTML = "";

        // Reset the current card size
        newCLCurrSize = 0;

        // Struct to contain the cards' HTML
        let clCatalogItemBaseStruct = ``;

        
        for(let i = 0; i < inv.length; i++)
        {
            let cl = inv[i];

            clCatalogItemBaseStruct += 
            `
                <div class="myListCLCatalog_ItemBase">
                    <div class="myListCLCatalog_ItemBdr">
                        <div class="myListCLCatalog_ItemBox">
                            <div class="myListCLCatalog_ItemStackBdr">
                                <div class="myListCLCatalog_ItemStackBox">
                                    <div class="myListCLCatalog_ItemStackLvlAll myListCLCatalog_ItemStackLvl3"></div>
                                    <div class="myListCLCatalog_ItemStackLvlAll myListCLCatalog_ItemStackLvl2"></div>
                                    <div class="myListCLCatalog_ItemStackLvlAll myListCLCatalog_ItemStackLvl1">
                                        <div class="myListCLCatalog_ItemThumbBdr">
                                            <div class="myListCLCatalog_ItemThumbBox">
                                                <div class="img_preload_box">
                                                    <div class="img_preload_sibling"></div>
                                                    <img loading="lazy" 
                                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                        src="${cl.cl_bcg}" alt="Thumbnail image for the collection: ${cl.cl_name}" class="myListCLCatalog_ItemThumbImg"
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="myListCLCatalog_ItemDetBase">
                                <div class="myListCLCatalog_ItemDetBdr">
                                    <div class="myListCLCatalog_ItemDetBox">
                                        <div class="myListCLCatalog_ItemDetMajorBox">
                                            <div class="myListCLCatalog_ItemDetMajorText myListCLCatalog_ItemDetTitleText">${cl.cl_name}</div>
                                        </div>
                                        <div class="myListCLCatalog_ItemDetMinorBox">
                                            <div class="myListCLCatalog_ItemDetMinorIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListCLCatalog_ItemDetMinorSvg">
                                                    <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                                                </svg>
                                            </div>
                                            <p class="myListCLCatalog_ItemDetMinorText myListCLCatalog_ItemCountText">${cl.cl_items.length} items</p>
                                        </div>
                                        <div class="myListCLCatalog_ItemDetMinorBox">
                                            <p class="myListCLCatalog_ItemDetMinorText myListCLCatalog_ItemYearText">Updated on ${cl.cl_updated}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="myListCLCatalog_ItemOpenCLBdr">
                                <button type="button" class="myListCLCatalog_ItemOpenCLBtn"></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Increase the collection size
            newCLCurrSize++;
        }

        // Insert items into the DOM
        clCatalogGrid.insertAdjacentHTML(`beforeend` , clCatalogItemBaseStruct);

        // Add listeneners
        addOpenCLListeners();
        addDelCLEventListeners();
    }


    // Adding Event listeners for Opening collection modal
    function addOpenCLListeners()
    {

        let myListCLCatalogItemOpenCLBtn = document.querySelectorAll(".myListCLCatalog_ItemOpenCLBtn");

        myListCLCatalogItemOpenCLBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        myListCLCatalogItemOpenCLBtn.forEach((btn, i) => 
        {
            const action = () => 
            {
                myListCLCatalogItemOpenCLBtn.forEach(item => item.disabled = true);
                clBodyCardIndex = i;
                openCLModal();
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }


    // Opening CL modal via after page initialization
    function postLoadCLModalCall()
    {
        // Get the path from the url
        let cl_specific_path = hash_parts[3];

        // Return if path doesn't exist
        if((cl_specific_path == undefined) || (cl_specific_path == null) || (cl_specific_path === '')) return;

        // If path exits compare it to the id of the collection
        let cl_specific_item = clLibraryIndexedInv.filter((item) => 
        {
            return cl_specific_path.toLowerCase() === item.cl_id.toLowerCase();
        });

        // Simulate a click on the collection card that matches the path
        if(cl_specific_item.length > 0)
        {
            document.querySelectorAll(`.myListCLCatalog_ItemOpenCLBtn`)[cl_specific_item[0].index].click();
        }
        else
        {
            // If no match was found, remove the value from the url
            updURLforCLModal('');
        }
    }






// COLLECTIONS MODAL


    // Opens the modal containing the info for a single collection
    async function openCLModal()
    {
        // Update query selectors
        clModalBaseBarBdr = document.querySelector(".clModalBaseBarBdr");
        clModalBaseTitleText = document.querySelector(".clModalBaseTitleText");
        clModalBaseCloseBtn = document.querySelector(".clModalBaseCloseBtn");
        clModalHeadBase = document.querySelector(".clModalHeadBase");
        clModalHeaderBcgImg = document.querySelector(".clModalHeader_BcgImg");
        clModalHeaderThumbImg = document.querySelector(".clModalHeader_thumbImg");
        clModalHeader_DetInfo_TitleText = document.querySelector(".clModalHeader_DetInfo_TitleText");
        clModalHeader_DetInfo_TagsCountText = document.querySelector(".clModalHeader_DetInfo_TagsCountText");
        clModalHeader_DetInfo_TagsUpdateText = document.querySelector(".clModalHeader_DetInfo_TagsUpdateText");
        clModalHeader_DetInfo_DescText = document.querySelector(".clModalHeader_DetInfo_DescText");
        clModalGridBox = document.querySelector(".clModalGridBox");
        clModalActionMenuBdr = document.querySelector(".clModalAction_MenuBdr");
        clModalSortTypeText = document.querySelector(".clModalCtnt_sortStatusText .status_type");
        clModalSortOrderText = document.querySelector(".clModalCtnt_sortStatusText .status_order");
        closeCLModalTimer;

        // Get selected profile to access a shows watch status
        const selectedProfile = await getSelectedProfile();
        const profWL = selectedProfile?.prof_watchlist || [];

        // Setting the titlebar's width
        let clModalBoxScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Getting scrollbar width
        clModalBox.addEventListener("scroll" , toggleModalBar);

        // For scrollbars that are hidden
        if(clModalBoxScrollbarWidth == 0)
        {
            // If device is not mobile set to 0.625rem
            if(!(window.matchMedia("(hover: none)").matches)) clModalBoxScrollbarWidth = 10;
        }
        clModalBaseBarBdr.setAttribute(`style` , `--clModalBoxScrollbarWidth: ${clModalBoxScrollbarWidth}px`);

        // Setting the Background
        clModalHeaderBcgImg.setAttribute(`src` , `${clLibraryIndexedInv[clBodyCardIndex].cl_bcg}`);

        // Setting the Thumbnail
        clModalHeaderThumbImg.setAttribute(`src` , `${clLibraryIndexedInv[clBodyCardIndex].cl_bcg}`);

        // Setting the Header title
        clModalHeader_DetInfo_TitleText.textContent = `${clLibraryIndexedInv[clBodyCardIndex].cl_name}`;

        // Setting the title on navbar
        clModalBaseTitleText.textContent = `${clLibraryIndexedInv[clBodyCardIndex].cl_name}`;

        // Setting the description
        updCLDesc(clLibraryIndexedInv[clBodyCardIndex].cl_desc);

        // Setting the time Updated
        clModalHeader_DetInfo_TagsUpdateText.textContent = `${clLibraryIndexedInv[clBodyCardIndex].cl_updated}`;

        // Setting the Item count
        await updCLModalShowCount();

        // Setting the default sort option
        clModalSortTypeText.textContent = `Manual`;
        clModalSortOrderText.textContent = `Asc ↑`;

        // Filling in the grid content
        for(let g = 0; g < clLibraryIndexedInv[clBodyCardIndex].cl_items.length; g++)
        {
            const itemId = clLibraryIndexedInv[clBodyCardIndex].cl_items[g].cl_itemId;
            const itemIdLC = itemId.split('/')[2];
            const itemMatch = infoInvLinkMap.get(itemIdLC);
            const itemWL = profWL.filter(item => item.wl_item === itemId) || [];
            const itemStatus = itemWL[0]?.wl_status || 0;
            
            // If match found, add to grid
            if (itemMatch)
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
                } = itemMatch;

                clModalGrid_CardBdr = document.createElement("li");
                clModalGrid_CardBdr.classList.add("clModalGrid_CardBdr");
                clModalGrid_CardBdr.classList.add("genDraggableElement");
                clModalGrid_CardBdr.setAttribute(`data-show-index` , g);
                clModalGrid_CardBdr.setAttribute(`data-show-status-opt` , itemStatus);
                
                let itemStruct = 
                `
                    <div class="clModalGrid_CardBox">
                        <div class="clModalGrid_CardHandleBdr" draggable="true">
                            <div class="clModalGrid_CardHandleBox">
                                <div class="clModalGrid_CardHandleIcon genDraggableHandles">
                                    <svg class="clModalGrid_CardHandleSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="clModalGrid_CardRankBdr">
                            <div class="clModalGrid_CardRankBox">
                                <div class="clModalGrid_CardRankNo">${g + 1}</div>
                            </div>
                        </div>
                        <div onclick="window.open('${show_link}' , '_self')" data-card-link="${show_link}" class="clModalGrid_CardCtntBdr">
                            <div class="clModalGrid_CardCtntBox">
                                <div class="clModalGrid_CardCtntThumbBdr">
                                    <div class="clModalGrid_CardCtntThumbBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="${show_background}" alt="Landscape thumbnail image for ${show_title}" class="clModalGrid_CardCtntThumbImg img_large"
                                            >
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="${show_foreground}" alt="Potrait thumbnail image for ${show_title}" class="clModalGrid_CardCtntThumbImg img_small"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="clModalGrid_CardCtntDetBdr">
                                    <div class="clModalGrid_CardCtntDetBox">
                                        <div class="clModalGrid_CardCtnt_DetTitleBox">
                                            <div class="clModalGrid_CardCtnt_DetTitleText">${show_title}</div>
                                        </div>
                                        <div class="clModalGrid_CardCtnt_DetTagBdr">
                                            <div class="clModalGrid_CardCtnt_DetTagBox">
                                                <div class="clModalGrid_CardCtnt_DetTagSectBox clModalGrid_CardCtnt_DetTagScoreBox">
                                                    <div class="clModalGrid_CardCtnt_DetTagScoreIcon">
                                                        <svg class="clModalGrid_CardCtnt_DetTagScoreSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="">
                                                            <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                        </svg>
                                                    </div>
                                                    <div class="clModalGrid_CardCtnt_DetTagSectText clModalGrid_CardCtnt_DetTagScoreText clModalGridCard_Score">${show_scores}</div>
                                                </div>
                                                <div class="clModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="clModalGrid_CardCtnt_DetTagSectText clModalGrid_CardCtnt_DetTagTypeText clModalGridCard_Type">${show_type}</div>
                                                </div>
                                                <div class="clModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="clModalGrid_CardCtnt_DetTagSectText clModalGrid_CardCtnt_DetTagReleaseText clModalGridCard_Year">${show_year}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clModalGrid_CardCtnt_DetDescBox">
                                            <p class="clModalGrid_CardCtnt_DetDescText">${show_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clModalActionFence clModalAction_GridCardFence">
                            <div class="clModalActionBase">
                                <div class="clModalActionBdr">
                                    <div class="clModalActionBox">
                                        <button type="button" class="clModalActionBtn openGenMenuModalBtn" data-gen-menu-modal-type="cl_modal_cards">
                                            <div class="clModalActionBtnIcon">
                                                <svg class="clModalActionBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
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
                clModalGrid_CardBdr.innerHTML = itemStruct;
                
                // Fill up the array
                clModalDfltInv.push(itemMatch);
                
                // Append item to the grid
                clModalGridBox.appendChild(clModalGrid_CardBdr);
            }
            else
            {
                console.error(`${itemIdLC} not found`);
            }
        }

        // Create map with index
        initCLModalIndexedInv();

        // Opening the modal
        clModalBase.classList.add("active");
        document.body.classList.add("bodystop");
        clModalGrid_CardBdr = document.querySelectorAll(".clModalGrid_CardBdr");

        // Updating url
        updURLforCLModal(`${clLibraryIndexedInv[clBodyCardIndex].cl_id}`);

        // Closing the modal
        clModalBaseCloseBtn.disabled = false;
        clModalBaseCloseBtn.addEventListener("click" , () => 
        {
            // Diable button
            clModalBaseCloseBtn.disabled = true;

            // Remove the value from the url
            updURLforCLModal('');

            // Regenerate the cl body cards
            generateCLCards(clLibraryIndexedInv);

            // Closethe modal
            clModalBox.scrollTo(null, 0);
            clModalBase.classList.remove("active");
            document.body.classList.remove("bodystop");

            // Clear the array
            clModalDfltInv.length = 0;
            clModalIndexedInv.length = 0;

            // Resets the sort & filters
            clModalSortTypeTabIndex = 0;
            clModalSortOrderTabIndex = 0;
            clModalFilterStatusTabIndex = 0;
            clModalFilterTypeTabIndex = 0;

            // Removes the content in the modal
            clModalBase.addEventListener("transitionend" , function handleTransitionEnd()
            {
                clModalBase.removeEventListener("transitionend" , handleTransitionEnd);
                clModalHeaderBcgImg.setAttribute(`src` , `/images/uvid-green-bcg1-light.jpg`);
                clModalHeaderThumbImg.setAttribute(`src` , `/images/uvid-green-bcg1-light.jpg`);
                clModalHeader_DetInfo_TitleText.textContent = `N/A`;
                clModalHeader_DetInfo_TagsCountText.textContent = `N/A`;
                clModalHeader_DetInfo_TagsUpdateText.textContent = `N/A`;
                clModalHeader_DetInfo_DescText.textContent = `N/A`;
                clModalSortTypeText.textContent = `N/A`;
                clModalSortOrderText.textContent = `N/A`;
                clModalGrid_CardBdr.forEach((card) => 
                {
                    card.remove();
                });
            });
        });

        // Attaches listeners
        attachCLModalListeners();
    }

    // Attaching listeners
    function attachCLModalListeners()
    {
        attachReadFullDescCLModalEventListeners();
        attachEditCLEventListeners();
        attachAddToCLEventListeners();
        attachAddMultiShowsToCLListenres();
        addDelCLEventListeners();
        attachGenMenuModalEventListeners();
        addDragAndSortListEventListeners();
        attachAddShowsToCLListeners();
    }


    // Create a map of the items in the collection
    function initCLModalIndexedInv()
    {
        clModalIndexedInv = clModalDfltInv.map((show, index) => 
        {
            return { ...show, index };
        });
    }


    // Generates the CL cards
    function generateCLModalCards(arr, order = 'asc')
    {
        // CLear the pevious clModalGridBox
        clModalGridBox.innerHTML = "";

        // Fill in the clModalGridBox with the provided array
        for(let i = 0; i < arr.length; i++)
        {
            let rank = order == 'dsc' ? (arr.length - i) : (i + 1);
            let item = arr[i]; 
            let itemStruct = 
            `
                <li class="clModalGrid_CardBdr genDraggableElement" data-show-index="${i}" data-show-status-opt="${item.show_watch_status}">
                    <div class="clModalGrid_CardBox">
                        <div class="clModalGrid_CardHandleBdr" draggable="true">
                            <div class="clModalGrid_CardHandleBox">
                                <div class="clModalGrid_CardHandleIcon genDraggableHandles">
                                    <svg class="clModalGrid_CardHandleSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="clModalGrid_CardRankBdr">
                            <div class="clModalGrid_CardRankBox">
                                <div class="clModalGrid_CardRankNo">${rank}</div>
                            </div>
                        </div>
                        <div onclick="window.open('${item.show_link}' , '_self')" data-card-link="${item.show_link}" class="clModalGrid_CardCtntBdr">
                            <div class="clModalGrid_CardCtntBox">
                                <div class="clModalGrid_CardCtntThumbBdr">
                                    <div class="clModalGrid_CardCtntThumbBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="${item.show_background}" alt="Landscape thumbnail image for ${item.show_title}" class="clModalGrid_CardCtntThumbImg img_large"
                                            >
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="${item.show_background}" alt="Potrait thumbnail image for ${item.show_title}" class="clModalGrid_CardCtntThumbImg img_small"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="clModalGrid_CardCtntDetBdr">
                                    <div class="clModalGrid_CardCtntDetBox">
                                        <div class="clModalGrid_CardCtnt_DetTitleBox">
                                            <div class="clModalGrid_CardCtnt_DetTitleText">${item.show_title}</div>
                                        </div>
                                        <div class="clModalGrid_CardCtnt_DetTagBdr">
                                            <div class="clModalGrid_CardCtnt_DetTagBox">
                                                <div class="clModalGrid_CardCtnt_DetTagSectBox clModalGrid_CardCtnt_DetTagScoreBox">
                                                    <div class="clModalGrid_CardCtnt_DetTagScoreIcon">
                                                        <svg class="clModalGrid_CardCtnt_DetTagScoreSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="">
                                                            <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                        </svg>
                                                    </div>
                                                    <div class="clModalGrid_CardCtnt_DetTagSectText clModalGrid_CardCtnt_DetTagScoreText clModalGridCard_Score">${item.show_scores}</div>
                                                </div>
                                                <div class="clModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="clModalGrid_CardCtnt_DetTagSectText clModalGrid_CardCtnt_DetTagTypeText clModalGridCard_Type">${item.show_type}</div>
                                                </div>
                                                <div class="clModalGrid_CardCtnt_DetTagSectBox">
                                                    <div class="clModalGrid_CardCtnt_DetTagSectText clModalGrid_CardCtnt_DetTagReleaseText clModalGridCard_Year">${item.show_year}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clModalGrid_CardCtnt_DetDescBox">
                                            <p class="clModalGrid_CardCtnt_DetDescText">${item.show_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clModalActionFence clModalAction_GridCardFence">
                            <div class="clModalActionBase">
                                <div class="clModalActionBdr">
                                    <div class="clModalActionBox">
                                        <button type="button" class="clModalActionBtn openGenMenuModalBtn" data-gen-menu-modal-type="cl_modal_cards">
                                            <div class="clModalActionBtnIcon">
                                                <svg class="clModalActionBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
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
            clModalGridBox.insertAdjacentHTML(`beforeend` , itemStruct);
        }

        // Re-attach selector(s)
        clModalGrid_CardBdr = document.querySelectorAll(".clModalGrid_CardBdr");

        // Re-attach event listeners here
        attachCLModalListeners();
    }


    // Updates multiple collection properties
    async function updClModalPpty(fldsToUpd = {})
    {
        if((typeof fldsToUpd === "undefined") || (typeof fldsToUpd !== "object")) return;

        // Update each property
        for(const [fld, value] of Object.entries(fldsToUpd)) 
        {
            clLibraryIndexedInv[clBodyCardIndex][fld] = value;

            switch(fld)
            {
                case 'cl_name':
                    clModalBaseTitleText.textContent = `${value}`;
                    clModalHeader_DetInfo_TitleText.textContent = `${value}`;
                    break;
                    
                case 'cl_desc':
                    updCLDesc(value);
                    break;
                    
                case 'cl_updated':
                    clModalHeader_DetInfo_TagsUpdateText.textContent = `${value}`;
                    break;
                    
                case 'cl_bcg':
                    clModalHeaderBcgImg.setAttribute(`src` , `${value}`);
                    clModalHeaderThumbImg.setAttribute(`src` , `${value}`);
                    break;

                default:
                    console.info(`No matching field for "${value}"`);
                    break;
            }
        }

        // Update the "Last updated" property
        clLibraryIndexedInv[clBodyCardIndex].cl_updated = `${getCurrDate()}`;
        clModalHeader_DetInfo_TagsUpdateText.textContent = `${clLibraryIndexedInv[clBodyCardIndex].cl_updated}`;

        // Update user data
        try
        {
            await updUsrProfFlds(
                {
                    prof_collections: clLibraryIndexedInv
                }
            );
        }
        catch(error)
        {
            console.error(error);
            notification(`notifyBad`, `Failed to save changes`)
        }
    }


    // Update the collection description
    function updCLDesc(ctnt)
    {
        let desc_txt = document.querySelector(".clModalHeader_DetInfo_DescText");
        desc_txt.innerHTML = "";

        const desc_lines = ctnt.split("<br>");
        desc_lines.forEach((line, index) =>
        {
            const txtNode = document.createTextNode(line);
            desc_txt.appendChild(txtNode);

            // Insert line break after each newline
            if((index < (desc_lines.length - 1)))
            {
                desc_txt.appendChild(document.createElement("br"));
            }
        });
    }
    

    // Update the collection total show count
    async function updCLModalShowCount()
    {
        // Updating the count text
        clModalHeader_DetInfo_TagsCountText.textContent = `${clLibraryIndexedInv[clBodyCardIndex].cl_items.length} items`;
    }


    // Adds the 'sticky' class to the cl modal title bar to display the cl name
    // and provide options for actions to be performed on the collection
    function toggleModalBar(event)
    {
        if(clModalBox.scrollTop > clModalHeadBase.getBoundingClientRect().height)
        {
            clModalBaseBarBdr.classList.add("sticky");
        }
        else
        {
            clModalBaseBarBdr.classList.remove("sticky");
        }
    }


    // Attaches listener to let users view the full description of their collection
    function attachReadFullDescCLModalEventListeners()
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
                readFullDescBdr.innerHTML = readFullDescCLStruct;
                documentCtnt.appendChild(readFullDescBdr);

                const readFullDescCloseBtn = document.querySelectorAll(".closeReadFullDescCLBtn");
                const readFullDescBox = document.querySelector(".readFullDescBox");
                const readFullDescCtntBox = document.querySelector(".genAtnModalDescTextBox");

                // Disabling btn to prevent multiple calls
                btn.disabled = true;

                // Filling in the content
                readFullDescCtntBox.innerHTML = `${document.querySelector(".clModalHeader_DetInfo_DescText").innerHTML}`;

                // Transitioning elements
                createCLTimer = setTimeout(() => 
                {
                    readFullDescBdr.classList.add("active");
                    readFullDescBox.classList.add("active");
                    clearTimeout(createCLTimer);
                }, 100);

                // Closes the readFullDesc modal
                function closeReadFullDescCL()
                {
                    readFullDescBdr.classList.remove("active");
                    readFullDescBox.classList.remove("active");

                    createCLTimer = setTimeout(() => 
                    {
                        readFullDescBdr.remove();
                        openReadFullDesc.forEach(btn => 
                        {
                            btn.addEventListener("click" , () => 
                            {
                                btn.disabled = false;
                            });
                        });
                        clearTimeout(createCLTimer);

                    }, 300);
                }

                // Closes the modal
                readFullDescCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeReadFullDescCL);
                });
            }
            
            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }


    // Add Shows to your collection
    function attachAddShowsToCLListeners()
    {
        let addShowToCLBtn = document.querySelectorAll(".addShowsToCL");

        addShowToCLBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        addShowToCLBtn.forEach((btn) => 
        {
            const add_to_cl_atn = () =>
            {
                let ttlCLSize = oneCLMaxSize - clLibraryIndexedInv[clBodyCardIndex].cl_items.length;
                
                // Return if user has reached the list limit
                if((ttlCLSize) <= 0)
                {
                    notification(`notifyBad` , `You have reached the list limit: ${oneCLMaxSize}`);
                    return;
                }
                preAddShowToCLModal();
            }
            btn.addEventListener("click" , add_to_cl_atn);
            btn.action = add_to_cl_atn;
        });
    }

    // Constructs the modal for adding shows to your collection
    function preAddShowToCLModal()
    {
        let addShowToCLStruct = 
        `
            <div class="quickSearchBase addShowToCLBase">
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
                                <input type="text" name="quickSearchInputFieldName" id="addShowToCLInputField" class="quickSearchInputFieldClass" placeholder="Search..">
                                <label for="addShowToCLInputField" class="quickSearchInputIcon quickSearchInputRightIcon quickSearchClearInput">
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

        documentBody.insertAdjacentHTML(`beforeend` , addShowToCLStruct);
        timer = setTimeout(() => 
        {
            clearTimeout(timer);
            preSanitizaUserInput();
            initAddShowToCLModal();
        }, 10);
    }

    // Initializes the modal for myLists to search up shows to add to their collection
    function initAddShowToCLModal()
    {
        
        // Definitions
        addShowToCLBase = document.querySelector(".addShowToCLBase");
        let addShowToCLBcg = addShowToCLBase.querySelector(".quickSearchBcg");
        let addShowToCLInputField = addShowToCLBase.querySelector("#addShowToCLInputField");
        let addShowToCLClearInput = addShowToCLBase.querySelector(".quickSearchClearInput");
        let addShowToCLResultBox = addShowToCLBase.querySelector(".quickSearchResultBox");
        let addShowToCLQuery;

        // Display modal
        addShowToCLBase.classList.add("active");
        addShowToCLBase.addEventListener("transitionend" , function handleTransitionEnd()
        {
            documentBody.setAttribute(`data-modal-state` , `open`);
            addShowToCLInputField.focus();
            addShowToCLBase.removeEventListener("transitionend" , handleTransitionEnd);
        });


        // Function to display search results
        const displayAddShowToCLResult = (items) => 
        {
            // empty the array
            addShowToCLArray.length = 0;

            // Only seven results are displayed
            const resultRange = items.slice(0, 7);

            addShowToCLResultBox.innerHTML = resultRange.map((item) => 
            {
                const { show_link, show_foreground, show_title, show_scores, show_type, show_year, show_airing_status } = item;
                if((addShowToCLQuery.length > 0) && (addShowToCLQuery != undefined) && (addShowToCLQuery != null) && (addShowToCLQuery != " "))
                {
                    // Add found items into the array
                    addShowToCLArray.push(item);
                    return `
                        <div class="quickSearchResultCardBdr addItemToCLBtn" data-link="${show_link}">
                            <div class="quickSearchResultCardBox">
                                <div class="quickSearchResultCardThumbBdr">
                                    <div class="quickSearchResultCardThumbBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                                src="${show_foreground}" alt="Thumbnail image of ${show_title}" class="quickSearchResultCardThumbImg"
                                            >
                                        </div>
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
            addItemToCL();
        };

        // Filter and display result based on myList's entry
        function filterAddShowToCLInput()
        {
            addShowToCLQuery = postSanitizeUserInput(addShowToCLInputField.value.toString().trim().toLowerCase());

            // Filter Items
            const filteredData = searchInventory.filter((item) => item.show_searchKey.toLowerCase().includes(addShowToCLQuery));
            displayAddShowToCLResult(filteredData);
            
            // Toggle the clear input & catalog Icons
            if(addShowToCLInputField.value.length > 0)
            {
                addShowToCLClearInput.classList.add("isTyping");
                return;
            }
            addShowToCLClearInput.classList.remove("isTyping");
        }
        
        // Get myList entry
        addShowToCLInputField.addEventListener("input", filterAddShowToCLInput);

        // Clears the search field
        addShowToCLClearInput.addEventListener("click" , () => 
        {
            addShowToCLInputField.value = "";
            addShowToCLClearInput.classList.remove("active");
            filterAddShowToCLInput();
        });

        // Close Quick Search
        addShowToCLBcg.addEventListener("click" , closeAddShowToCL);
    }

    // Closes the modal for adding shows to yur collection
    function closeAddShowToCL()
    {
        addShowToCLBase.classList.remove("active");
        documentBody.removeAttribute(`data-modal-state`);
        addShowToCLBase.addEventListener("transitionend" , function handleTransitionEnd()
        {
            addShowToCLBase.removeEventListener("transitionend" , handleTransitionEnd);
            addShowToCLBase.remove();
        });
    }

    // Performs the addition of the selected show to the collection
    function addItemToCL()
    {
        const btn = document.querySelectorAll('.addItemToCLBtn');

        btn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        btn.forEach((btn, index) => 
        {
            const action = async () =>
            {
                btn.disabled = true;

                // Check if show exists in collection
                let thisItem = clModalIndexedInv.filter(item => item.show_link === addShowToCLArray[index].show_link)

                if(thisItem.length <= 0)
                {
                    // Add new item into the library array
                    if(clLibraryIndexedInv[clBodyCardIndex].cl_items)
                    {
                        clLibraryIndexedInv[clBodyCardIndex].cl_items.push(
                            {
                                cl_itemId: `${addShowToCLArray[index].show_link}`,
                            }
                        );
                    }
            
                    // Set "Last updated"
                    await updClModalPpty(
                    {
                        cl_updated: getCurrDate()
                    });

                    // Adds item to the default & sort array of that specific collection
                    clModalDfltInv.push(addShowToCLArray[index]);
                    initCLModalIndexedInv();

                    // Append item to the DOM
                    sortCLModalCards(clModalSortTypeTabIndex);

                    // Update Show Count
                    await updCLModalShowCount();

                    // Notify users
                    notification(`notifyGood` , `Show added successfully`);

                    // Close the modal
                    closeAddShowToCL();
                }
                else
                {
                    notification(`notifyBad` , `Show already in collection`);
                    btn.disabled = false;
                }
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }


    // Editing the collection
    function attachEditCLEventListeners()
    {
        let openEditCLBtn = document.querySelectorAll(".openEditCLBtn");

        openEditCLBtn.forEach(btn => 
        {
            if(btn.editCLFunc)
            {
                btn.removeEventListener(`click` , btn.editCLFunc);
            }
        });

        openEditCLBtn.forEach(btn => 
        {
            const editCLFunc = () =>
            {
                const editListBdr = document.createElement("div");
                editListBdr.classList.add("genAtnModalBdr");
                editListBdr.innerHTML = editCLStruct;
                documentCtnt.appendChild(editListBdr);

                const editListCloseBtn = document.querySelectorAll(".closeEditCLModalBtn");
                const editSectBtn = document.querySelectorAll(".editSectionBtn");
                const editSectBdr = document.querySelectorAll(".newCLBdr");
                const closeEditSectBtn = document.querySelectorAll(".closeEditSectionBtn");
                const editCLInput = document.querySelectorAll(".editCLInputClass");
                const editCLWarn = document.querySelectorAll("#editCLWarnId");
                const saveCLEditBtn = document.querySelectorAll(".saveCLEditBtn");

                // Initialize sanitization
                preSanitizaUserInput();

                // Disabling btn to prevent multiple calls
                btn.disabled = true;

                // Transitioning elements
                editCLTimer = setTimeout(() => 
                {
                    documentBody.setAttribute(`data-modal-state` , `open`);
                    editListBdr.classList.add("active");
                    clearTimeout(editCLTimer);
                }, 100);

                // Setting word limit
                editCLWarn.forEach((warn) => 
                {
                    warn.textContent = warn.getAttribute("data-word-limit");
                });

                // Opening the edit fields
                editSectBtn.forEach((sectBtn, index) => 
                {
                    sectBtn.addEventListener("click" , () => 
                    {
                        editSectBtn.forEach((openSect) => 
                        {
                            openSect.classList.add("inactive");
                        });
                        editSectBdr.forEach((openSect) => 
                        {
                            openSect.classList.remove("active");
                        });
                        saveCLEditBtn.forEach((btn) => 
                        {
                            btn.classList.replace("midSolidBtn" , "inactiveBtn");
                            btn.disabled = true;
                        });
                        editCLInput.forEach((field) => 
                        {
                            field.disabled = true;
                        });
                        sectBtn.classList.remove("inactive");
                        editSectBdr[index].classList.add("active");
                        saveCLEditBtn[index].classList.replace("midSolidBtn" , "inactiveBtn");
                        saveCLEditBtn[index].disabled = false;
                        editCLInput[index].disabled = false;
                        editCLInput[index].focus();
                    });
                });

                // Closing the edit fields
                closeEditSectBtn.forEach((sectBtn, index) => 
                {
                    sectBtn.addEventListener("click" , () => 
                    {
                        editSectBtn.forEach((openSect) => 
                        {
                            openSect.classList.remove("inactive");
                        });
                        editSectBdr.forEach((openSect) => 
                        {
                            openSect.classList.remove("active");
                        });
                        saveCLEditBtn.forEach((btn) => 
                        {
                            btn.classList.replace("midSolidBtn" , "inactiveBtn");
                            btn.disabled = true;
                        });
                        editCLInput.forEach((field) => 
                        {
                            field.disabled = true;
                        });
                    });
                });

                // Checking input length
                function getWordCount(index, fieldinput)
                {
                    fieldinput = postSanitizeUserInput(fieldinput);
                    let input = fieldinput.toString();
                    input = input.trim().replace(/\s+/g, ' ');

                    // update warn label
                    let wordCount = Number(editCLWarn[index].getAttribute(`data-word-limit`));
                    let currLength = wordCount - input.length;
                    editCLWarn[index].textContent = currLength;

                    editCLWarn[index].classList.add("active");
                    editCLWarn[index].classList.toggle("empty" , currLength < 1);

                    // Check if input length is valid
                    if((input.length <= wordCount) && (input !== ""))
                    {
                        saveCLEditBtn[index].disabled = false;
                        saveCLEditBtn[index].classList.replace("inactiveBtn" , "midSolidBtn");
                    }
                    else
                    {
                        saveCLEditBtn[index].disabled = true;
                        saveCLEditBtn[index].classList.replace("midSolidBtn" , "inactiveBtn");
                    }
                }

                editCLInput.forEach((field , index) => 
                {
                    // Fctching the fields' initial value
                    if(field.getAttribute("data-initial-value-type") == "title")
                    {
                        field.value = clLibraryIndexedInv[clBodyCardIndex].cl_name;
                    }
                    else if(field.getAttribute("data-initial-value-type") == "description")
                    {
                        field.value = clLibraryIndexedInv[clBodyCardIndex].cl_desc.replace(/<br\s*\/?>/gi, "\n");
                    }

                    // Capturing newly inputed values
                    field.addEventListener("input" , () => 
                    {
                        getWordCount(index, field.value);
                    });
                });

                // Saves call changes made
                async function saveEdit(type, ctnt)
                {
                    ctnt = postSanitizeUserInput(ctnt);
                    
                    // Update the specified property and time updated property
                    if(type == "title")
                    {
                        await updClModalPpty(
                        {
                            cl_name: ctnt
                        });
                    }
                    else if(type == "description")
                    {
                        let ctntFrmttd = ctnt.replace(/\n/g, "<br>");
                        await updClModalPpty(
                        {
                            cl_desc: ctntFrmttd
                        });
                    }

                    // Notify myList of saved edits
                    notification(`notifyGood` , `Changes saved`);
                }
                
                saveCLEditBtn.forEach((btn, index) => 
                {
                    btn.addEventListener("click" , async () => 
                    {
                        await saveEdit(btn.getAttribute("data-save-type"), editCLInput[index].value);
                        btn.classList.replace("midSolidBtn" , "inactiveBtn");
                        btn.disabled = true;
                        closeEditSectBtn[index].click();
                        closeCreateCL();
                    });
                });


                // Closes the edit collection modal
                function closeCreateCL()
                {
                    editListBdr.classList.remove("active");

                    editListBdr.addEventListener("transitionend" , function handleTransitionEnd()
                    {
                        editListBdr.removeEventListener("transitionend" , handleTransitionEnd);
                        editListBdr.remove();
                        btn.disabled = false;
                        documentBody.removeAttribute(`data-modal-state`);
                    });
                }

                // Closes the modal
                editListCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeCreateCL);
                });
            }
            
            btn.addEventListener("click" , editCLFunc);
            btn.editCLFunc = editCLFunc;
        });
    }


    // Add all show in current collection to another collection
    function attachAddMultiShowsToCLListenres()
    {
        let openMultiAddToCLBtn = document.querySelectorAll(".openMultiAddToCLBtn");

        openMultiAddToCLBtn.forEach((oldBtn) => 
        {
            if(oldBtn.multi_action)
            {
                oldBtn.removeEventListener("click" , oldBtn.multi_action);
            }
        });
        openMultiAddToCLBtn.forEach((newBtn) => 
        {
            const multi_add_atn = () =>
            {
                // Disable button to prevent mutiple clicks
                newBtn.disabled = true;

                // Create an temp array of all shows in that collection
                let tempCLCtntArr = [];

                for(let i = 0; i < clLibraryIndexedInv[clBodyCardIndex].cl_items.length; i++)
                {
                    tempCLCtntArr.push(
                        {
                            cl_itemId: `${clLibraryIndexedInv[clBodyCardIndex].cl_items[i].cl_itemId}`,
                        }
                    );
                }

                // Set general Link to array
                genShowLinkForCL = tempCLCtntArr;

                // Create a temp button to open the collections modal
                let tempOpenCLTimer;
                let tempOpenCLBtn = document.createElement("button");
                tempOpenCLBtn.classList.add("openAddToCLBtn");
                tempOpenCLBtn.classList.add("genBtnBox");
                tempOpenCLBtn.classList.add("hide");

                documentCtnt.insertAdjacentElement(`beforeend`, tempOpenCLBtn);

                // Reinitialise event listeners
                attachAddToCLEventListeners();

                // Simulate click event
                tempOpenCLBtn.click();

                // Remove Button
                tempOpenCLTimer = setTimeout(() => 
                {
                    clearTimeout(tempOpenCLTimer);
                    tempOpenCLBtn.remove();

                    // Re-enable button
                    newBtn.disabled = false;
                }, 10);
            }

            newBtn.addEventListener("click" , multi_add_atn);
            newBtn.multi_action = multi_add_atn;
        });
    }


    // Adding Event listeners for deleting a collection
    function addDelCLEventListeners()
    {
        let clDeleteBtn = document.querySelectorAll(".clDeleteBtn");

        clDeleteBtn.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click" , btn.action);
            }
        });

        clDeleteBtn.forEach((btn, i) => 
        {
            const action = () => 
            {
                initConfirmModal(
                    `Are you sure you want to delete this collection?`,
                    `Note: This action cannot be undone`,
                    `Yes`,
                    `No`,
                    deleteCollection
                );
            }

            btn.addEventListener("click" , action);
            btn.action = action;
        });
    }

    // Deleting your collections
    async function deleteCollection()
    {

        // Delete from the collection 
        clLibraryIndexedInv = clLibraryIndexedInv.filter((item) => item.cl_id != clLibraryIndexedInv[clBodyCardIndex].cl_id);

        // Update user data
        await updUsrProfFlds(
            {
                prof_collections: clLibraryIndexedInv
            }
        );

        // Remove item from catalog
        let delItem = document.getElementsByClassName("myListCLCatalog_ItemBase")[clBodyCardIndex];
        delItem.remove();

        // Decrease the current collection size
        newCLCurrSize--;
        
        // Close the modal
        clModalBaseCloseBtn.click();

        // Notify myLists that the collection has been deleted
        notification(`notifyGood` , `Collection successfully deleted`);

        if((clLibraryIndexedInv <= 0))
        {
            insertEmptyCLBdr();
            return;
        }

        // Reattach listeners
        addOpenCLListeners();
        addDelCLEventListeners();
    }


    // Updates the sort of the clModalIndexInv based on the ordering of items (Darag-and-drop sorting)
    async function updCLMdlArrFromDragAndSortList()
    {
        const listItems = document.querySelectorAll(".clModalGrid_CardBdr");
        const newOrder = Array.from(listItems).map((item, newIndex) => 
        ({
            origIndex: parseInt(item.getAttribute("data-show-index")),
            newIndex
        }));
    
        // Reorder clModalIndexedInv based on new DOM orderUpdate CL Modal Map
        clModalIndexedInv.sort((a, b) => 
        {
            const indexA = newOrder.find(item => item.origIndex === a.index).newIndex;
            const indexB = newOrder.find(item => item.origIndex === b.index).newIndex;
            return indexA - indexB;
        });

        // Update CL Map and array library in profile
        if(clLibraryIndexedInv[clBodyCardIndex])
        {
            const library = clLibraryIndexedInv[clBodyCardIndex];
    
            // Create a map for quick lookup of cl_items by id
            const itemMap = new Map(library.cl_items.map(item => [item.cl_itemId, item]));
    
            // Reorder cl_items based on clModalIndexedInv order
            library.cl_items = clModalIndexedInv
                .map(modalItem => itemMap.get(modalItem.show_link)) // Match show_link to id
                .filter(item => item); // Remove undefined values if no match found
    
            // Update user data
            await updUsrProfFlds(
                {
                    prof_collections: clLibraryIndexedInv
                }
            );
        }
    }


    // Attaches Listeners to enable Sorting shows in the CL Modal
    function attachSortCLModalListeners()
    {
        // Variable Definitions
        clModalSortTypeTabs = document.querySelectorAll(".clModalSortCtnt .clModalSortTypeTabs");
        clModalSortOrderTabs = document.querySelectorAll(".clModalSortCtnt .clModalSortOrderTabs");

        clModalSortTypeTabs[clModalSortTypeTabIndex].classList.add("selected");
        clModalSortOrderTabs[clModalSortOrderTabIndex].classList.add("selected");

        clModalSortTypeText.innerHTML = clModalSortTypeTabs[clModalSortTypeTabIndex].innerHTML;
        clModalSortOrderText.innerHTML = clModalSortOrderTabs[clModalSortOrderTabIndex].innerHTML;

        // Selecting a sorting option for "Show Status"
        clModalSortTypeTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        clModalSortTypeTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                clModalSortTypeTabIndex = index;

                // Get option number
                let optNo = Number(tab.getAttribute("data-sort-type-opt"));

                // Add selected class to the currently selected tab
                clModalSortTypeTabs.forEach((activeTab) => 
                {
                    activeTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                sortCLModalCards(optNo);

                // Update the sort type & order texts
                clModalSortTypeText.textContent = tab.querySelector(".genMenuModalCtntBtnText").textContent;
                clModalSortOrderText.textContent = `Asc ↑`;
                clModalSortOrderTabIndex = 0;

            }
            tab.addEventListener("click" , action);
            tab.action = action;
        });

        // Selecting a sorting option for "Show Type"
        clModalSortOrderTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        clModalSortOrderTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index

                // Add "selected" class to the tab without it
                clModalSortOrderTabs.forEach((selectedTab) => 
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
                reverseCLArray(clModalIndexedInv);

                // Print the reversed list
                if(clModalSortOrderTabIndex == 0)
                {
                    clModalSortOrderTabIndex = 1;
                    generateCLModalCards(clModalIndexedInv, 'dsc');
                }
                else if(clModalSortOrderTabIndex == 1)
                {
                    clModalSortOrderTabIndex = 0;
                    generateCLModalCards(clModalIndexedInv);
                }

                // Update the sort type text
                clModalSortOrderText.textContent = clModalSortOrderTabs[clModalSortOrderTabIndex].querySelector(".genMenuModalCtntBtnText").textContent;

            }
            tab.addEventListener("click" , action);
            tab.action = action;
        });
    }

    // Sorts the CL Modal Cards in the provided order
    function sortCLModalCards(optNo)
    {
        switch(optNo)
        {
            // Manual
            case 0:
                generateCLModalCards(clModalIndexedInv);
                clModalGridBox.setAttribute(`data-sort-handle-visibility` , `true`);
                break;

            // Recently Added
            case 1:
                clModalGridBox.setAttribute(`data-sort-handle-visibility` , `false`);
                generateCLModalCards(clModalIndexedInv);
                break;
                
            // Recently Updated
            case 2:
                sortCLByRecUpd(clModalIndexedInv, null, 'asc');
                break;
                
            // Alphabetical
            case 3:
                clModalGridBox.setAttribute(`data-sort-handle-visibility` , `false`);
                sortCLByName(clModalIndexedInv, 'show_title', 'A-Z');
                generateCLModalCards(clModalIndexedInv);
                break;
                
            // Release
            case 4:
                clModalGridBox.setAttribute(`data-sort-handle-visibility` , `false`);
                sortCLByYear(clModalIndexedInv, 'show_year', 'asc');
                generateCLModalCards(clModalIndexedInv);
                break;
                
            // Score
            case 5:
                clModalGridBox.setAttribute(`data-sort-handle-visibility` , `false`);
                sortCLByScore(clModalIndexedInv, 'show_scores', 'asc');
                generateCLModalCards(clModalIndexedInv);
                break;
                
            // If none, display error
            default:
                notification(`notifyBad` , `An error occurred while sorting`);
                break;
        }
    }


    // Attaches Listeners to enable filtering shows in the CL Modal
    function attachFilterCLModalListeners()
    {

        // Variable Definitions
        clModalFilterStatusTabs = document.querySelectorAll(".clModalFilterCtnt .clModalFilterStatusTabs");
        clModalFilterTypeTabs = document.querySelectorAll(".clModalFilterCtnt .clModalFilterTypeTabs");
        
        clModalFilterStatusTabs[clModalFilterStatusTabIndex].classList.add("selected");
        clModalFilterTypeTabs[clModalFilterTypeTabIndex].classList.add("selected");

        // Selecting a sorting option for "Show Status"
        clModalFilterStatusTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        clModalFilterStatusTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                clModalFilterStatusTabIndex = index;

                // Get option number
                let optNo = Number(tab.getAttribute("data-show-status-opt"));

                // Add selected class to the currently selected tab
                clModalFilterStatusTabs.forEach((selectedTab) => 
                {
                    selectedTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                filterCLCardsByWatchStatus(optNo);
            }

            tab.addEventListener("click" , action);
            tab.action = action;
        });

        // Selecting a sorting option for "Show Type"
        clModalFilterTypeTabs.forEach((tab) => 
        {
            if(tab.action)
            {
                tab.removeEventListener(`click` , tab.action);
            }
        });
        clModalFilterTypeTabs.forEach((tab, index) => 
        {
            const action = () => 
            {
                // Update button index
                clModalFilterTypeTabIndex = index;

                // Get option number
                let optNo = tab.getAttribute("data-show-type-opt");

                // Add selected class to the currently selected tab
                clModalFilterTypeTabs.forEach((selectedTab) => 
                {
                    selectedTab.classList.remove("selected");
                });
                tab.classList.add("selected");

                switch(optNo)
                {
                    // Dispaly All
                    case "0":
                        clModalGrid_CardBdr.forEach((bdr) => 
                        {
                            if(bdr.classList.contains("notShowTypeMatch"))
                            {
                                bdr.classList.remove("notShowTypeMatch");
                            }
                        });
                        break;

                    // Display Movies
                    case "1":
                        filterCLModalType("movies");
                        break;
                        
                    // Display Tv
                    case "2":
                        filterCLModalType("tv");
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

    // Filter CL Cards based on show watch status
    function filterCLCardsByWatchStatus(optNo)
    {
        switch(optNo)
        {
            // All
            case 0:
                filterCLModalStatus(0);
                break;

            // Planned
            case 1:
                filterCLModalStatus(1);
                break;
                
            // Watching
            case 2:
                filterCLModalStatus(2);
                break;
                
            // On-hold
            case 3:
                filterCLModalStatus(3);
                break;
                
            // Dropped
            case 4:
                filterCLModalStatus(4);
                break;
                
            // Completed
            case 5:
                filterCLModalStatus(5);
                break;
                
            // Notify of error 
            default:
                notification(`notifyBad` , `An error occured while filtering`);
                break;
        }
    }


    // Attaches listeners for the CL Modal cards
    function attachCLModalCardListeners(event)
    {
        // Get the clicked button
        let clModalGridCardMenuBtn = event.target.closest("[data-gen-menu-modal-type='cl_modal_cards']");
        
        if (!clModalGridCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='cl_modal_cards'] not found.");
            return;
        }

        // Find the parent 
        let clModalGridCardBdr = clModalGridCardMenuBtn.closest(".clModalGrid_CardBdr");
        if (!clModalGridCardBdr)
        {
            console.error("Parent element not found.");
            return;
        }

        // Get all parents elements to obtain the current index
        let allGridCards = Array.from(document.querySelectorAll(".clModalGrid_CardBdr"));
        let clModalGridCardIndex = allGridCards.indexOf(clModalGridCardBdr);

        if (clModalGridCardIndex === -1)
        {
            console.error("Failed to find the index of the clicked card.");
            return;
        }

        // Add selectors
        let clModalGridCardLink = clModalGridCardBdr.querySelector(".clModalGrid_CardCtntBdr")?.getAttribute("data-card-link");
        let clModalGridCardTitle = clModalGridCardBdr.querySelector(".clModalGrid_CardCtnt_DetTitleText")?.textContent;
        let clModalGridCardImage = clModalGridCardBdr.querySelector(".clModalGrid_CardCtntThumbImg.img_large")?.getAttribute("src");
        let watchShowBtn = document.querySelector(".clModalCardWatchNowBtn");
        let setCLThumbBtn = document.querySelector(".setCLThumbnailBtn");
        let removeShowBtn = document.querySelector(".clModalGridCardRemoveBtn");
        genShowLinkForCL = clModalGridCardLink;


        // Watch Now
        watchShowBtn.onclick = () => window.open(`${clModalGridCardLink}` , `_self`);

        // Edit show in watchlist
        updEditShowInWLBtn(clModalGridCardLink);
        attachGenMenuModalEventListeners();

        // Add to collection 
        attachAddToCLEventListeners();

        // Set as collection thumbnail
        setCLThumbBtn.onclick = async () => 
        {
            // Update the bcg image
            await updClModalPpty(
            {
                cl_bcg: clModalGridCardImage
            });

            //Notify myLists
            notification(`notifyGood` , `Thumbnail set successfully`);
        }

        // Sharing the Show
        attachSharePageEventListeners(clModalGridCardLink , clModalGridCardTitle);

        // Confirm before removing the show
        removeShowBtn.onclick = () => 
        {
            initConfirmModal(
                "Are you sure you want to remove this show?",
                null,
                "Remove",
                "Cancel",
                removeClModalGridCard
            );
        }

        // Removes the selected cl modal card from the collection
        const removeClModalGridCard = async () => 
        {
            // Remove element from collection inventory
            if(clLibraryIndexedInv[clBodyCardIndex].cl_items)
            {
                clLibraryIndexedInv[clBodyCardIndex].cl_items = clLibraryIndexedInv[clBodyCardIndex].cl_items.filter(subItem => subItem.cl_itemId !== clModalGridCardLink);
            }

            // Remove from the cl modal arrays
            clModalIndexedInv = clModalIndexedInv.filter((item) => item.show_link !== clModalGridCardLink);

            // Set "Last updated"
            await updClModalPpty(
            {
                cl_updated: getCurrDate()
            });

            // Remove the cl card
            clModalGridCardBdr.remove();

            // Update Show count
            await updCLModalShowCount();

            // Reattach listeners
            attachGenMenuModalEventListeners();

            // Notify the user
            notification(`notifyGood` , `Show removed from collection`);
        }

    }





