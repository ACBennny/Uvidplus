/*************************************************************
 * This is the script for the landing page of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


// DEFINITION

    const documentBody = document.body;
    const preload = document.querySelector('#preloader');


// PRELOADER

    // This function removes the preloader after the skeleton of the website has been loaded
    
    window.addEventListener("load", () => {
        preload.style.display = "none";
        documentBody.classList.add('bodystart');
    });





