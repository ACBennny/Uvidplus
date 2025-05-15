/***************************************************************
 * This will hold the default code for the Help pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    // Initialize
    function init_help_ctr()
    {
        documentCtnt.insertAdjacentHTML('afterbegin' , uvid_hlep_struct);

        // Hide side and bottom navigation
        sideNavBar.classList.add("hidden");
        btmNavBar.classList.add("hidden");

        // Insert top navigation
        topNavBar.classList.add("initialize");
        topNavBar.innerHTML = help_ctr_nav;

        // Insert Sign In button if user not signed in
        if(!(getSignedInUser())) document.querySelector(".topNav_section:last-child").insertAdjacentHTML(
            "beforeend" , 
            `
                <a href="#/join" type="button" class="genBtnBox  midSolidBtn">
                    <div class="genBtnText">Sign In</div>
                </a>
            `
        );

        // Initialize other components
        init_pplr_tpc();
        init_all_tpc();
    }


    // Inserts the popular topics (Pages unavailable)
    function init_pplr_tpc()
    {
        let pplr_grid_box = document.querySelector(".help_ctr_tpc_pplr_gridBox");
        let pplr_grid_struct = ``;

        for(let p = 0; p < pplr_tpc_arr.length; p++)
        {
            let pplr_item = pplr_tpc_arr[p];
            pplr_grid_struct += 
            `
                <a href="javascript:;" onclick="notification('notifyBad', 'Article unavailable at this time')" class="help_ctr_tpc_pplr_cardBdr">
                    <div class="help_ctr_tpc_pplr_cardBox">
                        <div class="help_ctr_tpc_pplr_card_ttlBox">
                            <p class="help_ctr_tpc_pplr_card_ttlTxt">${pplr_item.pplr_tpc_name}</p>
                        </div>
                        <div class="help_ctr_tpc_pplr_card_iconBdr">
                            <div class="help_ctr_tpc_pplr_card_iconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_pplr_card_iconSvg">
                                    <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        }

        pplr_grid_box.innerHTML = pplr_grid_struct;
    }



    // Inserts All topics categories (Pages unavailable)
    function init_all_tpc()
    {
        let all_grid_box = document.querySelector(".help_ctr_tpc_all_gridBox");
        let all_grid_struct = ``;

        for(let p = 0; p < all_tpc_arr.length; p++)
        {
            let all_item = all_tpc_arr[p];
            all_grid_struct += 
            `
                <a href="javascript:;" onclick="notification('notifyBad', 'Category unavailable at this time')" class="help_ctr_tpc_all_cardBdr">
                    <div class="help_ctr_tpc_all_cardBox">
                        <div class="help_ctr_tpc_all_card_iconBdr">
                            <div class="help_ctr_tpc_all_card_iconBox">${all_item.all_tpc_icon}</div>
                        </div>
                        <div class="help_ctr_tpc_all_card_ttlBox">
                            <p class="help_ctr_tpc_all_card_ttlTxt">${all_item.all_tpc_name}</p>
                        </div>
                    </div>
                </a>
            `;
        }

        all_grid_box.innerHTML = all_grid_struct;
    }