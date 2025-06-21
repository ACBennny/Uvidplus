/***************************************************************
 * This will hold the default code for the MyList pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let myListStructHTML = 
    `
        <!-- body -->
        <div class="myListMainBdr">
            <div class="myListMainBox">
                <div class="myListHeaderBdr">
                    <div class="myListHeaderBox">
                        <div class="myListHeaderBcgBdr">
                            <div class="myListHeaderBcgBox">
                                <div class="img_preload_box">
                                    <div class="img_preload_sibling"></div>
                                    <img loading="lazy" 
                                        onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                        onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                        src=" src="/images/uvid-green-bcg1-light.jpg" alt="Background image of My Lists page" class="myListHeaderBcgImg"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="myListHeaderDetBdr">
                            <div class="myListHeaderDetBox">
                                <div class="myListHeaderTitleBdr">
                                    <div class="myListHeaderTitleBox">
                                        <div class="myListHeaderTitleIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListHeaderTitleIconSvg">
                                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                            </svg>
                                        </div>
                                        <h1 class="myListHeaderTitleText">
                                            <span class="myListHeaderTitleText_intro">My</span>
                                            <span class="myListHeaderTitleText_myListName">Lists</span>
                                        </h1>
                                    </div>
                                </div>
                                <div class="myListHeaderNavBdr">
                                    <div class="myListHeaderNavBox">
                                        <a href="#/my-list/watchlist" class="myListHeaderNavLink my-list-watchlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListHeaderNavLinkIcon">
                                                <path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663" />
                                            </svg>
                                            <span class="myListHeaderNavLinkText">Watchlist</span>
                                        </a>
                                        <a href="#/my-list/collections" class="myListHeaderNavLink my-list-collections">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListHeaderNavLinkIcon">
                                                <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                                            </svg>
                                            <span class="myListHeaderNavLinkText">Collections</span>
                                        </a>
                                        <a href="#/my-list/downloads" class="myListHeaderNavLink my-list-downloads">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="myListHeaderNavLinkIcon">
                                                <path d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z" />
                                                <path d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191" />
                                            </svg>
                                            <span class="myListHeaderNavLinkText">Downloads</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myListBodyBdr "></div>
            </div>
        </div>
    `;
    let showInWLMenuOptStruct = 
    `
        <div class="genMenuModalCtntBtnIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
            </svg>
        </div>
        <div class="genMenuModalCtntBtnText">Edit in watchlist</div>
    `;
    let showInDLMenuOptStruct = 
    `
        <div class="genMenuModalCtntBtnIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genMenuModalCtntBtnSvg">
                <path fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m12.428 6.181a.75.75 0 0 1 .063 1.06l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 0 1 1.122-.997l.772.87l2.106-2.37a.75.75 0 0 1 1.06-.063" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="genMenuModalCtntBtnText">Downloaded</div>
    `;
    let titleBdrBtm;
    

    async function preLoadMyListPageStruct()
    {
        let selectedProfile = await getSelectedProfile();

        // Update Navbar active states
        sideNavLinks[3].classList.add("active");
        btmNavLinks[2].classList.add("active");

        let myListHash = hash_parts[2];
        let myListPage = myListHash != undefined ? `${hash_parts[2]}`: `watchlist`;
        
        documentCtnt.insertAdjacentHTML(`afterbegin` , myListStructHTML);

        // Add active state for my list's nav
        document.querySelector(`.my-list-${myListPage}`).classList.add("active");

        // Update background to the current profile's
        document.querySelector(`.myListHeaderBcgImg`).setAttribute(`src` , `${selectedProfile.prof_bcgImg}`);

        // Insert page content
        callGlobalFunctions(`start_mylist_${myListPage}_page`, null);

        // Get limit value for displaying the Top Navbar
        let titleHdrRect = document.querySelector(".myListHeaderBdr").getBoundingClientRect();
        let titleBdrRect = document.querySelector(".myListBodyTitleBdr").getBoundingClientRect();
        titleBdrBtm = Math.ceil(titleHdrRect.height + titleBdrRect.height);
    }


    // Changes the content of the editShowInWLBtn if show is in watchlist
    async function updEditShowInWLBtn(link)
    {
        let selectedProfile = await getSelectedProfile();
        let isInWL = selectedProfile.prof_watchlist.filter(item => item.wl_item === link);

        if((isInWL.length > 0))
        {
            document.querySelector(".editShowInWLBtn").innerHTML = showInWLMenuOptStruct;
        }
    }
 
    // Updating the watchlist features outside the watchlist page
    async function updShowsInWL()
    {
        let selectedProfile = await getSelectedProfile();
        let wlWatchStatusOpt = document.querySelectorAll(".wlWatchStatusOpt");
        let delWLBodyCards = document.querySelector(".delWLBodyCards");
        let theShowInWL = selectedProfile.prof_watchlist.filter(item => item.wl_item === genShowLinkForCL);
        let wlStatus = 0;

        if(theShowInWL.length > 0) wlStatus = theShowInWL[0].wl_status;

        // Change watch status
        wlWatchStatusOpt.forEach((prevItem) => 
        {
            if(prevItem.action)
            {
                prevItem.removeEventListener("click" , prevItem.action);
            }
        });
        wlWatchStatusOpt.forEach((currItem) => 
        {
            // Add the "selected" class to the currently selected option
            if((Number(currItem.getAttribute("data-show-status-opt")) == wlStatus))
            {
                currItem.classList.add("selected");
            }

            const upd_watch_status = async () => 
            {
                // Get the status option
                let currItemStatusOpt = Number(currItem.getAttribute("data-show-status-opt"));

                if(theShowInWL.length > 0)
                {
                    // Show is IN watchlist
                    notification(`notifyGood` , `Watch status updated`);

                    // Update status in search inventory
                    theShowInWL[0].wl_status = currItemStatusOpt;

                    // Update the prof_watchlist field
                    selectedProfile.prof_watchlist.forEach((item) => 
                    {
                        if(item.wl_item === genShowLinkForCL)
                        {
                            item.wl_status = currItemStatusOpt;
                        }
                    });
                }
                else
                {
                    // Show is NOT in watchlist
                    notification(`notifyGood` , `Show added to watchlist`);

                    // Add item to watchlist
                    selectedProfile.prof_watchlist.push(
                        {
                            wl_item: `${genShowLinkForCL}`,
                            wl_status: currItemStatusOpt,
                        }
                    );
                }

                // Update user data
                await updUsrProfFlds(
                {
                    prof_watchlist: selectedProfile.prof_watchlist
                });

                // Update the icon on the WL Btn
                let wlInfoPage = document.querySelectorAll(".wl_show_page");

                if((wlInfoPage.length !== null) || (wlInfoPage.length > 0))
                {
                    wlInfoPage.forEach((btn) => 
                    {
                        btn.querySelector(".wlIconSvg.wlIconOUT").classList.add("hide");
                        btn.querySelector(".wlIconSvg.wlIconIN").classList.remove("hide");
                    });
                }

            }

            currItem.addEventListener("click" , upd_watch_status);
            currItem.action = upd_watch_status;
        });


        // Toggle visiblity if in watchlist
        if(theShowInWL.length > 0)
        {
            delWLBodyCards.classList.remove("hidden");
        }

        // Remove from watchlist
        delWLBodyCards.onclick = async () => 
        {
            // Remove item from watchlist indexed inv
            selectedProfile.prof_watchlist = selectedProfile.prof_watchlist.filter(item => item.wl_item !== genShowLinkForCL);

            // Update user data
            await updUsrProfFlds(
            {
                prof_watchlist: selectedProfile.prof_watchlist
            });

            // Update the icon on the WL Btn
            let wlInfoPage = document.querySelectorAll(".wl_show_page")
            if((wlInfoPage.length !== null) || (wlInfoPage.length > 0))
            {
                wlInfoPage.forEach((btn) => 
                {
                    btn.querySelector(".wlIconSvg.wlIconOUT").classList.remove("hide");
                    btn.querySelector(".wlIconSvg.wlIconIN").classList.add("hide");
                });
            }

            // Notify users of the removal
            notification(`notifyGood` , `Show removed from watchlist`);
        }
    }


    // Changes the content of the Info page's ep card menu dwld btn if show is in downloads
    async function updEditShowInDLBtn(showLink, ssn_num, ep_num)
    {
        let dwld_lib = await getUsrDwldInv();
        let isInDL = dwld_lib.filter(item => item.dl_link === showLink);
        let ssn = Number(ssn_num);
        let ep = Number(ep_num);

        if((isInDL.length > 0))
        {
            if(isInDL[0].dl_type == "movie")
            {
                // Checking for movies
                document.querySelector(".ep_dwld_btn").innerHTML = showInDLMenuOptStruct;
            }
            else
            {
                // Checking for tv shows
                isInDL.forEach((dwldItem) => 
                {
                    // Find the season
                    if(dwldItem.dl_ssn == ssn)
                    {
                        let epinDL = dwldItem.dl_eps.filter(item => item.dl_ep_num == ep);
    
                        // Find the episode
                        if(epinDL.length > 0)
                        {
                            document.querySelector(".ep_dwld_btn").innerHTML = showInDLMenuOptStruct;
                            document.querySelector(".ep_dwld_btn").disabled = true;
                        }
                    }
                });
            }
        }
        else
        {
            // console.info(`${showLink} not in downloads`);
        }
    }


    // Adds a season to Download library
    async function addSsnToDwlDLib(showLink, epSize, showQlty, showLang, ssn_num, ep_length)
    {
        let dwld_lib = await getUsrDwldInv();
        let ssn = Number(ssn_num);
        let epLength = Number(ep_length);
        let isInDL = dwld_lib.filter(item => 
            item.dl_link === showLink
            && item.dl_ssn == ssn
        );
        
        if((isInDL.length > 0))
        {
            // Create a set of the existing eps
            let epSet = new Set(isInDL[0].dl_eps.map(epObj => epObj.dl_ep_num));

            // Only add episodes that are not in downloads
            for(let i = 1; i <= epLength; i++)
            {
                if(!(epSet.has(i)))
                {
                    isInDL[0].dl_eps.push(
                        {
                            dl_ep_num: i,
                            dl_ep_size: epSize,
                            dl_ep_qlty: `${showQlty}`,
                            dl_ep_lang: `${showLang}`,
                        }
                    );
                }
            }

            // Sort the episodes in ascending order
            isInDL[0].dl_eps = isInDL[0].dl_eps.sort((a, b) => a.dl_ep_num - b.dl_ep_num);

            // Update user data
            await updateUserData(
            {
                downloads: dwld_lib
            });

            // Notify user
            notification('notifyGood' , `Added to downloads`);
        }
        else
        {
            // Create the array of episodes of that season
            let epArr = [];
            for(let i = 1; i <= epLength; i++)
            {
                epArr.push(
                    {
                        dl_ep_num: i,
                        dl_ep_size: epSize,
                        dl_ep_qlty: `${showQlty}`,
                        dl_ep_lang: `${showLang}`,
                    },
                );
            }

            // Add items
            dwld_lib.push(
                {
                    dl_id: `${generateRandomString().toLowerCase()}`,
                    dl_link: `${showLink}`,
                    dl_type: `tv`,
                    dl_ssn: ssn,
                    dl_eps: epArr,
                }
            );

            // Update user data
            await updateUserData(
            {
                downloads: dwld_lib
            });

            // Notify user
            notification('notifyGood' , `Added to downloads`);
        }
    }

    // Adds an episode to Download library
    async function addEpToDwlDLib(showLink, showType, epSize, showQlty, showLang, ssn_num, ep_num)
    {
        let dwld_lib = await getUsrDwldInv();
        let ssn = Number(ssn_num);
        let ep = Number(ep_num);
        let isInDL = dwld_lib.filter(item => 
            item.dl_link === showLink
            && item.dl_ssn == ssn
        );
        
        // Add to episode if show already exists
        if((isInDL.length > 0))
        {
            // Add episode toc the season in downloads
            isInDL[0].dl_eps.push(
                {
                    dl_ep_num: ep,
                    dl_ep_size: epSize,
                    dl_ep_qlty: `${showQlty}`,
                    dl_ep_lang: `${showLang}`,
                }
            );

            // Sort the episodes in ascending order
            isInDL[0].dl_eps = isInDL[0].dl_eps.sort((a, b) => a.dl_ep_num - b.dl_ep_num);

            // Update user data
            await updateUserData(
            {
                downloads: dwld_lib
            });

            // Notify user
            notification('notifyGood' , `Added to downloads`);
        }
        else
        {
            // Create new entry if show doesn't exist
            if(showType.toLowerCase() === "movie")
            {
                // Add the movie
                dwld_lib.push(
                    {
                        dl_id: `${generateRandomString().toLowerCase()}`,
                        dl_link: `${showLink}`,
                        dl_type: `movie`,
                        dl_mov_size:` ${epSize}`,
                        dl_mov_qlty: `${showQlty}`,
                        dl_mov_lang: `${showLang}`,
                    }
                );

                // Update user data
                await updateUserData(
                {
                    downloads: dwld_lib
                });

                // Notify user
                notification('notifyGood' , `Added to downloads`);
            }
            else
            {
                // Add the tv episode
                dwld_lib.push(
                    {
                        dl_id: `${generateRandomString().toLowerCase()}`,
                        dl_link: `${showLink}`,
                        dl_type: `tv`,
                        dl_ssn: ssn,
                        dl_eps: 
                        [
                            {
                                dl_ep_num: ep,
                                dl_ep_size: epSize,
                                dl_ep_qlty: `${showQlty}`,
                                dl_ep_lang: `${showLang}`,
                            },
                        ],
                    }
                );

                // Update user data
                await updateUserData(
                {
                    downloads: dwld_lib
                });

                // Notify user
                notification('notifyGood' , `Added to downloads`);
            }
        }
    }

    // Generates a random size for the episode based on the quality
    function getRandShowSize(min, max) 
    {
        if (min >= max) 
        {
            throw new Error("Min should be less than Max.");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Converts a number in MB to GB if the number is greater than a provided limit
    function convMBtoGB(mb, limit = 0)
    {
        if(mb > limit)
        {
            return `${(mb / 1024).toFixed(2)} GB`;
        }
        return `${mb} MB`;
    }
