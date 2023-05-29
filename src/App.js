import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// autenticação
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hook/useAuthentication';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

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
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header/>
            <div className='container'>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route
                  path="/login"
                  element={!user ? <Login/> : <Navigate to="/" />}
                />
                <Route
                  path="/register"
                  element={!user ? <Register/> : <Navigate to="/" />}
                />
                <Route
                  path="/posts/create"
                  element={user ? <CreatePost/> : <Navigate to="/login" />}
                />
                <Route
                  path="/dashboard"
                  element={user ? <Dashboard/> : <Navigate to="/login" />}
                />
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
