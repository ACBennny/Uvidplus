/**********************************************************************************************************
 * This is the script file for the functionality of the Genres Page
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/

    window.addEventListener("load", preGenresSection);

    function preGenresSection()
    {
        // INSERTING INTO DOM

            document.body.insertAdjacentHTML(`afterbegin` , genresHTML);

        // CREATING THE BASIC SLIDER

            let basicSliderScriptTag = document.createElement("script");
            basicSliderScriptTag.setAttribute(`src` , `/basic_slider.js`);

            basicSliderScriptTag.addEventListener("load" , () => 
            {
                basicSlider();
                // startHomeSection();
            });
            document.body.appendChild(basicSliderScriptTag);
    }