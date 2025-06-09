/*************************************************************
 * This is the script for the landing page of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



    const landingHTML =
    `
        <!-- Welcome -->
        <div class="welcome_landBcg">
            <div class="welcome_landBdr">
                <div class="welcome_landBox">
                    <div class="welcome_landTextMajorBox">
                        <h1 class="welcome_landTextMajor"><span>N</span>ever-Ending <span>E</span>ntertainment</h1>
                    </div>
                    <div class="welcome_landTextMinorBox">
                        <p class="welcome_landTextMinor">
                            Watch a boundless haven of movies, TV shows and tons more 
                            with our unmatched streaming services.
                            <br>
                            Starts <strong>$4.99</strong>. Cancel Anytime. Terms Apply.
                            <br>
                            <!-- New Member? Start your 10 day free trial. -->
                        </p>
                    </div>
                    <div class="propmpt_AccActionBdr">
                        <div class="propmpt_AccActionBox">
                            <a href="#/signup" target="_self" type="button" class="propmpt_AccActionBtnBox action_Join">Sign Up for Uvid+</a>
                            <a href="#/signin" target="_self" type="button" class="propmpt_AccActionBtnBox action_GetPremium">Sign In with Uvid+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="welcome_landBcgImgBox">
                <img loading="lazy" onload="this.classList.add('loaded')" src="/images/uvid-bcg0.jpg" alt="background image of Uvid+" class="welcome_landBcgImg">
            </div>
        </div>

        <!-- Features -->
        <div class="feature_ItemsBcg">
            <div class="feature_ItemsBdr">
                <div class="feature_ItemsBox">
                    <div class="feature_TitleBox">
                        <h1 class="ftrTitle">Get More From Your Membership</h1>
                        <p class="ftrSubTitle">
                            Just a few out of many features included in your package
                        </p>
                    </div>
                    <div class="feature_ItemsContainer">
                        <div class="feature_cardBaseBdr">
                            <div class="feature_cardBaseBox">
                                <div class="feature_card feature_cardFront">
                                    <div class="feature_cardCtnt">
                                        <h3 class="feature_header">
                                            <span class="fh_Major">U</span>
                                            <span class="fh_Minor">nlimited</span>
                                        </h3>
                                        <p class="feature_body">
                                            Stream continuously without end in our ever growing library of shows
                                            with new shows added every week.
                                        </p>
                                    </div>
                                </div>
                                <div class="feature_card feature_cardUnder">
                                </div>
                            </div>
                        </div>
                        <div class="feature_cardBaseBdr">
                            <div class="feature_cardBaseBox">
                                <div class="feature_card feature_cardFront">
                                    <div class="feature_cardCtnt">
                                        <h3 class="feature_header">
                                            <span class="fh_Major">M</span>
                                            <span class="fh_Minor">ultifarious</span>
                                        </h3>
                                        <p class="feature_body">
                                            Get hooked up on countless categories and genres of shows 
                                            each one made to suite your taste and preference.
                                        </p>
                                    </div>
                                </div>
                                <div class="feature_card feature_cardUnder">
                                </div>
                            </div>
                        </div>
                        <div class="feature_cardBaseBdr">
                            <div class="feature_cardBaseBox">
                                <div class="feature_card feature_cardFront">
                                    <div class="feature_cardCtnt">
                                        <h3 class="feature_header">
                                            <span class="fh_Major">O</span>
                                            <span class="fh_Minor">ffline View</span>
                                        </h3>
                                        <p class="feature_body">
                                            No signal? No network? We got you covered!
                                            Save your favourite shows and watch them anywhere, anytime.
                                        </p>
                                    </div>
                                </div>
                                <div class="feature_card feature_cardUnder">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="give_space"></div>
        <div class="give_space"></div>

        <!-- Device Support -->
        <div class="streamBase">
            <div class="streamBdr">
                <div class="streamBox">
                    <div class="streamHeader">
                        <h1 class="streamTitle">
                            Watch Everywhere
                        </h1>
                        <p class="streamSubTitle">
                            Stream unlimited movies and TV shows on your TV, laptops, tablets and phones.
                        </p>
                    </div>
                    <div class="streamSampleBdr">
                        <div class="streamSampleBox">
                            <img loading="eager" src="/images/uvid-device-support.png" alt="" class="streamSampleImg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="give_space"></div>
        <div class="give_space"></div>

        <!-- FAQ -->
        <div class="questions_base">
            <div class="questions_bdr">
                <div class="questions_box">
                    <div class="questions_Header">Frequently Asked Questions</div>
                    <div class="questions_Body">
                        <div class="questions_Card">
                            <button type="button" class="questions_CardBtn" aria-expanded="false">
                                <h4 class="questions_CardAsk">
                                    <span class="qca_Major">W</span>
                                    <span class="qca_Minor">hat is Uvid+?</span>
                                </h4>
                                <div class="questions_CardIconBox">
                                    <span class="questions_CardIcon"></span>
                                </div>
                            </button>
                            <div class="questions_CardTextBox">
                                <p class="questions_CardText">
                                    Uvid+ is just one of many streaming services that presents people the opportunity
                                    to watch a haven full of diverse movies, TV Shows, anime and cartoon shows for the kids.
                                </p>
                            </div>
                        </div>
                        <div class="questions_Card">
                            <button type="button" class="questions_CardBtn" aria-expanded="false">
                                <h4 class="questions_CardAsk">
                                    <span class="qca_Major">W</span>
                                    <span class="qca_Minor">hat can I watch?</span>
                                </h4>
                                <div class="questions_CardIconBox">
                                    <span class="questions_CardIcon"></span>
                                </div>
                            </button>
                            <div class="questions_CardTextBox">
                                <p class="questions_CardText">
                                    There is a huge range of shows to watch on Uvid+. 
                                    You can watch movies, TV Shows, anime, and cartoon shows.
                                </p>
                            </div>
                        </div>
                        <div class="questions_Card">
                            <button type="button" class="questions_CardBtn" aria-expanded="false">
                                <h4 class="questions_CardAsk">
                                    <span class="qca_Major">W</span>
                                    <span class="qca_Minor">here can I watch?</span>
                                </h4>
                                <div class="questions_CardIconBox">
                                    <span class="questions_CardIcon"></span>
                                </div>
                            </button>
                            <div class="questions_CardTextBox">
                                <p class="questions_CardText">
                                    Uvid+ is going big on it's device support plan. 
                                    <br>
                                    You can watch Uvid+ shows on a wide range of devices
                                    including phones, tablets, laptops, desktops, and TV.
                                    <br><br>
                                    We are working hard to bring Uvid+ to you on your favourite game consoles.
                                    Stay tuned!
                                </p>
                            </div>
                        </div>
                        <div class="questions_Card">
                            <button type="button" class="questions_CardBtn" aria-expanded="false">
                                <h4 class="questions_CardAsk">
                                    <span class="qca_Major">I</span>
                                    <span class="qca_Minor">s Uvid+ free?</span>
                                </h4>
                                <div class="questions_CardIconBox">
                                    <span class="questions_CardIcon"></span>
                                </div>
                            </button>
                            <div class="questions_CardTextBox">
                                <p class="questions_CardText">
                                    Uvid+ is not free but a paid subscription service. However, when offered, new members may get it free* for a limited trial period of 10 days after which you're billing period starts.
                                    <br>
                                    We will remind you up to 3 days before your trial ends. You can cancel anytime. Terms Apply.
                                </p>
                            </div>
                        </div>
                        <div class="questions_Card">
                            <button type="button" class="questions_CardBtn" aria-expanded="false">
                                <h4 class="questions_CardAsk">
                                    <span class="qca_Major">H</span>
                                    <span class="qca_Minor">ow much is Uvid+?</span>
                                </h4>
                                <div class="questions_CardIconBox">
                                    <span class="questions_CardIcon"></span>
                                </div>
                            </button>
                            <div class="questions_CardTextBox">
                                <p class="questions_CardText">
                                    Stream unlimited movies, TV Shows, Animes and Cartoon shows for a fixed monthly price.
                                    <br>
                                    Uvid+ presents three different bundles all at different prices ranging from $4.99 to $14.99.
                                </p>
                            </div>
                        </div>
                        <div class="questions_Card">
                            <button type="button" class="questions_CardBtn" aria-expanded="false">
                                <h4 class="questions_CardAsk">
                                    <span class="qca_Major">I</span>
                                    <span class="qca_Minor">s Uvid+ kid friendly?</span>
                                </h4>
                                <div class="questions_CardIconBox">
                                    <span class="questions_CardIcon"></span>
                                </div>
                            </button>
                            <div class="questions_CardTextBox">
                                <p class="questions_CardText">
                                    Yes of course, Uvid+ allows families to enjoy shows together with simple and easy to use parental controls.
                                    <br>
                                    Parents can create and manage profiles for their kids at no extra cost**.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="questions_footerBox">
                        <p>
                            * This only applies to new members and does not include all features.
                        </p>
                        <p>
                            ** Profiles are bound to a single account.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="give_space"></div>

        <!-- Prompt Register -->
        <div class="prompt_regBase">
            <div class="prompt_regBdr">
                <div class="prompt_regBox">
                    <div class="prompt_regText">
                        <span>What are you waiting for?</span> 
                        <span>Get started Today</span>
                    </div>
                    <div class="propmpt_AccActionBdr">
                        <div class="propmpt_AccActionBox">
                            <a href="#/signup" target="_self" type="button" class="propmpt_AccActionBtnBox action_Join">Sign Up for Uvid+</a>
                            <a href="#/signin" target="_self" type="button" class="propmpt_AccActionBtnBox action_GetPremium">Sign In with Uvid+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="give_space"></div>
    `;
    const landing_nav = 
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
                        <span class="genBtnText">sign In</span>
                    </a>
                </section>
            </div>
        </div>
    `;


    function initialiseLanding()
    {

        // INITIALISATION

            documentCtnt.insertAdjacentHTML(`beforeend` , landingHTML);
            topNavBar.innerHTML = landing_nav;
            topNavBar.classList.add("initialize");
        

        // DEFINITION

            let backtotopBtn = document.querySelectorAll(".backtotop_btn");
            const faqBtns = document.querySelectorAll(".questions_CardBtn");
            const faqAnswers = document.querySelectorAll(".questions_Card");



        // FREQUENTLY ASKED QUESTIONS


            faqBtns.forEach((btn, b) => 
            {
                btn.addEventListener("click" , () => 
                {
            
                    if(faqAnswers[b].classList.contains("active"))
                    {
                        btn.ariaExpanded = false;
                        faqAnswers[b].classList.remove("active");
                    }
                    else
                    {
                        faqBtns.forEach(otherBtn => 
                        {
                            otherBtn.ariaExpanded = false;
                        });
                        faqAnswers.forEach(otherBox => 
                        {
                            otherBox.classList.remove("active");
                        });
                        btn.ariaExpanded = true;
                        faqAnswers[b].classList.add("active");
                    }
                });
                
            });
    }





