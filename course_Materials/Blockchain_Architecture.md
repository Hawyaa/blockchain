# Blockchain Architecture & Data Integrity

## 1. Network Topology: Peer-to-Peer (P2P)
Unlike traditional Web2 databases that rely on a **Centralized Server**, a blockchain is **Distributed**.
- **Nodes:** Every computer in the network is a "peer."
- **No Supernode:** There is no central administrator; every node maintains its own copy of the ledger.

## 2. The Genesis Block
- The first block in the chain (Index 0).
- It has no "Previous Hash" (often represented as "0").

## 3. Data Integrity & The "Trickle-Down" Effect
Blockchain security relies on a cryptographic link:
`f(Index + Previous Hash + Timestamp + Data + Nonce) = Current Block Hash`

If a malicious actor (Mallory) changes a single transaction in an old block:
1. The **Hash** of that block changes immediately.
2. The next block's **Previous Hash** pointer becomes invalid.
3. The entire chain from that point forward "breaks."
4. To fix it, the attacker would have to re-mine every subsequent block faster than the rest of the network combined—which is computationally impossible.

## 4. Block Validation Requirements
For a node to accept a new block, it must pass four checks:
1. `Index` is exactly `Latest + 1`.
2. `Previous Hash` matches the `Latest Hash`.
3. `Hash` meets the network's `Difficulty` (leading zeros).
4. `Hash` is mathematically correct based on the data.