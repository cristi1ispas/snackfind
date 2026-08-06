import { useState } from 'react'
import ProductGridItem from './ProductGridItem'
import { MOCK_PRODUCTS } from '../data/productsMock'

function ExploreScreen() {
	
  return (
    <>
      <div id="categoryChipsWraper">
				<md-chip-set id="categoryChips">
					<md-filter-chip label="Sodas">
						<md-icon slot="icon">cleaning</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Chips">
						<md-icon slot="icon">money_bag</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Sweets">
						<md-icon slot="icon">cookie</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Crackers">
						<md-icon slot="icon">pet_supplies</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Grill">
						<md-icon slot="icon">outdoor_grill</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Beverages">
						<md-icon slot="icon">liquor</md-icon>
					</md-filter-chip>
				</md-chip-set>
			</div>
      <div id="productGrid">
        {MOCK_PRODUCTS.map((product) => (
          <ProductGridItem key={product.id} product={product} />
        ))}
        
      </div>



      <md-dialog id="discardFiltersDialog" type="alert">
        <div slot="headline">
          <md-icon slot="icon">warning</md-icon>
          Filters not applied
        </div>
        {/*<form slot="content" id="form-id" method="dialog">
          Are you sure you want to dismiss the changes?
        </form>
        <div slot="actions" className="actions">
          <md-filled-button form="form-id" value="dismiss">
            Dismiss
          </md-filled-button>
          <md-outlined-button form="form-id" value="cancel">
            <md-icon sot="icon">cancel</md-icon>
            Cancel
          </md-outlined-button>
        </div>*/}
      </md-dialog>
      <md-fab
        id="filtersConfirmFAB"
        className="filtersFabMenuAnimation filtersFabMenuAction filtersFabAction"
        label="Apply"
      ><md-icon slot="icon">check</md-icon>
      </md-fab>
    </>
  )
}

export default ExploreScreen