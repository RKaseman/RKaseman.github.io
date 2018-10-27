
$(function () {

    var headerNav = [
        {
            url: "./index.html",
            urlText: "About"
        },
        {
            url: "./portfolio.html",
            urlText: "Portfolio"
        },
        {
            url: "./contact.html",
            urlText: "Contact"
        }
    ];
    var headerTemplate = Handlebars.compile($("#header-template").html());
    $("#header").append(headerTemplate(headerNav));


    var footer = [
        {
            url: "mailto:rmkaseman@gmail.com",
            urlText: "Email"
        },
        {
            url: "https://github.com/RKaseman",
            urlText: "gitHub"
        },
        {
            url: "https://www.linkedin.com/in/rmkaseman-evolution-of-a-coder/",
            urlText: "linkedIn"
        }
    ];
    var footerTemplate = Handlebars.compile($("#footer-template").html());
    $("#footer").append(footerTemplate(footer));

});

