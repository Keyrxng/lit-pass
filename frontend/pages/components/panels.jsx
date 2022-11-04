import styles from '../../styles/Panel.module.css'
export const Panel = () => {
  return (
    <div className={styles.panel_container}>
      <div className={styles.panel}>
        <div className={styles.box}>
          <h2>Quickstart</h2>
          <p>
            Kickstart your web3 project in 1 minute with create-web3-dapp. Learn
            how to create what you exactly need with the kickstart guide.
          </p>
          <div className={styles.button_container}>
            <a
              className={styles.button}
              target="_blank"
              href="https://docs.alchemy.com/"
            >
              Let's Go
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
