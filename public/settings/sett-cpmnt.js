/***************************************************************
 * This contains the components of the sections in the settings page
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


const sett_cmpnt_lib = 
[
    // Membership & Billing
    {
        sett_sect: `membership`,
        sett_orientation: `horizontal`,
        sett_title: `Manage Membership`,
        sett_desc: 
        `
            View the details of your membership, make changes and more.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_mng_membership`,
        sett_atn_title: `Open`,
        sett_atn_func: `init_mng_mbsp`,
    },
    {
        sett_sect: `membership`,
        sett_orientation: `horizontal`,
        sett_title: `Payment Cards`,
        sett_desc: 
        `
            View, edit, update or add new payment cards.
            Note that at least one payment card must be present unless membership is cancelled.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_pay_info`,
        sett_atn_title: `Open`,
        sett_atn_func: `init_pymt_mtds`,
    },
    {
        sett_sect: `membership`,
        sett_orientation: `horizontal`,
        sett_title: `Billing History`,
        sett_desc: 
        `
            View all past billing details.
            Contact customer support for details older than what is shown.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_billing_info`,
        sett_atn_title: `Open`,
        sett_atn_func: `init_bill_hist`,
    },
    {
        sett_sect: `membership`,
        sett_orientation: `horizontal`,
        sett_title: `Redeem  Gift Card or Promocode`,
        sett_desc: 
        `
            Redeem a gift card or promocode to get exclusive discounts during discount events.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_promo_redeem`,
        sett_atn_title: `Open`,
        sett_atn_func: `init_giftcode_mdl`,
    },



    // Profile & Parental Controls
    // Content is dynamically generated


    
    // App Experience Settings
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `App language`,
        sett_desc: 
        `
            English.
        `,
        sett_atn_type: null,
        sett_atn_id: null,
        sett_atn_title: null,
        sett_atn_func: null,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Theater Mode`,
        sett_desc: 
        `
            Toggles Fullscreen.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_theater_mode`,
        sett_atn_title: `Open`,
        sett_atn_func: `toggleFullscreen`,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Notifications`,
        sett_desc: 
        `
            Receive notifications about the shows you love. 
            Easily customize all your notifications settings here.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_app_ntfy`,
        sett_atn_title: `Open`,
        sett_atn_func: `init_ntfy_preference`,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Cast data Usage`,
        sett_desc: 
        `   
            Select the default data usage when casting as it is optimized for larger screens 
            (e.g., televisions) and uses more data than shows streamed via a mobile device.
        `,
        sett_atn_type: `menu`,
        sett_atn_id: `sett_cast_data_usage`,
        sett_atn_title: `Open`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Download Quality`,
        sett_desc: 
        `   
            Select your preferred quality for downloaded shows. 
            Not all shows are available for the quality they are streamed in.
        `,
        sett_atn_type: `menu`,
        sett_atn_id: `sett_dwld_qlty`,
        sett_atn_title: `Open`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Download Audio`,
        sett_desc: 
        `   
            When possible, you can select the language that will be downloaded along with the
            origin language of the show.
            <br>
            If the chosen language is not available, you'll be asked to select from 
            currently available options.
        `,
        sett_atn_type: `menu`,
        sett_atn_id: `sett_dwld_lang`,
        sett_atn_title: `Open`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Wi-Fi Only Downloading`,
        sett_desc: 
        `   
            Only download shows when a Wi-Fi network is available.
        `,
        sett_atn_type: `toggle`,
        sett_atn_id: `sett_wifi_dwld`,
        sett_atn_title: `Toggle`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Wi-Fi Only Streaming`,
        sett_desc: 
        `   
            Only stream shows when a Wi-Fi network is available.
        `,
        sett_atn_type: `toggle`,
        sett_atn_id: `sett_wifi_stream`,
        sett_atn_title: `Toggle`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Cellular Streaming`,
        sett_desc: 
        `   
            Notify when streaming on mobile data.
        `,
        sett_atn_type: `toggle`,
        sett_atn_id: `sett_cellular_stream`,
        sett_atn_title: `Toggle`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `experience`,
        sett_orientation: `horizontal`,
        sett_title: `Connected Apps`,
        sett_desc: 
        `   
            Get more amazing features by connecting Uvid+ to your favourite apps.
            You can manage these settings anytime.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_connect_apps`,
        sett_atn_title: `Open`,
        sett_atn_func: `init_3rd_party_connect`,
    },



    // Privacy Settings
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Fullname`,
        sett_desc: 
        `
            N/A
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_change_fullname`,
        sett_atn_title: `Open`,
        sett_atn_func: `updUsrFullName`,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Email`,
        sett_desc: 
        `
            N/A
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_change_email`,
        sett_atn_title: `Open`,
        sett_atn_func: `valEmailUpd`,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Password`,
        sett_desc: 
        `
            Change your password.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_change_pass`,
        sett_atn_title: `Open`,
        sett_atn_func: `valPassUpd`,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Device Management`,
        sett_desc: 
        `
            Manage the devices connected to your account.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_device_mgmt`,
        sett_atn_title: `Manage`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Sharing/Selling of Personal Information`,
        sett_desc: 
        `
            Note that disabling sharing of personal information will neither change nor reduce
            the presentation of ads and ad breaks for ad based plans. Instead, this only substitutes
            personalized ads with more generic ads that are not determined based on your personal information.
        `,
        sett_atn_type: `toggle`,
        sett_atn_id: `sett_prsnl_info_shrng`,
        sett_atn_title: `Toggle`,
        sett_atn_func: ``,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Clear Watch History`,
        sett_desc: 
        `
            This will clear the entire watch history of the currently selected profile.
            If you want to clear the watch history of a different profile, kindly switch to that profile.
            Note that this action is permanent and cannot be undone after execution. 
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_clr_prof_hist`,
        sett_atn_title: `Clear Watch History`,
        sett_atn_func: `cfrmB4ClrSelProfHist`,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Sign Out`,
        sett_desc: 
        `
            This will sign you out of your account.
            You can always get back to the action by entering your log in credentials.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_sign_out`,
        sett_atn_title: `Sign Out`,
        sett_atn_func: `cfrmB4SignOut`,
    },
    {
        sett_sect: `privacy`,
        sett_orientation: `horizontal`,
        sett_title: `Delete your Account`,
        sett_desc: 
        `
            Deleting your account is a permanent action. 
            Once deleted, it is irrecoverable, meaning you can not recover the account.
        `,
        sett_atn_type: `modal`,
        sett_atn_id: `sett_del_acc`,
        sett_atn_title: `Delete`,
        sett_atn_func: `cfrmB4DelAcc`,
    },



    // About & Legal
    {
        sett_sect: `information`,
        sett_orientation: `vertical`,
        sett_title: `Version`,
        sett_desc: 
        `
            1.000.000.000.0.00.000
        `,
        sett_atn_type: null,
        sett_atn_id: null,
        sett_atn_title: null,
        sett_atn_func: null,
    },
    {
        sett_sect: `information`,
        sett_orientation: `horizontal`,
        sett_title: `Terms of Use`,
        sett_desc: 
        `
            View the terms and conditions that bind how you interact with our services.
        `,
        sett_atn_type: `link`,
        sett_atn_id: `sett_tou`,
        sett_atn_title: `View`,
        sett_atn_func: `#/tou`,
    },
    {
        sett_sect: `information`,
        sett_orientation: `horizontal`,
        sett_title: `Privacy Policy`,
        sett_desc: 
        `
            View our privacy policy to understand how we protect you and your data.
        `,
        sett_atn_type: `link`,
        sett_atn_id: `sett_priv_policy`,
        sett_atn_title: `View`,
        sett_atn_func: `#/privacy`,
    },
    {
        sett_sect: `information`,
        sett_orientation: `horizontal`,
        sett_title: `Copyright`,
        sett_desc: 
        `
            Learn more about how Uvid+ associates with content provided on its platform.
        `,
        sett_atn_type: `link`,
        sett_atn_id: `sett_copyright`,
        sett_atn_title: `View`,
        sett_atn_func: `#/copyright`,
    },
    {
        sett_sect: `information`,
        sett_orientation: `horizontal`,
        sett_title: `Ad Choices`,
        sett_desc: 
        `
            Learn more about how ads work and affect Uvid+ and your experience.
        `,
        sett_atn_type: `link`,
        sett_atn_id: `sett_ad_choices`,
        sett_atn_title: `View`,
        sett_atn_func: `#/ad-choices`,
    },
    {
        sett_sect: `information`,
        sett_orientation: `horizontal`,
        sett_title: `Help`,
        sett_desc: 
        `
            Find possible solutions to questions you may have about our services.
        `,
        sett_atn_type: `link`,
        sett_atn_id: `sett_help`,
        sett_atn_title: `View`,
        sett_atn_func: `#/help`,
    },
    {
        sett_sect: `information`,
        sett_orientation: `horizontal`,
        sett_title: `Feedback`,
        sett_desc: 
        `
            Send your thoughts, suggestions, or report any bugs/issues you may have encountered.
        `,
        sett_atn_type: `link`,
        sett_atn_id: `sett_feedback`,
        sett_atn_title: `Open`,
        sett_atn_func: `#/feedback`,
    },
];




// PROFILE PREFERENCES
const sett_prof_pref_cmp = 
[
    {
        p_type: `menu`,
        p_id: `sett_mng_prof_audio_lang`,
        p_name: `Audio Language`,
        p_desc: 
        `
            If available, the selected audio language will be used instead of the show's origin language.
        `,
    },
    {
        p_type: `menu`,
        p_id: `sett_mng_prof_sbtl_lang`,
        p_name: `Subtitle Language`,
        p_desc: 
        `
            If available, the selected subtitle language will be used instead of the show's origin language.
        `,
    },
    {
        p_type: `toggle`,
        p_id: `sett_mng_prof_sbtl_aprnc`,
        p_name: `Subtitle Appearance`,
        p_desc: 
        `
            Enabling this option displays the show's subtitles when available.
        `,
    },
    {
        p_type: `toggle`,
        p_id: `sett_mng_prof_auto_mute`,
        p_name: `Auto Mute`,
        p_desc: 
        `
            If enabled, the audio is always muted before playing the video.
        `,
    },
    {
        p_type: `toggle`,
        p_id: `sett_mng_prof_auto_next`,
        p_name: `Auto Next`,
        p_desc: 
        `
            Automatically play the next show in a series once the current one has ended.
        `,
    },
    {
        p_type: `toggle`,
        p_id: `sett_mng_prof_auto_play`,
        p_name: `Auto Play`,
        p_desc: 
        `
            Automatically play the show once loaded without waiting for the user to press the play button.
        `,
    },
    {
        p_type: `toggle`,
        p_id: `sett_mng_prof_auto_skip`,
        p_name: `Auto Skip`,
        p_desc: 
        `
            Automatically skip past opening and ending sequences (intros & outros) when detected.
        `,
    },
    {
        p_type: `menu`,
        p_id: `sett_mng_prof_ctnt_restriction`,
        p_name: `Content Restrictions`,
        p_desc: 
        `
            Select the maximum age range for the age rating of content to be displayed.
        `,
    },
];


const sett_ctnt_restrictions_opt = 
{
    "0": `All audiences`,
    "1": `Parental Guidance`,
    "2": `12 years and older`,
    "3": `14 years and older`,
    "4": `16 years and older`,
    "5": `18 years and older`,
}







