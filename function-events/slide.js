var currentSlideNumber = Math.floor(Math.random() * 5) + 1;
var timer1;
var timer2;

function changeSlide() {
        currentSlideNumber++;
        if (currentSlideNumber > 5) currentSlideNumber = 1;

        var path = "slajdy/slajd" + currentSlideNumber + ".png";
        // console.log(path);

        document.getElementById("photo").setAttribute('src', path);
        $("#photo").fadeIn(500);

        timer1 = setTimeout("changeSlide()", 5000);
        timer2 = setTimeout("hide()", 4500);
}

function hide() {
        $("#photo").fadeOut(500);
}

function changeSelectedSlide(photoNumebr) {
       
        clearTimeout(timer1);
        clearTimeout(timer2);
        currentSlideNumber = photoNumebr - 1;
        hide();
        setTimeout("changeSlide()",500);
}