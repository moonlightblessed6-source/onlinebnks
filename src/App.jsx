import './App.css'
import { Routes, Route  } from 'react-router-dom'
import Nav from './componients/Nav'
import Footer from './componients/Footer'
import About from './componients/About'
import Homepage from './componients/Homepage'
import ContactUs from './componients/contact'
import { useLocation } from 'react-router-dom'
import ProtectedRoute from './componients/ProtectedRoute'
import Login from './componients/Login'
import Personal from './componients/Personal'
import Business from './componients/Business'
import AccountDashbaord from './componients/AccountDashbaord'
import Reouce from './componients/Reouces'
// import Transact from './componients/transact'



function App() {

const location = useLocation()
const shouldShowFooter = !location.pathname.startsWith('/account')

// const showAccountNav = location.pathname.startsWith('/account')



  return (
     <>
      {!location.pathname.startsWith('/account') && <Nav />}
      {/* {showAccountNav && <AccountNav />} */}
      <Routes>
        
        <Route path='/personal' element={<Personal />} />
        <Route path='/business' element={<Business />} />
        <Route path='/rouces' element={<Reouce />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/account/dashboard' element={<ProtectedRoute><AccountDashbaord /></ProtectedRoute>}/>
    

        

      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  )
}

export default App




