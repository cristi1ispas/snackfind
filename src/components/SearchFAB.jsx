import { useState } from "react";

function SearchFAB({ isProductPageOpen, activeScreen, onClick }) {

  return(
    <>
      <md-fab id="searchFAB" onClick={onClick} className={`filtersFabMenuAnimation ${activeScreen !== 'explore' || isProductPageOpen ? 'exit' : ''}`}>
        <md-icon slot="icon">search</md-icon>
      </md-fab>
    </>
  )
}

export default SearchFAB