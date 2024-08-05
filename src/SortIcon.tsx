import React from 'react';


interface SortIconProps {
  isSorted: boolean;
  isSortedDesc: boolean;
}

const SortIcon: React.FC<SortIconProps> = ({ isSorted, isSortedDesc }) => {
  const sortClass = isSorted ? (isSortedDesc ? 'sorted-desc' : 'sorted-asc') : '';

  return (
    <span className={`sort-icon ${sortClass}`}>
      <span className="up-arrow">&#9650;</span>
      <span className="down-arrow">&#9660;</span>
    </span>
  );
};

export default SortIcon;
