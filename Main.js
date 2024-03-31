/**********************************************************************************************************
 * This is the general script file of Uvid
 * From here, all general actions performed all over the website are written here
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/




// DEFINITION

    const documentBody = document.body;
    const preload = document.querySelector('#preloader');
    const navBar = document.querySelector(".navBar");
    const navBarHeadName = document.querySelector(".navBar .headname");
    const navBarRight = navBar.querySelector(".navBarRight");
    const navBarRightCtnt = navBarRight.querySelector(".navBarRightCtnt");
    const goToHomePage = document.querySelectorAll('.Companylogo');
    const openNavProfileOptions = document.querySelector('.open_nav_profileOptions');
    const navProfileOptionsBdr = document.querySelector('.navBarProfileOptBdr');
    const navMenuIcon = document.querySelectorAll(".open_nav_menu");
    let navMenuTimer;
    let locationOrigin;
    if(window.location.origin == "https://acbennny.github.io")
    {
        locationOrigin = window.location.origin + "/Uvid/";
    }
    else
    {
        locationOrigin = window.location.origin + "/";
    }
    const navBarSearchForm = document.querySelectorAll(".navBarSearchBox");
    const navSearchBar = document.querySelector(".navBarSearchBdr");
    const openNavSearchBar = document.querySelector(".openNavSearch_Btn");
    const closeNavSearchBar = document.querySelector(".closeNavSearch_BtnBox");
    const openNavNotificationBar_BtnBox = document.querySelectorAll(".openNavNotifyBox");
    const closeNavNotificationBarBtn = document.querySelector(".closeNavNotify");
    const openNavNotificationBarBtn = document.querySelector(".openNavNotify");
    const footerLinks = document.querySelectorAll(".footerlinks");
    let navNotificationBarTimer;
    const openSwitchAccBtn = document.querySelector(".open_switchAcc");
    let switchAccTimer;
    const AllImg = document.querySelectorAll('img');
    const allLinks = document.querySelectorAll("a");
    let notifyTimer;




// PRELOADER

    // This function removes the preloader after the skeleton of the website has been loaded
    
    window.addEventListener("load", () => {
        preload.style.display = "none";
        document.body.classList.add('bodystart');
        instantiateSideNavBar();
    });




// NAVBAR

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
                            <a href="/Premium.html" class="navOptLink" id="premiumLink" title="Premium">
                                <div class="navOptIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                        <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/>
                                    </svg>
                                </div>
                                <span class="navOptTitle">Premium</span>
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
                            <h4 class="navOptHead">Explore</h4>
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
                                <a href="/Watchlist.html" class="navOptLink" id="myListLink" title="My List">
                                    <div class="navOptIconBox">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="navOptIcon">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </div>
                                    <span class="navOptTitle">My List</span>
                                </a>
                        </section>

                        <div class="navOptDivider"></div>
                        
                        <section class="navOptBox navOptLinkBox navOptSetting">

                            <a href="/Help/HelpCenter.html" class="navOptLink" id="prem" title="Buy Premium">
                                <div class="navOptIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navOptIcon">
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                                    </svg>
                                </div>
                                <span class="navOptTitle">Help</span>
                            </a>
                            <a href="/Feedback.html" class="navOptLink" id="feedback" title="Buy Premium">
                                <div class="navOptIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="navOptIcon">
                                        <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"/>
                                    </svg>
                                </div>
                                <span class="navOptTitle">Feedback</span>
                            </a>
                            <a href="/Support.html" class="navOptLink" id="supp" title="Support Us">
                                <div class="navOptIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="navOptIcon">
                                        <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/>
                                    </svg>
                                </div>
                                <span class="navOptTitle">Support</span>
                            </a>
                        </section>

                        <div class="navOptDivider"></div>

                        <section class="navOptBox navOptFooter">
                            <div class="navOptFooterBox">
                                <div class="navfooterBoxSect1">
                                    <a href="/About.html" class="navfooterBoxElements">About</a>
                                    <a href="/About.html#contact" class="navfooterBoxElements">Contact</a>
                                    <a href="/Policies/Preference.html" class="navfooterBoxElements">Preference Center</a>
                                    <a href="/Policies/Preference.html#cookies" class="navfooterBoxElements">Coookies</a>
                                    <a href="/Policies/Privacy.html" class="navfooterBoxElements">Privacy</a>
                                    <a href="/Policies/CopyrightsAct.html" class="navfooterBoxElements">Copyright</a>
                                    <a href="/Policies/TOC.html" class="navfooterBoxElements">Terms of Use</a>
                                </div>
                                <div class="navfooterBoxSect2">
                                    <div class="navfooterCompNameBox">
                                        <span class="navfooterCompIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="navfooterCompIcon">
                                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/>
                                            </svg>
                                        </span>
                                        <span class="navfooterCompName">2024 ACBennny</span>
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
                case 'premium': navOptLink[0].classList.add("active");
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

                default: console.log("Error");
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

        } , 100);
    }


// SEARCH BAR

    navBarSearchForm.forEach(form => 
    {

        // Sets the destination of the search
        form.action = locationOrigin +  "Search.html";

        // Turns "xmark" visible once there is text in the field
        const navBarSearchFormField = form.querySelectorAll("#navBarSearchFieldId");
        const navBarSearchFormFieldXmark = form.querySelectorAll(".clearSearchFieldIconBox");
        
        navBarSearchFormField.forEach((field, f) => 
        {
            field.addEventListener("input" , () => 
            {
                if(field.value.length > 0)
                {
                    navBarSearchFormFieldXmark[f].classList.add("active");
                    return;
                }
                navBarSearchFormFieldXmark[f].classList.remove("active");
            });
        });

        // Clears search field
        navBarSearchFormFieldXmark.forEach((xmark, x) => 
        {
            xmark.addEventListener("click" , () => 
            {
                navBarSearchFormField[x].value = "";
                xmark.classList.remove("active");
            });
        });
    });


    // This will open the seearch Bar (max-width: 768px)
    openNavSearchBar.addEventListener("click" , () => 
    {
        navSearchBar.classList.add("active");
    });

    // This will close the seearch Bar (max-width: 768px)
    closeNavSearchBar.addEventListener("click" , () => 
    {
        navSearchBar.classList.remove("active");
    });




// NAVBAR  NOTIFICATIONS

    // Opens the Notification Box
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

    openNavNotificationBarBtn.addEventListener("click" , instantiateNavBarNotificationBox);


// SWITCH ACCOUNTS

    // Opens the Notification Box
    function instantiateSwitchAccBdr()
    {
        // The border holding the elements of the notification box
        const switchAccBdr = document.createElement("div");
        switchAccBdr.classList.add("switchAccBdr");

        // The Notification Bar Structure
        switchAccBdr.innerHTML = 
        `
            <div class="switchAccBcg closeSwitchAcc"></div>
            <div class="switchAccBox">
                <div class="switchAccBoxCtnt">
                    <div class="switchAccHeader">
                        <div class="close_switchAccIconBox closeSwitchAcc">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="close_switchAccIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <h3 class="switchAccHeaderText">Switch Accounts</h3>
                    </div>
                    <div class="switchAccOptBcg">
                        <div class="switchAccOptBdr">
                            <div class="switchAccOptBox">
                                <div class="switchAccOptImgBox switchAcc_AddAccIconBox">
                                    <img src="/Images/Uvid_profilebase.png" alt="profile_img" class="switchAccOptImg">
                                </div>
                                <div class="switchAccOptTextBox">
                                    <span class="switchAccOptText">ACBennny</span>
                                </div>
                            </div>
                            <div class="switchAccOptBox switchAcc_AddAccBox">
                                <div class="switchAccOptImgBox switchAcc_AddAccIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="switchAcc_AddAccBoxIcon">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                    </svg>
                                </div>
                                <div class="switchAccOptTextBox">
                                    <span class="switchAccOptText">Add Account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append the fragment to navBarRightCtnt of the navbar
        documentBody.appendChild(switchAccBdr);
 
         
        switchAccTimer = setTimeout(() => 
        {
            documentBody.classList.add("bodystop");

            // Adds style class
            switchAccBdr.classList.add("active");

            // Slides in the Notification box
            const switchAccBox = document.querySelector(".switchAccBox");
            switchAccBox.classList.add("active");


            // Closes the Notification box
            function closeSwitchAccBdr()
            {
                documentBody.classList.remove("bodystop");

                // Removes style classes
                switchAccBdr.classList.remove("active");
                switchAccBox.classList.remove("active");

                setTimeout(() => 
                {
                    // Remove Child Nodes
                    documentBody.removeChild(switchAccBdr);

                    // clear timer once time runs out
                    clearTimeout(switchAccTimer);
                },1000);
            
            }

            const switchAccClose = document.querySelectorAll(".closeSwitchAcc");
            switchAccClose.forEach(one => 
            {
                one.addEventListener("click" , closeSwitchAccBdr);
            });

            // clear timer once time runs out
            clearTimeout(switchAccTimer);

        } , 100);
    }

    openSwitchAccBtn.addEventListener("click" , instantiateSwitchAccBdr);




// ALL IMAGES
    
    AllImg.forEach(eachImg => {
        // Prevents User from dragging Images
        eachImg.draggable = false;

        // Sets loading to lazy
        eachImg.loading = "lazy";

        // Sets the alt text to image if none is set
        if(eachImg.alt.valueOf() == "")
        {
            eachImg.alt = "image";
        }
        
    });




// ALL LINKS

    allLinks.forEach(link => {

        // Sets rel to "no-referrer" if it hasn't been set.
        if(link.rel.valueOf() == "")
        {
            link.rel = "noopener no-referrer";
        }

        // Sets title if not preset
        if(link.title.valueOf() == "")
        {
            // link.title = "link";
        }

        // Sets link to "#" if empty
        const par = window.location.hash
        if((link.href== "#uuu"))
        {
            link.href = "/Error404.html";
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

        // Prevents user Select
        link.style.userSelect = "none";

        // Prevents draggable
        // link.draggable = false;
    });




// NOTIFICATION POPUP

    function notification(noteCtnt) 
    {
        const btnNotifyBdr = document.createElement('div');
        const btnNotify = document.createElement('div');
        btnNotifyBdr.classList.add("notifyBdr")
        btnNotify.classList.add("NotifyMe");
        btnNotifyBdr.appendChild(btnNotify);
        btnNotify.textContent = noteCtnt;

       if (!btnNotifyBdr.classList.contains("NotifyAtv"))
       {
           document.body.appendChild(btnNotifyBdr);
           btnNotifyBdr.classList.add('NotifyAtv');
       }
       notifyTimer =  setTimeout(
           function()
           {
               btnNotifyBdr.classList.remove('NotifyAtv');
               document.body.removeChild(btnNotifyBdr);
           }
       , 2500);
   }








   
