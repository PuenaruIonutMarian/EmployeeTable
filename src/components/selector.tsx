type SelectorProps = {
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
};

//Allows users to select how many rows are displayed per page.
const Selector: React.FC<SelectorProps> = ({ rowsPerPage, setRowsPerPage }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <div className="selector-container">
      <label htmlFor="entries">Show</label>
      <select value={rowsPerPage} onChange={handleSelectChange}>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <label>entries</label>
    </div>
  );
};

export default Selector;

