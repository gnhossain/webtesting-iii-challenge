// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';


test('Dashboard renders correctly', () => {
   
    render(< Dashboard />);
  });
  
  test('it render Success! upon success', async () => {
    
    const { queryByText, findByText, getByText } = render(< Dashboard />);
  
    const successDashboard = queryByText(/dash/i);
    expect(successDashboard).toBeNull();
  
    const button = getByText(/lock gate/i);
    fireEvent.click(button);
  });