/*************************************************************
 * This is the script for the status update notifications
 * ************************************************************/





let notificationQueue = [];
let isNotificationActive = false;
let notificationDuration = 3;
let notificationTransition = 300;



    function showNextNotification()
    {
        if (notificationQueue.length === 0) 
        {
            isNotificationActive = false;
            return;
        }
    
        // Get the next notification from the queue
        const { notifyState, notifyCtnt, resolve } = notificationQueue.shift();

        const btnNotifyBdr = document.createElement('div');
        btnNotifyBdr.innerHTML = 
        `
            <div class="notifyBox">
                <p class="notifyText">${notifyCtnt}</p>
            </div>
            <div class="notifyIconBox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="notifyIcon">
                    <path d="M18.4765 4.46967C18.7694 4.17683 19.2442 4.1768 19.5371 4.46967C19.8299 4.76255 19.8299 5.23734 19.5371 5.53022L13.0634 12.0029L19.5302 18.4697C19.823 18.7626 19.8231 19.2374 19.5302 19.5302C19.2374 19.8231 18.7626 19.823 18.4697 19.5302L12.0029 13.0634L5.53705 19.5302C5.24417 19.823 4.76938 19.823 4.47651 19.5302C4.18363 19.2373 4.18367 18.7626 4.47651 18.4697L10.9423 12.0029L4.46967 5.53022C4.17678 5.23732 4.17678 4.76256 4.46967 4.46967C4.76256 4.17678 5.23732 4.17678 5.53022 4.46967L12.0029 10.9423L18.4765 4.46967Z" />
                </svg>
            </div>
        `;

        btnNotifyBdr.classList.add("notifyBdr");
        btnNotifyBdr.setAttribute(`style` , `--notifyTransitionStyle: ${notificationTransition}ms`);
        btnNotifyBdr.classList.add(`${notifyState}`);
        document.body.appendChild(btnNotifyBdr);
        
        // Ensures the element is added to the DOM before adding the class
        requestAnimationFrame(() => 
        {
            preNotifyTimer = setTimeout(() => 
            {
                btnNotifyBdr.classList.add('notifyAtv');
                clearTimeout(preNotifyTimer);
            }, notificationTransition);
        });

        isNotificationActive = true;
        let notifyIntervalDuration = notificationDuration;

        endNotifyTimer = setInterval(() => 
        {
            notifyIntervalDuration--;

            if(notifyIntervalDuration <= 0)
            {
                clearInterval(endNotifyTimer);
                btnNotifyBdr.classList.remove('notifyAtv');
                midNotifyTimer = setTimeout(() => 
                {
                    clearTimeout(midNotifyTimer);
                    document.body.removeChild(btnNotifyBdr);
                    resolve();
                    showNextNotification();
                }, notificationTransition);
            }
        }, 1000);

        const closeNotifyBdr = btnNotifyBdr.querySelector(".notifyIconBox");
        closeNotifyBdr.addEventListener("click" , () => 
        {
            notifyIntervalDuration = 1;
        });
    }

    function notification(notifyState, notifyCtnt) 
    {
        return new Promise((resolve) => 
        {
            notificationQueue.push({ notifyState, notifyCtnt, resolve });
            if (!isNotificationActive) 
            {
                // If no notification is active, show the next one immediately
                showNextNotification(); 
            }
        });
    }





