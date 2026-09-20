import { useState } from "react";
import { useAppStore } from "../../store/useAppStore";

function SimpleDiscountTemplate({ discount }) {
  
  const products = useAppStore((state) => state.products);
    
  function areSame(prodId) {
    if (products[prodId].brand !== products[prodId].name) {
      return true;
    }
    return false;
  }

  const discountReward = products[discount.prod_reward];

  return(
    <div className="productDiscountReward">
      <img src={discountReward.image} />
      <div className='RewardDetails'>
        <div className="RewardDetailsName">
          <span>{discountReward.brand} <b>{discountReward.quant}{[1,7].includes(discountReward.category) ? `L` : 'g'}</b></span>
          {areSame(discount.prod_reward) && <span>{discountReward.name}</span>}
        </div>
        <div className='RewardDetailsPrice'>
          {discount.price === 0 ? (
            <b><u>FREE !</u></b>
          ) : (
            <>
              <b>{discount.percent}</b>
              <md-icon>percent</md-icon>
              <md-icon style={{padding : '2px 0'}}>arrow_right_alt</md-icon>
              <b><u>{Math.trunc(discount.price)}.{discount.price.toFixed(2).split('.')[1]}</u></b>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SimpleDiscountTemplate;