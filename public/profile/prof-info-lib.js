/***************************************************************
 * This will serve as a data library for the different profiles
 * 
 *  |||| Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "ProfileInfoLib.profileInfoInv" to access the array ||||
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// (() => 
// {
    let profileInfoInv = 
    [
        {
            prof_id: `wer392w2fj293gfo`,
            prof_selected: `yes`,
            prof_name: `acbennny`,
            prof_type: `default`,
            prof_frgImg: `/images/uvid-profile-base.png`,
            prof_bcgImg: `/images/uvid-green-bcg1-dark.jpg`,
            prof_audio_lang: `English`,
            prof_subtitle_lang: `English`,
            prof_show_subtitles: `on`,
            prof_dwld_qlty: `always ask`,
            prof_auto_play: `off`,
            prof_auto_next: `off`,
            prof_auto_skip: `off`,
            prof_lock_state: `unlocked`,
            prof_lock_pin: `0000`,
            prof_ctnt_restriction: `18+`,
            prof_history:
            [
                {
                    hist_link: `#/watch/tv/fullmetal-panic/1/18`,
                    hist_currTime: `05:06`,
                    hist_totalTime: `24:00`,
                },
                {
                    hist_link: `#/watch/tv/fullmetal-alchemist/1/8`,
                    hist_currTime: `21:12`,
                    hist_totalTime: `24:00`,
                },
                {
                    hist_link: `#/watch/tv/fullmetal-alchemist-brotherhood/1/56`,
                    hist_currTime: `11:57`,
                    hist_totalTime: `23:58`,
                },
                {
                    hist_link: `#/watch/tv/blue-exorcist/1/10`,
                    hist_currTime: `01:22`,
                    hist_totalTime: `24:00`,
                },
                {
                    hist_link: `#/watch/tv/cyberpunk-edgerunners/1/10`,
                    hist_currTime: `17:17`,
                    hist_totalTime: `22:59`,
                },
                {
                    hist_link: `#/watch/tv/tomodacchi-game/1/12`,
                    hist_currTime: `23:51`,
                    hist_totalTime: `23:59`,
                },
                {
                    hist_link: `#/watch/tv/kaguyaSama/2/5`,
                    hist_currTime: `04:46`,
                    hist_totalTime: `23:59`,
                },
                {
                    hist_link: `#/watch/tv/kakegurui/1/3`,
                    hist_currTime: `11:57`,
                    hist_totalTime: `23:58`,
                },
                {
                    hist_link: `#/watch/tv/that-time-i-got-reincarnated-as-a-slime/4/9`,
                    hist_currTime: `01:06`,
                    hist_totalTime: `23:00`,
                },
                {
                    hist_link: `#/watch/tv/rising-of-the-shield-hero/2/8`,
                    hist_currTime: `14:01`,
                    hist_totalTime: `24:00`,
                },
            ],
            prof_likes:
            [
                {
                    ls_item: `#/info/jujutsu-kaisen`,
                },
                {
                    ls_item: `#/info/demon-slayer`,
                },
                {
                    ls_item: `#/info/one-piece`,
                },
                {
                    ls_item: `#/info/one-punchman`,
                },
                {
                    ls_item: `#/info/attack-on-titans`,
                },
                {
                    ls_item: `#/info/fullmetal-alchemist-brotherhood`,
                },
                {
                    ls_item: `#/info/black-clover`,
                },
                {
                    ls_item: `#/info/cyberpunk-edgerunners`,
                },
                {
                    ls_item: `#/info/train-to-the-end-of-the-world`,
                },
                {
                    ls_item: `#/info/kakegurui`,
                },
                {
                    ls_item: `#/info/blue-exorcist`,
                },
                {
                    ls_item: `#/info/rent-a-girlfriend`,
                },
            ],
            prof_dislikes:
            [
                {
                    ds_item: `#/info/my-stepmoms-daughter-is-my-ex`,
                }
            ],
            prof_watchlist:
            [
                {
                    wl_item: `#/info/fullmetal-panic`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/fullmetal-alchemist`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/fullmetal-alchemist-brotherhood`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/blue-exorcist`,
                    wl_status: 3,
                },
                {
                    wl_item: `#/info/cyberpunk-edgerunners`,
                    wl_status: 5,
                },
                {
                    wl_item: `#/info/tomodachi-game`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/kaguya-sama`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/kakegurui`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/that-time-i-got-reincarnated-as-a-slime`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/rising-of-the-shield-hero`,
                    wl_status: 1,
                },
            ],
            prof_collections:
            [
                {
                    cl_id: `w6nhpnvofa5xyo7o`,
                    cl_name: `The Greatest Anime Shows`,
                    cl_updated: `Sep 12, 2024`,
                    cl_bcg: `/library/jujutsu-kaisen/img/2.jpg`,
                    cl_desc: `In this watchlist lies some of the greatest anime shows to ever air since the day anime was first introduced to the public.`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/jujutsu-kaisen`,
                        },
                        {
                            cl_itemId: `#/info/one-piece`,
                        },
                        {
                            cl_itemId: `#/info/naruto`,
                        },
                        {
                            cl_itemId: `#/info/demon-slayer`,
                        },
                        {
                            cl_itemId: `#/info/one-punch-man`,
                        },
                        {
                            cl_itemId: `#/info/fullmetal-alchemist-brotherhood`,
                        },
                        {
                            cl_itemId: `#/info/attack-on-titan`,
                        },
                    ],
                },
                {
                    cl_id: `4e2jxuogagcpgubd`,
                    cl_name: `Fullmetal Collection`,
                    cl_updated: `Oct 1, 2024`,
                    cl_bcg: `/library/fullmetal-alchemist-brotherhood/img/2.jpg`,
                    cl_desc: `A collection of all the Fullmetal Shows.`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/fullmetal-panic`,
                        },
                        {
                            cl_itemId: `#/info/fullmetal-alchemist`,
                        },
                        {
                            cl_itemId: `#/info/fullmetal-alchemist-brotherhood`,
                        },
                    ],
                },
                {
                    cl_id: `8nckxlnq0v5i9ipd`,
                    cl_name: `Intriguing Classics`,
                    cl_updated: `Dec 13, 2024`,
                    cl_bcg: `/library/one-piece/img/2.jpg`,
                    cl_desc: `Compiled in this watchlist are some of the best classics in the anime universe.`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/one-piece`,
                        },
                        {
                            cl_itemId: `#/info/naruto`,
                        },
                    ],
                },
            ],
            prof_notifications:
            [
                {
                    notify_addedDate: `just now`,
                    notify_readStatus: `unread`,
                    notify_thumbnail: `/images/uvid-bcg1.jpg`,
                    notify_mainTopic: `Welcome to Uvid`,
                    notify_subTopic: `We are glad you joined us. Browse and watch your favourite movies and tv shows.`,
                    notify_actionText: `Explore`,
                    notify_actionLink: `#/home`,
                },
                {
                    notify_addedDate: `just now`,
                    notify_readStatus: `unread`,
                    notify_thumbnail: `/images/uvid-bcg2.jpg`,
                    notify_mainTopic: `Switch Profiles`,
                    notify_subTopic: `You can now create and customize up to five different profiles.`,
                    notify_actionText: `Try it Out`,
                    notify_actionLink: `#/profile`,
                },
                {
                    notify_addedDate: `just now`,
                    notify_readStatus: `unread`,
                    notify_thumbnail: `/library/solo-leveling/img/0.jpg`,
                    notify_mainTopic: `Solo Leveling`,
                    notify_subTopic: `Episode 13 is now available.`,
                    notify_actionText: `Watch Now`,
                    notify_actionLink: `#/info/solo-leveling`,
                }
            ],
        },
        {
            prof_id: `ghf340i8jdeo5r32`,
            prof_selected: `no`,
            prof_name: `Alvare`,
            prof_type: `normal`,
            prof_frgImg: `/images/pfp/pfp-2.jpg`,
            prof_bcgImg: `/images/uvid-tv-shows.jpg`,
            prof_audio_lang: `English`,
            prof_subtitle_lang: `English`,
            prof_show_subtitles: `on`,
            prof_auto_play: `off`,
            prof_auto_next: `off`,
            prof_auto_skip: `off`,
            prof_lock_state: `unlocked`,
            prof_lock_pin: `0000`,
            prof_ctnt_restriction: `18+`,
            prof_history:
            [
                {
                    hist_link: `#/tv/watch/violet-evergarden/1/10`,
                    hist_currTime: `22:47`,
                    hist_totalTime: `23:40`,
                },
                {
                    hist_link: `#/tv/watch/spy-x-family/1/12`,
                    hist_currTime: `23:44`,
                    hist_totalTime: `24:00`,
                },
                {
                    hist_link: `#/tv/watch/initial-d/6/4`,
                    hist_currTime: `23:44`,
                    hist_totalTime: `23:59`,
                },
                {
                    hist_link: `#/tv/watch/mf-ghost/2/12`,
                    hist_currTime: `23:51`,
                    hist_totalTime: `23:59`,
                },
            ],
            prof_likes:
            [
                {
                    ls_item: `#/info/initial-d`,
                },
                {
                    ls_item: `#/info/mf-ghost`,
                },
                {
                    ls_item: `#/info/one-piece`,
                },
                {
                    ls_item: `#/info/spy-x-family`,
                },
                {
                    ls_item: `#/info/your-lie-in-april`,
                },
                {
                    ls_item: `#/info/one-punch-man`,
                },
                {
                    ls_item: `#/info/demon-slayer`,
                },
                {
                    ls_item: `#/info/kakegurui`,
                },
                {
                    ls_item: `#/info/cyberpunk-edgerunners`,
                },
                {
                    ls_item: `#/info/fullmetal-alchemist`,
                },
                {
                    ls_item: `#/info/violet-evergarden`,
                },
                {
                    ls_item: `#/info/tokyo-ghoul`,
                },
                {
                    ls_item: `#/info/cowboy-bebop`,
                },
            ],
            prof_dislikes:
            [],
            prof_watchlist:
            [
                {
                    wl_item: `#/info/initial-d`,
                    wl_status: 5,
                },
                {
                    wl_item: `#/info/mf-ghost`,
                    wl_status: 5,
                },
                {
                    wl_item: `#/info/one-piece`,
                    wl_status: 2,
                },
                {
                    wl_item: `#/info/spy-x-family`,
                    wl_status: 5,
                },
                {
                    wl_item: `#/info/your-lie-in-april`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/one-punch-man`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/demon-slayer`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/kakegurui`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/cyberpunk-edgerunners`,
                    wl_status: 5,
                },
                {
                    wl_item: `#/info/fullmetal-alchemist`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/violet-evergarden`,
                    wl_status: 5,
                },
                {
                    wl_item: `#/info/tokyo-ghoul`,
                    wl_status: 1,
                },
                {
                    wl_item: `#/info/cowboy-bebop`,
                    wl_status: 3,
                },
            ],
            prof_collections:
            [
                {
                    cl_id: `0eswuj39wisopkaw`,
                    cl_name: `Racing shows`,
                    cl_updated: `Sep 11, 2024`,
                    cl_bcg: `/library/high-speed-etoile/img/2.jpg`,
                    cl_desc: `Drunk in the bliss of Speed! Let those cars run!`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/initial-d`,
                        },
                        {
                            cl_itemId: `#/info/mf-ghost`,
                        },
                        {
                            cl_itemId: `#/info/high-speed-etoile`,
                        },
                    ],
                },
                {
                    cl_id: `ufjs99aq3af1n0hs`,
                    cl_name: `Imma watch these later`,
                    cl_updated: `Dec 31, 2024`,
                    cl_bcg: `/library/demon-slayer/img/2.jpg`,
                    cl_desc: `These are a bunch of shows I should've watched, but whatever reason I haven't watched them. Hopefully this year if time permits`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/hunter-x-hunter`,
                        },
                        {
                            cl_itemId: `#/info/one-piece`,
                        },
                        {
                            cl_itemId: `#/info/that-time-i-got-reincarnated-as-a-slime`,
                        },
                        {
                            cl_itemId: `#/info/naruto`,
                        },
                        {
                            cl_itemId: `#/info/rising-of-the-shield-hero`,
                        },
                        {
                            cl_itemId: `#/info/demon-slayer`,
                        },
                        {
                            cl_itemId: `#/info/one-punch-man`,
                        },
                    ],
                },
                {
                    cl_id: `e2u2tea34asde22sd`,
                    cl_name: `Initial D Shows`,
                    cl_updated: `Jan 13, 2025`,
                    cl_bcg: `/library/mf-ghost/img/2.jpg`,
                    cl_desc: `All initial D shows, past, present, and beyond.`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/initial-d`,
                        },
                        {
                            cl_itemId: `#/info/mf-ghost`,
                        },
                    ],
                },
                {
                    cl_id: `0eswuj39wisopkaw`,
                    cl_name: `Romance to be`,
                    cl_updated: `Feb 14, 2025`,
                    cl_bcg: `/library/rent-a-girlfriend/img/2.jpg`,
                    cl_desc: `Some romance shows..`,
                    cl_items:
                    [
                        {
                            cl_itemId: `#/info/rent-a-girlfriend`,
                        },
                        {
                            cl_itemId: `#/info/your-lie-in-april`,
                        },
                        {
                            cl_itemId: `#/info/violet-evergarden`,
                        },
                    ],
                },
            ],
            prof_downloads:
            [],
            prof_notifications:
            [],
        },
        {
            prof_id: `p734ednt98g73w2q`,
            prof_selected: `no`,
            prof_name: `Aston`,
            prof_type: `normal`,
            prof_frgImg: `/Images/pfp/pfp-4.jpg`,
            prof_bcgImg: `/images/uvid-anime.jpg`,
            prof_audio_lang: `English`,
            prof_subtitle_lang: `English`,
            prof_show_subtitles: `on`,
            prof_auto_play: `off`,
            prof_auto_next: `off`,
            prof_auto_skip: `off`,
            prof_lock_state: `unlocked`,
            prof_lock_pin: `0000`,
            prof_ctnt_restriction: `18+`,
            prof_history:
            [],
            prof_likes:
            [],
            prof_dislikes:
            [],
            prof_watchlist:
            [],
            prof_collections:
            [],
            prof_downloads:
            [],
            prof_notifications:
            [],
        },
    ];

    

    let selectedProfile;

    function getSelectedProfile()
    {
        let profInfoMap = new Map(
            profileInfoInv.map(item => 
            {
                const theSelProf = item.prof_selected;
                return [theSelProf, item];
            })
        );
        selectedProfile = profInfoMap.get("yes");
    }
    getSelectedProfile();

    // Exporting the variable to a global namespace
    // window.ProfileInfoLib = window.ProfileInfoLib || {}; // Ensure namespace exists
    // window.ProfileInfoLib.profileInfoInv = profileInfoInv;
// })();




