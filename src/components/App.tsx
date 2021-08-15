import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CreatePostPage } from "@components/pages/CreatePostPage/CreatePostPage";
import { NotitficationsBar } from "@components/NotificationBar/NotitficationsBar";

export const App = () =>
    <BrowserRouter>
        <Route exact path='/create'>
            <CreatePostPage />
        </Route>
        <NotitficationsBar />
    </BrowserRouter>;
