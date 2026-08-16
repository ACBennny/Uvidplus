/***************************************************************
 * This will serve as a data library for Background Images of 
 * The Edit Profile Modal
 * 
 * Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "BcgImgLib.bcgImgInv" to access the array
 * 
****************************************************************/
 
(() => 
{
    const bcgImgInv = 
    [
        {
            bcg_sectname: `ACUvid V3`,
            bcg_ImgSrcSet: [
                {img_src: `/images/uvid-bcg0.webp`,},
                {img_src: `/images/uvid-green-bcg2.webp`,},
                {img_src: `/images/uvid-bcg1.webp`,},
                {img_src: `/images/uvid-bcg2.webp`,},
                {img_src: `/images/uvid-green-bcg1-light.webp`,},
                {img_src: `/images/bcg/default.webp`,},
            ],
        },
        {
            bcg_sectname: `Movies`,
            bcg_ImgSrcSet: [
                {img_src: `/images/uvid-movies0.webp`,},
                {img_src: `/images/uvid-red-velvet0.webp`,},
                {img_src: `/images/uvid-bcg1.webp`,},
                {img_src: `/images/uvid-red-velvet1.webp`,},
                {img_src: `/images/uvid-movies1.webp`,},
            ],
        },
        {
            bcg_sectname: `Tv Shows`,
            bcg_ImgSrcSet: [
                {img_src: `/images/uvid-tv-shows.webp`,},
                {img_src: `/images/uvid-anime.webp`,},
                {img_src: `/images/uvid-documentary.webp`,},
                {img_src: `/images/uvid-cartoon2.webp`,},
                {img_src: `/images/uvid-cartoon1.webp`,},
            ],
        },
        {
            bcg_sectname: `Solid`,
            bcg_ImgSrcSet: [
                {img_src: `/images/bcg/default.webp`,},
                {img_src: `/images/bcg/red.webp`,},
                {img_src: `/images/bcg/blue.webp`,},
                {img_src: `/images/bcg/green.webp`,},
                {img_src: `/images/bcg/pink.webp`,},
                {img_src: `/images/bcg/orange.webp`,},
                {img_src: `/images/bcg/yellow.webp`,},
                {img_src: `/images/bcg/purple.webp`,},
            ],
        },
    ];

    // Exporting the variable to a global namespace
    window.BcgImgLib = window.BcgImgLib || {}; // Ensure namespace exists
    window.BcgImgLib.bcgImgInv = bcgImgInv;
})();