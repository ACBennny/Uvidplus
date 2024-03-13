
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @name (Uvid)
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

// CREATING THE SEARCH INTERFACE

    const srchinitiaize = document.querySelectorAll(".search-pull");
    let srchInitTimer;

    srchinitiaize.forEach(searchBtn => 
    {
        searchBtn.addEventListener("click" , () => 
        {
            // Prevents Scrolling of elements in background
            document.body.classList.add('bodystop');

            const srchBdr = document.createElement("div");
            srchBdr.classList.add("searchcontainer");
    
            srchBdr.innerHTML = 
            `
                <i class="fa-solid fa-xmark closesearchctn"></i>
                <div class="searchsub1">
                    <div class="searchbox-border">
                        <div class="srch-box">
                            <div class="srch-box-ctnt">
                                <button type="submit" class="search-btn">
                                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                </button>
                                <input type="search" name="" id="searchId" class="searchclass" placeholder="search any show" aria-autocomplete="none">
                            </div>
                        </div>
                        <div class="srch-catalog-box">
                            <div class="srch-catalog" id="catalogId"></div>
                        </div>
                    </div>
                </div>
                <div class="searchsub2"></div>
            `;

            // Appends Search 
            documentBody.appendChild(srchBdr);

            // Adds properties after HTML Nodes have been appended
            srchInitTimer = setTimeout(() => 
            {
                const srchSub1 = document.querySelector(".searchsub1");
                const srchSub2 = document.querySelector(".searchsub2");
                const searchxmark = document.querySelector('.closesearchctn');

                // Adds style class
                srchSub1.classList.add("frameatv");
                srchSub2.classList.add("frameatv");

                // Close Search
                function closesearch()
                {
                    documentBody.removeChild(srchBdr);
                    document.body.classList.remove('bodystop');
                }
                searchxmark.addEventListener("click" , closesearch);
                srchSub2.addEventListener("click" , closesearch);

                // Starts the Search Engine
                instantianteSrch();

                // clear timer once time runs out
                clearTimeout(srchInitTimer);

            } , 100);
        });
    });


// FUNCTION CONTAINING THE ENGINE
    function instantianteSrch()
    {
        // Search inventory
        const searchInventory =
        [
            {
                id: 0,
                search_link: '../Uvid_Content/Uvid_Content_Section/U_Anime/JujutsuKaisen.html',
                search_image: '../Uvid_Content/Uvid_Content_Section/U_Anime/U_Anime_img/1.jpg',
                search_title: 'Jujutsu Kaisen',
                search_section: 'Anime',
                search_code: 'Jijutsu Kaisen sorcery fight anime shows animation',
            },
            {
                id: 1,
                search_link: '../Uvid_Content/Uvid_Content_Section/U_Anime/DemonSlayer.html',
                search_image: '../Uvid_Content/Uvid_Content_Section/U_Anime/U_Anime_img/2.jpg',
                search_title: 'Demon Slayer',
                search_section: 'Anime',
                search_code: 'Demon Slayer Kimetsu No Yaiba anime shows animation',
            },
            {
                id: 2,
                search_link: '../Uvid_Content/Uvid_Content_Section/U_Anime/AttackOnTitan.html',
                search_image: '../Uvid_Content/Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
                search_title: 'Attack On Titan',
                search_section: 'Anime',
                search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
            },
            {
                id: 3,
                search_link: '../Uvid_Content/Uvid_Content_Section/U_Anime/AttackOnTitan.html',
                search_image: '../Uvid_Content/Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
                search_title: 'Attack On Titan',
                search_section: 'Anime',
                search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
            },
            {
                id: 4,
                search_link: '../Uvid_Content/Uvid_Content_Section/U_Anime/AttackOnTitan.html',
                search_image: '../Uvid_Content/Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
                search_title: 'Attack On Titan',
                search_section: 'Anime',
                search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
            },
            {
                id: 5,
                search_link: '../Uvid_Content/Uvid_Content_Section/U_Anime/AttackOnTitan.html',
                search_image: '../Uvid_Content/Uvid_Content_Section/U_Anime/U_Anime_img/3.jpg',
                search_title: 'Attack On Titan',
                search_section: 'Anime',
                search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
            },
        ];

    // Gets items in catalog and stores in array
    const categories = [...new Set(searchInventory.map((item) => { return item }))];

    // Filtering the search
    const searchwall = document.querySelector("#catalogId");
    const catalogChilds = searchwall.children;
    const searchcatalog = searchwall.querySelector(".srch_card_box");
    const searchbox = document.querySelector('#searchId');
    const searchResultAmt = 2;

        // Getting User Input
        searchbox.addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.search_code.toLowerCase().includes(searchData)
                )
            });
            displayItem(filteredData);
        });

        // Displaying the result
        const displayItem = (items) => {
            searchwall.innerHTML = items.map((item) => 
            {
                var { search_link, search_image, search_title, search_section, search_code } = item;
                if(searchbox.value.length > 0)
                {
                    return (
                        `<div class="srch_card_box">
                            <a href="${search_link}" target="_self" title="Watch ${search_title}">
                                <div class="srch-card">
                                    <div class="srch-card-img">
                                        <img src="${search_image}" alt="Image of ${search_title}">
                                        <img src="../../Uvid_img/Uvidico.png" class="img_shadow">
                                    </div>
                                    <div class="srch-card-det">
                                        <h3>${search_title}</h3>
                                        <h6>${search_section}</h6>
                                        <p style=" display: none;">${search_code}</p>
                                    </div>
                                </div>
                            </a> 
                        <div>`
                    )
                }
                else
                {
                    return (``);
                }
            }).join('')
        };
        displayItem(categories);


       

       
    }










