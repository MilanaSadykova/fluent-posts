import { ActionCreator, AnyAction, Reducer } from "redux";

enum ActionType {
    BUTTON_CLICK = 'BUTTON_CLICK',
    CLOSE_DIALOG = 'CLOSE_DIALOG',
    SAVE = 'SAVE'
};

export type State = {
    DeleteButtonState: boolean,
    SaveButtonState: boolean
};

const initialState: State = {
    DeleteButtonState: false,
    SaveButtonState: false,
};

export const updateDeleteButtonState: ActionCreator<AnyAction> = (deletePost) => ({
    type: ActionType.BUTTON_CLICK,
    deletePost
});

export const closeDialog: ActionCreator<AnyAction> = (closeDialog) => ({
    type: ActionType.CLOSE_DIALOG,
    closeDialog
})

export const updateSaveButtonState: ActionCreator<AnyAction> = (createPost) => ({
    type: ActionType.SAVE,
    createPost
});

export const RootReducer: Reducer<State> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BUTTON_CLICK:
            return {
                ...state,
                DeleteButtonState: action.deletePost
            };
        case ActionType.CLOSE_DIALOG:
            return {
                ...state,
                DeleteButtonState: action.closeDialog
            };
        case ActionType.SAVE:
            return {
                ...state,
                SaveButtonState: action.createPost
            }
        default:
            return state
    }
};