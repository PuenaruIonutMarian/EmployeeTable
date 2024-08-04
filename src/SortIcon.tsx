import React from 'react';

interface SortIconProps {
  isSorted: boolean;
  isSortedDesc: boolean;
}

const SortIcon: React.FC<SortIconProps> = ({ isSorted, isSortedDesc }) => {
  return (
    <span className="sort-icon">
      {isSorted ? (
        isSortedDesc ? (
          <span>&#9650;&#9660;</span> // Down arrow on top of up arrow
        ) : (
          <span>&#9660;&#9650;</span> // Up arrow on top of down arrow
        )
      ) : (
        <span>&#9650;&#9660;</span> // Default state
      )}
    </span>
  );
};

export default SortIcon;
