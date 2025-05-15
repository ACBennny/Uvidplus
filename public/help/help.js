/***************************************************************
 * This will hold the default code for the Help pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    // Help Center Routing
    function nav_help_pgs()
    {

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

        // Get page if it exists
        let hlp_pg = hash_parts[2] || null;

        if(hlp_pg === "faq")
        {
            init_help_ctr("faq");
        }
        else if(hlp_pg === "search")
        {
            init_help_ctr_srch_pg();
        }
        else if(hlp_pg === "article")
        {
            console.log("help ctr -> article");
        }
        else
        {
            init_help_ctr();
        }
    }



// HOME PAGE

    // Initialize
    function init_help_ctr(sect = "")
    {
        documentCtnt.insertAdjacentHTML('afterbegin' , uvid_help_ctr_struct);

        // Initialize other components
        init_pplr_tpc();
        init_all_tpc();
        attachHelpCtrSrchFldListeners();

        // Scroll to faq
        if(sect === "faq") go_to_help_ctr_faq();
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



// FAQ

    // Scroll to Popular Articles
    function go_to_help_ctr_faq()
    {
        let faqSect = document.getElementById("help_ctr_faq").getBoundingClientRect();
        let faqSectH = Math.ceil(((faqSect.top + window.pageYOffset) - 75));

        window.scrollTo(
        {
            top: faqSectH,
            behavior: "smooth"
        });
    }



// SEARCH

    // Initialize
    function init_help_ctr_srch_pg()
    {
        documentTitle.textContent = "Uvid • Help Center - Search";
        documentCtnt.insertAdjacentHTML(`afterbegin`, help_ctr_srch_struct);
        attachHelpCtrSrchFldListeners();
    }

    // Searching with the search box
    function attachHelpCtrSrchFldListeners()
    {
        const help_ctr_srch_fld_Inp = document.querySelectorAll(".help_ctr_hdr_ctnt_srchFldCls");
        const help_ctr_srch_fld_xmk = document.querySelectorAll(".help_ctr_hdr_ctnt_srchIcon.clear_icon");

        // Handles input in the searc field
        help_ctr_srch_fld_Inp.forEach((old_btn) => 
        {
            if(old_btn.fld_key_atn)
            {
                old_btn.removeEventListener("keyup", old_btn.fld_key_atn);
            }
        });

        help_ctr_srch_fld_Inp.forEach((new_btn, btn_index) => 
        {
            const key_atn = () => 
            {
                // Update result text and Hide/Unhide x-mark button while typing
                if(new_btn.value.length > 0)
                {
                    help_ctr_srch_fld_xmk[btn_index].classList.add("is_typing");
                }
                else
                {
                    help_ctr_srch_fld_xmk[btn_index].classList.remove("is_typing");
                }
            }
            
            new_btn.addEventListener("keyup", key_atn);
            new_btn.fld_key_atn = key_atn;
        });

        // CLears the search field
        help_ctr_srch_fld_xmk.forEach((old_xmk) => 
        {
            if(old_xmk.clr_atn)
            {
                old_xmk.removeEventListener("keyup", old_xmk.clr_atn);
            }
        });

        help_ctr_srch_fld_xmk.forEach((curr_xmk, xmk_index) => 
        {
            const xmk_clr = () => 
            {
                help_ctr_srch_fld_Inp[xmk_index].value = "";
            }

            curr_xmk.addEventListener("click", xmk_clr);
            curr_xmk.clr_atn = xmk_clr;
        });
    }
