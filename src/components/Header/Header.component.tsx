import { useState } from "react";
import { Link } from "react-router-dom";
import CreatePostForm from "../CreatePostForm/CreatePostForm.component";
import Container from "./Header.style";

function Header(): JSX.Element {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const handleToggleModal = () => {
    setIsActiveModal((prev) => !prev);
  };

  return (
    <Container>
      {isActiveModal && <CreatePostForm setIsActiveModal={setIsActiveModal} />}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between border-bottom">
        <Link className="navbar-brand" to="/">
          APP LOGO
        </Link>

        <b>Social Media App</b>

        <button className="btn btn-primary" onClick={handleToggleModal}>
          Add post
        </button>
      </nav>
    </Container>
  );
}

export default Header;
