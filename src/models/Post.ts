/**
 * API model for Post instance.
 * Returned from GET https://jsonplaceholder.typicode.com/posts/:id
 */
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}
