 
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
    });




// MAIN CONTENT - INTRO SLIDES

    // For transition (blur) effect when switching sides
    function flshBur()
    {
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
    intro_LeftSlide_btn.addEventListener("click" , () =>
    {
        prevSlideSet();
        resetIntroAutoSlide();
    });

    // Roght button to slide Right
    intro_RightSlide_btn.addEventListener("click" , () =>
    {
        nextSlideSet();
        resetIntroAutoSlide();
    });

    // The nav buttons to choose to a particular slide
    intro_Slide_radioBtn.forEach(radBtn => 
    {
        radBtn.addEventListener("click" , () => 
        {
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




    























