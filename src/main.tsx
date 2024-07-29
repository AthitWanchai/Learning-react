import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Heading from './components/Heading.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Heading title="Hello It's me"/>
  </React.StrictMode>,
)
