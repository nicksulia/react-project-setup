import * as React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useExample } from '../hooks/useExample';

interface ExampleComponentProps {
  id?: string;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({ id = '1' }) => {
  const { data, loading, fetchExample } = useExample();

  const handleFetch = () => {
    void fetchExample(id);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Example Feature Component
        </Typography>
        
        <Button 
          variant="contained" 
          onClick={handleFetch} 
          disabled={loading}
          sx={{ mb: 2 }}
        >
          {loading ? 'Loading...' : 'Fetch Example Data'}
        </Button>

        {data && (
          <div>
            <Typography variant="body1">
              <strong>ID:</strong> {data.id}
            </Typography>
            <Typography variant="body1">
              <strong>Name:</strong> {data.name}
            </Typography>
            {data.description && (
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
