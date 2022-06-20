import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import TodoMain from "./pages/TodoMain";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache: new InMemoryCache(),
});

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container maxWidth="sm">{children}</Container>
    </>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <CssBaseline>
        <Layout>
          <TodoMain />
        </Layout>
      </CssBaseline>
    </ApolloProvider>
  );
}

export default App;
