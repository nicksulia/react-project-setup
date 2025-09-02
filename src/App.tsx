import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from '@app/store/store';
import muiTheme from '@styles/mui-theme';
import AppWithRouter from '@pages/index';
import ErrorBoundary from '@shared/components/ErrorBoundary';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ErrorBoundary>
          <AppWithRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
