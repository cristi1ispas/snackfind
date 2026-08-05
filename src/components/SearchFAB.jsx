import { useState } from "react";

function SearchFAB({ activeScreen, onClick }) {

  return(
    <>
      <md-fab id="searchFAB" onClick={onClick} className={`filtersFabMenuAnimation ${activeScreen !== 'explore' ? 'exit' : ''}`}>
        <md-icon slot="icon">search</md-icon>
      </md-fab>
    </>
  )
}

export default SearchFAB