// var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){
//         console.log(paciente);
//         this.remove();
//     })
// })

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
       event.target.parentNode.remove();
    }, 500);
})