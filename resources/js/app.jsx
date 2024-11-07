import './bootstrap';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //追加(ルーター読み込み)

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
);