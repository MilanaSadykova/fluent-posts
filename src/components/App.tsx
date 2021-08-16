import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CreatePostPage } from "@components/pages/CreatePostPage/CreatePostPage";
import { NotitficationsBar } from "@components/NotificationsBar/NotitficationsBar";
import { ModalsBar } from "@components/ModalsBar/ModalsBar";

export const App = () =>
    <BrowserRouter>
        <Route exact path='/create'>
            <CreatePostPage />
        </Route>
        <NotitficationsBar />
        <ModalsBar />
    </BrowserRouter>;
