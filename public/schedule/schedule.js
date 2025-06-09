 /***************************************************************
 * This will hold the general functions for the schedule page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

// VARIABLES DECLARATION

    let scheduleMobileWidth;
    let scheduleMobileCondition;
    let lastScroll = 0;
    let boxErrorMargin = 10;
    let isDateSliderDown = false;
    let isDragging = false;
    let isDraggingDist = 10;
    let startX;
    let dateSliderScrollLeft;
    let viewSelectorsBtn;
    let scheduleSelBase;
    let scheduleSelBdr;
    let scheduleSelBdrHeight;
    let scheduleFilterBdr;
    let scheduleFilterTab;
    let scheduleDateBdr;
    let scheduleDateBdrHeight;
    let scheduleDateSlider;
    let scheduleDateLeftBdr;
    let scheduleDateRightBdr;
    let scheduleDateCards;
    let scheduleCurrDateCard;
    let scheduleCurrDateText;
    let scheduleCurrDateMajor;
    let scheduleCurrDateMinor;
    let scheduleInv = [];
    let scheduleCtntBox;
    let scheduleCtntGrid;
    let scheduleCtntCards;


    // window.addEventListener("load" , () => 
    // {
    //     initSchedule();
    // });


    function initSchedule()
    {
        const scheduleBaseStruct = 
        `
            <div class="schedule_base">
                <div class="schedule_bdr">
                    <div class="schedule_box">
                        <div class="schedule_selBase">
                            <div class="schedule_selBdr">
                                <div class="schedule_selBox">
                                    <div class="schedule_filterBdr">
                                        <div class="schedule_filterBox">
                                            <div class="schedule_filterDivider">
                                                <div class="schedule_filterTab active">All</div>
                                                <div class="schedule_filterTab ">Movies</div>
                                                <div class="schedule_filterTab ">Tv</div>
                                            </div>
                                            <div class="schedule_wkBtnBdr">
                                                <div class="schedule_wkBtnBox left_wkBtn">
                                                    <div class="schedule_wkArrowBox"></div>
                                                    <div class="schedule_wkCtntBox">
                                                        <div class="schedule_wkCtntText"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="schedule_wkBtn">
                                                <div class="schedule_wkBtn right_wkBtn"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="schedule_currDateBdr">
                                        <div class="schedule_currDateBox">
                                            <div class="schedule_currDateText">
                                                <span class="schedule_currDateMajor">N/A</span>
                                                <span class="">,</span>
                                                <span class="schedule_currDateMinor">N/A</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="schedule_dateBdr">
                                        <div class="schedule_dateBox">

                                            <!-- ---- Date Borders ---- -->
                                            <div class="schedule_dateAllBorder schedule_dateLeftBorder hide"></div>
                                            <div class="schedule_dateAllBorder schedule_dateRightBorder hide"></div>

                                            <!-- ---- Date Slider ---- -->
                                            <div class="schedule_dateSlider"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="schedule_ctntBdr">
                            <div class="schedule_ctntBox"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        documentCtnt.insertAdjacentHTML(`afterbegin` , scheduleBaseStruct);
        
        // Update Navbar active states
        sideNavLinks[3].classList.add("active");
        btmNavLinks[3].classList.add("active");
        
        startSchedule();
    }


    function scheduleMobileCondFunc()
    {
        if(scheduleSelBase.classList.contains("sticky") && (!(scheduleSelBdr.classList.contains("active")) && (window.innerWidth <= scheduleMobileWidth)))
        {
            return true;
        }
        return false;
    }


    function startSchedule()
    {

        // DEFINITION

            scheduleMobileWidth = winWidth768;
            viewSelectorsBtn = document.querySelector(".viewSelectorsBtnBdr");
            scheduleSelBase = document.querySelector(".schedule_selBase");
            scheduleSelBdr = document.querySelector(".schedule_selBdr");
            scheduleFilterBdr = document.querySelector(".schedule_filterBdr");
            scheduleDateBdr = document.querySelector(".schedule_dateBdr");
            scheduleDateLeftBdr = document.querySelector(".schedule_dateLeftBorder");
            scheduleDateRightBdr = document.querySelector(".schedule_dateRightBorder");
            scheduleDateSlider = document.querySelector(".schedule_dateSlider");
            scheduleFilterTab = document.querySelectorAll(".schedule_filterTab");
            

            scheduleSelBdrHeight = Math.round((scheduleSelBdr.getBoundingClientRect().height));


        // GENERATING THE DATE

            // Function to generate the Struct for each day and insert it into the slider
            function generateScheduleDate() 
            {
                // Definitions
                const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const today = new Date();
                const currentDayIndex = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

                // Create the week
                for (let i = 0; i < 7; i++) 
                {
                    const weekDay = new Date();
                    weekDay.setDate(today.getDate() - currentDayIndex + i);
                    
                    const dayNum = weekDay.getDate();
                    const monthName = weekDay.toLocaleString('default', { month: 'short' });
                    
                    // Generate the HTML structure for the card
                    const card = document.createElement("div");
                    card.classList.add("schedule_dateCard");
                    
                    // Add "curr_day" class for the current day
                    if (i === currentDayIndex) 
                    {
                        card.classList.add("curr_day");
                    }
                    
                    // Create each card's structure
                    card.innerHTML = `
                        <div class="schedule_dateMinorBdr">
                            <div class="schedule_dateMinorBox">
                                <div class="schedule_dateMinorText">${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${dayNum}</div>
                            </div>
                        </div>
                        <div class="schedule_dateMajorBdr">
                            <div class="schedule_dateMajorBox">
                                <div class="schedule_dateMajorText">${weekDays[i]}</div>
                            </div>
                        </div>
                    `;

                    // Append to the slider
                    scheduleDateSlider.appendChild(card);
                }

                // Define the schedule date card and current date card
                scheduleDateCards = document.querySelectorAll(".schedule_dateCard");
                scheduleCurrDateCard = document.querySelector(".schedule_dateCard.curr_day");

                // Get the Date Border's height
                scheduleDateBdrHeight = Math.round((scheduleDateBdr.getBoundingClientRect().height));

                // Add the style attributes to the Selector base to allow universal use in the nested tree
                scheduleSelBase.setAttribute(`style` , `--selBtmMargin: ${scheduleSelBdrHeight}px; --filterHeight: ${scheduleDateBdrHeight}px;`);
            }

            // Call the function to generate the schedule cards
            generateScheduleDate();

        // SLIDER

            // Initialization on page load
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
                startX = e.pageX - scheduleDateSlider.offsetLeft;
                dateSliderScrollLeft = scheduleDateSlider.scrollLeft;
                isDragging = false;
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
                const scrollSpeed = (x - startX) * 2;
                scheduleDateSlider.scrollLeft = dateSliderScrollLeft - scrollSpeed;

                // Prevent the cards from being clicked while dragging 
                if(((Math.abs(x - startX) > isDraggingDist)))
                {
                    isDragging = true;
                }
            });



        // ADJUSTING THE DATE SELECTOR POSITION

            window.addEventListener("scroll" , () => 
            {
                let currScroll = window.scrollY;
        
                // Fixes the selector to the top of the screen when user scrolls past it
                scheduleSelBase.classList.toggle("sticky" , currScroll > (scheduleSelBdr.offsetTop * 2));
            });


        // LOADING THE SCHEDULE CONTENT

        fillScheduleLib();
    }

    // Fill the shecduleInv Array with the 30 items currenetly available
    function fillScheduleLib()
    {
        for(let i = 0; i < searchInventory.length; i++)
        {
            const item = searchInventory[i];
            scheduleInv.push(
                {
                    show_link: `${item.show_link}`,
                    show_foreground: `${item.show_foreground}`,
                    show_title: `${item.show_title}`,
                    show_aired: `${item.show_aired}`,
                    show_description: `${item.show_description}`,
                    show_type: `${item.show_type}`,
                }
            );
        }
        fetchScheduleCtnt();
    }

    // Filling the content
    function fetchScheduleCtnt()
    {
        scheduleCurrDateText = document.querySelector(".schedule_currDateText");
        scheduleCurrDateMajor = scheduleCurrDateText.querySelector(".schedule_currDateMajor");
        scheduleCurrDateMinor = scheduleCurrDateText.querySelector(".schedule_currDateMinor");
        scheduleCtntBox = document.querySelector(".schedule_ctntBox");

        // Initialize with the current date
        scheduleCurrDateMajor.textContent = `${scheduleCurrDateCard.querySelector(".schedule_dateMajorText").textContent}`;
        scheduleCurrDateMinor.textContent = `${scheduleCurrDateCard.querySelector(".schedule_dateMinorText").textContent}`;

        // Create the grids in correspondence with the number of dates present
        for(let i = 0; i < scheduleDateCards.length; i++)
        {
            let scheduleInvShuffle = shuffleArray([...scheduleInv]);
            let randNo = (Math.floor(Math.random() * 29) + 2);
            let grid = document.createElement("div");
            grid.classList.add("schedule_ctntGrid");
            
            // Insert the cards with their details into the grid
            for(let j = 0; j < randNo; j++)
            {
                const item = scheduleInvShuffle[j];
                const cardStruct = 
                `
                    <div class="schedule_ctntCardBdr" data-show-type="${item.show_type}">
                        <a href="${item.show_link}" class="schedule_ctntCardBox">
                            <div class="schedule_ctntThumbnailBdr">
                                <div class="schedule_ctntThumbnailBox">
                                    <img loading="lazy" onload="this.classList.add('loaded')" src="${item.show_foreground}" alt="Thumnail image of ${item.show_title}" class="schedule_ctntThumbnailImg">
                                </div>
                            </div>
                            <div class="schedule_ctntDetBdr">
                                <div class="schedule_ctntDetBox">
                                    <div class="schedule_ctntDetTitleBox">
                                        <div class="schedule_ctntDetTitleText">${item.show_title}</div>
                                    </div>
                                    <div class="schedule_ctntDetEpBox">
                                        <p class="schedule_ctntDetEpText">${item.show_aired}</p>
                                    </div>
                                    <div class="schedule_ctntDetDescBox">
                                        <p class="schedule_ctntDetDescText">${item.show_description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                grid.insertAdjacentHTML(`beforeend` , cardStruct);
            }
            scheduleCtntBox.appendChild(grid);

            // Define the the ctnt Grid and the ctnt cards
            scheduleCtntGrid = document.querySelectorAll(".schedule_ctntGrid");
            scheduleCtntCards = document.querySelectorAll(".schedule_ctntCardBdr");
        }


        // Displays the selected date
        function switchNextSchedule(next)
        {
            // Adds the active state identifier for the current day
            scheduleDateCards[next].classList.add("curr_day");
            scheduleCtntGrid[next].classList.add("curr_day");

            // Updates the content to the currently selected date
            scheduleCurrDateMajor.textContent = `${scheduleDateCards[next].querySelector(".schedule_dateMajorText").textContent}`;
            scheduleCurrDateMinor.textContent = `${scheduleDateCards[next].querySelector(".schedule_dateMinorText").textContent}`;

            // Scrolls to the currently selected date
            let currDateOffsetLeft = scheduleDateCards[next].offsetLeft - 50;

            // Scroll to the selected date
            scheduleDateSlider.scrollTo(currDateOffsetLeft, null);

            // Scroll to top of list
            window.scrollTo(null, 0);
        }

        
        scheduleDateCards.forEach((card, curr) => 
        {
            // Display the grid of the current day
            if(card.classList.contains("curr_day"))
            {
                scheduleCtntGrid[curr].classList.add("curr_day");
            }

            // Changing the schedule date
            card.addEventListener("click" , (e) => 
            {
                // If user is dragging the slider, do not allow click events
                if(isDragging)
                {
                    e.preventDefault();
                    return;
                }

                // Remove classes from previous dates
                scheduleDateCards.forEach((prevCard) => 
                {
                    prevCard.classList.remove("curr_day");
                });
                scheduleCtntGrid.forEach((prevGrid) => 
                {
                    prevGrid.classList.remove("curr_day");
                });

                switchNextSchedule(curr);
            });
        });

        // Changing the filter
        scheduleCtntCards.forEach((card) => 
        {
            let scheduleCtntCardType = card.getAttribute("data-show-type").toLowerCase();

            scheduleFilterTab.forEach((tab, i) => 
            {
                tab.addEventListener("click" , () => 
                {
                    let scheduleFilterTabName = tab.textContent.toLowerCase();
                    scheduleFilterTab.forEach((currTab) => 
                    {
                        currTab.classList.remove("active");
                    });
                    tab.classList.add("active");

                    if(scheduleFilterTabName == "all")
                    {
                        scheduleCtntCards.forEach((tabCard) => 
                        {
                            tabCard.classList.remove("inactive");
                        });
                    }
                    else if(!(scheduleFilterTabName == scheduleCtntCardType))
                    {
                        card.classList.add("inactive");
                    }
                    else
                    {
                        scheduleCtntCards.forEach((tabCard) => 
                        {
                            tabCard.classList.remove("inactive");
                        });
                    }
                });
            });
        });
    }
