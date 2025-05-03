/*************************************************************
 * This is the script for the status uppdate notifications
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/





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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="notifyIcon">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
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





