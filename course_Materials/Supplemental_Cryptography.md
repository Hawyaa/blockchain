# Supplemental Research: Digital Signatures & Algorithms

## ECDSA & Bitcoin
- **Curve:** Bitcoin uses the `secp256k1` curve. It is preferred because its parameters are less "random," reducing the likelihood of hidden backdoors.
- **Base58 Encoding:** Bitcoin addresses use Base58 to prevent human error by removing look-alike characters (e.g., `0`, `O`, `I`, `l`).
- **Ethereum vs. Bitcoin:** Ethereum addresses are the last 20 bytes of the Keccak-256 hash of the public key, whereas Bitcoin includes a checksum and Base58 encoding.

## Diffie-Hellman Key Exchange
- **Purpose:** Allows two parties to create a shared secret over an insecure channel.
- **Hybrid System:** It uses **Asymmetric** cryptography for the initial "handshake" and **Symmetric** cryptography for the actual message passing (for speed).
- **Usage:** This is the foundation of the TLS handshake used in HTTPS.

## RSA (Rivest–Shamir–Adleman)
- Based on the mathematical difficulty of factoring large prime numbers.
- While still widely used, there are historical concerns regarding potential backdoors in certain RSA implementations.