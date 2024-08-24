import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Selector from '../components/selector'; // Adjust the path as needed

describe('Selector Component', () => {
  it('renders the dropdown with the correct initial value', () => {
    const mockSetRowsPerPage = vi.fn();
    const rowsPerPage = 25;

    render(<Selector rowsPerPage={rowsPerPage} setRowsPerPage={mockSetRowsPerPage} />);

    const selectElement = screen.getByLabelText('Number of rows per page');
    
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('25');
  });

  it('calls setRowsPerPage with the correct value when a new option is selected', () => {
    const mockSetRowsPerPage = vi.fn();
    const rowsPerPage = 10;

    render(<Selector rowsPerPage={rowsPerPage} setRowsPerPage={mockSetRowsPerPage} />);

    const selectElement = screen.getByLabelText('Number of rows per page');

    // Simulate changing the dropdown value
    fireEvent.change(selectElement, { target: { value: '50' } });

    // Ensure setRowsPerPage was called with the correct value
    expect(mockSetRowsPerPage).toHaveBeenCalledWith(50);
  });

  it('updates the selected value when props change', () => {
    const mockSetRowsPerPage = vi.fn();
    let rowsPerPage = 10;
    
    const { rerender } = render(<Selector rowsPerPage={rowsPerPage} setRowsPerPage={mockSetRowsPerPage} />);

    const selectElement = screen.getByLabelText('Number of rows per page');

    // Initial check
    expect(selectElement).toHaveValue('10');

    // Rerender with a new rowsPerPage value
    rowsPerPage = 100;
    rerender(<Selector rowsPerPage={rowsPerPage} setRowsPerPage={mockSetRowsPerPage} />);

    // Check if the select value updated correctly
    expect(selectElement).toHaveValue('100');
  });
});
