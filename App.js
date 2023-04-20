import {BrowserRouter,Routes,Route}from 'react-router-dom'
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Addpost from './components/Addpost';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/nav' element={<Navbar/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/addpost' element={<Addpost/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
