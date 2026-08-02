import { useState } from "react";
import TopAppBar from './components/TopAppBar';
import NavDrawer from './components/NavDrawer';
import AccountCenter from './components/AccountCenter';
import NavBar from './components/NavBar';
import ExploreScreen from './components/ExploreScreen';
import FavouriteScreen from './components/FavouriteScreen';
import CartScreen from './components/CartScreen';
import ContributeScreen from './components/ContributeScreen';
import Search from "./components/Search";
import SearchFAB from "./components/SearchFAB";
import FiltersFAB from "./components/FiltersFAB"

function MainLayout() {

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false);
  const toggleAccountCenter = () => {
    setIsAccountCenterOpen(!isAccountCenterOpen);
  }

  const [activeScreen, setActiveScreen] = useState('explore');

  return (
    <>

      <TopAppBar onMenuClick={toggleNavDrawer} onSearchClick={setIsSearchOpen} onAccountClick={toggleAccountCenter} />

      <Search isOpen={isSearchOpen} onClose={setIsSearchOpen} />

			<NavDrawer isOpen={isNavDrawerOpen} onClose={toggleNavDrawer} />
		
			<AccountCenter isOpen={isAccountCenterOpen} onClose={toggleAccountCenter}/>

      <main id="screen">
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
        <div id="FABs">
          <SearchFAB activeScreen={activeScreen} onClick={setIsSearchOpen} />
          <FiltersFAB />
        </div>
      </main>

      <NavBar onScreenChange={setActiveScreen} activeScreen={activeScreen}/>
    </>
  )
}

export default MainLayout