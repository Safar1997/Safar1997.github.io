`use strict`
let template = document.querySelector('#other_brands_desktop').content;
let logos = document.querySelector('.logos');


let general_paren = document.querySelector('.brands');

let show_more = document.querySelector('.show_more');
let show_less = document.querySelector('.show_less');

let additional = template.querySelectorAll('.logo');


// show_less.remove();

// show_more.addEventListener('click', function(evt){
//     evt.preventDefault();
//     for(let i=0; i<additional.length; i++){
//         logos.appendChild(additional[i]);
//     }
//     show_more.remove();
//     general_paren.appendChild(show_less);
// });
// show_less.addEventListener('click', function(evt){
//     evt.preventDefault();
//     for(let i=0; i<additional.length; i++){
//         additional[i].remove();
//     }
//     show_less.remove();
//     general_paren.appendChild(show_more);
// });

if ( window.innerWidth > 768){

show_less.remove();

show_more.addEventListener('click', function(evt){
    evt.preventDefault();
    for(let i=0; i<additional.length; i++){
        logos.appendChild(additional[i]);
    }
    show_more.remove();
    general_paren.appendChild(show_less);
});
show_less.addEventListener('click', function(evt){
    evt.preventDefault();
    for(let i=0; i<additional.length; i++){
        additional[i].remove();
    }
    show_less.remove();
    general_paren.appendChild(show_more);
});
} 

if ((window.innerWidth > 320) && (window.innerWidth <=768)){

        logos.children[3].style.display = 'none';
        logos.children[7].style.display = 'none';

        show_less.remove();

    show_more.addEventListener('click', function(evt){
        evt.preventDefault();
        logos.children[7].style.display = '';
        logos.children[3].style.display = '';
       
        
        for(let i=0; i<additional.length; i++){
            logos.appendChild(additional[i]);
        }
        show_more.remove();
        

        general_paren.appendChild(show_less);
    });
    show_less.addEventListener('click', function(evt){
        evt.preventDefault();

        logos.children[7].style.display = 'none';
        logos.children[3].style.display = 'none';
        

        for(let i=0; i<additional.length; i++){
            additional[i].remove();
        }
        show_less.remove();
        general_paren.appendChild(show_more);
    }); 




}

if (window.innerWidth <= 320){
        logos.children[7].style.display = 'none';
        logos.children[6].style.display = 'none';
        logos.children[5].style.display = 'none';
        logos.children[4].style.display = 'none';
        logos.children[3].style.display = 'none';
        logos.children[2].style.display = 'none';

        // logos.children.forEach((element, index) => {
        //     if(index > SHOWN_ITEMS[320] ){
        //     element.style.display = 'none';}
        // });

    show_less.remove();

    show_more.addEventListener('click', function(evt){
        evt.preventDefault();
        logos.children[7].style.display = '';
        logos.children[6].style.display = '';
        logos.children[5].style.display = '';
        logos.children[4].style.display = '';
        logos.children[3].style.display = '';
        logos.children[2].style.display = '';
        
        for(let i=0; i<additional.length; i++){
            logos.appendChild(additional[i]);
        }
        show_more.remove();
        

        general_paren.appendChild(show_less);
    });
    show_less.addEventListener('click', function(evt){
        evt.preventDefault();

        logos.children[7].style.display = 'none';
        logos.children[6].style.display = 'none';
        logos.children[5].style.display = 'none';
        logos.children[4].style.display = 'none';
        logos.children[3].style.display = 'none';
        logos.children[2].style.display = 'none';

        for(let i=0; i<additional.length; i++){
            additional[i].remove();
        }
        show_less.remove();
        general_paren.appendChild(show_more);
    }); 
}