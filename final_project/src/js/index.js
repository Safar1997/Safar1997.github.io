`use strict`;

let exit = document.querySelector('.aside__exit');
let aside = document.querySelector('.aside');

let exit_callback = document.querySelector('.aside-callback__exit');
let aside_callback = document.querySelector('.aside-callback');

let exit_order = document.querySelector('.aside-order__exit');
let aside_order = document.querySelector('.aside-order');

let aside_phone = document.querySelector('.aside__phone');
let aside_message = document.querySelector('.aside__message');

let header_menu = document.querySelector('.header__menu');

let header__phone = document.querySelector('.header__phone');
let header__message = document.querySelector('.header__message');

let fog_of_war = document.querySelector('.fog_of_war');

let setion_1_paragraph = document.querySelector('.section-1__paragraph');
let read_more = document.querySelector('.section-1__read-more');
let hidden_text = document.querySelector('.section-1__text_hide');
let main_image = document.querySelector('.section-1__image');
let copy_image = main_image.cloneNode(true);
let hide = document.querySelector('.hide');

let section_2 = document.querySelector('.section-2__logos');
let section__2 = document.querySelector('.section-2');
let section__3 = document.querySelector('.section-3');
let section_3 = document.querySelector('.section-3__logos');

let section_2__template = document.querySelector('.section-2__template');
let section_3__template = document.querySelector('.section-3__template');


let section_2_logo = document.querySelectorAll('.section-2__logo');
let section_3_logo = document.querySelectorAll('.section-3__logo');


let section_2__show_more = document.querySelector('.section-2__show-more');
let section_2__show_less = document.querySelector('.section-2__show-less');

let section_3__show_more = document.querySelector('.section-3__show-more');
let section_3__show_less = document.querySelector('.section-3__show-less');

// if (window.innerWidth < 400){
//     section_2__show_more.style.display = 'none';
//     section_2.style.display = 'none';
//     section_2__template.style.display = 'block';
//     section__2.appendChild(section_2__template);
// }

section_2__show_less.style.display = 'none';
section_3__show_less.style.display = 'none';

if(window.innerWidth < 768){
    section_2__show_more.style.display = 'none';
    section_2__show_less.style.display = 'none';
    
    section_3__show_more.style.display = 'none';
    section_3__show_less.style.display = 'none'; 
}


section_2__show_more.addEventListener('click',function(evt){
    evt.preventDefault();
    if(window.innerWidth > 320){
       for(let i=0; i<(section_2_logo.length); i++){
           section_2.children[i].style.display = 'initial';
       } 
    }
    // if(window.innerWidth <=708){
    //     for(let i=0; i<(section_2_logo.length-8); i++){
    //         section_2.children[i].style.display = 'initial';
    //     }
    // }
    // if (window.innerWidth >1250 ){
    //     for(let i=0; i<(section_2_logo.length-4); i++){
    //         section_2.children[i].style.display = 'initial';
    //     }
    // }
    section_2__show_more.style.display = 'none';
    section_2__show_less.style.display = 'initial';
})
section_2__show_less.addEventListener('click',function(evt){
    evt.preventDefault();
     if(window.innerWidth >= 1250){
        for(let i=0; i<(section_2_logo.length-8); i++){
            section_2.children[i].style.display = 'none';
        } 
    }
    if((window.innerWidth >= 768) && (window.innerWidth < 1250)){
        for(let i=0; i<(section_2_logo.length-6); i++){
            section_2.children[i].style.display = 'none';
        } 
    }
    section_2__show_more.style.display = 'initial';
    section_2__show_less.style.display = 'none';
    
})

section_3__show_more.addEventListener('click',function(evt){
    evt.preventDefault();
    if(window.innerWidth > 320){
        for(let i=0; i<(section_3_logo.length); i++){
            section_3.children[i].style.display = 'initial';
        } 
     }
    section_3__show_more.style.display = 'none';
    section_3__show_less.style.display = 'initial';

})
section_3__show_less.addEventListener('click',function(evt){
    evt.preventDefault();
    // if(window.innerWidth <= 769) {
    //    for(let i=0; i<(section_3_logo.length-3); i++){
    //        section_3.children[i].style.display = 'none';
    //    } 
    // } 
    if((window.innerWidth >= 768) && (window.innerWidth < 1250)){
        for(let i=0; i<(section_3_logo.length-3); i++){
            section_3.children[i].style.display = 'none';
        } 
    }
    else if(window.innerWidth >= 1250){
        for(let i=0; i<(section_3_logo.length-4); i++){
            section_3.children[i].style.display = 'none';
        } 
    }
    section_3__show_more.style.display = 'initial';
    section_3__show_less.style.display = 'none';
})


hide.style.display = 'none';
read_more.addEventListener('click',function(){  
    hidden_text.style.display = 'block';
    read_more.style.display = 'none';
    hide.style.display = 'inline-block';
    // section_2.style.transform = 'translateY(50px)';
})
hide.addEventListener('click', function(){
    hidden_text.style.display = 'none';
    hide.style.display = 'none'
    read_more.style.display = 'block';
})


header__phone.addEventListener('click', function(evt){
    evt.preventDefault();
    aside_callback.style.transform = 'translateX(0px)';
    aside_callback.style.zIndex = 200;
    fog_of_war.style.zIndex = 100;
})

header__message.addEventListener('click', function(evt){
    evt.preventDefault();
    aside_order.style.transform = 'translateX(0px)';
    aside_order.style.zIndex = 200;
    fog_of_war.style.zIndex = 100;
})


header_menu.addEventListener('click', function(evt){
    evt.preventDefault();
    aside.style.left = '0px';
    aside.style.zIndex = 200;
    fog_of_war.style.zIndex = 100;
})

exit.addEventListener('click',function(evt){
    evt.preventDefault();
    aside.style.left = '-320px';
    aside.style.boxShadow = 'none';
    fog_of_war.style.zIndex = -1;

})
// Push Tel
aside_phone.addEventListener('click', function(evt){
    evt.preventDefault();
    aside_callback.style.transform = 'translateX(0px)';
    aside.style.left = '-320px';
    aside_callback.style.zIndex = 200;
    fog_of_war.style.zIndex = 100;

})
exit_callback.addEventListener('click', function(evt){
    evt.preventDefault();
    aside_callback.style.transform = 'translateX(435px)';
    if (window.innerWidth > 768){
        aside.style.left = '0px';
    }    
    fog_of_war.style.zIndex = -1;


})
// *****************
// Push Message
aside_message.addEventListener('click', function(evt){
    evt.preventDefault();
    aside_order.style.transform = 'translateX(0px)';
    aside.style.left = '-320px';
    aside_order.style.zIndex = 200;
    fog_of_war.style.zIndex = 100;

})
exit_order.addEventListener('click', function(evt){
    evt.preventDefault();
    aside_order.style.transform = 'translateX(435px)';
    if (window.innerWidth > 768){
        aside.style.left = '0px';
    }
    fog_of_war.style.zIndex = -1;


})
// *************