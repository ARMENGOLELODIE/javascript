function aggrandir() {
    var myImg = document.getElementById("myImg");
    var width = myImg.clientWidth;
    if (width == 80) {
        alert("YAMETEEEEEEEEE ! tu ne peux plus aggrandir !.");
    } else {
        myImg.style.width = (width + 50) + "px";
    }
}

function diminuer() {
    var myImg = document.getElementById("myImg");
    var width = myImg.clientWidth;
    if (width == 70) {
        alert("YAMETEEEE KUDASAI C'est le terminus tu ne peux plus rettraicir!.");
    } else {
        myImg.style.width = (width - 50) + "px";
    }
}