import { DataRow } from '../types/types';

//regex rules: transform camel case to human-readable titles
export const formatHeader = (header: string) => {
  return header.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, (char) => char.toUpperCase());
};

//This function sorts an array of data based on a specified key and direction (ascending or descending).
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


/// function filters the data based on a search query, checking if any cell in a row contains the query string.
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

//This function paginates the data by returning only a subset of rows based on the current page and the number of rows per page.
export const paginateData = (data: DataRow[], currentPage: number, rowsPerPage: number) => {
  return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
};
