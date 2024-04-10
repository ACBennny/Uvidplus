/*************************************************************
 * This is the script for the Episode pages of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/
    

// DEFINITIONS

    // Section 1
    const container = document.querySelector(".container");
    const mainVideo = container.querySelector("video");
    const pcControlTapBox = container.querySelector(".playPause_fullscreen_VidPc");
    const videoTimeline = container.querySelector(".video-timeline");
    const progressBar = container.querySelector(".progress-bar");
    const volumeBtn = container.querySelector(".volume i");
    const volumeSlider = container.querySelector(".left input");
    const currentVidTime = container.querySelector(".current-time");
    const videoDuration = container.querySelector(".video-duration");
    const skipBackward = container.querySelectorAll(".skip-backward i");
    const skipForward = container.querySelectorAll(".skip-forward i");
    const playPauseBtn = container.querySelectorAll(".play-pause i");
    const speedBtn = container.querySelector(".playback-speed span");
    const speedOptions = container.querySelector(".speed-options");
    const pipBtn = container.querySelector(".pic-in-pic span");
    const fullScreenBtn = container.querySelector(".fullscreen i");
    let timer;
    const autoNextEpCheckBox = document.querySelector("#showlist_AutoNextToggleCheckbox");
    const nextEpLink = document.querySelector(".next_epLink");

    // Section 2
    const nextEpCtntCardBdr = document.querySelectorAll(".next_epCardBdr");
    const openMoreEpOverlay = document.querySelectorAll(".open_MoreEpOverlay");
    const closeMoreEpOverlay = document.querySelectorAll(".close_MoreEpOverlay");
    const moreEpBase = document.querySelector(".showlist_MoreEpBase");
    const moreEpHeaderBox = document.querySelector(".showlist_MoreEpHeaderBox");
    const moreEpHeaderText = document.querySelector(".showlist_MoreEpHeaderText");
    const moreEpSeasonSelectorBdr = document.querySelector(".showlist_MoreEpSelectorBdr");
    const moreEpSeasonSelector = document.querySelectorAll(".showlist_MoreEpSelector");
    const moreEpSelectorBdr = document.querySelector(".showlist_MoreEpSelectorBdr");
    const moreEpSelectors = document.querySelectorAll(".showlist_MoreEpHeaderBdr");
    const moreEpCtntBdr = document.querySelectorAll(".showlist_MoreEpCtntBdr");
    const moreEpCtntCardBdr = document.querySelectorAll(".showlist_epCardBdr");


// VIDEO PLAYER

    document.addEventListener("keydown", e => {
        const tagName = document.activeElement.tagName.toLowerCase()
    
        if (tagName === "input") return;
    
        switch (e.key.toLowerCase()) {
        case " ":
            e.preventDefault();
            toggleVidPlay();
            break;
        case "k":
            toggleVidPlay();
            break;
        case "f":
            toggleFullScreenMode();
            break;
        case "m":
            toggleMute();
            break;
        case "arrowleft":
        case "j":
            videoSkip(-5);
            break;
        case "arrowright":
        case "l":
            videoSkip(+5);
            break;
        case "c":
            toggleCaptions();
            break;
        }
    });

    // Functions
    
    function toggleVidPlay()
    {
        mainVideo.paused ? mainVideo.play() : mainVideo.pause();
    }

    function toggleFullScreenMode()
    {
        container.classList.toggle("fullscreen");
        if(document.fullscreenElement) {
            fullScreenBtn.classList.replace("fa-compress", "fa-expand");
            return document.exitFullscreen();
        }
        fullScreenBtn.classList.replace("fa-expand", "fa-compress");
        container.requestFullscreen();
    }

    function videoSkip(skipLength)
    {
        mainVideo.currentTime = skipLength;
    }

    function vidHasEnded()
    {
        container.classList.add("show-controls");

        // Go to Next episode when video ends, if auto next is on
        if(autoNextEpCheckBox.checked == true)
        {
            window.open(nextEpLink.href , "_self");
        }
    }

    const hideControls = () => {
        if(mainVideo.paused) return;
        timer = setTimeout(() => {
            container.classList.remove("show-controls");
        }, 1000);
    }
    hideControls();

    // Toggle hide/unhide media controls
    container.addEventListener("mousemove", () => {
        container.classList.add("show-controls");
        clearTimeout(timer);
        hideControls();
    });

    // Show controls when Video ends (and move to next video)
    mainVideo.addEventListener("ended" , () => 
    {
        vidHasEnded();
    });

    // calculating standard time
    const formatTime = time => {
        let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600);

        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;

        if(hours == 0) {
            return `${minutes}:${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`;
    }

    // Updating the video time length covered
    videoTimeline.addEventListener("mousemove", e => {
        let timelineWidth = videoTimeline.clientWidth;
        let offsetX = e.offsetX;
        let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
        const progressTime = videoTimeline.querySelector("span");
        offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
        progressTime.style.left = `${offsetX}px`;
        progressTime.innerText = formatTime(percent);
    });

    // Video progress bar
    videoTimeline.addEventListener("click", e => {
        let timelineWidth = videoTimeline.clientWidth;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    });

    mainVideo.addEventListener("timeupdate", e => {
        let {currentTime, duration} = e.target;
        let percent = (currentTime / duration) * 100;
        progressBar.style.width = `${percent}%`;
        currentVidTime.innerText = formatTime(currentTime);
    });

    // Video timeline "00:00"
    mainVideo.addEventListener("loadeddata", () => {
        videoDuration.innerText = formatTime(mainVideo.duration);
    });

    const draggableProgressBar = e => {
        let timelineWidth = videoTimeline.clientWidth;
        progressBar.style.width = `${e.offsetX}px`;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
        currentVidTime.innerText = formatTime(mainVideo.currentTime);
    }

    // Mute / Unmute video
    volumeBtn.addEventListener("click", () => {
        if(!volumeBtn.classList.contains("fa-volume-high")) {
            mainVideo.volume = 0.5;
            volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        } else {
            mainVideo.volume = 0.0;
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        volumeSlider.value = mainVideo.volume;
    });

    // volume Slider
    volumeSlider.addEventListener("input", e => {
        mainVideo.volume = e.target.value;
        if(e.target.value == 0) {
            return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    });

    // Speed options menu
    speedOptions.querySelectorAll("li").forEach(option => {
        option.addEventListener("click", () => {
            mainVideo.playbackRate = option.dataset.speed;
            speedOptions.querySelector(".active").classList.remove("active");
            option.classList.add("active");
        });
    });

    // Closing speed Option's menu
    document.addEventListener("click", e => {
        if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
            speedOptions.classList.remove("show");
        }
    });

    // Fullscreen
    fullScreenBtn.addEventListener("click", () => 
    {
        toggleFullScreenMode();
    });

    document.addEventListener("fullscreenchange", () => {
        if(!document.fullscreenElement)
        {
            fullScreenBtn.classList.replace("fa-compress", "fa-expand");
            container.classList.remove("fullscreen");
        }
    });

    // fullscreen (dblclick) For Pc/ wide screen users only
    pcControlTapBox.addEventListener("dblclick", () => 
    {
        container.classList.toggle("fullscreen");
        if(document.fullscreenElement) {
            fullScreenBtn.classList.replace("fa-compress", "fa-expand");
            return document.exitFullscreen();
        }
        fullScreenBtn.classList.replace("fa-expand", "fa-compress");
        container.requestFullscreen();
    });

    // Rewinding video
    skipBackward.forEach(btn => 
    {
        btn.addEventListener("click", () => 
        {
            videoSkip(-5);
        });
    });

    // Fast forwarding video
    skipForward.forEach(btn => 
    {
        btn.addEventListener("click", () => 
        {
            videoSkip(5);
        });
    });

    // Pause/Play video
    function toggleVidPlay()
    {
        mainVideo.paused ? mainVideo.play() : mainVideo.pause();
    }

    playPauseBtn.forEach(btn => 
    {
        btn.addEventListener("click", () => 
        {
            toggleVidPlay();
        });
    });

    // Playing Video
    mainVideo.addEventListener("play", () => 
    {
        playPauseBtn.forEach(btn => 
        {
            btn.classList.replace("fa-play", "fa-pause");
        });
        container.classList.add("show-controls");
        clearTimeout(timer);
        hideControls();
    });

    // Paused Video
    mainVideo.addEventListener("pause", () => 
    {
        playPauseBtn.forEach(btn => 
        {
            btn.classList.replace("fa-pause", "fa-play");
        });
        container.classList.add("show-controls");
        clearTimeout(timer);
        hideControls();
    });

    // Pause/play (click) For Pc/ wide screen users only 
    pcControlTapBox.addEventListener("click" , () => 
    {
        toggleVidPlay();
    });

    // Playback speed
    speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));

    // Picture - in - Picture (PIP)
    pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());

    // Video time line progress
    videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
    document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));




// NEXT AND PREVIOUS EPISODE DETAILS


    // Setting episode card atrributes
    nextEpCtntCardBdr.forEach(cardBdr => 
    {
        const cardlink = cardBdr.querySelector(".next_epCardBox");
        const cardImage = cardBdr.querySelector(".next_epImg");
        const cardEpTitle = cardBdr.querySelector(".next_epDetTitle");
        const cardShowName = cardBdr.querySelector(".next_epDetShow");

        cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
        cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
    });

// MORE EPSIODES OVERLAY

    // open the Overlay modal
    openMoreEpOverlay.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            moreEpBase.classList.add("active");
            documentBody.classList.add("bodystop");
        });
    });

    // Close the Overlay modal
    closeMoreEpOverlay.forEach(btn => 
    {
        btn.addEventListener("click" , () => 
        {
            moreEpBase.classList.remove("active");
            documentBody.classList.remove("bodystop");
        });
    });

    // Open season selctor
    moreEpHeaderBox.addEventListener("click" , () => 
    {
        moreEpSeasonSelectorBdr.classList.toggle("active");
    });

    // Close season selector
    document.addEventListener("click" , () => 
    {
        if((moreEpHeaderBox.matches(":hover")))
        {
            return;
        }
        moreEpSeasonSelectorBdr.classList.remove("active");
    });

    // Select season
    moreEpSeasonSelector.forEach((selector, s) => 
    {
        selector.addEventListener("click" , () => 
        {
            moreEpHeaderText.textContent = selector.textContent;
            moreEpCtntBdr.forEach(ctnt => 
            { 
                ctnt.classList.remove("active");
                ctnt.classList.add("inactive");
            });
            moreEpSeasonSelector.forEach(one => 
            { 
                one.classList.remove("active");
            });
            moreEpCtntBdr[s].classList.remove("inactive");
            moreEpCtntBdr[s].classList.add("active");
            selector.classList.add("active");

            moreEpSeasonSelectorBdr.classList.remove("active");
        });
    });

    // Setting episode card atrributes
    moreEpCtntCardBdr.forEach(cardBdr => 
    {
        const cardlink = cardBdr.querySelector(".showlist_epCardBox");
        const cardImage = cardBdr.querySelector(".showlist_epImg");
        const cardEpTitle = cardBdr.querySelector(".showlist_epDetTitle");
        const cardShowName = cardBdr.querySelector(".showlist_epDetShow");

        cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
        cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
    });




