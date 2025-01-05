/*************************************************************
 * This holds all the menu modals in the app
 * 
 * Keys
 * wl = watchlist
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



    let genMenuModalInv = 
    [
        {
            menu_id: `wl_body_sort`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox wlBodySortCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort by</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlBodySortTabs" data-body-sort-opt="0">
                        <div class="genMenuModalCtntBtnText">Added</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlBodySortTabs" data-body-sort-opt="1">
                        <div class="genMenuModalCtntBtnText">A-Z</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlBodySortTabs" data-body-sort-opt="2">
                        <div class="genMenuModalCtntBtnText">Z-A</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `wl_modal_sort`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox wlModalSortCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort By</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlModalSortTypeTabs" data-sort-type-opt="0">
                        <div class="genMenuModalCtntBtnText">Manual</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalSortTypeTabs" data-sort-type-opt="1">
                        <div class="genMenuModalCtntBtnText">Recently Added</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalSortTypeTabs" data-sort-type-opt="2">
                        <div class="genMenuModalCtntBtnText">Recently Updated</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalSortTypeTabs" data-sort-type-opt="3">
                        <div class="genMenuModalCtntBtnText">Alphabetical</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalSortTypeTabs" data-sort-type-opt="4">
                        <div class="genMenuModalCtntBtnText">Release</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalSortTypeTabs" data-sort-type-opt="5">
                        <div class="genMenuModalCtntBtnText">Score</div>
                    </button>
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort Order</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlModalSortOrderTabs">
                        <div class="genMenuModalCtntBtnText">Asc ↑</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalSortOrderTabs">
                        <div class="genMenuModalCtntBtnText">Dsc ↓</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `wl_modal_filter`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox wlModalFilterCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Show Status</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="0">
                        <div class="genMenuModalCtntBtnText">All</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="1">
                        <div class="genMenuModalCtntBtnText">Planned</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="2">
                        <div class="genMenuModalCtntBtnText">Watching</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="3">
                        <div class="genMenuModalCtntBtnText">On-hold</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="4">
                        <div class="genMenuModalCtntBtnText">Completed</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="5">
                        <div class="genMenuModalCtntBtnText">Dropped</div>
                    </button>
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Show Type</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlModalFilterTypeTabs" data-show-type-opt="0">
                        <div class="genMenuModalCtntBtnText">All</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterTypeTabs" data-show-type-opt="1">
                        <div class="genMenuModalCtntBtnText">Movies</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterTypeTabs" data-show-type-opt="2">
                        <div class="genMenuModalCtntBtnText">Tv</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `wl_modal_header`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox wlModalHeaderMenuCtnt">
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genMenuModalCtntBtnSvg">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Add Shows</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Edit Watchlist</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox openAddToWLBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Add all to..</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlDeleteBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `wl_modal_cards`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox wlModalCardMenuCtnt">
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Watch Now</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Edit Status</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Add to Watchlist</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Share</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Remove</div>
                    </button>
                </div>
            `,
        },
    ];

    function wl_body_sort()
    {
        callGlobalFunctions(`attachArrangeWLCardListeners`);
    }

    function wl_modal_sort()
    {
        callGlobalFunctions(`attachSortWLModalListeners`);
    }

    function wl_modal_filter()
    {
        callGlobalFunctions(`attachFilterWLModalListeners`);
    }

    function wl_modal_header()
    {
        callGlobalFunctions(`attachAddToWLEventListeners`);
        callGlobalFunctions(`addDelWLEventListeners`);
    }

    function wl_modal_cards()
    {
        // callGlobalFunctions(``);
        console.log("\n\nmenu modal function reached\n\n\n\n");
    }