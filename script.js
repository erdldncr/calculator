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
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        ////eger noktayi 1 den fazla basarsan function duruyor
        if(number==='.' &&this.currentOperand.includes('.')) return
        //ekledgn numarayi string yapip texte eklyr
        this.currentOperand=this.currentOperand.toString()+number.toString()
    }
    chooseOperation(opearation){
        if(this.currentOperand==='') return
        if(this.previousOperand !=''){
            this.compute()
        }
        this.opearation=opearation
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }
    compute(){
    let computation
    const prev=parseFloat(this.previousOperand)
    let current=parseFloat(this.currentOperand)
    if(isNaN(prev)|| isNaN(current)) return 
    switch(this.opearation){
        case '+':
            computation=prev+current
            break;
        case '-':
            computation=prev-current
            break;
        case '/':
            computation=prev/current
            break;
        case '*':
            computation=prev*current
            break;     
        default:
            return   
    }
    this.currentOperand=computation
    this.opearation=undefined
    this.previousOperand=' '
    }

    getDisplayNumber(number){
        const stringNumber= number.toString()
        const integerDigits=parseFloat(stringNumber.split('.')[0])
        const decimalDigits=stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN (integerDigits)){
        integerDisplay=''
        }else{
            integerDisplay=integerDigits.toLocaleString('en',{maximumFractionDigits:0})
        }if(decimalDigits!=null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }
    updateDisplay(){
    //ekrani update ediyor
    this.currentOperandTextElement.innerHTML=this.getDisplayNumber(this.currentOperand)
    if(this.opearation!=null){
        this.previousOperandTextElement.innerHTML=`${this.getDisplayNumber(this.previousOperand)} ${this.opearation}`
    }else{
        this.previousOperandTextElement.innerHTML=''
    }

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
equalButton.addEventListener('click',function(){
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click',function(){
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',function(){
    calculator.delete()
    calculator.updateDisplay()
})