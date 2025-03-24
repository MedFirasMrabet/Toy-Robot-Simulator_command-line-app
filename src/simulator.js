const Robot = require('./robot');
const Table = require('./table');

class Simulator {
    constructor() {
        this.table = new Table();
        this.robot = new Robot();
    }

    executeCommand(command) {
        const parts = command.trim().toUpperCase().split(' ');
        
        switch (parts[0]) {
            case 'PLACE':
                return this.handlePlace(parts[1]);
            case 'MOVE':
                return this.handleMove();
            case 'LEFT':
            case 'RIGHT':
                return this.handleRotate(parts[0]);
            case 'REPORT':
                return this.handleReport();
            default:
                return false;
        }
    }

    handlePlace(args) {
        if (!args) return false;
        
        const [x, y, facing] = args.split(',');
        const newX = parseInt(x);
        const newY = parseInt(y);

        if (!this.table.isValidPosition(newX, newY)) {
            return false;
        }

        return this.robot.place(newX, newY, facing);
    }

    handleMove() {
        const newPosition = this.robot.move();
        if (!newPosition) return false;

        if (this.table.isValidPosition(newPosition.x, newPosition.y)) {
            this.robot.x = newPosition.x;
            this.robot.y = newPosition.y;
            return true;
        }
        return false;
    }

    handleRotate(direction) {
        return this.robot.rotate(direction);
    }

    handleReport() {
        const position = this.robot.getPosition();
        if (!position) return false;
        
        console.log(`${position.x},${position.y},${position.facing}`);
        return true;
    }
}

module.exports = Simulator; 