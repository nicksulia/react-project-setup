import React, { useState } from 'react';
import { tailwindUtilities } from '@styles/tailwind-theme';

interface TailwindExampleProps {
  title?: string;
}

const TailwindExample: React.FC<TailwindExampleProps> = ({ 
  title = "TailwindCSS Example Component" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-info text-white p-6 rounded-t-lg">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-blue-100 text-lg">
          Demonstrating TailwindCSS utilities and responsive design
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {['overview', 'features', 'examples'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Section */}
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        {activeTab === 'overview' && (
          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Cards */}
              {[
                { title: 'Responsive Design', icon: '📱', color: 'bg-blue-50 border-blue-200' },
                { title: 'Custom Themes', icon: '🎨', color: 'bg-purple-50 border-purple-200' },
                { title: 'Fast Performance', icon: '⚡', color: 'bg-yellow-50 border-yellow-200' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.color} border rounded-lg p-4 hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
            <div className="space-y-4">
              {[
                'Utility-first CSS framework',
                'Responsive design out of the box',
                'Custom color palette integration',
                'Smooth animations and transitions',
                'Optimized for production builds',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="animate-slide-up">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Examples</h3>
            <div className="space-y-6">
              {/* Button Examples */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Button Styles</h4>
                <div className="flex flex-wrap gap-3">
                  <button className={tailwindUtilities.button.primary}>
                    Primary Button
                  </button>
                  <button className={tailwindUtilities.button.secondary}>
                    Secondary Button
                  </button>
                  <button className={tailwindUtilities.button.outline}>
                    Outline Button
                  </button>
                  <button className="bg-success text-white px-4 py-2 rounded-md hover:bg-success-600 transition-colors duration-200 font-semibold">
                    Success Button
                  </button>
                </div>
              </div>

              {/* Form Example */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Form Elements</h4>
                <div className="max-w-md space-y-3">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={tailwindUtilities.input}
                  />
                  <textarea
                    placeholder="Enter your message"
                    rows={3}
                    className={tailwindUtilities.input}
                  />
                </div>
              </div>

              {/* Expandable Section */}
              <div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">
                    Expandable Section
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isExpanded && (
                  <div className="mt-3 p-4 bg-blue-50 rounded-lg animate-slide-up">
                    <p className="text-gray-700">
                      This is an expandable content section demonstrating conditional rendering
                      with smooth animations using TailwindCSS.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Built with TailwindCSS and React TypeScript
            </div>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                TailwindCSS
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindExample;
