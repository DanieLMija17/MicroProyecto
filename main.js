/*--------------------Logica de Hero slider----------------------------------------------*/
const slider= document.querySelector("#slider");
let sliderBlock= document.querySelectorAll(".slider_i")
let sliderLast= sliderBlock[sliderBlock.length-1]; 
const btnLeft= document.querySelector("#btn_l");
const btnRight= document.querySelector("#btn_r");

slider.insertAdjacentElement('afterbegin', sliderLast);

function next(){
    let sliderFirst= document.querySelectorAll(".slider_i")[0]; 
    slider.style.marginLeft = "-200%";
    slider.style.transition =  "all 0.5s";
    setTimeout(function(){
    slider.style.transition= "none";
    slider.insertAdjacentElement('beforeend', sliderFirst);
    slider.style.marginLeft = "-100%";
    }, 500);


}
function previus(){
    let sliderBlock= document.querySelectorAll(".slider_i")
    let sliderLast= sliderBlock[sliderBlock.length-1]; 
    slider.style.marginLeft = "0%";
    slider.style.transition =  "all 0.5s";
    setTimeout(function(){
    slider.style.transition= "none";
    slider.insertAdjacentElement('afterbegin', sliderLast);
    slider.style.marginLeft = "-100%";
    }, 500);


}

btnRight.addEventListener('click', function(){
    next();
});
btnLeft.addEventListener('click', function(){
    previus();
});
/* Puesto 10 seg para que cambie automaticamente de foto*/
setInterval(function() {
    next();
}, 10000)

/* ScrollReveal().reveal('.exp'); */

/*----------------Finaliza logica de Hero Slider-------------------------------------*/