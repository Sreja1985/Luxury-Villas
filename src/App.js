import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Villas from './Pages/Villas';
import Experience from './Pages/Experience';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {Route, Routes, useLocation} from 'react-router-dom';
import { useLayoutEffect } from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scroll(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  return (
    <main className="App">
      <Wrapper>
        <Navbar /> 
        <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/villas' exact element={ <Villas />} />
            <Route path='/experience' exact element={ <Experience /> } />
            <Route path='/about' exact element={ <About /> } />
            <Route path='/contact' exact element={ <Contact /> } />
        </Routes>
        <Footer />
      </Wrapper>
      
    </main>
  );
}

export default App;
