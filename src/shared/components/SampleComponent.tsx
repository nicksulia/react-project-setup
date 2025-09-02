import * as React from 'react';

const SampleComponent: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sample Component with TailwindCSS</h2>
      <p className="text-blue-100">
        This component demonstrates TailwindCSS styling with gradient background, 
        rounded corners, shadows, and responsive text.
      </p>
      <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold">
        Click Me
      </button>
    </div>
  );
};

export default SampleComponent;
