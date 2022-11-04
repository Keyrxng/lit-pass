import styles from '../../styles/Section.module.css'
import Navbar from '../components/Navbar'

export const Section = ({ children }) => {
  return <div className={styles.section}>{children}</div>
}
