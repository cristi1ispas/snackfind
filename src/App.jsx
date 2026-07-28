import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Banner from './components/Banner';
import NavDrawer from './components/NavDrawer';
import AccountCenter from './components/AccountCenter';
import NavBar from './components/NavBar';

function AppLayout() {

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false)
  const toggleAccountCenter = () => {
    setIsAccountCenterOpen(!isAccountCenterOpen);
  }

  return (
    <>

      <Banner onMenuClick={toggleNavDrawer} onAccountClick={toggleAccountCenter} />

			<NavDrawer isOpen={isNavDrawerOpen} onClose={toggleNavDrawer} />
		
			<AccountCenter isOpen={isAccountCenterOpen} onClose={toggleAccountCenter}/>

      <div id='page'>
        <Outlet />
      </div>

      <NavBar />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path: "/", element: <div>ExplorePage </div> },
      {path: "/favourite", element: <div>favs</div>},
      {path: "/cart", element: <div>Cart</div>},
      {path: "/contribute", element: <div>Contribute</div>},
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
