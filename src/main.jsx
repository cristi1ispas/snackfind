import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@material/web/all.js'
import '@fontsource-variable/roboto/wght.css'
import '@fontsource-variable/roboto/wght-italic.css'
import '@fontsource-variable/material-symbols-outlined';

import './accountCenter.css'
import './banner.css'
import './categoryChips.css'
import './contributeAnounceDiscount.css'
import './contributePage.css'
import './contributeUpdatePrice.css'
import './filtersFAB.css'
import './navBar.css'
import './navDrawer.css'
import './page.css'
import './pageGridX2.css'
import './productPage.css'
import './shopPage.css'
import './style.css'
import './threeDotMenu.css'
import './topSearchField.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
