// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract { // Renamed from FoodStore to Contract
    // 1. Define the Enum
    enum Foods { 
        Pizza,    // 0
        Sushi,    // 1
        Tacos,    // 2
        Burgers   // 3
    }

    // 2. Declare public variables of the type 'Foods'
    // The test expects these exact variable names
    Foods public food1 = Foods.Pizza;
    Foods public food2 = Foods.Sushi;
    Foods public food3 = Foods.Tacos;
    Foods public food4 = Foods.Burgers;

    // Optional: Function to update food
    function setFood(Foods _newFood) public {
        food1 = _newFood;
    }
}