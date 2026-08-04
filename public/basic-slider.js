/***************************************************************
 * This will hold the code for the general basic slider in Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    const basicSliderDraggingDist = 10;



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

            
            // Remove old listeners & references
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

            if (carousel._basicClickCapture) 
            {
                carousel.removeEventListener("click", carousel._basicClickCapture, true);
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
            let suppressClick = false;
            let startClientX = 0;
            let startScrollLeft = 0;

            const boxErrorMargin = 10;

            const getMultiSlide = () => 
            {
                const w = slider.getBoundingClientRect().width;
                return w > 1 ? (w - boxErrorMargin) : 0; // hidden => 0
            }

            const updateArrows = () => 
            {
                const slideAmt = getMultiSlide();

                // Default: hide arrows
                if (!slideAmt) 
                {
                    if (leftArr) leftArr.classList.add("hide");
                    if (rightArr) rightArr.classList.add("hide");
                    return;
                }

                const scrollLeft = slider.scrollLeft;
                const canScrollLeft = scrollLeft > boxErrorMargin;
                const canScrollRight =
                    scrollLeft + slider.clientWidth < slider.scrollWidth - boxErrorMargin;

                if (leftArr) leftArr.classList.toggle("hide", !canScrollLeft);
                if (rightArr) rightArr.classList.toggle("hide", !canScrollRight);
            }

            // Initial arrow visibility
            if (rightArr) 
            {
                const overflowing = slider.scrollWidth > Math.ceil(slider.clientWidth) + boxErrorMargin;
                rightArr.classList.toggle("hide", !overflowing);
            }
            updateArrows();

            
            // DRAG HANDLERS 

            const mouse_down_atn = (e) => 
            {
                isDown = true;
                isDragging = false;
                suppressClick = false;

                slider.classList.add("isBasicSliderDown");
                startClientX = e.clientX;
                startScrollLeft = slider.scrollLeft;
            }

            const mouse_move_atn = (e) => 
            {
                if (!isDown) return;

                e.preventDefault();
                const dx = e.clientX - startClientX;
                slider.scrollLeft = startScrollLeft - dx;

                if (Math.abs(dx) > basicSliderDraggingDist) 
                {
                    isDragging = true;
                }
            }

            const mouse_up_atn = () => 
            {
                if (!isDown) return;

                isDown = false;
                slider.classList.remove("isBasicSliderDown");

                // Block the click event fired by the browser on muse up
                if (isDragging) 
                {
                    suppressClick = true;
                    requestAnimationFrame(() => (suppressClick = false));
                }
            }

            const mouse_leave_atn = () => 
            {
                // Treat leaving as releasing the drag
                mouse_up_atn();
            }

            const mouse_scroll_atn = () => updateArrows();


            // ARROW HANDLERS
            const arrow_right_atn = () => 
            {
                const slideAmt = getMultiSlide();

                if (!slideAmt) return;

                slider.scrollLeft += slideAmt;
                updateArrows();
            }
            const arrow_left_atn = () => 
            {
                const slideAmt = getMultiSlide();

                if (!slideAmt) return;

                slider.scrollLeft -= slideAmt;
                updateArrows();
            }
            // Cancel clicks while dragging
            const click_capture = (e) => 
            {
                if (!suppressClick) return;

                // Only cancel clicks on cards (or anything inside them)
                if (e.target.closest(".basic_carousel_card")) 
                {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation?.();
                }
            }

            carousel.addEventListener("click", click_capture, true);
            carousel._basicClickCapture = click_capture;

            
            // Attach listeners and store references
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
            }

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


            // Carousel cards
            cards.forEach((base) => 
            {
                const showCardLink = base.querySelector(".cardLinkCover");
                const showCards = base.querySelector(".slide_card");
                const showCardImgs = base.querySelector(".cardImg");
                const showCardInfoName = showCards?.querySelector(".cardInfo_titleText");

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
            });

            
            // RESIZE OBSERVER 
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
    }

    // Used for responsivenes and adaptation for device orientation
    window.addEventListener("resize" , () => 
    {
        basicSlider();   
    });

    

