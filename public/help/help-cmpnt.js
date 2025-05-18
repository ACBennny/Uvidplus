/***************************************************************
 * This will hold the components for the Help pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



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
                                                <a href="javascript:;" onclick="notification('notifyBad', 'Service unavailable at this time')" class="help_ctr_more_ctnt_card_det_ttlTxt">Get in Touch</a>
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
`;


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


// Popular Topics
let pplr_tpc_arr = 
[
    {
        pplr_tpc_id: `58679021`,
        pplr_tpc_name: `How to sign up for Uvid?`,
    },
    {
        pplr_tpc_id: `11358423`,
        pplr_tpc_name: `I can't sign into Uvid`,
    },
    {
        pplr_tpc_id: `58523412`,
        pplr_tpc_name: `How can I change my username?`,
    },
    {
        pplr_tpc_id: `82541406`,
        pplr_tpc_name: `How can I change my email address?`,
    },
    {
        pplr_tpc_id: `38427142`,
        pplr_tpc_name: `Plans and Pricing`,
    },
    {
        pplr_tpc_id: `64804346`,
        pplr_tpc_name: `How can I change my membership plan?`,
    },
    {
        pplr_tpc_id: `16081474`,
        pplr_tpc_name: `Is Uvid kid friendly?`,
    },
    {
        pplr_tpc_id: `16456529`,
        pplr_tpc_name: `Where can I watch?`,
    },
    {
        pplr_tpc_id: `60953494`,
        pplr_tpc_name: `Where can I redeem gift cards?`,
    },
    {
        pplr_tpc_id: `67664905`,
        pplr_tpc_name: `How to sign out?`,
    },
];



// All Topics / Categories
let all_tpc_arr = 
[
    {
        all_tpc_id: `37925172`,
        all_tpc_name: `Getting Started`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `87316930`,
        all_tpc_name: `Membership & Billing`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="M20.941 8.189c.58.573.83 1.295.947 2.152c.112.826.112 1.876.112 3.178v.105c0 1.302 0 2.352-.112 3.178c-.117.857-.367 1.579-.947 2.152s-1.31.82-2.178.935c-.835.111-1.898.111-3.216.111h-4.925c-1.318 0-2.38 0-3.216-.111c-.868-.115-1.598-.362-2.178-.935a3 3 0 0 1-.735-1.204c.871.107 1.95.107 3.195.107h5.01c1.281 0 2.385 0 3.27-.117c.947-.126 1.856-.41 2.593-1.138s1.024-1.626 1.151-2.562c.12-.874.12-1.965.119-3.232v-.188c0-1.23 0-2.296-.11-3.158c.46.151.868.379 1.22.727m-10.748.859c-.932 0-1.687.746-1.687 1.666s.755 1.667 1.687 1.667c.931 0 1.686-.746 1.686-1.667c0-.92-.755-1.666-1.686-1.666" />
	            <path fill-rule="evenodd" d="M2.847 5.837C2 6.674 2 8.02 2 10.714s0 4.041.847 4.878s2.21.837 4.936.837h4.82c2.725 0 4.088 0 4.935-.837s.847-2.184.847-4.878s0-4.04-.847-4.877S15.328 5 12.602 5H7.783c-2.726 0-4.09 0-4.936.837m4.213 4.877c0-1.71 1.403-3.095 3.133-3.095s3.132 1.386 3.132 3.095s-1.402 3.096-3.132 3.096s-3.133-1.386-3.133-3.096m8.434 2.62c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.723.32.723.715v3.81a.72.72 0 0 1-.723.713m-11.325-.715c0 .395.323.714.723.714s.722-.32.722-.714V8.81a.72.72 0 0 0-.722-.714c-.4 0-.723.32-.723.715z" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `78154614`,
        all_tpc_name: `Plans & Add-ons`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358" />
                <path fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `90187270`,
        all_tpc_name: `Fix a Problem`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `66540227`,
        all_tpc_name: `Watching Uvid`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd" />
                <path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" />
            </svg>
        `,
    },
    {
        all_tpc_id: `29301040`,
        all_tpc_name: `Supported Devices`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z" />
                <path fill-rule="evenodd" d="M22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22c-1.7 0-3.015 0-4.056-.107c.335-.525.454-1.082.506-1.598c.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729c-.054-.533-.18-1.11-.54-1.65a3.5 3.5 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A14 14 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10m-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd" />
            </svg>
        `,
    },
];
