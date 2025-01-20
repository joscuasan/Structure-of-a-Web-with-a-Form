// pages/_app.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/components/RootLayout';
import ErrorPage from '@/pages/Error';
import HomePage from '@/pages/Home';
import FirstPage from './firstPage/page';
import SecondPage from './secondPage/page';
import ContactPage from './contact/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'first', element: <FirstPage /> },
      { path: 'second', element: <SecondPage /> },
      { path: 'contact', element: <ContactPage/> },
    ],
  },
]);

export default function MyApp() {
  return <RouterProvider router={router} />;
}
