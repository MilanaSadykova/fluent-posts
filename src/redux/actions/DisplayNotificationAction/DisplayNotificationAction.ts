import { NotificationProps } from "@components/shared/Notification/Notification";
import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { NotificationConfig } from "@models/NotificationsConfig"
import { Dispatch } from "react";

export interface DisplayNotificationAction extends AppAction {
    type: ActionTypes.DISPLAY_NOTIFICATION;
    newNotification: NotificationConfig;
};

export const displayNotification = (newNotification: NotificationConfig) =>
    (dispatch: Dispatch<DisplayNotificationAction>) =>
        dispatch({
            type: ActionTypes.DISPLAY_NOTIFICATION,
            newNotification,
        });