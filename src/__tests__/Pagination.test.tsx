import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Pagination from '../components/Pagination';
import { render, screen} from '@testing-library/react';

describe('Pagination', () => {
  it('renders the correct number of buttons', () => {
    render(<Pagination totalPages={10} currentPage={1} onPageChange={vi.fn()} />);
    expect(screen.getAllByRole('button')).toHaveLength(8); // 3 pages + Previous + Next + Current page
  });

  it('highlights the current page', () => {
    render(<Pagination totalPages={10} currentPage={5} onPageChange={vi.fn()} />);
    expect(screen.getByText('5')).toHaveClass('active');
  });

  it('disables the previous button when on the first page', () => {
    render(<Pagination totalPages={10} currentPage={1} onPageChange={vi.fn()} />);
    expect(screen.getByLabelText('Previous Page')).toBeDisabled();
  });

  it('disables the next button when on the last page', () => {
    render(<Pagination totalPages={10} currentPage={10} onPageChange={vi.fn()} />);
    expect(screen.getByLabelText('Next Page')).toBeDisabled();
  });

  it('calls the onPageChange callback when a page is clicked', async () => {
    const onPageChange = vi.fn();
    render(<Pagination totalPages={10} currentPage={1} onPageChange={onPageChange} />);

    // Ensure the "2" button is rendered
    const page2Button = screen.getByText('2');
    expect(page2Button).toBeInTheDocument();

    // Click on the "2" button
    //The userEvent.click(page2Button) call is now wrapped with await, ensuring the click event is properly registered before making the assertion.
    await userEvent.click(page2Button);

    // Assert that the onPageChange callback was called with the correct argument
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('does not call the onPageChange callback when the ellipsis is clicked', async () => {
    const onPageChange = vi.fn();
    render(<Pagination totalPages={20} currentPage={10} onPageChange={onPageChange} />);

    const ellipsis = screen.getByText('...');
    await userEvent.click(ellipsis);

    expect(onPageChange).not.toHaveBeenCalled();
  });
});
