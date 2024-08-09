import { DataRow } from './types';

//regex rules: transform camel case to human-readable titles
export const formatHeader = (header: string) => {
  return header.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, (char) => char.toUpperCase());
};

//This function sorts an array of data based on a specified key and direction (ascending or descending).
export const sortData = (data: DataRow[], sortConfig: { key: string; direction: 'asc' | 'desc' } | null) => {
  if (!sortConfig) return data;
  //The sort() method returns -1 to place the first item before the second, 1 to place it after, or 0 to keep the order unchanged.
  return [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
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
