import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, PostsSliceState } from '@/core/interfaces/Post'
import HttpService from '@/core/services/http-service'
import { FetchError } from '@/core/interfaces/Redux'
import { Comment } from '@/core/interfaces/Comment'

const initialState: PostsSliceState = {
  posts: [],
  activePost: null,
  activePostComments: null,
  isLoading: false,
}

export const getPosts = createAsyncThunk<Post[], '', { rejectValue: FetchError }>(
  'Post/all',
  async (_, thunkAPI) => {
    try {
      const { getRequest } = new HttpService()
      const res = await getRequest(`/posts/`)
      return res as Post[]
    } catch (error: unknown) {
      console.log(error)
      return thunkAPI.rejectWithValue({
        message: 'Failed to fetch posts.',
      })
    }
  }
)

export const getPost = createAsyncThunk<Post, string, { rejectValue: FetchError }>(
  'Post/single',
  async (id, thunkAPI) => {
    try {
      const { getRequest } = new HttpService()
      const res = await getRequest(`/posts/${id}`)
      return res as Post
    } catch (error: unknown) {
      console.log(error)
      return thunkAPI.rejectWithValue({
        message: `Failed to fetch post with id ${id}.`,
      })
    }
  }
)
export const getPostComments = createAsyncThunk<Comment[], string, { rejectValue: FetchError }>(
  'Post/comments',
  async (id, thunkAPI) => {
    try {
      const { getRequest } = new HttpService()
      const res = await getRequest(`/posts/${id}/comments`)
      return res as Comment[]
    } catch (error: unknown) {
      console.log(error)
      return thunkAPI.rejectWithValue({
        message: `Failed to fetch comments of post with id ${id}.`,
      })
    }
  }
)
export const createPost = createAsyncThunk<Post, unknown, { rejectValue: FetchError }>(
  'Post/create',
  async (data, thunkAPI) => {
    try {
      const { postRequest } = new HttpService()
      const res = await postRequest(`/posts/`, data)
      return res as Post
    } catch (error: unknown) {
      console.log(error)
      return thunkAPI.rejectWithValue({
        message: `Failed to create post.`,
      })
    }
  }
)

export const postSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    setActivePost: (state: PostsSliceState, action: PayloadAction<Post | null>) => {
      return {
        ...state,
        activePost: action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // For all posts
      .addCase(getPosts.fulfilled, (state: PostsSliceState, action: PayloadAction<Post[]>) => {
        return { ...state, posts: action.payload, isLoading: false }
      })
      .addCase(getPosts.pending, (state: PostsSliceState) => {
        return { ...state, isLoading: true }
      })
      .addCase(getPosts.rejected, (state: PostsSliceState) => {
        return { ...state, isLoading: false }
      })

      // For single post
      .addCase(getPost.fulfilled, (state: PostsSliceState, action: PayloadAction<Post>) => {
        return { ...state, activePost: action.payload, isLoading: false }
      })
      .addCase(getPost.pending, (state: PostsSliceState) => {
        return { ...state, isLoading: true }
      })
      .addCase(getPost.rejected, (state: PostsSliceState) => {
        return { ...state, isLoading: false }
      })

      // For single post comments
      .addCase(
        getPostComments.fulfilled,
        (state: PostsSliceState, action: PayloadAction<Comment[]>) => {
          return { ...state, activePostComments: action.payload, isLoading: false }
        }
      )
      .addCase(getPostComments.pending, (state: PostsSliceState) => {
        return { ...state, isLoading: true }
      })
      .addCase(getPostComments.rejected, (state: PostsSliceState) => {
        return { ...state, isLoading: false }
      })

      // For creating a post
      .addCase(createPost.fulfilled, (state: PostsSliceState, action: PayloadAction<Post>) => {
        return { ...state, posts: [action.payload,...state.posts]  ,isLoading: false }
      })
      .addCase(createPost.pending, (state: PostsSliceState) => {
        return { ...state, isLoading: true }
      })
      .addCase(createPost.rejected, (state: PostsSliceState) => {
        return { ...state, isLoading: false }
      })
  },
})
export const { setActivePost } = postSlice.actions
export default postSlice.reducer
