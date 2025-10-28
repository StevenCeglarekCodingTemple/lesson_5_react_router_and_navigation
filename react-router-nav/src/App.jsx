import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import Navigation from './components/Navigation';
import PostView from './components/views/PostView';

function App() {

  return (
    <BrowserRouter>

      <Navigation />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<UserProfile />} />
        <Route path='/posts/:id' element={<PostView />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
