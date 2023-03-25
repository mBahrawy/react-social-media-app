import Container from './Home.style'
import PostsList from '@/components/PostsList/PostsList.component'

const Home = (): JSX.Element => {
  return (
    <Container>
      <PostsList />
    </Container>
  )
}

export default Home
