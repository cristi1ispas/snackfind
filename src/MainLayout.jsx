import { useState } from "react";
import Banner from './components/Banner';
import NavDrawer from './components/NavDrawer';
import AccountCenter from './components/AccountCenter';
import NavBar from './components/NavBar';
import ExploreScreen from './components/ExploreScreen';
import FavouriteScreen from './components/FavouriteScreen';
import CartScreen from './components/CartScreen';
import ContributeScreen from './components/ContributeScreen';

function MainLayout() {

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false)
  const toggleAccountCenter = () => {
    setIsAccountCenterOpen(!isAccountCenterOpen);
  }

  const [activeScreen, setActiveScreen] = useState('explore')

  return (
    <>

      <Banner onMenuClick={toggleNavDrawer} onAccountClick={toggleAccountCenter} />

			<NavDrawer isOpen={isNavDrawerOpen} onClose={toggleNavDrawer} />
		
			<AccountCenter isOpen={isAccountCenterOpen} onClose={toggleAccountCenter}/>

      <div id="page">
        <div id="explore" className={`styleScreen ${activeScreen === 'explore' ? 'activeScreen' : 'exitScreen'}`}>
          <ExploreScreen />
        </div>
        <div id="favourite" className={`styleScreen ${activeScreen === 'favourite' ? 'activeScreen' : 'exitScreen'}`}>
          <FavouriteScreen />
        </div>
        <div id="cart" className={`styleScreen ${activeScreen === 'cart' ? 'activeScreen' : 'exitScreen'}`}>
          <CartScreen />
        </div>
        <div id="contribute" className={`styleScreen ${activeScreen === 'contribute' ? 'activeScreen' : 'exitScreen'}`}>
          <ContributeScreen />
        </div>
      </div>

      <NavBar />
    </>
  )
}

export default MainLayout