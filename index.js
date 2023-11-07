
function switchOff() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent = "switchoff";
    document.getElementById("onswitch").style.backgroundColor = "green";
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent = "switchon";
    document.getElementById("onswitch").style.backgroundColor = "red";
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}
