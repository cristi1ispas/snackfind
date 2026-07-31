import { useState } from 'react'

function ProductGridItem({ img, brand, name, flavour, capacity, price }) {
	
  return (
    <>
      <div className="productGridItem">
        <img src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
        <md-icon-button className="productFavBtn">
          {/* ADD: toggle disabled */}
          <md-icon className="material-symbols-outlined">favorite</md-icon>
          <md-icon slot="selected" className="material-symbols-outlined">
            favorite
          </md-icon>
        </md-icon-button>
        <span className="gridProductHeadline">brand nume flavor capacity</span>
        <div>
          <div className="gridProductPrice">
            <span>19</span>
            <sup>99</sup>
            <div>RON</div>
          </div>
          <md-filled-icon-button className="addToBasketBtn">
            {/* ADD: toggle disabled */}
            <md-icon>add_shopping_cart</md-icon>
            <md-icon slot="selected">check</md-icon>
          </md-filled-icon-button>
        </div>
      </div>
    </>
  )
}

export default ProductGridItem