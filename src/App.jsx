import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePokemonCards from "./pages/CreatePokemonCards";
import NavBar from "./components/Nav/NavBar";
import EditPokemonCard from "./pages/EditPokemonCard";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/create" element={<CreatePokemonCards />} />
        <Route path="/cards/edit/:id" element={<EditPokemonCard />} />
      </Routes>
    </div>
  );
}

export default App;
