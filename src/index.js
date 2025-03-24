#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const Simulator = require('./simulator');

const simulator = new Simulator();

function processInput(input) {
    simulator.executeCommand(input);
}

// Check if a file path is provided as an argument
if (process.argv[2]) {
    const filePath = process.argv[2];
    
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        fileContent.split('\n').forEach(line => {
            if (line.trim()) {
                processInput(line);
            }
        });
    } catch (error) {
        console.error('Error reading file:', error.message);
        process.exit(1);
    }
} else {
    // Read from stdin
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Enter command > '
    });

    rl.prompt();

    rl.on('line', (line) => {
        if (line.trim().toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        processInput(line);
        rl.prompt();
    });

    rl.on('close', () => {
        process.exit(0);
    });
} 