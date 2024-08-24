import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import TableHeader from '../components/TableHeader';

describe('TableHeader', () => {
  const headers = ['Name', 'Age', 'Email'];
  const sortConfig: { key: string; direction: 'asc' | 'desc' } = { key: 'Name', direction: 'asc' };
  const requestSort = vi.fn();

  it('renders the header row with the correct headers', () => {
    render(
      <table>
        <TableHeader headers={headers} sortConfig={sortConfig} requestSort={requestSort} />
      </table>
    );

    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('renders the sort icon with the correct state', () => {
    render(
      <table>
        <TableHeader headers={headers} sortConfig={sortConfig} requestSort={requestSort} />
      </table>
    );

    const sortIcons = screen.getAllByTestId('sort-icon');
    expect(sortIcons).toHaveLength(3);
    expect(sortIcons[0]).toHaveClass('sorted-asc');
    expect(sortIcons[1]).not.toHaveClass('sorted-asc');
    expect(sortIcons[1]).not.toHaveClass('sorted-desc');
    expect(sortIcons[2]).not.toHaveClass('sorted-asc');
    expect(sortIcons[2]).not.toHaveClass('sorted-desc');
  });

  it('calls the requestSort function when a header is clicked', () => {
    render(
      <table>
        <TableHeader headers={headers} sortConfig={sortConfig} requestSort={requestSort} />
      </table>
    );

    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);
    expect(requestSort).toHaveBeenCalledWith('Name');
  });

  it('applies the "sorted-column" class to the sorted header', () => {
    render(
      <table>
        <TableHeader headers={headers} sortConfig={sortConfig} requestSort={requestSort} />
      </table>
    );

    const nameHeader = screen.getByText('Name').closest('th');
    expect(nameHeader).toHaveClass('sorted-column');
  });

  it('sets the aria-sort attribute correctly', () => {
    render(
      <table>
        <TableHeader headers={headers} sortConfig={sortConfig} requestSort={requestSort} />
      </table>
    );

    const nameHeader = screen.getByText('Name').closest('th');
    expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
  });

  it('handles a null sortConfig', () => {
    render(
      <table>
        <TableHeader headers={headers} sortConfig={null} requestSort={requestSort} />
      </table>
    );

    const nameHeader = screen.getByText('Name').closest('th');
    expect(nameHeader).toHaveAttribute('aria-sort', 'none');
    expect(nameHeader).not.toHaveClass('sorted-column');
  });
});
