/*************************************************************
 * This is the script for the homepage of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/




//  to Expand and minimize the bar
    const expandBarBtn = document.querySelector('#expand_bar_btn');
    const navCtnt = document.querySelector('.langsel');
    const navCtntName = document.querySelectorAll('.langsel h3 span');

    expandBarBtn.onclick = () => {
        if(expandBarBtn.classList.contains('active'))
        {
            expandBarBtn.classList.remove('active');
            navCtnt.classList.remove('pactive');
            navCtntName.forEach(navCtntNames => {
                navCtntNames.classList.remove('spnactive');
            });
            openBox.forEach(opnBxs => {
                opnBxs.classList.remove('Navactive');
            });
        }
        else
        {
            expandBarBtn.classList.add('active');
            navCtnt.classList.add('pactive');
            navCtntName.forEach(navCtntNames => {
                navCtntNames.classList.add('spnactive');
            });
            openBox.forEach(opnBxNavs => {
                opnBxNavs.classList.add('Navactive');
            });
        }

    }


    // This opens an iframe menu when something is clicked
        function openPageFrame(){

            // Creating the div element
            const pageFrameBdr = document.createElement('div');

            // Styling the element
            pageFrameBdr.classList.add('pageframeBdr');

            // Creating the iframe
            const pageIframe = document.createElement('iframe');
            
            // Styling and adding attributes
            pageIframe.classList.remove('bdr-atv');
            pageIframe.src = "Uvid-Premium.html";
            pageIframe.classList.add('pageIframeClass');

            // designing the close button
            const closeIframeBtn = document.createElement('i');
            closeIframeBtn.classList.add('fa-solid');
            closeIframeBtn.classList.add('fa-xmark');
            closeIframeBtn.classList.add('closePageIframe');
            
            // Appending the class
            pageFrameBdr.appendChild(closeIframeBtn);
            pageFrameBdr.appendChild(pageIframe);

            document.body.appendChild(pageFrameBdr);
            document.body.classList.add('bodystop');

            //closing the iframe
            closeIframeBtn.onclick = () => {
                document.body.removeChild(pageFrameBdr);
                document.body.classList.remove('bodystop');
            }
        }





/* This allows the user to open the different tabs from the dropdown menu */
                //opening the popup
                let openBox = document.querySelectorAll('.menform');
                let opendsp = document.querySelectorAll('.frmenu');
                let closedsp = document.querySelectorAll('.xhlpform');
                let closedspBcg = document.querySelectorAll('.xhlpBcg');
                var opup = function(opupClick){
                    openBox[opupClick].classList.add('frmactive');
                }

                opendsp.forEach((opendsps, i) => {
                    opendsps.addEventListener("click" , () => {
                        openBox.forEach(opnBxs => {
                            opnBxs.classList.remove('frmactive');
                        });
                        opup(i);
                    });
                });

                //this will close the popup
                closedsp.forEach((closedsps, i) => {
                    closedsps.addEventListener("click" , () => {
                        openBox.forEach((opupBoxes) => {
                            opupBoxes.classList.remove('frmactive');
                        });
                    });
                });

                closedspBcg.forEach((closedsps, i) => {
                    closedsps.addEventListener("click" , () => {
                        openBox.forEach((opupBoxes) => {
                            opupBoxes.classList.remove('frmactive');
                        });
                    });
                });







            
// TERMS AND CONDITIONS


    // if user wishes to  download of a copy of the terms and conditions
        const Dwnld_here = document.querySelector('.dwldtchere');
        const tc_Dwnld = document.createElement('a');

        Dwnld_here.addEventListener("click" , () => {
            tc_Dwnld.href="Uvid-tc-dwld.pdf";
            tc_Dwnld.download="Uvid-tc-dwld.pdf";
            document.body.appendChild(tc_Dwnld);
            tc_Dwnld.click();
            document.body.removeChild(tc_Dwnld);
        });











