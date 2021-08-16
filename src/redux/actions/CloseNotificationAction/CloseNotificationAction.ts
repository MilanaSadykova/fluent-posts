import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";

/**
 * CloseNotification redux action
 */
export interface CloseNotificationAction extends AppAction {
    type: ActionTypes.CLOSE_NOTIFICATION;
    notificationId: number;
};

/**
 * Action creator for redux "Close Notification" action.
 * @param {number} notificationId - id нотификации
 */
export const closeNotification = (notificationId: number) => ({
    type: ActionTypes.CLOSE_NOTIFICATION,
    notificationId
});