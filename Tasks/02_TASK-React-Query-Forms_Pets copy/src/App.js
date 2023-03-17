import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import "./App.css";
import PetsList from "./Components/PetsList";
import { petsData } from "./petsData";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PetsList petsData={petsData} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
