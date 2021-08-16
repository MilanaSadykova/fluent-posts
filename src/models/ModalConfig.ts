import { DialogType } from "@fluentui/react";

/**
 * Интерфейс, содержащий необязательные поля для наполнения содержания модального окна.
 */
export interface ModalConfig {
    /**
     * Тип внешнего вида модального окна: с кнопкой закрытия "x" в правом верхнем углу.
     */
    type?: DialogType
    /**
     * Заголовок модального окна.
     */
    title?: string | JSX.Element
    /**
     * Содержание модального окна.
     */
    subText?: string
}
