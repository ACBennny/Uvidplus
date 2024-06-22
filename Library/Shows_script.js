
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
    const quickAtnModalBdr = document.querySelectorAll(".quickAtnModalBdr");
    const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
    const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
    const showHeaderName = document.querySelector("#show_Header_Name");
    const watchTrailerBox = document.querySelector('.watchTrailer_box');
    let trailerTimer;
    let seasonHome = document.querySelector(".show-home");
    let seasonHTML = 
    `
        <div class="show-sub showsub-inatv">
            <div class="showset"></div>
        </div>
    `;
    const seasonHeaderBox = document.querySelector(".seasons_headerBox");
    const seasonHeaderText = document.querySelector(".seasons_headerText");
    const seasonSelectorBdr = document.querySelector(".seasons_selectorBdr");
    const seasonSelectorBox = document.querySelector(".seasons_selectorBox");
    const seasonSelector = document.querySelectorAll(".seasons_selector");
    const seasonAtv = document.querySelectorAll('.season-select');
    const sortEPbtn = document.querySelectorAll('.sort_EpisodesBtn');
    const seasonBox = document.querySelector('.show-home-bx');
    let seasonSub;
    let epLinkName = showHeaderName.textContent.replace(/\s+/g, '');
    let seasonSet;
    const showAllEpHtml = 
    `
        <div class="showall_EpBdr active">
            <div class="showall_EpBox">
                <div class="showall_EpBtn darkSolidBtn">show more</div>
            </div>
        </div>
    `;
    let seasonEpOvf;
    let showAllEpBdr;
    let showAllEpBtn;
    const watchEpBox = document.querySelectorAll(".episodes");
    const noOfEpShown = 12;
    const watchNowBtn = document.querySelector(".watchShowNowBtn");
    let watchNowLink;
    function extractPath(url) 
    {
        const urlObj = new URL(url);
        const pathSegments = urlObj.pathname.split('/');
        pathSegments.pop();
        const basePath = pathSegments.join('/');
        
        return basePath;
    }
    let epLinkDomain = extractPath(window.location.href);





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

        if(seasonSelectorBdr.classList.contains("active"))
        {
            if(window.innerWidth <= 768)
            {
                documentBody.classList.add("bodystop");
                return;
            }
            documentBody.classList.remove("bodystop");
        }
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
        documentBody.classList.add('bodystop');

        trailerTimer = setTimeout
        (
            function()
            {
                trailerBdr.classList.add("active");

                clearTimeout(trailerTimer);

                const closeTrailer = trailerBdr.querySelector(".closeTrailer");
                closeTrailer.addEventListener("click" , () => 
                {
                    documentBody.removeChild(trailerBdr);
                    documentBody.classList.remove('bodystop');
                });
            }
        ,100);
    });


// WATCH NOW

    // Redirecting the user to first episode of the show
    watchNowBtn.addEventListener("click" , () => 
    {
        watchNowLink = seasonSet[0].querySelectorAll(".episodes")[0].href;
        window.open(watchNowLink , "_self");
    });


// CLOSING THE QUICK ACTION MODAL

    document.addEventListener("click" , e => 
    {
        // Close the Ratings Action Box
        if(    ((openQuickAtnModalBdr[0].matches(":hover")) || (quickAtnModalBdr[0].matches(":hover")))
            || ((openQuickAtnModalBdr[1].matches(":hover")) || (quickAtnModalBdr[1].matches(":hover")))
        )
        {
            return;
        }
        quickAtnModalBdr[0].classList.remove("active");
        quickAtnModalBdr[1].classList.remove("active");
    });





