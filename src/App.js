import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/general.css'

// pages
import Home from './pages/Home'
import Biography from './pages/Biography'
import Gallery from './pages/Gallery/Gallery'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact'
import AdminGallery from './features/adminDashboard/components/pages/AdminGallery'
import Admin from './pages/Admin'
import GalleryShow from './pages/Gallery/GalleryShow'
import ShopShow from './pages/Shop/ShopShow'
import Basket from './pages/Shop/Basket'
import CheckoutSuccess from './pages/Shop/CheckoutSuccess'
import AdminShop from './features/adminDashboard/components/pages/AdminShop'

//components
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import { BasketProvider } from './features/shop/context/BasketContext'


function App() {
  return (
    <BasketProvider>
      <div className="App">
        <BrowserRouter>
          <Header />

          <div className="pages">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/biography' element={<Biography/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/gallery/:id' element={<GalleryShow/>} />
              <Route path='/shop' element={<Shop/>} />
              <Route path='/basket' element={<Basket/>} />
              <Route path='/shop/:id' element={<ShopShow/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/admin' element={<Admin/>} />
              <Route path='/admin/galleries' element={<AdminGallery/>} />
              <Route path='/admin/products' element={<AdminShop/>} />
              <Route path='/checkout-success' element={<CheckoutSuccess/>} />
            </Routes>
          </div>

          <Footer/>
        </BrowserRouter>
      </div>
    </BasketProvider>
  );
}

export default App;
