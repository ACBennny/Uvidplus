/***************************************************************
 * This will serve as a data library for Background Images of 
 * The Edit Profile Modal
 * 
 * Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "BcgImgLib.bcgImgInv" to access the array
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/
 
(() => 
{
    const bcgImgInv = 
    [
        {
            bcg_sectname: `Uvid`,
            bcg_ImgSrcSet: [
                {img_src: `/images/uvid-bcg0.jpg`,},
                {img_src: `/images/uvid-green-bcg2.jpg`,},
                {img_src: `/images/uvid-bcg1.jpg`,},
                {img_src: `/images/uvid-bcg2.jpg`,},
                {img_src: `/images/uvid-green-bcg1-light.jpg`,},
                {img_src: `/images/uvid-bcg3.jpg`,},
                {img_src: `/images/bcg/default.jpg`,},
            ],
        },
        {
            bcg_sectname: `Movies`,
            bcg_ImgSrcSet: [
                {img_src: `/images/uvid-movies0.jpg`,},
                {img_src: `/images/uvid-red-velvet0.png`,},
                {img_src: `/images/uvid-bcg1.jpg`,},
                {img_src: `/images/uvid-red-velvet1.jpg`,},
                {img_src: `/images/uvid-bcg3.jpg`,},
                {img_src: `/images/uvid-movies1.jpg`,},
            ],
        },
        {
            bcg_sectname: `Tv Shows`,
            bcg_ImgSrcSet: [
                {img_src: `/images/uvid-tv-shows.jpg`,},
                {img_src: `/images/uvid-anime.jpg`,},
                {img_src: `/images/uvid-documentary.png`,},
                {img_src: `/images/uvid-cartoon2.jpg`,},
                {img_src: `/images/uvid-cartoon3.jpg`,},
                {img_src: `/images/uvid-cartoon1.png`,},
            ],
        },
        {
            bcg_sectname: `Solid`,
            bcg_ImgSrcSet: [
                {img_src: `/images/bcg/default.jpg`,},
                {img_src: `/images/bcg/red.jpg`,},
                {img_src: `/images/bcg/blue.jpg`,},
                {img_src: `/images/bcg/green.jpg`,},
                {img_src: `/images/bcg/grey.jpg`,},
                {img_src: `/images/bcg/pink.jpg`,},
                {img_src: `/images/bcg/orange.jpg`,},
                {img_src: `/images/bcg/yellow.jpg`,},
                {img_src: `/images/bcg/purple.jpg`,},
            ],
        },
    ];

    // Exporting the variable to a global namespace
    window.BcgImgLib = window.BcgImgLib || {}; // Ensure namespace exists
    window.BcgImgLib.bcgImgInv = bcgImgInv;
})();