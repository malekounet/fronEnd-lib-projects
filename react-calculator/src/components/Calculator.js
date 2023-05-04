import React, { Component} from "react"

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
            <div className="container">
                <div></div>
            </div>
        );
    }
}