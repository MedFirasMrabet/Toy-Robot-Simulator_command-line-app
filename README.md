# Toy Robot Simulator

A command-line application that simulates a toy robot moving on a 5x5 square tabletop.

## Description

The application simulates a toy robot moving on a 5x5 square tabletop. The robot is prevented from falling off the table, and any commands that would cause it to fall are ignored.

### Valid Commands

- `PLACE X,Y,F`: Places the robot at position (X,Y) facing direction F (NORTH, SOUTH, EAST, or WEST)
- `MOVE`: Moves the robot one unit forward in its current direction
- `LEFT`: Rotates the robot 90 degrees left
- `RIGHT`: Rotates the robot 90 degrees right
- `REPORT`: Announces the current position and direction of the robot

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd toy-robot-simulator
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Running with Input File

You can run the simulator using a text file containing commands:

```bash
npm start input.txt
```

Example input.txt:
```
PLACE 0,0,NORTH
MOVE
REPORT
PLACE 0,0,NORTH
LEFT
REPORT
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```

### Interactive Mode

To run the simulator in interactive mode:

```bash
npm start
```

Then enter commands at the prompt. Type 'exit' to quit.

Example session:
```
Enter command > PLACE 0,0,NORTH
Enter command > MOVE
Enter command > REPORT
0,1,NORTH
Enter command > exit
```

### Running Tests

To run the test suite:

```bash
npm test
```

## Rules

1. The robot cannot fall off the table. Any move that would cause this is ignored.
2. All commands before a valid PLACE command are ignored.
3. The origin (0,0) is the SOUTH WEST corner of the table.
4. The table is 5x5 units.

## Project Structure

```
toy-robot-simulator/
├── src/
│   ├── index.js      # CLI entry point
│   ├── robot.js      # Robot class implementation
│   ├── simulator.js  # Command processing
│   └── table.js      # Table boundary validation
├── test/
│   └── robot.test.js # Unit tests
├── input.txt         # Sample input file
└── package.json
```

## Example Output

```
Enter command > PLACE 0,0,NORTH
Enter command > MOVE
Enter command > REPORT
0,1,NORTH
Enter command > PLACE 0,0,NORTH
Enter command > LEFT
Enter command > REPORT
0,0,WEST
Enter command > PLACE 1,2,EAST
Enter command > MOVE
Enter command > MOVE
Enter command > LEFT
Enter command > MOVE
Enter command > REPORT
3,3,NORTH
```

This README includes:
1. Project description and rules
2. Installation instructions
3. Usage examples for both file input and interactive mode
4. Project structure
5. Example commands and expected output
6. Test running instructions
