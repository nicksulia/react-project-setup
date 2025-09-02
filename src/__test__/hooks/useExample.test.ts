import { renderHook, act } from '@testing-library/react';
import { useExample } from '../../features/example/hooks/useExample';

describe('useExample Hook', () => {
  test('initializes with null data and false loading', () => {
    const { result } = renderHook(() => useExample());
    
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(typeof result.current.fetchExample).toBe('function');
  });

  test('fetchExample sets loading to true and then false', () => {
    const { result } = renderHook(() => useExample());
    
    act(() => {
      result.current.fetchExample('123');
    });
    
    // After synchronous execution, loading should be false and data should be set
    expect(result.current.loading).toBe(false);
    expect(result.current.data).not.toBeNull();
  });

  test('fetchExample sets correct data', () => {
    const { result } = renderHook(() => useExample());
    
    act(() => {
      result.current.fetchExample('test-id');
    });
    
    expect(result.current.data).toEqual({
      id: 'test-id',
      name: 'Example test-id',
      description: 'This is an example item',
    });
  });

  test('fetchExample can be called multiple times with different ids', () => {
    const { result } = renderHook(() => useExample());
    
    act(() => {
      result.current.fetchExample('first');
    });
    
    expect(result.current.data?.id).toBe('first');
    
    act(() => {
      result.current.fetchExample('second');
    });
    
    expect(result.current.data?.id).toBe('second');
    expect(result.current.data?.name).toBe('Example second');
  });
});
