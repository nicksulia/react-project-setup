import React, { useState } from 'react';
import { Card, Button, Typography, Alert, Badge, Loading } from '@shared/components/ui';
import { Flex, Grid } from '@shared/components/layout';
import { cn } from '@shared/utils/tailwind';

interface DashboardCardData {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  status: 'success' | 'warning' | 'error' | 'info';
}

interface ModernDashboardProps {
  data?: DashboardCardData[];
  isLoading?: boolean;
  className?: string;
}

/**
 * Modern Dashboard component showcasing MUI + TailwindCSS integration
 * Following SOLID principles:
 * - Single Responsibility: Dashboard data presentation
 * - Open/Closed: Extensible through props and styling
 * - Liskov Substitution: Props are compatible with parent interfaces
 * - Interface Segregation: Focused props interface
 * - Dependency Inversion: Depends on abstractions (components)
 * 
 * KISS: Simple, clear component structure
 * DRY: Reuses common UI components
 */
const ModernDashboard: React.FC<ModernDashboardProps> = ({
  data = [],
  isLoading = false,
  className,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const defaultData: DashboardCardData[] = [
    {
      id: '1',
      title: 'Total Users',
      value: '12,543',
      change: '+12.5%',
      trend: 'up',
      status: 'success',
    },
    {
      id: '2',
      title: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      trend: 'up',
      status: 'success',
    },
    {
      id: '3',
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      status: 'warning',
    },
    {
      id: '4',
      title: 'Active Sessions',
      value: '1,234',
      change: '+5.7%',
      trend: 'up',
      status: 'info',
    },
  ];

  const displayData = data.length > 0 ? data : defaultData;

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      default:
        return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      default:
        return 'text-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className={cn('p-8', className)}>
        <Loading size="lg" text="Loading dashboard..." />
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Header */}
      <Flex justify="between" align="center" className="mb-6">
        <div>
          <Typography variant="h2" className="mb-2">
            Dashboard Overview
          </Typography>
          <Typography variant="muted">
            Monitor your key metrics and performance indicators
          </Typography>
        </div>
        <Button
          variant="outline"
          onClick={handleRefresh}
          disabled={refreshing}
          className="min-w-[120px]"
        >
          {refreshing ? <Loading size="sm" /> : 'Refresh Data'}
        </Button>
      </Flex>

      {/* Alert Banner */}
      <Alert variant="info" className="mb-6">
        <Flex align="center" gap="sm">
          <span>📊</span>
          <div>
            <Typography variant="body2" className="font-semibold text-info-800">
              Live Data Feed Active
            </Typography>
            <Typography variant="caption" className="text-info-700">
              Data updates every 5 minutes. Last update: {new Date().toLocaleTimeString()}
            </Typography>
          </div>
        </Flex>
      </Alert>

      {/* Metrics Grid */}
      <Grid
        cols={1}
        responsive={{
          sm: 2,
          lg: 4,
        }}
        gap="md"
        className="mb-8"
      >
        {displayData.map((item) => (
          <Card
            key={item.id}
            variant="elevated"
            padding="md"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Flex direction="col" gap="sm">
              {/* Header */}
              <Flex justify="between" align="start">
                <Typography variant="body2" className="text-gray-600">
                  {item.title}
                </Typography>
                <Badge variant={item.status} size="sm" label={item.status} />
              </Flex>

              {/* Value */}
              <Typography variant="h3" className="font-bold">
                {item.value}
              </Typography>

              {/* Change */}
              <Flex align="center" gap="xs">
                <span className="text-lg">{getTrendIcon(item.trend)}</span>
                <Typography
                  variant="body2"
                  className={cn('font-semibold', getTrendColor(item.trend))}
                >
                  {item.change}
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  vs last month
                </Typography>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Grid>

      {/* Actions */}
      <Card variant="outlined" padding="lg">
        <Flex direction="col" gap="md">
          <Typography variant="h4" className="mb-2">
            Quick Actions
          </Typography>
          <Grid
            cols={1}
            responsive={{
              sm: 2,
              md: 3,
            }}
            gap="md"
          >
            <Button variant="primary" fullWidth>
              Generate Report
            </Button>
            <Button variant="outline" fullWidth>
              Export Data
            </Button>
            <Button variant="ghost" fullWidth>
              View Analytics
            </Button>
          </Grid>
        </Flex>
      </Card>
    </div>
  );
};

export default ModernDashboard;
