require("chai")
    .use(require("chai-as-promised"))
    .should()

const {  bsv, buildContractClass, Ripemd160, Sig, PubKey, signTx, toHex } = require("scryptlib")

const privateKey = bsv.PrivateKey.fromRandom("testnet")
const publicKey = privateKey.publicKey

