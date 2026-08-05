import { useState } from "react";

function Search({ isOpen, onClose, searchInputRef }) {

  return(
    <>
      <div id="searchView" className={` ${isOpen === true ? 'open' : ''} `}>
				<md-filled-text-field ref={searchInputRef} type="search" placeholder="Search..." id="searchTextField">
					<md-icon-button slot="leading-icon" onClick={() => onClose(false)}>
						<md-icon>arrow_back</md-icon>
					</md-icon-button>
					<md-icon-button slot="trailing-icon">
						<md-icon>close</md-icon>
					</md-icon-button>
				</md-filled-text-field>
				<div id="searchSuggestion">

				</div>
			</div>
    </>
  )
}

export default Search