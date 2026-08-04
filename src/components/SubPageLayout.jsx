import { useState } from 'react'

function SubPageLayout({ title, isOpen, onClose, children }) {
	
  return (
    <>
      <div id='subPageScreen' className={` ${isOpen ? 'open' : ''}`}>
        <md-list-item id='subPageRibbon'>
          <md-icon-button slot="start" onClick={onClose} >
            <md-icon>arrow_back</md-icon>
          </md-icon-button>
          <div slot='headline'>{title}</div>
          <md-icon-button slot="end" disabled >
            <md-icon>search</md-icon>
          </md-icon-button>
          <md-icon-button slot="end" disabled>
            <md-icon>sort</md-icon>
          </md-icon-button>
        </md-list-item>
        <div id='subPageContent'>
          {children}
        </div>
      </div>
    </>
  )
}

export default SubPageLayout