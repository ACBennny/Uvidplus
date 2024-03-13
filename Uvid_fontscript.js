/*************************************************************
 * This is the script for the homepage of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/




const documentBody = document.body;
const preload = document.querySelector('#preloader');
const openmen = document.querySelector('.baron');
const navBar = document.querySelector(".navbar");
const closeNavMenu = document.querySelector(".close_Nav_Menu");
const menuicons = document.querySelector('.icnsets');
const navMenuIcon = document.querySelectorAll(".nav_menu_btn");
let navMenuTimer;
const goToHomePage = document.querySelectorAll('.navBarCompanylogo');
const AllImg = document.querySelectorAll('img');
const allLinks = document.querySelectorAll("a");




// PRELOADER

    // This function removes the preloader after the skeleton of the website has been loaded
    
    window.addEventListener("DOMContentLoaded", () => {
        preload.style.display = "none";
        document.body.classList.add('bodystart');
    });



// NAVBAR

    // This will open the the navbar mainmenu (max-width: 884px)
    openmen.onclick = () => {
        navBar.classList.add("hideNavUnder");
        menuicons.classList.add('menicnatv');
    }

    closeNavMenu.onclick = () => {
        navBar.classList.remove("hideNavUnder");
        menuicons.classList.remove('menicnatv');
    }

    // Open the Nav side menu
    navMenuIcon.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            // Prevents Scrolling of elements in background
            document.body.classList.add('bodystop');

            // Creates the nav menu bdr
            const navMenuBdr = document.createElement("div");
            navMenuBdr.classList.add("nav_Menu_bdr");
    
            navMenuBdr.innerHTML = 
            `
                <div class="nav_Menu_box">
                    <div class="nav_Menu_bcg"></div>
                    <div class="navOptionBox">
                        <a class="navOptLink" id="home" title="Go to Home page"><i class="fa-solid fa-house"></i><span>Home</span></a>
                        <a class="navOptLink" id="prem" title="Buy Premium"><i class="fa-solid fa-sack-dollar"></i><span>Premium</span></a>
                        <a class="navOptLink" id="prof" title="Profile"><i class="fa-solid fa-user"></i><span>Profile</span></a>
                        <a class="navOptLink" id="show" title="My Shows"><i class="fa-solid fa-tv"></i><span>My Shows</span></a>
                        <a class="navOptLink" id="sett"  title="Settings"><i class="fa-solid fa-cogs"></i><span>Settings</span></a>
                        <a class="navOptLink" id="supp" title="Support Us"><i class="fa-solid fa-hand-holding-dollar"></i><span>Support Us</span></a>
                    </div>
                </div>
            `;

            // Appends nav menu bdr 
            documentBody.appendChild(navMenuBdr);

            // Adds properties after HTML Nodes have been appended
            navMenuTimer = setTimeout(() => 
            {
                // Adds style class
                navMenuBdr.classList.add("bdr_atv");

                // Close Nav Menu
                const navMenuBcg = document.querySelector('.nav_Menu_bcg');
                function closesearch()
                {
                    documentBody.removeChild(navMenuBdr);
                    document.body.classList.remove('bodystop');
                }
                navMenuBcg.addEventListener("click" , closesearch);

                // clear timer once time runs out
                clearTimeout(navMenuTimer);

            } , 100);
        });
    });




//  GO TO HOME PAGE

    goToHomePage.forEach(one => {
        one.addEventListener("click" , () => {
            window.location.pathname = "Uvid_Home/Home.html";
        });
    });



// ALL IMAGES
    
    AllImg.forEach(eachImg => {
        // Prevents User from dragging Images
        eachImg.draggable = false;

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

        // Prevents user Select
        link.style.userSelect = "none";

        // Prevents draggable
        // link.draggable = false;

        // // hide link display
        //     //a variable to hold the original link
        //     let currentLink = link.href;

        //     // this will remove the link when poitner is over the element
        //     link.addEventListener("mouseenter" , () => {
        //         link.href = "";
        //         link.removeAttribute("href");
                
        //         //  Opens the individual link in a new tab
        //         link.addEventListener("click" , () => {
        //             link.href = currentLink;
        //         });
        //     });
            
        //     // This will add the link when poitner is out of the element
        //     link.addEventListener("mouseleave" , () => {
        //         link.href = currentLink;
        //     });
    });



// NOTIFICATION POPUP

    let notifyTimer;

    function notification(noteCtnt) {
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








   
