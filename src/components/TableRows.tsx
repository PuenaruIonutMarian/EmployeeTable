import { DataRow } from '../types/types';

/**
 * Props for the TableRows component.
 * @typedef {Object} TableRowsProps
 * @property {DataRow[]} data - An array of data rows to be displayed in the table.
 * @property {string[]} headers - An array of strings representing the table headers.
 * @property {{ key: string, direction: 'asc' | 'desc' } | null} sortConfig - The current sorting configuration, including the key and direction.
 * @property {string} [rowClassName] - Optional className for each table row.
 * @property {string} [cellClassName] - Optional className for each table cell.
 */
interface TableRowsProps {
  data: DataRow[];
  headers: string[];
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null; 
  rowClassName?: string;
  cellClassName?: string;
}

/**
 * TableRows is a React component that renders the rows of a table based on provided data.
 * It displays the data according to the given headers and applies sorting styles to the cells
 * if a sorting configuration is provided.
 * 
 * @param {TableRowsProps} props - The props for the component.
 * @param {DataRow[]} props.data - An array of data rows to be displayed in the table.
 * @param {string[]} props.headers - An array of strings representing the table headers.
 * @param {{ key: string, direction: 'asc' | 'desc' } | null} props.sortConfig - The current sorting configuration, including the key and direction.
 * @param {string} [props.rowClassName] - Optional className for each table row.
 * @param {string} [props.cellClassName] - Optional className for each table cell.
 * @returns {JSX.Element} The JSX for the TableRows component.
 */
const TableRows: React.FC<TableRowsProps> = ({
  data,
  headers,
  sortConfig,
  rowClassName = '',
  cellClassName = '',
}) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className={rowClassName}>
          {headers.map((header) => (
            <td
              key={header}
              className={`${cellClassName} ${sortConfig?.key === header ? 'sorted-column' : ''}`}
            >
              {typeof row[header] === 'object' && row[header] instanceof Date
                ? row[header].toLocaleString()
                : row[header]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;
