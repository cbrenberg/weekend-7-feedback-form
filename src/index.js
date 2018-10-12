import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

//reducer functions below
const feedbackItem = (state={}, action) => {
  return state;
}


const allReducers = combineReducers({
  feedbackItem,
})

const store = createStore(
  allReducers,
  applyMiddleware(logger),
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
