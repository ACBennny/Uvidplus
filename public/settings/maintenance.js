/************************************************************************
 * This holds the structure of the maintenance notice
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 ***********************************************************************/


const uvp_maintenance_struct = 
`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Maintenance • Uvid+</title>
            <link rel="shortcut icon" href="logo/logo.ico" type="image/x-icon">
            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                @font-face
                {
                    font-family: 'Berlin Sans FB';
                    font-style: normal;
                    font-weight: normal;
                    src: local('Berlin Sans FB'), url('/fonts/BRLNSR.woff2') format('woff2');
                }
                @font-face
                {
                    font-family: 'Berlin Sans FB Bold';
                    font-style: normal;
                    font-weight: bold;
                    src: local('Berlin Sans FB Bold'), url('/fonts/BRLNSB.woff2') format('woff2');
                }

                html
                {
                    background-color: #000;
                    -moz-user-select: -moz-none;
                    -moz-user-select: none;
                    -webkit-user-select: none;
                    user-select: none;
                    scroll-behavior: smooth;
                }
                body
                {   
                    font-family: 'Berlin Sans FB', sans-serif;
                    min-height: 100svh;
                    min-height: 100vh;
                }
                .offline_mdl_bdr
                {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    background-image: radial-gradient(circle at 50% 50%, #2a2a2a 0%, #1e1e1e 60%);
                    z-index: 10000000000002;
                }

                .offline_mdl_bdr .offline_mdl_box
                {
                    width: -moz-fit-content;
                    width: fit-content;
                    height: -moz-fit-content;
                    height: fit-content;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .offline_mdl_box .offline_mdl_icon_bdr
                {
                    width: 7.25rem;
                    height: 7.25rem;
                }

                .offline_mdl_icon_bdr .offline_mdl_icon_box
                {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                .offline_mdl_icon_box .offline_mdl_icon_svg
                {
                    width: 100%;
                    height: 100%;
                    fill: var(--genGreenTypeLight);
                }

                .offline_mdl_box .offline_mdl_ttl_box
                {
                    width: -moz-fit-content;
                    width: fit-content;
                    height: -moz-fit-content;
                    height: fit-content;
                    margin-top: 1.5rem;
                }

                .offline_mdl_ttl_box .offline_mdl_ttl_txt
                {
                    color: #fff;
                    font-size: 1.875rem;
                    text-align: center;
                }

                .offline_mdl_box .offline_mdl_det_box
                {
                    width: -moz-fit-content;
                    width: fit-content;
                    height: -moz-fit-content;
                    height: fit-content;
                    margin-top: 0.75rem;
                }

                .offline_mdl_det_box .offline_mdl_det_txt
                {
                    color: #dfdfdf;
                    font-size: 1.125rem;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="offline_mdl_bdr">
                <div class="offline_mdl_box">
                    <div class="offline_mdl_icon_bdr">
                        <div class="offline_mdl_icon_box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="offline_mdl_icon_svg">
                                <path fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.306-6.25a.667.667 0 0 0-.943.944L11.057 18l-1.306 1.306a.667.667 0 0 0 .943.943L12 18.943l1.306 1.306a.667.667 0 0 0 .943-.943L12.943 18l1.306-1.306a.667.667 0 0 0-.943-.943L12 17.057z" clip-rule="evenodd" />
                                <path d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" />
                            </svg>
                            <img class="offline_mdl_icon_svg" src="/images/uvid-logo.png" alt="" onload="this.previousElementSibling.style.display='none'">
                        </div>
                    </div>
                    <div class="offline_mdl_ttl_box">
                        <div class="offline_mdl_ttl_txt">Maintenance</div>
                    </div>
                    <div class="offline_mdl_det_box">
                        <p class="offline_mdl_det_txt">We are currently undergoing maintenance and will be back shortly.</p>
                    </div>
                </div>
            </div>
        </body>
    </html>

`;
