/**********************************************************************************************************
 * This is the struct for Error 404
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/

const error404Struct = 
`
    <div class="error_bdr">
        <div class="error_box">
            <div class="error_note">
                <div class="header">
                    <h1 class="header_note hN1">4</h1>
                    <h1 class="header_note hN2">0</h1>
                    <h1 class="header_note hN3">4</h1>
                </div>
                <div class="middle">
                    <h3 class="mid_Title">Page Not Found</h3>
                    <p class="mid_Note">
                        It seems you may have: 
                        <br>
                        - entered a URL that doesn't exist,
                        <br>
                        - followed a broken link,
                        <br>
                        - or page is not available at the current time. 
                        <br>
                    </p>
                    <a href="/Home.html" class="goToHome">Back to home</a>
                </div>
                <div class="footer">
                    <div class="logoBox">
                        <a href="/Home.html" class="logo">
                            <h2 class="logo1">U</h2>
                            <h2 class="logo2">VID</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

window.addEventListener("load" , () => 
{
    document.body.insertAdjacentHTML(`afterbegin` , error404Struct);
});