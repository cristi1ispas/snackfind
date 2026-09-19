import BuyXgetYtemplate from './discountTemplates/BuyXgetYtemplate';
import SimpleDiscountTemplate from './discountTemplates/SimpleDiscountTemplate';
import LoyaltyDiscountTemplate from './discountTemplates/LoyaltyDiscountTemplate';

function ProductShopCard({ joint, shop, discount }) {
  
  function handleDiscountType() {
    switch (discount.type) {
      case 1:
        return <SimpleDiscountTemplate discount={discount}/>;
      case 2:
        return <BuyXgetYtemplate discount={discount}/>;
      case 3:
        return <LoyaltyDiscountTemplate discount={discount}/>;
    }
  }

  function handleCancelWarning() {
    return (
      <div className='discountCancelWarn'>
        <md-icon>warning</md-icon>
        <b>{/*discount.canceled_by.length*/}2 Users say it's not there anymore!</b>
      </div>
    )
  }

  function handleDiscount() {
    if (discount) {
      return (
        <div className="productDiscount">
          <div className={`discountType${discount.type}`}>
            {handleDiscountType()}
          </div>
          {/*discount.canceled_by !== null && */handleCancelWarning()}
          <div className='productDiscountDetailsIndicator'>
            <md-icon-button>
              <md-icon>arrow_forward_ios</md-icon>
            </md-icon-button>
          </div>
        </div>
      );
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
      case 4:
        return `hearing`;
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
          <md-list-item className={`shop-button ${discount ? 'discount' : ''}`} type="button">
            <img slot="start" src={`/Shop-photo-id-${shop.id}.png`} />
            <div slot="headline">{shop.popular}</div>
            <div slot="supporting-text">{shop.official}</div>
          </md-list-item>
          <md-list-item className={`productPriceButton  ${discount ? 'discount' : ''}`} type="button">
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
        {handleDiscount()}
      </div>
      <md-divider />
    </>
  )
}

export default ProductShopCard;