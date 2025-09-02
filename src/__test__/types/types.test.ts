import type { AuthResponse } from '../../shared/types/apiTypes';
import type { ExampleData, ExampleItem } from '../../app/api/example-api';

describe('Type Definitions', () => {
  test('AuthResponse type structure', () => {
    const authResponse: AuthResponse = {
      token: 'test-token',
      user: {
        id: 'user-123',
        username: 'testuser'
      }
    };

    expect(authResponse.token).toBe('test-token');
    expect(authResponse.user.id).toBe('user-123');
    expect(authResponse.user.username).toBe('testuser');
  });

  test('ExampleData type structure', () => {
    const exampleData: ExampleData = {
      id: 1,
      title: 'Test Title',
      description: 'Test Description',
      items: [],
      metadata: {
        createdAt: '2025-09-02T00:00:00Z',
        version: '1.0.0'
      }
    };

    expect(exampleData.id).toBe(1);
    expect(exampleData.title).toBe('Test Title');
    expect(exampleData.description).toBe('Test Description');
    expect(Array.isArray(exampleData.items)).toBe(true);
    expect(exampleData.metadata.version).toBe('1.0.0');
  });

  test('ExampleItem type structure', () => {
    const exampleItem: ExampleItem = {
      id: 1,
      name: 'Test Item',
      value: 'Test Value'
    };

    expect(exampleItem.id).toBe(1);
    expect(exampleItem.name).toBe('Test Item');
    expect(exampleItem.value).toBe('Test Value');
  });
});
