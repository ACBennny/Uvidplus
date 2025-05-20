/***************************************************************
 * This will hold the default code for the Help Center Contact page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



    // Attach listener to Init the chat
    function attachInitHelpCtrChatBotListeners()
    {
        let opnChatBtn = document.querySelectorAll(".help_ctr_chatbot_open_btn");

        opnChatBtn.forEach((old_btn) => 
        {
            if(old_btn.opn_atn)
            {
                old_btn.removeEventListener("click" , old_btn.opn_atn);
            }
        });

        opnChatBtn.forEach((new_btn) => 
        {
            const open_atn_ = (e) => 
            {
                initHelpCtrChatBot(e);
            }

            new_btn.addEventListener("click", open_atn_);
            new_btn.open_atn = open_atn_;
        });
    }


    // Initialize the chatbot
    function initHelpCtrChatBot(e)
    {
        if(isHlpCtrChatBotInit) return startHelpCtrChatBot(e);

        documentCtnt.insertAdjacentHTML('beforeend' , help_ctr_ctct_struct);
        startHelpCtrChatBot(e);
    }


    // Start the chatbot
    function startHelpCtrChatBot(call_btn)
    {
        if((typeof call_btn !== "undefined")) call_btn.disabled = true;
        
        // Definitions
        let ctct_base = document.querySelector(".ctct_base");
        let ctct_close_btn = document.querySelectorAll(".ctct_close_btn");
        let ctct_chat_bdr = document.querySelector(".ctct_chat_bdr");
        let ctct_hdr_bdr = document.querySelector(".ctct_hdr_bdr");
        let ctct_body_bdr = document.querySelector(".ctct_body_bdr");
        let ctct_body_box = document.querySelector(".ctct_body_box");
        let ctct_body_scroll_btn = document.querySelector(".ctct_body_scroll_btn");
        let ctct_ftr_bdr = document.querySelector(".ctct_ftr_bdr");
        let ctct_ftr_input_fld = document.querySelector(".ctct_ftr_input_fldCls");
        let ctct_ftr_send_btn = document.querySelector(".ctct_ftr_send_btn");
        let ctct_msg_dflt_issues_btn;
        let chatbot_timer_1;

        // Opening the Chatbot
        chatbot_timer_1 = setTimeout(() => 
        {
            clearTimeout(chatbot_timer_1);
            ctct_base.classList.add("active");

            // Insert dflt msg if not present
            if(!(isHlpCtrChatBotInit))
            {
                insertDfltMsg();
            }
            else
            {
                ctct_base.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    ctct_base.removeEventListener("transitionend" , handleTransitionEnd);
                    ctct_ftr_input_fld.focus();
                });

                attachGenMenuModalEventListeners();
            }
            
        }, 10);


        // Inserts the defualt message
        const insertDfltMsg = () => 
        {
            if(isHlpCtrChatBotInit) return;
            if((help_ctr_dflt_chatbot_msg_arr <= 0) || (help_ctr_dflt_chatbot_msg_arr == undefined)) return;
            
            let insertDfltMsg_timer;
            let dflt_count = 0;

            // Insert messages in intervals
            insertDfltMsg_timer = setInterval(() => 
            {
                if((dflt_count == help_ctr_dflt_chatbot_msg_arr.length))
                {
                    clearInterval(insertDfltMsg_timer);

                    // Prevent further initialization attempts
                    isHlpCtrChatBotInit = true;

                    // Enable and focus on the input field
                    ctct_ftr_input_fld.disabled = false;
                    ctct_ftr_input_fld.focus();

                    // Add listeners
                    attachDfltIssueOptBtnListeners();
                    attachGenMenuModalEventListeners();

                    scroll_to_chatend();
                }
                else
                {
                    ctct_body_box.insertAdjacentHTML(`beforeend` , help_ctr_dflt_chatbot_msg_arr[dflt_count]);
                    dflt_count++;
                }

            }, 750);
        }
        

        // Closes the chatbot
        const clsHelpCtrChatBot = () =>
        {
            ctct_base.classList.remove("active");

            ctct_base.addEventListener("transitionend" , function handleTransitionEnd()
            {
                ctct_base.removeEventListener("transitionend" , handleTransitionEnd);
                if((typeof call_btn !== "undefined")) call_btn.disabled = false;
            });
        }

        ctct_close_btn.forEach((btn) => 
        {
            btn.addEventListener("click" , clsHelpCtrChatBot);
        });


        // Updating Chat area's height as user types in field
        const updFldHeight = (reset = false) =>
        {

            let chat_h = (Math.round((ctct_chat_bdr.getBoundingClientRect().height)) / 16);
            let hdr_h = (Math.round((ctct_hdr_bdr.getBoundingClientRect().height)) / 16);
            let body_h = (Math.round((ctct_body_bdr.getBoundingClientRect().height)) / 16);
            let fld_h = (Math.round((ctct_ftr_input_fld.getBoundingClientRect().height) + 25) / 16);

            if((reset == true))
            {
                fld_h = 4.5;
            }

            body_h = chat_h - (hdr_h + fld_h);

            ctct_body_bdr.setAttribute(`style`, `height: ${body_h}rem`);
            ctct_ftr_bdr.setAttribute(`style`, `height: ${fld_h}rem`);
        }

        ctct_ftr_input_fld.addEventListener("input" , updFldHeight);

        
        // Scroll to end of chat
        const scroll_to_chatend = () =>
        {
            // Scroll to the newly added chat
            ctct_body_box.scrollTo(
            {
                top: (ctct_body_box.scrollHeight - ctct_body_box.clientHeight),
                behavior: "smooth"
            });
        }

        ctct_body_scroll_btn.addEventListener("click" , scroll_to_chatend);

        // Display scroll to bottom button
        ctct_body_box.addEventListener("scroll", () => 
        {
            let s = ctct_body_box.scrollTop + ctct_body_box.clientHeight + 10;
            ctct_body_scroll_btn.classList.toggle("is_scrolling" ,  s < ctct_body_box.scrollHeight);
        });


        // Sending a chat (by user)
        const validateUsrReq = (msg) => 
        {
            let filteredInp = msg.toString().trim().replace(/\s+/g, ' ');

            // Return if msg is empty
            if((filteredInp === "")) return;

            // Format msg
            let formattedMsg = msg.replace(/\n/g, "</br>");

            // Append msg to chat
            ctct_body_box.insertAdjacentHTML(
                `beforeend`,
                `
                    <div class="ctct_rspns_wrapper">
                        <div class="ctct_rspns_base">
                            <div class="ctct_rspns_ctnt_bdr">
                                <div class="ctct_rspns_ctnt_box">
                                    <p class="ctct_rspns_ctnt_txt">
                                        ${formattedMsg}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            );

            // Clear input field
            ctct_ftr_input_fld.value = "";

            // Reset input feild height
            updFldHeight(true);

            // Responding to user (by chatbot NB: Simulated. Does. Not. Work.)
            chatbot_timer_1 = setTimeout(() => 
            {
                ctct_body_box.insertAdjacentHTML(
                    "beforeend" , 
                    `
                        <div class="ctct_msg_wrapper">
                            <div class="ctct_msg_base">
                                <div class="ctct_msg_pfp_bdr">
                                    <div class="ctct_msg_pfp_box">
                                        <img src="/images/uvid-profile-base.png" class="ctct_msg_pfp_img" alt="The profile picture of Uvid's virtual support">
                                    </div>
                                </div>
                                <div class="ctct_msg_ctnt_bdr">
                                    <div class="ctct_msg_ctnt_box">
                                        <p class="ctct_msg_ctnt_txt">
                                            An error occured while processing your request.
                                            Please try again later. Thank you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                )

                scroll_to_chatend();
            }, 300);
        }

        ctct_ftr_send_btn.addEventListener("click" , () => 
        {
            validateUsrReq(ctct_ftr_input_fld.value);
        });

        ctct_ftr_input_fld.addEventListener("keyup" , (e) => 
        {
            if(!(e.shiftKey) && (e.key.toLowerCase() === "enter")) validateUsrReq(ctct_ftr_input_fld.value);
        });


        // Selecting one of the defualt issue options
        const attachDfltIssueOptBtnListeners = () => 
        {
            ctct_msg_dflt_issues_btn = document.querySelectorAll(".ctct_msg_dflt_issues_btn");
            
            ctct_msg_dflt_issues_btn.forEach((btn) => 
            {
                btn.addEventListener("click" , () => 
                {
                    // Disable button
                    btn.classList.replace("hollowBtn", "inactiveBtn");
                    btn.disabled = true;

                    // Send chat
                    validateUsrReq(btn.querySelector(".ctct_msg_dflt_issues_txt").textContent);
                });
            });
        }

    }


    // Confirm before resetting the chatbot
    function cnfrmB4RstChatBot()
    {
        initConfirmModal(
            `Are you sure you want to end chat?`,
            `All previous conversation will be lost.`,
            `Yes`,
            `No`,
            resetHelpCtrChatBot
        );
    }

    // Resetting the chatbot
    function resetHelpCtrChatBot()
    {
        let ctct_base = document.querySelector(".ctct_base");

        ctct_base.classList.remove("active");

        ctct_base.addEventListener("transitionend" , function handleTransitionEnd()
        {
            ctct_base.removeEventListener("transitionend" , handleTransitionEnd);
            ctct_base.remove();

            // Allow Chatbot intialization
            isHlpCtrChatBotInit = false;

            // Enable open btn
            document.querySelectorAll(".help_ctr_chatbot_open_btn").forEach(btn => btn.disabled = false);

            // Notify users
            notification('notifyGood', 'Chat session ended successfully')
        });
    }






