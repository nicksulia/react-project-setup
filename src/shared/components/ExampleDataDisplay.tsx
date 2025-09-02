import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Card, Button, Typography, Alert, Badge, Loading } from '@shared/components/ui';
import { Flex } from '@shared/components/layout';
import { useGetExampleDataQuery } from '../../app/api/example-api';

const ExampleDataDisplay: React.FC = () => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetExampleDataQuery();

  const handleRefresh = () => {
    refetch();
  };

  return (
    <Card variant="elevated" padding="md" className="max-w-2xl mx-auto my-4">
      <Flex justify="between" align="center" className="mb-4">
        <Typography variant="h5">
          RTK Query Example
        </Typography>
        <Badge
          label={isLoading ? 'Loading' : isFetching ? 'Refreshing' : 'Ready'}
          variant={isLoading || isFetching ? 'warning' : 'success'}
          size="sm"
        />
      </Flex>

      <Typography variant="body2" className="text-gray-600 mb-4">
        Fetching data from: <code className="bg-gray-100 px-1 rounded">/poc/example.json</code>
      </Typography>

      {isLoading && (
        <div className="flex justify-center py-8">
          <Loading size="md" text="Loading example data..." />
        </div>
      )}

      {error && (
        <Alert variant="error" className="mb-4">
          <Typography variant="body2" className="font-semibold mb-2">
            Failed to fetch data from the API endpoint.
          </Typography>
          <Typography variant="caption" className="font-mono">
            {JSON.stringify(error, null, 2)}
          </Typography>
        </Alert>
      )}

      {data && (
        <div className="space-y-4">
          <div>
            <Typography variant="h6" className="mb-2">
              {data.title}
            </Typography>
            
            <Typography variant="body2" className="text-gray-600 mb-4">
              {data.description}
            </Typography>
          </div>

          <Divider />

          <div>
            <Typography variant="h6" className="mb-3">
              Items ({data.items.length}):
            </Typography>
            
            <List dense>
              {data.items.map((item) => (
                <ListItem key={item.id} divider>
                  <ListItemText
                    primary={`${item.name}`}
                    secondary={`Value: ${item.value}`}
                  />
                </ListItem>
              ))}
            </List>
          </div>

          <Divider />

          <Flex wrap gap="sm" className="pt-2">
            <Badge
              label={`ID: ${data.id}`}
              variant="default"
              size="sm"
            />
            <Badge
              label={`Version: ${data.metadata.version}`}
              variant="info"
              size="sm"
            />
            <Badge
              label={`Created: ${new Date(data.metadata.createdAt).toLocaleDateString()}`}
              variant="secondary"
              size="sm"
            />
          </Flex>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
        <Button
          onClick={handleRefresh}
          disabled={isLoading || isFetching}
          size="sm"
          variant="outline"
          className="w-full sm:w-auto"
        >
          {isFetching ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </div>
    </Card>
  );
};

export default ExampleDataDisplay;
