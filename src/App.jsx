import logo from './logo.svg';
import './App.css';
import React from 'react';
import awsconfig from './aws-exports';
import Amplify, {API, graphqlOperation } from 'aws-amplify';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {

  const fetchSongs = async () => {
    try{
      const songData = await API.graphql(graphqlOperation(listSongs))
    } catch (error) {

    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello!!
        </a>
      </header>
    </div>
  );
}

export default App;
