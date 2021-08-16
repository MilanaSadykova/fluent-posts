import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { NotificationConfig } from "@models/NotificationsConfig"

/**
 * DisplayNotification redux action
 */
export interface DisplayNotificationAction extends AppAction {
    type: ActionTypes.DISPLAY_NOTIFICATION;
    newNotification: NotificationConfig;
};

/**
 * Action creator for redux "Display Notification" action.
 * @param {number} newNotification - новая нотификация
 */
export const displayNotification = (newNotification: NotificationConfig) => ({
    type: ActionTypes.DISPLAY_NOTIFICATION,
    newNotification,
});