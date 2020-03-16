import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('SET_TEXT', setInput)
    yield takeEvery('UPLOAD_PHOTO', instagram);
}

function* setInput(action){
    let sender = [action.payload]
    yield put({ 
        type: 'SET_QUILL', 
        payload: sender 
    })
}

function* instagram(action){
    let draft= [action.payload]
    yield put({
        type: 'SET_PHOTO',
        payload: draft
    })
}

const quillReducer = (state = [], action) =>{
    switch (action.type) {
        case 'SET_QUILL':
            return action.payload;
        default:
            return state;
    }
}

const photoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PHOTO':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        quillReducer,
        photoReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
