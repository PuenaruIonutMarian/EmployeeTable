/**
 * Props for the Pagination component.
 * @typedef {Object} PaginationProps
 * @property {number} totalPages - The total number of pages available.
 * @property {number} currentPage - The current page number.
 * @property {function(number): void} onPageChange - Callback function to handle page changes. Receives the new page number as an argument.
 */
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};


/**
 * Pagination is a React component that provides navigation controls for paginated content.
 * It allows users to navigate between pages, displaying the current page, and providing buttons
 * to move to the previous or next page. The component also handles the display of ellipses ('...') 
 * when the total number of pages exceeds a specified limit.
 * 
 * @param {PaginationProps} props - The props for the component.
 * @param {number} props.totalPages - The total number of pages.
 * @param {number} props.currentPage - The currently active page number.
 * @param {function(number): void} props.onPageChange - Function to call when the page is changed.
 * @returns {JSX.Element} The JSX for the Pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
   /**
   * Generates an array of page numbers (and ellipses) to display in the pagination control.
   * 
   * @returns {Array<number|string>} An array of page numbers and/or ellipses to be rendered.
   */
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
        pages.push('...', totalPages);
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

   /**
   * Handles a click on a page number. If the page number is valid (not '...'), it calls the onPageChange callback.
   * 
   * @param {number|string} page - The page number or ellipsis ('...') that was clicked.
   */
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
          <button
            key={index}
            className={page === currentPage ? 'active' : ''}
            onClick={() => handlePageClick(page)}
            style={{ cursor: page === '...' ? 'default' : 'pointer', margin: '0 5px' }}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={page === '...' ? undefined : `Page ${page}`}
          >
            {page}
          </button>
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
