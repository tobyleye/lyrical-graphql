import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import SongList from "./components/song-list";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { App } from "./app";
import CreateSong  from "./components/create-song";
import "./style/style.css";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" exact component={App}>
          <IndexRoute component={SongList} />
          <Route path="/new-song" component={CreateSong}/>
            
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
