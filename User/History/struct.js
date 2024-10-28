/***************************************************************
 * This will hold the code for the Struct of the History page
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
                                        <a href="/User/Watchlist.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Watchlist</span>
                                        </a>
                                        <a href="/User/History.html" class="userHeaderNavLink active">
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
                    <div class="userBodyBox userHistBodyBox">
                        <div class="userBodyTitleBdr">
                            <div class="userBodyTitleBox">
                                <div class="userBodyTitleIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userBodyTitleIconSvg">
                                        <path fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <span class="userBodyTitleText">History</span>
                            </div>
                            <div class="userClearAllBdr">
                                <div class="userClearAllBox ">
                                    <button class="userClearAllBtn removeAllShowsFromHistory darkSolidBtn" title="Clear all">
                                        <p>Clear all</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="userBodyCtntBdr">
                            <div class="userBodyCtntBox history_ctnt_box">
                                <div class="emptyUserPageBdr">
                                    <div class="emptyUserPageBox">
                                        <div class="emptyUserPageCtnt">
                                            <div class="emptyUserPageIconBox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyUserPageIconSvg">
                                                    <path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785" />
                                                    <path d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.088.102l.605.706c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.605-.707l.088-.102c.502-.587.9-1.052 1.45-1.305c.55-.254 1.162-.253 1.935-.252H22V12c0-4.714 0-7.071-1.465-8.536" />
                                                </svg>
                                            </div>
                                            <div class="emptyUserPageNoteBox">
                                                <p class="emptyUserPageNoteText">Your watch history will appear here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="basicCatalogBase">
                                    <div class="basicCatalogBdr">
                                        <div class="basicCatalogBox showCatalog history_catalog_box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;