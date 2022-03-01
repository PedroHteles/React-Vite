import './App.css'

import React, { useContext } from 'react';
import IndexProvider from './context/context'
import AppIndex from "./index"

function App() {
  return (
    <IndexProvider>
      <AppIndex/>
    </IndexProvider>

  )
}
export default App
