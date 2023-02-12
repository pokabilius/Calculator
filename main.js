// Variables-------------------------------
const buttons = document.querySelectorAll(".numbers")
const operationBtns = document.querySelectorAll(".symbols")
const screen = document.querySelector(".screen")
let number = ""
let symbol = ""
let storedSymbol = []
let storedNumber = []
let firstNumber = 0
let secondNumber = 0
let result = 0
  
// Grab number from keys

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
       number = parseInt(e.target.textContent)
       storedNumber.push(number)
       console.log(storedNumber)
       
    })
})

// Grab symbols from keys
     
operationBtns.forEach((button) => {

    button.addEventListener('click', (e) => {
        symbol = e.target.textContent
        storedSymbol.push(symbol) 
       console.log(storedSymbol)
        pressOperator()
    })
    
})

// Pseudocode-----------------------------
// Check which operation is pressed and change the array to store second number
// when second operator or enter is pressed do the math betwwen the first two arrays
// We need an array to store everything at all times and when two symbols are found break the arrays into two and convert to numbers and do the operation
// we need a deleter to delete the array when we reach 2nd operator

function pressOperator() {
    
    if (storedNumber.length === 0 && storedSymbol.length === 1) {
        console.log("empty number return")
        storedSymbol.length = 0
        return
    }
    if (storedSymbol.length  === 1) {
        //take the number in 
        firstNumber = storedNumber.join("")
        // show the number in the screen and show the operator
        screen.textContent =  `${firstNumber} ${storedSymbol[0]}`
        storedNumber.length = 0
        console.log(firstNumber)
        

    }else if (storedSymbol.length === 2){
        if (storedNumber.length === 0 ){
            storedSymbol.pop()
            return
        }
        secondNumber = storedNumber.join("")
        console.log(secondNumber)

        // show the resutl 
        if (storedSymbol[0] = "+"){
            result = parseFloat(firstNumber)  + parseFloat(secondNumber)
            screen.textContent = ""
            screen.textContent = secondNumber
            screen.textContent = result
            console.log(`result ${result} = ${firstNumber} + ${secondNumber}`)
        }
        storedNumber.length = 0
        
    }else if (storedSymbol.length = 3) {
        if (storedNumber.length === 0 ){
            storedSymbol.pop()
            return
        }
        secondNumber = storedNumber.join("")
        if (storedSymbol[1] = "+"){
            let secondresult = parseFloat(result)  + parseFloat(secondNumber)
            screen.textContent = ""
            screen.textContent = secondresult
            console.log(storedNumber)
            console.log(`ENTER THIRD CASE THE SECOND OPERATOR IS ${storedSymbol[1]} AND THE RESULT IS ${secondresult} = ${result} + ${secondNumber}`)
        }
        storedSymbol.length = 0
        storedNumber.length = 0
    }

}    

