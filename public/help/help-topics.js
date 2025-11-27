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
        pplr_tpc_body: 
        `
            You've just landed on Uvidplus and want to start your <span class="important">NEVER-ENDING ENTERTAINMENT</span>. 
            No worries, we got you absolutely covered. Follow the guide below to setup and start exploring the world of Uvidplus.
            <br><br>
            1. Let's start from the landing page because that's how most got to see Uvidplus. 
            If you're already on the signup page, kindly move to the next step.
            When you first load in there are two big buttons: a <span class="important">"Sign Up"</span> button, 
            and a "Sign In" button. Hit the <span class="important">"Sign Up"</span> button
            or click <a href="#/signup" class="important">here</a>.
            <br><br>
            2. Once in the sign up page, you'll see a modal spelling out the three major steps to get started. After reading, click
            the <span class="important">"GET STARTED"</span> button.
            <br><br>
            3. A small but important notice will appear reminding you what Uvid+ is and isn't. Don't skip past, read it.
            Click the <span class="important">"GOT IT"</span>  button after you're done. 
            <br><br>
            4. In the next screen, you'll be asked to choose how you'd like to sign up. There currently two ways to sign up.
            either with an <span class="important">"Email/Password"</span> or an <span class="important">"Email Provider"</span>.
            Let's go into detail for setup using both.
            <br><br>
            <span class="important">Email/Password</span> 
            <br>
            This option requires creating a password and verifying the email used in the account creation process. 
            <br>
            a. When chosen, you'll be required to enter your name, email, and password. After doing so, your account will be created.
            But you're not done.
            <br> 
            b. The email is currently unverified. A email verification is sent to the email used during setup so make sure it can receive emails.
            <br>
            c. Check your inbox (including spam) for the email verfication. Once received follow the instructions and complete the verification.
            <br>
            d. Come back to the Uvidplus page and hit the "CONTINUE" button on the screen to continue with your account set up.
            <br>
            e. If you did not receive an email verification, try resending it. If you still don't receive any after several attempts,
            please click <a href="#/help/article/16081474" class="important">here</a>.
            <br><br>
            <span class="important">Email Providers</span> 
            <br>
            Email Providers don't require password/verification as those were done by the provider when creating your account with them.
            <br>
            a. Select the provider you wish to use.
            <br>
            b. You'll be redirected to the provider's page. Over there, you'll need to reauthenticate and permit Uvid+ to connect to your
            account. This enables Uvidplus to see details like the name, email, and display pitcure associated with your email provider.
            <br>
            c. After granting the necessary permissions, you'll be automatically taken back to our page. 
            You should automatically be taken to the next step upon arrival. However, if you see an Email Verification request,
            click the "CONTINUE" button to move on. You have already been verified.
            <br><br>
            5. You should see a prompt to choose your tier. It's just for demonstrations and all of them are free. 
            Regardless of what you choose, it's still the same Uvidplus experience. You may see a prompt reminding you that everything is free. 
            <br><br>
            6. A sample (fake) payment information card is automatically generated for your account. You can try it out later in settings if u wish to.
            <br><br>
            7. You are now done and ready to commence your <span class="important">NEVER-ENDING ENTERTAINMENT</span>. 
            Hit the "EXPLORE" button and dive in. 
        `,
    },
    {
        pplr_tpc_id: `11358423`,
        pplr_tpc_name: `I can't sign into Uvid+`,
        pplr_tpc_body: 
        `
            In order to sign into Uvid+ you need to have an account. If you don't have an account and need help creating one, 
            please click <a href="#/help/article/58679021" class="important">here</a>.
            <br><br>
            If you already have an account and need help signing in, you're in the right place.
            <br><br>
            1. Go to the <a href="#/signin" class="important">Sign In</a> page.
            <br><br>
            2. Once there, you'll see an area provided for you to enter your account credentials. 
            Your account credentials are the email and password used to create your account.
            <br><br>
            3. Enter them correctly and hit the "SIGN IN" button. You should be automatically signed in.
            <br><br><br>
            <span class="important">Email Provider</span>
            <br>
            If you used an email provider to sign up on Uvid+, it's a slightly different procedure.
            <br><br>
            1. Below the "SIGN IN" button is the "SIGN IN WITH A PROVIDER" button. Click it and a list of provider(s) is shown.
            <br><br>
            2. Select the same email provider used when you created your acount.
            <br><br>
            3. You'll be redirected to the email provider's page to log in.
            <br><br>
            4. After successfully logging in, you'll be automatically signed into Uvid+.
            <br><br><br>
            <span class="important">Forgot Password</span>
            <br>
            If you used an "Email/Password" to sign up into Uivd+ then you can change your password if you forget it.
            <br><br>
            1. Below the "SIGN IN WITH A PROVIDER" button, You'll see an section called "Forgot Password?". 
            Directly under it is a "Reset Password" prompt. Click it.
            <br><br>
            2. In the modal that appears, enter in your email. If the account exists, a password reset email is sent there.
            Check all inboxes, including spam.
            <br><br>
            3. Once received, follow the instructions there. You should be taken to a page to reset your password.
            <br><br>
            4. After successfully resetting your password, come back to the Uvidplus page and sign in.
            <br><br><br>
            <span class="important">Important: </span>Your account email is very important and if it gets lost/forgotten, 
            your account is essentially gone as there is no way to recover it. 
        `,
    },
    {
        pplr_tpc_id: `16081474`,
        pplr_tpc_name: `I am not receiving a verification email`,
        pplr_tpc_body: 
        `
            If a user created an account using "<u>Email/Password</u>", the user will be required to verify the email address used to create the account.
            <br>
            When account creation is complete, a verification email is sent to the registered email. The user should check their inbox 
            (including spam) and follow the instrustions outlined there. 
            <br><br>
            After doing this, the user may return back to the Uvid+ page and hit the <u>"continue"</u> button on the screen to proceed with
            their account setup.
            <br><br>
            As simple as it sounds, there are cases where the verification email is not received (in any inboxes) by the user.
            <br><br>
            The first option would be to attempt resending the verification email. While not all too common, network declines or interferences
            may cause delays in time taken to recieve a verification email. Nevertheless, it shouldn't take more than a few minutes.
            <br><br>
            However, it's been recently made known that certain external factors (such as region blocking, aggressive filtering 
            from third-party email providers, etcetera), may cause the verification email to never get to the user. 
            <br><br>
            This issue isn't an error of Uvid+, is beyond our scope, and thus cannot be fixed by us. 
            We apologize for the inconvenience as we explore other alternatives.
            <br><br>
            In the mean time, users are left with only one option. This is to recreate their Uvid+ account using one of the available email providers.
            This requires the user to <a href="javascript:;" class="important" onclick="cfrmB4DelAcc()">DELETE</a> the previously created account 
            if they wish to <u>use the same</u> email to register for a new one.
        `,
    },
    {
        pplr_tpc_id: `58523412`,
        pplr_tpc_name: `How can I change my username?`,
        pplr_tpc_body: 
        `
            In Uvid+ the "username" is typically referred to as your email as that is how you sign into Uvid+.
            <br><br>
            However, if you want to change your "name" or "Full name" in the app, then follow the steps below.
            <br><br>
            1. Open your account settings page.
            <br><br>
            2. Head over to the "Privacy & Security" section. You can quickly navigate there by clicking 
            the button in the navigation menu.
            <br><br>
            3. You should see a sub-section called "Fullname". Hit the arrow button ">" next to it.
            <br><br>
            4. In the modal that appears, you can change the name to whatever you want.
            <br><br>
            5. After making your changes, hit the "Save" button to apply it to your account.
        `,
    },
    {
        pplr_tpc_id: `82541406`,
        pplr_tpc_name: `How can I change my email address?`,
        pplr_tpc_body: 
        `
            If you signed up with an external provider (e.g., Google) you can not change the email associated with your account.
            <br><br>
            If you signed up using an "Email/Password" option, then follow the steps below to change your email.
            <br><br>
            1. Open your account settings page.
            <br><br>
            2. Head over to the "Privacy & Security" section. You can quickly navigate there by clicking 
            the button in the navigation menu.
            <br><br>
            3. You should see a sub-section called "Email" with you current email. Hit the arrow button ">" next to it.
            <br><br>
            4. You will then be prompted to enter a new email and the current password for your account.
            <br><br>
            5. If successful, you'll receive an email verification in your new email. You'll have to complete it to finish the changeover.
            <br><br>
            6. Once done, you can now log in with your new email.
            <br><br>
            7. An email is sent to your old email confirming the change and providing an option to revert it if you wish to do so.
        `,
    },
    {
        pplr_tpc_id: `38427142`,
        pplr_tpc_name: `Is Uvid+ free?`,
        pplr_tpc_body: 
        `
            Yes, Uvid+ is <span class="important">FREE</span>. It has <span class="important">always</span> been free. 
            Any requests for actual payments is not from us and should be reported to us using the 
            <a href="#/feedback" class="important">Feedback Form</a>.
            <br><br>
            However, if you're not new to Uvid+, you may argue that it was paid because in previous versions of Uvid+, 
            you may have seen prices, including those for tiers. 
            <br><br>
            We would like to stress that this project is a demo, inspired by real streaming services. 
            It aimed to replicate the various parts and functions of a real streaming service hence the initial tier systems 
            and prices. If you read any of the documentation from the project homepage, app notices/reminders or the app's 
            <a href="#/tos" class="important">Terms of use</a> and <a href="#/privacy" class="important">Privacy policy</a>,
            you would have immediately realized they were for demonstration purposes.
            <br><br>
            Nonetheless, those features were removed to prevent any further confusion for old users or misrepresentation of 
            the project for new users. Feel free to use it as much as you like for as long as you desire to do so.
        `,
    },
    {
        pplr_tpc_id: `64804346`,
        pplr_tpc_name: `How to delete my account?`,
        pplr_tpc_body: 
        `
            There's a lot going on in Uvid+ and you don't want to miss out.
            If you have any questions, suggestions, etcetera, you can use the 
            <a href="#/feedback" class="important">Feedback Form</a> 
            to let us know.
            <br><br>
            If you wish to delete your account, click
            <a href="javascript:;" class="important" onclick="cfrmB4DelAcc()">HERE</a> 
            and follow all instructions on the prompts that appear.
        `,
    },
    {
        pplr_tpc_id: `16456529`,
        pplr_tpc_name: `Where can I watch?`,
        pplr_tpc_body: 
        `
            Uvidplus can be accessed anytime, anywhere from your browser. Whether it's a phone, tablet, laptop,
            desktop, or TV, if it has a browser, then you can access Uvidplus.
            <br><br>
            If you want a potentially better experience, you can have Uvidplus right on your device by getting 
            the Uvidplus webapp (PWA). It allows you to access uvidplus from on your device without neededing to open the browser 
            and search for it. Now, you can easily dive back in with a single click.
            <br><br>
            To learn how to install the Uvidplus webapp, click <a href="#/help/article/60953494" class="important">HERE</a>.
        `,
    },
    {
        pplr_tpc_id: `60953494`,
        pplr_tpc_name: `How to install Uvid+?`,
        pplr_tpc_body: 
        `
            The Uvid+ web app is a PWA, not a standalone app meaning it is dependent on the browser.
            It is fully supported in Chromium-based browsers (e.g., Brave, Opera, Vivaldi, Edge, Chrome).
            Other browsers may only have partial for support PWA installations.
            <br><br>
            Click <a onmousedown="hdlCstmInstallClick()" class="important">HERE</a> to attempt
            automatic installation.
            If the installation fails to start, it means it's either not supported in your browser or something went wrong.
            <br><br>
            If you don't see a tutorial for your browser/platform (e.g. Safari on macOS, Firefox on desktop, etc.),
            then it means your browser may not have any support for PWA installation.
            <br>
            You can always create a shortcut if you really want a quick way to dive back in.
            <br><br>
            Follow the guides below to manually install Uvid+ on your device. 
            <br><br>

            <span class="important"><u>Brave, Opera, Vivaldi, Edge, Chrome (Andriod)</u></span>
            <br>
            1. Look for an “Install” or “Install app” icon in the address bar (monitor + arrow, plus sign in a box, etc.).
            <br>or<br>
            2. Open the browser menu and choose “Install Uvidplus”.
            <br>
            3. Confirm and you're good to go.
            <br><br><br>

            <span class="important"><u>Brave, Opera, Vivaldi, Edge, Chrome (Desktop)</u></span>
            <br>
            1. Open the menu - the three dots (⋮).
            <br>
            2. Tap “Install app” or “Add to Home screen”.
            <br>
            3. Confirm and you're good to go.
            <br><br><br>

            <span class="important"><u>Safari (iOS)</u></span>
            <br>
            1. Tap the Share button: it's the square with an arrow pointing up, at the bottom of the screen.
            <br>
            2. Scroll down in the share sheet and tap “Add to Home Screen”. This is the "install".
            You may see an option to edit the name. You don't have to do anything.
            <br>
            3. Tap <strong>"Add"</strong> (top-right) and you're done.
            <br><br><br>

            <span class="important"><u>Firefox (Android)</u></span>
            <br>
            This has partial support for PWA.
            <br>
            2. Tap the menu (⋮) in the top-right.
            <br>
            3. Tap “Install” or “Add to Home screen” (varies by version).
            <br>
            4. Confirm with <strong>Add</strong>.
            <br><br><br>

            <span class="important"><u>Samsung Internet (Android)</u></span>
            <br>
            1. Tap the menu icon (three horizontal lines ☰) - usually bottom-right.
            <br>
            2. Tap “Add page to”.
            <br>
            3. Choose “Home screen”.
            <br>
            4. You can edit the name but it's not required.
            <br>
            5. Tap <strong>Add</strong> (top-right).
            <br><br><br>

            <span class="important"><u>Duck Duck Go (Android)</u></span>
            <br>
            Partial PWA support but still works.
            <br>
            1. Tap the menu (three dots) or Share icon.
            <br>
            2. Look for <strong>“Add to Home screen” / “Add shortcut”</strong> (wording may vary by version).
            <br>
            3. Confirm.
            <br><br>

            <span class="important"><u>Duck Duck Go (iOS)</u></span>
            <br>
            Similar to the Safari (iOS) for shortcuts.
            <br>
            1. Tap <strong>Share</strong>.
            <br>
            2. Look for “Add to Home Screen” or similar.
            <br>
            3. Confirm.
        `,
    },
    {
        pplr_tpc_id: `67664905`,
        pplr_tpc_name: `How to sign out?`,
        pplr_tpc_body: 
        `
            Why sign out when there's so much to see? If you're done exploring and wish to take a break,
            you can simply close the app.
            <br><br>
            However, if you must sign out, then follow these simple steps:
            <br><br>
            1. Open your account settings page.
            <br><br>
            2. Head over to the "Privacy & Security" section. You can quickly navigate there by clicking 
            the button in the navigation menu.
            <br><br>
            3. Hit the Sign out button there.
            <br><br>
            4. In the confirmation modal that pops up, confirm and you'll be signed out.
        `,
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
    {
        all_tpc_id: `78154614`,
        all_tpc_name: `Terms & Policies`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358" />
                <path fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd" />
            </svg>
        `,
    },
    {
        all_tpc_id: `87316930`,
        all_tpc_name: `Beyond Uvid+`,
        all_tpc_icon: 
        `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="help_ctr_tpc_all_card_iconSvg">
                <path d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" />
                <path fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd" />
            </svg>
        `,
    },
];
