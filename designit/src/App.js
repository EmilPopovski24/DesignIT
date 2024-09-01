import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Client/Login/Login';
import { Register } from './components/Client/Register/Register';
import { Logout } from './components/Client/Logout/Logout';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/client-login" element={<Login />} />
          <Route path="/client-register" element={<Register />} />
          <Route path="/client-logout" element={<Logout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
