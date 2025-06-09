/***************************************************************
 * This will hold the code for General functions of the Profile page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let profPageStruct = 
    `
        <div class="profBdr">
            <div class="profBox">
                <div class="profHeaderBdr">
                    <div class="profHeaderBox">
                        <div class="profHeaderBcgBdr">
                            <div class="profHeaderBcgBox">
                                <img loading="lazy" onload="this.classList.add('loaded')" src="/images/uvid-green-bcg1-light.jpg" alt="" class="profHeaderBcgImg">
                            </div>
                        </div>
                        <div class="profHeaderFrgBdr">
                            <div class="profHeaderFrgBox">
                                <div class="profHeaderFrgImgBdr">
                                    <div class="profHeaderFrgImgBox">
                                        <img loading="lazy" onload="this.classList.add('loaded')" src="/images/uvid-profile-base.png" alt="" class="profHeaderFrgImgSrc">
                                    </div>
                                </div>
                                <div class="profHeaderFrgTitleBdr">
                                    <div class="profHeaderFrgTitleBox">
                                        <div class="profHeaderFrgTitleText profHeaderFrgTitle_major">N/A</div>
                                        <div class="profHeaderFrgTitleText profHeaderFrgTitle_minor">N/A</div>
                                    </div>
                                    <div class="profHeaderFrgTitleAtnBox">
                                        <button type="button" class="genBtnBox lightSolidBtn openEditProfBtn" title="Edit your profile">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                </svg>
                                            </div>
                                            <div class="genBtnText">Edit Profile</div>
                                        </button>
                                        <button type="button" class="genBtnBox greySolidBtn openSwitchProfBtn" title="Switch your profile" onclick="window.open('#/profile/switch' , '_self')">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z" />
                                                    <path d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z" />
                                                </svg>
                                            </div>
                                            <div class="genBtnText">Switch Profile</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profBodyBdr">
                    <div class="profBodyBox">
                        <div class="more_content">

                            <!-- History -->
                            <div class="basic_slider_bdr basic_carousel">
                                <div class="basic_slider_title_bdr">
                                    <div class="basic_slider_title_box">
                                        <h2>
                                            <span class="big">H</span>
                                            <span class="small">istory</span>
                                        </h2>
                                        <p>All the shows you watched</p>
                                    </div>
                                </div>
                                <div class="basic_slider_ctnt">
                                    <div class="basic_slider_box">
                                        <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="basic_slider_card_box basic_carousel_slider basic_history_slider_card_box"></div>
                                        <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                        
                            <!-- Likes -->
                            <div class="basic_slider_bdr basic_carousel">
                                <div class="basic_slider_title_bdr">
                                    <div class="basic_slider_title_box">
                                        <h2>
                                            <span class="big">L</span>
                                            <span class="small">iked</span>
                                        </h2>
                                        <p>All the shows you like</p>
                                    </div>
                                </div>
                                <div class="basic_slider_ctnt">
                                    <div class="basic_slider_box">
                                        <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="basic_slider_card_box basic_carousel_slider basic_likes_slider_card_box"></div>
                                        <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Dislikes -->
                            <div class="basic_slider_bdr basic_carousel">
                                <div class="basic_slider_title_bdr">
                                    <div class="basic_slider_title_box">
                                        <h2>
                                            <span class="big">D</span>
                                            <span class="small">isliked</span>
                                        </h2>
                                        <p>All the shows you dislike</p>
                                    </div>
                                </div>
                                <div class="basic_slider_ctnt">
                                    <div class="basic_slider_box">
                                        <div class="basic_slide_arrow left_slide_arrow arr_left hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Left">
                                                <path fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="basic_slider_card_box basic_carousel_slider basic_dislikes_slider_card_box"></div>
                                        <div class="basic_slide_arrow right_slide_arrow arr_right hide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="basic_slide_arrowIcon basic_icon_Right">
                                                <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
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
    `;
    let profPageNav = 
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="topNav_titleBox">
                        <div class="topNav_titleText">Profile</div>
                    </div>
                </section>
                <section class="topNav_section">
                    <div class="sideNavItemsCardBase ">
                        <button type="button" class="sideNavItemsCardBdr open_ntfy_btn" onclick="startNotification()">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg">
                                        <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" />
                                    </svg>
                                </div>
                                <div class="navBarNotificationStatusNo_bdr">
                                    <div class="navBarNotificationStatusNo_box ">
                                        <div class="navBarNotificationStatusNo_text"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="sideNavItemsCardBase">
                        <button type="button" class="sideNavItemsCardBdr" onclick="window.open('#/settings' , '_self')">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                        <g fill-rule="evenodd" clip-rule="evenodd">
                                            <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="sideNavItemsCardBase">
                        <div class="sideNavItemsCardBdr openCastingOptBtn" onclick="notification('notifyBad' , 'Feature currently unavailable')">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                        <path d="M6.452 3.25c-.418 0-.685 0-.918.023a4.75 4.75 0 0 0-4.261 4.261c-.023.233-.023.5-.023.918V8.5a.75.75 0 1 0 1.5 0c0-.482 0-.669.016-.819A3.25 3.25 0 0 1 5.68 4.766c.15-.015.337-.016.819-.016H14c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14a.75.75 0 0 0 0 1.5h.056c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153z" />
                                        <path d="M2 10.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 20a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 10.25" />
                                        <path d="M1.25 14a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 20a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75" />
                                        <path d="M2 16.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 20a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
    let profName;
    let profFrg;
    let profBcg;

    

    function initProfilePage()
    {
        let prof_nav_sect = hash_parts[2];
        
        // Update Navbar active states
        sideNavLinks[6].classList.add("active");

        if(prof_nav_sect === "create")
        {
            console.log("Create profile..");
        }
        else if(prof_nav_sect === "switch")
        {
            initManageProfileModal('switch');
        }
        else if(prof_nav_sect === "edit")
        {
            if((hash_parts[3]) && (hash_parts[3] !== ""))
            {
                initProfEditModal();
                return;
            }
            initManageProfileModal('edit');
        }
        else
        {
            startProfileYou();
        }
    }

    async function startProfileYou()
    {
        let profileInfoInv = await getUsrProfInv();
        let selectedProfile = await getSelectedProfile();
        let selectedProfileId = Object.entries(profileInfoInv).find(([key, profile]) => 
            profile.prof_selected === selectedProfile.prof_selected
        );

        // Insert document element
        documentCtnt.insertAdjacentHTML(`afterbegin` , profPageStruct);

        // Insert top Navigation
        topNavBar.insertAdjacentHTML(`afterbegin` , profPageNav);
        topNavBar.classList.add("initialize");

        // Set the profile bcg
        document.querySelector(".profHeaderBcgImg").setAttribute(`src` , `${selectedProfile.prof_bcgImg}`);

        // Set the profile frg
        document.querySelector(".profHeaderFrgImgSrc").setAttribute(`src` , `${selectedProfile.prof_frgImg}`);

        // set the prof name
        document.querySelector(".profHeaderFrgTitle_major").textContent = selectedProfile.prof_name;

        // Set the greeting
        document.querySelector(".profHeaderFrgTitle_minor").textContent = getGreeting();

        // Edit Profile
        document.querySelector(".openEditProfBtn").onclick = () => window.open(`#/profile/edit/${selectedProfileId[0]}` , `_self`);

        // Set the Notifications number (for unread notifications)
        let ntfyLength = Number(selectedProfile.prof_notifications.length);
        let ntfyUnread = selectedProfile.prof_notifications.filter(item => item.notify_readStatus == false);
        let ntfyUnreadLength = Number(ntfyUnread.length);
        
        if((ntfyLength > 0) && (ntfyUnreadLength > 0))
        {
            document.querySelector(".open_ntfy_btn .navBarNotificationStatusNo_text").textContent = `${ntfyLength}`;
            document.querySelector(".open_ntfy_btn .navBarNotificationStatusNo_box").classList.add("active");
        }

        // Fetch watch history
        preFetchingShowsFromHistory("history");

        // Fetch liked shows
        preFetchingShowsFromLikes();

        // Fetch disliked shows
        preFetchingShowsFromDislikes();
    }

    // Gets a value for the greeting based on the current time
    function getGreeting()
    {
        const currDate = new Date();
        const currHours = currDate.getHours();
        let greeting;

        if ((currHours >= 0) && (currHours < 12))
        {
            greeting = "Good morning";
        }
        else if((currHours >= 12) && (currHours < 17))
        {
            greeting = "Good afternoon";
        }
        else
        {
            greeting = "Good evening";
        }

        return greeting;
    }

