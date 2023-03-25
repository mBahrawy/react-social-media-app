import { Post } from "@/core/interfaces/Post";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/core/interfaces/Redux";

import useOnInit from "@/core/hooks/useOnInit";
import { getPosts } from "@/core/store/reducers/posts-reducer";
import Container from "./PostsList.style";
import PostCard from "../PostCard/PostCard.component";

function PostsList(): JSX.Element {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: AppState) => state.posts);

  useOnInit(() => {
    dispatch(getPosts(""));
  });

  return (
    <Container className="mt-4">
      <div className="container">
        <div className="row">
          {posts.map((p: Post) => (
            <PostCard key={p.id} data={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default PostsList;
