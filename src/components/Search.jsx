import { useState } from "react";

function Search({ searchValue, setSearchValue, isOpen, onClose, searchInputRef }) {

	const handleEneterKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			onClose(false);
		}
	};

	const handleInputChange = (e) => {
		setSearchValue(e.target.value);
	}

  return(
    <>
      <div id="searchView" className={` ${isOpen === true ? 'open' : ''} `}>
				<md-filled-text-field value={searchValue} onInput={handleInputChange} onKeyDown={handleEneterKeyDown} ref={searchInputRef} type="search" placeholder="Search..." id="searchTextField">
					<md-icon-button slot="leading-icon" onClick={() => onClose(false)}>
						<md-icon>arrow_back</md-icon>
					</md-icon-button>
					<md-icon-button slot="trailing-icon" onClick={() => {setSearchValue(''); searchInputRef.current.focus()}}>
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