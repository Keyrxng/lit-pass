import LitJsSdk from '@lit-protocol/sdk-browser'

const client = new LitJsSdk.LitNodeClient()

class Lit {
  litNodeClient

  async connect() {
    await client.connect()
    this.litNodeClient = client
  }
}
