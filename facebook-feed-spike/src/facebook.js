import React, { Component } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';



class TextPage extends Component {

    render() {
        return (
         <h1>
                <div className="App">
                    <>
                    <div class="fb-page" data-href="https://www.facebook.com/KyleGreeneEV/" data-tabs="timeline" data-width=""
                        data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                        data-show-facepile="true">
                        </div>
                        <blockquote cite="https://www.facebook.com/KyleGreeneEV/" class="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/KyleGreeneEV/">Kyle Greene: Engel &amp; Völkers</a></blockquote>
                           </> 
                </div>
</h1>
   
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
                    reduxState
                });

export default connect(mapReduxStateToProps)(TextPage);
