import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import TextPage from './text'


function App() {
  return (
    <Router>
    <div className="App">
      <div class="fb-page" data-href="https://www.facebook.com/KyleGreeneEV/" data-tabs="timeline" data-width=""
        data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
        data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/KyleGreeneEV/" class="fb-xfbml-parse-ignore"><a
          href="https://www.facebook.com/KyleGreeneEV/">Kyle Greene: Engel &amp; Völkers</a></blockquote>
      </div>
        <Route
          exact
          path="/text"
          component={TextPage}
        />
    
    </div>
    </Router>
  );
}

export default App;
