import { AppAction } from "@models/AppAction";
import { AppState } from "@models/AppState";
import { Reducer } from "redux";

export const rootReducer: Reducer<AppState, AppAction> = (state: AppState | undefined, action: AppAction): AppState => {
    switch (action.type) {
        default:
            return state || {};
    }
}