import React from "react";
import { Dialog, DialogFooter, DialogType, MessageBarType } from '@fluentui/react';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { ModalConfig } from "@models/ModalConfig";
import { useDispatch } from "react-redux";
import { closeModal } from "@redux/actions/CloseModalAction/CloseModalAction";
import { displayNotification } from "@redux/actions/DisplayNotificationAction/DisplayNotificationAction";

/**
 * Интерфейс, расширяющий интерфейс ModalConfig полем id для добавления id каждому созданному объекту newModal. 
 */
export interface ModalProps extends ModalConfig {
    /**
     * id модального окна
     */
    id: number;
}

/**
 * Репрезентативная компонента, отображающая модальное окно с кнопками подтверждения и отмены действия.
 * 
 * @param  {DialogType} type - тип внешнего вида модального окна
 * @param  {number} id - id модального окна
 * @param  {sting} title - заголовок модального окна
 * @param  {sting} subText - содержание модального окна
 * @returns 
 */
export const Modal = ({
    type = DialogType.close,
    id,
    title,
    subText
}: ModalProps) => {
    const dispatch = useDispatch();

    const onCloseModal = () => {
        dispatch(closeModal(id));
    }

    const handleOnClose = () => {
        onCloseModal();
        dispatch(
            displayNotification({
                type: MessageBarType.success,
                message: 'All ok!'
            })
        )
    };

    return (
        <Dialog
            onDismiss={onCloseModal}
            dialogContentProps={{
                type,
                title,
                subText,
            }}
            hidden={false}
        >
            <DialogFooter>
                <PrimaryButton onClick={handleOnClose} text="Ок" />
                <DefaultButton onClick={onCloseModal} text="Отмена" />
            </DialogFooter>
        </Dialog>
    )
}