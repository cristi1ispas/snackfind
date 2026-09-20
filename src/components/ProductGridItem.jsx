import { useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';

function ProductGridItem({ product }) {

  const joints = useAppStore((state) => state.joints);
  const discounts = useAppStore((state) => state.discounts);
  const productJoints = Object.values(joints)
    .filter(joint => joint.prod_id === product.id);
  const productDiscounts = useMemo(() => 
    Object.values(discounts).filter(
      discount =>
        discount.prod_reward === product.id ||
        discount.prod_required?.includes(product.id)
    ),[discounts, product.id]);
    
  const setProductPageProd = useAppStore((state) => state.setProductPageProd);

  function handleLowestPrice() {
    if (productJoints.length > 0) {
      const lowestPrice = Math.min(...productJoints.map(j => j.price));
      return (
      <>
        <span>{Math.trunc(lowestPrice)}</span>
        <sup>.{lowestPrice.toFixed(2).split('.')[1]}</sup>
      </>);
    }
    return (
    <>
      <span style={{ fontSize: '20px' }}>No price...</span>
      <sup>yet</sup>
    </>);
  }

  return (
    <div className="productGridItem" >
      <div className="productGridArea" onClick={() => setProductPageProd([ product.id, productJoints, productDiscounts ])}>
        <img src={product.image
        ? product.image
        : 'https://static.mega-image.ro/medias/sys_master/products/h8c/hb6/9434312409118.jpg'}
        alt={`${product.brand} ${product.name} ${product.flavour}`}/>
        <div className="gridProductDetails">
          {product.brand !== product.name && (
          <span className="productBrandTag">{product.brand}</span>
          )}
          <span className="productNameTag">
            {product.name}
          </span>
          <div className='FlavourQuant'>
            <span className="productFlavourTag">{product.flavour?.join(', ')}</span>
            <span className='productQuantTag'>
              {product.quant} {[1, 7].includes(product.category) ? 'L' : 'g'}
            </span>
          </div>
        </div>
      </div>
      { product.lim_edition && (<div className='productLimEdAlert'>
        <md-icon>release_alert</md-icon>
        <span>Limited!</span>
      </div>)}
      <md-icon-button className="productFavBtn" toggle disabled>
        <md-icon>favorite</md-icon>
        <svg slot='selected' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
      </md-icon-button>
      <md-divider onClick={() => setProductPageProd([ product.id, productJoints, productDiscounts ])} />
      <div className="productDetailsPrice" onClick={() => setProductPageProd([ product.id, productJoints, productDiscounts ])} >
        {handleLowestPrice()}
        {productDiscounts.length > 0 && <md-icon>percent_discount</md-icon>}
      </div>
      <md-outlined-icon-button className="addToBasketBtn" toggle disabled>
        <md-icon>add_shopping_cart</md-icon>
        <md-icon slot="selected">check</md-icon>
      </md-outlined-icon-button>
    </div>
  )
}

export default ProductGridItem