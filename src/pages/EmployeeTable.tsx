import React, { useState, useMemo, useEffect } from 'react';
import '../styles/employee.css';
import Selector from '../components/selector';
import SearchBar from '../components/SearchBar';
import Compter from '../components/Compter';
import Pagination from '../components/Pagination';
import TableHeader from '../components/TableHeader';
import TableRows from '../components/TableRows';
import { EmployeeTableProps } from '../types/types';
import { sortData, filterData, paginateData } from '../utils/utils';


export const EmployeeTable: React.FC<EmployeeTableProps> = ({
  data,
  tableAppClassName = '',
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}) => {
  //Manages which column is sorted and in what direction.
  // const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>({
    key: Object.keys(data[0])[0], // Default to the first column
    direction: 'asc',
  });
  console.log(sortConfig);
  //Keeps track of the current page number.
  const [currentPage, setCurrentPage] = useState(1);
  //Determines how many rows to display per page.
  const [rowsPerPage, setRowsPerPage] = useState(10);
  //Holds the search term for filtering data.
  const [searchQuery, setSearchQuery] = useState('');
  // Extract headers from the keys of the first data object
  const headers = useMemo(() => (data.length > 0 ? Object.keys(data[0]) : []), [data]);
  //Filters the data based on the search query.
  const filteredData = useMemo(() => filterData(data, searchQuery, headers), [data, searchQuery, headers]);
  //Sorts the data based on the sort config.
  const sortedData = useMemo(() => sortData(filteredData, sortConfig), [filteredData, sortConfig]);
  //Paginates the data based on the current page and rows per page.
  const paginatedData = useMemo(() => paginateData(sortedData, currentPage, rowsPerPage), [sortedData, currentPage, rowsPerPage]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Reset current page if filtered data is smaller than current page
  useEffect(() => {
    if ((currentPage - 1) * rowsPerPage >= filteredData.length) {
      setCurrentPage(1);
    }
  }, [filteredData.length, currentPage, rowsPerPage]);

  // method to keep track of the last viewed data on the current page
  // takes the new rowsPerPage value as input
  const handleRowsPerPageChange = (rows: number) => {
    const firstEntryIndex = (currentPage - 1) * rowsPerPage;
    const newPage = Math.floor(firstEntryIndex / rows) + 1;
    setRowsPerPage(rows);
    setCurrentPage(newPage);
  };

  return (
    <div className={`table-container ${tableAppClassName}`}>
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
              sortConfig={sortConfig}
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

