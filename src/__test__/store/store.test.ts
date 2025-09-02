import { store } from '../../app/store/store';
import { exampleApi } from '../../app/api/example-api';

describe('Store Configuration', () => {
  test('store is properly configured', () => {
    expect(store).toBeDefined();
    expect(typeof store.dispatch).toBe('function');
    expect(typeof store.getState).toBe('function');
    expect(typeof store.subscribe).toBe('function');
  });

  test('store has correct initial state structure', () => {
    const state = store.getState();
    expect(state).toBeDefined();
    expect(state[exampleApi.reducerPath]).toBeDefined();
  });

  test('store can dispatch actions', () => {
    expect(() => {
      store.dispatch({ type: 'TEST_ACTION' });
    }).not.toThrow();
  });

  test('store state is an object', () => {
    const state = store.getState();
    expect(typeof state).toBe('object');
    expect(state).not.toBeNull();
  });
});
