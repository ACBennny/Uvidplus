
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
                    <a href="${item.show_link}" class="cardholder_bdr" title="Watch ${item.show_title}">
                        <div class="slide_card">
                            <div class="cardimg">
                                <img src="${item.show_image}" alt="Image of the ${item.show_section}: ${item.show_title}">
                            </div>
                            <div class="cardinfo">
                                <h3>${item.show_title}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                `;
                showCatalog.insertAdjacentHTML("beforeend", cardHTML);
            }
            currentIndex = endIndex;

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

    


    



    







