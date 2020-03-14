import React, { Component } from 'react';
import './App.css';
import ReactQuill from 'react-quill';



class TextPage extends Component {

    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })  
    }

    handleClick = () =>{
        // let array =[this.state]
    }

    render() {
        return (
            <>
            <ReactQuill value={this.state.text}
                onChange={this.handleChange} />
                
                <button onClick={this.handleClick}>Submit</button>

               <p>
                   {this.handleClick.array.map}
               </p>
                </>
        )
    }
}

export default TextPage;
