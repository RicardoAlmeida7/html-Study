var buscarPacientes = document.querySelector("#buscar-paciente");
buscarPacientes.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
    });
    xhr.send();
})
