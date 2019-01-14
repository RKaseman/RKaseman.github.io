
var sections = document.getElementsByClassName("expand");
var i;
for (i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
};

