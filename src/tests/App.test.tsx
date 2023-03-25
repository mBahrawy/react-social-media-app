import "@testing-library/jest-dom/extend-expect";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "@/core/store/reducers/posts-reducer";
import App from "../App";

describe("App", () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("renders app", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();
  });
});
