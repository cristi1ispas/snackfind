import { useState } from 'react';

function BuyXgetYtemplate() {
  
  return(
    <>
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
    </>
  )
}

export default BuyXgetYtemplate;