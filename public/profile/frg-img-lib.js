/***************************************************************
 * This will serve as a data library for Foreground Images of 
 * The Edit Profile Modal
 * 
 * Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "FrgImgLib.frgImgInv" to access the array
 * 
****************************************************************/
 
(() => 
{
    const frgImgInv = 
    [
        {
            frg_sectname: `Featured`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.webp`,},
                {img_src: `/images/pfp/pfp-1.webp`,},
                {img_src: `/images/pfp/pfp-2.webp`,},
                {img_src: `/images/pfp/pfp-3.webp`,},
                {img_src: `/images/pfp/pfp-4.webp`,},
                {img_src: `/images/pfp/pfp-5.webp`,},
                {img_src: `/images/pfp/pfp-7.webp`,},
                {img_src: `/images/pfp/pfp-8.webp`,},
                {img_src: `/images/pfp/pfp-9.webp`,},
                {img_src: `/images/pfp/pfp-10.webp`,},
                {img_src: `/images/pfp/pfp-11.webp`,},
                {img_src: `/images/pfp/pfp-12.webp`,},
            ],
        },
        {
            frg_sectname: `Uvid+`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.webp`,},
                {img_src: `/images/pfp/pfp-1.webp`,},
                {img_src: `/images/pfp/pfp-2.webp`,},
                {img_src: `/images/pfp/pfp-3.webp`,},
                {img_src: `/images/pfp/pfp-4.webp`,},
                {img_src: `/images/pfp/pfp-5.webp`,},
                {img_src: `/images/pfp/pfp-7.webp`,},
                {img_src: `/images/pfp/pfp-8.webp`,},
                {img_src: `/images/pfp/pfp-9.webp`,},
                {img_src: `/images/pfp/pfp-10.webp`,},
                {img_src: `/images/pfp/pfp-11.webp`,},
                {img_src: `/images/pfp/pfp-12.webp`,},
            ],
        },
        {
            frg_sectname: `Movies`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.webp`,},
                {img_src: `/images/pfp/pfp-1.webp`,},
                {img_src: `/images/pfp/pfp-2.webp`,},
                {img_src: `/images/pfp/pfp-3.webp`,},
                {img_src: `/images/pfp/pfp-4.webp`,},
                {img_src: `/images/pfp/pfp-5.webp`,},
                {img_src: `/images/pfp/pfp-7.webp`,},
                {img_src: `/images/pfp/pfp-8.webp`,},
                {img_src: `/images/pfp/pfp-9.webp`,},
                {img_src: `/images/pfp/pfp-10.webp`,},
                {img_src: `/images/pfp/pfp-11.webp`,},
                {img_src: `/images/pfp/pfp-12.webp`,},
            ],
        },
        {
            frg_sectname: `Tv Shows`,
            frg_ImgSrcSet: [
                {img_src: `/images/pfp/pfp-0.webp`,},
                {img_src: `/images/pfp/pfp-1.webp`,},
                {img_src: `/images/pfp/pfp-2.webp`,},
                {img_src: `/images/pfp/pfp-3.webp`,},
                {img_src: `/images/pfp/pfp-4.webp`,},
                {img_src: `/images/pfp/pfp-5.webp`,},
                {img_src: `/images/pfp/pfp-7.webp`,},
                {img_src: `/images/pfp/pfp-8.webp`,},
                {img_src: `/images/pfp/pfp-9.webp`,},
                {img_src: `/images/pfp/pfp-10.webp`,},
                {img_src: `/images/pfp/pfp-11.webp`,},
                {img_src: `/images/pfp/pfp-12.webp`,},
            ],
        },
    ];

    // Exporting the variable to a global namespace
    window.FrgImgLib = window.FrgImgLib || {}; // Ensure namespace exists
    window.FrgImgLib.frgImgInv = frgImgInv;
})();

