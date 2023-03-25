import PostsList from "@/components/PostsList/PostsList.component";

import { useSelector } from "react-redux";
import { AppState } from "@/core/interfaces/Redux";

import useOnInit from "@/core/hooks/useOnInit";
import { getPosts } from "@/core/store/reducers/posts-reducer";
import { useAppDispatch } from "@/core/store/store";
import Container from "./Home.style";

function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const { posts } = useSelector((state: AppState) => state.posts);

  useOnInit(() => {
    dispatch(getPosts(""));
  });

  return (
    <Container>
      <PostsList posts={posts} />
    </Container>
  );
}

export default Home;
