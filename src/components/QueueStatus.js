import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext'

const QueueStatus = (props) => {
  const { site } = useContext(AppContext)

  return (
    <div>
      <p>Shows the status of the queue.</p>
      {site && <p>{site['site_name']}</p>}
    </div>

  );
}

export default QueueStatus;
