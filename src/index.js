import "@babel/polyfill";
import "./style.less";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import gameReducers from "./reducers";
import { Provider } from "react-redux";
import UserLogin from "./components/UserLogin";
import HeaderContainer from "./containers/Header";
import App from "./components/App";
import ScoreBoardDialogContainer from "./components/ScoreBoardDialog";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// const store = createStore(gameReducers);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['scoreBoardReducer']
};

const persistedReducer = persistReducer(persistConfig, gameReducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HeaderContainer/>
      <App />
      <UserLogin />
      <ScoreBoardDialogContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
