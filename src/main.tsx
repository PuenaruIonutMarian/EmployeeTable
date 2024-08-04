import React from 'react'
import ReactDOM from 'react-dom/client'

import { data } from './data'

import { EmployeeTable } from './EmployeeTable'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <EmployeeTable data={data} />

  </React.StrictMode>,
)