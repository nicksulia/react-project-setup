import * as React from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExampleDataDisplay } from '../shared/components';
import { componentVariants, cn, layouts, typography } from '@shared/utils/tailwind';

const AboutPage: React.FC = () => {
  const techStack = [
    { name: 'React 18.3.1 with TypeScript 5.5.4', category: 'Frontend' },
    { name: 'Redux Toolkit for state management', category: 'State' },
    { name: 'RTK Query for data fetching', category: 'Data' },
    { name: 'Material-UI components', category: 'UI' },
    { name: 'TailwindCSS for styling', category: 'Styling' },
    { name: 'Vite for fast development', category: 'Build' },
    { name: 'Jest and React Testing Library', category: 'Testing' },
  ];

  return (
    <>
      {/* Hero Section with TailwindCSS */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-info-50 py-16">
        <div className={layouts.container}>
          <div className="text-center">
            <h1 className={cn(typography.h1, 'mb-6')}>
              About This Project
            </h1>
            <p className={cn(typography.lead, 'max-w-3xl mx-auto')}>
              This application demonstrates modern React development with enterprise-grade 
              architecture, combining the power of Material-UI and TailwindCSS for flexible, 
              maintainable styling solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-16 bg-white">
        <div className={layouts.container}>
          <div className="text-center mb-12">
            <h2 className={cn(typography.h2, 'mb-4')}>
              Technology Stack
            </h2>
            <p className={typography.body}>
              Built with modern tools and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-info-100 rounded-bl-3xl"></div>
                <div className="relative">
                  <div className="mb-3">
                    <span className={cn(
                      componentVariants.badge.base,
                      componentVariants.badge.variants.primary
                    )}>
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className={cn(typography.h3, 'text-primary')}>
                Development Features
              </h3>
              <ul className="space-y-3">
                {[
                  'TypeScript for type safety',
                  'Hot module replacement with Vite',
                  'ESLint and Prettier for code quality',
                  'Comprehensive testing setup',
                  'Redux DevTools integration',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className={cn(typography.h3, 'text-secondary')}>
                UI & Styling
              </h3>
              <ul className="space-y-3">
                {[
                  'Material-UI component library',
                  'TailwindCSS utility classes',
                  'Custom theme integration',
                  'Responsive design patterns',
                  'Smooth animations and transitions',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-info rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RTK Query Demo Section */}
      <div className="py-16 bg-gray-50">
        <Container maxWidth="md">
          <div className="text-center mb-8">
            <h2 className={cn(typography.h2, 'mb-4')}>
              RTK Query Demonstration
            </h2>
            <p className={typography.body}>
              Real-time data fetching with caching and error handling
            </p>
          </div>
          <ExampleDataDisplay />
        </Container>
      </div>

      {/* Navigation Section */}
      <div className="py-16 bg-white">
        <div className={layouts.container}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className={cn(
                  componentVariants.button.base,
                  componentVariants.button.variants.outline,
                  componentVariants.button.sizes.lg
                )}
              >
                ← Back to Home
              </Link>
              <Button 
                variant="contained" 
                component={Link} 
                to="/" 
                size="large"
                sx={{ ml: { sm: 2 } }}
              >
                Explore Components
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
