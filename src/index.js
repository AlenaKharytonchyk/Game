import '@babel/polyfill';
import './style.less';
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import gameReducers from './reducers';
import { Provider} from 'react-redux';
import UserLoginContainer from './containers/UserLogin';
import HeaderContainer from './containers/Header';
import App from './components/App';
import ScoreBoardDialogContainer from './components/ScoreBoardDialog';


const store = createStore(gameReducers)

ReactDOM.render(
       <Provider store={store}>
       <HeaderContainer/>
        <App/>
        <UserLoginContainer/>
        <ScoreBoardDialogContainer/>
      </Provider>,
  document.getElementById('app')
);
