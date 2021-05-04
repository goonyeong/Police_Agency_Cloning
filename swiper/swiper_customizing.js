

function doBannerSwiper(){

    const BTN_P = document.getElementById('btn_p');
    const PLAY_CLASS = "btn_title_play";
    const PAUSE_CLASS = "btn_title_pause";

    function controlAutoplay(){
        BTN_P.addEventListener('click', ()=>{
            if(BTN_P.classList.contains(PAUSE_CLASS)){
                BTN_P.classList.remove(PAUSE_CLASS);
                BTN_P.classList.add(PLAY_CLASS);
                swiper.autoplay.stop()
            } else{
                BTN_P.classList.remove(PLAY_CLASS);
                BTN_P.classList.add(PAUSE_CLASS);
                swiper.autoplay.start()
            }
        });
    }

    controlAutoplay();
    
    var swiper = new Swiper('.banner_swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay:{
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}

function init(){
    doBannerSwiper();
    
}
    
init();