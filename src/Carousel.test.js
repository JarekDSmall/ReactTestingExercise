import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Carousel from './Carousel';

// Smoke Test for Carousel Component
test('Carousel component renders without crashing', () => {
  render(<Carousel />);
});

// Snapshot Test for Carousel Component
test('Carousel component matches the snapshot', () => {
  const tree = renderer.create(<Carousel />).toJSON();
  expect(tree).toMatchSnapshot();
});


test('works when you click on the right arrow', function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  const leftArrow = queryByTestId("left-arrow");
  const image = queryByAltText("Photo by Richard Pasquarella on Unsplash");

  // move forward in the carousel
  fireEvent.click(rightArrow);

  // make sure the second image shows up
  const secondImage = queryByAltText("Photo by Pratik Patel on Unsplash");
  expect(secondImage).toBeInTheDocument();
});

test('works when you click on the left arrow', function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  const leftArrow = queryByTestId("left-arrow");

  // move back in the carousel
  fireEvent.click(leftArrow);

  // make sure the first image shows up
  const firstImage = queryByAltText("Photo by Richard Pasquarella on Unsplash");
  expect(firstImage).toBeInTheDocument();
});

