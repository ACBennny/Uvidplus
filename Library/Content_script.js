 
/***************************************************************
 * This will hold the code for the different sections of the website 
    The sections include:
    - Anime
    - TV
    - Movies
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    window.addEventListener("load", preContentSection);

    function preContentSection()
    {
        // INITIALIZATION
        let contentBody = document.querySelector(".content_body");
        let contentBodyId = contentBody.getAttribute("id");
        let contentBodyIdLC = contentBodyId.toLocaleLowerCase();
        let contentScriptSrc = ``;

        switch(contentBodyIdLC)
        {
            case 'anime':
                contentScriptSrc = `/Library/Anime.js`;
                break;
                
            case 'movie':
                contentScriptSrc = `/Library/Movies.js`;
                break;
                
            case 'tv':
                contentScriptSrc = `/Library/Tv.js`;
                break;

            default:
                window.open(`/Error404.html` , `_self`);
                return;
        }

        let contentScriptTag = document.createElement("script");
        contentScriptTag.setAttribute(`id` , `contentHTMLId`);
        contentScriptTag.setAttribute(`src` , `${contentScriptSrc}`);

        contentScriptTag.addEventListener("load" , () => 
        {
            contentBody.insertAdjacentHTML(`afterbegin` , contentHTML);

            let basicSliderScriptTag = document.createElement("script");
            basicSliderScriptTag.setAttribute(`src` , `/basic_slider.js`);
    
            basicSliderScriptTag.addEventListener("load" , () => 
            {
                basicSlider();
                startContentSection();
                attachWatchListEventListeners();
                attachAddToPLEventListeners();
            });
            document.body.appendChild(basicSliderScriptTag);
            
        });

        document.body.appendChild(contentScriptTag);
    }


    function startContentSection()
    {

        // DEFINTION

            let allContentImg = document.querySelectorAll('img');
            const watchSectionBdr = document.querySelectorAll(".watchSectionBdr");



        // ALL IMAGES
                    
            // Sets loading to lazy
            allContentImg.forEach(eachImg => 
            {
                eachImg.loading = "lazy";
            });



        // DOUBLE SIDED SHOWS

            // Double Sided Show Details
            watchSectionBdr.forEach(sectionBdr => 
            {
                const showHead = sectionBdr.querySelector(".watchHead");
                const showEpLink = sectionBdr.querySelector(".watchEpLink");
                const showImg = sectionBdr.querySelector(".watchImg");
                const showToSeries = sectionBdr.querySelector(".goToSeries");

                // Set the title of the Episode link
                showEpLink.title = "Watch " + showHead.textContent + " Season 1 Episode 1";

                // Setting the alt text of the
                showImg.alt = "Image of the Anime " + showHead.textContent;

                // Setting the title of the "To Series" link
                showToSeries.title = "Go to " + showHead.textContent + " series";
            });
    }




    







