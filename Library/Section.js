
/***************************************************************
 * This will hold the code for the different sections of the website 
    The sections include:
    - Anime
    - TV Shows
    - Movies
    - Cartoon
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// LOADS THE ITEMS IN THE INVENTORY FOR EACH SECTION

    let catalogHTML = 
    `
        <div class="give_space" id="top"></div>


        <!-- --------------body ------------ -->
        <div class="basicCatalogBase">
            <div class="basicCatalogBdr">
                <div class="basicCatalogBox showCatalog"></div>
                <div id="basicLoadingIndicator">
                    <div class="basicSpinner"></div>
                </div>
            </div>
        </div>
    `;

    window.addEventListener("load" , launchCatalog)

    function launchCatalog()
    {
        document.body.insertAdjacentHTML(`beforeend` , catalogHTML);

        const showCatalog = document.querySelector(".showCatalog");
        const basicLoadingIndicator = document.getElementById("basicLoadingIndicator");

        let currentIndex = 0;
        const noOfItemsToLoad = 20; 

        function loadItems() 
        {
            const endIndex = Math.min(currentIndex + noOfItemsToLoad, catalogInventory.length);
            for (let i = currentIndex; i < endIndex; i++)
            {
                const item = catalogInventory[i];
                const cardHTML = 
                `
                    <div class="slide_card_base">
                        <div class="slide_card_bdr">
                            <div class="slide_card_box">
                                <div class="slide_card">
                                    <a href="${item.show_link}"  title="Watch ${item.show_title}" class="cardLinkCover"></a>
                                    <div class="cardImgBox">
                                        <img src="${item.show_image}" alt="Image of the ${item.show_section}: ${item.show_title}" class="cardImg">
                                    </div>
                                    <div class="cardQualityBox">
                                        <h1 class="cardQualityText">HD</h1>
                                    </div>
                                    <div class="cardinfo cardInfoBdr">
                                        <div class="cardInfoBox">
                                            <div class="cardInfo_tagBdr">
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">Anime</p>
                                                </div>
                                                <div class="cardInfo_tagBox">
                                                    <p class="cardInfo_tagText">2024</p>
                                                </div>
                                            </div>
                                            <div class="cardInfo_titleBox">
                                                <h3 class="cardInfo_titleText">${item.show_title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardAddToListBdr">
                                        <div class="cardAddToListBox">
                                            <div class="cardAddToListIconBox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                </svg>
                                            </div>
                                            <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                    <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                </svg>
                                                <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                            </div>
                                            <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="slide_card_bcg"></div>
                        </div>
                    </div>
                `;
                showCatalog.insertAdjacentHTML("beforeend", cardHTML);
            }
            currentIndex = endIndex;

            // Reattaching listeners
            allImages();
            attachWatchListEventListeners();
            attachAddToPLEventListeners();

            if (currentIndex >= catalogInventory.length)
            {
                observer.unobserve(basicLoadingIndicator);
                basicLoadingIndicator.style.display = 'none';
            }
        }

        const observer = new IntersectionObserver((entries) => 
        {
            if (entries[0].isIntersecting) 
            {
                loadItems();
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        observer.observe(basicLoadingIndicator);
        
        loadItems();
    }

    


    



    







