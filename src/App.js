import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from './pages/Home';
import Race from './pages/Race';

const port = process.env.PORT || 3002;

const client = new ApolloClient({
  /* uri: `http://localhost:${port}`, */
  uri: 'https://a00e46f3.ngrok.io'
});

function App() {
  return (
    <ApolloProvider client={client} >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/race" component={Race} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
