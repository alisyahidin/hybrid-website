import styles from './styles.scss'

const Container = ({ children, ...props }) =>
<div className={styles.btn} {...props}>{children}</div>

export default Container;
