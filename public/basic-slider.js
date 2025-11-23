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
    let singleCardSlide;
    let multiCardSlide



// BASIC SLIDERS

    // The slider for different shows
    function basicSlider()
    {
        const basic_slider_LeftArrBox = [...document.querySelectorAll('.basic_carousel .arr_left')];
        const basic_slider_RightArrBox = [...document.querySelectorAll('.basic_carousel .arr_right')];
        const basic_slider_CardBox = [...document.querySelectorAll('.basic_carousel .basic_carousel_slider')];
        const basic_slide_CardBase = document.querySelectorAll('.basic_carousel .basic_carousel_card');
        
        basic_slider_CardBox.forEach((item, i) => 
        {
            if(item.mouse_down_atn)
            {
                item.removeEventListener("mousedown" , item.mouse_down_atn);
            }
            if(item.mouse_leave_atn)
            {
                item.removeEventListener("mouseleave" , item.mouse_leave_atn);
            }
            if(item.mouse_up_atn)
            {
                item.removeEventListener("mouseup" , item.mouse_up_atn);
            }
            if(item.mouse_move_atn)
            {
                item.removeEventListener("mousemove" , item.mouse_move_atn);
            }
            if(item.mouse_scroll_atn)
            {
                item.removeEventListener("scroll" , item.mouse_scroll_atn);
            }
            if(basic_slider_RightArrBox[i].arrow_right_atn)
            {
                basic_slider_RightArrBox[i].removeEventListener("click" , basic_slider_LeftArrBox.arrow_right_atn);
            }
            if(basic_slider_LeftArrBox[i].arrow_left_atn)
            {
                basic_slider_LeftArrBox[i].removeEventListener("click" , basic_slider_LeftArrBox.arrow_left_atn);
            }
        });

        basic_slide_CardBase.forEach((base) => 
        {
            if(base.card_details_atn)
            {
                base.removeEventListener("click" , base.card_details_atn);
            }
        });
        
        basic_slider_CardBox.forEach((item, i) => 
        {
            let basicSliderstartX;
            let basicSliderScrollLeft;
            let boxErrorMargin = 10;
            let boxDimension = item.getBoundingClientRect();
            let boxWidth = boxDimension.width;
            let boxW = boxWidth - boxErrorMargin;
            let boxChildrenDimension = item.querySelectorAll(".basic_carousel_card")[0]?.getBoundingClientRect();
            let boxChildrenWidth = boxChildrenDimension?.width;
            multiCardSlide = boxW;
            singleCardSlide = boxChildrenWidth;

            // Unhide/hide right arrow if content is overflowing
            if((item.scrollWidth) > (Math.ceil((item.clientWidth)) + boxErrorMargin))
            {
                basic_slider_RightArrBox[i].classList.remove("hide");
            }

            // Unhide/hide left arrow if content is overflowing
            if((Math.ceil(item.scrollLeft)) > (Math.ceil(multiCardSlide) + boxErrorMargin))
            {
                basic_slider_LeftArrBox[i].classList.remove("hide");
            }

            const mouse_down_atn = (e) => 
            {
                isBasicSliderDown = true;
                item.classList.add("isBasicSliderDown");
                basicSliderstartX = e.pageX - item.offsetLeft;
                basicSliderScrollLeft = item.scrollLeft;
                isBasicSliderDragging = false;
            }

            const mouse_leave_atn = () => 
            {
                isBasicSliderDown = false;
                item.classList.remove("isBasicSliderDown");
            }

            const mouse_up_atn = () => 
            {
                isBasicSliderDown = false;
                item.classList.remove("isBasicSliderDown");
            }

            const mouse_move_atn = (e) => 
            {
                // return if mouse is down
                if (!isBasicSliderDown) return;
        
                e.preventDefault();
                const x = e.pageX - item.offsetLeft;
                const scrollSpeed = (x - basicSliderstartX) * 1;
                item.scrollLeft = basicSliderScrollLeft - scrollSpeed;
        
                // Prevent the cards from being clicked while dragging 
                if(((Math.abs(x - basicSliderstartX) > basicSliderDraggingDist)))
                {
                    isBasicSliderDragging = true;
                }
            }

            const mouse_scroll_atn = () =>
            {
                let scrollStart = boxErrorMargin;
                let scrollEnd = item.scrollWidth;
                let scrollOffWidth = Math.ceil(item.offsetWidth);
                let currScrollLeft = Math.ceil(item.scrollLeft);
                let currScroll = Math.ceil((scrollOffWidth + currScrollLeft));

                // Hides Right button
                if(!(((currScroll) >= scrollEnd) || ((currScroll) >= (scrollEnd - boxErrorMargin))))
                {
                    basic_slider_RightArrBox[i].classList.remove("hide");
                }
                else
                {
                    basic_slider_RightArrBox[i].classList.add("hide");
                }

                // Hides Left button
                if(!(currScrollLeft <= scrollStart))
                {
                    basic_slider_LeftArrBox[i].classList.remove("hide");
                }
                else
                {
                    basic_slider_LeftArrBox[i].classList.add("hide");
                }
            }

            const arrow_right_atn = () =>
            {
                item.scrollLeft += multiCardSlide;
            }

            const arrow_left_atn = () =>
            {
                item.scrollLeft -= multiCardSlide;
            }
    
            item.addEventListener("mousedown", mouse_down_atn);
            item.mouse_down_atn = mouse_down_atn;
        
            item.addEventListener("mouseleave", mouse_leave_atn);
            item.mouse_leave_atn = mouse_leave_atn;
        
            item.addEventListener("mouseup", mouse_up_atn);
            item.mouse_up_atn = mouse_up_atn;
        
            item.addEventListener("mousemove", mouse_move_atn);
            item.mouse_move_atn = mouse_move_atn;

            item.addEventListener("scroll" , mouse_scroll_atn);
            item.mouse_scroll_atn = mouse_scroll_atn;
    
            // Slides Right
            basic_slider_RightArrBox[i].addEventListener("click" , arrow_right_atn);
            basic_slider_RightArrBox[i].arrow_right_atn = arrow_right_atn;

            // Slides Left
            basic_slider_LeftArrBox[i].addEventListener("click" , arrow_left_atn);
            basic_slider_LeftArrBox[i].arrow_left_atn = arrow_left_atn;
        });
   
        // Slide Card details (title, alt etc)
        basic_slide_CardBase.forEach((base) => 
        {
            let showCardLink = base.querySelector(".cardLinkCover");
            let showCards = base.querySelector(".slide_card");
            let showCardImgs = base.querySelector(".cardImg");
            let showCardInfoName;

            if((showCards != undefined))
            {
                showCardInfoName = showCards.querySelector(".cardInfo_titleText")
            }
    
            // Slide Card Link
            if((showCardLink != undefined))
            {
                showCardLink.draggable = false;
                showCardLink.style.userSelect = "none";
            }
    
            // Slide card Image
            if((showCardImgs != undefined) && (showCardInfoName != undefined))
            {
                showCardImgs.draggable = false;
                showCardImgs.style.userSelect = "none";
                showCardImgs.alt ="Image of the Anime " + showCardInfoName.textContent;
            }
    
            // Slide Card
            if((showCards != undefined) && (showCardInfoName != undefined))
            {
                showCards.title = "Watch " + showCardInfoName.textContent;
                showCards.draggable = false;
                showCards.style.userSelect = "none";
            }

            // Prevents user from mistakenly clicking the card while dragging
            const card_details_atn = (e) => 
            {
                if(isBasicSliderDragging)
                {
                    e.preventDefault();
                    return;
                }
            }
            
            base.addEventListener("click" , card_details_atn);
            base.card_details_atn = card_details_atn;
        });

        elFc();
    }

    // Calls the function again if window changes size
    // Used for Responsivenes and adaptation for device orientation
    window.addEventListener("resize" , () => 
    {
        basicSlider();   
    });

    window.addEventListener("change" , () => 
    {
        basicSlider();
    });

    

