import Container from './PostsList.style'
import { Post } from '@/core/interfaces/Post'
import { useSelector } from 'react-redux'
import { AppState } from '@/core/interfaces/Redux'

import useOnInit from '@/core/hooks/useOnInit'
import { useDispatch } from 'react-redux'
import { getPosts } from '@/core/store/reducers/posts-reducer'
import PostCard from '../PostCard/PostCard.component'

type PostsListProps = {}

function PostsList(props: PostsListProps): JSX.Element {
  const dispatch = useDispatch()
  const { posts } = useSelector((state: AppState) => state.posts)

  useOnInit(() => {
    dispatch(getPosts())
  })

  return (
    <Container className='mt-4'>
      <div className='container'>
        <div className='row'>
          {posts.map((p: Post) => (
            <PostCard key={p.id} data={p} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default PostsList
