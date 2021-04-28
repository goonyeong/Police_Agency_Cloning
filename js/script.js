function letMenuVisible(){
    const NAV_LIST = document.getElementsByClassName('one_step');
    const VISIBLE_CLASSNAME = 'nav_visible';

    for(let i=0; i<NAV_LIST.length; i++){
        NAV_LIST[i].addEventListener('mouseover', ()=>{
            NAV_LIST[i].children[1].classList.add(VISIBLE_CLASSNAME);
        });
        NAV_LIST[i].addEventListener('mouseout', ()=>{
            NAV_LIST[i].children[1].classList.remove(VISIBLE_CLASSNAME);
        });

    }
}

function init(){
    letMenuVisible();
}

init();

