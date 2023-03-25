import { Comment } from "@/core/interfaces/Comment";
import UserIcon from "@/assets/images/user.png";
import Container from "./Comments.style";

type CommentsProps = {
  data: Comment[];
};

function Comments({ data }: CommentsProps): JSX.Element {
  return (
    <Container>
      <div className="container mb-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="">
              {data.map((comment: Comment, i: number) => {
                return (
                  <div key={comment.id} className="card-body">
                    <div className="d-flex flex-start align-items-center">
                      <img className="rounded-circle shadow-1-strong me-3" src={UserIcon} alt="avatar" width="60" height="60" />
                      <div>
                        <h6 className="fw-bold text-primary mb-1">{comment.email}</h6>
                        <p className="text-muted small mb-0">{comment.name}</p>
                      </div>
                    </div>

                    <p className="mt-3 mb-4 pb-2">{comment.body}</p>
                    {i < data.length - 1 && <hr className="mb-0" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Comments;
