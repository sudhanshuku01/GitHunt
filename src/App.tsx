import Home from "./components/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Nopage from "./components/Nopage";
import Apploader from "./context/Apploader";

import { useMyContext } from "./context/LoaderContext";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const { isLoading } = useMyContext();

  return (
    <>
      {isLoading && <Apploader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
