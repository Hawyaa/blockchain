# Proof of Work (PoW) & Consensus

## What is Consensus?
Consensus is the process by which a decentralized network agrees on a single "source of truth" (account balances and transaction order). 
- **Nakamoto Consensus:** The "longest" chain (the one with the most cumulative work) is accepted as the valid chain.

## The Mining Algorithm (The "Work")
To add a block, a miner must find a hash that is lower than the **Target Difficulty**.
1. **Prepare Data:** Combine the previous block header + new transactions.
2. **Add a Nonce:** Start with `nonce = 0`.
3. **Hash:** Use SHA-256 (Bitcoin) or Keccak-256 (Ethereum Classic).
4. **Compare:** If `hash < target_difficulty`, the block is valid!
5. **Iterate:** If not, increment the `nonce` and repeat.



## Key Security Features
- **Immutability:** Changing a past block would require re-doing the work for all subsequent blocks.
- **Double-Spend Protection:** Nodes will only accept a transaction if it hasn't been spent in the current chain.
- **Economic Incentive:** Miners are rewarded with cryptocurrency, incentivizing them to follow the rules and secure the network.