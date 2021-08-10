import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveNotification } from './SaveNotification';
import { State, updateSaveButtonState } from "../store/reducers/Reducer";
import './NotificationManager.styles';


export const NotificationManager = () => {

    const dispatch = useDispatch();

    const isSaved = useSelector<State, boolean>(state => state.SaveButtonState);

    useEffect(() => {
        const closeNotification = () => dispatch(updateSaveButtonState(false));
        setTimeout(closeNotification, 2000)
    }, [<SaveNotification />]);

    console.log(isSaved);

    if (isSaved === true) {
        return (
            <SaveNotification />
        )
    } else {
        return null
    }

}
