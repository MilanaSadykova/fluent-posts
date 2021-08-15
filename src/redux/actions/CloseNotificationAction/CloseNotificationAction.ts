import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { NotificationConfig } from "@models/NotificationsConfig"
import { Dispatch } from "react";

export interface CloseNotificationAction extends AppAction {
    type: ActionTypes.CLOSE_NOTIFICATION;
    notificationId: number;
};

export const closeNotification = (notificationId: number) =>
    (dispatch: Dispatch<CloseNotificationAction>) =>
        dispatch({
            type: ActionTypes.CLOSE_NOTIFICATION,
            notificationId
        });