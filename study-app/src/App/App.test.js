import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

// TEST 1
// arrange-
// it should navigate to the page and open correct URL in browser
// act -
// test expect url to be localhost:3000//
// assert -
// expect actual to be expected.

// ARRANGE
test("loads the page", async () => {
  render(<App />);
  const pageContent = await screen.findByText(/Code Crunch/i);
  expect(pageContent).toBeInTheDocument();
});

// TEST2
// when button is clicked it should display drop down menu

test("should show dropdown", async () => {
  render(<App />);
  const dropDown = await screen.findByText(/CHOOSE A STUDY TOPIC/i);
  // Events and assertions...
  expect(dropDown).toBeInTheDocument();
});

// ARRANGE
test("displays name of link on button each time new link is clicked", async () => {
  // Render the component that contains the button and dropdown menu
  render(<App />);
  const propsLink = await screen.findByText(/Props/i);

  expect(propsLink).toBeInTheDocument();
});

// TEST 3
// arrange -
// when component is clicked cards should appear on the page
// should have 4 cards on the page.
test("displays list with heading when link is clicked", () => {
  // Render the component that contains the link and the list
  render(<App />);

  // Find the list item elements
  const listItems = screen.getAllByRole("listitem");

  // Assert that the list heading and items are visible and have the correct content

  expect(listItems).toHaveLength(8);
});
