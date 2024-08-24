import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TableRows from '../components/TableRows';
import { DataRow } from '../types/types';

describe('TableRows', () => {
  const headers = ['Name', 'Age', 'Joined'];
  const data: DataRow[] = [
    { Name: 'Alice', Age: 30, Joined: new Date('2023-01-15T12:00:00Z') },
    { Name: 'Bob', Age: 25, Joined: new Date('2022-06-10T09:30:00Z') },
  ];

  it('renders the correct number of rows and cells', () => {
    const { getAllByRole } = render(
      <table>
        <TableRows data={data} headers={headers} sortConfig={null} />
      </table>
    );

    const rows = getAllByRole('row');
    expect(rows).toHaveLength(data.length);

    const cells = getAllByRole('cell');
    expect(cells).toHaveLength(data.length * headers.length);
  });

  it('applies the "sorted-column" class to the sorted cells', () => {
    const sortConfig: { key: string; direction: "asc" | "desc" } = { key: 'Age', direction: 'asc' };
    const { container } = render(
      <table>
        <TableRows data={data} headers={headers} sortConfig={sortConfig} />
      </table>
    );

    const ageCells = container.querySelectorAll('td.sorted-column');
    expect(ageCells).toHaveLength(data.length);
  });

  it('renders date values as localized strings', () => {
  const { getByText } = render(
    <table>
      <TableRows data={data} headers={headers} sortConfig={null} />
    </table>
  );

  // Use the actual format displayed by your component
  expect(getByText(/1\/15\/2023/)).toBeInTheDocument(); // MM/DD/YYYY format
  expect(getByText(/6\/10\/2022/)).toBeInTheDocument(); // MM/DD/YYYY format
});

  it('applies row and cell class names correctly', () => {
    const { container } = render(
      <table>
        <TableRows
          data={data}
          headers={headers}
          sortConfig={null}
          rowClassName="row-class"
          cellClassName="cell-class"
        />
      </table>
    );

    const rows = container.querySelectorAll('tr');
    rows.forEach(row => {
      expect(row).toHaveClass('row-class');
    });

    const cells = container.querySelectorAll('td');
    cells.forEach(cell => {
      expect(cell).toHaveClass('cell-class');
    });
  });

  it('handles empty data gracefully', () => {
    const { container } = render(
      <table>
        <TableRows data={[]} headers={headers} sortConfig={null} />
      </table>
    );

    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(0);
  });
});