// FOR PREMIUM

            // open
            const moreinfo = document.getElementById('pmoreinfo');
            moreinfo.addEventListener('click', () =>{
                let we0 = document.getElementById('we');
                we0.classList.add('baseactv');
            });

            // close
            const lessinfo = document.getElementById('lessinfo0b');
            lessinfo.addEventListener('click', () =>{
            let we0b = document.getElementById('we');
                we0b.classList.remove('baseactv');
            });

            const lessinfo0a = document.getElementById('lessinfo0a');
            lessinfo0a.addEventListener('click', () =>{
                let we0a = document.getElementById('we');
                we0a.classList.remove('baseactv');
            });


            // For Premium Plus

            // open
            const moreinfo1 = document.getElementById('pmoreinfo1');
            moreinfo1.addEventListener('click', () =>{
                let we1 = document.getElementById('we1');
                we1.classList.add('baseactv');
            });

            // close
            const lessinfo1 = document.getElementById('lessinfo1b');
            lessinfo1.addEventListener('click', () =>{
                let we1b = document.getElementById('we1');
                we1b.classList.remove('baseactv');
            });

            const lessinfo1a = document.getElementById('lessinfo1a');
            lessinfo1a.addEventListener('click', () =>{
                let we1a = document.getElementById('we1');
                we1a.classList.remove('baseactv');
            });





// CUSTOMER CARE



  // This section is for the dropdown menu in the customer care tab



        // This will open the dropdown menu
        let catvis = document.querySelector('.catvis');
        let catopt = document.querySelector('.catopt');
        let rtd = document.querySelector('.rtd');

        catvis.onclick = () => {
            catopt.classList.toggle('optdrp');
            catvis.classList.toggle('vistog');
            rtd.classList.toggle('rtd180');
            nom.style.display = "none";
            othcat.value="";
        };


        // These are for the different options in the dropdown menu
        // When clicked the dropdown menu is close and the name of the option appears at the top

            let cattitle1 = document.querySelector('#cattitle');
            let nom = document.querySelector('.entrnom');
            let cgy1 = document.querySelector('#cgy1');
            let cgy2 = document.querySelector('#cgy2');
            let cgy3 = document.querySelector('#cgy3');
            let cgy4 = document.querySelector('#cgy4');
            let certinp = document.querySelector('.cert');

            cgy1.onclick = () => {
                cattitle1.innerHTML = "Guidance";
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };
            cgy2.onclick = () => {
                cattitle1.innerHTML = "Information";
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };
            cgy3.onclick = () => {
                cattitle1.innerHTML = "Bugs";
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };
            cgy4.onclick = () => {
                cattitle1.innerHTML = "";
                nom.style.display = "flex";
                othcat.oninput = () => {
                    cattitle1.innerText = othcat.value;
                };
            };
            certinp.onclick = () => {
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };


        // This for the area where the user will describe their issue
            let lblcur = document.querySelector('.lblpoint');
            let descbox = document.querySelector('.descbx');
            let desclbl = document.querySelector('#desclbl');
            let submt = document.querySelector('.sbtform');

            descid.oninput = () => {
                if(descid.value.length > 5)
                {
                    submt.style.width = "100%";
                }
                else
                {
                    submt.style.width = "0%";
                }
            }












