import * as React from 'react';

export function useCustomHook() {
  const [state, setState] = React.useState<any>(null);
  // ...custom logic...
  return [state, setState] as const;
}
