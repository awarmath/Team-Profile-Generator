//add test for Intern
const Intern = require('../lib/Intern');
const { expect, test } = require('@jest/globals');

test('Can insert school', () => {
    const testValue = 'Vanderbilt';
    const e = new Intern('Randi', 1, 'test@gmail.com', testValue);
    expect(e.school).toBe(testValue);
});

test('Can get school from getSchool', () => {
    const testValue = "Vanderbilt";
    const e = new Intern('Randi', 1, 'testGmail.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getRole should return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Randi', 1, 'test@gmail.com', 'Vanderbilt');
    expect(e.getRole()).toBe(testValue);
});