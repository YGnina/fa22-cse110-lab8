// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone numbers true#1', () => {
    expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
  });

  test('Phone numbers true#2', () => {
    expect(functions.isPhoneNumber('123-111-1234')).toBe(true);
  });

  test('Phone numbers false#1', () => {
    expect(functions.isPhoneNumber('12')).toBe(false);
  });

  test('Phone numbers false#2', () => {
    expect(functions.isPhoneNumber('hi')).toBe(false);
  });


  test('Email true#1', () => {
    expect(functions.isEmail('abc@ucsd.edu')).toBe(true)
  });
  test('Email true#2', () => {
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
  });
  test('Email false#1', () => {
    expect(functions.isEmail('abcucsdedu')).toBe(false);
  });
  test('Email false#2', () => {
    expect(functions.isEmail('123')).toBe(false);
  });


  test('Strong Password true#1', () => {
    expect(functions.isStrongPassword('a123123')).toBe(true);
  });
  test('Strong Password true#2', () => {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
  });
  test('Strong Password false#1', () => {
    expect(functions.isStrongPassword('123123')).toBe(false);
  });
  test('Strong Password fale#2', () => {
    expect(functions.isStrongPassword('a123$123')).toBe(false);

  });

  test('Date true#1', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
  });
  test('Date true#2', () => {
    expect(functions.isDate('10/10/1111')).toBe(true);
  });
  test('Date false#1', () => {
    expect(functions.isDate('100/1/1111')).toBe(false);
  });
  test('Date false#2', () => {
    expect(functions.isDate('1/1/111a1')).toBe(false);
  });

  test('Hex Color true#1', () => {
    // TODO
    expect(functions.isHexColor('#ee6fa8')).toBe(true);
  });
  test('Hex Color true#2', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
  });
  test('Hex Color false#1', () => {
    expect(functions.isHexColor('1/1/1111')).toBe(false);
  });
  test('Hex Color false#2', () => {
    expect(functions.isHexColor('noidea')).toBe(false);
  });