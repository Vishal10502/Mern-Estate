import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserLogout from './pages/UserLogout';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Header from './components/Header';
export default function App () {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<UserLogin/>}/>
        <Route path='/logout' element ={<UserLogout/>}/> 
        <Route path='/profile' element ={<UserProfile/>}/>
        <Route path='/about' element ={<About/>}/>
      </Routes>
      </BrowserRouter>
  )
}
