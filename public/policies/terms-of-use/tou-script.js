/*************************************************************
 * This is the script for the tou page of Uvid+
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


const uvidplus_tou_ = 
`
        <div class="error_bdr">
            <div class="error_box">
                <div class="error_note">
                    <div class="header">
                        <h1 class="header_note hN1">T</h1>
                        <h1 class="header_note hN2">O</h1>
                        <h1 class="header_note hN3">U</h1>
                    </div>
                    <div class="middle">
                        <h3 class="mid_Title">Terms Of Use</h3>
                        <p class="mid_Note">
                            Uvid+ ("Uvid", "ACUvid", "Uvidplus", "we", "us") is a project developed by the GitHub account
                            <a class="goToHome" href="https://github.com/ACBennny" target="_blank">acbennny</a> 
                            and accessible for free as a "demo" through 
                            <a class="goToHome" href="https://uvidplus.netlify.app" target="_blank">uvidplus.netlify.app</a>
                            which simulates the user interface and user experience of a streaming platform.
                            It is provided as is, without warranty, and without guarantee, of any kind. 
                            <br><br>
                            Uvid+ integrates <strong>Firebase</strong>, a service provided by Google for account creation, authentication, and customization.
                            <br><br>
                            Uvid+ also links to:
                            <br>
                            - <strong>TMDB APIs</strong>, a tool provided by TMDB,
                            <br>
                            - <strong>TVMaze APIs</strong>, a tool provided by TVMaze,
                            <br>
                            to provide details about tv shows, movies, and other related content.
                            <br><br>
                            Note that Uvid+ is not affiliated, endorsed, certified, or otherwise approved by any of these services.
                            <br><br>
                            By using this demo, you fully, wholefully, and completely:
                            <br>
                            [1] confirm that you are at least 18 years of age, or the minimum age of maturity 
                            as defined by your country of residence from which this demo is being accessed from,
                            if and only if the minimum age is greater than 18 years.
                            <br>
                            [2] inherit, obtain, and/or incur responsibility for any, and every damage(s)
                            that may occur.
                            <br>
                            [3] give up the right to pursue any form of legal action (including the right to sue) against the project,
                            the GitHub account that developed the project, the owner(s) of the account, and mentioned affiliates
                            in regards to your use of this demo.
                            <br>
                            [4] understand, that Uvid+ is FREE, and does NOT, and will NOT bill, or request any form of monetary goods from you.
                            <br>
                            [5] agree to NOT knowingly, and/or willfully provide, or incentisize anyone to provide real, factual, valid or invalid, 
                            old or new, or any form of information, that directly or indirectly represents you, or any other individual,
                            excluding a valid working email for the sole purpose of account related activities, which includes but is not limited to 
                            account creation, and account management.
                            <br><br>
                            By creating an account on 
                            <a class="goToHome" href="https://uvidplus.netlify.app" target="_blank">Uvid+</a>,
                            you voluntaringly agree to respect, value, uphold, and be binded by these terms. 
                            <br>
                            Likewise, by deleting your
                            <a class="goToHome" href="https://uvidplus.netlify.app" target="_blank">Uvid+</a> account,
                            you are immediately relieved of these terms.
                            <br><br>
                            As Uvid+ is simulating a streaming service, you may see elements or components of the demo that appear to conflict with our policy. 
                            In any conflicts of interest, our terms of use, and privacy policy remain absolute.
                            <br><br>
                            Our terms, and any of the other policies we provide only apply to this demo, 
                            <a class="goToHome" href="https://uvidplus.netlify.app" target="_blank">Uvid+</a>.
                            Other third-party services may have their own policies which may differ from ours.
                            <br>
                            Using this demo does not in any manner or form, bind you to any of the policies from the third-party services.
                            Any issues you may have with the third-party services, and/or their policies must be addressed accordingly with them.
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


function display_tou_()
{
    // Remove side & bottom navbars
    sideNavBar.classList.add("hidden");
    btmNavBar.classList.add("hidden");

    // Insert topNavBar struct
    topNavBar.insertAdjacentHTML(`beforeend` , topNavBarStruct);
    topNavBar.classList.add("initialize");
    attachReturnToHomePageListeners();

    // Insert the tou struct
    documentCtnt.insertAdjacentHTML(`beforeend` , uvidplus_tou_);
}