import SortIcon from './SortIcon';
import { formatHeader } from '../utils/utils';

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
            aria-sort={
              sortConfig?.key === header
                ? sortConfig.direction === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'
            }
            className={sortConfig?.key === header ? 'sorted-column' : ''}
            role="columnheader"
          >
            <div className="sort-icon-container">
              {formatHeader(header)}
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
