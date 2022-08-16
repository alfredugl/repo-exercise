class Calculator {
    constructor(prevOperand, currentOperand) {
        this.prevOperand = prevOperand
        this.currentOperand = currentOperand
        this.clear
    }

    clear () {
     this.currentOperand = ''   
     this.prevOperand = ''
     this.operation = undefined
    }
    delete () {

    }
    appendNumber (number){
        this.currentOperand = number

    }
    chooseOperation(operation) {

    } 
    compute() {

    }
    updateDispaly () {
     this.currentOperand.innerText = this.currentOperand
    }
}




const  numberButtons = document.querySelectorAll('[data-num]')
const  operationButtons = document.querySelectorAll('[data-op]')
const  equalButton = document.querySelector('[data-equal]')
const  ACButton = document.querySelector('[data-all-clear]')
const  deleteButton = document.querySelector('[data-delete]')
const  prevOperand = document.querySelector('[data-previous-op')
const  currentOperand = document.querySelector('[data-current-op')

const calculator = new Calculator(prevOperand,currentOperand)

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDispaly()
    })
})