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
                {img_src: `/images/pfp/pfp-0.jpg`,},
                {img_src: `/images/pfp/pfp-1.jpg`,},
                {img_src: `/images/pfp/pfp-2.jpg`,},
                {img_src: `/images/pfp/pfp-3.jpg`,},
                {img_src: `/images/pfp/pfp-4.jpg`,},
                {img_src: `/images/pfp/pfp-5.jpg`,},
                {img_src: `/images/pfp/pfp-7.jpg`,},
                {img_src: `/images/pfp/pfp-8.jpg`,},
                {img_src: `/images/pfp/pfp-9.jpg`,},
                {img_src: `/images/pfp/pfp-10.jpg`,},
                {img_src: `/images/pfp/pfp-11.jpg`,},
                {img_src: `/images/pfp/pfp-12.jpg`,},
            ],
        },
        {
            frg_sectname: `Uvid`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.jpg`,},
                {img_src: `/images/pfp/pfp-1.jpg`,},
                {img_src: `/images/pfp/pfp-2.jpg`,},
                {img_src: `/images/pfp/pfp-3.jpg`,},
                {img_src: `/images/pfp/pfp-4.jpg`,},
                {img_src: `/images/pfp/pfp-5.jpg`,},
                {img_src: `/images/pfp/pfp-7.jpg`,},
                {img_src: `/images/pfp/pfp-8.jpg`,},
                {img_src: `/images/pfp/pfp-9.jpg`,},
                {img_src: `/images/pfp/pfp-10.jpg`,},
                {img_src: `/images/pfp/pfp-11.jpg`,},
                {img_src: `/images/pfp/pfp-12.jpg`,},
            ],
        },
        {
            frg_sectname: `Movies`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.jpg`,},
                {img_src: `/images/pfp/pfp-1.jpg`,},
                {img_src: `/images/pfp/pfp-2.jpg`,},
                {img_src: `/images/pfp/pfp-3.jpg`,},
                {img_src: `/images/pfp/pfp-4.jpg`,},
                {img_src: `/images/pfp/pfp-5.jpg`,},
                {img_src: `/images/pfp/pfp-7.jpg`,},
                {img_src: `/images/pfp/pfp-8.jpg`,},
                {img_src: `/images/pfp/pfp-9.jpg`,},
                {img_src: `/images/pfp/pfp-10.jpg`,},
                {img_src: `/images/pfp/pfp-11.jpg`,},
                {img_src: `/images/pfp/pfp-12.jpg`,},
            ],
        },
        {
            frg_sectname: `Tv Shows`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.jpg`,},
                {img_src: `/images/pfp/pfp-1.jpg`,},
                {img_src: `/images/pfp/pfp-2.jpg`,},
                {img_src: `/images/pfp/pfp-3.jpg`,},
                {img_src: `/images/pfp/pfp-4.jpg`,},
                {img_src: `/images/pfp/pfp-5.jpg`,},
                {img_src: `/images/pfp/pfp-7.jpg`,},
                {img_src: `/images/pfp/pfp-8.jpg`,},
                {img_src: `/images/pfp/pfp-9.jpg`,},
                {img_src: `/images/pfp/pfp-10.jpg`,},
                {img_src: `/images/pfp/pfp-11.jpg`,},
                {img_src: `/images/pfp/pfp-12.jpg`,},
            ],
        },
    ];

    // Exporting the variable to a global namespace
    window.FrgImgLib = window.FrgImgLib || {}; // Ensure namespace exists
    window.FrgImgLib.frgImgInv = frgImgInv;
})();

