import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePageClick,
  currentPage,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
