import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);