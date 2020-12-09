//add test for Engineer
const Engineer = require('../lib/Engineer');
const { test, expect } = require('@jest/globals');

test('Can insert Github account', () => {
    const testValue = "GitHub";
    const e = new Engineer('Randi', 1, 'test@gmail.com', testValue);
    expect(e.github).toBe(testValue);
});

test('Can get GitHub username from getGithub', () => {
    const testValue = "GitHub";
    const e = new Engineer('Randi', 1, 'test@gmail.com', testValue);
    expect(e.getGithub()).toBe(testValue);
});

test('getRole should return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Randi', 1, 'test@gmail.com', 'Github');
    expect(e.getRole()).toBe(testValue);
});