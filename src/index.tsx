import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { App } from "./components/App";
import { rootReducer } from "@redux/reducers/rootReducer";
import { AppState } from "@models/AppState";
import { AppAction } from "@models/AppAction";
import './index.styles.scss';

const store: Store<AppState, AppAction> = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
