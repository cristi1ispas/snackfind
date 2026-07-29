import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from "react";
import Banner from './components/Banner';
import NavDrawer from './components/NavDrawer';
import AccountCenter from './components/AccountCenter';
import NavBar from './components/NavBar';
import ExploreContainer from './components/ExploreContainer';

function MainLayout() {

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
        <ExploreContainer />
      </div>

      <NavBar />
    </>
  )
}

export default MainLayout