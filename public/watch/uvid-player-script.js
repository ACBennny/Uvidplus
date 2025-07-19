/*************************************************************
 * This is the script for the Video Player of Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



    const video_player_html = 
    `
        <div class="loader">
            <div class="spinner"></div>
        </div>
        <div class="episode_title_bdr">
            <div class="episode_title_box">
                <div class="companyTitle">
                    <h1 class="head">U</h1>
                    <h1 class="tail">vid+</h1>
                </div>
                <div class="episodeTitle">Test Video</div>
            </div>
        </div>
        <video poster="/images/uvid-bcg0.jpg" preload="metadata" class="main-video"></video>
        <div class="cover-vid">
            <div class="playPause_fullscreen_VidPc"></div>
            <div class="mobile_controls_box">
                <div class="options center mobile_controls">
                    <button class="skip-backward" title="rewind 5s" aria-label="rewind 5s">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="skipBackwardIcon">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z" />
                                <path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794" />
                            </g>
                        </svg>
                    </button>
                    <button class="play-pause" title="play" aria-label="play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="playIcon">
                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pauseIcon hide">
                            <path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" />
                        </svg>
                    </button>
                    <button class="skip-forward" title="fast-forward 5s" aria-label="fast-forward 5s">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="skipForwardIcon">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z" />
                                <path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <p class="captionText"></p>
        <div class="thumbnailBox">
            <div class="thumbnailFence">
                <div class="thumbnailHouse">
                    <div class="progressAreaTime" >0:00</div>
                    <div class="thumbnail">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="progress-area">
                <canvas class="bufferedBar"></canvas>
                <div class="progress-bar">
                    <span></span>
                </div>
            </div>

            <ul class="video-controls">
                <li class="options left">
                    <button class="volume" title="mute" aria-label="mute">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="volume_highIcon">
                            <path d="M2.003 11.716c.037-1.843.056-2.764.668-3.552a3 3 0 0 1 .413-.431c.752-.636 1.746-.636 3.733-.636c.71 0 1.065 0 1.403-.092q.105-.03.209-.067c.33-.121.627-.33 1.22-.746c2.338-1.645 3.508-2.467 4.489-2.11c.188.069.37.168.533.29c.848.635.913 2.115 1.042 5.073c.048 1.096.08 2.034.08 2.555s-.032 1.46-.08 2.555c-.13 2.958-.194 4.438-1.042 5.073a2.1 2.1 0 0 1-.533.29c-.982.357-2.15-.465-4.49-2.11c-.592-.416-.889-.625-1.22-.746a3 3 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092c-1.987 0-2.98 0-3.733-.636a3 3 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.552a14 14 0 0 1 0-.57" />
                            <path fill-rule="evenodd" d="M19.49 5.552a.66.66 0 0 1 .97.094l-.529.471l.53-.47l.002.002l.003.004l.007.009l.079.112q.072.107.186.305c.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12s-.36 3.71-.736 4.75c-.187.52-.377.907-.526 1.172a5 5 0 0 1-.265.417l-.007.009l-.003.003l-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.971.094a.77.77 0 0 1-.09-1.035l.03-.041q.04-.06.125-.207a6 6 0 0 0 .422-.943c.314-.871.644-2.253.644-4.222s-.33-3.35-.644-4.222a6 6 0 0 0-.422-.942a3 3 0 0 0-.157-.253m-1.641 1.833c.333-.197.753-.07.938.286l-.603.357l.603-.357l.001.002l.002.003l.003.007l.01.018l.024.053q.028.063.07.17c.053.145.12.35.185.62c.13.54.252 1.337.252 2.425c0 1.089-.122 1.886-.252 2.426c-.065.27-.132.475-.186.619a3 3 0 0 1-.094.223l-.009.018l-.003.007l-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286c-.33-.196-.45-.638-.272-.991l.004-.01l.035-.085c.032-.086.08-.23.13-.438c.1-.416.208-1.09.208-2.06c0-.971-.108-1.645-.208-2.06a4 4 0 0 0-.165-.524l-.004-.01a.76.76 0 0 1 .272-.991" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="volume_lowIcon hide">
                            <path d="M3.003 11.716c.04-1.843.059-2.764.697-3.552c.117-.144.288-.315.432-.431c.785-.636 1.822-.636 3.897-.636c.741 0 1.112 0 1.465-.092q.11-.03.218-.067c.345-.121.654-.33 1.273-.746c2.442-1.645 3.662-2.467 4.687-2.11c.196.069.387.168.556.29c.886.635.953 2.115 1.088 5.073c.05 1.096.084 2.034.084 2.555s-.034 1.46-.084 2.555c-.134 2.958-.202 4.438-1.088 5.073c-.17.122-.36.221-.556.29c-1.025.357-2.245-.465-4.687-2.11c-.619-.416-.928-.625-1.273-.746a3 3 0 0 0-.218-.067c-.353-.092-.724-.092-1.465-.092c-2.075 0-3.112 0-3.897-.636a3 3 0 0 1-.432-.43c-.638-.79-.658-1.71-.697-3.552a13 13 0 0 1 0-.57" />
                            <path fill-rule="evenodd" d="M19.45 8.416a.71.71 0 0 1 .98.286l-.63.357l.63-.357v.002l.002.003l.004.007l.01.018a2 2 0 0 1 .098.224c.056.144.126.349.193.619c.136.54.263 1.337.263 2.425c0 1.089-.127 1.886-.263 2.426c-.067.27-.137.475-.193.619a3 3 0 0 1-.099.223l-.009.018l-.004.007l-.001.003v.002s-.002.001-.631-.356l.63.357a.71.71 0 0 1-.98.286a.744.744 0 0 1-.284-.991l.005-.01q.01-.021.035-.085a4 4 0 0 0 .137-.438c.104-.416.217-1.09.217-2.06c0-.971-.113-1.645-.217-2.06a4 4 0 0 0-.172-.524l-.005-.01a.744.744 0 0 1 .284-.991" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="volume_offIcon hide">
                            <path fill-rule="evenodd" d="M20.515 6.316a.75.75 0 0 1 .991.376c.468 1.035.994 2.768.994 5.308c0 2.192-.392 3.783-.8 4.844a7.7 7.7 0 0 1-.572 1.195a5 5 0 0 1-.289.425l-.007.01l-.003.003l-.002.002L20.25 18l.576.48a.75.75 0 0 1-1.156-.956l.003-.004l.031-.041a3 3 0 0 0 .137-.212c.12-.199.288-.516.459-.961c.342-.889.7-2.298.7-4.306c0-2.326-.48-3.849-.86-4.692a.75.75 0 0 1 .375-.992m-2.101 2.95a.75.75 0 0 1 .887.582c.11.53.199 1.24.199 2.152c0 1.11-.132 1.923-.273 2.474a5 5 0 0 1-.203.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .141-.447c.11-.424.227-1.111.227-2.101a9 9 0 0 0-.168-1.848a.75.75 0 0 1 .582-.886" clip-rule="evenodd" />
                            <path d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.449a11 11 0 0 0-.193-1.39c-.172-.788-.477-1.473-1.116-1.923a3 3 0 0 0-.769-.39c-.818-.28-1.631-.057-2.457.345c-.814.395-1.8 1.046-3.032 1.857l-.267.176c-.447.295-.602.394-.76.464q-.257.115-.535.16c-.171.03-.354.032-.89.032h-.162c-1.217 0-2.062-.001-2.814.347A3.96 3.96 0 0 0 1.548 8.22c-.392.729-.438 1.491-.504 2.575l-.008.13C1.014 11.294 1 11.658 1 12s.014.706.036 1.074l.008.13c.066 1.084.112 1.846.504 2.575a3.96 3.96 0 0 0 1.727 1.624c.61.283 1.283.336 2.166.345L2.72 20.47a.75.75 0 1 0 1.06 1.06zM16.5 12a.75.75 0 0 0-1.255-.554l-.071.074l-6 6.274A.778.778 0 0 0 9.34 19c1.039.68 1.899 1.225 2.631 1.549c.743.328 1.48.489 2.222.236a3 3 0 0 0 .769-.391c.706-.497 1.005-1.28 1.167-2.18c.159-.884.213-2.056.281-3.516l.003-.058a68 68 0 0 0 .088-2.64" />
                        </svg>
                    </button>
                    <input class="volume-range" type="range" min="0" max="1" step="0.1" value="0.5" title="volume" aria-label="volume">
                    <div class="video-timer">
                        <p class="current-time">00:00</p>
                        <p class="separator"> / </p>
                        <p class="video-duration">00:00</p>
                    </div>
                </li>
                <li class="options center pc_controls">
                    <button class="skip-backward" title="rewind 5s" aria-label="rewind 5s">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="skipBackwardIcon">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z" />
                                <path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794" />
                            </g>
                        </svg>
                    </button>
                    <button class="play-pause" title="play" aria-label="play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="playIcon">
                            <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pauseIcon hide">
                            <path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" />
                        </svg>
                    </button>
                    <button class="skip-forward" title="fast-forward 5s" aria-label="fast-forward 5s">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="skipForwardIcon">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z" />
                                <path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794" />
                            </g>
                        </svg>
                    </button>
                </li>
                <li class="options right">
                    <button class="pic-in-pic" title="pic-in-pic" aria-label="pic-in-pic">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="picInPicIcon">
                            <path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.829.828-1.868 1.238-3.167 1.448c-1.277.207-2.883.232-4.898.235a.75.75 0 1 1-.002-1.5c2.04-.003 3.523-.031 4.66-.216c1.117-.18 1.818-.5 2.346-1.028c.57-.57.897-1.34 1.069-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.177-5.386c-.171-1.279-.498-2.05-1.068-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.087.002-5.387.176c-1.278.172-2.049.5-2.618 1.069c-.529.528-.848 1.23-1.028 2.345c-.185 1.138-.213 2.621-.217 4.661A.75.75 0 0 1 1.25 11c.004-2.016.03-3.622.236-4.898c.21-1.3.62-2.338 1.448-3.167c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19" />
                            <path d="M16.5 12a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v1.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-3.72 3.72h1.94a.75.75 0 0 1 .75.75" />
                            <path fill-rule="evenodd" d="M5.948 13.25c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.345-.08-2.243-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button class="settingsBtn" title="settings" aria-label="settings">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="settingsIcon">
                            <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button class="fullscreenBtn" title="enter fullscreen" aria-label="enter fullscreen">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="expandIcon">
                            <path d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="compressIcon hide">
                            <path d="M20.857 9.75a.75.75 0 1 0 0-1.5h-4.046l5.72-5.72a.75.75 0 0 0-1.061-1.06l-5.72 5.72V3.142a.75.75 0 0 0-1.5 0V9c0 .414.336.75.75.75zm-17.714 4.5a.75.75 0 0 0 0 1.5h4.046l-5.72 5.72a.75.75 0 1 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
        <div class="settingsBase">
            <div class="settingsLayout">
                <div class="settingsHomeBdr">
                    <div class="settingsHomeBox">
                        <ul class="settingsHomeList">
                            <li class="settingSectionTitleBox settingHomeTitleBox">
                                <div class="settingSectionTitleIconBox">
                                    <span class="settingSectionTitleIcon closeSettingsBase"></span>
                                </div>
                                <h3 class="settingSectionTitleText">Settings</h3>
                            </li>
                            <li>
                                <div class="settingsHomeListItem listItemLanguage openSettingsOptBdr" title="Language is English" aria-label="Language is English">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089M12 6.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-4 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 8 8.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Audio</p>
                                    </div>
                                    <div class="itemRight">
                                        <p class="itemValue" id="curr_vidLang">English</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label for="vid_AutoMuteToggleCheckbox" class="settingsHomeListItem listItemAutoMute">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path fill-rule="evenodd" d="M20.515 6.316a.75.75 0 0 1 .991.376c.468 1.035.994 2.768.994 5.308c0 2.192-.392 3.783-.8 4.844a7.7 7.7 0 0 1-.572 1.195a5 5 0 0 1-.289.425l-.007.01l-.003.003l-.002.002L20.25 18l.576.48a.75.75 0 0 1-1.156-.956l.003-.004l.031-.041a3 3 0 0 0 .137-.212c.12-.199.288-.516.459-.961c.342-.889.7-2.298.7-4.306c0-2.326-.48-3.849-.86-4.692a.75.75 0 0 1 .375-.992m-2.101 2.95a.75.75 0 0 1 .887.582c.11.53.199 1.24.199 2.152c0 1.11-.132 1.923-.273 2.474a5 5 0 0 1-.203.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .141-.447c.11-.424.227-1.111.227-2.101a9 9 0 0 0-.168-1.848a.75.75 0 0 1 .582-.886" clip-rule="evenodd" />
                                                <path d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.449a11 11 0 0 0-.193-1.39c-.172-.788-.477-1.473-1.116-1.923a3 3 0 0 0-.769-.39c-.818-.28-1.631-.057-2.457.345c-.814.395-1.8 1.046-3.032 1.857l-.267.176c-.447.295-.602.394-.76.464q-.257.115-.535.16c-.171.03-.354.032-.89.032h-.162c-1.217 0-2.062-.001-2.814.347A3.96 3.96 0 0 0 1.548 8.22c-.392.729-.438 1.491-.504 2.575l-.008.13C1.014 11.294 1 11.658 1 12s.014.706.036 1.074l.008.13c.066 1.084.112 1.846.504 2.575a3.96 3.96 0 0 0 1.727 1.624c.61.283 1.283.336 2.166.345L2.72 20.47a.75.75 0 1 0 1.06 1.06zM16.5 12a.75.75 0 0 0-1.255-.554l-.071.074l-6 6.274A.778.778 0 0 0 9.34 19c1.039.68 1.899 1.225 2.631 1.549c.743.328 1.48.489 2.222.236a3 3 0 0 0 .769-.391c.706-.497 1.005-1.28 1.167-2.18c.159-.884.213-2.056.281-3.516l.003-.058a68 68 0 0 0 .088-2.64" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Auto Mute</p>
                                    </div>
                                    <div class="itemRight">
                                        <span class="itemValue">
                                            <div class="genCheckBoxBase">
                                                <input type="checkbox" id="vid_AutoMuteToggleCheckbox" class="genCheckBoxInput autoSettTglBtn" tabindex="-1" checked>
                                                <label for="vid_AutoMuteToggleCheckbox" class="genCheckBoxToggle">
                                                    <span class="genCheckBoxToggleCircle"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label for="vid_AutoNextToggleCheckbox" class="settingsHomeListItem listItemAutoNext">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path fill-rule="evenodd" d="M6.278 1.756c-1.143-.739-2.438-.622-3.417.048c-.967.66-1.611 1.841-1.611 3.229v13.934c0 1.388.644 2.568 1.61 3.23c.98.669 2.275.786 3.418.048l10.789-6.968c1.15-.742 1.683-2.043 1.683-3.277s-.533-2.535-1.683-3.277zM2.75 5.033c0-.921.423-1.625.958-1.991c.522-.358 1.162-.41 1.756-.026l10.789 6.967c.637.41.997 1.18.997 2.017c0 .836-.36 1.606-.997 2.017L5.464 20.985c-.594.383-1.234.33-1.756-.027c-.535-.365-.958-1.07-.958-1.99z" clip-rule="evenodd" />
                                                <path d="M22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Auto Next</p>
                                    </div>
                                    <div class="itemRight">
                                        <span class="itemValue">
                                            <div class="genCheckBoxBase">
                                                <input type="checkbox" id="vid_AutoNextToggleCheckbox" class="genCheckBoxInput autoSettTglBtn" tabindex="-1" checked>
                                                <label for="vid_AutoNextToggleCheckbox" class="genCheckBoxToggle">
                                                    <span class="genCheckBoxToggleCircle"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label for="vid_AutoPlayToggleCheckbox" class="settingsHomeListItem listItemAutoPlay">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                    <path d="M11.075 7.508c-1.329-.784-2.825.283-2.825 1.705v5.574c0 1.422 1.496 2.489 2.825 1.705l4.72-2.787c1.273-.752 1.273-2.658 0-3.41zM9.75 9.213c0-.198.096-.337.21-.408a.32.32 0 0 1 .352-.005l4.72 2.787a.47.47 0 0 1 .218.413a.47.47 0 0 1-.218.413l-4.72 2.787a.32.32 0 0 1-.353-.005a.47.47 0 0 1-.209-.408z" />
                                                    <path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Auto Play</p>
                                    </div>
                                    <div class="itemRight">
                                        <span class="itemValue">
                                            <div class="genCheckBoxBase">
                                                <input type="checkbox" id="vid_AutoPlayToggleCheckbox" class="genCheckBoxInput autoSettTglBtn" tabindex="-1" checked>
                                                <label for="vid_AutoPlayToggleCheckbox" class="genCheckBoxToggle">
                                                    <span class="genCheckBoxToggleCircle"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label for="vid_AutoSkipToggleCheckbox" class="settingsHomeListItem listItemAutoSkip">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path d="M2 17.574V6.426C2 4.58 3.6 3.411 4.903 4.308L11 8.768V7.123c0-1.616 1.467-2.638 2.661-1.853l7.417 4.877c1.229.807 1.229 2.899 0 3.706l-7.417 4.877c-1.194.785-2.661-.237-2.661-1.853v-1.645l-6.097 4.46C3.601 20.589 2 19.422 2 17.574" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Auto Skip</p>
                                    </div>
                                    <div class="itemRight">
                                        <span class="itemValue">
                                            <div class="genCheckBoxBase">
                                                <input type="checkbox" id="vid_AutoSkipToggleCheckbox" class="genCheckBoxInput autoSettTglBtn" tabindex="-1" checked>
                                                <label for="vid_AutoSkipToggleCheckbox" class="genCheckBoxToggle">
                                                    <span class="genCheckBoxToggleCircle"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <div class="settingsHomeListItem listItemPlaybackSpeed openSettingsOptBdr" title="Playback Speed is Normal" aria-label="Playback Speed is Normal">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75M4 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1.25-4a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Playback Speed</p>
                                    </div>
                                    <div class="itemRight">
                                        <p class="itemValue" id="curr_vidPlaybackSpeed">Normal</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="settingsHomeListItem listItemQuality openSettingsOptBdr" title="Video Quality is auto" aria-label="Video Quality is auto">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Quality</p>
                                    </div>
                                    <div class="itemRight">
                                        <p class="itemValue" id="curr_vidPlaybackQuality">Auto</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="settingsHomeListItem listItemSubtitleCC openSettingsOptBdr" title="Subtitles/CC is Off" aria-label="Subtitles/CC is Off">
                                    <div class="itemLeft">
                                        <span class="itemIconBox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="itemIcon">
                                                <path d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M18 12.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM11.75 16a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m-.25-3.75a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5zM15.75 16a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M7 12.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5z" />
                                                <path fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.945c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="itemCenter">
                                        <p class="itemName">Subtitles/CC</p>
                                    </div>
                                    <div class="itemRight">
                                        <p class="itemValue" id="curr_vidSubtitle">Off</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="settingsOptBdr">
                    <div class="settingsOptBox">
                        <div class="settingsTitleBox closeSettingsOptBdr">
                            <div class="settingSectionTitleBox">
                                <div class="settingSectionTitleIconBox">
                                    <span class="settingSectionTitleIcon"></span>
                                </div>
                                <p class="settingSectionTitleText">Audio</p>
                            </div>
                        </div>
                        <div class="settingsCtntBox">
                            <div class="settingsCtnt">
                                <ul class="settingsCtnt_UL language_UL">
                                    <li class="settingsCtnt_LI language_LI active">
                                        <p>English</p>
                                    </li>
                                    <li class="settingsCtnt_LI language_LI">
                                        <p>Japanese</p>
                                    </li>
                                    <li class="settingsCtnt_LI language_LI">
                                        <p>Spanish</p>
                                    </li>
                                    <li class="settingsCtnt_LI language_LI">
                                        <p>French</p>
                                    </li>
                                    <li class="settingsCtnt_LI language_LI">
                                        <p>Portugese</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="settingsOptBdr">
                    <div class="settingsOptBox">
                        <div class="settingsTitleBox closeSettingsOptBdr">
                            <div class="settingSectionTitleBox">
                                <div class="settingSectionTitleIconBox">
                                    <span class="settingSectionTitleIcon"></span>
                                </div>
                                <p class="settingSectionTitleText">Playback Speed</p>
                            </div>
                        </div>
                        <div class="settingsCtntBox">
                            <div class="settingsCtnt">
                                <ul class="settingsCtnt_UL playbackSpeed_UL">
                                    <li data-speed="0.25" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>0.25</p>
                                    </li>
                                    <li data-speed="0.5" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>0.5</p>
                                    </li>
                                    <li data-speed="0.75" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>0.75</p>
                                    </li>
                                    <li data-speed="1" class="settingsCtnt_LI normalPlaybackspeed_LI playbackSpeed_LI active">
                                        <p>Normal</p>
                                    </li>
                                    <li data-speed="1.25" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>1.25</p>
                                    </li>
                                    <li data-speed="1.5" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>1.5</p>
                                    </li>
                                    <li data-speed="1.75" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>1.75</p>
                                    </li>
                                    <li data-speed="2" class="settingsCtnt_LI playbackSpeed_LI">
                                        <p>2</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="settingsOptBdr">
                    <div class="settingsOptBox">
                        <div class="settingsTitleBox closeSettingsOptBdr">
                            <div class="settingSectionTitleBox">
                                <div class="settingSectionTitleIconBox">
                                    <span class="settingSectionTitleIcon"></span>
                                </div>
                                <p class="settingSectionTitleText">Quality</p>
                            </div>
                        </div>
                        <div class="settingsCtntBox">
                            <div class="settingsCtnt">
                                <ul class="settingsCtnt_UL quality_UL">
                                    <li class="settingsCtnt_LI quality_LI active" title="Auto">
                                        <p>Auto</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="settingsOptBdr">
                    <div class="settingsOptBox">
                        <div class="settingsTitleBox closeSettingsOptBdr">
                            <div class="settingSectionTitleBox">
                                <div class="settingSectionTitleIconBox">
                                    <span class="settingSectionTitleIcon"></span>
                                </div>
                                <p class="settingSectionTitleText">Subtitles/CC</p>
                            </div>
                        </div>
                        <div class="settingsCtntBox">
                            <div class="settingsCtnt">
                                <ul class="settingsCtnt_UL captions_UL"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const preloadedSources = [];
    const preloadedTracks = [];
    let vidBdr;
    let mainVideo;
    let video_player;
    let video_players; 
    let vidBdrBound;
    let vidBdrHeight;
    let vidBdrHeightThird;
    let progressAreaTime;
    let vidCtrlBdr;
    let progressArea;
    let bufferedBar;
    let progress_Bar;
    let skipBackward;
    let skipForward;
    let playPauseBtnBox;
    let playPauseBtn;
    let playBtn;
    let pauseBtn;
    let volumeBtnBox;
    let volumeBtn;
    let volumeHighBtn;
    let volumeLowBtn;
    let volumeOffBtn;
    let volumeSlider;
    let current;
    let totalDuration;
    let picture_in_picutre;
    let fullScreenBtnBox;
    let fullScreenBtn;
    let fullScreenExpandBtn;
    let fullScreenContractBtn;
    let tracks;
    let loader;
    let pcControlTapBox;
    let thumbnailBox;
    let thumbnail;
    let thumbnails = [];
    let thumbnailWidth = 250;
    let thumbnailSpacing = thumbnailWidth * 0.75;
    let thumbnailHeight = 150;
    let horizontalItemCount = 5;
    let verticalItemCount = 5;
    let settingsBtn;
    let settingsBase;
    let closeSettingsBase;
    let settingsHomeBdr;
    let settingsOptBdr;
    let openSettingsOptBdr;
    let closeSettingsOptBdr;
    let autoSettRadBtns;
    let autoMuteEpCheckBox;
    let autoNextEpCheckBox;
    let autoPlayEpCheckBox;
    let autoSkipEpCheckBox;
    let caption_labels;
    let caption_text;
    let languageUL;
    let languageLI;
    let playbackUL;
    let normalPlaybackLI;
    let playbackLI;
    let listItemLang;
    let listItemCaption;
    let listItemSpeed;
    let listItemQuality;
    let qualityUL;
    let qualities;
    let ctrltimer;



    


    // Keyboard key functions for pc only
    function kybrdShtCt(e)
    {
        if(!(isPageWatchPage())) return; 

        const tagName = document.activeElement.tagName.toLowerCase();
        if(mobWindow.matches) return;
        if(document.pictureInPictureElement) return;
        if(window.innerWidth < 884 || window.innerHeight < 485) return;
        if(window.scrollY > vidBdrHeightThird) return;
        if (tagName === "input") return;
    
        switch (e.key.toLowerCase())
        {
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
                
            case "s":
                video_player.classList.add("show-controls");
                settingsBtn.click();
                clearTimeout(ctrltimer);
                hideControls();
                break;
        }
    }

    
    // Preps the videos for play to simulate quick loading times
    function prepUVCtnt()
    {
        const vid_urls = ["/watch/3_360p.mp4", "/watch/3_720p.mp4", "/watch/3_1080p.mp4"];

        vid_urls.forEach((url, i) => 
        {
            setTimeout(() => 
            {
                fetch(url)
                .then(() => 
                {
                    console.log(`The Test Video URL [${i+1}]:${url} warmed in cache`);
                })
                .catch((err) => 
                {
                    console.error(`Failed to fetch the video URL:${url}`);
                    console.error(err);
                });
            }, (i * 5000));
        });

        // Add lisener for keyboard shortcuts on video player
        document.addEventListener("keydown",  kybrdShtCt);

        // Reset flag for load completed event
        window.__uvp_uvplr_ctnt_loaded = false;
    }
    
    // window.addEventListener("load", prepUVCtnt);




    // Checks the size of the video player
    function checkVidBdrBounds()
    {
        if(!(isPageWatchPage())) return;
        vidBdrBound = vidBdr.getBoundingClientRect();
        vidBdrHeight = vidBdrBound.height;
        vidBdrHeightThird = Math.round(vidBdrHeight/3);
    }



    // Hide controls
    function hideControls() 
    {
        if(!(isPageWatchPage())) return;
        if(mainVideo.paused) return;
        if((loader.style.display == "flex")) return;
        if(pcWindow.matches && vidCtrlBdr.matches(":hover")) return;
        if((pcWindow.matches) && (settingsBase.matches(":hover") || settingsBase.classList.contains("active"))) return;
        if (document.pictureInPictureElement === mainVideo) return;
        ctrltimer = setTimeout(() => 
        {
            video_player.classList.remove("show-controls");
        }, 2500);
    }

    // Remove "active" classes from an element
    function removeActiveClasses(e)
    {
        e.forEach((event) => 
        {
            event.classList.remove("active");
        });
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
        
        if(volume > 0.4)
        {
            volumeOffBtn.classList.add("hide");
            volumeLowBtn.classList.add("hide");
            volumeHighBtn.classList.remove("hide");
            volumeBtnBox.title = "mute";
            volumeBtnBox.ariaLabel = "mute";
        }
        else if(volume <= 0.4 && volume > 0)
        {
            volumeLowBtn.classList.remove("hide");
            volumeHighBtn.classList.add("hide");
            volumeOffBtn.classList.add("hide");
            volumeBtnBox.title = "mute";
            volumeBtnBox.ariaLabel = "mute";
        }
        else
        {
            volumeOffBtn.classList.remove("hide");
            volumeLowBtn.classList.add("hide");
            volumeHighBtn.classList.add("hide");
            volumeBtnBox.title = "unmute";
            volumeBtnBox.ariaLabel = "unmute";
        }
    }

    // Toggles between mute or auto mutes if "mute == true"
    function toggleMute(mute = null)
    { 
        if((mute == false) || !(volumeOffBtn.classList.contains("hide")))
        {
            mainVideo.volume = 0.5;
            volumeHighBtn.classList.remove("hide");
            volumeLowBtn.classList.add("hide");
            volumeOffBtn.classList.add("hide");
            volumeBtnBox.title = "mute";
            volumeBtnBox.ariaLabel = "mute";
        }
        else if((mute == true) || (volumeOffBtn.classList.contains("hide")))
        {
            mainVideo.volume = 0.0;
            volumeOffBtn.classList.remove("hide");
            volumeLowBtn.classList.add("hide");
            volumeHighBtn.classList.add("hide");
            volumeBtnBox.title = "unmute";
            volumeBtnBox.ariaLabel = "unmute";
        }
        else
        {
            mainVideo.volume = 0.5;
            volumeHighBtn.classList.remove("hide");
            volumeLowBtn.classList.add("hide");
            volumeOffBtn.classList.add("hide");
            volumeBtnBox.title = "mute";
            volumeBtnBox.ariaLabel = "mute";
        }
        volumeSlider.value = mainVideo.volume;
    }

    // Skip forward/backward
    function videoSkip(skipLength)
    {
        mainVideo.currentTime += skipLength;
    }
    
    // Restart video
    async function restartVid()
    {
        // Restart video
        mainVideo.pause();
        mainVideo.currentTime = 0;

        // Auto play if set on
        try
        {
            // Check for user's preferences
            let selProf = await getSelectedProfile();
            let isAutoMute = selProf?.prof_auto_mute;
            let isAutoPlay = selProf?.prof_auto_play;

            // Mute audio, if on
            if((isAutoMute) && (typeof isAutoMute === "boolean") && (isAutoMute == true))
            {
                toggleMute(true);
            }
            else
            {
                toggleMute(false);
            }

            // Autoplay video, if on
            if((isAutoPlay) && (typeof isAutoPlay === "boolean") && (isAutoPlay == true)) toggleVidPlay();
        }
        catch(error)
        {
            console.error(`Failed to fetch user preferences\n${err}`);
            notification(`notifyBad`, `Failed to fetch user preferences`);
        }
    }

    // Handles Auto Next
    function vidHasEnded()
    {
        video_player.classList.add("show-controls");
        clearTimeout(ctrltimer);

        // Exit fullscreen if on
        if(document.fullscreenElement) 
        {
            toggleFullScreenMode();
        }

        // Go to Next episode when video ends, if auto next is on
        if(autoNextEpCheckBox.checked == true)
        {
            document.querySelector(".watch_pg_next_ep_btn").click();
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
        if(!(isPageWatchPage())) return;

        video_player.classList.toggle("fullscreen");
        if(document.fullscreenElement)
        {
            fullScreenContractBtn.classList.add("hide");
            fullScreenExpandBtn.classList.remove("hide");
            fullScreenBtnBox.forEach(box => 
            {
                box.title = "enter fullscreen";
                box.ariaLabel = "enter fullscreen";
            });
            return document.exitFullscreen();
        }
        fullScreenExpandBtn.classList.add("hide");
        fullScreenContractBtn.classList.remove("hide");
        fullScreenBtnBox.forEach(box => 
        {
            box.title = "exit fullscreen";
            box.ariaLabel = "exit fullscreen";
        });
        video_player.requestFullscreen();
    }

    // Remove Picture - In - Picture Element if device is not pc
    function checkPIP()
    {
        if(pcWindow.matches && (window.innerWidth >= 884 && window.innerHeight >= 485))
        {
            mainVideo.disablePictureInPicture = false;
        }
        else
        {
            if (document.pictureInPictureElement === mainVideo)
            {
                document.exitPictureInPicture()
                .then(() => 
                {
                    mainVideo.disablePictureInPicture = true;
                })
                .catch(error => 
                {
                    console.error('Failed to exit Picture-in-Picture mode:', error);
                });
            }
            else
            {
                // If the video is not in PiP mode, only disable PiP
                mainVideo.disablePictureInPicture = true;
            }
        }

    }

    
    // Format time in "MM:SS"
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


    // Update the visible duration of the playing video
    function setTimelinePosition(e) 
    {
        let timelineWidth = progressArea.clientWidth;
        progress_Bar.style.width = `${e.offsetX}px`;
        mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
        current.innerText = formatTime(mainVideo.currentTime);
    }


    // Displays the progress of the video
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


    // Close Settings Menu
    function hideSettingsBase()
    {
        if((settingsBase.classList.contains("active")) && !(settingsBase.matches(":hover")) && !(settingsBtn.matches(":hover")))
        {
            closeSettingsOpt();
            settingsBase.classList.remove("active");
            clearTimeout(ctrltimer);
            hideControls();
        }
    }

    // Close Mini menu in the settings menu
    function closeSettingsOpt()
    {
        settingsOptBdr.forEach(bdr => 
        {
            bdr.classList.remove("active");
        });
        settingsHomeBdr.classList.remove("notActive");
    }



    // Checks if user is in the watch page
    function isPageWatchPage()
    {
        let pg = window.location.hash.toLowerCase().split("/")[1];

        if(pg === "watch")
        {
            return true;
        }
        else
        {
            return false;
        }
    }




    // Inserts the sources and tracks for the video player
    function preUVPlyr()
    {
        video_player = document.querySelector(".video_player");
        video_player.innerHTML = video_player_html;
        mainVideo = video_player.querySelector(".main-video");

        const sources = 
        [
            { src: "/watch/3_360p.mp4", size: "360", type: "video/mp4" },
            { src: "/watch/3_720p.mp4", size: "720", type: "video/mp4" },
            { src: "/watch/3_1080p.mp4", size: "1080", type: "video/mp4" }
        ];
        const tracks = 
        [
            { label: "English", src: "/watch/subtitle-test1.vtt", srclang: "en" },
            { label: "Japanese", src: "/watch/subtitle-test2.vtt", srclang: "ja" }
        ];

        // Add sources
        sources.forEach(s => 
        {
            const source = document.createElement("source");
            source.src = s.src;
            source.setAttribute("size", s.size);
            source.type = s.type;
            mainVideo.appendChild(source);
        });

        // Add subtitle tracks
        tracks.forEach(t => 
        {
            const track = document.createElement("track");
            track.label = t.label;
            track.kind = "subtitles";
            track.src = t.src;
            track.srclang = t.srclang;
            mainVideo.appendChild(track);
        });
        
        // Initialize video player
        initUVPlyr();
    }


    // Initializes the video player
    function initUVPlyr()
    {
        vidBdr = document.querySelector(".vid_bdr");

        current = video_player.querySelector(".current-time");
        totalDuration = video_player.querySelector(".video-duration");

        progressAreaTime = video_player.querySelector(".progressAreaTime");
        vidCtrlBdr = video_player.querySelector(".wrapper");
        progressArea = video_player.querySelector(".progress-area");
        bufferedBar = video_player.querySelector(".bufferedBar");
        progress_Bar = video_player.querySelector(".progress-bar");
        skipBackward = video_player.querySelectorAll(".skip-backward .skipBackwardIcon");
        skipForward = video_player.querySelectorAll(".skip-forward .skipForwardIcon");
        playPauseBtnBox = video_player.querySelectorAll(".play-pause");
        playPauseBtn = video_player.querySelectorAll(".play-pause svg");
        playBtn = video_player.querySelectorAll(".play-pause .playIcon");
        pauseBtn = video_player.querySelectorAll(".play-pause .pauseIcon");
        volumeBtnBox = video_player.querySelector(".volume");
        volumeBtn = video_player.querySelectorAll(".volume svg");
        volumeHighBtn = video_player.querySelector(".volume .volume_highIcon");
        volumeLowBtn = video_player.querySelector(".volume .volume_lowIcon");
        volumeOffBtn = video_player.querySelector(".volume .volume_offIcon");
        volumeSlider = video_player.querySelector(".left input.volume-range");
        picture_in_picutre = video_player.querySelector(".pic-in-pic .picInPicIcon");
        fullScreenBtnBox = video_player.querySelectorAll(".fullscreenBtn");
        fullScreenBtn = video_player.querySelectorAll(".fullscreenBtn svg");
        fullScreenExpandBtn = video_player.querySelector(".fullscreenBtn .expandIcon");
        fullScreenContractBtn = video_player.querySelector(".fullscreenBtn .compressIcon");
        tracks = video_player.querySelectorAll("track");
        loader = video_player.querySelector(".loader");
        pcControlTapBox = video_player.querySelector(".playPause_fullscreen_VidPc");
        settingsBtn = video_player.querySelector(".settingsBtn");
        settingsBase = video_player.querySelector(".settingsBase");
        closeSettingsBase = video_player.querySelector(".closeSettingsBase");
        settingsHomeBdr = video_player.querySelector(".settingsHomeBdr");
        settingsOptBdr = video_player.querySelectorAll(".settingsOptBdr");
        openSettingsOptBdr = video_player.querySelectorAll(".openSettingsOptBdr");
        closeSettingsOptBdr = video_player.querySelectorAll(".closeSettingsOptBdr");
        autoSettRadBtns = video_player.querySelectorAll(".autoSettTglBtn");
        autoMuteEpCheckBox = video_player.querySelector(".listItemAutoMute #vid_AutoMuteToggleCheckbox");
        autoNextEpCheckBox = video_player.querySelector(".listItemAutoNext #vid_AutoNextToggleCheckbox");
        autoPlayEpCheckBox = video_player.querySelector(".listItemAutoPlay #vid_AutoPlayToggleCheckbox");
        autoSkipEpCheckBox = video_player.querySelector(".listItemAutoSkip #vid_AutoSkipToggleCheckbox");
        caption_labels = video_player.querySelector(".captions_UL");
        caption_text = video_player.querySelector(".captionText");
        languageUL = video_player.querySelector(".language_UL");
        languageLI = languageUL.querySelectorAll(".language_LI");
        playbackUL = video_player.querySelector(".playbackSpeed_UL");
        normalPlaybackLI = playbackUL.querySelector(".normalPlaybackspeed_LI");
        playbackLI = playbackUL.querySelectorAll(".playbackSpeed_LI");
        listItemLang = settingsBase.querySelector(".listItemLanguage");
        listItemCaption = settingsBase.querySelector(".listItemSubtitleCC");
        listItemSpeed = settingsBase.querySelector(".listItemPlaybackSpeed");
        listItemQuality = settingsBase.querySelector(".listItemQuality");
        qualityUL = video_player.querySelector(".quality_UL");
        qualities = video_player.querySelectorAll("source[size]");
        thumbnailBox = video_player.querySelector(".thumbnailBox");
        thumbnail = video_player.querySelector(".thumbnail");
        

        // Reset flag for load completed event
        window.__uvp_uvplr_ctnt_loaded = false;

        // Blob url
        let mainVideoSources = mainVideo.querySelectorAll("source");
        let ttlSrcLength = mainVideoSources.length;
        let srcProgress = new Array(ttlSrcLength).fill(0);

        // Update UI based on current vid process
        const updUVPlyrBlobProgress = () =>
        {
            const ttl_progress = srcProgress.reduce((a, b) => a + b, 0);
            const ttl_pctl = ttl_progress / ttlSrcLength;

            let ldr_txt = document.querySelector(".watch_pg_plyr_ldr_pctl_txt");
            ldr_txt.textContent = `${ttl_pctl.toFixed(1)}%`;

            // Action(s) to be performed when progress is at 100%
            if((ttl_pctl >= 100) && !(window.__uvp_uvplr_ctnt_loaded))
            {
                // Set flag to true to prevent repetitive calls
                window.__uvp_uvplr_ctnt_loaded = true;

                // Force reload since blob is ready
                mainVideo.load();

                // Add listeners for other functionalities
                startUVPlyr();

                // Remove the preloader
                postUVPlyr();
            }
        }

        // Get and blob each url
        for (let i = 0; i < mainVideoSources.length; i++)
        {
            let vidSrc = mainVideoSources[i];
            let vidSrcUrl = mainVideoSources[i].src;

            let xhr = new XMLHttpRequest();
            xhr.open("GET", vidSrcUrl);
            xhr.responseType = "arraybuffer";

            // Track loading progress
            xhr.onprogress = (event) => 
            {
                if (event.lengthComputable) 
                {
                    const percent = (event.loaded / event.total) * 100;
                    srcProgress[i] = percent;
                    updUVPlyrBlobProgress();
                }
            };

            // Create blob after loading
            xhr.onload = (e) => 
            {
                let blob = new Blob([xhr.response]);
                let url = URL.createObjectURL(blob);
                vidSrc.src = url;
                srcProgress[i] = 100;
                updUVPlyrBlobProgress();
            };

            xhr.send();
        } 

        // Prevent context menu from opening
        mainVideo.addEventListener("contextmenu", (e) => 
        {
            e.preventDefault();
        });

        // Load video duration
        mainVideo.addEventListener("loadeddata", (e) => 
        {
            totalDuration.innerHTML = formatTime(mainVideo.duration);
            mainVideo.volume = volumeSlider.value;
        });
    }


    // Starts the video player
    async function startUVPlyr()
    {
        window.addEventListener("scroll" , checkVidBdrBounds);
        window.addEventListener("resize" , checkVidBdrBounds);
        window.addEventListener("change" , () => 
        {
            checkVidBdrBounds();
            checkPIP();
        });
        checkVidBdrBounds();
        checkPIP();

        document.addEventListener("fullscreenchange", () => 
        {
            if((isPageWatchPage()) && !(document.fullscreenElement))
            {
                video_player.classList.remove("fullscreen");
                fullScreenContractBtn.classList.add("hide");
                fullScreenExpandBtn.classList.remove("hide");
                fullScreenBtnBox.forEach(box => 
                {
                    box.title = "enter fullscreen";
                    box.ariaLabel = "enter fullscreen";
                });
            }
        });

        // Insert tracks into list if present
        if (tracks.length != 0) 
        {
            caption_labels.insertAdjacentHTML(
                "afterbegin",
                `
                    <li data-track="OFF" class="settingsCtnt_LI captions_LI active">
                        <p>Off</p>
                    </li>
                `
            );
            for (let i = 0; i < tracks.length; i++) 
            {
                let trackLI = 
                `
                    <li data-track="${tracks[i].label}" class="settingsCtnt_LI captions_LI" title="${tracks[i].label}" aria-label="${tracks[i].label}">
                        <p>${tracks[i].label}</p>
                    </li>
                `;
                caption_labels.insertAdjacentHTML("beforeend", trackLI);
            }
        }
        const caption = caption_labels.querySelectorAll(".captions_LI");

        // Showing controls on mouse move
        video_player.addEventListener("mousemove", () => 
        {
            video_player.classList.add("show-controls");
            if (tracks.length != 0)
            {
                caption_text.classList.remove("active");
            }
            clearTimeout(ctrltimer);
            hideControls();
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
    
        // Pause/play video
        playPauseBtn.forEach(btn => 
        {
            btn.addEventListener("click", () => 
            {
                toggleVidPlay();
            });
        });

        // Pause/play (single click) For Pc users only 
        pcControlTapBox.addEventListener("click" , () => 
        {
            toggleVidPlay();
        });

        // Fullscreen (dbl click) For Pc users only 
        pcControlTapBox.addEventListener("dblclick" , () => 
        {
            toggleFullScreenMode();
        });
    
        // Playing Video
        mainVideo.addEventListener("play", () => 
        {
            window.scrollTo(0, 0);
            playBtn.forEach(btn => 
            {
                btn.classList.add("hide");
            });
            pauseBtn.forEach(btn => 
            {
                btn.classList.remove("hide");
            });
            playPauseBtnBox.forEach(box => 
            {
                box.title = "pause";
                box.ariaLabel = "pause";
            });
            video_player.classList.add("show-controls");
            clearTimeout(ctrltimer);
            hideControls();
        });
    
        // Paused Video
        mainVideo.addEventListener("pause", () => 
        {
            playBtn.forEach(btn => 
            {
                btn.classList.remove("hide");
            });
            pauseBtn.forEach(btn => 
            {
                btn.classList.add("hide");
            });
            playPauseBtnBox.forEach(box => 
            {
                box.title = "play";
                box.ariaLabel = "play";
            });
            video_player.classList.add("show-controls");
            clearTimeout(ctrltimer);
            hideControls();
        });

        volumeSlider.addEventListener("input", e => 
        {
            mainVideo.volume = e.target.value;
            updateVolumeIcon(e.target.value);
        });

        volumeBtn.forEach(btn => 
        {
            btn.addEventListener("click", () => 
            {
                toggleMute();
            });
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

            // Displaying thumbnail
            thumbnailBox.style.setProperty("--posX", `${posX}px`);
            thumbnail.style.setProperty("--posX", `${posX}px`);
            thumbnailBox.classList.add("show");

            for (let item of thumbnails)
            {
                let data = item.sec.find(x1 => x1.index === Math.floor(percent));

                // Show thumbnail if found
                if (data)
                {
                    if (item.data != undefined)
                    {
                        thumbnail.setAttribute("style", `background-image: url(${item.data});background-position-x: ${data.backgroundPositionX}px;background-position-y: ${data.backgroundPositionY}px;--posX: ${posX}px;`);
                        return;
                    }
                }
            }

        });
        
        // Hiding thumbnail and progress area time when mouse is not hovering the progress area
        progressArea.addEventListener("mouseleave", () => 
        {
            thumbnailBox.classList.remove("show");
        });

        // Actions for when video ends
        mainVideo.addEventListener('ended', () => 
        {
            vidHasEnded();
        });

        // Picture in picture
        picture_in_picutre.addEventListener("click", () => 
        {
            mainVideo.requestPictureInPicture();
        });

        // Full screen function
        fullScreenBtn.forEach(btn => 
        {
            btn.addEventListener("click", () => 
            {
                toggleFullScreenMode();
            });
        });

        // Open settings
        settingsBtn.addEventListener("click", () => 
        {
            settingsBase.classList.toggle("active");
            settingsBtn.classList.toggle("active");

            // Pause video for mob/touch devices
            if(mobWindow.matches || window.innerWidth < 884 || window.innerHeight < 485)
            {
                mainVideo.pause();
            }

            if ((settingsHomeBdr.classList.contains("notActive")))
            {
                closeSettingsOpt();
            };
        });
        
        video_player.addEventListener("mousedown", e =>
        {
            if(mobWindow.matches) return;
            hideSettingsBase();
        });

        closeSettingsBase.addEventListener("click" , () => 
        {
            settingsBase.classList.remove("active");
            settingsBtn.classList.remove("active");
            mainVideo.play();
        });
        
        // Opening sections of the settings menu
        openSettingsOptBdr.forEach((btn, opnBdr) => 
        {
            btn.addEventListener("click" , () => 
            {
                settingsHomeBdr.classList.add("notActive");
                settingsOptBdr[opnBdr].classList.add("active");
                settingsBase.scrollTo(0, 0);
            });
        });
        
        closeSettingsOptBdr.forEach(btn => 
        {
            btn.addEventListener("click" , closeSettingsOpt);
        });

        // Init Auto Settings (i.e. auto mute, auto next, auto play, auto skip)
        try
        {
            let selProfForAutoSett = await getSelectedProfile();
            let auto_mute = selProfForAutoSett?.prof_auto_mute;
            let auto_next = selProfForAutoSett?.prof_auto_next;
            let auto_play = selProfForAutoSett?.prof_auto_play;
            let auto_skip = selProfForAutoSett?.prof_auto_skip;
            
            autoMuteEpCheckBox.checked = typeof auto_mute === "boolean" ? auto_mute : null;
            autoNextEpCheckBox.checked = typeof auto_next === "boolean" ? auto_next : null;
            autoPlayEpCheckBox.checked = typeof auto_play === "boolean" ? auto_play : null;
            autoSkipEpCheckBox.checked = typeof auto_skip === "boolean" ? auto_skip : null;
        }
        catch(err)
        {
            console.error(`Failed to initialize Auto Settings\n${err}`);
            notification(`notifyBad`, `Failed to initialize Auto Settings`);
        }

        // Update listeners for Auto 
        autoSettRadBtns.forEach((radBtn) => 
        {
            const rad_atn = async () => 
            {
                autoSettRadBtns.forEach(item => item.disabled = true);
                let checkBtn = radBtn.parentElement.querySelector(`input[type="checkbox"]#${radBtn.id}:checked`);
                let ischk = false;

                if(checkBtn)
                {
                    // Update flag to true
                    ischk = true;
                }
                else
                {
                    // Update flag to false
                    ischk = false;
                }

                //  Update the corresponding property
                try 
                {
                    switch(radBtn.id)
                    {
                        case 'vid_AutoMuteToggleCheckbox':
                            await updUsrProfFlds(
                            {
                                prof_auto_mute: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;

                        case 'vid_AutoNextToggleCheckbox':
                            await updUsrProfFlds(
                            {
                                prof_auto_next: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;
                            
                        case 'vid_AutoPlayToggleCheckbox':
                            await updUsrProfFlds(
                            {
                                prof_auto_play: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;
                            
                        case 'vid_AutoSkipToggleCheckbox':
                            await updUsrProfFlds(
                            {
                                prof_auto_skip: ischk
                            });
                            notification('notifyGood', 'Preferences saved');
                            break;

                        default:
                            notification('notifyBad', 'Failed to update preferences');
                            break;
                    }

                    // Re-enable toggle buttons
                    autoSettRadBtns.forEach(item => item.disabled = false);
                }
                catch(err)
                {
                    // Log any errors and re-enable toggle buttons
                    console.error(err);
                    autoSettRadBtns.forEach(item => item.disabled = false);
                }
            }

            radBtn.addEventListener("click", rad_atn);
        });

        // Language Settings
        languageLI.forEach(option => 
        {
            option.addEventListener("click", () => 
            {
                removeActiveClasses(languageLI);
                option.classList.add("active");
                listItemLang.title = "Language is " + option.querySelector("p").textContent;
                listItemLang.ariaLabel = "Language is " + option.querySelector("p").textContent;
                listItemLang.querySelector(".itemValue").textContent = option.querySelector("p").textContent;
            });
        });

        // Speed options menu
        playbackLI.forEach(option => 
        {
            let dataSpeed = option.dataset.speed;
            option.title = "x" + dataSpeed+ " speed";
            option.ariaLabel = "x" + dataSpeed + " speed";
            option.addEventListener("click", () => 
            {
                mainVideo.playbackRate = dataSpeed;
                removeActiveClasses(playbackLI);
                option.classList.add("active");
                listItemSpeed.title = "Playback Speed is " + option.querySelector("p").textContent;
                listItemSpeed.ariaLabel = "Playback Speed is " + option.querySelector("p").textContent;
                listItemSpeed.querySelector(".itemValue").textContent = option.querySelector("p").textContent;
            });
        });

        // Video Quality
        qualities.forEach(event =>
        {
            let quality_html = 
            `
                <li data-quality="${event.getAttribute('size')}" class="settingsCtnt_LI quality_LI" title="${event.getAttribute('size')}p" aria-label="${event.getAttribute('size')}p">
                    <p>${event.getAttribute('size')}p</p>
                </li>
            `;
            qualityUL.insertAdjacentHTML('afterbegin', quality_html);
        });

        const qualityLI = qualityUL.querySelectorAll(".quality_LI");
        qualityLI.forEach((event) => 
        {
            event.addEventListener('click', (e) => 
            {
                let quality = event.getAttribute('data-quality');
                removeActiveClasses(qualityLI);
                event.classList.add('active');

                qualities.forEach(event => 
                {
                    if (event.getAttribute('size') == quality)
                    {
                        let video_current_duration = mainVideo.currentTime;
                        let video_source = event.getAttribute('src');
                        mainVideo.src = video_source;
                        mainVideo.currentTime = video_current_duration;
                        closeSettingsOpt();
                        settingsBase.classList.remove("active");
                        clearTimeout(ctrltimer);
                        toggleVidPlay();
                    }
                });

                removeActiveClasses(playbackLI);
                normalPlaybackLI.classList.add("active");
                listItemSpeed.title = "Playback Speed is " + normalPlaybackLI.querySelector("p").textContent;
                listItemSpeed.ariaLabel = "Playback Speed is " + normalPlaybackLI.querySelector("p").textContent;
                listItemSpeed.querySelector(".itemValue").textContent = normalPlaybackLI.querySelector("p").textContent;

                listItemQuality.title = "Video Quality is " + event.querySelector("p").textContent;
                listItemQuality.ariaLabel = "Video Quality is " + event.querySelector("p").textContent;
                listItemQuality.querySelector(".itemValue").textContent = event.querySelector("p").textContent;
            });
        });

        // Captions
        caption.forEach((event) => 
        {
            event.addEventListener("click", () => 
            {
                removeActiveClasses(caption);
                event.classList.add("active");
                changeCaption(event);
                caption_text.innerHTML = "";
                listItemCaption.title = "Subtitles/CC is " + event.querySelector("p").textContent;
                listItemCaption.ariaLabel = "Playback Speed is " + event.querySelector("p").textContent;
                listItemCaption.querySelector(".itemValue").textContent = event.querySelector("p").textContent;
            });
        });

        let track = mainVideo.textTracks;

        function changeCaption(lbl) 
        {
            let trackLabel = lbl.getAttribute("data-track");
            for (let i = 0; i < track.length; i++)
            {
                track[i].mode = "disabled";
                if (track[i].label == trackLabel)
                {
                    track[i].mode = "showing";
                }
            }
        }

        for (let i = 0; i < track.length; i++)
        {
            track[i].addEventListener("cuechange", () =>
            {
                if (track[i].mode === "showing")
                {
                    if (track[i].activeCues[0])
                    {
                        let span = 
                        `
                            <span>
                                <mark>${track[i].activeCues[0].text}</mark>
                            </span>
                        `;
                        caption_text.innerHTML = span;
                    }
                    else
                    {
                        caption_text.innerHTML = "";
                    }
                }
            });
        }

        // Remove options if no content exist
        if (tracks.length == 0)
        {
            caption_labels.remove();
            captionsBtn.parentNode.remove();
        }


        // Creating thumbnails
        let preview_video = document.createElement('video');
        preview_video.preload = "metadata";
        preview_video.width = "500";
        preview_video.height = "300"
        preview_video.controls = true;
        preview_video.src = mainVideo.querySelector("source").src;
        preview_video.addEventListener("loadeddata", async function()
        {
            preview_video.pause();

            let count = 1;
            let id = 1;
            let x = 0,
            y = 0;

            let array = [];

            let duration = parseInt(preview_video.duration);
            for (let i = 1; i <= duration; i++)
            {
                array.push(i);
            }

            let canvas;

            let i, j;

            for (i = 0, j = array.length; i < j; i += horizontalItemCount)
            {
                for (let startIndex of array.slice(i, i + horizontalItemCount))
                {
                    let backgroundPositionX = x * thumbnailWidth;
                    let backgroundPositionY = y * thumbnailHeight;
                    let item = thumbnails.find((x) => x.id === id);

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
                    else if(item.canvas)
                    {
                        canvas = item.canvas;
                        item.sec.push(
                        {
                            index: startIndex,
                            backgroundPositionX: -backgroundPositionX,
                            backgroundPositionY: -backgroundPositionY,
                        });
                    }
                    else
                    {
                        canvas = document.createElement("canvas");
                        canvas.width = thumbnailWidth * horizontalItemCount;
                        canvas.height = thumbnailHeight * verticalItemCount;
                        
                        // Reattach the new canvas
                        item.canvas = canvas;
                        item.sec = 
                        [
                            {
                                index: startIndex,
                                backgroundPositionX: -backgroundPositionX,
                                backgroundPositionY: -backgroundPositionY,
                            },
                        ];
                    }

                    preview_video.currentTime = startIndex;
                    await new Promise((resolve) => 
                    {
                        preview_video.addEventListener("seeked", () => 
                        {
                            let context = canvas.getContext("2d");

                            if(context && preview_video.readyState >= 2)
                            {
                                context.drawImage(
                                    preview_video,
                                    backgroundPositionX,
                                    backgroundPositionY,
                                    thumbnailWidth,
                                    thumbnailHeight
                                );

                                x++;
                                resolve();
                            }
                            else
                            {
                                console.error("Error: Video not ready or canvas context not available.");
                                resolve();
                            }
                        }, { once: true });
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

    }


    // Handles other actions after content has fully loaded
    async function postUVPlyr()
    {
        const ldr_bdr = document.querySelector(".watch_pg_plyr_ldr_bdr");
        const ldr_icon_bdr = ldr_bdr.querySelector(".watch_pg_plyr_ldr_icon_bdr");
        const ldr_pctl_box = ldr_bdr.querySelector(".watch_pg_plyr_ldr_pctl_box");
        const ldr_btn = ldr_bdr.querySelector(".watch_pg_plyr_atn_btn");

        // Action for Player loader button
        const postPlyrLdrBtn_atn = () =>
        {
            // Remove listener and disable button
            ldr_btn.classList.add("hide");
            ldr_btn.disabled = true;
            ldr_btn.removeEventListener("click", postPlyrLdrBtn_atn);

            // Hide the modal
            ldr_bdr.classList.add("loaded");

            // Play the video
            toggleVidPlay();
        }
        
        try
        {
            // Check for user's preferences
            let selProf = await getSelectedProfile();
            let isAutoMute = selProf?.prof_auto_mute;
            let isAutoPlay = selProf?.prof_auto_play;

            // Remove Loader icon & progress text
            ldr_icon_bdr.classList.add("loaded");
            ldr_pctl_box.classList.add("loaded");

            // Mute audio, if on
            if((isAutoMute) && (typeof isAutoMute === "boolean") && (isAutoMute == true))
            {
                toggleMute(true);
            }
            else
            {
                toggleMute(false);
            }

            // Autoplay video, if on
            if((isAutoPlay) && (typeof isAutoPlay === "boolean") && (isAutoPlay == true))
            {
                // Hide the modal
                ldr_bdr.classList.add("loaded");

                // Automatically play the video
                toggleVidPlay();
            }
            else
            {
                // Add listener for play button & display it
                ldr_btn.disabled = false;
                ldr_btn.addEventListener("click", postPlyrLdrBtn_atn);
                ldr_btn.classList.remove("hide");
            }
        }
        catch(err)
        {
            console.error(`Failed to fetch user preferences\n${err}`);
            notification(`notifyBad`, `Failed to fetch user preferences`);

            // Add listener for play button & display it
            ldr_btn.disabled = false;
            ldr_btn.addEventListener("click", postPlyrLdrBtn_atn);
            ldr_btn.classList.remove("hide");
        }
    }
        