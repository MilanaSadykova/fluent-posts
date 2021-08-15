import { Post } from "@models/Post";
import { NotificationProps } from "@components/shared/Notification/Notification";

export interface AppState {
    posts: Post[],
    notifications: NotificationProps[],
}