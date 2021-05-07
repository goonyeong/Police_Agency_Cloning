// Menu Hover visible //////////////////////////////////////////
function letMenuVisible(){
    var NAV_LIST = $('#one_step').children();

    $(NAV_LIST).each(function(i, item){
        $(this).hover(function(){
            $(item).children('dl').show();
        }, function(){
            $(item).children('dl').hide();
        });
    });
};

// Sub2 Change news categories///////////////////////////////////
function sub2ControlNewTab(){
    var NEWS_CATEGORIES = $('#wrap_02 .categories');
    var activeClassName = 'active_cate'; 

    NEWS_CATEGORIES.on('click', function(e){
        e.preventDefault();
        NEWS_CATEGORIES.removeClass(activeClassName);
        $(this).addClass(activeClassName);
    });
}

// Sub4 Slide toggle/////////////////////////////////////////////////
function sub4DoSlideToggle(){
    var INFO_LIST = $('#wrap_04 .info_list>a');

    INFO_LIST.on('click', function(e){
        e.preventDefault();
        INFO_LIST.siblings('#wrap_04 .info_detail').slideUp();
        $(this).siblings('#wrap_04 .info_detail').slideDown();
    });
}

// Sub6 Control tab /////////////////////////////////////////////////
function sub6ControlTab(){
    var TAB_MENU = $('#wrap_06 .tab_news li');
    var activeClassName = 'active_chief'

    TAB_MENU.on('click', function(e){
        e.preventDefault();
        TAB_MENU.removeClass(activeClassName);
        $(this).addClass(activeClassName);
    });
}

// Sub6 Put date /////////////////////////////////////////////////
function sub6Date(){
    var CALENDAR_MONTH = document.getElementById('month');
    var CALENDAR_DATE = document.getElementById('date');
    var CALENDAR_DAY = document.getElementById('day');
    
    var TODAY = new Date();
    var month = TODAY.getMonth() + 1;
    var date = TODAY.getDate();
    var day_array = ['일', '월', '화', '수', '목', '금', '토']
    var day = day_array[TODAY.getDay()];

    CALENDAR_MONTH.innerHTML = month;
    CALENDAR_DATE.innerHTML = date;
    CALENDAR_DAY.innerHTML = day;    
}

// Sub7 Slide contents /////////////////////////////////////////////////
function sub7DoSlide(){
    var SLIDE_WRAP = $('#wrap_07 .slide');
    var SLIDE_WIDTH = 283;
    var BTN_NEXT = $('#wrap_07 .btn_next');
    var BTN_PREV = $('#wrap_07 .btn_prev');

    BTN_NEXT.click(function(){
        var FIRST_SLIDE = SLIDE_WRAP.find('li:first');
        var LAST_SLIDE = SLIDE_WRAP.find('li:last');

        SLIDE_WRAP.stop().animate({marginLeft: -SLIDE_WIDTH}, 500, function(){
            FIRST_SLIDE.insertAfter(LAST_SLIDE);
            SLIDE_WRAP.css({marginLeft: 0});
        });
    });
    
    BTN_PREV.click(function(){
        var FIRST_SLIDE = SLIDE_WRAP.find('li:first');
        var LAST_SLIDE = SLIDE_WRAP.find('li:last');

        LAST_SLIDE.insertBefore(FIRST_SLIDE);
        SLIDE_WRAP.css({marginLeft: -SLIDE_WIDTH});
        SLIDE_WRAP.stop().animate({marginLeft: 0}, 500);
    });

}



// init /////////////////////////////////////////////////////////////////
function init(){
    letMenuVisible();
    sub2ControlNewTab();
    sub4DoSlideToggle();
    sub6ControlTab();
    sub6Date();
    sub7DoSlide();
}

init();