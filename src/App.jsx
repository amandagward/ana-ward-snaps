import { useState } from "react";
import './App.scss'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'


function App() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <>
      <Header filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
      <MainContent filtersOpen={filtersOpen} />
      <Footer />
    </>
  );
}

export default App;