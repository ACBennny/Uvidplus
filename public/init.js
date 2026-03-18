/***************************************************************
 * This will initialize Firebase Globally
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

// Direct Traffic to the netlify domain

    let dmn = window.location.hostname.toLowerCase();
    let fb_dm_1 = "uvidplus.firebaseapp.com";
    let fb_dm_2 = "uvidplus.web.app";

    if((dmn === fb_dm_1) || (dmn === fb_dm_2))
    {
        window.location.href = "https://uvidplus.netlify.app";
    }

//  OFFLINE MSG

    function showOfflineModal()
    {
        const existing = document.querySelector(".offline_mdl_bdr.static");

        if(existing) return;

        documentBody.classList.add("bodystop");
        documentBody.insertAdjacentHTML("beforeend", offlineModal);
    }

    function hideOfflineModal()
    {
        const modal = document.querySelector(".offline_mdl_bdr.static");

        if(!modal) return;

        documentBody.classList.remove("bodystop");
        modal.remove();
    }

    function usrIsOnline()
    {
        hideOfflineModal();
        window.location.reload();
    }

    function usrIsOffline()
    {
        showOfflineModal();
    }

    function initOfflineHandlers()
    {
        if(!navigator.onLine)
        {
            showOfflineModal();
        }

        window.addEventListener("online", usrIsOnline);
        window.addEventListener("offline", usrIsOffline);
    }



// INITIALIZATION

    // Service Worker registration
    if('serviceWorker' in navigator) 
    {
        window.addEventListener('load', () => 
        {
            navigator.serviceWorker
            .register('/service-worker.js')
            .catch(err => console.error('Uvidplus SW registration failed:', err));
        });
    }



    window.addEventListener("beforeinstallprompt", event => 
    {
        event.preventDefault();
        window.deferredInstallPrompt = event;
    });

    // Init firebase and application
    window.addEventListener('DOMContentLoaded', event =>
    {
        
        // Start offline checker
        initOfflineHandlers();

        function dtd(p) 
        {
            function s(p) 
            {
                if ("string" == typeof p)
                    return function(p) {}
                    .constructor("while (true) {}").apply("counter");
                1 !== ("" + p / p).length || p % 20 == 0 
                    ? function() {return !0}.constructor("debugger").call("action") 
                    : function() {return !1}.constructor("debugger").apply("stateObject"),
                s(++p)
            }
            try
            {
                if (p)
                    return s;
                s(0)
            } catch (p) {}
        }
        setInterval(dtd, 4e3);
        document.addEventListener("contextmenu", (e) => {e.preventDefault()}, {capture: true});

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