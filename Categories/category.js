/*************************************************************
 * This is for the general functionalities of the category page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    // Definition
    let categoriesGridCardBcg = document.querySelectorAll(".categoriesGridCardBcg");


    // Applying a random bcg clr to the category cards
    function genRandomColor() 
    {
        const letters = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) 
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    categoriesGridCardBcg.forEach(card => 
    {
        const randomColor = genRandomColor();
        card.style.setProperty('--catBcgClr', randomColor);
    });

