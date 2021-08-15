import React, { useEffect, useState } from "react";
import { TextField } from '@fluentui/react/lib/TextField';
import { MessageBarType, PrimaryButton } from '@fluentui/react';
import { fetchPosts } from "@redux/actions/GetPostsAction/NewPostsAction";
import { useDispatch, useSelector } from "react-redux";
import { displayNotification } from "@redux/actions/DisplayNotificationAction/DisplayNotificationAction";

const styles = { root: { width: 250 } };

export const CreatePostPage = () => {
    const [userName, setUserName] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const displaySuccessNotification = () =>
        dispatch(
            displayNotification({
                type: MessageBarType.success,
                message: 'All ok!'
            })
        )

        const displayErrorNotification = () =>
        dispatch(
            displayNotification({
                type: MessageBarType.error,
                message: 'Something is broken!'
            })
        )

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
            <PrimaryButton type='button' onClick={displaySuccessNotification}>Success</PrimaryButton>
            <PrimaryButton type='button' onClick={displayErrorNotification}>Error</PrimaryButton>
        </form>
    )
}
