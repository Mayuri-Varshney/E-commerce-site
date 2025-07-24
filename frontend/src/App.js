import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png';
import Chatbot from './Pages/Chat';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/men/upperwear' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/men/innerwear' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner}category="women"/>} />
        <Route path='/women/upperwear' element={<ShopCategory banner={women_banner}category="women"/>} />
        <Route path='/women/innerwear' element={<ShopCategory banner={women_banner}category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
        {/* <Route path='/kid/upperwear' element={<ShopCategory banner={kid_banner} category="kid"/>} />
        <Route path='/kid/innerwear' element={<ShopCategory banner={kid_banner} category="kid"/>} /> */}
        <Route path='/product'  >
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/chat' element={<Chatbot/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
