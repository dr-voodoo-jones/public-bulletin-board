import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { PostProvider } from './context/PostContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </ThemeProvider>
  </React.StrictMode>,
) 