import { Post } from "@models/Post";
import { NotificationProps } from "@components/shared/Notification/Notification";
import { ModalProps } from "@components/shared/Modal/Modal";

/**
 * Интерфейс, определяющий поля и их типы в объекте состояния приложения
 */
export interface AppState {
    /**
     * Массив постов newPosts возвращенных из GET https://jsonplaceholder.typicode.com/posts/:id 
     */
    posts: Post[],
    /**
     * Массив нотификаций newNotification
     */
    notifications: NotificationProps[],
    /**
     * Массив модальных окон newModal
     */
    modals: ModalProps[],
}