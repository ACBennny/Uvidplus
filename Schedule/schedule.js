 /***************************************************************
 * This will hold the general functions for the schedule page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DEFINITION

    const scheduleSelTab = document.querySelectorAll(".schedule_selTab");
    const scheduleDateCard = document.querySelectorAll(".schedule_dateCard");
    const scheduleGidBox = document.querySelector(".schedule_ctntGrid");

// CHANGING THE FILTER

    scheduleSelTab.forEach((tab, i) => 
    {
        tab.addEventListener("click" , () => 
        {
            scheduleSelTab.forEach((currTab) => 
            {
                currTab.classList.remove("active");
            });

            tab.classList.add("active");
        });
    });


// CHANGING THE DATE

    scheduleDateCard.forEach((card, i) => 
    {
        card.addEventListener("click" , () => 
        {
            scheduleDateCard.forEach((currCard) => 
            {
                currCard.classList.remove("curr_day");
            });

            card.classList.add("curr_day");
        });
    });


// INSERTING THE CONTENT (Not sorted)

    for(let i = 0; i < 30; i++)
    {
        const item = searchInventory[i];
        const cardStruct = 
        `
            <div class="schedule_ctntCardBdr">
                <a href="${item.show_link}" class="schedule_ctntCardBox">
                    <div class="schedule_ctntThumbnailBdr">
                        <div class="schedule_ctntThumbnailBox">
                            <img src="${item.show_thumbnail}" alt="Thumnail image of ${item.show_title}" class="schedule_ctntThumbnailImg">
                        </div>
                    </div>
                    <div class="schedule_ctntDetBdr">
                        <div class="schedule_ctntDetBox">
                            <div class="schedule_ctntDetTitleBox">
                                <div class="schedule_ctntDetTitleText">${item.show_title}</div>
                            </div>
                            <div class="schedule_ctntDetEpBox">
                                <p class="schedule_ctntDetEpText">${item.show_aired}</p>
                            </div>
                            <div class="schedule_ctntDetDescBox">
                                <p class="schedule_ctntDetDescText">${item.show_description}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
        scheduleGidBox.insertAdjacentHTML(`beforeend` , cardStruct);
    }