/***************************************************************
 * This will hold the default code for the Help pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    let isHlpCtrChatBotInit = false;



// ROUTING

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
        else if(hlp_pg === "contact")
        {
            init_help_ctr("contact");
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

        // Allow Chatbot intialization
        isHlpCtrChatBotInit = false;

        // Scroll to faq
        if(sect === "faq") go_to_help_ctr_faq();

        // Init chatbot
        if(sect === "contact") 
        {
            attachInitHelpCtrChatBotListeners("call");
            return;
        }
        attachInitHelpCtrChatBotListeners();
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
        help_ctr_srch_pg_rslt_ctg();
    }

    // Searching with the search box
    function attachHelpCtrSrchFldListeners()
    {
        const help_ctr_srch_fld_Inp = document.querySelectorAll(".help_ctr_hdr_ctnt_srchFldCls");
        const help_ctr_srch_fld_xmk = document.querySelectorAll(".help_ctr_hdr_ctnt_srchIcon.clear_icon");

        // Handles input in the searc field
        help_ctr_srch_fld_Inp.forEach((old_btn) => 
        {
            if(old_btn.fld_inp_atn)
            {
                old_btn.removeEventListener("input", old_btn.fld_inp_atn);
            }
        });
        help_ctr_srch_fld_Inp.forEach((old_btn) => 
        {
            if(old_btn.fld_key_atn)
            {
                old_btn.removeEventListener("keyup", old_btn.fld_key_atn);
            }
        });

        help_ctr_srch_fld_Inp.forEach((new_btn, btn_index) => 
        {
            const inp_atn = (e) => 
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

                // Display top suggestions
                help_ctr_qck_srch_rslt_ctg(new_btn.value);
            }

            const key_atn = (e) => 
            {
                // If user presses enter key, open the searhc page to show more results
                if(typeof e.key !== "undefined") 
                {
                    if(e.key.toLowerCase() === "enter") help_ctr_srch_all_in_pg(new_btn.value);
                }
            }
            
            new_btn.addEventListener("input", inp_atn);
            new_btn.fld_inp_atn = inp_atn;
            new_btn.addEventListener("keyup", key_atn);
            new_btn.fld_key_atn = key_atn;

            // Focus on the search bar if on the search page
            if((hash_parts[2] === "search")) new_btn.focus();
        });

        // Clears the search field
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
                curr_xmk.classList.remove("is_typing");
                help_ctr_qck_srch_rslt_ctg("");
            }

            curr_xmk.addEventListener("click", xmk_clr);
            curr_xmk.clr_atn = xmk_clr;
        });
    }


    // Go to search page when enter key is pressed to show all results
    function help_ctr_srch_all_in_pg(qry)
    {
        let qry_to_param = encodeURIComponent(qry);
        let new_url = `#/help/search/?s=${qry_to_param}`;
        window.open(new_url, '_self');
    }


    // Insert results for the quick search (Top Suggestions)
    function help_ctr_qck_srch_rslt_ctg(qry)
    {
        let ctnt_srchBdr = document.querySelector(".help_ctr_hdr_ctnt_srchBdr");
        let srchRslt_bdr = document.querySelector(".help_ctr_hdr_ctnt_srchRslt_bdr");
        let srchRslt_gridBox = document.querySelector(".help_ctr_hdr_ctnt_srchRslt_gridBox");
        let srch_qry = qry.toString();
        let rslt_ctg_struct = ``;

        // Filter for items matching the search term
        let mtch_srch = pplr_tpc_arr.filter(pplr_item => pplr_item.pplr_tpc_name.toLowerCase().includes(srch_qry.toLowerCase()));
        mtch_srch = mtch_srch.slice(0,3);

        // Return if character length is less than one
        if((srch_qry === ""))
        {
            srchRslt_bdr.classList.remove("active");
            return;
        }

        // Display Empty result if no match found
        if((mtch_srch <= 0))
        {
            srchRslt_gridBox.innerHTML = 
            `
                <div class="help_ctr_hdr_ctnt_srchRslt_cardLnk">
                    <div class="help_ctr_hdr_ctnt_srchRslt_cardBdr">
                        <div class="help_ctr_hdr_ctnt_srchRslt_cardBox">
                            <p class="help_ctr_hdr_ctnt_srchRslt_cardTxt">No results found. Try another term.</p>
                        </div>
                    </div>
                </div>
            `;

            return;
        }

        // Display results in the catalog
        for(let i = 0; i < mtch_srch.length; i++)
        {
            let mtch_item = mtch_srch[i];
            rslt_ctg_struct += 
            `
                <a href="javascript:;" class="help_ctr_hdr_ctnt_srchRslt_cardLnk" onclick="notification('notifyBad', 'Article unavailable at this time')">
                    <div class="help_ctr_hdr_ctnt_srchRslt_cardBdr">
                        <div class="help_ctr_hdr_ctnt_srchRslt_cardBox">
                            <p class="help_ctr_hdr_ctnt_srchRslt_cardTxt">${mtch_item.pplr_tpc_name}</p>
                        </div>
                    </div>
                </a>
            `;
        }
        srchRslt_gridBox.innerHTML = rslt_ctg_struct;

        // Display result dialog if hidden
        if(!(srchRslt_bdr.classList.contains("active")))
        {
            srchRslt_bdr.classList.add("active");
            document.addEventListener("click" , function cls_srchRslt_bdr()
            {
                if(ctnt_srchBdr.matches(":hover")) return;
                document.removeEventListener("click", cls_srchRslt_bdr);
                srchRslt_bdr.classList.remove("active");
            });
        }
    }


    // Insert Results for the page search
    function help_ctr_srch_pg_rslt_ctg()
    {
        let help_ctr_srch_pg_rslTerm = document.querySelector(".help_ctr_srch_pg_rslTerm");
        let help_ctr_srch_pg_gridBox = document.querySelector(".help_ctr_srch_pg_gridBox");
        let srch_param = new URLSearchParams(hash_parts[3]);
        let srch_qry = srch_param.get("s") || "";
        let rslt_ctg_struct = ``;

        // Filter for items matching the search term
        let mtch_srch = pplr_tpc_arr.filter(pplr_item => pplr_item.pplr_tpc_name.toLowerCase().includes(srch_qry.toLowerCase()));

        // Display Empty result if no match found
        if((mtch_srch <= 0) || (srch_qry === ""))
        {
            help_ctr_srch_pg_gridBox.innerHTML = 
            `
                <label for="help_ctr_srch_pg_srchFldId" onclick="window.scrollTo(null,0)" class="help_ctr_srch_pg_cardLnk">
                    <div class="help_ctr_srch_pg_cardBdr">
                        <div class="help_ctr_srch_pg_cardBox">
                            <p class="help_ctr_srch_pg_cardTxt">No results found.</p>
                        </div>
                    </div>
                </label>
            `;

            return;
        }

        // Display results in the catalog
        for(let i = 0; i < mtch_srch.length; i++)
        {
            let mtch_item = mtch_srch[i];
            rslt_ctg_struct += 
            `
                <a href="javascript:;" onclick="notification('notifyBad', 'Article unavailable at this time')" class="help_ctr_srch_pg_cardLnk">
                    <div class="help_ctr_srch_pg_cardBdr">
                        <div class="help_ctr_srch_pg_cardBox">
                            <p class="help_ctr_srch_pg_cardTxt">${mtch_item.pplr_tpc_name}</p>
                        </div>
                        <div class="help_ctr_srch_pg_card_iconBdr">
                            <div class="help_ctr_srch_pg_card_iconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_srch_pg_card_iconSvg">
                                    <path fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        }
        help_ctr_srch_pg_gridBox.innerHTML = rslt_ctg_struct;

        // Update the label text
        help_ctr_srch_pg_rslTerm.textContent = `${srch_qry.toUpperCase()}`;

        // Update the input fields
        document.querySelectorAll(".help_ctr_hdr_ctnt_srchFldCls").forEach((fld) => fld.value = srch_qry);
    }





// ARTICLE

    //
