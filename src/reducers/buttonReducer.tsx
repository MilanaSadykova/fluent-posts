import { ActionCreator, AnyAction, Reducer } from "redux";

export type ButtonState = {
    buttonClickState: boolean
};
const initialState: ButtonState = {
    buttonClickState: false
};

const BUTTON_CLICK = 'BUTTON_CLICK';

export const updateButtonClickState: ActionCreator<AnyAction> = (clickState) => ({
    type: BUTTON_CLICK,
    clickState
});

const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const closeDialog: ActionCreator<AnyAction> = (closeDialog) => ({
    type: CLOSE_DIALOG,
    closeDialog
})

export const RootReducer: Reducer<ButtonState> = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_CLICK:
            return {
                ...state,
                buttonClickState: action.clickState
            };
            case CLOSE_DIALOG:
            return {
                ...state,
                buttonClickState: action.closeDialog
            }
        default:
            return state
    }
};