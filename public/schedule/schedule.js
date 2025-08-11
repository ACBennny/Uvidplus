 /***************************************************************
 * This will hold the general functions for the schedule page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    const scheduleBaseStruct = 
    `
        <div class="schedule_base backtotop_float_left">
            <div class="schedule_bdr">
                <div class="schedule_box">
                    <div class="schedule_selBase">
                        <div class="schedule_selBdr">
                            <div class="schedule_selBox">
                                <div class="schedule_dateBdr">
                                    <div class="schedule_dateBox">
                                        <div class="schedule_dateAllBorder schedule_dateLeftBorder hide"></div>
                                        <div class="schedule_dateAllBorder schedule_dateRightBorder hide"></div>
                                        <div class="schedule_dateSlider"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="schedule_ctntBdr">
                        <div class="schedule_ctntBox">
                            <div class="preload_2_bdr">
                                <div class="preload_2_box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="preload_2_spinner">
                                        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                                            <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="genBtnBox genIconBtn midSolidBtn schedulte_filter_box schedulte_filter_btn openGenMenuModalBtn" data-gen-menu-modal-type="schedule_filter_menu" title="Select a region to see its schedule">
            <div class="genBtnIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                    <path fill-rule="evenodd" d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M17 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.846c0 .18.065.355.183.491l1 1.154a.75.75 0 0 0 1.134-.982l-.817-.943z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    `;
    const empty_schdl_pg_struct = 
    `
        <div class="emptyMyListPageBdr">
            <div class="emptyMyListPageBox">
                <div class="emptyMyListPageCtnt">
                    <div class="emptyMyListPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyMyListPageIconSvg">
                            <path fill-rule="evenodd" d="M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18" clip-rule="evenodd" />
                            <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013zM22 12v2.6a5.25 5.25 0 1 0-7.4 7.4H10c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12" />
                        </svg>
                    </div>
                    <div class="emptyMyListPageNoteBox">
                        <p class="emptyMyListPageNoteText">
                            There are no shows streaming at this time
                            <br>
                            If you believe this to be an error, you can refresh the page by clicking
                            <a onclick="refreshPage()"><strong>here.</strong></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    const dflt_schdl_fltr_rgn = "JP";



    async function initSchedule()
    {
        // Insert schedule page base
        documentCtnt.insertAdjacentHTML(`afterbegin` , scheduleBaseStruct);
        
        // Update Navbar active states
        sideNavLinks[4].classList.add("active");
        btmNavLinks[3].classList.add("active");
        

        // Load and build schedule
        // await loadSchedule();
    }


    // Fetches the schedule data
    async function loadSchedule() 
    {

        const today = new Date();
        const dateList = [];
        const validTypes = ["Scripted", "Animation"];

        // Get the 7 dates for the week scedule
        for(let i = 0; i < 7; i++) 
        {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            const dateStr = d.toISOString().split("T")[0];
            dateList.push({ date: d, dateStr });
        }

        try
        {
            // Get selected region (if any)
            const rgn = (window.__uvp_schdl_fltr_rgn || dflt_schdl_fltr_rgn).toString().toUpperCase();

            // Fetch with retry
            const fetches = dateList.map(({ dateStr }) => 
            {
                const url = `https://api.tvmaze.com/schedule?country=${rgn}&date=${dateStr}`;
                return fetchWithRetry(url);
            });

            const results = await Promise.all(fetches);

            // Merge results with their dates
            const allSchedules = dateList.map((dateObj, i) => (
            {
                ...dateObj,
                shows: (results[i] || []).filter(item => validTypes.includes(item.show?.type))
            }));

            buildSchedule(allSchedules);
        }
        catch(error)
        {
            console.error(`Failed to load schedule\n${error}`);
            notification(`notifyBad`, `Failed to load schedule. Please try again later.`);
        }
    }


    // Builds the Schedule
    function buildSchedule(scheduleData) 
    {
        const dateSelector = document.querySelector(".schedule_dateSlider");
        const showsBox = document.querySelector(".schedule_ctntBox");

        showsBox.innerHTML = "";

        // Build buttons and content
        scheduleData.forEach(({ date, dateStr, shows}, index) => 
        {
            const dayName = date.toLocaleDateString("en-US", { weekday: 'long' });
            const fullDate = date.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });

            // Create date selector tab
            const btn = document.createElement("button");
            btn.className = "schedule_dateCard";
            btn.innerHTML = 
            `
                <div class="schedule_dateMinorBdr">
                    <div class="schedule_dateMinorBox">
                        <div class="schedule_dateMinorText">${fullDate}</div>
                    </div>
                </div>
                <div class="schedule_dateMajorBdr">
                    <div class="schedule_dateMajorBox">
                        <div class="schedule_dateMajorText">${dayName}</div>
                    </div>
                </div>
            `;

            // Select tab for the current day
            if (index === 0) btn.classList.add("curr_day");

            // Append button
            btn.dataset.dateKey = dateStr;
            dateSelector.appendChild(btn);
            
            // Create Show Content Section
            const sectionBdr = document.createElement("div");
            sectionBdr.className = "schedule_ctntGridBdr";
            sectionBdr.dataset.dateKey = dateStr;

            // Display section for the current day
            if (index === 0) sectionBdr.classList.add("curr_day");


            // Display if shows exist for the given date
            if(shows.length > 0)
            {
                // Create Show Content Section
                const sectionBox = document.createElement("div");
                sectionBox.className = "schedule_ctntGridBox";

                // Build content for each section
                shows.forEach(async (airing) => 
                {

                    const show = airing.show;

                    const cardBdr = document.createElement("div");
                    cardBdr.className = "schedule_ctntCardBdr";

                    const tmdb_info = await getTMDBInfoFromTVMazeId(show?.id);
                    const tmdb_link = genUVPLink(tmdb_info);

                    const cardBox = document.createElement("a");
                    cardBox.className = "schedule_ctntCardBox";
                    cardBox.dataset.id = show?.id;
                    cardBox.href = tmdb_link;
                    cardBox.target = "_blank";

                    // Card Thumbnail (Poster)
                    const posterBdr = document.createElement("div");
                    posterBdr.className = "schedule_ctntThumbnailBdr";

                    const posterBox = document.createElement("div");
                    posterBox.className = "schedule_ctntThumbnailBox";
                    posterBox.innerHTML = 
                    `
                        <div class="img_preload_box">
                            <div class="img_preload_sibling"></div>
                            <img loading="lazy" 
                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')"
                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')" 
                                src="${show.image?.medium || ''}" alt="${show.name}" class="schedule_ctntThumbnailImg"
                            >
                        </div>
                    `;

                    // Card details
                    const infoBdr = document.createElement("div");
                    infoBdr.className = "schedule_ctntDetBdr";

                    const infoBox = document.createElement("div");
                    infoBox.className = "schedule_ctntDetBox";

                    const titleBox = document.createElement("div");
                    titleBox.className = "schedule_ctntDetTitleBox";

                    const titleText = document.createElement("span");
                    titleText.className = "schedule_ctntDetTitleText";
                    titleText.textContent = show.name;

                    const episodeBox = document.createElement("div");
                    episodeBox.className = "schedule_ctntDetEpBox";

                    const localTime = airing.airstamp
                        ? new Date(airing.airstamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
                        : "Unknown time";
                    const episodeTitle = (airing.season && airing.number)
                        ? `S${airing.season} E${airing.number}`
                        : airing.name;

                    const episodeText = document.createElement("p");
                    episodeText.className = "schedule_ctntDetEpText";
                    episodeText.innerHTML = `<strong>${episodeTitle}</strong> - ${localTime}`;

                    const descBox = document.createElement("div");
                    descBox.className = "schedule_ctntDetDescBox";

                    const descText = document.createElement("p");
                    descText.className = "schedule_ctntDetDescText";
                    descText.innerHTML = show.summary || "No description available.";

                    // Append components
                    titleBox.appendChild(titleText);
                    episodeBox.appendChild(episodeText);
                    descBox.appendChild(descText);

                    infoBox.appendChild(titleBox);
                    infoBox.appendChild(episodeBox);
                    infoBox.appendChild(descBox);

                    infoBdr.appendChild(infoBox);
                    posterBdr.appendChild(posterBox);
                    
                    cardBox.appendChild(posterBdr);
                    cardBox.appendChild(infoBdr);
                    
                    cardBdr.appendChild(cardBox);

                    // Append to list
                    sectionBox.appendChild(cardBdr);
                });

                sectionBdr.appendChild(sectionBox);
            }
            else
            {
                // Display notice if no shedule available
                sectionBdr.innerHTML = empty_schdl_pg_struct;
            }

            // Append to set
            showsBox.appendChild(sectionBdr);
        });

        // Tab click event
        dateSelector.addEventListener("click", (e) => 
        {
            const btn = e.target.closest(".schedule_dateCard");
            if (!btn) return;

            const dateKey = btn.dataset.dateKey;

            // Update active button
            document.querySelectorAll(".schedule_dateCard").forEach(b => b.classList.remove("curr_day"));
            btn.classList.add("curr_day");

            // Update active show section
            document.querySelectorAll(".schedule_ctntGridBdr").forEach(s => s.classList.remove("curr_day"));
            document.querySelector(`.schedule_ctntGridBdr[data-date-key="${dateKey}"]`)?.classList.add("curr_day");

            // Scrolls to the currently selected date
            let currDateOffsetLeft = btn.offsetLeft - 50;

            // Scroll to the selected date
            dateSelector.scrollTo(currDateOffsetLeft, null);

            // Scroll to top of list
            window.scrollTo(null, 0);
        });


        // Attach listners for sliders
        postSchedule();

        // Attach listeners for filters
        attachGenMenuModalEventListeners();
    }


    // Implements dragging functionality for the schedule date selectors 
    function postSchedule()
    {
        let boxErrorMargin = 10;
        let isDateSliderDown = false;
        let isSchduleDragging = false;
        let schduleDragDist = 10;
        let schduleStartX = 0;
        let dateSliderScrollLeft = 0;
        let scheduleSelBase = document.querySelector(".schedule_selBase");
        let scheduleSelBdr = document.querySelector(".schedule_selBdr");
        let scheduleDateBdr = document.querySelector(".schedule_dateBdr");
        let scheduleDateLeftBdr = document.querySelector(".schedule_dateLeftBorder");
        let scheduleDateRightBdr = document.querySelector(".schedule_dateRightBorder");
        let scheduleDateSlider = document.querySelector(".schedule_dateSlider");

        let scheduleSelBdrHeight = Math.round((scheduleSelBdr.getBoundingClientRect().height));
        let scheduleDateBdrHeight = Math.round((scheduleDateBdr.getBoundingClientRect().height));

        // 
        scheduleSelBase.setAttribute(`style`, `--selBtmMargin: ${scheduleSelBdrHeight}px`);


        // Initialization on first load
        if((scheduleDateSlider.scrollWidth) > (Math.ceil((scheduleDateSlider.clientWidth)) + boxErrorMargin))
        {
            scheduleDateRightBdr.classList.toggle("hide");
        }
        if((Math.ceil(scheduleDateSlider.scrollLeft)) > boxErrorMargin)
        {
            scheduleDateLeftBdr.classList.toggle("hide");
        }

        // Toggling border visibility
        function toggleScheduleBdrVisibility()
        {
            let scrollStart = boxErrorMargin;
            let scrollEnd = scheduleDateSlider.scrollWidth;
            let scrollOffWidth = Math.ceil(scheduleDateSlider.offsetWidth);
            let currScrollLeft = Math.ceil(scheduleDateSlider.scrollLeft);
            let currScroll = Math.ceil((scrollOffWidth + currScrollLeft));

            // Hides Right button
            if(!(((currScroll) >= scrollEnd) || ((currScroll) >= (scrollEnd - boxErrorMargin))))
            {
                scheduleDateRightBdr.classList.remove("hide");
            }
            else
            {
                scheduleDateRightBdr.classList.add("hide");
            }

            // Hides Left button
            if(!(currScrollLeft <= scrollStart))
            {
                scheduleDateLeftBdr.classList.remove("hide");
            }
            else
            {
                scheduleDateLeftBdr.classList.add("hide");
            }
        }
        scheduleDateSlider.addEventListener("scroll" , (e) => 
        {
            toggleScheduleBdrVisibility();
        });

        // Slider dragging
        scheduleDateSlider.addEventListener("mousedown", (e) => 
        {
            isDateSliderDown = true;
            scheduleDateSlider.classList.add("isDateSliderDown");
            schduleStartX = e.pageX - scheduleDateSlider.offsetLeft;
            dateSliderScrollLeft = scheduleDateSlider.scrollLeft;
            isSchduleDragging = false;
        });

        scheduleDateSlider.addEventListener("mouseleave", () => 
        {
            isDateSliderDown = false;
            scheduleDateSlider.classList.remove("isDateSliderDown");
        });

        scheduleDateSlider.addEventListener("mouseup", () => 
        {
            isDateSliderDown = false;
            scheduleDateSlider.classList.remove("isDateSliderDown");
        });

        scheduleDateSlider.addEventListener("mousemove", (e) => 
        {
            // return if mouse is down
            if (!isDateSliderDown) return;

            e.preventDefault();
            const x = e.pageX - scheduleDateSlider.offsetLeft;
            const scrollSpeed = (x - schduleStartX) * 2;
            scheduleDateSlider.scrollLeft = dateSliderScrollLeft - scrollSpeed;

            // Prevent the cards from being clicked while dragging 
            if(((Math.abs(x - schduleStartX) > schduleDragDist)))
            {
                isSchduleDragging = true;
            }
        });


        // Adjusting the selector position
        window.addEventListener("scroll" , () => 
        {
            let currScroll = window.scrollY;
    
            // Fixes the selector to the top of the screen when user scrolls past it
            scheduleSelBase.classList.toggle("sticky" , currScroll > (scheduleSelBdr.offsetTop * 2));
        });

    }


    // Updates items with draggable menus
    function attachSchdlFltrListeners()
    {
        // Notify user of the purpose
        notification(`notifyGood`, `Select a region to see its schedule.`);

        // Return if rgn sets are unavailable
        if((typeof uvp_regions === "undefined") || (uvp_regions.length <= 0))
        {
            console.error("Schedule filter initialization failed.\nRegions unavailable");
            notification(`notifyBad`, `Failed to load filters`);
            return;
        }

        // Build up the menu
        const menuCtntBox = document.querySelector(".scheduleFilterCtntBox");
        let menuCtntStruct = ``;

        uvp_regions.forEach((rgn) => 
        {
            menuCtntStruct += 
            `
                <button class="genMenuModalCtntBtnBox scheduleFilterOptBtn" data-region-code="${rgn.rg_code}">
                    <div class="genMenuModalCtntBtnText">${rgn.rg_name}</div>
                </button>
            `
        });


        // Insert menu options and add seletors
        menuCtntBox.innerHTML = menuCtntStruct;
        const menuOptBtns = document.querySelectorAll(".scheduleFilterOptBtn");

        // Get, select, and scroll to the chosen option
        try 
        {
            const rgn = (window.__uvp_schdl_fltr_rgn || dflt_schdl_fltr_rgn).toString().toUpperCase();

            for(m in menuOptBtns)
            {
                const btn = menuOptBtns[m];

                if(btn.getAttribute("data-region-code").toUpperCase() === rgn)
                {
                    btn.classList.add("selected");
                    setTimeout(() => 
                    {
                        genMenuModalBox.scrollTo(
                        {
                            top: (Math.ceil((btn.getBoundingClientRect().top - (window.innerHeight - (genMenuModalBox.getBoundingClientRect().height * 0.80)) - 25))),
                            behavior: "smooth"
                        });
                    }, 100);
                    break;
                }
            }
        }
        catch(error)
        {
            console.error(error);
        }

        // Updates the user's prefered option for the chosen category
        menuOptBtns.forEach((btn) => 
        {
            const menu_atn = async () => 
            {
                try 
                {
                    let btnOptNo = btn.getAttribute("data-region-code").toUpperCase();

                    // Return
                    if((btnOptNo === "NK"))
                    {
                        notification(`notifyBad`, `What are you looking for? ¯\\\_(ツ)_/¯`);
                        return;
                    }

                    // Update flag
                    window.__uvp_schdl_fltr_rgn = btnOptNo !== ""
                        ? btnOptNo
                        : dflt_schdl_fltr_rgn


                    // Refresh page to reflect changes
                    setTimeout(refreshPage, 100);

                    // Notify User
                    notification(`notifyGood`, `Displaying schedule for "${btn.querySelector(".genMenuModalCtntBtnText").textContent}"`);
                } 
                catch(error) 
                {
                    console.error(error);
                    notification(`notifyBad`, `Failed to apply filters`);
                }
            }

            btn.addEventListener("click", menu_atn);
        });
    }
