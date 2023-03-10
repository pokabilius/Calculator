// Variables-------------------------------
const buttons = document.querySelectorAll(".numbers")
const operationBtns = document.querySelectorAll(".symbols")
const screenUp = document.querySelector("#up")
const screenDown = document.querySelector("#down")
const gitIcon = document.getElementById("git")
let number = ""
let lastsymbol = ""
let previousSymbol = 0
let storedSymbol = []
let storedNumber = []
let firstNumber = 0
let secondNumber = 0
let result = 0
let lastResult = 0
let helpNumber = 0
let operationPending = false
let allArray = []

gitIcon.addEventListener('mouseover', () => {
    gitIcon.classList.add("fa-spin")
})

gitIcon.addEventListener('mouseout', () => {
    gitIcon.classList.remove("fa-spin")
})

// Grab number from keys

buttons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
       number = e.target.textContent
       if (storedNumber.length === 0) {
        screenDown.textContent = ""
       }
       if (storedSymbol[storedSymbol.length-1] === "ENTER"){
        lastResult = number
       }
       storedNumber.push(number)
       screenDown.textContent = screenDown.textContent + number
       allArray.push(number)
    })
})

// Grab symbols from keys

operationBtns.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        lastsymbol = e.target.textContent
        storedSymbol.push(lastsymbol) 
        allArray.push(lastsymbol)
        pressOperator()
    })
    
})

function resetArray (name) {
    name.length = 0
}

function deleteScreen () {
    screenUp.textContent = ""
    screenDown.textContent = ""
}

// Operation functions
function add(a,b) {
    return parseFloat(a) + parseFloat(b) 
}

function subtract (a,b){
    return parseFloat(a) - parseFloat(b) 
}

function multiply (a,b){
    return parseFloat(a) * parseFloat(b) 
}

function divide (a,b){
    return parseFloat(a) / parseFloat(b) 
}

function power (a,b){
    return parseFloat(a) ** parseFloat(b)
}

function mainLogic(){
    if (storedNumber.length === 0 && !storedNumber.length <= 1) {
        resetArray(storedSymbol)
        return
    } else {
            secondNumber = storedNumber.join("")
            resetArray(storedNumber)
            if (storedSymbol.length <=1){
                previousSymbol= storedSymbol[storedSymbol.length - 1]
            } else {
                previousSymbol = storedSymbol[storedSymbol.length - 2]
            }
            
            switch (previousSymbol) {
                case "+" :
                    lastResult = add(secondNumber,lastResult)
                    screenDown.textContent = ""
                    screenUp.textContent = lastResult + lastsymbol
                    break
                case "-" :
                    if (storedSymbol.length <= 1) {
                        screenDown.textContent = ""
                        screenUp.textContent = secondNumber + lastsymbol
                        lastResult = secondNumber
                    }else {
                        lastResult = subtract(lastResult,secondNumber)
                        screenDown.textContent = ""
                        screenUp.textContent = lastResult + lastsymbol
                    }
                    break
                case "/" :
                    if (storedSymbol.length <= 1) {
                        screenDown.textContent = ""
                        screenUp.textContent = secondNumber + lastsymbol
                        lastResult = secondNumber
                    }else {
                        lastResult = divide(lastResult,secondNumber)
                        screenDown.textContent = ""
                        screenUp.textContent = lastResult + lastsymbol
                    }
                    break
                case "*" :
                    if (storedSymbol.length <= 1) {
                        screenDown.textContent = ""
                        screenUp.textContent = secondNumber + lastsymbol
                        lastResult = secondNumber
                    }else {
                        lastResult = multiply(lastResult,secondNumber)
                        screenDown.textContent = ""
                        screenUp.textContent = lastResult + lastsymbol
                    }
                    break
                case "^" :
                    if (storedSymbol.length <= 1) {
                        screenDown.textContent = ""
                        screenUp.textContent = secondNumber + lastsymbol
                        lastResult = secondNumber
                    }else {
                        lastResult = power(lastResult,secondNumber)
                        screenDown.textContent = ""
                        screenUp.textContent = lastResult + lastsymbol
                    }
                    break
                case "ENTER" :
                    screenUp.textContent = lastResult + lastsymbol
                    screenDown.textContent = ""
                    lastResult = secondNumber
                    break
            }
    }
}

function pressOperator() {
    
    if (lastsymbol === "AC"){
        resetArray(storedNumber)
        resetArray(storedSymbol)
        deleteScreen()
        lastResult = 0
        return
    }
    
   if (lastsymbol === "ENTER"){
        mainLogic()
        screenUp.textContent = ""
        screenDown.textContent = lastResult
        resetArray(storedNumber)
        return
    }

    if (lastsymbol === "C"){
        if (storedNumber.length === 0){
            resetArray(storedNumber)
            resetArray(storedSymbol)
            deleteScreen()
            lastResult = 0
            return
        }else {
            storedSymbol.pop()
            screenUp.textContent = lastResult + storedSymbol[storedSymbol.length-1]
            screenDown.textContent = ""
            resetArray(storedNumber)
            console.log(storedSymbol)
            console.log("enter C")
            return
        }
    }else if (isNaN(allArray[allArray.length -1]) && isNaN(allArray[allArray.length -2]) ){
        screenUp.textContent = lastResult + lastsymbol
        return
    }
    
    mainLogic()
}    

    
    
    