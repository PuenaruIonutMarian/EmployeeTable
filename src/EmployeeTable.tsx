import React from 'react';
import './employee.css';

interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

interface EmployeeTableProps {
  employees: Employee[];
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}) => {
  return (
    <div className='table-container'>
      <table className={`table ${tableClassName}`}>
        <thead>
          <tr className={headerClassName}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Employee, index: number) => (
            <tr key={index} className={rowClassName}>
              <td className={cellClassName}>{employee.firstName}</td>
              <td className={cellClassName}>{employee.lastName}</td>
              <td className={cellClassName}>{employee.startDate}</td>
              <td className={cellClassName}>{employee.department}</td>
              <td className={cellClassName}>{employee.dateOfBirth}</td>
              <td className={cellClassName}>{employee.street}</td>
              <td className={cellClassName}>{employee.city}</td>
              <td className={cellClassName}>{employee.state}</td>
              <td className={cellClassName}>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default EmployeeTable;
