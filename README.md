[![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Typescript version](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![CSS version](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/#specs) [![Vite version](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) ![Vitest Badge](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge&logo) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/) ![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=fff)

# @ionutpuenaru/employee_table

# Employee Table Component

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Component Documentation](#documentation)
* [Development](#development)
* [Authors](#authors)
* [License](#license)

## Description

The `EmployeeTable` component is a reusable React component designed for displaying employee data in a tabular format. It includes features such as sorting, filtering, pagination, and customizable styling. This component is built with TypeScript and Vite for optimized development and build processes.

## Technologies
This project uses a variety of technologies and tools to build and maintain the Employee Table component:

* `React`: A JavaScript library for building user interfaces.
* `React DOM`: A package that provides DOM-specific methods for React.
* `TypeScript`: A strongly typed programming language that builds on JavaScript.
* `Vite`: A fast build tool and development server.
* `ESLint`: A tool for identifying and fixing problems in JavaScript and TypeScript code.
* `Vite Plugin React`: A Vite plugin to support React in the development process.
* `Vite Plugin CSS Injected by JS`: A plugin for injecting CSS via JavaScript in Vite projects.
* `Vite Plugin DTS`: A Vite plugin for generating TypeScript declaration files.
* `@typescript-eslint`: A set of tools for linting TypeScript code using ESLint.
* `Node.js`: JavaScript runtime built on Chrome's V8 engine, used to manage dependencies and run scripts.


## Features

- **Sorting:** Clickable table headers to sort data in ascending or descending order.
- **Filtering:** Search bar to filter rows based on user input.
- **Pagination:** Control the number of rows displayed per page and navigate through pages.
- **Customization:** Easily customizable styles through props.

## Prerequisites

- **Node.js:** Version 16 or later
- **Editor:** Recommended editors include Visual Studio Code, WebStorm, or any editor with TypeScript support.

## Installation

To use this library in your project, follow these steps:

1. **Install the Package:**

   You can install the `employee-table` package from npm using the following command:
   ```sh
   npm install @ionutpuenaru/employee_table
   ```

    Or if you're using Yarn:
    ```sh 
    yarn add @ionutpuenaru/employee_table
    ```

2. Setup:

After installation, you can use the EmployeeTable component in your React project.

Example Usage:

```jsx
import React from 'react';
import { EmployeeTable } from '@ionutpuenaru/employee_table';
import { data } from './path-to-your-data';

const App = () => (
  <div>
    <EmployeeTable 
      data={data}
      tableAppClassName="my-custom-table-app"
      tableClassName="my-custom-table"
      headerClassName="my-custom-header"
      rowClassName="my-custom-row"
      cellClassName="my-custom-cell"
    />
  </div>
);

export default App;
```

## Component Documentation

### `EmployeeTable`

- **Description:** 
    - Renders a table with employee data, supporting sorting, filtering, and pagination.

- **Props:**
    - **data** (`DataRow[]`): Array of data rows to be displayed in the table.
    - **tableAppClassName** (`string`): Optional class name for the outer container of the table.
    - **tableClassName** (`string`): Optional class name for the `<table>` element.
    - **headerClassName** (`string`): Optional class name for the table headers.
    - **rowClassName** (`string`): Optional class name for table rows.
    - **cellClassName** (`string`): Optional class name for table cells.

### `DataRow`

- **Description:** Represents a single row of data in the table.

- **Type:**

    ```typescript
    export interface DataRow {
      [key: string]: string | number | Date;
    }
    ```


## Development
To develop and test this component locally:

1. Clone the Repository:
    ```sh 
    git clone https://github.com/PuenaruIonutMarian/EmployeeTable.git
    cd employee_table
    ```

2. Install Dependencies:
    ```sh
    npm install
    ```

3. Run the Development Server:
    ```sh 
     npm run dev
    ```

4. Build for Production:
     ```sh 
     npm run build
     ```

5. Run Tests:
     ```sh 
     npm test
     ```

## Authors
Puenaru Ionut Marian

## License
This project is licensed under the MIT License.
