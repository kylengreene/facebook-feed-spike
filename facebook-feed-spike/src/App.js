import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'react-quill/dist/quill.snow.css';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import TextPage from './text';
import ImagePage from './images'
import FacebookPage from './facebook'


function App() {
  
  return (
    <Router>
    
        <Route
          exact
          path="/text"
          component={TextPage}
        />

      <Route
        exact
        path="/image"
        component={ImagePage}
      />

      <Route
        exact
        path="/facebook"
        component={FacebookPage}
      />
    

    </Router>
  );
}

export default App;
