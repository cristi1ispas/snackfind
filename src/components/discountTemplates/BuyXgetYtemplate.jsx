import { Fragment } from 'react';
import { useAppStore } from '../../store/useAppStore';

function BuyXgetYtemplate({ discount }) {

  const products = useAppStore((state) => state.products)
  
  function areSame(prodId) {
    if (products[prodId].brand !== products[prodId].name) {
      return true;
    }
    return false;
  }

  const firstRequirement = products[discount.prod_required[0]];
  const discountReward = products[discount.prod_reward]

  function handleRequirements() {
    if (discount.prod_required && discount.prod_required.length > 1) {
      return discount.prod_required.slice(1).map((prodId, index) => (
        <Fragment key={index}>
          <md-icon>add</md-icon>
          <div className="requirement">
            <img src={products[prodId].image} alt={products[prodId].name} />
            <span>
              {products[prodId].brand}{' '}
              <b>
                {products[prodId].quant}
                {[1, 7].includes(products[prodId].category) ? 'L' : 'g'}
              </b>
            </span>
            {areSame(prodId) && <span>{products[prodId].name}</span>}
          </div>
        </Fragment>
      ));
    }
    
    return null; 
  }
  
  return(
    <>
      <div className="productDiscountOffer">
        <div className="requirement">
          <img src={firstRequirement.image} />
          <span>{firstRequirement.brand} <b>{firstRequirement.quant}{[1,7].includes(firstRequirement.category) ? `L` : 'g'}</b></span>
          {areSame(discount.prod_required[0]) && <span>{firstRequirement.name}</span>}
        </div>
        {handleRequirements()}
      </div>
      <md-icon className='arrow_downward'>arrow_downward</md-icon>
      <div className="productDiscountReward">
        <img src={discountReward.image} />
        <div className='RewardDetails'>
          <div className="RewardDetailsName">
            <span>{discountReward.brand} <b>{discountReward.quant}{[1,7].includes(discountReward.category) ? `L` : 'g'}</b></span>
            {areSame(discount.prod_required[0]) && <span>{discountReward.name}</span>}
          </div>
          <div className='RewardDetailsPrice'>
            <b>{discount.percent}</b>
            <md-icon>percent</md-icon>
            <md-icon style={{padding : '2px 0'}}>arrow_right_alt</md-icon>
            <b>{discount.price === 0 ? 'FREE!' : discount.price}</b>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyXgetYtemplate;