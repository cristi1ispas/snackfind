import { useState } from 'react'
import TextCard from './TextCard';

function ProductPage({ product, isOpen, onClose }) {
	
  const handleProductBrandName = () => {
    if (product.brand === product.name) {
      return product.name;
    }
    return (
      `${product.brand}, ${product.name}`
    );
  }
  const handleProductFlavour = () => {
    const flavoursArray = product.flavour.split(', ');
    return flavoursArray.map((flavour, index) => (
      <span key={index}>{flavour}</span>
    ));
  }
  const productQuantity = `${product.quant} ${[1, 7].includes(product.category) ? 'L' : 'g'}`;

  return (
    <div className={`productPage ${isOpen? 'open' : ''}`}>
      <md-divider />
      <md-list-item className="productPageRibbon" type='link' onClick={onClose}>
        <md-icon slot='start'>arrow_left_alt</md-icon>
        <div slot='headline'>Back to products</div>
      </md-list-item>
      <md-divider />
      <div className="productPageContent">
        
        <div className="productHeadline">
          <img src={product.image
          ? product.image
          : 'https://static.mega-image.ro/medias/sys_master/products/h8c/hb6/9434312409118.jpg'} />
          <div className="productDescription">
            <div className='textCardBandName'>
              <TextCard supportingText="Brand / Name" headline={handleProductBrandName()} />
            </div>
            <div className="FlavoursQuantity">
              <div className='textCardFlavour'>
                <TextCard supportingText="Flavours" headline={handleProductFlavour()} />
              </div>
              <div className="QuantityVegan">
                <div className="textCardQuantity">
                  <TextCard headline={productQuantity} />
                </div>
                <div className={`textCardVegan ${product.vegan ? 'green' : 'red'}`}>
                  <TextCard headline="Post" icon={(<md-icon>{product.vegan ? 'checkmark' : 'close'}</md-icon>)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <md-divider />
        <div className="productActions">
          <md-filled-icon-button className="productFavBtn" toggle>
            <md-icon>favorite</md-icon>
            <md-icon slot="selected">favorite</md-icon>
          </md-filled-icon-button>
          <md-outlined-button className="productAddCartBtn">
            <md-icon slot="icon">add_shopping_cart</md-icon>
            Add to cart
          </md-outlined-button>
        </div>
        <md-list className="productShopsList">
          <md-list-item className="productShopCard" type="link">
            <img
              slot="start"
              src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg"
            />
            <div slot="headline">Potica</div>
            <div slot="supporting-text">Maria Eliza SRL</div>
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
            <div slot="headline">Potica</div>
            <div slot="supporting-text">Maria Eliza SRL</div>
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
            <div slot="headline">Potica</div>
            <div slot="supporting-text">Maria Eliza SRL</div>
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