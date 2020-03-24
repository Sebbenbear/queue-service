import React from 'react'

const AppContext = React.createContext({
    queueNumber: null,
    site: {},
    storeSite: (site) => {},
    setQueueNumber: (queueNumber) => {}
});

export default AppContext;
