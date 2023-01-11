import { Component} from "react"

import "./index.css"

class Master extends Component{

    state={resultValue:"",firstOperand:"",secondOperand:"",operator:"",errorMsg:false,displayResult:false}
    zero=()=>{
        return 0
    }

    one=()=>{
        return 1
    }

    two=()=>{
        return 2
    }
    
    three=()=>{
        return 3
    }

    four=()=>{
        return 4
    }
    five=()=>{
        return 5
    }

    six=()=>{
        return 6
    }

    seven=()=>{
        return 7
    }

    eight=()=>{
        return 8
    }

    nine=()=>{
        return 9
    }





    onFirstOperand=(event)=>{
        this.setState({firstOperand:event.target.value})
    }

    onSecondOperand=(event)=>{
        this.setState({secondOperand:event.target.value})
    }

    onOperator=(event)=>{
        this.setState({operator:event.target.value})
    }


    renderFirstOperand = () => {
        const {firstOperand}=this.state
        return (
          <>
            <label className="input-label" htmlFor="firstoperand">
              First Operand
            </label>
            <input
            onChange={this.onFirstOperand}
            value={firstOperand}
              type="text"
              id="firstoperand"
              className="username-input-filed"
              placeholder="Enter First Operand" 
            />
          </>
        )
      }
      getFirstValue=()=>{
        const {firstOperand}=this.state
        switch(firstOperand){
            case "one":
                return this.one()
            case "two":
                return this.two()
            case "three":
                return this.three()
            case "four":
                return this.four()
            case "five":
                return this.five()
            case "six":
                return this.six()
            case "seven":
                return this.seven()
            case "eight":
                return this.eight()
            case "nine":
                return this.nine()
            default:
                return null
        }
      }

      getSecondValue=()=>{
        const {secondOperand}=this.state
        switch(secondOperand){
            case "one":
                return this.one()
            case "two":
                return this.two()
            case "three":
                return this.three()
            case "four":
                return this.four()
            case "five":
                return this.five()
            case "six":
                return this.six()
            case "seven":
                return this.seven()
            case "eight":
                return this.eight()
            case "nine":
                return this.nine()
            default:
                return null
        }
      }

      getResult=()=>{
        const firstValue=this.getFirstValue()
        const secondValue=this.getSecondValue()

        
        const {operator}=this.state
        switch(operator){
            case "plus":
                return firstValue+secondValue
            case "minus":
                return firstValue-secondValue
            case "times":
                return firstValue*secondValue
            case "divided_by":
                return parseInt(firstValue/secondValue)
            default:
                return null
        }
      }


      renderSecondOperand = () => {
        const {secondOperand}=this.state
        return (
          <>
            <label className="input-label" htmlFor="secondoperand">
              Second Operand
            </label>
            <input
            onChange={this.onSecondOperand}
            value={secondOperand}
              type="text"
              id="secondoperand"
              className="username-input-filed"
              placeholder="Enter Second Operand"
              
            />
          </>
        )
      }

      renderOperator = () => {
        const {operator}=this.state
        return (
          <>
            <label className="input-label" htmlFor="operator">
              Operator
            </label>
            <input
            onChange={this.onOperator}
            value={operator}
              type="text"
              id="operator"
              className="username-input-filed"
              placeholder="Enter Operator"
              
            />
          </>
        )
      }


      onSubmitButton=(event)=>{
        event.preventDefault()
        const {firstOperand,secondOperand,operator}=this.state
         if (firstOperand ==="" && secondOperand ==="" && operator===""){
            this.setState({errorMsg:true})
         }

         if (firstOperand===""){
            this.setState({errorMsg:true})
         }
         if (secondOperand===""){
            this.setState({errorMsg:true})
         }
         if (operator===""){
            this.setState({errorMsg:true})
         }

         if (firstOperand !=="" && secondOperand !=="" && operator!==""){
            this.setState({displayResult:true,resultValue:this.getResult()})
            
         }

        this.setState({firstOperand:"",secondOperand:"",operator:""})
        
        

      }

      getForm=()=>{
        const {errorMsg}=this.state
        return(
            <form className="form-order" onSubmit={this.onSubmitButton}>
                {this.renderFirstOperand()}
                {this.renderOperator()}
                {this.renderSecondOperand()}
                <div>
                    <button className="submit-button" type="submit">Submit</button>
                </div>
                {errorMsg?<p className="error-msg">Inputs Are Invalid</p>:null}
            </form>
        )
      }
      onBackButton=()=>{
        this.setState({displayResult:false})
      }
      getOutPut=()=>{
        const {resultValue}=this.state       
        return(
            <div>
                <h1 className="error-msg">The Answer is :<span className="result">{resultValue}</span></h1>
                <button onClick={this.onBackButton} type="button" className="login-button">Back</button>
            </div>
        )     
      }



    render(){
        const {displayResult}=this.state
        return (
            <div className="login-form-container">
            {displayResult&&this.getOutPut()}
            {!displayResult&&this.getForm()}
            </div>
        )
    }
}


export default Master