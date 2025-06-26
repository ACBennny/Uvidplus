 
/***************************************************************
 * This contains attributes of a user in Uvid+
 * 
 *      
 *      email: ``, // The user's email
 *      full_name: ``, // The user's full name
 *      phone_no: ``, // The user's phone number
 *      is_setup: true, // Determines if the user is still setting up their account
 *      stp_steps: `start`, // Holds the current step of the account setup process
 *      is_membership_active: false, // Boolean for if a membership is currently active
 *      cast_data_usage_ul: `auto`, // The Upper limit on how much data will be used during casting
 *      dwld_qlty_pref: `Always ask`, // The preferred quality for downloaded shows
 *      dwld_audio_pref: `Always ask`, // The preferred audio language for downloaded shows
 *      wifi_only_dwld: true, // Boolean for whether to ONLY download using wifi
 *      wifi_only_stream: false, // Boolean for only streaming when there's wifi
 *      cellular_stream_ntfy: true, // Notify user when straming with mobile data
 *      share_prsnl_info: true, // Boolean for if user wants their info to be shared/sold to 3rd party services (For demonstration only)
 *      conn_apps: [], // Apps connected to the user's account. Not available yet
 *      device_mngmt: [], // Manage all devices you've logged into. Not available yet
 * 
 *      curr_plan:
 *      {
 *          curr_plan_id: ``, // Current streaming plan (The id is used to get details of the plan)
 *          curr_plan_start: ``, // The Start date
 *          curr_plan_end: ``, // The end date
 *      } 

 *      // Payment methods (Only cards accepted for now)
 *      pymt_mtd: 
 *      [
 *          {
 *              pay_type: `card`, // type of payment method (card)
 *              pay_cardName: ``, // Card name
 *              pay_cardNo: ``,  // Card Number
 *              pay_cardExp: ``, // Expiry date in "MM/YY"
 *              pay_cardCode: ``, // Security Code
 *              pay_isDflt: true, // Boolean to determine if this is the default payment
 *          },
 *      ],

 *      // Billing history
 *      billing_hist: 
 *      [
 *          {
 *              bill_plan_id: ``, // Id of the plan
 *              bill_plan_name: ``, // Name of the plan
 *              bill_plan_price: ``, // Price of the plan
 *              bill_plan_date: ``, // The date the bill was issued
 *          },
 *      ],

 *      // Profiles (1 defualt profile, 4 more profiles can be added)
 *      profiles:
 *      [
 *          {
 *              prof_id: `dflt`, // Id for default profile. (Other profiles have a randomly generated id)
 *              prof_selected: true, // Boolean deciding whether this is the currently selected profile
 *              prof_name: `Uvid+`, // I may give option to provide a name during sign up process
 *              prof_type: `default`, // This marks a default profile. Others are labelled "other". Default can't be deleted.
 *              prof_frgImg: `/images/uvid-profile-base.png`, // The foreground/profile picture (pfp) of the profile
 *              prof_bcgImg: `/images/uvid-green-bcg1-dark.jpg`, // The background picture of the profile
 *              prof_audio_lang: `English`, // The selected audio language
 *              prof_subtitle_lang: `English`, // The selected subtitle language
 *              prof_show_subtitles: false, // Boolean deciding whether to show subtitles by default
 *              prof_auto_play: false, // Boolean deciding whether to auto play videos on page load
 *              prof_auto_next: false, // Boolean deciding whether to automatically move to the next show in list (i.e. season)
 *              prof_auto_skip: false, // Boolean deciding whether to automatically skip intros and outros of shows whenever possible
 *              prof_lock_state: false, // Boolean deciding whether the profile is locked
 *              prof_lock_pin: `0000`, // Lock pin combination for the profile
 *              prof_ctnt_restriction: `18+`, // The age restriction for shows
 *              prof_history:
 *              [
 *                  {
 *                      hist_link: ``, // The link of the show(containing the ssn and episode if applicable)
 *                      hist_currTime: ``, // The timeline where the user is currently watching
 *                      hist_totalTime: ``, // The total duration of the show
 *                  },
 *              ],
 *              prof_likes:
 *              [
 *                  {
 *                      ls_item: ``, // Link of the liked show
 *                  },
 *              ],
 *              prof_dislikes:
 *              [
 *                  {
 *                      ds_item: ``, // Link of the disliked show
 *                  },
 *              ],
 *              prof_watchlist:
 *              [
 *                  {
 *                      wl_item: ``, // Link of the show
 *                      wl_status: 1, // watch status
 *                  },
 *              ],
 *              prof_collections:
 *              [
 *                  {
 *                      cl_id: ``, // Unique id to distinguish collections from each other
 *                      cl_name: ``, // Name of Collection
 *                      cl_updated: ``, // Last date the colection was updated
 *                      cl_bcg: ``, // The background image of the collection
 *                      cl_desc: ``, // An optional description of the collection
 *                      cl_items: // This contains all the shows in this collection
 *                      [
 *                          {
 *                              cl_itemId: ``, // Link of the show
 *                          },
 *                      ],
 *                  },
 *              ],
 *              prof_notifications:
 *              [
 *                  {
 *                      notify_addedDate: ``, // The date when the notification was created
 *                      notify_readStatus: false, // Boolean deciding whether the notification has been read
 *                      notify_thumbnail: ``, // The thumbnail (or background) image of the notification
 *                      notify_mainTopic: ``, // Title text of the notification
 *                      notify_subTopic: ``, // A slightly longer description of the notification
 *                      notify_actionText: ``, // The text used in the action button
 *                      notify_actionLink: ``, // The destination of the notification
 *                  },
 *              ],
 *          },
 *      ],
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    // Attributes for a single user
    let uvid_sgl_usr_obj = 
    {
        full_name: ``,
        phone_no: ``,
        is_setup: true,
        stp_steps: `start`,
        curr_plan_id: ``,
        is_membership_active: false,
        cast_data_usage_ul: 0,
        dwld_qlty_pref: 0,
        dwld_audio_pref: 0,
        wifi_only_dwld: true,
        wifi_only_stream: false,
        cellular_stream_ntfy: true,
        share_prsnl_info: false,
        conn_apps: [],
        device_mngmt: [],
        downloads: [],
    };
