import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Electronics from './components/electronics/Electronics';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import Login from './components/login/Login';
import Productdetail from './components/productdetail/Productdetail';
// import Lastproductdetail from './components/productdetail/Lastproductdetail';
// import Footer from './components/footer/Footer';
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/electronics/:id' element={<Productdetail />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App;
