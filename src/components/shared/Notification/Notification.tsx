import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NotificationConfig } from "@models/NotificationsConfig";
import { MessageBar, MessageBarType } from "@fluentui/react";
import { closeNotification } from "@redux/actions/CloseNotificationAction/CloseNotificationAction";
import { IdGenerator } from "@utils/IdGenerator";

export interface NotificationProps extends NotificationConfig {
    id: number;
}

export const Notification = ({
    id,
    type = MessageBarType.info,
    message,
    lifetime = 3000,
}: NotificationProps) => {
    const dispatch = useDispatch();
    const closeTimeoutId = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (type === MessageBarType.error
            || type === MessageBarType.blocked
            || type === MessageBarType.severeWarning) {
            lifetime = null;
        }
        if (lifetime === null) {
            return;
        } 
        closeTimeoutId.current = setTimeout(onCloseNotification, lifetime);
    }, []);

    const onCloseNotification = () =>
        dispatch(closeNotification(id));

    return (
        <MessageBar
            messageBarType={type}
            onDismiss={onCloseNotification}
        >
            {message}
        </MessageBar>
    )
}