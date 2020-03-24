// import React from 'react';
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import InitState from './pages/InitState'
import MainNavbar from './components/MainNavbar';
import QueueStatus from './components/QueueStatus';
import GetQueueNumber from './components/GetQueueNumber';

import { Container, Row, Col } from 'reactstrap';

// https://reacttraining.com/react-router/web/guides/quick-start

function App() {
  // const [queueNumber, getQueueNumber] = useState(0);

  return (
    <div className="App">
      <InitState/>
      <MainNavbar />
      <Container>
          <QueueStatus />
      </Container>

      {/* <header className="App-header">
        {queueNumber  == 0 && <GetQueueNumber />}
        {queueNumber > 0 && <QueueStatus />}
      </header> */}
    </div>
  );
}

export default App;


        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}