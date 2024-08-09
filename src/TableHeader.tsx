import React from 'react';
import SortIcon from './SortIcon';

interface TableHeaderProps {
  headers: string[];
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
  requestSort: (key: string) => void;
  headerClassName?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  sortConfig,
  requestSort,
  headerClassName = '',
}) => {
  return (
    <thead>
      <tr className={headerClassName}>
        {headers.map((header) => (
          <th
            key={header}
            onClick={() => requestSort(header)}
            className={sortConfig?.key === header ? 'sorted-column' : ''}
          >
            <div className="sort-icon-container">
              {header}
              <SortIcon
                isSorted={sortConfig?.key === header}
                isSortedDesc={sortConfig?.direction === 'desc'}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
