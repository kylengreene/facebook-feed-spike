import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';



class TextPage extends Component {

    render() {
        return (
         <h1>
                <div className="App">
                    <>
                        <div className="fb-page" data-href="https://www.facebook.com/campicaghowan" data-tabs="timeline" data-width=""
                        data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                        data-show-facepile="true">
                        </div>
                        <blockquote cite="https://www.facebook.com/campicaghowan" className="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/campicaghowan">YMCA Camp Icaghowan</a></blockquote>
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
