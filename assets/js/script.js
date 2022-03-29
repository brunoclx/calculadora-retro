const telaCalc = document.querySelector('.display-calc p')
const resultado =  document.querySelector('#resultado')
const todosBotoes = document.getElementsByTagName('button')
const btnDesliga = document.querySelector('#desliga')

let arrNumerosDigitados = []

let strgNumerosDigitados = ''

let numeroMemoria = 0

function limpaTela(){
    telaCalc.innerHTML = ` `
    arrNumerosDigitados.splice(0, arrNumerosDigitados.length)
}

function adicionaMemoria(){
    numeroMemoria = telaCalc.innerHTML
    console.log(numeroMemoria)
}

function removeMemoria(){
    if(numeroMemoria != 0){
        numeroMemoria = 0;
    }
}

function usaMemoria(){
    arrNumerosDigitados.push(numeroMemoria)
    telaCalc.innerHTML += `${numeroMemoria}`  
}

function adicionar(tecla){
    if(arrNumerosDigitados.length >= 9){

    }else{
        arrNumerosDigitados.push(tecla)
        switch(tecla){
            case ' * ':
                telaCalc.innerHTML += `${"X"}`
            break
            case ' / ':
                telaCalc.innerHTML += `${"&#247;"}`
            break
            default:
                telaCalc.innerHTML += `${tecla.trim()}`
            break
        }
    }
}

resultado.addEventListener("click", function(){
    let stgNumeros = arrNumerosDigitados.join('')
    let arrNumeros = stgNumeros.split(' ')

    if(arrNumeros[3] == "%"){
        console.log(arrNumeros)
        if(arrNumeros.length > 4){
            telaCalc.innerHTML = `${"Erro"}`            
        }else{
            let resultadoPorcentagem = (arrNumeros[0]/100) * arrNumeros[2]
            switch (arrNumeros[1]){
                case ("-"):
                    telaCalc.innerHTML = `${arrNumeros[0] - resultadoPorcentagem}`  
                break
                case ("+"):
                    telaCalc.innerHTML = `${arrNumeros[0] + resultadoPorcentagem}`  
                break
                case ("*"):
                    telaCalc.innerHTML = `${arrNumeros[0] * resultadoPorcentagem}`  
                break
                case ("/"):
                    telaCalc.innerHTML = `${arrNumeros[0] / resultadoPorcentagem}`  
                break
            }    
        }
    }if(arrNumeros[0] == "√"){
        if(arrNumeros.length > 2){
            telaCalc.innerHTML = `${"Erro"}`            
        }else{
            let raizQuadrada = Math.sqrt(parseFloat(arrNumeros[1]))
            
            if(Number.isInteger(raizQuadrada) == true){
                telaCalc.innerHTML = `${raizQuadrada}`
            }else{
                telaCalc.innerHTML = `${raizQuadrada.toFixed(5)}`
            }  
        }
    }    
    else{
        strgNumerosDigitados = arrNumerosDigitados.join('')
        telaCalc.innerHTML = `${eval(strgNumerosDigitados.trim())}`
    }
})

function desliga(){
    if(btnDesliga.getAttribute("desligado") == "on"){
        btnDesliga.setAttribute("desligado", "ligado")
        for(i = 0; i <= todosBotoes.length; i++){
            todosBotoes[i].disabled = false
        }
    }else{
        window.location.reload();
    }
}