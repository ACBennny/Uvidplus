


// DEFINITIONS

    const openMoreEpOverlay = document.querySelectorAll(".open_MoreEpOverlay");
    const closeMoreEpOverlay = document.querySelectorAll(".close_MoreEpOverlay");
    const moreEpBase = document.querySelector(".showlist_MoreEpBase");
    const moreEpHeaderBox = document.querySelector(".showlist_MoreEpHeaderBox");
    const moreEpHeaderText = document.querySelector(".showlist_MoreEpHeaderText");
    const moreEpSeasonSelectorBdr = document.querySelector(".showlist_MoreEpSelectorBdr");
    const moreEpSeasonSelector = document.querySelectorAll(".showlist_MoreEpSelector");
    const moreEpSelectorBdr = document.querySelector(".showlist_MoreEpSelectorBdr");
    const moreEpSelectors = document.querySelectorAll(".showlist_MoreEpHeaderBdr");
    const moreEpCtntBdr = document.querySelectorAll(".showlist_MoreEpCtntBdr");
    const moreEpCtntCardBdr = document.querySelectorAll(".showlist_epCardBdr");




// MORE EPSIODES OVERLAY

    // open the Overlay modal
    openMoreEpOverlay.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            moreEpBase.classList.add("active");
            documentBody.classList.add("bodystop");
        });
    });

    // Close the Overlay modal
    closeMoreEpOverlay.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            moreEpBase.classList.remove("active");
            documentBody.classList.remove("bodystop");
        });
    });

    // Open season selctor
    moreEpHeaderBox.addEventListener("click" , () => 
    {
        moreEpSeasonSelectorBdr.classList.toggle("active");
    });

    // Close season selector
    document.addEventListener("click" , () => 
    {
        if((moreEpHeaderBox.matches(":hover")))
        {
            return;
        }
        moreEpSeasonSelectorBdr.classList.remove("active");
    });

    // Select season
    moreEpSeasonSelector.forEach((selector, s) => 
    {
        selector.addEventListener("click" , () => 
        {
            moreEpHeaderText.textContent = selector.textContent;
            moreEpCtntBdr.forEach(ctnt => 
            { 
                ctnt.classList.remove("active");
                ctnt.classList.add("inactive");
            });
            moreEpSeasonSelector.forEach(one => 
            { 
                one.classList.remove("active");
            });
            moreEpCtntBdr[s].classList.remove("inactive");
            moreEpCtntBdr[s].classList.add("active");
            selector.classList.add("active");

            moreEpSeasonSelectorBdr.classList.remove("active");
        });
    });

    // Setting episode card atrributes
    moreEpCtntCardBdr.forEach(cardBdr => 
    {
        const cardlink = cardBdr.querySelector(".showlist_epCardBox");
        const cardImage = cardBdr.querySelector(".showlist_epImg");
        const cardEpTitle = cardBdr.querySelector(".showlist_epDetTitle");
        const cardShowName = cardBdr.querySelector(".showlist_epDetShow");

        cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
        cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
    });