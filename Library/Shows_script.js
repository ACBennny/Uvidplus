
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
    const openQuickAtnModalBdr = document.querySelectorAll(".open_quickAtnModalBdr");
    const closeQuickAtnModalBdr = document.querySelectorAll(".close_quickAtnModalBdr");
    const quickAtnModalBdr = document.querySelectorAll(".quickAtnModalBdr");
    const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
    const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
    const showHeaderName = document.querySelector("#show_Header_Name");
    const watchTrailerBox = document.querySelector('.watchTrailer_box');
    let trailerTimer;
    const addToWatchListBox = document.querySelector(".add_to_WatchListBox");
    const seasonHeaderBox = document.querySelector(".seasons_headerBox");
    const seasonHeaderText = document.querySelector(".seasons_headerText");
    const seasonSelectorBdr = document.querySelector(".seasons_selectorBdr");
    const seasonSelectorBox = document.querySelector(".seasons_selectorBox");
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
    const watchNowBtn = document.querySelector(".watchShowNowBtn");
    let watchNowLink;





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
        if((seasonHeaderBox.matches(":hover") || seasonSelectorBox.matches(":hover")))
        {
            return;
        }
        seasonSelectorBdr.classList.remove("active");
        documentBody.classList.remove("bodystop");

        // Close the Ratings Action Box
        if(    ((openQuickAtnModalBdr[0].matches(":hover")) || (quickAtnModalBdr[0].matches(":hover")))
            || ((openQuickAtnModalBdr[1].matches(":hover")) || (quickAtnModalBdr[1].matches(":hover")))
        )
        {
            return;
        }
        quickAtnModalBdr[0].classList.remove("active");
        quickAtnModalBdr[1].classList.remove("active");

        // Close the More Action Box
        // if((openQuickAtnModalBdr[1].matches(":hover")) || (quickAtnModalBdr[1].matches(":hover")))
        // {
        //     return;
        // }
        // quickAtnModalBdr[1].classList.remove("active");
    });



// QUICK ACTIONS

    // Open QuickActions Box
    openQuickAtnModalBdr.forEach((btn, b) => 
    {
        btn.addEventListener("click" , () => 
        {
            quickAtnModalBdr.forEach(bdr => 
            {
                bdr.classList.remove("active");
            });
            quickAtnModalBdr[b].classList.add("active");
        });
    });

    // Close QuickActions Box
    closeQuickAtnModalBdr.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            quickAtnModalBdr.forEach(bdr => 
            {
                bdr.classList.remove("active");
            });
        });
    });


// RATINGS

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


// WATCH NOW


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

    // Setting the number of episodes in each season
    for(let sel = 0; sel < seasonSelector.length; sel++)
    {
        seasonSelector[sel].querySelector(".selectorMinor").textContent = seasonSet[sel].querySelectorAll(".episodes").length + " episodes";
    }

    // Open season selector
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

            if(btn.title == "Sort by latest episodes")
            {
                btn.title = "Sort by oldest episodes";
                return;
            }
            btn.title = "Sort by latest episodes";
        });
    });


    


// EPISODES

    // Showing the first ten episodes on page load
    seasonSet.forEach(set => 
    {
        let setEpBox = set.querySelectorAll(".episodes");

        // Add a "show more" button if the the no of episodes is greater than the margin
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
        // If not, just display the episodes present in the set
        else if(setEpBox.length <= noOfEpShown)
        {
            for(let i = 0; i < setEpBox.length; i++)
            {
                setEpBox[i].classList.remove("inactive");
                setEpBox[i].classList.add("active");
            }
        }
    });

    // Showing all Episodes via onclick
    showAllEp.forEach((btn, b) => 
    {
        btn.addEventListener("click" , () => 
        {
            let chosenSetEpBox = seasonSet[b].querySelectorAll(".episodes");
            chosenSetEpBox.forEach(box => 
            {
                box.classList.remove("inactive");
                box.classList.add("active");
            });
            btn.classList.remove("active");
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


    // Redirecting the user to first episode of the show
    watchNowLink = seasonSet[0].querySelectorAll(".episodes")[0].href;
    console.log("first ep link => " + watchNowLink);
    watchNowBtn.addEventListener("click" , () => 
    {
        window.open(watchNowLink , "_self");
    });














