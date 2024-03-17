
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DECLARATIONS

    search_query =  "\"" + getQueryString() + "\""
    docTitle = document.querySelector("title");
    whatYouSearched = document.querySelector(".search_Result_title .srt_dynamic");


// SEARCH INTERFACE

    // Updates the page title once DOM download is complete
    window.addEventListener("DOMContentLoaded" , () => {
        const ptag = document.createElement("p");

        console.log("hea");

        docTitle.textContent = "You searched for " + search_query;

        // ptag.textContent = getQueryString();
    });

    // Updates the the "Search call" and the search field values once page has finished loading
    window.addEventListener("load" , () => {
        whatYouSearched.textContent = search_query;
    });


    // Retrieves Query String from URL and updates the page
    function getQueryString()
    {
        const querystring = window.location.href;
        const searchParams = new URL(querystring).searchParams; 
        const params = new URLSearchParams(decodeURI(searchParams));
        const entries = params.entries();

        let result = [];
        // each 'entry' is a [key, value]
        for(let entry of entries) {
            var key = entry[0];
            var val = entry[1];
            if(key in result){
                result[key].push(val);
            }else{
                result[key] = [val];
            }
        }

        // convert 'key' of result to string
        const retVal = result[key].toString();

        console.log(result);
        console.log(result[key]);
        console.log(retVal);

        return retVal;
    }


// SEARCH THE ENGINE
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
                    for(let i = 0; i < 3; i++)
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
                }
                else
                {
                    return (``);
                }
            }).join('')
        };
        displayItem(categories);

       
    }










