/*************************************************************
 * This is the script for the landing page of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    let feedback_struct = 
    `
        <div class="feedback_base">
            <div class="feedback_bdr">
                <div class="feedback_bcg feedback_closeBtn"></div>
                <div class="feedback_box">
                    <form id="feedback_form" class="feedback_form">
                        <div class="feedback_closeBdr feedback_closeBtn">
                            <div class="feedback_closeBox ">
                                <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="feedback_closeIcon">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="feedback_header">
                            <div class="feedback_name">Feedback Form</div>
                        </div>
                        <div class="feedback_ctnt">
                            <label for="feedback_subject" class="feedback_sectBox feedback_sectInputBox">
                                <div class="feedback_sectLabel">Title</div>
                                <input type="text" name="subject" id="feedback_subject" class="feedback_sectField feedback_sectInput"  placeholder="Enter title" disabled />
                            </label>
                            <label for="feedback_desc" class="feedback_sectBox feedback_sectInputBox">
                                <div class="feedback_sectLabel">Description</div>
                                <textarea name="text" id="feedback_desc" class="feedback_sectField feedback_sectTextArea" placeholder="Enter description" disabled></textarea>
                            </label>
                            <div class="feedback_selectBdr">
                                <label for="feedback_type" class="feedback_sectBox feedback_sectSelectBox">
                                    <div class="feedback_sectLabel">Feedback Type</div>
                                    <select type="number" name="feedback_type" id="feedback_type" class="feedback_sectField feedback_sectSelect" disabled>
                                        <option value="N/A">Select an option</option>
                                        <option value="Bug Report">Bug Report</option>
                                        <option value="Help Center Article">Help Center Article</option>
                                        <option value="Suggestion">Suggestion</option>
                                        <option value="Feature Request">Feature Request</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </label>
                                <label for="severity_level" class="feedback_sectBox feedback_sectSelectBox">
                                    <div class="feedback_sectLabel">Severity level</div>
                                    <select type="number" name="severity_level" id="severity_level" class="feedback_sectField feedback_sectSelect" disabled>
                                        <option value="N/A">Select severity</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="feedback_atnBox">
                            <button type="submit" id="fdbk_send" class="genBtnBox midSolidBtn disabled">
                                <div class="genBtnText">Submit</div>
                            </button>
                            <button type="button" class="genBtnBox hollowBtn feedback_closeBtn disabled">
                                <div class="genBtnText">Cancel</div>
                            </button>
                        </div>
                        <p class="poweredBy_text">Powered by <span  class="poweredBy_link" onclick="window.open('https://postmail.invotes.com' , '_blank')">PostMail</a></p>
                    </form>
                </div>
            </div>
        </div>
    `;
    let emptyFdbStruct = 
    `
        <div class="error_bdr">
            <div class="error_box">
                <div class="error_note">
                    <div class="header">
                        <h1 class="header_note hN1">F</h1>
                        <h1 class="header_note hN2">eedback</h1>
                    </div>
                    <div class="middle">
                        <h3 class="mid_Title">Feedback Form Closed</h3>
                        <p class="mid_Note">
                            You may close this window.
                            <br>
                        </p>
                    </div>
                    <div class="footer">
                        <div class="logoBox">
                            <a href="/" class="logo">
                                <h2 class="logo1">U</h2>
                                <h2 class="logo2">VID</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    let data_js = 
    {
        // testing
        "access_token": "u2s6gbzxrx7o1s4jost9fq3q"
    };
    let feedbackForm_timer;
    let feedback_base;
    let js_form;
    let feedback_sectField;
    let openButton;
    let closeButton;
    let sendButton;
    let form_id_js;

    window.onload = () => 
    {
        if((window.location.pathname === "/feedback.html"))
        {
            init_FeedbackForm();
        }
    }


    function toggle_sendBtn(state = false)
    {
        if((typeof sendButton === "undefined")) return;

        if(state == true)
        {
            sendButton.disabled = true;
            return;
        }
        sendButton.disabled = false;
    }


    function attachOpenFdbkFormListeners()
    {
        openButton = document.querySelectorAll(".feedback_openBtn");

        openButton.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click", btn.action);
            }
        });
        
        openButton.forEach((btn) => 
        {
            btn.addEventListener("click", open_FeedbackForm);
            btn.action = open_FeedbackForm;
        });
    }


    function init_FeedbackForm()
    {
        document.body.insertAdjacentHTML(`beforeend` , feedback_struct);

        feedback_base = document.querySelector(".feedback_base");
        js_form = document.getElementById("feedback_form");
        feedback_sectField = document.querySelectorAll(".feedback_sectField");
        openButton = document.querySelectorAll(".feedback_openBtn");
        closeButton = document.querySelectorAll(".feedback_closeBtn");
        sendButton = document.getElementById("fdbk_send");
        form_id_js = js_form.getAttribute('id');

        // Update background to the current profile's
        if(typeof selectedProfile !== "undefined")
        {
            document.querySelector(`.feedback_bcg`).setAttribute(`style` , `background-image: url(${selectedProfile.prof_bcgImg})`);
        }

        // Remove previous event listeners (if any)
        closeButton.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click", btn.action);
            }
        });

        // Reattach event listeners
        closeButton.forEach((btn) => 
        {
            btn.addEventListener("click", close_FeedbackForm);
            btn.action = close_FeedbackForm;
        });
        sendButton.addEventListener("click", validate_input);
        js_form.addEventListener("submit", no_deflt_atn);
        
        // Make button available (Will be removed)
        feedbackForm_timer = setTimeout(() => 
        {
            clearTimeout(feedbackForm_timer);
            openButton.forEach((btn) => 
            {
                btn.disabled = false;
            });
            open_FeedbackForm();
        }, 10);
    }

    function open_FeedbackForm()
    {
        document.body.setAttribute(`data-modal-state` , `open`);
        toggle_sendBtn(false);
        feedback_sectField.forEach((btn) => 
        {
            btn.disabled = false;
        });
        closeButton.forEach((btn) => 
        {
            btn.disabled = false;
        });
        openButton.forEach((btn) => 
        {
            btn.disabled = true;
        });
        feedback_base.classList.add("active");
    }

    function close_FeedbackForm()
    {
        document.body.removeAttribute(`data-modal-state`);
        toggle_sendBtn(true);
        feedback_sectField.forEach((btn) => 
        {
            btn.disabled = true;
        });
        closeButton.forEach((btn) => 
        {
            btn.disabled = true;
        });
        openButton.forEach((btn) => 
        {
            btn.disabled = false;
        });
        feedback_base.classList.remove("active");
        feedback_base.addEventListener("transitionend" , function handleTransitionEnd()
        {
            feedback_base.removeEventListener("transitionend" , handleTransitionEnd);
            clearTimeout(feedbackForm_timer);
            remove_FeedbackForm();
        });
    }

    function remove_FeedbackForm()
    {
        openButton.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click", btn.action);
            }
        });
        closeButton.forEach((btn) => 
        {
            if(btn.action)
            {
                btn.removeEventListener("click", btn.action);
            }
        });
        sendButton.removeEventListener("click", validate_input);
        js_form.removeEventListener("submit", no_deflt_atn);
        
        feedbackForm_timer = setTimeout(() => 
        {
            clearTimeout(feedbackForm_timer);
            feedback_base.remove();

            // Attempt to close page
            window.close();

            // Redirects to homepage if closing is not possible
            prev_page_route();
        }, 100);
    }

    function no_deflt_atn(e)
    {
        e.preventDefault();
    }

    function fdbk_onSuccess() 
    {
        notification(`notifyGood` , `Feedback sent successfully`);
        toggle_sendBtn(false);
    }

    function fdbk_onError(error) 
    {
        notification(`notifyBad` , `An error occurred during sending`);
        toggle_sendBtn(false);
    }


    function fdbk_get()
    {
        toggle_sendBtn(true);

        let subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
        let message = document.querySelector("#" + form_id_js + " [name='text']").value;
        let type = document.querySelector("#" + form_id_js + " [name='feedback_type']").value;
        let severity = document.querySelector("#" + form_id_js + " [name='severity_level']").value;

        fdbk_send(subject, message, type, severity);
    }


    function fdbk_send(subject, message, type, severity)
    {

        let request = new XMLHttpRequest();
        request.onreadystatechange = function() 
        {
            if (request.readyState == 4 && request.status == 200) 
            {
                fdbk_onSuccess();
            } 
            else if(request.readyState == 4) 
            {
                fdbk_onError(request.response);
            }
        };
        data_js['subject'] = subject;
        data_js['text'] = message;
        data_js['extra_feedback_type'] = type;
        data_js['extra_severity_level'] = severity;
        let params = fdbk_toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    function fdbk_toParams(data_js) 
    {
        let form_data = [];
        for ( var key in data_js ) 
        {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    function validate_input()
    {
        if(
            (document.querySelector("#" + form_id_js + " [name='subject']").value.trim().replace(/\s+/g, ' ') != "")
        &&  (document.querySelector("#" + form_id_js + " [name='text']").value.trim().replace(/\s+/g, ' ') != "")
        )
        {
            notification(`notifyGood` , `Sending feedback..`);
            fdbk_get();
        }
        else
        {
            notification(`notifyBad` , `Please fill out all required fields`);
        }
    }
