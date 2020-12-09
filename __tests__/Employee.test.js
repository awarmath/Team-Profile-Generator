//add test for Employee
const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

test('Can setup new employee', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test('Can insert name for employee', () => {
    const name = "Andrew";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can insert employee id for employee', () => {
    const testValue = 1000;
    const e = new Employee('Andrew', testValue);
    expect(e.id).toBe(testValue);
});

test('Can insert employee email for employee', () => {
    const testValue = 'test@gmail.com';
    const e = new Employee('Randi', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name from getName()', () => {
    const testValue = 'Andrew';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Can get employee id from getId', () => {
    const testValue = 1000;
    const e = new Employee('Randi', testValue);
    expect(e.getId()).toBe(testValue);
});

test('Can get employee email from getEmail', () => {
    const testValue = 'test@gmail.com';
    const e = new Employee('Randi', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return Employee', () => {
    const testValue = "Employee";
    const e = new Employee("Andrew", 1, "test@gmail.com");
    expect(e.getRole()).toBe(testValue);
  });
