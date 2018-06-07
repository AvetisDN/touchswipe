var menu = document.querySelector('#main-menu');
var menuToggle = document.querySelector('#menu-toggle');

menuToggle.onclick = function (event) {
    event.preventDefault();
    menu.classList.toggle('open');
};

//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

$(function () {
    $('body').swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if(direction === "left") {
                menu.classList.add('open');
            }
            if(direction === "right") {
                menu.classList.remove('open');
            }
        }
    });
});