//  MY SHOWS



    // Creating a new playlist

    const newShowBtn = document.querySelector('.new-show-btn');
    const newShowBdr = document.querySelector('.new-list-bdr');
    const newShowBcg = document.querySelector('.new-list-bcg');

    //this will open the box so the user can enter a name
    newShowBtn.onclick = () => {
        newShowBdr.classList.add('bdr-atv');
    }

    // this only closes the box
    newShowBcg.onclick = () => {
        newShowBdr.classList.remove('bdr-atv');
        new_list_name_id.value="";
        new_list_abt_id.value="";
        new_list_warn_id.innerText="";
    }


    // this will create the playlist
        const createNewList =  document.querySelector('.new-list-create-btn');


        createNewList.addEventListener('click' , () => {
            const playBox = document.querySelector('.scebx');
            var listInputWarn = document.querySelector('.new-list-det-box h6');

            var listDesc = document.querySelector('#new_list_abt_id').value.toUpperCase();
            var listName = document.querySelector('#new_list_name_id').value.toUpperCase();

            if(listName.length <= 0)
            {
                // checks if user tries to create without a name
                listInputWarn.innerText = "please enter a name";
            }
            else if(listName.length < 3)
            {
                // checks if playlist name is less than three (3) characters/letters
                listInputWarn.innerText = "name can not be less than 3 letters";
            }
            else{
                //the major div that will house the elements
                const newShowHouse = document.createElement('div');
                newShowHouse.classList.add('sce');


                // For the playlist title
                const showTitleBox = document.createElement('div');
                showTitleBox.classList.add('schead');

                const showTitleName = document.createElement('h2');
                showTitleName.innerText = new_list_name_id.value;

                showTitleBox.appendChild(showTitleName);


                // the area where the different shows will appear
                const showBody = document.createElement('div');
                showBody.classList.add('scbody');

                //the description of the playlist
                const showDesc = document.createElement('h6');
                showDesc.classList.add('scDesc');
                showDesc.innerText = new_list_abt_id.value;

                showBody.appendChild(showDesc);


                // to expand and contract the playbox
                const showArwBox = document.createElement('div');
                showArwBox.classList.add('scxpand');

                const showArrow = document.createElement('i');
                showArrow.classList.add('fa-solid');
                showArrow.classList.add('fa-caret-down');

                showArwBox.appendChild(showArrow);


                //this will append all of the above to itself
                newShowHouse.appendChild(showTitleBox);
                newShowHouse.appendChild(showBody);
                newShowHouse.appendChild(showArwBox);

                //this will add the newly created elements into the playlist
                playBox.appendChild(newShowHouse);

                //this will remove the contents in the fields
                new_list_name_id.value="";
                new_list_abt_id.value="";
                new_list_warn_id.innerText="";

                // hmm
                const showTab1 = document.querySelectorAll('.scbody');
                const ArrwSet1 = document.querySelectorAll('.scxpand');
                const downArrw1 = document.querySelectorAll('.scxpand .fa-caret-down');


                //opening the popup
                var showpop1 = function(showClick1){
                    showTab1[showClick1].classList.toggle('scbodyxpd');
                }

                var rotateARW1 = function(downClick1){
                    downArrw1[downClick1].classList.toggle('xpdrotate');
                }

                ArrwSet1.forEach((opnbdrs1, i) => {
                    opnbdrs1.addEventListener("click" , () => {
                        showTab1.forEach(showtab1s => {
                            showtab1s.classList.remove('scbodyxpd');
                        });
                        downArrw1.forEach(downArrw1s => {
                            downArrw1s.classList.remove('xpdrotate');
                        });
                        showpop1(i);
                        rotateARW1(i);
                    });
                });

                //this will close the box once the new playlist has been created
                newShowBdr.classList.remove('bdr-atv');
            }
        });

    


    // this will cause the differnt sections to expand and contract in length

        const showTab = document.querySelectorAll('.scbody');
        const ArrwSet = document.querySelectorAll('.scxpand');
        const offLists = document.querySelector('.collapseLists');
        const downArrw = document.querySelectorAll('.scxpand .fa-caret-down');


        //opening the popup
        var showpop = function(showClick){
            showTab[showClick].classList.toggle('scbodyxpd');
        }

        var rotateARW = function(downClick){
            downArrw[downClick].classList.toggle('xpdrotate');
        }

        ArrwSet.forEach((opnbdrs, i) => {
            opnbdrs.addEventListener("click" , () => {
                showTab.forEach(showtabs => {
                    showtabs.classList.remove('scbodyxpd');
                });
                downArrw.forEach(downArrws => {
                    downArrws.classList.remove('xpdrotate');
                });
                showpop(i);
                rotateARW(i);
            });
        });


        //this will collapse all playlists
        offLists.addEventListener("click" , () => {
            showTab.forEach(showtabs => {
                showtabs.classList.remove('scbodyxpd');
            });
        });

        //to override the prem mode(it will be REMOVED)
        const newList = document.querySelector('.newList');
        const myShowList = document.querySelectorAll('.sce');
        const buyScePrem = document.querySelector('.scePrem');
        const byPassMyShows = document.querySelector('.opnMyshowsBtn u');
        
        byPassMyShows.onclick = () => {
            newList.classList.remove('premsce');
            myShowList.forEach(myShowLists => {
                myShowLists.classList.remove('premsce');
            });
            buyScePrem.classList.add('premsce');
        }
        












