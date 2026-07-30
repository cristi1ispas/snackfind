import { useState } from "react";
import Banner from './components/Banner';
import NavDrawer from './components/NavDrawer';
import AccountCenter from './components/AccountCenter';
import NavBar from './components/NavBar';
import ExploreContainer from './components/ExploreContainer';
import FavouriteContainer from './components/FavouriteContainer';
import CartContainer from './components/CartContainer';
import ContributeContainer from './components/ContributeContainer';

function MainLayout() {

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false)
  const toggleAccountCenter = () => {
    setIsAccountCenterOpen(!isAccountCenterOpen);
  }

  const [activeTab, setActiveTab] = useState('explore')

  return (
    <>

      <Banner onMenuClick={toggleNavDrawer} onAccountClick={toggleAccountCenter} />

			<NavDrawer isOpen={isNavDrawerOpen} onClose={toggleNavDrawer} />
		
			<AccountCenter isOpen={isAccountCenterOpen} onClose={toggleAccountCenter}/>

      <div id='page'>
        <ExploreContainer />
        <FavouriteContainer />
        <CartContainer />
        <ContributeContainer />
      </div>

      <NavBar />
    </>
  )
}

export default MainLayout