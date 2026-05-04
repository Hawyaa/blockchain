const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    // 1. Convert the string message into UTF-8 bytes
    const bytes = utf8ToBytes(message);

    // 2. Hash the bytes using keccak256
    const hash = keccak256(bytes);

    // 3. Return the hash (the library returns a Uint8Array)
    return hash;
}

module.exports = hashMessage;