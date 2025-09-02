import { useState } from 'react';
import type { ExampleData } from '../types';

export const useExample = () => {
  const [data, setData] = useState<ExampleData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchExample = (id: string) => {
    setLoading(true);
    try {
      // Mock API call
      const mockData: ExampleData = {
        id,
        name: `Example ${id}`,
        description: 'This is an example item',
      };
      setData(mockData);
    } catch (error) {
      console.error('Failed to fetch example:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    fetchExample,
  };
};
