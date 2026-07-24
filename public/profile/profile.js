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
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                        src="/images/uvid-green-bcg1-light.jpg" alt="Profile background image" class="profHeaderBcgImg"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="profHeaderFrgBdr">
                            <div class="profHeaderFrgBox">
                                <div class="profHeaderFrgImgBdr">
                                    <div class="profHeaderFrgImgBox">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="/images/uvid-profile-base.png" alt="Profile thumbnail image" class="profHeaderFrgImgSrc"
                                            >
                                        </div>
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
                                        <div class="basic_slider_card_box basic_carousel_slider basic_history_slider_card_box">
                                            <div class="slide_card_base basic_carousel_card crsl_more_btn more_history_card" data-crsl-more-type="history">
                                                <div class="slide_card_bdr">
                                                    <div class="slide_card_box">
                                                        <div class="slide_card ">
                                                            <div class="view_more_bdr">
                                                                <div class="view_more_box">
                                                                    <p class="view_more_name">Load more</p>
                                                                    <div class="view_more_dot_box">
                                                                        <span class="view_more_dots"></span>
                                                                        <span class="view_more_dots"></span>
                                                                        <span class="view_more_dots"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="slide_card_bcg"></div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div class="basic_slider_card_box basic_carousel_slider basic_likes_slider_card_box">
                                            <div class="slide_card_base basic_carousel_card crsl_more_btn more_likes_card" data-crsl-more-type="likes">
                                                <div class="slide_card_bdr">
                                                    <div class="slide_card_box">
                                                        <div class="slide_card ">
                                                            <div class="view_more_bdr">
                                                                <div class="view_more_box">
                                                                    <p class="view_more_name">Load more</p>
                                                                    <div class="view_more_dot_box">
                                                                        <span class="view_more_dots"></span>
                                                                        <span class="view_more_dots"></span>
                                                                        <span class="view_more_dots"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="slide_card_bcg"></div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div class="basic_slider_card_box basic_carousel_slider basic_dislikes_slider_card_box">
                                            <div class="slide_card_base basic_carousel_card crsl_more_btn more_dislikes_card" data-crsl-more-type="dislikes">
                                                <div class="slide_card_bdr">
                                                    <div class="slide_card_box">
                                                        <div class="slide_card ">
                                                            <div class="view_more_bdr">
                                                                <div class="view_more_box">
                                                                    <p class="view_more_name">Load more</p>
                                                                    <div class="view_more_dot_box">
                                                                        <span class="view_more_dots"></span>
                                                                        <span class="view_more_dots"></span>
                                                                        <span class="view_more_dots"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="slide_card_bcg"></div>
                                                </div>
                                            </div>
                                        </div>
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
                <section class="topNav_section"></section>
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
        sideNavLinks[7].classList.add("active");

        if((prof_nav_sect === "switch") || (prof_nav_sect === "create"))
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
        let userData = await getUserData();
        let profileInfoInv = await getUsrProfInv();
        let selectedProfile = await getSelectedProfile();

        // Select the default user profile, if prev selected profile could not be obtained
        if(((selectedProfile == undefined) || (selectedProfile == null)))
        {
            Object.entries(profileInfoInv).forEach(([key, profile]) => 
            {
                if((profile.prof_type === "default"))
                {
                    profileInfoInv[`profiles.${key}.prof_selected`] = true;
                }
                else
                {
                    profileInfoInv[`profiles.${key}.prof_selected`] = false;
                }
            });
            
            await updateUserData(profileInfoInv);

            // Notify user
            notification(`notifyBad`, `An error occured`);
            refreshPage();
            return;
        }

        let selectedProfileId = Object.entries(profileInfoInv).find(([key, profile]) => 
            profile.prof_selected === selectedProfile.prof_selected
        ) ;


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
        let ntfyLength = Number(userData?.notifications?.length);
        let ntfyUnread = userData?.notifications?.filter(item => item.notify_readStatus == false);
        let ntfyUnreadLength = Number(ntfyUnread?.length);
        
        if((ntfyLength > 0) && (ntfyUnreadLength > 0))
        {
            updNavbarNtfyStatus(ntfyLength, true);
        }

        // Fetch watch history, likes, and dislikes
        crsl_load_more_listener(true);
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

