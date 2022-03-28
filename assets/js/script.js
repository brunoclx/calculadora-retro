const telaCalc = document.querySelector('.display-calc p')
const resultado =  document.querySelector('#resultado')


let arrNumerosDigitados = []

let strgNumerosDigitados = ''

let arrNumerosOperacoes = []


function adicionar(tecla){
    arrNumerosDigitados.push(tecla)

    switch(tecla){
        case ' * ':
            telaCalc.innerHTML += `${"X"}`
        break
        case ' / ':
            telaCalc.innerHTML += `${"&#247;"}`
        break
        case ' + ':
            telaCalc.innerHTML += `${"+"}`
        break
        case ' - ':
            telaCalc.innerHTML += `${"-"}`
        break
        default:
            telaCalc.innerHTML += `${tecla.trim()}`
        break
    }
   
}

resultado.addEventListener("click", function(){
    strgNumerosDigitados = arrNumerosDigitados.join('')
    console.log(strgNumerosDigitados)
    arrNumerosOperacoes = strgNumerosDigitados.split(' ')
    console.log(arrNumerosOperacoes)

    if(arrNumerosOperacoes.length == 3){
        let numero1 = Number(arrNumerosOperacoes[0])
        let numero2 = Number(arrNumerosOperacoes[2])
        let operacao1 = arrNumerosOperacoes[1]

            switch (operacao1){
                case "+":
                    telaCalc.innerHTML = `${numero1 + numero2}`
                break
                case "-":
                    telaCalc.innerHTML = `${numero1 - numero2}`
                break
                case "*":
                    telaCalc.innerHTML = `${numero1 * numero2}`
                break
                case "/":
                    telaCalc.innerHTML = `${numero1 / numero2}`
                break
            }
    }

    if(arrNumerosOperacoes.length == 5){
        let numero1 = Number(arrNumerosOperacoes[0])
        let numero2 = Number(arrNumerosOperacoes[2])
        let numero3 = Number(arrNumerosOperacoes[4])
        let operacao1 = arrNumerosOperacoes[1]
        let operacao2 = arrNumerosOperacoes[3]


        if(operacao1 == "+" && operacao2 == "+"){
                telaCalc.innerHTML = `${numero1 + numero2 + numero3}`   
            }

            if(operacao1 == "-" && operacao2 == "-"){
                telaCalc.innerHTML = `${numero1 - numero2 - numero3}`   
            }

            if(operacao1 == "*" && operacao2 == "*"){
                telaCalc.innerHTML = `${numero1 * numero2 * numero3}`   
            }

            if(operacao1 == "/" && operacao2 == "/"){
                telaCalc.innerHTML = `${numero1 / numero2 / numero3}`   
            }

            
            
            if(operacao1 == "+" && operacao2 == "-"){
                telaCalc.innerHTML = `${numero1 + numero2 - numero3}`   
            }

            if(operacao1 == "+" && operacao2 == "*"){
                telaCalc.innerHTML = `${numero1 + numero2 * numero3}`   
            }

            if(operacao1 == "+" && operacao2 == "/"){
                telaCalc.innerHTML = `${(numero1 + numero2) / numero3}`   
            }



            if(operacao1 == "-" && operacao2 == "+"){
                telaCalc.innerHTML = `${numero1 - numero2 + numero3}`   
            }

            if(operacao1 == "-" && operacao2 == "x"){
                telaCalc.innerHTML = `${numero1 - numero2 * numero3}`   
            }

            if(operacao1 == "-" && operacao2 == "/"){
                telaCalc.innerHTML = `${numero1 - numero2 / numero3}`   
            }



            if(operacao1 == "*" && operacao2 == "+"){
                telaCalc.innerHTML = `${numero1 * numero2 + numero3}`   
            }

            if(operacao1 == "*" && operacao2 == "-"){
                telaCalc.innerHTML = `${numero1 * numero2 - numero3}`   
            }

            if(operacao1 == "*" && operacao2 == "/"){
                telaCalc.innerHTML = `${numero1 * numero2 / numero3}`   
            }

            
            if(operacao1 == "/" && operacao2 == "+"){
                telaCalc.innerHTML = `${numero1 / numero2 + numero3}`   
            }

            if(operacao1 == "/" && operacao2 == "-"){
                telaCalc.innerHTML = `${numero1 / numero2 - numero3}`   
            }

            if(operacao1 == "/" && operacao2 == "*"){
                telaCalc.innerHTML = `${numero1 / numero2 * numero3}`   
            }
    }



})







