import { useAppStore } from "../store/useAppStore";

function SearchFAB({ activeScreen, onClick }) {

  const isProductPageOpen = useAppStore((state) => state.isProductPageOpen);

  return(
    <>
      <md-fab id="searchFAB" onClick={onClick} className={`filtersFabMenuAnimation ${activeScreen !== 'explore' || isProductPageOpen ? 'exit' : ''}`}>
        <md-icon slot="icon">search</md-icon>
      </md-fab>
    </>
  )
}

export default SearchFAB