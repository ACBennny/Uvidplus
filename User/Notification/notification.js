/***************************************************************
 * This will hold the code for General functions of the Notification page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let notificationCtntBox = document.querySelector(".notification_ctnt_box");

    function startUserPage()
    {
        
        let notificationLibraryScriptTag = document.createElement("script");
        notificationLibraryScriptTag.setAttribute(`src` , `/User/Notification/library.js`);
        notificationLibraryScriptTag.addEventListener("load" , () => 
        {
            fetchUserNotification();
        });

        document.body.appendChild(notificationLibraryScriptTag);
    }

    function fetchUserNotification()
    {
        for(let i = 0; i < notificationInventory.length; i++)
        {
            const item = notificationInventory[i];
            const notificationCardStruct = 
            `
                <div class="notification_card_bdr">
                    <div class="notification_card_box">
                        <div class="notification_thumbnail_bdr">
                            <div class="notification_thumbnail_box">
                                <img src="${item.thumbnail}" alt="The thumbnail image of the '${item.main_topic}' notification" class="notification_thumbnail_img">
                            </div>
                        </div>
                        <div class="notification_detail_bdr">
                            <div class="notification_detail_box">
                                <div class="notification_MainTopic_bdr">
                                    <div class="notification_MainTopic_box">
                                        <div class="notification_MainTopic_text">${item.main_topic}</div>
                                    </div>
                                </div>
                                <div class="notification_SubTopic_bdr">
                                    <div class="notification_SubTopic_box">
                                        <p class="notification_SubTopic_text">${item.sub_topic}</p>
                                    </div>
                                </div>
                                <div class="notification_action_bdr">
                                    <div class="notification_action_box">
                                        <a href="${item.action_link}" title="${item.action_text}" class="notification_action_text">${item.action_text} →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            notificationCtntBox.insertAdjacentHTML('beforeend', notificationCardStruct);
            console.log(`Count ${i}`);
        }

        assignNotificationListeners();
    }


    function assignNotificationListeners()
    {
        let markAllNotificationsAsRead = document.querySelector(".markAllNotificationsAsRead");
        markAllNotificationsAsRead.addEventListener("click" , () => 
        {
            notification(`notifyGood` , `All notifications marked as read`);
        });
    }


