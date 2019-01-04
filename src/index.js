import '@babel/polyfill';
import './style.less';
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import gameReducers from './reducers';
import { Provider} from 'react-redux';
import Header from './components/Header';
import UserLogin from './components/UserLogin';
import UserLoginContainer from './containers/UserLogin';
import HeaderContainer from './containers/Header';
import App from './components/App';


const store = createStore(gameReducers)

ReactDOM.render(
       <Provider store={store}>
       <HeaderContainer/>
        <App/>
        <UserLoginContainer/>
      </Provider>,
  document.getElementById('app')
);
