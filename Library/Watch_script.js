/*************************************************************
 * This is the script for the Episode pages of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/
    

// DEFINITIONS

    // Section 1
    const vidBdr = document.querySelector(".vid_bdr");
    let vidBdrBound;
    let vidBdrHeight;
    let vidBdrHeightThird;
    const container = document.querySelector(".container");
    const mainVideo = container.querySelector("video");
    const vidCtrlBdr = container.querySelector(".wrapper");
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

    function checkVidBdrBounds()
    {
        vidBdrBound = vidBdr.getBoundingClientRect();
        vidBdrHeight = vidBdrBound.height;
        vidBdrHeightThird = Math.round(vidBdrHeight/3);
        // console.log("scrollY = " + window.scrollY);
        // console.log("Scroll Height : " + vidBdrHeight);
        // console.log("Scroll Height-Third : " + vidBdrHeightThird);
    }
    
    window.addEventListener("scroll" , () => 
    {
        checkVidBdrBounds();
    });
    window.addEventListener("resize" , () => 
    {
        checkVidBdrBounds();
    });
    window.addEventListener("change" , () => 
    {
        checkVidBdrBounds();
    });

    document.addEventListener("keydown", e => 
    {
        const tagName = document.activeElement.tagName.toLowerCase();
        if(window.scrollY > vidBdrHeightThird) return;
        if (tagName === "input") return;
    
        switch (e.key.toLowerCase()) {
        case " ":
            e.preventDefault();
            toggleVidPlay();
            break;
        case "k":
        case "p":
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
            videoSkip(5);
            break;
        case "arrowup":
            e.preventDefault();
            adjustVolume(0.1);
            break;
        case "arrowdown":
            e.preventDefault();
            adjustVolume(-0.1);
            break;
        case "c":
            toggleCaptions();
            break;
        }
    });
    
    // Function to play video
    function toggleVidPlay()
    {
        mainVideo.paused ? mainVideo.play() : mainVideo.pause();
    }

    // Function to adjust volume
    function adjustVolume(val)
    {
        let newVolume = parseFloat(volumeSlider.value) + val;

        // Ensure volume is within [0, 1]
        newVolume = Math.max(0, Math.min(1, newVolume));
        volumeSlider.value = newVolume;
        mainVideo.volume = newVolume;
        updateVolumeIcon(newVolume);
    }

    // Update volume icon based on volume level
    function updateVolumeIcon(volume)
    {
        if (volume === 0)
        {
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        else
        {
            volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        }
    }

    // To toggle between mute
    function toggleMute()
    {
        if(!volumeBtn.classList.contains("fa-volume-high")) {
            mainVideo.volume = 0.5;
            volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        } else {
            mainVideo.volume = 0.0;
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        volumeSlider.value = mainVideo.volume;
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
        mainVideo.currentTime += skipLength;
    }

    function vidHasEnded()
    {
        container.classList.add("show-controls");
        mainVideo.play();
        if(document.fullscreenElement) {
            toggleFullScreenMode();
        }

        // Go to Next episode when video ends, if auto next is on
        if(autoNextEpCheckBox.checked == true)
        {
            // window.open(nextEpLink.href , "_self");
        }
    }

    const hideControls = () => 
    {
        if(mainVideo.paused) return;
        if(vidCtrlBdr.matches(":hover")) return;
        timer = setTimeout(() => {
            container.classList.remove("show-controls");
        }, 2000);
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

    // Set Video timeline "00:00"
    mainVideo.addEventListener("loadeddata", () => {
        videoDuration.innerText = formatTime(mainVideo.duration);
    });

    // Update video timeline
    const draggableProgressBar = e => {
        let timelineWidth = videoTimeline.clientWidth;
        progressBar.style.width = `${e.offsetX}px`;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
        currentVidTime.innerText = formatTime(mainVideo.currentTime);
    }

    // Mute / Unmute video
    volumeBtn.addEventListener("click", () => {
        toggleMute();
    });

    // volume Slider
    volumeSlider.addEventListener("input", e => {
        mainVideo.volume = e.target.value;
        updateVolumeIcon(e.target.value);
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

    // Video timeline progress
    videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
    document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));

    // Blob URL
    let mainVideoSources = mainVideo.querySelectorAll("source");
    for (let i = 0; i < mainVideoSources.length; i++)
    {
        let videoUrl = mainVideoSources[i].src;
        blobUrl(mainVideoSources[i], videoUrl);
    }

    function blobUrl(video, videoUrl)
    {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", videoUrl);
        xhr.responseType = "arraybuffer";
        xhr.onload = (e) => 
        {
            let blob = new Blob([xhr.response]);
            let url = URL.createObjectURL(blob);
            video.src = url;
        };
        xhr.send();
    }

    // Thumbnails
    var thumbnails = [];
    var thumbnailWidth = 158;
    var thumbnailHeight = 90;
    var horizontalItemCount = 5;
    var verticalItemCount = 5;

    let preview_video = document.createElement('video');
    preview_video.preload = "metadata";
    preview_video.width = "500";
    preview_video.height = "300"
    preview_video.controls = true;
    preview_video.src = mainVideo.querySelector("source").src;
    preview_video.addEventListener("loadeddata", async function () {
    preview_video.pause();

        var count = 1;
        var id = 1;
        var x = 0,
        y = 0;

        var array = [];
        var duration = parseInt(preview_video.duration);
        for (var i = 1; i <= duration; i++)
        {
            array.push(i);
        }

        var canvas;

        var i, j;

        for (i = 0, j = array.length; i < j; i += horizontalItemCount)
        {
            for (var startIndex of array.slice(i, i + horizontalItemCount))
            {
                var backgroundPositionX = x * thumbnailWidth;
                var backgroundPositionY = y * thumbnailHeight;
                var item = thumbnails.find((x) => x.id === id);

                if (!item)
                {
                    canvas = document.createElement("canvas");
                    canvas.width = thumbnailWidth * horizontalItemCount;
                    canvas.height = thumbnailHeight * verticalItemCount;
                    thumbnails.push(
                    {
                        id: id,
                        canvas: canvas,
                        sec: 
                        [
                            {
                                index: startIndex,
                                backgroundPositionX: -backgroundPositionX,
                                backgroundPositionY: -backgroundPositionY,
                            },
                        ],
                    });
                }
                else
                {
                    canvas = item.canvas;
                    item.sec.push(
                    {
                        index: startIndex,
                        backgroundPositionX: -backgroundPositionX,
                        backgroundPositionY: -backgroundPositionY,
                    });
                }

                var context = canvas.getContext("2d");
                preview_video.currentTime = startIndex;
                await new Promise(function (resolve) 
                {
                    var event = function () 
                    {
                        context.drawImage(
                            preview_video,
                            backgroundPositionX,
                            backgroundPositionY,
                            thumbnailWidth,
                            thumbnailHeight
                        );
                        x++;

                        // removing duplicate events
                        preview_video.removeEventListener("canplay", event);
                        resolve();
                    };
                    preview_video.addEventListener("canplay", event);
                });

                // 1 thumbnail is generated completely
                count++;
            }

            // reset x coordinate
            x = 0;

            // increase y coordinate
            y++;

            // checking for overflow
            if (count > horizontalItemCount * verticalItemCount)
            {
                count = 1;
                x = 0;
                y = 0;
                id++;
            }
        }

        // looping through thumbnail list to update thumbnail
        thumbnails.forEach(function (item)
        {
            // converting canvas to blob to get short url
            item.canvas.toBlob((blob) => (item.data = URL.createObjectURL(blob)), "image/jpeg");

            // deleting unused property
            delete item.canvas;
        });
    });





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




