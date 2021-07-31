import React from "react";
import { Link } from "react-router-dom";
import './Header.styles';
export const Header = () => {

    return (
        <nav>
            <li className='main'><Link to='/fluent-posts'>FLUENT-POSTS</Link></li>
            <li><Link to='/create-post' >СОЗДАТЬ ПОСТ</Link></li>
            <li><a href='https://github.com/MilanaSadykova' >GITHUB</a></li>
        </nav>
    )
}