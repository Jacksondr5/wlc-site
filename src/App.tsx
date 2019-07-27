import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import NewChallengeForm from './components/NewChallengeForm';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { CssBaseline, Container, createMuiTheme } from '@material-ui/core';

const App: React.FC = () => {
  const theme = createMuiTheme({
    spacing: 2
  });
  // const isiOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //TODO: Consider using a maxWidth on the container to simplify development
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <ResponsiveDrawer>
          <NewChallengeForm />
        </ResponsiveDrawer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
