import { AppState } from "@/core/interfaces/Redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "./Breadcrumb.style";

function Breadcrumb(): JSX.Element {
  const { posts, activePost } = useSelector((state: AppState) => state.posts);

  return (
    <Container className="container-fluid mt-3 mx-4">
      <nav aria-label="breadcrumb row ">
        <ol className="breadcrumb">
          {posts && (
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
          )}

          {activePost && (
            <li className="breadcrumb-item active" aria-current="page">
              {activePost.title}
            </li>
          )}
        </ol>
      </nav>
    </Container>
  );
}

export default Breadcrumb;
