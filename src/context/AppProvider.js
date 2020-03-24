import React, { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {

    const storeSite = (site) => {
        setAppContext(prevState => {
            return {
                ...prevState,
                site
            }
        })
    }

    const setQueueNumber = (queueNumber) => {
        setAppContext(prevState => {
            return {
                ...prevState,
                queueNumber
            }
        })
    }

    const appState = {
        site: null,
        queueNumber: null,
        storeSite,
        setQueueNumber
    }

    const [appContext, setAppContext] = useState(appState)

    return (
        <AppContext.Provider value={appContext}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;