// SEASON SELECTOR

    // Adding the episodes to the DOM
    seasonSelector.forEach(selector =>
    {
        let epLength = selector.getAttribute("ep-length");
        let seasonEpNo = selector.querySelector(".selectorMinor");
        seasonEpNo.textContent = `${epLength} epsisodes`;
        if(epLength == "1")
        {
            seasonEpNo.textContent = `${epLength} epsisode`;
        }

        seasonHome.insertAdjacentHTML("beforeend" , seasonHTML);
    });

    seasonSub = document.querySelectorAll('.show-sub');
    seasonSet = document.querySelectorAll('.showset');
        
    seasonSelector.forEach((selector, sls) =>
    {
        let showType = selector.getAttribute("show-type");
        let epLength = selector.getAttribute("ep-length");
        let epLengthNo = Number(epLength);
        let seasonSetIndex = seasonSet[sls];
        let slsPlus = sls + 1;

        if((showType == "serie") || (showType == "series"))
        {
            for(let ep = 0; ep < epLengthNo; ep++)
            {
                let epPlus = ep + 1;
                let episodeHTML = 
                `
                    <a href="${epLinkDomain}/Watch/${epLinkName}/S${slsPlus}/Ep${epPlus}.html" title="" class="episodes inactive">
                        <span class="episodesText">Ep ${epPlus}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="episodesIcon">
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                        </svg>
                    </a>
                `;
                seasonSetIndex.insertAdjacentHTML("beforeend" , episodeHTML);
            }
        }
        else if((showType == "movie") || (showType == "movies"))
        {
            for(let ep = 0; ep < epLengthNo; ep++)
            {
                let epPlus = ep + 1;
                let movieName = selector.querySelector(".selectorMain").textContent.replace(/\s+/g, '');
                let episodeHTML = 
                `
                    <a href="${epLinkDomain}/Watch/${epLinkName}/Movies/${movieName}.html" title="" class="episodes inactive">
                        <span class="episodesText">Ep ${epPlus}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="episodesIcon">
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                        </svg>
                    </a>
                `;
                seasonSetIndex.insertAdjacentHTML("beforeend" , episodeHTML);
            };
        }
    });

    // Displaying the first season
    seasonSub[0].classList.add("showsub-atv");
    seasonSub[0].classList.remove("showsub-inatv");

    // Setting the number of episodes

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
            seasonSub.forEach(ctnt => 
            {
                ctnt.classList.remove("showsub-atv");
                ctnt.classList.add("showsub-inatv");
            });
            seasonSelector.forEach(one => 
            { 
                one.classList.remove("active");
            });
            seasonSub[s].classList.remove("showsub-inatv");
            seasonSub[s].classList.add("showsub-atv");
            selector.classList.add("active");

            seasonSelectorBdr.classList.remove("active");
            documentBody.classList.remove("bodystop");
        });
    });

    // Closing the Selctor
    document.addEventListener("click" , e => 
    {
        if((seasonSelectorBdr.classList.contains("active")))
        {
            // Close season selector
            if((seasonHeaderBox.matches(":hover") || seasonSelectorBox.matches(":hover")))
            {
                return;
            }
            seasonSelectorBdr.classList.remove("active");
            documentBody.classList.remove("bodystop");
        }
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
    seasonSub.forEach(set => 
    {
        let setEpBox = set.querySelector(".showset").querySelectorAll(".episodes");

        // Add a "show more" button if the the no of episodes is greater than the margin
        if(setEpBox.length > noOfEpShown)
        {
            for(let i = 0; i < noOfEpShown; i++)
            {
                setEpBox[i].classList.remove("inactive");
                setEpBox[i].classList.add("active");
            }
            set.classList.add("epSetOverflow");
            set.insertAdjacentHTML("beforeend" , showAllEpHtml);
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

        // Attaching the event listeners
        attachWatchListEventListeners();
        attachAddToPLEventListeners();
    });

    // Showing all Episodes via onclick
    showAllEpBdr = document.querySelectorAll('.showall_EpBdr');
    showAllEpBtn = document.querySelectorAll('.showall_EpBtn');
    seasonEpOvf = document.querySelectorAll(".epSetOverflow");
    
    showAllEpBtn.forEach((btn, b) => 
    {
        btn.addEventListener("click" , () => 
        {
            let chosenSetEpBox = seasonEpOvf[b].querySelectorAll(".episodes");
            chosenSetEpBox.forEach(box => 
            {
                box.classList.remove("inactive");
                box.classList.add("active");
                console.log("done");
            });
            showAllEpBdr[b].classList.remove("active");

            // Reattaching the event listeners
            attachWatchListEventListeners();
            attachAddToPLEventListeners();
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















