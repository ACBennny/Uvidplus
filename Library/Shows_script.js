
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
    const troBase = document.querySelector(".tro");
    const showHeaderName = document.querySelector("#show_Header_Name");
    const watchTrailerBox = document.querySelector('.watchTrailer_box');
    let trailerTimer;
    const openRatingActionBdr = document.querySelector(".like_buttonsBox");
    const ratingActionBdr = document.querySelector(".ratingActionBdr");
    const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
    const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
    const addToWatchListBox = document.querySelector(".add_to_WatchListBox");
    const seasonBox = document.querySelector('.show-home-bx');
    const season = document.querySelectorAll('.show-sub');
    const seasonAtv = document.querySelectorAll('.season-select');
    const watchEpBox = document.querySelectorAll(".episodes");




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




// SEASON SELECTOR

    //opening/closing the episode
    var popSeason = function(popupClick)
    {
        season[popupClick].classList.add('showsub-atv');
        season[popupClick].classList.remove('showsub-inatv');
        seasonAtv[popupClick].classList.add('mini-nav-atv');
    }

    seasonAtv.forEach((opnSeasons, i) => {
        opnSeasons.addEventListener("click" , () => {
            season.forEach((seasons) => {
                seasons.classList.remove('showsub-atv');
                seasons.classList.add('showsub-inatv');
            });
            seasonAtv.forEach((offNavSeason) => {
                offNavSeason.classList.remove('mini-nav-atv');
            });
            popSeason(i);
        });
    });



// WATCH TRAILER

    // Setting the title of the button
    watchTrailerBox.title = "Watch \"" + showHeaderName.textContent + "\" trailer";

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

        troBase.appendChild(trailerBdr);

        const closeTrailer = trailerBdr.querySelector(".closeTrailer");
        closeTrailer.addEventListener("click" , () => 
        {
            troBase.removeChild(trailerBdr);
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


// RATINGS

    // Open Ratings Box
        openRatingActionBdr.addEventListener("click" , () => 
        {
            ratingActionBdr.classList.toggle("active");
        });

    // Thumbs Up/Down
        // Like the show
        likeTheEp.addEventListener("click" , () => 
        {
            likeTheEp.classList.toggle("active");
            dontLikeTheEp.classList.remove("active");
            ratingActionBdr.classList.remove("active");
        });
        
        // Dislike the show
        dontLikeTheEp.addEventListener("click" , () => 
        {
            dontLikeTheEp.classList.toggle("active");
            likeTheEp.classList.remove("active");
            ratingActionBdr.classList.remove("active");
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
    



// WATCH EPISODES

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















