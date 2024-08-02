import React from 'react';
import './employee.css';

// Define the types for the data and props
export interface DataRow {
  [key: string]: string | number | Date;
}

export interface EmployeeTableProps {
  data: DataRow[];
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
}

// Utility function to format headers
const formatHeader = (header: string) => {
  return header.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, (char) => char.toUpperCase());
};


// Table component
const EmployeeTable: React.FC<EmployeeTableProps> = ({
  data,
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}) => {
  // Ensure data is not empty
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Extract headers from the keys of the first data object
  const headers = Object.keys(data[0]);

  return (
    <div className='table-container'>
      <table className={`table ${tableClassName}`}>
        <thead>
          <tr className={headerClassName}>
            {headers.map((header) => (
              <th key={header}>{formatHeader(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={rowClassName}>
            {headers.map((header) => (
              <td key={header} className={cellClassName}>
                {typeof row[header] === 'object' && row[header] instanceof Date
                  ? row[header].toLocaleString()
                  : row[header]
                }
              </td>
            ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

