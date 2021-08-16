import React, { useEffect, useState } from "react";
import { TextField } from '@fluentui/react/lib/TextField';
import { Dialog, MessageBarType, PrimaryButton } from '@fluentui/react';
import { fetchPosts } from "@redux/actions/GetPostsAction/NewPostsAction";
import { useDispatch, useSelector } from "react-redux";
import { displayNotification } from "@redux/actions/DisplayNotificationAction/DisplayNotificationAction";
import { displayModal } from "@redux/actions/DisplayModalAction/DisplayModalAction";

const styles = { root: { width: 250 } };

export const CreatePostPage = () => {
    const [userName, setUserName] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const openModal = () =>
        dispatch(
            displayModal({
                title: 'Вы уверены?',
                subText: 'Вы точно уверены?'
            })
        );

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
            <PrimaryButton onClick={openModal} type='button'>Сохранить</PrimaryButton>
        </form>
    )
}
