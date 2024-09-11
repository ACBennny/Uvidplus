/***************************************************************
 * This will hold the code for General functions of the Profile page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    function startUserPage()
    {
        // Add event listeners to open edit modal
        let openUserProfEditFrgModal = document.querySelector(".openUserProfEditFrgModal");
        openUserProfEditFrgModal.addEventListener("click" , loadProfInfo);
        
        let openUserProfEditBcgModal = document.querySelector(".openUserProfEditBcgModal");
        openUserProfEditBcgModal.addEventListener("click" , loadProfInfo);
        
        let userProfDetEditBtnBox = document.querySelector(".userProfDetEditBtnBox");
        userProfDetEditBtnBox.addEventListener("click" , loadProfInfo);

        // Fetching the date for the "JOINED" (Note it's always the current date)
        let currentDate = new Date();
        let userJoinYear = currentDate.getFullYear();
        let userJoinMonth = currentDate.getMonth() + 1;
        let userJoinDay = currentDate.getDate();
        let userJoinYearString;
        let userJoinMonthString;
        let userJoinDayString;
        let userProfJoinText = document.querySelector(".userProfJoinText");

        // Add a zero prefix if day and/or month less than 10
        userJoinYearString = `${userJoinYear}`;
        if(userJoinMonth < 10)
        {
            userJoinMonthString = `0${userJoinMonth}`;
        }
        else
        {
            userJoinMonthString = `${userJoinMonth}`;
        }
        if(userJoinDay < 10)
        {
            userJoinDayString = `0${userJoinDay}`;
        }
        else
        {
            userJoinDayString = `${userJoinDay}`;
        }
        
        userProfJoinText.textContent = `${userJoinYearString} - ${userJoinMonthString} - ${userJoinDayString}`;
    }
