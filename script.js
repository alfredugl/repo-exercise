class Calculator {
    constructor(prevOperand, currentOperand) {
        this.prevOperand = prevOperand
        this.currentOperand = currentOperand
    }

    clear () {
     
    }
    delete () {

    }
    appendNumber (number){

    }
    chooseOperation(operation) {

    } 
    compute() {

    }
    updateDispaly () {

    }
}




const  numberButtons = document.querySelectorAll('[data-num]')
const  operationButtons = document.querySelectorAll('[data-op]')
const  equalButton = document.querySelector('[data-equal]')
const  ACButton = document.querySelector('[data-all-clear]')
const  deleteButton = document.querySelector('[data-delete]')
const  prevOperand = document.querySelector('[data-previous-op')
const  currentOperand = document.querySelector('[data-current-op')