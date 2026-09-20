import ProductGridItem from './ProductGridItem'
import { useAppStore } from '../store/useAppStore';
import { useMemo } from 'react';


function ExploreScreen() {
  function normalizeText(text) {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/k/g, "c")
      .replace(/,/g, ".")
      .replace(/y/g, "i")
      .replace(/['`’\-]/g, "");
  }

  /* data fetching */
  const isLoading = useAppStore((state) => state.isLoading);

  const products = useAppStore((state) => state.products);
  const searchValue = useAppStore((state) => state.searchValue);
  const selectedCategories = useAppStore((state) => state.selectedCategories);
  const filteredProducts = useMemo(() => {
    return Object.values(products).filter((product) => {
      if (selectedCategories.length === 0)
        return true;
      return selectedCategories.includes(product.category);
    })
    .filter((product) => {
      if (searchValue.length === 0)
        return true;
      const searchWords = normalizeText(searchValue).split(' ').filter(w => w !== ''); /* array of searched words */
      const quantAndUnit = `${product.quant}${[1, 7].includes(product.category) ? 'l' : 'g'}`;
      const productDetails = normalizeText(`${product.brand} ${product.name} ${product.flavour}`);
      return searchWords.every(word => {
        if(word === quantAndUnit || word === product.quant.toString())
          return true;
        return productDetails.includes(word);
      });
    });
  }, [searchValue, selectedCategories, products]);

  return (
    <div id="exploreContainer" className='screenContainers'>
      <div id="productGrid">
        {isLoading ? (
          <div className="loadingProducts">
            <md-circular-progress four-color indeterminate></md-circular-progress>
            <span>Hold on, fetching products!</span>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductGridItem key={product.id} product={product}/>
          ))
        )}
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