/***************************************************************
 * This will hold the info on the Help Center topics
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

// Popular Topics
let pplr_tpc_arr = 
[
    {
        pplr_tpc_id: `58679021`,
        pplr_tpc_name: `How to sign up for Uvid+?`,
    },
    {
        pplr_tpc_id: `11358423`,
        pplr_tpc_name: `I can't sign into Uvid+`,
    },
    {
        pplr_tpc_id: `58523412`,
        pplr_tpc_name: `How can I change my username?`,
    },
    {
        pplr_tpc_id: `82541406`,
        pplr_tpc_name: `How can I change my email address?`,
    },
    {
        pplr_tpc_id: `38427142`,
        pplr_tpc_name: `Plans and Pricing`,
    },
    {
        pplr_tpc_id: `64804346`,
        pplr_tpc_name: `How can I change my membership plan?`,
    },
    {
        pplr_tpc_id: `16081474`,
        pplr_tpc_name: `Is Uvid+ kid friendly?`,
    },
    {
        pplr_tpc_id: `16456529`,
        pplr_tpc_name: `Where can I watch?`,
    },
    {
        pplr_tpc_id: `60953494`,
        pplr_tpc_name: `Where can I redeem gift cards?`,
    },
    {
        pplr_tpc_id: `67664905`,
        pplr_tpc_name: `How to sign out?`,
    },
];



// All Topics / Categories
let all_tpc_arr = 
[
    {
        all_tpc_id: `37925172`,
        all_tpc_name: `Getting Started`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `87316930`,
        all_tpc_name: `Membership & Billing`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="M20.941 8.189c.58.573.83 1.295.947 2.152c.112.826.112 1.876.112 3.178v.105c0 1.302 0 2.352-.112 3.178c-.117.857-.367 1.579-.947 2.152s-1.31.82-2.178.935c-.835.111-1.898.111-3.216.111h-4.925c-1.318 0-2.38 0-3.216-.111c-.868-.115-1.598-.362-2.178-.935a3 3 0 0 1-.735-1.204c.871.107 1.95.107 3.195.107h5.01c1.281 0 2.385 0 3.27-.117c.947-.126 1.856-.41 2.593-1.138s1.024-1.626 1.151-2.562c.12-.874.12-1.965.119-3.232v-.188c0-1.23 0-2.296-.11-3.158c.46.151.868.379 1.22.727m-10.748.859c-.932 0-1.687.746-1.687 1.666s.755 1.667 1.687 1.667c.931 0 1.686-.746 1.686-1.667c0-.92-.755-1.666-1.686-1.666" />
	            <path fill-rule="evenodd" d="M2.847 5.837C2 6.674 2 8.02 2 10.714s0 4.041.847 4.878s2.21.837 4.936.837h4.82c2.725 0 4.088 0 4.935-.837s.847-2.184.847-4.878s0-4.04-.847-4.877S15.328 5 12.602 5H7.783c-2.726 0-4.09 0-4.936.837m4.213 4.877c0-1.71 1.403-3.095 3.133-3.095s3.132 1.386 3.132 3.095s-1.402 3.096-3.132 3.096s-3.133-1.386-3.133-3.096m8.434 2.62c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.723.32.723.715v3.81a.72.72 0 0 1-.723.713m-11.325-.715c0 .395.323.714.723.714s.722-.32.722-.714V8.81a.72.72 0 0 0-.722-.714c-.4 0-.723.32-.723.715z" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `78154614`,
        all_tpc_name: `Plans & Add-ons`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358" />
                <path fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `90187270`,
        all_tpc_name: `Fix a Problem`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `66540227`,
        all_tpc_name: `Watching Uvid+`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd" />
                <path d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495" />
            </svg>
        `,
    },
    {
        all_tpc_id: `29301040`,
        all_tpc_name: `Supported Devices`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z" />
                <path fill-rule="evenodd" d="M22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22c-1.7 0-3.015 0-4.056-.107c.335-.525.454-1.082.506-1.598c.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729c-.054-.533-.18-1.11-.54-1.65a3.5 3.5 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A14 14 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10m-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd" />
            </svg>
        `,
    },
];
