/**
 * Props for the Selector component.
 * @typedef {Object} SelectorProps
 * @property {number} rowsPerPage - The current number of rows displayed per page.
 * @property {function(number): void} setRowsPerPage - Function to update the number of rows displayed per page.
 */
type SelectorProps = {
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
};

/**
 * Selector is a React component that allows users to select the number of rows displayed per page.
 * It provides a dropdown menu with options for the user to choose how many entries they want to see at a time.
 * 
 * @param {SelectorProps} props - The props for the component.
 * @param {number} props.rowsPerPage - The current number of rows displayed per page.
 * @param {function(number): void} props.setRowsPerPage - Function to update the number of rows displayed per page.
 * @returns {JSX.Element} The JSX for the Selector component.
 */
const Selector: React.FC<SelectorProps> = ({ rowsPerPage, setRowsPerPage }) => {
/**
 * Handles the change event for the select input, updating the number of rows per page.
 * 
 * @param {React.ChangeEvent<HTMLSelectElement>} e - The select change event.
 */
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

