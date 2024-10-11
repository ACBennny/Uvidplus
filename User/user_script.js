/***************************************************************
 * This will hold the default code for the User pages
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


    window.addEventListener("load" , preLoadUserPageStruct);

    function preLoadUserPageStruct()
    {
        const userPagePathName = window.location.pathname;
        const extractedUserPagePath = userPagePathName.replace(/\.html$/, "");
        const userPageSpecificSegment = extractedUserPagePath.substring(extractedUserPagePath.lastIndexOf('/') + 1);
        const userPageStructPath = `${extractedUserPagePath}/struct.js`;
        const userPageSpecificPath = `${extractedUserPagePath}/${userPageSpecificSegment}.js`;

        let userPageStructScriptTag = document.createElement("script");
        userPageStructScriptTag.setAttribute(`src` , `${userPageStructPath}`);

        userPageStructScriptTag.addEventListener("load" , () => 
        {
            insertUserPageStruct(userPageSpecificPath);
        });

        document.body.appendChild(userPageStructScriptTag);
    }

    function insertUserPageStruct(path)
    {
        documentCtnt.insertAdjacentHTML(`afterbegin` , userPagesStruct);

        let userPageSpecificScriptTag = document.createElement("script");
        userPageSpecificScriptTag.setAttribute(`src` , `${path}`);
        userPageSpecificScriptTag.addEventListener("load" , () => 
        {
            startUserPage();
        });

        document.body.appendChild(userPageSpecificScriptTag);
    }