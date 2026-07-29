import { useState } from 'react'

function ExploreContainer() {
	
  return (
    <>
      <div id="categoryChipsWraper">
				<md-chip-set id="categoryChips">
					<md-filter-chip label="Sodas">
						<md-icon slot="icon">cleaning</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Chips">
						<md-icon slot="icon">money_bag</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Sweets">
						<md-icon slot="icon">cookie</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Crackers">
						<md-icon slot="icon">pet_supplies</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Fasting">
						<md-icon slot="icon">nutrition</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Grill">
						<md-icon slot="icon">outdoor_grill</md-icon>
					</md-filter-chip>
					<md-filter-chip label="Beverages">
						<md-icon slot="icon">liquor</md-icon>
					</md-filter-chip>
				</md-chip-set>
			</div>
      <div id="pageGridX2">
        <div className="gridItem">
          <img src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
          <md-icon-button className="productFavBtn">
            {/*ADD: toggle disabled*/}
            <md-icon className="material-symbols-outlined">favorite</md-icon>
            <md-icon slot="selected" className="material-symbols-outlined">
              favorite
            </md-icon>
          </md-icon-button>
          <span className="gridProductHeadline">brand nume flavor capacity</span>
          <div>
            <div className="gridProductPrice">
              <span>19</span>
              <sup>99</sup>
              <div>RON</div>
            </div>
            <md-filled-icon-button className="addToBasketBtn">
              {/* ADD: toggle disabled */}
              <md-icon>add_shopping_cart</md-icon>
              <md-icon slot="selected">check</md-icon>
            </md-filled-icon-button>
          </div>
        </div>
        <div className="gridItem">
          <img src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
          <md-icon-button className="productFavBtn">
            {/* ADD: toggle disabled */}
            <md-icon className="material-symbols-outlined">favorite</md-icon>
            <md-icon slot="selected" className="material-symbols-outlined">
              favorite
            </md-icon>
          </md-icon-button>
          <span className="gridProductHeadline">brand nume flavor capacity</span>
          <div>
            <div className="gridProductPrice">
              <span>19</span>
              <sup>99</sup>
              <div>RON</div>
            </div>
            <md-filled-icon-button className="addToBasketBtn">
              {/* ADD: toggle disabled */}
              <md-icon>add_shopping_cart</md-icon>
              <md-icon slot="selected">check</md-icon>
            </md-filled-icon-button>
          </div>
        </div>
        <div className="gridItem">
          <img src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
          <md-icon-button className="productFavBtn">
            {/* ADD: toggle disabled */}
            <md-icon className="material-symbols-outlined">favorite</md-icon>
            <md-icon slot="selected" className="material-symbols-outlined">
              favorite
            </md-icon>
          </md-icon-button>
          <span className="gridProductHeadline">brand nume flavor capacity</span>
          <div>
            <div className="gridProductPrice">
              <span>19</span>
              <sup>99</sup>
              <div>RON</div>
            </div>
            <md-filled-icon-button className="addToBasketBtn">
              {/* ADD: toggle disabled */}
              <md-icon>add_shopping_cart</md-icon>
              <md-icon slot="selected">check</md-icon>
            </md-filled-icon-button>
          </div>
        </div>
        <div className="gridItem">
          <img src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
          <md-icon-button className="productFavBtn">
            {/* ADD: toggle disabled */}
            <md-icon className="material-symbols-outlined">favorite</md-icon>
            <md-icon slot="selected" className="material-symbols-outlined">
              favorite
            </md-icon>
          </md-icon-button>
          <span className="gridProductHeadline">brand nume flavor capacity</span>
          <div>
            <div className="gridProductPrice">
              <span>19</span>
              <sup>99</sup>
              <div>RON</div>
            </div>
            <md-filled-icon-button className="addToBasketBtn">
              {/* ADD: toggle disabled */}
              <md-icon>add_shopping_cart</md-icon>
              <md-icon slot="selected">check</md-icon>
            </md-filled-icon-button>
          </div>
        </div>
        <div className="gridItem">
          <img src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" />
          <md-icon-button className="productFavBtn">
            {"{"}/*ADD: toggle disabled */{"}"}
            <md-icon className="material-symbols-outlined">favorite</md-icon>
            <md-icon slot="selected" className="material-symbols-outlined">
              favorite
            </md-icon>
          </md-icon-button>
          <span className="gridProductHeadline" >
            brand nume flavor capacity
          </span>
          <div>
            <div className="gridProductPrice">
              <span>19</span>
              <sup>99</sup>
              <div>RON</div>
            </div>
            <md-filled-icon-button className="addToBasketBtn">
              {/* ADD: toggle disabled */}
              <md-icon>add_shopping_cart</md-icon>
              <md-icon slot="selected">check</md-icon>
            </md-filled-icon-button>
          </div>
        </div>
      </div>



      <md-dialog id="discardFiltersDialog" type="alert">
        <div slot="headline">
          <md-icon slot="icon">warning</md-icon>
          Filters not applied
        </div>
        {/*<form slot="content" id="form-id" method="dialog">
          Are you sure you want to dismiss the changes?
        </form>
        <div slot="actions" className="actions">
          <md-filled-button form="form-id" value="dismiss">
            Dismiss
          </md-filled-button>
          <md-outlined-button form="form-id" value="cancel">
            <md-icon sot="icon">cancel</md-icon>
            Cancel
          </md-outlined-button>
        </div>*/}
      </md-dialog>
      <md-fab id="searchFAB" className="filtersFabMenuAnimation ">
        /* searchViewWindowAction */
        <md-icon slot="icon">search</md-icon>
      </md-fab>
      <md-fab
        id="filtersConfirmFAB"
        className="filtersFabMenuAnimation filtersFabMenuAction filtersFabAction"
        label="Apply"
      >
        <md-icon slot="icon">check</md-icon>
      </md-fab>
      <md-elevated-button
        id="filtersFAB"
        className="filtersFabAnimation filtersFabAction filtersFabMenuAction filtersFabMenuAnimation"
      >
        <md-icon>tune</md-icon>
      </md-elevated-button>
      <md-icon-button
        id="filtersFabIconBtnClose"
        className="filtersFabMenuAnimation filtersFabMenuAction filtersFabAction"
        toggle=""
      >
        <md-icon>close</md-icon>
      </md-icon-button>
      <div id="filtersFabMenuWraper" className="filtersFabMenuAnimation">
        <md-filled-tonal-button id="filterBrandBtn" trailing-icon="">
          Brand
          <md-icon slot="icon">arrow_drop_down</md-icon>
        </md-filled-tonal-button>
        <md-filled-tonal-button id="filterFlavourBtn" trailing-icon="">
          Flavour
          <md-icon slot="icon">arrow_drop_down</md-icon>
        </md-filled-tonal-button>
        <md-filled-tonal-button trailing-icon="">
          Capacity
          <md-icon slot="icon">arrow_drop_down</md-icon>
        </md-filled-tonal-button>
        <div>
          <div className="filterOrderStack">
            <md-filled-icon-button
              id="filterDefaultOrderPrice"
              toggle=""
              className="filterDefaultOrder"
            >
              <md-icon>height</md-icon>
              <md-icon slot="selected"> </md-icon>
            </md-filled-icon-button>
            <md-filled-tonal-icon-button
              id="filterOrderPrice"
              toggle=""
              className="filterOrder"
            >
              <md-icon>arrow_upward</md-icon>
              <md-icon slot="selected">arrow_downward</md-icon>
            </md-filled-tonal-icon-button>
          </div>
          <md-filled-tonal-button id="filterPriceBtn" trailing-icon="">
            price
            <md-icon slot="icon">arrow_drop_down</md-icon>
          </md-filled-tonal-button>
        </div>
      </div>
      <div>
        <div id="filterBrandMenu" className="filterMenuListsWraper">
          <div className="filterMenuListsHeadline">
            <h2>Brands</h2>
            <md-icon-button className="filterMenuListsClose">
              <md-icon>close</md-icon>
            </md-icon-button>
          </div>
          <md-divider />
          <md-list>
            <md-list-item type="button">
              <label>
                <span>brand</span>
                <md-checkbox value="g" />
              </label>
            </md-list-item>
            <md-list-item type="button">
              <label>
                <span>brand</span>
                <md-checkbox value="hh" />
              </label>
            </md-list-item>
          </md-list>
        </div>
        <div id="filterFlavourMenu" className="filterMenuListsWraper">
          <div className="filterMenuListsHeadline">
            <h2>Flavours</h2>
            <md-icon-button className="filterMenuListsClose">
              <md-icon>close</md-icon>
            </md-icon-button>
          </div>
          <md-divider />
          <md-list>
            <md-list-item type="button">
              <label>
                <span>Flavour</span>
                <md-checkbox value="g" />
              </label>
            </md-list-item>
            <md-list-item type="button">
              <label>
                <span>Flavour</span>
                <md-checkbox value="hh" />
              </label>
            </md-list-item>
          </md-list>
        </div>
        <div id="filterPriceMenu" className="filterMenuListsWraper">
          <div className="filterMenuListsHeadline">
            <h2>Price</h2>
            <md-icon-button className="filterMenuListsClose">
              <md-icon>close</md-icon>
            </md-icon-button>
          </div>
          <md-divider />
          <md-slider
            id="filterPriceSlider"
            range=""
            min={0.0}
            max={20.0}
            value-start={0.0}
            value-end={20.0}
            step="0.01"
            labeled=""
          />
          <div id="filterPriceRanges">
            <div>
              <span style={{ display: "flex", justifyContent: "flex-end" }}>
                Minimum price:
              </span>
              <span>Maximum price:</span>
            </div>
            <div>
              <md-outlined-text-field
                id="filterPriceMin"
                type="number"
                placeholder={0.0}
              />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "xx-large"
                }}
              >
                -
              </span>
              <md-outlined-text-field
                id="filterPriceMax"
                type="number"
                placeholder={20.0}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="filterMenuListsBlur" className="filterMenuListsClose" />
      <div id="filtersFabBlur" className="filtersFabAnimation" />
    </>
  )
}

export default ExploreContainer