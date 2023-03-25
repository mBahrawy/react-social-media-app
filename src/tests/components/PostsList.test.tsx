import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PostsList from "@/components/PostsList/PostsList.component";
import { BrowserRouter as Router } from "react-router-dom";

const DUMMY_POSTS = [
  {
    userId: 1,
    id: 1,
    title: "title 1",
    body: "post body",
  },
  {
    userId: 2,
    id: 2,
    title: "title 2",
    body: "post body",
  },
  {
    userId: 3,
    id: 3,
    title: "title 3",
    body: "post body",
  },
];

describe("List posts", () => {
  it("should renders a list of posts", () => {
    render(
      <Router>
        <PostsList posts={DUMMY_POSTS} />
      </Router>
    );

    // Check if list container rendered
    const list = screen.queryByTestId("posts-list");
    expect(list).toBeInTheDocument();

    // Check if all list items are rendred
    const cards = screen.queryAllByTestId("post-item");
    expect(cards).toHaveLength(DUMMY_POSTS.length);

    // Check if all list items are rendred correctly
    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(DUMMY_POSTS[index].body);
    });
  });
});
