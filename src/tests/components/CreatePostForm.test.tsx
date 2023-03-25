import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm.component";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "@/core/store/reducers/posts-reducer";

describe("Create new post", () => {
  it("should validate post input form", async () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CreatePostForm setIsActiveModal={() => {}} />
      </Provider>
    );

    const titleInput = screen.getByTestId("title-input");
    const bodyInput = screen.getByTestId("body-input");
    const submitButton = screen.getByRole("button", { name: /Add post/i });

    const titleError = await screen.findByTestId("title-error");
    const bodyError = await screen.findByTestId("body-error");

    // Try submitting the form with empty inputs
    fireEvent.click(submitButton);
    expect(titleError).toBeInTheDocument();
    expect(bodyError).toBeInTheDocument();

    // Fill out the inputs with valid values
    fireEvent.change(titleInput, { target: { value: "post title" } });
    fireEvent.change(bodyInput, { target: { value: "post body" } });

    fireEvent.click(submitButton);

    const titleErrorAfterSubmit = await screen.findByTestId("title-error");
    const bodyErrorAfterSubmit = await screen.findByTestId("body-error");

    expect(titleErrorAfterSubmit).toHaveTextContent("");
    expect(bodyErrorAfterSubmit).toHaveTextContent("");
  });
});
