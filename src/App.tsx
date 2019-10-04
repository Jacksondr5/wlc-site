import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import NewChallengeForm from "./components/NewChallengeForm";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { CssBaseline, Container, createMuiTheme } from "@material-ui/core";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const App: React.FC = () => {
  const theme = createMuiTheme({
    spacing: 2
  });

  const client = new ApolloClient({ uri: "http://localhost:4000" });
  // const isiOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //TODO: Consider using a maxWidth on the container to simplify development
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <ResponsiveDrawer>
            <NewChallengeForm />
          </ResponsiveDrawer>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
