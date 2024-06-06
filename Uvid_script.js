/*************************************************************
 * This is the script for the landing page of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


// DEFINITION

    const bodyDoc = document.body;
    const preloaderBdr = document.querySelector('#preloader');
    let backtotopBtn = document.querySelectorAll(".backtotop_btn");
    const faqBtns = document.querySelectorAll(".questions_CardBtn");
    const faqAnswers = document.querySelectorAll(".questions_Card");



// BODY
    
    function onBodyFlow()
    {
        bodyDoc.classList.add("bodystart");
        bodyDoc.classList.remove("bodystop");
    }

    function offBodyFlow()
    {
        bodyDoc.classList.add("bodystop");
        bodyDoc.classList.remove("bodystart");
    }



// PRELOADER

    window.addEventListener("load", () => 
    {
        preloaderBdr.style.display = "none";
        onBodyFlow();
    });


// BACK TO TOP

    backtotopBtn.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            window.scrollTo(null , 0);
        });
    });



// FREQUENTLY ASKED QUESTIONS


    faqBtns.forEach((btn, b) => 
    {
        btn.addEventListener("click" , () => 
        {
    
            if(faqAnswers[b].classList.contains("active"))
            {
                btn.ariaExpanded = false;
                faqAnswers[b].classList.remove("active");
            }
            else
            {
                faqBtns.forEach(otherBtn => 
                {
                    otherBtn.ariaExpanded = false;
                });
                faqAnswers.forEach(otherBox => 
                {
                    otherBox.classList.remove("active");
                });
                btn.ariaExpanded = true;
                faqAnswers[b].classList.add("active");
            }
        });
        
    });





