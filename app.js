const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const output = document.querySelector(".output");

function digitInput(){

    let squareofInput = (Math.pow(input.value , 2))
    console.log(squareofInput)

    if(input.value.lenght = 1){
        let lastDigit = Number(squareofInput % 10)
        console.log(lastDigit)
        return lastDigit

    } else {
        if(input.value.lenght = 2){
            let lastDigit = Number(squareofInput % 100)
            console.log(lastDigit)
            return lastDigit
    }

    
}
}

function check (){
    
    let lastDigitCheck = digitInput()
    if( lastDigitCheck === Number(input.value)){
        `this is automorphic number`
    } else {
        output.innerText = `this is not  an automorphic number`
    }


}

button.addEventListener('click', check)