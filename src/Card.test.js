import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from './Card';

// Smoke Test for Card Component
test('Card component renders without crashing', () => {
  render(<Card />);
});

// Snapshot Test for Card Component
test('Card component matches the snapshot', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
