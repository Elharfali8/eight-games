import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainContextProvider } from './context/main_context.jsx'
import { SearchContextProvider } from './context/search_contxet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContextProvider>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </MainContextProvider>,
)
