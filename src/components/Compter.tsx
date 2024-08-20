/**
 * Props for the Compter component.
 * @typedef {Object} CompterProps
 * @property {number} currentPage - The current page number being viewed.
 * @property {number} rowsPerPage - The number of rows displayed per page.
 * @property {number} totalEntries - The total number of entries available.
 */
type CompterProps = {
  currentPage: number;
  rowsPerPage: number;
  totalEntries: number;
};

/**
 * Compter is a React component that displays the range of entries currently being viewed.
 * It shows which entries (from `startEntry` to `endEntry`) are visible out of the total number of entries (`totalEntries`).
 * 
 * @param {CompterProps} props - The props for the component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.rowsPerPage - The number of rows displayed per page.
 * @param {number} props.totalEntries - The total number of entries.
 * @returns {JSX.Element} The JSX for the Compter component.
 */

const Compter: React.FC<CompterProps> = ({ currentPage, rowsPerPage, totalEntries }) => {
  // Ensure values are within valid ranges
  const validCurrentPage = Math.max(currentPage, 1);
  const validRowsPerPage = Math.max(rowsPerPage, 1);
  const validTotalEntries = Math.max(totalEntries, 0);

  const start = (validCurrentPage - 1) * validRowsPerPage + 1;
  const end = Math.min(validCurrentPage * validRowsPerPage, validTotalEntries);

  return (
    <p>
      Showing {start} to {end} of {validTotalEntries} entries
    </p>
  );
};

export default Compter;


