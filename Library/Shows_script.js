
/***************************************************************
 * This will hold the code for the respective Show categories
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    const bcgImgBdr = document.querySelector(".bcg_img_bdr");
    const bcgImgBox = document.querySelector(".bcg_img_box");
    const bcgImgGradient = document.querySelector(".bcg_img_gradient");
    let bcgImgBdrBound;
    let bcgImgBdrHeight;
    let bcgImgBdrHalf;
    let bcgImgBdr3Qarts;
    let bcgImgBdr3QartsH;
    const openRatingActionBdr = document.querySelector(".like_buttonsBox");
    const closeRatingActionBdr = document.querySelector(".close_ratingActionBdr");
    const ratingActionBdr = document.querySelector(".ratingActionBdr");
    const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
    const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
    const showHeaderName = document.querySelector("#show_Header_Name");
    const watchTrailerBox = document.querySelector('.watchTrailer_box');
    let trailerTimer;
    const addToWatchListBox = document.querySelector(".add_to_WatchListBox");
    const seasonHeaderBox = document.querySelector(".seasons_headerBox");
    const seasonHeaderText = document.querySelector(".seasons_headerText");
    const seasonSelectorBdr = document.querySelector(".seasons_selectorBdr");
    const seasonSelector = document.querySelectorAll(".seasons_selector");
    const seasonAtv = document.querySelectorAll('.season-select');
    const sortEPbtn = document.querySelectorAll('.sort_EpisodesBtn');
    const seasonBox = document.querySelector('.show-home-bx');
    const season = document.querySelectorAll('.show-sub');
    const seasonSet = document.querySelectorAll('.showset');
    const showAllEp = document.querySelectorAll('.showall_EpBtn');
    const watchEpBox = document.querySelectorAll(".episodes");
    let noOfEpShown = 12;
    let noEpOverflow = 0;





// POSITIONING THE CONTENT

    function checkBcgImgBdrBounds()
    {
        bcgImgBdrBound = bcgImgBdr.getBoundingClientRect();
        bcgImgBdrHeight = bcgImgBdrBound.height;
        bcgImgBdrHalf = Math.round(bcgImgBdrHeight/2);
        bcgImgBdr3Qarts = bcgImgBdrHeight + bcgImgBdrHalf;
        bcgImgBdr3QartsH = bcgImgBdrHeight + bcgImgBdrHalf + 10;

        bcgImgBox.setAttribute("style", `--ImgHeight:${bcgImgBdr3Qarts}px`);
        bcgImgGradient.setAttribute("style", `--ImgHeight:${bcgImgBdr3QartsH}px`);

        if(window.innerWidth <= 768)
        {
            if(seasonSelectorBdr.classList.contains("active"))
            {
                documentBody.classList.add("bodystop");
                return;
            }
            documentBody.classList.remove("bodystop");
            return;
        }
        documentBody.classList.remove("bodystop");
    }
    window.addEventListener("load" ,  () => 
    {
        checkBcgImgBdrBounds();
    });
    window.addEventListener("resize" , () => 
    {
        checkBcgImgBdrBounds();
    });
    window.addEventListener("change" , () => 
    {
        checkBcgImgBdrBounds();
    });




// CLOSING CONTENT
    
    document.addEventListener("click" , e => 
    {
        // Close season selector
        if((seasonHeaderBox.matches(":hover")))
        {
            return;
        }
        seasonSelectorBdr.classList.remove("active");
        documentBody.classList.remove("bodystop");

        // Close the Ratings Action Box
        if((openRatingActionBdr.matches(":hover")) || (ratingActionBdr.matches(":hover")))
        {
            return;
        }
        ratingActionBdr.classList.remove("active");
    });




// RATINGS

    // Open Ratings Box
    openRatingActionBdr.addEventListener("click" , () => 
    {
        ratingActionBdr.classList.toggle("active");
    });

    // Close Ratings Box
    closeRatingActionBdr.addEventListener("click" , () => 
    {
        ratingActionBdr.classList.remove("active");
    });

    // Like the show
    likeTheEp.addEventListener("click" , () => 
    {
        likeTheEp.classList.toggle("active");
        dontLikeTheEp.classList.remove("active");
    });
    
    // Dislike the show
    dontLikeTheEp.addEventListener("click" , () => 
    {
        dontLikeTheEp.classList.toggle("active");
        likeTheEp.classList.remove("active");
    });


// WATCH TRAILER

    // Setting the title of the button
    watchTrailerBox.title = "Watch " + showHeaderName.textContent + " trailer";

    // Handling the rendering of thr trailer elements
    watchTrailerBox.addEventListener("click" , () => 
    {
        const trailerTitle = showHeaderName.textContent;
        const trailerSrc = watchTrailerBox.getAttribute("src");
        const trailerBdr = document.createElement("div");
        trailerBdr.classList.add("trailer_Bdr");
        trailerBdr.innerHTML =
        `
            <div class="trailer_Box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="closeTrailer">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                <iframe class="trailer_Frame" src="${trailerSrc}" title="${trailerTitle}" frameborder="0"  allowfullscreen></iframe>
            </div>
        `;

        documentBody.appendChild(trailerBdr);

        const closeTrailer = trailerBdr.querySelector(".closeTrailer");
        closeTrailer.addEventListener("click" , () => 
        {
            documentBody.removeChild(trailerBdr);
            document.body.classList.remove('bodystop');
        })

        trailerTimer = setTimeout
        (
            function()
            {
                document.body.classList.add('bodystop');
                trailerBdr.classList.add("active");

                clearTimeout(trailerTimer);
            }
        ,100);
    });



// ADD TO WATCHLIST
    
    addToWatchListBox.addEventListener("click" , () => 
    {
        if(addToWatchListBox.classList.contains("active"))
        {
            addToWatchListBox.classList.remove("active");
            addToWatchListBox.title = "Add to WatchList";
            addToWatchListBox.ariaLabel = "Add to WatchList";
            return;
        }
        addToWatchListBox.classList.add("active");
        addToWatchListBox.title = "Remove from WatchList";
        addToWatchListBox.ariaLabel = "Remove from WatchList";
    });



// SEASON SELECTOR

    // Open season selctor
    seasonHeaderBox.addEventListener("click" , () => 
    {
        seasonSelectorBdr.classList.toggle("active");
        if(window.innerWidth <= 768)
        {
            documentBody.classList.add("bodystop");
        }
    });
    
    // Select season
    seasonSelector.forEach((selector, s) => 
    {
        const seasonSelectorMain = selector.querySelector(".selectorMain");
        const seasonSelectorMinor = selector.querySelector(".selectorMinor");
        selector.addEventListener("click" , () => 
        {
            seasonHeaderText.textContent = seasonSelectorMain.textContent;
            season.forEach(ctnt => 
            {
                ctnt.classList.remove("showsub-atv");
                ctnt.classList.add("showsub-inatv");
            });
            seasonSelector.forEach(one => 
            { 
                one.classList.remove("active");
            });
            season[s].classList.remove("showsub-inatv");
            season[s].classList.add("showsub-atv");
            selector.classList.add("active");

            seasonSelectorBdr.classList.remove("active");
            documentBody.classList.remove("bodystop");
        });
    });
    
    
    
// SORTING THE EPISODES

    function sortEpisodesFunc() 
    {
        const container = document.querySelector('.show-sub.showsub-atv .showset');
        const items = Array.from(container.querySelectorAll('.episodes'));
        
        // Reverse the array of items
        const reversedItems = items.reverse();
        
        // Remove existing elements from the DOM
        items.forEach(item => container.removeChild(item));
        
        // Append reversed elements back to the container
        reversedItems.forEach(item => container.appendChild(item));

        // Update the sort text

    }

    sortEPbtn.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            sortEpisodesFunc();
            const sortEPbtnText = btn.querySelector('.episode_sortText');
            sortEPbtnText.classList.toggle("active");
        });
    });


    


// EPISODES

    seasonSet.forEach(set => 
    {
        let setEpBox = set.querySelectorAll(".episodes");

        // Setting the number of episodes in each season

        // Showing the first ten episodes on page load
        if(setEpBox.length > noOfEpShown)
        {
            noEpOverflow++;
            for(let i = 0; i < noOfEpShown; i++)
            {
                setEpBox[i].classList.remove("inactive");
                setEpBox[i].classList.add("active");
            }
            for(let j = 0; j < noEpOverflow; j++)
            {
                showAllEp[j].classList.add("active");
            }
        }
        else if(setEpBox.length <= noOfEpShown)
        {
            for(let i = 0; i < setEpBox.length; i++)
            {
                setEpBox[i].classList.remove("inactive");
                setEpBox[i].classList.add("active");
            }
        }

        // Showing all Episodes via onclick
        showAllEp.forEach((btn, b) => 
        {
            btn.addEventListener("click" , () => 
            {
                setEpBox.forEach(box => 
                {
                    box.classList.remove("inactive");
                    box.classList.add("active");
                });
                btn.classList.remove("active");
            });
        });
    });

    // Properties of the Episode Box (Button)
    watchEpBox.forEach(epBox => 
    {
        // Get text content
        const epBoxSpan = epBox.querySelector("span");
        const epBoxSpanCtnt = epBoxSpan.textContent

        // Set the title
        epBox.title = "Watch " +  epBoxSpanCtnt;

        /**
         * TESTING: This is a test link to the conly current active page to watch as it is being developed
         * All links in this department will be redierected to this page
         */
        epBox.href = "/Library/Anime/Watch/JujutsuKaisen/S1/Ep1.html";
    });















