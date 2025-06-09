import './App.css'
import { Routes, Route  } from 'react-router-dom'
import Nav from './componients/Nav'
import Footer from './componients/Footer'
import About from './componients/About'
import Homepage from './componients/Homepage'
import ContactUs from './componients/contact'


function App() {


  return (
     <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
