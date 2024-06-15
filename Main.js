/**********************************************************************************************************
 * This is the general script file of Uvid
 * From here, all general actions performed all over the website are written here
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



// DEFINITION

    const documentBody = document.body;
    const documentTitle = document.title;
    const preload = document.querySelector("#preloader");
    const developerLink = "https://acbennny.netlify.app";
    const navBarHTML = 
    `
        <div class="navBox">
            <div class="navBar">
                <div class="navBarLeft">
                    <div class="navBarIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarIcon open_nav_menu">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
                    <div class="Companylogo navBarCompanylogo">
                        <h1 class="lhead">U</h1>
                        <h1 class="lname">vid</h1>
                    </div>
                </div>
                <div class="navBarCenter navBarSearchBdr"></div>
                <div class="navBarRight">
                    <div class="headname" title="">
                        <h1 class="hd1"></h1>
                        <h1 class="hd2"></h1>
                    </div>
                    <div class="navBarRightCtnt">
                        <div class="navBarIconBox openNavSearch_BtnBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarIcon openNavSearch_Btn">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </div>
                        <div class="navBarIconBox openNavNotifyBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="navBarIcon openNavNotify notify_atv">
                                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="navBarIcon closeNavNotify ">
                                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                            </svg>
                        </div>
                        <div class="navBarProfileBdr">
                            <div class="navBarProfileBox open_nav_profileOptions">
                                <div class="navBarProfileImageBox">
                                    <img src="/Images/Uvid_profilebase.png" alt="Profile Image" class="navBarProfileImage" loading="eager">
                                </div>
                                <div class="navBarProfileOptBdr">
                                    <div class="navBarProfileOptBox">
                                        <button class="navBarProfileOpt">
                                            <div class="navBarProfileInfoBox">
                                                <div class="navBarProfileBox">
                                                    <div class="navBarProfileImageBox">
                                                        <img src="/Images/Uvid_profilebase.png" alt="Profile Image" class="navBarProfileImage" loading="eager">
                                                    </div>
                                                </div>
                                                <div class="navBarProfileNameBox">
                                                    <p class="navBarProfileName">acbennny</p>
                                                </div>
                                            </div>
                                        </button>
                                        <button class="navBarProfileOpt">
                                            <a href="javascript:void(0)" class="navBarProfileOptLink open_switchProf">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarProfileOptLinkIcon">
                                                    <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
                                                </svg>
                                                <p class="navBarProfileOptLinkText">Switch Profile</p>
                                            </a>
                                        </button>
                                        <button class="navBarProfileOpt">
                                            <a href="/Account.html" class="navBarProfileOptLink">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarProfileOptLinkIcon">
                                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                                </svg>
                                                <p class="navBarProfileOptLinkText">Account</p>
                                            </a>
                                        </button>
                                        <button class="navBarProfileOpt">
                                            <a href="/Settings.html" class="navBarProfileOptLink">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarProfileOptLinkIcon">
                                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                                                </svg>
                                                <p class="navBarProfileOptLinkText">Help</p>
                                            </a>
                                        </button>
                                        <button class="navBarProfileOpt">
                                            <a href="javascript:void(0)" class="navBarProfileOptLink">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarProfileOptLinkIcon">
                                                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/>
                                                </svg>
                                                <p class="navBarProfileOptLinkText">Sign Out</p>
                                            </a>
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
    const footerHTML = 
    `
        <div class="give_space"></div>
        <footer class="footer_base">
            <div class="footer_bdr">
                <div class="footer_box">
                    <div class="footer_boxCtnt footer_logoBox">
                        <div class="Companylogo footer_logo">
                            <h1 class="lhead">U</h1>
                            <h1 class="lname">vid</h1>
                        </div>
                    </div>
                    <div class="footer_boxCtnt footer_abt">
                        <div class="footer_abt_titleBox">
                            <h4 class="footer_abt_title front">A</h4>
                            <h4 class="footer_abt_title back">bout Us</h4>
                        </div>
                        <div class="footer_abt_textBox">
                            <p class="footer_abt_text">
                                Uvid is an online streaming platform tailored with providing the best streaming experience.
                                <br><br>
                                Here you can watch from a vast library of movies, tv shows, anime and even cartoon shows for the kids.
                            </p>
                        </div>
                        <div class="footer_Important_linksBox">
                            <a href="/Policies/PrefCenter.html" title="Preferences" class="footerlinks footer_Important_links">Preferences</a>
                            <a href="/Policies/Privacy.html" title="Privacy" class="footerlinks footer_Important_links">Privacy</a>
                            <a href="/Policies/TOC.html" title="Terms of Use" class="footerlinks footer_Important_links">Terms of Use</a>
                        </div>
                    </div>
                    <div class="footer_boxCtnt footer_OtherLinks">
                        <div class="footer_abt_titleBox">
                            <h4 class="footer_abt_title front">U</h4>
                            <h4 class="footer_abt_title back">seful Links</h4>
                        </div>
                        <div class="footer_UsefulLinksBdr">
                            <div class="footer_UsefulLinksBox">
                                <a href="/FAQ.html" title="Frequently Asked Questions" class="footerlinks footer_UsefulLinks">FAQ</a>
                                <a href="/Help.html" title="Help Center" class="footerlinks footer_UsefulLinks">Help Center</a>
                                <a href="/Feeback.html" title="Feedback" class="footerlinks footer_UsefulLinks">Feedback</a>
                                <a href="/Support.html" title="Support Us" class="footerlinks footer_UsefulLinks">Support Us</a>
                            </div>
                            <div class="footer_UsefulLinksBox">
                                <a href="/About.html#contact" title="Contact Us" class="footerlinks footer_UsefulLinks">Contact Us</a>
                                <a href="/Policies/Preference.html#cookies" title="Cookies" class="footerlinks footer_UsefulLinks">Cookies</a>
                                <a href="/AdChoices.html" title="Ad Choices" class="footerlinks footer_UsefulLinks">Ad Choices</a>
                                <a href="/Policies/CopyrightsAct.html" title="Copyrights Act" class="footerlinks footer_UsefulLinks">Copyrights Act</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="backtotopofpageBox">
                    <div class="backtotop backtotop_btn" title="Go to top" draggable="false">
                        <div class="backtotop_IconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="backtotop_Icon">
                                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                            </svg>
                        </div>
                        <div class="backtotop_textBox">
                            <span class="backtotop_text">Top</span>
                        </div>
                    </div>
                </div>
                <div class="developer_creditsBdr">
                    <div class="developer_creditsBox">
                        <div class="developer_creditsText">
                            Designed by <span class="developer_creditsName developer_profile">acbennny</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    let notificationQueue = [];
    let isNotificationActive = false;
    let preNotifyTimer;
    let midNotifyTimer;
    let endNotifyTimer;


    // NOTIFICATION POPUP

        function showNextNotification() 
        {
            if (notificationQueue.length === 0) 
            {
                isNotificationActive = false;
                return;
            }
        
            const { noteCtnt, resolve } = notificationQueue.shift(); // Get the next notification from the queue
        
            const btnNotifyBdr = document.createElement('div');
            const btnNotify = document.createElement('div');
            btnNotifyBdr.classList.add("notifyBdr");
            btnNotify.classList.add("NotifyMe");
            btnNotifyBdr.appendChild(btnNotify);
            btnNotify.textContent = noteCtnt;
        
            document.body.appendChild(btnNotifyBdr);
            // Ensures the element is added to the DOM before adding the class
            requestAnimationFrame(() => 
            { 
                preNotifyTimer = setTimeout(() => 
                {
                    btnNotifyBdr.classList.add('NotifyAtv');
                    clearTimeout(preNotifyTimer);
                }, 300);
            });
        
            isNotificationActive = true;
            endNotifyTimer = setTimeout(() => 
            {
                clearTimeout(endNotifyTimer);
                btnNotifyBdr.classList.remove('NotifyAtv');
                midNotifyTimer = setTimeout(() => 
                {
                    clearTimeout(midNotifyTimer);
                    document.body.removeChild(btnNotifyBdr);
                    resolve(); 
                    showNextNotification();
                }, 300);
            }, 6500);
        }

        function notification(noteCtnt) 
        {
            return new Promise((resolve) => 
            {
                notificationQueue.push({ noteCtnt, resolve });
                if (!isNotificationActive) 
                {
                    // If no notification is active, show the next one immediately
                    showNextNotification(); 
                }
            });
        }


    // ADDING/REMOVING EVENTLISTENERS FOR FUNCTIONS
    
        function addListener(theElem, theEv, theFunc)
        {
            theElem.forEach((event) => 
            {
                event.addEventListener(`${theEv}` , theFunc);
            });
        }
        function removeListener(theElem, theEv, theFunc)
        {
            theElem.forEach((event) => 
            {
                event.removeEventListener(`${theEv}` , theFunc);
            });
        }



    // PRELOADER
        
        window.addEventListener("load", () => 
        {
            preload.classList.add("preloadClose");
            document.body.classList.add('bodystart');
            startApplication();
        });
    

    function startApplication()
    {
        
        // INSERT
            
            // Insert Navbar
            document.body.insertAdjacentHTML(`afterbegin` , navBarHTML);
            
            // Insert Footer
            document.body.insertAdjacentHTML(`beforeend` , footerHTML);


        // DEFINITION

            let navBar = document.querySelector(".navBar");
            let navBarHeadName = document.querySelector(".navBar .headname");
            let goToHomePage = document.querySelectorAll(".Companylogo");
            let openNavProfileOptions = document.querySelector(".open_nav_profileOptions");
            let navProfileOptionsBdr = document.querySelector(".navBarProfileOptBdr");
            let navMenuIcon = document.querySelectorAll(".open_nav_menu");
            let navMenuTimer;
            let locationOrigin;
            let openNavSearchBar = document.querySelector(".openNavSearch_Btn");
            let closeNavNotificationBarBtn = document.querySelector(".closeNavNotify");
            let openNavNotificationBarBtn = document.querySelector(".openNavNotify");
            let backtotopBtn = document.querySelectorAll(".backtotop_btn");
            let developerProfile = document.querySelectorAll(".developer_profile");
            let navNotificationBarTimer;
            let openSwitchProfBtn = document.querySelector(".open_switchProf");
            let switchProfScript;
            let allImg = document.querySelectorAll('img');
            let allImgTags = document.querySelectorAll('.allImgTags');
            let allLinks = document.querySelectorAll("a");
            let socialShareLink = encodeURI(window.location.href);
            let socialShareTitle = encodeURIComponent(documentTitle);
            let socialShareMsg = `Check out ${socialShareTitle}`;
            let socialShareHTML = 
            `
                <div class="genAtnModalBcg closeSclShare"></div>
                <div class="genAtnModalBox sclShareBox">
                    <div class="genAtnModalCtnt">
                        <div class="genAtnModalHeader">
                            <div class="genAtnModalHeaderIconBox closeSclShare">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>
                            <h3 class="genAtnModalHeaderText">
                            <span class="large">S</span>
                            <span class="small">hare this Show</span>
                            </h3>
                        </div>
                        <div class="genAtnModalOptBcg">
                            <div class="genAtnModalOptBdr">
                                <button data-share="Facebook" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="share-modal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="facebook-logo-svg" aria-labelledby="facebook-logo-svg" aria-hidden="true" role="img"><title id="facebook-logo-svg">Facebook</title><defs><rect id="facebook-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="facebook-logo-b" fill="#fff"><use href="#facebook-logo-a"></use></mask><circle cx="32" cy="32" r="32" fill="#3C5A9A" fill-rule="nonzero" mask="url(#facebook-logo-b)"></circle><path fill="#FFF" fill-rule="nonzero" d="M39.976 15h-5.434c-3.225 0-6.811 1.356-6.811 6.03.015 1.63 0 3.189 0 4.944H24v5.937h3.846V49h7.067V31.798h4.665l.422-5.84h-5.208s.011-2.598 0-3.353c0-1.847 1.922-1.741 2.037-1.741.915 0 2.693.003 3.15 0V15h-.003z" mask="url(#facebook-logo-b)"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Facebook</span>
                                    </div>
                                </button>
                                <button data-share="Twitter" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="twitter-logo-svg" aria-labelledby="twitter-logo-svg" aria-hidden="true" role="img"><title id="twitter-logo-svg">Twitter</title><defs><rect id="twitter-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="twitter-logo-b" fill="#fff"><use href="#twitter-logo-a"></use></mask><g fill="#1B9DF0" fill-rule="nonzero" mask="url(#twitter-logo-b)"><circle cx="32" cy="32" r="32"></circle></g><g fill="#FFF" fill-rule="nonzero" mask="url(#twitter-logo-b)"><path d="M26.144 48.88c14.192 0 21.952-11.76 21.952-21.952 0-.336 0-.672-.016-.992 1.504-1.088 2.816-2.448 3.856-4-1.376.608-2.864 1.024-4.432 1.216 1.6-.96 2.816-2.464 3.392-4.272-1.488.88-3.136 1.52-4.896 1.872-1.408-1.504-3.408-2.432-5.632-2.432-4.256 0-7.712 3.456-7.712 7.712 0 .608.064 1.2.208 1.76-6.416-.32-12.096-3.392-15.904-8.064-.656 1.136-1.04 2.464-1.04 3.872 0 2.672 1.36 5.04 3.44 6.416-1.264-.032-2.448-.384-3.488-.96v.096c0 3.744 2.656 6.848 6.192 7.568-.64.176-1.328.272-2.032.272-.496 0-.976-.048-1.456-.144.976 3.072 3.824 5.296 7.2 5.36-2.64 2.064-5.968 3.296-9.584 3.296-.624 0-1.232-.032-1.84-.112 3.376 2.208 7.44 3.488 11.792 3.488"></path></g></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Twitter</span>
                                    </div>
                                </button>
                                <button data-share="WhatsApp" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="whats-app-logo-svg" aria-labelledby="whats-app-logo-svg" aria-hidden="true" role="img">
                                            <title id="whats-app-logo-svg">WhatsApp</title>
                                            <defs><linearGradient id="whats-app-logo-c" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#20B038"></stop><stop offset="100%" stop-color="#60D66A"></stop></linearGradient><rect id="whats-app-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs>
                                            <g fill="none" fill-rule="evenodd"><mask id="whats-app-logo-b" fill="#fff"><use href="#whats-app-logo-a"></use></mask><use fill="#43C553" href="#whats-app-logo-a"></use>
                                                <path fill="#E0E0E0" fill-rule="nonzero" d="M46.172 17.813c-3.76-3.746-8.76-5.81-14.088-5.813-10.978 0-19.912 8.891-19.917 19.82-.001 3.493.916 6.903 2.659 9.91L12 52l10.558-2.756c2.909 1.58 6.184 2.411 9.517 2.413h.009c10.976 0 19.911-8.893 19.916-19.821.002-5.297-2.068-10.277-5.828-14.023zM32.084 48.309h-.007c-2.97-.001-5.884-.795-8.425-2.297l-.605-.356-6.265 1.635 1.673-6.08-.394-.623c-1.658-2.623-2.532-5.654-2.531-8.767.003-9.083 7.429-16.473 16.56-16.473 4.422.002 8.578 1.717 11.703 4.831 3.126 3.114 4.845 7.253 4.844 11.656-.004 9.083-7.43 16.474-16.553 16.474z" mask="url(#whats-app-logo-b)"></path>
                                                <path fill="url(#whats-app-logo-c)" fill-rule="nonzero" d="M12.914 50.86l2.697-9.801c-1.664-2.869-2.539-6.123-2.538-9.457.005-10.429 8.53-18.914 19.006-18.914 5.085.003 9.857 1.973 13.445 5.548 3.588 3.575 5.564 8.327 5.561 13.381-.004 10.43-8.53 18.915-19.005 18.915h-.008c-3.181 0-6.306-.796-9.082-2.302l-10.076 2.63z" mask="url(#whats-app-logo-b)"></path>
                                                <path fill="#FFF" d="M27.162 23.405c-.368-.815-.756-.832-1.107-.846-.287-.012-.615-.011-.943-.011-.328 0-.86.122-1.311.612-.451.49-1.722 1.675-1.722 4.085s1.763 4.738 2.008 5.065c.246.326 3.404 5.429 8.404 7.392 4.155 1.63 5 1.306 5.903 1.225.902-.082 2.91-1.185 3.32-2.328.41-1.144.41-2.124.287-2.329-.123-.204-.45-.326-.943-.57-.492-.246-2.91-1.43-3.361-1.594-.451-.163-.78-.245-1.107.245-.328.49-1.27 1.593-1.557 1.92-.287.327-.574.368-1.066.123-.492-.246-2.077-.763-3.956-2.43-1.463-1.299-2.45-2.902-2.737-3.392-.287-.49-.03-.755.216-1 .221-.219.492-.571.738-.857.246-.286.328-.49.492-.817.164-.327.082-.613-.041-.858-.123-.244-1.08-2.666-1.517-3.635z" mask="url(#whats-app-logo-b)"></path>
                                                <path fill="#FFF" fill-rule="nonzero" d="M45.78 17.746c-3.718-3.703-8.66-5.744-13.927-5.746-10.852 0-19.683 8.79-19.688 19.592-.001 3.454.905 6.825 2.628 9.796L12 51.54l10.437-2.725c2.875 1.562 6.113 2.384 9.408 2.386h.008c10.85 0 19.683-8.791 19.688-19.594.002-5.235-2.044-10.158-5.761-13.862zM31.853 47.892h-.006c-2.937-.001-5.817-.786-8.329-2.27l-.598-.353-6.193 1.617 1.653-6.01-.39-.616c-1.637-2.593-2.502-5.59-2.5-8.666.003-8.98 7.343-16.285 16.37-16.285 4.37.002 8.478 1.698 11.568 4.776s4.79 7.17 4.789 11.522c-.004 8.98-7.345 16.285-16.364 16.285z" mask="url(#whats-app-logo-b)"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">WhatsApp</span>
                                    </div>
                                </button>
                                <button data-share="Pinterest" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="pinterest-logo-svg" aria-labelledby="pinterest-logo-svg" aria-hidden="true" role="img"><title id="pinterest-logo-svg">Pinterest</title><defs><rect id="pinterest-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="pinterest-logo-b" fill="#fff"><use href="#pinterest-logo-a"></use></mask><circle cx="32" cy="32" r="32" fill="#CA3737" fill-rule="nonzero" mask="url(#pinterest-logo-b)"></circle><path fill="#FFF" fill-rule="nonzero" d="M32 16.133c-8.8 0-15.867 7.067-15.867 15.867 0 6.533 3.867 12 9.467 14.533 0-1.066 0-2.4.267-3.6.266-1.333 2-8.666 2-8.666s-.534-1.067-.534-2.534c0-2.4 1.334-4.133 3.067-4.133 1.467 0 2.133 1.067 2.133 2.4 0 1.467-.933 3.6-1.333 5.6-.4 1.733.933 3.067 2.533 3.067 3.067 0 5.067-3.867 5.067-8.4 0-3.467-2.4-6-6.533-6-4.8 0-7.734 3.6-7.734 7.6 0 1.333.4 2.4 1.067 3.066.267.4.4.534.267.934-.134.266-.267.933-.267 1.333-.133.4-.4.533-.8.4-2.267-.933-3.2-3.333-3.2-6 0-4.533 3.733-9.867 11.333-9.867 6 0 10 4.4 10 9.067 0 6.267-3.466 10.8-8.533 10.8-1.733 0-3.333-.933-3.867-2 0 0-.933 3.6-1.066 4.4-.4 1.2-.934 2.4-1.6 3.333 1.466.4 2.933.667 4.533.667 8.8 0 15.867-7.067 15.867-15.867-.4-8.933-7.467-16-16.267-16z" mask="url(#pinterest-logo-b)"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Pinterest</span>
                                    </div>
                                </button>
                                <button data-share="Reddit" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="reddit-logo-svg" aria-labelledby="reddit-logo-svg" aria-hidden="true" role="img"><title id="reddit-logo-svg">Reddit</title><defs><rect id="reddit-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="reddit-logo-b" fill="#fff"><use href="#reddit-logo-a"></use></mask><use fill="#D8D8D8" href="#reddit-logo-a"></use><g fill-rule="nonzero" mask="url(#reddit-logo-b)"><circle cx="32" cy="32" r="32" fill="#FF4500"></circle><path fill="#FFF" d="M52 32.319c0-2.445-1.968-4.43-4.394-4.43-1.195 0-2.25.461-3.023 1.24-2.987-2.16-7.135-3.578-11.704-3.755l2.003-9.46 6.503 1.381c.07 1.666 1.441 3.012 3.128 3.012 1.723 0 3.128-1.417 3.128-3.153 0-1.737-1.405-3.154-3.128-3.154-1.23 0-2.285.709-2.777 1.772l-7.276-1.56c-.21-.035-.421 0-.597.107-.176.106-.281.283-.352.496l-2.214 10.559c-4.675.142-8.858 1.524-11.88 3.756-.774-.744-1.863-1.24-3.023-1.24-2.426 0-4.394 1.984-4.394 4.429 0 1.807 1.054 3.33 2.601 4.04-.07.424-.105.885-.105 1.346 0 6.803 7.838 12.295 17.54 12.295 9.7 0 17.539-5.492 17.539-12.295 0-.46-.035-.886-.106-1.311C50.91 35.685 52 34.126 52 32.319zm-30.053 3.153c0-1.736 1.406-3.153 3.129-3.153 1.722 0 3.128 1.417 3.128 3.153 0 1.737-1.406 3.154-3.128 3.154-1.723 0-3.129-1.417-3.129-3.154zm17.47 8.327c-2.145 2.162-6.222 2.303-7.417 2.303-1.195 0-5.308-.177-7.417-2.303-.316-.319-.316-.85 0-1.17.317-.318.844-.318 1.16 0 1.336 1.347 4.218 1.843 6.292 1.843s4.921-.496 6.292-1.842c.316-.319.843-.319 1.16 0 .246.354.246.85-.07 1.17zm-.563-5.173c-1.722 0-3.128-1.417-3.128-3.154 0-1.736 1.406-3.153 3.128-3.153 1.722 0 3.128 1.417 3.128 3.153 0 1.737-1.406 3.154-3.128 3.154z"></path></g></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Reddit</span>
                                    </div>
                                </button>
                                <button data-share="Telegram" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="telegram-logo-svg" aria-labelledby="telegram-logo-svg" aria-hidden="true" role="img"><title id="telegram-logo-svg">Telegram</title><defs><linearGradient id="telegram-logo-b" x1="50%" x2="50%" y1="0%" y2="99.258%"><stop offset="0%" stop-color="#2AABEE"></stop><stop offset="100%" stop-color="#229ED9"></stop></linearGradient><rect id="telegram-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="telegram-logo-c" fill="#fff"><use href="#telegram-logo-a"></use></mask><circle cx="32" cy="32" r="32" fill="url(#telegram-logo-b)" fill-rule="nonzero" mask="url(#telegram-logo-c)"></circle><path fill="#FFF" fill-rule="nonzero" d="M14.485 31.662c9.329-4.064 15.55-6.744 18.662-8.038 8.886-3.696 10.733-4.339 11.937-4.36.264-.004.856.061 1.24.372.323.263.412.618.455.867.043.249.096.816.054 1.26-.482 5.06-2.566 17.339-3.626 23.006-.448 2.398-1.332 3.202-2.187 3.28-1.858.172-3.27-1.227-5.07-2.407-2.815-1.846-4.407-2.996-7.14-4.797-3.16-2.082-1.112-3.227.689-5.097.471-.489 8.659-7.936 8.817-8.612.02-.084.038-.4-.149-.566-.187-.166-.463-.11-.662-.064-.283.064-4.782 3.038-13.498 8.922-1.277.877-2.434 1.304-3.47 1.281-1.143-.024-3.34-.646-4.975-1.177-2.004-.651-3.596-.996-3.458-2.102.073-.576.866-1.165 2.381-1.768z" mask="url(#telegram-logo-c)"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Telegram</span>
                                    </div>
                                </button>
                                <button data-share="Tumblr" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="tumblr-logo-svg" aria-labelledby="tumblr-logo-svg" aria-hidden="true" role="img"><title id="tumblr-logo-svg">Tumblr</title><defs><rect id="tumblr-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="tumblr-logo-b" fill="#fff"><use href="#tumblr-logo-a"></use></mask><path fill="#314358" fill-rule="nonzero" d="M0 0h64v64H0z" mask="url(#tumblr-logo-b)"></path><path fill="#FFF" fill-rule="nonzero" d="M39.494 41.56c-.583.284-1.696.531-2.527.552-2.507.069-2.994-1.8-3.014-3.153v-9.962h6.29v-4.845h-6.268V16h-4.587c-.075 0-.207.068-.226.239-.268 2.495-1.41 6.873-6.162 8.624v4.134h3.17v10.455c0 3.58 2.584 8.666 9.407 8.546 2.302-.04 4.858-1.025 5.423-1.875l-1.506-4.563" mask="url(#tumblr-logo-b)"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Tumblr</span>
                                    </div>
                                </button>
                                <button data-share="Yahoo" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalOptIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M223.7 141.1 167 284.2 111 141.1H14.9L120.8 390.2 82.2 480h94.2L317.3 141.1zm105.4 135.8a58.2 58.2 0 1 0 58.2 58.2A58.2 58.2 0 0 0 329.1 276.9zM394.7 32l-93 223.5H406.4L499.1 32z"/>
                                        </svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Yahoo</span>
                                    </div>
                                </button>
                                <button data-share="Line" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="line-logo-svg" aria-labelledby="line-logo-svg" aria-hidden="true" role="img"><title id="line-logo-svg">Line</title><defs><rect id="line-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="line-logo-b" fill="#fff"><use href="#line-logo-a"></use></mask><path fill="#3ACE01" d="M13.099 0H50.9C58.106 0 64 5.894 64 13.099V50.9C64 58.106 58.106 64 50.901 64H13.1C5.894 64 0 58.106 0 50.901V13.1C0 5.894 5.894 0 13.099 0z" mask="url(#line-logo-b)"></path><path fill="#FFF" d="M31.938 10.602c12.968 0 23.48 8.417 23.48 18.801 0 3.627-1.283 7.014-3.505 9.886-.11.164-.254.344-.435.544l-.014.015c-.759.908-1.613 1.76-2.553 2.547-6.493 6.002-17.181 13.147-18.592 12.045-1.226-.958 2.02-5.645-1.725-6.425-.261-.03-.522-.062-.78-.1h-.005C16.81 46.353 8.458 38.66 8.458 29.403c0-10.384 10.512-18.801 23.48-18.801z" mask="url(#line-logo-b)"></path><path fill="#3ACE01" d="M18.315 35.4h4.735c.674 0 1.225-.55 1.225-1.224v-.102c0-.674-.551-1.225-1.225-1.225h-3.409v-7.756c0-.673-.55-1.224-1.224-1.224h-.102c-.674 0-1.225.55-1.225 1.224v9.083c0 .674.551 1.225 1.225 1.225zm29.344-5.692v-.102c0-.674-.551-1.225-1.225-1.225h-3.409v-1.939h3.409c.674 0 1.225-.551 1.225-1.225v-.102c0-.673-.551-1.224-1.225-1.224h-4.736c-.673 0-1.224.55-1.224 1.224v9.083c0 .673.55 1.224 1.224 1.224h4.736c.674 0 1.225-.55 1.225-1.224v-.103c0-.673-.551-1.224-1.225-1.224h-3.409v-1.94h3.409c.674.001 1.225-.55 1.225-1.223zm-9.107 5.328v-.001c.227-.228.354-.537.354-.859v-9.082c0-.674-.55-1.225-1.225-1.225h-.102c-.673 0-1.224.551-1.224 1.225v5.331l-4.427-5.937c-.211-.369-.61-.619-1.063-.619h-.102c-.674 0-1.225.551-1.225 1.225v9.082c0 .674.551 1.225 1.225 1.225h.102c.674 0 1.225-.551 1.225-1.225v-5.431l4.458 6.089c.027.043.057.084.09.123.122.167.29.282.476.351.144.06.3.093.465.093h.102c.2 0 .396-.05.572-.143.123-.059.226-.134.299-.222zm-12.064.365h.102c.673 0 1.224-.551 1.224-1.225v-9.082c0-.674-.55-1.225-1.224-1.225h-.102c-.674 0-1.225.551-1.225 1.225v9.082c0 .674.551 1.225 1.225 1.225z" mask="url(#line-logo-b)"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Line</span>
                                    </div>
                                </button>
                                <button data-share="OKRU" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="odnoklassniki-logo-svg" aria-labelledby="odnoklassniki-logo-svg" aria-hidden="true" role="img"><title id="odnoklassniki-logo-svg">OK.RU</title><defs><rect id="odnoklassniki-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="odnoklassniki-logo-b" fill="#fff"><use href="#odnoklassniki-logo-a"></use></mask><circle cx="32" cy="32" r="32" fill="#EE8208" fill-rule="nonzero" mask="url(#odnoklassniki-logo-b)"></circle><g fill="#FFF" fill-rule="nonzero" mask="url(#odnoklassniki-logo-b)"><path d="M32 32.621c5.274 0 9.57-4.296 9.57-9.57s-4.295-9.57-9.569-9.57-9.57 4.296-9.57 9.57 4.296 9.57 9.57 9.57m0-13.54c2.193 0 3.97 1.778 3.97 3.97 0 2.193-1.777 3.97-3.97 3.97-2.192 0-3.97-1.777-3.97-3.97 0-2.192 1.778-3.97 3.97-3.97m3.881 21.333c1.955-.444 3.822-1.214 5.57-2.31 1.304-.83 1.719-2.549.889-3.882-.83-1.304-2.548-1.719-3.881-.89-3.912 2.46-8.978 2.46-12.89 0-1.303-.829-3.051-.444-3.88.89-.83 1.303-.445 3.052.888 3.881 1.719 1.097 3.615 1.867 5.57 2.311l-5.363 5.363c-1.096 1.097-1.096 2.874 0 3.97.563.534 1.275.83 1.986.83.71 0 1.452-.266 1.985-.83l5.274-5.273 5.274 5.274c1.096 1.096 2.874 1.096 3.97 0 1.097-1.097 1.097-2.874 0-3.97l-5.392-5.364z"></path></g></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">OK.RU</span>
                                    </div>
                                </button>
                                <button data-share="Vkontakte" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="v-kontakte-logo-svg" aria-labelledby="v-kontakte-logo-svg" aria-hidden="true" role="img"><title id="v-kontakte-logo-svg">ВКонтакте</title><defs><rect id="v-kontakte-logo-a" width="64" height="64" x="0" y="0" rx="32"></rect></defs><g fill="none" fill-rule="evenodd"><mask id="v-kontakte-logo-b" fill="#fff"><use href="#v-kontakte-logo-a"></use></mask><path fill="#2787F5" fill-rule="nonzero" d="M0 30.667C0 16.21 0 8.982 4.491 4.49S16.211 0 30.667 0h2.666C47.79 0 55.018 0 59.51 4.491S64 16.211 64 30.667v2.666c0 14.457 0 21.685-4.491 26.176S47.789 64 33.333 64h-2.666C16.21 64 8.982 64 4.49 59.509S0 47.789 0 33.333v-2.666z" mask="url(#v-kontakte-logo-b)"></path><path fill="#FFF" d="M17.876 20H13.5c-1.25 0-1.5.595-1.5 1.25 0 1.171 1.484 6.98 6.908 14.66 3.616 5.246 8.71 8.09 13.347 8.09 2.781 0 3.125-.632 3.125-1.72v-3.964c0-1.263.264-1.515 1.145-1.515.649 0 1.761.327 4.358 2.857C43.85 42.655 44.339 44 46.008 44h4.376c1.25 0 1.875-.632 1.515-1.878-.395-1.242-1.812-3.045-3.691-5.18-1.02-1.219-2.55-2.53-3.014-3.186-.649-.843-.463-1.218 0-1.967 0 0 5.332-7.588 5.888-10.164.278-.937 0-1.625-1.323-1.625h-4.376c-1.113 0-1.626.595-1.904 1.25 0 0-2.225 5.48-5.378 9.04-1.02 1.03-1.484 1.358-2.04 1.358-.278 0-.68-.328-.68-1.264v-8.759c0-1.124-.324-1.625-1.25-1.625h-6.878c-.695 0-1.113.522-1.113 1.016 0 1.066 1.576 1.312 1.739 4.31v6.51c0 1.427-.256 1.686-.812 1.686-1.483 0-5.092-5.505-7.232-11.803-.42-1.224-.84-1.719-1.959-1.719z" mask="url(#v-kontakte-logo-b)"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">ВКонтакте</span>
                                    </div>
                                </button>
                                <button data-share="Email" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="email-logo-svg" aria-labelledby="email-logo-svg" aria-hidden="true" role="img"><title id="email-logo-svg">Email</title><g fill="none" fill-rule="evenodd"><rect width="64" height="64" fill="#59595B" rx="32"></rect><path fill="#FFF" d="M44 20H20c-1.656 0-3 1.344-3 3v18c0 1.656 1.344 3 3 3h24c1.656 0 3-1.344 3-3V23c0-1.656-1.344-3-3-3zm0 7.05l-12 8.001-12-8.001v-3.605l12 8 12-8v3.605z"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Email</span>
                                    </div>
                                </button>
                                <button data-share="Gmail" class="genAtnModalOptBox" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox genAtnModalShareIconBox">
                                        <svg class="genAtnModalShareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="email-logo-svg" aria-labelledby="email-logo-svg" aria-hidden="true" role="img"><title id="email-logo-svg">Email</title><g fill="none" fill-rule="evenodd"><rect width="64" height="64" fill="#59595B" rx="32"></rect><path fill="#FFF" d="M44 20H20c-1.656 0-3 1.344-3 3v18c0 1.656 1.344 3 3 3h24c1.656 0 3-1.344 3-3V23c0-1.656-1.344-3-3-3zm0 7.05l-12 8.001-12-8.001v-3.605l12 8 12-8v3.605z"></path></g></svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox shareTextBox">
                                        <span class="genAtnModalOptText shareText">Gmail</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            let socialShareTimer;
            let socialDestinationH;
            let socialDestinationW;
            let shareShowBtn = document.querySelectorAll(".shareShowBtn");
            let openAddToPLBtn = document.querySelectorAll(".openAddToPLBtn");
            let addToPLHTML = 
            `
                <div class="genAtnModalBcg closeAddToPL"></div>
                <div class="genAtnModalBox addToPLBox">
                    <div class="genAtnModalCtnt">
                        <div class="genAtnModalHeader">
                            <div class="genAtnModalHeaderIconBox closeAddToPL">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>
                            <h3 class="genAtnModalHeaderText">
                                <span class="large">A</span>
                                <span class="small">dd to Playlist</span>
                            </h3>
                        </div>
                        <div class="genAtnModalOptBcg addToPLItemBcg">
                            <div class="genAtnModalOptBdr addToPLItemBox">
                                <div class="genAtnModalOptBox newPLBtn" title="Create new playlist" aria-label="Create new playlist">
                                    <div class="genAtnModalOptIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIcon">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox ">
                                        <span class="genAtnModalOptText ">Create new playlist</span>
                                    </div>
                                </div>
                                <div class="newPLBdr">
                                    <div class="newPLBox">
                                        <div class="newPLInputBdr">
                                            <div class="newPLInputBox">
                                                <input type="text" name="newPlayListInputField" id="newPLInputId" class="newPLInputClass" placeholder="Name your playlist" disabled />
                                            </div>
                                        </div>
                                        <div class="newPLWarnBdr">
                                            <div class="newPLWarnBox">
                                                <p id="newPLWarnId" class="newPLWarnText" tabindex="-1"></p>
                                            </div>
                                        </div>
                                        <div class="newPLAtnBdr">
                                            <div class="newPLAtnBox">
                                                <button type="button" id="createNewPL" class="newPLAtnBtn midSolidBtn" disabled>Create</button>
                                                <button type="button" id="cancelNewPL" class="newPLAtnBtn hollowBtn" disabled>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="genAtnModalOptIcon">
                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                        </svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox ">
                                        <span class="genAtnModalOptText ">Sample A</span>
                                    </div>
                                </button>
                                <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                                    <div class="genAtnModalOptIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="genAtnModalOptIcon">
                                            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                        </svg>
                                    </div>
                                    <div class="genAtnModalOptTextBox ">
                                        <span class="genAtnModalOptText ">Sample B</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            let addToPLTimer;
            let addToWatchListBox = document.querySelectorAll(".add_to_WatchListBox");


        // DOCUMENT (WINDOW)

            // Did it to match github's href style
            if(window.location.origin == "https://acbennny.github.io")
            {
                locationOrigin = window.location.origin + "/Uvid/";
            }
            else
            {
                locationOrigin = window.location.origin + "/";
            }



        // NAVBAR

            // Darken Navbar on scroll
            window.addEventListener("scroll" , () => 
            {
                navBar.classList.toggle("float" , window.scrollY > 0);
            });

            //  Go to Home page
            goToHomePage.forEach(one => 
            {
                one.addEventListener("click" , () => 
                {
                    window.location.href = locationOrigin + "Home.html";
                });
            });

            // Profile Options
            openNavProfileOptions.addEventListener("click" , () => 
            {
                navProfileOptionsBdr.classList.toggle("active");
                document.addEventListener("click" , () => 
                {
                    if((navProfileOptionsBdr.classList.contains("active")) && !(openNavProfileOptions.matches(":hover")))
                    {
                        navProfileOptionsBdr.classList.remove("active");
                    }
                });
            });


        // NAVBAR SIDE MENU

            function instantiateSideNavBar()
            {
                // Creates the nav menu bdr
                const navMenuBdr = document.createElement("div");
                navMenuBdr.classList.add("nav_Menu_bdr");

                navMenuBdr.innerHTML = 
                `
                    <div class="nav_Menu_box">
                        <div class="nav_Menu_bcg close_nav_Menu"></div>
                        <div class="nav_Opt_bcg">
                            <div class="navOptBdr">

                                <section class="navOptBox navOptHeaderBdr">
                                    <div class="navOptHeaderBox">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="navOptIcon close_nav_Menu">
                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                            </svg>
                                        </div>
                                        <div class="navBarCompanylogo logo logo1">
                                            <h1 class="lhead">U</h1>
                                            <h1 class="lname">vid</h1>
                                        </div>
                                    </div>
                                </section>

                                <div class="navOptDivider"></div>
                                
                                <section class="navOptBox navOptLinkBox navOptMain">
                                    <a href="/Search.html" class="navOptLink" id="searchLink" title="Search">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Search</span>
                                    </a>
                                    <a href="/Home.html" class="navOptLink" id="home" title="Home">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="navOptIcon">
                                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Home</span>
                                    </a>
                                    <a href="/Trending.html" class="navOptLink" id="Trending" title="Trending">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="navOptIcon">
                                                <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Trending</span>
                                    </a>
                                </section>

                                <div class="navOptDivider"></div>
                                
                                <section class="navOptBox navOptLinkBox navOptWatch">
                                    <a href="/Library/Movies.html" class="navOptLink" id="moviesLink" title="Movies">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Movies</span>
                                    </a>
                                    <a href="/Library/TV_Shows.html" class="navOptLink" id="tvShowsLink" title="TV Shows">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="navOptIcon">
                                                <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">TV Shows</span>
                                    </a>
                                    <a href="/Library/Anime.html" class="navOptLink" id="animeLink" title="Anime">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="navOptIcon">
                                                <path d="M82.5 98.9c-.6-17.2 2-33.8 12.7-48.2 .3 7.4 1.2 14.5 4.2 21.6 5.9-27.5 19.7-49.3 42.3-65.5-1.9 5.9-3.5 11.8-3 17.7 8.7-7.4 18.8-17.8 44.4-22.7 14.7-2.8 29.7-2 42.1 1 38.5 9.3 61 34.3 69.7 72.3 5.3 23.1 .7 45-8.3 66.4-5.2 12.4-12 24.4-20.7 35.1-2-1.9-3.9-3.8-5.8-5.6-42.8-40.8-26.8-25.2-37.4-37.4-1.1-1.2-1-2.2-.1-3.6 8.3-13.5 11.8-28.2 10-44-1.1-9.8-4.3-18.9-11.3-26.2-14.5-15.3-39.2-15-53.5 .6-11.4 12.5-14.1 27.4-10.9 43.6 .2 1.3 .4 2.7 0 3.9-3.4 13.7-4.6 27.6-2.5 41.6 .1 .5 .1 1.1 .1 1.6 0 .3-.1 .5-.2 1.1-21.8-11-36-28.3-43.2-52.2-8.3 17.8-11.1 35.5-6.6 54.1-15.6-15.2-21.3-34.3-22-55.2zm469.6 123.2c-11.6-11.6-25-20.4-40.1-26.6-12.8-5.2-26-7.9-39.9-7.1-10 .6-19.6 3.1-29 6.4-2.5 .9-5.1 1.6-7.7 2.2-4.9 1.2-7.3-3.1-4.7-6.8 3.2-4.6 3.4-4.2 15-12 .6-.4 1.2-.8 2.2-1.5h-2.5c-.6 0-1.2 .2-1.9 .3-19.3 3.3-30.7 15.5-48.9 29.6-10.4 8.1-13.8 3.8-12-.5 1.4-3.5 3.3-6.7 5.1-10 1-1.8 2.3-3.4 3.5-5.1-.2-.2-.5-.3-.7-.5-27 18.3-46.7 42.4-57.7 73.3 .3 .3 .7 .6 1 .9 .3-.6 .5-1.2 .9-1.7 10.4-12.1 22.8-21.8 36.6-29.8 18.2-10.6 37.5-18.3 58.7-20.2 4.3-.4 8.7-.1 13.1-.1-1.8 .7-3.5 .9-5.3 1.1-18.5 2.4-35.5 9-51.5 18.5-30.2 17.9-54.5 42.2-75.1 70.4-.3 .4-.4 .9-.7 1.3 14.5 5.3 24 17.3 36.1 25.6 .2-.1 .3-.2 .4-.4l1.2-2.7c12.2-26.9 27-52.3 46.7-74.5 16.7-18.8 38-25.3 62.5-20 5.9 1.3 11.4 4.4 17.2 6.8 2.3-1.4 5.1-3.2 8-4.7 8.4-4.3 17.4-7 26.7-9 14.7-3.1 29.5-4.9 44.5-1.3v-.5c-.5-.4-1.2-.8-1.7-1.4zM316.7 397.6c-39.4-33-22.8-19.5-42.7-35.6-.8 .9 0-.2-1.9 3-11.2 19.1-25.5 35.3-44 47.6-10.3 6.8-21.5 11.8-34.1 11.8-21.6 0-38.2-9.5-49.4-27.8-12-19.5-13.3-40.7-8.2-62.6 7.8-33.8 30.1-55.2 38.6-64.3-18.7-6.2-33 1.7-46.4 13.9 .8-13.9 4.3-26.2 11.8-37.3-24.3 10.6-45.9 25-64.8 43.9-.3-5.8 5.4-43.7 5.6-44.7 .3-2.7-.6-5.3-3-7.4-24.2 24.7-44.5 51.8-56.1 84.6 7.4-5.9 14.9-11.4 23.6-16.2-8.3 22.3-19.6 52.8-7.8 101.1 4.6 19 11.9 36.8 24.1 52.3 2.9 3.7 6.3 6.9 9.5 10.3 .2-.2 .4-.3 .6-.5-1.4-7-2.2-14.1-1.5-21.9 2.2 3.2 3.9 6 5.9 8.6 12.6 16 28.7 27.4 47.2 35.6 25 11.3 51.1 13.3 77.9 8.6 54.9-9.7 90.7-48.6 116-98.8 1-1.8 .6-2.9-.9-4.2zm172-46.4c-9.5-3.1-22.2-4.2-28.7-2.9 9.9 4 14.1 6.6 18.8 12 12.6 14.4 10.4 34.7-5.4 45.6-11.7 8.1-24.9 10.5-38.9 9.1-1.2-.1-2.3-.4-3-.6 2.8-3.7 6-7 8.1-10.8 9.4-16.8 5.4-42.1-8.7-56.1-2.1-2.1-4.6-3.9-7-5.9-.3 1.3-.1 2.1 .1 2.8 4.2 16.6-8.1 32.4-24.8 31.8-7.6-.3-13.9-3.8-19.6-8.5-19.5-16.1-39.1-32.1-58.5-48.3-5.9-4.9-12.5-8.1-20.1-8.7-4.6-.4-9.3-.6-13.9-.9-5.9-.4-8.8-2.8-10.4-8.4-.9-3.4-1.5-6.8-2.2-10.2-1.5-8.1-6.2-13-14.3-14.2-4.4-.7-8.9-1-13.3-1.5-13-1.4-19.8-7.4-22.6-20.3-5 11-1.6 22.4 7.3 29.9 4.5 3.8 9.3 7.3 13.8 11.2 4.6 3.8 7.4 8.7 7.9 14.8 .4 4.7 .8 9.5 1.8 14.1 2.2 10.6 8.9 18.4 17 25.1 16.5 13.7 33 27.3 49.5 41.1 17.9 15 13.9 32.8 13 56-.9 22.9 12.2 42.9 33.5 51.2 1 .4 2 .6 3.6 1.1-15.7-18.2-10.1-44.1 .7-52.3 .3 2.2 .4 4.3 .9 6.4 9.4 44.1 45.4 64.2 85 56.9 16-2.9 30.6-8.9 42.9-19.8 2-1.8 3.7-4.1 5.9-6.5-19.3 4.6-35.8 .1-50.9-10.6 .7-.3 1.3-.3 1.9-.3 21.3 1.8 40.6-3.4 57-17.4 19.5-16.6 26.6-42.9 17.4-66-8.3-20.1-23.6-32.3-43.8-38.9zM99.4 179.3c-5.3-9.2-13.2-15.6-22.1-21.3 13.7-.5 26.6 .2 39.6 3.7-7-12.2-8.5-24.7-5-38.7 5.3 11.9 13.7 20.1 23.6 26.8 19.7 13.2 35.7 19.6 46.7 30.2 3.4 3.3 6.3 7.1 9.6 10.9-.8-2.1-1.4-4.1-2.2-6-5-10.6-13-18.6-22.6-25-1.8-1.2-2.8-2.5-3.4-4.5-3.3-12.5-3-25.1-.7-37.6 1-5.5 2.8-10.9 4.5-16.3 .8-2.4 2.3-4.6 4-6.6 .6 6.9 0 25.5 19.6 46 10.8 11.3 22.4 21.9 33.9 32.7 9 8.5 18.3 16.7 25.5 26.8 1.1 1.6 2.2 3.3 3.8 4.7-5-13-14.2-24.1-24.2-33.8-9.6-9.3-19.4-18.4-29.2-27.4-3.3-3-4.6-6.7-5.1-10.9-1.2-10.4 0-20.6 4.3-30.2 .5-1 1.1-2 1.9-3.3 .5 4.2 .6 7.9 1.4 11.6 4.8 23.1 20.4 36.3 49.3 63.5 10 9.4 19.3 19.2 25.6 31.6 4.8 9.3 7.3 19 5.7 29.6-.1 .6 .5 1.7 1.1 2 6.2 2.6 10 6.9 9.7 14.3 7.7-2.6 12.5-8 16.4-14.5 4.2 20.2-9.1 50.3-27.2 58.7 .4-4.5 5-23.4-16.5-27.7-6.8-1.3-12.8-1.3-22.9-2.1 4.7-9 10.4-20.6 .5-22.4-24.9-4.6-52.8 1.9-57.8 4.6 8.2 .4 16.3 1 23.5 3.3-2 6.5-4 12.7-5.8 18.9-1.9 6.5 2.1 14.6 9.3 9.6 1.2-.9 2.3-1.9 3.3-2.7-3.1 17.9-2.9 15.9-2.8 18.3 .3 10.2 9.5 7.8 15.7 7.3-2.5 11.8-29.5 27.3-45.4 25.8 7-4.7 12.7-10.3 15.9-17.9-6.5 .8-12.9 1.6-19.2 2.4l-.3-.9c4.7-3.4 8-7.8 10.2-13.1 8.7-21.1-3.6-38-25-39.9-9.1-.8-17.8 .8-25.9 5.5 6.2-15.6 17.2-26.6 32.6-34.5-15.2-4.3-8.9-2.7-24.6-6.3 14.6-9.3 30.2-13.2 46.5-14.6-5.2-3.2-48.1-3.6-70.2 20.9 7.9 1.4 15.5 2.8 23.2 4.2-23.8 7-44 19.7-62.4 35.6 1.1-4.8 2.7-9.5 3.3-14.3 .6-4.5 .8-9.2 .1-13.6-1.5-9.4-8.9-15.1-19.7-16.3-7.9-.9-15.6 .1-23.3 1.3-.9 .1-1.7 .3-2.9 0 15.8-14.8 36-21.7 53.1-33.5 6-4.5 6.8-8.2 3-14.9zm128.4 26.8c3.3 16 12.6 25.5 23.8 24.3-4.6-11.3-12.1-19.5-23.8-24.3z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Anime</span>
                                    </a>
                                    <a href="/Library/Cartoon.html" class="navOptLink" id="cartoonLink" title="Cartoons">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="navOptIcon">
                                                <path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Cartoon</span>
                                    </a>
                                    <a href="/News/Home.html" class="navOptLink" id="newsLink" title="News">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                                <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">News</span>
                                    </a>
                                </section>

                                <div class="navOptDivider"></div>
                                
                                <section class="navOptBox navOptLinkBox navOptSetting">
                                    <a href="/MyList.html?list=watchlist" class="navOptLink" id="prem" title="Help">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Watchlist</span>
                                    </a>
                                    <a href="/MyList.html?list=playlist" class="navOptLink" id="feedback" title="Feedback">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="navOptIcon">
                                                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">Playlist</span>
                                    </a>
                                    <a href="/MyList.html?list=history" class="navOptLink" id="supp" title="Support">
                                        <div class="navOptIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                                <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
                                            </svg>
                                        </div>
                                        <span class="navOptTitle">History</span>
                                    </a>
                                </section>

                                <div class="navOptDivider"></div>

                                <section class="navOptBox navOptFooter">
                                    <div class="navOptFooterBox">
                                        <div class="navfooterBoxSect">
                                            <div class="navfooterCompNameBdr">
                                                <div class="navfooterCompNameBox">
                                                    <span class="navfooterCompIconBox">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navfooterCompIcon">
                                                            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/>
                                                        </svg>
                                                    </span>
                                                    <span class="navfooterCompName">
                                                        <span>2024 UVID</span>
                                                    </span>
                                                </div>
                                                <div class="navfooterCompName">All Rights Reserved</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                `;

                // Appends nav menu bdr 
                documentBody.appendChild(navMenuBdr);

                // Adds properties after HTML Nodes have been appended
                navMenuTimer = setTimeout(() => 
                {
                    
                    // Open Nav Menu
                    function openNavMenu()
                    {
                        navMenuBdr.classList.add("bdr_atv");
                        document.body.classList.add('bodystop');
                    }

                    navMenuIcon.forEach(btn => 
                    {
                        btn.addEventListener("click" , openNavMenu);
                    });

                    // Close Nav Menu
                    function closesearch()
                    {
                        navMenuBdr.classList.remove("bdr_atv");
                        document.body.classList.remove('bodystop');
                    }

                    const closeNavMenu = document.querySelectorAll('.close_nav_Menu');
                    closeNavMenu.forEach(btn => {
                        btn.addEventListener("click" , closesearch);
                    });

                    // Setting the title of the elements
                    const navOptLink = document.querySelectorAll(".navOptLink");
                    navOptLink.forEach(navlink => 
                    {
                        let navTitle = navlink.querySelector(".navOptTitle");
                        navlink.title = navTitle.textContent;
                    });

                    // Setting the active element
                    let switchElem = navBarHeadName.title.toLowerCase();
                    switch(switchElem)
                    {
                        case 'search': navOptLink[0].classList.add("active");
                        break;

                        case 'home': navOptLink[1].classList.add("active");
                        break;
                        
                        case 'trending': navOptLink[2].classList.add("active");
                        break;
                        
                        case 'movies': navOptLink[3].classList.add("active");
                        break;
                        
                        case 'tv shows': navOptLink[4].classList.add("active");
                        break;
                        
                        case 'anime': navOptLink[5].classList.add("active");
                        break;
                        
                        case 'cartoon': navOptLink[6].classList.add("active");
                        break;
                        
                        case 'news': navOptLink[7].classList.add("active");
                        break;
                        
                        case 'my list': navOptLink[8].classList.add("active");
                        break;
                        
                        case 'help': navOptLink[9].classList.add("active");
                        break;
                        
                        case 'feedback': navOptLink[10].classList.add("active");
                        break;
                        
                        case 'support': navOptLink[11].classList.add("active");
                        break;

                        default: console.log("Error: No corresponding navbar item found");
                        break;
                    }

                    // Seting title for the footer the nav manu
                    const navfooterBoxSect1 = document.querySelectorAll(".navfooterBoxSect1 a");
                    navfooterBoxSect1.forEach(footerlink => 
                    {
                        footerlink.title = footerlink.textContent;
                    });

                    // clear timer once time runs out
                    clearTimeout(navMenuTimer);

                }, 100);
            }

            instantiateSideNavBar();



            // This will open the seearch page
            openNavSearchBar.addEventListener("click" , () => 
            {
                window.open("/Search.html" , "_self");
            });




        // NAVBAR  NOTIFICATIONS

            function instantiateNavBarNotificationBox()
            {
                // change active state of the notification icon
                openNavNotificationBarBtn.classList.remove("notify_atv");
                closeNavNotificationBarBtn.classList.add("notify_atv");

                // The border holding the elements of the notification box
                const navNotificationBdr = document.createElement("div");
                navNotificationBdr.classList.add("navBarNotificationBdr");

                // The Notification Bar Structure
                navNotificationBdr.innerHTML = 
                `
                    <div class="navBarNotificationBcg"></div>
                    <div class="navBarNotificationMain">
                        <div class="navBarNotificationMinor">
                            <div class="navBarNotificationTitleBox">
                                <div class="navBarnotificationTitle">Notifications</div>
                                <div class="navBarIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navBarIcon openNotificationSettings">
                                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="navBarNotificationSub">
                                <div class="navBarNotificationBox">
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                    <div class="notifyCtntBox"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Append the fragment to navBarRightCtnt of the navbar
                documentBody.appendChild(navNotificationBdr);
        
                
                navNotificationBarTimer = setTimeout(() => 
                {
                    documentBody.classList.add("bodystop");

                    // Adds style class
                    navNotificationBdr.classList.add("notify_atv");

                    // Slides in the Notification box
                    const navNotificationMain = document.querySelector(".navBarNotificationMain");
                    navNotificationMain.classList.add("notify_atv");


                    // Closes the Notification box
                    function closeNavBarNotificationBox()
                    {
                        documentBody.classList.remove("bodystop");

                        // change active state of the notification icon
                        openNavNotificationBarBtn.classList.add("notify_atv");
                        closeNavNotificationBarBtn.classList.remove("notify_atv");

                        // Removes style classes
                        navNotificationMain.classList.remove("notify_atv");

                        navNotificationBarTimer = setTimeout(() => 
                        {
                            // Remove Child Nodes
                            documentBody.removeChild(navNotificationBdr);

                            // clear timer once time runs out
                            clearTimeout(navNotificationBarTimer);
                        },200);
                    
                    }

                    const navNotificationBarBcg = document.querySelector(".navBarNotificationBcg");
                    navNotificationBarBcg.addEventListener("click" , closeNavBarNotificationBox);

                    // Opens "Notification" Settings
                    const openNotificationSett = document.querySelector(".openNotificationSettings");
                    openNotificationSett.addEventListener("click" , () => 
                    {
                        window.location.href = locationOrigin + "Settings/Notifications.html";
                    });

                    // clear timer once time runs out
                    clearTimeout(navNotificationBarTimer);

                } , 100);
            }

            // Opens the Notification Box
            openNavNotificationBarBtn.addEventListener("click" , instantiateNavBarNotificationBox);


            

        // SWITCH PROFILES

            function insertSwitchProfJS()
            {
                switchProfScript = document.createElement('script');
                switchProfScript.setAttribute(`src` , `/SwitchProf.js`);
                switchProfScript.setAttribute(`id` , `switchProfScriptID`);

                switchProfScript.addEventListener("load" , () => 
                {
                    openSwitchProfBtn.addEventListener("click" , instantiateSwitchProfBdr);
                });
                switchProfScript.onerror = function() 
                {
                    notification(`An error occurred`);
                };
                document.body.appendChild(switchProfScript);
            }
            insertSwitchProfJS();

  

        // DEVELOPER'S PROFILE

            developerProfile.forEach(dev => 
            {
                dev.title = `This website was designed and developed by acbennny (me😁). You can check out my portfolio at: "${developerLink}"`;

                // Opening my portfolio (in a new tab)
                dev.addEventListener("click" , () => 
                {
                    window.open(developerLink , "_blank");
                });

                // Copying link to clipboard
                dev.addEventListener("contextmenu" , (e) => 
                {
                    // Prevent the default context menu from appearing
                    e.preventDefault();

                    // Then copy to clipboard and notify user
                    navigator.clipboard.writeText(developerLink)
                    .then(() => 
                    {
                        notification(`Link copied to clipboard`);
                    })
                    .catch((err) => 
                    {
                        notification(`Could not copy link, ${err}`);
                    });
                });
            });


            
        // BACK TO TOP

            backtotopBtn.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    window.scrollTo(null , 0);
                });
            });



        // ALL IMAGES
            
            allImg.forEach(eachImg => 
            {
                
                // Remove filter once image has loaded
                eachImg.style.filter = "blur(0px)";
                eachImg.style.animation = "none";

                // Prevents User from dragging Images
                eachImg.draggable = false;

                // Sets the alt text to image if none is set
                if(eachImg.alt.valueOf() == "")
                {
                    eachImg.alt = "image";
                }
                
            });

            allImgTags.forEach(eachImg => 
            {

                // Remove filter once image has loaded
                console.log("image number");
                eachImg.addEventListener("load" , () => 
                {
                    eachImg.style.filter = "blur(0px)";
                    if (eachImg.style.filter == "blur(0px)")
                    {
                        console.log("loadedd");
                        return;
                    }
                    console.log("noot loadedd");
                });
            });



        // ALL LINKS

            allLinks.forEach(link => 
            {

                // Sets rel to "no-referrer" if it hasn't been set.
                if(link.rel.valueOf() == "")
                {
                    link.rel = "noopener no-referrer";
                }

                // Testing finding opening the "Error404" page if url is not set
                function extractHash(url)
                {
                    // Find the index of '#' character
                    var hashIndex = url.indexOf('#');
                    
                    // If '#' character is found and nothing else exceeds it
                    if (hashIndex === url.length - 1)
                    {
                        link.href = "/Error404.html";
                    }
                }
                extractHash(link.href);

                // Prevents draggable
                // link.draggable = false;
            });



        // SHARE

            // navigator.share function
            function navigatorSclShareModal()
            {
                if(navigator.share)
                {
                    navigator.share(
                    {
                        title: `${socialShareTitle}`,
                        url: `${socialShareLink}`,
                        msg: `${socialShareMsg}`
                    })
                    .then(() => 
                    {
                        console.log("Thanks for sharing");
                    })
                    .catch(console.error);
                }
                else
                {
                    customSclShareModal();
                }
            }

            // Fallback called if "navigator.share" is not supported
            function customSclShareModal()
            {
                const sclShareBdr = document.createElement("div");
                sclShareBdr.classList.add("genAtnModalBdr");
                sclShareBdr.innerHTML = socialShareHTML;
                documentBody.appendChild(sclShareBdr);
                
                const sclShareCloseBtn = document.querySelectorAll(".closeSclShare");
                const sclShareBox = document.querySelector(".sclShareBox");
                const sclShareOpt = sclShareBox.querySelectorAll(".genAtnModalOptBox");
                socialDestinationH = window.innerHeight;
                socialDestinationW = window.innerWidth;

                let fbLink = `https://www.facebook.com/sharer/sharer.php?u=${socialShareLink}`;
                let twLink = `https://twitter.com/intent/tweet?url=${socialShareLink}&text=${socialShareTitle}`;
                let waLink = `https://api.whatsapp.com/send?text=${socialShareTitle}: ${socialShareLink}`;
                let pnLink = `https://www.pinterest.com/pin/create/button?url=${socialShareLink}&description=${socialShareTitle}`;
                let rdlink = `https://reddit.com/submit?url=${socialShareLink}&title=${socialShareTitle}`;
                let tgLink = `https://telegram.me/share/url?url=${socialShareLink}&text=${socialShareTitle}`;
                let tbLink = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${socialShareLink}&title=${socialShareTitle}&caption=${socialShareMsg}`;
                let yhLink = `https://compose.mail.yahoo.com/?body=${socialShareLink}`;
                let lnLink = `https://line.me/R/msg/text/?${socialShareLink}`;
                let okLink = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${socialShareLink}&title=${socialShareTitle}`;
                let vkLink = `https://vk.com/share.php?url=${socialShareLink}`;
                let emLink = `mailto:%7Bemail_address%7D?subject=${socialShareLink}&body=${socialShareTitle}%20`;
                let gmLink = `https://mail.google.com/mail/?view=cm&to=%7Bemail_address%7D&su=${socialShareTitle}&body=${socialShareLink}&bcc=%7Bemail_address%7D&cc=%7Bemail_address%7D`;

                shareShowBtn.forEach(btn => 
                {
                    btn.addEventListener("click" , () => 
                    {
                        btn.disabled = true;
                    });
                });

                socialShareTimer = setTimeout(() => 
                {
                    documentBody.classList.add("bodystop");
                    sclShareBdr.classList.add("active");
                    sclShareBox.classList.add("active");
                    clearTimeout(socialShareTimer);
                }, 100);

                // Setting title of Options
                sclShareOpt.forEach(opt => 
                {
                    let sclDataShare = opt.getAttribute("data-share").toLowerCase();
                    const sclShareOptText = opt.querySelector(".shareText");
                    opt.title = "Share on " + sclShareOptText.textContent;
                    opt.ariaLabel = sclShareOptText.textContent;

                    opt.addEventListener("click" , () => 
                    {
                        shareDestination(sclDataShare);
                    });
                });

                // Redirecting to share destination
                function shareDestination(destination)
                {
                    switch(destination)
                    {
                        case "facebook":
                            window.open(`${fbLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "twitter":
                            window.open(`${twLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "whatsapp":
                            window.open(`${waLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "pinterest":
                            window.open(`${pnLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "reddit":
                            window.open(`${rdlink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "telegram":
                            window.open(`${tgLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "tumblr":
                            window.open(`${tbLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "yahoo":
                            window.open(`${yhLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "line":
                            window.open(`${lnLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "okru":
                            window.open(`${okLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "vkontakte":
                            window.open(`${vkLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "email":
                            window.open(`${emLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        case "gmail":
                            window.open(`${gmLink}`, "_blank" , `height=${socialDestinationH}, width=${socialDestinationW}`);
                            break;
                        default:
                            alert("An error occured");
                            break;
                    }
                }

                // Closes the Download bdr
                function closeSclShareBox()
                {
                    documentBody.classList.remove("bodystop");

                    // Removes style classes
                    sclShareBdr.classList.remove("active");
                    sclShareBox.classList.remove("active");

                    socialShareTimer = setTimeout(() => 
                    {
                        documentBody.removeChild(sclShareBdr);
                        shareShowBtn.forEach(btn => 
                        {
                            btn.addEventListener("click" , () => 
                            {
                                btn.disabled = false;
                            });
                        });
                        documentBody.classList.remove("bodystop");
                        clearTimeout(socialShareTimer);

                    }, 300);
                }

                sclShareCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeSclShareBox);
                });
            }

            shareShowBtn.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    navigatorSclShareModal();
                });
            });




        // WATCHLIST

            addToWatchListBox.forEach(box => 
            {
                const addToWatchListText = box.querySelector(".add_to_WatchListText");
                box.addEventListener("click" , () => 
                {
                    if(box.classList.contains("active"))
                    {
                        box.classList.remove("active");
                        addToWatchListText.textContent = "Watchlist";
                        box.title = "Add to Watchlist";
                        box.ariaLabel = "Add to Watchlist";
                        return;
                    }
                    box.classList.add("active");
                    addToWatchListText.textContent = "In Watchlist";
                    box.title = "Remove from Watchlist";
                    box.ariaLabel = "Remove from Watchlist";
                });
            });




        // ADD TO PLAYLIST

            function addToPLFunc()
            {
                const playListBdr = document.createElement("div");
                playListBdr.classList.add("genAtnModalBdr");
                playListBdr.innerHTML = addToPLHTML;
                documentBody.appendChild(playListBdr);

                const playListCloseBtn = document.querySelectorAll(".closeAddToPL");
                const playListBox = document.querySelector(".addToPLBox");
                const playListItemBcg = document.querySelector(".addToPLItemBcg");
                const playListItemBox = document.querySelector(".addToPLItemBox");
                const playListItem = document.querySelectorAll(".plItem");
                const newPLBtn = document.querySelector(".newPLBtn");
                const newPLModal = document.querySelector(".newPLBdr");
                const newPLInput = document.querySelector("#newPLInputId");
                const newPLWarn = document.querySelector("#newPLWarnId");
                const createPLBtn = document.querySelector("#createNewPL");
                const cancelPLBtn = document.querySelector("#cancelNewPL");
                let inputUppBnd = 50;
                let inputLowBnd = 2;
                let plArr = [];
                let lastPLArr;
                let lastPLArrLength = 0;
                let currLength = 0;
                let wordCount = inputUppBnd;

                openAddToPLBtn.forEach(btn => 
                {
                    btn.addEventListener("click" , () => 
                    {
                        btn.disabled = true;
                    });
                });

                addToPLTimer = setTimeout(() => 
                {
                    documentBody.classList.add("bodystop");
                    playListBdr.classList.add("active");
                    playListBox.classList.add("active");
                    clearTimeout(addToPLTimer);
                }, 100);


                playListItem.forEach(item => 
                {
                    const itemName = item.querySelector(".genAtnModalOptText").textContent;

                    // Setting properties
                    item.setAttribute("data-list" , itemName);
                    item.title = "Add to " + itemName;
                    item.ariaLabel = "Add to " + itemName;

                    // Send notification when show is added
                    item.addEventListener("click" , () => 
                    {
                        notification(`Show successfully added to ${itemName}`);
                        item.disabled = true;
                    });
                });

                // Opens the Create playList modal
                newPLBtn.addEventListener("click" , () => 
                {
                    playListItemBcg.scrollTo(0 , 0);
                    newPLBtn.classList.add("inactive");
                    newPLModal.classList.add("active");

                    newPLInput.disabled = false;
                    cancelPLBtn.disabled = false;
                });


                function closeNewPLModal()
                {
                    newPLBtn.classList.remove("inactive");
                    newPLModal.classList.remove("active");
                    newPLWarn.classList.remove("active");
                    newPLWarn.classList.remove("empty");

                    newPLInput.value = "";
                    newPLWarn.textContent = "";

                    newPLInput.disabled = true;
                    cancelPLBtn.disabled = true;
                    createPLBtn.disabled = true;
                }

                // Closes the Create playList modal
                cancelPLBtn.addEventListener("click" , closeNewPLModal);

                // checking input length
                function getWordCount(input)
                {
                    plArr.push(input);
                    lastPLArr = plArr.at(-1);
                    lastPLArrLength = lastPLArr.length;

                    // update warn label
                    currLength = wordCount - lastPLArrLength;
                    newPLWarn.textContent = currLength;

                    newPLWarn.classList.toggle("active" , currLength < 16);
                    newPLWarn.classList.toggle("empty" , currLength < 1);

                    checkBeforeCreate(lastPLArr);
                }

                // Check if name is valid (3 - 64 characters)
                function checkBeforeCreate(val)
                {
                    if(val.length < inputLowBnd || (val.length > inputUppBnd))
                    {
                        createPLBtn.disabled = true;
                        return;
                    }
                    createPLBtn.disabled = false;
                }

                newPLInput.addEventListener("input" , () => 
                {
                    getWordCount(newPLInput.value);
                });

                // Ensures playlist doesnt exist before creating a new one
                function matchNames(plName)
                {

                    console.log("the curr list length => " + playListItem.length);
                    for(let m = 0; m < playListItem.length; m++)
                    {
                        let plNameLC = plName.toLowerCase();
                        let playListItemText = playListItem[m].querySelector(".genAtnModalOptText").textContent.toLowerCase();
                        console.log("the curr list length => " + playListItem.length);

                        if(plNameLC == playListItemText)
                        {
                            notification(`${plName} already exists`);
                            return;
                        }
                    }
                    let newListHTML = 
                    `
                        <button data-list="${plName}" class="genAtnModalOptBox plItem" title="Add to ${plName}" aria-label="Add to ${plName}">
                            <div class="genAtnModalOptIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="genAtnModalOptIcon">
                                    <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">${plName}</span>
                            </div>
                        </button>
                    `;
                    playListItemBox.insertAdjacentHTML("beforeend" , newListHTML);
                    notification(`Show successfully added to ${plName}`);
                    
                    closeNewPLModal();
                }

                createPLBtn.addEventListener("click" , () => 
                {
                    matchNames(newPLInput.value);
                });


                // Closes the Playlist modal
                function closeAddToPL()
                {
                    documentBody.classList.remove("bodystop");
                    playListBdr.classList.remove("active");
                    playListBox.classList.remove("active");

                    addToPLTimer = setTimeout(() => 
                    {
                        documentBody.removeChild(playListBdr);
                        openAddToPLBtn.forEach(btn => 
                        {
                            btn.addEventListener("click" , () => 
                            {
                                btn.disabled = false;
                            });
                        });
                        documentBody.classList.remove("bodystop");
                        clearTimeout(addToPLTimer);

                    }, 300);
                }

                playListCloseBtn.forEach(one => 
                {
                    one.addEventListener("mousedown" , closeAddToPL);
                });
            }

            openAddToPLBtn.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    addToPLFunc();
                });
            });

    }






    
