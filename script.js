function calculate(){
    var height = document.querySelector('input#height')
    var weight = document.querySelector('input#weight')
    var ans = document.querySelector('div#ans')
    var imc = Number.parseFloat((Number(weight.value)/Number(height.value)**2).toFixed(1))
    if(imc <= 16.9){
        ans.innerHTML = (`Seu IMC é ${imc}, você está muito abaixo do peso`)
    }else if (imc >= 17 && imc <=18.4){
        ans.innerHTML = (`Seu IMC é ${imc}, você está abaixo do peso`)
    }else if(imc >= 18.5 && imc<= 24.9){
        ans.innerHTML = (`Seu IMC é ${imc}, você está no peso normal`)
    }else if(imc >= 25 && imc <= 29.9){
        ans.innerHTML = (`Seu IMC é ${imc}, você está acima do peso`)
    }else if(imc >= 30 && imc <= 34.9){
        ans.innerHTML = (`Seu IMC é ${imc}, você está com obesidade grau I`)
    }else if(imc >= 35 && imc <= 40){
        ans.innerHTML = (`Seu IMC é ${imc}, você está com obesidade grau II`)
    }else{
        ans.innerHTML = (`Seu IMC é ${imc}, você está com obesidade grau III`)

}

}
