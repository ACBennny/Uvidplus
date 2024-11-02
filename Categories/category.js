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
                        <div class="categoriesTitleText">Featured</div>
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


    window.addEventListener("load" , initCategories);

    function initCategories()
    {
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
                    <a href="${item.link}" class="categoriesGridCardLink"></a>
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
                    <a href="/Catalog.html?genre=${item.name.toLowerCase()}" class="categoriesGridCardLink"></a>
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
    }

    


    // Applying a random bcg clr to the category cards
    function genRandomColor() 
    {
        const code = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) 
        {
            color += code[Math.floor(Math.random() * 16)];
        }
        return color;
    }

