import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SortIcon from '../components/SortIcon';

describe('SortIcon', () => {
  it('should render the up arrow when the column is sorted in ascending order', () => {
    render(<SortIcon isSorted={true} isSortedDesc={false} />);
    const sortIconElement = screen.getByTestId('sort-icon');
    const upArrowElement = screen.getByTestId('up-arrow');
    const downArrowElement = screen.getByTestId('down-arrow');

    expect(sortIconElement).toBeInTheDocument();
    expect(upArrowElement).toBeInTheDocument();
    expect(downArrowElement).toBeInTheDocument();
    expect(sortIconElement).toHaveClass('sorted-asc');
    expect(upArrowElement).toHaveClass('up-arrow');
    expect(downArrowElement).toHaveClass('down-arrow');
  });

  it('should render the down arrow when the column is sorted in descending order', () => {
    render(<SortIcon isSorted={true} isSortedDesc={true} />);
    const sortIconElement = screen.getByTestId('sort-icon');
    const upArrowElement = screen.getByTestId('up-arrow');
    const downArrowElement = screen.getByTestId('down-arrow');

    expect(sortIconElement).toBeInTheDocument();
    expect(upArrowElement).toBeInTheDocument();
    expect(downArrowElement).toBeInTheDocument();
    expect(sortIconElement).toHaveClass('sorted-desc');
    expect(upArrowElement).toHaveClass('up-arrow');
    expect(downArrowElement).toHaveClass('down-arrow');
  });

    it('should render both arrows when the column is not sorted', () => {
    render(<SortIcon isSorted={false} isSortedDesc={false} />);
    const sortIconElement = screen.getByTestId('sort-icon');
    const upArrowElement = screen.getByTestId('up-arrow');
    const downArrowElement = screen.getByTestId('down-arrow');

    expect(sortIconElement).toBeInTheDocument();
    expect(upArrowElement).toBeInTheDocument();
    expect(downArrowElement).toBeInTheDocument();
    expect(upArrowElement).toHaveClass('up-arrow');
    expect(downArrowElement).toHaveClass('down-arrow');
  });
});