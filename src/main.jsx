import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@material/web/all.js'
import '@fontsource-variable/roboto/wght.css'
import '@fontsource-variable/roboto/wght-italic.css'

import './styles/style.css'     /* new, curated css */
import './styles/screen.css'
import './styles/exploreScreen.css'
import './styles/search.css'
import './styles/subPageScreen.css'

import './styles/accountCenter.css'
import './styles/topAppBar.css'
import './styles/categoryChips.css'
import './styles/contributeAnounceDiscount.css'
import './styles/contributePage.css'
import './styles/contributeUpdatePrice.css'
import './styles/filtersFAB.css'
import './styles/navBar.css'
import './styles/navDrawer.css'
import './styles/productPage.css'
import './styles/shopPage.css'
import './styles/threeDotMenu.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
