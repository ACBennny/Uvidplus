/***************************************************************
 * This will hold the code for General functions of the Notification page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

    let notificationCtntBox = document.querySelector(".notification_ctnt_box");
    let emptyUserPageBdr = document.querySelector(".emptyUserPageBdr");
    let emptyNotificationsStruct = 
    `
        <div class="emptyUserPageBdr">
            ${emptyUserPageBdr.innerHTML}
        </div>
    `;

    function startUserPage()
    {
        let notificationLibraryScriptId = document.querySelector("#notificationLibraryScriptId");
        if((notificationLibraryScriptId == undefined))
        {
            let notificationLibraryScriptTag = document.createElement("script");
            notificationLibraryScriptTag.setAttribute(`id` , `notificationLibraryScriptId`);
            notificationLibraryScriptTag.setAttribute(`src` , `/User/Notification/library.js`);
            document.body.appendChild(notificationLibraryScriptTag);

            notificationLibraryScriptTag.addEventListener("load" , () => 
            {
                fetchUserNotification();
            });
            notificationLibraryScriptTag.onerror = function() 
            {
                errorLoadingUserNotifications();
            };
        }
        else
        {
            fetchUserNotification();
        }

        // For error events
        function errorLoadingUserNotifications()
        {
            notification(`notifyBad` , `An error occurred while loading notifications`);
        }


        function fetchUserNotification()
        {
            // Check if the library is available
            if((notificationInventory == undefined))
            {
                errorLoadingUserNotifications();
                return;
            }

            // Check if there is content inside the library
            if((notificationInventory.length <= 0))
            {
                return;
            }

            // Remove epty status
            emptyUserPageBdr.remove();

            // Fetching content
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
            let notificationCardBdr = document.querySelectorAll(".notification_card_bdr");

            // Add listener for "Mark all as read" button
            let markAllUserNotificationsAsRead = document.querySelector(".markAllUserNotificationsAsRead");
            markAllUserNotificationsAsRead.addEventListener("click" , () => 
            {
                // Disable the button
                markAllUserNotificationsAsRead.disabled = true;

                // Remove all Notifications
                notificationCardBdr.forEach((bdr) => 
                {
                    bdr.remove();
                });

                // Insert empty status
                notificationCtntBox.insertAdjacentHTML(`afterbegin` , emptyNotificationsStruct);

                // Clear the navbar notifications and disable the button
                let markAllNavBarNotificationsAsRead = document.querySelector(".markAllNavBarNotificationsAsRead");
                if(markAllNavBarNotificationsAsRead.disabled === true) 
                {
                    notification(`notifyGood` , `All notifications marked as read`);
                    return;
                }
                markAllNavBarNotificationsAsRead.click();
            });
    
        }
    }


