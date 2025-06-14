/***************************************************************
 * This will initialize Firebase Globally
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



    //  OFFLINE MSG

        // Toggles a Message to let user know they're offline
        function updOfflineStatus()
        {
            let oflnMdl = document.querySelector(".offline_mdl_bdr");

            if((navigator.onLine))
            {
                if(!(oflnMdl)) return;
                documentBody.classList.remove("bodystop");
                document.querySelector(".offline_mdl_bdr").remove();
            }
            else
            {
                if(!(oflnMdl))
                {
                    documentBody.classList.add("bodystop");
                    documentBody.insertAdjacentHTML(`beforeend` , offlineModal);
                }
            }
        }

        function offline_status_hbt()
        {
            let hbt_dur = 2500;
            let hbt_ivl;

            hbt_ivl = setInterval(() => 
            {
                updOfflineStatus();
            }, hbt_dur);
        }



    // INITIALIZATION

        // Init firebase and application
        window.addEventListener('DOMContentLoaded', event =>
        {
            // Direct Traffic to the netlify domain
            let dmn = window.location.hostname.toLowerCase();
            let fb_dm_1 = "uvidplus.firebaseapp.com";
            let fb_dm_2 = "uvidplus.web.app";

            if((dmn === fb_dm_1) || (dmn === fb_dm_2))
            {
                window.location.href = "https://uvidplus.netlify.app";
            }
            
            // Start offline checker
            offline_status_hbt();

            const firebaseConfig = 
            {
                apiKey: "AIzaSyBTuHOEvK6vg5Z-92OYG5kUxmXKi_X3JtI",
                authDomain: "uvidplus.firebaseapp.com",
                projectId: "uvidplus",
                storageBucket: "uvidplus.firebasestorage.app",
                messagingSenderId: "1027140403243",
                appId: "1:1027140403243:web:fe5fe04002aca3e199aa6e",
                measurementId: "G-DG0N2NHZJZ"
            };

            
            if (!firebase.apps.length) 
            {
                window.firebaseApp = firebase.initializeApp(firebaseConfig);
                window.firebaseAuth = firebase.auth();
                window.uvidUser = null;
                window.uvidUserVrfd = false;
                window.firebaseDB = firebase.firestore();

                const auth = window.firebaseAuth;

                // Get user (if it exists)
                auth.onAuthStateChanged((user) => 
                {
                    window.uvidUser = user;
                    window.uvidUserVrfd = !!(user && user.emailVerified);

                    startApplication();
                });
            }
        });