import React from "react";
import { DefaultButton, PrimaryButton, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/reducers/Reducer";

export const ModalDialog = () => {

    const dialogContentProps = {
        type: DialogType.normal,
        title: 'Подтвердите удаление',
        closeButtonAriaLabel: 'Отмена',
        subText: 'Вы уверены, что хотите удалить выбранные посты?',
    };

    let hide = false;
    const dispatch = useDispatch();
    const close = () => {
        dispatch(closeDialog(false))
        hide = true;
    };

    return (
        <Dialog
            hidden={hide}
            onDismiss={close}
            dialogContentProps={dialogContentProps}
        >
            <DialogFooter>
                <PrimaryButton onClick={close} text="Удалить" />
                <DefaultButton onClick={close} text="Отмена" />
            </DialogFooter>
        </Dialog>
    )
}