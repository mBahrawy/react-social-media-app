export interface Post {
    id? : number;
    text: string;
}

export interface PostsSliceState {
    posts: Post[],
}
