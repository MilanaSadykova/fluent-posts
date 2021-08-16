import { MessageBarType } from "@fluentui/react";

/**
 * Интерфейс, содержащий необязательные поля для наполнения содержания нотификации
 */
export interface NotificationConfig {
    /**
     * Тип внешнего вида нотификации
     */
    type?: MessageBarType
    /**
     * Содержание нотификации
     */
    message?: string
    /**
     * Количество времени отображения нотификации в миллисекундах
     */
    lifetime?: number | null // ms; if null then notification won't close
}