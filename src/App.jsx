import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import PhotoPage from "./pages/PhotoPage/PhotoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="photo/:id" element={<PhotoPage />} />
    </Routes>
  );
}

export default App;

// test