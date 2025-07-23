import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Favourites from "../pages/Favourites/Favourites";
import NavBar from '../components/NavBar/NavBar';
import { MovieProvider } from '../contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
