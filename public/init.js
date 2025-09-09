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
        let oflnMdl = document.querySelector(".offline_mdl_bdr.static");

        if((navigator.onLine))
        {
            if(!(oflnMdl)) return;
            documentBody.classList.remove("bodystop");
            document.querySelector(".offline_mdl_bdr.static").remove();
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
            // let dmn = window.location.hostname.toLowerCase();
            // let fb_dm_1 = "uvidplus.firebaseapp.com";
            // let fb_dm_2 = "uvidplus.web.app";

            // if((dmn === fb_dm_1) || (dmn === fb_dm_2))
            // {
            //     window.location.href = "https://uvidplus.netlify.app";
            // }
            
            // Start offline checker
            // offline_status_hbt();

            const firebaseConfig = 
            {
                apiKey: "AIzaSyBTuHOEvK6vg5Z-92OYG5kUxmXKi_X3JtI",
                authDomain: "uvidplus.firebaseapp.com",
                projectId: "uvidplus",
                storageBucket: "uvidplus.firebasestorage.app",
                messagingSenderId: "1027140403243",
                appId: "1:1027140403243:web:fe5fe04002aca3e199aa6e",
            };

            
            if (!firebase.apps.length) 
            {
                window.firebaseApp = firebase.initializeApp(firebaseConfig);
                window.firebaseAuth = firebase.auth();
                window.uvidUser = null;
                window.uvidUserVrfd = false;
                window.firebaseDB = firebase.firestore();

                const auth = window.firebaseAuth;

                // Setting up user's signing in with a provider
                auth.getRedirectResult()
                    .then(async (result) => 
                    {
                        if (result.user)
                        {
                            const user = result.user;
                            const info = firebase.auth.getAdditionalUserInfo(result);
                            const isNewUser = info.isNewUser;

                            // Initialize new user's details in firebase
                            if(isNewUser)
                            {
                                window._is_uvp_fb_setup = false;
                                const isFbStp = await uvp_fb_setup(user.uid, (user?.displayName || `First-name-${generateRandomString()} Last-name-${generateRandomString()}`));

                                if(!isFbStp) throw new Error("Firebase user initialization in firestore failed");

                                console.log("Welcome new user:", user.displayName);
                            }
                            else
                            {
                                console.log("Welcome back:", user.displayName);
                            }
                        }
                    })
                    .catch((error) => 
                    {
                        console.error(error);
                    });

                // Get user (if it exists)
                auth.onAuthStateChanged((user) => 
                {
                    window.uvidUser = user;
                    window.uvidUserVrfd = !!(user && user.emailVerified);
                    window.hasEmPswdOrigin = user?.providerData?.some(p => p?.providerId === "password") || false;
                    handleMbspStatus();
                    startApplication();
                });
            }
        });