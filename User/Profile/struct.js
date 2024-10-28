/***************************************************************
 * This will hold the code for the Struct of the Profile page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    const userPagesStruct =
    `
        <!-- body -->
        <div class="userMainBdr">
            <div class="userMainBox">
                <div class="userHeaderBdr">
                    <div class="userHeaderBox">
                        <div class="userHeaderBcgBdr">
                            <div class="userHeaderBcgBox">
                                <img src="/Images/Uvid_green_bcg1_light.jpg" alt="" class="userHeaderBcgImg">
                            </div>
                        </div>
                        <div class="userHeaderDetBdr">
                            <div class="userHeaderDetBox">
                                <div class="userHeaderTitleBdr">
                                    <div class="userHeaderTitleBox">
                                        <h1 class="userHeaderTitleText">
                                            <span class="userHeaderTitleText_intro">Hi,</span>
                                            <span class="userHeaderTitleText_userName">acbennny</span>
                                        </h1>
                                    </div>
                                </div>
                                <div class="userHeaderNavBdr">
                                    <div class="userHeaderNavBox">
                                        <a href="/User/Profile.html" class="userHeaderNavLink active">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <circle cx="12" cy="6" r="4" />
                                                <ellipse cx="12" cy="17" rx="7" ry="4" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Profile</span>
                                        </a>
                                        <a href="/User/Watchlist.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
                                                <path fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd" />
                                                <path d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685" />
                                                <path d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Watchlist</span>
                                        </a>
                                        <a href="/User/History.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">History</span>
                                        </a>
                                        <a href="/User/Notification.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Notification</span>
                                        </a>
                                        <a href="/User/Settings.html" class="userHeaderNavLink ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userHeaderNavLinkIcon">
                                                <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
                                            </svg>
                                            <span class="userHeaderNavLinkText">Settings</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="userBodyBdr userProfBodyBdr">
                    <div class="userBodyBox">
                        <div class="userBodyTitleBdr">
                            <div class="userBodyTitleBox">
                                <div class="userBodyTitleIconBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userBodyTitleIconSvg">
                                        <circle cx="12" cy="6" r="4" />
                                        <ellipse cx="12" cy="17" rx="7" ry="4" />
                                    </svg>
                                </div>
                                <span class="userBodyTitleText">Profile</span>
                            </div>
                        </div>
                        <div class="userBodyCtntBdr">
                            <div class="userBodyCtntBox">
                                <div class="userProfInfoBdr">
                                    <div class="userProfInfoBox">
                                        <div class="userProfInfoSect userProfFrgSect">
                                            <div class="userProfFrgBase">
                                                <label for="toggleUserProfEditOptBdr" class="userProfFrgBdr">
                                                    <div class="userProfFrgBox">
                                                        <img class="userProfFrgImg" src="/Images/Uvid_profilebase.png">
                                                    </div>
                                                    <div class="editProfileBadgeBdr">
                                                        <div class="editProfileBadgeBox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="editProfileBadgeIcon">
                                                                <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="userProfEditOptBdr">
                                                        <div class="userProfEditOptBox">
                                                            <div class="userProfEditOptTab openUserProfEditFrgModal">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userProfEditOptIcon">
                                                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                                </svg>
                                                                <p class="userProfEditOptText">Change Avatar</p>
                                                            </div>
                                                            <div class="userProfEditOptTab openUserProfEditBcgModal">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userProfEditOptIcon">
                                                                    <path d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z" />
                                                                </svg>
                                                                <p class="userProfEditOptText">Change Background</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="checkbox" id="toggleUserProfEditOptBdr">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="userProfInfoSect userProfDetSect">
                                            <div class="userProfDetBdr">
                                                <div class="userProfDetBox">
                                                    <div class="userProfDetTab">
                                                        <div class="userProfDetMajorBox">
                                                            <div class="userProfDetMajorText">Profile Name</div>
                                                        </div>
                                                        <input class="userProfDetMinorBox userProfDetMinorInputField" id="userProfNameField" value="acbennny" disabled="true"/>
                                                    </div>
                                                    <div class="userProfDetTab">
                                                        <div class="userProfDetMajorBox">
                                                            <div class="userProfDetMajorText">Username</div>
                                                        </div>
                                                        <div class="userProfDetMinorBox">
                                                            <div class="userProfDetMinorText">uvidtestuser</div>
                                                        </div>
                                                    </div>
                                                    <div class="userProfDetTab">
                                                        <div class="userProfDetMajorBox">
                                                            <div class="userProfDetMajorText">Email</div>
                                                        </div>
                                                        <div class="userProfDetMinorBox">
                                                            <div class="userProfDetMinorText">example@gmail.com</div>
                                                        </div>
                                                    </div>
                                                    <div class="userProfDetTab">
                                                        <div class="userProfDetMajorBox">
                                                            <div class="userProfDetMajorText">Joined</div>
                                                        </div>
                                                        <div class="userProfDetMinorBox">
                                                            <div class="userProfDetMinorText userProfJoinText">N/A</div>
                                                        </div>
                                                    </div>
                                                    <div class="userProfDetTab">
                                                        <div class="userProfDetOthBdr">
                                                            <a href="/User/Settings/Account.html" class="userProfDetOthBox">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userProfDetOthIcon">
                                                                    <path fill-rule="evenodd" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71l-1.747-1.728a.75.75 0 1 1 1.055-1.066l1.752 1.733l1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806m-6.391-6.204a2 2 0 1 1 2.828 2.828a2 2 0 0 1-2.828-2.828" clip-rule="evenodd" />
                                                                </svg>
                                                                <div class="userProfDetOthText">Change password</div>
                                                            </a>
                                                        </div>
                                                        <div class="userProfDetOthBdr">
                                                            <a href="/User/Settings/Preferences.html" class="userProfDetOthBox">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="userProfDetOthIcon">
                                                                    <path d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75M4 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1.25-4a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z" />
                                                                </svg>
                                                                <div class="userProfDetOthText">Manage preferences</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <button class="userProfDetEditBtnBox darkSolidBtn">
                                                        <div class="userProfDetEditBtnText">Edit Profile</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;


    