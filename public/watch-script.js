/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/
    

// DEFINITIONS

    const nextEpCtntCardBdr = document.querySelectorAll(".next_epCardBdr");   
    const mediaActionBox = document.querySelector(".media_actions_box");
    const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
    const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");



// NEXT AND PREVIOUS EPISODE DETAILS

    // Setting episode card atrributes
    nextEpCtntCardBdr.forEach(cardBdr => 
    {
        const cardlink = cardBdr.querySelector(".next_epCardBox");
        const cardImage = cardBdr.querySelector(".next_epImg");
        const cardEpTitle = cardBdr.querySelector(".next_epDetTitle");
        const cardShowName = cardBdr.querySelector(".next_epDetShow");

        cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
        cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
    });




// THUMBS UP/ DOWN

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




// MORE EPISODES

    const openMoreEpOverlay = document.querySelectorAll(".open_MoreEpOverlay");

    openMoreEpOverlay.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            notification(`notifyBad` , `An error occurred`);
        });
    });










