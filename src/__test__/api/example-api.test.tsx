import { exampleApi } from '../../app/api/example-api';

describe('RTK Query Example API', () => {
  it('should have the correct API slice configuration', () => {
    // Check that the API slice has the correct configuration
    expect(exampleApi.reducerPath).toBe('exampleApi');
    expect(exampleApi.middleware).toBeDefined();
    expect(exampleApi.reducer).toBeDefined();
  });

  it('should have the getExampleData endpoint defined', () => {
    // Check that the endpoint is defined
    expect(exampleApi.endpoints.getExampleData).toBeDefined();
    expect(exampleApi.endpoints.getExampleData.select).toBeDefined();
  });

  it('should export the useGetExampleDataQuery hook', () => {
    // Import the hook and check it exists
    const { useGetExampleDataQuery } = require('../../app/api/example-api');
    expect(useGetExampleDataQuery).toBeDefined();
    expect(typeof useGetExampleDataQuery).toBe('function');
  });
});
