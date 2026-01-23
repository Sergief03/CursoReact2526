import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

//Import con lazy loading

const Saludo= lazy(() => import('./components/Saludo'));
const About= lazy(() => import('./components/About'));

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200 min-h-[500px]">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saludo/:nombre" element={<Saludo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
