import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NotificationConfig } from "@models/NotificationsConfig";
import { MessageBar, MessageBarType } from "@fluentui/react";
import { closeNotification } from "@redux/actions/CloseNotificationAction/CloseNotificationAction";

/**
 * Интерфейс, расширяющий интерфейс NotificationConfig полем id для добавления id каждому созданному объекту newNotification. 
 */
export interface NotificationProps extends NotificationConfig {
    id: number;
}

/**
 * Репрезентативная компонента, отображающая нотификацию.
 * 
 * @param  {number} id - id нотификации
 * @param  {DialogType} type - тип нотификации
 * @param  {sting} message - содержание нотификации
 * @param  {number} lifetime - количество времени отображения нотификации в миллисекундах
 * @returns 
 */
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
        //  TODO - добавить callback, делающий clear setTimeout, когда нотификация была закрыта на крестик
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