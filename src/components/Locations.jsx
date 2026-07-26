import { useState } from 'react'

function Locations({ isOpen, onClose }) {


	
  return (
    <>
      <md-sub-menu menu-corner="start-start" anchor-corner="end-end">
        <md-menu-item slot="item">
          <div slot="headline">Kusterdingen</div>
          <md-icon slot="end">arrow_drop_down</md-icon>
        </md-menu-item>
        <md-menu slot="menu" has-overflow positioning="popover" x-offset="-40" y-offset="-12">
          <md-menu-item>
            <div slot="headline">Kusterdingen</div>
            <div slot="supporting-text">Shops: 15</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Jettenburg</div>
            <div slot="supporting-text">Shops: 13</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Wankheim</div>
            <div slot="supporting-text">Shops: 9</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Mähringen</div>
            <div slot="supporting-text">Shops: 5</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Immenhausen</div>
            <div slot="supporting-text">Shops: 3</div>
          </md-menu-item>
        </md-menu>
      </md-sub-menu>
      <md-sub-menu menu-corner="start-start" anchor-corner="end-end">
        <md-menu-item slot="item">
          <div slot="headline">Kunszentmiklós</div>
          <md-icon slot="end">arrow_drop_down</md-icon>
        </md-menu-item>
        <md-menu slot="menu" has-overflow positioning="popover" x-offset="-40" y-offset="-12">
          <md-menu-item>
            <div slot="headline">Kunszentmiklós</div>
            <div slot="supporting-text">Shops: 12</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Felsőmocsolád</div>
            <div slot="supporting-text">Shops: 8</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Kisújszállás</div>
            <div slot="supporting-text">Shops: 6</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Szentmiklós</div>
            <div slot="supporting-text">Shops: 3</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Sződliget</div>
            <div slot="supporting-text">Shops: 3</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Tiszakécske</div>
            <div slot="supporting-text">Shops: 0</div>
          </md-menu-item>
        </md-menu>
      </md-sub-menu>
      <md-sub-menu menu-corner="start-start" anchor-corner="end-end">
        <md-menu-item slot="item">
          <div slot="headline">Prahova</div>
          <md-icon slot="end">arrow_drop_down</md-icon>
        </md-menu-item>
        <md-menu slot="menu" has-overflow positioning="popover" x-offset="-40" y-offset="-12">
          <md-menu-item>
            <div slot="headline">Ploiesti</div>
            <div slot="supporting-text">Shops: 56</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Campina</div>
            <div slot="supporting-text">Shops: 23</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Valenii de munte</div>
            <div slot="supporting-text">Shops: 18</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Breaza</div>
            <div slot="supporting-text">Shops: 17</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Blejoi</div>
            <div slot="supporting-text">Shops: 14</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Maneciu</div>
            <div slot="supporting-text">Shops: 10</div>
          </md-menu-item>
        </md-menu>
      </md-sub-menu>
    </>
  )
}
export default Locations