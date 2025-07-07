/*************************************************************
 * This holds the general functions for the User Settings page
 * 
 * Navigation Keys:
 * Membership & billing = membership
 * Profile & Parental Controls = parenting
 * App experience = experience
 * Privacy & Security = privacy
 * About & legal = information
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/




// DECLARATIONS

    let sett_base_struct = 
    `
        <div class="settingBdr">
            <div class="settingBox">
                <div class="settingNavBdr hidden">
                    <div class="settingNavBox">
                        <div class="settingNavTitleBox">
                            <p class="settingNavTitleText">Settings</p>
                        </div>
                        <button type="button" class="settingNavOptBox settSectNavOptBtn" data-sett-sect="membership">
                            <div class="settingNavOptIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settingNavOptSvg">
                                    <path d="M20.941 8.189c.58.573.83 1.295.947 2.152c.112.826.112 1.876.112 3.178v.105c0 1.302 0 2.352-.112 3.178c-.117.857-.367 1.579-.947 2.152s-1.31.82-2.178.935c-.835.111-1.898.111-3.216.111h-4.925c-1.318 0-2.38 0-3.216-.111c-.868-.115-1.598-.362-2.178-.935a3 3 0 0 1-.735-1.204c.871.107 1.95.107 3.195.107h5.01c1.281 0 2.385 0 3.27-.117c.947-.126 1.856-.41 2.593-1.138s1.024-1.626 1.151-2.562c.12-.874.12-1.965.119-3.232v-.188c0-1.23 0-2.296-.11-3.158c.46.151.868.379 1.22.727m-10.748.859c-.932 0-1.687.746-1.687 1.666s.755 1.667 1.687 1.667c.931 0 1.686-.746 1.686-1.667c0-.92-.755-1.666-1.686-1.666" />
                                    <path fill-rule="evenodd" d="M2.847 5.837C2 6.674 2 8.02 2 10.714s0 4.041.847 4.878s2.21.837 4.936.837h4.82c2.725 0 4.088 0 4.935-.837s.847-2.184.847-4.878s0-4.04-.847-4.877S15.328 5 12.602 5H7.783c-2.726 0-4.09 0-4.936.837m4.213 4.877c0-1.71 1.403-3.095 3.133-3.095s3.132 1.386 3.132 3.095s-1.402 3.096-3.132 3.096s-3.133-1.386-3.133-3.096m8.434 2.62c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.723.32.723.715v3.81a.72.72 0 0 1-.723.713m-11.325-.715c0 .395.323.714.723.714s.722-.32.722-.714V8.81a.72.72 0 0 0-.722-.714c-.4 0-.723.32-.723.715z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="settingNavOptText">Membership & Billing</p>
                        </button>
                        <button type="button" class="settingNavOptBox settSectNavOptBtn" data-sett-sect="parenting">
                            <div class="settingNavOptIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settingNavOptSvg">
                                    <path d="M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m2.5 9c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5M7.122 5q.267 0 .518.05A5 5 0 0 0 7 7.5c0 .868.221 1.685.61 2.396q-.237.045-.488.045c-1.414 0-2.561-1.106-2.561-2.47S5.708 5 7.122 5M5.447 18.986C4.88 18.307 4.5 17.474 4.5 16.5c0-.944.357-1.756.896-2.423C3.49 14.225 2 15.267 2 16.529c0 1.275 1.517 2.325 3.447 2.457M17 7.5c0 .868-.221 1.685-.61 2.396q.236.045.488.045c1.414 0 2.56-1.106 2.56-2.47S18.293 5 16.879 5q-.267 0-.518.05c.407.724.64 1.56.64 2.45m1.552 11.486c1.93-.132 3.447-1.182 3.447-2.457c0-1.263-1.491-2.304-3.396-2.452c.54.667.896 1.479.896 2.423c0 .974-.38 1.807-.947 2.486" />
                                </svg>
                            </div>
                            <p class="settingNavOptText">Profile & Parental Controls</p>
                        </button>
                        <button type="button" class="settingNavOptBox settSectNavOptBtn" data-sett-sect="experience">
                            <div class="settingNavOptIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settingNavOptSvg">
                                    <path fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd" />
                                    <path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" />
                                </svg>
                            </div>
                            <p class="settingNavOptText">App Experience</p>
                        </button>
                        <button type="button" class="settingNavOptBox settSectNavOptBtn" data-sett-sect="privacy">
                            <div class="settingNavOptIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settingNavOptSvg">
                                    <path fill-rule="evenodd" d="m4.614 8.545l-.426 1.705H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2.187l-.427-1.705c-.546-2.183-.818-3.274-1.632-3.91C16.94 4 15.815 4 13.565 4h-3.13c-2.25 0-3.375 0-4.189.635c-.814.636-1.087 1.727-1.632 3.91M6.5 21a3.5 3.5 0 0 0 3.384-2.604l1.11-.555a2.25 2.25 0 0 1 2.012 0l1.11.555A3.501 3.501 0 0 0 21 17.5a3.5 3.5 0 0 0-6.91-.794l-.413-.206a3.75 3.75 0 0 0-3.354 0l-.413.206A3.501 3.501 0 0 0 3 17.5A3.5 3.5 0 0 0 6.5 21" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="settingNavOptText">Privacy & Security</p>
                        </button>
                        <button type="button" class="settingNavOptBox settSectNavOptBtn" data-sett-sect="information">
                            <div class="settingNavOptIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settingNavOptSvg">
                                    <path d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358" />
                                    <path fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="settingNavOptText">About & Legal</p>
                        </button>
                    </div>
                </div>
                <div class="settCtntBdr">
                    <div class="settCtntBox">
                        <section class="settCtntTab" id="sett_membership">
                            <div class="settCtntTitleBox">
                                <div class="settCtntTitleText">
                                    <span class="major">M</span>
                                    <span class="minor">embership & Billing</span>
                                </div>
                            </div>
                        </section>
                        <section class="settCtntTab" id="sett_parenting">
                            <div class="settCtntTitleBox">
                                <div class="settCtntTitleText">
                                    <span class="major">P</span>
                                    <span class="minor">rofile & Parental Controls</span>
                                </div>
                            </div>
                        </section>
                        <section class="settCtntTab" id="sett_experience">
                            <div class="settCtntTitleBox">
                                <div class="settCtntTitleText">
                                    <span class="major">A</span>
                                    <span class="minor">pp Experience</span>
                                </div>
                            </div>
                        </section>
                        <section class="settCtntTab" id="sett_privacy">
                            <div class="settCtntTitleBox">
                                <div class="settCtntTitleText">
                                    <span class="major">P</span>
                                    <span class="minor">rivacy & Security</span>
                                </div>
                            </div>
                        </section>
                        <section class="settCtntTab" id="sett_information">
                            <div class="settCtntTitleBox">
                                <div class="settCtntTitleText">
                                    <span class="major">A</span>
                                    <span class="minor">bout & Legal</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    `;
    let settPageNav = 
    `
        <div class="topNavBdr dlPgNav">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="topNav_titleBox">
                        <div class="topNav_titleText">Settings</div>
                    </div>
                </section>
                <section class="topNav_section">
                    <button type="button" class="genBtnBox greySolidBtn openGenMenuModalBtn" data-gen-menu-modal-type="sett_sect_nav">
                        <div class="genBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="genBtnText">Menu</div>
                    </button>
                </section>
            </div>
        </div>
    `;
    let settNavBdr;




// INIT SETTINGS PAGE

    // Initialize
    function initSettPage()
    {
        // Update Navbar active states
        sideNavLinks[5].classList.add("active");

        documentCtnt.insertAdjacentHTML(`beforeend`, sett_base_struct);
        settNavBdr = document.querySelector(".settingNavBdr");
        topNavBar.innerHTML = settPageNav;

        window.addEventListener("resize", toggleSettNav);
        toggleSettNav();
        sett_cmpnt_builder();
    }

    // Functions to call
    function settCallFunc()
    {
        sett_sect_router();
        attachGenMenuModalEventListeners();
        attachSettSectNavListeners();
        upd_sett_info();
        attachSectAtnTglListeners();
        attachSettSectMdlListeners();
    }

    // Toggle Nav for smaller screens
    function toggleSettNav()
    {
        settNavBdr.classList.toggle("hidden", window.innerWidth < winWidth1025);
        topNavBar.classList.toggle("initialize", window.innerWidth < winWidth1025);
    }

    // Build the components of each section
    function sett_cmpnt_builder()
    {
        for(let i = 0; i < sett_cmpnt_lib.length; i++)
        {
            let item = sett_cmpnt_lib[i];
            let settCtntStruct = ``;
            let sectCtntInfoStruct = ``;
            let settCtntAtnStruct = ``;
            let settCtntOrientStruct = ``;
            let settCtntOrientFlag = item.sett_orientation === "vertical" ? true : false;

            // Create the info structure
            sectCtntInfoStruct = 
            `
                <div class="sett_ctnt_info">
                    <div class="settCtntSectTitleBox">
                        <div class="settCtntSectTitleText">${item.sett_title}</div>
                    </div>
                    <div class="settCtntSectDescBox">
                        <p class="settCtntSectDescText">${item.sett_desc}</p>
                    </div>
                </div>
            `;

            // Determine and set the appropriate content for the action btn
            if(settCtntOrientFlag == false)
            {
                if(item.sett_atn_type === "toggle")
                {
                    settCtntAtnStruct = 
                    `
                        <div class="settCtntSectAtnBdr">
                            <div class="settCtntSectAtnBox">
                                <button class="settCtntSectAtnBtn ">
                                    <div class="genCheckBoxBase">
                                        <input type="checkbox" id="${item.sett_atn_id}" class="genCheckBoxInput settCtntSectAtnToggle" tabindex="-1">
                                        <label for="${item.sett_atn_id}" class="genCheckBoxToggle">
                                            <span class="genCheckBoxToggleCircle"></span>
                                        </label>
                                    </div>
                                </button>
                            </div>
                        </div>
                    `;
                }
                else if(item.sett_atn_type === "menu")
                {
                    settCtntAtnStruct = 
                    `
                        <div class="settCtntSectAtnBdr">
                            <div class="settCtntSectAtnBox">
                                <button id="${item.sett_atn_id}" class="settCtntSectAtnBtn settCtntSectAtnIcon openGenMenuModalBtn" data-gen-menu-modal-type="sett_sect_menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settCtntSectAtnSvg">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    `;
                }
                else if(item.sett_atn_type === "modal")
                {
                    let atn_func = item.sett_atn_func !== "" ? `${item.sett_atn_func}` : `notification('notifyBad', 'Feature currently unavailable')`;
                    settCtntAtnStruct = 
                    `
                        <div class="settCtntSectAtnBdr">
                            <div class="settCtntSectAtnBox">
                                <button data-sett-sect-type="modal" data-modal-atn="${atn_func}" id="${item.sett_atn_id}" class="settCtntSectAtnBtn settCtntSectAtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settCtntSectAtnSvg">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    `;
                }
                else if(item.sett_atn_type === "link")
                {
                    settCtntAtnStruct = 
                    `
                        <div class="settCtntSectAtnBdr">
                            <div class="settCtntSectAtnBox">
                                <button onclick="window.open('${item.sett_atn_func}', '_self')" id="${item.sett_atn_id}" class="settCtntSectAtnBtn settCtntSectAtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settCtntSectAtnSvg">
                                        <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    `;
                }

                // Combine the two structs and set as content of the orient element
                settCtntOrientStruct = 
                `
                    <div class="sett_ctnt_hrtl">
                        ${sectCtntInfoStruct + settCtntAtnStruct}
                    </div>
                `;
            }
            else
            {
                // Only add the info struct
                settCtntOrientStruct = 
                `
                    <div class="sett_ctnt_hrtl">
                        ${sectCtntInfoStruct}
                    </div>
                `;
            }

            // Complete the ctnt structure
            settCtntStruct = 
            `
                <div class="settCtntSectBdr">
                    <div class="settCtntSectBox">
                        ${settCtntOrientStruct}
                    </div>
                </div>
            `;

            // Append to the appropriate section
            document.querySelectorAll(".settCtntTab").forEach((sect) => 
            {
                let sect_id = sect.getAttribute("id");

                if(sect_id === `sett_${item.sett_sect.trim().toLowerCase()}`)
                {
                    sect.insertAdjacentHTML(`beforeend` , settCtntStruct);
                }
            });
        }

        // Call functions after initializing
        settCallFunc();
    }



// NAVIGATING SETTINGS PAGE

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

        if((settNav === "parenting"))
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
            // Defaults to membership section
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





// GENERAL SETTINGS

    // Adds the current information of their corresponding sectors
    async function upd_sett_info()
    {
        const auth = window.firebaseAuth;
        const user = auth.currentUser;

        // Return if no user is signed in
        if(!user)
        {
            notification(`notifyBad`, "No user is currently signed in.");
            return;
        }

        const email = user.email;
        const userDB = await getUserData();
        const fullname = userDB.full_name;
        const wifi_only_dwld = userDB.wifi_only_dwld;
        const wifi_only_strm = userDB.wifi_only_stream;
        const cell_strm_ntfy = userDB.cellular_stream_ntfy;
        const share_pi = userDB.share_prsnl_info;

        // Name
        let fname_prnt = document.getElementById("sett_change_fullname").closest(".sett_ctnt_hrtl");
        fname_prnt.querySelector(".settCtntSectDescText").textContent = fullname;

        // Email
        let email_prnt = document.getElementById("sett_change_email").closest(".sett_ctnt_hrtl");
        email_prnt.querySelector(".settCtntSectDescText").textContent = email;

        // Wifi Only dowload
        document.getElementById("sett_wifi_dwld").checked = typeof wifi_only_dwld === "boolean" ? wifi_only_dwld : null;

        // Wifi Only stream
        document.getElementById("sett_wifi_stream").checked = typeof wifi_only_strm === "boolean" ? wifi_only_strm : null;

        // Cellular Stream notification
        document.getElementById("sett_cellular_stream").checked = typeof cell_strm_ntfy === "boolean" ? cell_strm_ntfy : null;

        // Info sharing
        document.getElementById("sett_prsnl_info_shrng").checked = typeof share_pi === "boolean" ? share_pi : null;
    }


    // Updates items with toggle buttons
    function attachSectAtnTglListeners()
    {
        const sett_rad_btn = document.querySelectorAll(".settCtntSectAtnToggle");

        sett_rad_btn.forEach((olditem) => 
        {
            if((olditem.sett_atn))
            {
                olditem.removeEventListener("click" , olditem.sett_atn)
            }
        });

        sett_rad_btn.forEach((newBtn) => 
        {
            const rad_atn = async () => 
            {
                sett_rad_btn.forEach(item => item.disabled = true);
                let checkBtn = newBtn.parentElement.querySelector(`input[type="checkbox"]#${newBtn.id}:checked`);
                let ischk = false;

                if(checkBtn)
                {
                    // Update flag to true
                    ischk = true;
                }
                else
                {
                    // Update flag to false
                    ischk = false;
                }

                //  Update the corresponding property
                try 
                {
                    switch(newBtn.id)
                    {
                        case 'sett_wifi_dwld':
                            await updateUserData(
                            {
                                wifi_only_dwld: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;
                            
                        case 'sett_wifi_stream':
                            await updateUserData(
                            {
                                wifi_only_stream: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;
                            
                        case 'sett_cellular_stream':
                            await updateUserData(
                            {
                                cellular_stream_ntfy: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;
                            
                        case 'sett_prsnl_info_shrng':
                            await updateUserData(
                            {
                                share_prsnl_info: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;

                        default:
                            notification('notifyBad', 'Failed to update preferences');
                            break;
                    }

                    // Re-enable toggle buttons
                    sett_rad_btn.forEach(item => item.disabled = false);
                }
                catch(err)
                {
                    // Log any errors and re-enable toggle buttons
                    console.error(err);
                    sett_rad_btn.forEach(item => item.disabled = false);
                }
            }

            newBtn.addEventListener("click", rad_atn);
            newBtn.sett_atn = rad_atn;
        });
    }


    // Updates items with draggable menus
    async function attachSettSectMenuListeners(event)
    {
        // Get the clicked button
        let settCardMenuBtn = event.target.closest("[data-gen-menu-modal-type='sett_sect_menu']");
        
        if (!settCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='sett_sect_menu'] not found.");
            return;
        }

        // Get the id
        let settCardId = settCardMenuBtn.id;

        if (!settCardId)
        {
            console.error("Button is invalid");
            return;
        }

        // Generate the content of the menu
        let menuCtntBox = document.querySelector(".settSectMenuCtntBox");
        let menuLangId = settCardId !== "sett_dwld_qlty" ? settCardId !== "sett_dwld_lang" ? "cast_data_usage_ul" : "dwld_audio_pref" : "dwld_qlty_pref";
        let menuUpdId = settCardId !== "sett_dwld_qlty" ? settCardId !== "sett_dwld_lang" ? "cast_data_usage_ul" : "dwld_audio_pref" : "dwld_qlty_pref";
        let menuCtntStruct = ``;

        // Build up the menu
        if((settCardId === "sett_dwld_lang"))
        {
            // Default Option
            menuCtntStruct = 
            `
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="0">
                    <div class="genMenuModalCtntBtnText">None</div>
                </button>
            `;

            // Insert other options
            for(let i = 0; i < LangOptLib.langOptInv.audioLangSelect.lang_options.length; i++)
            {
                let item = LangOptLib.langOptInv.audioLangSelect.lang_options[i];
                
                menuCtntStruct += 
                `
                    <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="${i+1}">
                        <div class="genMenuModalCtntBtnText">${item.opt}</div>
                    </button>
                `;
            }
        }
        else if((settCardId === "sett_dwld_qlty"))
        {
            menuCtntStruct = 
            `
                <div class="genMenuModalCtntSectBox">
                    <p class="genMenuModalCtntSectText">Max Size for approx. 25mins</p>
                </div>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="0">
                    <div class="genMenuModalCtntBtnText">Always ask</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="1">
                    <div class="genMenuModalCtntBtnText">Best (0.7GB)</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="2">
                    <div class="genMenuModalCtntBtnText">Better (0.45GB)</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="3">
                    <div class="genMenuModalCtntBtnText">Good (0.3GB)</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="4">
                    <div class="genMenuModalCtntBtnText">Data Saver (0.11GB)</div>
                </button>
            `;
        }
        else if((settCardId === "sett_cast_data_usage"))
        {
            menuCtntStruct = 
            `
                <div class="genMenuModalCtntSectBox">
                    <p class="genMenuModalCtntSectText">Max Allocated Bandwidth</p>
                </div>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="0">
                    <div class="genMenuModalCtntBtnText">Unlimited</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="1">
                    <div class="genMenuModalCtntBtnText">250GB</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="2">
                    <div class="genMenuModalCtntBtnText">100GB</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="3">
                    <div class="genMenuModalCtntBtnText">50GB</div>
                </button>
                <button class="genMenuModalCtntBtnBox settSectMenuOptBtn" data-sett-sect-opt="4">
                    <div class="genMenuModalCtntBtnText">10GB</div>
                </button>
            `;
        }
        else
        {
            console.error("NOt");
            return;
        }

        // Insert menu options and add seletors
        menuCtntBox.innerHTML = menuCtntStruct;
        let menuOptBtns = document.querySelectorAll(".settSectMenuOptBtn");

        // Get, select, and scroll to the chosen option
        try 
        {
            let usrData = await getUserData();
            let usrCtg = Number(usrData[menuUpdId]) || 0;
            
            menuOptBtns[usrCtg].classList.add("selected");
            genMenuModalBox.scrollTo(
            {
                top: (Math.ceil((menuOptBtns[usrCtg].getBoundingClientRect().top - (window.innerHeight - genMenuModalBox.getBoundingClientRect().height) - 25))),
                behavior: "smooth"
            });
        }
        catch(error)
        {
            console.error(error);
            menuOptBtns[0].classList.add("selected");
        }

        // Updates the user's prefered option for the chosen category
        menuOptBtns.forEach((btn) => 
        {
            const menu_atn = async () => 
            {
                try 
                {
                    let btnOptNo = Number(btn.getAttribute("data-sett-sect-opt")) || 0;

                    await updateUserData(
                    {
                        [`${menuUpdId}`]: btnOptNo
                    });

                    notification(`notifyGood`, `Preferences saved`);
                } 
                catch(error) 
                {
                    console.error(error);
                    notification(`notifyBad`, `Failed to update preferences`);
                }
            }

            btn.addEventListener("click", menu_atn);
        });
    }

    // Adds listeners for data-sett-sect-type: modal
    function attachSettSectMdlListeners()
    {
        const btns = document.querySelectorAll(".settCtntSectAtnBtn[data-sett-sect-type='modal']");

        btns.forEach((oldBtn) => 
        {
            if((oldBtn.sett_atn)) oldBtn.removeEventListener("click", oldBtn.sett_atn);
        });

        btns.forEach((newBtn) => 
        {
            const btn_sett_atn = (e) =>
            {
                const mdl_atn = newBtn.getAttribute("data-modal-atn");

                try
                {
                    callGlobalFunctions(mdl_atn, [e]);
                    // newBtn.disabled = true;
                }
                catch(error)
                {
                    console.error(error);
                    notification(`notifyBad`, `An error occured`);
                    newBtn.disabled = false;
                }
            }

            newBtn.addEventListener("click", btn_sett_atn);
            newBtn.sett_atn = btn_sett_atn;
        });
    }




// MEMBERSHIP SETTINGS

    // Managing membership
    async function init_mng_mbsp(btnEv)
    {
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Fetch payment methods
        const userData = await getUserData();
        const curr_mbsp_info = userData?.curr_plan;

        if((typeof curr_mbsp_info !== "object") || (curr_mbsp_info == null))
        {
            notification(`notifyBad`, `Failed to retrieve membership information`);
            return;
        }

        const mngMbspBase = document.createElement("div");
        mngMbspBase.classList.add("genStaticBase", "mng_mbsp_base");
        mngMbspBase.innerHTML = 
        `
            <div class="genStaticBcg mng_mbsp_close"></div>
            <div class="genStaticBdr">
                <div class="genStaticBox">
                    <div class="genStaticHdrBdr">
                        <div class="genStaticHdrBox">
                            <div class="genStaticHdr_top">
                                <button type="button" class="genBtnBox genIconBtn transBtn mng_mbsp_close">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                                <div class="genStaticHdr_TitleBox">
                                    <div class="genStaticHdr_TitleText mng_mbsp_hdr_TtlTxt">Uvid+ Membership</div>
                                </div>
                            </div>
                            <div class="genStaticHdr_btm">
                                <div class="mng_mbsp_hdr_btm">
                                    <div class="mng_mbsp_hdr_billBox">
                                        <p class="mng_mbsp_hdr_billTxt">Your next bill is for <strong>N/A</strong on <strong>N/A</strong></p>
                                    </div>
                                    <div class="mng_mbsp_hdr_atnBdr">
                                        <button type="button" class="genBtnBox midSolidBtn hide mng_mbsp_add">
                                            <span class="genBtnText">Add</span>
                                        </button>
                                        <button type="button" class="genBtnBox greySolidBtn mng_mbsp_switch">
                                            <span class="genBtnText">Switch</span>
                                        </button>
                                        <button type="button" class="genBtnBox greySolidBtn mng_mbsp_cancel">
                                            <span class="genBtnText">Cancel</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="genStaticCtntBdr">
                        <div class="genStaticCtntBox">
                            <div class="mng_mbsp_ctnt_box"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const mbsp_obj_curr = uvid_signup_plans[`${curr_mbsp_info?.curr_plan_id}`];
        const mbsp_obj_next = uvid_signup_plans[`${curr_mbsp_info?.curr_plan_next}`];
        const mngMbspClsBtn = mngMbspBase.querySelectorAll(".mng_mbsp_close");
        const mngMbspTtlTxt = mngMbspBase.querySelector(".mng_mbsp_hdr_TtlTxt");
        const mngMbspBillTxt = mngMbspBase.querySelector(".mng_mbsp_hdr_billTxt");
        const mngMbspAddBtn = mngMbspBase.querySelector(".mng_mbsp_add");
        const mngMbspSwitchBtn = mngMbspBase.querySelector(".mng_mbsp_switch");
        const mngMbspCancelBtn = mngMbspBase.querySelector(".mng_mbsp_cancel");
        const mngMbspCtntBox = mngMbspBase.querySelector(".mng_mbsp_ctnt_box");
        let mngMbspCtntStruct = ``;
        let mngMbspTimer;

        // Membership name
        mngMbspTtlTxt.innerHTML = `Your plan: <span class="mjr">Uvid+ ${mbsp_obj_curr?.plan_name}</span>`;

        // Next billing date
        mngMbspBillTxt.innerHTML = 
            curr_mbsp_info?.curr_plan_next == null 
            ? `Membership will not renew after expiring on <strong>${curr_mbsp_info?.curr_plan_end}</strong>`
            : `
                Your next bill is 
                for <strong>Uvid+ ${mbsp_obj_next?.plan_name}</strong> 
                at <strong>${mbsp_obj_next?.plan_price_month}</strong> 
                on <strong>${curr_mbsp_info?.curr_plan_end}</strong>
              `;
        
        // Membership benefits
        Object.entries(mbsp_obj_curr.plan_benefits).forEach(([key, bnft]) => 
        {
            if((bnft.bnft_name.toString().trim().toLowerCase() !== "monthly price"))
            {
                mngMbspCtntStruct +=
                `
                    <div class="mng_mbsp_card_bdr">
                        <div class="mng_mbsp_card_box">
                            <div class="mng_mbsp_card_icon_bdr">
                                <div class="mng_mbsp_card_icon_box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mng_mbsp_card_icon_svg">
                                        <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="mng_mbsp_card_desc_bdr">
                                <div class="mng_mbsp_card_desc_box">
                                    <div class="mng_mbsp_card_desc_mjr_box">
                                        <p class="mng_mbsp_card_desc_mjr_txt">${bnft.bnft_name}</p>
                                    </div>
                                    <div class="mng_mbsp_card_desc_mnr_box">
                                        <p class="mng_mbsp_card_desc_mnr_txt">${bnft.bnft_desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        mngMbspCtntBox.innerHTML = mngMbspCtntStruct;

        // Insert and display the modal
        documentCtnt.insertAdjacentElement('beforeend', mngMbspBase);
        mngMbspTimer = setTimeout(() => 
        {
            clearTimeout(mngMbspTimer);
            mngMbspBase.classList.add("active");
            documentBody.classList.add("bodystop");
        }, 300);

        // Close the modal
        function closeMngMbspMdl()
        {
            mngMbspBase.classList.remove("active");
            mngMbspTimer = setTimeout(() => 
            {
                clearTimeout(mngMbspTimer);
                mngMbspBase.remove();
                documentBody.classList.remove("bodystop");

                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            }, 300);
        }

        mngMbspClsBtn.forEach((btn) => 
        {
            btn.addEventListener("click", closeMngMbspMdl);
        });


        // Switching memberships
        function req_mbsp_switch(e)        
        {
            closeMngMbspMdl();
            init_mbsp_switch("init_mng_mbsp");
        }

        // Cancel membership
        function cfrm_b4_cncl_1()
        {
            initConfirmModal(
                `Are you trying to cancel your membership?`,
                ``,
                `I think so?`,
                `No`,
                cfrm_b4_cncl_2
            );
        }
        function cfrm_b4_cncl_2()
        {
            initConfirmModal(
                `Do you want to cancel your membership?`,
                `You'll lose all access and benefits after your current membership ends`,
                `Sadly, yes`,
                `No, I don't`,
                cfrm_b4_cncl_3
            );
        }
        function cfrm_b4_cncl_3()
        {
            initConfirmModal(
                `Are you sure you want to cancel your membership?`,
                `You'll risk losing all access to any future grants, benefits, and future discounts on Uvid+`,
                `Lose everything :/`,
                `Stay awesome`,
                cfrm_b4_cncl_4
            );
        }
        function cfrm_b4_cncl_4()
        {
            initConfirmModal(
                `You are about to cancel your membership?`,
                `You current membership remains active until the billing cycle ends`,
                `I understand..`,
                `Certainly not`,
                cfrm_b4_cncl_5
            );
        }
        function cfrm_b4_cncl_5()
        {
            initConfirmModal(
                `Final confirmation: Cancel membership`,
                `Last opportunity to return`,
                `Confirm my loss`,
                `Cancel`,
                req_mbsp_cncl
            );
        }
        async function req_mbsp_cncl()
        {
            const tempUserData = await getUserData();
            const curr_mbsp_info = tempUserData?.curr_plan;

            if((typeof curr_mbsp_info !== "object") || (curr_mbsp_info == null))
            {
                notification(`notifyBad`, `Failed to cancel membership. Try again later`);
                return;
            }

            // Set to null
            try
            {
                await updateUserData(
                {
                    [`curr_plan.curr_plan_next`]: null
                });

                notification(`notifyBad`, `Membership canceled.`);

                // Close and reopen to reflect changes
                closeMngMbspMdl();
                init_mng_mbsp();
            }
            catch(err)
            {
                console.err(err);
                notification(`notifyBad`, `Failed to cancel membership. Try again later`);
            }
        }

        // Display the "Add" button if the user's membership is cancelled
        if((curr_mbsp_info?.curr_plan_next == null))
        {
            mngMbspSwitchBtn.classList.add("hide");
            mngMbspSwitchBtn.removeEventListener("click", init_mbsp_switch);

            mngMbspCancelBtn.classList.add("hide");
            mngMbspCancelBtn.removeEventListener("click", cfrm_b4_cncl_1);

            mngMbspAddBtn.classList.remove("hide");
            mngMbspAddBtn.addEventListener("click", req_mbsp_switch);
            return;
        }

        mngMbspSwitchBtn.addEventListener("click", req_mbsp_switch);
        mngMbspCancelBtn.addEventListener("click", cfrm_b4_cncl_1);
    }


    // Switch membership
    async function init_mbsp_switch(req_fnc = null)
    {
        // Fetch payment methods
        const userData = await getUserData();
        const curr_mbsp_info = userData?.curr_plan;

        if((typeof curr_mbsp_info !== "object") || (curr_mbsp_info == null))
        {
            notification(`notifyBad`, `Failed to retrieve membership information`);
            return;
        }

        // Build modal
        let switchFence = document.createElement("div");
        switchFence.classList.add("join_fence");
        switchFence.style.zIndex = "199"; // To prevent clipping on Navbars

        switchFence.innerHTML = // signup_2 from "join-cmpnt.js" 
        `
            <div class="join_area">${signup_2}</div>
        `;
        

        const planFtrUL = switchFence.querySelector(".join_plan_ftr_ul");
        const planSlsBox = switchFence.querySelector(".join_plan_sls_box");
        const planSbtBtn = switchFence.querySelector("#join_plan_submitBtn");
        let planSlsBtn;
        let planSlsBtns = ``;
        let switchMbspTmr;


        // Building the plan features
        const bld_plan_ftr = (plan = "") => 
        {
            plan_obj = uvid_signup_plans[plan];

            if((typeof plan_obj === "undefined") || (typeof plan_obj !== "object") || (plan_obj === null)) 
                return notification('notifyBad' , 'An error occured while loading plan features');

            let ftr_struct = ``;
            let plan_bnft = plan_obj.plan_benefits;

            Object.entries(plan_bnft).forEach((bnft_obj) =>
            {
                let bnft_ftr = bnft_obj[1];
                ftr_struct += 
                `
                    <li class="join_plan_ftr_cardBdr">
                        <div class="join_plan_ftr_cardBox">
                            <div class="join_plan_ftr_mnr_box">
                                <p class="join_plan_ftr_mnr_txt">${bnft_ftr.bnft_name}</p>
                            </div>
                            <div class="join_plan_ftr_mjr_box">
                                <p class="join_plan_ftr_mjr_txt">${bnft_ftr.bnft_desc}</p>
                            </div>
                        </div>
                    </li>
                `;
            });

            planFtrUL.innerHTML = ftr_struct;
        }

        // Build the plan option buttons
        Object.entries(uvid_signup_plans).forEach((plan_obj) =>
        {
            let plan = plan_obj[1];
            planSlsBtns +=
            `
                <div class="join_plan_sls_cardBase">
                    <div class="join_plan_sls_cardBdr">
                        <input type="radio" name="join_plan_sls_rad" id="join_plan_sls_rad${plan.plan_id}" class="join_plan_sls_radCls" value="${plan.plan_id.toLowerCase()}" />
                        <label for="join_plan_sls_rad${plan.plan_id}" class="join_plan_sls_lbl">
                            <div class="join_plan_sls_cardBox">
                                <div class="join_plan_sls_ttl_box">
                                    <div class="join_plan_sls_ttl_txt">${plan.plan_name}</div>
                                </div>
                                <div class="join_plan_sls_sub_box">
                                    <p class="join_plan_sls_sub_txt">${plan.plan_benefits.rsltn.bnft_desc}</p>
                                </div>
                                <div class="join_plan_sls_icon_bdr">
                                    <div class="join_plan_sls_icon_box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="join_plan_sls_icon_svg">
                                            <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            `;
            
            // Display the default plan option's features
            if((plan_obj[0] === "ultm")) bld_plan_ftr("ultm");
        });
        planSlsBox.innerHTML = planSlsBtns;

        // Selecting a plan option
        planSlsBtn = switchFence.querySelectorAll(".join_plan_sls_cardBdr");
        planSlsBtn.forEach((oldbtn) => 
        {
            if(oldbtn.disp_atn)
            {
                btn.addEventListener("click", oldbtn.disp_atn);
            }
        });
        planSlsBtn.forEach((btn) => 
        {
            const sel_atn = () => 
            {
                let btn_opt = btn.querySelector("input[name='join_plan_sls_rad']").getAttribute("value");

                if((btn_opt !== ""))
                {
                    // Remove any selected states
                    planSlsBtn.forEach(isSlBtn => isSlBtn.hasAttribute("selected") ? isSlBtn.removeAttribute("selected") : null);

                    // Update the plan features
                    bld_plan_ftr(btn_opt);

                    // And the selected state to current element
                    btn.setAttribute("selected", "");
                }
            }

            btn.addEventListener("click", sel_atn);
            btn.disp_atn = sel_atn;
        });

        // Display the bdr
        switchMbspTmr = setTimeout(() => 
        {
            clearTimeout(switchMbspTmr);
            documentCtnt.insertAdjacentElement(`beforeend`, switchFence);
            documentBody.classList.add("bodystop");

            // Select the 3rd option by default
            switchFence.querySelectorAll(".join_plan_sls_cardBdr")[2].click();

            // Add visual identifier the membership plan for the next billing
            if((curr_mbsp_info?.curr_plan_next == null)) return;
            switchFence.querySelector(`.join_plan_sls_cardBdr:has(input[name='join_plan_sls_rad'][value='${curr_mbsp_info?.curr_plan_next}'])`).setAttribute(`data-pre-selected`, `true`);
        }, 300);

        // Updating plan changes
        planSbtBtn.addEventListener("click", async () => 
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if user isn't logged in
            if (!user)
            {
                notification(`notifyBad` , "You are not logged in.");
                return;
            }

            // Get the selected plan
            let sel_plan = document.querySelector(".join_plan_sls_cardBdr[selected]").querySelector("input[name='join_plan_sls_rad']").getAttribute("value");

            try
            {
                // Update the User's info
                await updateUserData(
                {
                    [`curr_plan.curr_plan_next`]: `${sel_plan}`,
                });

                // Close modal
                clsSwitchMbspMdl(true);

                // Notify user
                notification('notifyGood' , 'Membership plan changed, effective in next billing cycle');
            }
            catch (error)
            {
                console.error(error);
                notification('notifyBad' , 'Failed to change membership plan');
                clsSwitchMbspMdl(false);
            }
        });

        // Close the modal
        function clsSwitchMbspMdl()
        {
            switchMbspTmr = setTimeout(() => 
            {
                clearTimeout(switchMbspTmr);
                switchFence.remove();
                documentBody.classList.remove("bodystop");

                if(req_fnc != null) callGlobalFunctions("init_mng_mbsp");
            }, 300);
        }

        // Insert button to close the modal
        const clsMdlBtn = document.createElement("div");
        const clsMdlInp = document.createElement("input");

        clsMdlBtn.classList.add("join_submit_box");
        clsMdlInp.setAttribute(`type`, `button`);
        clsMdlInp.setAttribute(`id`, `mbsp_change_mdl_close`);
        clsMdlInp.setAttribute(`value`, `Close`);
        clsMdlInp.classList.add("genBtn", "genBtnBox", "join_submit_btn", "hollowBtn");

        clsMdlBtn.appendChild(clsMdlInp);
        planSbtBtn.parentElement.insertAdjacentElement('afterend', clsMdlBtn);

        clsMdlInp.addEventListener("click", clsSwitchMbspMdl);
    }


    // Manage payment methods
    async function init_pymt_mtds(btnEv)
    {
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        let pymtMtdsStruct = 
        `
            <div class="genStaticBase pymt_mtds_base">
                <div class="genStaticBcg pymt_mtds_close"></div>
                <div class="genStaticBdr">
                    <div class="genStaticBox">
                        <div class="genStaticHdrBdr">
                            <div class="genStaticHdrBox">
                                <div class="genStaticHdr_top">
                                    <button type="button" class="genBtnBox genIconBtn transBtn pymt_mtds_close">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div class="genStaticHdr_TitleBox">
                                        <div class="genStaticHdr_TitleText">Payment Cards</div>
                                    </div>
                                </div>
                                <div class="genStaticHdr_btm">
                                    <div class="pymt_mtds_hdr_atnBdr">
                                        <button type="button" class="genBtnBox greySolidBtn add_pymt_mtd">
                                            <div class="genBtnIcon">
                                                <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genBtnSvg">
                                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                                </svg>
                                            </div>
                                            <span class="genBtnText">Add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="genStaticCtntBdr">
                            <div class="genStaticCtntBox">
                                <div class="pymt_mtds_ctnt_box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        documentCtnt.insertAdjacentHTML(`beforeend`, pymtMtdsStruct);

        // Attach selectors
        let pymtMtdsBase = document.querySelector(".pymt_mtds_base");
        let pymtMtdsGrid = document.querySelector(".pymt_mtds_ctnt_box");
        let pymtMtdsClose = document.querySelectorAll(".pymt_mtds_close");
        let pymtMtdsAdd = document.querySelector(".add_pymt_mtd");
        let pymtItemsStruct = ``;
        let pymtMtdsTimer;

        // Fetch payment methods
        let userData = await getUserData();
        let pymtMtdsData = userData?.pymt_mtd;

        // Return and close if payment methods is unobtainable
        if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 0))
        {
            notification(`notifyBad`, `Payment methods unobtainable at this time`);
            closePymtMtdsMdl();
            return;
        }

        // Display Modal
        pymtMtdsTimer = setTimeout(() => 
        {
            clearTimeout(pymtMtdsTimer);
            pymtMtdsBase.classList.add("active");
            documentBody.classList.add("bodystop");
        }, 100);

        // Build payment card elements
        Object.entries(pymtMtdsData).forEach(([key, card]) => 
        {
            let cardNo = card.pymt_cardNo.toString().replace(/\s/g, '');
            let cardNoTrim = cardNo.slice(-4);

            pymtItemsStruct +=
            `
                <div class="pymt_card_bdr" data-pymt-card-id="${key}" data-pymt-card-default="${card.pymt_isDflt}">
                    <div class="pymt_card_box">
                        <div class="pymt_card_det_bdr">
                            <div class="pymt_card_det_box">
                                <div class="pymt_card_det_name_box">
                                    <p class="pymt_card_det_name_txt">${card.pymt_cardName}</p>
                                </div>
                                <div class="pymt_card_det_info_box">
                                    <p class="pymt_card_det_info_txt">
                                        <span class="num_trim">••${cardNoTrim} |</span> 
                                        <span class="num_exp">${card.pymt_cardExp}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pymt_card_sqr_bdr">
                            <div class="pymt_card_sqr_box"></div>
                        </div>
                        <div class="pymt_card_crv_elem pymt_card_crv_top"></div>
                        <div class="pymt_card_crv_elem pymt_card_crv_btm"></div>
                        <div class="pymt_card_base_icon_bdr">
                            <div class="pymt_card_base_icon_box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pymt_card_base_icon_svg">
                                    <path fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5q-.002.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="pymt_card_atn_bdr">
                            <div class="pymt_card_atn_box">
                                <button type="button" class="genBtnBox genIconBtn transBtn openGenMenuModalBtn" data-gen-menu-modal-type="sett_pymt_mtds_menu">
                                    <div class="genBtnIcon">
                                        <svg transform="scale(0.80)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" class="genBtnSvg">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            cardNo, cardNoTrim = null;
        });
        pymtMtdsGrid.innerHTML = pymtItemsStruct;

        // Add Listeners
        pymtMtdsAdd.onclick = () => 
        {
            closePymtMtdsMdl();
            initAddPymtMtdModal("init_pymt_mtds");
        }
        attachGenMenuModalEventListeners();


        // Close the modal
        function closePymtMtdsMdl()
        {
            pymtMtdsBase.classList.remove("active");
            pymtMtdsBase.addEventListener("transitionend" , function handleTransitionEnd()
            {
                pymtMtdsBase.removeEventListener("transitionend" , handleTransitionEnd);
                documentCtnt.removeChild(pymtMtdsBase);
                documentBody.classList.remove("bodystop");

                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        pymtMtdsClose.forEach((btn) => 
        {
            btn.onclick = () => closePymtMtdsMdl();
        });
    }

    // Payment Method Card listeners
    function attachPymtMtdCardListeners(event)
    {
        // Get the clicked button
        let pymtCardMenuBtn = event.target.closest("[data-gen-menu-modal-type='sett_pymt_mtds_menu']");
        
        if (!pymtCardMenuBtn)
        {
            console.error("Button with attribute [data-gen-menu-modal-type='sett_pymt_mtds_menu'] not found.");
            return;
        }

        // Find the parent 
        let pymtCardBdr = pymtCardMenuBtn.closest(".pymt_card_bdr");
        if (!pymtCardBdr)
        {
            console.error("Parent element not found.");
            return;
        }

        // Get all parents elements to obtain the current index
        let allPymtCards = Array.from(document.querySelectorAll(".pymt_card_bdr"));
        let pymtCardIndex = allPymtCards.indexOf(pymtCardBdr);

        if (pymtCardIndex === -1)
        {
            console.error("Failed to find the index of the clicked card.");
            return;
        }

        let dfltPymtMtdBtn = document.querySelector(".dflt_pymt_mtd_btn");
        let delPymtMtdBtn = document.querySelector(".del_pymt_mtd_btn");
        let pid = pymtCardBdr.getAttribute("data-pymt-card-id");
        let isChsnDflt = false;

        // Set payment method as default
        dfltPymtMtdBtn.onclick = async () => 
        {
            // Fetch payment methods
            let tempUserData = await getUserData();
            let pymtMtdsData = tempUserData?.pymt_mtd;

            // Return if payment methods is unobtainable
            if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 0))
            {
                notification(`notifyBad`, `Failed to set as default`);
                return;
            }

            // Return if selected method doesn't exist
            let chsnPymr = pymtMtdsData[`${pid}`] || null;

            if((chsnPymr == undefined) || (chsnPymr == null) || (typeof chsnPymr !== "object"))
            {
                notification(`notifyBad`, `Selected payment method is unavailable`);
                init_pymt_mtds();
                return;
            }

            // Set the chosen card as default, and all other cards to false
            Object.entries(pymtMtdsData).forEach(([key, pymt]) => 
            {
                if((key === pid))
                {
                    pymt.pymt_isDflt = true;
                }
                else
                {
                    pymt.pymt_isDflt = false;
                }
            });

            // Update user data
            try
            {
                await updateUserData(
                {
                    pymt_mtd: pymtMtdsData
                });

                // Update UI
                allPymtCards.forEach(item => item.setAttribute("data-pymt-card-default", "false"));
                pymtCardBdr.setAttribute("data-pymt-card-default", "true");

                // Notify user
                notification(`notifyGood` , `Payment card successfully set as default`);
            }
            catch(error)
            {
                console.error(error)
                notification(`notifyBad`, `Failed to set as default`);
            }
        }

        // Delete payment method
        delPymtMtdBtn.onclick = async () => 
        {
            // Fetch payment methods
            let userData = await getUserData();
            let pymtMtdsData = userData?.pymt_mtd;

            // Return if only one payment method present
            if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 1))
            {
                notification(`notifyBad`, `At least one payment method must be present`);
                return;
            }

            // Return if selected method doesn't exist
            let chsnPymr = pymtMtdsData[`${pid}`] || null;

            if((chsnPymr == undefined) || (chsnPymr == null) || (typeof chsnPymr !== "object"))
            {
                notification(`notifyBad`, `Selected payment method is unavailable`);
                init_pymt_mtds();
                return;
            }
            
            // Set flag to true if chosen payment method is the default
            if(pymtMtdsData[`${pid}`].pymt_isDflt == true) isChsnDflt = true;

            // Confirm before deletion
            initConfirmModal(
                `Are you sure you want to delete this card`,
                `This action is permanent`,
                `Delete`,
                `Cancel`,
                reqDelPymtMtd
            );
        }

        // Performs deletion of payment method
        const reqDelPymtMtd = async () => 
        {
            try 
            {
                // Remove payment method from user data
                await updateUserData(
                {
                    [`pymt_mtd.${pid}`]: firebase.firestore.FieldValue.delete()
                });

                // Remove card from DOM
                pymtCardBdr.remove();

                // Notify user
                notification(`notifyGood` , `Payment card successfully deleted`);
            }
            catch(error)
            {
                console.error(error)
                notification(`notifyBad`, `Failed to delete payment method`);
                return;
            }

            // Fetch payment methods
            let userData = await getUserData();
            let pymtMtdsData = userData?.pymt_mtd;

            // Return if payment methods is unobtainable
            if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 0)) return;

            // Set another card as default if the chosen one is the current default
            if(isChsnDflt)
            {
                let newDfltId = Object.entries(pymtMtdsData)[0][0];
                console.log("newDfltId", newDfltId);

                // Update user data
                await updateUserData(
                {
                    [`pymt_mtd.${newDfltId}.pymt_isDflt`]: true
                });

                // Update DOM elements
                allPymtCards.forEach((card) => 
                {
                    if((card.getAttribute("data-pymt-card-id") === newDfltId)) card.setAttribute("data-pymt-card-default", "true");
                });
            }
        }
    }

    // Add new payment method
    async function initAddPymtMtdModal(req_fnc = null)
    {
        // Fetch payment methods
        let pymtMtdMAX = 5;
        let userData = await getUserData();
        let pymtMtdsData = userData?.pymt_mtd;

        // Return and close if payment methods is unobtainable
        if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 0))
        {
            notification(`notifyBad`, `Cannot create payment methods at this time`);
            init_pymt_mtds();
            return;
        }

        // Return if user has the max payment methods
        if((Object.keys(pymtMtdsData).length >= pymtMtdMAX))
        {
            notification(`notifyBad`, `You can only have "${pymtMtdMAX}" payment methods`);
            init_pymt_mtds();
            return;
        }

        let add_pymt_mtd_struct = 
        `
            <div class="feedback_base add_pymt_mtd_base">
                <div class="feedback_bdr">
                    <div class="feedback_bcg add_pymt_mtd_bcg add_pymt_mtd_cls_btn"></div>
                    <div class="feedback_box">
                        <form id="payment_card_form" name="payment_card_form" class="feedback_form">
                            <div class="feedback_closeBdr add_pymt_mtd_cls_btn">
                                <div class="feedback_closeBox ">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="feedback_closeIcon">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="feedback_header">
                                <div class="feedback_name">Add Payment Card</div>
                            </div>
                            <div class="feedback_ctnt">
                                <label for="form_pymt_cardNum" class="feedback_sectBox feedback_sectInputBox">
                                    <div class="feedback_sectLabel">Card No.</div>
                                    <input type="text" name="card_name" id="form_pymt_cardNum" class="feedback_sectField feedback_sectInput" placeholder="1234 5678 9123 4567" inputmode="numeric" pattern="\d*" maxlength="19" required disabled />
                                </label>
                                <div class="feedback_selectBdr">
                                    <label for="form_pymt_cardExp" class="feedback_sectBox feedback_sectInputBox">
                                        <div class="feedback_sectLabel">Expiry</div>
                                        <input type="text" name="card_expiry" id="form_pymt_cardExp" class="feedback_sectField feedback_sectInput" placeholder="MM/YY" inputmode="numeric" pattern="\d*" maxlength="5" required disabled />
                                    </label>
                                    <label for="form_pymt_cardSec" class="feedback_sectBox feedback_sectInputBox">
                                        <div class="feedback_sectLabel">CVV/CVC</div>
                                        <input type="password" name="card_sec_code" id="form_pymt_cardSec" class="feedback_sectField feedback_sectInput" placeholder="••••" inputmode="numeric" pattern="\d*" maxlength="4" required disabled />
                                    </label>
                                </div>
                                <label for="form_pymt_cardName" class="feedback_sectBox feedback_sectInputBox">
                                    <div class="feedback_sectLabel">Card Name</div>
                                    <input type="text" name="card_name" id="form_pymt_cardName" class="feedback_sectField feedback_sectInput" placeholder="Enter fullname on card" maxlength="250" required disabled />
                                </label>
                            </div>
                            <div class="feedback_atnBox">
                                <button type="button" id="req_new_pymt_mtd" class="genBtnBox midSolidBtn disabled">
                                    <div class="genBtnText">Add</div>
                                </button>
                                <button type="button" class="genBtnBox hollowBtn add_pymt_mtd_cls_btn disabled">
                                    <div class="genBtnText">Cancel</div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

        documentCtnt.insertAdjacentHTML(`beforeend`, add_pymt_mtd_struct);

        const addPymtMtdBase = document.querySelector(".add_pymt_mtd_base");
        const closeAddPymtMtdMdl = document.querySelectorAll(".add_pymt_mtd_cls_btn");
        let addPymtMtdTimer;

        // All form fields
        const allFormFields = addPymtMtdBase.querySelectorAll(".feedback_sectInput");
        const allFormBtns = addPymtMtdBase.querySelectorAll("button");

        // Card Number
        const card_num_cond = new RegExp("^[0-9]*$");
        const cardNum = document.querySelector("#form_pymt_cardNum");
        let isCardNumValid = false;

        // Card Expiry date
        const card_exp_cond = new RegExp("^[0-9]*$");
        const cardExp = document.querySelector("#form_pymt_cardExp");
        let isCardExpValid = false;

        // Card Security Code
        const card_code_cond = new RegExp("^[0-9]*$");
        const cardCode = document.querySelector("#form_pymt_cardSec");
        let isCardCodeValid = false;

        // Card Full Name
        const cardName = document.querySelector("#form_pymt_cardName");
        let isCardNameValid = false;

        // Submit button
        const sbmtPymtForm = document.querySelector("#req_new_pymt_mtd");
        

        // Display modal
        addPymtMtdTimer = setTimeout(() => 
        {
            clearTimeout(addPymtMtdTimer);
            documentBody.setAttribute(`data-modal-state` , `open`);
            addPymtMtdBase.classList.add("active");
            allFormFields.forEach(fld => fld.disabled = false);
            allFormBtns.forEach(btn => btn.disabled = false);
        }, 100);


        // Validates Input for Card Number

            // Conditions -
            /**
             *  1 - Should be at least thirteen (13) numbers
             */

            // Allows 0-9
            cardNum.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(card_num_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Card Number"
            // Adds a space after every four (4) numbers
            function validateCardNum(e)
            {
                // Checks if the field is empty
                if((e.data == null) && (cardNum.value.toString().length <= 0))
                {
                    cardNum.setAttribute(`data-inp-invalid`, 'true');
                    isCardNumValid = false;
                }
                // Checks if the card number length is less than the specified
                else
                {
                    const cardNumInp = e.target;
                    const cardNumVal = cardNumInp.value;
                    const cursor = cardNumInp.selectionStart;

                    // Store only digits
                    const digits = cardNumVal.replace(/\D/g, '');

                    // Format & break into groups of four (4)
                    const newCardNum = digits.match(/.{1,4}/g)?.join(' ') || '';

                    // Calculate the numnber of digits before the cursor
                    const digitsBeforeCursor = cardNumVal.slice(0, cursor).replace(/\D/g, '').length;

                    // Rebuild string and find new cursor position
                    let newCursor = 0;
                    let digitCount = 0;

                    for (let i = 0; i < newCardNum.length; i++) 
                    {
                        if (/\d/.test(newCardNum[i])) 
                        {
                            digitCount++;
                        }
                        if (digitCount === digitsBeforeCursor) 
                        {
                            newCursor = i + 1;
                            break;
                        }
                    }

                    cardNumInp.value = newCardNum;
                    cardNumInp.setSelectionRange(newCursor, newCursor);

                    if(digits.length < 13)
                    {
                        cardNum.setAttribute(`data-inp-invalid`, 'true');
                        isCardNumValid = false;
                    }
                    // If all conditions are met, the input is valid, i.e "true";
                    else
                    {
                        cardNum.removeAttribute(`data-inp-invalid`);
                        isCardNumValid = true;
                    }
                }
            }

            cardNum.addEventListener("input" , validateCardNum);

            // Switch to the next field
            cardNum.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isCardNumValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    cardExp.focus();
                }
            }


        // Validates Input for Expiry Date

            // Conditions -
            /**
             *  1 - Should be in the format "MM/YY"
             */

            // Allows 0-9
            cardExp.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(card_exp_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Security Code"
            // Also Formats the input to "MM/YY"
            function validateCardExp(e)
            {
                let input = e.target;
                let raw = input.value;
                let cursor = input.selectionStart;

                // Strip non-digits and cap at 4 digits
                let digits = raw.replace(/\D/g, '').slice(0, 4);

                // Checks if the field is empty
                if((e.data == null) && (digits.length <= 0))
                {
                    cardExp.setAttribute(`data-inp-invalid`, 'true');
                    isCardExpValid = false;

                    return;
                }

                // Auto-prepend "0" if user entered single-digit month (3 → 03)
                if (digits.length === 1 && parseInt(digits, 10) > 1) 
                {
                    digits = '0' + digits;
                    cursor = cursor + 1;
                }

                // Format as MM/YY
                let formatted = '';

                if (digits.length >= 3) 
                {
                    formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
                } 
                else 
                {
                    formatted = digits;
                }

                // Detect if slash was added
                const addedSlash = formatted[cursor - 1] === '/' && raw[cursor - 2] !== '/';
                let newCursor = cursor;

                if (raw.length < formatted.length && addedSlash) 
                {
                    newCursor++;
                }

                input.value = formatted;
                input.setSelectionRange(newCursor, newCursor);

                if((digits > 4))
                {
                    const month = parseInt(digits.slice(0, 2), 10);
                    const year = parseInt(digits.slice(2), 10);

                        // get last 2 digits of current year
                    const currYr = new Date().getFullYear() % 100;
                    const maxValidYear = currYr + 50;

                    const isMonthValid = month >= 1 && month <= 12;
                    const isYearValid = year >= currYr && year <= maxValidYear;

                    if (!isMonthValid || !isYearValid) 
                    {
                        cardExp.setAttribute(`data-inp-invalid`, 'true');
                        isCardExpValid = false;
                    }
                    else
                    {
                        cardExp.removeAttribute(`data-inp-invalid`);
                        isCardExpValid = true;
                    }
                    return
                }
                cardExp.setAttribute(`data-inp-invalid`, 'true');
                isCardExpValid = false;
            }

            cardExp.addEventListener("input" , validateCardExp);

            // Switch to the next field
            cardExp.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isCardExpValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    cardCode.focus();
                }
            }


        // Validates Input for Security Code

            // Conditions -
            /**
             *  1 - Should be at least three (3) numbers
             */

            // Allows 0-9
            cardCode.addEventListener("beforeinput", (event) => 
            {
                if (event.data != null && !(card_code_cond.test(event.data))) 
                    event.preventDefault();
            });

            // Validation function For "Security Code"
            function validateSecCode(event)
            {
                // Return if value is not a number
                if(!(/^\d+$/.test(cardCode.value)))
                {
                    cardCode.setAttribute(`data-inp-invalid`, 'true');
                    isCardCodeValid = false;
                    return;
                }

                // Strip non-digits and cap at 4 digits
                let digits = cardCode.value.replace(/\D/g, '');

                // Checks if the field is empty
                if((event.data == null) && (digits.length <= 0))
                {
                    cardCode.setAttribute(`data-inp-invalid`, 'true');
                    isCardCodeValid = false;
                }
                else if((digits.length < 3))
                {
                    cardCode.setAttribute(`data-inp-invalid`, 'true');
                    isCardCodeValid = false;
                }
                // If all conditions are met, the input is valid, i.e "true";
                else
                {
                    cardCode.removeAttribute(`data-inp-invalid`);
                    isCardCodeValid = true;
                }
            }

            cardCode.addEventListener("input" , validateSecCode);

            // Switch to the next field
            cardCode.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined") || !(isCardCodeValid)) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    cardName.focus();
                }
            }


        // Validates Input for Card Name

            // Conditions -
            /**
             *  1 - At least two (2) non-whitespace characters separated by a space
             */
            
            function validateCardName(event)
            {
                let fname = cardName.value.toString().trim();
                let fullName_Condition = /^\s*\S+(?:\s+\S+)+\s*$/;

                // Checks if empty
                if((event.data == null) && (fname === ""))
                {
                    cardName.setAttribute(`data-inp-invalid`, 'true');
                    isCardNameValid = false;
                }
                // Checks if Full name was entered
                else if(!(fullName_Condition.test(fname)))
                {
                    cardName.setAttribute(`data-inp-invalid`, 'true');
                    isCardNameValid = false;
                }
                else
                {
                    cardName.removeAttribute(`data-inp-invalid`);
                    isCardNameValid = true;
                } 
            }

            cardName.addEventListener("input" , validateCardName);

            // Switch to the next field
            cardName.onkeyup = (e) => 
            {
                if((typeof e === "undefined") || (typeof e.key === "undefined")) return;
                
                let key = e.key.toLowerCase();

                if(key === "enter")
                {
                    sbmtPymtForm.click();
                }
            }


        // Submission
        sbmtPymtForm.addEventListener("click" , async () => 
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if user isn't logged in
            if (!user)
            {
                notification(`notifyBad` , "You are not logged in.");
                return;
            }

            // If all input fields are filled correctly, update properties and finalise
            if(((isCardNumValid == true) && (isCardExpValid == true) && (isCardCodeValid == true) && (isCardNameValid == true)))
            {
                // Fetch payment methods
                let userData = await getUserData();
                let pymtMtdsData = userData?.pymt_mtd;

                // Return and close if payment methods is unobtainable
                if((typeof pymtMtdsData === "undefined") || (Object.keys(pymtMtdsData).length <= 0))
                {
                    notification(`notifyBad`, `Cannot create payment methods at this time`);
                    reqClsAddPymtMtdMdl();
                    return;
                }

                // Return if user has the max payment methods
                if((Object.keys(pymtMtdsData).length >= pymtMtdMAX))
                {
                    notification(`notifyBad`, `You can only have "${pymtMtdMAX}" payment methods`);
                    reqClsAddPymtMtdMdl();
                    return;
                }

                // Disable all input fields and buttons
                allFormFields.forEach(item => item.disabled = true);
                sbmtPymtForm.disabled = true;

                // Update the User's info
                try
                {
                    await updateUserData(
                    {
                        [`pymt_mtd.${generateRandomString(32)}`]: 
                        {
                            pymt_type: `card`,
                            pymt_cardName: `${cardName.value}`,
                            pymt_cardNo: `${cardNum.value}`,
                            pymt_cardExp: `${cardExp.value}`,
                            pymt_cardCode: `${cardCode.value}`,
                            pymt_isDflt: false
                        }
                    });

                    // Notify user
                    notification(`notifyGood`, `Payment method added successfully`);

                    // Close and re-initialize the payment methods modal to reflect changes
                    reqClsAddPymtMtdMdl();
                }
                catch(error)
                {
                    console.error(error);
                    notification(`notifyBad`, `Cannot create payment methods at this time`);
                }
            }
            // If not filled correctly, alert user 
            else
            {
                notification(`notifyBad` , `Please check that all fields have been correctly filled`);
            }
        });


        // Close the modal
        function reqClsAddPymtMtdMdl()
        {
            addPymtMtdBase.classList.remove("active");
            allFormFields.forEach(fld => fld.disabled = true);
            allFormBtns.forEach(btn => btn.disabled = true);

            addPymtMtdTimer = setTimeout(() => 
            {
                clearTimeout(addPymtMtdTimer);
                addPymtMtdBase.remove();
                documentBody.removeAttribute(`data-modal-state`);
                
                if(req_fnc != null) callGlobalFunctions(req_fnc);
            }, 300);
        }

        closeAddPymtMtdMdl.forEach((btn) => 
        {
            btn.addEventListener("click", reqClsAddPymtMtdMdl);
        });
    }


    // View Billing History
    async function init_bill_hist(btnEv)
    {
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        let billHistStruct = 
        `
            <div class="genStaticBase bill_hist_base">
                <div class="genStaticBcg bill_hist_close"></div>
                <div class="genStaticBdr">
                    <div class="genStaticBox">
                        <div class="genStaticHdrBdr">
                            <div class="genStaticHdrBox">
                                <div class="genStaticHdr_top">
                                    <button type="button" class="genBtnBox genIconBtn transBtn bill_hist_close">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div class="genStaticHdr_TitleBox">
                                        <div class="genStaticHdr_TitleText">Billing History</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="genStaticCtntBdr">
                            <div class="genStaticCtntBox">
                                <div class="bill_hist_ctnt_box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentCtnt.insertAdjacentHTML(`beforeend`, billHistStruct);

        // Attach selectors
        let billHistBase = document.querySelector(".bill_hist_base");
        let billHistGrid = document.querySelector(".bill_hist_ctnt_box");
        let billHistClose = document.querySelectorAll(".bill_hist_close");
        let billItemStruct = ``;
        let billHistTimer;

        // Fetch Billing history
        let userData = await getUserData();
        let billHistData = userData?.billing_hist;

        // Return and close if billing history is unobtainable
        if((typeof billHistData === "undefined") || (billHistData.length <= 0))
        {
            notification(`notifyBad`, `Billing history unobtainable at this time`);
            closeBillHistMdl();
            return;
        }

        // Display Modal
        billHistTimer = setTimeout(() => 
        {
            clearTimeout(billHistTimer);
            billHistBase.classList.add("active");
            documentBody.classList.add("bodystop");
        }, 100);

        // Build history elements
        for(let i = 0; i < billHistData.length; i++)
        {
            let bill = billHistData[0];
            let bill_status_bool = bill.bill_plan_status !== null 
                ? bill.bill_plan_status == true
                ? "true" : "false"
                : "null";
            let bill_status_txt = bill.bill_plan_status !== null 
                ? bill.bill_plan_status == true
                ? "Paid" : "Not paid"
                : "No payment";

            billItemStruct +=
            `
                <div class="bill_hist_card_bdr">
                    <div class="bill_hist_card_box">
                        <div class="bill_hist_card_pymt_bdr">
                            <div class="bill_hist_card_pymt_box">
                                <div class="bill_hist_card_pymt_price_box">
                                    <div class="bill_hist_card_pymt_price_txt">${bill.bill_plan_price}</div>
                                </div>
                                <div class="bill_hist_card_pymt_status_box" data-pymt-status="${bill_status_bool}">
                                    <p class="bill_hist_card_pymt_status_txt">${bill_status_txt}</p>
                                </div>
                            </div>
                        </div>
                        <div class="bill_hist_card_name_box">
                            <p class="bill_hist_card_name_txt">Uvid+ ${bill.bill_plan_name}</p>
                        </div>
                        <div class="bill_hist_card_det_bdr">
                            <div class="bill_hist_card_det_box">
                                <div class="bill_hist_card_issue_ttl_box">
                                    <p class="bill_hist_card_issue_ttl_txt">Date issued</p>
                                </div>
                                <div class="bill_hist_card_issue_date_box">
                                    <p class="bill_hist_card_issue_date_txt">${bill.bill_plan_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        billHistGrid.innerHTML = billItemStruct;

        // Close the modal
        function closeBillHistMdl()
        {
            billHistBase.classList.remove("active");
            billHistBase.addEventListener("transitionend" , function handleTransitionEnd()
            {
                billHistBase.removeEventListener("transitionend" , handleTransitionEnd);
                documentCtnt.removeChild(billHistBase);
                documentBody.classList.remove("bodystop");

                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        billHistClose.forEach((btn) => 
        {
            btn.onclick = () => closeBillHistMdl();
        });
    }


    // Giftcards & Promocodes (Non-operational)
    function init_giftcode_mdl()
    {
        const giftCodeMdlBdr = document.createElement("div");
        giftCodeMdlBdr.classList.add("genAtnModalBdr");
        giftCodeMdlBdr.innerHTML = 
        `
            <div class="genAtnModalBcg closeGiftCodeMdlBtn"></div>
            <div class="genAtnModalBox">
                <div class="genAtnModalCtnt">
                    <div class="genAtnModalHeader">
                        <div class="genAtnModalHeaderIconBox closeGiftCodeMdlBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="genAtnModalHeaderText">
                            <span class="large">E</span>
                            <span class="small">nter Promocode</span>
                        </div>
                    </div>
                    <div class="genAtnModalOptBcg createProfItemBcg">
                        <div class="genAtnModalOptBdr createProfItemBox">
                            <div class="newCLBdr active">
                                <div class="newCLBox">
                                    <div class="newCLInputBdr">
                                        <div class="newCLInputBox">
                                            <input type="text" name="delPassField" id="giftCodeMdlInputId" class="newCLInputClass" placeholder="Enter code here" />
                                        </div>
                                    </div>
                                    <div class="newCLWarnBdr">
                                        <div class="newCLWarnBox">
                                            <p id="giftCodeMdlWarnId" class="newCLWarnText empty" tabindex="-1"></p>
                                        </div>
                                    </div>
                                    <div class="newCLAtnBdr">
                                        <div class="newCLAtnBox">
                                            <button type="button" id="cfrmUpdFullname" class="genBtnBox midSolidBtn">
                                                <div class="genBtnText">Redeem</div>
                                            </button>
                                            <button type="button" id="cnclGiftCodeMdl" class="genBtnBox hollowBtn closeGiftCodeMdlBtn">
                                                <div class="genBtnText">Cancel</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentBody.appendChild(giftCodeMdlBdr);

        const giftCodeMdlCloseBtn = document.querySelectorAll(".closeGiftCodeMdlBtn");
        const giftCodeMdlWarn = document.querySelector("#giftCodeMdlWarnId");
        const giftCodeMdlInput = document.querySelector("#giftCodeMdlInputId");
        const giftCodeMdlBtn = document.querySelector("#cfrmUpdFullname");
        let giftCodeMdlTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Transitioning elements
        giftCodeMdlTimer = setTimeout(async () => 
        {
            clearTimeout(giftCodeMdlTimer);
            documentBody.setAttribute(`data-modal-state` , `open`);
            giftCodeMdlBdr.classList.add("active");
        }, 250);
        
        // Automatically focus on input feild after transition
        giftCodeMdlBdr.addEventListener("transitionend" , function handleTransitionEnd()
        {
            giftCodeMdlBdr.removeEventListener("transitionend" , handleTransitionEnd);
            giftCodeMdlInput.focus();
        });

        // Closes the mngNtfy modal
        async function closeGiftCodeMdl()
        {
            giftCodeMdlBdr.classList.remove("active");
            giftCodeMdlBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                giftCodeMdlBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(giftCodeMdlBdr);
                documentBody.removeAttribute(`data-modal-state`);
                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        //
        giftCodeMdlBtn.onclick = () => 
        {
            notification(`notifyBad`, `Invalid Code`);
        }

        // Closes the modal
        giftCodeMdlCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeGiftCodeMdl);
        });
    }



// APP EXPERIENCE SETTINGS

    // Updating Notification Preferences
    function init_ntfy_prefence()
    {
        const mngNtfyBdr = document.createElement("div");
        mngNtfyBdr.classList.add("genAtnModalBdr");
        mngNtfyBdr.innerHTML = 
        `
            <div class="genAtnModalBcg closeMngNtfyBtn"></div>
            <div class="genAtnModalBox">
                <div class="genAtnModalCtnt">
                    <div class="genAtnModalHeader">
                        <div class="genAtnModalHeaderIconBox closeMngNtfyBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="genAtnModalHeaderText">
                            <span class="large">N</span>
                            <span class="small">otification Preferences</span>
                        </div>
                    </div>
                    <div class="genAtnModalOptBcg createProfItemBcg">
                        <div class="genAtnModalOptBdr createProfItemBox">
                            <div class="genAtnModalOptBox">
                                <div class="mngNtfyTtlBox">
                                    <p class="mngNtfyTtlText">What you stream</p>
                                </div>
                                <div class="mngNtfyAtnBtn">
                                    <div class="genCheckBoxBase">
                                        <input type="checkbox" id="ntfy_watch" class="genCheckBoxInput mngNtfyAtnBtnTgl" tabindex="-1">
                                        <label for="ntfy_watch" class="genCheckBoxToggle">
                                            <span class="genCheckBoxToggleCircle"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="genAtnModalOptBox">
                                <div class="mngNtfyTtlBox">
                                    <p class="mngNtfyTtlText">Watch recommendations & more</p>
                                </div>
                                <div class="mngNtfyAtnBtn">
                                    <div class="genCheckBoxBase">
                                        <input type="checkbox" id="ntfy_recommend" class="genCheckBoxInput mngNtfyAtnBtnTgl" tabindex="-1">
                                        <label for="ntfy_recommend" class="genCheckBoxToggle">
                                            <span class="genCheckBoxToggleCircle"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="genAtnModalOptBox">
                                <div class="mngNtfyTtlBox">
                                    <p class="mngNtfyTtlText">Exploring Uvid+</p>
                                </div>
                                <div class="mngNtfyAtnBtnBox">
                                    <div class="genCheckBoxBase">
                                        <input type="checkbox" id="ntfy_explore" class="genCheckBoxInput mngNtfyAtnBtnTgl" tabindex="-1">
                                        <label for="ntfy_explore" class="genCheckBoxToggle">
                                            <span class="genCheckBoxToggleCircle"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="genAtnModalOptBox">
                                <div class="mngNtfyTtlBox">
                                    <p class="mngNtfyTtlText">Promotions & membership Offers</p>
                                </div>
                                <div class="mngNtfyAtnBtn">
                                    <div class="genCheckBoxBase">
                                        <input type="checkbox" id="ntfy_promotions" class="genCheckBoxInput mngNtfyAtnBtnTgl" tabindex="-1">
                                        <label for="ntfy_promotions" class="genCheckBoxToggle">
                                            <span class="genCheckBoxToggleCircle"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="genAtnModalOptBox">
                                <div class="mngNtfyTtlBox">
                                    <p class="mngNtfyTtlText">Surveys, research & more</p>
                                </div>
                                <div class="mngNtfyAtnBtn">
                                    <div class="genCheckBoxBase">
                                        <input type="checkbox" id="ntfy_participation" class="genCheckBoxInput mngNtfyAtnBtnTgl" tabindex="-1">
                                        <label for="ntfy_participation" class="genCheckBoxToggle">
                                            <span class="genCheckBoxToggleCircle"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentBody.appendChild(mngNtfyBdr);

        const mngNtfyCloseBtn = document.querySelectorAll(".closeMngNtfyBtn");
        let mngNtfyTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Transitioning elements
        mngNtfyTimer = setTimeout(async () => 
        {
            clearTimeout(mngNtfyTimer);
            documentBody.setAttribute(`data-modal-state` , `open`);
            mngNtfyBdr.classList.add("active");
            attachMngNtfyListeners();

            // Update toggles with currently selected preferences
            let usrNtfyPrefs = await getUserData();
            if((usrNtfyPrefs?.ntfy_pref !== undefined) && (usrNtfyPrefs?.ntfy_pref != null));
            {
                document.querySelector(".mngNtfyAtnBtnTgl#ntfy_watch").checked = usrNtfyPrefs?.ntfy_pref?.ntfy_what_you_stream;
                document.querySelector(".mngNtfyAtnBtnTgl#ntfy_recommend").checked = usrNtfyPrefs?.ntfy_pref?.ntfy_recommendation;
                document.querySelector(".mngNtfyAtnBtnTgl#ntfy_explore").checked = usrNtfyPrefs?.ntfy_pref?.ntfy_exploration;
                document.querySelector(".mngNtfyAtnBtnTgl#ntfy_promotions").checked = usrNtfyPrefs?.ntfy_pref?.ntfy_promotions;
                document.querySelector(".mngNtfyAtnBtnTgl#ntfy_participation").checked = usrNtfyPrefs?.ntfy_pref?.ntfy_surveys;
            }
        }, 250);

        // Closes the mngNtfy modal
        async function closeMngNtfyMdl()
        {
            mngNtfyBdr.classList.remove("active");
            mngNtfyBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                mngNtfyBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(mngNtfyBdr);
                documentBody.removeAttribute(`data-modal-state`);
                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        // Closes the modal
        mngNtfyCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeMngNtfyMdl);
        });

        function attachMngNtfyListeners()
        {
            const ntfy_rad_btn = document.querySelectorAll(".mngNtfyAtnBtnTgl");

            ntfy_rad_btn.forEach((olditem) => 
            {
                if((olditem.sett_atn))
                {
                    olditem.removeEventListener("click" , olditem.sett_atn)
                }
            });

            ntfy_rad_btn.forEach((newBtn) => 
            {
                const rad_atn = async () => 
                {
                    ntfy_rad_btn.forEach(item => item.disabled = true);
                    let checkBtn = newBtn.parentElement.querySelector(`input[type="checkbox"]#${newBtn.id}:checked`);
                    let ischk = false;

                    if(checkBtn)
                    {
                        // Update flag to true
                        ischk = true;
                    }
                    else
                    {
                        // Update flag to false
                        ischk = false;
                    }

                    console.log(`Tgl state: ${ischk}`);
                    ntfy_rad_btn.forEach(item => item.disabled = false);

                    //  Update the corresponding property
                    try 
                    {
                        switch(newBtn.id)
                        {
                            case 'ntfy_watch':
                                await updateUserData(
                                {
                                    [`ntfy_pref.ntfy_what_you_stream`]: ischk
                                });
                                notification('notifyGood', 'Preferences saved');
                                break;
                                
                            case 'ntfy_recommend':
                                await updateUserData(
                                {
                                    [`ntfy_pref.ntfy_recommendation`]: ischk
                                });
                                notification('notifyGood', 'Preferences saved');
                                break;
                                
                            case 'ntfy_explore':
                                await updateUserData(
                                {
                                    [`ntfy_pref.ntfy_exploration`]: ischk
                                });
                                notification('notifyGood', 'Preferences saved');
                                break;
                                
                            case 'ntfy_promotions':
                                await updateUserData(
                                {
                                    [`ntfy_pref.ntfy_promotions`]: ischk
                                });
                                notification('notifyGood', 'Preferences saved');
                                break;
                                
                            case 'ntfy_participation':
                                await updateUserData(
                                {
                                    [`ntfy_pref.ntfy_surveys`]: ischk
                                });
                                notification('notifyGood', 'Preferences saved');
                                break;

                            default:
                                notification('notifyBad', 'Failed to update preferences');
                                break;
                        }

                        // Re-enable toggle buttons
                        ntfy_rad_btn.forEach(item => item.disabled = false);
                    }
                    catch(err)
                    {
                        // Log any errors and re-enable toggle buttons
                        console.error(err);
                        ntfy_rad_btn.forEach(item => item.disabled = false);
                    }
                }

                newBtn.addEventListener("click", rad_atn);
                newBtn.sett_atn = rad_atn;
            });
        }
    }

    
    // Connecting to 3rd-party apps (Non-operational)
    function init_3rd_party_connect()
    {
        const cnct3rdPartyAppBdr = document.createElement("div");
        cnct3rdPartyAppBdr.classList.add("genAtnModalBdr");
        cnct3rdPartyAppBdr.innerHTML = 
        `
            <div class="genAtnModalBcg closeCnct3rdPartyAppBtn"></div>
            <div class="genAtnModalBox">
                <div class="genAtnModalCtnt">
                    <div class="genAtnModalHeader">
                        <div class="genAtnModalHeaderIconBox closeCnct3rdPartyAppBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="genAtnModalHeaderText">
                            <span class="large">C</span>
                            <span class="small">onnect Apps</span>
                        </div>
                    </div>
                    <div class="genAtnModalOptBcg createProfItemBcg">
                        <div class="genAtnModalOptBdr createProfItemBox">
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Discord</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Epic Games</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Facebook</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Guilded</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Nitendo</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Playstation</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Steam</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Twitch</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Ubisoft</span>
                                </div>
                            </button>
                            <button class="genAtnModalOptBox cnct3rdPartyAppItem">
                                <div class="genAtnModalOptIconBox">
                                    <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIconSvg">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">Xbox</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentBody.appendChild(cnct3rdPartyAppBdr);

        const cnct3rdPartyAppCloseBtn = document.querySelectorAll(".closeCnct3rdPartyAppBtn");
        const cnct3rdPartyAppItemBtn = document.querySelectorAll(".cnct3rdPartyAppItem");
        let cnct3rdPartyAppTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Transitioning elements
        cnct3rdPartyAppTimer = setTimeout(async () => 
        {
            clearTimeout(cnct3rdPartyAppTimer);
            documentBody.setAttribute(`data-modal-state` , `open`);
            cnct3rdPartyAppBdr.classList.add("active");
        }, 250);

        // Closes the Cnct3rdPartyApp modal
        async function closeUpdFullname()
        {
            cnct3rdPartyAppBdr.classList.remove("active");
            cnct3rdPartyAppBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                cnct3rdPartyAppBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(cnct3rdPartyAppBdr);
                documentBody.removeAttribute(`data-modal-state`);
                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        // Let user know it's non-operational
        cnct3rdPartyAppItemBtn.forEach((btn) => 
        {
            btn.onclick = () => 
            {
                notification(
                    `notifyBad`,
                    `Unable to connect to ${btn.querySelector(".genAtnModalOptText").textContent} at this time.`
                );
            }
        });

        // Closes the modal
        cnct3rdPartyAppCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeUpdFullname);
        });
    }




// PRIVACY & SECURITY SETTINGS

    // Update User's fullname
    function updUsrFullName(btnEv)
    {
        const updFullnameBdr = document.createElement("div");
        updFullnameBdr.classList.add("genAtnModalBdr");
        updFullnameBdr.innerHTML = 
        `
            <div class="genAtnModalBcg closeUpdFullnameBtn"></div>
            <div class="genAtnModalBox">
                <div class="genAtnModalCtnt">
                    <div class="genAtnModalHeader">
                        <div class="genAtnModalHeaderIconBox closeUpdFullnameBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="genAtnModalHeaderText">
                            <span class="large">U</span>
                            <span class="small">pdate Fullname</span>
                        </div>
                    </div>
                    <div class="genAtnModalOptBcg createProfItemBcg">
                        <div class="genAtnModalOptBdr createProfItemBox">
                            <div class="newCLBdr active">
                                <div class="newCLBox">
                                    <div class="newCLInputBdr">
                                        <div class="newCLInputBox">
                                            <input type="text" name="delPassField" id="updFullnameInputId" class="newCLInputClass" placeholder="Enter your fullname" />
                                        </div>
                                    </div>
                                    <div class="newCLWarnBdr">
                                        <div class="newCLWarnBox">
                                            <p id="updFullnameWarnId" class="newCLWarnText empty" tabindex="-1"></p>
                                        </div>
                                    </div>
                                    <div class="newCLAtnBdr">
                                        <div class="newCLAtnBox">
                                            <button type="button" id="cfrmUpdFullname" class="genBtnBox midSolidBtn">
                                                <div class="genBtnText">Save</div>
                                            </button>
                                            <button type="button" id="cnclUpdFullname" class="genBtnBox hollowBtn closeUpdFullnameBtn">
                                                <div class="genBtnText">Cancel</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentBody.appendChild(updFullnameBdr);

        const updFullnameCloseBtn = document.querySelectorAll(".closeUpdFullnameBtn");
        const updFullnameWarn = document.querySelector("#updFullnameWarnId");
        const updFullnameInput = document.querySelector("#updFullnameInputId");
        const updFullnameBtn = document.querySelector("#cfrmUpdFullname");
        let isUpdNameValid = false;
        let updFullnameTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Transitioning elements
        updFullnameTimer = setTimeout(async () => 
        {
            clearTimeout(updFullnameTimer);
            let f_n = await getUserData();
            updFullnameInput.value = f_n?.full_name || "";
            documentBody.setAttribute(`data-modal-state` , `open`);
            updFullnameBdr.classList.add("active");
        }, 250);
        
        // Automatically focus on input feild after transition
        updFullnameBdr.addEventListener("transitionend" , function handleTransitionEnd()
        {
            updFullnameBdr.removeEventListener("transitionend" , handleTransitionEnd);
            updFullnameInput.focus();
        });

        // Validate fullname
        function valFullname(event) 
        {
            let fname = cardName.value.toString().trim();
            let fullName_Condition = /^\s*\S+(?:\s+\S+)+\s*$/;

            // Checks if empty
            if((event.data == null) && (fname === ""))
            {
                updFullnameWarn.textContent = "Required";
                updFullnameWarn.classList.add("active");
                isUpdNameValid = false;
            }
            // Checks if Full name was entered
            else if(!(fullName_Condition.test(fname)))
            {
                updFullnameWarn.textContent = "First and last name required";
                updFullnameWarn.classList.add("active");
                isUpdNameValid = false;
            }
            else
            {
                updFullnameWarn.textContent = "";
                updFullnameWarn.classList.remove("active");
                isUpdNameValid = true;
            }
        }
        
        updFullnameInput.addEventListener("input", valFullname);

        // Verify the fullname by pressing the "Enter" key
        updFullnameInput.addEventListener("keyup" , (e) => 
        {
            if((typeof e === undefined) || (typeof e.key === "undefined")) return;

            if((e.key.toLowerCase() === "enter"))
            {
                updFullnameBtn.click();
            }
        });

        // Verify the fullname
        updFullnameBtn.addEventListener("click" , () => 
        {
            if(isUpdNameValid == true)
            {
                updFullnameInput.disabled = true;
                updFullnameBtn.disabled = true;
                closeUpdFullname(true);
            }
            else
            {
                notification(`notifyBad`, "Invalid password");
            }
        });

        // Closes the updFullname modal
        async function closeUpdFullname(isName = false)
        {
            if(isName == true)
            {
                await updateUserData({full_name: updFullnameInput.value});
                document.getElementById("sett_change_fullname").closest(".sett_ctnt_hrtl").querySelector(".settCtntSectDescText").textContent = updFullnameInput.value;
                notification(`notifyGood`, `Fullname updated successfully`);
            }

            updFullnameBtn.classList.replace("midSolidBtn" , "inactiveBtn");
            updFullnameInput.value = "";
            updFullnameInput.disabled = true;
            updFullnameBtn.disabled = true;
            updFullnameBdr.classList.remove("active");
            
            updFullnameBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                updFullnameBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(updFullnameBdr);
                documentBody.removeAttribute(`data-modal-state`);
                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        // Closes the modal
        updFullnameCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeUpdFullname);
        });
    }


    // Updates User's password
    function valPassUpd()
    {
        const updUsrPassBdr = document.createElement("div");
        updUsrPassBdr.classList.add("genAtnModalBdr");
        updUsrPassBdr.innerHTML = 
        `
            <div class="genAtnModalBcg closeUpdPassBtn"></div>
            <div class="genAtnModalBox">
                <div class="genAtnModalCtnt">
                    <div class="genAtnModalHeader">
                        <div class="genAtnModalHeaderIconBox closeUpdPassBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="genAtnModalHeaderText">
                            <span class="large">U</span>
                            <span class="small">pdate Password</span>
                        </div>
                    </div>
                    <div class="genAtnModalOptBcg createProfItemBcg">
                        <div class="genAtnModalOptBdr createProfItemBox">
                            <div class="newCLBdr active">
                                <div class="newCLBox">
                                    <div class="newCLInputBdr">
                                        <div class="newCLInputBox">
                                            <input type="password" name="currPassField" id="currPassInputId" class="newCLInputClass" placeholder="Current password" />
                                        </div>
                                    </div>
                                    <div class="newCLWarnBdr">
                                        <div class="newCLWarnBox">
                                            <p id="currPassWarnId" class="newCLWarnText empty" tabindex="-1"></p>
                                        </div>
                                    </div>
                                    <div class="newCLInputBdr">
                                        <div class="newCLInputBox">
                                            <input type="password" name="newPassField" id="newPassInputId" class="newCLInputClass" placeholder="New password" />
                                        </div>
                                    </div>
                                    <div class="newCLWarnBdr">
                                        <div class="newCLWarnBox">
                                            <p id="newPassWarnId" class="newCLWarnText empty" tabindex="-1"></p>
                                        </div>
                                    </div>
                                    <div class="newCLAtnBdr">
                                        <div class="newCLAtnBox">
                                            <button type="button" id="cfrmUpdPass" class="genBtnBox midSolidBtn">
                                                <div class="genBtnText">Update</div>
                                            </button>
                                            <button type="button" id="cnclUpdPass" class="genBtnBox hollowBtn closeUpdPassBtn">
                                                <div class="genBtnText">Cancel</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentBody.appendChild(updUsrPassBdr);

        const updUsrPassCloseBtn = document.querySelectorAll(".closeUpdPassBtn");
        const updUsrPassCfrmBtn = document.querySelector("#cfrmUpdPass");
        const currPassWarn = document.querySelector("#currPassWarnId");
        const newPassWarn = document.querySelector("#newPassWarnId");
        const currPassInput = document.querySelector("#currPassInputId");
        const newPassInput = document.querySelector("#newPassInputId");
        const usr_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
        let isCurrPassValid = false;
        let isNewPassValid = false;
        let updUsrPassTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Transitioning elements
        updUsrPassTimer = setTimeout(() => 
        {
            documentBody.setAttribute(`data-modal-state` , `open`);
            updUsrPassBdr.classList.add("active");
            clearTimeout(updUsrPassTimer);
        }, 250);
        
        // Automatically focus on input feild after transition
        updUsrPassBdr.addEventListener("transitionend" , function handleTransitionEnd()
        {
            updUsrPassBdr.removeEventListener("transitionend" , handleTransitionEnd);
            currPassInput.focus();
        });

        // Allow any character but whitespaces
        currPassInput.addEventListener("beforeinput", (event) => 
        {
            if(event.data != null && !(usr_pass_cond).test(event.data))
                event.preventDefault();
        });
        newPassInput.addEventListener("beforeinput", (event) => 
        {
            if(event.data != null && !(usr_pass_cond).test(event.data))
                event.preventDefault();
        });

        // Validate current password
        function valPass(pass = "", warn = null) 
        {
            pass = pass.toString();
            const userPass_Cond_SpecialChar = /\W/g;
            const userPass_Cond_num = /\d/g;
            const userPass_Cond_Lett_Upr = /[A-Z]/g;
            const userPass_Cond_Lett_Lwr = /[a-z]/g;


            // Checks if there is any value in the input feild
            if(((pass === "") && (pass.length <= 0)))
            {
                if((warn != null))
                {
                    warn.innerHTML = `Required`;
                    warn.classList.add("active");
                }
                return false;
            }
            // Checks if the input fits the specified pattern
            else if(!(pass.match(userPass_Cond_SpecialChar) 
                && pass.match(userPass_Cond_num)
                && pass.match(userPass_Cond_Lett_Upr)
                && pass.match(userPass_Cond_Lett_Lwr)
            ))
            {
                if((warn != null))
                {
                    warn.innerHTML = 
                    `
                        Password must contain:
                        </br>
                        1. Uppercase and lowercase letter
                        </br>
                        2. Special character ex. "/$%^&*"
                        </br>
                        3. A number 0-9
                        </br>
                        4. At least eight characters
                        </br>
                    `;
                    warn.classList.add("active");
                }
                return false;
            }
            // Checks if the pattern is less "8" characters and above than "100" characters
            else if(((pass.length > 0) && (pass.length < 8)))
            {
                if((warn != null))
                {
                    warn.innerHTML = `Password length must be at least 8 characters`;
                    warn.classList.add("active");
                }
                return false;
            }
            // If all checks are completed then it is accepted
            else
            {
                if((warn != null))
                {
                    warn.innerHTML = ``;
                    warn.classList.remove("active");
                }
                return true;
            }
        }
        
        currPassInput.addEventListener("input", () => 
        {
            isCurrPassValid = valPass(currPassInput.value, currPassWarn);
        });
        
        newPassInput.addEventListener("input", () => 
        {
            isNewPassValid = valPass(newPassInput.value, newPassWarn);
        });

        // Validate pass by pressing the "Enter" key
        currPassInput.addEventListener("keyup" , (e) => 
        {
            if((isCurrPassValid == false) || (typeof e === undefined) || (typeof e.key === "undefined")) return;

            if((e.key.toLowerCase() === "enter"))
            {
                newPassInput.focus();
            }
        });

        // Validate pass by pressing the "Enter" key
        newPassInput.addEventListener("keyup" , (e) => 
        {
            if((isNewPassValid == false) || (typeof e === undefined) || (typeof e.key === "undefined")) return;

            if((e.key.toLowerCase() === "enter"))
            {
                updUsrPassCfrmBtn.click();
            }
        });

        // Get pass input for verification
        updUsrPassCfrmBtn.addEventListener("click" , () => 
        {
            if((isCurrPassValid == true) && (isNewPassValid == true))
            {
                currPassInput.disabled = true;
                newPassInput.disabled = true;
                updUsrPassCfrmBtn.disabled = true;
                closeUpdPass(true);
            }
            else
            {
                notification(`notifyBad`, "Check all fields are filled correctly");
            }
        });

        // Closes the updUsrPass modal
        async function closeUpdPass(isPass = false)
        {
            if(isPass == true) await reauthB4PassUpd(currPassInput.value, newPassInput.value);

            updUsrPassCfrmBtn.classList.replace("midSolidBtn" , "inactiveBtn");
            currPassInput.value = "";
            newPassInput.value = "";
            currPassInput.disabled = true;
            newPassInput.disabled = true;
            updUsrPassCfrmBtn.disabled = true;
            updUsrPassBdr.classList.remove("active");
            
            updUsrPassBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                updUsrPassBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(updUsrPassBdr);
                documentBody.removeAttribute(`data-modal-state`);
                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        // Closes the modal
        updUsrPassCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeUpdPass);
        });


        // Reauthenticate user before updating their password
        async function reauthB4PassUpd(currpass, newpass)
        {
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if no user is signed in
            if(!user)
            {
                notification(`notifyBad`, "No user is currently signed in.");
                return false;
            }

            const email = user.email; // Use email from current session
            const credential = firebase.auth.EmailAuthProvider.credential(email, currpass);

            await user.reauthenticateWithCredential(credential)
            .then(() => 
            {
                return user.updatePassword(newpass)
                .then(() => 
                {
                    notification(`notifyGood`, "Password updated");
                })
                .catch((error) => 
                {
                    console.error("Password update failed:", error.message);
                    notification(`notifyBad`, "Password update failed! Check that new password is valid");
                });
            })
            .catch((error) => 
            {
                // Warn user of wrong current password
                if (error.code === "auth/invalid-credential") 
                {
                    console.error("Incorrect current password.");
                    notification(`notifyBad`, "Current password is incorrect");
                }
                else
                {
                    console.error("Reauthentication failed:", error.message);
                    notification(`notifyBad`, "Reauthentication failed");
                }
            });
        }
    }


    // Updates User's email
    function valEmailUpd()
    {
        const updUsrEmailBdr = document.createElement("div");
        updUsrEmailBdr.classList.add("genAtnModalBdr");
        updUsrEmailBdr.innerHTML = 
        `
            <div class="genAtnModalBcg closeUpdEmailBtn"></div>
            <div class="genAtnModalBox">
                <div class="genAtnModalCtnt">
                    <div class="genAtnModalHeader">
                        <div class="genAtnModalHeaderIconBox closeUpdEmailBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="genAtnModalHeaderText">
                            <span class="large">U</span>
                            <span class="small">pdate Email</span>
                        </div>
                    </div>
                    <div class="genAtnModalOptBcg createProfItemBcg">
                        <div class="genAtnModalOptBdr createProfItemBox">
                            <div class="newCLBdr active">
                                <div class="newCLBox">
                                    <div class="newCLInputBdr">
                                        <div class="newCLInputBox">
                                            <input type="text" name="newEmailField" id="newEmailInputId" class="newCLInputClass" placeholder="New email" />
                                        </div>
                                    </div>
                                    <div class="newCLWarnBdr">
                                        <div class="newCLWarnBox">
                                            <p id="newEmailWarnId" class="newCLWarnText empty" tabindex="-1"></p>
                                        </div>
                                    </div>
                                    <div class="newCLInputBdr">
                                        <div class="newCLInputBox">
                                            <input type="password" name="currPassField" id="currPassInputId" class="newCLInputClass" placeholder="Current password" />
                                        </div>
                                    </div>
                                    <div class="newCLWarnBdr">
                                        <div class="newCLWarnBox">
                                            <p id="currPassWarnId" class="newCLWarnText empty" tabindex="-1"></p>
                                        </div>
                                    </div>
                                    <div class="newCLAtnBdr">
                                        <div class="newCLAtnBox">
                                            <button type="button" id="cfrmUpdEmail" class="genBtnBox midSolidBtn">
                                                <div class="genBtnText">Update</div>
                                            </button>
                                            <button type="button" id="cnclUpdEmail" class="genBtnBox hollowBtn closeUpdEmailBtn">
                                                <div class="genBtnText">Cancel</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentBody.appendChild(updUsrEmailBdr);

        const updUsrEmailCloseBtn = document.querySelectorAll(".closeUpdEmailBtn");
        const updUsrEmailCfrmBtn = document.querySelector("#cfrmUpdEmail");
        const newEmailWarn = document.querySelector("#newEmailWarnId");
        const newEmailInput = document.querySelector("#newEmailInputId");
        const currPassWarn = document.querySelector("#currPassWarnId");
        const currPassInput = document.querySelector("#currPassInputId");
        const usr_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
        const usr_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
        let isNewEmailValid = false;
        let isCurrPassValid = false;
        let emailArray = [];
        let updUsrEmailTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = true;

        // Transitioning elements
        updUsrEmailTimer = setTimeout(() => 
        {
            documentBody.setAttribute(`data-modal-state` , `open`);
            updUsrEmailBdr.classList.add("active");
            clearTimeout(updUsrEmailTimer);
        }, 250);
        
        // Automatically focus on input feild after transition
        updUsrEmailBdr.addEventListener("transitionend" , function handleTransitionEnd()
        {
            updUsrEmailBdr.removeEventListener("transitionend" , handleTransitionEnd);
            newEmailInput.focus();
        });

        // Allow any character but whitespaces
        newEmailInput.addEventListener("beforeinput", (event) => 
        {
            if(event.data != null && !(usr_email_cond).test(event.data))
                event.preventDefault();
        });
        currPassInput.addEventListener("beforeinput", (event) => 
        {
            if(event.data != null && !(usr_pass_cond).test(event.data))
                event.preventDefault();
        });

        // Validation function for "Email"
        function valEmail(event)
        {
            emailArray.length = 0;
            emailArray.push(newEmailInput.value);
            let lastEmailArrayval = emailArray.at(-1);

            let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Checks if the field is empty
            if((event.data == null) && (lastEmailArrayval.length <= 0))
            {
                newEmailWarn.textContent = "Required";
                newEmailWarn.classList.add("active");
                isNewEmailValid = false;
            }
            else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
            {
                newEmailWarn.textContent = "Invalid Email";
                newEmailWarn.classList.add("active");
                isNewEmailValid = false;
            }
            // If all conditions are met, the Email is valid, i.e "true";
            else
            {
                newEmailWarn.textContent = "";
                newEmailWarn.classList.remove("active");
                isNewEmailValid = true;
            }
        }
        
        newEmailInput.addEventListener("input", valEmail);

        // Validate pass by pressing the "Enter" key
        newEmailInput.addEventListener("keyup" , (e) => 
        {
            if((isNewEmailValid == false) || (typeof e === undefined) || (typeof e.key === "undefined")) return;

            if((e.key.toLowerCase() === "enter"))
            {
                newEmailInput.focus();
            }
        });

        // Validate current "Password"
        function valPass(pass = "", warn = null) 
        {
            pass = pass.toString();
            const userPass_Cond_SpecialChar = /\W/g;
            const userPass_Cond_num = /\d/g;
            const userPass_Cond_Lett_Upr = /[A-Z]/g;
            const userPass_Cond_Lett_Lwr = /[a-z]/g;


            // Checks if there is any value in the input feild
            if(((pass === "") && (pass.length <= 0)))
            {
                if((warn != null))
                {
                    warn.innerHTML = `Required`;
                    warn.classList.add("active");
                }
                return false;
            }
            // Checks if the input fits the specified pattern
            else if(!(pass.match(userPass_Cond_SpecialChar) 
                && pass.match(userPass_Cond_num)
                && pass.match(userPass_Cond_Lett_Upr)
                && pass.match(userPass_Cond_Lett_Lwr)
            ))
            {
                if((warn != null))
                {
                    warn.innerHTML = 
                    `
                        Password must contain:
                        </br>
                        1. Uppercase and lowercase letter
                        </br>
                        2. Special character ex. "/$%^&*"
                        </br>
                        3. A number 0-9
                        </br>
                        4. At least eight characters
                        </br>
                    `;
                    warn.classList.add("active");
                }
                return false;
            }
            // Checks if the pattern is less "8" characters and above than "100" characters
            else if(((pass.length > 0) && (pass.length < 8)))
            {
                if((warn != null))
                {
                    warn.innerHTML = `Password length must be at least 8 characters`;
                    warn.classList.add("active");
                }
                return false;
            }
            // If all checks are completed then it is accepted
            else
            {
                if((warn != null))
                {
                    warn.innerHTML = ``;
                    warn.classList.remove("active");
                }
                return true;
            }
        }
        
        currPassInput.addEventListener("input", () => 
        {
            isCurrPassValid = valPass(currPassInput.value, currPassWarn);
        });

        // Validate pass by pressing the "Enter" key
        currPassInput.addEventListener("keyup" , (e) => 
        {
            if((isCurrPassValid == false) || (typeof e === undefined) || (typeof e.key === "undefined")) return;

            if((e.key.toLowerCase() === "enter"))
            {
                updUsrEmailCfrmBtn.click();
            }
        });

        //  Verification inputs for reauthentication
        updUsrEmailCfrmBtn.addEventListener("click" , () => 
        {
            if((isCurrPassValid == true) && (isNewEmailValid == true))
            {
                currPassInput.disabled = true;
                newEmailInput.disabled = true;
                updUsrEmailCfrmBtn.disabled = true;
                closeEmailUpd(true);
            }
            else
            {
                notification(`notifyBad`, "Check all fields are filled correctly");
            }
        });

        // Closes the updUsrEmail modal
        async function closeEmailUpd(isEmail = false)
        {
            if(isEmail == true) await reauthB4EmailUpd(currPassInput.value, newEmailInput.value);

            updUsrEmailCfrmBtn.classList.replace("midSolidBtn" , "inactiveBtn");
            currPassInput.value = "";
            newEmailInput.value = "";
            currPassInput.disabled = true;
            newEmailInput.disabled = true;
            updUsrEmailCfrmBtn.disabled = true;
            updUsrEmailBdr.classList.remove("active");
            
            updUsrEmailBdr.addEventListener("transitionend" , function handleTransitionEnd()
            {
                updUsrEmailBdr.removeEventListener("transitionend" , handleTransitionEnd);
                documentBody.removeChild(updUsrEmailBdr);
                documentBody.removeAttribute(`data-modal-state`);
                if(typeof btnEv !== "undefined") btnEv.target.closest(`.settCtntSectAtnBtn[data-sett-sect-type='modal']`).disabled = false;
            });
        }

        // Closes the modal
        updUsrEmailCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeEmailUpd);
        });


        // Reauthenticate user before updating their email
        async function reauthB4EmailUpd(currPass, newEmail)
        {
            // return console.log("Here");
            const auth = window.firebaseAuth;
            const user = auth.currentUser;

            // Return if no user is signed in
            if(!user)
            {
                notification(`notifyBad`, "No user is currently signed in.");
                return false;
            }

            const email = user.email; // Use email from current session
            const credential = firebase.auth.EmailAuthProvider.credential(email, currPass);

            await user.reauthenticateWithCredential(credential)
            .then(() => 
            {
                console.log("reauth successful -> req email change");
                return user.verifyBeforeUpdateEmail(newEmail)
                .then(async () => 
                {
                    console.log("email ver sent -> req refresh user state.");
                    notification(`notifyGood`, "A confirmation email was sent to your new address");
                    accountSignOut();
                })
                .catch((error) => 
                {
                    console.error("Email update failed:", error.message);
                    notification(`notifyBad`, "Email update failed!");
                });
            })
            .catch((error) => 
            {
                // Warn user of wrong current password
                if (error.code === "auth/invalid-credential") 
                {
                    console.error("Incorrect current password.");
                    notification(`notifyBad`, "Current password is incorrect");
                }
                else
                {
                    console.error("Reauthentication failed:", error.message);
                    notification(`notifyBad`, "Reauthentication failed");
                }
            });
        }
    }












