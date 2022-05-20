import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manue from './pages/Shared/Navbar/Manue';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Manue></Manue>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
