import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Villas from './Pages/Villas';
import Experience from './Pages/Experience';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/villas' element={ <Villas />} />
          <Route path='/experience' element={ <Experience /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <Footer />
      
    </main>
  );
}

export default App;
