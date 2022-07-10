function burgerMenu() {
    var nav = document.getElementById("navlist");
    if (nav.style.display === "") {
        nav.style.display = "flex";
        nav.style.flexWrap = "wrap";
        nav.style.justifyContent = "space-around"
        nav.style.width = "100%"
    }
    else {
        nav.style.display = "";
    }
}