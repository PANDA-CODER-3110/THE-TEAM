import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './pages/Login';
import Moviekit from './pages/Moviekit';
import Movies from './pages/Movies';
import Signup from './pages/Signup';
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/signup" element={<Signup/>}/>
        <Route exact path ="/movies" element={<Movies/>}/>
        <Route exact path ="/tv" element={<TVShows/>}/>
        <Route exact path ="/chat" element={<Chat/>}/>
        <Route exact path ="/mylist" element={<UserLiked/>}/>
        <Route exact path ="/" element={<Moviekit/>}/>
      </Routes>
    </BrowserRouter>
  );
}
