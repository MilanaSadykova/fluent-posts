import React from "react";
import ReactDOM from "react-dom";
import { FluentPosts } from "./components/fluents-posts/FluentPosts";
import './main.styles.scss';



ReactDOM.render(
    <div className='container'>
        <FluentPosts />
    </div>,
    document.getElementById("root")
);