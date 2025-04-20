/*************************************************************
 * This holds the general functions for the User Settings page
 * 
 * Navigation Keys:
 * Membership & billing = membership
 * Profile & Parental Controls = parenting or profile(s)
 * App experience = experience
 * Privacy & Security = privacy
 * About & legal = information
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/




// DECLARATIONS

    let settNavBdr;




// INIT SETTINGS PAGE

    // Initialize
    function initSettPage()
    {
        documentCtnt.insertAdjacentHTML(`beforeend`, sett_base_struct);
        settNavBdr = document.querySelector(".settingNavBdr");
        topNavBar.innerHTML = settPageNav;

        window.addEventListener("resize", toggleSettNav);
        toggleSettNav();

        sett_sect_router();
        attachGenMenuModalEventListeners();
        attachSettSectNavListeners();
    }

    // Toggle Nav for smaller screens
    function toggleSettNav()
    {
        settNavBdr.classList.toggle("hidden", window.innerWidth < winWidth1025);
        topNavBar.classList.toggle("initialize", window.innerWidth < winWidth1025);
    }



// SETTING SECTOR NAV

    function attachSettSectNavListeners()
    {
        let settSectNavBtn = document.querySelectorAll(".settSectNavOptBtn");

        settSectNavBtn.forEach((oldBtn) => 
        {
            if(oldBtn.snav_atn)
            {
                oldBtn.removeEventListener("click", oldBtn.snav_atn);
            }
        });

        settSectNavBtn.forEach((newBtn) => 
        {
            let btn_sect = newBtn.getAttribute("data-sett-sect");
            
            const nav_action = () => 
            {
                // Scroll to section
                sett_sect_dstn(btn_sect);
            }

            newBtn.addEventListener("click", nav_action);
            newBtn.snav_atn = nav_action;
        });
    }

    // Routes to section based off the url
    function sett_sect_router()
    {
        let settNav = hash_parts[2];

        if((settNav === "parenting") || (settNav === "profile") || (settNav === "profiles"))
        {
            sett_sect_dstn("parenting");
        }
        else if(settNav === "experience")
        {
            sett_sect_dstn("experience");
        }
        else if(settNav === "privacy")
        {
            sett_sect_dstn("privacy");
        }
        else if(settNav === "information")
        {
            sett_sect_dstn("information");
        }
        else
        {
            // Defualts to membership section
            sett_sect_dstn("membership");
        }
    }


    // Updates the url to include the current sect
    function sett_url_upd(url)
    {
        const newSetturl = `#/settings/${url}`;

        if(url === "")
        {
            window.history.replaceState(null, '', '#/settings/membership');
        }
        else
        {
            window.history.replaceState(null, '', newSetturl);
        }
    }


    // Scrolls to the selected section
    function sett_sect_dstn(sect = "membership")
    {
        let sectTab = document.getElementById(`sett_${sect.trim().toLowerCase()}`).getBoundingClientRect();

        // Return if no match is found
        if(!sectTab) return;

        // Update the url
        sett_url_upd(sect);

        // Add selected class
        document.querySelectorAll(".settSectNavOptBtn").forEach((allBtn) => 
        {
            if(allBtn.classList.contains("active"))
            {
                allBtn.classList.remove("active");
            }

            if(allBtn.getAttribute("data-sett-sect") === sect)
            {
                allBtn.classList.add("active");
            }
        });

        // Scroll to the section's position
        let sectTabH = Math.ceil((sectTab.top + window.pageYOffset));

        window.scrollTo(
        {
            top: sectTabH,
            behavior: "smooth"
        });
    }



// SETTINGS COMPONENTS (SUB-SECTIONS)




// COMPONENT ACTIONS












