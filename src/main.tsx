import React from 'react';
import ReactDOM from 'react-dom/client';

import { data } from './data/data';
import { EmployeeTable } from './pages/EmployeeTable';

/**
 * Entry point for the React application.
 * 
 * This script renders the `EmployeeTable` component into the root DOM element.
 * It is typically the starting point of the React application where the root component is mounted.
 * 
 * @function
 * @example
 * // Assumes there is a <div id="root"></div> element in the HTML
 * // and the EmployeeTable component expects a `data` prop.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Render the EmployeeTable component */}
    <EmployeeTable data={data} />
  </React.StrictMode>,
);
