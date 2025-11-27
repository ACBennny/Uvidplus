/***************************************************************
 * This will hold the default code for the Help article pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// INITIALIZATION

    // Featching and inserting the articles
    function fetch_help_atcl()
    {
        // Get aeticle number from url
        let atcl_no = hash_parts[3] || "";

        // Return if no valid number found
        if((atcl_no === null) || (atcl_no === "") || (typeof pplr_tpc_arr === "undefined"))
        {
            window.location.hash = "#/help";
            notification('notifyBad', 'Article not found');
            return;
        }

        // Filter for matching article
        let atcl_item = pplr_tpc_arr.filter(item => Number(item.pplr_tpc_id) === Number(atcl_no));

        // Return if no matching article found
        if((atcl_item.length < 1))
        {
            window.location.hash = "#/help";
            notification('notifyBad', 'Article not found');
            return;
        }


        // Insert structure
        documentCtnt.insertAdjacentHTML("afterbegin" , hlp_ctr_atcl_pg_struct);

        // Update article name
        document.querySelector(".atcl_hdr_txt").textContent = atcl_item[0].pplr_tpc_name;

        // Insert article body if not empty
        if((atcl_item[0].pplr_tpc_body.trim() !== "")) document.querySelector(".atcl_body_txt").innerHTML = atcl_item[0].pplr_tpc_body;

        // Initialize popular articles
        init_rand_pplr_atcl(atcl_no);
    }



// POPULAR ARTICLES

    // Generating random popular articles
    function init_rand_pplr_atcl(article)
    {
        // Return if array undefined
        if((typeof pplr_tpc_arr === "undefined")) return;

        // Return if array empty
        if((pplr_tpc_arr.length == 0)) return;

        // Insert struct
        document.querySelector(".atcl_main_box").insertAdjacentHTML("beforeend" , hlp_ctr_atcl_pplr_struct);

        // Definitons
        let atcl_pplr_card_struct = ``;
        let temp_pplr_arr = pplr_tpc_arr.filter(topic => topic.pplr_tpc_id !== article);
        let shuffle_pplr_arr = shuffleArray(temp_pplr_arr);

        // Get five of the shuffled popular topics
        for(let p = 0; p < 5; p++)
        {
            let pplr_item = shuffle_pplr_arr[p];

            atcl_pplr_card_struct +=
            `
                <a href="#/help/article/${pplr_item.pplr_tpc_id}" class="artcl_more_card_bdr">
                    <div class="artcl_more_card_box">
                        <div class="artcl_more_card_ttl_box">
                            <p class="artcl_more_card_ttl_txt">${pplr_item.pplr_tpc_name}</p>
                        </div>
                        <div class="artcl_more_card_icon_bdr">
                            <div class="artcl_more_card_icon_box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="artcl_more_card_icon_svg">
                                    <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        }

        // Insert the shuffled popular topics
        document.querySelector(".artcl_more_grid_box").innerHTML = atcl_pplr_card_struct;
    }




