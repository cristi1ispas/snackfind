import { useState } from 'react'

function ProductGridItem({ product }) {
	
  return (
    <>
      <div className="productGridItem">
        {product.image ? (<img src={product.image} alt={product.name}/>) : (<img src='https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg'/>)}
        <md-icon-button className="productFavBtn" toggle disabled>
          <md-icon className="material-symbols-outlined">favorite</md-icon>
          <svg slot='selected' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
        </md-icon-button>
        <span className="gridProductHeadline">
          <span className="headlineFirstLine">
            {product.brand !== product.name && (
              <span className="productBrandTag">{product.brand}</span>
            )}
            <span className="productNameTag">{product.name}</span>
          </span>

          <span className="headlineSecondLine">
            {product.flavour} {product.quant}
            {[1, 7].includes(product.category) ? 'L' : 'g'}
          </span>
        </span>
        <div>
          <div className="gridProductPrice">
            <span>19</span>
            <sup>99</sup>
            <div>RON</div>
          </div>
          <md-filled-icon-button className="addToBasketBtn" toggle >
            <md-icon>add_shopping_cart</md-icon>
            <md-icon slot="selected">check</md-icon>
          </md-filled-icon-button>
        </div>
      </div>
    </>
  )
}

export default ProductGridItem