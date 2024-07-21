//funcion que aplica estilo a la aopcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(function(opcion){
        opcion.classList.remove("seleccionado");
    });
    link.classList.add("seleccionado");

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x= document.getElementById("nav");
    if(x.classList.contains("responsive")){
        x.classList.remove("responsive");
    }
}
   
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detecto el escrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//función que aplica la animación de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills == 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

//Inicia EmailJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_eljxbcq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});