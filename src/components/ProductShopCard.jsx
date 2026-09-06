import { useState } from 'react';

function ProductShopCard() {
  
  return(
    <>
      <div className="productShopCard">
        <div className="productShopHeadline">
          <md-list-item className="shop-button" type="button">
            <img slot="start" src='public/Shop-photo-id-1.png' />
            <div slot="headline">Potica</div>
            <div slot="supporting-text">Maria Eliza SRL</div>
          </md-list-item>
          <md-list-item className="productPriceButton" type="button">
            <div className="productPrice">
              <div className='productPriceNumeral'>
                <span>19</span>
                <sup>.99</sup>
              </div>
              <div className="IconPLUSDate">
                <md-icon>shelves</md-icon>
                <span className='dateUpdated'>24/02</span>
              </div>
            </div>
          </md-list-item>
        </div>
        <div className="productDiscount">
          
          <div className="productDiscountOffer">
            <div className="requirement">
              <img src='https://static.mega-image.ro/medias/sys_master/products/h8c/hb6/9434312409118.jpg' />
              <span>Fulg de Nea <span>60g</span></span>
              <span>Înghețată pe băț</span>
            </div>
            <md-icon>add</md-icon>
            <div className="requirement">
              <img src='https://static.mega-image.ro/medias/sys_master/products/h8c/hb6/9434312409118.jpg' />
              <span>Fulg de Nea <span>60g</span></span>
              <span>Înghețată pe băț</span>
            </div>
          </div>
          <md-icon className='arrow_downward'>arrow_downward</md-icon>
          <div className="productDiscountReward">
            <img src='https://static.mega-image.ro/medias/sys_master/products/h8c/hb6/9434312409118.jpg' />
            <div className='RewardDetails'>
              <div className="RewardDetailsName">
                <span>Fulg de Nea <span>60g</span></span>
                <span>Înghețată pe băț</span>
              </div>
              <div className='RewardDetailsPrice'>
                <b>20</b>
                <md-icon>percent_discount</md-icon>
                <md-icon style={{padding : '2px 0'}}>arrow_forward</md-icon>
                <b>15.99</b>
              </div>
            </div>
          </div>
          <div className='productDiscountDetailsIndicator'>
            <md-icon-button><md-icon>arrow_forward_ios</md-icon></md-icon-button>
          </div>
        </div>
      </div>
      <md-divider />
    </>
  )
}

export default ProductShopCard;