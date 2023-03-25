import Container from './Breadcrumb.style'
import { AppState } from '@/core/interfaces/Redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

type BreadcrumbProps = {}

function Breadcrumb(props: BreadcrumbProps): JSX.Element {
  const { posts, activePost } = useSelector((state: AppState) => state.posts)

  return (
    <Container className='container-fluid mt-3 mx-4'>
      <nav aria-label='breadcrumb row '>
        <ol className='breadcrumb'>
          {posts && (
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
          )}

          {activePost && (
            <li className='breadcrumb-item active' aria-current='page'>
              {activePost.title}
            </li>
          )}
        </ol>
      </nav>
    </Container>
  )
}

export default Breadcrumb
