import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'
import { ProjectPage } from './pages/ProjectPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects/:slug', element: <ProjectPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
