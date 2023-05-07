import React, { Component} from "react"
import './calculatorStyle.css'

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            first: null,
            operation: '',
            last: null
        }
    }

    
  numbersHandle(e) {
    if (this.state.operation == "") {
      let num = this.state.first;
      num.push(e.target.value);
      this.setState({
        first: num
      });
      let allOp = this.state.allOperation;
      if (allOp == "") {
        allOp = this.state.first.join("");
      } else {
        allOp += this.state.first.join("");
      }
      document.getElementById("allOp").textContent = allOp;
      document.getElementById("number").textContent = this.state.first.join("");
    } else {
      let num = this.state.last;
      num.push(e.target.value);
      this.setState({
        last: num
      });
      document.getElementById("number").textContent = this.state.last.join("");
    }
  }
  operatorHandle(e) {
    this.setState({
        operation: e.target.value
        
      });
    let op = this.state.allOperation[this.state.allOperation.length - 1];
    alert(po);
  }

  acHandle() {
    this.setState({
      first: [],
      operation: "",
      last: [],
      result: null,
      allOperation: " "
    });
    document.getElementById("allOp").textContent = 0;
    document.getElementById("number").textContent = 0;
  }


    render(){

        return (
            <div id="container">
            <div id="display"></div>
            <div id="button">
              <input
            onClick={this.acHandle}
            type="button"
            value="AC"
            className="butt"
            id="clear"
          />

          <input
            type="button"
            onClick={this.operatorHandle}
            value="/"
            className="butt"
            id="divide"
          />
          <input
            type="button"
            onClick={this.operatorHandle}
            value="X"
            className="butt"
            id="multiply"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="7"
            className="butt"
            id="seven"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="8"
            className="butt"
            id="eight"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="9"
            className="butt"
            id="nine"
          />
          <input
            type="button"
            onClick={this.operatorHandle}
            value="-"
            className="butt"
            id="subtract"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="4"
            className="butt"
            id="four"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="5"
            className="butt"
            id="five"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="6"
            className="butt"
            id="six"
          />
          <input
            type="button"
            onClick={this.operatorHandle}
            value="+"
            className="butt"
            id="add"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="1"
            className="butt"
            id="one"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="2"
            className="butt"
            id="two"
          />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="3"
            className="butt"
            id="three"
          />
          <input type="button" value="=" className="butt" id="equal" />
          <input
            type="button"
            onClick={this.numbersHandle}
            value="0"
            className="butt"
            id="zero"
          />
          <input type="button" value="." className="butt" id="decimal" />
            </div>
          </div>
        );
    }
}
export default Calculator