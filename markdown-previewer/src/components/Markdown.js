import React, {Component} from 'react'
import  './styleMarkown.css'
import  ReactMarkdown  from 'react-markdown';

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
        const testes = `> Block Quote
# Heading 1
## Heading 2
**bold text**
- list item 1
- list item 2
- list item 3
### Link :
[Visite Google](https://www.google.com)
### Heading 3
this is inline text \`<div></div>\`
## Image :
![Image](https://www.oiseaux-birds.com/piciformes/picides/pic-epeiche/pic-epeiche-male-aa6.jpg)
`;
        let {text} = this.state;

        return (
            <div className="container">
                <div className="editor">
                    <h1 id="title">Editor</h1>
                    <textarea value={text} id="editor" onChange={this.onChangeVal} ></textarea>
                </div>
                <div className="preview">
                    <h1 id="title" style={{borderBottom: "1px solid white"}}>Preview</h1>
                    <ReactMarkdown id="preview">{testes}</ReactMarkdown>
                </div>
               
               
                
            </div>
            
        )
    }
}

export default Markdown