import React from "react";
import ReactDOM from "react-dom";
import { CreatePost } from "./components/create-post/CreatePost";
import './main.styles.scss';



ReactDOM.render(
    <div className='container'>
        <CreatePost />
    </div>,
    document.getElementById("root")
);