import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import KidFriendly from './Components/KidFriendly';
import Thrillers from './Components/Thrillers';
import BlogSection from './Components/BlogSection';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<LandingPage />} />
        <Route path='/about' element= {<About />} />
        <Route path='/blogs' element={<BlogSection />} />
        <Route path='/thrillers' element={<Thrillers />} />
        <Route path='/kidfriendly' element= {<KidFriendly />} />
      </Routes>
    </>
  );
}

export default App;
