import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import HttpService from '@/core/services/http-service'
import { Post, PostsSliceState } from '@/core/interfaces/Post'

const initialState: PostsSliceState = {
  posts: [],
}

// export const getPosts: any = createAsyncThunk('Post/all', async (_, { rejectWithValue }) => {
//   try {
//     const { getRequest } = new HttpService()
//     const res = await getRequest(`/posts/`)
//     return res
//   } catch (error: unknown) {
//     return rejectWithValue(error)
//   }
// })

export const postSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    addPostState: (state: PostsSliceState, action: PayloadAction<Post>) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    },
  },
  extraReducers: {
    // [addPost.fulfilled as unknown as string]: (state: PostsSliceState) => {
    //   return { ...state }
    // },
  },
})

export const { addPostState } = postSlice.actions
export default postSlice.reducer
