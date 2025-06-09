/*************************************************************
 * This holds the general page components used across Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/

let gen_cmpnt_lib = 
[
    {
        cmpnt_name: `toggle`,
        cmpnt_struct: // Id must be unique for each toggle button
        `
            <div class="genCheckBoxBase">
                <input type="checkbox" id="" class="genCheckBoxInput" tabindex="-1" checked="">
                <label for="" class="genCheckBoxToggle">
                    <span class="genCheckBoxToggleCircle"></span>
                </label>
            </div>
        `,
    },
    {
        cmpnt_name: `checkmark checkbox chkbox chkbx`,
        cmpnt_struct: // Requires presence of the attr to become visible
        `
            <div class="genTick_chkBase">
                <div class="genTick_chkBdr">
                    <div class="genTick_chkBox">
                        <label for="" class="genTick_chkFldLbl">
                            <input type="checkbox" id="" class="genTick_chkFldCls">
                            <div class="genTick_chkFldIconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genTick_chkFldIconSvg">
                                    <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        `,
    },
    {
        cmpnt_name: `genBtnBox gen button`,
        cmpnt_struct: // Add "hide" to make invisible
        `
            <button type="button" class="genBtnBox ">
                <div class="genBtnIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                        <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="genBtnText"></span>
            </button>
        `,
    },
    {
        cmpnt_name: `topnavbartitle title`,
        cmpnt_struct: 
        `
            <div class="topNav_titleBox">
                <div class="topNav_titleText"></div>
            </div>
        `,
    },
];