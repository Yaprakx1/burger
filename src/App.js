
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' ;
import Footer from './components/Footer';

import Monu from './pages/Monu';


 import About from './pages/about';
 import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Monu' element={<Monu/>}/>
      
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
