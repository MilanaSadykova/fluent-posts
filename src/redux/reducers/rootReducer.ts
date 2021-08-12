import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { AppState } from "@models/AppState";
import { NewPostsAction } from "@redux/actions/GetPostsAction/NewPostsAction";
import { Reducer } from "redux";

export const rootReducer: Reducer<AppState, AppAction> = (state: AppState | undefined, action: AppAction): AppState => {
    switch (action.type) {
        case ActionTypes.NEW_POSTS:
            return {
                ...state,
                posts: (action as NewPostsAction).newPosts
            };
        default:
            return state || {};
    }
}