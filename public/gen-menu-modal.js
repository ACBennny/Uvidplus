/*************************************************************
 * This holds all the menu modals in the app
 * 
 * Keys
 * cl = collection
 * wl = watchlist
 * dl = downloads
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    let genMenuModalInv = 
    [
        {
            menu_id: `gen_more_menu`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox clModalHeaderMenuCtnt">
                    <div class="navBarProfileOptBdr navBarMenuFixed">
                        <div class="navBarProfileOptBox">
                            <div class="navBarProfileNameBox">
                                <p class="navBarProfileNameText navBarProfileNameTextMajor navBarProfileNameWatching">acbennny</p>
                                <p class="navBarProfileNameText navBarProfileNameTextMinor navBarProfileNameUser">uvidtestuser</p>
                            </div>
                            <div class="navBarProfileCardBox">
                                <button type="button" class="navBarProfileCard">
                                    <a href="#/profile" class="navBarProfileCardLink">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                            <circle cx="12" cy="6" r="4" />
                                            <ellipse cx="12" cy="17" rx="7" ry="4" />
                                        </svg>
                                        <p class="navBarProfileCardLinkText">Profile</p>
                                    </a>
                                </button>
                                <button type="button" class="navBarProfileCard">
                                    <a href="#/settings" class="navBarProfileCardLink">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                            <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                                        </svg>
                                        <p class="navBarProfileCardLinkText">Settings</p>
                                    </a>
                                </button>
                                <button type="button" class="navBarProfileCard">
                                    <a href="javascript:;" class="navBarProfileCardLink goToFullScreenBtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon maximize">
                                            <path d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon minimize">
                                            <path d="M20.857 9.75a.75.75 0 1 0 0-1.5h-4.046l5.72-5.72a.75.75 0 0 0-1.061-1.06l-5.72 5.72V3.142a.75.75 0 0 0-1.5 0V9c0 .414.336.75.75.75zm-17.714 4.5a.75.75 0 0 0 0 1.5h4.046l-5.72 5.72a.75.75 0 1 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z" />
                                        </svg>
                                        <p class="navBarProfileCardLinkText">Fullscreen</p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        },
        {
            menu_id: `wl_body_filter`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox wlModalFilterCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Filter by</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="0">
                        <div class="genMenuModalCtntBtnText">All</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="1">
                        <div class="genMenuModalCtntBtnText">Planning</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="2">
                        <div class="genMenuModalCtntBtnText">Watching</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="3">
                        <div class="genMenuModalCtntBtnText">On-hold</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="4">
                        <div class="genMenuModalCtntBtnText">Dropped</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlModalFilterStatusTabs" data-show-status-opt="5">
                        <div class="genMenuModalCtntBtnText">Completed</div>
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
            menu_id: `wl_body_cards`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox wlBodyCardMenuCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Watch status</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox wlWatchStatusOpt" data-show-status-opt="1">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z" />
                                <path fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522l-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Planning</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlWatchStatusOpt" data-show-status-opt="2">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Watching</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlWatchStatusOpt" data-show-status-opt="3">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">On-hold</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlWatchStatusOpt" data-show-status-opt="4">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z" />
	                            <path fill-rule="evenodd" d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121M12 13.439l-1.97-1.97a.75.75 0 1 0-1.06 1.061l1.97 1.97l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 15.56l1.97 1.97a.75.75 0 0 0 1.06-1.06l-1.97-1.97l1.97-1.97a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Dropped</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox wlWatchStatusOpt" data-show-status-opt="5">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12m-4.546-5.097a.75.75 0 0 1 .143 1.052l-6.858 9a.75.75 0 0 1-1.161.038l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.538 2.907l6.3-8.269a.75.75 0 0 1 1.052-.142" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Completed</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox important hidden delWLBodyCards">
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
        {
            menu_id: `dl_body_sort`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox dlBodySortCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort by</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox clBodySortTabs" data-body-sort-opt="0">
                        <div class="genMenuModalCtntBtnText">Added</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clBodySortTabs" data-body-sort-opt="1">
                        <div class="genMenuModalCtntBtnText">A-Z</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clBodySortTabs" data-body-sort-opt="2">
                        <div class="genMenuModalCtntBtnText">Z-A</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `cl_body_sort`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox clBodySortCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort by</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox clBodySortTabs" data-body-sort-opt="0">
                        <div class="genMenuModalCtntBtnText">Added</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clBodySortTabs" data-body-sort-opt="1">
                        <div class="genMenuModalCtntBtnText">A-Z</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clBodySortTabs" data-body-sort-opt="2">
                        <div class="genMenuModalCtntBtnText">Z-A</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `cl_modal_sort`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox clModalSortCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort By</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox clModalSortTypeTabs" data-sort-type-opt="0">
                        <div class="genMenuModalCtntBtnText">Manual</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalSortTypeTabs" data-sort-type-opt="1">
                        <div class="genMenuModalCtntBtnText">Recently Added</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalSortTypeTabs" data-sort-type-opt="2">
                        <div class="genMenuModalCtntBtnText">Recently Updated</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalSortTypeTabs" data-sort-type-opt="3">
                        <div class="genMenuModalCtntBtnText">Alphabetical</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalSortTypeTabs" data-sort-type-opt="4">
                        <div class="genMenuModalCtntBtnText">Release</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalSortTypeTabs" data-sort-type-opt="5">
                        <div class="genMenuModalCtntBtnText">Score</div>
                    </button>
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Sort Order</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox clModalSortOrderTabs">
                        <div class="genMenuModalCtntBtnText">Asc ↑</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalSortOrderTabs">
                        <div class="genMenuModalCtntBtnText">Dsc ↓</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `cl_modal_filter`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox clModalFilterCtnt">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Watch Status</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox clModalFilterStatusTabs" data-show-status-opt="0">
                        <div class="genMenuModalCtntBtnText">All</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterStatusTabs" data-show-status-opt="1">
                        <div class="genMenuModalCtntBtnText">Planning</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterStatusTabs" data-show-status-opt="2">
                        <div class="genMenuModalCtntBtnText">Watching</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterStatusTabs" data-show-status-opt="3">
                        <div class="genMenuModalCtntBtnText">On-hold</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterStatusTabs" data-show-status-opt="4">
                        <div class="genMenuModalCtntBtnText">Dropped</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterStatusTabs" data-show-status-opt="5">
                        <div class="genMenuModalCtntBtnText">Completed</div>
                    </button>
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Show Type</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox clModalFilterTypeTabs" data-show-type-opt="0">
                        <div class="genMenuModalCtntBtnText">All</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterTypeTabs" data-show-type-opt="1">
                        <div class="genMenuModalCtntBtnText">Movies</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalFilterTypeTabs" data-show-type-opt="2">
                        <div class="genMenuModalCtntBtnText">Tv</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `cl_modal_header`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox clModalHeaderMenuCtnt">
                    <button class="genMenuModalCtntBtnBox addShowsToCL">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genMenuModalCtntBtnSvg">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Add Shows</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox openEditCLBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Edit Watchlist</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox openMultiAddToCLBtn">
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
                    <button class="genMenuModalCtntBtnBox clDeleteBtn">
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
            menu_id: `cl_modal_cards`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox clModalCardMenuCtnt">
                    <button class="genMenuModalCtntBtnBox clModalCardWatchNowBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Details</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox editShowInWLBtn openGenMenuModalBtn" data-gen-menu-modal-type="wl_body_cards">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Add to watchlist</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox openAddToCLBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
                                <path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5m-11 0c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Add to Collection</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox setCLThumbnailBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" />
                                <path fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.53-5.47a.75.75 0 0 0-1.06-1.06L16.5 6.94l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Set as thumbnail</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox shareShowBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Share</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox clModalGridCardRemoveBtn">
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
        {
            menu_id: `dl_modal_cards`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox showEpModalCtntBox">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText dlModalEpNumTitle"></p>
                    </div>
                    <button class="genMenuModalCtntBtnBox dlModalCardWatchNowBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Play download</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox dlModalCardDelEpBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete download</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox dlModalCardViewDetBtn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
                                <path fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">View Details</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `show_ep_set`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox showEpModalCtntBox"></div>
            `,
        },
        {
            menu_id: `show_info_ep_cards`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox showInfoCardModalCtntBox">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText ep_num_title"></p>
                    </div>
                    <button class="genMenuModalCtntBtnBox ep_watchNow_btn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Watch Now</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox ep_markedAsWatched_btn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Mark as Watched</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox ep_dwld_btn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                                <path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Download</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `sett_sect_nav`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox settModalCardMenuCtnt">
                    <button class="genMenuModalCtntBtnBox settSectNavOptBtn" data-sett-sect="membership">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M20.941 8.189c.58.573.83 1.295.947 2.152c.112.826.112 1.876.112 3.178v.105c0 1.302 0 2.352-.112 3.178c-.117.857-.367 1.579-.947 2.152s-1.31.82-2.178.935c-.835.111-1.898.111-3.216.111h-4.925c-1.318 0-2.38 0-3.216-.111c-.868-.115-1.598-.362-2.178-.935a3 3 0 0 1-.735-1.204c.871.107 1.95.107 3.195.107h5.01c1.281 0 2.385 0 3.27-.117c.947-.126 1.856-.41 2.593-1.138s1.024-1.626 1.151-2.562c.12-.874.12-1.965.119-3.232v-.188c0-1.23 0-2.296-.11-3.158c.46.151.868.379 1.22.727m-10.748.859c-.932 0-1.687.746-1.687 1.666s.755 1.667 1.687 1.667c.931 0 1.686-.746 1.686-1.667c0-.92-.755-1.666-1.686-1.666" />
	                            <path fill-rule="evenodd" d="M2.847 5.837C2 6.674 2 8.02 2 10.714s0 4.041.847 4.878s2.21.837 4.936.837h4.82c2.725 0 4.088 0 4.935-.837s.847-2.184.847-4.878s0-4.04-.847-4.877S15.328 5 12.602 5H7.783c-2.726 0-4.09 0-4.936.837m4.213 4.877c0-1.71 1.403-3.095 3.133-3.095s3.132 1.386 3.132 3.095s-1.402 3.096-3.132 3.096s-3.133-1.386-3.133-3.096m8.434 2.62c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.723.32.723.715v3.81a.72.72 0 0 1-.723.713m-11.325-.715c0 .395.323.714.723.714s.722-.32.722-.714V8.81a.72.72 0 0 0-.722-.714c-.4 0-.723.32-.723.715z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Membership & Billing</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settSectNavOptBtn" data-sett-sect="preferences">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m2.5 9c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5M7.122 5q.267 0 .518.05A5 5 0 0 0 7 7.5c0 .868.221 1.685.61 2.396q-.237.045-.488.045c-1.414 0-2.561-1.106-2.561-2.47S5.708 5 7.122 5M5.447 18.986C4.88 18.307 4.5 17.474 4.5 16.5c0-.944.357-1.756.896-2.423C3.49 14.225 2 15.267 2 16.529c0 1.275 1.517 2.325 3.447 2.457M17 7.5c0 .868-.221 1.685-.61 2.396q.236.045.488.045c1.414 0 2.56-1.106 2.56-2.47S18.293 5 16.879 5q-.267 0-.518.05c.407.724.64 1.56.64 2.45m1.552 11.486c1.93-.132 3.447-1.182 3.447-2.457c0-1.263-1.491-2.304-3.396-2.452c.54.667.896 1.479.896 2.423c0 .974-.38 1.807-.947 2.486" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Profile & Parental Controls</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settSectNavOptBtn" data-sett-sect="experience">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd" />
	                            <path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">App Experience</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settSectNavOptBtn" data-sett-sect="privacy">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="m4.614 8.545l-.426 1.705H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2.187l-.427-1.705c-.546-2.183-.818-3.274-1.632-3.91C16.94 4 15.815 4 13.565 4h-3.13c-2.25 0-3.375 0-4.189.635c-.814.636-1.087 1.727-1.632 3.91M6.5 21a3.5 3.5 0 0 0 3.384-2.604l1.11-.555a2.25 2.25 0 0 1 2.012 0l1.11.555A3.501 3.501 0 0 0 21 17.5a3.5 3.5 0 0 0-6.91-.794l-.413-.206a3.75 3.75 0 0 0-3.354 0l-.413.206A3.501 3.501 0 0 0 3 17.5A3.5 3.5 0 0 0 6.5 21" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Privacy & Security</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settSectNavOptBtn" data-sett-sect="information">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358" />
                                <path fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">About & Legal</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `sett_sect_menu`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox settSectMenuCtntBox"></div>
            `,
        },
        {
            menu_id: `sett_pymt_mtds_menu`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox settPymtMtdsCtntBox">
                    <button class="genMenuModalCtntBtnBox dflt_pymt_mtd_btn">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path fill-rule="evenodd" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12m-4.546-5.097a.75.75 0 0 1 .143 1.052l-6.858 9a.75.75 0 0 1-1.161.038l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.538 2.907l6.3-8.269a.75.75 0 0 1 1.052-.142" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Set as default</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox del_pymt_mtd_btn">
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
        {
            menu_id: `sett_mng_prof_menu`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox settMngProfCtntBox"></div>
            `,
        },
        {
            menu_id: `sett_mng_prof_fld_del`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox settMngProfFldDelCtntBox">
                    <div class="genMenuModalCtntSectBox">
                        <p class="genMenuModalCtntSectText">Field Deletion is Permanent</p>
                    </div>
                    <button class="genMenuModalCtntBtnBox settMngProfFldDelBtn" data-prof-field="prof_history">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <defs>
                                    <mask id="solarClockCircleBold0">
                                        <g fill="none">
                                            <path fill="#fff" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
                                            <path fill="#000" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
                                        </g>
                                    </mask>
                                </defs>
                                <path d="M0 0h24v24H0z" mask="url(#solarClockCircleBold0)" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete History</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settMngProfFldDelBtn" data-prof-field="prof_watchlist">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete Watchlist</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settMngProfFldDelBtn" data-prof-field="prof_collections">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete Collections</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settMngProfFldDelBtn" data-prof-field="prof_likes">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735" />
                                <path fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete Likes</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox settMngProfFldDelBtn" data-prof-field="prof_dislikes">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735" />
                                <path fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Delete Dislikes</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `help_ctr_chatbot`,
            menu_ctnt:
            `
                <div class="genMenuModalCtntBox helpCtrChatBotMenuCtnt">
                    <button class="genMenuModalCtntBtnBox helpCtrChatBotOptBtn" onclick="notification('notifyBad', 'Feature unavailable')">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M2.003 11.716c.037-1.843.056-2.764.668-3.552a3 3 0 0 1 .413-.431c.752-.636 1.746-.636 3.733-.636c.71 0 1.065 0 1.403-.092q.105-.03.209-.067c.33-.121.627-.33 1.22-.746c2.338-1.645 3.508-2.467 4.489-2.11c.188.069.37.168.533.29c.848.635.913 2.115 1.042 5.073c.048 1.096.08 2.034.08 2.555s-.032 1.46-.08 2.555c-.13 2.958-.194 4.438-1.042 5.073a2.1 2.1 0 0 1-.533.29c-.982.357-2.15-.465-4.49-2.11c-.592-.416-.889-.625-1.22-.746a3 3 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092c-1.987 0-2.98 0-3.733-.636a3 3 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.552a14 14 0 0 1 0-.57" />
                                <path fill-rule="evenodd" d="M19.49 5.552a.66.66 0 0 1 .97.094l-.529.471l.53-.47l.002.002l.003.004l.007.009l.079.112q.072.107.186.305c.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12s-.36 3.71-.736 4.75c-.187.52-.377.907-.526 1.172a5 5 0 0 1-.265.417l-.007.009l-.003.003l-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.971.094a.77.77 0 0 1-.09-1.035l.03-.041q.04-.06.125-.207a6 6 0 0 0 .422-.943c.314-.871.644-2.253.644-4.222s-.33-3.35-.644-4.222a6 6 0 0 0-.422-.942a3 3 0 0 0-.157-.253m-1.641 1.833c.333-.197.753-.07.938.286l-.603.357l.603-.357l.001.002l.002.003l.003.007l.01.018l.024.053q.028.063.07.17c.053.145.12.35.185.62c.13.54.252 1.337.252 2.425c0 1.089-.122 1.886-.252 2.426c-.065.27-.132.475-.186.619a3 3 0 0 1-.094.223l-.009.018l-.003.007l-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286c-.33-.196-.45-.638-.272-.991l.004-.01l.035-.085c.032-.086.08-.23.13-.438c.1-.416.208-1.09.208-2.06c0-.971-.108-1.645-.208-2.06a4 4 0 0 0-.165-.524l-.004-.01a.76.76 0 0 1 .272-.991" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">Turn sound on</div>
                    </button>
                    <button class="genMenuModalCtntBtnBox helpCtrChatBotOptBtn" onclick="cnfrmB4RstChatBot()">
                        <div class="genMenuModalCtntBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                                <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genMenuModalCtntBtnText">End Chat</div>
                    </button>
                </div>
            `,
        },
        {
            menu_id: `schedule_filter_menu`,
            menu_ctnt: 
            `
                <div class="genMenuModalCtntBox scheduleFilterCtntBox"></div>
            `,
        },
    ];






    function gen_more_menu()
    {
        callGlobalFunctions(`attachNavbarMoreListeners`);
    }

    function wl_body_filter()
    {
        callGlobalFunctions(`attachFilterWLModalListeners`);
    }

    function wl_body_cards(btnEvent)
    {
        if(((hash_parts[1] === "my-list")) && (hash_parts[2] === "watchlist"))
        {
            // For watchlist
            callGlobalFunctions(`attachWLCardListeners`, [btnEvent]);
        }
        else
        {
            // For others (collections, info pages. watch page)
            callGlobalFunctions(`updShowsInWL`, [btnEvent]);
        }
    }

    function dl_body_sort()
    {
        notification(`notifyBad` , `This feature is currently unavailable`);
    }

    function cl_body_sort()
    {
        callGlobalFunctions(`attachArrangeCLCardListeners`);
    }

    function cl_modal_sort()
    {
        callGlobalFunctions(`attachSortCLModalListeners`);
    }

    function cl_modal_filter()
    {
        callGlobalFunctions(`attachFilterCLModalListeners`);
    }

    function cl_modal_header()
    {
        callGlobalFunctions(`attachAddShowsToCLListeners`);
        callGlobalFunctions(`attachEditCLEventListeners`);
        callGlobalFunctions(`attachAddMultiShowsToCLListenres`);
        callGlobalFunctions(`addDelCLEventListeners`);
    }

    function cl_modal_cards(btnEvent)
    {
        callGlobalFunctions(`attachCLModalCardListeners` , [btnEvent]);
    }

    function dl_modal_cards(btnEvent)
    {
        callGlobalFunctions(`attachDLModalEpListeners` , [btnEvent]);
    }

    function show_ep_set()
    {
        callGlobalFunctions(`showEpSetsMenu`);
    }

    function show_info_ep_cards(btnEvent)
    {
        callGlobalFunctions(`showInfoEpCardAtns` , [btnEvent]);
    }

    function sett_sect_nav()
    {
        callGlobalFunctions("attachSettSectNavListeners");
    }

    function sett_sect_menu(btnEvent)
    {
        callGlobalFunctions(`attachSettSectMenuListeners` , [btnEvent]);
    }

    function sett_pymt_mtds_menu(btnEvent)
    {
        callGlobalFunctions(`attachPymtMtdCardListeners` , [btnEvent]);
    }

    function sett_mng_prof_menu(btnEvent)
    {
        callGlobalFunctions(`attachSettMngProfMenuListeners` , [btnEvent]);
    }

    function sett_mng_prof_fld_del()
    {
        callGlobalFunctions("preSettMngProfFldDel");
    }

    function help_ctr_chatbot()
    {}

    function schedule_filter_menu()
    {
        callGlobalFunctions(`attachSchdlFltrListeners`);
    }


