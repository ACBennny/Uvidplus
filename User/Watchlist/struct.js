/***************************************************************
 * This will hold the code for the Struct of the Watchlist page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    const userPagesStruct =
    `
        <!-- body -->
        <div class="userMainBdr">
            <div class="userMainBox">
                <div class="userHeaderBdr">
                    <div class="userHeaderBox">
                        <div class="userHeaderBcgBdr">
                            <div class="userHeaderBcgBox">
                                <img src="/Images/Uvid_green_bcg1_light.jpg" alt="" class="userHeaderBcgImg">
                            </div>
                        </div>
                        <div class="userHeaderDetBdr">
                            <div class="userHeaderDetBox">
                                <div class="userHeaderTitleBdr">
                                    <div class="userHeaderTitleBox">
                                        <h1 class="userHeaderTitleText">
                                            <span class="userHeaderTitleText_intro">Hi,</span>
                                            <span class="userHeaderTitleText_userName">acbennny</span>
                                        </h1>
                                    </div>
                                </div>
                                <div class="userHeaderNavBdr">
                                    <div class="userHeaderNavBox">
                                        <a href="/User/Profile.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <circle cx="12" cy="6" r="4" />
                                                <ellipse cx="12" cy="17" rx="7" ry="4" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Profile</span>
                                        </a>
                                        <a href="/User/Watchlist.html" class="userHeaderNavLink active">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Watchlist</span>
                                        </a>
                                        <a href="/User/History.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">History</span>
                                        </a>
                                        <a href="/User/Notification.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Notification</span>
                                        </a>
                                        <a href="/User/Settings.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Settings</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="userBodyBdr">
                    <div class="userBodyBox">
                        <div class="userBodyTitleBdr">
                            <div class="userBodyTitleBox">
                                <div class="userBodyTitleIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userBodyTitleIconSvg">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                    </svg>
                                </div>
                                <span class="userBodyTitleText">Watchlist</span>
                            </div>
                            <div class="userClearAllBdr userOrderSetBdr">
                                <div class="userClearAllBox userOrderSetBox">
                                    <div class="userOrderBtnBdr userCreateWLBtn">
                                        <div class="userOrderBtnBox">
                                            <div class="userOrderBtnIcon">
                                                <svg class="userOrderBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                                </svg>
                                            </div>
                                            <div class="userOrderBtnText">Add</div>
                                        </div>
                                    </div>
                                    <div class="userOrderBtnBdr userWLArrangeBtnBdr">
                                        <div class="userOrderBtnBox">
                                            <div class="userOrderBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userOrderBtnSvg">
                                                    <path fill-rule="evenodd" d="M22.75 7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div class="userOrderBtnText">Sort</div>
                                        </div>
                                        <div class="userOrderOptBdr">
                                            <div class="userOrderOptBox">
                                                <div class="wlModalAction_MenuCloseBdr closeUserOptModal">
                                                    <div class="wlModalAction_MenuCloseBox">
                                                        <div class="wlModalAction_MenuCloseIcon">
                                                            <svg class="wlModalAction_MenuCloseSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="userOrderOptSect">
                                                    <div class="userOrderOptSectTitleBox">
                                                        <p class="userOrderOptSectTitleText">Sort by</p>
                                                    </div>
                                                    <div class="userOrderOptTab active" data-card-sort-opt="0">
                                                        <p class="userOrderOptText">Added</p>
                                                    </div>
                                                    <div class="userOrderOptTab " data-card-sort-opt="1">
                                                        <p class="userOrderOptText">Name A-Z</p>
                                                    </div>
                                                    <div class="userOrderOptTab " data-card-sort-opt="2">
                                                        <p class="userOrderOptText">Name Z-A</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="userBodyCtntBdr">
                            <div class="userBodyCtntBox wl_body_ctnt_box">
                                <div class="emptyUserPageBdr">
                                    <div class="emptyUserPageBox">
                                        <div class="emptyUserPageCtnt">
                                            <div class="emptyUserPageIconBox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyUserPageIconSvg">
                                                    <path d="M16.07 9.952c1.329 0 2.462 0 3.366.102q.23.025.458.064c.532.09 1.05.235 1.53.488v-.85c0-.91 0-1.663-.085-2.264c-.09-.635-.286-1.197-.756-1.66a3 3 0 0 0-.241-.214c-.512-.408-1.126-.575-1.82-.652c-.67-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.335-.006-1.653-.087a2.7 2.7 0 0 1-.536-.196c-.285-.14-.532-.351-1.228-.968l-.474-.42a7 7 0 0 0-.48-.403a4.3 4.3 0 0 0-2.182-.803A8 8 0 0 0 8.413 2h-.116c-.641 0-1.064 0-1.431.061c-1.605.268-2.903 1.39-3.219 2.875c-.072.337-.071.724-.071 1.283v4.387c.48-.253.998-.399 1.53-.488q.227-.039.458-.064c.904-.102 2.037-.102 3.367-.102z" />
                                                    <path fill-rule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868c.363 1.885.544 2.827 1.172 3.452q.246.245.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472q.298-.184.544-.429c.628-.625.81-1.567 1.172-3.452c.503-2.618.755-3.927.145-4.868a3 3 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a3 3 0 0 0-.57.646m6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.324.765.723s-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div class="emptyUserPageNoteBox">
                                                <p class="emptyUserPageNoteText">
                                                    You don't have any watchlists.
                                                    </br>
                                                    Click the "Add" button to start creating your own unique watchlists.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="userWLCatalogBdr">
                                    <div class="userWLCatalogBox">
                                        <div class="userWLCatalogGrid"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!------ Watchlist Modal ------>
        <div class="wlModalBase">
            <div class="wlModalBdr">
                <div class="wlModalBox">
                    <div class="wlModalBaseClose">Close</div>
                    <div class="wlModalHeadBase">
                        <div class="wlModalHeadBdr">
                            <div class="wlModalHead_underlayerBdr">
                                <div class="wlModalHead_underlayerBox">
                                    <div class="wlModalHeader_BcgBdr">
                                        <div class="wlModalHeader_BcgBox">
                                            <img class="wlModalHeader_BcgImg" src="/Images/Uvid_Anime.jpg" alt="The watchlist header background image">
                                        </div>
                                    </div>
                                    <div class="wlModalHeader_Shadow"></div>
                                </div>
                            </div>
                            <div class="wlModalHeadBox">
                                <div class="wlModalHeader_thumbBase">
                                    <div class="wlModalHeader_thumbBdr">
                                        <div class="wlModalHeader_thumbBox">
                                            <img class="wlModalHeader_thumbImg" src="/Images/Uvid_Anime.jpg" alt="The watchlist header thumbnail image">
                                        </div>
                                        <div class="wlModalAction_editBtnBdr">
                                            <div class="wlModalAction_editBtnBox">
                                                <div class="wlModalAction_editBtnIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="wlModalAction_editBtnSvg">
                                                        <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                    </svg>
                                                </div>
                                                <div class="wlModalAction_editBtnText">Edit Watchlist</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wlModalHeader_DetBdr">
                                    <div class="wlModalHeader_DetBox">
                                        <div class="wlModalHeader_DetInfoBdr">
                                            <div class="wlModalHeader_DetInfoBox">
                                                <div class="wlModalHeader_DetInfo_TitleBox">
                                                    <div class="wlModalHeader_DetInfo_TitleText">N/A</div>
                                                </div>
                                                <div class="wlModalHeader_DetInfo_TagsBdr">
                                                    <div class="wlModalHeader_DetInfo_TagsBox">
                                                        <div class="wlModalHeader_DetInfo_TagsItem wlModalHeader_DetInfo_TagsCount">
                                                            <div class="wlModalHeader_DetInfo_TagsCountIcon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="wlModalHeader_DetInfo_TagsCountSvg">
                                                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                                                </svg>
                                                            </div>
                                                            <p class="wlModalHeader_DetInfo_TagsCountText">N/A</p>
                                                        </div>
                                                        <div class="wlModalHeader_DetInfo_TagsItem wlModalHeader_DetInfo_TagsSeparator">•</div>
                                                        <div class="wlModalHeader_DetInfo_TagsItem wlModalHeader_DetInfo_TagsUpdate">
                                                            <p class="wlModalHeader_DetInfo_TagsUpdateText">N/A</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="wlModalHeader_DetInfo_DescBox">
                                                    <p class="wlModalHeader_DetInfo_DescText">N/A</p>
                                                </div>
                                                <div class="wlModalHeader_DetInfo_MoreBdr">
                                                    <div class="wlModalHeader_DetInfo_MoreBox">
                                                        <button class="wlModalHeader_DetInfo_MoreBtn">
                                                            <p class="wlModalHeader_DetInfo_MoreText openReadFullDescBtn">Read more</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wlModalActionFence wlModalAction_HeaderFence">
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
                            </div>
                        </div>
                    </div>
                    <div class="wlModalCtntBase">
                        <div class="wlModalCtntBdr">
                            <div class="wlModalCtntBox">
                                <div class="wlModalCtnt_sortBdr">
                                    <div class="wlModalCtnt_sortBox">
                                        <div class="wlModalCtnt_sortSect wlModalCtnt_sortStatusBdr">
                                            <div class="wlModalCtnt_sortStatusBox">
                                                <div class="wlModalCtnt_sortStatusText">
                                                    <span class="status_type">Recently Updated</span>
                                                    <span class="status_divider">•</span>
                                                    <span class="status_order">Ascending</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wlModalCtnt_sortSect wlModalCtnt_sortFilterBdr">
                                            <div class="wlModalCtnt_sortFilterBox">
                                                <div class="userOrderBtnBdr userSortBtnBdr ">
                                                    <div class="userOrderBtnBox">
                                                        <div class="userOrderBtnIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userOrderBtnSvg">
                                                                <path fill-rule="evenodd" d="M22.75 7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div class="userOrderBtnText">Sort</div>
                                                    </div>
                                                    <div class="userOrderOptBdr">
                                                        <div class="userOrderOptBox">
                                                            <div class="wlModalAction_MenuCloseBdr closeUserOptModal">
                                                                <div class="wlModalAction_MenuCloseBox">
                                                                    <div class="wlModalAction_MenuCloseIcon">
                                                                        <svg class="wlModalAction_MenuCloseSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="userOrderOptSect">
                                                                <div class="userOrderOptSectTitleBox">
                                                                    <p class="userOrderOptSectTitleText">Sort by</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortTypeTabs active" data-sort-type-opt="0">
                                                                    <p class="userOrderOptText">Recently Added</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortTypeTabs" data-sort-type-opt="1">
                                                                    <p class="userOrderOptText">Recently Updated</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortTypeTabs" data-sort-type-opt="2">
                                                                    <p class="userOrderOptText">Alphabetical</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortTypeTabs" data-sort-type-opt="3">
                                                                    <p class="userOrderOptText">Release</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortTypeTabs" data-sort-type-opt="4">
                                                                    <p class="userOrderOptText">Score</p>
                                                                </div>
                                                            </div>
                                                            <div class="userOrderOptSect">
                                                                <div class="userOrderOptSectTitleBox">
                                                                    <p class="userOrderOptSectTitleText">Sort Order</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortOrderTabs active">
                                                                    <p class="userOrderOptText">Ascending</p>
                                                                </div>
                                                                <div class="userOrderOptTab userwlModalSortOrderTabs">
                                                                    <p class="userOrderOptText">Descending</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="userOrderBtnBdr userFilterBtnBdr">
                                                    <div class="userOrderBtnBox">
                                                        <div class="userOrderBtnIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userOrderBtnSvg">
                                                                <path fill-rule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M14.5 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M5.75 17a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0m3.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd" />
                                                                <path d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-7.75 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z" />
                                                            </svg>
                                                        </div>
                                                        <div class="userOrderBtnText">Filter</div>
                                                    </div>
                                                    <div class="userOrderOptBdr">
                                                        <div class="userOrderOptBox">
                                                            <div class="wlModalAction_MenuCloseBdr closeUserOptModal">
                                                                <div class="wlModalAction_MenuCloseBox">
                                                                    <div class="wlModalAction_MenuCloseIcon">
                                                                        <svg class="wlModalAction_MenuCloseSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="userOrderOptSect">
                                                                <div class="userOrderOptSectTitleBox">
                                                                    <p class="userOrderOptSectTitleText">Show Status</p>
                                                                </div>
                                                                <div class="userOrderOptTab active userWLModalFilterStatusTabs" data-show-status-opt="">
                                                                    <p class="userOrderOptText">All</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterStatusTabs" data-show-status-opt="0">
                                                                    <p class="userOrderOptText">Planned</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterStatusTabs" data-show-status-opt="1">
                                                                    <p class="userOrderOptText">Watching</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterStatusTabs" data-show-status-opt="2">
                                                                    <p class="userOrderOptText">On-Hold</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterStatusTabs" data-show-status-opt="3">
                                                                    <p class="userOrderOptText">Completed</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterStatusTabs" data-show-status-opt="4">
                                                                    <p class="userOrderOptText">Dropped</p>
                                                                </div>
                                                            </div>
                                                            <div class="userOrderOptSect">
                                                                <div class="userOrderOptSectTitleBox">
                                                                    <p class="userOrderOptSectTitleText">Show Type</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterTypeTabs active" data-show-type-opt="">
                                                                    <p class="userOrderOptText">All</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterTypeTabs " data-show-type-opt="0">
                                                                    <p class="userOrderOptText">Movies</p>
                                                                </div>
                                                                <div class="userOrderOptTab userWLModalFilterTypeTabs " data-show-type-opt="1">
                                                                    <p class="userOrderOptText">Tv</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wlModalActionFence wlModalAction_SortFence">
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
                                <div class="wlModalGridBase">
                                    <div class="wlModalGridBdr">
                                        <div class="wlModalGridBox"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- Gen Action Modal -->
        <div class="wlModalAction_MenuBdr">
            <div class="wlModalAction_MenuBox">
                <div class="wlModalAction_MenuCloseBdr">
                    <div class="wlModalAction_MenuCloseBox">
                        <div class="wlModalAction_MenuCloseIcon">
                            <svg class="wlModalAction_MenuCloseSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="wlModalAction_MenuCtntBdr">
                    <div class="wlModalAction_MenuCtntBox">
                        <button class="wlModalAction_MenuCtntBtnBox">
                            <div class="wlModalAction_MenuCtntBtnIcon">
                                <svg class="wlModalAction_MenuCtntBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                </svg>
                            </div>
                            <div class="wlModalAction_MenuCtntBtnText">Edit</div>
                        </button>
                        <button class="wlModalAction_MenuCtntBtnBox">
                            <div class="wlModalAction_MenuCtntBtnIcon">
                                <svg class="wlModalAction_MenuCtntBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </div>
                            <div class="wlModalAction_MenuCtntBtnText">Add Shows</div>
                        </button>
                        <button class="wlModalAction_MenuCtntBtnBox">
                            <div class="wlModalAction_MenuCtntBtnIcon">
                                <svg class="wlModalAction_MenuCtntBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                </svg>
                            </div>
                            <div class="wlModalAction_MenuCtntBtnText">Add all to..</div>
                        </button>
                        <button class="wlModalAction_MenuCtntBtnBox">
                            <div class="wlModalAction_MenuCtntBtnIcon">
                                <svg class="wlModalAction_MenuCtntBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                                </svg>
                            </div>
                            <div class="wlModalAction_MenuCtntBtnText">Delete Watchlist</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;


    