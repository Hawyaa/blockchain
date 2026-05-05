// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    // a is positive, within the int8 range (-128 to 127)
    int8 public a = 50;

    // b is negative, within the int8 range
    int8 public b = -60;

    // The difference is calculated by subtracting the negative from the positive.
    // 50 - (-60) = 110.
    // We store it in an int16 to be safe.
    int16 public difference = a - b;
}