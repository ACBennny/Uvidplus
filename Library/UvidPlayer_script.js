



        // let's select all required tags or elements
        const video_players = document.querySelectorAll(".video_player");
        video_players.forEach(video_player => 
        {
            const video_player_html = 
            `
                <div class="loader">
                    <div class="spinner"></div>
                </div>
                ${video_player.innerHTML}
                <div class="episode_title_bdr">
                    <div class="episode_title_box">
                        <div class="companyTitle">
                            <h1 class="head">U</h1>
                            <h1 class="tail">vid</h1>
                        </div>
                        <div class="episodeTitle">Episode 1</div>
                    </div>
                </div>
                <div class="cover-vid">
                    <div class="playPause_fullscreen_VidPc"></div>
                    <div class="mobile_controls_box">
                        <div class="options center mobile_controls">
                            <button class="skip-backward"><i class="fas fa-backward"></i></button>
                            <button class="play-pause"><i class="fas fa-play"></i></button>
                            <button class="skip-forward"><i class="fas fa-forward"></i></button>
                        </div>
                    </div>
                </div>
                <p class="caption_text"></p>
                <div class="thumbnail"></div>
                <div class="progressAreaTime" >0:00</div>
                <div class="wrapper">
                    <div class="progress-area">
                    <canvas class="bufferedBar"></canvas>
                        <div class="progress-bar">
                            <span></span>
                        </div>
                    </div>

                    <ul class="video-controls">
                        <li class="options left">
                            <button class="volume"><i class="fa-solid fa-volume-high"></i></button>
                            <input type="range" min="0" max="1" step="any" value="0.5">
                            <div class="video-timer">
                                <p class="current-time">00:00</p>
                                <p class="separator"> / </p>
                                <p class="video-duration">00:00</p>
                            </div>
                        </li>
                        <li class="options center pc_controls">
                            <button class="skip-backward"><i class="fas fa-backward"></i></button>
                            <button class="play-pause"><i class="fas fa-play"></i></button>
                            <button class="skip-forward"><i class="fas fa-forward"></i></button>
                        </li>
                        <li class="options right">
                            <div class="playback-content">
                                <button class="playback-speed"><span class="material-symbols-rounded">slow_motion_video</span></button>
                                <ul class="speed-options">
                                    <li data-speed="2">2x</li>
                                    <li data-speed="1.5">1.5x</li>
                                    <li data-speed="1" class="active">Normal</li>
                                    <li data-speed="0.75">0.75x</li>
                                    <li data-speed="0.5">0.5x</li>
                                </ul>
                            </div>
                            <button class="pic-in-pic"><span class="material-icons">picture_in_picture_alt</span></button>
                            <button class="settingsBtn"><i class="fa-solid fa-gear"></i></button>
                            <button class="captionsBtn"><i class="fa-solid fa-closed-captioning"></i></button>
                            <button class="fullscreenBtn"><i class="fa-solid fa-expand"></i></button>
                        </li>
                    </ul>
                </div>

                <div class="settings">
                  <div data-label="settingHome">
                    <ul>
                      <li data-label="speed">
                        <span> Speed </span>
                        <span class="material-symbols-outlined icon">
                          arrow_forward_ios
                        </span>
                      </li>
                      <li data-label="quality">
                        <span> Quality </span>
                       <span class="material-symbols-outlined icon">
                        arrow_forward_ios
                      </span>
                      </li>
                    </ul>
                  </div>
                  <div class="playback" data-label="speed" hidden>
                    <span>
                      <i class="fa-solid fa-caret-right" data-label="settingHome">
                      </i>
                      <span>Playback Speed </span>
                    </span>
                    <ul>
                      <li data-speed="0.25">0.25</li>
              
                      <li data-speed="0.5">0.5</li>
              
                      <li data-speed="0.75">0.75</li>
              
                      <li data-speed="1" class="active">Normal</li>
              
                      <li data-speed="1.25">1.25</li>
              
                      <li data-speed="1.5">1.5</li>
              
                      <li data-speed="1.75">1.75</li>
              
                      <li data-speed="2">2</li>
                    </ul>
                  </div>
                  <div data-label="quality">
                    <span>
                      <i class="fa-solid fa-caret-right" data-label="settingHome">
                      </i>
                      <span>Playback Quality </span>
                    </span>
                    <ul>
                      <li data-quality="auto" class="active">auto</li>
                    </ul>
                  </div>
                </div>
                <div class="captions">
                  <div class="caption">
                    <span>Select Subtitle</span>
                    <ul>
                      
                    </ul>
                  </div>
                </div>
            `;

            video_player.innerHTML = video_player_html;

            const vidBdr = document.querySelector(".vid_bdr");
            let vidBdrBound;
            let vidBdrHeight;
            let vidBdrHeightThird;
            const mainVideo = video_player.querySelector(".main-video");
            const progressAreaTime = video_player.querySelector(".progressAreaTime");
            const vidCtrlBdr = video_player.querySelector(".wrapper");
            const progressArea = video_player.querySelector(".progress-area");
            const bufferedBar = video_player.querySelector(".bufferedBar");
            const progress_Bar = video_player.querySelector(".progress-bar");
            const skipBackward = video_player.querySelectorAll(".skip-backward i");
            const skipForward = video_player.querySelectorAll(".skip-forward i");
            const playPauseBtn = video_player.querySelectorAll(".play-pause i");
            const volumeBtn = video_player.querySelector(".volume i");
            const volumeSlider = video_player.querySelector(".left input");
            const current = video_player.querySelector(".current-time");
            const totalDuration = video_player.querySelector(".video-duration");
            const picture_in_picutre = video_player.querySelector(".pic-in-pic span");
            const fullScreenBtn = video_player.querySelector(".fullscreenBtn i");
            const playback = video_player.querySelectorAll(".speed-options");
            const tracks = video_player.querySelectorAll("track");
            const loader = video_player.querySelector(".loader");
            const pcControlTapBox = video_player.querySelector(".playPause_fullscreen_VidPc");
            // const auto_play = video_player.querySelector(".auto-play");
            const autoNextEpCheckBox = video_player.querySelector("#showlist_AutoNextToggleCheckbox");
            const nextEpLink = video_player.querySelector(".next_epLink");
            const settingsBtn = video_player.querySelector(".settingsBtn");
            const captionsBtn = video_player.querySelector(".captionsBtn");
            const settings = video_player.querySelector(".settings");
            const settingHome = video_player.querySelectorAll(".settings [data-label='settingHome'] > ul > li");
            const captions = video_player.querySelector(".captions");
            const caption_labels = video_player.querySelector(".captions ul");
            let caption_text = video_player.querySelector(".caption_text");

            const thumbnail = video_player.querySelector(".thumbnail");
            var thumbnails = [];
            var thumbnailWidth = 250;
            var thumbnailSpacing = thumbnailWidth * 0.55;
            var thumbnailHeight = 150;
            var horizontalItemCount = 5;
            var verticalItemCount = 5;

            let ctrltimer;


            function checkVidBdrBounds()
            {
                vidBdrBound = vidBdr.getBoundingClientRect();
                vidBdrHeight = vidBdrBound.height;
                vidBdrHeightThird = Math.round(vidBdrHeight/3);
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
            
            // Speed options menu
            // speedOptions.querySelectorAll("li").forEach(option => {
            //     option.addEventListener("click", () => {
            //         mainVideo.playbackRate = option.dataset.speed;
            //         speedOptions.querySelector(".active").classList.remove("active");
            //         option.classList.add("active");
            //     });
            // });
        
            // // Closing speed Option's menu
            // document.addEventListener("click", e => {
            //     if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
            //         speedOptions.classList.remove("show");
            //     }
            // });

            // Hide controls
            const hideControls = () => 
            {
                if(mainVideo.paused) return;
                if(vidCtrlBdr.matches(":hover")) return;
                ctrltimer = setTimeout(() => {
                    video_player.classList.remove("show-controls");
                }, 2000);
            }
            // hideControls();

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
                if(!volumeBtn.classList.contains("fa-volume-high"))
                {
                    mainVideo.volume = 0.5;
                    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
                }
                else
                {
                    mainVideo.volume = 0.0;
                    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
                }
                volumeSlider.value = mainVideo.volume;
            }
        
            function videoSkip(skipLength)
            {
                mainVideo.currentTime += skipLength;
            }
        
            function vidHasEnded()
            {
                video_player.classList.add("show-controls");
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

            // Play video function
            function toggleVidPlay()
            {
                mainVideo.paused ? mainVideo.play() : mainVideo.pause();
            }

            // Fast-forward / Rewind video
            function videoSkip(skipLength)
            {
                mainVideo.currentTime += skipLength;
            }
        
            // Toggle fullscreen
            function toggleFullScreenMode()
            {
                video_player.classList.toggle("fullscreen");
                if(document.fullscreenElement) {
                    fullScreenBtn.classList.replace("fa-compress", "fa-expand");
                    return document.exitFullscreen();
                }
                fullScreenBtn.classList.replace("fa-expand", "fa-compress");
                video_player.requestFullscreen();
            }

            document.addEventListener("fullscreenchange", () => {
                if(!document.fullscreenElement)
                {
                    fullScreenBtn.classList.replace("fa-compress", "fa-expand");
                    video_player.classList.remove("fullscreen");
                }
            });
        
            // Keyboard key functions for pc only
            document.addEventListener("keydown", e => 
            {
                const tagName = document.activeElement.tagName.toLowerCase();
                if(window.innerWidth < 768) return;
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

            if (tracks.length != 0) 
            {
                caption_labels.insertAdjacentHTML(
                    "afterbegin",
                    `<li data-track="OFF" class="active">OFF</li>`
                );
                for (let i = 0; i < tracks.length; i++) 
                {
                    let trackLi = `<li data-track="${tracks[i].label}">${tracks[i].label}</li>`;
                    caption_labels.insertAdjacentHTML("beforeend", trackLi);
                }
            }
            const caption = captions.querySelectorAll("ul li");

            // Showing controls on mouse move
            video_player.addEventListener("mousemove", () => 
            {
                video_player.classList.add("show-controls");
                clearTimeout(ctrltimer);
                hideControls();
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
        
            playPauseBtn.forEach(btn => 
            {
                btn.addEventListener("click", () => 
                {
                    toggleVidPlay();
                });
            });

            // Pause/play (click) For Pc/ wide screen users only 
            pcControlTapBox.addEventListener("click" , () => 
            {
                toggleVidPlay();
            });
        
            // Playing Video
            mainVideo.addEventListener("play", () => 
            {
                playPauseBtn.forEach(btn => 
                {
                    btn.classList.replace("fa-play", "fa-pause");
                });
                video_player.classList.add("show-controls");
                clearTimeout(ctrltimer);
                hideControls();
            });
        
            // Paused Video
            mainVideo.addEventListener("pause", () => 
            {
                playPauseBtn.forEach(btn => 
                {
                    btn.classList.replace("fa-pause", "fa-play");
                });
                video_player.classList.add("show-controls");
                clearTimeout(ctrltimer);
                hideControls();
            });

            const formatTime = time => 
            {
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

            // Load video duration
            mainVideo.addEventListener("loadeddata", (e) => 
            {
                totalDuration.innerHTML = formatTime(mainVideo.duration);
            });

            // Current video duration
            mainVideo.addEventListener("timeupdate", (e) => 
            {
                let {currentTime, duration} = e.target;
                let percent = (currentTime / duration) * 100;
                progress_Bar.style.width = `${percent}%`;
                current.innerText = formatTime(currentTime);
            });

            // Updating playing video's current time according to the progress bar width
            progressArea.addEventListener("pointerdown", (e) => 
            {
                progressArea.setPointerCapture(e.pointerId);
                setTimelinePosition(e);
                progressArea.addEventListener("pointermove", setTimelinePosition);
                progressArea.addEventListener("pointerup", () => 
                {
                    progressArea.removeEventListener("pointermove", setTimelinePosition);
                });
            });


            function setTimelinePosition(e) 
            {
                let timelineWidth = progressArea.clientWidth;
                progress_Bar.style.width = `${e.offsetX}px`;
                mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
                current.innerText = formatTime(mainVideo.currentTime);

            }

            function drawProgress(canvas, buffered, duration) 
            {
                let context = canvas.getContext('2d', { antialias: false });
                context.fillStyle = "#ffffffa6";

                let height = canvas.height;
                let width = canvas.width;

                if (!height || !width) throw "Canva's width or height or not set.";
                context.clearRect(0, 0, width, height);

                for (let i = 0; i < buffered.length; i++)
                {
                    let leadingEdge = buffered.start(i) / duration * width;
                    let trailingEdge = buffered.end(i) / duration * width;
                    context.fillRect(leadingEdge, 0, trailingEdge - leadingEdge, height)
                }
            }

            mainVideo.addEventListener('progress', () => 
            {
                drawProgress(bufferedBar, mainVideo.buffered, mainVideo.duration);
            });

            mainVideo.addEventListener('waiting', () => 
            {
                loader.style.display = "flex";
            });

            mainVideo.addEventListener('canplay', () => 
            {
                loader.style.display = "none";
            });

            volumeSlider.addEventListener("input", e => 
            {
                mainVideo.volume = e.target.value;
                updateVolumeIcon(e.target.value);
            });

            volumeBtn.addEventListener("click", () => 
            {
                toggleMute();
            });

            // Update the progress area time and display it on mouse movement
            progressArea.addEventListener("mousemove", (e) => 
            {
                let timelineWidth = progressArea.clientWidth;
                let posX = e.offsetX;
                let percent = Math.floor((posX / timelineWidth) * mainVideo.duration);
                const progressTime = progressArea.querySelector("span");
                posX = posX < thumbnailSpacing ? thumbnailSpacing : (posX > (timelineWidth - thumbnailSpacing)) ? (timelineWidth - thumbnailSpacing) : posX;
                progressAreaTime.innerText = formatTime(percent);

                progressAreaTime.style.setProperty("--posX", `${posX}px`);
                progressAreaTime.style.display = "block";

                // Displaying thumbnail
                thumbnail.style.setProperty("--posX", `${posX}px`);
                thumbnail.style.display = "block";

                for (var item of thumbnails)
                {
                    var data = item.sec.find(x1 => x1.index === Math.floor(percent));

                    // thumbnail found
                    const defaultThumnail = "/Images/bcg/default.jpg";
                    if (data)
                    {
                        if (item.data != undefined)
                        {
                            thumbnail.setAttribute("style", `background-image: url(${item.data});background-position-x: ${data.backgroundPositionX}px;background-position-y: ${data.backgroundPositionY}px;--posX: ${posX}px;display: block;`);
                            return;
                        }
                        thumbnail.setAttribute("style", `background-image: url(${defaultThumnail});background-position-x: ${data.backgroundPositionX}px;background-position-y: ${data.backgroundPositionY}px;--posX: ${posX}px;display: block;`);
                    }
                }

            });
            
            // Hiding thumbnail and progress area time when mouse is not hovering the progress area
            progressArea.addEventListener("mouseleave", () => 
            {
                thumbnail.style.display = "none";
                progressAreaTime.style.display = "none";
            });

            // Auto play
            // auto_play.addEventListener("click", () => 
            // {
            //     auto_play.classList.toggle("active");
            //     if (auto_play.classList.contains("active")) 
            //     {
            //         auto_play.title = "Autoplay is on";
            //     }
            //     else
            //     {
            //         auto_play.title = "Autoplay is off";
            //     }
            // });

            // Picture in picture
            picture_in_picutre.addEventListener("click", () => 
            {
                mainVideo.requestPictureInPicture();
            });

            // Full screen function

            fullScreenBtn.addEventListener("click", () => 
            {
                toggleFullScreenMode();
            });

            // Open settings
            settingsBtn.addEventListener("click", () => 
            {
                settings.classList.toggle("active");
                settingsBtn.classList.toggle("active");

                if (captionsBtn.classList.contains("active") 
                    || captions.classList.contains("active")
                )
                {
                    captions.classList.remove("active");
                    captionsBtn.classList.remove("active");
                }
            });

            // Open caption
            captionsBtn.addEventListener("click", () => 
            {
                captions.classList.toggle("active");
                captionsBtn.classList.toggle("active");
                if (settingsBtn.classList.contains("active") 
                    ||  settings.classList.contains("active")
                )
                {
                    settings.classList.remove("active");
                    settingsBtn.classList.remove("active");
                }
            });

            // Playback Rate
            playback.forEach((event) => 
            {
                event.addEventListener("click", () => 
                {
                    removeActiveClasses(playback);
                    event.classList.add("active");
                    let speed = event.getAttribute("data-speed");
                    mainVideo.playbackRate = speed;
                });
            });

            caption.forEach((event) => 
            {
                event.addEventListener("click", () => 
                {
                    removeActiveClasses(caption);
                    event.classList.add("active");
                    changeCaption(event);
                    caption_text.innerHTML = "";
                });
            });

            let track = mainVideo.textTracks;

            function changeCaption(lable) 
            {
                let trackLable = lable.getAttribute("data-track");
                for (let i = 0; i < track.length; i++)
                {
                    track[i].mode = "disabled";
                    if (track[i].label == trackLable)
                    {
                        track[i].mode = "showing";
                    }
                }
            }

            const settingDivs = video_player.querySelectorAll('.settings > div');
            const settingBack = video_player.querySelectorAll('.settings > div .back_arrow');
            const quality_ul = video_player.querySelector(".settings > [data-label='quality'] ul");
            const qualities = video_player.querySelectorAll("source[size]");

            qualities.forEach(event =>
            {
                let quality_html = `<li data-quality="${event.getAttribute('size')}">${event.getAttribute('size')}p</li>`;
                quality_ul.insertAdjacentHTML('afterbegin', quality_html);
            });

            const quality_li = video_player.querySelectorAll(".settings > [data-label='quality'] ul > li");
            quality_li.forEach((event) => 
            {
                event.addEventListener('click', (e) => 
                {
                    let quality = event.getAttribute('data-quality');
                    removeActiveClasses(quality_li);
                    event.classList.add('active');

                    qualities.forEach(event => 
                    {
                        if (event.getAttribute('size') == quality)
                        {
                            let video_current_duration = mainVideo.currentTime;
                            let video_source = event.getAttribute('src');
                            mainVideo.src = video_source;
                            mainVideo.currentTime = video_current_duration;
                            toggleVidPlay();
                        }
                    });
                });
            });

            settingBack.forEach((event) => 
            {
                event.addEventListener('click', (e) => 
                {
                    let setting_label = e.target.getAttribute('data-label');
                    for (let i = 0; i < settingDivs.length; i++)
                    {
                        if (settingDivs[i].getAttribute('data-label') == setting_label)
                        {
                            settingDivs[i].removeAttribute('hidden');
                        }
                        else
                        {
                            settingDivs[i].setAttribute('hidden', "");
                        }
                    }
                });
            });

            settingHome.forEach((event) => 
            {
                event.addEventListener('click', (e) => 
                {
                    let setting_label = e.target.getAttribute('data-label');
                    for (let i = 0; i < settingDivs.length; i++) {
                        if (settingDivs[i].getAttribute('data-label') == setting_label)
                        {
                            settingDivs[i].removeAttribute('hidden');
                        }
                        else
                        {
                            settingDivs[i].setAttribute('hidden', "");
                        }
                    }
                });
            });


            function removeActiveClasses(e)
            {
                e.forEach((event) => 
                {
                    event.classList.remove("active");
                });
            }

            for (let i = 0; i < track.length; i++)
            {
                track[i].addEventListener("cuechange", () =>
                {
                    if (track[i].mode === "showing")
                    {
                        if (track[i].activeCues[0])
                        {
                            let span = `<span><mark>${track[i].activeCues[0].text}</mark></span>`;
                            caption_text.innerHTML = span;
                        }
                        else
                        {
                            caption_text.innerHTML = "";
                        }
                    }
                });
            }

            //  blob url
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

            mainVideo.addEventListener("contextmenu", (e) => 
            {
                e.preventDefault();
            });

            video_player.addEventListener("mousemove", () => 
            {
                video_player.classList.add("active");
                if (tracks.length != 0) {
                caption_text.classList.remove("active");
                }
                clearTimeout(ctrltimer);
                hideControls();
            });

            if (tracks.length == 0)
            {
                caption_labels.remove();
                captions.remove();
                captionsBtn.parentNode.remove();
            }


            // Creating thumbnails
            let preview_video = document.createElement('video');
            preview_video.preload = "metadata";
            preview_video.width = "500";
            preview_video.height = "300"
            preview_video.controls = true;
            preview_video.src = mainVideo.querySelector("source").src;
            preview_video.addEventListener("loadeddata", async function ()
            {
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
                                sec: [
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

        });