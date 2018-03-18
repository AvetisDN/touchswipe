$(function () {

    if('ontouchstart' in window) {

        let wrap = $('.wrap');
        let pages = wrap.find('section');
        let activePage = 0;

        wrap.addClass('touch');
        preparePages();
        changePage();

        function preparePages() {
            pages.each(function (index, item) {
                if (index < activePage) {
                    $(item).removeClass('right');
                    $(item).addClass('left');
                } else if (index > activePage) {
                    $(item).removeClass('left');
                    $(item).addClass('right');
                }
            });
        }

        function changePage() {
            pages.removeClass('open');
            pages.eq(activePage).addClass('open');
            preparePages();
        }
        
        wrap.swipe({
            swipe: function (event, direction, distance) {
                if(direction === 'left' && distance >= 100) {
                    if (activePage < pages.length - 1) activePage++;
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