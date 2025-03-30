/***************************************************************
 * This will hold the code for General functions of the Notification page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    let ntfyStruct = 
    `
        <div class="ntfy_base">
            <div class="ntfy_bcg ntfy_close"></div>
            <div class="ntfy_bdr">
                <div class="ntfy_box">
                    <div class="ntfy_hdr_bdr">
                        <div class="ntfy_hdr_box">
                            <div class="ntfy_hdr_TitleBdr">
                                <button type="button" class="genBtnBox genIconBtn transBtn ntfy_close">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                                <div class="ntfy_hdr_TitleBox">
                                    <div class="ntfy_hdr_TitleText">Notification</div>
                                </div>
                            </div>
                            <div class="ntfy_hdr_atnBdr">
                                <button type="button" class="genBtnBox greySolidBtn markAllNotificationsAsRead">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path fill-rule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="genBtnText">Mark all as read</span>
                                </button>
                                <button type="button" class="genBtnBox greySolidBtn clear_ntfy_full clearAllNotifications">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                            <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="genBtnText">Clear all</span>
                                </button>
                                <button type="button" class="genBtnBox genIconBtn greySolidBtn clear_ntfy_half clearAllNotifications">
                                    <div class="genBtnIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="genBtnSvg">
                                            <path d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.72.72 0 0 1-.73.714H3.73A.72.72 0 0 1 3 6.524" />
                                            <path fill-rule="evenodd" d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5s-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ntfy_ctnt_bdr">
                        <div class="ntfy_ctnt_box"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    let emptyNtfyStruct = 
    `
        <div class="emptyPageBdr emptyNtfyPageBdr">
            <div class="emptyPageBox">
                <div class="emptyPageCtnt">
                    <div class="emptyPageIconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="emptyPageIconSvg">
                            <path d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21" />
                        </svg>
                    </div>
                    <div class="emptyPageNoteBox">
                        <p class="emptyPageNoteText">No new Notifications</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    let ntfyBase;
    let ntfyTimer;
    let ntfyCtntBox;

    
    // Insert Notification struct
    function startNotification()
    {
        documentBody.insertAdjacentHTML(`beforeend` , ntfyStruct);

        ntfyBase = document.querySelector(".ntfy_base");
        ntfyCtntBox = document.querySelector(".ntfy_ctnt_box");

        attachCloseNtfyModalListeners();
        fetchNotification();

        ntfyTimer = setTimeout(() => 
        {
            clearTimeout(ntfyTimer);
            ntfyBase.classList.add("active");
            documentBody.classList.add("bodystop");
        }, 100);
    }

    
    // Inserting the empty bdr when there are no watchlists
    function insertEmptyNtfyBdr()
    {
        ntfyCtntBox.insertAdjacentHTML(`afterbegin` , emptyNtfyStruct);
    }


    // Removing the empty bdr
    function removeEmptyNtfyBdr()
    {
        emptyNtfyPageBdr = document.querySelector(".emptyPageBdr");
        if(dlEmptyMyListPageBdr != undefined) dlEmptyMyListPageBdr.remove();
    }


    // For error events
    function errorLoadingNotifications()
    {
        notification(`notifyBad` , `An error occurred while loading notifications`);
    }


    function fetchNotification()
    {
        // Check if the library is available
        if((selectedProfile.prof_notifications == undefined))
        {
            errorLoadingNotifications();
            return;
        }

        // Check if there is content inside the library
        if((selectedProfile.prof_notifications.length <= 0))
        {
            return;
        }

        // Remove epty status
        removeEmptyNtfyBdr();

        // Fetching content
        for(let i = 0; i < selectedProfile.prof_notifications.length; i++)
        {
            const item = selectedProfile.prof_notifications[i];
            const notificationCardStruct = 
            `
                <div class="notification_card_bdr" data-read-status="${item.notify_readStatus}">
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
            ntfyCtntBox.insertAdjacentHTML('beforeend', notificationCardStruct);
        }
        let notificationCardBdr = document.querySelectorAll(".notification_card_bdr");

        // Add listeners
        attackMarkAllNtfyAsReadListeners();
        attackClearAllNtfyListeners();
    }

    // Mark all Notificatiions as read
    function markAllNotificationsAsRead()
    {
        // Update all notification entries in Library
        selectedProfile.prof_notifications.forEach((item) => 
        {
            item.notify_readStatus = "read";
        });

        // Update all notification entries in DOM
        document.querySelectorAll(".notification_card_bdr").forEach((card) => 
        {
            card.setAttribute("data-read-status", "read");
        });
    
        // Close the modal
        // closeNotificationModal();

        // Notify user
        notification(`notifyGood` , `All notifications marked as read`);
    }

    // Attaches listener for marking all notifications as read
    function attackMarkAllNtfyAsReadListeners()
    {
        let markNtfyAsReadBtn = document.querySelectorAll(".markAllNotificationsAsRead");
        
        markNtfyAsReadBtn.forEach((oldBtn) => 
        {
            if(oldBtn.read_atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.read_atn);
            }
        });

        markNtfyAsReadBtn.forEach((clrBtn) => 
        {
            clrBtn.addEventListener("click" , markAllNotificationsAsRead);
            clrBtn.read_atn = markAllNotificationsAsRead;
        });
    }

    // Clear all Notificatiions
    function clearAllNotifications()
    {
        // Remove all notification entries
        selectedProfile.prof_notifications.length = 0;
    
        // Close the modal
        closeNotificationModal();

        // Notify user
        notification(`notifyGood` , `Notifications cleared successfully`);
    }

    // Attaches listener for clearing all notifications
    function attackClearAllNtfyListeners()
    {
        let clrAllNtfyBtn = document.querySelectorAll(".clearAllNotifications");
        
        clrAllNtfyBtn.forEach((oldBtn) => 
        {
            if(oldBtn.clear_atn)
            {
                oldBtn.removeEventListener("click" , oldBtn.clear_atn);
            }
        });

        clrAllNtfyBtn.forEach((clrBtn) => 
        {
            const clr_atn = () => 
            {

                // Confirm before deleting
                initConfirmModal(
                    `Are you sure you want to clear all notifications?`,
                    null,
                    `Clear`,
                    `Cancel`,
                    clearAllNotifications
                );
            }
            clrBtn.addEventListener("click" , clr_atn);
            clrBtn.clear_atn = clr_atn;
        });
    }

    // Closes the notification modal
    function closeNotificationModal()
    {
        ntfyBase.classList.remove("active");

        ntfyTimer = setTimeout(() => 
        {
            clearTimeout(ntfyTimer);
            ntfyBase.remove();
            documentBody.classList.remove("bodystop");
        },300);
    }

    // Attaches listener for closing the notification modal
    function attachCloseNtfyModalListeners()
    {
        let ntfyCloseBtn = document.querySelectorAll(".ntfy_close");

        ntfyCloseBtn.forEach((oldBtn) => 
        {
            if(oldBtn.ntfy_cls)
            {
                oldBtn.removeEventListener("click" , oldBtn.ntfy_cls);
            }
        });

        ntfyCloseBtn.forEach((oldBtn) => 
        {
            oldBtn.addEventListener("click" , closeNotificationModal);
            oldBtn.ntfy_cls = closeNotificationModal;
        });
    }

