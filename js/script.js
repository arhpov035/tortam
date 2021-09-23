$(document).ready(function() {
    $(".w-c-description").hover(
        function() {
            console.log('навел');
            if ($(window).width() > 580) {
                $(this).css({ 'background': '#fff' });
                $(this).children("div").css({ "display": "block" });
            }
        },
        function() {
            console.log('отвёл');
            if ($(window).width() > 580) {
                $(this).css({ 'background': 'none' });
                $(this).children("div").css({ "display": "none" });
            }
        }
    );
    modalWindowClick(".quick-view", ".modal-1");
})
function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

/*Модальное окно для быстрых товаров*/

function modalWindowClick(buttonClick, modalItem) {
    const quickView = $(buttonClick);
    modal = $('.modal');
    fon = $(modalItem);

    quickView.on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            fon.slideUp();
        } else {
            $(this).addClass('is-active');
            fon.slideDown();
        }
    });

    $(document).click(function(e) {
        console.log(quickView.is(e.target));
        if (!quickView.is(e.target) && !modal.is(e.target) && modal.has(e.target).length === 0) {
            fon.slideUp();
            quickView.removeClass('is-active');
        };
    });

    $(".modal .close").click(function(e) {
        console.log(quickView.is(e.target));
        fon.slideUp();
        quickView.removeClass('is-active');
    });

    $('img.img-svg').each(function() {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

    var slide = new GridSlide(".slidewrapper", 3);
    slide.gap("3px");
    slide.gridTemplateColumns('.6fr 1fr .6fr');
    slide.button(70);

    // slide_1 = new GridSlide(".grid", 4);
    // slide_1.gap('1em');

    // slide_2 = new GridSlide(".qwerty", 3);
    // slide_2.gap('2em');

    // slide_3 = new GridSlide(".qwerty2", 2);
    // slide_3.gap('3em');



}
