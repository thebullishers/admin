import React from 'react';
import { Admin, Resource } from 'react-admin'
import CssBaseline from '@mui/material/CssBaseline'
import { dataProvider } from './providers/dataProvider'
import { SignalList } from './resources/Signals/SignalList'
import { SignalCreate } from './resources/Signals/SignalCreate'
import { authProvider } from './providers/authProvider'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
    <>
      <CssBaseline />
      <Admin
        history={history}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource name="signals" list={SignalList} create={SignalCreate} />
      </Admin>
    </>
  )
}

export default App
