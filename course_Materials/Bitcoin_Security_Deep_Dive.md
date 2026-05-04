# Bitcoin Network: Security and Header Mechanics

## 1. The 51% Attack Reality
A 51% attack occurs when a group of miners controls the majority of the network's hashing power. 
- **Capabilities:** They can perform "Double-Spends" (reversing their own transactions) or prevent others from getting confirmations.
- **Limitations:** They **cannot** steal coins they don't own, change the supply of Bitcoin, or rewrite history effectively without massive, sustained cost.
- **Economic Disincentive:** For a network as large as Bitcoin, the cost of the hardware and electricity to sustain a 51% attack is usually higher than the potential profit from the attack.

## 2. The 32-bit Nonce Limitation
The `nonce` field in a Bitcoin block header is only **32 bits** (max value: ~4.29 billion). 
- **The Problem:** Modern ASIC miners can hash billions of times per second, meaning they "exhaust" the nonce in less than a second.
- **The Solution:** Miners use "Extra Nonces" by modifying the **Timestamp** or the **Coinbase Transaction** (the transaction that pays the miner) to reset the search space and keep mining without waiting for a new block.

## 3. Anatomy of a Block Header
Every block hash is derived from:
1. **Version:** Software tracking.
2. **Prev Hash:** The link to the past.
3. **Merkle Root:** A summary of all transactions.
4. **Timestamp:** When it was mined.
5. **Target:** The difficulty level.
6. **Nonce:** The "work" variable.