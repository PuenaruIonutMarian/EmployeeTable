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
      <p>Showing <strong>{startEntry}</strong> to <strong>{endEntry}</strong> of <strong>{totalEntries}</strong> entries</p>
    </div>
  );
};

export default Compter;


