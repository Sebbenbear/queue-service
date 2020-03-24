import React, {  useContext, useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import AppContext from '../context/AppContext'

const QueueStatus = (props) => {
  const {getQueueNumber} = useContext(AppContext);

  return (
    <div>
      <p>
        Click below to collect a queue number.
      </p>
      <Button color="info" onClick={getQueueNumber}>Get queue number</Button>
    </div>
  );
}

export default QueueStatus;
