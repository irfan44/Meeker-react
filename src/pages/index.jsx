import React from 'react';
import AppRouter from '../route';
import Navbar from '../components/Navbar';


export default function Main() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}
