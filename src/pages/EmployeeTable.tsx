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


/**
 * EmployeeTable component renders a table with various functionalities such as
 * sorting, searching, and pagination.
 *
 * @param {EmployeeTableProps} props - The properties passed to the component.
 * @param {Array<DataRow>} props.data - The data to be displayed in the table.
 * @param {string} [props.tableAppClassName=''] - Optional CSS class for the outermost container.
 * @param {string} [props.tableClassName=''] - Optional CSS class for the table element.
 * @param {string} [props.headerClassName=''] - Optional CSS class for the table header.
 * @param {string} [props.rowClassName=''] - Optional CSS class for each table row.
 * @param {string} [props.cellClassName=''] - Optional CSS class for each table cell.
 *
 * @returns {JSX.Element} The rendered table component.
 */
export const EmployeeTable: React.FC<EmployeeTableProps> = ({
  data,
  tableAppClassName = '',
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}) => {
  /** State for managing which column is sorted and in what direction. */
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>({
    // key: Object.keys(data[0])[0], // Default to the first column
    key: data.length > 0 ? Object.keys(data[0])[0] : '', // Default to the first column
    direction: 'asc',
  });

  /** State for keeping track of the current page number. */
  const [currentPage, setCurrentPage] = useState(1);
  /** State for determining how many rows to display per page. */
  const [rowsPerPage, setRowsPerPage] = useState(10);
  /** State for holding the search term for filtering data. */
  const [searchQuery, setSearchQuery] = useState('');
  /** Extract headers from the keys of the first data object */
  const headers = useMemo(() => (data.length > 0 ? Object.keys(data[0]) : []), [data]);
   /** Filters the data based on the search query. */
  const filteredData = useMemo(() => filterData(data, searchQuery, headers), [data, searchQuery, headers]);
  /** Sorts the data based on the sort configuration. */
  const sortedData = useMemo(() => sortData(filteredData, sortConfig), [filteredData, sortConfig]);
   /** Paginates the data based on the current page and rows per page. */
  const paginatedData = useMemo(() => paginateData(sortedData, currentPage, rowsPerPage), [sortedData, currentPage, rowsPerPage]);

  /**
   * Function to handle sorting when a column header is clicked.
   *
   * @param {string} key - The key of the column to be sorted.
   */
  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

 /**
   * Effect to reset the current page if filtered data is smaller than the current page.
   */
  useEffect(() => {
    if ((currentPage - 1) * rowsPerPage >= filteredData.length) {
      setCurrentPage(1);
    }
  }, [filteredData.length, currentPage, rowsPerPage]);

  /**
   * Method to handle the change in rows per page, keeping track of the last viewed data on the current page.
   *
   * @param {number} rows - The new number of rows per page.
   */
  const handleRowsPerPageChange = (rows: number) => {
    const firstEntryIndex = (currentPage - 1) * rowsPerPage;
    const newPage = Math.floor(firstEntryIndex / rows) + 1;
    setRowsPerPage(rows);
    setCurrentPage(newPage);
  };

  return (
    <div className={`table-container ${tableAppClassName}`} role='table'>
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
      {/* {data.length === 0 ? (
        <p>No data available</p>
      ) : ( */}
       {data.length === 0 || filteredData.length === 0 ? (
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

