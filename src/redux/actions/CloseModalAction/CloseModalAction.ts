import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";

/**
 * CloseModal redux action
 */
export interface CloseModalAction extends AppAction {
    type: ActionTypes.CLOSE_MODAL
    modalId: number
};

/**
 * Action creator for redux "Close Modal" action.
 * @param {number} modalId - id модального окна
 */
export const closeModal = (modalId: number) => ({
    type: ActionTypes.CLOSE_MODAL,
    modalId
});