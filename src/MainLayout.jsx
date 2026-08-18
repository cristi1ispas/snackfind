import { useRef, useState } from "react";
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
import ProductPageLayout from './components/ProductPageLayout';

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const focusSearchInput = () => {
    setIsSearchOpen(true);
    if(searchInputRef.current){
      searchInputRef.current.focus();
    }
  }

  const [searchValue, setSearchValue] = useState('');
  
  const [isAccountCenterOpen, setIsAccountCenterOpen] = useState(false);
  
  const [activeScreen, setActiveScreen] = useState('explore');

  const [isProductPageRendered, setIsProductPageRendered] = useState(false);
	const [isProductPageOpen, setIsProductPageOpen] = useState(false);

  return (
    <>

      <TopAppBar searchBar={searchValue} onMenuClick={setIsNavDrawerOpen} onSearchClick={focusSearchInput} onAccountClick={setIsAccountCenterOpen} isLoggedIn={isLoggedIn}/>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} isOpen={isSearchOpen} onClose={setIsSearchOpen} searchInputRef={searchInputRef} onClearClick={focusSearchInput} />

			<NavDrawer isOpen={isNavDrawerOpen} onClose={setIsNavDrawerOpen} onNavigate={renderSubPage} />
      {isSubPageRendered && (
        <SubPageLayout title={subPageTitle} isOpen={isSubPageOpen} onClose={closeSubPage}>
          {subPageContent}
        </SubPageLayout>
      )}      
		
			<AccountCenter isOpen={isAccountCenterOpen} onClose={setIsAccountCenterOpen}/>

      <main id="screen">
        <div id="explore" className={`styleScreen ${activeScreen === 'explore' ? 'activeScreen' : 'exitScreen'}`}>
          <ExploreScreen searchValue={searchValue} />
          {isProductPageRendered && (
            <ProductPageLayout />
          )}
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
          <SearchFAB isProductPageOpen={isProductPageOpen} activeScreen={activeScreen} onClick={focusSearchInput} />
          <FiltersFAB />
        </div>
      </main>

      <NavBar onScreenChange={setActiveScreen} activeScreen={activeScreen}/>
    </>
  )
}

export default MainLayout