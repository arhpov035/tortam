class GridSlide{
    constructor(selector, toShow){
        this.selector = selector;
        this.toShow = toShow;

        $(selector).wrap("<div class='new'></div>");
        $(".new").append('<div class="next">next</div><div class="prev">prev</div>');

        $(selector).css({
            'display': 'grid',
            'position': 'relative',
            'grid-template-columns': 'repeat('+toShow+', 1fr)',
        });
        var showDisplay = this.showDisplay(selector, toShow);

        var slideQuanti = $(selector).children().length - 1;
        var numberSlide = 0;
        // var slides = $(".slide");
        var slides = $(selector).children();
        var prevSlide = new Array($(selector).children());
        var slide = new Array();
        $(".next").click(function() {
            if (numberSlide <= slideQuanti - toShow) {
                showDisplay;
                $(selector).children().eq(0).detach();
                prevSlide.push($(selector).children());

                $(selector).children().each(function(i){
                    if(i < toShow){
                        $(this).show();
                    }
                })

                numberSlide++;
            }else{
                /*В эту сторону работает хорошо*/
                // $(".grid").append(slides);
                // $(".grid div").css({'display': 'none'});
                // $(".grid div:lt("+toShow+")").show();
                // numberSlide = 0;
            }
        })
        $('.prev').click(function(){
            if (numberSlide != 0) {
                numberSlide--;
                $(selector).append(prevSlide[numberSlide]).animate(10000);

                $(selector).children().hide();
                $(selector).children().each(function(index){
                    if(index < toShow){
                        $(this).show();
                    }
                })
            }else{
                /*В эту нужно доработать*/
                // $(".grid div").css({'display': 'none'});
                // $(".grid div:nth-last-child(-1n+4)").show();
            }

        })
    }

    next(){

    }

    gap(value){
        $(this.selector).css({'gap': value});
    }

    gridTemplateColumns(val){
        // console.log(isNumber(val));
        if (!isNumber(val)) {
            $(this.selector).css({'grid-template-columns': val});
        }
    }

    showDisplay(selector, toShow){
        $(selector).children().css({'display': 'none'});
        let children = $(selector).children();
        children.each(function(index){
            if(index < toShow){
                $(this).show();
            }
        })
    }

    button(/*selector,*/ size){
        let indent = size/2+'px';
        console.log(indent);
        $(".next").css({
            "position": "absolute",
            "content": "url(file:///home/profirub/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Git/tortam/icon/next.svg)",
            "right": "0",
            "width": size,
            "height": size,
            "top": "calc(50% - "+indent+")",
            "cursor": "pointer",
            "z-index": 100,
        });

        $(".prev").css({
            "position": "absolute",
            "content": "url(file:///home/profirub/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Git/tortam/icon/prev.svg)",
            "left": "0",
             "width": size,
            "height": size,
            "top": "calc(50% - "+indent+")",
            "cursor": "pointer",
            "z-index": 100,
        });
    }
}

$(document).ready(function(){
    // $(".slidewrapper").wrap("<div class='new'></div>");
    // $(".new").append('<div class="next">next</div><div class="prev">prev</div>');
})