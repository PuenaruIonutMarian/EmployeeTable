import { DataRow } from './types';

export const formatHeader = (header: string) => {
  return header.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, (char) => char.toUpperCase());
};

export const sortData = (data: DataRow[], sortConfig: { key: string; direction: 'asc' | 'desc' } | null) => {
  if (!sortConfig) return data;
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

export const filterData = (data: DataRow[], searchQuery: string, headers: string[]) => {
  if (!searchQuery) return data;
  return data.filter(row =>
    headers.some(header =>
      row[header].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
};

export const paginateData = (data: DataRow[], currentPage: number, rowsPerPage: number) => {
  return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
};
