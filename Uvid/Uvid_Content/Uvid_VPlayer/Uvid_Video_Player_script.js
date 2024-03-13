/***************************************************************
 * This will hold the code of the Video Player for each show
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    
const videoPlayerBdr = document.querySelector(".vid-bdr");
    const container = videoPlayerBdr.querySelector(".container"),
    mainVideo = container.querySelector("video"),
    vidBcg = container.querySelector(".vid_bcg"),
    vidBcgCtrlBox = vidBcg.querySelector(".mini"),
    videoTimeline = container.querySelector(".video-timeline"),
    progressBar = container.querySelector(".progress-bar"),
    volumeBtn = container.querySelector(".volume i"),
    volumeSlider = container.querySelector(".left input");
    currentVidTime = container.querySelector(".current-time"),
    videoDuration = container.querySelector(".video-duration"),
    skipBackward = container.querySelectorAll(".skip-backward i"),
    skipForward = container.querySelectorAll(".skip-forward i"),
    playPauseBtn = container.querySelectorAll(".play-pause i"),
    speedBtn = container.querySelector(".playback_speed"),
    speedOptions = container.querySelector(".speed-options"),
    speedOptLi =speedOptions.querySelectorAll("li");
    pipBtn = container.querySelector(".pic-in-pic"),
    maximixeBtn = container.querySelector(".maximize_player"),
    minimizeBtn = container.querySelector(".minimize_player"),
    fullScreenBtn = container.querySelector(".fullscreen i");
    moreOptBtns = container.querySelectorAll(".opt_btn");

    let timer;

    // Prevents right click
    mainVideo.addEventListener("mouseover" , () => {
        document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
    });
    mainVideo.addEventListener("mouseleave" , () => {
        document.oncontextmenu = document.body.oncontextmenu = function() {return true;}
    });

    // Hides video controls after 3s if no movement and returns it if video paused
    const hideControls = () => {
        if(mainVideo.paused) return;
        timer = setTimeout(() => {
            container.classList.add("show-controls");
        }, 3000);
    }
    hideControls();

    // Shows the video controls on mouse move
    container.addEventListener("mousemove", () => {
        if(window.innerWidth > 640)
        {
            container.classList.remove("show-controls");
            clearTimeout(timer);
            hideControls();  
        }
    });

    container.addEventListener("click" , () => {
        if(window.innerWidth <= 640)
        {
            container.classList.remove("show-controls");
            clearTimeout(timer);
            hideControls();
        }
    });

    // Formats the "00:00" based on video's length
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

    // Shows the timeline in numbers over the progress bar
    videoTimeline.addEventListener("mousemove", e => {
        let timelineWidth = videoTimeline.clientWidth;
        let offsetX = e.offsetX;
        let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
        const progressTime = videoTimeline.querySelector("span");
        offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
        progressTime.style.left = `${offsetX}px`;
        progressTime.innerText = formatTime(percent);
    });

    videoTimeline.addEventListener("click", e => {
        let timelineWidth = videoTimeline.clientWidth;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    });

    // Displays Video time line in "00:00" format
    mainVideo.addEventListener("timeupdate", e => {
        let {currentTime, duration} = e.target;
        let percent = (currentTime / duration) * 100;
        progressBar.style.width = `${percent}%`;
        currentVidTime.innerText = formatTime(currentTime);
    });

    mainVideo.addEventListener("loadeddata", () => {
        videoDuration.innerText = formatTime(mainVideo.duration);
        preload.style.display = "none";
    });

    // Allows dragging to change video timeline
    const draggableProgressBar = e => {
        let timelineWidth = videoTimeline.clientWidth;
        progressBar.style.width = `${e.offsetX}px`;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
        currentVidTime.innerText = formatTime(mainVideo.currentTime);
    }

    // Volume Range Button
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

    // Volume Slider
    volumeSlider.addEventListener("input", e => {
        mainVideo.volume = e.target.value;
        if(e.target.value == 0) {
            return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    });

    // For Changing speed of Video
    speedOptLi.forEach(option => {
        option.addEventListener("click", () => {
            mainVideo.playbackRate = option.dataset.speed;
            speedOptions.querySelector(".active").classList.remove("active");
            option.classList.add("active");
        });
    });

    // Maximize Video Player
    maximixeBtn.addEventListener("click" , () => {
        videoPlayerBdr.classList.remove("vid_Mini_Player");
    });

    // Minimize Video Player
    minimizeBtn.addEventListener("click" , () => {
        videoPlayerBdr.classList.add("vid_Mini_Player");
    });

    // Closes any open menu(s)
    document.addEventListener("click", () => {
        // Closes speed option box if not active
        if(!(speedOptions.matches(":hover")) 
            && (speedOptions.classList.contains("show"))
            && !(speedBtn.matches(":hover"))
        )
        {
            speedOptions.classList.remove("show");
        }

        // Closes more settings menu when anypart of the page except the menu is clicked
        if((!(opnMoreOptBtn.matches(":hover"))) 
            &&!(moreOptBox.matches(":hover")) 
            && (moreOptBox.classList.contains("active"))
            )
        {
            moreOptBox.classList.remove("active");
            speedOptions.classList.remove("show");
        }

        // Checks if any of the bellow values is removed and adds it back
        if(videoPlayerBdr.classList.contains("vid-bdr-atv") 
            && (!(document.body.classList.contains("bodystop")) || !(navvbarr.classList.contains('darkenNavBar')))
        )
        {
            navvbarr.classList.add('darkenNavBar');
            document.body.classList.add("bodystop");
        }
    });

    // To engage fullscreen
        // via fullscreen btn
        fullScreenBtn.addEventListener("click", () => {
            container.classList.toggle("fullscreen");
            if(document.fullscreenElement) {
                fullScreenBtn.classList.replace("fa-compress", "fa-expand");
                return document.exitFullscreen();
            }
            fullScreenBtn.classList.replace("fa-expand", "fa-compress");
            container.requestFullscreen();
        });

        // via double click on the video click
        mainVideo.addEventListener("dblclick" , () => {
            if(!(videoPlayerBdr.classList.contains("vid_Mini_Player")) && window.innerWidth > 640)
            {
                container.classList.toggle("fullscreen");
                if(document.fullscreenElement) {
                    fullScreenBtn.classList.replace("fa-compress", "fa-expand");
                    return document.exitFullscreen();
                }
                fullScreenBtn.classList.replace("fa-expand", "fa-compress");
                container.requestFullscreen();
            }
        });

    

    // Opens the menu for playback speed
    speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));

    // Initiates picture-in-picture
    pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());

    // Skips Backwards by "5" secs
    skipBackward.forEach(btn => {
        btn.addEventListener("click", () => mainVideo.currentTime -= 5);
    });

    // Skips Forwards by "5" secs
    skipForward.forEach(btn => {
        btn.addEventListener("click", () => mainVideo.currentTime += 5);
    });

    // Changes the the play-pause button based on the video's active state
    mainVideo.addEventListener("play", () => {
        playPauseBtn.forEach(btn => {btn.classList.replace("fa-play", "fa-pause")})
        if((window.innerWidth < 640) && !(vidBcgCtrlBox.matches(":hover")))
        {
            hideControls();
        }
    });
    mainVideo.addEventListener("pause", () => playPauseBtn.forEach(btn => {btn.classList.replace("fa-pause", "fa-play")}));

    // Clicking to play/pause
    mainVideo.addEventListener("click", () => {
        if(!(videoPlayerBdr.classList.contains("vid_Mini_Player")) && window.innerWidth > 640)
        {
            mainVideo.paused ? (mainVideo.play(), playPauseBtn.forEach(btn => {btn.classList.replace("fa-play", "fa-pause")})) : (mainVideo.pause(), playPauseBtn.forEach(btn => {btn.classList.replace("fa-pause", "fa-play")}));container.classList.remove("show-controls");
            clearTimeout(timer);
            hideControls();
        }
    });

    // Pauses the video and changes the title based on the video's active state
    playPauseBtn.forEach(btn => {
        btn.addEventListener("click", () => mainVideo.paused ? (mainVideo.play(), btn.title="pause") : (mainVideo.pause(), btn.title="play"));
    });

    // Controls the volume
    videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
    document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));




    // Prevents user from rightclicking on video (optional)



     // For Video Player file Referencing , and other button functionalities

     const currShowName = document.querySelector("#show_Header_Name");
     const videoPlayer = document.querySelector(".vid-bdr .main-video");
     const closeVideoPlayer = document.querySelector(".closeEp");
     const vidTitle = document.querySelector(".ep-bar .vid_title");
     const showSub = document.querySelectorAll(".show-sub");
     const vidBtnSub = container.querySelector('.opn_more_options');
         const favBtn = vidBtnSub.querySelector('.fav_video');
         const favBtnIcon = favBtn.querySelector('.fa-heart');
         const savToPListBtn = vidBtnSub.querySelector('.save_to_playlist');
         const dwldBtn = vidBtnSub.querySelector('.dwld_vid');
         const dwldBtnIcon = dwldBtn.querySelector('.fa-right-to-bracket');
         const playlists = vidBtnSub.querySelectorAll('.playlist');
         const PlayListBdr = vidBtnSub.querySelector('.PlayList-bdr');
         const closePlayLbdr = PlayListBdr.querySelector('.offPlayList');
         const playListPrem = PlayListBdr.querySelector('.list-Prem');
         const playListHome = PlayListBdr.querySelector('.PlayList-set');
         const opnPlayList = PlayListBdr.querySelector('.PlayList-box u');
         const checkBtns = document.querySelectorAll('.playlist .check');
         const dwldBdr = vidBtnSub.querySelector('.dwld-bdr');

         const opnMoreOptBtn = container.querySelector(".opn_more_options_btn");
         const moreOptBox = vidBtnSub.querySelector(".more_options");
         const dwldBoxNoPrem = dwldBdr.querySelector('.noPremDwld');
         const dwldBoxPrem = dwldBdr.querySelector('.PremDwld');
         const closeDwldBox = dwldBdr.querySelector('.offDwld');
         const dpPremBuy = dwldBdr.querySelector('.buy-Prem-btn');
         const iGotPrem = dwldBdr.querySelector('u');
         const dwldLink1 = dwldBoxPrem.getElementsByTagName('a')[0];
         const dwldLink2 = dwldBoxPrem.getElementsByTagName('a')[1];
         const dwldLink3 = dwldBoxPrem.getElementsByTagName('a')[2];
         const dwldVid = dwldBoxPrem.querySelectorAll('a');
         const dwldxbtn = dwldBdr.querySelector("u");

         // To open more options
        opnMoreOptBtn.addEventListener("click" , () => {
            moreOptBox.classList.toggle("active");
        });



    // Opens the video Player
    showSub.forEach(sub => {
        const currSeason = sub.querySelector(".setTitleBar h3");
        const showEpisodes = sub.querySelectorAll(".episodes");
        showEpisodes.forEach(episode => {
            const showTitle = episode.querySelector(".episodes span");
            const showSrc_Low = episode.querySelector(".size_low");
            const showSrc_Mid = episode.querySelector(".size_mid");
            const showSrc_High = episode.querySelector(".size_high"); 
   
   
            episode.addEventListener("click" , () => {

                // Preloader loads until video file has completely loaded
                preload.style.display = "flex";

                // Opens the Video Player
                videoPlayerBdr.classList.add("vid-bdr-atv");
                
                // Sets title
                vidTitle.textContent = showTitle.textContent;
   
                // Sets src of the video
                mainVideo.src = showSrc_Mid.getAttribute("src");
   
                // Attaching link to the file for download
               dwldLink1.href = showSrc_Low.getAttribute("src");
               dwldLink2.href = showSrc_Mid.getAttribute("src");
               dwldLink3.href = showSrc_High.getAttribute("src");
   
               //  Naming the file
               let fileName = vidTitle.innerHTML;

               dwldLink1.download = "Uvid - Anime - " + currShowName.textContent + " - " + currSeason.textContent + " - [" + dwldLink1.textContent + "] - " + fileName;
               dwldLink2.download = "Uvid - Anime - " + currShowName.textContent + " - " + currSeason.textContent + " - [" + dwldLink2.textContent + "] - " + fileName;
               dwldLink3.download = "Uvid - Anime - " + currShowName.textContent + " - " + currSeason.textContent + " - [" + dwldLink3.textContent + "] - "  + fileName;
               
               navvbarr.classList.add('darkenNavBar');
               document.body.classList.add('bodystop');
            });
        });
    });

     
        // Closes the video Player
        closeVideoPlayer.addEventListener("click" , () => {

            // Changes play/pause sign
            playPauseBtn.forEach(btn => {btn.classList.replace("fa-pause", "fa-play")});

            // Removes class for the video player
            videoPlayerBdr.classList.remove("vid-bdr-atv");
            progressBar.style.width = `0px`;
    
            // clears Video title bar
            vidTitle.textContent = "";
    
            // Removes Src attached to video player
            mainVideo.src = "";
            videoDuration.innerText = formatTime(0);
    
            // Removes src from dwld Box
            dwldLink1.href = "";
            dwldLink2.href = "";
            dwldLink3.href = "";

            // Closes miniplayer
            videoPlayerBdr.classList.remove("vid_Mini_Player");

            navvbarr.classList.remove('darkenNavBar');
            document.body.classList.remove('bodystop');
        });
        
        
    
       // Adding/Removing Favourites
           favBtn.addEventListener("click" , () => {
               if(favBtnIcon.classList.contains('favYes')){
                    btnNotify.textContent = "Removed from favourites";
                    notification();
                    favBtnIcon.classList.remove('favYes');
                    favBtn.title = "favourite";
               }
               else
               {
                    btnNotify.textContent = "Saved to favourites";
                    notification();
                    favBtnIcon.classList.add('favYes');
                    favBtn.title = "Remove from favourite";
               }
           });

           

        // This will allow user to save a file to playlist
            playlists.forEach(playlist => {
                const checkBtn = playlist.querySelector('.playlist .check');
                const playlistNAme = playlist.querySelector('.playlist .items');

                // alerts the user based on action performed and does Adding/Removing to Playlist
                checkBtn.addEventListener('click' , () => {
                    var pLname = playlistNAme.innerHTML || playlistNAme.innerText;
                    if(checkBtn.classList.contains('checkYes'))
                    {
                        checkBtn.classList.remove('checkYes');
                        btnNotify.textContent = "removed from " + pLname;
                        notification();
                    }
                    else
                    {
                        checkBtn.classList.add('checkYes');
                        btnNotify.textContent = "added to " + pLname;
                        notification();
                    }
                });
            });
    
       // Opens the Playlist modal and pauses video
           savToPListBtn.addEventListener("click" , () => {
            mainVideo.pause();
               PlayListBdr.classList.add('PlayList-bdr-atv'); 
               checkBtns.forEach(checkAtv => {
                   if(checkAtv.classList.contains('checkYes'))
                   {
                       checkAtv.classList.remove('checkYes');
                   }
               });
           });
    
           // Removes Get Prem req
           opnPlayList.addEventListener('click' , () => {
               playListPrem.classList.add('offDiv');
               playListHome.classList.remove('offDiv');
               
           });
    
       // closes the Playlist modal
           closePlayLbdr.addEventListener("click" , () => {
               playListHome.classList.add('offDiv');
               playListPrem.classList.remove('offDiv');
               PlayListBdr.classList.remove('PlayList-bdr-atv');
           });
    
    
       //opens the download modal
    
            dwldBtn.addEventListener("click" , () => {
                mainVideo.pause();
                
               // If user clicks the button the premium page opens
               dpPremBuy.onclick = () => {
                   openPageFrame("../../../Uvid_Premium.html");
               }
    
               // Activating the class
               dwldBdr.classList.add('dwld-bdr-atv');

               // to Access download of files (temporary for testing)

               iGotPrem.onclick = () => {
                   // Removes the previously created classes
                   dwldBoxPrem.classList.add("dwldVid");
                   dwldBoxPrem.classList.remove("offDiv");
                   dwldBoxNoPrem.classList.add("offDiv");
                   dwldBoxNoPrem.classList.remove("dwldVid");
               }
           });

           // Closing the popup
           closeDwldBox.onclick = () => {
            dwldBdr.classList.remove('dwld-bdr-atv');
        }
     
     



    










