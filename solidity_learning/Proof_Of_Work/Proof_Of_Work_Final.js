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
        transactions: [],
        nonce: 0 // Initialize nonce at 0
    };

    // 1. Fill the block with transactions (same as before)
    while (newBlock.transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        newBlock.transactions.push(mempool.shift());
    }

    // 2. The Mining Loop
    let hash;
    while (true) {
        // Stringify the current state of the block (including the current nonce)
        const blockString = JSON.stringify(newBlock);
        hash = SHA256(blockString);

        // Convert the hash to a BigInt for comparison
        const hashInt = BigInt(`0x${hash}`);

        // Check if the hash is less than the target difficulty
        if (hashInt < TARGET_DIFFICULTY) {
            break; // Puzzle solved!
        }

        // If not, increment the nonce and try again
        newBlock.nonce++;
    }

    // 3. Set the final valid hash and push to the chain
    newBlock.hash = hash;
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