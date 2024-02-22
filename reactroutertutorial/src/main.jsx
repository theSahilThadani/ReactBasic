import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './error-page.jsx'
import './index.css'
import { Route } from 'react-router-dom'
import Root from './routes/root.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './routes/contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contacts/',
        element: <Contact />,
        errorElement: <ErrorPage />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
