import { useState } from 'react'
import ProductGridItem from './ProductGridItem'
import { MOCK_PRODUCTS } from '../data/productsMock'

function ExploreScreen({ searchValue }) {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChipClick = (e) => {
    const chipCategory = Number(e.target.dataset.category);
    const isChipSelected = e.target.selected;
    if(isChipSelected) {
      setSelectedCategories([...selectedCategories, chipCategory]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== chipCategory))
    }
  }

  const normalizeText = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/,/g, ".")
    .replace(/['`’\-]/g, "");
};
	
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
				</md-chip-set>
			</div>
      <div id="productGrid">
        {MOCK_PRODUCTS.filter((product) => {
          if (selectedCategories.length === 0) {
            return true; 
          }
          return selectedCategories.includes(product.category);
        }).filter((product) => {
          if (searchValue.length === 0) return true;
          const searchWords = normalizeText(searchValue).split(' ').filter(w => w !== ''); /* array of searched words */
          const unit = [1, 7].includes(product.category) ? 'l' : 'g' ;
          const quantAndUnit = `${product.quant}${unit}`
          const productDetails = normalizeText(`${product.brand} ${product.name} ${product.flavour} ${product.quant} ${quantAndUnit}`);
          return searchWords.every(word => productDetails.includes(word))
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