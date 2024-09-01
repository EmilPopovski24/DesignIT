import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path ="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
