import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import Maps from "./pages/Maps";
import AuthState from './contexts/AuthState';
import Dashboard from './pages/Dashboard';

import BookTicket from './pages/bookTicket';
import { StateContextProvider } from './contexts/ContractContext';
import { Sepolia } from "@thirdweb-dev/chains";


function App() {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
       <AuthState>
        <StateContextProvider>
      <BrowserRouter>

        <div>
          <Routes>
            {/* <Route path="/auth/signin" element={<Signin />}/> */}
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Signin />} />
            <Route path="/login" element={<Signin />} />
            {/* <Route path="/itinerary" element={<Generate />} />
                            <Route path="/" element={<Landing />} /> */}
            <Route path="/dashboard//*" element={<Dashboard />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/bookTicket" element={<BookTicket/>}/>
            {/* <Route path="/transaction" element={<Transaction />} />
            <Route path="/transaction-details/:id" element={<TransactionDetail />} />  */}
          </Routes>
        </div>
      </BrowserRouter>
      </StateContextProvider>
      </AuthState>
    </ThirdwebProvider>
  );
}

export default App;
