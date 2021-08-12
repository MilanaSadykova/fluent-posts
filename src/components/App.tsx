import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CreatePostPage } from "@components/pages/CreatePostPage/CreatePostPage";

export const App = () => 
    <BrowserRouter>
        <Route exact path='create'>
            <CreatePostPage />
        </Route>
    </BrowserRouter>
