/***************************************************************
 * This will serve as a data library for the Watchlist page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



    let basicLikesSliderCardBox;


    function preFetchingShowsFromLikes()
    {
        basicLikesSliderCardBox = document.querySelectorAll(".basic_likes_slider_card_box");

        if(basicLikesSliderCardBox.length <= 0)
        {
            notification(`notifyBad` , `Failed to fetch Likes`);
            return;
        }
        fetchProfileLikes();
    }


    function fetchProfileLikes() 
    {
        // Check if content of library is available
        if(((selectedProfile.prof_likes === undefined)))
        {
            errorLoadingMyListLikes();
            return;
        }
        if(((selectedProfile.prof_likes.length === 0)))
        {
            return;
        }
        
        let struct = ``;

        for(let i = 0; i < selectedProfile.prof_likes.length; i++)
        {
            const itemId = selectedProfile.prof_likes[i].ls_item;
            let itemIdLC = itemId.split('/')[2];
            let itemMatch = infoInvLinkMap.get(itemIdLC);

            if(itemMatch)
            {
                const {
                    show_link,
                    show_title,
                    show_type,
                    show_year,
                    show_thumbnail,
                } = itemMatch;
                
                struct += 
                `
                    <div class="slide_card_base max_sizing basic_carousel_card wl_body_card_base">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${show_link}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${show_thumbnail}" alt="" class="cardImg">
                                    </div>
                                    <div class="cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${show_type}</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">${show_year}</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${show_title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide_card_bcg"></div>
                        </div>
                    </div>
                `;
            }
        }

        //
        basicLikesSliderCardBox.forEach((box) => 
        {
            box.insertAdjacentHTML('beforeend', struct);
        });

        // Initialize sliding functionalities
        basicSlider();
    }



