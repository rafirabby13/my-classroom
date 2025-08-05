import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AuthProvider from './context/AuthProvider.tsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider defaultTheme="light" storageKey="ui-theme"> */}
      {/* <AuthProvider> */}
        <RouterProvider router={router} />
      {/* </AuthProvider> */}
    {/* </ThemeProvider> */}
  </StrictMode>,
)
