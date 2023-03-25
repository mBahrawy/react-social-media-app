export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export interface PostsSliceState {
    posts: Post[],
    activePost: Post | null,
    isLoading: boolean
}
