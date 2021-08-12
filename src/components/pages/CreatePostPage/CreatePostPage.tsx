import React, { useState } from "react";
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react';
import { updateSaveButtonState } from '../../store/reducers/RootReducer';
import { useDispatch } from "react-redux";

export const CreatePostPage = () => {
    const [userName, setUserName] = useState<string | undefined>('');
    const [title, setTitle] = useState<string | undefined>('');
    const [body, setBody] = useState<string | undefined>('');

    const createApiPayload = () => ({
        postUserName: userName,
        postTitle: title,
        postBody: body
    });

    const createPostRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(createApiPayload())
        })
            .then(response => response.json())
            .then(info => console.log(info))
    };

    const removeInput = () => {
        setUserName('');
        setTitle('');
        setBody('');
    }

    const dispatch = useDispatch();

    const handleOnSaveClick = () => {
        createApiPayload();
        createPostRequest();
        removeInput();
        dispatch(updateSaveButtonState(true));
    }

    const styles = { root: { width: 250 } }

    return (
        <form className='create-post'>
            <div>
                <TextField
                    styles={styles}
                    label={'Имя пользователя:'}
                    value={userName}
                    onChange={(e, newValue) => setUserName(newValue)}
                />
                <TextField
                    styles={styles}
                    label={'Заголовок поста:'}
                    value={title} onChange={(e, newValue) => setTitle(newValue)}
                />
                <TextField
                    styles={styles}
                    label={'Содержание поста:'}
                    value={body}
                    onChange={(e, newValue) => setBody(newValue)}
                />
            </div>
            <PrimaryButton type='button' onClick={handleOnSaveClick} >Сохранить</PrimaryButton>
        </form>
    )
}
