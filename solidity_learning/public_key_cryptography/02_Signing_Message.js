const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

// FIXED: Using the private key that matches your test.js
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const messageHash = hashMessage(msg);

    // This returns the [signature, recoveryBit] array the test expects
    return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage;