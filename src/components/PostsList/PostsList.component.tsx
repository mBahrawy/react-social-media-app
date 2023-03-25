import { Post } from "@/core/interfaces/Post";
import Container from "./PostsList.style";
import PostCard from "../PostCard/PostCard.component";

type PostsListProps = {
  posts: Post[];
};

function PostsList({ posts }: PostsListProps): JSX.Element {
  return (
    <Container className="mt-4">
      <div className="container">
        <div data-testid="posts-list" className="row">
          {posts?.map((p: Post) => (
            <div data-testid="post-item" key={p.id}>
              <PostCard data={p} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default PostsList;
