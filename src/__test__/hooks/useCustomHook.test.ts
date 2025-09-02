import { renderHook, act } from '@testing-library/react';
import { useCustomHook } from '../../shared/hooks/useCustomHook';

describe('useCustomHook', () => {
  test('initializes with null state', () => {
    const { result } = renderHook(() => useCustomHook());
    const [state] = result.current;
    expect(state).toBeNull();
  });

  test('setState function updates the state', () => {
    const { result } = renderHook(() => useCustomHook());
    const [, setState] = result.current;
    
    act(() => {
      setState('new value');
    });
    
    const [newState] = result.current;
    expect(newState).toBe('new value');
  });

  test('returns array with state and setState function', () => {
    const { result } = renderHook(() => useCustomHook());
    const hookResult = result.current;
    
    expect(Array.isArray(hookResult)).toBe(true);
    expect(hookResult).toHaveLength(2);
    expect(typeof hookResult[1]).toBe('function');
  });
});
