// Test away!

import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Controls from './Controls';

test('Conrrols renders correctly', () => {
  // snapshot test
  render(<Controls />);
});

test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});