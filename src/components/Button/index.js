import styles from './styles.scss'

const Button = ({ children, ...props }) =>
  <button {...props} className={styles.btn}>{children}</button>

export default Button;
