import { useState } from 'react';

function CategoryChips({ selectedCategories, setSelectedCategories }) {

  const handleChipClick = (e) => {
    const chipCategory = Number(e.target.dataset.category);
    const isChipSelected = e.target.selected;
    if(isChipSelected) {
      setSelectedCategories([...selectedCategories, chipCategory]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== chipCategory))
    }
  }

  return(
    <div id="categoryChipsWraper">
      <md-chip-set id="categoryChips">
        <md-filter-chip label="Sodas" data-category="1" onClick={handleChipClick}>
          <md-icon slot="icon">cleaning</md-icon>
        </md-filter-chip>
        <md-filter-chip label="Chips" data-category="2" onClick={handleChipClick}>
          <md-icon slot="icon">money_bag</md-icon>
        </md-filter-chip>
        <md-filter-chip label="Sweets" data-category="3" onClick={handleChipClick}>
          <md-icon slot="icon">cookie</md-icon>
        </md-filter-chip>
        <md-filter-chip label="Pastries" data-category="4" onClick={handleChipClick}>
          <md-icon slot="icon">bakery_dining</md-icon>
        </md-filter-chip>
        <md-filter-chip label="Crackers" data-category="5" onClick={handleChipClick}>
          <md-icon slot="icon">pet_supplies</md-icon>
        </md-filter-chip>
        <md-filter-chip label="Grill" data-category="6" onClick={handleChipClick}>
          <md-icon slot="icon">outdoor_grill</md-icon>
        </md-filter-chip>
        <md-filter-chip label="Beverages" data-category="7" onClick={handleChipClick}>
          <md-icon slot="icon">liquor</md-icon>
        </md-filter-chip>
      </md-chip-set>
    </div>
  )
}

export default CategoryChips;