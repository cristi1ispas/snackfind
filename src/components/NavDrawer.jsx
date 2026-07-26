import { useState } from 'react'

function NavDrawer({ isOpen, onClose }) {


	
  return (
    <>
      <div className={` navDrawerStyle ${isOpen? 'open' : ''}`}>
				<div style={{fontSize: '24px', padding: '24px'}}>project Mushroom</div>
				<md-divider style={{padding: '0'}}></md-divider>
				<md-list>
					
					<md-list-item type="button" className="navDrawerListItem" href="./news.html">
						<md-icon slot="start">newspaper</md-icon>
						<span>News</span>
					</md-list-item>
					
					<md-list-item type="button" className="navDrawerListItem" href="./discounts.html">
						<md-icon slot="start">percent</md-icon>
						<span>Discounts</span>
					</md-list-item>

					<md-list-item type="button" className="navDrawerListItem" href="./shops.html">
						<md-icon slot="start">store</md-icon>
						<span>Shops</span>
					</md-list-item>

					<md-list-item type="button" className="navDrawerListItem" href="./compare.html">
						<md-icon slot="start">compare_arrows</md-icon>
						<span>Compare</span>
					</md-list-item>

					<md-list-item type="button" className="navDrawerListItem" href="./manager.html">
						<md-icon slot="start">engineering</md-icon>
						<span>Manager program</span>
					</md-list-item>

				</md-list>
				<div>fluffy sheep</div>
				
			</div>

			<div id="navDrawerBlur" onClick={onClose} className={` ${isOpen? 'open' : ''}`}></div>
		
    </>
  )
}

export default NavDrawer