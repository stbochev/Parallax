const square1 = document.querySelector('#square1');
const square2 = document.querySelector('#square2');
const square3 = document.querySelector('#square3');
const square4 = document.querySelector('#square4');
const square5 = document.querySelector('#square5');
const square6 = document.querySelector('#square6');
const square7 = document.querySelector('#square7');
const square8 = document.querySelector('#square8');
const parallax = document.querySelector('.parallax');
const double = document.querySelector('.double');
const coverWhite = document.querySelector('.cover-white');

// get the height of a Viewport - window.visualViewport.height
//ge the position of an object telated to the viewport getBoundingClientRect() y- top; bottom - the bottom from the top;
// so when oject.getBoundingClientRect().y < window.visualViewport.height  the top of an object is comming on the screen
// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

; (function () {

    let throttle = function (type, name, obj) {
        var obj = obj || window;
        let running = false;
        let func = function () {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function () {
    let heightGrayBox = square2.getBoundingClientRect().bottom - square2.getBoundingClientRect().y;
    let widthGrayBox = square2.getBoundingClientRect().right - square2.getBoundingClientRect().x;
    let position;
    let positionB;
    let positionC;

    if (parallax.getBoundingClientRect().y + 50 < window.visualViewport.height && parallax.getBoundingClientRect().y > -50) {

        position = (window.visualViewport.height - parallax.getBoundingClientRect().y - 50) / (window.visualViewport.height - 50);
        console.log(position)

        square1.style.transform = "translate3d(0px, -" + position * 100 + "%, 0px)";
        square3.style.transform = "translate3d(" + position * 100 + "%, 0px, 0px)";
        square5.style.transform = "translate3d(0px, " + position * 100 + "%, 0px)";
        square7.style.transform = "translate3d(-" + position * 100 + "%, 0px, 0px)";

    } else {

        square1.style.transform = "translate3d(0px, 0 px, 0px)";
        square3.style.transform = "translate3d(0px, 0 px, 0px)";
        square5.style.transform = "translate3d(0px, 0 px, 0px)";
        square7.style.transform = "translate3d(0px, 0 px, 0px)";

    }

    if ((window.visualViewport.height - parallax.getBoundingClientRect().y - 50) / (window.visualViewport.height - 50) >= 1) {

        positionB = -(((heightGrayBox + parallax.getBoundingClientRect().y) / heightGrayBox) - 1);
        console.log(`posB${positionB} par${parallax.getBoundingClientRect().y} win ${window.pageYOffset}`)

        square2.style.transform = "translate3d(-" + positionB * 100 + "%, 0px, 0px)";
        square4.style.transform = "translate3d(0px," + positionB * 100 + "%, 0px)";
        square6.style.transform = "translate3d(" + positionB * 100 + "%, 0px, 0px)";
        square8.style.transform = "translate3d(0px," + positionB * 100 + "%, 0px)";

    }

    else {
        square2.style.transform = "translate3d(0px, 0px, 0px)";
        square4.style.transform = "translate3d(0px, 0px, 0px)";
        square6.style.transform = "translate3d(0px, 0px, 0px)";
        square8.style.transform = "translate3d(0px, 0px, 0px)";
    }
    if (position + 52 >= heightGrayBox || parallax.getBoundingClientRect().y <= 0) {
        square5.style.opacity = "0";
    } else { square5.style.opacity = "1" }
    console.log((heightGrayBox + parallax.getBoundingClientRect().y) / heightGrayBox)
    if ((heightGrayBox + parallax.getBoundingClientRect().y) / heightGrayBox < - 0.2) {
        positionC = -(heightGrayBox + parallax.getBoundingClientRect().y) / heightGrayBox;



        coverWhite.style.backgroundColor = "rgba(255, 255, 255," + positionC + ")";
    } else {
        coverWhite.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }

})
function toggle() {
    let x = document.querySelector("#myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}