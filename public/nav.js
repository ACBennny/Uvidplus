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
            route_atn: "initialiseLanding",
            route_title: null,
        },
        'join': 
        {
            route_pbl_only: true,
            route_auth: false,
            route_atn: "callprepare",
            route_title: "Uvid • Join",
        },
        'signin': 
        {
            route_pbl_only: true,
            route_auth: false,
            route_atn: "page_route_error",
            route_title: "Uvid • Sign In to Uvid",
        },
        'signup': 
        {
            route_pbl_only: true,
            route_auth: false,
            route_atn: "page_route_error",
            route_title: "Uvid • Sign Up for Uvid",
        },
        'tou': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "display_tou_",
            route_title: "Uvid • Terms of Use",
        },
        'privacy': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "display_privacy_",
            route_title: "Uvid • Privacy",
        },
        'ad-choices': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "display_ad_chc_",
            route_title: "Uvid • Ad Choices & Disclaimers",
        },
        'copyright': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "display_cpy_right_",
            route_title: "Uvid • Copyright Act & Disclaimers",
        },
        'help': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "page_route_error",
            route_title: "Uvid • Help Center",
        },
        'contact': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "page_route_error",
            route_title: "Uvid • Contact Us",
        },
        'feedback': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "init_FeedbackForm",
            route_title: "Uvid • Feedback",
        },
        'news': 
        {
            route_pbl_only: false,
            route_auth: false,
            route_atn: "page_route_error",
            route_title: "Uvid • News",
        },
        

        // Requries auth
        'home': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "preHomeSection",
            route_title: null,
        },
        'explore': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "initCategories",
            route_title: "Uvid • Explore",
        },
        'trending': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "launchTrendingPage",
            route_title: "Uvid • Trending",
        },
        'my-list': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "preLoadMyListPageStruct",
            route_title: "Uvid • My Lists",
        },
        'info': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "preShowSection",
            route_title: null,
        },
        'watch': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "page_route_error",
            route_title: null,
        },
        'schedule': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "initSchedule",
            route_title: "Uvid • Schedule",
        },
        'settings': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "initSettPage",
            route_title: "Uvid • Settings",
        },
        'profile': 
        {
            route_pbl_only: false,
            route_auth: true,
            route_atn: "initProfilePage",
            route_title: "Uvid • Profile",
        },
    };



// ROUTING

    // Check if user signed in. If not, redirect to landing page (Locally done)
    function getSignedInUser() 
    {
        const user = JSON.parse(localStorage.getItem('uvidSignedInUser'));

        if(user) 
        {
            console.log('yes, user is signed in.');
            return true;
        }
        else
        {
            console.log('No user is signed in.');
            return false;
        }
    }

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
    function page_route_error(type = "error")
    {
        window.scrollTo(0, 0);
        preload.classList.add("preloadClose");
        if(type === "construction")
        {
            // shows that page is under construction
            documentCtnt.insertAdjacentHTML(`afterbegin` , error503Struct);
        }
        else
        {
            documentCtnt.insertAdjacentHTML(`afterbegin` , error404Struct);
        }
    }

    // Goes to the default fallback page
    function page_route_fallback()
    {
        return getSignedInUser() ? "#/home" : "#/landing";
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

    // Handles routing process
    function page_router()
    {
        // Get the current hash value
        hash_win = window.location.hash || prev_page_route();

        // Set last hash page
        hash_pages.push(hash_win);
        last_hash_page = hash_pages.at(-2);

        // Split into sections
        hash_parts = hash_win.split('/');

        // Display preloader
        preload.classList.remove("preloadClose");

        // Clear the navbar and doc content and scroll to the top
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
        const isUsrIn = getSignedInUser();

        // If no route is found
        if(!curr_route)
        {
            if(isUsrIn)
            {
                window.location.hash = "#/home";
                return;
            }
            return page_route_error();
        }

        // Update page title according to route
        documentTitle.textContent = curr_route.route_title != null ? curr_route.route_title : "Uvid • Stream Movies, Tv Shows, and so much more";
        
        // Default to landing page if user tries to access auth required pages
        if((curr_route.route_auth) && !(isUsrIn))
        {
            window.location.hash = "#/landing";
            return;
        }

        // Defer signed-in user to homepage if on public-only page (e.g landing, signup/sign in)
        if((curr_route.route_pbl_only) && (isUsrIn))
        {
            window.location.hash = "#/home";
            console.log("public access only");
        }

        // Initialize navbars if user is signed-in
        if((isUsrIn))
        {
            sideNavBar.classList.add("initialize");
            btmNavBar.classList.add("initialize");
        }

        // Run the routes action
        page_route_success(curr_route.route_atn);
    }


    // Listen for hash changes
    window.addEventListener('hashchange', page_router);
