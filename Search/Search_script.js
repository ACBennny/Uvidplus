
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/



    window.addEventListener("load" , startSearchEngine);
    

    function startSearchEngine()
    {

        // INITIALIZATION
        let searchBodyHTML = 
        `
            <!-- ------ Search Bar ------ -->
            <div class="searchBase">
                <div class="searchBdr">
                    <div class="searchBox navBarSearchBox" name="navSearchForm">
                        <label for="searchInput" class="searchIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="searchIcon">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </label>
                        <span class="searchInputBox">
                            <input type="text" name="search_key" id="searchInput" class="searchFieldClass" placeholder="Search...">
                        </span>
                        <label for="searchInput" class="searchIconBox clearSearchFieldIconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="clearSearchFieldIcon">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            
            <!-- ------ search Results------ -->
            <div class="searchbox-border">
                <div class="search_Result_title">
                    <div class="search_Result_titleText">
                        <span class="srt_static">Search results for:</span>
                        <span class="srt_dynamic"></span>
                    </div>
                </div>
                <div class="basicCatalogBase">
                    <div class="basicCatalogBdr">
                        <div class="basicCatalogBox" id="catalogId"></div>
                    </div>
                </div>
            </div>
        `;
        documentBody.insertAdjacentHTML(`afterbegin` , searchBodyHTML);

        // DECLARATIONS

            let search_query = '';
            const searchTitle = document.querySelector(".srt_dynamic");
            const searchInput = document.getElementById('searchInput');
            const searchXmark = document.querySelector(".clearSearchFieldIconBox");
            const searchwall = document.querySelector("#catalogId");
    
    
        // SEARCH THE ENGINE
    
            // Search inventory
            const searchInventory =
            [
                // Anime content
                {
                    show_link: `/Library/Anime/JujutsuKaisen.html`,
                    show_image: `/Library/Anime/img/1.jpg`,
                    show_title: `Jujutsu Kaisen`,
                    show_section: `Anime`,
                    show_code: `Jujutsu Kaisen sorcery anime`,
                },
                {
                    show_link: `/Library/Anime/DemonSlayer.html`,
                    show_image: `/Library/Anime/img/2.jpg`,
                    show_title: `Demon Slayer`,
                    show_section: `Anime`,
                    show_code: `Demon Slayer Kimetsu No Yaiba anime`,
                },
                {
                    show_link: `/Library/Anime/AttackOnTitan.html`,
                    show_image: `/Library/Anime/img/3.jpg`,
                    show_title: `Attack On Titan`,
                    show_section: `Anime`,
                    show_code: `Shingeki no Kyojin Attack On Titan anime`,
                },
                {
                    show_link: `/Library/Anime/Naruto.html`,
                    show_image: `/Library/Anime/img/4.jpg`,
                    show_title: `Naruto`,
                    show_section: `Anime`,
                    show_code: `Naruto anime`,
                },
                {
                    show_link: `/Library/Anime/FullmetalPanic.html`,
                    show_image: `/Library/Anime/img/5.jpg`,
                    show_title: `Fullmetal Panic`,
                    show_section: `Anime`,
                    show_code: `Furumetaru Panikku Fullmetal Panic anime`,
                },
                {
                    show_link: `/Library/Anime/FullmetalAlchemist.html`,
                    show_image: `/Library/Anime/img/6.jpg`,
                    show_title: `Fullmetal Alchemist`,
                    show_section: `Anime`,
                    show_code: `Hagane no Renkinjutsushi Fullmetal Alchemist anime`,
                },
                {
                    show_link: `/Library/Anime/FullmetalAlchemistBrotherhood.html`,
                    show_image: `/Library/Anime/img/7.jpg`,
                    show_title: `Fullmetal Alchemist Brotherhood`,
                    show_section: `Anime`,
                    show_code: `Hagane no Renkinjutsushi Fullmetal Alchemist Brotherhood anime`,
                },
                {
                    show_link: `/Library/Anime/ClassroomoftheElite.html`,
                    show_image: `/Library/Anime/img/8.jpg`,
                    show_title: `Classroom of the Elite`,
                    show_section: `Anime`,
                    show_code: `Classroom of the Elite Yokoso Jitsuryoku Shijo Shugi no Kyoshitsu anime`,
                },
                {
                    show_link: `/Library/Anime/BlueExorcist.html`,
                    show_image: `/Library/Anime/img/9.jpg`,
                    show_title: `Blue Exorcist`,
                    show_section: `Anime`,
                    show_code: `Ao no Ekusoshisuto Gekijoban Blue Exorcist anime`,
                },
                {
                    show_link: `/Library/Anime/RentaGirlfriend.html`,
                    show_image: `/Library/Anime/img/10.jpg`,
                    show_title: `Spy X Family`,
                    show_section: `Anime`,
                    show_code: `Spy X Family anime`,
                },
                {
                    show_link: `/Library/Anime/Naruto.html`,
                    show_image: `/Library/Anime/img/11.jpg`,
                    show_title: `Rent a Girlfriend`,
                    show_section: `Anime`,
                    show_code: `Rent a Girlfriend Kanojo Okarishimasu anime`,
                },
                {
                    show_link: `/Library/Anime/TokyoGhoul.html`,
                    show_image: `/Library/Anime/img/12.jpg`,
                    show_title: `Tokyo Ghoul`,
                    show_section: `Anime`,
                    show_code: `Tokyo Ghoul Tokyo Guru anime`,
                },
                {
                    show_link: `/Library/Anime/InazumaEleven.html`,
                    show_image: `/Library/Anime/img/13.jpg`,
                    show_title: `Inazuma Eleven`,
                    show_section: `Anime`,
                    show_code: `Inazuma Eleven Inazuma Irebun anime`,
                },
                {
                    show_link: `/Library/Anime/Aoashi.html`,
                    show_image: `/Library/Anime/img/14.jpg`,
                    show_title: `Aoashi`,
                    show_section: `Anime`,
                    show_code: `Aoashi anime`,
                },
                {
                    show_link: `/Library/Anime/CyberpunkEdgeRunners.html`,
                    show_image: `/Library/Anime/img/15.jpg`,
                    show_title: `Cyberpunk: EdgeRunners`,
                    show_section: `Anime`,
                    show_code: `Cyberpunk Edgerunners Saibapanku Edjirannazu anime`,
                },
                {
                    show_link: `/Library/Anime/TomodachiGame.html`,
                    show_image: `/Library/Anime/img/16.jpg`,
                    show_title: `>Tomodachi Game`,
                    show_section: `Anime`,
                    show_code: `Tomodachi Game Tomodachi Gemu anime`,
                },
                {
                    show_link: `/Library/Anime/KaguyaSama.html`,
                    show_image: `/Library/Anime/img/17.jpg`,
                    show_title: `Kaguya-Sama`,
                    show_section: `Anime`,
                    show_code: `Kaguya-sama wa Kokurasetai Kaguya sama wa Kokurasetai Love is War anime`,
                },
                {
                    show_link: `/Library/Anime/Kakegurui.html`,
                    show_image: `/Library/Anime/img/18.jpg`,
                    show_title: `Kakegurui`,
                    show_section: `Anime`,
                    show_code: `Kakegure Kakegurui anime`,
                },
                {
                    show_link: `/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html`,
                    show_image: `/Library/Anime/img/19.jpg`,
                    show_title: `That I recently got Reincarnated as a Slime`,
                    show_section: `Anime`,
                    show_code: `That I recently got Reincarnated as a Slime Tensei Shitara Suraimu Datta Ken anime`,
                },
                {
                    show_link: `/Library/Anime/RisingoftheShieldHero.html`,
                    show_image: `/Library/Anime/img/20.jpg`,
                    show_title: `Rising of the Shield hero`,
                    show_section: `Anime`,
                    show_code: `Tate no Yūsha no Nariagari Rising of the Shield anime`,
                },
                {
                    show_link: `/Library/Anime/VioletEvergarden.html`,
                    show_image: `/Library/Anime/img/21.jpg`,
                    show_title: `Violet Evergarden`,
                    show_section: `Anime`,
                    show_code: `Vaioretto Evagaden Violet Evergarden anime`,
                },
                {
                    show_link: `/Library/Anime/YourLieinApril.html`,
                    show_image: `/Library/Anime/img/22.jpg`,
                    show_title: `Your lie in April`,
                    show_section: `Anime`,
                    show_code: `Shigatsu wa Kimi no Uso Your lie in April anime`,
                },
                {
                    show_link: `/Library/Anime/KurokonoBasket.html`,
                    show_image: `/Library/Anime/img/23.jpg`,
                    show_title: `Kuroko no Basuke`,
                    show_section: `Anime`,
                    show_code: `Kunoku no Basket Kuroko no Basuke anime`,
                },
                {
                    show_link: `/Library/Anime/EnenNoShouboutai.html`,
                    show_image: `/Library/Anime/img/24.jpg`,
                    show_title: `Enen no Shouboutai`,
                    show_section: `Anime`,
                    show_code: `Enen no Shouboutai Fireforce no Basuke anime`,
                },
                {
                    show_link: `/Library/Anime/VinlandSaga.html`,
                    show_image: `/Library/Anime/img/25.jpg`,
                    show_title: `Vinland Saga`,
                    show_section: `Anime`,
                    show_code: `Vinland Saga Vinrando Saga anime`,
                },
                {
                    show_link: `/Library/Anime/TokyoRevengers.html`,
                    show_image: `/Library/Anime/img/26.jpg`,
                    show_title: `Tokyo Revengers`,
                    show_section: `Anime`,
                    show_code: `Tokyo Revengers Tōkyō Ribenjāzu Tokyo Ribenjazu anime`,
                },
                {
                    show_link: `/Library/Anime/MyHeroAcademia.html`,
                    show_image: `/Library/Anime/img/27.jpg`,
                    show_title: `My Hero Academia`,
                    show_section: `Anime`,
                    show_code: `My Hero Academia Boku no Hīrō Akademia Boku no Hiro Akademia anime`,
                },
                {
                    show_link: `/Library/Anime/CowboyBebop.html`,
                    show_image: `/Library/Anime/img/28.jpg`,
                    show_title: `Cowboy Bebop`,
                    show_section: `Anime`,
                    show_code: `Cowboy Bebop Kaubōi Bibappu Kauboi Bibappu anime`,
                },
                {
                    show_link: `/Library/Anime/DeathNote.html`,
                    show_image: `/Library/Anime/img/29.jpg`,
                    show_title: `Death Note`,
                    show_section: `Anime`,
                    show_code: `Death Note anime`,
                },
                {
                    show_link: `/Library/Anime/OnePiece.html`,
                    show_image: `/Library/Anime/img/30.jpg`,
                    show_title: `One Piece`,
                    show_section: `Anime`,
                    show_code: `One Piece anime`,
                },
                {
                    show_link: `/Library/Anime/OnePunchMan.html`,
                    show_image: `/Library/Anime/img/31.jpg`,
                    show_title: `One Punch man`,
                    show_section: `Anime`,
                    show_code: `One Punch man Wanpanman anime`,
                },
                {
                    show_link: `/Library/Anime/HunterXHunter.html`,
                    show_image: `/Library/Anime/img/32.jpg`,
                    show_title: `Hunter X Hunter`,
                    show_section: `Anime`,
                    show_code: `Hunter X Hunter anime`,
                },
                {
                    show_link: `/Library/Anime/SteinsGate.html`,
                    show_image: `/Library/Anime/img/33.jpg`,
                    show_title: `Steins Gate`,
                    show_section: `Anime`,
                    show_code: `Steins Gate anime`,
                },
                {
                    show_link: `/Library/Anime/DragonBallZ.html`,
                    show_image: `/Library/Anime/img/34.jpg`,
                    show_title: `Dragon ball Z`,
                    show_section: `Anime`,
                    show_code: `Dragon ball Z anime`,
                },
                {
                    show_link: `/Library/Anime/Bleach.html`,
                    show_image: `/Library/Anime/img/35.jpg`,
                    show_title: `Bleach`,
                    show_section: `Anime`,
                    show_code: `Bleach anime`,
                },
                {
                    show_link: `/Library/Anime/AkameGaKill.html`,
                    show_image: `/Library/Anime/img/36.jpg`,
                    show_title: `Akame ga Kill!`,
                    show_section: `Anime`,
                    show_code: `Akame ga Kill! Akame ga Kiru! anime`,
                },
                {
                    show_link: `/Library/Anime/SwordArtOnline.html`,
                    show_image: `/Library/Anime/img/37.jpg`,
                    show_title: `Sword Art Online`,
                    show_section: `Anime`,
                    show_code: `Sword Art Online Sōdo Āto Onrain Sodo Ato Onrain anime`,
                },
                {
                    show_link: `/Library/Anime/BongouStrayDogs.html`,
                    show_image: `/Library/Anime/img/38.jpg`,
                    show_title: `Bongou Stray Dogs`,
                    show_section: `Anime`,
                    show_code: `Bongou Stray Dogs Bungu Stray Dogs Bongu Stray Dogs Bungou Stray Dogs anime`,
                },
                {
                    show_link: `/Library/Anime/MobPsycho.html`,
                    show_image: `/Library/Anime/img/39.jpg`,
                    show_title: `Mob Psycho`,
                    show_section: `Anime`,
                    show_code: `Mob Psycho Mobu Saiko Hyaku anime`,
                },
                {
                    show_link: `/Library/Anime/SamuraiChamploo.html`,
                    show_image: `/Library/Anime/img/40.jpg`,
                    show_title: `Samurai Champloo`,
                    show_section: `Anime`,
                    show_code: `Samurai Champloo anime`,
                },
                {
                    show_link: `/Library/Anime/HellSing.html`,
                    show_image: `/Library/Anime/img/41.jpg`,
                    show_title: `HellSing`,
                    show_section: `Anime`,
                    show_code: `HellSing Hell Sing anime`,
                },
                {
                    show_link: `/Library/Anime/BlackLagoon.html`,
                    show_image: `/Library/Anime/img/42.jpg`,
                    show_title: `Black Lagoon`,
                    show_section: `Anime`,
                    show_code: `Black Lagoon BlackLagoon anime`,
                },
                {
                    show_link: `/Library/Anime/FutureDiary.html`,
                    show_image: `/Library/Anime/img/43.jpg`,
                    show_title: `Future Diary`,
                    show_section: `Anime`,
                    show_code: `Future Diary anime`,
                },
                {
                    show_link: `/Library/Anime/Another.html`,
                    show_image: `/Library/Anime/img/44.jpg`,
                    show_title: `Another`,
                    show_section: `Anime`,
                    show_code: `Another anime`,
                },
                {
                    show_link: `/Library/Anime/FairyTale.html`,
                    show_image: `/Library/Anime/img/45.jpg`,
                    show_title: `Fairy Tale`,
                    show_section: `Anime`,
                    show_code: `Fairy Tale FairyTale anime`,
                },
                {
                    show_link: `/Library/Anime/AfroSamurai.html`,
                    show_image: `/Library/Anime/img/46.jpg`,
                    show_title: `Afro Samurai`,
                    show_section: `Anime`,
                    show_code: `Afro Samurai AfroSamurai anime`,
                },
                {
                    show_link: `/Library/Anime/DemonKingDamaio.html`,
                    show_image: `/Library/Anime/img/47.jpg`,
                    show_title: `Demon King Damaio`,
                    show_section: `Anime`,
                    show_code: `Demon King Damaio anime`,
                },
                {
                    show_link: `/Library/Anime/ParadiseKiss.html`,
                    show_image: `/Library/Anime/img/48.jpg`,
                    show_title: `Paradise Kiss`,
                    show_section: `Anime`,
                    show_code: `Paradise Kiss anime`,
                },
                {
                    show_link: `/Library/Anime/Noragami.html`,
                    show_image: `/Library/Anime/img/49.jpg`,
                    show_title: `Noragami`,
                    show_section: `Anime`,
                    show_code: `Noragami anime`,
                },
                {
                    show_link: `/Library/Anime/GoblinSlayer.html`,
                    show_image: `/Library/Anime/img/50.jpg`,
                    show_title: `Goblin Slayer`,
                    show_section: `Anime`,
                    show_code: `Goblin Slayer GoblinSlayer anime`,
                },
                {
                    show_link: `/Library/Anime/DrStone.html`,
                    show_image: `/Library/Anime/img/51.jpg`,
                    show_title: `Dr Stone`,
                    show_section: `Anime`,
                    show_code: `Dr Stone DrStone anime`,
                },
                {
                    show_link: `/Library/Anime/BlueLock.html`,
                    show_image: `/Library/Anime/img/52.jpg`,
                    show_title: `BlueLock`,
                    show_section: `Anime`,
                    show_code: `Blue Lock BlueLock anime`,
                },
                {
                    show_link: `/Library/Anime/SeishunButa.html`,
                    show_image: `/Library/Anime/img/53.jpg`,
                    show_title: `Seishun Buta`,
                    show_section: `Anime`,
                    show_code: `SeishunButa Seishun Buta Yarō anime`,
                },
                {
                    show_link: `/Library/Anime/DarkGathering.html`,
                    show_image: `/Library/Anime/img/54.jpg`,
                    show_title: `Dark Gathering`,
                    show_section: `Anime`,
                    show_code: `Dark Gathering  Daku Gyazaringu Dāku Gyazaringu anime`,
                },
                {
                    show_link: `/Library/Anime/TeruMomijiyama.html`,
                    show_image: `/Library/Anime/img/55.jpg`,
                    show_title: `Teru Momijiyama`,
                    show_section: `Anime`,
                    show_code: `Shy Teru Momijiyama anime`,
                },
                {
                    show_link: `/Library/Anime/MFGhost.html`,
                    show_image: `/Library/Anime/img/56.jpg`,
                    show_title: `MF Ghost`,
                    show_section: `Anime`,
                    show_code: `MF Ghost MFGhost MF Gōsuto MF Gosuto anime`,
                },
                {
                    show_link: `/Library/Anime/YakusokuNoNeverland.html`,
                    show_image: `/Library/Anime/img/57.jpg`,
                    show_title: `Yakusoku no neverland`,
                    show_section: `Anime`,
                    show_code: `Yakusoku no neverland Promised Neverland anime`,
                },
                {
                    show_link: `/Library/Anime/SaikiK.html`,
                    show_image: `/Library/Anime/img/58.jpg`,
                    show_title: `Saiki K`,
                    show_section: `Anime`,
                    show_code: `SaikiK Saiki Kusuo no Sai-nan The Disastrous Life of Saiki K anime`,
                },
                {
                    show_link: `/Library/Anime/HowARealisticHeroRebuiltTheKingdom.html`,
                    show_image: `/Library/Anime/img/59.jpg`,
                    show_title: `How A Realistic Hero RebuiltThe Kingdom`,
                    show_section: `Anime`,
                    show_code: `How A Realistic Hero RebuiltThe Kingdom Genjitsu Shugi Yusha no Okoku Saikenki Genjitsu Shugi Yūsha no Ōkoku Saikenki anime`,
                },
                {
                    show_link: `/Library/Anime/AsteriskWar.html`,
                    show_image: `/Library/Anime/img/60.jpg`,
                    show_title: `Asterisk War`,
                    show_section: `Anime`,
                    show_code: `AsteriskWar Asterisk War Gakusen Toshi Asutarisuku anime`,
                },
                {
                    show_link: `/Library/Anime/BlackCover.html`,
                    show_image: `/Library/Anime/img/61.jpg`,
                    show_title: `Black Cover`,
                    show_section: `Anime`,
                    show_code: `BlackCover Black Cover Burakku Kurōbā Burakku Kuroba anime`,
                },
                {
                    show_link: `/Library/Anime/Bullbuster.html`,
                    show_image: `/Library/Anime/img/62.jpg`,
                    show_title: `Bullbuster`,
                    show_section: `Anime`,
                    show_code: `Bullbuster Bull buster anime`,
                },
                {
                    show_link: `/Library/Anime/ChainsawMan.html`,
                    show_image: `/Library/Anime/img/63.jpg`,
                    show_title: `Chainsaw man`,
                    show_section: `Anime`,
                    show_code: `ChainsawMan Chainsaw man Chensō Man Chenso Man anime`,
                },
                {
                    show_link: `/Library/Anime/Dororo.html`,
                    show_image: `/Library/Anime/img/64.jpg`,
                    show_title: `Dororo`,
                    show_section: `Anime`,
                    show_code: `Dororo anime`,
                },
                {
                    show_link: `/Library/Anime/Erased.html`,
                    show_image: `/Library/Anime/img/65.jpg`,
                    show_title: `Erased`,
                    show_section: `Anime`,
                    show_code: `Erased Boku dake ga Inai Mach anime`,
                },
                {
                    show_link: `/Library/Anime/Vivy.html`,
                    show_image: `/Library/Anime/img/66.jpg`,
                    show_title: `Vivy`,
                    show_section: `Anime`,
                    show_code: `Vivy Fluorite Eye's Song Vivy: Fluorite Eye's Song anime`,
                },
                {
                    show_link: `/Library/Anime/AndYouThoughtThereIsNeverAGirlOnline.html`,
                    show_image: `/Library/Anime/img/67.jpg`,
                    show_title: `And You Thought There Is Never a Girl Online`,
                    show_section: `Anime`,
                    show_code: `Netoge no Yome wa Onna no Ko Janai to Omotta And You Thought There Is Never a Girl Online anime`,
                },
                {
                    show_link: `/Library/Anime/Haikyuu.html`,
                    show_image: `/Library/Anime/img/68.jpg`,
                    show_title: `Haikyuu`,
                    show_section: `Anime`,
                    show_code: `Haikyū Haikyu Haikyuu anime`,
                },
                {
                    show_link: `/Library/Anime/HowNotToSummonADemonLord.html`,
                    show_image: `/Library/Anime/img/69.jpg`,
                    show_title: `Go-Tobun no Hanayome`,
                    show_section: `Anime`,
                    show_code: `Go-Tobun no Hanayome Go-Tōbun no Hanayome The Quintessential Quintuplets anime`,
                },
                {
                    show_link: `/Library/Anime/HowNotToSummonADemonLord.html`,
                    show_image: `/Library/Anime/img/70.jpg`,
                    show_title: `How Not TO Summon a Demon Lord`,
                    show_section: `Anime`,
                    show_code: `HNTSADL Isekai Maō to Shōkan Shōjo no Dorei Majutsu Isekai Mao to Shokan Shojo no Dorei Majutsu How Not TO Summon a Demon Lord anime`,
                },
                {
                    show_link: `/Library/Anime/Horimiya.html`,
                    show_image: `/Library/Anime/img/71.jpg`,
                    show_title: `Horimiya`,
                    show_section: `Anime`,
                    show_code: `Hori-san to Miyamura-kun Hori and Miyamura Horimiya anime`,
                },
                {
                    show_link: `/Library/Anime/KimitoBoku.html`,
                    show_image: `/Library/Anime/img/72.jpg`,
                    show_title: `Kimi to boku`,
                    show_section: `Anime`,
                    show_code: `Kimi to boku anime`,
                },
                {
                    show_link: `/Library/Anime/TomochanIsaGirl.html`,
                    show_image: `/Library/Anime/img/73.jpg`,
                    show_title: `Tomo-chan Is a Girl!`,
                    show_section: `Anime`,
                    show_code: `Tomo-chan Is a Girl! Tomo-chan wa Onnanoko! anime`,
                },
                {
                    show_link: `/Library/Anime/BochiTheRock.html`,
                    show_image: `/Library/Anime/img/74.jpg`,
                    show_title: `Bocabyhi the Rock`,
                    show_section: `Anime`,
                    show_code: `Bocabyhi the Rock Hiroi Kikuri no Fukazake Nikki anime`,
                },
                {
                    show_link: `/Library/Anime/LinkClick.html`,
                    show_image: `/Library/Anime/img/75.jpg`,
                    show_title: `Link Click`,
                    show_section: `Anime`,
                    show_code: `Link Click Shíguāng Dàilǐrén Shiguang Dailiren anime`,
                },
                {
                    show_link: `/Library/Anime/MyLifeasInuSansDog.html`,
                    show_image: `/Library/Anime/img/76.jpg`,
                    show_title: `My Life as Inu-san's dog`,
                    show_section: `Anime`,
                    show_code: `My Life as Inu-san's dog Inu ni Nattara Suki na Hito ni Hirowareta anime`,
                },
                {
                    show_link: `/Library/Anime/MyStepmomsDaughterisMyEx.html`,
                    show_image: `/Library/Anime/img/77.jpg`,
                    show_title: `My Stepmom's daughter is my Ex`,
                    show_section: `Anime`,
                    show_code: `My Stepmom's daughter is my Ex Irido Mizuto anime`,
                },
                {
                    show_link: `/Library/Anime/Overlord.html`,
                    show_image: `/Library/Anime/img/78.jpg`,
                    show_title: `Overlord`,
                    show_section: `Anime`,
                    show_code: `Ōbārōdo Obarodo Overlord anime`,
                },
                {
                    show_link: `/Library/Anime/TalentlessNana.html`,
                    show_image: `/Library/Anime/img/79.jpg`,
                    show_title: `Talentless Nana`,
                    show_section: `Anime`,
                    show_code: `TalentlessNana Talentless Nana Munō na Nana Muno na Nana anime`,
                },
                {
                    show_link: `/Library/Anime/VanitasNoCarte.html`,
                    show_image: `/Library/Anime/img/80.jpg`,
                    show_title: `Vanitas no Carte`,
                    show_section: `Anime`,
                    show_code: `Vanitasu no Karute Vanitas no Carte anime anime`,
                },
                {
                    show_link: `/Library/Anime/InitialD.html`,
                    show_image: `/Library/Anime/img/81.jpg`,
                    show_title: `Initial D`,
                    show_section: `Anime`,
                    show_code: `InitialD Initial D Inisharu Dī Inisharu Di anime`,
                },
                {
                    show_link: `/Library/Anime/AssassinationClassroom.html`,
                    show_image: `/Library/Anime/img/82.jpg`,
                    show_title: `Assassination Classroom`,
                    show_section: `Anime`,
                    show_code: `Assassination Classroom Ansatsu Kyōshitsu Ansatsu Kyoshitsu anime`,
                },
                {
                    show_link: `/Library/Anime/MashleMagicAndMuscle.html`,
                    show_image: `/Library/Anime/img/83.jpg`,
                    show_title: `Mashle Magic and Muscle`,
                    show_section: `Anime`,
                    show_code: `Mashle Magic and Muscle Masshuru anime`,
                },
                {
                    show_link: `/Library/Anime/TrainToTheEndOfTheWorld.html`,
                    show_image: `/Library/Anime/img/84.jpg`,
                    show_title: `Train to the End of the world`,
                    show_section: `Anime`,
                    show_code: `Train to the End of the world anime`,
                },
                {
                    show_link: `/Library/Anime/Yatagarasu.html`,
                    show_image: `/Library/Anime/img/85.jpg`,
                    show_title: `Yatagarasu`,
                    show_section: `Anime`,
                    show_code: `Yatagarasu anime`,
                },
                {
                    show_link: `/Library/Anime/WindBreaker.html`,
                    show_image: `/Library/Anime/img/86.jpg`,
                    show_title: `Wind Breaker`,
                    show_section: `Anime`,
                    show_code: `Wind Breaker Uindo Bureikā Uindo Bureika anime`,
                },
                {
                    show_link: `/Library/Anime/ApothecaryDiaries.html`,
                    show_image: `/Library/Anime/img/87.jpg`,
                    show_title: `Apothecary Diaries`,
                    show_section: `Anime`,
                    show_code: `Apothecary Diaries Kusuriya no Hitorigoto anime`,
                },
                {
                    show_link: `/Library/Anime/ASignOfAffection.html`,
                    show_image: `/Library/Anime/img/88.jpg`,
                    show_title: `A Sign Of Affection`,
                    show_section: `Anime`,
                    show_code: `A Sign Of Affection Hibike! Yūfoniamu Hibike! Yufoniamu anime`,
                },
                {
                    show_link: `/Library/Anime/SoundEuphonium.html`,
                    show_image: `/Library/Anime/img/89.jpg`,
                    show_title: `Sound! Euphonium`,
                    show_section: `Anime`,
                    show_code: `Sound! Euphonium anime`,
                },
                {
                    show_link: `/Library/Anime/TheWitchAndTheBeast.html`,
                    show_image: `/Library/Anime/img/90.jpg`,
                    show_title: `The Witch And The Beast`,
                    show_section: `Anime`,
                    show_code: `The Witch And The Beast anime`,
                },
                {
                    show_link: `/Library/Anime/Black Butler.html`,
                    show_image: `/Library/Anime/img/91.jpg`,
                    show_title: `Black Butler`,
                    show_section: `Anime`,
                    show_code: `Black Butler Kuroshitsuji anime`,
                },
                {
                    show_link: `/Library/Anime/HighSpeedEtoile.html`,
                    show_image: `/Library/Anime/img/92.jpg`,
                    show_title: `HighSpeed Etoile`,
                    show_section: `Anime`,
                    show_code: `High Speed Etoile HighSpeed Etoile HIGHSPEED Étoile anime`,
                },
                {
                    show_link: `/Library/Anime/MetallicRouge.html`,
                    show_image: `/Library/Anime/img/93.jpg`,
                    show_title: `Metallic Rouge`,
                    show_section: `Anime`,
                    show_code: `Metallic Rouge Metarikku Rūju Metarikku Ruju anime`,
                },
                {
                    show_link: `/Library/Anime/AkumaDrive.html`,
                    show_image: `/Library/Anime/img/94.jpg`,
                    show_title: `Akuma Drive`,
                    show_section: `Anime`,
                    show_code: `Akuma Drive AkumaDrive anime`,
                },
                {
                    show_link: `/Library/Anime/AstroNote.html`,
                    show_image: `/Library/Anime/img/95.jpg`,
                    show_title: `Astro Note`,
                    show_section: `Anime`,
                    show_code: `Astro Note Asutoro Nōto Asutoro Noto anime`,
                },
                {
                    show_link: `/Library/Anime/HeavenOfficialsBlessing.html`,
                    show_image: `/Library/Anime/img/96.jpg`,
                    show_title: `Heaven Official's Blessing`,
                    show_section: `Anime`,
                    show_code: `Heaven Officials Blessings Heaven Official's Blessings Tiān Guān Cì Fú Tian Guan Ci Fu anime`,
                },
                {
                    show_link: `/Library/Anime/TheWrongWayToUseHealingMagic.html`,
                    show_image: `/Library/Anime/img/97.jpg`,
                    show_title: `The Wrong Way To Use Healing Magic`,
                    show_section: `Anime`,
                    show_code: `The Wrong Way To Use Healing Magic anime`,
                },
                {
                    show_link: `/Library/Anime/Konosuba.html`,
                    show_image: `/Library/Anime/img/98.jpg`,
                    show_title: `Konosuba`,
                    show_section: `Anime`,
                    show_code: `Konosuba God's Blessing on This Wonderful World! KonoSuba: God's Blessing on This Wonderful World! anime`,
                },
                {
                    show_link: `/Library/Anime/KaijuNo8.html`,
                    show_image: `/Library/Anime/img/99.jpg`,
                    show_title: `Kaiju No. 8`,
                    show_section: `Anime`,
                    show_code: `Kaiju No. 8 Kaiju No.8 Kaiju No8 KaijuNo8 Kaijū Hachigō Kaiju Hachigo anime`,
                },
                {
                    show_link: `/Library/Anime/TheNewGate.html`,
                    show_image: `/Library/Anime/img/100.jpg`,
                    show_title: `The New Gate`,
                    show_section: `Anime`,
                    show_code: `The New Gate anime`,
                },
                {
                    show_link: `/Library/Anime/SoloLeveling.html`,
                    show_image: `/Library/Anime/img/101.jpg`,
                    show_title: `Solo Leveling`,
                    show_section: `Anime`,
                    show_code: `SoloLeveling Solo Leveling Na Honjaman Rebeleop anime`,
                },
                {
                    show_link: `/Library/Anime/DailyLifeOfAnImmortalKing.html`,
                    show_image: `/Library/Anime/img/102.jpg`,
                    show_title: `Daily Life Of An Immortal King`,
                    show_section: `Anime`,
                    show_code: `Daily Life Of An Immortal King Xiān Wáng de Rìcháng Shēnghuó Xian Wáng de Richang Shenghuo anime`,
                },
            ];
    
    
            // Function to display items
            const displayItem = (items) => 
            {
                searchwall.innerHTML = items.map((item) => 
                {
                    const { show_link, show_image, show_title, show_section } = item;
                    if((search_query.length > 0) && (search_query != undefined) && (search_query != null) && (search_query != " "))
                    {
                        return `
                        <div class="slide_card_base">
                            <div class="slide_card_bdr">
                                <div class="slide_card_box">
                                    <div class="slide_card">
                                        <a href="${show_link}"  title="Watch ${show_title}" class="cardLinkCover"></a>
                                        <div class="cardImgBox">
                                            <img src="${show_image}" alt="Image of the ${show_section}: ${show_title}" class="cardImg">
                                        </div>
                                        <div class="cardQualityBox">
                                            <h1 class="cardQualityText">HD</h1>
                                        </div>
                                        <div class="cardinfo cardInfoBdr">
                                            <div class="cardInfoBox">
                                                <div class="cardInfo_tagBdr">
                                                    <div class="cardInfo_tagBox">
                                                        <p class="cardInfo_tagText">Anime</p>
                                                    </div>
                                                    <div class="cardInfo_tagBox">
                                                        <p class="cardInfo_tagText">2024</p>
                                                    </div>
                                                </div>
                                                <div class="cardInfo_titleBox">
                                                    <h3 class="cardInfo_titleText">${show_title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cardAddToListBdr">
                                            <div class="cardAddToListBox">
                                                <div class="cardAddToListIconBox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cardAddToListIcon plusIcon">
                                                        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                                    </svg>
                                                </div>
                                                <div class="cardAddToListIconBox hiddenIconBox add_to_WatchListBox" title="Add to watchlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon add_to_WatchListIcon cardAddToListIcon">
                                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cardAddToListIcon hiddenIcon remove_from_WatchListIcon">
                                                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                                                    </svg>
                                                    <p style=" display: none !important;" class="add_to_WatchListText"></p>
                                                </div>
                                                <div class="cardAddToListIconBox hiddenIconBox openAddToPLBtn" title="Add to Playlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cardAddToListIcon hiddenIcon rating_btnIcon add_to_LikedShows">
                                                        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="slide_card_bcg"></div>
                            </div>
                        </div>
                    `;
                    }
                    else
                    {
                        return null;
                    }
                }).join('');

                // Reattaching listeners
                attachWatchListEventListeners();
                attachAddToPLEventListeners();
            };
    
            searchInput.addEventListener("keyup", filterInput);

            // Clears search field
            searchInput.addEventListener("input" , () => 
            {
                if(searchInput.value.length > 0)
                {
                    searchXmark.classList.add("active");
                    return;
                }
                searchXmark.classList.remove("active");
            });

            searchXmark.addEventListener("click" , () => 
            {
                searchInput.value = "";
                search_query = "";
                searchXmark.classList.remove("active");
                filterInput();
            });

            // Filter and display result based on user's entry
            function filterInput()
            {
                search_query = searchInput.value.trim().toLowerCase();
                searchTitle.textContent = `"${search_query}"`;
                const filteredData = searchInventory.filter((item) => item.show_code.toLowerCase().includes(search_query));
                displayItem(filteredData);
    
                // Automatically scrolls the page back to top for every input
                window.scrollTo(null , 0);
            }
            
            searchInput.addEventListener("keyup", filterInput);
    }








