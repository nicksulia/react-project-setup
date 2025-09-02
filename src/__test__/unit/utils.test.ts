import { formatDate } from '../../shared/utils/index';
import { useCustomHook } from '../../shared/hooks/useCustomHook';
import { renderHook, act } from '@testing-library/react';

describe('Utility and Hook Tests', () => {
  describe('formatDate function', () => {
    test('formats date correctly', () => {
      const testDate = new Date('2025-09-02T12:00:00.000Z');
      expect(formatDate(testDate)).toBe('2025-09-02T12:00:00.000Z');
    });

    test('handles different dates', () => {
      const testDate = new Date('2023-01-01T00:00:00.000Z');
      expect(formatDate(testDate)).toBe('2023-01-01T00:00:00.000Z');
    });
  });

  describe('useCustomHook', () => {
    test('initializes with correct state', () => {
      const { result } = renderHook(() => useCustomHook());
      const [state, setState] = result.current;
      
      expect(state).toBeNull();
      expect(typeof setState).toBe('function');
    });

    test('can update state', () => {
      const { result } = renderHook(() => useCustomHook());
      
      act(() => {
        const [, setState] = result.current;
        setState('test value');
      });
      
      const [newState] = result.current;
      expect(newState).toBe('test value');
    });
  });
});
