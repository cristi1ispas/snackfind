import { useState } from 'react'

function ContributeContainer() {

  return(
    <>
      <div id="contribute">
				<md-list id="contributeActions">
					<md-list-item type="button" >
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Update a price</div>
						
							<md-icon slot="end">arrow_forward_ios</md-icon>
						
					</md-list-item>
					<md-list-item type="button" >
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Announce a discount</div>
						<md-icon slot="end">arrow_forward_ios</md-icon>
					</md-list-item>
					<md-list-item type="button" disabled>
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Correct a product details</div>
						<md-icon slot="end">arrow_forward_ios</md-icon>
					</md-list-item>
					<md-list-item type="button" disabled>
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Correct a shop page info</div>
						<md-icon slot="end">arrow_forward_ios</md-icon>
					</md-list-item>
					<md-list-item type="button" href="/contact">
						<md-icon slot="start" style="--md-icon-size: 40px">sentiment_sad</md-icon>
						<div slot="headline">For the time being these features are not available in-app, you have to contact me directly</div>
						<md-icon slot="end" style="--md-icon-size: 28px">open_in_new</md-icon>
					</md-list-item>	
					<md-list-item type="button" disabled>
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Sugest a product</div>
						<md-icon slot="end">arrow_forward_ios</md-icon>
					</md-list-item>
					<md-list-item type="button" disabled>
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Suggest a shop</div>
						<md-icon slot="end">arrow_forward_ios</md-icon>
					</md-list-item>
					<md-list-item type="button" >
						<img slot="start" src="https://static.mega-image.ro/medias/sys_master/products/h68/h99/9541402787870.jpg" alt="Image 1" />
						<div slot="headline">Help with the App Development</div>
						<md-icon slot="end" style="--md-icon-size: 28px;">open_in_new</md-icon>
					</md-list-item>
				</md-list>
			</div>
    </>
  )
}

export default ContributeContainer