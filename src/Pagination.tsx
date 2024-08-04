
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className='pagination'>
      <button
        className="button-backward"
        onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <div className="pages">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <a
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => handlePageClick(page)}
            style={{ cursor: 'pointer', margin: '0 5px' }}
          >
            {page}
          </a>
        ))}
      </div>
      <button
        className="button-forward"
        onClick={() => handlePageClick(currentPage < totalPages ? currentPage + 1 : totalPages)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
