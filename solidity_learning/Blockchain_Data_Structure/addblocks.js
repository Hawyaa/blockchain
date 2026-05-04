const Block = require('./Block');

class Blockchain {
    constructor() {
        // Create the Genesis Block and initialize the chain
        this.chain = [new Block("Genesis Block")];
    }

    /**
     * Adds a new block to the blockchain
     * @param {Object} block - An instance of the Block class
     */
    addBlock(block) {
        this.chain.push(block);
    }
}

module.exports = Blockchain;