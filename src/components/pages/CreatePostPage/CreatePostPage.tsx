import React, { useEffect, useState } from "react";
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react';
import { fetchPosts } from "@redux/actions/GetPostsAction/NewPostsAction";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@models/AppState";

const styles = { root: { width: 250 } };

export const CreatePostPage = () => {
    const [userName, setUserName] = useState<string | undefined>('');
    const [title, setTitle] = useState<string | undefined>('');
    const [body, setBody] = useState<string | undefined>('');
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => state.posts);

    console.log(posts);
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

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
            <PrimaryButton type='button'>Сохранить</PrimaryButton>
        </form>
    )
}
