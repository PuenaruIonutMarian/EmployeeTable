/**
 * The default export for the EmployeeTable component.
 * 
 * @module
 * @description This export provides the default `EmployeeTable` component from the `./pages/EmployeeTable` file.
 * The `EmployeeTable` component is a fully functional table that includes sorting, filtering, and pagination features.
 * 
 * @example
 * import { EmployeeTable } from './components';
 */
export { default as EmployeeTable } from './pages/EmployeeTable';

/**
 * The `DataRow` type definition.
 * 
 * @typedef {Object} DataRow
 * @property {string | number | Date} [key: string] - Represents the value of a data row for a given key.
 * This type allows for various data types such as strings, numbers, and dates, which are used to represent the columns of a table row.
 * 
 * @example
 * const row: DataRow = {
 *   id: 1,
 *   name: "John Doe",
 *   age: 30,
 *   currentCity: "New York",
 *   countryOfBirth: "USA",
 *   salary: 50000
 * };
 */
export type { DataRow } from './types/types';
