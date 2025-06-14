import './App.css'
import { Routes, Route  } from 'react-router-dom'
import Nav from './componients/Nav'
import Footer from './componients/Footer'
import About from './componients/About'
import Homepage from './componients/Homepage'
import ContactUs from './componients/contact'
import { useLocation } from 'react-router-dom'
import Account from './componients/Account'
import ProtectedRoute from './componients/ProtectedRoute'
import AccountProfile from './componients/Profile'
import AccountNav from './componients/accountNav'
import Transfer from './componients/Transfer'
import Login from './componients/Login'



function App() {

const location = useLocation()
const shouldShowFooter = !location.pathname.startsWith('/account')

const showAccountNav = location.pathname.startsWith('/account')



  return (
     <>
      {!location.pathname.startsWith('/account') && <Nav />}
      {showAccountNav && <AccountNav />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute> } />
        <Route path='/account/profile' element={<ProtectedRoute><AccountProfile /> </ProtectedRoute>} />
        <Route path='/account/transfer' element={ <ProtectedRoute><Transfer /></ProtectedRoute> } />
        

      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  )
}

export default App




