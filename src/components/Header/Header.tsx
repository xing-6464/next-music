import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.icon}></span>
      <h1 className={styles.text}>Chicken Music</h1>
    </div>
  )
}
