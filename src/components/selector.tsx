type SelectorProps = {
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
};

const Selector: React.FC<SelectorProps> = ({ rowsPerPage, setRowsPerPage }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <div className="selector-container">
      <label htmlFor="rows-per-page">Show</label>
      <select
        id="rows-per-page" 
        value={rowsPerPage}
        onChange={handleSelectChange}
        aria-label="Number of rows per page"
      >
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <label htmlFor="rows-per-page">entries</label>
    </div>
  );
};

export default Selector;

