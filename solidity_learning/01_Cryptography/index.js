const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function findColor(hash) {
    // We convert the target hash to a Hex string once at the start
    const targetHashHex = toHex(hash);

    for (let i = 0; i < COLORS.length; i++) {
        const color = COLORS[i];
        
        // 1. Convert color to bytes
        const colorBytes = utf8ToBytes(color);
        
        // 2. Hash the bytes
        const colorHash = sha256(colorBytes);
        
        // 3. Convert our generated hash to Hex and compare
        if (toHex(colorHash) === targetHashHex) {
            return color; 
        }
    }
    // If we reach here, no color matched
}

module.exports = findColor;