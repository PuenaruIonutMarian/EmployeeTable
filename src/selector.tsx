import { useState } from "react"
import './employee.css';

const Selector = () => {
    const [entries, setEntries] = useState(10);

  return (
    <div className="selector-container">
    <label htmlFor="entries">Show</label>
    <select value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
    </select>
    <label>entries</label>
    </div>
  )
}

export default Selector;