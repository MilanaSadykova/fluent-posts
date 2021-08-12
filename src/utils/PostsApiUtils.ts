import { ApiAddress } from "@models/ApiAddress";
import { Post } from "@models/Post";
import { ApiUtils } from "@utils/ApiUtils";

export class PostsApiUtils {
    static getPosts = () => ApiUtils.get<Post[]>(ApiAddress.POSTS);
}