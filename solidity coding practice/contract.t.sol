// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    // uint8 can hold up to 255
    uint8 public a = 100;

    // uint16 can hold up to 65,535
    uint16 public b = 500;

    // We add a and b together and store them in a uint256
    // Solidity 0.8+ automatically handles type casting for simple addition like this
    uint256 public sum = a + b;
}