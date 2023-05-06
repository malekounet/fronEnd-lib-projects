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

    render(){

        return (
            <div id="container">
            <div id="display"></div>
            <div id="button">
              <div className="butt" id="clear">AC</div>
              <div className="butt" id="divide">/</div>
              <div className="butt" id="multiply">X</div>
              <div className="butt" id="seven">7</div>
              <div className="butt" id="eight">8</div>
              <div className="butt" id="nine">9</div>
              <div className="butt" id="subtract">-</div>
              <div className="butt" id="four">4</div>
              <div className="butt" id="five">5</div>
              <div className="butt" id="six">6</div>
              <div className="butt" id="add">+</div>
              <div className="butt" id="one">1</div>
              <div className="butt" id="two">2</div>
              <div className="butt" id="three">3</div>
              <div className="butt" id="equal">=</div>
              <div className="butt" id="zero">0</div>
              <div className="butt" id="decimal">.</div>
            </div>
          </div>
        );
    }
}
export default Calculator