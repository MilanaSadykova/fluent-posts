import React, { useState, useEffect, useRef } from "react";
import { Input } from '../input/Input';
import './CreatePost.styles';

export const CreatePost = () => {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputTitleValue, setinputTitleValue] = useState('');
    const [inputBodyValue, setBodyInputValue] = useState('');

    const infoFromInput = {
        userName: '',
        postTitle: '',
        postBody: ''
    };

    const createInputInfo = () => {
        infoFromInput.userName = inputNameValue;
        infoFromInput.postTitle = inputTitleValue;
        infoFromInput.postBody = inputBodyValue
        
    };

    const createPostRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(infoFromInput)
        })
            .then(response => response.json())
            .then(info => console.log(info))
    };

    const removeInput = () => {
        setInputNameValue('');
        setinputTitleValue('');
        setBodyInputValue('');
    }

    const handleOnSaveClick = () => {
        createInputInfo();
        createPostRequest();
        removeInput()
    }

    return (
        <form className='create-post'>
            <div>
                <Input labelName={'Имя пользователя:'} value={inputNameValue} onChange={(event) => setInputNameValue(event.target.value)} />
                <Input labelName={'Заголовок поста:'} value={inputTitleValue} onChange={(event) => setinputTitleValue(event.target.value)} />
                <Input labelName={'Содержание поста:'} value={inputBodyValue} onChange={(event) => setBodyInputValue(event.target.value)} />
            </div>
            <button type='button' onClick={handleOnSaveClick} >Сохранить</button>
        </form>
    )
}
