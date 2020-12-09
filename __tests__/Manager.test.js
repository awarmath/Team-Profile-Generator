//add test for Manager
const Manager = require('../lib/Manager');
const { test, expect } = require('@jest/globals');

test('Can insert office number', () => {
    const testValue = 555-5555;
    const e = new Manager('Randi', 1, 'test@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('Can get office number from getOffice', () => {
    const testValue = 555-5555
    const e = new Manager('Randi', 1, 'test@gmail.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('getRole should return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Randi', 1, 'test@gmail.com', '555-5555');
    expect(e.getRole()).toBe(testValue);
});