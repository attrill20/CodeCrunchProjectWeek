mport React from "react";
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
  const pageContent = await screen.findByText(/Study Bytes/i);
  expect(pageContent).toBeInTheDocument();
});

// TEST2
// when button is clicked it should display drop down menu

test("should show dropdown", async () => {
  render(<App />);
  const dropDown = screen.getByRole("button", {
    name: /CHOOSE A STUDY TOPIC/i,
  });
  // Events and assertions...
  expect(dropDown).toBeInTheDocument();
});

// ARRANGE
test("displays name of link on button each time new link is clicked ", async () => {
  // Render the component that contains the button and dropdown menu
  render(<App />);
  fireEvent.click("button", { name: /CHOOSE A STUDY TOPIC/i });
  const propsLink = screen.getByRole("link", { name: /Props/i });

  expect(propsLink).toBeInTheDocument();
});

// TEST 3
// arrange -
// when component is clicked cards should appear on the page
// should have 4 cards on the page.
test("displays list with heading when link is clicked", () => {
  // Render the component that contains the link and the list
  render(<App />);

  // Find the link element
  const link = screen.getByRole("link", { name: /show list/i });

  // Simulate a click on the link
  userEvent.click(link);

  // Find the list heading element
  const listHeading = screen.getByRole("heading");

  // Find the list item elements
  const listItems = screen.getAllByRole("listitem");

  // Assert that the list heading and items are visible and have the correct content
  expect(listHeading).toBeVisible();
  expect(listItems).toHaveLength(4);
});

// TEST 4
// arrange
// link is clicked it should navigate to external URL
//