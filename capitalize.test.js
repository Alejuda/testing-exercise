const capitalize = require('./capitalize');

describe('capitalize', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('this is a sentence')).toBe('This is a sentence');
      expect(capitalize('HELLO')).toBe('Hello');
    });
  });