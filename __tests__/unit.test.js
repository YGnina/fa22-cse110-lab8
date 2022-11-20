// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone numbers', () => {
    // TODO
    expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
    expect(functions.isPhoneNumber('123-111-1234')).toBe(true);
    expect(functions.isPhoneNumber('12')).toBe(false);
    expect(functions.isPhoneNumber('hi')).toBe(false);
  });

  test('Email', () => {
    // TODO
    expect(functions.isEmail('abc@ucsd.edu')).toBe(true);
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
    expect(functions.isEmail('abcucsdedu')).toBe(false);
    expect(functions.isEmail('123')).toBe(false);
  });

  test('Strong Password', () => {
    // TODO
    expect(functions.isStrongPassword('a123123')).toBe(true);
    expect(functions.isStrongPassword('aaaa')).toBe(true);
    expect(functions.isStrongPassword('123123')).toBe(false);
    expect(functions.isStrongPassword('a123$123')).toBe(false);

  });

  test('Date', () => {
    // TODO
    expect(functions.isDate('1/1/1111')).toBe(true);
    expect(functions.isDate('10/10/1111')).toBe(true);
    expect(functions.isDate('100/1/1111')).toBe(false);
    expect(functions.isDate('1/1/111a1')).toBe(false);
  });

  test('Hex Color', () => {
    // TODO
    expect(functions.isHexColor('#ee6fa8')).toBe(true);
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
    expect(functions.isHexColor('1/1/1111')).toBe(false);
    expect(functions.isHexColor('noidea')).toBe(false);
  });