import React from 'react';
import { DataRow } from './types';

interface TableRowsProps {
  data: DataRow[];
  headers: string[];
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null; 
  rowClassName?: string;
  cellClassName?: string;
}

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
