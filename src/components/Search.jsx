import { DEFAULT_TYPEAHEAD_BUFFER_TIME } from "@material/web/menu/internal/menu";
import { useState } from "react";

function Search() {

  return(
    <>
      <div id="searchFeature" className="searchViewWindowAnimation">
				<md-filled-text-field type="search" placeholder="Search..." id="searchTextField">
					<md-icon-button slot="leading-icon" className="topRowIcons searchViewWindowAction">
						<md-icon>arrow_back</md-icon>
					</md-icon-button>
					<md-icon-button slot="trailing-icon" className="topRowIcons">
						<md-icon>close</md-icon>
					</md-icon-button>
				</md-filled-text-field>
				<md-list className="autocompleteSearch">
					<md-list-item type="button">
						<div slot="headline">in brands:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">by flavours:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">for quantity:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">in brands:</div>
					</md-list-item>
					<md-list-item type="button">
						<div slot="headline">in brands:</div>
					</md-list-item>
				</md-list>
			</div>

			<div id="searchViewWindow" className="searchViewWindowAnimation">

			</div>
    </>
  )
}

export default Search