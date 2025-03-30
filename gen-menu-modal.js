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
                            <div class="navBarSignOutBdr">
                                <div class="navBarSignOutBox">
                                    <button type="button" class="navBarSignOutBtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarSignOutBtnIcon">
                                            <path d="M14.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.524.525-.79 1.17-.929 1.928c-.135.737-.161 1.638-.167 2.72a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399s-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008c.006 1.082.032 1.983.167 2.72c.14.758.405 1.403.93 1.928c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116h1.11c1.368 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.121-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z" />
                                            <path d="M15 11.25a.75.75 0 0 1 0 1.5H4.027l1.961 1.68a.75.75 0 1 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 1 1 .976 1.14l-1.96 1.68z" />
                                        </svg>
                                        <p class="navBarSignOutBtnText">Sign Out</p>
                                    </button>
                                </div>
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
            callGlobalFunctions(`updShowsInWL`);
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