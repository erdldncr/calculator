class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
    }
    clear(){

    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(opearation){

    }
    compute(){

    }
    updateDisplay(){

    }

}


const numberButtons=document.querySelector('[data-number]')//to select all the elements that have data number
const operationButtons=document.querySelector('[data-operation]')//to select all the elements that opearation button
const equalButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')