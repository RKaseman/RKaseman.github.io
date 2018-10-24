
$(function () {

    var portfolio = [
        {
            image: "./assets/images/crystal_Collector_Game.png",
            alt: "Training 1",
            url: "https://rkaseman.github.io/Unit-4-game/",
            urlText: "Something's Fishy"
        },
        {
            image: "./assets/images/Shoegazer_NameThatBand.png",
            alt: "Training 2",
            url: "https://rkaseman.github.io/Trivia-Game/",
            urlText: "Ode to the Underrated"
        },
        {
            image: "./assets/images/women_by_giphy.png",
            alt: "Training 3",
            url: "https://rkaseman.github.io/GIPHY-Page/",
            urlText: "Cheeky Fun"
        },
        {
            image: "./assets/images/On_Time.png",
            alt: "Training 5",
            url: "https://rkaseman.github.io/alarm-it/",
            urlText: "Group Project 1"
        },
        {
            image: "./assets/images/workSpace_liri.png",
            alt: "Training 6",
            url: "https://github.com/RKaseman/liri-node-app",
            urlText: "Node.js 'liri'"
        },
        {
            image: "./assets/images/expamazon.png",
            alt: "Training 7",
            url: "https://github.com/RKaseman/EXPA-mazon",
            urlText: "Exoplanet Store"
        },
        {
            image: "./assets/images/ludology.html.png",
            alt: "Training 8",
            url: "https://ludology2.herokuapp.com/",
            urlText: "Group Project 2"
        },
        {
            image: "./assets/images/ESO_Forum_Scraper.png",
            alt: "Training 9",
            url: "https://a-scraper-by-rmk.herokuapp.com/",
            urlText: "For my Wife"
        },
        {
            image: "./assets/images/Click_and_React.png",
            alt: "Training 10",
            url: "https://rkaseman.github.io/click-and-react/",
            urlText: "React!"
        },
        {
            image: "./assets/images/Scrawler.png",
            alt: "Training 11",
            url: "https://sleepy-spire-34424.herokuapp.com/",
            urlText: "Scrawler, by Matt & me"
        },
        {
            image: "./assets/images/khanAcademyProject_MakeItRain.png",
            alt: "Khan Academy Projects",
            url: "./ka-makeItRain.html",
            urlText: "Make it Rain"
        },
        {
            image: "./assets/images/khanAcademyProject_Build_a_House.png",
            alt: "Khan Academy Projects",
            url: "./ka-build-a-house.html",
            urlText: "Build-a-House"
        },
        {
            image: "./assets/images/pseudo-coder.png",
            alt: "Wiki Work",
            url: "./pseudo-coder.html",
            urlText: "SharePoint"
        }

    ];
    var portfolioTemplate = Handlebars.compile($("#portfolio-template").html());
    $("#mQcenter").append(portfolioTemplate(portfolio));

});

