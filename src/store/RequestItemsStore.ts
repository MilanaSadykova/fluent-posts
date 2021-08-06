import React from "react";
import { Reducer } from "redux";
import { useDispatch } from 'react-redux';

export const FluentPostContainer = () => {

    const dispatch = useDispatch();

    interface DetailsListItem {
        key: number;
        name: string;
        id: number;
        title: string;
        body: string;
    };

    const responseItems: DetailsListItem[] = [];

    const url = 'https://jsonplaceholder.typicode.com/posts';
    dispatch({ type: 'REQUEST' });
    fetch(url)
        .then(responce => responce.json())
        .then(apiInfo => {
            for (let i = 0; i < 100; i++) {
                responseItems.push({
                    key: i,
                    name: apiInfo[i].userId,
                    id: apiInfo[i].id,
                    title: apiInfo[i].title,
                    body: apiInfo[i].body
                });
            }
            dispatch({ type: 'REQUEST_SUCCESS' })
        })
        .catch((error) => {
            dispatch({ type: 'REQUEST_ERROR' })
        });

}
