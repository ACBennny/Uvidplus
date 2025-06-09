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
                            Uvid+ does NOT collect, store, or sell your personal information.
                            <br><br>
                            To simulate some processes in real streaming services, Uvid+ may ask you to provide some information, 
                            which includes but is not limited to your name, phone number, address, postal code, 
                            card credentials (card name, card number, CVC, etcetera), among others. 
                            <br><br>
                            You are expected to <strong>NOT</strong> put any valid information in those fields.
                            Instead, you may provide any random information as they will not be used for anything other than the process that requires them.
                            <br><br>
                            The random information you provide in Uvid+ will never be used to identify you.
                            <br><br>
                            In this respect, you fully, wholefully, and completely 
                            <strong>agree to NOT knowingly and/or willfully provide, or incentisize anyone to provide</strong> real, factual, valid or invalid, 
                            old or new, or any form of information, that directly or indirectly represents you or any other individual
                            <strong>excluding a valid working email</strong> for the sole purpose of account related activities which includes but is not limited to 
                            account creation, account authorisation, account management, and account customization.
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