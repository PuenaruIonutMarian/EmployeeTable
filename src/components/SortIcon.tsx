/**
 * Props for the SortIcon component.
 * @typedef {Object} SortIconProps
 * @property {boolean} isSorted - Indicates whether the column is currently sorted.
 * @property {boolean} isSortedDesc - Indicates whether the column is sorted in descending order.
 */
interface SortIconProps {
  isSorted: boolean;
  isSortedDesc: boolean;
}

/**
 * SortIcon is a React component that displays a sorting indicator (arrows) based on the current sort state.
 * It shows an up arrow for ascending order and a down arrow for descending order, with appropriate styling applied
 * when the column is sorted.
 *
 * @param {SortIconProps} props - The props for the component.
 * @param {boolean} props.isSorted - Indicates whether the column is currently sorted.
 * @param {boolean} props.isSortedDesc - Indicates whether the column is sorted in descending order.
 * @returns {JSX.Element} The JSX for the SortIcon component.
 */
const SortIcon: React.FC<SortIconProps> = ({ isSorted, isSortedDesc }) => {
  const sortClass = isSorted ? (isSortedDesc ? 'sorted-desc' : 'sorted-asc') : '';

  return (
    <span className={`sort-icon ${sortClass}`} data-testid="sort-icon">
      <span className="up-arrow" data-testid="up-arrow">&#9650;</span>
      <span className="down-arrow" data-testid="down-arrow">&#9660;</span>
    </span>
  );
};

export default SortIcon;