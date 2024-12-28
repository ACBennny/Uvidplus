/***************************************************************
 * This will serve as a data library for the different profiles of 
 * The Edit Profile Modal
 * 
 * Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "ProfileInfoLib.profileInfoInv" to access the array
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


(() => 
{
    const profileInfoInv = 
    [
        {
            prof_name: `acbennny`,
            prof_type: `admin`,
            prof_frgImg: `/Images/Uvid_profilebase.png`,
            prof_bcgImg: `/Images/Uvid_green_bcg1_light.jpg`,
        },
        {
            prof_name: `Alvare`,
            prof_type: `normal`,
            prof_frgImg: `/Images/pfp/pfp_2.jpg`,
            prof_bcgImg: `/Images/Uvid_TvShows.jpg`,
        },
        {
            prof_name: `Aston`,
            prof_type: `normal`,
            prof_frgImg: `/Images/pfp/pfp_4.jpg`,
            prof_bcgImg: `/Images/Uvid_Anime.jpg`,
        },
    ];

    // Exporting the variable to a global namespace
    window.ProfileInfoLib = window.ProfileInfoLib || {}; // Ensure namespace exists
    window.ProfileInfoLib.profileInfoInv = profileInfoInv;
})();




