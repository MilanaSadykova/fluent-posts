import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { Post } from "@models/Post";
import { PostsApiUtils } from "@utils/PostsApiUtils";
import { Dispatch } from "react";
import { ActionCreator } from "redux";

class NewPostsAction implements AppAction {
    type: ActionTypes.NEW_POSTS;
    newPosts: Post[];
    constructor(newPosts: Post[]) {
        this.type = ActionTypes.NEW_POSTS;
        this.newPosts = newPosts;
    }
}

/**
 * Action creator ...
 */
export const fetchPosts = () => (dispatch: Dispatch<NewPostsAction>) =>
    PostsApiUtils.getPosts()
        .then(response => {
            const { payload, status } = response;
            if (status !== 200 && status !== 204) {
                // something bad
                // return;
            }
            dispatch(new NewPostsAction(payload));
        })