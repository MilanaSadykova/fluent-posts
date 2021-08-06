import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from "./components/header/Header";
import { FluentPosts } from "./components/fluents-posts/FluentPosts";
import { CreatePostPage } from "./components/create-post/CreatePostPage";
import './main.styles.scss';

import { createStore, applyMiddleware, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer } from "./reducers/buttonReducer";
import thunk, { ThunkAction } from "redux-thunk";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Route path='/fluent-posts'>
                <FluentPosts />
            </Route>
            <Route path='/create-post'>
                <CreatePostPage />
            </Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

