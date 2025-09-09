/***************************************************************
 * This will hold the code for the navigating pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITIONS

    let hash_win;
    let hash_parts;
    let hash_pages = [];
    let last_hash_page;
    let hash_timer;

    const uvid_pg_routes = 
    {
        'landing': 
        {
            route_pbl_only: true,
            route_auth: false,
            route_member: false,
            route_atn: "initialiseLanding",
            route_title: null,
        },
        'signup': 
        {
            route_pbl_only: true,
            route_auth: false,
            route_member: false,
            route_atn: "initSignUpForm",
            route_title: "Sign Up for Uvid+",
        },
        'setup': 
        {
            route_pbl_only: true,
            route_auth: true,
            route_member: false,
            route_atn: null,
            route_title: "Create or Restart your Membership • Uvid+",
        },
        'signin': 
        {
            route_pbl_only: true,
            route_auth: false,
            route_member: false,
            route_atn: "initSignInForm",
            route_title: "Sign In to Uvid+",
        },
        'signout': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: false,
            route_atn: "cfrmB4SignOut",
            route_title: null,
        },
        'tou': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "display_tou_",
            route_title: "Terms of Use • Uvid+",
        },
        'privacy': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "display_privacy_",
            route_title: "Privacy • Uvid+",
        },
        'ad-choices': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "display_ad_chc_",
            route_title: "Ad Choices & Disclaimers • Uvid+",
        },
        'copyright': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "display_cpy_right_",
            route_title: "Copyright Act & Disclaimers • Uvid+",
        },
        'help': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "nav_help_pgs",
            route_title: "Help Center • Uvid+",
        },
        'news': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "page_route_error",
            route_title: "News • Uvid+",
        },
        

        // Requries auth
        'home': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "preHomeSection",
            route_title: null,
        },
        'explore': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initCategories",
            route_title: "Explore • Uvid+",
        },
        'category': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initCategoryPg",
            route_title: "Categories • Uvid+",
        },
        'genre': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initCategoryPg",
            route_title: "Genres • Uvid+",
        },
        'my-list': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "preLoadMyListPageStruct",
            route_title: "My Lists • Uvid+",
        },
        'tv': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "preShowSection",
            route_title: null,
        },
        'movie': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "preShowSection",
            route_title: null,
        },
        'person': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initPrsnPg",
            route_title: null,
        },
        'watch': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initWatchPage",
            route_title: null,
        },
        'schedule': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initSchedule",
            route_title: "Schedule • Uvid+",
        },
        'profile': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initProfilePage",
            route_title: "Profile • Uvid+",
        },
        'settings': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_member: true,
            route_atn: "initSettPage",
            route_title: "Settings • Uvid+",
        },
        'feedback': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_member: false,
            route_atn: "init_FeedbackForm",
            route_title: "Feedback • Uvid+",
        },
    };



// ROUTING


    // Actions for successful routes
    function page_route_success(funcName)
    {
        window.scrollTo(0, 0);
        if((documentBody.classList.contains("bodystop"))) documentBody.classList.remove("bodystop");
        if((documentBody.hasAttribute("data-modal-state"))) documentBody.removeAttribute("data-modal-state");
        if((documentBody.hasAttribute("gen-menu-modal-is-dragging"))) documentBody.removeAttribute("gen-men-modal-is-dragging");
        callGlobalFunctions(funcName, null);
        preload.classList.add("preloadClose");
    }

    // Displays error message for failed routing
    function page_route_error(type)
    {
        window.scrollTo(0, 0);
        preload.classList.add("preloadClose");
        if(type === "error")
        {
            documentCtnt.insertAdjacentHTML(`afterbegin` , error404Struct);
        }
        else
        {
            // shows that page is under construction
            documentCtnt.insertAdjacentHTML(`afterbegin` , error503Struct);
        }
    }

    // Goes to the default fallback page
    function page_route_fallback()
    {
        return isUserSignedIn() ? "#/home" : "#/landing";
    }

    // Goes back to previous page route
    function prev_page_route()
    {
        if((last_hash_page == undefined))
        {
            window.location.hash = page_route_fallback();
            return;
        }
        window.location.hash = last_hash_page;
    }

    // (ATTENTION NEEDED) Goes to the page user originally attempted accessing after signing in
    async function defer_page_route(atn = "set")
    {
        return notification(`notifyBad`, `Defer ${atn} functionality is unavailable at this time`);
        if(atn === "get")
        {
            let userInfo = await getSignedInUser();

            // Open verification if user isn't verified
            if(!userInfo.emailVerified)
            {
                init_setup();
                init_signup_vrfy(false);
                return;
            }

            // After logging in, the attempted page is opened. If none, it defaults to the home page
            let attempt_pg_str = JSON.parse(localStorage.getItem('uvid_atmpt_pg')) || "#/home";
            localStorage.removeItem('uvid_atmpt_pg');
            window.location.hash = attempt_pg_str;
        }
        else
        {
            // Stores the page user is attempting to access
            let curr_pg = window.location.hash || "#/home";
            localStorage.removeItem('uvid_atmpt_pg');
            localStorage.setItem('uvid_atmpt_pg', JSON.stringify(curr_pg));

            if(!(isUserSignedIn())) window.location.hash = "#/signin";
        }
    }

    // Handles routing process
    async function page_router()
    {
        // Get the current hash value
        hash_win = window.location.hash || page_route_fallback();

        // Set last hash page
        hash_pages.push(hash_win);
        last_hash_page = hash_pages.at(-2);

        // Split into sections
        hash_parts = hash_win.split('/');

        // Display preloader
        preload.classList.remove("preloadClose");

        // Clear the navbar and doc content and scroll to the top
        documentBody.scrollTo(0, 0);
        documentCtnt.innerHTML = "";
        topNavBar.innerHTML = "";
        topNavBar.className = "topNavBar";
        sideNavBar.className = "sideNavBar";
        btmNavBar.className = "btmNavBar";
        sideNavLinks.forEach((navLink) => 
        {
            if(navLink.classList.contains("active"))
            {
                navLink.classList.remove("active");
            }
        });
        btmNavLinks.forEach((navLink) => 
        {
            if(navLink.classList.contains("active"))
            {
                navLink.classList.remove("active");
            }
        });
        if((navbarUnderlayer.classList.contains("active"))) navbarUnderlayer.classList.remove("active");


        // Find matching route
        const curr_route = uvid_pg_routes[hash_parts[1]];
        const isUsrIn = isUserSignedIn();
        const isUsrVrfd = isUserVerified();
        const usrData = await getUserData();
        const isUsrStp = usrData?.is_setup;
        const isUsrMmbr = usrData?.is_membership_active;

        // If no route is found
        if(!curr_route)
        {
            if((isUsrIn) && (isUsrMmbr))
            {
                window.location.hash = "#/home";
                return;
            }
            return page_route_error("error");
        }

        // Update page title according to route
        documentTitle.textContent = curr_route.route_title != null ? curr_route.route_title : "Stream Movies, Tv Shows, and so much more • Uvid+";
        
        // Default to login page if user tries to access auth required pages
        if((curr_route.route_auth) && !(isUsrIn))
        {
            window.location.hash = "#/signin";
            return;
        }

        // Open verification if user is signed in but isn't verified
        if(((curr_route.route_pbl_only) || (curr_route.route_auth)) && (isUsrIn) && !(isUsrVrfd))
        {
            init_setup();
            init_signup_vrfy();
            return;
        }

        // If user is signed in and verified..
        if(((curr_route.route_pbl_only) || (curr_route.route_auth)) && (isUsrIn) && (isUsrVrfd))
        {
            // Go to plan section if user's membership is inactive
            if(!(isUsrMmbr) && !(isUsrStp)) return usrMbspExp();

            // Go to last step if user is still in setup
            else if(!(isUsrMmbr) && (isUsrStp))
            {
                const usrStpStep = usrData?.stp_steps;
                if(usrStpStep)
                {
                    init_setup();
                    switch_step(usrStpStep);
                    return;
                }
            }
        }

        // Defer signed-in & verified user to homepage if on public-only page (e.g landing, signup/sign in)
        if((curr_route.route_pbl_only) && (isUsrIn) && (isUsrVrfd) && (isUsrMmbr))
        {
            window.location.hash = "#/home";
            return;
        }

        // Initialize navbars if user is a valid member
        if((isUsrIn) && (isUsrVrfd) && (isUsrMmbr))
        {
            sideNavBar.classList.add("initialize");
            btmNavBar.classList.add("initialize");
        }

        // Run the routes action
        page_route_success(curr_route.route_atn);
    }


    // Listen for hash changes
    window.addEventListener('hashchange', page_router);
