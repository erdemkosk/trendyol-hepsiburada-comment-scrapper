const FooLogic = require('../../../api/logic/foo');

describe('Foo Logic', () => {
  describe('generateRandomNumber', () => {
    it('should return with expected value', async () => {
      const maxValue = 5;
      const result = FooLogic.generateRandomNumber(maxValue);

      expect(typeof result).toBe('number');
      expect(result >= 0).toBeTruthy();
      expect(result).toBeLessThan(maxValue);
    });
  });
});
