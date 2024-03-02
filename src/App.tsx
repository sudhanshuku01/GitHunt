import Home from "./components/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Nopage from "./components/Nopage";
import Apploader from "./context/Apploader";

import { useMyContext } from "./context/LoaderContext";

function App() {
  const {isLoading}=useMyContext()
  
  return (
    <>
     { isLoading && <Apploader/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
