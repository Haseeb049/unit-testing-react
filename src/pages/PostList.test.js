import { render, screen } from "@testing-library/react";
import React from "react";
import { useQuery } from "react-query";
import PostList from "./PostList";
jest.mock("react-query");

describe("PostList", () => {
  it("When isLoading is true then loading text should be displayed", () => {
    //Arrange
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    //Act
    const { debug } = render(
      <PostList isDrawerOpen={false} closeDrawer={jest.fn()} />
    );

    //Assertion
    const text = screen.queryByText("Loading..").innerHTML;
    expect(text).toBe("Loading..");
  });
});
