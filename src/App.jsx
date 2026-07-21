import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id="navBar">
        <div class="navItem" onclick="window.location.href='./index.html';">
          <div class="navItemIcon active">
            <md-icon class="material-symbols-outlined">explore</md-icon>
          </div>
          <span>Explore</span>
        </div>
        <div class="navItem" onclick="window.location.href='./forme.html';">
          <div class="navItemIcon">
            <md-icon class="material-symbols-outlined">favorite</md-icon>
          </div>
          <span>For me</span>
        </div>
        <div class="navItem" onclick="window.location.href='./cart.html';">
          <div class="navItemIcon">
            <md-icon class="material-symbols-outlined">shopping_cart</md-icon>
          </div>
          <span>Cart</span>
        </div>
        <div class="navItem" onclick="window.location.href='./contribute.html';">
          <div class="navItemIcon">
            <md-icon style="font-size: 28px; width: 28px;" class="material-symbols-outlined">crowdsource</md-icon>
          </div>
          <span>Contribute</span>
        </div>
      </nav>
    </>
  )
}

export default App
