import { useMemo } from 'react'
import TextCard from './TextCard';
import ProductShopCard from './ProductShopCard';
import { useAppStore } from '../store/useAppStore';
import { useShallow } from 'zustand/shallow';

function ProductPage() {

  const [
    isOpen, 
    onClose, 
    product, 
    productJoints, 
    productDiscounts, 
    shops
  ] = useAppStore(
    useShallow((state) => {
      const info = state.productPageProd || [];
      const prodId = info[0];

      return [
        state.isProductPageOpen,
        state.closeProductPage,
        state.products?.[prodId],
        info[1] || [],
        info[2] || [],
        state.shops
      ];
    })
  );
	
	const shopCards = useMemo(() => {
		return [...productJoints]
		.sort((a, b) => a.price - b.price)
    .map(joint => {
      const productShop = shops?.[joint.shop_id];
			const productDiscount = productDiscounts?.find(discount => discount.shop_id === joint.shop_id)
      return <ProductShopCard key={joint.id} joint={joint} shop={productShop} discount={productDiscount}/>
    });
  }, [product, productJoints, shops, productDiscounts]);

  function handleProductBrandName() {
    if (product.brand === product.name) {
      return product.name;
    }
    return (
      `${product.brand}, ${product.name}`
    );
  }

  const productQuantity = product?.quant 
  ? `${product.quant} ${[1, 7].includes(product.category) ? 'L' : 'g'}`
  : '';

  if (!product) {
    return <div className='loadingProducts'> ProductPageLayout Exploded </div>
  }

  return (
    <div className={`productPage ${isOpen? 'open' : ''}`}>
      <md-divider />
      <md-list-item className="productPageRibbon" type='link' onClick={() => onClose()}>
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
                <TextCard supportingText="Flavours" headline={product.flavour.map((flavour, index) => (<span key={index}>{flavour}</span>))} />
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
        <md-divider />
        <md-list className="productShopsList">
          {shopCards}
        </md-list>
      </div>
    </div>
  )
}

export default ProductPage;