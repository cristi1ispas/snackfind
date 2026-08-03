import { DEFAULT_TYPEAHEAD_BUFFER_TIME } from "@material/web/menu/internal/menu";
import { useState } from "react";

function Search({ isOpen, onClose }) {

  return(
    <>
      <div id="searchFeature" className={` ${isOpen === true ? 'open' : ''} `}>
				<md-filled-text-field type="search" placeholder="Search..." id="searchTextField">
					<md-icon-button slot="leading-icon" onClick={() => onClose(false)} className="topRowIcons">
						<md-icon>arrow_back</md-icon>
					</md-icon-button>
					<md-icon-button slot="trailing-icon" className="topRowIcons">
						<md-icon>close</md-icon>
					</md-icon-button>
				</md-filled-text-field>
			</div>
    </>
  )
}

export default Search