

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// cursor flower 


function circlChaptakaro() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMousefollower(xscale, yscale);
    });
}



function circleMousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}


circlChaptakaro();
circleMousefollower();


// image ane ka code 

var elemc = document.querySelector("#elem-container");

var fix = document.querySelector(".fixed-image");


elemc.addEventListener("mouseenter", function () {

    fix.style.display = "block"

});



elemc.addEventListener("mouseleave", function () {

    fix.style.display = "none"

});

var elem1 = document.querySelector("#elem1");



var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {


    e.addEventListener("mouseenter", function () {

        var image = e.getAttribute("data-image");


        fix.style.backgroundImage = `url(${image})`;
    });

});




function fun() {


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {

            delay: 2500

        }
    });

}



fun();


var menu = document.querySelector("nav h3");
var full = document.querySelector("#fullscr");



menu.addEventListener("click", function () {




});





