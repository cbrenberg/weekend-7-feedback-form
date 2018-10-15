import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import 'typeface-roboto';

//reducer functions below
const feedbackItem = (state={}, action) => {

  switch (action.type) {
    case 'ADD_FEEL':
      return {...state, feeling: action.payload};
    case 'ADD_UNDERSTAND':
      return {...state, understanding: action.payload};
    case 'ADD_SUPPORT':
      return { ...state, support: action.payload };
    case 'ADD_COMMENTS':
      return {...state, comments: action.payload};
    case 'CLEAR_STATE':
      return {};
    default:
      return state;
  }
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
