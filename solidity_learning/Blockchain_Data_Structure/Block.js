const SHA256 = require('crypto-js/sha256');

class Block {
    // The test requires the block to store data passed in
    constructor(data) {
        this.data = data;
    }

    toHash() {
        // The test expects the hash of the actual data, not "Genesis"
        return SHA256(this.data).toString();
    }
}

module.exports = Block;