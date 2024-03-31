 
/***************************************************************
 * This will hold the code for the different sections of the website 
    The sections include:
    - Anime
    - TV
    - Documentaries
    - Movies
    - Latest
    - Upcoming
    - News
    - Cartoon
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/





// DEFINTION

    const bcgOver_700 = document.querySelector('.bcg_over700');
    const bcgLess_700 = document.querySelector('.bcg_less700');
    const slideCover = document.querySelector('.intro_slide_cover');
    const slideBoxMainBdr = document.querySelector('.intro_slide_ctnt_bdr');
    const slideBdr = document.querySelectorAll('.intro_info_bdr');
    const infoslideBox = document.querySelectorAll(".intro_info_box");
    const pageBtnsBox = document.querySelector('.intro_slide_nav_box');
    const intro_Slide_radioBtn = document.querySelectorAll('.intro_rad');
    const intro_LeftSlide_btn = document.querySelector('.intro_slide_ctnt_box .left_slide_arrow .intro_icon_Left');
    const intro_RightSlide_btn = document.querySelector('.intro_slide_ctnt_box .right_slide_arrow .intro_icon_Right');
    let auto_slide_count = 0;
    let auto_slide_timer;
    let auto_slide_timer_count = 15;
    const basic_slider_LeftArrBox = [...document.querySelectorAll('.basic_slider_box .left_slide_arrow')];
    const basic_slider_RightArrBox = [...document.querySelectorAll('.basic_slider_box .right_slide_arrow')];
    const basic_slider_LeftArr = [...document.querySelectorAll('.basic_slider_box .left_slide_arrow .basic_icon_Left')];
    const basic_slider_RightArr = [...document.querySelectorAll('.basic_slider_box .right_slide_arrow .basic_icon_Right')];
    const basic_slider_CardBox = [...document.querySelectorAll('.basic_slider_card_box')];
    const ctntLinks = document.querySelectorAll('.slide_card_base');
    const watchSectionBdr = document.querySelectorAll(".watchSectionBdr");
    const latestEpCards = document.querySelectorAll(".latestEp_card");
    const latestEpHiddenCards = document.querySelectorAll(".latestEp_card_IsNotActive");
    const latestEp_ShowMoreCardsBtn = document.querySelector(".latestEp_view_more");
    let latestEp_childLength = latestEpCards.length;
    let noOfVisible_latestEpChildren = 6;
    const newsCard = document.querySelectorAll(".news_card");


    
// WELCOME PAGE

    window.addEventListener("load", () => {
        
        // Starts auto-slider
        introAutoSlide();

        // Function to operate the basic Slider is called
        basicSlider();
    });




// MAIN CONTENT - INTRO SLIDES

    // For transition (blur) effect when switching sides
    function flshBur(){
        slideCover.classList.add("active");
        setTimeout(() => slideCover.classList.remove("active"), 400);
    }

    // This moves to the next slide
    function nextSlideSet()
    {
        auto_slide_count = (auto_slide_count + 1) % intro_Slide_radioBtn.length;
        setTimeout(() => intro_Slide_radioBtn[auto_slide_count].checked = true, 200);
        flshBur();
    }

    // This moves to the previous slide
    function prevSlideSet()
    {
        auto_slide_count = (auto_slide_count - 1 + intro_Slide_radioBtn.length) % intro_Slide_radioBtn.length;
        setTimeout(() => intro_Slide_radioBtn[auto_slide_count].checked = true, 200);
        flshBur();
    }

    // Left button to slide left
    intro_LeftSlide_btn.addEventListener("click" , () => {
        prevSlideSet();
        resetIntroAutoSlide();
    });

    // Roght button to slide Right
    intro_RightSlide_btn.addEventListener("click" , () => {
        nextSlideSet();
        resetIntroAutoSlide();
    });

    // The nav buttons to choose to a particular slide
    intro_Slide_radioBtn.forEach(radBtn => {
        radBtn.addEventListener("click" , () => {
            resetIntroAutoSlide();
        });
    });



    // Automatic Slider - slides after 15 seconds
    function introAutoSlide()
    {
        auto_slide_timer = setInterval(function()
        {
            auto_slide_timer_count-- ;
            if(auto_slide_timer_count == 0)
            {
                nextSlideSet();
                resetIntroAutoSlide();
            }
        }, 1000);
    }

    // Clears and recalls the autoSlider
    function resetIntroAutoSlide()
    {
        clearInterval(auto_slide_timer);
        auto_slide_timer_count = 15;
        introAutoSlide();
    }




// SUB CONTENT - BASIC SLIDERS

    // The slider for different shows
    function basicSlider()
    {
        basic_slider_CardBox.forEach((item, i) => {
            let boxDimension = item.getBoundingClientRect();
            let boxWidth = boxDimension.width;
            let boxW = boxWidth - 10;

            // Slides Right
            basic_slider_RightArrBox[i].addEventListener("click" , () => {
                item.scrollLeft += boxW;
            });

            // Slides Left
            basic_slider_LeftArrBox[i].addEventListener("click" , () => {
                item.scrollLeft -= boxW;
            });

            // Hides button  when boundary is reached
            item.addEventListener("scroll" , () => {
                let scrollStart = 0;
                let scrollEnd = item.scrollWidth;
                let scrollOffWidth = Math.ceil(item.offsetWidth);
                let currScrollLeft = Math.ceil(item.scrollLeft);
                let currScroll = Math.ceil((scrollOffWidth + currScrollLeft));

                // Hides Right button
                if(!(((currScroll) >= scrollEnd) || ((currScroll) >= (scrollEnd - 10))))
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
    window.addEventListener("resize" , () => {
        basicSlider();   
    });

    window.addEventListener("change" , () => {
        basicSlider();   
    });


   
    // Slide Card details (title, alt etc)
    ctntLinks.forEach(ctntLink => {
        const showCards = ctntLink.querySelector('.slide_card');
        const showCardImgs = ctntLink.querySelector('.cardimg img');
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





// DOUBLE SIDED SHOWS

    // Double Sided Show Details
    watchSectionBdr.forEach(sectionBdr => {
        const showHead = sectionBdr.querySelector(".watchHead");
        const showEpLink = sectionBdr.querySelector(".watchEpLink");
        const showImg = sectionBdr.querySelector(".watchImg");
        const showToSeries = sectionBdr.querySelector(".goToSeries");

        // Set the title of the Episode link
        showEpLink.title = "Watch " + showHead.textContent + " Season 1 Episode 1";

        // Setting the alt text of the
        showImg.alt = "Image of the Anime " + showHead.textContent;

        // Setting the title of the "To Series" link
        showToSeries.title = "Go to " + showHead.textContent + " series";
    });




// LATEST SHOWS

    // On page load it displays the first 6 children
    for(let i = 0; i < noOfVisible_latestEpChildren; i++)
    {
        latestEpCards[i].classList.add("visible_LatestEp");
    }

    // Latest Show Card Details
    latestEpCards.forEach(latestEpCard => {
        const showTitle = latestEpCard.querySelector(".latestEp_cardTitle");
        const showSubTitle = latestEpCard.querySelector(".latestEp_cardSubTitle");
        const showImg = latestEpCard.querySelector(".latestEp_cardImg");

        // Set the title of the Episode link
        latestEpCard.title = "Watch " + showTitle.textContent + " " + showSubTitle.textContent;

        // Setting the alt text of the
        showImg.alt = "Image of the Anime " + showTitle.textContent;
    });

    
    // Displays all of the remaining hidden show cards
    latestEp_ShowMoreCardsBtn.addEventListener("click" , () => {

        // adding visible class to allow display of cards with forEach loop
        latestEpCards.forEach(hiddenCard => {
            hiddenCard.classList.add("visible_LatestEp");
        });

        // Removing the button after displaying hidden cards
        latestEp_ShowMoreCardsBtn.style.display = "none";
    });




// NEWS

    newsCard.forEach(card => {
        const newsCardImg = card.querySelector(".news_cardImg");
        const newsCardTitle = card.querySelector(".news_cardTitle");

        // Setting the title
        card.title = "Read \"" + newsCardTitle.textContent + "\"";

        // Setting the alt text of Image
        newsCardImg.alt = "News image";
    });




    























