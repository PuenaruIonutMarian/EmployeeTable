
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
          <button className="button-backward">&laquo;</button>
        <div className="pages">     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
        <button className="button-forward">&raquo;</button>
    </div>
  );
};

export default Pagination;
