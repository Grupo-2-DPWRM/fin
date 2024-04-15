import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './features/mainpage/components/Footer.jsx'
import Chatbot from './features/chatbot/components/Chatbot.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />
    <App />
    <Footer />
    <Chatbot />
  </React.StrictMode>,
)
