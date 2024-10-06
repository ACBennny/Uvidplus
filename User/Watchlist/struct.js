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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="userHeaderNavLinkIcon">
                                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                            </svg>
                                            <span class="userHeaderNavLinkText">Profile</span>
                                        </a>
                                        <a href="/User/Watchlist.html" class="userHeaderNavLink active">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="userHeaderNavLinkIcon">
                                                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                            </svg>
                                            <span class="userHeaderNavLinkText">Watchlist</span>
                                        </a>
                                        <a href="/User/History.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userHeaderNavLinkIcon">
                                                <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
                                            </svg>
                                            <span class="userHeaderNavLinkText">History</span>
                                        </a>
                                        <a href="/User/Notification.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userHeaderNavLinkIcon">
                                                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                                            </svg>
                                            <span class="userHeaderNavLinkText">Notification</span>
                                        </a>
                                        <a href="/User/Settings.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userHeaderNavLinkIcon">
                                                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="userBodyTitleIconSvg">
                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                    </svg>
                                </div>
                                <span class="userBodyTitleText">Watchlist</span>
                            </div>
                            <div class="userClearAllBdr userOrderSetBdr">
                                <div class="userClearAllBox userOrderSetBox">
                                    <div class="userOrderBtnBdr userWLArrangeBtnBdr">
                                        <div class="userOrderBtnBox">
                                            <div class="userOrderBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userOrderBtnSvg">
                                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                                </svg>
                                            </div>
                                            <div class="userOrderBtnText">Sort</div>
                                        </div>
                                        <div class="userOrderOptBdr">
                                            <div class="userOrderOptBox">
                                                <div class="userOrderOptSect">
                                                    <div class="userOrderOptSectTitleBox">
                                                        <p class="userOrderOptSectTitleText">Sort by</p>
                                                    </div>
                                                    <div class="userOrderOptTab active">
                                                        <p class="userOrderOptText">Added</p>
                                                    </div>
                                                    <div class="userOrderOptTab ">
                                                        <p class="userOrderOptText">Name A-Z</p>
                                                    </div>
                                                    <div class="userOrderOptTab ">
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
                                <div class="userWLCatalogBdr">
                                    <div class="userWLCatalogBox">
                                        <div class="userWLCatalogGrid">

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
                                                                            <img class="userWLCatalog_ItemThumbImg" src="/Images/Uvid_Cartoon3.jpg" alt="Thumbnail image for the watchlist: ">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="userWLCatalog_ItemDetBase">
                                                            <div class="userWLCatalog_ItemDetBdr">
                                                                <div class="userWLCatalog_ItemDetBox">
                                                                    <div class="userWLCatalog_ItemDetMajorBox">
                                                                        <div class="userWLCatalog_ItemDetMajorText userWLCatalog_ItemDetTitleText">Cartoon Fanacy</div>
                                                                    </div>
                                                                    <div class="userWLCatalog_ItemDetMinorBox">
                                                                        <div class="userWLCatalog_ItemDetMinorIcon">
                                                                            <svg class="userWLCatalog_ItemDetMinorSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                                            </svg>
                                                                        </div>
                                                                        <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemCountText">24 items</p>
                                                                    </div>
                                                                    <div class="userWLCatalog_ItemDetMinorBox">
                                                                        <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemYearText"></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="userWLCatalog_ItemOpenWLBdr">
                                                            <button class="userWLCatalog_ItemOpenWLBtn"></button>
                                                        </div>
                                                        <div class="userWLCatalog_ItemBadgeBdr userWLCatalog_ItemDelWLBtn" title="Delete">
                                                            <div class="userWLCatalog_ItemBadgeBox">
                                                                <div class="userWLCatalog_ItemBadgeIcon">
                                                                    <svg class="userWLCatalog_ItemBadgeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                                            <img class="userWLCatalog_ItemThumbImg" src="/Images/Uvid_green_bcg1_light.jpg" src="Thumbnail image for the watchlist: ">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="userWLCatalog_ItemDetBase">
                                                            <div class="userWLCatalog_ItemDetBdr">
                                                                <div class="userWLCatalog_ItemDetBox">
                                                                    <div class="userWLCatalog_ItemDetMajorBox">
                                                                        <div class="userWLCatalog_ItemDetMajorText userWLCatalog_ItemDetTitleText">The Greatest Anime Shows of all time</div>
                                                                    </div>
                                                                    <div class="userWLCatalog_ItemDetMinorBox">
                                                                        <div class="userWLCatalog_ItemDetMinorIcon">
                                                                            <svg class="userWLCatalog_ItemDetMinorSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                                            </svg>
                                                                        </div>
                                                                        <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemCountText">11 items</p>
                                                                    </div>
                                                                    <div class="userWLCatalog_ItemDetMinorBox">
                                                                        <p class="userWLCatalog_ItemDetMinorText userWLCatalog_ItemYearText">Updated on Sep 30, 2024</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="userWLCatalog_ItemOpenWLBdr">
                                                            <button class="userWLCatalog_ItemOpenWLBtn"></button>
                                                        </div>
                                                        <div class="userWLCatalog_ItemBadgeBdr userWLCatalog_ItemDelWLBtn" title="Delete">
                                                            <div class="userWLCatalog_ItemBadgeBox">
                                                                <div class="userWLCatalog_ItemBadgeIcon">
                                                                    <svg class="userWLCatalog_ItemBadgeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

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
                                                                    <img class="wlModalHeader_BcgImg" src="/Images/Uvid_Anime.jpg">
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
                                                                            <svg class="wlModalAction_editBtnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
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
                                                                            <div class="wlModalHeader_DetInfo_TitleText">The Greatest Anime Shows of All Time</div>
                                                                        </div>
                                                                        <div class="wlModalHeader_DetInfo_TagsBdr">
                                                                            <div class="wlModalHeader_DetInfo_TagsBox">
                                                                                <div class="wlModalHeader_DetInfo_TagsItem wlModalHeader_DetInfo_TagsCount">
                                                                                    <div class="wlModalHeader_DetInfo_TagsCountIcon">
                                                                                        <svg class="wlModalHeader_DetInfo_TagsCountSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <p class="wlModalHeader_DetInfo_TagsCountText">1000 items</p>
                                                                                </div>
                                                                                <div class="wlModalHeader_DetInfo_TagsItem wlModalHeader_DetInfo_TagsSeparator">•</div>
                                                                                <div class="wlModalHeader_DetInfo_TagsItem wlModalHeader_DetInfo_TagsUpdate">
                                                                                    <p class="wlModalHeader_DetInfo_TagsUpdateText">Updated on Sep 30, 2024</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="wlModalHeader_DetInfo_DescBox">
                                                                            <p class="wlModalHeader_DetInfo_DescText">In this watchlist lies some of the greatest anime shows to ever be aired since the day anime was first introduced to the public.</p>
                                                                        </div>
                                                                        <div class="wlModalHeader_DetInfo_MoreBdr">
                                                                            <div class="wlModalHeader_DetInfo_MoreBox">
                                                                                <button class="wlModalHeader_DetInfo_MoreBtn">
                                                                                    <p class="wlModalHeader_DetInfo_MoreText">Read more</p>
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
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userOrderBtnSvg">
                                                                                        <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
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
                                                                                        <div class="userOrderOptTab active">
                                                                                            <p class="userOrderOptText">Manual</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Recently Added</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Recently Updated</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Alphabetical</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Release</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Score</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="userOrderOptSect">
                                                                                        <div class="userOrderOptSectTitleBox">
                                                                                            <p class="userOrderOptSectTitleText">Sort Order</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Ascending</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Descending</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="userOrderBtnBdr userFilterBtnBdr">
                                                                            <div class="userOrderBtnBox">
                                                                                <div class="userOrderBtnIcon">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userOrderBtnSvg">
                                                                                        <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/>
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
                                                                                        <div class="userOrderOptTab active">
                                                                                            <p class="userOrderOptText">All</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Planned</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Watching</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">On-Hold</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Completed</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Dropped</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="userOrderOptSect">
                                                                                        <div class="userOrderOptSectTitleBox">
                                                                                            <p class="userOrderOptSectTitleText">Show Type</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab active">
                                                                                            <p class="userOrderOptText">All</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
                                                                                            <p class="userOrderOptText">Movies</p>
                                                                                        </div>
                                                                                        <div class="userOrderOptTab ">
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
                                                                <div class="wlModalGridBox">

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
                                                                            <div class="wlModalGrid_CardCtntBdr">
                                                                                <div class="wlModalGrid_CardCtntBox">
                                                                                    <div class="wlModalGrid_CardCtntThumbBdr">
                                                                                        <div class="wlModalGrid_CardCtntThumbBox">
                                                                                            <img class="wlModalGrid_CardCtntThumbImg img_large" src="/Library/TV/Watch/DemonSlayer/img/2.jpg" alt="Thumbnail image for ">
                                                                                            <img class="wlModalGrid_CardCtntThumbImg img_small" src="/Library/TV/Watch/DemonSlayer/img/1.jpg" alt="Thumbnail image for ">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="wlModalGrid_CardCtntDetBdr">
                                                                                        <div class="wlModalGrid_CardCtntDetBox">
                                                                                            <div class="wlModalGrid_CardCtnt_DetTitleBox">
                                                                                                <div class="wlModalGrid_CardCtnt_DetTitleText">Demon Slayer</div>
                                                                                            </div>
                                                                                            <div class="wlModalGrid_CardCtnt_DetTagBdr">
                                                                                                <div class="wlModalGrid_CardCtnt_DetTagBox">
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox wlModalGrid_CardCtnt_DetTagRatingBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagRatingIcon">
                                                                                                            <svg class="wlModalGrid_CardCtnt_DetTagRatingSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagRatingText">8.5</div>
                                                                                                    </div>
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagTypeText">TV</div>
                                                                                                    </div>
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagReleaseText">2019</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="wlModalGrid_CardCtnt_DetDescBox">
                                                                                                <p class="wlModalGrid_CardCtnt_DetDescText">Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="wlModalActionFence wlModalAction_GridCardFence">
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
                                                                            <div class="wlModalGrid_CardCtntBdr">
                                                                                <div class="wlModalGrid_CardCtntBox">
                                                                                    <div class="wlModalGrid_CardCtntThumbBdr">
                                                                                        <div class="wlModalGrid_CardCtntThumbBox">
                                                                                            <img class="wlModalGrid_CardCtntThumbImg img_large" src="/Library/TV/Watch/MyHeroAcademia/img/2.jpg" alt="Thumbnail image for ">
                                                                                            <img class="wlModalGrid_CardCtntThumbImg img_small" src="/Library/TV/Watch/MyHeroAcademia/img/1.jpg" alt="Thumbnail image for ">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="wlModalGrid_CardCtntDetBdr">
                                                                                        <div class="wlModalGrid_CardCtntDetBox">
                                                                                            <div class="wlModalGrid_CardCtnt_DetTitleBox">
                                                                                                <div class="wlModalGrid_CardCtnt_DetTitleText">My Hero Academia</div>
                                                                                            </div>
                                                                                            <div class="wlModalGrid_CardCtnt_DetTagBdr">
                                                                                                <div class="wlModalGrid_CardCtnt_DetTagBox">
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox wlModalGrid_CardCtnt_DetTagRatingBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagRatingIcon">
                                                                                                            <svg class="wlModalGrid_CardCtnt_DetTagRatingSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagRatingText">7.8</div>
                                                                                                    </div>
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagTypeText">TV</div>
                                                                                                    </div>
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagReleaseText">2016</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="wlModalGrid_CardCtnt_DetDescBox">
                                                                                                <p class="wlModalGrid_CardCtnt_DetDescText">The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="wlModalActionFence wlModalAction_GridCardFence">
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
                                                                            <div class="wlModalGrid_CardCtntBdr">
                                                                                <div class="wlModalGrid_CardCtntBox">
                                                                                    <div class="wlModalGrid_CardCtntThumbBdr">
                                                                                        <div class="wlModalGrid_CardCtntThumbBox">
                                                                                            <img class="wlModalGrid_CardCtntThumbImg img_large" src="/Library/TV/Watch/ChainsawMan/img/2.jpg" alt="Thumbnail image for ">
                                                                                            <img class="wlModalGrid_CardCtntThumbImg img_small" src="/Library/TV/Watch/ChainsawMan/img/1.jpg" alt="Thumbnail image for ">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="wlModalGrid_CardCtntDetBdr">
                                                                                        <div class="wlModalGrid_CardCtntDetBox">
                                                                                            <div class="wlModalGrid_CardCtnt_DetTitleBox">
                                                                                                <div class="wlModalGrid_CardCtnt_DetTitleText">Chainsaw Man</div>
                                                                                            </div>
                                                                                            <div class="wlModalGrid_CardCtnt_DetTagBdr">
                                                                                                <div class="wlModalGrid_CardCtnt_DetTagBox">
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox wlModalGrid_CardCtnt_DetTagRatingBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagRatingIcon">
                                                                                                            <svg class="wlModalGrid_CardCtnt_DetTagRatingSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagRatingText">8.5</div>
                                                                                                    </div>
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagTypeText">TV</div>
                                                                                                    </div>
                                                                                                    <div class="wlModalGrid_CardCtnt_DetTagSectBox">
                                                                                                        <div class="wlModalGrid_CardCtnt_DetTagSectText wlModalGrid_CardCtnt_DetTagReleaseText">2022</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="wlModalGrid_CardCtnt_DetDescBox">
                                                                                                <p class="wlModalGrid_CardCtnt_DetDescText">Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="wlModalActionFence wlModalAction_GridCardFence">
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
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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


    