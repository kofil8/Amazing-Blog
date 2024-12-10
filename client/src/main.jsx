import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'tailwindcss/tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage'
import PostListPage from './routes/PostListPage'
import SinglePostPage from './routes/SinglePostPage'
import Write from './routes/Write'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import MainLayout from './layouts/MainLayout'
import { ClerkProvider } from '@clerk/clerk-react';

// Import Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const routes = [
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  {
    path: '/posts',
    element: <PostListPage />,
  },
  {
    path: '/:slug',
    element: <SinglePostPage />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routes,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)