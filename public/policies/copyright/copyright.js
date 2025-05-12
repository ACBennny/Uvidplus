/*************************************************************
 * This is the script for the copyright page of Uvid
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    const uvidplus_cpy_right_ = 
    `
        <div class="error_bdr">
            <div class="error_box">
                <div class="error_note">
                    <div class="header">
                        <h1 class="header_note hN1">C</h1>
                        <h1 class="header_note hN2">opyright</h1>
                        <h1 class="header_note hN3">©</h1>
                    </div>
                    <div class="middle">
                        <h3 class="mid_Title">Copyright Disclaimer</h3>
                        <p class="mid_Note">
                            Uvid does NOT own any media shown. 
                            We can only link to the media provided by non-affiliated third-party services.
                            Any legafl issues must be conversed with those services.
                            <br><br>
                            Note that this policy can be updated at any time without prior notification.
                        </p>
                    </div>
                    <div class="footer">
                        <div class="logoBox">
                            <a href="/" class="logo">
                                <h2 class="logo1">U</h2>
                                <h2 class="logo2">VID</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;


    function display_cpy_right_()
    {
        // Remove side & bottom navbars
        document.querySelector(".sideNavBar").classList.add("hidden");
        document.querySelector(".sideNavBar").classList.add("hidden");

        // Insert topNavBar struct
        document.querySelector(".topNavBar").insertAdjacentHTML(
            `beforeend` , 
            `
                <div class="topNavBdr">
                    <div class="topNavBox">
                        <section class="topNav_section">
                            <a href="/" class="company_logoBdr">
                                <div class="company_logoBox Companylogo">
                                    <img src="/images/uvid-logo.png" alt="" class="company_logoImg">
                                </div>
                            </a>
                        </section>
                        <section class="topNav_section"></section>
                    </div>
                </div>
            `
        );
        document.querySelector(".topNavBar").classList.add("initialize");

        // Insert the tou struct
        document.querySelector(".content").insertAdjacentHTML(`beforeend` , uvidplus_cpy_right_);
    }