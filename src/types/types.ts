/**
 * Represents a row of data in the employee table.
 * Each key corresponds to a column name, and the value can be a string, number, or Date.
 */
export interface DataRow {
  [key: string]: string | number | Date;
}

/**
 * Props for the EmployeeTable component.
 *
 * @property {DataRow[]} data - The data to be displayed in the table, where each element represents a row.
 * @property {string} [tableAppClassName] - Optional CSS class for the outermost container of the table.
 * @property {string} [tableClassName] - Optional CSS class for the table element.
 * @property {string} [headerClassName] - Optional CSS class for the table header.
 * @property {string} [rowClassName] - Optional CSS class for each table row.
 * @property {string} [cellClassName] - Optional CSS class for each table cell.
 */
export interface EmployeeTableProps {
  data: DataRow[];
  tableAppClassName?: string;
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
}
