
/*****************************************************************************
 * This will hold the data for the Iventory of shows and associated details
 * 
 * Watch Status (wl_itemWatchStatus)
 * 0 - All (All shows have this by default)
 * 1 - Planned
 * 2 - Watching
 * 3 - On-hold
 * 4 - Dropped
 * 5 - Completed
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
*****************************************************************************/

    const searchInventory =
    [
        // Anime content
        {
            show_link: `#/info/jujutsu-kaisen`,
            show_thumbnail: `/library/jujutsu-kaisen/img/0.jpg`,
            show_title: `Jujutsu Kaisen`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Award winning, Fantasy`,
            show_theme: `School`,
            show_year: `2018`,
            show_aired: `Oct 03, 2020 to Dec 28, 2023`,
            show_studios: `MAPPA`,
            show_country: `Japan`,
            show_foreground: `/library/jujutsu-kaisen/img/1.jpg`,
            show_background: `/library/jujutsu-kaisen/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/4A_X-Dvl0ws`},
            ],
            show_movies: 
            [
                {show_mov: `JJK0`},
            ],
            show_episodes: 
            [
                {show_ep: 24,}, 
                {show_ep: 23,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,}, 
                {show_wtp: `movie`, show_wep: `JJK0`,}, 
                {show_wtp: `tv`, show_wep: 23,},
            ],
            show_description: `Jujutsu Kaisen is a popular anime series that premiered in 2018. 
            It is based on the manga of the same name written and illustrated by Gege Akutami. 
            The story follows a high school student named Yuji Itadori who becomes a Jujutsu Sorcerer
            after swallowing a cursed object to protect his friends.
            He then joins the Tokyo Metropolitan Magic Technical College to learn more about Jujutsu and fight against cursed spirits.`,
            show_searchKey: `JJK Jujutsu Kaisen sorcery anime`,
        },
        {
            show_link: `#/info/demon-slayer`,
            show_thumbnail: `/library/demon-slayer/img/0.jpg`,
            show_title: `Demon Slayer`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Award winning, fantasy`,
            show_theme: `historical, magical, battles, mytholigical`,
            show_year: `2019`,
            show_aired: `Apr 06, 2019 to Jun 30, 2024`,
            show_studios: `ufotable`,
            show_country: `Japan`,
            show_foreground: `/library/demon-slayer/img/1.jpg`,
            show_background: `/library/demon-slayer/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `8.5`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: 
            [
                {show_mov: `Mugen Train`,},
                {show_mov: `To the Swordsmith village`,}, 
                {show_mov: `To the Hashira`,},
            ],
            show_episodes: 
            [
                {show_ep: 26,}, 
                {show_ep: 18,}, 
                {show_ep: 11,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 26,}, 
                {show_wtp: `movie`, show_wep: `Mugen Train`,}, 
                {show_wtp: `tv`, show_wep: 18,}, 
                {show_wtp: `movie`, show_wep: `To the Swordsmith village`,}, 
                {show_wtp: `tv`, show_wep: 11,}, 
                {show_wtp: `movie`, show_wep: `To the Hashira`,},
            ],
            show_description: 
            `
                Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.
                </br></br>
                When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity
            `,
            show_searchKey: `Demon Slayer Kimetsu No Yaiba anime`,
        },
        {
            show_link: `#/info/attack-on-titan`,
            show_thumbnail: `/library/attack-on-titan/img/0.jpg`,
            show_title: `Attack On Titan`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Award Winning, Drama, Suspense`,
            show_theme: `Survival, Gore, Military`,
            show_year: `2013`,
            show_aired: `Apr 7, 2013 to Apr 4, 2022`,
            show_studios: `Wit studio`,
            show_country: `Japan`,
            show_foreground: `/library/attack-on-titan/img/1.jpg`,
            show_background: `/library/attack-on-titan/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/LHtdKWJdif4?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 25,},
                {show_ep: 12,},
                {show_ep: 22,},
                {show_ep: 30,},
            ],
            show_description: 
            `
                Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.
                </br></br>
                After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.
            `,
            show_searchKey: `AOT Shingeki no Kyojin Attack On Titan anime`,
        },
        {
            show_link: `#/info/naruto`,
            show_thumbnail: `/library/naruto/img/0.jpg`,
            show_title: `Naruto`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Fantasy`,
            show_theme: `Martial Arts`,
            show_year: `2002`,
            show_aired: `Oct 3, 2002 to Mar 23, 2017`,
            show_studios: `Pierrot`,
            show_country: `Japan`,
            show_foreground: `/library/naruto/img/1.jpg`,
            show_background: `/library/naruto/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.3`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `Dai Katsugeki Yuki Hime Shinobu Houjou Dattebayo`,}, 
                {show_mov: `Dai Gekitotsu Maboroshi no Chiteiiseki Dattebayo`,}, 
                {show_mov: `Naruto Shippuuden Movie 1`,}, 
                {show_mov: `Naruto Shippuuden Movie 2`,}, 
                {show_mov: `Naruto Shippuuden Movie 3`,}, 
                {show_mov: `Naruto Shippuuden Movie 4`,}, 
                {show_mov: `Naruto Shippuuden Movie 5`,}, 
                {show_mov: `Naruto Shippuuden Movie 6`,}, 
            ],
            show_episodes: 
            [
                {show_ep: 220,}, 
                {show_ep: 500,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 220,}, 
                {show_wtp: `tv`, show_wep: 500,}, 
                {show_wtp: `movie`, show_wep: `Dai Katsugeki Yuki Hime Shinobu Houjou Dattebayo`,}, 
                {show_wtp: `movie`, show_wep: `Dai Gekitotsu Maboroshi no Chiteiiseki Dattebayo`,}, 
                {show_wtp: `movie`, show_wep: `Naruto Shippuuden Movie 1`,}, 
                {show_wtp: `movie`, show_wep: `Naruto Shippuuden Movie 2`,}, 
                {show_wtp: `movie`, show_wep: `Naruto Shippuuden Movie 3`,}, 
                {show_wtp: `movie`, show_wep: `Naruto Shippuuden Movie 4`,}, 
                {show_wtp: `movie`, show_wep: `Naruto Shippuuden Movie 5`,}, 
                {show_wtp: `movie`, show_wep: `Naruto Shippuuden Movie 6`,},
            ],
            show_description: 
            `
                Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto...
                </br></br>
                It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world
                </br></br>
                Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage..
            `,
            show_searchKey: `Naruto anime`,
        },
        {
            show_link: `#/info/fullmetal-panic`,
            show_thumbnail: `/library/fullmetal-panic/img/0.jpg`,
            show_title: `Fullmetal Panic`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Comedy, Sci-fi`,
            show_theme: `Mecha, Military`,
            show_year: `2002`,
            show_aired: `Jan 8, 2002 to Jun 18, 2002`,
            show_studios: `Bones`,
            show_country: `Japan`,
            show_foreground: `/library/fullmetal-panic/img/1.jpg`,
            show_background: `/library/fullmetal-panic/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `7.6`,
            show_trailers: 
            [
                {show_trl: `N/A`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 24,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,},
            ],
            show_description: 
            `
                Mithril, a covert military institution using state-of-the-art technology to combat terrorist operations, assigns a specialized team to a sensitive mission. Under the command of superior officer Melissa Mao, sergeants Sousuke Sagara and Kurz Weber must secretly protect Kaname Chidori—a teenage girl who unconsciously holds breakthrough scientific knowledge and is considered a "Whispered"—from intelligence agencies and other organizations pursuing her abilities.
                </br></br>
                While Kurz and Melissa are to assist him remotely, Sousuke enrolls at Kaname's high school as one of her classmates to closely monitor her. However, his militaristic upbringing and poor social skills lead to a difficult adjustment to civilian life. Not only does he attract unnecessary attention, but his actions frequently make Kaname suspicious of him.
                </br></br>
                Despite the earnest attempts to fulfill his duty, a terrorist ambush further complicates Sousuke's task. Recognizing the vicious mastermind behind the assault, Sousuke abandons his orders to ensure Kaname's safety
            `,
            show_searchKey: `Furumetaru Panikku Fullmetal Panic anime`,
        },
        {
            show_link: `#/info/fullmetal-alchemist`,
            show_thumbnail: `/library/fullmetal-alchemist/img/0.jpg`,
            show_title: `Fullmetal Alchemist`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Award Winning, Drama, Fantasy`,
            show_theme: `Military`,
            show_year: `2003`,
            show_aired: `Oct 4, 2003 to Oct 2, 2004`,
            show_studios: `Bones`,
            show_country: `Japan`,
            show_foreground: `/library/fullmetal-alchemist/img/1.jpg`,
            show_background: `/library/fullmetal-alchemist/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `8.1`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 51,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 51,},
            ],
            show_description: 
            `
                Edward Elric, a young, brilliant alchemist, has lost much in his twelve-year life: when he and his brother Alphonse try to resurrect their dead mother through the forbidden act of human transmutation, Edward loses his brother as well as two of his limbs. With his supreme alchemy skills, Edward binds Alphonse's soul to a large suit of armor.
                </br></br>
                A year later, Edward, now promoted to the fullmetal alchemist of the state, embarks on a journey with his younger brother to obtain the Philosopher's Stone. The fabled mythical object is rumored to be capable of amplifying an alchemist's abilities by leaps and bounds, thus allowing them to override the fundamental law of alchemy: to gain something, an alchemist must sacrifice something of equal value. Edward hopes to draw into the military's resources to find the fabled stone and restore his and Alphonse's bodies to normal. However, the Elric brothers soon discover that there is more to the legendary stone than meets the eye, as they are led to the epicenter of a far darker battle than they could have ever imagined
            `,
            show_searchKey: `Hagane no Renkinjutsushi Fullmetal Alchemist anime`,
        },
        {
            show_link: `#/info/fullmetal-alchemist-brotherhood`,
            show_thumbnail: `/library/fullmetal-alchemist-brotherhood/img/0.jpg`,
            show_title: `Fullmetal Alchemist Brotherhood`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Drama, Fantasy`,
            show_theme: `Military`,
            show_year: `2009`,
            show_aired: `Apr 5, 2009 to Jul 4, 2010`,
            show_studios: `Bones`,
            show_country: `Japan`,
            show_foreground: `/library/fullmetal-alchemist-brotherhood/img/1.jpg`,
            show_background: `/library/fullmetal-alchemist-brotherhood/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `9.1`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`}
            ],
            show_episodes: 
            [
                {show_ep: 64,}
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 64,},
            ],
            show_description: 
            `
                After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.
                </br></br>
                The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.
                </br></br>
                As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.
            `,
            show_searchKey: `Hagane no Renkinjutsushi Fullmetal Alchemist Brotherhood anime`,
        },
        {
            show_link: `#/info/classroom-of-the-elite`,
            show_thumbnail: `/library/classroom-of-the-elite/img/0.jpg`,
            show_title: `Classroom of the Elite`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Dramma, Suspense`,
            show_theme: `Psychological, School`,
            show_year: `2017`,
            show_aired: `Jul 12, 2017 to Mar 27, 2024`,
            show_studios: `Lerche`,
            show_country: `Japan`,
            show_foreground: `/library/classroom-of-the-elite/img/1.jpg`,
            show_background: `/library/classroom-of-the-elite/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.0`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/iYsx6w5PNno?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 12,},
                {show_ep: 13,},
                {show_ep: 13,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 13,}, 
                {show_wtp: `tv`, show_wep: 13,},
            ],
            show_description: 
            `
                On the surface, Koudo Ikusei Senior High School is a utopia. The students enjoy an unparalleled amount of freedom, and it is ranked highly in Japan. However, the reality is less than ideal. Four classes, A through D, are ranked in order of merit, and only the top classes receive favorable treatment.
                </br></br>
                Kiyotaka Ayanokouji is a student of Class D, where the school dumps its worst. There he meets the unsociable Suzune Horikita, who believes she was placed in Class D by mistake and desires to climb all the way to Class A, and the seemingly amicable class idol Kikyou Kushida, whose aim is to make as many friends as possible.
                </br></br>
                While class membership is permanent, class rankings are not; students in lower ranked classes can rise in rankings if they score better than those in the top ones. Additionally, in Class D, there are no bars on what methods can be used to get ahead. In this cutthroat school, can they prevail against the odds and reach the top
            `,
            show_searchKey: `Classroom of the Elite Yokoso Jitsuryoku Shijo Shugi no Kyoshitsu anime`,
        },
        {
            show_link: `#/info/blue-exorcist`,
            show_thumbnail: `/library/blue-exorcist/img/0.jpg`,
            show_title: `Blue Exorcist`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Fantasy`,
            show_theme: `Mythological, School`,
            show_year: `2011`,
            show_aired: `Apr 17, 2011 to Mar 25, 2017`,
            show_studios: `A-1 Pictures`,
            show_country: `Japan`,
            show_foreground: `/library/blue-exorcist/img/1.jpg`,
            show_background: `/library/blue-exorcist/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.5`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/ayLq7BKjQZU?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/b1Y0FcyKdJ8?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/IV6BY5w9b9o?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/eFtUkrxqRaM?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `Ao no Exorcist Movie`},
            ],
            show_episodes: 
            [
                {show_ep: 25}, 
                {show_ep: 12,}, 
                {show_ep: 12,}
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `movie`, show_wep: `Ao no Exorcist Movie`,}, 
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                Humans and demons are two sides of the same coin, as are Assiah and Gehenna, their respective worlds. The only way to travel between the realms is by the means of possession, like in ghost stories. However, Satan, the ruler of Gehenna, cannot find a suitable host to possess and therefore, remains imprisoned in his world. In a desperate attempt to conquer Assiah, he sends his son instead, intending for him to eventually grow into a vessel capable of possession by the demon king.
                </br></br>
                Ao no Exorcist follows Rin Okumura who appears to be an ordinary, somewhat troublesome teenager—that is until one day he is ambushed by demons. His world turns upside down when he discovers that he is in fact the very son of Satan and that his demon father wishes for him to return so they can conquer Assiah together. Not wanting to join the king of Gehenna, Rin decides to begin training to become an exorcist so that he can fight to defend Assiah alongside his brother Yukio.
            `,
            show_searchKey: `Ao no Ekusoshisuto Gekijoban Blue Exorcist anime`,
        },
        {
            show_link: `#/info/spy-x-family`,
            show_thumbnail: `/library/spy-x-family/img/0.jpg`,
            show_title: `SpyxFamily`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Comedy`,
            show_theme: `Childcare`,
            show_year: `2022`,
            show_aired: `Apr 9, 2022 to Dec 23, 2023`,
            show_studios: `Wit Studio, Clover Works`,
            show_country: `Japan`,
            show_foreground: `/library/spy-x-family/img/1.jpg`,
            show_background: `/library/spy-x-family/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `PG13`,
            show_scores: `8.3`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/JP6vBnazpWI?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/WFVY88Urzuc?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/75LyKY6AV4U?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/EpUAso8ITVw?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 25,},
                {show_ep: 12,},
            ],
            show_description: 
            `
                Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.
                </br></br>
                In the bustling Ostanian city of Berlint, Twilight dons the alias of "Loid Forger," an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion.
                </br></br>
                Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as "Thorn Princess"—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.
            `,
            show_searchKey: `SpyxFamily Spy X Family anime`,
        },
        {
            show_link: `#/info/spy-x-family-code-white`,
            show_thumbnail: `/library/spy-x-family-code-white/img/0.jpg`,
            show_title: `SpyxFamily: Code White`,
            show_type: `Movie`,
            show_airing_status: `Finished Airing`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Comedy`, 
            show_theme: `Childcare, superpower`,
            show_year: `2023`,
            show_aired: `Dec 22, 2023`,
            show_studios: `Wit Studios, Clover Works`,
            show_country: `Japan`,
            show_foreground: `/library/spy-x-family-code-white/img/1.jpg`,
            show_background: `/library/spy-x-family-code-white/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.1`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/EpUAso8ITVw?enablejsapi=1&wmode=opaque&autoplay=1`}
            ],
            show_description: 
            `
                Loid Forger, an elite spy, is warned by his handler that he may potentially be reassigned from his ongoing mission, Operation Strix. To maintain his position, he must make significant progress toward the operation's objectives, which involves having his adoptive daughter Anya earn sufficient Stella Stars to become an Imperial Scholar at Eden Academy.
                </br></br>
                After learning of a cooking contest that awards the winning student with a Stella Star, Loid researches the judge's preferred dessert to help increase Anya's odds. However, perfectly recreating the judge's favorite meremere requires more than just following a recipe. Thus, the Forgers embark on a vacation to the Frigis region to try an authentic meremere. Not all goes smoothly on the trip, as the Forger family ends up entwined in a sinister plot to reignite war between the countries of Ostania and Westalis.`,
            show_searchKey: `SpyxFamily: Code White Spy x Family Movie: Code: White anime`,
        },
        {
            show_link: `#/info/rent-a-girlfriend`,
            show_thumbnail: `/library/rent-a-girlfriend/img/0.jpg`,
            show_title: `Rent a Girlfriend`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Comedy, Romance`,
            show_theme: `Adult Cast, Harem`,
            show_year: `2020`,
            show_aired: ` Jul 11, 2020 to Sep 30, 2023`,
            show_studios: `TMS Entertainment`,
            show_country: `Japan`,
            show_foreground: `/library/rent-a-girlfriend/img/1.jpg`,
            show_background: `/library/rent-a-girlfriend/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.0`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/uIfxrlJg0Jw?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/EwbHVNLPM4g?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/-jZWHwztqlk?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 12,}, 
                {show_ep: 12,}, 
                {show_ep: 12,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                Kazuya Kinoshita is a 20-year-old college student who has a wonderful girlfriend: the bright and sunny Mami Nanami. But suddenly, he doesn't. Without warning, Mami breaks up with him, leaving him utterly heartbroken and lonely. Seeking to soothe the pain, he hires a rental girlfriend through an online app. His partner is Chizuru Mizuhara, who through her unparalleled beauty and cute demeanor, manages to gain Kazuya's affection.
                </br></br>
                But after reading similar experiences other customers had had with Chizuru, Kazuya believes her warm smile and caring personality were all just an act to toy with his heart, and he rates her poorly. Aggravated, Chizuru lambastes him for his shameless hypocrisy, revealing her true pert and hot-tempered self. This one-sided exchange is cut short, however, when Kazuya finds out that his grandmother has collapsed.
                </br></br>
                They dash toward the hospital and find Kazuya's grandmother already in good condition. Baffled by Chizuru's presence, she asks who this girl might be. On impulse, Kazuya promptly declares that they are lovers, forcing Chizuru to play the part. But with Kazuya still hung up on his previous relationship with Mami, how long can this difficult client and reluctant rental girlfriend keep up their act?
            `,
            show_searchKey: `Rent a Girlfriend Kanojo Okarishimasu anime`,
        },
        {
            show_link: `#/info/tokyo-ghoul`,
            show_thumbnail: `/library/tokyo-ghoul/img/0.jpg`,
            show_title: `Tokyo Ghoul`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Fantasy, Horror, Suspense`,
            show_theme: `Gore, Pyschological`,
            show_year: `2014`,
            show_aired: `Jul 4, 2014 to Sep 19, 2014`,
            show_studios: `Pierrot`,
            show_country: `Japan`,
            show_foreground: `/library/tokyo-ghoul/img/1.jpg`,
            show_background: `/library/tokyo-ghoul/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `7.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/vGuQeQsoRgU?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 12,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                A sinister threat is invading Tokyo: flesh-eating "ghouls" who appear identical to humans and blend into their population. Reserved college student Ken Kaneki buries his nose in books and avoids the news of the growing crisis. However, the appearance of an attractive woman named Rize Kamishiro shatters his solitude when she forwardly asks him on a date.
                </br></br>
                While walking Rize home, Kaneki discovers she isn't as kind as she first appeared, and she has led him on with sinister intent. After a tragic struggle, he later awakens in a hospital to learn his life was saved by transplanting the now deceased Rize's organs into his own body.
                </br></br>
                Kaneki's body begins to change in horrifying ways, and he transforms into a human-ghoul hybrid. As he embarks on his new dreadful journey, Kaneki clings to his humanity in the evolving bloody conflict between society's new monsters and the government agents who hunt them.
            `,
            show_searchKey: `Tokyo Ghoul Tokyo Guru anime`,
        },
        {
            show_link: `#/info/inazuma-eleven`,
            show_thumbnail: `/library/inazuma-eleven/img/0.jpg`,
            show_title: `Inazuma Eleven`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Sports`,
            show_theme: `Super Power, Team Sports`,
            show_year: `2008`,
            show_aired: `Oct 5, 2008 to Apr 27, 2011`,
            show_studios: `OLM`,
            show_country: `Japan`,
            show_foreground: `/library/inazuma-eleven/img/1.jpg`,
            show_background: `/library/inazuma-eleven/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.7`,
            show_trailers: 
            [
                {show_trl: `N/A`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 127,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 127,},
            ],
            show_description: 
            `
                While other schools in Japan compete for the title of being the best soccer team in the country, Raimon Middle School's soccer club, Inazuma Eleven, struggles to rise from the verge of being disbanded. The grandson of Inazuma Eleven's first generation goalkeeper and captain of the team, Mamoru Endou, takes the challenge of kicking the long neglected club back into shape. To do this, he'll need a little help and more than a little luck.
                </br></br>
                Mamoru Endou finds hope in the hands of Shuuya Gouenji, a brilliant young player who has given up on soccer. Mamoru is determined to get Shuuya and other new recruits to join his team, no matter what the cost. Is his passion and determination enough to treat the ailing club? Or is there no more hope for the team?
            `,
            show_searchKey: `Inazuma Eleven Inazuma Irebun anime`,
        },
        {
            show_link: `#/info/aoashi`,
            show_thumbnail: `/library/aoashi/img/0.jpg`,
            show_title: `Aoashi`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Sports`,
            show_theme: `Team Sports`,
            show_year: `2022`,
            show_aired: `Apr 9, 2022 to Sep 24, 2022`,
            show_studios: `Production I.G`,
            show_country: `Japanese`,
            show_foreground: `/library/aoashi/img/1.jpg`,
            show_background: `/library/aoashi/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.2`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/PQbCVl_CDzI?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 24,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,},
            ],
            show_description: 
            `
                In a quiet rural town, the spotlight of a local junior high school football team rests on one player: Ashito Aoi. Known for his unpredictable moves and self-centered playing style, Ashito is the sole powerhouse pushing his team through an important high school preliminary tournament. However, their win streak is short-lived—an opponent causes Ashito to lose his temper and act violently, resulting in his removal from the rest of the game.
                </br></br>
                Without their star player, the team is quickly eliminated from the tournament. Just as he believes all hope is lost, Ashito is approached by a youth team coach named Tatsuya Fukuda who senses potential in him, and Fukuda invites him for tryouts in Tokyo. In an unfamiliar setting surrounded by talent, Ashito must bring out the best of his ability to prove himself and secure what could be a life-changing career.
            `,
            show_searchKey: `Aoashi anime`,
        },
        {
            show_link: `#/info/cyberpunk-edgerunners`,
            show_thumbnail: `/library/cyberpunk-edgerunners/img/0.jpg`,
            show_title: `Cyberpunk Edgerunners`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Sci-fi`,
            show_theme: `Gore, Organized Crime`,
            show_year: `2022`,
            show_aired: `Sep 13, 2022`,
            show_studios: `Trigger`,
            show_country: `Japan`,
            show_foreground: `/library/cyberpunk-edgerunners/img/1.jpg`,
            show_background: `/library/cyberpunk-edgerunners/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R+`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/JtqIas3bYhg?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 10,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 10,},
            ],
            show_description: 
            `
                Dreams are doomed to die in Night City, a futuristic Californian metropolis. As a teenager living in the city's slums, David Martinez is trying to fulfill his mother's lifelong wish for him to reach the top of Arasaka, the world's leading security corporation. To this end, he attends the prestigious Arasaka Academy while his mother works tirelessly to keep their family afloat.
                </br></br>
                When an incident with a street gang leaves David's life in tatters, he stumbles upon Sandevistan cyberware—a prosthetic that grants its wearer superhuman speed. Fueled by rage, David implants the device in his back, using it to exact revenge on one of his tormentors. This gets him expelled from the academy, shattering his hopes of ever making his mother proud.
                </br></br>
                After witnessing David's newfound abilities, the beautiful data thief Lucyna "Lucy" Kushinada offers to team up with him, handing him a ticket to salvation. However, associating with Lucy introduces David to the world of Edgerunners—cyborg criminals who will break any law for money. Edgerunners often lose their lives, if the cyberware does not break their minds first; but in his fight for survival inside a corrupt system, David is ready to risk it all.
            `,
            show_searchKey: `Cyberpunk CyberpunkEdgerunners Saibapanku Edjirannazu anime`,
        },
        {
            show_link: `#/info/tomodachi-game`,
            show_thumbnail: `/library/tomodachi-game/img/0.jpg`,
            show_title: `Tomodachi Game`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Suspense`,
            show_theme: `High Stakes game, Pyschological, strategy game`,
            show_year: `2022`,
            show_aired: `Apr 6, 2022 to Jun 22, 2022`,
            show_studios: `Okuruto Noboru`,
            show_country: `Japan`,
            show_foreground: `/library/tomodachi-game/img/1.jpg`,
            show_background: `/library/tomodachi-game/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `7.7`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/eP2FlJtfwL8?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 12,}
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                High school student Yuuichi Katagiri cherishes his close circle of friends, composed of four classmates: Yutori Kokorogi, Shiho Sawaragi, Makoto Shibe, and Tenji Mikasa. However, when the funds for the upcoming school trip are stolen, the incident causes Shiho and Makoto—who had been tasked with collecting the money—to distance themselves from the rest of their class.
                </br></br>
                Soon after, Yuuichi and his friends are deceived into meeting up and knocked unconscious by unknown assailants. After waking, the group find themselves confined in a white room with controversial figure Manabu-kun, who reveals that one of the five has gathered them together to clear their personal debt of twenty million yen. To pay off the amount, they must participate in a variety of psychological games that will test the true nature of their friendship and humanity.
                </br></br>
                Distressed and isolated from the outside world, Yuuichi and his friends need to cooperate to complete the games. But as their concealed feelings and problematic pasts begin to surface, their seemingly unbreakable bond may soon shatter into irreparable pieces.
            `,
            show_searchKey: `Tomodachi Game Tomodachi Gemu anime`,
        },
        {
            show_link: `#/info/kaguya-sama`,
            show_thumbnail: `/library/kaguya-sama/img/0.jpg`,
            show_title: `Kaguya-Sama`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Comedy`,
            show_theme: `Psychological, School, Romance`,
            show_year: `2019`,
            show_aired: `Jan 12, 2019 to Jun 25, 2022`,
            show_studios: `A-1 Pictures`,
            show_country: `Japan`,
            show_foreground: `/library/kaguya-sama/img/1.jpg`,
            show_background: `/library/kaguya-sama/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.7`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/Ti2kJ-GYO68?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/_NkxM_uLUpw?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/vFN5K-iAyV0?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/8Zy8-00-Pls?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `The First Kiss That Never Ends`},
            ],
            show_episodes: 
            [
                {show_ep: 12,}, 
                {show_ep: 12,}, 
                {show_ep: 13,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 13,}, 
                {show_wtp: `movie`, show_wep: `The First Kiss That Never Ends`,},
            ],
            show_description: 
            `
                At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president. Alongside him, the vice president Kaguya—eldest daughter of the wealthy Shinomiya family—excels in every field imaginable. They are the envy of the entire student body, regarded as the perfect couple.
                </br></br>
                However, despite both having already developed feelings for the other, neither are willing to admit them. The first to confess loses, will be looked down upon, and will be considered the lesser. With their honor and pride at stake, Miyuki and Kaguya are both equally determined to be the one to emerge victorious on the battlefield of love!
            `,
            show_searchKey: `Kaguya-sama wa Kokurasetai Kaguya sama wa Kokurasetai Love is War anime`,
        },
        {
            show_link: `#/info/kakegurui`,
            show_thumbnail: `/library/kakegurui/img/0.jpg`,
            show_title: `Kakegurui`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Drama, Mystery, Suspense`,
            show_theme: `High Stakes Game, Strategy Game, Psychological, School`,
            show_year: `2017`,
            show_aired: ` Jul 1, 2017 to Mar 27, 2019`,
            show_studios: `MAPPA`,
            show_country: `Japan`,
            show_foreground: `/library/kakegurui/img/1.jpg`,
            show_background: `/library/kakegurui/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `7.2`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/v2xJDuM9ZDM?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/8fCIcho7N4k?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 12,}, 
                {show_ep: 12,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                Unlike many schools, attending Hyakkaou Private Academy prepares students for their time in the real world. Since many of the students are the children of the richest people in the world, the academy has its quirks that separate it from all the others. By day, it is a normal school, educating its pupils in history, languages, and the like. But at night, it turns into a gambling den, educating them in the art of dealing with money and manipulating people. Money is power; those who come out on top in the games stand at the top of the school.
                </br></br>
                As Yumeko Jabami's fame grows and the reputation of the student council dwindles, Kirari Momobami decides to revolutionize the group. To this end, she announces an election for its next president. The rules are simple: each student in the school receives one chip. Whoever has the most chips by the end of thirty days becomes both the new president and the head of the Momobami clan.
            `,
            show_searchKey: `Kakegure Kakegurui anime`,
        },
        {
            show_link: `#/info/that-time-i-got-reincarnated-as-a-slime`,
            show_thumbnail: `/library/that-time-i-got-reincarnated-as-a-slime/img/0.jpg`,
            show_title: `That Time I got Reincarnated as a Slime`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Comedy, Fantasy`,
            show_theme: `Isekai, Reincarnation`,
            show_year: `2018`,
            show_aired: `Oct 2, 2018 to ?`,
            show_studios: `8bit`,
            show_country: `Japan`,
            show_foreground: `/library/that-time-i-got-reincarnated-as-a-slime/img/1.jpg`,
            show_background: `/library/that-time-i-got-reincarnated-as-a-slime/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.1`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/thBFBgjcgt4?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/Lk3fJsIOnKw?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/nJEGXG_vXbo?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/kM2m7GcF6W0?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `Guren no Kizuna hen`},
            ],
            show_episodes: 
            [
                {show_ep: 24,}, 
                {show_ep: 12,}, 
                {show_ep: 12,}, 
                {show_ep: 24,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,}, 
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `tv`, show_wep: 12,}, 
                {show_wtp: `movie`, show_wep: `Guren no Kizuna hen`,}, 
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.
                </br></br>
                When Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities. He then stumbles upon the sealed Catastrophe-level monster "Storm Dragon" Veldora who had been sealed away for the past 300 years for devastating a town to ashes. Sympathetic to his predicament, Satoru befriends him, promising to assist in destroying the seal. In return, Veldora bestows upon him the name Rimuru Tempest to grant him divine protection.
                </br></br>
                Now, liberated from the mundanities of his past life, Rimuru embarks on a fresh journey with a distinct goal in mind. As he grows accustomed to his new physique, his gooey antics ripple throughout the world, gradually altering his fate.
            `,
            show_searchKey: `That Time I Got Reincarnated as a Slime That I recently got Reincarnated as a Slime Tensei Shitara Suraimu Datta Ken anime`,
        },
        {
            show_link: `#/info/rising-of-the-shield-hero`,
            show_thumbnail: `/library/rising-of-the-shield-hero/img/0.jpg`,
            show_title: `Rising of the Shield hero`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Drama, Fantasy`,
            show_theme: `Isekai`,
            show_year: `2022`,
            show_aired: `Apr 6, 2022 to Dec 2023`,
            show_studios: `Kinema Citrus, DR Movie`,
            show_country: `Japan`,
            show_foreground: `/library/rising-of-the-shield-hero/img/1.jpg`,
            show_background: `/library/rising-of-the-shield-hero/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.2`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/h3n-chI028E?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/TA4OjH-RSeA?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/VW_LxM4tt-o?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 25,}, 
                {show_ep: 13,}, 
                {show_ep: 12,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `tv`, show_wep: 13,}, 
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the "Shield Hero." Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality
                </br></br>
                When the heroes are provided with resources and comrades to train with, Naofumi sets out with the only person willing to train alongside him, Malty Melromarc. He is soon betrayed by her, however, and becomes falsely accused of taking advantage of her. Naofumi then becomes heavily discriminated against and hated by the people of Melromarc for something he didn't do. With a raging storm of hurt and mistrust in his heart, Naofumi begins his journey of strengthening himself and his reputation. Further along however, the difficulty of being on his own sets in, so Naofumi buys a demi-human slave on the verge of death named Raphtalia to accompany him on his travels.
                </br></br>
                As the Waves approach the kingdom, Naofumi and Raphtalia must fight for the survival of the kingdom and protect the people of Melromarc from their ill-fated future.
            `,
            show_searchKey: `Tate no Yūsha no Nariagari Rising of the Shield anime`,
        },
        {
            show_link: `#/info/violet-evergarden`,
            show_thumbnail: `/library/violet-evergarden/img/0.jpg`,
            show_title: `Violet Evergarden`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English, Spanish, French, Japanese`,
            show_genre: `Anime, Drama, Fantasy`,
            show_theme: `Historical`,
            show_year: `2018`,
            show_aired: `Jan 11, 2018 to Apr 5, 2018`,
            show_studios: `Kyoto Animation`,
            show_country: `Japanese`,
            show_foreground: `/library/violet-evergarden/img/1.jpg`,
            show_background: `/library/violet-evergarden/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `PG13`,
            show_scores: `8.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/g5xWqjFglsk?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/NSIzsFOfd8M?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `Violet Evergarden: The Movie`,},
            ],
            show_episodes: 
            [
                {show_ep: 13,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 13,}, 
                {show_wtp: `movie`, show_wep: `Violet Evergarden: The Movie`,},
            ],
            show_description: 
            `
                The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.
                </br></br>
                Recovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an "Auto Memory Doll," amanuenses that transcribe people's thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memory Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery..
                <br></br>
                The Violet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, "I love you," may still be alive even after the many years that have passed.
            `,
            show_searchKey: `Vaioretto Evagaden Violet Evergarden anime`,
        },
        {
            show_link: `#/info/your-lie-in-april`,
            show_thumbnail: `/library/your-lie-in-april/img/0.jpg`,
            show_title: `Your lie in April`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Drama, Romance`,
            show_theme: `Love polygon, Music, School`,
            show_year: `2014`,
            show_aired: `Oct 10, 2014 to Mar 20, 2015`,
            show_studios: `A-1 Pictures`,
            show_country: `Japan`,
            show_foreground: `/library/your-lie-in-april/img/1.jpg`,
            show_background: `/library/your-lie-in-april/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `PG13`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/Sk39zsayK_0?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 22,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 22,},
            ],
            show_description: 
            `
                Kousei Arima is a child prodigy known as the "Human Metronome" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.
                </br></br>
                Nowadays, Kousei lives a quiet and unassuming life as a junior high school student alongside his friends Tsubaki Sawabe and Ryouta Watari. While struggling to get over his mother's death, he continues to cling to music. His monochrome life turns upside down the day he encounters the eccentric violinist Kaori Miyazono, who thrusts him back into the spotlight as her accompanist. Through a little lie, these two young musicians grow closer together as Kaori tries to fill Kousei's world with color.
            `,
            show_searchKey: `Shigatsu wa Kimi no Uso Your lie in April anime`,
        },
        {
            show_link: `#/info/kuroko-no-basket`,
            show_thumbnail: `/library/kuroko-no-basket/img/0.jpg`,
            show_title: `Kuroko no Basket`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Sports`,
            show_theme: `School, Team Sports`,
            show_year: `2012`,
            show_aired: `Apr 8, 2012 to June 30, 2015`,
            show_studios: `Production I.G`,
            show_country: `Japan`,
            show_foreground: `/library/kuroko-no-basket/img/1.jpg`,
            show_background: `/library/kuroko-no-basket/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.2`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/FTUIs_SuQfw?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/11ROABkyews?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/H1TvpW04Oxs?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/mRxq1kA2cwU?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/4cVnQsy4YBk?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/sO_40NQ4Kus?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/LpJ3LY1ZIoE?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `Shadow and Light`,}, 
                {show_mov: `Beyond The Tears`,}, 
                {show_mov: `Crossing The Door`,}, 
                {show_mov: `Last Game`,},
            ],
            show_episodes: 
            [
                {show_ep: 25,}, 
                {show_ep: 25,}, 
                {show_ep: 25,}, 
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `tv`, show_wep: 25,},
                {show_wtp: `movie`, show_wep: `Shadow and Light`,}, 
                {show_wtp: `movie`, show_wep: `Beyond The Tears`,}, 
                {show_wtp: `movie`, show_wep: `Crossing The Door`,}, 
                {show_wtp: `movie`, show_wep: `Last Game`,},
            ],
            show_description: 
            `
                For the last three years, Teikou Middle School has dominated the national basketball scene with its legendary lineup: the "Generation of Miracles." It consisted of five prodigies who excelled at the sport, but a "Phantom Sixth Man" lurked in the shadows and helped earn the team their revered status. Eventually, their monstrous growth jaded them from the sport they loved and made them go their separate ways in high school.
                </br></br>
                In search of new members, the Seirin High School basketball team recruits Taiga Kagami and Tetsuya Kuroko, two freshmen who seem to have significant differences in abilities. Having returned recently from America, Kagami has both a natural aptitude and relentless love for the sport. Meanwhile, Kuroko lacks presence and exhibits no outstanding athletic talent. However, it is later revealed that he is Teikou's Phantom Sixth Man—the player once part of the Generation of Miracles.
                </br></br>
                Kuroko wants to prove to the Seirin team that he is strong in his own way. Seeing his conviction, Kagami forms a dynamic partnership with Kuroko, the latter promising to support Kagami's "light" as his "shadow." Alongside their new Seirin teammates, they aim to conquer the upcoming Interhigh championship, but the reappearance of Kuroko's former teammates complicates their plan.
            `,
            show_searchKey: `Kunoku no Basket Kuroko no Basuke anime`,
        },
        {
            show_link: `#/info/enen-no-shouboutai`,
            show_thumbnail: `/library/enen-no-shouboutai/img/0.jpg`,
            show_title: `Enen no Shouboutai`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, fantasy, Sci-fi`,
            show_theme: `Super Power`,
            show_year: `2019`,
            show_aired: `Jul 6, 2019 to Dec 12, 2020`,
            show_studios: `David Production`,
            show_country: `Japan`,
            show_foreground: `/library/enen-no-shouboutai/img/1.jpg`,
            show_background: `/library/enen-no-shouboutai/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/iUqX-IQ3t-U?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/NpDvoopi0AE?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 24,}, 
                {show_ep: 24,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,}, 
                {show_wtp: `tv`, show_wep: 24,},
            ],
            show_description: 
            `
                Spontaneous Human Combustion: a chaotic phenomenon that has plagued humanity for years, randomly transforming ordinary people into flaming, violent creatures known as Infernals. While Infernals make up the first-generation accounts of Human Combustion, the second and third generations became known as pyrokinetics—people gifted with the ability to manipulate and control their flames while remaining human. To combat the Infernal threat and discover the cause, the Tokyo Armed Forces, Fire Defense Agency, and Holy Church of Sol produced their answer: the Special Fire Force.
                </br></br>
                Young and eager third-generation pyrokinetic Shinra Kusakabe, nicknamed Devil's Footprints for his explosive ability to ignite his feet at will, becomes a member of the lively Special Fire Force Company 8. Upholding the brigade's duty to extinguish the blazing Infernals and lay their souls to rest, Shinra is determined to become a hero who will save the lives of those threatened by the flame terror.
                </br></br>
                However, this is not the hero's game Shinra imagined. The Fire Force is a fractured mess of feuding brigades, abnormal Infernal sightings are increasing all over Tokyo, and a shadowy group is claiming to have answers to the strange fire that caused the death of Shinra's family 12 years ago. Faced with many obstacles within and outside the Fire Force, Shinra fights to uncover the truth behind the burning mysteries that have kept him in the dark.
            `,
            show_searchKey: `Enen no Shouboutai Fireforce Fire force no Basuke anime`,
        },
        {
            show_link: `#/info/vinland-saga`,
            show_thumbnail: `/library/vinland-saga/img/0.jpg`,
            show_title: `Vinland Saga`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Drama`,
            show_theme: `Gore, Historical`,
            show_year: `2019`,
            show_aired: `Jul 8, 2019 to June 20, 2023`,
            show_studios: `Wit Studio`,
            show_country: `Japan`,
            show_foreground: `/library/vinland-saga/img/1.jpg`,
            show_background: `/library/vinland-saga/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `8.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/f8JrZ7Q_p-8?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/jBetoIlnDIM?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 24,}, 
                {show_ep: 24,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,}, 
                {show_wtp: `tv`, show_wep: 24,},
            ],
            show_description: 
            `
                Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, "You have no enemies, nobody does. There is nobody who it's okay to hurt," as he grew, Thorfinn knew that nothing was further from the truth.
                </br></br>
                The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.
            `,
            show_searchKey: `Vinland Saga Vinrando Saga anime`,
        },
        {
            show_link: `#/info/tokyo-revengers`,
            show_thumbnail: `/library/tokyo-revengers/img/0.jpg`,
            show_title: `Tokyo Revengers`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Drama, Supernatural`,
            show_theme: `Deliquents, Time Travel`,
            show_year: `2021`,
            show_aired: `Apr 11, 2021 to Dec 27, 2023`,
            show_studios: `LIDENFILMS`,
            show_country: `Japan`,
            show_foreground: `/library/tokyo-revengers/img/1.jpg`,
            show_background: `/library/tokyo-revengers/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `7.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/r9M34VgTfzY?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/hfj7HaTbMSQ?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/OTlNyYfkM1s?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 24,}, 
                {show_ep: 13,}, 
                {show_ep: 13,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 24,}, 
                {show_wtp: `tv`, show_wep: 13,}, 
                {show_wtp: `tv`, show_wep: 13,},
            ],
            show_description: 
            `
                Takemichi Hanagaki's second year of middle school was the highest point in his life. He had respect, a gang of friends he could count on, and even a girlfriend. But that was twelve years ago. Today, he's a nobody: a washed-up nonentity made fun of by children and always forced to apologize to his younger boss. A sudden news report on the Tokyo Manji Gang's cruel murder of the only girlfriend he ever had alongside her brother only adds insult to injury. Half a second before a train ends his pitiful life for good, Takemichi flashes back to that same day 12 years ago, when he was still dating Hinata Tachibana.
                </br></br>
                After being forced to relive the very same day that began his downward spiral, Takemichi meets Hinata's younger brother. Without thinking, he admits to his seeming death before flashing back to the past. Takemichi urges him to protect his sister before inexplicably returning to the future. Miraculously, he is not dead. Stranger still, the future has changed. It seems as though Takemichi can alter the flow of time. Given the chance to prevent his ex-girlfriend's tragic death at the hands of the Tokyo Manji Gang, Takemichi decides to fly through time to change the course of the future.
            `,
            show_searchKey: `Tokyo Revengers Tōkyō Ribenjāzu Tokyo Ribenjazu anime`,
        },
        {
            show_link: `#/info/my-hero-academia`,
            show_thumbnail: `/library/my-hero-academia/img/0.jpg`,
            show_title: `My Hero Academia`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action`,
            show_theme: `School, Super power`,
            show_year: `2016`,
            show_aired: `Apr 3, 2016 to Sep 25, 2021`,
            show_studios: `Bones`,
            show_country: `Japan`,
            show_foreground: `/library/my-hero-academia/img/1.jpg`,
            show_background: `/library/my-hero-academia/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/D5fYOnwYkj4?enablejsapi=1&wmode=opaque&autoplay=1`}, 
                {show_trl: `https://www.youtube.com/embed/HoIOW6no_Ew?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/wMCeFIPwrHE?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/5VQwDC5jqzQ?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/kkmW-tppFPM?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `My Hero Academia the Movie 1`}, 
                {show_mov: `My Hero Academia the Movie 2`},
            ],
            show_episodes: 
            [
                {show_ep: 13,}, 
                {show_ep: 25,}, 
                {show_ep: 25,}, 
                {show_ep: 25,}, 
                {show_ep: 25,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 13,}, 
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `movie`, show_wep: `My Hero Academia the Movie 1`,}, 
                {show_wtp: `tv`, show_wep: 25,}, 
                {show_wtp: `movie`, show_wep: `My Hero Academia the Movie 2`,}, 
                {show_wtp: `tv`, show_wep: 25,},
            ],
            show_description: 
            `
                The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.
                </br></br>
                Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!
                </br></br>
                Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.
            `,
            show_searchKey: `mha My Hero Academia Boku no Hīrō Akademia Boku no Hiro Akademia anime`,
        },
        {
            show_link: `#/info/cowboy-bebop`,
            show_thumbnail: `/library/cowboy-bebop/img/0.jpg`,
            show_title: `Cowboy Bebop`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Award Wining, Sci-fi`,
            show_theme: `Adult Cast, Sapce`,
            show_year: `1998`,
            show_aired: `Apr 3, 1998 to Apr 24, 1999`,
            show_studios: `Sunrise`,
            show_country: `Japan`,
            show_foreground: `/library/cowboy-bebop/img/1.jpg`,
            show_background: `/library/cowboy-bebop/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/gY5nDXOtv_o?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `Tengoku no Tobira`},
            ],
            show_episodes: 
            [
                {show_ep: 26,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 26,}, 
                {show_wtp: `movie`, show_wep: `Tengoku no Tobira`,}, 
            ],
            show_description: 
            `
                Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.
                </br></br>
                Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.
                </br></br>
                While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.
            `,
            show_searchKey: `Cowboy Bebop Kaubōi Bibappu Kauboi Bibappu anime`,
        },
        {
            show_link: `#/info/death-note`,
            show_thumbnail: `/library/death-note/img/0.jpg`,
            show_title: `Death Note`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Supernatural, Suspense`,
            show_theme: `Psychological`,
            show_year: `2006`,
            show_aired: `Oct 4, 2006 to Jun 27, 2007`,
            show_studios: `MadHouse`,
            show_country: `Japan`,
            show_foreground: `/library/death-note/img/1.jpg`,
            show_background: `/library/death-note/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/Vt_3c8BgxV4?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 37,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 37,},
            ],
            show_description: 
            `
                Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.
                </br></br>
                For his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.
                </br></br>
                Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias Kira—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.
            `,
            show_searchKey: `Death Note anime`,
        },
        {
            show_link: `#/info/one-piece`,
            show_thumbnail: `/library/one-piece/img/0.jpg`,
            show_title: `One Piece`,
            show_type: `TV`,
            show_airing_status: `Releasing`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Fantasy`,
            show_theme: `Historical`,
            show_year: `1999`,
            show_aired: `Oct 20, 1999 to ?`,
            show_studios: `Toei Animation`,
            show_country: `Japan`,
            show_foreground: `/library/one-piece/img/1.jpg`,
            show_background: `/library/one-piece/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.7`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/-tviZNY6CSw?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/eEApDotghec?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/wwumv_IcxJo?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/K65OpdS3Hsk?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/I4oOj_6kGYc?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/1v66USnVnPs?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/NVt5Gsy9VKU?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/P7soCjGOP14?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/tE6lEcnyJEE?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/OAlfN-VbGJI?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/y_gLPn5YtmM?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/1gGt1Mg_zSo?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/_shEgcWHC2U?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/_VI_72j_ErI?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/r0FvP_Ui-xY?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `One Piece Movie 1`}, 
                {show_mov: `One Piece Movie 2`}, 
                {show_mov: `One Piece Movie 3`}, 
                {show_mov: `One Piece Movie 4`}, 
                {show_mov: `One Piece Movie 5`}, 
                {show_mov: `One Piece Movie 6`}, 
                {show_mov: `One Piece Movie 7`}, 
                {show_mov: `One Piece Movie 8`},
                {show_mov: `One Piece Movie 9`}, 
                {show_mov: `One Piece Movie 10`}, 
                {show_mov: `One Piece Movie 11`}, 
                {show_mov: `One Piece Movie 12`}, 
                {show_mov: `One Piece Movie 13`}, 
                {show_mov: `One Piece Movie 14`}, 
                {show_mov: `One Piece Movie 15`},
            ],
            show_episodes: 
            [
                {show_ep: 1125,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 1125,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 1`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 2`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 3`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 4`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 5`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 6`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 7`,},
                {show_wtp: `movie`, show_wep: `One Piece Movie 8`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 9`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 10`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 11`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 12`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 13`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 14`,}, 
                {show_wtp: `movie`, show_wep: `One Piece Movie 15`,},
            ],
            show_description: 
            `
                Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.
                </br></br>
                The late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.
                </br></br>
                As he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.
            `,
            show_searchKey: `One Piece anime`,
        },
        {
            show_link: `#/info/one-punch-man`,
            show_thumbnail: `/library/one-punch-man/img/0.jpg`,
            show_title: `One Punch Man`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Comedy`,
            show_theme: `Adult Cast, Parody, Super Power`,
            show_year: `2015`,
            show_aired: `Oct 5, 2015 to Jul 3, 2019`,
            show_studios: `J.C.Staff`,
            show_country: `Japanese`,
            show_foreground: `/library/one-punch-man/img/1.jpg`,
            show_background: `/library/one-punch-man/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `8.0`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/6Bdb1V0Io_g?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 12,}, 
                {show_ep: 12,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,},
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.
                </br></br>
                One day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.
            `,
            show_searchKey: `One Punch man Wanpanman anime`,
        },
        {
            show_link: `#/info/hunter-x-hunter`,
            show_thumbnail: `/library/hunter-x-hunter/img/0.jpg`,
            show_title: `Hunter X Hunter`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Fantasy`,
            show_theme: `N/A`,
            show_year: `2011`,
            show_aired: `Oct 16, 2011 to Sep 24, 2014`,
            show_studios: `Madhouse`,
            show_country: `Japanese`,
            show_foreground: `/library/hunter-x-hunter/img/1.jpg`,
            show_background: `/library/hunter-x-hunter/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `9.0`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/D9iTQRB4XRk?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: [{show_ep: 148,}],
            show_description: 
            `
                Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.
                </br></br>
                Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.
                </br></br>
                During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.
            `,
            show_searchKey: `Hunter X Hunter anime`,
        },
        {
            show_link: `#/info/steins-gate`,
            show_thumbnail: `/library/steins-gate/img/0.jpg`,
            show_title: `Steins Gate`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/steins-gate/img/1.jpg`,
            show_background: `/library/steins-gate/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Steins Gate anime`,
        },
        {
            show_link: `#/info/dragon-ball-z`,
            show_thumbnail: `/library/dragon-ball-z/img/0.jpg`,
            show_title: `Dragon ball Z`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/dragon-ball-z/img/1.jpg`,
            show_background: `/library/dragon-ball-z/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Dragon ball Z anime`,
        },
        {
            show_link: `#/info/bleach`,
            show_thumbnail: `/library/bleach/img/0.jpg`,
            show_title: `Bleach`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/bleach/img/1.jpg`,
            show_background: `/library/bleach/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Bleach anime`,
        },
        {
            show_link: `#/info/akame-ga-Kill`,
            show_thumbnail: `/library/akame-ga-Kill/img/0.jpg`,
            show_title: `Akame ga Kill!`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/akame-ga-Kill/img/1.jpg`,
            show_background: `/library/akame-ga-Kill/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Akame ga Kill! Akame ga Kiru! anime`,
        },
        {
            show_link: `#/info/sword-art-online`,
            show_thumbnail: `/library/sword-art-online/img/0.jpg`,
            show_title: `Sword Art Online`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/sword-art-online/img/1.jpg`,
            show_background: `/library/sword-art-online/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Sword Art Online Sōdo Āto Onrain Sodo Ato Onrain anime`,
        },
        {
            show_link: `#/info/bongou-stray-dogs`,
            show_thumbnail: `/library/bongou-stray-dogs/img/0.jpg`,
            show_title: `Bongou Stray Dogs`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/bongou-stray-dogs/img/1.jpg`,
            show_background: `/library/bongou-stray-dogs/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Bongou Stray Dogs Bungu Stray Dogs Bongu Stray Dogs Bungou Stray Dogs anime`,
        },
        {
            show_link: `#/info/mob-psycho`,
            show_thumbnail: `/library/mob-psycho/img/0.jpg`,
            show_title: `Mob Psycho`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/mob-psycho/img/1.jpg`,
            show_background: `/library/mob-psycho/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Mob Psycho Mobu Saiko Hyaku anime`,
        },
        {
            show_link: `#/info/samurai-champloo`,
            show_thumbnail: `/library/samurai-champloo/img/0.jpg`,
            show_title: `Samurai Champloo`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/samurai-champloo/img/1.jpg`,
            show_background: `/library/samurai-champloo/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Samurai Champloo anime`,
        },
        {
            show_link: `#/info/hell-sing`,
            show_thumbnail: `/library/hell-sing/img/0.jpg`,
            show_title: `HellSing`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/hell-sing/img/1.jpg`,
            show_background: `/library/hell-sing/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `HellSing Hell Sing anime`,
        },
        {
            show_link: `#/info/black-lagoon`,
            show_thumbnail: `/library/black-lagoon/img/0.jpg`,
            show_title: `Black Lagoon`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/black-lagoon/img/1.jpg`,
            show_background: `/library/black-lagoon/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Black Lagoon BlackLagoon anime`,
        },
        {
            show_link: `#/info/future-diary`,
            show_thumbnail: `/library/future-diary/img/0.jpg`,
            show_title: `Future Diary`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/future-diary/img/1.jpg`,
            show_background: `/library/future-diary/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Future Diary anime`,
        },
        {
            show_link: `#/info/another`,
            show_thumbnail: `/library/another/img/0.jpg`,
            show_title: `Another`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Horror, Mystery, Supernatural`,
            show_theme: `Gore, School`,
            show_year: `2012`,
            show_aired: `Jan 10, 2012 to Mar 27, 2012`,
            show_studios: `P.A. Works`,
            show_country: `Japan`,
            show_foreground: `/library/another/img/1.jpg`,
            show_background: `/library/another/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `7.5`,
            show_trailers: [{show_trl: `https://www.youtube.com/embed/UGoAl3L13bc?enablejsapi=1&wmode=opaque&autoplay=1`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: 12,}],
            show_watch: [{show_wtp: `tv`, show_wep: 12,},],
            show_description: `In class 3-3 of Yomiyama North Junior High, transfer student Kouichi Sakakibara makes his return after taking a sick leave for the first month of school. Among his new classmates, he is inexplicably drawn toward Mei Misaki—a reserved girl with an eyepatch whom he met in the hospital during his absence. But none of his classmates acknowledge her existence; they warn him not to acquaint himself with things that do not exist. Against their words of caution, Kouichi befriends Mei—soon learning of the sinister truth behind his friends' apprehension.
            </br></br>
            The ominous rumors revolve around a former student of the class 3-3. However, no one will share the full details of the grim event with Kouichi. Engrossed in the curse that plagues his class, Kouichi sets out to discover its connection to his new friend. As a series of tragedies arise around them, it is now up to Kouichi, Mei, and their classmates to unravel the eerie mystery—but doing so will come at a hefty price.`,
            show_searchKey: `Another anime`,
        },
        {
            show_link: `#/info/fairy-tale`,
            show_thumbnail: `/library/fairy-tale/img/0.jpg`,
            show_title: `Fairy Tale`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/fairy-tale/img/1.jpg`,
            show_background: `/library/fairy-tale/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Fairy Tale FairyTale anime`,
        },
        {
            show_link: `#/info/afro-samurai`,
            show_thumbnail: `/library/afro-samurai/img/0.jpg`,
            show_title: `Afro Samurai`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/afro-samurai/img/1.jpg`,
            show_background: `/library/afro-samurai/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Afro Samurai AfroSamurai anime`,
        },
        {
            show_link: `#/info/demon-king-damaio`,
            show_thumbnail: `/library/demon-king-damaio/img/0.jpg`,
            show_title: `Demon King Damaio`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/demon-king-damaio/img/1.jpg`,
            show_background: `/library/demon-king-damaio/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Demon King Damaio anime`,
        },
        {
            show_link: `#/info/paradise-kiss`,
            show_thumbnail: `/library/paradise-kiss/img/0.jpg`,
            show_title: `Paradise Kiss`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/paradise-kiss/img/1.jpg`,
            show_background: `/library/paradise-kiss/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Paradise Kiss anime`,
        },
        {
            show_link: `#/info/noragami`,
            show_thumbnail: `/library/noragami/img/0.jpg`,
            show_title: `Noragami`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/noragami/img/1.jpg`,
            show_background: `/library/noragami/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Noragami anime`,
        },
        {
            show_link: `#/info/goblin-slayer`,
            show_thumbnail: `/library/goblin-slayer/img/0.jpg`,
            show_title: `Goblin Slayer`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/goblin-slayer/img/1.jpg`,
            show_background: `/library/goblin-slayer/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Goblin Slayer GoblinSlayer anime`,
        },
        {
            show_link: `#/info/dr-stone`,
            show_thumbnail: `/library/dr-stone/img/0.jpg`,
            show_title: `Dr. Stone`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Adventure, Comedy, Sci-Fi, Anime`, 
            show_theme: `Shounen`,
            show_year: `2019`,
            show_aired: ` Jul 5, 2019 to Mar 27, 2025`,
            show_studios: ` TMS Entertainment`,
            show_country: `Japan`,
            show_foreground: `/library/dr-stone/img/1.jpg`,
            show_background: `/library/dr-stone/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG14`,
            show_scores: `8.3`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/2ei4KpfCOAI?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/esjDq0JQ_1s?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/bITRcLr4xR8?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/g6lRblWDKCk?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/zjBQrDy5wLU?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 24,},
                {show_ep: 11,},
                {show_ep: 11,},
                {show_ep: 11,},
                {show_ep: 12,},
            ],
            show_description:
            `
                After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone.
                </br></br>
                Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified.
                </br></br>
                However, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.
            `,
            show_searchKey: `DrStone Dr Stone Science Future Dr. Stone Science Future Dr Stone Wars Dr. Stone Wars Dr Stone New World Dr. Stone New World anime`,
        },
        {
            show_link: `#/info/blue-lock`,
            show_thumbnail: `/library/blue-lock/img/0.jpg`,
            show_title: `BlueLock`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/blue-lock/img/1.jpg`,
            show_background: `/library/blue-lock/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Blue Lock BlueLock anime`,
        },
        {
            show_link: `#/info/seishun-buta`,
            show_thumbnail: `/library/seishun-buta/img/0.jpg`,
            show_title: `Seishun Buta`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/seishun-buta/img/1.jpg`,
            show_background: `/library/seishun-buta/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `SeishunButa Seishun Buta Yarō anime`,
        },
        {
            show_link: `#/info/dark-gathering`,
            show_thumbnail: `/library/dark-gathering/img/0.jpg`,
            show_title: `Dark Gathering`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/dark-gathering/img/1.jpg`,
            show_background: `/library/dark-gathering/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Dark Gathering  Daku Gyazaringu Dāku Gyazaringu anime`,
        },
        {
            show_link: `#/info/teru-momijiyama`,
            show_thumbnail: `/library/teru-momijiyama/img/0.jpg`,
            show_title: `Teru Momijiyama`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/teru-momijiyama/img/1.jpg`,
            show_background: `/library/teru-momijiyama/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Shy Teru Momijiyama anime`,
        },
        {
            show_link: `#/info/mf-ghost`,
            show_thumbnail: `/library/mf-ghost/img/0.jpg`,
            show_title: `MF Ghost`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Sports`,
            show_theme: `Racing`,
            show_year: `2023`,
            show_aired: `Oct 2, 2023 to Dec 18, 2023`,
            show_studios: `Felix Film`,
            show_country: `Japan`,
            show_foreground: `/library/mf-ghost/img/1.jpg`,
            show_background: `/library/mf-ghost/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.5`,
            show_trailers: [{show_trl: `https://www.youtube.com/embed/zNWZjjkKfXs?enablejsapi=1&wmode=opaque&autoplay=1`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: 12,}],
            show_watch: [{show_wtp: `tv`, show_wep: 12,},],
            show_description: `As electric vehicles dominate everyday life in the 2020s, interest in traditional combustion engine cars is maintained through a motorsports series known as the MFG. Hundreds of ambitious drivers, with a staggering 30 million viewers online, fiercely compete for a spot in the Godly Fifteen—the leading 15 racers—and a chance at the grand prize of 100 million yen. Among these individuals aiming for the top is 19-year-old Kanata Rivington.
            </br></br>
            Having attended a famous racing school in England, Kanata sets his sights on the upcoming MFG tournament and enrolls in the competition under the alias "Kanata Katagiri." In comparison to his opponents' flashy vehicles, Kanata's Toyota 86 GT, passed down from a former MFG contestant, puts him at a considerable disadvantage. Kanata receives guidance from a Godly Fifteen member, but he still treats the MFG as only a stepping stone for his true goal: locating his estranged father. Meanwhile, Kanata's appearance sends shockwaves through the scene as his driving style eerily resembles that of a once legendary racer.`,
            show_searchKey: `MF Ghost MFGhost MF Gōsuto MF Gosuto anime`,
        },
        {
            show_link: `#/info/yakusoku-no-neverland`,
            show_thumbnail: `/library/yakusoku-no-neverland/img/0.jpg`,
            show_title: `Yakusoku no neverland`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/yakusoku-no-neverland/img/1.jpg`,
            show_background: `/library/yakusoku-no-neverland/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Yakusoku no neverland Promised Neverland anime`,
        },
        {
            show_link: `#/info/saiki-k`,
            show_thumbnail: `/library/saiki-k/img/0.jpg`,
            show_title: `Saiki K`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/saiki-k/img/1.jpg`,
            show_background: `/library/saiki-k/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `SaikiK Saiki Kusuo no Sai-nan The Disastrous Life of Saiki K anime`,
        },
        {
            show_link: `#/info/how-a-realistic-hero-rebuilt-the-kingdom`,
            show_thumbnail: `/library/how-a-realistic-hero-rebuilt-the-kingdom/img/0.jpg`,
            show_title: `How A Realistic Hero RebuiltThe Kingdom`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/how-a-realistic-hero-rebuilt-the-kingdom/img/1.jpg`,
            show_background: `/library/how-a-realistic-hero-rebuilt-the-kingdom/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `How A Realistic Hero RebuiltThe Kingdom Genjitsu Shugi Yusha no Okoku Saikenki Genjitsu Shugi Yūsha no Ōkoku Saikenki anime`,
        },
        {
            show_link: `#/info/asterisk-war`,
            show_thumbnail: `/library/asterisk-war/img/0.jpg`,
            show_title: `Asterisk War`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/asterisk-war/img/1.jpg`,
            show_background: `/library/asterisk-war/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `AsteriskWar Asterisk War Gakusen Toshi Asutarisuku anime`,
        },
        {
            show_link: `#/info/black-clover`,
            show_thumbnail: `/library/black-clover/img/0.jpg`,
            show_title: `Black Clover`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Fantasy`, 
            show_theme: `Shounen`,
            show_year: `2017`,
            show_aired: `Oct 3, 2017 to Mar 30, 2021`,
            show_studios: `Pierrot`,
            show_country: `Japan`,
            show_foreground: `/library/black-clover/img/1.jpg`,
            show_background: `/library/black-clover/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `8.1`,
            show_scores: `PG13`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/vUjAxk1qYzQ?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 170,}
            ],
            show_description: 
            `
                Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the "Wizard King"—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.
                </br></br>
                When they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a "Black Clover" giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!
            `,
            show_searchKey: `BlackClover Black Clover Burakku Kurōbā Burakku Kuroba anime`,
        },
        {
            show_link: `#/info/black-clover-sword-of-the-wizard-king`,
            show_thumbnail: `/library/black-clover-sword-of-the-wizard-king/img/0.jpg`,
            show_title: `Black Clover: Sword of the Wizard King`,
            show_type: `Movie`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Comedy, Fantasy`, 
            show_theme: `Shounen`,
            show_year: `2023`,
            show_aired: `Jun 16, 2023`,
            show_studios: `Pierrot`,
            show_country: `Japan`,
            show_foreground: `/library/black-clover-sword-of-the-wizard-king/img/1.jpg`,
            show_background: `/library/black-clover-sword-of-the-wizard-king/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `PG13`,
            show_scores: `8.0`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/EZOToP8xLPg?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_description: `As a lionhearted boy who can’t wield magic strives for the title of Wizard King, four banished Wizard Kings of yore return to crush the Clover Kingdom.`,
            show_searchKey: `BlackClover Black Clover: Sword of the Wizard King Black Clover Sword of the Wizard King Black Clover: Mahou Tei no Ken Black Clover Mahou Tei no Kenanime`,
        },
        {
            show_link: `#/info/bullbuster`,
            show_thumbnail: `/library/bullbuster/img/0.jpg`,
            show_title: `Bullbuster`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Sci-Fi`, 
            show_theme: `Adult Cast, Mecha, Workplace`,
            show_year: `2023`,
            show_aired: `Oct 4, 2023 to Dec 20, 2023`,
            show_studios: `Nut`,
            show_country: `Japan`,
            show_foreground: `/library/bullbuster/img/1.jpg`,
            show_background: `/library/bullbuster/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `6.18`,
            show_trailers: [{show_trl: `https://www.youtube.com/embed/NnlVfbNf9EM?enablejsapi=1&wmode=opaque&autoplay=1`}],
            show_episodes: [{show_ep: 12,}],
            show_description: 
            `
                A young engineer, Tetsurou Okino, is transferred to a vermin extermination company called Hato Industries with the new robot Bullbuster that he developed himself. There, Hato Industries, a small company with little money, and its president Tajima are against a mysterious creature. There are fuel costs for robots, labor costs for pilots, and of course, wasting even a single bullet is unacceptable. Between their ideals of extermination and the reality of budgets, what does the future hold for Hato?
            `,
            show_searchKey: `Bullbuster Bull buster anime`,
        },
        {
            show_link: `#/info/chainsaw-man`,
            show_thumbnail: `/library/chainsaw-man/img/0.jpg`,
            show_title: `Chainsaw man`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Fantasy`,
            show_theme: `Gore`,
            show_year: `2022`,
            show_aired: `Oct 12, 2022 to Dec 28, 2022`,
            show_studios: `MAPPA`,
            show_country: `Japan`,
            show_foreground: `/library/chainsaw-man/img/1.jpg`,
            show_background: `/library/chainsaw-man/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `8.5`,
            show_trailers: [{show_trl: `https://www.youtube.com/embed/v4yLeNt-kCU?enablejsapi=1&wmode=opaque&autoplay=1`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: 12,}],
            show_watch: [{show_wtp: `tv`, show_wep: 12,},],
            show_description: `Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.
            </br></br>
            Remarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.`,
            show_searchKey: `ChainsawMan Chainsaw man Chensō Man Chenso Man anime`,
        },
        {
            show_link: `#/info/dororo`,
            show_thumbnail: `/library/dororo/img/0.jpg`,
            show_title: `Dororo`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/dororo/img/1.jpg`,
            show_background: `/library/dororo/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Dororo anime`,
        },
        {
            show_link: `#/info/erased`,
            show_thumbnail: `/library/erased/img/0.jpg`,
            show_title: `Erased`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/erased/img/1.jpg`,
            show_background: `/library/erased/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Erased Boku dake ga Inai Mach anime`,
        },
        {
            show_link: `#/info/vivy-fluorite-eyes-song`,
            show_thumbnail: `/library/vivy-fluorite-eyes-song/img/0.jpg`,
            show_title: `Vivy: Fluorite Eye's Song`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/vivy-fluorite-eyes-song/img/1.jpg`,
            show_background: `/library/vivy-fluorite-eyes-song/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Vivy Fluorite Eye's Song Vivy: Fluorite Eye's Song anime`,
        },
        {
            show_link: `#/info/and-you-thought-there-is-never-a-girl-online`,
            show_thumbnail: `/library/and-you-thought-there-is-never-a-girl-online/img/0.jpg`,
            show_title: `And You Thought There Is Never a Girl Online`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/and-you-thought-there-is-never-a-girl-online/img/1.jpg`,
            show_background: `/library/and-you-thought-there-is-never-a-girl-online/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Netoge no Yome wa Onna no Ko Janai to Omotta And You Thought There Is Never a Girl Online anime`,
        },
        {
            show_link: `#/info/haikyuu`,
            show_thumbnail: `/library/haikyuu/img/0.jpg`,
            show_title: `Haikyuu`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/haikyuu/img/1.jpg`,
            show_background: `/library/haikyuu/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Haikyū Haikyu Haikyuu anime`,
        },
        {
            show_link: `#/info/go-tobun-no-hanayome`,
            show_thumbnail: `/library/go-tobun-no-hanayome/img/0.jpg`,
            show_title: `Go-Tobun no Hanayome`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/go-tobun-no-hanayome/img/1.jpg`,
            show_background: `/library/go-tobun-no-hanayome/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Go Tobun no Hanayome Go-Tobun no Hanayome Go-Tōbun no Hanayome The Quintessential Quintuplets anime`,
        },
        {
            show_link: `#/info/how-not-to-summon-a-demon-lord`,
            show_thumbnail: `/library/how-not-to-summon-a-demon-lord/img/0.jpg`,
            show_title: `How Not TO Summon a Demon Lord`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/how-not-to-summon-a-demon-lord/img/1.jpg`,
            show_background: `/library/how-not-to-summon-a-demon-lord/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `HNTSADL Isekai Maō to Shōkan Shōjo no Dorei Majutsu Isekai Mao to Shokan Shojo no Dorei Majutsu How Not TO Summon a Demon Lord anime`,
        },
        {
            show_link: `#/info/horimiya`,
            show_thumbnail: `/library/horimiya/img/0.jpg`,
            show_title: `Horimiya`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/horimiya/img/1.jpg`,
            show_background: `/library/horimiya/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Hori-san to Miyamura-kun Hori and Miyamura Horimiya anime`,
        },
        {
            show_link: `#/info/kimi-to-boku`,
            show_thumbnail: `/library/kimi-to-boku/img/0.jpg`,
            show_title: `Kimi to boku`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/kimi-to-boku/img/1.jpg`,
            show_background: `/library/kimi-to-boku/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Kimi to boku anime`,
        },
        {
            show_link: `#/info/tomochan-is-a-girl`,
            show_thumbnail: `/library/tomochan-is-a-girl/img/0.jpg`,
            show_title: `Tomo-chan Is a Girl!`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/tomochan-is-a-girl/img/1.jpg`,
            show_background: `/library/tomochan-is-a-girl/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Tomo-chan Is a Girl! Tomo-chan wa Onnanoko! anime`,
        },
        {
            show_link: `#/info/bocchi-the-rock`,
            show_thumbnail: `/library/bocchi-the-rock/img/0.jpg`,
            show_title: `Bocabyhi the Rock`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/bocchi-the-rock/img/1.jpg`,
            show_background: `/library/bocchi-the-rock/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Bocabyhi the Rock Hiroi Kikuri no Fukazake Nikki anime`,
        },
        {
            show_link: `#/info/link-click`,
            show_thumbnail: `/library/link-click/img/0.jpg`,
            show_title: `Link Click`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/link-click/img/1.jpg`,
            show_background: `/library/link-click/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Link Click Shíguāng Dàilǐrén Shiguang Dailiren anime`,
        },
        {
            show_link: `#/info/my-life-as-inu-sans-dog`,
            show_thumbnail: `/library/my-life-as-inu-sans-dog/img/0.jpg`,
            show_title: `My Life as Inu-san's dog`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/my-life-as-inu-sans-dog/img/1.jpg`,
            show_background: `/library/my-life-as-inu-sans-dog/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `My Life as Inu-san's dog Inu ni Nattara Suki na Hito ni Hirowareta anime`,
        },
        {
            show_link: `#/info/my-stepmoms-daughter-is-my-ex`,
            show_thumbnail: `/library/my-stepmoms-daughter-is-my-ex/img/0.jpg`,
            show_title: `My Stepmom's daughter is my Ex`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/my-stepmoms-daughter-is-my-ex/img/1.jpg`,
            show_background: `/library/my-stepmoms-daughter-is-my-ex/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `My Stepmom's daughter is my Ex Irido Mizuto anime`,
        },
        {
            show_link: `#/info/overlord`,
            show_thumbnail: `/library/overlord/img/0.jpg`,
            show_title: `Overlord`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/overlord/img/1.jpg`,
            show_background: `/library/overlord/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Ōbārōdo Obarodo Overlord anime`,
        },
        {
            show_link: `#/info/talentless-nana`,
            show_thumbnail: `/library/talentless-nana/img/0.jpg`,
            show_title: `Talentless Nana`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/talentless-nana/img/1.jpg`,
            show_background: `/library/talentless-nana/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `TalentlessNana Talentless Nana Munō na Nana Muno na Nana anime`,
        },
        {
            show_link: `#/info/vanitas-no-carte`,
            show_thumbnail: `/library/vanitas-no-carte/img/0.jpg`,
            show_title: `Vanitas no Carte`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/vanitas-no-carte/img/1.jpg`,
            show_background: `/library/vanitas-no-carte/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Vanitasu no Karute Vanitas no Carte anime anime`,
        },
        {
            show_link: `#/info/initial-d`,
            show_thumbnail: `/library/initial-d/img/0.jpg`,
            show_title: `Initial D`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Drama`,
            show_theme: `Racing`,
            show_year: `1998`,
            show_aired: `Apr 19, 1998 to June 22, 2014`,
            show_studios: `Gallop, Studios Comet`,
            show_country: `Japan`,
            show_foreground: `/library/initial-d/img/1.jpg`,
            show_background: `/library/initial-d/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.2`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 24,}, 
                {show_ep: 13,}, 
                {show_ep: 1,}, 
                {show_ep: 24,}, 
                {show_ep: 1,}, 
                {show_ep: 4,},
            ],
            show_description: 
            `
                Initial D is a Japanese street racing manga series written and illustrated by Shuichi Shigeno.
                The story follows Takumi Fujiwara, a high school student working as a gas station attendant during the day
                and a tofu delivery boy for his father's business at night. 
                Takumi's driving skills are honed through his delivery runs on Mount Akina, 
                where he drives his father's Toyota Sprinter Trueno GT-APEX (AE86).
            `,
            show_searchKey: `InitialD Initial D Inisharu Dī Inisharu Di anime`,
        },
        {
            show_link: `#/info/assassination-classroom`,
            show_thumbnail: `/library/assassination-classroom/img/0.jpg`,
            show_title: `Assassination Classroom`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/assassination-classroom/img/1.jpg`,
            show_background: `/library/assassination-classroom/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Assassination Classroom Ansatsu Kyōshitsu Ansatsu Kyoshitsu anime`,
        },
        {
            show_link: `#/info/mashle-magic-and-muscle`,
            show_thumbnail: `/library/mashle-magic-and-muscle/img/0.jpg`,
            show_title: `Mashle Magic and Muscle`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/mashle-magic-and-muscle/img/1.jpg`,
            show_background: `/library/mashle-magic-and-muscle/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Mashle Magic and Muscle Masshuru anime`,
        },
        {
            show_link: `#/info/train-to-the-end-of-the-world`,
            show_thumbnail: `/library/train-to-the-end-of-the-world/img/0.jpg`,
            show_title: `Train to the End of the world`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Adventure`,
            show_theme: `trains, travel`,
            show_year: `2024`,
            show_aired: `Apr 1, 2024 to Jun 24, 2024`,
            show_studios: `EMT Squared`,
            show_country: `Japan`,
            show_foreground: `/library/train-to-the-end-of-the-world/img/1.jpg`,
            show_background: `/library/train-to-the-end-of-the-world/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG`,
            show_scores: `7.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/WP1HMeFxJoM`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 12,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 12,},
            ],
            show_description: 
            `
                The introduction of 7G Network technology promised miraculous technological advancements; however, the aftermath of its launch plunged Japan into chaos. From drastic changes to the terrain to bizarre mutations among people, the way of life is overwritten with new rules. The town of Agano is one of the few remaining settlements, and its citizens aged 21 and above have transformed into animals.
                </br></br>
                Shizuru Chikura, a high school student from Agano, is desperately searching for her friend, Youka Nakatomi. Coming across a picture in a newspaper placing Youka in Ikebukuro, Shizuru starts packing for a trip. But with public transportation effectively shut down, her options are limited. Fortunately, Tairo Zenjirou, a senile old conductor and the only human adult in town, comes to the rescue when he teaches her how to operate an abandoned train.
                </br></br>
                With her destination set, Shizuru ventures off on a journey to find her missing friend. On the day of departure, however, her other classmates—Nadeshiko Hoshi, Reimi Kuga, and Akira Shinonome—decide to tag along at the last minute as they embark on this one-track adventure that might expose them to dangers far surpassing anything they have encountered in Agano.
            `,
            show_searchKey: `Train to the End of the world anime`,
        },
        {
            show_link: `#/info/yatagarasu`,
            show_thumbnail: `/library/yatagarasu/img/0.jpg`,
            show_title: `Yatagarasu`,
            show_type: `TV`,
            show_airing_status: `Releasing`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Drama, Fantasy`,
            show_theme: `Historical, Magical`,
            show_year: `2024`,
            show_aired: `Apr 6, 2024 to ?`,
            show_studios: `Pierrot`,
            show_country: `Japan`,
            show_foreground: `/library/yatagarasu/img/1.jpg`,
            show_background: `/library/yatagarasu/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/BAZbRRzAuPU?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: 
            [
                {show_ep: 20,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 20,},
            ],
            show_description: 
            `
                In the Kingdom of Yamauchi, people have the ability to transform into three-legged crows known as yatagarasu. While the men plot over daily governance, women compete for the hand of Wakamiya, the crown prince who was selected as the Kinu, the servant to the Mountain God. Four young women arrive at the court to join the competition, including one named Asebi.
                </br></br>
                While the kind and innocent Asebi sticks out like a sore thumb compared to the other women, the crown prince has to fight for his place in the clan. Despite being born both to a concubine and as a second son, the royal priests still chose Wakamiya to be the Kinu over his older brother. This decision created a rift between the siblings while enraging Wakamiya's stepmother in the process.
                </br></br>
                When Yukiya, one of the teenage sons of the village chief, is sent to the palace to become Wakamiya's new attendant, the prince is not pleased in the slightest. However, Yukiya's presence at the imperial courts is no mere coincidence.
            `,
            show_searchKey: `Yatagarasu anime`,
        },
        {
            show_link: `#/info/wind-breaker`,
            show_thumbnail: `/library/wind-breaker/img/0.jpg`,
            show_title: `Wind Breaker`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action`,
            show_theme: `Deliquents`,
            show_year: `2024`,
            show_aired: `Apr 5, 2024 to Jun 28, 2024`,
            show_studios: `CloverWorks`,
            show_country: `Japan`,
            show_foreground: `/library/wind-breaker/img/1.jpg`,
            show_background: `/library/wind-breaker/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.9`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/k5qM1PoLmUc?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: 
            [
                {show_mov: `N/A`},
            ],
            show_episodes: 
            [
                {show_ep: 13,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 13,},
            ],
            show_description: 
            `
                From an early age, Haruka Sakura was made an outcast due to his unconventional appearance and lack of social skills. However, the rough treatment turned him into a proficient fighter, which is now the only thing he prides himself on. Starting at Furin High School, where it is rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.
                </br></br>
                Involved in a street brawl the day before his enrollment, Sakura happens to meet a group of his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating that what the school actually cares about is protecting the town of Makochi from any harm—hence why the students call themselves "Bofurin." Surprised by the support and appreciation of the townspeople, Sakura has a hard time accepting their goodwill.
                </br></br>
                Though unfamiliar with kindness being shown to him, Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time.
            `,
            show_searchKey: `Wind Breaker Uindo Bureikā Uindo Bureika anime`,
        },
        {
            show_link: `#/info/apothecary-diaries`,
            show_thumbnail: `/library/apothecary-diaries/img/0.jpg`,
            show_title: `Apothecary Diaries`,
            show_type: `TV`,
            show_airing_status: `Airing`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: ` Drama, Mystery, Anime`, 
            show_theme: `Historical, Medical`,
            show_year: `2023`,
            show_aired: ` Oct 22, 2023 to`,
            show_studios: ` OLM, TOHO animation STUDIO`,
            show_country: `Japan`,
            show_foreground: `/library/apothecary-diaries/img/1.jpg`,
            show_background: `/library/apothecary-diaries/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.8`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/hkflaNu6yAQ?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/3BYutu3Pf_0?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 24,},
                {show_ep: 24,},
            ],
            show_description: 
            `
                Maomao, an apothecary's daughter, has been plucked from her peaceful life and sold to the lowest echelons of the imperial court. Now merely a maid, Maomao settles into her new mundane life and hides her extensive knowledge of medicine in order to avoid any unwanted attention.
                </br></br>
                Not long after Maomao's arrival, the emperor's infant children inexplicably begin to experience grave symptoms—almost as if a curse has been cast. The curious Maomao easily solves the mystery and, to remain out of the limelight, attempts to leave an anonymous tip. Unfortunately, the dashing and perceptive eunuch Jinshi sees through it and manages to single her out.
                </br></br>
                In recognition of her talent, Maomao is promoted to lady-in-waiting for the emperor's favorite concubine, Gyokuyou. As Maomao continues to remedy the numerous ailments afflicting the imperial court, her pharmaceutical expertise quickly proves indispensable.
            `,
            show_searchKey: `Apothecary Diaries Kusuriya no Hitorigoto anime`,
        },
        {
            show_link: `#/info/a-sign-of-affection`,
            show_thumbnail: `/library/a-sign-of-affection/img/0.jpg`,
            show_title: `A Sign Of Affection`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/a-sign-of-affection/img/1.jpg`,
            show_background: `/library/a-sign-of-affection/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `A Sign Of Affection Hibike! Yūfoniamu Hibike! Yufoniamu anime`,
        },
        {
            show_link: `#/info/sound-euphonium`,
            show_thumbnail: `/library/sound-euphonium/img/0.jpg`,
            show_title: `Sound! Euphonium`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Drama`,
            show_theme: `Music, Performing Arts, School`,
            show_year: `2015`,
            show_aired: ` Apr 8, 2015 to Jun 30, 2024`,
            show_studios: `Kyoto Animation`,
            show_country: `Japan`,
            show_foreground: `/library/sound-euphonium/img/1.jpg`,
            show_background: `/library/sound-euphonium/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.4`,
            show_trailers: [{show_trl: `https://www.youtube.com/embed/r_Kk9xhVkB8?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/-ALVld2Z4zk?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/qnOa2TFXWRY?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/d2Di5swwzxg?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/p4m7wgSiDhM?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/WOZVcPNaapo?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/m6HBe_ewMbc?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_movies: [{show_mov: `Welcome to the Kitauji High School Concert Band`}, {show_mov: `May the Melody Reach You`}, {show_mov: `A Brand New Day`}, {show_mov: `Ensemble Contest Arc`},],
            show_episodes: [{show_ep: 13,}, {show_ep: 13,}, {show_ep: 13,},],
            show_watch: [{show_wtp: `tv`, show_wep: 13,}, {show_wtp: `movie`, show_wep: `Welcome to the Kitauji High School Concert Band of the freddy`,}, {show_wtp: `movie`, show_wep: `May the Melody Reach You`,}, {show_wtp: `tv`, show_wep: 13,},{show_wtp: `movie`, show_wep: `A Brand New Day`,}, {show_wtp: `movie`, show_wep: `Ensemble Contest Arc`,}, {show_wtp: `tv`, show_wep: 13,},],
            show_description: `Now that Kumiko Oumae has enrolled in Kitauji High School, she hopes to forget about her past. Despite her desire for a fresh start, she gets dragged into the school's band club by her new friends—Sapphire Kawashima and Hazuki Katou—and is once again stuck playing the euphonium.
            </br></br>
            As the band currently stands, they won't be able to participate in the local festival, Sunfest, let alone compete at a national level. The band's new advisor, Noboru Taki, gives them a choice: they can relax and have fun, or practice hard and attempt to get into nationals. Not wanting to repeat her mistakes from middle school, Kumiko is doubtful as to whether they should try for nationals. 
            </br></br>
            Amidst the chaos, she learns that her old bandmate, Reina Kousaka (who she had a bitter relationship with) has joined Kitauji's band club. Under the pressure of Noboru's strict training, Kumiko and her bandmates must learn to overcome their struggles and find success together.`,
            show_searchKey: `Sound! Euphonium anime`,
        },
        {
            show_link: `#/info/the-witch-and-the-beast`,
            show_thumbnail: `/library/the-witch-and-the-beast/img/0.jpg`,
            show_title: `The Witch And The Beast`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Action, Fantasy, Anime`, 
            show_theme: `Adult Cast, Gore, Urban Fantasy`,
            show_year: `2024`,
            show_aired: ` Jan 12, 2024 to Apr 5, 2024`,
            show_studios: ` Yokohama Animation Laboratory`,
            show_country: `Japan`,
            show_foreground: `/library/the-witch-and-the-beast/img/1.jpg`,
            show_background: `/library/the-witch-and-the-beast/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `R17+`,
            show_scores: `7.4`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/IViCwCNsfIc?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 12,},
            ],
            show_description: 
            `
                Cursed by a witch, the feral and tempestuous Guideau tenaciously searches for the culprit so she can exact revenge. To this end, she joins the Order of Magical Resonance, an organization that deals with everything connected to magic. The Order agrees to work with Guideau in return for her help solving the myriad of magic-related cases occurring across the world.
                </br></br>
                The Order's suave and mysterious mage Ashaf accompanies Guideau for the sake of successfully completing missions. As the pair traverses the land in search of that unknown witch, their experience with the fantastical world of magic grows ever more peculiar the further they advance in their journey.
            `,
            show_searchKey: `Majo to Yajuu The Witch And The Beast anime`,
        },
        {
            show_link: `#/info/black-butler`,
            show_thumbnail: `/library/black-butler/img/0.jpg`,
            show_title: `Black Butler`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/black-butler/img/1.jpg`,
            show_background: `/library/black-butler/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Black Butler Kuroshitsuji anime`,
        },
        {
            show_link: `#/info/high-speed-etoile`,
            show_thumbnail: `/library/high-speed-etoile/img/0.jpg`,
            show_title: `HighSpeed Etoile`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime`, 
            show_theme: `Racing`,
            show_year: `2024`,
            show_aired: ` Apr 6, 2024 to Jun 22, 2024`,
            show_studios: `Studio A-CAT`,
            show_country: `Japan`,
            show_foreground: `/library/high-speed-etoile/img/1.jpg`,
            show_background: `/library/high-speed-etoile/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `6.2`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/h9irlbBv8ng?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 12,},
            ],
            show_description: 
            `
                With the introduction of Hybrid Performance Exceed Reactor (HyPER)—a technology that injects new life into racing—race cars can now reach incredible speeds of up to five hundred kilometers per hour. Five years after the inception of the NEX Race, a competition where the cars are enhanced by HyPER and even AI, one man stands as the undisputed champion. Having won every title since the inaugural NEX Race season, Lorenzo M. Salvatore is the king of the racing world.
                </br></br>
                Unexpectedly entering the tournament is a former ballet dancer, Rin Rindou, who has been given a chance to become a real racer after setting a world record in a racing video game. Forced to give up dancing, Rin shifts her focus to chasing a new goal, despite her lack of experience. Making the most of her peculiar skill set and the NEX Race innovations, the young newcomer may just be the one to dethrone the absolute king.
            `,
            show_searchKey: `High Speed Etoile HighSpeed Etoile HIGHSPEED Étoile anime`,
        },
        {
            show_link: `#/info/metallic-rouge`,
            show_thumbnail: `/library/metallic-rouge/img/0.jpg`,
            show_title: `Metallic Rouge`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/metallic-rouge/img/1.jpg`,
            show_background: `/library/metallic-rouge/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Metallic Rouge Metarikku Rūju Metarikku Ruju anime`,
        },
        {
            show_link: `#/info/akuma-drive`,
            show_thumbnail: `/library/akuma-drive/img/0.jpg`,
            show_title: `Akuma Drive`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/akuma-drive/img/1.jpg`,
            show_background: `/library/akuma-drive/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Akuma Drive AkumaDrive anime`,
        },
        {
            show_link: `#/info/astro-note`,
            show_thumbnail: `/library/astro-note/img/0.jpg`,
            show_title: `Astro Note`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/astro-note/img/1.jpg`,
            show_background: `/library/astro-note/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Astro Note Asutoro Nōto Asutoro Noto anime`,
        },
        {
            show_link: `#/info/heaven-officials-blessing`,
            show_thumbnail: `/library/heaven-officials-blessing/img/0.jpg`,
            show_title: `Heaven Official's Blessing`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Action, Adventure, Drama, Fantasy, Anime`, 
            show_theme: `Historical, Mythology`,
            show_year: `2020`,
            show_aired: `Oct 31, 2020 to Jan 17, 2024`,
            show_studios: `Red Dog Culture House`,
            show_country: `Japan`,
            show_foreground: `/library/heaven-officials-blessing/img/1.jpg`,
            show_background: `/library/heaven-officials-blessing/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/6PVnnIIBtzM?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/gZRZaElR0So?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 11,},
                {show_ep: 12,},
            ],
            show_description: 
            `
                The heavens shake, the thunder rumbles, and Xie Lian appears with an apologetic smile—again! Eight hundred years prior, he was a beloved martial god, known as the Crown Prince of Xianle. Now, he ascends to the heavenly realm for the third time, but simply as a pitiful scrap-collecting god with no followers behind him.
                </br></br>
                On his first mission, Xie Lian finds himself alone in the dark moonlit night. There, a gentle man dressed in red guides him through the forest. However, as abruptly as he appeared, the man suddenly dissipates into a swarm of silver butterflies.
                </br></br>
                Xie Lian later learns that this mysterious stranger was none other than Hua Cheng, the Crimson Rain Sought Flower, a Ghost King feared by both demons and gods alike. But before Xie Lian can figure out why Hua Cheng would help a Heavenly Official like himself, he meets San Lang. A young man possessing great knowledge on not only the Ghost King, but also the now forgotten Crown Prince, San Lang decides to accompany Xie Lian on his journey of unveiling the mysteries of the past.
            `,
            show_searchKey: `Heaven Officials Blessings Heaven Official's Blessings Tiān Guān Cì Fú Tian Guan Ci Fu anime`,
        },
        {
            show_link: `#/info/the-wrong-way-to-use-healing-magic`,
            show_thumbnail: `/library/the-wrong-way-to-use-healing-magic/img/0.jpg`,
            show_title: `The Wrong Way To Use Healing Magic`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/the-wrong-way-to-use-healing-magic/img/1.jpg`,
            show_background: `/library/the-wrong-way-to-use-healing-magic/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `The Wrong Way To Use Healing Magic anime`,
        },
        {
            show_link: `#/info/konosuba`,
            show_thumbnail: `/library/konosuba/img/0.jpg`,
            show_title: `Konosuba`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/konosuba/img/1.jpg`,
            show_background: `/library/konosuba/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Konosuba God's Blessing on This Wonderful World! KonoSuba: God's Blessing on This Wonderful World! anime`,
        },
        {
            show_link: `#/info/kaiju-no-8`,
            show_thumbnail: `/library/kaiju-no-8/img/0.jpg`,
            show_title: `Kaiju No. 8`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/kaiju-no-8/img/1.jpg`,
            show_background: `/library/kaiju-no-8/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `Kaiju No. 8 Kaiju No.8 Kaiju No8 KaijuNo8 Kaijū Hachigō Kaiju Hachigo anime`,
        },
        {
            show_link: `#/info/the-new-gate`,
            show_thumbnail: `/library/the-new-gate/img/0.jpg`,
            show_title: `The New Gate`,
            show_type: `TV`,
            show_airing_status: `N/A`,
            show_languages: `N/A`,
            show_subtitles: `N/A`,
            show_genre: `Anime`, 
            show_theme: `N/A`,
            show_year: `N/A`,
            show_aired: `N/A`,
            show_studios: `N/A`,
            show_country: `N/A`,
            show_foreground: `/library/the-new-gate/img/1.jpg`,
            show_background: `/library/the-new-gate/img/2.jpg`,
            show_quality: `N/A`,
            show_rating: `N/A`,
            show_scores: `N/A`,
            show_trailers: [{show_trl: `N/A`}],
            show_movies: [{show_mov: `N/A`}],
            show_episodes: [{show_ep: `N/A`,}],
            show_description: `N/A`,
            show_searchKey: `The New Gate anime`,
        },
        {
            show_link: `#/info/solo-leveling`,
            show_thumbnail: `/library/solo-leveling/img/0.jpg`,
            show_title: `Solo Leveling`,
            show_type: `TV`,
            show_airing_status: `Airing`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Action, Adventure, Fantasy, Anime`, 
            show_theme: `Adult Cast, Urban Fantasy`,
            show_year: `2024`,
            show_aired: `Jan 7, 2024 to ?`,
            show_studios: `A-1 Pictures`,
            show_country: `Japan`,
            show_foreground: `/library/solo-leveling/img/1.jpg`,
            show_background: `/library/solo-leveling/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `R17+`,
            show_scores: `8.6`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/1kQwjK4rGYg?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/GDMXGzjJzS4?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 12,},
                {show_ep: 13,},
            ],
            show_description: 
            `
                Humanity was caught at a precipice a decade ago when the first gates—portals linked with other dimensions that harbor monsters immune to conventional weaponry—emerged around the world. Alongside the appearance of the gates, various humans were transformed into hunters and bestowed superhuman abilities. Responsible for entering the gates and clearing the dungeons within, many hunters chose to form guilds to secure their livelihoods.
                </br></br>
                Sung Jin-Woo is an E-rank hunter dubbed as the weakest hunter of all mankind. While exploring a supposedly safe dungeon, he and his party encounter an unusual tunnel leading to a deeper area. Enticed by the prospect of treasure, the group presses forward, only to be confronted with horrors beyond their imagination. Miraculously, Jin-Woo survives the incident and soon finds that he now has access to an interface visible only to him. This mysterious system promises him the power he has long dreamed of—but everything comes at a price.
            `,
            show_searchKey: `SoloLeveling Solo Leveling Arise from the Shadow Na Honjaman Rebeleop anime`,
        },
        {
            show_link: `#/info/daily-life-of-an-immortal-king`,
            show_thumbnail: `/library/daily-life-of-an-immortal-king/img/0.jpg`,
            show_title: `Daily Life Of An Immortal King`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Adventure, Comedy, Fantasy, Anime`, 
            show_theme: `Mythology, School, Urban Fantasy`,
            show_year: `2020`,
            show_aired: `Jan 18, 2020 to Dec 11, 2022`,
            show_studios: `Pb Animation Co. Ltd.`,
            show_country: `Japan`,
            show_foreground: `/library/daily-life-of-an-immortal-king/img/1.jpg`,
            show_background: `/library/daily-life-of-an-immortal-king/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `7.4`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/7ANfp-ibOs0?enablejsapi=1&wmode=opaque&autoplay=1`},
                {show_trl: `https://www.youtube.com/embed/cu3tTJ5eXIc?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 15,},
                {show_ep: 12,},
                {show_ep: 12,},
            ],
            show_description: 
            `
                Wang Ling is a high school student with a cool and carefree demeanor. Coming off as someone with a very low spiritual force, he actually possesses a power capable of destroying the world at a moment's notice. To mitigate the volatile force within him, his parents have resorted to using an amulet as a temporary solution. However, the amulet weakens over time and Wang Ling's emotions also accelerate its deterioration. Now with the amulet on the verge of breaking, Wang Ling and his father race against time in order to fix it.
                </br></br>
                Wang Ling has been living a quiet life ever since resolving a particular incident, but thanks to his previous tampering with the laws of nature, the level of psionic powers in the world has dropped drastically. To stop the levels from plummeting further, his spirit sword Jingke comes to the rescue. But due to the excessive use of power, Jingke ends up ripping a crack in space. This crack allows demons to infiltrate the world and steal spiritual energy essential to powering human society. Now the only person who has the power to thwart their plans is none other than Wang Ling.
                </br></br>
                In an attempt to balance his high school life with his supernatural one, Wang Ling must confront challenges ranging from teacher home visits, crafting spiritual swords, grappling with his growing feelings for Sun Rong, and battling invading demons!
            `,
            show_searchKey: `Daily Life Of An Immortal King Xiān Wáng de Rìcháng Shēnghuó Xian Wáng de Richang Shenghuo anime`,
        },
        {
            show_link: `#/info/boruto-naruto-next-generations`,
            show_thumbnail: `/library/boruto-naruto-next-generations/img/0.jpg`,
            show_title: `Boruto: Naruto Next Generations`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `Japanese`,
            show_subtitles: `English`,
            show_genre: `Anime, Action, Adventure, Fantasy`,
            show_theme: `Martial Arts`,
            show_year: `2017`,
            show_aired: `Apr 5, 2017 to Mar 26, 2023`,
            show_studios: `Pierrot`,
            show_country: `Japan`,
            show_foreground: `/library/boruto-naruto-next-generations/img/1.jpg`,
            show_background: `/library/boruto-naruto-next-generations/img/2.jpg`,
            show_quality: `HD`,
            show_rating: `PG13`,
            show_scores: `6.0`,
            show_trailers: 
            [
                {show_trl: `N/A`}
            ],
            show_movies: 
            [
                {show_mov: `Boruto: Naruto the Movie`,},
            ],
            show_episodes: 
            [
                {show_ep: 293,},
            ],
            show_watch: 
            [
                {show_wtp: `tv`, show_wep: 293,}, 
                {show_wtp: `movie`, show_wep: `Boruto: Naruto the Movie`,},
            ],
            show_description: 
            `
                Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts of the Allied Shinobi Forces and the village's Seventh Hokage, Naruto Uzumaki. Now resembling a modern metropolis, Konohagakure has changed, particularly the life of a shinobi. Under the watchful eye of Naruto and his old comrades, a new generation of shinobi has stepped up to learn the ways of the ninja.
                </br></br>
                Boruto Uzumaki is often the center of attention as the son of the Seventh Hokage. Despite having inherited Naruto's boisterous and stubborn demeanor, Boruto is considered a prodigy and is able to unleash his potential with the help of supportive friends and family. Unfortunately, this has only worsened his arrogance and his desire to surpass Naruto which, along with his father's busy lifestyle, has strained their relationship. However, a sinister force brewing within the village may threaten Boruto's carefree life
                </br></br>
                New friends and familiar faces join Boruto as a new story begins.
            `,
            show_searchKey: `Boruto Naruto Next Generations Boruto: Naruto Next Generations anime`,
        },
        {
            show_link: `#/info/arcane`,
            show_thumbnail: `/library/arcane/img/1.jpg`,
            show_title: `Arcane`,
            show_type: `TV`,
            show_airing_status: `Finished`,
            show_languages: `English`,
            show_subtitles: `English`,
            show_genre: `Animation, Sci-fi, Fantasy, Drama, Action, Adventure`, 
            show_theme: `Survival`,
            show_year: `2021`,
            show_aired: `Nov 6, 2021 to Nov 23, 2024`,
            show_studios: `Netflix`,
            show_country: `United States of America`,
            show_foreground: `/library/arcane/img/1.jpg`,
            show_background: `/library/arcane/img/2.jpg`,
            show_quality: `4K`,
            show_rating: `TV-14`,
            show_scores: `9.0`,
            show_trailers: 
            [
                {show_trl: `https://www.youtube.com/embed/W4gLFBNGgiY?enablejsapi=1&wmode=opaque&autoplay=1`},
            ],
            show_episodes: 
            [
                {show_ep: 9,},
                {show_ep: 9,},
            ],
            show_description: 
            `
                The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun. Tensions between these city-states boil over with the creation of "hextech", a way for any person to control magical energy in Piltover, and in Zaun, a new drug called "shimmer" transforms humans into monsters. The rivalry between the cities splits families and friends as Arcane brings life to the relationships that shape some of League of Legends' famous champions including Vi, Jinx, Caitlyn, Jayce, Viktor, and Ekko.
            `,
            show_searchKey: `Arcane anime`,
        },








        // ======== MOVIES ==========

    ];


    // General map for getting specific items using their link (show_link)
    let infoInvLinkMap = new Map(
        searchInventory.map(item => 
        {
            const invShowLinkLC = item.show_link.split('/')[2];
            return [invShowLinkLC, item];
        })
    );




