import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// TEST 1
// arrange-
// it should navigate to the page and open correct URL in browser
// act -
// test expect url to be localhost:3000//
// assert -
// expect actual to be expected. 
test.beforeEach(async ({ page }) => {
  await page.goto('');
});
// TEST 2
// arrange -
// when button is clicked it should display drop down menu  
// act 
// assert

// TEST 3
// arrange -
// when component is clicked cards should appear on the page 
// should have 3 or 4 cards on the page.

// TEST 4
// arrange
// link is clicked it should navigate to external URL
// 

