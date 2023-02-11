// Variables-------------------------------
 const buttons = document.querySelectorAll(".numbers")
 const operationBtns = document.querySelectorAll(".symbols")
 let number = ""
 let symbol = ""
 let storeSymbol = []
 let storedNumber = []
  
// Grab number from keys

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
       number = parseInt(e.target.textContent)
       storedNumber.push(number)
    //    console.log(storedNumber1)
       
    })
})

// Grab symbols from keys
     
operationBtns.forEach((button) => {

    button.addEventListener('click', (e) => {
        symbol = e.target.textContent
        storeSymbol.push(symbol) 
    })
    
})

// Pseudocode-----------------------------
// Check which operation is pressed and change the array to store second number
// when second operator or enter is pressed do the math betwwen the first two arrays
// We need an array to store everything at all times and when two symbols are found break the arrays into two and convert to numbers and do the operation

if (storedNumber.length === 0) {
    return
}
if (storeSymbol.length % 2 === 0) {
    //find index of symbols 
    //separate the numbers before the first and second operator
    //do the operations
}


