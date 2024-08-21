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
                                <img src="${item.notify_thumbnail}" alt="The thumbnail image of the '${item.notify_mainTopic}' notification" class="notification_thumbnail_img">
                            </div>
                        </div>
                        <div class="notification_detail_bdr">
                            <div class="notification_detail_box">
                                <div class="notification_MainTopic_bdr">
                                    <div class="notification_MainTopic_box">
                                        <div class="notification_MainTopic_text">${item.notify_mainTopic}</div>
                                    </div>
                                </div>
                                <div class="notification_SubTopic_bdr">
                                    <div class="notification_SubTopic_box">
                                        <p class="notification_SubTopic_text">${item.notify_subTopic}</p>
                                    </div>
                                </div>
                                <div class="notification_action_bdr">
                                    <div class="notification_action_box">
                                        <a href="${item.notify_actionLink}" title="${item.notify_actionText}" class="notification_action_text">${item.notify_actionText} →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            notificationCtntBox.insertAdjacentHTML('beforeend', notificationCardStruct);
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


