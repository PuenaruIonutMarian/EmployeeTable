import { DataRow } from '../types/types';

/**
 * Transforms a camel case string into a human-readable title.
 * 
 * @param {string} header - The camel case header string to format.
 * @returns {string} The formatted header as a human-readable title.
 *
 * @example
 * // Returns "Employee Name"
 * formatHeader("employeeName");
 */
export const formatHeader = (header: string) => {
  return header.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, (char) => char.toUpperCase());
};


/**
 * Sorts an array of data based on a specified key and direction (ascending or descending).
 * 
 * @param {DataRow[]} data - The array of data to sort.
 * @param {{ key: string; direction: 'asc' | 'desc' } | null} sortConfig - The sorting configuration, including the key to sort by and the direction.
 * @returns {DataRow[]} A new array of data, sorted according to the provided configuration.
 *
 * @example
 * const sortedData = sortData(data, { key: "name", direction: "asc" });
 */
export const sortData = (data: DataRow[], sortConfig: { key: string; direction: 'asc' | 'desc' } | null) => {
  if (!sortConfig) return data;

  return [...data].sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    // Convert to string and normalize for case-insensitive and accent-insensitive comparison
    const formattedValueA = valueA.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const formattedValueB = valueB.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // -1 to place the first item before the second, 
  //  1 to place it after
  //  0 to keep the order unchanged.
    if (formattedValueA < formattedValueB) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (formattedValueA > formattedValueB) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
};


/**
 * Filters the data based on a search query, checking if any cell in a row contains the query string.
 * 
 * @param {DataRow[]} data - The array of data to filter.
 * @param {string} searchQuery - The search query to filter by.
 * @param {string[]} headers - The headers of the data to check against.
 * @returns {DataRow[]} A new array of data that matches the search query.
 *
 * @example
 * const filteredData = filterData(data, "john", ["name"]);
 */
export const filterData = (data: DataRow[], searchQuery: string, headers: string[]) => {
  if (!searchQuery) return data;
  //It iterates through each row of the data.
  return data.filter(row =>
    //For each row, it checks if any of the cells (specified by headers) contains the search query (case-insensitive).
    headers.some(header =>
      //If a match is found in any cell, that row is included in the filtered data.
      row[header].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
};

/**
 * Paginates the data by returning only a subset of rows based on the current page and the number of rows per page.
 * 
 * @param {DataRow[]} data - The array of data to paginate.
 * @param {number} currentPage - The current page number (1-indexed).
 * @param {number} rowsPerPage - The number of rows per page.
 * @returns {DataRow[]} A subset of the data corresponding to the specified page and rows per page.
 *
 * @example
 * const paginatedData = paginateData(data, 2, 10);
 */
export const paginateData = (data: DataRow[], currentPage: number, rowsPerPage: number) => {
  return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
};
