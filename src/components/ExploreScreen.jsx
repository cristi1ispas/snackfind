import { useMemo, useState } from 'react'
import ProductGridItem from './ProductGridItem'

function ExploreScreen({ searchValue, filteredProducts }) {


  
  return (
    <div id="exploreContainer" className='screenContainers'>
      <div id="productGrid">
        {filteredProducts.map((product) => (
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
    </div>
  )
}

export default ExploreScreen