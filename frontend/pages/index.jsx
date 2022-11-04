import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Panel } from './components/panels'
import { Section } from './layout/section'

export default function Home() {
  return (
    <div>
      <header className={styles.header_container}>
        <nav className={styles.navbar}>
          <a href="https://alchemy.com/?a=create-web3-dapp" target={'_blank'}>
            <img className={styles.alchemy_logo} src="/alchemy_logo.svg"></img>
          </a>
          <ConnectButton></ConnectButton>
        </nav>
      </header>
      <main className={styles.main}>
        <Section>
          <Panel></Panel>
        </Section>
      </main>
      // The above content can be deleted
    </div>
  )
}
