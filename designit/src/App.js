import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Routes>
          <Route path ="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
