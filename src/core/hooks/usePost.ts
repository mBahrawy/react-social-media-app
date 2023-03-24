import { Post } from '../interfaces/Post'
import HttpService from '../services/http-service'

function usePost() {
  const httpService = new HttpService()

  const getPosts = async (): Promise<unknown> => {
    const httpService = new HttpService()
    return httpService.getRequest('/posts/')
  }

  const addPost = async (post: Post): Promise<unknown> => {
    return httpService.postRequest(`/posts/`, post)
  }

  return {
    getPosts,
    addPost,
  }
}

export default usePost
