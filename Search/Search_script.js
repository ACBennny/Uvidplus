
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DECLARATIONS

    let search_query = getQueryString();
    let search_queryString =  "\"" + search_query + "\"";
    const docTitle = document.querySelector("title");
    const whatYouSearched = document.querySelector(".search_Result_title .srt_dynamic");


// SEARCH INTERFACE

    // Updates the page title and "What you seached" once DOM download is complete
    window.addEventListener("DOMContentLoaded" , () => {
        docTitle.textContent = "You searched for " + search_queryString;
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

        return retVal;
    }


// SEARCH THE ENGINE

    // Search inventory
    const searchInventory =
    [
        // Anime content
        {
            id: 0,
            search_link: '/Library/Anime/JujutsuKaisen.html',
            search_image: '/Library/Anime/img/1.jpg',
            search_title: 'Jujutsu Kaisen',
            search_section: 'Anime',
            search_code: 'Jijutsu Kaisen sorcery fight anime shows animation',
        },
        {
            id: 1,
            search_link: '/Library/Anime/DemonSlayer.html',
            search_image: '/Library/Anime/img/2.jpg',
            search_title: 'Demon Slayer',
            search_section: 'Anime',
            search_code: 'Demon Slayer Kimetsu No Yaiba anime shows animation',
        },
        {
            id: 2,
            search_link: '/Library/Anime/AttackOnTitan.html',
            search_image: '/Library/Anime/img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
        {
            id: 3,
            search_link: '/Library/Anime/AttackOnTitan.html',
            search_image: '/Library/Anime/img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
        {
            id: 4,
            search_link: '/Library/Anime/AttackOnTitan.html',
            search_image: '/Library/Anime/img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
        {
            id: 5,
            search_link: '/Library/Anime/AttackOnTitan.html',
            search_image: '/Library/Watch/Anime/img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
    ];

    // Gets items in catalog and stores in array
    const categories = [...new Set(searchInventory.map((item) => { return item }))];

    // Filtering the search
    const searchwall = document.querySelector("#catalogId");
    const searchcatalog = searchwall.querySelector(".srch_card_box");
    const searchbox = document.querySelector('#searchId');

        window.addEventListener('load', () => {
            const searchData = search_query.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.search_code.toLowerCase().includes(searchData)
                );
            });
            displayItem(filteredData);
        });

        // Displaying the result
        const displayItem = (items) => {

            // A fixed number of results shown
            const noOfResultsShown = items.slice(0, 5);

            searchwall.innerHTML = noOfResultsShown.map((item) => 
            {
                var { search_link, search_image, search_title, search_section, search_code } = item;
                if((search_query.length > 0) && (search_query != " "))
                {
                    return (
                        `
                            <div class="srch_card_box">
                                <a href="${search_link}" target="_self" title="Watch ${search_title}">
                                    <div class="srch-card">
                                        <div class="srch-card-img">
                                            <img src="${search_image}" alt="Image of ${search_title}">
                                        </div>
                                        <div class="srch-card-det">
                                            <h3>${search_title}</h3>
                                            <h6>${search_section}</h6>
                                            <p style=" display: none;">${search_code}</p>
                                        </div>
                                    </div>
                                </a> 
                            <div>
                        `
                    );
                }        
                else
                {
                    return (``);
                }
            }).join('');
        };
        displayItem(categories);










