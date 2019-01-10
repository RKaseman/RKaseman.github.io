
$(function () {

    var portfolio = [
        {
            codeURL: "https://github.com/RKaseman/unit-03-game-letter-guess",
            image: "./assets/images/unit-03-psychic-game.png",
            alt: "Training 1",
            url: "https://rkaseman.github.io/unit-03-game-letter-guess/",
            target: "_blank",
            urlText: "Can You Guess The Name?"
        },
        {
            codeURL: "https://github.com/RKaseman/unit-04-game-crystal-collector",
            image: "./assets/images/crystal_Collector_Game_new.png",
            alt: "Training 2",
            url: "https://rkaseman.github.io/unit-04-game-crystal-collector/",
            target: "_blank",
            urlText: "Something's Fishy"
        },
        {
            codeURL: "https://github.com/RKaseman/Trivia-Game",
            image: "./assets/images/Shoegazer_NameThatBand.png",
            alt: "Training 3",
            url: "https://rkaseman.github.io/Trivia-Game/",
            target: "_blank",
            urlText: "Ode to the Underrated"
        },
        {
            codeURL: "https://github.com/RKaseman/GIPHY-Page",
            image: "./assets/images/women_by_giphy.png",
            alt: "Training 4",
            url: "https://rkaseman.github.io/GIPHY-Page/",
            target: "_blank",
            urlText: "Cheeky Fun"
        },
        {
            codeURL: "https://github.com/RKaseman/alarm-it",
            image: "./assets/images/On_Time.png",
            alt: "Training 5",
            url: "https://rkaseman.github.io/alarm-it/",
            target: "_blank",
            urlText: "Group Project 1"
        },
        {
            codeURL: "https://github.com/RKaseman/liri-node-app",
            image: "./assets/images/workSpace_liri.png",
            alt: "Training 6",
            url: "https://github.com/RKaseman/liri-node-app",
            target: "_blank",
            urlText: "Node.js 'liri'"
        },
        {
            codeURL: "https://github.com/RKaseman/EXPA-mazon",
            image: "./assets/images/expamazon.png",
            alt: "Training 7",
            url: "https://github.com/RKaseman/EXPA-mazon",
            target: "_blank",
            urlText: "Exoplanet Store"
        },
        {
            codeURL: "https://github.com/RKaseman/ludology2",
            image: "./assets/images/ludology.html.png",
            alt: "Training 8",
            url: "https://ludology2.herokuapp.com/",
            target: "_blank",
            urlText: "Group Project 2"
        },
        {
            codeURL: "https://github.com/RKaseman/a-scraper",
            image: "./assets/images/ESO_Forum_Scraper.png",
            alt: "Training 9",
            url: "https://a-scraper-by-rmk.herokuapp.com/",
            target: "_blank",
            urlText: "For my Wife"
        },
        {
            codeURL: "https://github.com/RKaseman/click-and-react",
            image: "./assets/images/Click_and_React.png",
            alt: "Training 10",
            url: "https://rkaseman.github.io/click-and-react/",
            target: "_blank",
            urlText: "React!"
        },
        {
            codeURL: "https://github.com/RKaseman/journal",
            image: "./assets/images/Scrawler.png",
            alt: "Training 11",
            url: "https://sleepy-spire-34424.herokuapp.com/",
            target: "_blank",
            urlText: "Scrawler, by Matt & me"
        },
        {
            codeURL: "https://rkaseman.github.io/ka-MiR.html",
            image: "./assets/images/khanAcademyProject_MakeItRain.png",
            alt: "Khan Academy Projects",
            url: "https://rkaseman.github.io/ka-MiR.html",
            target: "",
            urlText: "Make it Rain"
        },
        {
            codeURL: "https://rkaseman.github.io/ka-BaH.html",
            image: "./assets/images/khanAcademyProject_Build_a_House.png",
            alt: "Khan Academy Projects",
            url: "https://rkaseman.github.io/ka-BaH.html",
            target: "",
            urlText: "Build-a-House"
        },
        {
            codeURL: "https://rkaseman.github.io/pseudo-coder.html",
            image: "./assets/images/pseudo-coder.png",
            alt: "Wiki Work",
            url: "https://rkaseman.github.io/pseudo-coder.html",
            target: "",
            urlText: "SharePoint"
        }
    ];

    var portfolioTemplate = Handlebars.compile($("#portfolio-template").html());
    $("#mQcenter").append(portfolioTemplate(portfolio));

});

