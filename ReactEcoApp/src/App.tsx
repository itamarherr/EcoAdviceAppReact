import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Register from './routes/Register';
import Login from './routes/Login';
import Posts from './routes/Posts';
import NotFound from './routes/NotFound';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import NoAuthRoute from './components/NoAuthRoute';

const App = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const mode = import.meta.env.VITE_MODE;
  return (
   <>
  <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
    <Route path="/register" element={
      <NoAuthRoute>
        <Register/>
        </NoAuthRoute>
      }/>
    <Route path="/login" element={
       <NoAuthRoute>
       <Login/>
       </NoAuthRoute>
    }/>
    <Route path="/posts" element={
      <ProtectedRoute>
        <Posts/>
        </ProtectedRoute> 
      }/>

    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  );
};

export default App;