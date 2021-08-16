import { AppState } from "@models/AppState";
import React from "react";
import { useSelector } from "react-redux";
import { Notification, NotificationProps } from "../shared/Notification/Notification";

/**
 * Логическая компонента, достает из состояния приложения массив notifications с объектами newNotification, содержащими поля
 * для наполнения содержания нотификаций и записывает значение поля в свойства, которые принимает компонента Notification.  
 */
export const NotitficationsBar = () => {
    const notifications = useSelector((state: AppState) => state.notifications);

    const prepareNotification = (notificationConfig: NotificationProps) =>
        <Notification
            {...notificationConfig}
        />;

    return (<section>
        {notifications.map(prepareNotification)}
    </section>);
};