// PROFILE PAGE

            
            const byPassNameNorm = document.querySelector('.chngusrnom');
            const byPassNamePrem = document.querySelector('.chngusrnomPrem');
            const byPassBcgNorm = document.querySelector('.chngBcgPicNorm');
            const byPassBcgPrem = document.querySelector('.chngBcgPicPrem');
            const buyProfPrem = document.querySelector('.opnProfPrem');
                const byPassMyProf = document.querySelector('.opnProfPrem u');
                
                byPassMyProf.onclick = () => {
                    byPassNameNorm.classList.remove('PremFeat');
                    byPassNamePrem.classList.add('PremFeat');
                    byPassBcgNorm.classList.remove('PremFeat');
                    byPassBcgPrem.classList.add('PremFeat');
                }



        

        // This will allow the user to open the menu too see various options
        
            let profrm = document.querySelector('.profform');
            let profBase = document.querySelector('.profBase');

            function profilemenu () {
                if(profBase.classList.contains('prof-atv')){
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                }
                else{
                    profBase.classList.add('prof-atv');
                }
            }



        // activates forms for different attributes of the menu

        const optBody = document.querySelectorAll('.profchng');
        const optOpen = document.querySelectorAll('.optbtn');


        //opening the popup
        var optPop = function(optBodyClick){
            optBody[optBodyClick].classList.toggle('profchngatv');
        }

        optOpen.forEach((opnOpts, i) => {
            opnOpts.addEventListener("click" , () => {
                optBody.forEach(optBodies => {
                    optBodies.classList.remove('profchngatv');
                });
                optPop(i);
            });
        });


        // As there is no server we will declare our gen pass
        let genPAssword = "1234567890";
        let genEmail = "testuseremail@example.com";
        let genUserName = "testuser";
        const incorrectPassWarn = document.querySelector('.profForm .incorrectPassWarn');



        // This will allow the user to user to change their user [name]
            const ProfdispName = document.querySelector('#txtcnt1');
            var newProfName = document.querySelector('#new_prof_user_id');
            var askforPasstoChangeUser = document.querySelector('#change_prof_user_pass');
            const updProfNAmeBtn = document.querySelector('#upd_prof_name_btn');
            const incorrectPassWarn1 = document.querySelector('.profForm .incorrectPassWarn1');

            updProfNAmeBtn.addEventListener("click" , () => {
                if(change_prof_user_pass.value == genPAssword.valueOf())
                {
                    ProfdispName.innerText = new_prof_user_id.value;
                    incorrectPassWarn1.innerText = "";
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                }
                else
                {
                    incorrectPassWarn1.innerText = "password is incorrect";
                }
            });



        // This will allow the user to user to change their user [email]
            const ProfdispEmail = document.querySelector('#txtcnt2');
            var newProfName = document.querySelector('#new_prof_email_id');
            var askforPasstoChangeUser = document.querySelector('#change_prof_email_pass');
            const updProfEmailBtn = document.querySelector('#update_prof_email_btn');
            const incorrectPassWarn2 = document.querySelector('.profForm .incorrectPassWarn2');

            updProfEmailBtn.addEventListener("click" , () => {
                if(change_prof_email_pass.value == genPAssword.valueOf())
                {
                    ProfdispEmail.innerText = new_prof_email_id.value;
                    incorrectPassWarn2.innerText = "";
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                }
                else
                {
                    incorrectPassWarn2.innerText = "password is incorrect";
                }
            });



        // This will allow the user to user to change their user [password]
            const ProfdispPass = document.querySelector('#txtcnt3');
            var askforPasstoChangeUser = document.querySelector('#change_prof_user_pass');
            var newProfName = document.querySelector('#new_prof_user_id');
            var confirmNewProfName = document.querySelector('#new_prof_user_id');
            const updProfPassBtn = document.querySelector('#update_prof_pass_btn');
            const incorrectPassWarn3 = document.querySelector('.profForm .incorrectPassWarn3');

            updProfPassBtn.addEventListener("click" , () => {
                if(cur_prof_pass.value == genPAssword.valueOf() && new_prof_pass.value == conf_new_prof_pass)
                {
                    genPAssword = conf_new_prof_pass.value;
                    incorrectPassWarn3.innerText = "";
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                }
                else
                {
                    incorrectPassWarn3.innerText = "password is incorrect";
                }
            });



        // This will allow the user to user to change their user [foreground picture]
            let changforepic = document.querySelector('.chngpicfore');

                // This will incur the change of the picture
                const mainpic = document.querySelector('.profiledpimg');
                let fstpic = document.querySelector('#forepic');

                fstpic.addEventListener('change' , () => {
                    mainpic.src = URL.createObjectURL(fstpic.files[0]);
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                });

                //This will remove the current picture and revert to default
                const foreresetpic = document.getElementById("profforereset");
                foreresetpic.addEventListener('click' , () => {
                    mainpic.src = "Uvid_img/27.png";

                 // Closes the menu
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                });




                

        // This will allow the user to user to change their user [background picture]
            let changebackpic = document.querySelector('.chngpicback');

                // This will simulate the change of the picture
                const minpic = document.querySelector('.backgrdpicture');
                let scdpic = document.querySelector('#backpic');

                scdpic.addEventListener('change' , () => {
                    minpic.src = URL.createObjectURL(scdpic.files[0]);

                    // Closes the menu
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                });

                //This will remove the current picture and revert to default
                const backresetpic = document.getElementById("profbcgreset");
                backresetpic.addEventListener('click' , () => {
                    minpic.src = "Uvid_img/bcg/default.jpg";

                    // Closes the menu
                    profBase.classList.remove('prof-atv');
                    optBody.forEach(optBodies => {
                        optBodies.classList.remove('profchngatv');
                    });
                });

            // this will change the colour of the background by changing the pics
                const changeBcgClrBdr = document.querySelector('.chngClrBdr');
                const chngClrBdrClose = document.querySelector('.chngClrBdrClose');
                const profBcgClr = document.getElementById("profbcgclr");
                const bcgClrChoice = document.querySelectorAll('.ClrOptionBox');
                const clrCode = document.querySelectorAll('.ClrOptionSelect span');

                //opens the menu to alow user select a colour
                profBcgClr.addEventListener("click" , () => {
                    changeBcgClrBdr.classList.add('bdr-atv');
                });

                // Closes the menu
                chngClrBdrClose.addEventListener("click" , () => {
                    clrCode.forEach(clrcodes => {
                        clrcodes.style.borderColor = "#a9a9a93b";
                    });
                    changeBcgClrBdr.classList.remove('bdr-atv');
                });

                
                //the variable that will hold the value of the selected colour
                let clrChoice = "";

                // Gives the clrChoice value based on a selected value
                    var clrFunc = function(clrChoiceClick){
                        clrChoice = bcgClrChoice[clrChoiceClick].innerText;
                    }

                    // Function to run switch statement
                    function pickClr()
                    {
                        // Based on the seelcted colour, the following pic is used
                        switch (clrChoice) {
                            case 'Red':
                                minpic.src = "Uvid_img/bcg/red.jpg";
                                break;
                            case 'Orange':
                                minpic.src = "Uvid_img/bcg/orange.jpg";
                                break;
                            case 'Yellow':
                                minpic.src = "Uvid_img/bcg/yellow.jpg";
                                break;
                            case 'Green':
                                minpic.src = "Uvid_img/bcg/green.jpg";
                                break;
                            case 'Blue':
                                minpic.src = "Uvid_img/bcg/blue.jpg";
                                break;
                            case 'Purple':
                                minpic.src = "Uvid_img/bcg/purple.jpg";
                                break;
                            case 'Pink':
                                minpic.src = "Uvid_img/bcg/pink.jpg";
                                break;
                            case 'White':
                                minpic.src = "Uvid_img/bcg/white.jpg";
                                break;
                            case "Grey":
                                minpic.src = "Uvid_img/bcg/grey.jpg";
                                break;
                            case 'Black':
                                minpic.src = "Uvid_img/bcg/black.jpg";
                                break;
                            default:
                                minpic.src = "Uvid_img/bcg/default.jpg";
                                break;
                        }
                    }

                    // this will show a sample of the colour for each option in the list on mouseover
                    function clrHover(clrChoiceHover)
                    {
                        clrCode[clrChoiceHover].style.borderColor = bcgClrChoice[clrChoiceHover].innerText.toLowerCase();
                    }

                // this will call call the above functions for color selection
                    bcgClrChoice.forEach((bcgClrChoices, i) => {
                        bcgClrChoices.addEventListener("click" , () => {
                            clrFunc(i);
                            pickClr();

                            // Closes the menus after changing the colour
                            changeBcgClrBdr.classList.remove('bdr-atv');
                            profBase.classList.remove('prof-atv');
                            optBody.forEach(optBodies => {
                                optBodies.classList.remove('profchngatv');
                            });
                        });

                        // Acts like a colour code
                        // changes the colour of the circle beside each colour name when user hovers over it
                        bcgClrChoices.addEventListener("mouseover" , () => {
                            clrCode.forEach(clrcodes => {
                                clrcodes.style.borderColor = "#a9a9a93b";
                            });
                            clrHover(i);
                        });
                    });







