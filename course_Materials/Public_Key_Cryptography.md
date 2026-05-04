# Study Notes: Public Key Cryptography

## Key Concepts
- **Symmetric Encryption:** Both parties use the same secret key. (Old fashioned/Military style).
- **Asymmetric Encryption (Public Key):** Uses a pair of keys (Public and Private).
- **Whitfield Diffie (1976):** Proposed the concept of public keys.

## Algorithms
- **RSA:** Based on the difficulty of factoring large prime numbers.
- **ECDSA (Elliptic Curve Digital Signature Algorithm):** 
  - Provides high security with smaller key sizes.
  - Used by **Bitcoin** (specifically the `secp256k1` curve).

## Digital Signatures
- A message encrypted with a **Private Key** can be verified by a **Public Key**, proving the sender's identity beyond doubt.