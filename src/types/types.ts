export interface DataRow {
  [key: string]: string | number | Date;
}

export interface EmployeeTableProps {
  data: DataRow[];
  tableAppClassName?: string;
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
}
