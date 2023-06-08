import styles from '../Pagination/Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination(props: { comics: any, currentPage: number, onPageChange: any }) {
  const itemsPerPage = 15; // Adjust  items per page

  // Calculate the total number of pages based on the data length and items per page
  const totalPages = Math.ceil(props.comics.length / itemsPerPage);

  // Calculate the start and end index of the current page
  const startIndex = (props.currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(props.currentPage * itemsPerPage, props.comics.length);

  const goToPreviousPage = () => {
    if (props.currentPage > 1) {
      props.onPageChange(props.currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (props.currentPage < totalPages) {
      props.onPageChange(props.currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.buttonLeft} onClick={goToPreviousPage} disabled={props.currentPage === 1}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <p>
        {startIndex}-{endIndex} of {props.comics.length}
      </p>
      <button className={styles.buttonRight} onClick={goToNextPage} disabled={props.currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};
