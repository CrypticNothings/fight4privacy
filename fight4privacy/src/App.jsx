import Navigation from "./components/NavigationMenu.jsx";
import Footer from "./components/Footer.jsx"
import Hero from "./components/Header.jsx"
import menuBtn from './assets/icon-menu.svg'
import closeBtn from './assets/icon-menu-close.svg'
import facebook from './assets/icon-facebook.svg'
import twitter from './assets/icon-twitter.svg'
import instagram from './assets/icon-instagram.svg'
import pinterest from './assets/icon-pinterest.svg'
import youtube from './assets/icon-youtube.svg'
import data from './data.js'

function App() {
  const image = {  
    facebook,
    twitter,
    instagram,
    pinterest,
    youtube,
    menuBtn,
    closeBtn,
  }
  
  return (
    <>
      <div>
      <Navigation menu={image} />
        <Hero data={data}/>
        <Footer icon={image}/>
      </div>
      
    </>
  )
}

export default App
