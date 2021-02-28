class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.opearation=undefined
    }
    delete(){

    }
    appendNumber(number){
        ////eger noktayi 1 den fazla basarsan function duruyor
        if(number==='.' &&this.currentOperand.includes('.')) return
        //ekledgn numarayi string yapip texte eklyr
        this.currentOperand=this.currentOperand.toString()+number.toString()
    }
    chooseOperation(opearation){

    }
    compute(){

    }
    updateDisplay(){
        //ekrani update ediyor
        this.currentOperandTextElement.innerHTML=this.currentOperand
    }

}


const numberButtons=document.querySelectorAll('[data-number]')//to select all the elements that have data number
const operationButtons=document.querySelectorAll('[data-operation]')//to select all the elements that opearation button
const equalButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button=>button.addEventListener('click',function(){
    ////numarayi ekliyr ekrana
    calculator.appendNumber(button.innerHTML)
    ///ekrani update ediyr
    calculator.updateDisplay()
}))

operationButtons.forEach(button=>button.addEventListener('click',function(){
    ////numarayi ekliyr ekrana
    calculator.chooseOperation(button.innerHTML)
    ///ekrani update ediyr
    calculator.updateDisplay()
}))