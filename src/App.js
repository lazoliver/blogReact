import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hook/useAuthentication';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// components
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header/>
            <div className='container'>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/about" element={<About/>}/>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
