import React, { useState, useMemo } from 'react';
import './employee.css';
import Selector from './selector';
import SearchBar from './SearchBar';
import Compter from './Compter';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import { EmployeeTableProps } from './types';
import { sortData, filterData, paginateData } from './utils';

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

  const filteredData = useMemo(() => filterData(data, searchQuery, headers), [data, searchQuery, headers]);
  const sortedData = useMemo(() => sortData(filteredData, sortConfig), [filteredData, sortConfig]);
  const paginatedData = useMemo(() => paginateData(sortedData, currentPage, rowsPerPage), [sortedData, currentPage, rowsPerPage]);

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
            <TableHeader
              headers={headers}
              sortConfig={sortConfig}
              requestSort={requestSort}
              headerClassName={headerClassName}
            />
            <TableRows
              data={paginatedData}
              headers={headers}
              rowClassName={rowClassName}
              cellClassName={cellClassName}
            />
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

