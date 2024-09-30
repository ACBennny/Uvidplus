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
            <div class="emptyUserPageBox">
                <div class="emptyUserPageCtnt">
                    <div class="emptyUserPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="emptyUserPageIconSvg">
                            <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z"/>
                        </svg>
                    </div>
                    <div class="emptyUserPageNoteBox">
                        <p class="emptyUserPageNoteText">No new Notifications</p>
                    </div>
                </div>
            </div>
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


