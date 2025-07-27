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
                        <path fill-rule="evenodd" d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138z" clip-rule="evenodd" />
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
    {
        cmpnt_name: `Image preloader`,
        cmpnt_struct: 
        `
            <div class="img_preload_box">
                <div class="img_preload_sibling"></div>
                <img loading="lazy" 
                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                    src="" alt="image" class=""
                >
            </div>
        `,
    },
];