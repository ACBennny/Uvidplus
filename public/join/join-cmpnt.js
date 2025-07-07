/*************************************************************
 * This will hold componenets for the sign up page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// SIGNING IN

    const signin_form = 
    `
        <!-- ------------------- Form -------------- -->
        <div class="join_fence">
            <div class="join_area">
                <div class="join_house">
                    <div class="join_bdr">
                        <div class="join_box">

                            <!-- Sign In Form -->
                            <div class="join_formBox signIn_FormBox active">
                                <form action="#" name="logInForm" id="logIn_form" class="join_form logIn_form_class">
                                    <div class="form_ctnt">

                                        <!-- Title -->
                                        <div class="form_title_box">
                                            <h2 class="form_title">Welcome Back</h2>
                                        </div>

                                        <!-- Form fields -->
                                        <div class="form_inputArea">

                                            <!--  Email -->
                                            <div class="form_input_bdr">
                                                <label for="form_logIn_id" class="form_input_nameBox">
                                                    <div class="form_input_name">Email</div>
                                                </label>
                                                <div class="form_input_box">
                                                    <input type="text" id="form_logIn_id" class="form_input_field" placeholder="Enter your email">
                                                </div>
                                            </div>

                                            <!-- Password -->
                                            <div class="form_input_bdr">
                                                <label for="form_logIn_pass" class="form_input_nameBox">
                                                    <div class="form_input_name">Password</div>
                                                </label>
                                                <div class="form_input_box form_PassBox">
                                                    <input type="password" id="form_logIn_pass" class="form_input_field form_Pass" placeholder="Enter your password">
                                                    <label for="form_logIn_pass" class="togglePass_btn togglePass_iconBdr">
                                                        <div class="togglePass_iconBox pass_open">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="togglePass_iconSvg">
                                                                <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                                                                <path fill-rule="evenodd" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div class="togglePass_iconBox pass_close">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="togglePass_iconSvg">
                                                                <path fill-rule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            <!-- Error message -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_warn" id="logIn_warn"></div>
                                            </div>

                                            <!-- Log In btn -->
                                            <div class="form_input_bdr">
                                                <div class="join_submit_box">
                                                    <input type="button" class="genBtn join_submit_btn form_LogIn " id="logIn_btn" value="Log In" >
                                                </div>
                                            </div>

                                            <!-- Forgot Password -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_box">
                                                    <div class="form_text">
                                                        <span>Forgot Password?</span>
                                                        <span class="form_links toRecoverAccForm">Reset Password</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Contact us if you need help -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_box">
                                                    <div class="form_text">
                                                        <span>Experiencing any issues?</span>
                                                        <span class="form_links">
                                                            <a href="#/help" class="form_links" target="_blank">Let us know</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <!-- Reset Password Form -->
                            <div class="join_formBox RecoverAcc_FormBox ">
                                <form action="#" name="RecoverAccForm" id="RecoverAcc_form" class="join_form RecoverAcc_form_class">
                                    <div class="form_ctnt">

                                        <!-- TItle -->
                                        <div class="form_title_box">
                                            <h2 class="form_title">Recover your Account</h2>
                                        </div>

                                        <!-- Form fields -->
                                        <div class="form_inputArea">

                                            <!-- Email -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_nameBox">
                                                    <label for="form_recover_Acc" class="form_input_name">Email</label>
                                                </div>
                                                <div class="form_input_box">
                                                    <input type="text" id="form_recover_Acc" class="form_input_field" placeholder="Enter your email">
                                                </div>
                                            </div>

                                            <!-- Error message -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_warn" id="form_recover_AccWarn"></div>
                                            </div>

                                            <!-- Submit btn -->
                                            <div class="form_input_bdr">
                                                <div class="join_submit_box">
                                                    <input type="button" class="genBtn join_submit_btn " id="recoverAcc_btn" value="Submit" >
                                                </div>
                                            </div>

                                            <!-- Open Sign up form if you havent got an account -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_box">
                                                    <div class="form_text">
                                                        <span>Have an Account?</span>
                                                        <span class="form_links toLogInForm">Log In</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Contact us if you need help -->
                                            <div class="form_input_bdr">
                                                <div class="form_input_box">
                                                    <div class="form_text">
                                                        <span>Experiencing any issues?</span>
                                                        <span class="form_links">
                                                            <a href="#/help" class="form_links" target="_blank">Let us know</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const signin_nav = 
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="company_logoBdr" onclick="window.location.hash = page_route_fallback()">
                        <div class="company_logoBox Companylogo">
                            <img loading="lazy" onload="this.classList.add('loaded')" src="/images/uvid-logo.png" alt="" class="company_logoImg">
                        </div>
                    </div>
                </section>
                <section class="topNav_section">
                    <a href="#/signup" type="button" class="genBtnBox transBtn thin">
                        <span class="genBtnText">Sign Up</span>
                    </a>
                </section>
            </div>
        </div>
    `;



// SIGNING UP

    const signup_nav = 
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="company_logoBdr" onclick="window.location.hash = page_route_fallback()">
                        <div class="company_logoBox Companylogo">
                            <img loading="eager" src="/images/uvid-logo.png" alt="" class="company_logoImg">
                        </div>
                    </div>
                </section>
                <section class="topNav_section">
                    <a href="#/signin" type="button" class="genBtnBox transBtn thin">
                        <span class="genBtnText">Sign In</span>
                    </a>
                </section>
            </div>
        </div>
    `;

    const setup_nav = 
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="company_logoBdr" onclick="window.location.hash = page_route_fallback()">
                        <div class="company_logoBox Companylogo">
                            <img loading="eager" src="/images/uvid-logo.png" alt="" class="company_logoImg">
                        </div>
                    </div>
                </section>
                <section class="topNav_section">
                    <button type="button" class="genBtnBox transBtn thin navBarSignOutBtn">
                        <span class="genBtnText">Sign Out</span>
                    </button>
                </section>
            </div>
        </div>
    `;

    const signup_base = 
    `
        <div class="join_fence">
            <div class="join_area"></div>
        </div>
    `;

    const signup_ntc = 
    `
        <div class="join_house signup_n">
            <div class="join_bdr">
                <div class="join_box">
                    <div class="join_outro_bdr">
                        <div class="join_outro_box">
                            <div class="join_plan_hdr_box">
                                <div class="join_plan_hdr_txt_mjr">Before You Dive In</div>
                            </div>
                            <div class="join_outro_det_box">
                                <p class="join_outro_det_txt">
                                    Hi there! I'm <span class="join_outro_det_txt_mjr" onbeforeonload="window.open('https://github.com/ACBennny')">ACBennny</span>,
                                    and thanks for checking out Uvid+.
                                </p>
                                <p class="join_outro_det_txt">
                                    As this may be your first time here, I'd like to remind you that this is a demo of my personal 
                                    project and while it may behave or look like one, it is <strong>NOT</strong> an actual streaming service. 
                                    It merely simulates one.
                                </p>
                                <p class="join_outro_det_txt">
                                    <u>What does this mean?</u>
                                    <br>
                                    Uvid+ does <strong>NOT</strong> and will <strong>NOT</strong> bill you. Thus, it does not require any real information from you 
                                    besides a valid working email for account activites (i.e. setup, management).
                                </p>
                                <p class="join_outro_det_txt">
                                    Visit the
                                    <a class="join_outro_det_txt_mjr" onclick="window.open('#/tou')">Terms of Use</a> 
                                    and 
                                    <a class="join_outro_det_txt_mjr" onclick="window.open('#/privacy')">Privacy Policy</a> 
                                    for more recent details.
                                </p>
                            </div>
                            <div class="join_submit_box space_h">
                                <input type="button" class=" genBtn join_submit_btn join_ntc_btn" value="Got It" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const mbsp_exp_ntc = 
    `
        <div class="join_house mbsp_exp_ntc">
            <div class="join_bdr">
                <div class="join_box">
                    <div class="join_outro_bdr">
                        <div class="join_outro_box">
                            <div class="join_plan_hdr_box">
                                <div class="join_plan_hdr_txt_mjr">Membership Expired</div>
                            </div>
                            <div class="join_outro_det_box">
                                <p class="join_outro_det_txt">
                                    Hello, your Uvid+ membership has expired. 
                                    There's a lot going on in the world of Uvid+ and you certainly don't want to be left out.
                                </p>
                                <p class="join_outro_det_txt">
                                    Hit the button below to get back into the action.
                                </p>
                            </div>
                            <div class="join_submit_box space_h">
                                <input type="button" class=" genBtn join_submit_btn mbsp_exp_ntc_btn" value="Continue" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const signup_vrfy = 
    `
        <div class="join_house signup_vrfy">
            <div class="join_bdr">
                <div class="join_box">
                    <div class="join_outro_bdr">
                        <div class="join_outro_box">
                            <div class="join_plan_hdr_box">
                                <div class="join_plan_hdr_txt_mjr">Email Verification</div>
                            </div>
                            <div class="join_outro_det_box">
                                <p class="join_outro_det_txt">
                                    Your account has been created. However, you will need to verify your email before you can continue.
                                    <br>
                                    A verification link has been set to the registered email. Check your inbox (including spam).
                                </p>
                                <p class="join_outro_det_txt">
                                    After verifying, come back to this page and press 
                                    <span class="join_outro_det_txt_mjr">"Continue"</span> below.
                                </p>
                                <p class="join_outro_det_txt">
                                    Resend verification email in 
                                    <span id="join_rst_cntr" class="join_outro_det_txt_mjr">n/a</span> seconds.
                                </p>
                            </div>
                            <div class="join_submit_box space_h">
                                <input type="button" id="join_rsnd_btn" class="genBtn join_submit_btn" value="Resend" disabled />
                                <input type="button" id="join_vrfy_btn" class="genBtn join_submit_btn" value="Continue" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const signup_intro = 
    `
        <div class="join_house signup_intro">
            <div class="join_intro_bdr">
                <div class="join_intro_box">
                    <div class="join_intro_hdr_box">
                        <div class="join_intro_hdr_txt">Get Streaming in a few easy steps</div>
                    </div>
                    <div class="join_intro_ftr_bdr">
                        <div class="join_intro_ftr_box">
                            <div class="join_intro_ftr_iconBdr">
                                <div class="join_intro_ftr_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="join_intro_ftr_iconSvg">
                                        <circle cx="12" cy="6" r="4" />
                                        <ellipse cx="12" cy="17" rx="7" ry="4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="join_intro_ftr_descBox">
                                <p class="join_intro_ftr_descTxt">Create an account</p>
                            </div>
                            <div class="join_intro_ptr_iconBdr ptr_1">
                                <div class="join_intro_ptr_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="join_intro_ptr_iconSvg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M 511.5,81.5 C 511.5,84.8333 511.5,88.1667 511.5,91.5C 506.306,99.7036 499.306,101.537 490.5,97C 477.667,84.1667 464.833,71.3333 452,58.5C 451.715,107.22 442.715,154.22 425,199.5C 397.46,265.049 349.46,307.049 281,325.5C 262.085,376.066 231.919,418.566 190.5,453C 134.685,494.095 73.0186,506.095 5.5,489C 3.26589,486.937 1.26589,484.771 -0.5,482.5C -0.5,479.167 -0.5,475.833 -0.5,472.5C 2.28026,467.4 6.61359,464.733 12.5,464.5C 90.1077,481.241 154.941,459.908 207,400.5C 224.897,379.228 239.397,355.728 250.5,330C 206.362,332.725 166.695,321.058 131.5,295C 92.2862,260.974 81.1196,219.474 98,170.5C 121.076,124.04 158.576,102.54 210.5,106C 247.62,114.119 274.453,135.286 291,169.5C 301.208,200.94 303.208,232.94 297,265.5C 295.377,275.158 293.21,284.658 290.5,294C 305.893,289.806 320.227,283.139 333.5,274C 372.063,245.096 397.897,207.263 411,160.5C 420.257,127.107 424.924,93.1068 425,58.5C 411.529,70.9705 398.362,83.8038 385.5,97C 376.397,101.847 369.564,99.6799 365,90.5C 364.262,86.7387 364.595,83.0721 366,79.5C 386.833,58.6667 407.667,37.8333 428.5,17C 435.664,13.4987 442.664,13.832 449.5,18C 470.759,38.7573 491.426,59.9239 511.5,81.5 Z M 186.5,131.5 C 222.537,131.037 249.037,146.704 266,178.5C 273.133,199.942 275.466,221.942 273,244.5C 270.958,263.377 267.125,281.877 261.5,300C 225.952,307.011 192.285,301.345 160.5,283C 133.678,266.487 118.678,242.487 115.5,211C 120.398,167.608 144.065,141.108 186.5,131.5 Z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="join_intro_ftr_bdr">
                        <div class="join_intro_ftr_box">
                            <div class="join_intro_ftr_iconBdr">
                                <div class="join_intro_ftr_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="join_intro_ftr_iconSvg">
                                        <path d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358" />
                                        <path fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="join_intro_ftr_descBox">
                                <p class="join_intro_ftr_descTxt">Choose your plan</p>
                            </div>
                            <div class="join_intro_ptr_iconBdr ptr_2">
                                <div class="join_intro_ptr_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="join_intro_ptr_iconSvg">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M 511.5,81.5 C 511.5,84.8333 511.5,88.1667 511.5,91.5C 506.306,99.7036 499.306,101.537 490.5,97C 477.667,84.1667 464.833,71.3333 452,58.5C 451.715,107.22 442.715,154.22 425,199.5C 397.46,265.049 349.46,307.049 281,325.5C 262.085,376.066 231.919,418.566 190.5,453C 134.685,494.095 73.0186,506.095 5.5,489C 3.26589,486.937 1.26589,484.771 -0.5,482.5C -0.5,479.167 -0.5,475.833 -0.5,472.5C 2.28026,467.4 6.61359,464.733 12.5,464.5C 90.1077,481.241 154.941,459.908 207,400.5C 224.897,379.228 239.397,355.728 250.5,330C 206.362,332.725 166.695,321.058 131.5,295C 92.2862,260.974 81.1196,219.474 98,170.5C 121.076,124.04 158.576,102.54 210.5,106C 247.62,114.119 274.453,135.286 291,169.5C 301.208,200.94 303.208,232.94 297,265.5C 295.377,275.158 293.21,284.658 290.5,294C 305.893,289.806 320.227,283.139 333.5,274C 372.063,245.096 397.897,207.263 411,160.5C 420.257,127.107 424.924,93.1068 425,58.5C 411.529,70.9705 398.362,83.8038 385.5,97C 376.397,101.847 369.564,99.6799 365,90.5C 364.262,86.7387 364.595,83.0721 366,79.5C 386.833,58.6667 407.667,37.8333 428.5,17C 435.664,13.4987 442.664,13.832 449.5,18C 470.759,38.7573 491.426,59.9239 511.5,81.5 Z M 186.5,131.5 C 222.537,131.037 249.037,146.704 266,178.5C 273.133,199.942 275.466,221.942 273,244.5C 270.958,263.377 267.125,281.877 261.5,300C 225.952,307.011 192.285,301.345 160.5,283C 133.678,266.487 118.678,242.487 115.5,211C 120.398,167.608 144.065,141.108 186.5,131.5 Z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="join_intro_ftr_bdr">
                        <div class="join_intro_ftr_box">
                            <div class="join_intro_ftr_iconBdr">
                                <div class="join_intro_ftr_iconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="join_intro_ftr_iconSvg">
                                        <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="join_intro_ftr_descBox">
                                <p class="join_intro_ftr_descTxt">Confirm your subscription and commence your never-ending entertainment.</p>
                            </div>
                        </div>
                    </div>
                    <div class="join_submit_box space_h">
                        <input type="button" class=" genBtn join_submit_btn join_intro_submitBtn" value="Get Started" />
                    </div>
                </div>
            </div>
        </div>
    `;

    const signup_1 = 
    `
        <div class="join_house signup_1">
            <div class="join_bdr">
                <div class="join_box">

                    <!-- Sign Up Form -->
                    <div class="join_formBox active signUp_FormBox ">
                        <form action="#" name="signUpForm" id="signUp_form" class="join_form signUp">
                            <div class="form_ctnt">

                                <!-- title -->
                                <div class="form_title_box">
                                    <h2 class="form_title">Create your Account</h2>
                                </div>

                                <!-- Form Fields -->
                                <div class="form_inputArea">

                                    <!-- Fullname -->
                                    <div class="form_input_bdr">
                                        <label for="form_signUp_fullname" class="form_input_nameBox">
                                            <div class="form_input_name">Fullname</div>
                                        </label>
                                        <div class="form_input_box">
                                            <input type="text" id="form_signUp_fullname" class="form_input_field" placeholder="Enter your fullname" required>
                                        </div>

                                        <!-- warning/error -->
                                        <div class="form_input_warn" id="form_signUp_fullnameWarn"></div>
                                    </div>

                                    <!-- Email -->
                                    <div class="form_input_bdr">
                                        <label for="form_signUp_email" class="form_input_nameBox">
                                            <div class="form_input_name">Email</div>
                                        </label>
                                        <div class="form_input_box">
                                            <input type="email" id="form_signUp_email" class="form_input_field" placeholder="Enter your email" required>
                                        </div>

                                        <!-- warning/error -->
                                        <div class="form_input_warn" id="form_signUp_emailWarn"></div>
                                    </div>

                                    <!-- Password -->
                                    <div class="form_input_bdr form_Pass_input_bdr">
                                        <label for="form_signUp_pass" class="form_input_nameBox">
                                            <div class="form_input_name">Password</div>
                                        </label>
                                        <div class="form_input_box form_PassBox">
                                            <input type="password" id="form_signUp_pass" class="form_input_field form_Pass" placeholder="Enter a password" required>
                                            <label for="form_signUp_pass" class="togglePass_btn togglePass_iconBdr">
                                                <div class="togglePass_iconBox pass_open">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="togglePass_iconSvg">
                                                        <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                                                        <path fill-rule="evenodd" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div class="togglePass_iconBox pass_close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="togglePass_iconSvg">
                                                        <path fill-rule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </label>
                                        </div>

                                        <!-- Password Conditons -->
                                        <div class="form_condBox">
                                            <div class="cond_title">
                                                Password must contain:
                                            </div>
                                            <ul class="cond_list">
                                                <li class="cond_listItem">
                                                    <div class="listItem_ctnt passLength badCond">
                                                        <span class="listItem_ctntIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="passCondSvg goodCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="passCondSvg badCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span class="lisItem_ctntText">
                                                            At least 8 characters
                                                        </span>
                                                    </div>
                                                </li>
                                                <li class="cond_listItem">
                                                    <div class="listItem_ctnt passLetterUpr badCond">
                                                        <span class="listItem_ctntIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="passCondSvg goodCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="passCondSvg badCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span class="lisItem_ctntText">
                                                            An uppercase letters [A - Z]
                                                        </span>
                                                    </div>
                                                </li>
                                                <li class="cond_listItem">
                                                    <div class="listItem_ctnt passLetterLwr badCond">
                                                        <span class="listItem_ctntIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="passCondSvg goodCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="passCondSvg badCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span class="lisItem_ctntText">
                                                            A lowercase letter [a-z]
                                                        </span>
                                                    </div>
                                                </li>
                                                <li class="cond_listItem">
                                                    <div class="listItem_ctnt passNumber badCond">
                                                        <span class="listItem_ctntIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="listItem_ctntSvg goodCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="listItem_ctntSvg badCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span class="lisItem_ctntText">
                                                            A number [0 - 9]
                                                        </span>
                                                    </div>
                                                </li>
                                                <li class="cond_listItem">
                                                    <div class="listItem_ctnt passSpecChar badCond">
                                                        <span class="listItem_ctntIcon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="listItem_ctntSvg goodCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="listItem_ctntSvg badCondSvg">
                                                                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span class="lisItem_ctntText">
                                                            A special character [!@#$\%^&/|*]
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- Terms and Conditions -->
                                    <div class="form_input_bdr tandc">
                                        <div class="form_input_box">
                                            <div class="form_text">
                                                <p>
                                                    By pressing "Agree &  Continue", 
                                                    <br>
                                                    you acknowledge you have read, understood, and agree to both the
                                                    <div>
                                                        <a href="#/tou" class="form_links" target="_blank">Terms of Use</a> 
                                                        and
                                                        <a href="#/privacy" class="form_links" target="_blank">Privacy policy</a>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Sign Up button -->
                                    <div class="form_input_bdr">
                                        <div class="join_submit_box">
                                            <input type="button" class="genBtn join_submit_btn form_SignUp" id="signUp_btn" value="Agree & Continue">
                                        </div>
                                    </div>

                                    <!-- Contact us if you have any issues -->
                                    <div class="form_input_bdr">
                                        <div class="form_input_box">
                                            <div class="form_text">
                                                <span>Experiencing any issues?</span>
                                                <span class="form_links">
                                                    <a href="#/help" class="form_links" target="_blank">Let us know</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    const signup_2 = 
    `
        <div class="join_house signup_2">
            <div class="join_bdr">
                <div class="join_box">
                    <div class="join_plan_bdr">
                        <div class="join_plan_box">
                            <div class="join_plan_hdr_box">
                                <div class="join_plan_hdr_txt_mjr">Choose Your Plan</div>
                                <p class="join_plan_hdr_txt_mnr">Select the plan that's right for you</p>
                            </div>
                            <div class="join_plan_sls_bdr">
                                <div class="join_plan_sls_box"></div>
                            </div>
                            <div class="join_plan_ftr_bdr">
                                <ul class="join_plan_ftr_box join_plan_ftr_ul"></ul>
                            </div>
                            <div class="join_plan_ntc_bdr">
                                <div class="join_plan_ntc_box">
                                    <div class="join_plan_ntc_cardBox">
                                        <p class="join_plan_ntc_card_txt">
                                            Device and content availability vary by country or regions.
                                            Not all content are available for download. Download limits may apply.
                                        </p>
                                    </div>
                                    <div class="join_plan_ntc_cardBox">
                                        <p class="join_plan_ntc_card_txt">
                                            Video and audio quality are subject to your internet service and device capabilities. 
                                            Not all content are available in all resolutions.
                                        </p>
                                    </div>
                                    <div class="join_plan_ntc_cardBox">
                                        <p class="join_plan_ntc_card_txt">
                                            All plans include promos for Uvid+ programs. 
                                            Live programs are included with any plan and may contain ads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="join_submit_box space_h">
                                <input type="button" id="join_plan_submitBtn" class=" genBtn join_submit_btn" value="Continue" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const uvid_signup_plans = 
    {
        "estl": 
        {
            plan_name: `Essential`, 
            plan_id: `Estl`, 
            plan_price_month: `$4.99`,
            plan_price_sel: ``, 
            plan_benefits: 
            {
                mnth_price: 
                {
                    bnft_name: `Monthly Price`,
                    bnft_desc: `$4.99`,
                },
                qlty: 
                {
                    bnft_name: `Video and sound quality`,
                    bnft_desc: `Good`,
                },
                rsltn: 
                {
                    bnft_name: `Resolution`,
                    bnft_desc: `HD(720p)`,
                },
                curr_strm: 
                {
                    bnft_name: `Concurrent Streams`,
                    bnft_desc: `1`,
                },
                dwld_dev: 
                {
                    bnft_name: `Download Devices`,
                    bnft_desc: `1`,
                },
                ad: 
                {
                    bnft_name: `Ads`,
                    bnft_desc: `Just a few ads`,
                },
            }, 
        },
        "stnd": 
        {
            plan_name: `Standard`, 
            plan_id: `stnd`, 
            plan_price_month: `$9.99`,
            plan_price_sel: ``, 
            plan_benefits: 
            {
                mnth_price: 
                {
                    bnft_name: `Monthly Price`,
                    bnft_desc: `$9.99`,
                },
                qlty: 
                {
                    bnft_name: `Video and sound quality`,
                    bnft_desc: `Better`,
                },
                rsltn: 
                {
                    bnft_name: `Resolution`,
                    bnft_desc: `Full HD(1080p)`,
                },
                curr_strm: 
                {
                    bnft_name: `Concurrent Streams`,
                    bnft_desc: `3`,
                },
                dwld_dev: 
                {
                    bnft_name: `Download Devices`,
                    bnft_desc: `3`,
                },
                ad: 
                {
                    bnft_name: `Ads`,
                    bnft_desc: `No ads`,
                },
            }, 
        },
        "ultm": 
        {
            plan_name: `Ultimate`, 
            plan_id: `ultm`, 
            plan_price_month: `$14.99`,
            plan_price_sel: ``, 
            plan_benefits: 
            {
                mnth_price: 
                {
                    bnft_name: `Monthly Price`,
                    bnft_desc: `$14.99`,
                },
                qlty: 
                {
                    bnft_name: `Video and sound quality`,
                    bnft_desc: `Best + Spatial Audio`,
                },
                rsltn: 
                {
                    bnft_name: `Resolution`,
                    bnft_desc: `Ultra HD(4K) + HDR`,
                },
                curr_strm: 
                {
                    bnft_name: `Concurrent Streams`,
                    bnft_desc: `5`,
                },
                dwld_dev: 
                {
                    bnft_name: `Download Devices`,
                    bnft_desc: `7`,
                },
                ad: 
                {
                    bnft_name: `Ads`,
                    bnft_desc: `No ads`,
                },
            }, 
        },
    };

    const signup_3_1 = 
    `
        <div class="join_house signup_3_2">
            <div class="join_bdr">
                <div class="join_box">

                    <!-- Payment Form -->
                    <div class="join_formBox active">
                        <form action="#" name="pymt_form" id="pymt_form_id" class="join_form">
                            <div class="form_ctnt">

                                <!-- title -->
                                <div class="join_plan_hdr_box">
                                    <div class="join_plan_hdr_txt_mjr">Confirm Your Subscription</div>
                                    <p class="join_plan_hdr_txt_mnr">No commitments. Cancel anytime.</p>
                                </div>

                                <!-- Form Fields -->
                                <div class="form_inputArea">

                                    <!-- Pymt plans -->
                                    <div class="form_input_bdr">
                                        <div class="form_pymt_mtd_bdr">
                                            <div class="form_pymt_mtd_hdr_bdr">
                                                <div class="form_pymt_mtd_hdr_box">
                                                    <div class="form_pymt_mtd_hdr_ttl_box">
                                                        <div class="form_pymt_mtd_hdr_ttl_txt">Select payment method</div>
                                                    </div>
                                                    <div class="form_pymt_mtd_hdr_atn_box">
                                                        <button type="button" class="genBtnBox darkSolidBtn form_pymt_mtd_hdr_atn_btn">
                                                            <div class="genBtnIcon">
                                                                <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genBtnSvg">
                                                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                                                </svg>
                                                            </div>
                                                            <span class="genBtnText">Add</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form_pymt_mtd_box"></div>
                                        </div>
                                    </div>

                                    <!-- Chosen Plan -->
                                    <div class="form_input_bdr">
                                        <div class="form_plan_bdr"></div>
                                    </div>

                                    <!--- Important Notices --->
                                    <div class="join_plan_ntc_bdr">
                                        <div class="join_plan_ntc_box">
                                            <div class="join_plan_ntc_cardBox">
                                                <p class="join_plan_ntc_card_txt">
                                                    Prices displayed do not include taxes, processing fees, or other addtional bank fees (if applicable).
                                                </p>
                                            </div>
                                            <div class="join_plan_ntc_cardBox">
                                                <p class="join_plan_ntc_card_txt">
                                                    By pressing "Start Membership" you acknowledge you have read, understood, and agree to both the
                                                    <span onclick="window.open('#/tou')"><strong>Terms of Use</strong></span> and 
                                                    <span onclick="window.open('#/privacy')"><strong>Privacy Policy</strong></span>.
                                                    Uvid+ will automatically continue your membership and charge the selected membership fee to  
                                                    your payment method until you cancel. You can cancel at any time to avoid future charges.
                                                    Visit our <span onclick="window.open('#/help')"><strong>Help Center</strong></span> if you have any questions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form_input_bdr tandc"></div>

                                    <!-- Sign Up button -->
                                    <div class="form_input_bdr">
                                        <div class="join_submit_box">
                                            <input type="button" class="genBtn join_submit_btn" id="form_pymt_sbmtBtn" value="Start Membership">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    const signup_3_2 = 
    `
        <div class="join_house signup_3_2">
            <div class="join_bdr">
                <div class="join_box">

                    <!-- Payment Form -->
                    <div class="join_formBox active">
                        <form action="#" name="pymt_form" id="pymt_form_id" class="join_form">
                            <div class="form_ctnt">

                                <!-- title -->
                                <div class="join_plan_hdr_box">
                                    <div class="join_plan_hdr_txt_mjr">Confirm Your Subscription</div>
                                    <p class="join_plan_hdr_txt_mnr">No commitments. Cancel anytime.</p>
                                </div>

                                <!-- Form Fields -->
                                <div class="form_inputArea">

                                    <!-- Card Number -->
                                    <div class="form_input_bdr">
                                        <label for="form_pymt_cardNum" class="form_input_nameBox">
                                            <div class="form_input_name">Card Number</div>
                                        </label>
                                        <div class="form_input_box">
                                            <input type="text" id="form_pymt_cardNum" class="form_input_field" placeholder="1234 5678 9123 4567" maxlength="19" inputmode="numeric" pattern="\d*" required>
                                        </div>

                                        <!-- warning/error -->
                                        <div class="form_input_warn" id="form_pymt_cardNumWarn"></div>
                                    </div>

                                    <!-- Expiry date -->
                                    <div class="form_input_bdr">
                                        <label for="form_pymt_cardExp" class="form_input_nameBox">
                                            <div class="form_input_name">Expiry date</div>
                                        </label>
                                        <div class="form_input_box">
                                            <input type="text" id="form_pymt_cardExp" class="form_input_field" placeholder="MM/YY" maxlength="5" inputmode="numeric" pattern="\d*" required>
                                        </div>

                                        <!-- warning/error -->
                                        <div class="form_input_warn" id="form_pymt_cardExpWarn"></div>
                                    </div>

                                    <!-- Security Code -->
                                    <div class="form_input_bdr">
                                        <label for="form_pymt_cardSec" class="form_input_nameBox">
                                            <div class="form_input_name">CVV/CVC</div>
                                        </label>
                                        <div class="form_input_box form_PassBox">
                                            <input type="password" id="form_pymt_cardSec" class="form_input_field form_Pass" placeholder="••••" maxlength="4" inputmode="numeric" pattern="\d*" required>
                                        </div>

                                        <!-- warning/error -->
                                        <div class="form_input_warn" id="form_pymt_cardSecWarn"></div>
                                    </div>

                                    <!-- Card Name -->
                                    <div class="form_input_bdr">
                                        <label for="form_pymt_cardName" class="form_input_nameBox">
                                            <div class="form_input_name">Card Name</div>
                                        </label>
                                        <div class="form_input_box">
                                            <input type="text" id="form_pymt_cardName" class="form_input_field" placeholder="Enter full name on Card" maxlength="250" required>
                                        </div>

                                        <!-- warning/error -->
                                        <div class="form_input_warn" id="form_pymt_cardNameWarn"></div>
                                    </div>

                                    <!-- Chosen Plan -->
                                    <div class="form_input_bdr">
                                        <div class="form_plan_bdr"></div>
                                    </div>

                                    <!--- Important Notices --->
                                    <div class="join_plan_ntc_bdr">
                                        <div class="join_plan_ntc_box">
                                            <div class="join_plan_ntc_cardBox">
                                                <p class="join_plan_ntc_card_txt">
                                                    Prices displayed do not include taxes, processing fees, or other addtional bank fees (if applicable).
                                                </p>
                                            </div>
                                            <div class="join_plan_ntc_cardBox">
                                                <p class="join_plan_ntc_card_txt">
                                                    By pressing "Start Membership" you acknowledge you have read, understood, and agree to both the
                                                    <span onclick="window.open('#/tou')"><strong>Terms of Use</strong></span> and 
                                                    <span onclick="window.open('#/privacy')"><strong>Privacy Policy</strong></span>.
                                                    Uvid+ will automatically continue your membership and charge the selected membership fee to  
                                                    your payment method until you cancel. You can cancel at any time to avoid future charges.
                                                    Visit our <span onclick="window.open('#/help')"><strong>Help Center</strong></span> if you have any questions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form_input_bdr tandc"></div>

                                    <!-- Sign Up button -->
                                    <div class="form_input_bdr">
                                        <div class="join_submit_box">
                                            <input type="button" class="genBtn join_submit_btn" id="form_pymt_sbmtBtn" value="Start Membership">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    const signup_outro = 
    `
        <div class="join_fence" style="z-index: 125;">
            <div class="join_area">
                <div class="join_house signup_outro">
                    <div class="join_bdr">
                        <div class="join_box">
                            <div class="join_outro_bdr">
                                <div class="join_outro_box">
                                    <div class="join_plan_hdr_box">
                                        <div class="join_plan_hdr_txt_mjr">Welcome to Uvid+!</div>
                                    </div>
                                    <div class="join_outro_det_box">
                                        <p class="join_outro_det_txt">
                                            Your Uvid+ membership has begun. It will automatically continue at the end of every
                                            billing cycle (30 days). You may cancel before this time to avoid getting charged.
                                        </p>
                                        <p class="join_outro_det_txt">
                                            If you're loving the Uvid+ experience, then there's no need to take any action.
                                        </p>
                                        <p class="join_outro_det_txt">
                                            <span class="join_outro_det_txt_mjr">Your NEVER-ENDING ENTERTAINMENT STARTS NOW!</span>
                                        </p>
                                    </div>
                                    <div class="join_submit_box space_h">
                                        <input type="button" class=" genBtn join_submit_btn join_outro_btn" value="Explore" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    `;




