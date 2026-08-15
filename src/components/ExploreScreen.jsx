import { useState } from 'react'
import ProductGridItem from './ProductGridItem'
import { MOCK_PRODUCTS } from '../data/productsMock'

function ExploreScreen() {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChipClick = (e) => {
    const chipCategory = Number(e.target.dataset.category);
    const isChipSelected = e.target.selected;
    if(isChipSelected) {
      console.log(`isChipSelected = true ? ${isChipSelected} ; item ? ${chipCategory}`)

      setSelectedCategories([...selectedCategories, chipCategory]);

      console.log(`selectedCateg = add ? ${selectedCategories}`)

    } else {
      console.log(`isChipSelected = false ? ${isChipSelected} ; item ? ${chipCategory}`)

      setSelectedCategories(selectedCategories.filter((category) => category !== chipCategory))

      console.log(`selectedCateg = removal ? ${selectedCategories}`)

    }

    console.log(`selectedCateg = afterIF ? ${selectedCategories}`)
  }
	
  return (
    <>
      <div id="categoryChipsWraper">
				<md-chip-set id="categoryChips">
					<md-filter-chip label="Sodas" data-category="1" onClick={handleChipClick}>
						<md-icon slot="icon">cleaning</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Chips" data-category="2" onClick={handleChipClick}>
						<md-icon slot="icon">money_bag</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Sweets" data-category="3" onClick={handleChipClick}>
						<md-icon slot="icon">cookie</md-icon>
					</md-filter-chip>
          <md-filter-chip label="Pastries" data-category="4" onClick={handleChipClick}>
						<md-icon slot="icon">bakery_dining</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Crackers" data-category="5" onClick={handleChipClick}>
						<md-icon slot="icon">pet_supplies</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Grill" data-category="6" onClick={handleChipClick}>
						<md-icon slot="icon">outdoor_grill</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Beverages" data-category="7" onClick={handleChipClick}>
						<md-icon slot="icon">liquor</md-icon>
					</md-filter-chip>
          {console.log(`selectedCateg = afterIF ? ${selectedCategories}`)}
				</md-chip-set>
			</div>
      <div id="productGrid">
        {MOCK_PRODUCTS.filter((product) => {
          if (selectedCategories.length === 0) {
            return true; 
          }
          return selectedCategories.includes(product.category);
        }).map((product) => (
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