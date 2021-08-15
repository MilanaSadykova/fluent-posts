import { AppState } from "@models/AppState";
import React from "react";
import { useSelector } from "react-redux";
import { Notification, NotificationProps } from "../shared/Notification/Notification";

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
