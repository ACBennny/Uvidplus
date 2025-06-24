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
                    let atn_func = item.sett_atn_func !== "" ? `${item.sett_atn_func}()` : `notification('notifyBad', 'Feature currently unavailable')`;
                    settCtntAtnStruct = 
                    `
                        <div class="settCtntSectAtnBdr">
                            <div class="settCtntSectAtnBox">
                                <button onclick="${atn_func}" id="${item.sett_atn_id}" class="settCtntSectAtnBtn settCtntSectAtnIcon">
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



// UPDATE CURRENT INFO

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



// UPDATING FULLNAME

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
        let updFullnameArray = [];
        let isUpdNameValid = false;
        let updFullnameTimer;

        // Disabling btn to prevent multiple calls
        if(typeof btnEv !== "undefined") btnEv.disabled = true;

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
            updFullnameArray.length = 0;
            updFullnameArray.push(updFullnameInput.value);
            let lastFNameArrayVal = updFullnameArray.at(-1);
            let fullName_Condition = /^\s*\S+(?:\s+\S+)+\s*$/;

            // Checks if empty
            if((event.data == null) && (lastFNameArrayVal.length <= 0))
            {
                updFullnameWarn.textContent = "Required";
                updFullnameWarn.classList.add("active");
                isUpdNameValid = false;
            }
            // Checks if Full name was entered
            else if(!(lastFNameArrayVal.match(fullName_Condition)))
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
                if(typeof btnEv !== "undefined") btnEv.disabled = false;
            });
        }

        // Closes the modal
        updFullnameCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeUpdFullname);
        });
    }


    
// UPDATING PASSWORD

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
        if(typeof btnEv !== "undefined") btnEv.disabled = true;

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
                closeDelAcc(true);
            }
            else
            {
                notification(`notifyBad`, "Check all fields are filled correctly");
            }
        });

        // Closes the updUsrPass modal
        async function closeDelAcc(isPass = false)
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
                if(typeof btnEv !== "undefined") btnEv.disabled = false;
            });
        }

        // Closes the modal
        updUsrPassCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeDelAcc);
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


    
// UPDATING EMAIL

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
        if(typeof btnEv !== "undefined") btnEv.disabled = true;

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
                closeDelAcc(true);
            }
            else
            {
                notification(`notifyBad`, "Check all fields are filled correctly");
            }
        });

        // Closes the updUsrEmail modal
        async function closeDelAcc(isEmail = false)
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
                if(typeof btnEv !== "undefined") btnEv.disabled = false;
            });
        }

        // Closes the modal
        updUsrEmailCloseBtn.forEach(one => 
        {
            one.addEventListener("mousedown" , closeDelAcc);
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



// UPDATING TOGGLE OPTIONS

    // Attach listeners
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



// UPDATING MENU OPTIONS

    // Attaching listeners
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
                top: (Math.round(menuOptBtns[usrCtg].getBoundingClientRect().top) - 25),
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















