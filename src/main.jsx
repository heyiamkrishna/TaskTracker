import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login  from './components/Login.jsx';
import User from './components/User.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard/user' element={<User/>} />
        </Routes>
    
    </Router>
    </AuthProvider>
  </StrictMode>,
)