const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    // 1. Hash the message first (just like in the previous labs)
    const messageHash = hashMessage(message);

    // 2. Recover the public key using the hash, signature, and recovery bit
    // This is the magic step that authenticates the user
    return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

module.exports = recoverKey;