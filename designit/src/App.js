import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Client/Login/Login';
import { Register } from './components/Client/Register/Register';
import { Logout } from './components/Client/Logout/Logout';
import { SellerLogin } from './components/Seller/Login/SellerLogin';
import { SellerRegister } from './components/Seller/Register/SellerRegister';
import { SellerLogout } from './components/Seller/Logout/SellerLogout';
import { About } from './components/About/About';
import { OfferRequest } from './components/Client/OfferRequest/OfferRequest';
import * as sellerService from './services/sellerService';
import { AddOffer } from './components/Seller/AddOffer/AddOffer';

function App() {

  const navigate = useNavigate();

  const [offers, setOffers] = useState([]);

  // useEffect(()=>{
  //   sellerService.getAll()
  //     .then(result => {
  //       setOffers(result)
  //     })
  // })

  const OnAddOfferSubmit  = async(offerData, token) => {
    const newOffer = await sellerService.addOffer(offerData, token);
    setOffers(state=>[...state, newOffer]);
    console.log(newOffer)
    navigate("/home")
  }

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/client-login" element={<Login />} />
          <Route path="/client-register" element={<Register />} />
          <Route path="/client-logout" element={<Logout />} />
          <Route path="/offer-request" element={<OfferRequest />} />
          <Route path ="/add-offer" element={<AddOffer OnAddOfferSubmit={OnAddOfferSubmit} />} /> 
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/seller-register" element={<SellerRegister />} />
          <Route path="/seller-logout" element={<SellerLogout />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
