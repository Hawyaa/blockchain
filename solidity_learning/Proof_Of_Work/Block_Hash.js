const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const height = blocks.length;

    const newBlock = {
        id: height
    };

    // 1. Stringify the block object
    const blockString = JSON.stringify(newBlock);

    // 2. Take the SHA256 hash of the stringified block
    const blockHash = SHA256(blockString);

    // 3. Set the hash property on the block AFTER calculating it
    newBlock.hash = blockHash;

    blocks.push(newBlock);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};