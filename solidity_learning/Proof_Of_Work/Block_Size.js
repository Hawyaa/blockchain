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
        id: height,
        transactions: [] // Create the transactions array
    };

    // 1. Pull transactions off the mempool up to MAX_TRANSACTIONS
    while (newBlock.transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        // .shift() removes the first element from mempool and returns it
        const transaction = mempool.shift();
        newBlock.transactions.push(transaction);
    }

    // 2. Stringify the block (including the new transactions array!)
    const blockString = JSON.stringify(newBlock);

    // 3. Hash the block
    const blockHash = SHA256(blockString);
    newBlock.hash = blockHash;

    // 4. Push the block to the chain
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