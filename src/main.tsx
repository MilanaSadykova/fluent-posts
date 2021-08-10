import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from "./pages/header/Header";
import { FluentPosts } from "./pages/fluent-posts-page/FluentPosts";
import { CreatePostPage } from "./pages/create-post-page/CreatePostPage";
import { NotificationManager } from './notification-manager/NotificationManager'
import './main.styles.scss';

import { createStore, applyMiddleware, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer } from "./store/reducers/Reducer";
import thunk, { ThunkAction } from "redux-thunk";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <NotificationManager />
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

