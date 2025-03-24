const Robot = require('../src/robot');

describe('Robot', () => {
    let robot;

    beforeEach(() => {
        robot = new Robot();
    });

    test('should not be placed initially', () => {
        expect(robot.isPlaced).toBeFalsy();
    });

    test('should be placed correctly', () => {
        robot.place(0, 0, 'NORTH');
        expect(robot.isPlaced).toBeTruthy();
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.facing).toBe('NORTH');
    });

    test('should rotate left correctly', () => {
        robot.place(0, 0, 'NORTH');
        robot.rotate('LEFT');
        expect(robot.facing).toBe('WEST');
    });

    test('should rotate right correctly', () => {
        robot.place(0, 0, 'NORTH');
        robot.rotate('RIGHT');
        expect(robot.facing).toBe('EAST');
    });

    test('should calculate correct move position', () => {
        robot.place(0, 0, 'NORTH');
        const newPosition = robot.move();
        expect(newPosition).toEqual({ x: 0, y: 1 });
    });
}); 