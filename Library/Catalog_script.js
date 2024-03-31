
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


// Side Buttons

/**
 * 1. This will make the next sets of buttons active while the previous inactive
 */
        const contentMain = document.querySelector(".contentmain");
        const contentSub = document.querySelectorAll(".contentsub");
        const pageBtnsBox = document.querySelectorAll('.ctnt-slide-box');
        const pageBtns = document.querySelectorAll('.ctnt-slide-box .page_btn');
         let slide_i = 0;

        //  This show next sets of btns
         function nextBtnSet(){
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn').forEach(thisChild => thisChild.classList.remove("active"));
            pageBtnsBox[slide_i].classList.remove('nowatv');
            slide_i = (slide_i + 1) % pageBtnsBox.length;
            pageBtnsBox[slide_i].classList.add('nowatv');
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn:nth-child(2)').forEach(thisChild => thisChild.classList.add("active"));
            backToTopOfSub();
         }

        ///  This prev next sets of btns
         function prevBtnSet(){
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn').forEach(thisChild => thisChild.classList.remove("active"));
            pageBtnsBox[slide_i].classList.remove('nowatv');
            slide_i = (slide_i - 1 + pageBtnsBox.length) % pageBtnsBox.length;
            pageBtnsBox[slide_i].classList.add('nowatv');
            pageBtnsBox[slide_i].querySelectorAll('.ctnt-slide-btn:nth-child(5)').forEach(thisChild => thisChild.classList.add("active"));
            backToTopOfSub();
         }


         // opens each page(slide)
         pageBtns.forEach(btn => {
            btn.addEventListener("click" , () => {
                pageBtns.forEach(activePageBtn => {
                    activePageBtn.classList.remove("active");
                });
                btn.classList.add("active");
                backToTopOfSub();
            });
         });


        // Scrolls to top when another page opens
        function backToTopOfSub()
        {
            location.href="#top";
        }

   

// Card details (title, alt etc)
    const ctntLinks = contentMain.querySelectorAll('.cardholder_bdr');

    ctntLinks.forEach(ctntLink => {
        const showCards = ctntLink.querySelector('.cardholder');
        const showCardImgs = ctntLink.querySelector('.cardimg img');
        const showCardInfoName = ctntLink.querySelector('.cardinfo h3');

        // Card Link
        ctntLink.draggable = false;
        ctntLink.style.userSelect = "none";

        // Card title
        showCards.title = "Watch " + showCardInfoName.textContent;
        showCards.draggable = false;
        showCards.style.userSelect = "none";

        // Card image
        showCardImgs.draggable = false;
        showCardImgs.style.userSelect = "none";
        showCardImgs.alt ="Image of the Anime " + showCardInfoName.textContent;

        // As there are many empty pages, rather than leaving blank, direct to error page *Temporary*
        if((ctntLink.pathname == "/Library/Anime/Another.html")
        || (ctntLink.pathname == "/Library/Anime/AttackOnTitan.html")
        || (ctntLink.pathname == "/Library/Anime/DemonSlayer.html")
        || (ctntLink.pathname == "/Library/Anime/InitialD.html")
        || (ctntLink.pathname == "/Library/Anime/JujutsuKaisen.html"))
        {
            return;
        }
        else
        {
            ctntLink.href = "/Error404.html";
        }
    });



    



    























