const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

class Robot {
    constructor() {
        this.x = null;
        this.y = null;
        this.facing = null;
        this.isPlaced = false;
    }

    place(x, y, facing) {
        if (!DIRECTIONS.includes(facing)) {
            return false;
        }
        
        this.x = x;
        this.y = y;
        this.facing = facing;
        this.isPlaced = true;
        return true;
    }

    move() {
        if (!this.isPlaced) return false;

        const newPosition = { x: this.x, y: this.y };

        switch (this.facing) {
            case 'NORTH':
                newPosition.y += 1;
                break;
            case 'SOUTH':
                newPosition.y -= 1;
                break;
            case 'EAST':
                newPosition.x += 1;
                break;
            case 'WEST':
                newPosition.x -= 1;
                break;
        }

        return newPosition;
    }

    rotate(direction) {
        if (!this.isPlaced) return false;

        const currentIndex = DIRECTIONS.indexOf(this.facing);
        if (direction === 'LEFT') {
            this.facing = DIRECTIONS[(currentIndex + 3) % 4];
        } else if (direction === 'RIGHT') {
            this.facing = DIRECTIONS[(currentIndex + 1) % 4];
        }
        return true;
    }

    getPosition() {
        if (!this.isPlaced) return null;
        return {
            x: this.x,
            y: this.y,
            facing: this.facing
        };
    }
}

module.exports = Robot; 