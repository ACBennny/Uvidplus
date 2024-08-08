/***************************************************************
 * This will hold the code for the general basic slider in Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    const basic_slider_LeftArrBox = [...document.querySelectorAll('.basic_slider_box .left_slide_arrow')];
    const basic_slider_RightArrBox = [...document.querySelectorAll('.basic_slider_box .right_slide_arrow')];
    const basic_slider_LeftArr = [...document.querySelectorAll('.basic_slider_box .left_slide_arrow .basic_icon_Left')];
    const basic_slider_RightArr = [...document.querySelectorAll('.basic_slider_box .right_slide_arrow .basic_icon_Right')];
    const basic_slider_CardBox = [...document.querySelectorAll('.basic_slider_card_box')];
    const ctntLinks = document.querySelectorAll('.slide_card_base');



    window.addEventListener("load", () => 
    {
        basicSlider();
    });



// BASIC SLIDERS

    // The slider for different shows
    function basicSlider()
    {
        basic_slider_CardBox.forEach((item, i) => 
        {
            let boxErrorMargin = 10;
            let boxDimension = item.getBoundingClientRect();
            let boxWidth = boxDimension.width;
            let boxW = boxWidth - boxErrorMargin;
            let multiCardSlide = boxW;
            let boxChildrenDimension = ctntLinks[0].getBoundingClientRect();
            let boxChildrenWidth = boxChildrenDimension.width;
            let singleCardSlide = boxChildrenWidth;

            // Slides Right
            basic_slider_RightArrBox[i].addEventListener("click" , () => 
            {
                // Slides by total cards visible
                // item.scrollLeft += multiCardSlide;

                // Slides by one card
                item.scrollLeft += singleCardSlide;
            });

            // Slides Left
            basic_slider_LeftArrBox[i].addEventListener("click" , () => 
            {
                // Slides by total cards visible
                // item.scrollLeft -= multiCardSlide;

                // Slides by one card
                item.scrollLeft -= singleCardSlide;
            });

            // Unhide/hide right arrow if content is overflowing
            if((item.scrollWidth) > (Math.ceil((item.clientWidth)) + boxErrorMargin))
            {
                basic_slider_RightArrBox[i].classList.remove("hide");
            }

            // Unhide/hide left arrow if content is overflowing
            if((Math.ceil(item.scrollLeft)) > (Math.ceil(singleCardSlide) + boxErrorMargin))
            {
                basic_slider_LeftArrBox[i].classList.remove("hide");
            }

            // Hides button  when boundary is reached
            item.addEventListener("scroll" , () => 
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
            });

        });
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


   
    // Slide Card details (title, alt etc)
    ctntLinks.forEach(ctntLink => 
    {
        const showCards = ctntLink.querySelector('.slide_card');
        const showCardImgs = ctntLink.querySelector('.cardImg');
        const showCardInfoName = showCards.querySelector('.cardinfo h3');

        // Slide Card Base
        ctntLink.draggable = false;
        ctntLink.style.userSelect = "none";

        // Slide card
        showCards.title = "Watch " + showCardInfoName.textContent;
        showCards.draggable = false;
        showCards.style.userSelect = "none";

        // Slide Card
        showCardImgs.draggable = false;
        showCardImgs.style.userSelect = "none";
        showCardImgs.alt ="Image of the Anime " + showCardInfoName.textContent;
    });