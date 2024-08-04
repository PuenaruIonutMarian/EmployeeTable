import React, { useState, useMemo } from 'react';
import './employee.css';
import Selector from './selector';
import SearchBar from './SearchBar';
import SortIcon from './SortIcon';
import Compter from './Compter';
import Pagination from './Pagination';

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
export const EmployeeTable: React.FC<EmployeeTableProps> = ({
  data,
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract headers from the keys of the first data object
  const headers = useMemo(() => (data.length > 0 ? Object.keys(data[0]) : []), [data]);

  // Filter data based on searchQuery
  const filteredData = useMemo(() => {
    return data.filter(row =>
      headers.some(header =>
        row[header].toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery, headers]);

  // Sort data based on sortConfig
  const sortedData = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredData;
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowsPerPageChange = (rows: number) => {
    const firstEntryIndex = (currentPage - 1) * rowsPerPage;
    const newPage = Math.floor(firstEntryIndex / rows) + 1;
    setRowsPerPage(rows);
    setCurrentPage(newPage);
  };

  return (
    <div className='table-container'>
      <div className='headerFunctions'>
        <Selector
          rowsPerPage={rowsPerPage}
          setRowsPerPage={handleRowsPerPageChange}
        />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <>
          <table className={`table ${tableClassName}`}>
            <thead>
              <tr className={headerClassName}>
                {headers.map((header) => (
                  <th key={header} onClick={() => requestSort(header)}>
                    {formatHeader(header)}
                    <SortIcon
                      isSorted={sortConfig?.key === header}
                      isSortedDesc={sortConfig?.direction === 'desc'}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
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
          <div className='footerFunctions'>
            <Compter
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              totalEntries={filteredData.length}
            />
            <Pagination
              totalPages={Math.ceil(filteredData.length / rowsPerPage)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeTable;
