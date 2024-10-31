 /***************************************************************
 * This will hold the general functions for the schedule page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    // Variables
    let boxErrorMargin = 10;
    let isDateSliderDown = false;
    let isDragging = false;
    let isDraggingDist = 10;
    let startX;
    let dateSliderScrollLeft;
    let scheduleInv = [];


    window.addEventListener("load" , () => 
    {
        initSchedule();
    });


    function initSchedule()
    {
        const scheduleBaseStruct = 
        `
            <div class="give_space"></div>
            <div class="schedule_base">
                <div class="schedule_bdr">
                    <div class="schedule_box">
                        <div class="schedule_selBdr">
                            <div class="schedule_selBox">
                                <div class="schedule_selDivider">
                                    <div class="schedule_selTab active">All</div>
                                    <div class="schedule_selTab ">Movies</div>
                                    <div class="schedule_selTab ">Tv</div>
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
                        <div class="schedule_dateBdr">
                            <div class="schedule_dateBox">

                                <!-- ---- Date Borders ---- -->
                                <div class="schedule_dateAllBorder schedule_dateLeftBorder hide"></div>
                                <div class="schedule_dateAllBorder schedule_dateRightBorder hide"></div>

                                <!-- ---- Date Slider ---- -->
                                <div class="schedule_dateSlider"></div>
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
        startSchedule();
    }


    function startSchedule()
    {
        // DEFINITION

            const scheduleDateLeftBdr = document.querySelector(".schedule_dateLeftBorder");
            const scheduleDateRightBdr = document.querySelector(".schedule_dateRightBorder");
            const scheduleDateSlider = document.querySelector(".schedule_dateSlider");


        // GENERATING THE DATE

            // Function to generate the Struct for each day and insert it into the slider
            function generateScheduleDate() 
            {
                const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
                const today = new Date();
                // Sunday = 0, Monday = 1, ..., Saturday = 6
                const currentDayIndex = today.getDay();

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


            loadScheduleLib();
    }


    function loadScheduleLib()
    {
        let invScriptTag = document.createElement("script");
        invScriptTag.setAttribute(`id` , `inventoryID`);
        invScriptTag.setAttribute(`src` , `/inventory.js`);
        document.body.appendChild(invScriptTag);

        invScriptTag.addEventListener("load" , () => 
        {
            fillScheduleLib();
        });
        invScriptTag.addEventListener("error" , () => 
        {
            notification(`notifyBad` , `Error loading Schedule`);
        });
    }

    function shuffleArray(array) 
    {
        for (let i = array.length - 1; i > 0; i--) 
        {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Fill the shecduleInv Array with the 30 items currenetly available
    function fillScheduleLib()
    {
        for(let i = 0; i < 30; i++)
        {
            const item = searchInventory[i];
            scheduleInv.push(
                {
                    show_link: `${item.show_link}`,
                    show_thumbnail: `${item.show_thumbnail}`,
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
        const scheduleSelTab = document.querySelectorAll(".schedule_selTab");
        const scheduleDateCards = document.querySelectorAll(".schedule_dateCard");
        const scheduleCtntBox = document.querySelector(".schedule_ctntBox");
        let scheduleCtntCards;

        // Create the grids in correspondence witht the number of dates present
        for(let i = 0; i < scheduleDateCards.length; i++)
        {
            let scheduleInvShuffle = shuffleArray([...scheduleInv]);
            let randNo = (Math.floor(Math.random() * 29) + 2);
            let grid = document.createElement("div");
            grid.classList.add("schedule_ctntGrid");
            
            // insert the cards with their details into the grid
            for(let j = 0; j < randNo; j++)
            {
                const item = scheduleInvShuffle[j];
                const cardStruct = 
                `
                    <div class="schedule_ctntCardBdr" data-show-type="${item.show_type}">
                        <a href="${item.show_link}" class="schedule_ctntCardBox">
                            <div class="schedule_ctntThumbnailBdr">
                                <div class="schedule_ctntThumbnailBox">
                                    <img src="${item.show_thumbnail}" alt="Thumnail image of ${item.show_title}" class="schedule_ctntThumbnailImg">
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
        }

        // Display the grid of the current day
        const scheduleGridBox = document.querySelectorAll(".schedule_ctntGrid");
        scheduleDateCards.forEach((card, curr) => 
        {
            if(card.classList.contains("curr_day"))
            {
                scheduleGridBox[curr].classList.add("curr_day");
            }
        });


        // Displays the selected date
        function switchNextSchedule(next)
        {
            scheduleDateCards[next].classList.add("curr_day");
            scheduleGridBox[next].classList.add("curr_day");
        }

        // Changing the schedule date
        scheduleDateCards.forEach((card, i) => 
        {
            card.addEventListener("click" , (e) => 
            {
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
                scheduleGridBox.forEach((prevGrid) => 
                {
                    prevGrid.classList.remove("curr_day");
                });

                switchNextSchedule(i);
            });
        });

        // CHANGING THE FILTER
        scheduleCtntCards = document.querySelectorAll(".schedule_ctntCardBdr");

        scheduleCtntCards.forEach((card) => 
        {
            let scheduleCtntCardType = card.getAttribute("data-show-type").toLowerCase();

            scheduleSelTab.forEach((tab, i) => 
            {
                tab.addEventListener("click" , () => 
                {
                    let scheduleSelTabName = tab.textContent.toLowerCase();
                    scheduleSelTab.forEach((currTab) => 
                    {
                        currTab.classList.remove("active");
                    });
                    tab.classList.add("active");

                    if(scheduleSelTabName == "all")
                    {
                        scheduleCtntCards.forEach((tabCard) => 
                        {
                            tabCard.classList.remove("inactive");
                        });
                    }
                    else if(!(scheduleSelTabName == scheduleCtntCardType))
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
