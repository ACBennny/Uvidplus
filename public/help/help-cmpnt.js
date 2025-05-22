/***************************************************************
 * This will hold the components for the Help pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



const help_ctr_nav = 
`
    <div class="topNavBdr">
        <div class="topNavBox">
            <section class="topNav_section">
                <div onclick="window.location.hash = page_route_fallback()" class="company_logoBdr">
                    <div class="company_logoBox Companylogo">
                        <img src="/images/uvid-logo.png" alt="" class="company_logoImg">
                    </div>
                </div>
                <a href="#/help" type="button" class="genBtnBox thin transBtn">
                    <div class="genBtnText">Help Center</div>
                </a>
            </section>
            <section class="topNav_section">
                <button type="button" onclick="window.open('#/help/search', '_self')" class="genBtnBox genIconBtn transBtn help_ctr_nav_srch_btn_mbl">
                    <div class="genBtnIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                        </svg>
                    </div>
                </button>
                <button type="button" onclick="window.open('#/help/search', '_self')" class="genBtnBox greySolidBtn help_ctr_nav_srch_btn_pc">
                    <div class="genBtnIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                        </svg>
                    </div>
                    <div class="genBtnText">Search</div>
                </button>
            </section>
        </div>
    </div>
`;


// Help Center Struct
const uvid_help_ctr_struct = 
`
    <div class="help_ctr_bdr backtotop_float_left">
        <div class="help_ctr_box">
            <div class="help_ctr_hdr_bdr">
                <div class="help_ctr_hdr_box">
                    <div class="help_ctr_hdr_bcg_bdr">
                        <div class="help_ctr_hdr_bcg_box">
                            <img src="/images/uvid-green-bcg1-dark.jpg" class="help_ctr_hdr_bcg_img">
                        </div>
                    </div>
                    <div class="help_ctr_hdr_ctnt_bdr">
                        <div class="help_ctr_hdr_ctnt_box">
                            <div class="help_ctr_hdr_ctnt_greet">
                                <div class="help_ctr_hdr_ctnt_ttlBox_mnr">
                                    <p class="help_ctr_hdr_ctnt_ttlTxt_mnr">Hi! Welcome to the Uvid Help Center</p>
                                </div>
                                <div class="help_ctr_hdr_ctnt_ttlBox_mjr">
                                    <span class="help_ctr_hdr_ctnt_ttlTxt_mjr">How can we help?</span>
                                </div>
                            </div>
                            <div class="help_ctr_hdr_ctnt_srchBdr">
                                <div class="help_ctr_hdr_ctnt_srchBox">
                                    <input type="text" name="help_ctr_hdr_ctnt_srchFld" id="help_ctr_hdr_ctnt_srchFldId" class="help_ctr_hdr_ctnt_srchFldCls" placeholder="Type a question, topic, or issue">
                                    <label for="help_ctr_hdr_ctnt_srchFldId" class="help_ctr_hdr_ctnt_srchIcon find_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_hdr_ctnt_srchSvg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                        </svg>
                                    </label>
                                    <label for="help_ctr_hdr_ctnt_srchFldId" class="help_ctr_hdr_ctnt_srchIcon clear_icon hide">
                                        <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="help_ctr_hdr_ctnt_srchSvg">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                        </svg>
                                    </label>
                                </div>
                                <div class="help_ctr_hdr_ctnt_srchRslt_bdr">
                                    <div class="help_ctr_hdr_ctnt_srchRslt_box">
                                        <div class="help_ctr_hdr_ctnt_srchRslt_hdrBox">
                                            <span class="help_ctr_hdr_ctnt_srchRslt_hdrText">Top Suggestions</span>
                                        </div>
                                        <div class="help_ctr_hdr_ctnt_srchRslt_gridBdr">
                                            <div class="help_ctr_hdr_ctnt_srchRslt_gridBox"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="help_ctr_tpc_bdr">
                <div class="help_ctr_tpc_box">
                    <div class="help_ctr_tpc_sect_bdr">
                        <div class="help_ctr_tpc_sect_box">
                            <div class="help_ctr_tpc_sect_hdrBox">
                                <div class="help_ctr_tpc_sect_hdrTxt">Explore Categories</div>
                            </div>
                            <div class="help_ctr_tpc_sect_gridBdr help_ctr_tpc_all_gridBdr">
                                <div class="help_ctr_tpc_sect_gridBox help_ctr_tpc_all_gridBox"></div>
                            </div>
                        </div>
                    </div>
                    <div class="help_ctr_tpc_sect_bdr" id="help_ctr_faq">
                        <div class="help_ctr_tpc_sect_box">
                            <div class="help_ctr_tpc_sect_hdrBox">
                                <div class="help_ctr_tpc_sect_hdrTxt">Popular Topics</div>
                            </div>
                            <div class="help_ctr_tpc_sect_gridBdr help_ctr_tpc_pplr_gridBdr">
                                <div class="help_ctr_tpc_sect_gridBox help_ctr_tpc_pplr_gridBox"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="help_ctr_more_bdr">
                <div class="help_ctr_more_box">
                    <div class="help_ctr_more_hdr_base">
                        <div class="help_ctr_more_hdr_bdr">
                            <div class="help_ctr_more_hdr_box help_ctr_more_hdr_box_mjr">
                                <div class="help_ctr_more_hdr_txt_mjr">Need more help?</div>
                            </div>
                            <div class="help_ctr_more_hdr_box help_ctr_more_hdr_box_mnr">
                                <p class="help_ctr_more_hdr_txt_mnr">We are always here & ready to help</p>
                            </div>
                        </div>
                    </div>
                    <div class="help_ctr_more_ctnt_bdr">
                        <div class="help_ctr_more_ctnt_box">
                            <div class="help_ctr_more_ctnt_cardBdr">
                                <div class="help_ctr_more_ctnt_cardBox">
                                    <div class="help_ctr_more_ctnt_card_iconBdr">
                                        <div class="help_ctr_more_ctnt_card_iconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_more_ctnt_card_iconSvg">
                                                <path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12" />
                                                <path d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="help_ctr_more_ctnt_card_detBdr">
                                        <div class="help_ctr_more_ctnt_card_detBox">
                                            <div class="help_ctr_more_ctnt_card_det_ttlBox">
                                                <a href="javascript:;" class="help_ctr_more_ctnt_card_det_ttlTxt help_ctr_chatbot_open_btn">Get in Touch</a>
                                            </div>
                                            <div class="help_ctr_more_ctnt_card_det_descBox">
                                                <p class="help_ctr_more_ctnt_card_det_descTxt">
                                                    We're happy to assist you, whenever you need us. 
                                                    Chat with our virtual assistant or speak to an agent.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="help_ctr_more_ctnt_cardBdr">
                                <div class="help_ctr_more_ctnt_cardBox">
                                    <div class="help_ctr_more_ctnt_card_iconBdr">
                                        <div class="help_ctr_more_ctnt_card_iconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_more_ctnt_card_iconSvg">
                                                <path d="m17.498 18.485l3.13-9.391c.791-2.373 1.331-3.994 1.37-5.115c.013-.377-.414-.503-.68-.236l-14.46 14.46c-.233.233-.177.626.14.716q.047.013.095.024c.5.123 1.153.034 2.46-.143l.07-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.151c.734-.324 1.072-1.337 1.747-3.363M14.906 3.372l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.255.382.382.478.524c.19.28.297.606.31.944c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458l.013.052c.081.325.48.387.717.15L20.257 2.683c.267-.267.141-.694-.236-.68c-1.121.038-2.742.578-5.115 1.369"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="help_ctr_more_ctnt_card_detBdr">
                                        <div class="help_ctr_more_ctnt_card_detBox">
                                            <div class="help_ctr_more_ctnt_card_det_ttlBox">
                                                <a href="#/feedback" class="help_ctr_more_ctnt_card_det_ttlTxt">Send a Feedback</a>
                                            </div>
                                            <div class="help_ctr_more_ctnt_card_det_descBox">
                                                <p class="help_ctr_more_ctnt_card_det_descTxt">
                                                    How might we improve Uvid? Have any suggestions?
                                                    Use our feedback form to let us know!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Virtual Assistant -->
    <div class="genBtnBox genIconBtn midSolidBtn help_ctr_chatbot_req_bdr help_ctr_chatbot_open_btn">
        <div class="genBtnIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                <path d="M22 8.5a6.5 6.5 0 0 0-11.626-3.993A9.5 9.5 0 0 1 19.5 14q0 .165-.006.33l.333.088a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5" />
                <path fill-rule="evenodd" d="M18 14a8 8 0 0 1-11.45 7.22a1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
`;


const help_ctr_srch_struct = 
`
    <div class="help_ctr_srch_pg_bdr">
        <div class="help_ctr_srch_pg_box">
            <div class="help_ctr_srch_pg_hdrBdr">
                <div class="help_ctr_srch_pg_hdrBox">
                    <div class="help_ctr_hdr_ctnt_srchBdr">
                        <div class="help_ctr_hdr_ctnt_srchBox">
                            <input type="text" name="help_ctr_srch_pg_srchFld" id="help_ctr_srch_pg_srchFldId" class="help_ctr_hdr_ctnt_srchFldCls" placeholder="Type a question, topic, or issue">
                            <label for="help_ctr_srch_pg_srchFldId" class="help_ctr_hdr_ctnt_srchIcon find_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_hdr_ctnt_srchSvg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                </svg>
                            </label>
                            <label for="help_ctr_srch_pg_srchFldId" class="help_ctr_hdr_ctnt_srchIcon clear_icon hide">
                                <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="help_ctr_hdr_ctnt_srchSvg">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </label>
                        </div>
                        <div class="help_ctr_hdr_ctnt_srchRslt_bdr">
                            <div class="help_ctr_hdr_ctnt_srchRslt_box">
                                <div class="help_ctr_hdr_ctnt_srchRslt_hdrBox">
                                    <span class="help_ctr_hdr_ctnt_srchRslt_hdrText">Top Suggestions</span>
                                </div>
                                <div class="help_ctr_hdr_ctnt_srchRslt_gridBdr">
                                    <div class="help_ctr_hdr_ctnt_srchRslt_gridBox"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="help_ctr_srch_pg_rsltBdr">
                <div class="help_ctr_srch_pg_rsltBox">
                    <div class="help_ctr_srch_pg_rsltTxt">
                        Results for "<span class="help_ctr_srch_pg_rslTerm"></span>"
                    </div>
                </div>
            </div>
            <div class="help_ctr_srch_pg_gridBdr">
                <div class="help_ctr_srch_pg_gridBox"></div>
            </div>
        </div>
    </div>
`;


// Virtual chat bot
const help_ctr_ctct_struct = 
`
    <div class="ctct_base">
        <div class="ctct_bdr">
            <div class="ctct_box">
                <div class="ctct_chat_bcg ctct_close_btn"></div>
                <div class="ctct_chat_bdr">
                    <div class="ctct_chat_box">
                        <div class="ctct_hdr_bdr">
                            <div class="ctct_hdr_box">
                                <div class="ctct_hdr_ttl_bdr">
                                    <div class="ctct_hdr_logo_bdr">
                                        <div class="ctct_hdr_logo_box">
                                            <img src="/images/uvid-logo.png" class="ctct_hdr_logo_img">
                                        </div>
                                    </div>
                                    <div class="ctct_hdr_ttl_box">
                                        <span class="ctct_hdr_ttl_txt">Virtual Assistant</span>
                                    </div>
                                </div>
                                <button class="genBtnBox genIconBtn transBtn ctct_close_btn">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="ctct_body_bdr">
                            <div class="ctct_body_box"></div>
                            <button class="genBtnBox genIconBtn greySolidBtn ctct_body_scroll_btn is_scrolling">
                                <div class="genBtnIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                        <path fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div class="ctct_ftr_bdr">
                            <div class="ctct_ftr_box">
                                <button class="genBtnBox genIconBtn transBtn ctct_ftr_menu_bdr openGenMenuModalBtn" data-gen-menu-modal-type="help_ctr_chatbot" title="More">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" class="genBtnSvg" style="transform: scale(0.80);">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </button>
                                <div class="ctct_ftr_input_bdr">
                                    <div class="ctct_ftr_input_box">
                                        <textarea type="text" name="ctct_ftr_input_fld" id="ctct_ftr_input_fldId" class="ctct_ftr_input_fldCls" placeholder="Enter your request" disabled></textarea>
                                    </div>
                                    <button class="genBtnBox genIconBtn transBtn ctct_ftr_send_btn" title="Send">
                                        <div class="genBtnIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                <path d="m17.498 18.485l3.13-9.391c.791-2.373 1.331-3.994 1.37-5.115c.013-.377-.414-.503-.68-.236l-14.46 14.46c-.233.233-.177.626.14.716q.047.013.095.024c.5.123 1.153.034 2.46-.143l.07-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.151c.734-.324 1.072-1.337 1.747-3.363M14.906 3.372l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.255.382.382.478.524c.19.28.297.606.31.944c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458l.013.052c.081.325.48.387.717.15L20.257 2.683c.267-.267.141-.694-.236-.68c-1.121.038-2.742.578-5.115 1.369"/>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;


// Default Chatbox message
let help_ctr_dflt_chatbot_msg_arr = 
[
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
                            By using this chat, you fully consent to the recognition, observation, capturing, 
                            and storage of your entire conversation by absolutely no one, if and/or whenever possible.
                            </br>
                            By continuing, you agree to our privacy policy and terms of use.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
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
                            Hi! I'm Uvid's Virtual Assistant.
                            I'll do my best to assist you as we explore all things Uvid!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    `
        <div class="ctct_msg_wrapper">
            <div class="ctct_msg_base">
                <div class="ctct_msg_pfp_bdr"></div>
                <div class="ctct_msg_ctnt_bdr">
                    <div class="ctct_msg_ctnt_box">
                        <p class="ctct_msg_ctnt_txt">
                            Select one of the issues below or type in your question
                            and I'll do my best to answer it. You can type in "agent" 
                            to get in queue to chat with an agent.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    `
        <div class="ctct_dflt_issues_bdr">
            <div class="ctct_dflt_issues_box">
                <button class="genBtnBox hollowBtn ctct_msg_dflt_issues_btn">
                    <p class="genBtnText ctct_msg_dflt_issues_txt">Log in issues</p>
                </button>
                <button class="genBtnBox hollowBtn ctct_msg_dflt_issues_btn">
                    <p class="genBtnText ctct_msg_dflt_issues_txt">Manage Membership</p>
                </button>
                <button class="genBtnBox hollowBtn ctct_msg_dflt_issues_btn">
                    <p class="genBtnText ctct_msg_dflt_issues_txt">Multiple Profiles</p>
                </button>
                <button class="genBtnBox hollowBtn ctct_msg_dflt_issues_btn">
                    <p class="genBtnText ctct_msg_dflt_issues_txt">Change username/email</p>
                </button>
                <button class="genBtnBox hollowBtn ctct_msg_dflt_issues_btn">
                    <p class="genBtnText ctct_msg_dflt_issues_txt">Troubleshooting</p>
                </button>
            </div>
        </div>
    `,
];



// Article Struct
const hlp_ctr_atcl_pg_struct = 
`
    <div class="atcl_bdr">
        <div class="atcl_box">
            <div class="atcl_nav_bdr">
                <div class="atcl_nav_box">
                    <button type="button" class="genBtnBox transBtn" onclick="window.open('#/help', '_self')">
                        <div class="genBtnIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="genBtnText">Back to Help Home</span>
                    </button>
                </div>
            </div>
            <div class="atcl_main_bdr">
                <div class="atcl_main_box">
                    <div class="atcl_card_bdr">
                        <div class="atcl_card_box">
                            <div class="atcl_hdr_bdr">
                                <div class="atcl_hdr_box">
                                    <div class="atcl_hdr_txt"></div>
                                </div>
                            </div>
                            <div class="atcl_body_bdr">
                                <div class="atcl_body_box">
                                    <p class="atcl_body_txt">
                                        <strong style="color: var(--genGreenTypeLight2)">• NO CONTENT AVAILABLE •</strong>
                                    </p>
                                </div>
                            </div>
                            <div class="atcl_ftr_bdr">
                                <div class="atcl_ftr_box">
                                    <div class="atcl_qtn_box">
                                        <p class="atcl_qtn_txt">Was this article helpful?</p>
                                    </div>
                                    <div class="atcl_rspns_box">
                                        <button type="button" class="genBtnBox greySolidBtn" onclick="notification('notifyGood', 'Thanks for your feedback')">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735" />
                                                    <path fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <span class="genBtnText">Yes</span>
                                        </button>
                                        <button type="button" class="genBtnBox greySolidBtn" onclick="notification('notifyBad', 'We are sorry to hear that')">
                                            <div class="genBtnIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                                    <path d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735" />
                                                    <path fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <span class="genBtnText">No</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;


// More articles struct
let hlp_ctr_atcl_pplr_struct = 
`
    <div class="artcl_more_bdr">
        <div class="artcl_more_box">
            <div class="artcl_more_hdr_box">
                <span class="artcl_more_hdr_txt">Popular Articles</span>
            </div>
            <div class="artcl_more_grid_bdr">
                <div class="artcl_more_grid_box"></div>
            </div>
        </div>
    </div>
`;


