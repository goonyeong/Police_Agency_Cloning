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


// NewsBox slide ///////////////////////////////////////////////////////
function doSlideNewsbox(){
    var NEWS_LIST = $('.newslist');
    var ARROW_L = $('.arrow_news_l');
    var ARROW_R = $('.arrow_news_r');
    var NEWS_WIDTH = $('.newsbox:first').outerWidth() + 8;
    var PLAY_BTN = $('.cont_02 .container>button');
    var NEWS_PAGER = $('.cont_02 .news_pager');
    var setIntervalID = undefined;

    NEWS_PAGER.find('.whole_pg').html(NEWS_LIST[0].childElementCount);
    NEWS_PAGER.find('.current_pg').html(NEWS_LIST[0].childElementCount);


    function doAutoSlide(){
        setIntervalID = setInterval(function(){
            var FIRST_LI = NEWS_LIST.find('.newsbox:first');
            var LAST_LI = NEWS_LIST.find('.newsbox:last');
            
            
            NEWS_LIST.stop().animate({marginLeft: -NEWS_WIDTH}, 1000, function(){
                FIRST_LI.insertAfter(LAST_LI);
                $(this).css({marginLeft: 0});
            });
            
            var firstIndex = Number(NEWS_LIST.find('.newsbox:first .news_textbox .index').html());
            function controlPager(){
                NEWS_PAGER.find('.current_pg').html(firstIndex);
            }
            controlPager();

        }, 4000);
    }
    
    function stopAutoslide(){   
        // When button clicked
        PLAY_BTN.click(function(){
            $(this).toggleClass('play');
            var hasPlayClass = $(this).hasClass('play');
            console.log(hasPlayClass);
            if(hasPlayClass){
                clearInterval(setIntervalID);
            } else{
                doAutoSlide();
            }
        });
    }

    function doSlideClickArrow(){
        ARROW_R.click(function(){
            var FIRST_LI = NEWS_LIST.find('.newsbox:first');
            var LAST_LI = NEWS_LIST.find('.newsbox:last');
            
            NEWS_LIST.stop().animate({marginLeft: -NEWS_WIDTH}, 1000, function(){
                FIRST_LI.insertAfter(LAST_LI);
                $(this).css({marginLeft: 0});
            });

            var firstIndex = Number(NEWS_LIST.find('.newsbox:first .news_textbox .index').html());
            function controlPager(){
                NEWS_PAGER.find('.current_pg').html(firstIndex);
            }
            controlPager();

            return false;
        });
        ARROW_L.click(function(){
            var FIRST_LI = NEWS_LIST.find('.newsbox:first');
            var LAST_LI = NEWS_LIST.find('.newsbox:last');

            LAST_LI.insertBefore(FIRST_LI);
            NEWS_LIST.css({marginLeft: -NEWS_WIDTH})
            NEWS_LIST.stop().animate({marginLeft: 0}, 1000);

            var firstIndex = Number(NEWS_LIST.find('.newsbox:first .news_textbox .index').html());
            function controlPager(){
                NEWS_PAGER.find('.current_pg').html(firstIndex-1);
                if(firstIndex-1 === 0){
                    NEWS_PAGER.find('.current_pg').html(NEWS_LIST[0].childElementCount);
                }
            }
            controlPager();

            return false;
        });
    }

    doAutoSlide();
    stopAutoslide();
    doSlideClickArrow();
};


// Service Slide /////////////////////////////////////////////////////////////////////////////
function controlServiceCont(){
    
    function switchTapMenu(){
        var ACTIVE_CLASS = 'active_ser';
        var SER_MENU_LIST = $('.tab_menu li');
        var SER_CONTS = $('.ser_cont>div');
        
        SER_MENU_LIST.on('click', function(e){
            e.preventDefault();
            var tg = $(this).index();
            
            SER_MENU_LIST.removeClass(ACTIVE_CLASS)
            $(this).addClass(ACTIVE_CLASS);

            SER_CONTS.removeClass(ACTIVE_CLASS);
            SER_CONTS.eq(tg).addClass(ACTIVE_CLASS);
        });
    }

    
    switchTapMenu();
}



// Notice visible ////////////////////////////////////////////////////
function letNoticeVisible(){
    var MENU1 = $('.notice1 dl'); 
    MENU1.on("click", function(){
        for(let i = 0; i < MENU1.length; i++){
            $(MENU1[i]).removeClass('active_noti');
            $(MENU1[i]).find()
        }   
        $(this).addClass('active_noti');

        return false;
    });

    var MENU2 = $('.notice2 dl'); 
    MENU2.on("click", function(){
        for(let i = 0; i < MENU2.length; i++){
            $(MENU2[i]).removeClass('active_noti');
            $(MENU2[i]).find()
        }   
        $(this).addClass('active_noti');

        return false;
    });
};



// init //////////////////////////////////////////////////////////////////////
function init(){
    letMenuVisible();
    doSlideNewsbox();
    controlServiceCont();
    letNoticeVisible();

};

init();

