/*************************************************************
 * This is the script for the privacy page of Uvid+
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    const uvidplus_privacy_ = 
    `
        <div class="error_bdr">
            <div class="error_box">
                <div class="error_note">
                    <div class="header">
                        <h1 class="header_note hN1">P</h1>
                        <h1 class="header_note hN2">rivacy</h1>
                        <h1 class="header_note hN3">!</h1>
                    </div>
                    <div class="middle">
                        <h3 class="mid_Title">Privacy</h3>
                        <p class="mid_Note">
                            Uvid+ only stores certain information to provide a seamless experience across multiple platforms. 
                            <br><br>
                            Such information includes but is not limited to your sign-in credentials, watchlist, collections (also known as playlists),
                            liked shows, disliked shows, watch history, profile characteristics (profile picture, profile banner, profile name), 
                            demo membership details, and other random/user-generated content.
                            <br><br>
                            Some information (e.g., watchlist, collectons etcetera) can be permanently deleted at any time. To permanently delete 
                            all information, you must delete your account. 
                            Visit this guide <span class="goToHome" onclick="window.open('#/help/article/64804346', '_self')">here</span> if you wish to do so.
                            <br><br>
                            Uvid+ plus does not knowingly collect any personal identifying information.
                            <br><br>
                            This policy is non-applicable to third-party services that Uvid+ may integrate/link to its platform.
                            <br><br>
                            Note that this policy can be updated at any time without prior notification.
                        </p>
                    </div>
                    <div class="footer">
                        <div class="logoBox">
                            <a onclick="window.location.hash = page_route_fallback()" class="logo">
                                <h2 class="logo1">U</h2>
                                <h2 class="logo2">VID+</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;


    function display_privacy_()
    {
        // Remove side & bottom navbars
        sideNavBar.classList.add("hidden");
        btmNavBar.classList.add("hidden");
    
        // Insert topNavBar struct
        topNavBar.insertAdjacentHTML(`beforeend` , topNavBarStruct);
        topNavBar.classList.add("initialize");
        attachReturnToHomePageListeners();
    
        // Insert the tou struct
        documentCtnt.insertAdjacentHTML(`beforeend` , uvidplus_privacy_);
    }