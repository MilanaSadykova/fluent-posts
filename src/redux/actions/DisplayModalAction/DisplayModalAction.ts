import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { ModalConfig } from "@models/ModalConfig";

/**
 * DisplayModal redux action
 */
export interface DisplayModalAction extends AppAction {
    type: ActionTypes.DISPLAY_MODAL
    newModal: ModalConfig
};

/**
 * Action creator for redux "Display Modal" action.
 * @param {number} newModal - новое модальное окно
 */
export const displayModal = (newModal: ModalConfig) => ({
    type: ActionTypes.DISPLAY_MODAL,
    newModal
});