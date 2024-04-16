import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllDoctors from './components/AllDoctors';
import Footer from './components/Footer';
import Header from './components/Header';
import DocCard from './components/DocCard';
import MoreDetails from './components/MoreDetails';


function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<AllDoctors/>}/>
          <Route path='/view/:id' element={<MoreDetails/>}/>
          
        </Routes>
      </section>
      <footer>
      <Footer/>
      </footer>
      

    </div>
  );
}

export default App;
