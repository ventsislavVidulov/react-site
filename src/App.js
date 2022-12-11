import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
import CreateJoke from './components/CreateJoke/CreateJoke'
import { AuthContext } from './contexts/AuthContext'
import {JokeContext} from './contexts/JokeContext'
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [auth, setAuth] = useLocalStorage('auth', {});


  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };



  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <Header />
      <JokeContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/create' element={<CreateJoke />} />
        </Routes>
      </JokeContext>
    </AuthContext.Provider>
  );
}

export default App;
