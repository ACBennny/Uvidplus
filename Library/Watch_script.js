/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/
    

// DEFINITIONS

    const majorTitle = document.querySelector(".largeText2");
    const nextEpCtntCardBdr = document.querySelectorAll(".next_epCardBdr");   



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



// Expand Action tab

    // 
    const mediaActionBox = document.querySelector(".media_actions_box");
    const openMediaActionBox = document.querySelector(".open_fullMediaActionBox");
    const openMediaActionText = openMediaActionBox.querySelector(".media_optText");

    openMediaActionBox.addEventListener("click" , () => 
    {
        if(mediaActionBox.classList.contains("active"))
        {
            mediaActionBox.classList.remove("active");
            openMediaActionText.textContent = "More";
            return;
        }
        mediaActionBox.classList.add("active");
        openMediaActionText.textContent = "Close";
    });









