import { formatDate } from '../../shared/utils/index';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    test('formats date to ISO string', () => {
      const testDate = new Date('2025-09-02T12:00:00.000Z');
      const result = formatDate(testDate);
      expect(result).toBe('2025-09-02T12:00:00.000Z');
    });

    test('handles current date', () => {
      const testDate = new Date();
      const result = formatDate(testDate);
      expect(result).toBe(testDate.toISOString());
    });

    test('returns valid ISO string format', () => {
      const testDate = new Date('2023-12-25T09:30:45.123Z');
      const result = formatDate(testDate);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    });
  });
});
