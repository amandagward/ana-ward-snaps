import { useState } from "react";
import './App.scss'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'


function App() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <>
      <Header filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
      <MainContent filtersOpen={filtersOpen} />
    </>
  );
}

export default App;