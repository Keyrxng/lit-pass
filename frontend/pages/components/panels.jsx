import styles from '../../styles/Panel.module.css'
import { Input } from '@web3uikit/core'
import Lit from '../utils/litSetup'
import { useState } from 'react'

export const Panel = () => {
  const [encryptValue, setEncrypt] = useState('')
  const [decryptValue, setDecrypt] = useState('')
  const [symKey, setSymKey] = useState('')

  const lit = new Lit()

  function handleEncrypt(e) {
    setEncrypt(e.target.value)
  }

  function handleDecrypt(e) {
    setDecrypt(e.target.value)
  }

  async function doEncrypt() {
    let encryptedSymmetricKey = await lit.encryptText(encryptValue)
    console.log('enc', encryptedSymmetricKey)
    setSymKey(encryptedSymmetricKey)
  }

  async function doDecrypt() {
    await lit.decryptText(decryptValue, symKey)
  }

  return (
    <>
      <div className={styles.panel_container}>
        <div className={styles.panel}>
          <div className={styles.box}>
            <h2>Encryption</h2>
            <Input
              value={encryptValue}
              placeholder="enter phrase..."
              onChange={handleEncrypt}
            />
            <div className={styles.button_container}>
              <button className={styles.button} onClick={doEncrypt}>
                Encrypt
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.panel_container}>
        <div className={styles.panel}>
          <div className={styles.box}>
            <h2>Decryption</h2>
            <Input
              value={decryptValue}
              placeholder="enter phrase..."
              onChange={handleDecrypt}
            />
            <div className={styles.button_container}>
              <button className={styles.button} onClick={doDecrypt}>
                Decrypt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
