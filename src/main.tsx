import React from 'react'
import ReactDOM from 'react-dom/client'

import { data } from './data/data'

import { EmployeeTable } from './pages/EmployeeTable'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <EmployeeTable data={data} />


  </React.StrictMode>,
)