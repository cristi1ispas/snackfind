import BuyXgetYtemplate from './discountTemplates/BuyXgetYtemplate';
import SimpleDiscountTemplate from './discountTemplates/SimpleDiscountTemplate';
import LoyaltyDiscountTemplate from './discountTemplates/LoyaltyDiscountTemplate';

function ProductShopCard({ joint, shop, discount }) {
  
  function handleDiscountType() {
    switch (discount.type) {
      case 1:
        return <SimpleDiscountTemplate />;
      case 2:
        return <BuyXgetYtemplate />;
      case 3:
        return <LoyaltyDiscountTemplate />;
    }
  }

  function handleDiscount() {
    if (discount) {
      return (
        <div className="productDiscount">
          {handleDiscountType()}
          <div className='productDiscountDetailsIndicator'>
            <md-icon-button>
              <md-icon>arrow_forward_ios</md-icon>
            </md-icon-button>
          </div>
        </div>);
    }
  }

	function priceSource() {
    switch (joint.source) {
      case 1:
        return `point_of_sale`;
      case 2:
        return `cloud_download`;
      case 3:
        return `shelves`;
    }
  }

	function priceDate() {
    const date = joint.updated.slice(5, 10).split('-');
    return `${date[1]}/${date[0]}`;
  }

  return(
    <>
      <div className="productShopCard">
        <div className="productShopHeadline">
          <md-list-item className={`shop-button`} type="button">
            <img slot="start" src={`/Shop-photo-id-${shop.id}.png`} />
            <div slot="headline">{shop.popular}</div>
            <div slot="supporting-text">{shop.official}</div>
          </md-list-item>
          <md-list-item className={`productPriceButton`} type="button">
            <div className="productPrice">
              <div className='productPriceNumeral'>
                <span>{Math.trunc(joint.price)}</span>
		            <sup>.{joint.price.toFixed(2).split('.')[1]}</sup>
              </div>
              <div className="IconPLUSDate">
                <md-icon>{priceSource()}</md-icon>
                <span className='dateUpdated'>{priceDate()}</span>
              </div>
            </div>
          </md-list-item>
        </div>
      </div>
      <md-divider />
    </>
  )
}

export default ProductShopCard;