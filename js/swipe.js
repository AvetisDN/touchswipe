$(function () {

    if('ontouchstart' in window) {

        let wrap = $('.wrap');
        let pages = wrap.find('section');
        let activePage = 0;

        wrap.addClass('touch');
        changePage();
        
        function changePage() {
            pages.removeClass('open');
            pages.eq(activePage).addClass('open');
        }
        
        wrap.swipe({
            swipe: function (event, direction, distance) {
                if(direction === 'up' && distance >= 100) {
                    if (activePage < pages.length - 1) activePage++;
                    changePage();
                }
                if(direction === 'left' && distance >= 100) {
                    if (activePage < pages.length - 1) activePage++;
                    changePage();
                }
                if(direction === 'down' && distance >= 100) {
                    if (activePage > 0) activePage--;
                    changePage();
                }
                if(direction === 'right' && distance >= 100) {
                    if (activePage > 0) activePage--;
                    changePage();
                }
            }
        });

    }

});