
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DECLARATIONS

    let search_query = '';
    const docTitle = document.querySelector("title");
    const searchInput = document.getElementById('searchInput');
    const searchwall = document.querySelector("#catalogId");



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
            search_code: 'Jujutsu Kaisen sorcery fight anime shows animation',
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
            search_image: '/Library/Anime/img/3.jpg',
            search_title: 'Attack On Titan',
            search_section: 'Anime',
            search_code: 'Shingeki no Kyojin Attack On Titan anime animation',
        },
    ];


    // Function to display items
    const displayItem = (items) => 
    {
        searchwall.innerHTML = items.map((item) => 
        {
            const { search_link, search_image, search_title, search_section } = item;
            if((search_query.length > 0) && (search_query != undefined) && (search_query != null) && (search_query != " "))
            {
                console.log("query: " + search_query);
                return `
                <div class="srch_card_box">
                    <a href="${search_link}" target="_self" title="Watch ${search_title}">
                        <div class="srch-card">
                            <div class="srch-card-img">
                                <img src="${search_image}" alt="Image of ${search_title}">
                            </div>
                            <div class="srch-card-det">
                                <h3>${search_title}</h3>
                                <h6>${search_section}</h6>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            }
            else
            {
                return null;
            }
        }).join('');
    };

    // Filter and display result based on user's entry
    searchInput.addEventListener('keyup', () => 
    {
        search_query = searchInput.value.trim().toLowerCase();
        docTitle.textContent = `You searched for "${search_query}"`;
        const filteredData = searchInventory.filter((item) => item.search_code.toLowerCase().includes(search_query));
        displayItem(filteredData);
    });








