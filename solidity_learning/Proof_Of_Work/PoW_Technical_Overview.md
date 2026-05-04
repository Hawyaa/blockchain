# Proof of Work: Security & Implementation Details

## 1. The Purpose of PoW
Proof of Work (PoW) acts as a **computational barrier**. Its original use case was to prevent email spam by making it "expensive" to send messages in bulk. In blockchain, it secures the network by making it prohibitively expensive to rewrite history.

## 2. Managing Difficulty
Difficulty is controlled by requiring the hash to start with a specific pattern (e.g., three '5's or leading zeros).
- **Harder Difficulty:** Requires more leading zeros.
- **Dynamic Adjustment:** Bitcoin adjusts difficulty every 2016 blocks to maintain a 10-minute block time.

## 3. The Nonce (Number used once)
The `nonce` is the variable appended to the block data. Since the transaction data itself shouldn't be changed, the nonce is the "dial" miners turn to generate new hashes until they find one that satisfies the network difficulty.

## 4. The 51% Attack
To "cheat" the system, an attacker would need more than 51% of the network's total hashing power. Even then, they can only attempt to double-spend their own coins or censor transactions—they cannot "steal" coins from other wallets because they don't have those private keys.