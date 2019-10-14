// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('it renders correctly', () => {
    const locked = jest.fn();
    const closed =jest.fn();
  render(<Display 
    locked={locked}
    closed={closed}
  />);
});

