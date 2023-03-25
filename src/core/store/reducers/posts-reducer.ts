import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, PostsSliceState } from '@/core/interfaces/Post'
import HttpService from '@/core/services/http-service'
import { FetchError } from '@/core/interfaces/Redux'

const initialState: PostsSliceState = {
  posts: [],
  activePost: null,
  isLoading: false
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

export const postSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    setActivePost: (state: PostsSliceState, action: PayloadAction<Post | null>) => {
      return {
        ...state,
        activePost: action.payload
      }
    }
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
  },
})
export const { setActivePost } = postSlice.actions;
export default postSlice.reducer
