import React from 'react';

type CompterProps = {
  currentPage: number;
  rowsPerPage: number;
  totalEntries: number;
};

const Compter: React.FC<CompterProps> = ({ currentPage, rowsPerPage, totalEntries }) => {
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);

  return (
    <div className='compter'>
      <p>Showing {startEntry} to {endEntry} of {totalEntries} entries</p>
    </div>
  );
};

export default Compter;


