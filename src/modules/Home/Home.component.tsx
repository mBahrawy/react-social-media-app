import PostsList from "@/components/PostsList/PostsList.component";
import Container from "./Home.style";

function Home(): JSX.Element {
  return (
    <Container>
      <PostsList />
    </Container>
  );
}

export default Home;
