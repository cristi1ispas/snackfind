import { useState } from 'react'
import CategoryChips from './CategoryChips'

function TopAppBar({ onMenuClick, searchValue, onSearchClick, onAccountClick, isLoggedIn, userDetails, selectedCategories, setSelectedCategories }) {

  return (
		<div id="topAppBar">
			<div id="topRow">
				<md-icon-button onClick={() => onMenuClick(true)}>
					<md-icon>menu</md-icon>
				</md-icon-button>

				<div id="searchBar">
					<span onClick={onSearchClick}>
						{searchValue
							? searchValue
							: `Search Products`
						}
					</span>
					<md-icon-button disabled>
						<md-icon>barcode_scanner</md-icon>
					</md-icon-button>
				</div>

				<md-icon-button id="account" onClick={() => onAccountClick(true)} disabled>
					{isLoggedIn && userDetails.pfp
						? (<img src={userDetails.pfp} alt='Profile'/>)
						: (<md-icon>account_circle</md-icon>)
					}
				</md-icon-button>

				
			</div>
			<div id="ribbonRow">
				<CategoryChips selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
				<div className='verticalDivider'></div>
				<div id="filterToggle">
					<label htmlFor="switchFilterToggle">Filters</label>
					<md-switch id="switchFilterToggle" icons disabled></md-switch>
				</div>
			</div>
		</div>
  )
}

export default TopAppBar