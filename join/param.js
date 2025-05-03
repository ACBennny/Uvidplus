 
/***************************************************************
 * This contains attributes of a user in uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/
users_arr = 
[
    // Attributes for a single user
    {
        // Default user feature (Firbase might have it's own naming procedures)
        user_id: ``,
        username: ``,
        email: ``,
        password: ``,
        phone_number: ``,

        // Profiles (1 defualt profile, up to 4 new ones)
        profiles: 
        [
            {
                prof_id: `p734ednt98g73w2q`,
                prof_selected: `no`,
                prof_name: `Uvid`, // I may give option to provide a name during sign up process
                prof_type: `default`, // This marks a default profile. Others are labelled "normal". Default can't be deleted.
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
        ],

        // Payment methods (Cards for now)
        pymt_mtd: 
        [
            {
                pay_type: `card`, // type of payment method (card)
                pay_name: ``, // Card nickname
                pay_cardNo: ``,  // Card Number
                pay_cardMonth: ``, // Expiry month
                pay_cardYear: ``, // Expiry name
                pay_cardFName: ``, // First name on card
                pay_cardLName: ``, // Last name on card
                pay_cardCity: ``, // City of billing adress
                pay_cardState: ``, // State (or Province) of billing address
                pay_cardCountry: ``, // Country of billing address
                pay_cardPostal: ``, // Postal code of billing address
                pay_isDflt: true, // Boolean to determine if this is the default payment
            },
        ],

        // Current streaming plan
        curr_plan: 
        [
            {
                plan_name: ``, // Name of the straeming plan
                plan_id: ``, // Unique plan id
                plan_price_month: ``, // Price to be paid per month
                plan_price_year: ``, // Price to be paid per year
                plan_price_sel: ``, // The price plan chosen for recurring pyment. (Either monthly or yearly)
                plan_benefits: [], // Benefits of the streaming plan
            },
        ],

        // Billing history (Not finished)
        billing_hist: 
        [
            {
                bill_plan: {}, // might use same details as the content of curr stream plan
                bill_cycle_count: 0, // How many times has plan been active 
            },
        ],

        // More settings
        is_membership_active: true, // Boolean for if a membership is currently active
        cast_data_usage: ``, // The limit on how much data will be used during casting
        dwld_qlty: ``, // The preferred quality for downloaded shows
        dwld_audio: ``, // The preferred audio language for downloaded shows
        wifi_dwld: true, // Boolean for whether to ONLY download using wifi
        wifi_stream: false, // Boolean for only streaming when there's wifi
        cellular_stream: true, // Notify user when straming with mobile data
        conn_apps: [], // Apps connected to the user's account. Not availble yet
        device_mngmt: [], // Manage all devices you've logged into
        share_prsnl_info: true, // Boolean for if user wants their personal info to be shared/sold to 3rd party services
        // More or less if needed

    },
];