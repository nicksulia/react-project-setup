import '@testing-library/jest-dom';

// Mock fetch and related APIs for testing
const mockExampleData = {
  id: 1,
  title: "Example Data",
  description: "This is example data fetched using RTK Query",
  items: [
    { id: 1, name: "Item 1", value: "Value 1" },
    { id: 2, name: "Item 2", value: "Value 2" },
    { id: 3, name: "Item 3", value: "Value 3" }
  ],
  metadata: {
    createdAt: "2025-09-02T00:00:00Z",
    version: "1.0.0"
  }
};

// Mock Request constructor
global.Request = class MockRequest {
  constructor(public input: string | Request, public init?: RequestInit) {
    this.method = init?.method || 'GET';
    this.headers = new Headers(init?.headers);
    this.url = typeof input === 'string' ? input : input.url;
  }
  method: string;
  headers: Headers;
  url: string;
  clone() {
    return new MockRequest(this.input, this.init);
  }
} as any;

// Mock Headers constructor
global.Headers = class MockHeaders {
  private headers: Record<string, string> = {};
  
  constructor(init?: HeadersInit) {
    if (init) {
      if (Array.isArray(init)) {
        init.forEach(([key, value]) => this.headers[key.toLowerCase()] = value);
      } else if (init instanceof Headers) {
        // Handle Headers instance
      } else {
        Object.entries(init).forEach(([key, value]) => this.headers[key.toLowerCase()] = value);
      }
    }
  }
  
  get(name: string) {
    return this.headers[name.toLowerCase()] || null;
  }
  
  set(name: string, value: string) {
    this.headers[name.toLowerCase()] = value;
  }
  
  has(name: string) {
    return name.toLowerCase() in this.headers;
  }
  
  delete(name: string) {
    delete this.headers[name.toLowerCase()];
  }
  
  append(name: string, value: string) {
    const existing = this.headers[name.toLowerCase()];
    this.headers[name.toLowerCase()] = existing ? `${existing}, ${value}` : value;
  }
  
  forEach(callback: (value: string, key: string) => void) {
    Object.entries(this.headers).forEach(([key, value]) => callback(value, key));
  }
} as any;

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers({ 'content-type': 'application/json' }),
    json: () => Promise.resolve(mockExampleData),
    text: () => Promise.resolve(JSON.stringify(mockExampleData)),
    blob: () => Promise.resolve(new Blob([JSON.stringify(mockExampleData)])),
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    clone: function() {
      return {
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve(mockExampleData),
        text: () => Promise.resolve(JSON.stringify(mockExampleData)),
        blob: () => Promise.resolve(new Blob([JSON.stringify(mockExampleData)])),
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      };
    },
  })
) as jest.Mock;

// Mock import.meta
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_BASE_URL: 'http://localhost:3000/api',
        VITE_APP_TITLE: 'React Project Setup',
        VITE_NODE_ENV: 'test',
      },
    },
  },
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  root = null;
  rootMargin = '';
  thresholds = [];
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
};

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
