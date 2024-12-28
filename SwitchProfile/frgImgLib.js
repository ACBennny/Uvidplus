/***************************************************************
 * This will serve as a data library for Foreground Images of 
 * The Edit Profile Modal
 * 
 * Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "FrgImgLib.frgImgInv" to access the array
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/
 
(() => 
{
    const frgImgInv = 
    [
        {
            frg_sectname: `Featured`,
            frg_ImgSrcSet: [
                {img_src: `/Images/pfp/pfp_0.jpg`,},
                {img_src: `/Images/pfp/pfp_1.jpg`,},
                {img_src: `/Images/pfp/pfp_2.jpg`,},
                {img_src: `/Images/pfp/pfp_3.jpg`,},
                {img_src: `/Images/pfp/pfp_4.jpg`,},
                {img_src: `/Images/pfp/pfp_5.jpg`,},
                {img_src: `/Images/pfp/pfp_7.jpg`,},
                {img_src: `/Images/pfp/pfp_8.jpg`,},
                {img_src: `/Images/pfp/pfp_9.jpg`,},
                {img_src: `/Images/pfp/pfp_10.jpg`,},
                {img_src: `/Images/pfp/pfp_11.jpg`,},
                {img_src: `/Images/pfp/pfp_12.jpg`,},
            ],
        },
        {
            frg_sectname: `Uvid`,
            frg_ImgSrcSet: [
                {img_src: `/Images/pfp/pfp_0.jpg`,},
                {img_src: `/Images/pfp/pfp_1.jpg`,},
                {img_src: `/Images/pfp/pfp_2.jpg`,},
                {img_src: `/Images/pfp/pfp_3.jpg`,},
                {img_src: `/Images/pfp/pfp_4.jpg`,},
                {img_src: `/Images/pfp/pfp_5.jpg`,},
                {img_src: `/Images/pfp/pfp_7.jpg`,},
                {img_src: `/Images/pfp/pfp_8.jpg`,},
                {img_src: `/Images/pfp/pfp_9.jpg`,},
                {img_src: `/Images/pfp/pfp_10.jpg`,},
                {img_src: `/Images/pfp/pfp_11.jpg`,},
                {img_src: `/Images/pfp/pfp_12.jpg`,},
            ],
        },
        {
            frg_sectname: `Movies`,
            frg_ImgSrcSet: [
                {img_src: `/Images/pfp/pfp_0.jpg`,},
                {img_src: `/Images/pfp/pfp_1.jpg`,},
                {img_src: `/Images/pfp/pfp_2.jpg`,},
                {img_src: `/Images/pfp/pfp_3.jpg`,},
                {img_src: `/Images/pfp/pfp_4.jpg`,},
                {img_src: `/Images/pfp/pfp_5.jpg`,},
                {img_src: `/Images/pfp/pfp_7.jpg`,},
                {img_src: `/Images/pfp/pfp_8.jpg`,},
                {img_src: `/Images/pfp/pfp_9.jpg`,},
                {img_src: `/Images/pfp/pfp_10.jpg`,},
                {img_src: `/Images/pfp/pfp_11.jpg`,},
                {img_src: `/Images/pfp/pfp_12.jpg`,},
            ],
        },
        {
            frg_sectname: `Tv Shows`,
            frg_ImgSrcSet: [
                {img_src: `/Images/pfp/pfp_0.jpg`,},
                {img_src: `/Images/pfp/pfp_1.jpg`,},
                {img_src: `/Images/pfp/pfp_2.jpg`,},
                {img_src: `/Images/pfp/pfp_3.jpg`,},
                {img_src: `/Images/pfp/pfp_4.jpg`,},
                {img_src: `/Images/pfp/pfp_5.jpg`,},
                {img_src: `/Images/pfp/pfp_7.jpg`,},
                {img_src: `/Images/pfp/pfp_8.jpg`,},
                {img_src: `/Images/pfp/pfp_9.jpg`,},
                {img_src: `/Images/pfp/pfp_10.jpg`,},
                {img_src: `/Images/pfp/pfp_11.jpg`,},
                {img_src: `/Images/pfp/pfp_12.jpg`,},
            ],
        },
    ];

    // Exporting the variable to a global namespace
    window.FrgImgLib = window.FrgImgLib || {}; // Ensure namespace exists
    window.FrgImgLib.frgImgInv = frgImgInv;
})();

