var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){

    var trPaciente = paciente[i];

    var peso = trPaciente.querySelector(".info-peso").textContent;
    
    var altura = trPaciente.querySelector(".info-altura").textContent;
    
    var tdImc = trPaciente.querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        console.log("peso inválido");
        trPaciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        console.log("Altura inválida");
        trPaciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    }
    else{
        return false;
    }
}




