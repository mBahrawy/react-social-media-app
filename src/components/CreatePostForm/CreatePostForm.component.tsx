import { useAppDispatch } from "@/core/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { createPost } from "@/core/store/reducers/posts-reducer";
import Container from "./CreatePostForm.style";
import ReactPortal from "../ReactPortal/ReactPortal.component";

type CreatePostFormProps = {
  setIsActiveModal: (state: boolean) => void;
};

type Inputs = {
  title: string;
  body: string;
  userId: number;
};

const schema = yup.object({
  title: yup.string().required("Post title is required").max(20, "Maximum title length is 20 characters."),
  body: yup.string().required("Post title is required").max(100, "Maximum title length is 100 characters."),
  userId: yup.number(),
});

const defaultValues: Inputs = {
  title: "",
  body: "",
  userId: 1,
};

function CreatePostForm({ setIsActiveModal }: CreatePostFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const handleClose = () => {
    setIsActiveModal(false);
  };

  const onSubmit = (formData: Inputs) => {
    dispatch(createPost(formData)).then(() => handleClose());
  };

  return (
    <ReactPortal wrapperId="popup-modal">
      <Container>
        <div className="inner card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-header pt-3">
              <h5>Create a new post</h5>
            </div>

            <div className="card-body">
              <div className="form-group mb-3">
                <label>Post title</label>
                <input
                  type="text"
                  className={`form-control ${!!errors.title?.message && "is-invalid"}`}
                  placeholder="Post title"
                  {...register("title")}
                  data-testid="title-input"
                />
                <div data-testid="title-error" className="invalid-feedback">
                  {errors.title?.message}
                </div>
              </div>
              <div className="form-group mb-3">
                <label>Post body</label>
                <textarea
                  className={`form-control ${!!errors.body?.message && "is-invalid"}`}
                  rows={4}
                  placeholder="Post body"
                  {...register("body")}
                  data-testid="body-input"
                />
                <div data-testid="body-error" className="invalid-feedback">
                  {errors.body?.message}
                </div>
              </div>
            </div>

            <div className="card-footer d-flex gap-2 justify-content-end">
              <button className="btn btn-primary btn-sm" type="submit">
                Add post
              </button>
              <button className="btn btn-outline-primary btn-sm" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="back-drop" onClick={handleClose} />
      </Container>
    </ReactPortal>
  );
}

export default CreatePostForm;
