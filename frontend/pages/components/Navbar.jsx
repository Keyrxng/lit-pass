import React from 'react'
import styles from '../../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Navbar() {
  return (
    <header className={styles.header_container}>
      <nav className={styles.navbar}>
        <a href="https://alchemy.com/?a=create-web3-dapp" target={'_blank'}>
          <img className={styles.alchemy_logo} src="/alchemy_logo.svg"></img>
        </a>
        <ConnectButton></ConnectButton>
      </nav>
    </header>
  )
}

export default Navbar
