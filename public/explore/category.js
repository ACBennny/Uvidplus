/*************************************************************
 * This is for the general functionalities of the category page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/

    let categoriesStruct = 
    `
        <div class="categoriesBase">
            <div class="categoriesBdr">
                <div class="categoriesBox ftrCategoriesBox">
                    <div class="categoriesTitleBox">
                        <div class="categoriesTitleText">Categories</div>
                    </div>
                    <div class="categoriesGridBdr">
                        <div class="categoriesGridBox"></div>
                    </div>
                </div>
                <div class="categoriesBox gnrCategoriesBox">
                    <div class="categoriesTitleBox">
                        <div class="categoriesTitleText">Genres</div>
                    </div>
                    <div class="categoriesGridBdr">
                        <div class="categoriesGridBox"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let categoriesCardStruct = 
    `
        <div class="categoriesGridCardBdr">
            <div class="categoriesGridCardBcg"></div>
            <div class="categoriesGridCardBox">
                <div class="categoriesGridCardLabelBox">
                    <div class="categoriesGridCardLabelText"></div>
                </div>
            </div>
        </div>
    `;



    
    function initCategories()
    {
        // Update Navbar active states
        sideNavLinks[2].classList.add("active");
        btmNavLinks[1].classList.add("active");
        
        // Insert struct into DOM
        documentCtnt.insertAdjacentHTML(`afterbegin` , categoriesStruct);

        // Definition
        let ftrCategoriesGridBox = document.querySelector(".ftrCategoriesBox .categoriesGridBox");
        let gnrCategoriesGridBox = document.querySelector(".gnrCategoriesBox .categoriesGridBox");
        let categoriesGridCardBcg;

        // Fetch the feature categories
        for(f = 0; f < ftrCatInv.length; f++)
        {
            let item = ftrCatInv[f];
            let struct =  
            `
                <div class="categoriesGridCardBdr">
                    <div class="categoriesGridCardBcg"></div>
                    <div class="categoriesGridCardBox">
                        <div class="categoriesGridCardLabelBox">
                            <div class="categoriesGridCardLabelText">${item.name}</div>
                        </div>
                    </div>
                    <div onclick="window.open('${item.link}' , '_self')" class="categoriesGridCardLink"></div>
                </div>
            `;
            ftrCategoriesGridBox.insertAdjacentHTML(`beforeend` , struct);
        }

        // Fetch the genre categories
        for(g = 0; g < gnrCatInv.length; g++)
        {
            let item = gnrCatInv[g];
            let struct =  
            `
                <div class="categoriesGridCardBdr">
                    <div class="categoriesGridCardBcg"></div>
                    <div class="categoriesGridCardBox">
                        <div class="categoriesGridCardLabelBox">
                            <div class="categoriesGridCardLabelText">${item.name}</div>
                        </div>
                    </div>
                    <div onclick="window.open('#/explore/?genre=${item.name.toLowerCase()}' , '_self')" class="categoriesGridCardLink"></div>
                </div>
            `;
            gnrCategoriesGridBox.insertAdjacentHTML(`beforeend` , struct);
        }

        categoriesGridCardBcg = document.querySelectorAll(".categoriesGridCardBcg");
        categoriesGridCardBcg.forEach(card => 
        {
            const randomColor = genRandomColor();
            card.style.setProperty('--catBcgClr', randomColor);
        });

        // init catalog file
        initCatalogBase();
    }

