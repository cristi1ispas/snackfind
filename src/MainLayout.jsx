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
import SubPageLayout from "./components/SubPageLayout";

function MainLayout() {

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  
  const [isSubPageRendered, setIsSubPageRendered] = useState(false);
	const [isSubPageOpen, setIsSubPageOpen] = useState(false);
  const [subPageTitle, setSubPageTitle] = useState("");
  const [subPageContent, setSubPageContent] = useState(null);

	const renderSubPage = (title, children) => {
    setSubPageTitle(title);
    setSubPageContent(children);
		setIsSubPageRendered(true);
		setTimeout(() => setIsSubPageOpen(true), 10);
	}

	const closeSubPage = () => {
		setIsSubPageOpen(false);
		setTimeout(() => setIsSubPageRendered(false), 300);
	}

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false);
  
  const [activeScreen, setActiveScreen] = useState('explore');

  return (
    <>

      <TopAppBar onMenuClick={setIsNavDrawerOpen} onSearchClick={setIsSearchOpen} onAccountClick={setIsAccountCenterOpen} />

      <Search isOpen={isSearchOpen} onClose={setIsSearchOpen} />

			<NavDrawer isOpen={isNavDrawerOpen} onClose={setIsNavDrawerOpen} onNavigate={renderSubPage} />
      {isSubPageRendered && (
        <SubPageLayout title={subPageTitle} isOpen={isSubPageOpen} onClose={closeSubPage}>
          {subPageContent}
        </SubPageLayout>
      )}      
		
			<AccountCenter isOpen={isAccountCenterOpen} onClose={setIsAccountCenterOpen}/>

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