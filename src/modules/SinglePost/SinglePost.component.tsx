import useOnDistroy from '@/core/hooks/useOnDistroy'
import Container from './SinglePost.style'
import useOnInit from '@/core/hooks/useOnInit'
import { Post } from '@/core/interfaces/Post'
import { getPost, setActivePost } from '@/core/store/reducers/posts-reducer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'

const SinglePost = (): JSX.Element => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)

  useOnInit(() => {
    id &&
      dispatch(getPost(id)).then((res) => {
        setPost(res.payload as Post)
      })
  })


  useOnDistroy(() => {
    dispatch(setActivePost(null))
  })


  return (
    <>
      {post && (
        <Container className='mt-4'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='card p-0 my-4 col-md-10 col-12'>
                <div className='card-header'>By user: {post.userId}</div>
                <div className='card-body'>
                  <h5 className='card-title'>{post.title}</h5>
                  <p className='card-text'>{post.body}</p>
                  <img
                    src='https://placehold.co/600x300?text=Placeholder+image'
                    className='img-fluid mb-3 w-100'
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  )
}

export default SinglePost
