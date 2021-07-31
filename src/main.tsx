import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Header } from "./components/header/Header";
import { FluentPosts } from "./components/fluents-posts/FluentPosts";
import { CreatePost } from "./components/create-post/CreatePost";
import './main.styles.scss';



ReactDOM.render(
    <div className='container'>
        <BrowserRouter>
            <Header />
            <Route path='/fluent-posts'>
                <FluentPosts />
            </Route>
            <Route path='/create-post'>
                <CreatePost />
            </Route>
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);