import * as React from 'react';
import { Link } from 'react-router-dom';
import { useGetExampleDataQuery } from '../app/api/example-api';
import { 
  TailwindExample, 
  SampleComponent, 
  ExampleDataDisplay,
  ModernDashboard,
  Container,
  Typography,
  Button,
  Card,
  Alert,
  Loading,
  Flex,
  Grid
} from '@shared/components';

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useGetExampleDataQuery();

  return (
    <Container maxWidth="xl" padding="lg">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Typography variant="h1" className="mb-4">
          Welcome to React TypeScript App
        </Typography>
        <Typography variant="lead" className="max-w-3xl mx-auto mb-8">
          This is a modern React TypeScript application with enterprise-grade architecture,
          showcasing the perfect integration of Material-UI and TailwindCSS.
        </Typography>
        <Flex justify="center" gap="md">
          <Link to="/about" className="inline-block">
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </Flex>
      </div>

      {/* Modern Dashboard Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <Typography variant="h2" className="mb-4">
            Modern Dashboard Components
          </Typography>
          <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
            Experience our new UI components that seamlessly blend Material-UI functionality 
            with TailwindCSS styling for beautiful, accessible interfaces.
          </Typography>
        </div>
        
        <ModernDashboard />
      </div>

      {/* RTK Query Example Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <Typography variant="h2" className="mb-4">
            RTK Query Integration
          </Typography>
          <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
            Demonstrates data fetching with RTK Query using our modernized components.
          </Typography>
        </div>

        {isLoading && (
          <div className="flex justify-center py-8">
            <Loading size="lg" text="Loading example data..." />
          </div>
        )}

        {error && (
          <Alert variant="error" className="mb-6 max-w-2xl mx-auto">
            <Typography variant="body2" className="font-semibold">
              Error loading data: {error.toString()}
            </Typography>
          </Alert>
        )}

        {data && (
          <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto">
            <Typography variant="h4" className="mb-4">
              {data.title}
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6">
              {data.description}
            </Typography>

            <div className="mb-6">
              <Typography variant="h5" className="mb-4">
                Items ({data.items.length}):
              </Typography>
              <Grid
                cols={1}
                responsive={{
                  sm: 2,
                  lg: 3,
                }}
                gap="md"
              >
                {data.items.map((item) => (
                  <Card key={item.id} variant="outlined" padding="md">
                    <Typography variant="h6" className="mb-2">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      Value: {item.value}
                    </Typography>
                  </Card>
                ))}
              </Grid>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Flex gap="sm" wrap>
                <Typography variant="caption" className="text-gray-500">
                  Version: {data.metadata.version}
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  Created: {new Date(data.metadata.createdAt).toLocaleDateString()}
                </Typography>
              </Flex>
            </div>
          </Card>
        )}
        
        <div className="mt-8">
          <ExampleDataDisplay />
        </div>
      </div>

      {/* TailwindCSS Examples Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <Typography variant="h2" className="mb-4">
            TailwindCSS Components
          </Typography>
          <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
            Explore interactive components built with TailwindCSS utilities.
          </Typography>
        </div>

        <div className="space-y-8">
          <TailwindExample title="Interactive TailwindCSS Component" />
          <SampleComponent />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
