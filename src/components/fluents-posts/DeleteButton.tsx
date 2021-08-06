import React from "react";
import { DefaultButton } from '@fluentui/react';
import { updateButtonClickState } from '../../reducers/buttonReducer';
import { useDispatch } from "react-redux";

export const DeleteButton = () => {
    
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(updateButtonClickState(true))
    };

    return (
        <div>
            <DefaultButton onClick={openModal} text='Удалить выбранные посты' />
        </div >
    )
}