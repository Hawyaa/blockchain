const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // 1. Slice off the first byte (the format indicator)
    // .slice(1) gives us everything from index 1 to the end
    const restOfKey = publicKey.slice(1);

    // 2. Take the keccak hash of the rest of the public key
    const hash = keccak256(restOfKey);

    // 3. Return the last 20 bytes of the hash
    // We use .slice(-20) to grab the end of the array
    return hash.slice(-20);
}

module.exports = getAddress;