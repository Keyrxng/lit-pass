import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Panel } from './components/panels'
import { Section } from './layout/section'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <Section>
          <Panel></Panel>
        </Section>
      </main>
    </div>
  )
}
