/***************************************************************
 * This will hold the code for the navigating pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


const content = document.getElementById('content');
let hash_win;
let hash_parts;
let hash_pages = [];
let last_hash_page;
let hash_timer;

// Listen for hash changes
window.addEventListener('hashchange', page_router);

function page_router()
{
    // Get the current hash value (e.g., #/home)
    hash_win = window.location.hash;

    // Set last hash page
    hash_pages.push(hash_win);
    last_hash_page = hash_pages.at(-2);

    // split into sections
    hash_parts = hash_win.split('/');

    // Display preloader
    preload.classList.remove("preloadClose");

    // Clear the doc content and scroll to the top
    documentCtnt.innerHTML = "";
    topNavBar.innerHTML = "";
    if((topNavBar.classList.contains("active"))) topNavBar.classList.remove("active");
    if((topNavBar.classList.contains("initialize"))) topNavBar.classList.remove("initialize");
    if((topNavBar.classList.contains("float"))) topNavBar.classList.remove("float");
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
    

    // Update content based on the hash
    switch(hash_parts[1])
    {
        case 'landing': // landing page
            page_route_success(``);
            break;

        case 'join': // log in/sign up page
            page_route_success(``);
            break;
            
        case 'home': // search page
            page_route_success(`preHomeSection`);
            sideNavLinks[1].classList.add("active");
            btmNavLinks[0].classList.add("active");
            break;
            
        case 'explore': // home page
            page_route_success(`initCategories`);
            sideNavLinks[0].classList.add("active");
            btmNavLinks[1].classList.add("active");
            break;
            
        case 'my-list': // Automatically redirects to watchlist by default
            page_route_success(`preLoadMyListPageStruct`);
            sideNavLinks[2].classList.add("active");
            btmNavLinks[2].classList.add("active");
            break;
            
        case 'schedule': // Find release dates and more
            page_route_success(`initSchedule`);
            sideNavLinks[3].classList.add("active");
            btmNavLinks[3].classList.add("active");
            break;
            
        case 'info': // For viewing info of shows add "/show-name"
            page_route_success(`preShowSection`);
            break;
            
        case 'watch': // For watching the shows add "/show-name"
            page_route_error(`construction`);
            break;
            
        case 'profile': // View your profile
            page_route_success(`initProfilePage`);
            break;
            
        case 'edit-profile': // Customize your profile
            page_route_success(``);
            break;
            
        case 'switch-profile': // switch to another profile
            page_route_success(``);
            break;
            
        case 'history': // View your watch history (a.k.a. Continue Watching)
            page_route_success(``);
            break;
            
        case 'notifications': // might end up being a modal
            page_route_success(``);
            break;
            
        case 'settings': // settings
            sideNavLinks[5].classList.add("active");
            page_route_error(`construction`);
            break;
            
        case 'news': // more navigation will be added later
            page_route_error(`construction`);
            sideNavLinks[4].classList.add("active");
            break;
            
        case 'feedback': // may be used as menu only
            page_route_success(`init_FeedbackForm`);
            break;
            
        case 'help': // Help Center
            page_route_error(`construction`);
            break;
            
        case 'tou': // terms of use
            page_route_error(`construction`);
            break;
            
        case 'copyright': // Copyright act
            page_route_error(`construction`);
            break;
            
        case 'ad-choices': // Understand ads provided (if-any)
            page_route_error(`construction`);
            break;
        
        default:
            page_route_error(); // displays a 404 error
            break;
    }
}





function page_route_success(funcName)
{
    window.scrollTo(0, 0);
    if((documentBody.classList.contains("bodystop"))) documentBody.classList.remove("bodystop");
    if((documentBody.hasAttribute("data-modal-state"))) documentBody.removeAttribute("data-modal-state");
    if((documentBody.hasAttribute("gen-menu-modal-is-dragging"))) documentBody.removeAttribute("gen-men-modal-is-dragging");
    callGlobalFunctions(funcName, null);
    preload.classList.add("preloadClose");
}


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



function prev_page_route()
{
    if((last_hash_page == undefined))
    {
        window.location.hash = "#/home";
        return;
    }
    window.location.hash = last_hash_page;
}
