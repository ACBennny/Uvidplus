
/***************************************************************
 * This will hold the code for the respective (Anime) shows
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    // FOR VIDEO PLAYER


         // This will open the different SEASONS for the show

         const seasonBox = document.querySelector('.show-home-bx');
         const season = document.querySelectorAll('.show-sub');
         const seasonAtv = document.querySelectorAll('.season-select');


                //opening/closing the episode
                var popSeason = function(popupClick){
                    season[popupClick].classList.toggle('showsub-atv');
                    seasonAtv[popupClick].classList.toggle('mini-nav-atv');
                }

                seasonAtv.forEach((opnSeasons, i) => {
                    opnSeasons.addEventListener("click" , () => {
                        // seasonBox.classList.add('.show-home-bx-atv');
                        season.forEach((seasons) => {
                            seasons.classList.remove('showsub-atv');
                        });
                        seasonAtv.forEach((offNavSeason) => {
                            offNavSeason.classList.remove('mini-nav-atv');
                        });
                        popSeason(i);
                    });
                });








