import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Movies from './pages/Movies.tsx'
import Details from './pages/Details.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path: "/Movies",
      element:<Movies/>
    },
    {
      path: "/Movies/:id",
      element: <Details/>
    }
  ]
  },
  
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
