import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Service from '../src/Components/Service/Service';
import Partner from '../src/Components/Partner/Partner';
import Support from '../src/Components/Support/Support';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {


  return (
    <>
     <Router>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Partner' element={<Partner/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
        <Footer/>
     </Router>
    </>
  )
}

export default App
