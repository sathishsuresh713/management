// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome-4/css/font-awesome.min.css';
import Card from './dashboard/Card';
import Pricing from './dashboard/Pricing';
import Topbar from './dashboard/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Settings from './dashboard/Settings';
// import Profile from './dashboard/Profile';
// import Contact from './dashboard/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar></Topbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
