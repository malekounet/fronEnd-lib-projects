import React, {Component} from 'react'
import  './styleMarkown.css'
import  ReactMarkdown  from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';



class Markdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onChangeVal = this.onChangeVal.bind(this);
    }
    onChangeVal(e){
        this.setState({
            text: e.target.value
        })
    }
    render(){
        let a = 'let a = 99';
        return (
            <div className="container" style={{backgroundColor: 'grey'}}>
                <textarea id="input" onChange={this.onChangeVal} ></textarea>
                <h1 id="title">Output</h1>
                
               <ReactMarkdown>{this.state.text}</ReactMarkdown> 
               
                
            </div>
            
        )
    }
}

export default Markdown