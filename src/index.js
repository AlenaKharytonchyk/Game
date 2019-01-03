import '@babel/polyfill';
import './style.less';
import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App';
import { createStore } from 'redux';
import gameReducers from './reducers';
import { Provider} from 'react-redux';

const store = createStore(gameReducers)

ReactDOM.render(
       <Provider store={store}> 
        <App />
      </Provider>,
  document.getElementById('app')
);