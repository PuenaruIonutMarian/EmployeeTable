type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

 //Provides navigation controls for paginating through the data.
const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 4;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than or equal to maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show the first few pages, the last few pages, and the current page range
      if (currentPage <= maxPagesToShow - 1) {
        // Near the beginning
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
        pages.push( '...', totalPages);
      } else if (currentPage >= totalPages - maxPagesToShow + 2) {
        // Near the end
        pages.push(1, '...');
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1);
        pages.push('...', totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (page === '...') return;
    onPageChange(page as number);
  };

  return (
    <div className='pagination'>
<button 
  className="button-backward" 
  disabled={currentPage === 1} 
  onClick={() => onPageChange(currentPage - 1)}
  aria-label="Previous Page"
>
  &laquo;
</button>

<div className="pages">
  {generatePageNumbers().map((page, index) => (
    <a
      key={index}
      className={page === currentPage ? 'active' : ''}
      onClick={() => handlePageClick(page)}
      style={{ cursor: page === '...' ? 'default' : 'pointer', margin: '0 5px' }}
      aria-current={page === currentPage ? 'page' : undefined}
    >
      {page}
    </a>
  ))}
</div>

<button 
  className="button-forward" 
  disabled={currentPage === totalPages} 
  onClick={() => onPageChange(currentPage + 1)}
  aria-label="Next Page"
>
  &raquo;
</button>
    </div>
  );
};

export default Pagination;

