const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block("Genesis Block")];
    }

    addBlock(newBlock) {
        const lastBlock = this.chain[this.chain.length - 1];
        newBlock.previousHash = lastBlock.toHash();
        this.chain.push(newBlock);
    }

    // New validation function
    isValid() {
        // Start at the second block (index 1) because the Genesis block 
        // has no previous block to check against.
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Check if the current block's link matches the actual hash of the predecessor
            // Remember to use .toString() as per the hint!
            if (currentBlock.previousHash.toString() !== previousBlock.toHash().toString()) {
                return false; // The chain has been tampered with!
            }
        }

        // If the loop finishes without returning false, the chain is valid.
        return true;
    }
}

module.exports = Blockchain;