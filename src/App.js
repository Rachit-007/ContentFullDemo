import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import HeaderBottom from "./components/header/headerBottom/HeaderBottom";
import Main from "./components/main/Main";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.contentful.com/content/v1/spaces/24vgq8c7vzl3",
    headers: {
      Authorization: "Bearer T0pOaVDAUj51SdfiY1Kb-QuQwq5tsnrZaAWY7wW77uY",
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <HeaderBottom />
          <Main />
          <Footer />
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
