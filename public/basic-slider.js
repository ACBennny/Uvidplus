/***************************************************************
 * This will hold the code for the general basic slider in Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    let isBasicSliderDown = false;
    let isBasicSliderDragging = false;
    let basicSliderDraggingDist = 10;



// BASIC SLIDERS

    // The slider for different shows
    // BASIC SLIDERS
    function basicSlider() 
    {
        const carousels = document.querySelectorAll(".basic_carousel");

        carousels.forEach((carousel) => 
        {
            const slider = carousel.querySelector(".basic_carousel_slider");
            const leftArr = carousel.querySelector(".arr_left");
            const rightArr = carousel.querySelector(".arr_right");
            const cards = carousel.querySelectorAll(".basic_carousel_card");

            if (!slider) return;

            // Remove old references/listeners
            const old = slider._basicSliderHandlers;

            if (old) 
            {
                slider.removeEventListener("mousedown", old.mouse_down_atn);
                slider.removeEventListener("mouseleave", old.mouse_leave_atn);
                slider.removeEventListener("mouseup", old.mouse_up_atn);
                slider.removeEventListener("mousemove", old.mouse_move_atn);
                slider.removeEventListener("scroll", old.mouse_scroll_atn);
            }
            if (rightArr?.arrow_right_atn) 
            {
                rightArr.removeEventListener("click", rightArr.arrow_right_atn);
            }
            if (leftArr?.arrow_left_atn) 
            {
                leftArr.removeEventListener("click", leftArr.arrow_left_atn);
            }
            if (slider._basicSliderRO) 
            {
                slider._basicSliderRO.disconnect();
            }

            cards.forEach((card) => 
            {
                if (card.card_details_atn) 
                {
                    card.removeEventListener("click", card.card_details_atn);
                }
            });


            let isDown = false;
            let isDragging = false;
            let startX = 0;
            let startScrollLeft = 0;

            const boxErrorMargin = 10;
            const getMultiSlide = () => 
            {
                const w = slider.getBoundingClientRect().width;
                return w > 1 ? (w - boxErrorMargin) : 0;
            };

            const updateArrows = () => 
            {
                const slideAmt = getMultiSlide();

                if (!slideAmt) 
                {
                    if (leftArr) leftArr.classList.add("hide");
                    if (rightArr) rightArr.classList.add("hide");

                    return;
                }

                const scrollLeft = slider.scrollLeft;
                const canScrollLeft = scrollLeft > boxErrorMargin;
                const canScrollRight = scrollLeft + slider.clientWidth < slider.scrollWidth - boxErrorMargin;

                if (leftArr) leftArr.classList.toggle("hide", !canScrollLeft);
                if (rightArr) rightArr.classList.toggle("hide", !canScrollRight);
            };

            // initial arrow visibility
            if (rightArr) 
            {
                const overflowing = slider.scrollWidth > Math.ceil(slider.clientWidth) + boxErrorMargin;
                rightArr.classList.toggle("hide", !overflowing);
            }

            updateArrows();

            // -------------------------
            // HANDLERS
            // -------------------------
            const mouse_down_atn = (e) => 
            {
                isDown = true;
                slider.classList.add("isBasicSliderDown");
                startX = e.pageX - slider.offsetLeft;
                startScrollLeft = slider.scrollLeft;
                isDragging = false;
            };

            const mouse_leave_atn = () => 
            {
                isDown = false;
                slider.classList.remove("isBasicSliderDown");
            };

            const mouse_up_atn = () => 
            {
                isDown = false;
                slider.classList.remove("isBasicSliderDown");
            };

            const mouse_move_atn = (e) => 
            {
                if (!isDown) return;

                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1;
                slider.scrollLeft = startScrollLeft - walk;

                if (Math.abs(x - startX) > basicSliderDraggingDist) 
                {
                    isDragging = true;
                }
            };

            const mouse_scroll_atn = () => updateArrows();

            const arrow_right_atn = () => 
            {
                const slideAmt = getMultiSlide();

                if (!slideAmt) return;

                slider.scrollLeft += slideAmt;
                updateArrows();
            };

            const arrow_left_atn = () => 
            {
                const slideAmt = getMultiSlide();

                if (!slideAmt) return;

                slider.scrollLeft -= slideAmt;
                updateArrows();
            };

            
            // Attach listeners & references
            slider.addEventListener("mousedown", mouse_down_atn);
            slider.addEventListener("mouseleave", mouse_leave_atn);
            slider.addEventListener("mouseup", mouse_up_atn);
            slider.addEventListener("mousemove", mouse_move_atn);
            slider.addEventListener("scroll", mouse_scroll_atn);

            slider._basicSliderHandlers = 
            {
                mouse_down_atn,
                mouse_leave_atn,
                mouse_up_atn,
                mouse_move_atn,
                mouse_scroll_atn,
            };

            if (rightArr) 
            {
                rightArr.addEventListener("click", arrow_right_atn);
                rightArr.arrow_right_atn = arrow_right_atn;
            }

            if (leftArr) 
            {
                leftArr.addEventListener("click", arrow_left_atn);
                leftArr.arrow_left_atn = arrow_left_atn;
            }

            // -------------------------
            // CARD DETAILS (same behavior, per carousel dragging flag)
            // -------------------------
            cards.forEach((base) => 
            {
                let showCardLink = base.querySelector(".cardLinkCover");
                let showCards = base.querySelector(".slide_card");
                let showCardImgs = base.querySelector(".cardImg");
                let showCardInfoName;

                if (showCards) showCardInfoName = showCards.querySelector(".cardInfo_titleText");

                if (showCardLink) 
                {
                    showCardLink.draggable = false;
                    showCardLink.style.userSelect = "none";
                }

                if (showCardImgs && showCardInfoName) 
                {
                    showCardImgs.draggable = false;
                    showCardImgs.style.userSelect = "none";
                    showCardImgs.alt = "Image of the Anime " + showCardInfoName.textContent;
                }

                if (showCards && showCardInfoName) 
                {
                    showCards.title = "Watch " + showCardInfoName.textContent;
                    showCards.draggable = false;
                    showCards.style.userSelect = "none";
                }

                const card_details_atn = (e) => 
                {
                    if (isDragging) 
                    {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                };

                base.addEventListener("click", card_details_atn);
                base.card_details_atn = card_details_atn;
            });

            if ("ResizeObserver" in window) 
            {
                const ro = new ResizeObserver(() => 
                {
                    requestAnimationFrame(updateArrows);
                });

                ro.observe(slider);
                slider._basicSliderRO = ro;
            }
        });

        elFc();
    }

    // Calls the function again if window changes size
    // Used for Responsivenes and adaptation for device orientation
    window.addEventListener("resize" , () => 
    {
        basicSlider();   
    });

    

