import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { AppState } from "@models/AppState";
import { NewPostsAction } from "@redux/actions/GetPostsAction/NewPostsAction";
import { DisplayNotificationAction } from "@redux/actions/DisplayNotificationAction/DisplayNotificationAction";
import { Reducer } from "redux";
import { CloseNotificationAction } from "@redux/actions/CloseNotificationAction/CloseNotificationAction";
import { IdGenerator } from "@utils/IdGenerator";
import { CloseModalAction } from "@redux/actions/CloseModalAction/CloseModalAction";
import { DisplayModalAction } from "@redux/actions/DisplayModalAction/DisplayModalAction";

const initState: AppState = {
    posts: [],
    notifications: [],
    modals: [],
};

export const rootReducer: Reducer<AppState, AppAction> = (
    state: AppState = initState,
    action: AppAction
): AppState => {
    switch (action.type) {
        case ActionTypes.NEW_POSTS:
            return {
                ...state,
                posts: (action as NewPostsAction).newPosts
            };
        case ActionTypes.DISPLAY_NOTIFICATION: {
            const newNotification = (action as DisplayNotificationAction).newNotification;
            return {
                ...state,
                notifications: state.notifications.concat({
                    ...newNotification,
                    id: IdGenerator.getId(),
                }),
            };
        }
        case ActionTypes.CLOSE_NOTIFICATION: {
            const notificationId = (action as CloseNotificationAction).notificationId;
            const notifications = state.notifications;
            const notificationIndex = notifications.findIndex(el => el.id === notificationId);
            if (notificationIndex === -1) {
                return state;
            }
            notifications.splice(notificationIndex, 1);
            return {
                ...state,
                notifications: [...notifications],
            };
        }
        case ActionTypes.DISPLAY_MODAL:
            const newModal = (action as DisplayModalAction).newModal;
            return {
                ...state,
                modals: state.modals.concat({
                    ...newModal,
                    id: IdGenerator.getId(),
                }),
            };
        case ActionTypes.CLOSE_MODAL:
            const modalId = (action as CloseModalAction).modalId;
            const modals = state.modals;
            const modalIndex = modals.findIndex(el => el.id === modalId);
            if (modalIndex === -1) {
                return state;
            }
            modals.splice(modalIndex, 1);
            return {
                ...state,
                modals: [...modals],
            };
        default:
            return state;
    }
}