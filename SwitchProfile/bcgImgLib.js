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
                {img_src: `/Images/Uvid_bcg0.jpg`,},
                {img_src: `/Images/Uvid_green_bcg2.jpg`,},
                {img_src: `/Images/Uvid_bcg1.jpg`,},
                {img_src: `/Images/Uvid_bcg2.jpg`,},
                {img_src: `/Images/Uvid_green_bcg1_light.jpg`,},
                {img_src: `/Images/Uvid_bcg3.jpg`,},
                {img_src: `/Images/bcg/default.jpg`,},
            ],
        },
        {
            bcg_sectname: `Movies`,
            bcg_ImgSrcSet: [
                {img_src: `/Images/Uvid_movies0.jpg`,},
                {img_src: `/Images/uvid_red_velvet0.png`,},
                {img_src: `/Images/Uvid_bcg1.jpg`,},
                {img_src: `/Images/uvid_red_velvet1.jpg`,},
                {img_src: `/Images/Uvid_bcg3.jpg`,},
                {img_src: `/Images/Uvid_movies1.jpg`,},
            ],
        },
        {
            bcg_sectname: `Tv Shows`,
            bcg_ImgSrcSet: [
                {img_src: `/Images/Uvid_TVShows.jpg`,},
                {img_src: `/Images/Uvid_Anime.jpg`,},
                {img_src: `/Images/Uvid_documentary.png`,},
                {img_src: `/Images/Uvid_Cartoon2.jpg`,},
                {img_src: `/Images/Uvid_Cartoon3.jpg`,},
                {img_src: `/Images/Uvid_Cartoon1.png`,},
            ],
        },
        {
            bcg_sectname: `Solid`,
            bcg_ImgSrcSet: [
                {img_src: `/Images/bcg/default.jpg`,},
                {img_src: `/Images/bcg/red.jpg`,},
                {img_src: `/Images/bcg/blue.jpg`,},
                {img_src: `/Images/bcg/green.jpg`,},
                {img_src: `/Images/bcg/grey.jpg`,},
                {img_src: `/Images/bcg/pink.jpg`,},
                {img_src: `/Images/bcg/orange.jpg`,},
                {img_src: `/Images/bcg/yellow.jpg`,},
                {img_src: `/Images/bcg/purple.jpg`,},
            ],
        },
    ];

    // Exporting the variable to a global namespace
    window.BcgImgLib = window.BcgImgLib || {}; // Ensure namespace exists
    window.BcgImgLib.bcgImgInv = bcgImgInv;
})();