// SETTINGS


// FONT

    // It will allow user to be able to change the font style of the browser

            //opening/closing the menu
            let catvis1 = document.querySelector('.catvis0');
            let catopt0 = document.querySelector('.catopt0');
            let rtd0 = document.querySelector('.rtd0');

            catvis1.onclick = () => {
                catopt0.classList.toggle('optdrp');
                catvis1.classList.toggle('vistog');
                rtd0.classList.toggle('rtd180');
            };

        // This will hold the different font types
            let cattitle2 = document.querySelector('#cattitle0');
            let cgy5 = document.querySelector('#cgy5');
            let cgy6 = document.querySelector('#cgy6');
            let cgy7 = document.querySelector('#cgy7');
            let cgy8 = document.querySelector('#cgy8');
            let cgy9 = document.querySelector('#cgy9');
            let cgy10 = document.querySelector('#cgy10');
            let cgy11 = document.querySelector('#cgy11');
            let cgy12 = document.querySelector('#cgy12');
            let cgy13 = document.querySelector('#cgy13');
            let cgy14 = document.querySelector('#cgy14');

            cgy5.onclick = () => {
                document.body.style.fontFamily="Zen dots";
                cattitle2.innerHTML = "Default";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy6.onclick = () => {
                document.body.style.fontFamily="Arial";
                cattitle2.innerHTML = "Arial";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy7.onclick = () => {
                document.body.style.fontFamily="Times New Roman";
                cattitle2.innerHTML = "Times New Roman";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy8.onclick = () => {
                document.body.style.fontFamily="Bahnschrift Light";
                cattitle2.innerHTML = "Bahnschrift Light";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy9.onclick = () => {
                document.body.style.fontFamily="San serif";
                cattitle2.innerHTML = "San serif";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy10.onclick = () => {
                document.body.style.fontFamily="Bauhaus 93";
                cattitle2.innerHTML = "Bauhaus 93";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy11.onclick = () => {
                document.body.style.fontFamily="Calibri";
                cattitle2.innerHTML = "Calibri";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy12.onclick = () => {
                document.body.style.fontFamily="Poppins";
                cattitle2.innerHTML = "Poppins";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy13.onclick = () => {
                document.body.style.fontFamily="Agency FB";
                cattitle2.innerHTML = "Agency FB";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy14.onclick = () => {
                document.body.style.fontFamily="Brush Script MT";
                cattitle2.innerHTML = "Brush Script MT";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
    
  




