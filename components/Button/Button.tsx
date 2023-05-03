import styles from '../Button/Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
// import ReactDOM from 'react-dom'

// const element = <FontAwesomeIcon icon={faLightningBolt} />
// ReactDOM.render(element, document.body)

export default function Button() {
  return (
    <div className={styles.button}>
      <FontAwesomeIcon className={styles.buttonBolt} icon={faBoltLightning} />
      {/* <button className={styles.button} onClick={props.handleClick}>Get Comics</button> */}
    </div>
  );
}