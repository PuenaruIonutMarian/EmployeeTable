import SortIcon from './SortIcon';
import { formatHeader } from '../utils/utils';

/**
 * Props for the TableHeader component.
 * @typedef {Object} TableHeaderProps
 * @property {string[]} headers - An array of strings representing the table headers.
 * @property {{ key: string, direction: 'asc' | 'desc' } | null} sortConfig - The current sorting configuration, including the key and direction.
 * @property {function(string): void} requestSort - Function to request sorting by a specific header key.
 * @property {string} [headerClassName] - Optional className for the header row.
 */
interface TableHeaderProps {
  headers: string[];
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
  requestSort: (key: string) => void;
  headerClassName?: string;
}


/**
 * TableHeader is a React component that renders the headers of a table with sortable columns.
 * Each header cell can be clicked to trigger sorting, and an appropriate sorting icon is displayed
 * to indicate the current sort direction.
 * 
 * @param {TableHeaderProps} props - The props for the component.
 * @param {string[]} props.headers - An array of strings representing the table headers.
 * @param {{ key: string, direction: 'asc' | 'desc' } | null} props.sortConfig - The current sorting configuration, including the key and direction.
 * @param {function(string): void} props.requestSort - Function to request sorting by a specific header key.
 * @param {string} [props.headerClassName] - Optional className for the header row.
 * @returns {JSX.Element} The JSX for the TableHeader component.
 */
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
