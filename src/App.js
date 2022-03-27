import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';
import { Home } from 'components/Home';
import { Footer } from 'components/Footer';
import { MovieDetails } from 'components/MovieDetails';
import { MovieListing } from 'components/MovieListing';
import { PageNotFound } from 'components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
            <Route path='/movies' element={<MovieListing />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
