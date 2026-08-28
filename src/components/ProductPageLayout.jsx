import { useState } from 'react'

function ProductPage({ product }) {
	
  return (
    <div className="productPage">
      <md-list-item className="productPageRibbon" type='link'>
        <md-icon slot='start'>arrow_left_alt</md-icon>
        <div slot='headline'>Back to products</div>
      </md-list-item>

      <div className="productPageContent">
         <md-divider />
        <div className="productHeadline">
          <img src={product.image
        ? product.image
        : 'https://static.mega-image.ro/medias/sys_master/products/h8c/hb6/9434312409118.jpg'} />
          <md-divider />
          <span className="productDescription">
            brand nume flnd nume fly braavor capacipacity brand nund nume flavor
            capacity brame flavor caavor capacity
          </span>
        </div>
        <div className="productActions">
          <md-filled-icon-button className="productFavBtn" toggle>
            <md-icon className="material-symbols-outlined">favorite</md-icon>
            <md-icon slot="selected" className="material-symbols-outlined">
              favorite
            </md-icon>
          </md-filled-icon-button>
          <md-outlined-button className="productAddCartBtn">
            <span
              className="productAddCartBtnIcon"
              slot="icon"
              className="material-symbols-outlined "
            />
            Add to cart
          </md-outlined-button>
        </div>
        <md-list className="productShopsList">
          <md-list-item className="productShopCard" type="link">
            <img
              slot="start"
              src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg"
            />
            <div slot="headline">Georgi</div>
            <div slot="supporting-text">Ella Store</div>
            <div slot="end" className="productPrice">
              <div>
                <md-icon>shelves</md-icon>
                <span>19</span>
                <sub>.99</sub>
              </div>
              <div className="dateUpdated">24/02</div>
            </div>
          </md-list-item>
          <md-list-item className="productShopCard" type="link">
            <img
              slot="start"
              src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg"
            />
            <div slot="headline">Georgi</div>
            <div slot="supporting-text">Ella Store</div>
            <div slot="end" className="productPrice">
              <div>
                <md-icon>point_of_sale</md-icon>
                <span>19</span>
                <sub>.99</sub>
              </div>
              <div className="dateUpdated">24/02</div>
            </div>
          </md-list-item>
          <md-list-item className="productShopCard" type="link">
            <img
              slot="start"
              src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg"
            />
            <div slot="headline">Georgi</div>
            <div slot="supporting-text">Ella Store</div>
            <div slot="end" className="productPrice">
              <div>
                <md-icon>cloud_download</md-icon>
                <span>19</span>
                <sub>.99</sub>
              </div>
              <div className="dateUpdated">24/02</div>
            </div>
          </md-list-item>
          <md-text-button>
            <u>Show All</u>
          </md-text-button>
        </md-list>
      </div>
    </div>
  )
}

export default ProductPage;