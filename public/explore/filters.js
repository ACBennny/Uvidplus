/*************************************************************
 * This contains the elements of the filter Catalog
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


// Uvid+ categories 
let uvp_categories = 
[
    {
        "link": `#/category/trending`,
        "name": `Trending Now`,
        "tagline": `Hot right now`,
        "path_1": `/trending`,
        "path_2": `/week?sort_by=popularity.desc&vote_count.gte=50`,
        "both": true,
        "type": "",
    },
    {
        "link": `#/category/popular`,
        "name": `Most Popular`,
        "tagline": `Here's what everyone's watching`,
        "path_1": ``,
        "path_2": `/popular?sort_by=popularity.desc&vote_count.gte=50`,
        "both": true,
        "type": "",
    },
    {
        "link": `#/category/top`,
        "name": `Top Rated`,
        "tagline": `The shows our users love`,
        "path_1": ``,
        "path_2": `/top_rated?sort_by=popularity.desc&vote_count.gte=50`,
        "both": true,
        "type": "",
    },
    {
        "link": `#/category/latest`,
        "name": `Just Added`,
        "tagline": `Coming in hot!`,
        "path_1": `/discover`,
        "path_2": `?sort_by=release_date.desc&first_air_date.lte=TODAY&vote_count.gte=1&include_adult=false`,
        "both": true,
        "type": "",
    },
    {
        "link": `#/category/anime`,
        "name": `Anime`,
        "tagline": `Watch top-tier animation from our friends in Japan`,
        "path_1": `/discover`,
        "path_2": `?with_keywords=210024&sort_by=popularity.desc&vote_count.gte=50&include_adult=false`,
        "both": true,
        "type": "",
    },
    {
        "link": `#/category/streaming`,
        "name": `Streaming Now`,
        "tagline": `Watch it while it's still on!`,
        "path_1": ``,
        "path_2": `/now_playing?sort_by=popularity.desc&vote_count.gte=50`,
        "both": false,
        "type": "movie",
    },
    {
        "link": `#/category/airing`,
        "name": `On The Air`,
        "tagline": `All currently airing shows`,
        "path_1": ``,
        "path_2": `/on_the_air?sort_by=popularity.desc&vote_count.gte=50`,
        "both": false,
        "type": "tv",
    },
    {
        "link": `#/category/upcoming`,
        "name": `Upcoming`,
        "tagline": `Get ready for these shows`,
        "path_1": ``,
        "path_2": `/upcoming?`,
        "both": false,
        "type": "movie",
    },
    {
        "link": `#/category/movies`,
        "name": `Movie Library`,
        "tagline": `Our large collection of Movies `,
        "path_1": `/discover`,
        "path_2": `?sort_by=popularity.desc&vote_count.gte=50&include_adult=false`,
        "both": false,
        "type": "movie",
    },
    {
        "link": `#/category/tv`,
        "name": `Tv Library`,
        "tagline": `Our large collection of TV Shows`,
        "path_1": `/discover`,
        "path_2": `?sort_by=popularity.desc&vote_count.gte=50&include_adult=false`,
        "both": false,
        "type": "tv",
    },
];


// Uvid+ genres 
let uvp_genres = 
[
    {
        "id": 28,
        "link": `#/category/action`,
        "name": "Action",
        "tagline": `Fists flying. Guns blazing. Drama turned all the way up.`,
    },
    {
        "id": 10759,
        "link": `#/category/action-adventure`,
        "name": "Action & Adventure",
        "tagline": `Veture forth with heroes in a never-ending cycle of drama`,
    },
    {
        "id": 12,
        "link": `#/category/adventure`,
        "name": "Adventure",
        "tagline": `Venture forth with heroes who hope to achieve their dreams!`,
    },
    {
        "id": 16,
        "link": `#/category/animation`,
        "name": "Animation",
        "tagline": `From sketch to screen magic, where the impossible feels real.`,
    },
    {
        "id": 35,
        "link": `#/category/comedy`,
        "name": "Comedy",
        "tagline": `Slapstick, satire, and all laughs in between.`,
    },
    {
        "id": 80,
        "link": `#/category/crime`,
        "name": "Crime",
        "tagline": `An action-packed mix of scripted whodunits and shocking, real-life murder mysteries ripped from today's headlines.`,
    },
    {
        "id": 18,
        "link": `#/category/drama`,
        "name": "Drama",
        "tagline": `Ready to feel it all? You're in the right place.`,
    },
    {
        "id": 10751,
        "link": `#/category/family`,
        "name": "Family",
        "tagline": `Animated hits and heartwarming classics the whole crew will love.`,
    },
    {
        "id": 14,
        "link": `#/category/fantasy`,
        "name": "Fantasy",
        "tagline": `It's time to get deep and act one more time... with feeling!`,
    },
    {
        "id": 36,
        "link": `#/category/history`,
        "name": "History",
        "tagline": `Let's take a step back into the past events that still impact us today.`,
    },
    {
        "id": 27,
        "link": `#/category/horror`,
        "name": "Horror",
        "tagline": `Your worst fears? We've got 'em, from classic spine-tinglers to modern slashers`,
    },
    {
        "id": 10762,
        "link": `#/category/kids`,
        "name": "Kids",
        "tagline": `Everything from cartoons to family comedies. Find your favorite shows and watch them all!`,
    },
    {
        "id": 10402,
        "link": `#/category/music`,
        "name": "Music",
        "tagline": `Just like seeing them live! But without the sweaty guy yelling the lyrics out next to you.`,
    },
    {
        "id": 9648,
        "link": `#/category/mystery`,
        "name": "Mystery",
        "tagline": `Every clue hides another secret, unravel the unknown`,
    },
    {
        "id": 10764,
        "link": `#/category/reality`,
        "name": "Reality",
        "tagline": `All of the cutthroat competitions, uplifting true stories, and ticking time bomb mayhem that reality TV has to offer in one place.`,
    },
    {
        "id": 10749,
        "link": `#/category/romance`,
        "name": "Romance",
        "tagline": `Screen gettin' steamy? It comes with the territory.`,
    },
    {
        "id": 878,
        "link": `#/category/scifi`,
        "name": "Science Fiction",
        "tagline": `Get ready to launch and hack into the grid with these high-tech series.`,
    },
    {
        "id": 10765,
        "link": `#/category/scifi-fantasy`,
        "name": "Sci-Fi & Fantasy",
        "tagline": `No need to travel to a galaxy, far, far away — all the space odysseys, fantastic voyages, and close encounters that you seek are right here.`,
    },
    {
        "id": 10766,
        "link": `#/category/soap`,
        "name": "Soap",
        "tagline": `Drama is a daily affair; passion, betrayal, repeat.`,
    },
    {
        "id": 10770,
        "link": `#/category/tvmovie`,
        "name": "TV Movie",
        "tagline": `One film, one unforgettable night.`,
    },
    {
        "id": 53,
        "link": `#/category/thriller`,
        "name": "Thriller",
        "tagline": `These heart-pounding mystery and suspense films will have you on the edge of your seat.`,
    },
    {
        "id": 10752,
        "link": `#/category/war`,
        "name": "War",
        "tagline": `Sacrifice has no boundaries and in the shadow of conflict, humanity shines.`,
    },
    {
        "id": 10768,
        "link": `#/category/war-politics`,
        "name": "War & Politics",
        "tagline": `The fight for power never ends, where history is written by the victors`,
    },
    {
        "id": 37,
        "link": `#/category/western`,
        "name": "Western",
        "tagline": `Saddle up with outlaws, bandits, and gunslingers.`,
    }
];


// Inventory of filters
let filterInv = 
[
    {
        category: `Sort`,
        options: 
        [
            {
                opt_name: `Popularity (Ascending ↑)`,
                opt_value: `popularity`,
                opt_order: `asc`,
            },
            {
                opt_name: `Popularity (Descending ↓)`,
                opt_value: `popularity`,
                opt_order: `dsc`,
            },
            {
                opt_name: `Release Date (Ascending ↑)`,
                opt_value: `release_date`,
                opt_order: `asc`,
            },
            {
                opt_name: `Release Date (Descending ↓)`,
                opt_value: `release_date`,
                opt_order: `dsc`,
            },
            {
                opt_name: `Score (Ascending ↑)`,
                opt_value: `vote_average`,
                opt_order: `asc`,
            },
            {
                opt_name: `Score (Descending ↓)`,
                opt_value: `vote_average`,
                opt_order: `dsc`,
            },
            {
                opt_name: `Title A-Z`,
                opt_value: `title`,
                opt_order: `asc`,
            },
            {
                opt_name: `Title Z-A`,
                opt_value: `title`,
                opt_order: `dsc`,
            },
        ],
    },
    {
        category: `Format`,
        options: 
        [
            `Tv`,
            `Movie`,
        ]
    },
    {
        category: `Score`,
        options: 
        [
            `10`,
            `9`,
            `8`,
            `7`,
            `6`,
            `5`,
            `4`,
            `3`,
            `2`,
            `1`,
        ],
    },
    {
        category: `Year`,
        options: 
        [
            `2025`,
            `2024`,
            `2023`,
            `2022`,
            `2020`,
            `2019`,
            `2018`,
            `2017`,
            `2016`,
            `2015`,
            `2014`,
            `2013`,
            `2012`,
            `2011`,
            `2010`,
            `2009`,
            `2008`,
            `2007`,
            `2006`,
            `2005`,
            `2004`,
            `2003`,
            `2002`,
            `2001`,
            `2000`,
            `1999`,
            `1998`,
            `1997`,
            `1996`,
            `1995`,
            `1994`,
            `1993`,
            `1992`,
            `1991`,
            `1990`,
            `1989`,
            `1988`,
            `1987`,
            `1986`,
            `1985`,
            `1984`,
            `1983`,
            `1982`,
            `1981`,
            `1980`,
            `1979`,
            `1978`,
            `1977`,
            `1976`,
            `1975`,
            `1974`,
            `1973`,
            `1972`,
            `1971`,
            `1970`,
            `1969`,
            `1968`,
            `1967`,
            `1966`,
            `1965`,
            `1964`,
            `1963`,
            `1962`,
            `1961`,
            `1960`,
        ],
    },
    {
        category: `Lang.`,
        options: 
        [
            {
                "iso_639_1": "ab",
                "english_name": "Abkhazian",
                "name": ""
            },
            {
                "iso_639_1": "aa",
                "english_name": "Afar",
                "name": ""
            },
            {
                "iso_639_1": "af",
                "english_name": "Afrikaans",
                "name": "Afrikaans"
            },
            {
                "iso_639_1": "ak",
                "english_name": "Akan",
                "name": ""
            },
            {
                "iso_639_1": "sq",
                "english_name": "Albanian",
                "name": "shqip"
            },
            {
                "iso_639_1": "am",
                "english_name": "Amharic",
                "name": ""
            },
            {
                "iso_639_1": "ar",
                "english_name": "Arabic",
                "name": "العربية"
            },
            {
                "iso_639_1": "an",
                "english_name": "Aragonese",
                "name": ""
            },
            {
                "iso_639_1": "hy",
                "english_name": "Armenian",
                "name": ""
            },
            {
                "iso_639_1": "as",
                "english_name": "Assamese",
                "name": ""
            },
            {
                "iso_639_1": "av",
                "english_name": "Avaric",
                "name": ""
            },
            {
                "iso_639_1": "ae",
                "english_name": "Avestan",
                "name": ""
            },
            {
                "iso_639_1": "ay",
                "english_name": "Aymara",
                "name": ""
            },
            {
                "iso_639_1": "az",
                "english_name": "Azerbaijani",
                "name": "Azərbaycan"
            },
            {
                "iso_639_1": "bm",
                "english_name": "Bambara",
                "name": "Bamanankan"
            },
            {
                "iso_639_1": "ba",
                "english_name": "Bashkir",
                "name": ""
            },
            {
                "iso_639_1": "eu",
                "english_name": "Basque",
                "name": "euskera"
            },
            {
                "iso_639_1": "be",
                "english_name": "Belarusian",
                "name": "беларуская мова"
            },
            {
                "iso_639_1": "bn",
                "english_name": "Bengali",
                "name": "বাংলা"
            },
            {
                "iso_639_1": "bi",
                "english_name": "Bislama",
                "name": ""
            },
            {
                "iso_639_1": "bs",
                "english_name": "Bosnian",
                "name": "Bosanski"
            },
            {
                "iso_639_1": "br",
                "english_name": "Breton",
                "name": ""
            },
            {
                "iso_639_1": "bg",
                "english_name": "Bulgarian",
                "name": "български език"
            },
            {
                "iso_639_1": "my",
                "english_name": "Burmese",
                "name": ""
            },
            {
                "iso_639_1": "cn",
                "english_name": "Cantonese",
                "name": "广州话 / 廣州話"
            },
            {
                "iso_639_1": "ca",
                "english_name": "Catalan",
                "name": "Català"
            },
            {
                "iso_639_1": "ch",
                "english_name": "Chamorro",
                "name": "Finu' Chamorro"
            },
            {
                "iso_639_1": "ce",
                "english_name": "Chechen",
                "name": ""
            },
            {
                "iso_639_1": "ny",
                "english_name": "Chichewa; Nyanja",
                "name": ""
            },
            {
                "iso_639_1": "cv",
                "english_name": "Chuvash",
                "name": ""
            },
            {
                "iso_639_1": "kw",
                "english_name": "Cornish",
                "name": ""
            },
            {
                "iso_639_1": "co",
                "english_name": "Corsican",
                "name": ""
            },
            {
                "iso_639_1": "cr",
                "english_name": "Cree",
                "name": ""
            },
            {
                "iso_639_1": "hr",
                "english_name": "Croatian",
                "name": "Hrvatski"
            },
            {
                "iso_639_1": "cs",
                "english_name": "Czech",
                "name": "Český"
            },
            {
                "iso_639_1": "da",
                "english_name": "Danish",
                "name": "Dansk"
            },
            {
                "iso_639_1": "dv",
                "english_name": "Divehi",
                "name": ""
            },
            {
                "iso_639_1": "nl",
                "english_name": "Dutch",
                "name": "Nederlands"
            },
            {
                "iso_639_1": "dz",
                "english_name": "Dzongkha",
                "name": ""
            },
            {
                "iso_639_1": "en",
                "english_name": "English",
                "name": "English"
            },
            {
                "iso_639_1": "eo",
                "english_name": "Esperanto",
                "name": "Esperanto"
            },
            {
                "iso_639_1": "et",
                "english_name": "Estonian",
                "name": "Eesti"
            },
            {
                "iso_639_1": "ee",
                "english_name": "Ewe",
                "name": "Èʋegbe"
            },
            {
                "iso_639_1": "fo",
                "english_name": "Faroese",
                "name": ""
            },
            {
                "iso_639_1": "fj",
                "english_name": "Fijian",
                "name": ""
            },
            {
                "iso_639_1": "fi",
                "english_name": "Finnish",
                "name": "suomi"
            },
            {
                "iso_639_1": "fr",
                "english_name": "French",
                "name": "Français"
            },
            {
                "iso_639_1": "fy",
                "english_name": "Frisian",
                "name": ""
            },
            {
                "iso_639_1": "ff",
                "english_name": "Fulah",
                "name": "Fulfulde"
            },
            {
                "iso_639_1": "gd",
                "english_name": "Gaelic",
                "name": ""
            },
            {
                "iso_639_1": "gl",
                "english_name": "Galician",
                "name": "Galego"
            },
            {
                "iso_639_1": "lg",
                "english_name": "Ganda",
                "name": ""
            },
            {
                "iso_639_1": "ka",
                "english_name": "Georgian",
                "name": "ქართული"
            },
            {
                "iso_639_1": "de",
                "english_name": "German",
                "name": "Deutsch"
            },
            {
                "iso_639_1": "el",
                "english_name": "Greek",
                "name": "ελληνικά"
            },
            {
                "iso_639_1": "gn",
                "english_name": "Guarani",
                "name": ""
            },
            {
                "iso_639_1": "gu",
                "english_name": "Gujarati",
                "name": ""
            },
            {
                "iso_639_1": "ht",
                "english_name": "Haitian; Haitian Creole",
                "name": ""
            },
            {
                "iso_639_1": "ha",
                "english_name": "Hausa",
                "name": "Hausa"
            },
            {
                "iso_639_1": "he",
                "english_name": "Hebrew",
                "name": "עִבְרִית"
            },
            {
                "iso_639_1": "hz",
                "english_name": "Herero",
                "name": ""
            },
            {
                "iso_639_1": "hi",
                "english_name": "Hindi",
                "name": "हिन्दी"
            },
            {
                "iso_639_1": "ho",
                "english_name": "Hiri Motu",
                "name": ""
            },
            {
                "iso_639_1": "hu",
                "english_name": "Hungarian",
                "name": "Magyar"
            },
            {
                "iso_639_1": "is",
                "english_name": "Icelandic",
                "name": "Íslenska"
            },
            {
                "iso_639_1": "io",
                "english_name": "Ido",
                "name": ""
            },
            {
                "iso_639_1": "ig",
                "english_name": "Igbo",
                "name": ""
            },
            {
                "iso_639_1": "id",
                "english_name": "Indonesian",
                "name": "Bahasa indonesia"
            },
            {
                "iso_639_1": "ia",
                "english_name": "Interlingua",
                "name": ""
            },
            {
                "iso_639_1": "ie",
                "english_name": "Interlingue",
                "name": ""
            },
            {
                "iso_639_1": "iu",
                "english_name": "Inuktitut",
                "name": ""
            },
            {
                "iso_639_1": "ik",
                "english_name": "Inupiaq",
                "name": ""
            },
            {
                "iso_639_1": "ga",
                "english_name": "Irish",
                "name": "Gaeilge"
            },
            {
                "iso_639_1": "it",
                "english_name": "Italian",
                "name": "Italiano"
            },
            {
                "iso_639_1": "ja",
                "english_name": "Japanese",
                "name": "日本語"
            },
            {
                "iso_639_1": "jv",
                "english_name": "Javanese",
                "name": ""
            },
            {
                "iso_639_1": "kl",
                "english_name": "Kalaallisut",
                "name": ""
            },
            {
                "iso_639_1": "kn",
                "english_name": "Kannada",
                "name": "?????"
            },
            {
                "iso_639_1": "kr",
                "english_name": "Kanuri",
                "name": ""
            },
            {
                "iso_639_1": "ks",
                "english_name": "Kashmiri",
                "name": ""
            },
            {
                "iso_639_1": "kk",
                "english_name": "Kazakh",
                "name": "қазақ"
            },
            {
                "iso_639_1": "km",
                "english_name": "Khmer",
                "name": ""
            },
            {
                "iso_639_1": "ki",
                "english_name": "Kikuyu",
                "name": ""
            },
            {
                "iso_639_1": "rw",
                "english_name": "Kinyarwanda",
                "name": "Kinyarwanda"
            },
            {
                "iso_639_1": "ky",
                "english_name": "Kirghiz",
                "name": "??????"
            },
            {
                "iso_639_1": "kv",
                "english_name": "Komi",
                "name": ""
            },
            {
                "iso_639_1": "kg",
                "english_name": "Kongo",
                "name": ""
            },
            {
                "iso_639_1": "ko",
                "english_name": "Korean",
                "name": "한국어/조선말"
            },
            {
                "iso_639_1": "kj",
                "english_name": "Kuanyama",
                "name": ""
            },
            {
                "iso_639_1": "ku",
                "english_name": "Kurdish",
                "name": ""
            },
            {
                "iso_639_1": "lo",
                "english_name": "Lao",
                "name": ""
            },
            {
                "iso_639_1": "la",
                "english_name": "Latin",
                "name": "Latin"
            },
            {
                "iso_639_1": "lv",
                "english_name": "Latvian",
                "name": "Latviešu"
            },
            {
                "iso_639_1": "lb",
                "english_name": "Letzeburgesch",
                "name": ""
            },
            {
                "iso_639_1": "li",
                "english_name": "Limburgish",
                "name": ""
            },
            {
                "iso_639_1": "ln",
                "english_name": "Lingala",
                "name": ""
            },
            {
                "iso_639_1": "lt",
                "english_name": "Lithuanian",
                "name": "Lietuvių"
            },
            {
                "iso_639_1": "lu",
                "english_name": "Luba-Katanga",
                "name": ""
            },
            {
                "iso_639_1": "mk",
                "english_name": "Macedonian",
                "name": ""
            },
            {
                "iso_639_1": "mg",
                "english_name": "Malagasy",
                "name": ""
            },
            {
                "iso_639_1": "ms",
                "english_name": "Malay",
                "name": "Bahasa melayu"
            },
            {
                "iso_639_1": "ml",
                "english_name": "Malayalam",
                "name": ""
            },
            {
                "iso_639_1": "mt",
                "english_name": "Maltese",
                "name": "Malti"
            },
            {
                "iso_639_1": "zh",
                "english_name": "Mandarin",
                "name": "普通话"
            },
            {
                "iso_639_1": "gv",
                "english_name": "Manx",
                "name": ""
            },
            {
                "iso_639_1": "mi",
                "english_name": "Maori",
                "name": ""
            },
            {
                "iso_639_1": "mr",
                "english_name": "Marathi",
                "name": ""
            },
            {
                "iso_639_1": "mh",
                "english_name": "Marshall",
                "name": ""
            },
            {
                "iso_639_1": "mo",
                "english_name": "Moldavian",
                "name": ""
            },
            {
                "iso_639_1": "mn",
                "english_name": "Mongolian",
                "name": ""
            },
            {
                "iso_639_1": "na",
                "english_name": "Nauru",
                "name": ""
            },
            {
                "iso_639_1": "nv",
                "english_name": "Navajo",
                "name": ""
            },
            {
                "iso_639_1": "nr",
                "english_name": "Ndebele",
                "name": ""
            },
            {
                "iso_639_1": "nd",
                "english_name": "Ndebele",
                "name": ""
            },
            {
                "iso_639_1": "ng",
                "english_name": "Ndonga",
                "name": ""
            },
            {
                "iso_639_1": "ne",
                "english_name": "Nepali",
                "name": ""
            },
            {
                "iso_639_1": "se",
                "english_name": "Northern Sami",
                "name": ""
            },
            {
                "iso_639_1": "no",
                "english_name": "Norwegian",
                "name": "Norsk"
            },
            {
                "iso_639_1": "nb",
                "english_name": "Norwegian Bokmål",
                "name": "Bokmål"
            },
            {
                "iso_639_1": "nn",
                "english_name": "Norwegian Nynorsk",
                "name": ""
            },
            {
                "iso_639_1": "oc",
                "english_name": "Occitan",
                "name": ""
            },
            {
                "iso_639_1": "oj",
                "english_name": "Ojibwa",
                "name": ""
            },
            {
                "iso_639_1": "or",
                "english_name": "Oriya",
                "name": ""
            },
            {
                "iso_639_1": "om",
                "english_name": "Oromo",
                "name": ""
            },
            {
                "iso_639_1": "os",
                "english_name": "Ossetian; Ossetic",
                "name": ""
            },
            {
                "iso_639_1": "pi",
                "english_name": "Pali",
                "name": ""
            },
            {
                "iso_639_1": "fa",
                "english_name": "Persian",
                "name": "فارسی"
            },
            {
                "iso_639_1": "pl",
                "english_name": "Polish",
                "name": "Polski"
            },
            {
                "iso_639_1": "pt",
                "english_name": "Portuguese",
                "name": "Português"
            },
            {
                "iso_639_1": "pa",
                "english_name": "Punjabi",
                "name": "ਪੰਜਾਬੀ"
            },
            {
                "iso_639_1": "ps",
                "english_name": "Pushto",
                "name": "پښتو"
            },
            {
                "iso_639_1": "qu",
                "english_name": "Quechua",
                "name": ""
            },
            {
                "iso_639_1": "rm",
                "english_name": "Raeto-Romance",
                "name": ""
            },
            {
                "iso_639_1": "ro",
                "english_name": "Romanian",
                "name": "Română"
            },
            {
                "iso_639_1": "rn",
                "english_name": "Rundi",
                "name": "Kirundi"
            },
            {
                "iso_639_1": "ru",
                "english_name": "Russian",
                "name": "Pусский"
            },
            {
                "iso_639_1": "sm",
                "english_name": "Samoan",
                "name": ""
            },
            {
                "iso_639_1": "sg",
                "english_name": "Sango",
                "name": ""
            },
            {
                "iso_639_1": "sa",
                "english_name": "Sanskrit",
                "name": ""
            },
            {
                "iso_639_1": "sc",
                "english_name": "Sardinian",
                "name": ""
            },
            {
                "iso_639_1": "sr",
                "english_name": "Serbian",
                "name": "Srpski"
            },
            {
                "iso_639_1": "sh",
                "english_name": "Serbo-Croatian",
                "name": ""
            },
            {
                "iso_639_1": "sn",
                "english_name": "Shona",
                "name": ""
            },
            {
                "iso_639_1": "sd",
                "english_name": "Sindhi",
                "name": ""
            },
            {
                "iso_639_1": "si",
                "english_name": "Sinhalese",
                "name": "සිංහල"
            },
            {
                "iso_639_1": "cu",
                "english_name": "Slavic",
                "name": ""
            },
            {
                "iso_639_1": "sk",
                "english_name": "Slovak",
                "name": "Slovenčina"
            },
            {
                "iso_639_1": "sl",
                "english_name": "Slovenian",
                "name": "Slovenščina"
            },
            {
                "iso_639_1": "so",
                "english_name": "Somali",
                "name": "Somali"
            },
            {
                "iso_639_1": "st",
                "english_name": "Sotho",
                "name": ""
            },
            {
                "iso_639_1": "es",
                "english_name": "Spanish",
                "name": "Español"
            },
            {
                "iso_639_1": "su",
                "english_name": "Sundanese",
                "name": ""
            },
            {
                "iso_639_1": "sw",
                "english_name": "Swahili",
                "name": "Kiswahili"
            },
            {
                "iso_639_1": "ss",
                "english_name": "Swati",
                "name": ""
            },
            {
                "iso_639_1": "sv",
                "english_name": "Swedish",
                "name": "svenska"
            },
            {
                "iso_639_1": "tl",
                "english_name": "Tagalog",
                "name": ""
            },
            {
                "iso_639_1": "ty",
                "english_name": "Tahitian",
                "name": ""
            },
            {
                "iso_639_1": "tg",
                "english_name": "Tajik",
                "name": ""
            },
            {
                "iso_639_1": "ta",
                "english_name": "Tamil",
                "name": "தமிழ்"
            },
            {
                "iso_639_1": "tt",
                "english_name": "Tatar",
                "name": ""
            },
            {
                "iso_639_1": "te",
                "english_name": "Telugu",
                "name": "తెలుగు"
            },
            {
                "iso_639_1": "th",
                "english_name": "Thai",
                "name": "ภาษาไทย"
            },
            {
                "iso_639_1": "bo",
                "english_name": "Tibetan",
                "name": ""
            },
            {
                "iso_639_1": "ti",
                "english_name": "Tigrinya",
                "name": ""
            },
            {
                "iso_639_1": "to",
                "english_name": "Tonga",
                "name": ""
            },
            {
                "iso_639_1": "ts",
                "english_name": "Tsonga",
                "name": ""
            },
            {
                "iso_639_1": "tn",
                "english_name": "Tswana",
                "name": ""
            },
            {
                "iso_639_1": "tr",
                "english_name": "Turkish",
                "name": "Türkçe"
            },
            {
                "iso_639_1": "tk",
                "english_name": "Turkmen",
                "name": ""
            },
            {
                "iso_639_1": "tw",
                "english_name": "Twi",
                "name": ""
            },
            {
                "iso_639_1": "ug",
                "english_name": "Uighur",
                "name": ""
            },
            {
                "iso_639_1": "uk",
                "english_name": "Ukrainian",
                "name": "Український"
            },
            {
                "iso_639_1": "ur",
                "english_name": "Urdu",
                "name": "اردو"
            },
            {
                "iso_639_1": "uz",
                "english_name": "Uzbek",
                "name": "ozbek"
            },
            {
                "iso_639_1": "ve",
                "english_name": "Venda",
                "name": ""
            },
            {
                "iso_639_1": "vi",
                "english_name": "Vietnamese",
                "name": "Tiếng Việt"
            },
            {
                "iso_639_1": "vo",
                "english_name": "Volapük",
                "name": ""
            },
            {
                "iso_639_1": "wa",
                "english_name": "Walloon",
                "name": ""
            },
            {
                "iso_639_1": "cy",
                "english_name": "Welsh",
                "name": "Cymraeg"
            },
            {
                "iso_639_1": "wo",
                "english_name": "Wolof",
                "name": "Wolof"
            },
            {
                "iso_639_1": "xh",
                "english_name": "Xhosa",
                "name": ""
            },
            {
                "iso_639_1": "ii",
                "english_name": "Yi",
                "name": ""
            },
            {
                "iso_639_1": "yi",
                "english_name": "Yiddish",
                "name": ""
            },
            {
                "iso_639_1": "yo",
                "english_name": "Yoruba",
                "name": "Èdè Yorùbá"
            },
            {
                "iso_639_1": "za",
                "english_name": "Zhuang",
                "name": ""
            },
            {
                "iso_639_1": "zu",
                "english_name": "Zulu",
                "name": "isiZulu"
            }
        ]
    },
];




