import colors from '../../shared/colors';

describe('Colors', () => {
  test('exports white color', () => {
    expect(colors.white).toBe('#fff');
  });

  test('exports border color', () => {
    expect(colors.borderColor).toBe('#E4E7ED');
  });

  test('exports primary blue color', () => {
    expect(colors.colorPrimaryBlue).toBe('#409EFF');
  });

  test('exports background color', () => {
    expect(colors.colorBackground).toBe('#FAFAFA');
  });

  test('all colors are strings', () => {
    Object.values(colors).forEach(color => {
      expect(typeof color).toBe('string');
    });
  });

  test('all colors start with #', () => {
    Object.values(colors).forEach(color => {
      expect(color).toMatch(/^#/);
    });
  });
});
