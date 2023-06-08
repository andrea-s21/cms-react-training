import styles from '../Details/Details.module.css'

export default function Details(props:{ title: string, issueNumber: number, creators: any }) {

  return (
    <div className={styles.detailsContainer}>
      <h3 className={styles.title} data-testid="title">{props.title}</h3>
      <p className={styles.issue} data-testid="issue"><span className={styles.heading}>Issue:</span>{props.issueNumber}</p>
      <p className={styles.heading}>Published: </p>
      <h3 className={styles.published} data-testid="published">August 31, 2022</h3>
      <h3 className={styles.heading}>Creators:</h3>
      <div className={styles.creators} data-testid="creators">
        <p key={props.creators}>{props.creators}</p>
      </div>         
    </div>
  );
}