/***************************************************************
 * This will serve as a data library for Language Options of 
 * The Edit Profile Modal
 * 
 * Note: Variables are encapsulated inside an IIFE (Immediately Invoked Function Expression)
 *      to prevent redeclarion or other unexpected issues as the file is inserted/removed dynamically
 * 
 *      Use "LangOptLib.langOptInv" to access the array
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


(() => 
{
    const langOptInv = 
    {
        "appLangSelect": 
        {
            lang_sectname: `App Language`,
            lang_desc: `Set your preferred language for all contents of the app.`,
            lang_primary: `English`,
            lang_options: [
                {opt: `Arabic`,},
                {opt: `Bulgarian`,},
                {opt: `Chinese (Simplified)`,},
                {opt: `Chinese (Traditional)`,},
                {opt: `Croatian`,},
                {opt: `Czech`,},
                {opt: `Danish`,},
                {opt: `Dutch`,},
                {opt: `English`,},
                {opt: `Finnish`,},
                {opt: `French (France)`,},
                {opt: `German`,},
                {opt: `Greek`,},
                {opt: `Gurajati`,},
                {opt: `Hebrew`,},
                {opt: `Hindi`,},
                {opt: `Hungarian`,},
                {opt: `Indonesia`,},
                {opt: `Italian`,},
                {opt: `Japanese`,},
                {opt: `Korean`,},
                {opt: `Norwegian`,},
                {opt: `Polish`,},
                {opt: `Portugese (Brazil)`,},
                {opt: `Portugese (Portugal)`,},
                {opt: `Punjabi`,},
                {opt: `Romanian`,},
                {opt: `Russian`,},
                {opt: `Spanish`,},
                {opt: `Swedish`,},
                {opt: `Tamil`,},
                {opt: `Thai`,},
                {opt: `Turkish`,},
                {opt: `Vietnamese`,},
                {opt: `Ukrainian`,},
            ],
        },
        "audioLangSelect": 
        {
            lang_sectname: `Audio Language`,
            lang_desc: `Set your preferred language for the audio of your shows.`,
            lang_primary: `English`,
            lang_options: [
                {opt: `Arabic`,},
                {opt: `Bulgarian`,},
                {opt: `Chinese (Simplified)`,},
                {opt: `Chinese (Traditional)`,},
                {opt: `Croatian`,},
                {opt: `Czech`,},
                {opt: `Danish`,},
                {opt: `Dutch`,},
                {opt: `English`,},
                {opt: `Finnish`,},
                {opt: `French (France)`,},
                {opt: `German`,},
                {opt: `Greek`,},
                {opt: `Gurajati`,},
                {opt: `Hebrew`,},
                {opt: `Hindi`,},
                {opt: `Hungarian`,},
                {opt: `Indonesia`,},
                {opt: `Italian`,},
                {opt: `Japanese`,},
                {opt: `Korean`,},
                {opt: `Norwegian`,},
                {opt: `Polish`,},
                {opt: `Portugese (Brazil)`,},
                {opt: `Portugese (Portugal)`,},
                {opt: `Punjabi`,},
                {opt: `Romanian`,},
                {opt: `Russian`,},
                {opt: `Spanish`,},
                {opt: `Swedish`,},
                {opt: `Tamil`,},
                {opt: `Thai`,},
                {opt: `Turkish`,},
                {opt: `Vietnamese`,},
                {opt: `Ukrainian`,},
            ],
        },
        "subCCLangSelect":
        {
            lang_sectname: `Subtitle/CC Language`,
            lang_desc: `Set your preferred language for your subtitles/CC.`,
            lang_primary: `English`,
            lang_options: [
                {opt: `Arabic`,},
                {opt: `Bulgarian`,},
                {opt: `Chinese (Simplified)`,},
                {opt: `Chinese (Traditional)`,},
                {opt: `Croatian`,},
                {opt: `Czech`,},
                {opt: `Danish`,},
                {opt: `Dutch`,},
                {opt: `English`,},
                {opt: `Finnish`,},
                {opt: `French (France)`,},
                {opt: `German`,},
                {opt: `Greek`,},
                {opt: `Gurajati`,},
                {opt: `Hebrew`,},
                {opt: `Hindi`,},
                {opt: `Hungarian`,},
                {opt: `Indonesia`,},
                {opt: `Italian`,},
                {opt: `Japanese`,},
                {opt: `Korean`,},
                {opt: `Norwegian`,},
                {opt: `Polish`,},
                {opt: `Portugese (Brazil)`,},
                {opt: `Portugese (Portugal)`,},
                {opt: `Punjabi`,},
                {opt: `Romanian`,},
                {opt: `Russian`,},
                {opt: `Spanish`,},
                {opt: `Swedish`,},
                {opt: `Tamil`,},
                {opt: `Thai`,},
                {opt: `Turkish`,},
                {opt: `Vietnamese`,},
                {opt: `Ukrainian`,},
            ],
        },
    };

    // Exporting the variable to a global namespace
    window.LangOptLib = window.LangOptLib || {}; // Ensure namespace exists
    window.LangOptLib.langOptInv = langOptInv;
})();




