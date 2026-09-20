import { Fragment } from 'react';
import { useAppStore } from '../../store/useAppStore';
import SimpleDiscountTemplate from './SimpleDiscountTemplate';

function BuyXgetYtemplate({ discount, children }) {

  const products = useAppStore((state) => state.products)
  
  function areSame(prodId) {
    if (products[prodId].brand !== products[prodId].name) {
      return true;
    }
    return false;
  }

  const firstRequirement = products[discount.prod_required[0]];

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
      {children}
      <md-icon className='arrow_downward'>arrow_downward</md-icon>
      <SimpleDiscountTemplate discount={discount} />
    </>
  )
}

export default BuyXgetYtemplate;