import { useState } from "react";

function FiltersFAB() {

  return(
    <>
      <md-elevated-button
        id="filtersFAB"
        className="filtersFabAnimation filtersFabAction filtersFabMenuAction filtersFabMenuAnimation"
      >
        <md-icon>tune</md-icon>
      </md-elevated-button>
      <md-icon-button
        id="filtersFabIconBtnClose"
        className="filtersFabMenuAnimation filtersFabMenuAction filtersFabAction"
        toggle
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
              toggle
              className="filterDefaultOrder"
            >
              <md-icon>height</md-icon>
              <md-icon slot="selected"> </md-icon>
            </md-filled-icon-button>
            <md-filled-tonal-icon-button
              id="filterOrderPrice"
              toggle
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

export default FiltersFAB;