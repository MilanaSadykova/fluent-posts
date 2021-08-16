import { Modal, ModalProps } from "@components/shared/Modal/Modal";
import { AppState } from "@models/AppState";
import React from "react";
import { useSelector } from "react-redux";

/**
 * Логическая компонента, достает из состояния приложения массив modals с объектами newModal, содержащими поля
 * для наполнения содержания модальноых окон и записывает значение поля в свойства, которые принимает компонента Modal.  
 */
export const ModalsBar = () => {
    const modals = useSelector((state: AppState) => state.modals);

    const prepareModal = (modalProps: ModalProps) =>
        <Modal
            {...modalProps}
        />;

    return (
        <section>
            {modals.map(prepareModal)}
        </section>
    );
};
