/**********************************************************************************************************
 * This is the general script file of Uvid
 * From here, all general actions performed all over the website are written here
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/



// DEFINITION

    const documentHTML = document.querySelector("html");;
    const documentBody = document.body;
    const documentTitle = document.title;
    const documentMain = document.querySelector("main");
    const documentCtnt = document.querySelector("content .content");
    const preload = document.querySelector("#preloader");
    const developerLink = "https://acbennny.netlify.app";
    const basicSliderScriptPath = "/basic_slider.js";
    const topNavBar = document.querySelector(".topNavBar");
    const sideNavBar = document.querySelector(".sideNavBar");
    const btmNavBar = document.querySelector(".btmNavBar");
    let genContainerMaxWidth = 1200;
    let winWidth1025 = 1025;
    let winWidth768 = 768;
    let winWidth565 = 565;
    let winWidth485 = 485;
    let currOpenGenMenuModalBtnIndex = null;
    let genMenuModalMap;
    let genMenuModalBdr;
    let genMenuModalBox;
    let genMenuModalCtntBdr;
    let openGenMenuModalBtnTimer;
    let genAtnModalBoxDragDist = 10;
    let genMenuModalIsDragging = false
    let genMenuBoxStartY = 0;
    let startGenMenuBoxHeight = 0;
    let currGenMenuBoxHeight = 0;
    let genMenuModalBoxHeightTimer;
    let notificationQueue = [];
    let isNotificationActive = false;
    let notificationDuration = 3;
    let notificationTransition = 300;
    let preNotifyTimer;
    let midNotifyTimer;
    let endNotifyTimer;
    let navbarUnderlayer;
    let navBarNotificationStatusNoBox;
    let navBarNotificationTimer;
    let openNavBarNotificationBtn;
    let openSwitchProfBtn;
    let switchProfScript;
    let navBarSignOutBtn;
    let accountSignOutTimer;
    let openFeedBackForm;
    let addToWLTimer;
    let socialShareTimer;
    let socialDestinationH;
    let socialDestinationW;
    const topNavBarStruct = 
    `
        <div class="topNavBdr">
            <div class="topNavBox">
                <section class="topNav_section">
                    <div class="company_logoBdr">
                        <div class="company_logoBox Companylogo">
                            <img src="/Images/uvidLogo.png" alt="" class="company_logoImg">
                        </div>
                    </div>
                </section>
                <section class="topNav_section">
                    <div class="sideNavItemsCardBase">
                        <div class="sideNavItemsCardBdr openQuickSearchBtn">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                        <path d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" />
                                        <path fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sideNavItemsCardBase topNav_openNavNotify">
                        <button type="button" class="sideNavItemsCardBdr openNavNotify">
                            <div class="sideNavItemsCardBox">
                                <div class="sideNavItemsCardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg">
                                        <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" />
                                    </svg>
                                </div>
                                <div class="navBarNotificationStatusNo_bdr">
                                    <div class="navBarNotificationStatusNo_box">
                                        <div class="navBarNotificationStatusNo_text"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="navBarProfileBdr">
                        <div class="navBarProfileBox open_nav_profileOptions">
                            <div class="navBarProfileImageBox">
                                <img src="/Images/Uvid_profilebase.png" alt="Profile Image" class="navBarProfileImage" loading="eager">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
    const sideNavBarStruct = 
    `
        <div class="sideNavBdr">
            <div class="sideNavBox">
                <section class="sideNav_section">
                    <div class="company_logoBdr">
                        <div class="company_logoBox Companylogo">
                            <img src="/Images/uvidLogo.png" alt="" class="company_logoImg">
                        </div>
                    </div>
                    <div class="sideNavItemsBdr">
                        <div class="sideNavItemsBox">
                            <div class="sideNavItemsCardBase">
                                <button type="button" class="sideNavItemsCardBdr openQuickSearchBtn">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                                <path d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" />
                                                <path fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Search</div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="sideNavItemsCardBase">
                                <a href="/Home.html" class="sideNavItemsCardBdr sideNavLinks">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                                <path d="M9.447 15.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"/>
                                                <path fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                                <path fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Home</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="sideNavItemsCardBase">
                                <a href="/User/Watchlist.html" class="sideNavItemsCardBdr sideNavLinks">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg watchlistSvg sideNavOutlineIcon">
                                                <g fill="none" stroke="currentColor" stroke-width="1.5">
                                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                    <path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10" />
                                                    <path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" />
                                                </g>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Watchlist</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="sideNavItemsCardBase">
                                <a href="/Categories.html" class="sideNavItemsCardBdr sideNavLinks">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                                <path fill-rule="evenodd" d="M5.948 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v2.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242V6.448c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.344-.08-2.243-.08zM3.116 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v2c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094v-2c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789m14.331 7.134c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.344-.08 2.242v2.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-2.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094v2c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095v-2c0-.964.002-1.612.066-2.095c.063-.461.17-.659.3-.789M16.475 1.75h2.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-2.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021m-1.018 1.517c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17 17 0 0 0 14.25 5.5c0 .476 0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h2c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 18.5 3.25h-2c-.476 0-.796 0-1.043.017M4.975 14.75c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078A17 17 0 0 1 5 16.25h2c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078A17 17 0 0 1 7 20.75H5c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 18.5c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677" clip-rule="evenodd"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                                <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Categories</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="sideNavItemsCardBase">
                                <a href="/Schedule.html" class="sideNavItemsCardBdr sideNavLinks">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                                <path d="M17 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
                                                <path fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75M5.71 4.89c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M2.75 12c0-.854 0-1.597.013-2.25h18.474c.013.653.013 1.396.013 2.25v2c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                                <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
                                                <path fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Schedule</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="sideNavItemsCardBase">
                                <a href="/News.html" class="sideNavItemsCardBdr newsNavLink sideNavLinks">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavOutlineIcon">
                                                <path fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.298.299.512.636.667 1.01c.932.116 1.715.372 2.333.99c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.618.618-1.4.874-2.333.991c-.155.373-.369.71-.667 1.009c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982a3.1 3.1 0 0 1-.667-1.009c-.932-.117-1.715-.373-2.333-.991c-.602-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.618-.618 1.4-.874 2.333-.99a3.1 3.1 0 0 1 .667-1.01c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.328 4.94c-.437.106-.71.26-.919.47c-.277.276-.457.664-.556 1.398c-.101.756-.103 1.757-.103 3.192v4c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.209.209.482.363.92.469c-.079-.812-.079-1.806-.079-3.005v-8.11c0-1.198 0-2.193.078-3.005m15.344 14.12c.437-.106.71-.26.919-.469c.277-.277.457-.665.556-1.4c.101-.754.103-1.755.103-3.19v-4c0-1.436-.002-2.437-.103-3.193c-.099-.734-.28-1.122-.556-1.399c-.209-.209-.482-.363-.92-.469c.079.812.079 1.807.079 3.005v8.11c0 1.198 0 2.193-.078 3.005M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg sideNavBoldIcon">
                                                <path d="M1.75 10v4c0 2.829 0 4.243.879 5.122c.217.217.467.38.763.504l-.019-.134c-.123-.918-.123-2.063-.123-3.393V7.902c0-1.33 0-2.476.123-3.393l.02-.134a2.3 2.3 0 0 0-.764.504C1.75 5.758 1.75 7.172 1.75 10m20 0v4c0 2.829 0 4.243-.879 5.122c-.217.217-.467.38-.763.504l.019-.134c.123-.918.123-2.063.123-3.393V7.902c0-1.33 0-2.476-.123-3.393l-.02-.134c.297.123.547.287.764.504c.879.879.879 2.293.879 5.121" />
                                                <path fill-rule="evenodd" d="M5.629 2.879C4.75 3.757 4.75 5.172 4.75 8v8c0 2.828 0 4.243.879 5.121C6.507 22 7.922 22 10.75 22h2c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C16.993 2 15.578 2 12.75 2h-2c-2.828 0-4.243 0-5.121.879M8 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17m.75-4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">News</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="sideNav_section">
                    <div class="sideNavItemsBdr">
                        <div class="sideNavItemsBox">
                            <div class="sideNavItemsCardBase">
                                <button type="button" class="sideNavItemsCardBdr openFeedBackForm">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg">
                                                <path fill-rule="evenodd" d="M8.95 8.25h6.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v4.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.696.062h-6.1c-.664 0-1.237 0-1.696-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-4.098c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062M7.455 9.798c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h6c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-4c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048H9c-.728 0-1.2.002-1.546.048" clip-rule="evenodd" />
                                                <path d="M7 5.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" />
                                                <path fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Feedback</div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="sideNavItemsCardBase">
                                <div class="sideNavItemsCardBdr openNavNotify">
                                    <div class="sideNavItemsCardBox">
                                        <div class="sideNavItemsCardIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sideNavItemsCardSvg">
                                                <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" />
                                            </svg>
                                        </div>
                                        <div class="sideNavItemsCardTitleBdr">
                                            <div class="sideNavItemsCardTitleBox">
                                                <div class="sideNavItemsCardTitleText">Notifications</div>
                                            </div>
                                        </div>
                                        <div class="navBarNotificationStatusNo_bdr">
                                            <div class="navBarNotificationStatusNo_box">
                                                <div class="navBarNotificationStatusNo_text"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="navBarProfileBdr">
                                <div class="navBarProfileBox open_nav_profileOptions">
                                    <div class="navBarProfileImageBox">
                                        <img src="/Images/Uvid_profilebase.png" alt="Profile Image" class="navBarProfileImage" loading="eager">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
    const btmNavBarStruct = 
    `
        <div class="btmNavBdr">
            <div class="btmNavBox">
                <div class="btmNavItemsCardBase">
                    <a href="/Home.html" class="btmNavItemsCardBdr btmNavLinks ">
                        <div class="btmNavItemsCardBox">
                            <div class="btmNavItemsCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavOutlineIcon">
                                    <path d="M9.447 15.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"/>
                                    <path fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavBoldIcon">
                                    <path fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="btmNavItemsCardTitleBdr">
                                <div class="btmNavItemsCardTitleBox">
                                    <div class="btmNavItemsCardTitleText">Home</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <!-- <div class="btmNavItemsCardBase">
                    <a href="/Catalog.html" class="btmNavItemsCardBdr btmNavLinks ">
                        <div class="btmNavItemsCardBox">
                            <div class="btmNavItemsCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavOutlineIcon">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m12.599-2.819c-.605.16-1.42.485-2.595.955c-.541.217-.642.268-.716.333a1 1 0 0 0-.07.069c-.064.074-.115.175-.332.716c-.47 1.175-.794 1.99-.955 2.595c-.167.63-.085.79-.059.83a.8.8 0 0 0 .2.198c.038.027.199.108.829-.059c.605-.16 1.42-.484 2.594-.954c.542-.217.643-.268.717-.333l.494.564l-.494-.564a1 1 0 0 0 .07-.07l.563.495l-.564-.494c.065-.074.116-.175.333-.717c.47-1.174.794-1.99.954-2.594c.168-.63.086-.791.06-.83a.8.8 0 0 0-.2-.199c-.038-.026-.2-.108-.83.06m-.384-1.45c.69-.183 1.436-.271 2.057.15c.234.16.437.362.596.597c.422.621.333 1.367.15 2.057c-.186.704-.546 1.605-.991 2.717l-.02.05l-.034.084c-.163.41-.308.772-.564 1.065a2 2 0 0 1-.208.208c-.293.256-.655.4-1.065.564l-.083.033l-.279-.696l.279.697l-.05.02c-1.113.445-2.014.805-2.718.991c-.69.183-1.436.272-2.057-.15l.422-.62l-.422.62a2.3 2.3 0 0 1-.596-.596c-.422-.621-.334-1.368-.15-2.057c.186-.705.546-1.605.991-2.717l.02-.05l.034-.085c.163-.41.307-.771.564-1.064q.097-.11.208-.208c.293-.257.655-.401 1.064-.564l.084-.034l.05-.02c1.113-.445 2.013-.805 2.718-.992"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavBoldIcon">
                                    <path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="btmNavItemsCardTitleBdr">
                                <div class="btmNavItemsCardTitleBox">
                                    <div class="btmNavItemsCardTitleText">Catalog</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> -->
                <div class="btmNavItemsCardBase">
                    <a href="/User/Watchlist.html" class="btmNavItemsCardBdr btmNavLinks ">
                        <div class="btmNavItemsCardBox">
                            <div class="btmNavItemsCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg watchlistSvg btmNavOutlineIcon">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10" />
                                        <path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" />
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavBoldIcon">
                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                </svg>
                            </div>
                            <div class="btmNavItemsCardTitleBdr">
                                <div class="btmNavItemsCardTitleBox">
                                    <div class="btmNavItemsCardTitleText">Watchlist</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="btmNavItemsCardBase">
                    <a href="/Categories.html" class="btmNavItemsCardBdr btmNavLinks ">
                        <div class="btmNavItemsCardBox">
                            <div class="btmNavItemsCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavOutlineIcon">
                                    <path fill-rule="evenodd" d="M5.948 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v2.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242V6.448c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.344-.08-2.243-.08zM3.116 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v2c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094v-2c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789m14.331 7.134c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.344-.08 2.242v2.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-2.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094v2c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095v-2c0-.964.002-1.612.066-2.095c.063-.461.17-.659.3-.789M16.475 1.75h2.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-2.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021m-1.018 1.517c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17 17 0 0 0 14.25 5.5c0 .476 0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h2c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 18.5 3.25h-2c-.476 0-.796 0-1.043.017M4.975 14.75c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078A17 17 0 0 1 5 16.25h2c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078A17 17 0 0 1 7 20.75H5c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 18.5c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677" clip-rule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavBoldIcon">
                                    <path d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" />
                                </svg>
                            </div>
                            <div class="btmNavItemsCardTitleBdr">
                                <div class="btmNavItemsCardTitleBox">
                                    <div class="btmNavItemsCardTitleText">Categories</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="btmNavItemsCardBase">
                    <a href="/Schedule.html" class="btmNavItemsCardBdr btmNavLinks ">
                        <div class="btmNavItemsCardBox">
                            <div class="btmNavItemsCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavOutlineIcon">
                                    <path d="M17 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
                                    <path fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75M5.71 4.89c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M2.75 12c0-.854 0-1.597.013-2.25h18.474c.013.653.013 1.396.013 2.25v2c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z" clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavBoldIcon">
                                    <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
                                    <path fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="btmNavItemsCardTitleBdr">
                                <div class="btmNavItemsCardTitleBox">
                                    <div class="btmNavItemsCardTitleText">Schedule</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="btmNavItemsCardBase">
                    <a href="/News.html" class="btmNavItemsCardBdr btmNavLinks newsNavLink">
                        <div class="btmNavItemsCardBox">
                            <div class="btmNavItemsCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavOutlineIcon">
                                    <path fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.298.299.512.636.667 1.01c.932.116 1.715.372 2.333.99c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.618.618-1.4.874-2.333.991c-.155.373-.369.71-.667 1.009c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982a3.1 3.1 0 0 1-.667-1.009c-.932-.117-1.715-.373-2.333-.991c-.602-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.618-.618 1.4-.874 2.333-.99a3.1 3.1 0 0 1 .667-1.01c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.328 4.94c-.437.106-.71.26-.919.47c-.277.276-.457.664-.556 1.398c-.101.756-.103 1.757-.103 3.192v4c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.209.209.482.363.92.469c-.079-.812-.079-1.806-.079-3.005v-8.11c0-1.198 0-2.193.078-3.005m15.344 14.12c.437-.106.71-.26.919-.469c.277-.277.457-.665.556-1.4c.101-.754.103-1.755.103-3.19v-4c0-1.436-.002-2.437-.103-3.193c-.099-.734-.28-1.122-.556-1.399c-.209-.209-.482-.363-.92-.469c.079.812.079 1.807.079 3.005v8.11c0 1.198 0 2.193-.078 3.005M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btmNavItemsCardSvg btmNavBoldIcon">
                                    <path d="M1.75 10v4c0 2.829 0 4.243.879 5.122c.217.217.467.38.763.504l-.019-.134c-.123-.918-.123-2.063-.123-3.393V7.902c0-1.33 0-2.476.123-3.393l.02-.134a2.3 2.3 0 0 0-.764.504C1.75 5.758 1.75 7.172 1.75 10m20 0v4c0 2.829 0 4.243-.879 5.122c-.217.217-.467.38-.763.504l.019-.134c.123-.918.123-2.063.123-3.393V7.902c0-1.33 0-2.476-.123-3.393l-.02-.134c.297.123.547.287.764.504c.879.879.879 2.293.879 5.121" />
                                    <path fill-rule="evenodd" d="M5.629 2.879C4.75 3.757 4.75 5.172 4.75 8v8c0 2.828 0 4.243.879 5.121C6.507 22 7.922 22 10.75 22h2c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C16.993 2 15.578 2 12.75 2h-2c-2.828 0-4.243 0-5.121.879M8 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17m.75-4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="btmNavItemsCardTitleBdr">
                                <div class="btmNavItemsCardTitleBox">
                                    <div class="btmNavItemsCardTitleText">News</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;
    const navBarProfileMenuStruct = 
    `
        <div class="navBarProfileOptBdr navBarMenuFixed">
            <div class="navBarProfileOptBox">
                <div class="navBarProfileNameBox">
                    <p class="navBarProfileNameText navBarProfileNameTextMajor navBarProfileNameWatching">acbennny</p>
                    <p class="navBarProfileNameText navBarProfileNameTextMinor navBarProfileNameUser">uvidtestuser</p>
                </div>
                <div class="navBarProfileCardBox">
                    <button type="button" class="navBarProfileCard">
                        <a href="/User/Profile.html" class="navBarProfileCardLink">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                <circle cx="12" cy="6" r="4" />
                                <ellipse cx="12" cy="17" rx="7" ry="4" />
                            </svg>
                            <p class="navBarProfileCardLinkText">Profile</p>
                        </a>
                    </button>
                    <button type="button" class="navBarProfileCard">
                        <a href="javascript:;" class="navBarProfileCardLink open_switchProf">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                <path d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z" />
                                <path d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z" />
                            </svg>
                            <p class="navBarProfileCardLinkText">Switch Profile</p>
                        </a>
                    </button>
                    <button type="button" class="navBarProfileCard">
                        <a href="/User/History.html" class="navBarProfileCardLink">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                <path fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" />
                            </svg>
                            <p class="navBarProfileCardLinkText">History</p>
                        </a>
                    </button>
                    <button type="button" class="navBarProfileCard">
                        <a href="/User/Notification.html" class="navBarProfileCardLink">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" />
                            </svg>
                            <p class="navBarProfileCardLinkText">Notification</p>
                        </a>
                    </button>
                    <button type="button" class="navBarProfileCard">
                        <a href="/User/Settings.html" class="navBarProfileCardLink">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon">
                                <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                            </svg>
                            <p class="navBarProfileCardLinkText">Settings</p>
                        </a>
                    </button>
                    <button type="button" class="navBarProfileCard">
                        <a href="javascript:;" class="navBarProfileCardLink goToFullScreenBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon maximize">
                                <path d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarProfileCardLinkIcon minimize">
                                <path d="M20.857 9.75a.75.75 0 1 0 0-1.5h-4.046l5.72-5.72a.75.75 0 0 0-1.061-1.06l-5.72 5.72V3.142a.75.75 0 0 0-1.5 0V9c0 .414.336.75.75.75zm-17.714 4.5a.75.75 0 0 0 0 1.5h4.046l-5.72 5.72a.75.75 0 1 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z" />
                            </svg>
                            <p class="navBarProfileCardLinkText">Fullscreen</p>
                        </a>
                    </button>
                </div>
                <div class="navBarSignOutBdr">
                    <div class="navBarSignOutBox">
                        <button type="button" class="navBarSignOutBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarSignOutBtnIcon">
                                <path d="M14.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.524.525-.79 1.17-.929 1.928c-.135.737-.161 1.638-.167 2.72a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399s-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008c.006 1.082.032 1.983.167 2.72c.14.758.405 1.403.93 1.928c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116h1.11c1.368 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.121-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z" />
                                <path d="M15 11.25a.75.75 0 0 1 0 1.5H4.027l1.961 1.68a.75.75 0 1 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 1 1 .976 1.14l-1.96 1.68z" />
                            </svg>
                            <p class="navBarSignOutBtnText">Sign Out</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    const navBarNotificationMainHTML = 
    `
        <div class="navBarNotificationMinor">
            <div class="navBarNotificationHeaderBdr">
                <div class="navBarNotificationHeaderBox">
                    <button type="button" class="navBarNotificationHeaderBtn markAllNavBarNotificationsAsRead">
                        <div class="navBarNotificationHeaderIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navBarNotificationHeaderIconSvg">
                                <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="navBarNotificationHeaderText ">Mark all as read</p>
                    </button>
                </div>
            </div>
            <div class="navBarNotificationCtntBdr">
                <div class="navBarNotificationCtntBox"></div>
            </div>
            <div class="navBarNotificationFooterBdr">
                <a href="/User/Notification.html" class="navBarNotificationFooterBox">
                    <p class="navBarNotificationFooterText">View all</p>
                </a>
            </div>
        </div>
    `;
    const emptyNavBarNotificationBoxStruct = 
    `
        <div class="navBarNotificationCardBdr emptyNavBarNotification_box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="emptyNavBarNotification_icon">
                <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z"/>
            </svg>
            <p class="emptyNavBarNotification_text">No new notifications</p>
        </div>
    `;
    const footerHTML = 
    `
        <div class="give_space"></div>
        <footer class="footer_wrapper">
            <div class="footer_base">
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
                                    <span>Uvid is an online streaming platform tailored with providing the best streaming experience.</span>
                                    <span>Here you can watch from a vast library of movies, tv shows, anime and even cartoon shows for the kids.</span>
                                </p>
                            </div>
                            <div class="footer_Important_linksBox">
                                <a href="/User/Settings/Preferences.html" title="Preferences" class="footerlinks footer_Important_links">Preferences</a>
                                <a href="/Policies/Privacy.html" title="Privacy" class="footerlinks footer_Important_links">Privacy</a>
                                <a href="/Policies/TOU.html" title="Terms of Use" class="footerlinks footer_Important_links">Terms of Use</a>
                            </div>
                        </div>
                        <div class="footer_boxCtnt footer_OtherLinks">
                            <div class="footer_abt_titleBox">
                                <h4 class="footer_abt_title front">U</h4>
                                <h4 class="footer_abt_title back">seful Links</h4>
                            </div>
                            <div class="footer_UsefulLinksBdr">
                                <div class="footer_UsefulLinksBox">
                                    <a href="/Help.html#faq" title="Frequently Asked Questions" class="footerlinks footer_UsefulLinks">FAQ</a>
                                    <a href="/Help.html" title="Help Center" class="footerlinks footer_UsefulLinks">Help</a>
                                    <a href="/Feedback.html" title="Feedback" class="footerlinks footer_UsefulLinks">Feedback</a>
                                    <a href="/Support.html" title="Support Us" class="footerlinks footer_UsefulLinks">Support</a>
                                </div>
                                <div class="footer_UsefulLinksBox">
                                    <a href="/Help/Contact.html" title="Contact Us" class="footerlinks footer_UsefulLinks">Contact Us</a>
                                    <a href="/Policies/Cookies.html" title="Cookies" class="footerlinks footer_UsefulLinks">Cookies</a>
                                    <a href="/Policies/AdChoices.html" title="Ad Choices" class="footerlinks footer_UsefulLinks">Ad Choices</a>
                                    <a href="/Policies/Copyright.html" title="Copyright" class="footerlinks footer_UsefulLinks">Copyright</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="backtotopofpageBox">
                        <div class="backtotop backtotop_btn" title="Go to top" draggable="false">
                            <div class="backtotop_IconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="backtotop_Icon">
                                    <path fill-rule="evenodd" d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138z" clip-rule="evenodd" />
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
                    <div class="give_space"></div>
                </div>
            </div>
        </footer>
    `;
    const quickSearchStruct = 
    `
        <div class="quickSearchBase">
            <div class="quickSearchBcg"></div>
            <div class="quickSearchBdr">
                <div class="quickSearchBox">
                    <div class="quickSearchNoteBdr">
                        <div class="quickSearchNoteBox">
                            <p class="quickSearchNoteText">For quick access:</p>
                            <div class="quickSearchNoteKey">CTRL</div>
                            <span class="quickSearchNoteText">+</span>
                            <div class="quickSearchNoteKey">Q</div>
                        </div>
                    </div>
                    <div class="quickSearchInputBdr">
                        <div class="quickSearchInputBox">
                            <div class="quickSearchInputIcon quickSearchInputLeftIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickSearchInputSvg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"/>
                                </svg>
                            </div>
                            <input type="text" name="quickSearchInputFieldName" id="quickSearchInputFieldId" class="quickSearchInputFieldClass" placeholder="Search..">
                            <label for="quickSearchInputFieldId" class="quickSearchInputIcon quickSearchInputRightIcon quickSearchClearInput">
                                <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="quickSearchInputSvg">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </label>
                            <div onclick="window.open('/Catalog.html' , '_self')" title="Catalog" class="quickSearchInputIcon quickSearchInputRightIcon quickSearchToCatalog">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickSearchInputSvg">
                                    <path d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z" />
                                    <path fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.891c-.447-3.05-.67-4.574.278-5.561s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="quickSearchResultBdr">
                        <div class="quickSearchResultBox catalogBox"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let addToWLHTML = 
    `
        <div class="genAtnModalBcg closeAddToWL"></div>
        <div class="genAtnModalBox addToWLBox">
            <div class="genAtnModalCtnt">
                <div class="genAtnModalHeader">
                    <div class="genAtnModalHeaderIconBox closeAddToWL">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="genAtnModalHeaderIcon">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    <h3 class="genAtnModalHeaderText">
                        <span class="large">A</span>
                        <span class="small">dd to Watchlist</span>
                    </h3>
                </div>
                <div class="genAtnModalOptBcg addToWLItemBcg">
                    <div class="genAtnModalOptBdr addToWLItemBox">
                        <div class="genAtnModalOptBox newWLBtn" title="Create Watchlist" aria-label="Create-Watchlist-btn">
                            <div class="genAtnModalOptIconBox">
                                <svg transform="scale(0.85)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="genAtnModalOptIcon">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">Create Watchlist</span>
                            </div>
                        </div>
                        <div class="newWLBdr">
                            <div class="newWLBox">
                                <div class="newWLInputBdr">
                                    <div class="newWLInputBox">
                                        <input type="text" name="newPlayListInputField" id="newWLInputId" class="newWLInputClass" placeholder="Name your watchlist" disabled />
                                    </div>
                                </div>
                                <div class="newWLWarnBdr">
                                    <div class="newWLWarnBox">
                                        <p id="newWLWarnId" class="newWLWarnText" tabindex="-1"></p>
                                    </div>
                                </div>
                                <div class="newWLAtnBdr">
                                    <div class="newWLAtnBox">
                                        <button type="button" id="createNewWL" class="newWLAtnBtn inactiveBtn" disabled>Create</button>
                                        <button type="button" id="cancelNewWL" class="newWLAtnBtn hollowBtn" disabled>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                            <div class="genAtnModalOptIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIcon">
                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">Planned</span>
                            </div>
                        </button>
                        <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                            <div class="genAtnModalOptIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIcon">
                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">Watching</span>
                            </div>
                        </button>
                        <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                            <div class="genAtnModalOptIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIcon">
                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">On-Hold</span>
                            </div>
                        </button>
                        <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                            <div class="genAtnModalOptIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIcon">
                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">Completed</span>
                            </div>
                        </button>
                        <button data-list="" class="genAtnModalOptBox plItem" title="" aria-label="">
                            <div class="genAtnModalOptIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIcon">
                                    <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                    <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                    <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                    <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                </svg>
                            </div>
                            <div class="genAtnModalOptTextBox ">
                                <span class="genAtnModalOptText ">Dropped</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

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
    const genMenuModalBdrStruct = 
    `
        <div class="genMenuModalBcg"></div>
    `;
    const genMenuModalBoxStruct = 
    `
        <div class="genMenuModalDragHandleBdr">
            <div class="genMenuModalDragHandleBox">
                <div class="genMenuModalDragHandleIcon"></div>
            </div>
        </div>
    `;
    const genMenuModalCtntBdrStruct = 
    `
        <div class="genMenuModalCtntBox">
            <div class="preload_2_bdr">
                <div class="preload_2_box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="preload_2_spinner">
                        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                            <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    `;



    // CALLING GLOBALL SCOPE FUNCTIONS
    
        // Used to dynamically call functions in the global scope
        function callGlobalFunctions(functionName) 
        {
            if (typeof window[functionName] === 'function') 
            {
                window[functionName]();
            } 
            else
            {
                console.error("Function name is invalid!");
            }
        }


    // NOTIFICATION POPUP

        function showNextNotification()
        {
            if (notificationQueue.length === 0) 
            {
                isNotificationActive = false;
                return;
            }
        
            // Get the next notification from the queue
            const { notifyState, notifyCtnt, resolve } = notificationQueue.shift();

            const btnNotifyBdr = document.createElement('div');
            btnNotifyBdr.innerHTML = 
            `
                <div class="notifyBox">
                    <p class="notifyText">${notifyCtnt}</p>
                </div>
                <div class="notifyIconBox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="notifyIcon">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
            `;

            btnNotifyBdr.classList.add("notifyBdr");
            btnNotifyBdr.setAttribute(`style` , `--notifyTransitionStyle: ${notificationTransition}ms`);
            btnNotifyBdr.classList.add(`${notifyState}`);
            document.body.appendChild(btnNotifyBdr);
            
            // Ensures the element is added to the DOM before adding the class
            requestAnimationFrame(() => 
            {
                preNotifyTimer = setTimeout(() => 
                {
                    btnNotifyBdr.classList.add('notifyAtv');
                    clearTimeout(preNotifyTimer);
                }, notificationTransition);
            });

            isNotificationActive = true;
            let notifyIntervalDuration = notificationDuration;

            endNotifyTimer = setInterval(() => 
            {
                notifyIntervalDuration--;

                if(notifyIntervalDuration <= 0)
                {
                    clearInterval(endNotifyTimer);
                    btnNotifyBdr.classList.remove('notifyAtv');
                    midNotifyTimer = setTimeout(() => 
                    {
                        clearTimeout(midNotifyTimer);
                        document.body.removeChild(btnNotifyBdr);
                        resolve();
                        showNextNotification();
                    }, notificationTransition);
                }
            }, 1000);

            const closeNotifyBdr = btnNotifyBdr.querySelector(".notifyIconBox");
            closeNotifyBdr.addEventListener("click" , () => 
            {
                notifyIntervalDuration = 1;
            });
        }

        function notification(notifyState, notifyCtnt) 
        {
            return new Promise((resolve) => 
            {
                notificationQueue.push({ notifyState, notifyCtnt, resolve });
                if (!isNotificationActive) 
                {
                    // If no notification is active, show the next one immediately
                    showNextNotification(); 
                }
            });
        }



    // PRELOADER
        
        window.addEventListener("load", () => 
        {
            preload.classList.add("preloadClose");
            document.body.classList.add('bodystart');
            startApplication();
        });
    

    // START APP

        function startApplication()
        {
            
            // INSERT
                
                // Insert the NavBars
                topNavBar.insertAdjacentHTML(`afterbegin` , topNavBarStruct);
                sideNavBar.insertAdjacentHTML(`afterbegin` , sideNavBarStruct);
                btmNavBar.insertAdjacentHTML(`afterbegin` , btmNavBarStruct);

                // Insert Navbar Profile Menu
                document.body.insertAdjacentHTML(`beforeend` , navBarProfileMenuStruct);
                
                // Insert Footer
                documentCtnt.insertAdjacentHTML(`afterend` , footerHTML);


            // DEFINITION

                let lastWindowScroll = 0;
                let sideNavLinks = document.querySelectorAll(".sideNavLinks");
                let btmNavLinks = document.querySelectorAll(".btmNavLinks");
                let newsNavLink = document.querySelectorAll(".newsNavLink");
                let goToHomePage = document.querySelectorAll(".Companylogo");
                let goToFullScreenBtn = document.querySelectorAll(".goToFullScreenBtn");
                let openNavProfOptBtn = document.querySelectorAll(".open_nav_profileOptions");
                let navProfileOptionsBdr = document.querySelector(".navBarProfileOptBdr");
                let navProfileOptionsBox = document.querySelector(".navBarProfileOptBox");
                let openNavProfOptTimer;
                let locationOrigin;
                let backtotopBtn = document.querySelectorAll(".backtotop_btn");
                let developerProfile = document.querySelectorAll(".developer_profile");
                openFeedBackForm = document.querySelectorAll(".openFeedBackForm");
                navBarSignOutBtn = document.querySelector(".navBarSignOutBtn");
                navbarUnderlayer = document.querySelector(".navbar_UnderLayer");
                navBarNotificationStatusNoBox = document.querySelectorAll(".navBarNotificationStatusNo_box");
                openNavBarNotificationBtn = document.querySelectorAll(".openNavNotify");
                openSwitchProfBtn = document.querySelector(".open_switchProf");


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

                // Toggle Fullscreen
                goToFullScreenBtn.forEach((btn) => 
                {
                    btn.addEventListener("click" , () => 
                    {
                        if(!(document.fullscreenElement))
                        {
                            btn.title = "Exit Fullscreen";
                            btn.classList.add("isFullScreen");
                            documentHTML.requestFullscreen();
                            return;
                        }
                        btn.title = "Enter Fullscreen";
                        btn.classList.remove("isFullScreen");
                        document.exitFullscreen();
                    });
                });

                document.addEventListener("fullscreenchange", () => 
                {
                    if(!(document.fullscreenElement))
                    {
                        document.querySelector(".goToFullScreenBtn.isFullScreen").title = "Enter Fullscreen";
                        document.querySelector(".goToFullScreenBtn.isFullScreen").classList.remove("isFullScreen");
                    }
                });



            // NAVBAR

                window.addEventListener("scroll" , () => 
                {
                    // Darken NavBar on scroll
                    topNavBar.classList.toggle("float" , window.scrollY > 0);

                    // Hide/Unhide navbar while scrolling (If fullscreen is disabled)
                    if((!(document.fullscreenElement) && (window.innerHeight != screen.height)))
                    {
                        let currentWindowScroll = window.scrollY;

                        if((currentWindowScroll > lastWindowScroll))
                        {
                            topNavBar.classList.add("isScrollingDown");
                            btmNavBar.classList.add("isScrollingDown");
                        }
        
                        if((currentWindowScroll < lastWindowScroll))
                        {
                            topNavBar.classList.remove("isScrollingDown");
                            btmNavBar.classList.remove("isScrollingDown");
                        }
        
                        lastWindowScroll = currentWindowScroll;
                    }
                    else
                    {
                        topNavBar.classList.remove("isScrollingDown");
                        btmNavBar.classList.remove("isScrollingDown");
                    }
                });
                

                // Go to Home page
                goToHomePage.forEach(one => 
                {
                    one.addEventListener("click" , () => 
                    {
                        window.location.href = locationOrigin + "Home.html";
                    });
                });

                // Notify users that the News Page isn't ready
                newsNavLink.forEach((newsNav) => 
                {
                    newsNav.removeAttribute("href");
                    newsNav.addEventListener("click" , () => 
                    {
                        notification(`notifyBad` , `Page unavailable`);
                    });
                });

                // Profile Options
                function openNavProfileOptions()
                {
                    openNavProfOptBtn.forEach((btn) => 
                    {
                        btn.removeEventListener("click" , openNavProfileOptions);
                    });

                    navProfileOptionsBdr.classList.toggle("active");
                    toggleNavBarUnderLayer();

                    openNavProfOptTimer = setTimeout(() => 
                    {
                        document.addEventListener("click" , closeNavProfileOptions);
                        clearTimeout(openNavProfOptTimer);
                    }, 100);
                }

                function closeNavProfileOptions()
                {
                    if((navProfileOptionsBdr.classList.contains("active")))
                    {
                        document.removeEventListener("click" , closeNavProfileOptions);
                        navProfileOptionsBdr.classList.remove("active");
                        navProfileOptionsBox.scrollTo(null , 0);
                        toggleNavBarUnderLayer();

                        openNavProfOptBtn.forEach((btn) => 
                        {
                            btn.addEventListener("click" , openNavProfileOptions);
                        });
                    }
                }

                openNavProfOptBtn.forEach((btn) => 
                {
                    btn.addEventListener("click" , openNavProfileOptions);
                });

                // Signing Out of your Account
                navBarSignOutBtn.addEventListener("click" , accountSignOut);


            
            // NAVBAR ACTIVE STATE

                let currPagePathName = window.location.pathname;
                let extractedCurrPagePath = currPagePathName.replace(/\.html$/, "");
                let currPageSpecificSegment = extractedCurrPagePath.substring(extractedCurrPagePath.lastIndexOf('/') + 1);
                let currPageSpecificSegmentLC = currPageSpecificSegment.toLowerCase();

                switch(currPageSpecificSegmentLC)
                {
                    case 'home': 
                        sideNavLinks[0].classList.add("active");
                        btmNavLinks[0].classList.add("active");
                        break;
                    
                    case 'watchlist': 
                        sideNavLinks[1].classList.add("active");
                        btmNavLinks[1].classList.add("active");
                        break;
                    
                    case 'categories': 
                        sideNavLinks[2].classList.add("active");
                        btmNavLinks[2].classList.add("active");
                        break;
                    
                    case 'schedule': 
                        sideNavLinks[3].classList.add("active");
                        btmNavLinks[3].classList.add("active");
                        break;

                    case 'news': 
                        sideNavLinks[4].classList.add("active");
                        btmNavLinks[4].classList.add("active");
                        break;

                    default: 
                        console.error("Error: No corresponding navbar item found");
                        break;
                }



            // NAVBAR FEEDBACK FORM

                openFeedBackForm.forEach((btn) => 
                {
                    btn.addEventListener("click" , () => 
                    {
                        notification(`notifyBad` , `Feedback form unavailable`);
                    });
                });



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
                            notification(`notifyGood` , `Link copied to clipboard`);
                        })
                        .catch((err) => 
                        {
                            notification(`notifyBad` , `Could not copy link, ${err}`);
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


            // COMPONENTS

                insertSwitchProfJS();
                instantiateNavBarNotificationMenu();
                preQuickSearch();
                attachAddToWLEventListeners();
                attachSharePageEventListeners();

        }


    // GENERAL MESSAGE FOR FAILED REQUESTS

        function failedLoadErrorMsg()
        {
            notification(`notifyBad` , `Error processing request`);
        }


    // QUICK SEARCH
        
        function preQuickSearch()
        {
            // Check if inventory.js has been initialized
            let invScriptID = document.querySelector("#inventoryID");

            if(!(invScriptID == undefined))
            {
                initQuickSearch();
                return;
            }

            // If not, initialize
            let invScriptTag = document.createElement("script");
            invScriptTag.setAttribute(`id` , `inventoryID`);
            invScriptTag.setAttribute(`src` , `/inventory.js`);
            document.body.appendChild(invScriptTag);
    
            invScriptTag.addEventListener("load" , () => 
            {
                initQuickSearch();
            });
            invScriptTag.addEventListener("error" , () => 
            {
                notification(`notifyBad` , `An error occurred`);
                let openQuickSearchBtn = document.querySelectorAll(".openQuickSearchBtn");
                openQuickSearchBtn.addEventListener("click" , failedLoadErrorMsg)
            });
        }

        function initQuickSearch()
        {
            // Insert struct into the DOM
            documentBody.insertAdjacentHTML(`beforeend` , quickSearchStruct);

            // Definitions
            let openQuickSearchBtn = document.querySelectorAll(".openQuickSearchBtn");
            let quickSearchBase = document.querySelector(".quickSearchBase");
            let quickSearchBcg = document.querySelector(".quickSearchBcg");
            let quickSearchInputField = document.querySelector("#quickSearchInputFieldId");
            let quickSearchClearInput = document.querySelector(".quickSearchClearInput");
            let quickSearchToCatalog = document.querySelector(".quickSearchToCatalog");
            let quickSearchResultBox = document.querySelector(".quickSearchResultBox");
            let quickSearchResultAllBtn;
            let quickSearchQuery;
            let encodedSearchQuery;


            // Open quick Search 
            function openQuickSearchModal()
            {
                if(quickSearchBase.classList.contains("active")) return;;
                quickSearchBase.classList.add("active");
                quickSearchBase.addEventListener("transitionend" , function handleTransitionEnd()
                {
                    documentBody.classList.add("bodystop");
                    quickSearchInputField.focus();
                    quickSearchBase.removeEventListener("transitionend" , handleTransitionEnd);
                });
            }
            
            // Open by Shortcut: Ctrl + Q 
            function quickSearchShortcut(e)
            {
                let keyVal = e.key.toLowerCase();
                if((e.ctrlKey && keyVal === "q"))
                {
                    e.preventDefault();
                    openQuickSearchBtn[0].click();
                }
            }
            document.addEventListener("keydown" , e =>
            {
                quickSearchShortcut(e);
            });

            // Open by Search button
            openQuickSearchBtn.forEach((btn) => 
            {
                btn.addEventListener("click" , openQuickSearchModal);
            });

            // Close Quick Search
            quickSearchBcg.addEventListener("click" , () => 
            {
                quickSearchBase.classList.remove("active");
                documentBody.classList.remove("bodystop");
            });

            // Function to search results
            const displayQuickSearchResult = (items) => 
            {
                // Only seven results are displayed
                const resultRange = items.slice(0, 7);

                quickSearchResultBox.innerHTML = resultRange.map((item) => 
                {
                    const { show_link, show_thumbnail, show_title, show_scores, show_type, show_year, show_status } = item;
                    if((quickSearchQuery.length > 0) && (quickSearchQuery != undefined) && (quickSearchQuery != null) && (quickSearchQuery != " "))
                    {
                        return `
                            <a href="${show_link}" class="quickSearchResultCardBdr">
                                <div class="quickSearchResultCardBox">
                                    <div class="quickSearchResultCardThumbBdr">
                                        <div class="quickSearchResultCardThumbBox">
                                            <img src="${show_thumbnail}" alt="Thumbnail image of ${show_title}" class="quickSearchResultCardThumbImg">
                                        </div>
                                    </div>
                                    <div class="quickSearchResultDetBdr">
                                        <div class="quickSearchResultDetBox">
                                            <div class="cardInfoBox">
                                                <div class="quickSearchResultDetTitleBox">
                                                    <h3 class="quickSearchResultDetTitleText">${show_title}</h3>
                                                </div>
                                                <div class="quickSearchResultDetTagBdr">
                                                    <div class="quickSearchResultDetTagBox">
                                                        <div class="quickSearchResultDetTagSectBox quickSearchResultDetTagScoreBox">
                                                            <div class="quickSearchResultDetTagScoreIcon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="quickSearchResultDetTagScoreSvg">
                                                                    <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" />
                                                                </svg>
                                                            </div>
                                                            <p class="quickSearchResultDetTagSectText">${show_scores}</p>
                                                        </div>
                                                        <div class="quickSearchResultDetTagSectBox">
                                                            <p class="quickSearchResultDetTagSectText">•</p>
                                                        </div>
                                                        <div class="quickSearchResultDetTagSectBox">
                                                            <p class="quickSearchResultDetTagSectText">${show_type}</p>
                                                        </div>
                                                        <div class="quickSearchResultDetTagSectBox">
                                                            <p class="quickSearchResultDetTagSectText">•</p>
                                                        </div>
                                                        <div class="quickSearchResultDetTagSectBox">
                                                            <p class="quickSearchResultDetTagSectText">${show_year}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="quickSearchResultDetDescBox">
                                                    <h3 class="quickSearchResultDetDescText">${show_status}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                    else
                    {
                        return null;
                    }
                }).join('');
                
                // Configure View More btn
                viewMoreSearchResults();

                // Reattaching listeners
                attachAddToWLEventListeners();
            };

            // Viewing More Results
            function viewMoreSearchResults()
            {
                // Ensure there is content in the result box
                if(!(quickSearchResultBox.innerHTML == ``))
                {
                    quickSearchResultBox.insertAdjacentHTML(`beforeend` , 
                        `<a href="/Catalog.html?search=${encodedSearchQuery}" class="darkSolidBtn quickSearchResultAllBtn">View More</a>`
                    );
                    quickSearchResultAllBtn = document.querySelector(".quickSearchResultAllBtn");
                    return;
                }

                // If there is none, and the button is not undefined, remove the button
                if((quickSearchResultAllBtn == undefined)) return;
                quickSearchResultAllBtn.remove();
            }

            // Filter and display result based on user's entry
            function filterQuickSearchInput(e)
            {
                quickSearchQuery = quickSearchInputField.value.trim().toLowerCase();
                encodedSearchQuery = encodeURIComponent(quickSearchQuery);

                // Open the catalog page with the search input if "ENTER" key is pressed
                if(((quickSearchQuery != "") && (e.key.toLowerCase() === "enter")))
                {
                    e.preventDefault();
                    window.open(`/Catalog.html?search=${encodedSearchQuery}` , `_self`);
                    return;
                }

                // Filter Items
                const filteredData = searchInventory.filter((item) => item.show_searchKey.toLowerCase().includes(quickSearchQuery));
                displayQuickSearchResult(filteredData);
                
                // Toggle the clear input & catalog Icons
                if(quickSearchInputField.value.length > 0)
                {
                    quickSearchClearInput.classList.add("isTyping");
                    quickSearchToCatalog.classList.add("isTyping");
                    return;
                }
                quickSearchClearInput.classList.remove("isTyping");
                quickSearchToCatalog.classList.remove("isTyping");
            }
            
            quickSearchInputField.addEventListener("keyup", e => 
            {
                filterQuickSearchInput(e);
            });

            // Clears the search field
            quickSearchClearInput.addEventListener("click" , () => 
            {
                quickSearchInputField.value = "";
                quickSearchQuery = "";
                quickSearchClearInput.classList.remove("active");
                filterQuickSearchInput();
            });
        }


        
    // NAVBAR UNDERLAYER

        function toggleNavBarUnderLayer()
        {
            document.body.classList.toggle("bodystop");
            navbarUnderlayer.classList.toggle("active");
        }

        function addNavBarUnderLayer()
        {
            document.body.classList.add("bodystop");
            navbarUnderlayer.classList.add("active");
        }

        function removeNavBarUnderLayer()
        {
            document.body.classList.remove("bodystop");
            navbarUnderlayer.classList.remove("active");
        }



    // NAVBAR  NOTIFICATIONS

        function instantiateNavBarNotificationMenu()
        {
            // The border holding the elements of the notification box
            const navBarNotificationMain = document.createElement("div");
            navBarNotificationMain.classList.add("navBarNotificationMain");
            navBarNotificationMain.classList.add("navBarMenuFixed");

            // The Notification Bar Structure
            navBarNotificationMain.innerHTML = navBarNotificationMainHTML;

            // Append the fragment to navBarRightCtnt of the navbar
            documentBody.appendChild(navBarNotificationMain);
            let navBarNotificationCtntBox = document.querySelector(".navBarNotificationCtntBox");

            // Fetch the Notifications
            let notificationLibraryScriptId = document.querySelector("#notificationLibraryScriptId");
            if((notificationLibraryScriptId == undefined))
            {
                let notificationLibraryScriptTag = document.createElement("script");
                notificationLibraryScriptTag.setAttribute(`id` , `notificationLibraryScriptId`);
                notificationLibraryScriptTag.setAttribute(`src` , `/User/Notification/library.js`);
                document.body.appendChild(notificationLibraryScriptTag);

                notificationLibraryScriptTag.addEventListener("load" , () => 
                {
                    fetchNavBarNotifications();
                });
                notificationLibraryScriptTag.onerror = function() 
                {
                    errorLoadingNavBarNotifications();
                };
            }
            else
            {
                fetchNavBarNotifications();
            }

            // For error events
            function errorLoadingNavBarNotifications()
            {
                notification(`notifyBad` , `An error occurred while loading notifications`);
                openNavBarNotificationBtn.forEach((btn) => 
                {
                    btn.addEventListener("click" , failedLoadErrorMsg);
                });
            }

            function fetchNavBarNotifications()
            {
                // Check if content of library is available
                if(((notificationInventory == undefined) || (notificationInventory.length <= 0)))
                {
                    errorLoadingNavBarNotifications();
                    return;
                }

                // If available, insert the new notifications
                for(let i = 0; i < notificationInventory.length; i++)
                {
                    const item = notificationInventory[i];
                    const notificationCardStruct = 
                    `
                        <a href="${item.notify_actionLink}" title="${item.notify_actionText}" class="navBarNotificationCardBdr">
                            <div class="navBarNotificationCardBox">
                                <div class="navBarNotificationCard_ImgBdr">
                                    <div class="navBarNotificationCard_ImgBox">
                                        <img src="${item.notify_thumbnail}" alt="The thumbnail image of the '${item.notify_mainTopic}' notification"  class="navBarNotificationCard_ImgSrc">
                                    </div>
                                </div>
                                <div class="navBarNotificationCard_DetBdr">
                                    <div class="navBarNotificationCard_DetBox">
                                        <div class="navBarNotificationCard_MainTopicBdr">
                                            <div class="navBarNotificationCard_MainTopicBox">
                                                <div class="navBarNotificationCard_MainTopicText">${item.notify_mainTopic}</div>
                                            </div>
                                        </div>
                                        <div class="navBarNotificationCard_SubTopicBdr">
                                            <div class="navBarNotificationCard_SubTopicBox">
                                                <p class="navBarNotificationCard_SubTopicText">${item.notify_subTopic}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;
                    navBarNotificationCtntBox.insertAdjacentHTML('beforeend', notificationCardStruct);
                }
                let navBarNotificationCardBdr = document.querySelectorAll(".navBarNotificationCardBdr");

                // Make The Status number visible
                navBarNotificationStatusNoBox.forEach((box) => 
                {
                    box.classList.add("active");
                    let navBarNotificationStatusNoText = box.querySelector(".navBarNotificationStatusNo_text");

                    // Update the notification status
                    navBarNotificationStatusNoText.textContent = navBarNotificationCardBdr.length;
                });

                // Add listener for "Mark all as read" button
                let markAllNavBarNotificationsAsRead = document.querySelector(".markAllNavBarNotificationsAsRead");
                markAllNavBarNotificationsAsRead.addEventListener("click" , () => 
                {
                    // Disable the button
                    markAllNavBarNotificationsAsRead.disabled = true;

                    // Remove the notification status no.
                    navBarNotificationStatusNoBox.forEach((box) => 
                    {
                        box.classList.remove("active");
                        let navBarNotificationStatusNoText = box.querySelector(".navBarNotificationStatusNo_text");

                        // Update the notification status
                        navBarNotificationStatusNoText.textContent = "";
                    });

                    // Remove all Notifications
                    navBarNotificationCardBdr.forEach((bdr) => 
                    {
                        bdr.remove();
                    });

                    // Insert the default notification
                    navBarNotificationCtntBox.insertAdjacentHTML('beforeend' , emptyNavBarNotificationBoxStruct);

                    // Recalibrate the Menu
                    caliberateNavBarNotificationsMenu();

                    notification(`notifyGood` , `All notifications marked as read`);
                });

                // Calibrate the Menu
                caliberateNavBarNotificationsMenu();

                // Add Listener to view the Notifications
                openNavBarNotificationBtn.forEach((btn) => 
                {
                    btn.addEventListener("click" , openNavBarNotificationMenu);
                });
            }

            // Menu Sizing Calibration
            function caliberateNavBarNotificationsMenu()
            {
                let menuHeader = document.querySelector(".navBarNotificationHeaderBdr");
                let menuHeaderRect = menuHeader.getBoundingClientRect();
                let menuHeaderHeight = menuHeaderRect.height;
                let menuFooter = document.querySelector(".navBarNotificationFooterBdr");
                let menuFooterRect = menuFooter.getBoundingClientRect();
                let menuFooterHeight = menuFooterRect.height;
                let menuCtntBoxRect = navBarNotificationCtntBox.getBoundingClientRect();
                let menuCtntBoxHeight = menuCtntBoxRect.height;
                let menuFinalHeight = Math.ceil((menuHeaderHeight + menuFooterHeight + menuCtntBoxHeight));

                navBarNotificationMain.setAttribute(`style` , `--navBarNotificaionsMenuHeight:${menuFinalHeight}px`)
            }

            // Opens the Notification Box
            function openNavBarNotificationMenu()
            {
                // change active state of the notification icon
                openNavBarNotificationBtn.forEach((btn) => 
                {
                    btn.classList.add("notify_atv");
                    btn.removeEventListener("click" , openNavBarNotificationMenu);
                });

                // Slides in the Notification box
                navBarNotificationMain.classList.add("notify_atv");
                toggleNavBarUnderLayer();

                // Preset to close the NavBar Notifications
                navBarNotificationTimer = setTimeout(() => 
                {
                    document.addEventListener("click" , closeNavBarNotificationMenu);
                    clearTimeout(navBarNotificationTimer);
                },100);
                
            }

            // Closes the Notification box
            function closeNavBarNotificationMenu()
            {
                if((!(navBarNotificationMain.matches(":hover"))))
                {
                    document.removeEventListener("click" , closeNavBarNotificationMenu);

                    // Add the function to open the Notifications and change active state 
                    openNavBarNotificationBtn.forEach((btn) => 
                    {
                        btn.classList.remove("notify_atv");
                        btn.addEventListener("click" , openNavBarNotificationMenu);
                    });
                    toggleNavBarUnderLayer();

                    // Removes style classes
                    navBarNotificationMain.classList.remove("notify_atv");
                }
            }
        }

      

    // SWITCH PROFILES

        function insertSwitchProfJS()
        {
            switchProfScript = document.createElement('script');
            switchProfScript.setAttribute(`src` , `/SwitchProf.js`);
            switchProfScript.setAttribute(`id` , `switchProfScriptID`);

            switchProfScript.addEventListener("load" , () => 
            {
                openSwitchProfBtn.addEventListener("click" , loadProfInfo);
            });
            switchProfScript.onerror = function() 
            {
                notification(`notifyBad` , `An error occurred during loading`);
                openSwitchProfBtn.addEventListener("click" , failedLoadErrorMsg);
            };
            document.body.appendChild(switchProfScript);
        }



    // SIGNING OUT (TO DO: Add confirmation modal)

        function accountSignOut()
        {
            notification(`notifyBad` , `Signing Out`);
            toggleNavBarUnderLayer();

            accountSignOutTimer = setTimeout(() => window.open(`/` , `_self`), 3000);
        }



    // ADD TO WATCHLIST

        function attachAddToWLEventListeners()
        {
            let openAddToWLBtn = document.querySelectorAll(".openAddToWLBtn");

            openAddToWLBtn.forEach(btn => 
            {
                if(btn.addToWLFunc)
                {
                    btn.removeEventListener(`click` , btn.addToWLFunc);
                }
            });

            openAddToWLBtn.forEach(btn => 
            {
                const addToWLFunc = () =>
                {
                    const playListBdr = document.createElement("div");
                    playListBdr.classList.add("genAtnModalBdr");
                    playListBdr.innerHTML = addToWLHTML;
                    documentBody.appendChild(playListBdr);
        
                    const playListCloseBtn = document.querySelectorAll(".closeAddToWL");
                    const playListBox = document.querySelector(".addToWLBox");
                    const playListItemBcg = document.querySelector(".addToWLItemBcg");
                    const playListItemBox = document.querySelector(".addToWLItemBox");
                    const playListItem = document.querySelectorAll(".plItem");
                    const newWLBtn = document.querySelector(".newWLBtn");
                    const newWLModal = document.querySelector(".newWLBdr");
                    const newWLInput = document.querySelector("#newWLInputId");
                    const newWLWarn = document.querySelector("#newWLWarnId");
                    const createWLBtn = document.querySelector("#createNewWL");
                    const cancelWLBtn = document.querySelector("#cancelNewWL");
                    let inputUppBnd = 50;
                    let inputLowBnd = 2;
                    let plArr = [];
                    let lastWLArr;
                    let lastWLArrLength = 0;
                    let currLength = 0;
                    let wordCount = inputUppBnd;
    
                    // Disabling btn to prevent multiple calls
                    btn.disabled = true;
        
                    addToWLTimer = setTimeout(() => 
                    {
                        documentBody.classList.add("bodystop");
                        playListBdr.classList.add("active");
                        playListBox.classList.add("active");
                        clearTimeout(addToWLTimer);
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
                            notification(`notifyGood` , `Show successfully added to "${itemName}"`);
                            item.disabled = true;
                        });
                    });
        
                    // Opens the Create playList modal
                    newWLBtn.addEventListener("click" , () => 
                    {
                        playListItemBcg.scrollTo(0 , 0);
                        newWLBtn.classList.add("inactive");
                        newWLModal.classList.add("active");
        
                        newWLInput.disabled = false;
                        cancelWLBtn.disabled = false;

                        newWLInput.focus();
                    });
        
        
                    function closeNewWLModal()
                    {
                        newWLBtn.classList.remove("inactive");
                        newWLModal.classList.remove("active");
                        newWLWarn.classList.remove("active");
                        newWLWarn.classList.remove("empty");
        
                        newWLInput.value = "";
                        newWLWarn.textContent = "";
        
                        newWLInput.disabled = true;
                        cancelWLBtn.disabled = true;
                        createWLBtn.disabled = true;
                    }
        
                    // Closes the Create playList modal
                    cancelWLBtn.addEventListener("click" , closeNewWLModal);
        
                    // checking input length
                    function getWordCount(input)
                    {
                        plArr.push(input);
                        lastWLArr = plArr.at(-1);
                        lastWLArrLength = lastWLArr.length;
        
                        // update warn label
                        currLength = wordCount - lastWLArrLength;
                        newWLWarn.textContent = currLength;
        
                        newWLWarn.classList.toggle("active" , currLength < 16);
                        newWLWarn.classList.toggle("empty" , currLength < 1);
        
                        checkBeforeCreate(lastWLArr);
                    }
        
                    // Check if name is valid (3 - 64 characters)
                    function checkBeforeCreate(val)
                    {
                        if(val.length < inputLowBnd || (val.length > inputUppBnd))
                        {
                            createWLBtn.disabled = true;
                            createWLBtn.classList.replace("midSolidBtn" , "inactiveBtn");
                            return;
                        }
                        createWLBtn.disabled = false;
                        createWLBtn.classList.replace("inactiveBtn" , "midSolidBtn");
                    }
        
                    newWLInput.addEventListener("input" , () => 
                    {
                        getWordCount(newWLInput.value);
                    });
        
                    // Creates and inserts new list
                    function generateList(plName)
                    {
                        let newListHTML = 
                        `
                            <button data-list="${plName}" class="genAtnModalOptBox plItem" title="Add to ${plName}" aria-label="Add to ${plName}">
                                <div class="genAtnModalOptIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genAtnModalOptIcon">
                                        <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                        <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                        <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                        <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                    </svg>
                                </div>
                                <div class="genAtnModalOptTextBox ">
                                    <span class="genAtnModalOptText ">${plName}</span>
                                </div>
                            </button>
                        `;
                        playListItemBox.insertAdjacentHTML("beforeend" , newListHTML);
                        notification(`notifyGood` , `Show successfully added to "${plName}"`);
                        
                        closeNewWLModal();
                    }
        
                    createWLBtn.addEventListener("click" , () => 
                    {
                        generateList(newWLInput.value);
                    });
    
                    // Create list by pressing the "Enter" key
                    newWLInput.addEventListener("keyup" , (e) => 
                    {
                        if((e.key === "Enter"))
                        {
                            createWLBtn.click();
                        }
                    });
        
        
                    // Closes the Playlist modal
                    function closeAddToWL()
                    {
                        documentBody.classList.remove("bodystop");
                        playListBdr.classList.remove("active");
                        playListBox.classList.remove("active");
        
                        addToWLTimer = setTimeout(() => 
                        {
                            documentBody.removeChild(playListBdr);
                            documentBody.classList.remove("bodystop");
                            btn.disabled = false;
                            clearTimeout(addToWLTimer);
        
                        }, 300);
                    }
        
                    playListCloseBtn.forEach(one => 
                    {
                        one.addEventListener("mousedown" , closeAddToWL);
                    });
                }
                btn.addEventListener("click" , addToWLFunc);
                btn.addToWLFunc = addToWLFunc;
            });
        }



    // SHARE

        function attachSharePageEventListeners()
        {
            let socialShareLink = encodeURI(window.location.href);
            let socialShareTitle = encodeURIComponent(documentTitle);
            let socialShareMsg = `Check out ${socialShareTitle}`;
            let shareShowBtn = document.querySelectorAll(".shareShowBtn");

            shareShowBtn.forEach((btn) => 
            {
                if(btn.customSclShareModal)
                {
                    btn.removeEventListener("click" , customSclShareModal);
                }
            });

            shareShowBtn.forEach((btn) => 
            {
                // Fallback called if "navigator.share" is not supported
                function customSclShareModal()
                {
                    let socialShareLink = encodeURI(window.location.href);
                    let socialShareTitle = encodeURIComponent(documentTitle);
                    let socialShareMsg = `Check out ${socialShareTitle}`;
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

                    // shareShowBtn.forEach(btn => 
                    // {
                        btn.addEventListener("click" , () => 
                        {
                            btn.disabled = true;
                        });
                    // });

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
                    const shareDestination = (destination) =>
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

                    // Closes the Share modal
                    function closeSclShareBox()
                    {
                        documentBody.classList.remove("bodystop");

                        // Removes style classes
                        sclShareBdr.classList.remove("active");
                        sclShareBox.classList.remove("active");

                        socialShareTimer = setTimeout(() => 
                        {
                            documentBody.removeChild(sclShareBdr);
                            // shareShowBtn.forEach(btn => 
                            // {
                                btn.addEventListener("click" , () => 
                                {
                                    btn.disabled = false;
                                });
                            // });
                            documentBody.classList.remove("bodystop");
                            clearTimeout(socialShareTimer);

                        }, 300);
                    }

                    sclShareCloseBtn.forEach(one => 
                    {
                        one.addEventListener("mousedown" , closeSclShareBox);
                    });
                }

                // navigator.share function
                const navigatorSclShareModal = () =>
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
                            notification(`notifyGood` , `Thanks for sharing`);
                        })
                        .catch(console.error);
                    }
                    else
                    {
                        customSclShareModal();
                    }
                }

                btn.addEventListener("click" , customSclShareModal);
                btn.customSclShareModal = customSclShareModal;
            });
        }



    // GENERAL MENU MODAL

        // Load the file if not present
        function loadGenMenuModalInv()
        {
            let genMenuModalScriptID = document.getElementById("genMenuModalScriptID");

            if((genMenuModalScriptID == undefined) || (genMenuModalScriptID == null))
            {
                let genMenuModalScriptTag = document.createElement("script");
                genMenuModalScriptTag.setAttribute(`src` , `/genMenuModal.js`);
                documentBody.appendChild(genMenuModalScriptTag);

                genMenuModalScriptTag.addEventListener("load" , () => 
                {
                    initGenMenuModal();
                });
                genMenuModalScriptTag.addEventListener("error" , () => 
                {
                    notification(`notifyBad` , `an error occured while parsing scripts`);
                });

                return;
            }
            initGenMenuModal();
        }

        // Initialization
        function initGenMenuModal()
        {
            // Preprocess genMenuModalInv into a Map for the Menu Modal
            genMenuModalMap = new Map(
                genMenuModalInv.map(item => 
                {
                    const invMenuId = item.menu_id.toLowerCase();
                    return [invMenuId, item];
                })
            );

            // Generate the menu modal
            genMenuModalBdr = document.createElement("div");
            genMenuModalBdr.classList.add("genMenuModalBdr");
            genMenuModalBdr.innerHTML = genMenuModalBdrStruct;
            
            genMenuModalBox = document.createElement("div");
            genMenuModalBox.classList.add("genMenuModalBox");
            genMenuModalBox.innerHTML = genMenuModalBoxStruct;

            genMenuModalCtntBdr = document.createElement("div");
            genMenuModalCtntBdr.classList.add("genMenuModalCtntBdr");
            genMenuModalCtntBdr.innerHTML = genMenuModalCtntBdrStruct;

            genMenuModalBox.appendChild(genMenuModalCtntBdr);
            genMenuModalBdr.appendChild(genMenuModalBox);
            documentCtnt.appendChild(genMenuModalBdr);
        }


        // Calculates the dimensions and position of the menu modal before displaying it
        function displayGenMenuModal()
        {
            // Get button genMenuModalBdrPos and size
            let btnRect = document.querySelectorAll(".openGenMenuModalBtn")[currOpenGenMenuModalBtnIndex].getBoundingClientRect();
            let menuHeight = genMenuModalBdr.offsetHeight;
            let menuWidth = genMenuModalBdr.offsetWidth;
            let winHeight = window.innerHeight;
            let winWidth = window.innerWidth;

            // Calculate available spaces
            let btnTop = btnRect.top;
            let btnBottom = btnRect.bottom;
            let btnLeft = btnRect.left;
            let btnRight = btnRect.right;

            // Only change the position on larger screens (565px)
            if(winWidth > winWidth768)
            {
                // Choose the genMenuModalBdr position
                btnLeft = btnLeft > winWidth - menuWidth ? btnRight - menuWidth - 5 : btnLeft + 5;
                btnTop = btnBottom > winHeight - menuHeight ? btnTop - menuHeight - 5 : btnBottom + 5;
            }
            else
            {
                // Set it to zero if otherwise
                btnLeft = 0;
                btnTop = 0;
            }

            // Set genMenuModalBdr position and display it
            genMenuModalBdr.style.top = `${btnTop}px`;
            genMenuModalBdr.style.left = `${btnLeft}px`;
            genMenuModalBdr.setAttribute("aria-expanded" , "true");
            documentBody.setAttribute(`gen-menu-modal-is-dragging` , `true`);

            // Add listener to close the menu when area outisde it is clicked
            genMenuModalBdr.addEventListener("transitionend", function handleTransitionEnd()
            {
                genMenuModalBdr.removeEventListener("transitionend", handleTransitionEnd);
                document.removeEventListener("click" , callHideGenMenuModal);
                document.addEventListener("click", callHideGenMenuModal);
                initGenMenuModalDragging();
            });
        }

        // Hides the menu modal
        function hideGenMenuModal()
        {
            document.removeEventListener("click" , callHideGenMenuModal);
            documentBody.setAttribute(`gen-menu-modal-is-dragging` , `false`);
            removeGenModalDragging();

            genMenuModalBdr.setAttribute("aria-expanded" , "false");
            genMenuModalBdr.addEventListener("transitionend", function handleTransitionEnd()
            {
                genMenuModalBdr.removeEventListener("transitionend", handleTransitionEnd);
                genMenuModalCtntBdr.innerHTML = genMenuModalCtntBdrStruct;
            });
        }

        // Calls the hideGenMenuModal via clicks 
        function callHideGenMenuModal(event)
        {
            if(
                !event.target.closest(".openGenMenuModalBtn") &&
                !event.target.closest(".genMenuModalBox")
            )
            {
                hideGenMenuModal();
            }
        }

        // Removes the functions associated with currDraggingGenMenuModal of the gen menu modal
        function removeGenModalDragging()
        {
            updateGenMenuModalBoxHeight("reset");

            genMenuModalBox.removeEventListener("mousedown", startDraggingGenMenuModal);
            document.removeEventListener("mousemove", currDraggingGenMenuModal);
            document.removeEventListener("mouseup", stopDraggingGenMenuModal);

            genMenuModalBox.removeEventListener("touchstart", startDraggingGenMenuModal);
            document.removeEventListener("touchmove", currDraggingGenMenuModal);
            document.removeEventListener("touchend", stopDraggingGenMenuModal);

            window.removeEventListener("resize" , calibrateGenMenuModalBoxHeight);
            window.removeEventListener("change" , calibrateGenMenuModalBoxHeight);

        }

        // Initializes the dragging functionality
        function initGenMenuModalDragging()
        {
            // Only works for devices of width smaller than the specified
            if(window.innerWidth > winWidth768) return;

            startGenMenuBoxHeight = parseInt(genMenuModalBox.offsetHeight);

            genMenuModalBox.addEventListener("mousedown", startDraggingGenMenuModal);
            document.addEventListener("mousemove", currDraggingGenMenuModal);
            document.addEventListener("mouseup", stopDraggingGenMenuModal);

            genMenuModalBox.addEventListener("touchstart", startDraggingGenMenuModal);
            document.addEventListener("touchmove", currDraggingGenMenuModal);
            document.addEventListener("touchend", stopDraggingGenMenuModal);

            window.addEventListener("resize" , calibrateGenMenuModalBoxHeight);
            window.addEventListener("change" , calibrateGenMenuModalBoxHeight);
        }

        // Recalibrates the menu modal box height when screen size/orientation changes
        function calibrateGenMenuModalBoxHeight()
        {
            genMenuModalBox.style.height = "fit-content";
        }

        // Updates the height of the menu modal box
        const updateGenMenuModalBoxHeight = (height) => 
        {
            if(height === "reset")
            {
                genMenuModalBox.style.height = `${height}px`;
                genMenuModalBoxHeightTimer = setTimeout(() => 
                {
                    clearTimeout(genMenuModalBoxHeightTimer);
                    genMenuModalBox.style.height = "fit-content";
                }, 150);
            }
            else
            {
                genMenuModalBox.style.height = `${height}px`;
            }
        }

        // Sets initial drag position, genMenuModalBox height and adds isDragging class to the menu modal bdr
        const startDraggingGenMenuModal = (e) => 
        {
            if(Math.round(genMenuModalBox.scrollTop) > 0) return;
            genMenuModalIsDragging = true;
            genMenuBoxStartY = e.pageY || e.touches?.[0].pageY;
            startGenMenuBoxHeight = parseInt(genMenuModalBox.offsetHeight);
            genMenuModalBdr.classList.add("isDragging");
        }

        // Calculates the new height for the menu modal box and calls the updateGenMenuModalBoxHeight function
        const currDraggingGenMenuModal = (e) => 
        {
            if(!genMenuModalIsDragging) return;

            const genMenuBoxDeltaY = (e.pageY || e.touches?.[0].pageY);
            let newGenMenuBoxHeight = (startGenMenuBoxHeight + genMenuBoxStartY) - genMenuBoxDeltaY;
            currGenMenuBoxHeight = newGenMenuBoxHeight;
            currGenMenuBoxHeight < startGenMenuBoxHeight ? updateGenMenuModalBoxHeight(currGenMenuBoxHeight) : updateGenMenuModalBoxHeight(startGenMenuBoxHeight);
        
            // Prevent the cards from being clicked while dragging 
            if(((Math.abs(genMenuBoxDeltaY - genMenuBoxStartY) > genAtnModalBoxDragDist)))
            {
                // Add CSS class to disable clicks during dragging
                if (!(genMenuModalBox.classList.contains("disableClicks")))
                {
                    genMenuModalBox.classList.add("disableClicks");
                }
            }
        }

        // Closes the menu modal if dragged beyond 75% of its height
        const stopDraggingGenMenuModal = () => 
        {
            genMenuModalIsDragging = false;
            genMenuModalBdr.classList.remove("isDragging");
            genMenuModalBox.classList.remove("disableClicks");
            const menuModalBoxH = parseInt(genMenuModalBox.style.height);
            menuModalBoxH < Math.round((startGenMenuBoxHeight * 0.75)) ? hideGenMenuModal() : updateGenMenuModalBoxHeight(startGenMenuBoxHeight);
        }

        // Attaches listener for calling the menu modals
        function attachMenuModalEventListeners()
        {
            let openGenMenuModalBtn = document.querySelectorAll(".openGenMenuModalBtn");

            openGenMenuModalBtn.forEach((prevBtn) => 
            {
                if(prevBtn.action)
                {
                    prevBtn.removeEventListener("click" , prevBtn.action);
                }
            });
            
            openGenMenuModalBtn.forEach((btn, index) => 
            {
                const action = () => 
                {
                    // Close if the same button clicked to open the menu is clicked again
                    if((currOpenGenMenuModalBtnIndex != null) && (index == currOpenGenMenuModalBtnIndex) && (genMenuModalBdr.getAttribute("aria-expanded") === "true"))
                    {
                        genMenuModalBdr.setAttribute("aria-expanded" , "false");
                        genMenuModalBdr.classList.remove("isOpen");
                        document.removeEventListener("click" , callHideGenMenuModal);
                    }
                    else
                    {
                        // Set to current index
                        currOpenGenMenuModalBtnIndex = index;
                        let menuType = btn.getAttribute("data-gen-menu-modal-type");

                        // Return if attribute is not found
                        if((menuType == undefined) || (menuType == null))
                        {
                            notification(`notifyBad` , `An error occurred`);
                            return;
                        }

                        // Fetch the corresponding menu modal
                        let thisMenu = genMenuModalMap.get(menuType.toLowerCase());

                        if(thisMenu)
                        {
                            const {menu_id, menu_ctnt} = thisMenu;
                            
                            // Update innerHTML
                            genMenuModalCtntBdr.innerHTML = menu_ctnt;

                            // Call corresponding function to attach event listeners and display menu
                            openGenMenuModalBtnTimer = setTimeout(() => 
                            {
                                clearTimeout(openGenMenuModalBtnTimer);
                                callGlobalFunctions(menu_id);
                                displayGenMenuModal();
                            }, 100);
                        }
                    }
                }

                btn.addEventListener("click" , action);
                btn.action = action;
            });
        }
    






    
