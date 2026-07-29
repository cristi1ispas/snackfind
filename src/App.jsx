import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ExploreContainer from './components/ExploreContainer';
import MainLayout from './MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {path: "/", element: <ExploreContainer /> },
      {path: "/news", element: <div>news</div>},
      {path: "/discounts", element: <div>Discounts</div>},
      {path: "/shops", element: <div>Shop</div>},
      {path: "/compare", element: <div>Compare</div>},
      {path: "/manager", element: <div>Manager</div>},
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}
