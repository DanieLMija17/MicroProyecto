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


/*------------------Logica validación de contact me---------------*/
const nameInput= document.querySelector("#name");
const email= document.querySelector("#email");
const message= document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes= document.querySelectorAll(".error");

function validateForm(){
    clearMessages();
    let errorFlag = false;
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Debe ingresar su nombre";
        nameInput.classList.add("error-border");
        errorFlag= true;
        alert("Debe ingresar su nombre" )
    }
    if(!validacionEmail(email.value)){
        errorNodes[1].innerText= "Email inválido";
        email.classList.add("error-border");
        errorFlag= true;
        alert("Email inválido" )
    }
    
    if(message.value.length < 1){
        errorNodes[2].innerText = "Debe ingresar un mensaje";
        message.classList.add("error-border");
        errorFlag= true;
        alert("Debe ingresar un mensaje" )
    }
    if(!errorFlag){
        alert("Su mensaje a sigo enviado" )
        alert("Nombre: " + nameInput.value + "\n" + "correo: " + email.value + "\n" + "Mensaje: " + message.value + "\n");
    }
}

function clearMessages(){
    for(let i =0 ; i < errorNodes.length; i++){
       errorNodes[i].innerText="";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
}

/*------Funcion que valida el email----------------*/
function validacionEmail(email){
    let validacion = /\S+@\S+\.\S+/;
    return validacion.test(email);
}
/*---------------Fin logica validación de contact me---------------*/

/*---------------------Logica de sacar la data del JSON--------------- */
var skills = [
    {
        "Descripcion" : "Programación SQL",
        "nivelDom" : "50%" ,
        "imagenAlusiva" : "./img/sqlImage.jpg"
    },
    {
        "Descripcion" : "Programación C#",
        "nivelDom" : "45%" ,
        "imagenAlusiva" : "./img/CImage.jpg"
    },
    {
        "Descripcion" : "Crossfit Training",
        "nivelDom" : "90%%" ,
        "imagenAlusiva" : "./img/crossfit.jpg"
    },
    {
        "Descripcion" : "Trabajo en equipo",
        "nivelDom" : "80%" ,
        "imagenAlusiva" : "./img/teamwork.jpg"
    },
    {
        "Descripcion" : "Trabajar bajo modalidad Scrum y Kanban",
        "nivelDom" : "50%" ,
        "imagenAlusiva" : "./img/meating.jpg"
    },
    {
        "Descripcion" : "Estrés y ansiedad",
        "nivelDom" : "110%" ,
        "imagenAlusiva" : "./img/estres.jpg"
    }
]
 
construirTabla(skills)/*aqui se llena la tabla*/ 

function construirTabla(data){
    var tabla = document.getElementById("tablaSkill")
        for (let i = 0; i < data.length; i++){
            var row = `
                <tr>
                    <td>${data[i].Descripcion}</td>
                    <td>${data[i].nivelDom}</td>
                    <td> <img src="${data[i].imagenAlusiva}"> </td>
                </tr>
            `
            tabla.innerHTML += row
        } 
    
}