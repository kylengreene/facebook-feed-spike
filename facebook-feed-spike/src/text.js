import React, { Component } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';



class TextPage extends Component {

    constructor(props) {
        super(props)
        this.state = { text: ''} // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({text: value})  
        console.log(this.state.text);
        
    }

    handleClick = (input) =>{
        console.log(this.state);
        
      this.props.dispatch({
          type: 'SET_TEXT',
          payload: this.state
      })
       
    }

    render() {
        return (
            <>
            <ReactQuill value={this.state.text}
                onChange={this.handleChange} />
                
                <button onClick={()=> this.handleClick(this.state.text)}>Submit</button>

            
                </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(TextPage);
