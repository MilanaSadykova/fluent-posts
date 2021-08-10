import React from "react";
import { DefaultButton } from '@fluentui/react';
import { updateDeleteButtonState } from '../../store/reducers/Reducer';
import { useDispatch } from "react-redux";

export const DeleteButton = () => {
    
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(updateDeleteButtonState(true))
    };

    return (
        <div>
            <DefaultButton onClick={openModal} text='Удалить выбранные посты' />
        </div >
    )
}
