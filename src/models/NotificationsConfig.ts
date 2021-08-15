import { MessageBarType } from "@fluentui/react";
import { ReactNode } from "react";

export interface NotificationConfig {
    type?: MessageBarType
    message?: string
    lifetime?: number | null // ms; if null then notification won't close
}