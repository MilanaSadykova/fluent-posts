import { ActionTypes } from "@models/ActionTypes";
import { AppAction } from "@models/AppAction";
import { Post } from "@models/Post";
import { PostsApiUtils } from "@utils/PostsApiUtils";
import { Dispatch } from "react";

/**
 * NewPost redux action
 */
export interface NewPostsAction extends AppAction {
    type: ActionTypes.NEW_POSTS;
    newPosts: Post[];
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
            dispatch({
                type: ActionTypes.NEW_POSTS,
                newPosts: payload
            });
        })